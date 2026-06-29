export default function Hero() {
  const scrollToCapture = () => {
    document.getElementById('email-capture')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          Manage projects without the chaos
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          TaskFlow AI helps teams plan work, track progress, and deliver faster.
        </p>
        <button
          onClick={scrollToCapture}
          className="mt-8 inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700"
        >
          Join Waitlist
        </button>
      </div>
    </section>
  );
}
