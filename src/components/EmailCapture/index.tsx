import { useState } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function EmailCapture() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }

    if (!isValidEmail(email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setFormState('loading');

    try {
      const [res] = await Promise.all([
        fetch('/api/capture', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: name.trim(), email: email.trim() }),
        }),
        new Promise((r) => setTimeout(r, 300)),
      ]);

      if (res.ok) {
        setFormState('success');
      } else {
        const data = await res.json().catch(() => ({}));
        if (res.status === 404) {
          setErrorMsg('API route not running locally. Start with: npx vercel dev');
        } else {
          setErrorMsg(data.message ?? 'Something went wrong. Please try again.');
        }
        setFormState('error');
      }
    } catch {
      setErrorMsg('Cannot reach API. Start with: npx vercel dev');
      setFormState('error');
    }
  };

  if (formState === 'success') {
    return (
      <section id="email-capture" className="py-16">
        <div className="max-w-xl mx-auto px-6">
          <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-900">Thank you!</h2>
            <p className="mt-2 text-gray-700">
              We received your details and will contact you at{' '}
              <strong>{email}</strong>.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="email-capture" className="py-16">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">
          Join the waitlist
        </h2>
        <p className="mt-2 text-center text-gray-600">
          Enter your name and email to get product updates.
        </p>

        <form onSubmit={handleSubmit} noValidate className="mt-6 rounded-lg border border-gray-200 bg-white p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Smith"
              disabled={formState === 'loading'}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane@company.com"
              disabled={formState === 'loading'}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
            />
          </div>

          {(formState === 'error' || errorMsg) && (
            <p className="text-sm text-red-600">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={formState === 'loading'}
            className="w-full rounded-md bg-blue-600 px-4 py-2.5 text-white font-medium hover:bg-blue-700 disabled:bg-blue-400"
          >
            {formState === 'loading' ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  );
}
