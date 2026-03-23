import { Resend } from 'resend';

// Netlify Function: /.netlify/functions/send-email
export async function handler(event, _context) {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  // Parse JSON body
  let data = {};
  try {
    data = JSON.parse(event.body || '{}');
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON body' }),
    };
  }

  const { name = '', email = '', phone = '', message = '' } = data;

  if (!name.trim() || !email.trim() || !message.trim()) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing required fields' }),
    };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const toEmail = process.env.CONTACT_TO_EMAIL || 'bartek.pozarycki@gmail.com';
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Mateneza <no-reply@mateneza.com>';

    const result = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `Nowa wiadomość od ${name}`,
      text: `Imię: ${name}\nEmail: ${email}\nTelefon: ${phone || 'Nie podano'}\n\nWiadomość:\n${message}`,
    });

    console.log(result);

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (error) {
    console.error('Resend error', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Email send error' }),
    };
  }
}
