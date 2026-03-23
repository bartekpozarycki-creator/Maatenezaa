import { Resend } from 'resend';

/**
 * Vercel Serverless Function: /api/send-email
 * Expects JSON body { name, email, phone, message }
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name = '', email = '', phone = '', message = '' } = req.body || {};

  if (!name.trim() || !email.trim() || !message.trim()) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const toEmail = process.env.CONTACT_TO_EMAIL || 'bartek.pozarycki@gmail.com';
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Mateneza <no-reply@mateneza.pl>';

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `Nowa wiadomość od ${name}`,
      text: `Imię: ${name}\nEmail: ${email}\nTelefon: ${phone || 'Nie podano'}\n\nWiadomość:\n${message}`,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Resend error', error);
    return res.status(500).json({ error: 'Email send error' });
  }
}
