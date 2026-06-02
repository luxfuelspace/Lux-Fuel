import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const RECIPIENT = 'victor@luxfuel.space';
const SENDER    = 'LuxFuel Contact <noreply@luxfuel.space>';

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(str: string): string {
  return str.trim().slice(0, 2000);
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set');
    return NextResponse.json({ error: 'Email service not configured.' }, { status: 503 });
  }
  const resend = new Resend(apiKey);

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { name, email, message } = body as Record<string, unknown>;

  // Server-side validation
  if (!name || typeof name !== 'string' || name.trim().length < 1) {
    return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
  }
  if (!email || typeof email !== 'string' || !isValidEmail(email)) {
    return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
  }
  if (!message || typeof message !== 'string' || message.trim().length < 1) {
    return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
  }

  const safeName    = sanitize(name as string);
  const safeEmail   = sanitize(email as string);
  const safeMessage = sanitize(message as string);

  try {
    await resend.emails.send({
      from:    SENDER,
      to:      RECIPIENT,
      replyTo: safeEmail,
      subject: `New contact from ${safeName}`,
      text: [
        `Name:    ${safeName}`,
        `Email:   ${safeEmail}`,
        ``,
        `Message:`,
        safeMessage,
      ].join('\n'),
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0a0e16;color:#fff;border-radius:12px;">
          <p style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#e63946;margin:0 0 8px;">New Contact</p>
          <h2 style="margin:0 0 24px;font-size:22px;font-weight:500;">Message from ${safeName}</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr><td style="padding:8px 0;color:#a8b0c0;font-size:13px;width:80px;">Name</td><td style="padding:8px 0;font-size:15px;">${safeName}</td></tr>
            <tr><td style="padding:8px 0;color:#a8b0c0;font-size:13px;">Email</td><td style="padding:8px 0;font-size:15px;"><a href="mailto:${safeEmail}" style="color:#3a8fd9;">${safeEmail}</a></td></tr>
          </table>
          <div style="border-top:1px solid #1a1f2c;padding-top:24px;">
            <p style="color:#a8b0c0;font-size:11px;text-transform:uppercase;letter-spacing:0.2em;margin:0 0 12px;">Message</p>
            <p style="font-size:15px;line-height:1.65;white-space:pre-wrap;">${safeMessage}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact] email send failed:', err);
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
  }
}
