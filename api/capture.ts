import type { VercelRequest, VercelResponse } from '@vercel/node';

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email } = req.body ?? {};

  // Server-side validation
  if (!name || typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ message: 'Name is required.' });
  }
  if (!email || typeof email !== 'string' || !isValidEmail(email)) {
    return res.status(400).json({ message: 'A valid email address is required.' });
  }

  // Log the lead (extend this to send via Resend or save to DB)
  console.log('[Lead Capture]', {
    name: name.trim(),
    email: email.trim(),
    timestamp: new Date().toISOString(),
  });

  /*
   * OPTIONAL: Real email via Resend
   * ---------------------------------
   * npm install resend
   * Add RESEND_API_KEY to your Vercel environment variables, then:
   *
   * import { Resend } from 'resend';
   * const resend = new Resend(process.env.RESEND_API_KEY);
   * await resend.emails.send({
   *   from: 'TaskFlow AI <hello@taskflow.ai>',
   *   to: ['your@email.com'],
   *   subject: `New lead: ${name.trim()}`,
   *   text: `Name: ${name.trim()}\nEmail: ${email.trim()}`,
   * });
   */

  return res.status(200).json({ success: true, message: 'Lead captured successfully.' });
}

