// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}
const safe = (s: string) => String(s).replace(/[<>]/g, (m) => ({ "<": "&lt;", ">": "&gt;" }[m] as string));

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }
    if (!isEmail(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ ok: false, error: "Missing RESEND_API_KEY" }, { status: 500 });
    }

    // app/api/contact/route.ts (fragmento)
    const isProd = process.env.NODE_ENV === "production";
    const to = isProd
    ? (process.env.CONTACT_TO || "diegocelaia@outlook.com") // ← en PROD por ahora te lo mandas a ti
    : (process.env.CONTACT_TO || "diegocelaia@outlook.com");
    const from = process.env.RESEND_FROM || "onboarding@resend.dev";


    const resend = new Resend(apiKey);

    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.5;color:#111">
        <h2 style="margin:0 0 8px;color:#1f5bd3">New Contact from Website</h2>
        <p style="margin:0 0 16px;color:#333">You have a new message from the contact form.</p>
        <table style="border-collapse:collapse;width:100%;max-width:640px">
          <tr><td style="padding:6px 0;font-weight:600;width:120px">Name</td><td>${safe(name)}</td></tr>
          <tr><td style="padding:6px 0;font-weight:600">Email</td><td>${safe(email)}</td></tr>
          <tr><td style="padding:6px 0;font-weight:600">Subject</td><td>${safe(subject)}</td></tr>
          <tr><td style="padding:6px 0;font-weight:600;vertical-align:top">Message</td>
              <td style="white-space:pre-wrap">${safe(message)}</td></tr>
        </table>
      </div>
    `;

    const result = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[FastPro Contact] ${subject}`.slice(0, 200),
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html,
    });

    if (result.error) {
      return NextResponse.json({ ok: false, error: result.error.message || "Resend error" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message || "Server error" }, { status: 500 });
  }
}
