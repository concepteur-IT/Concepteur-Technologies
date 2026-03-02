import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  company?: string;
  project?: string;
  services?: string[];
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;
    const { name, email, phone, location, company, project, services } = body;

    if (!name || !email || !project) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      );
    }

    const smtpHost = process.env.SMTP_HOST || process.env.MAIL_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || process.env.MAIL_PORT || 587);
    const smtpUser =
      process.env.SMTP_USER ||
      process.env.SMTP_USERNAME ||
      process.env.MAIL_USERNAME;
    const smtpPass = process.env.SMTP_PASS || process.env.MAIL_PASSWORD;
    const smtpEncryption = (
      process.env.SMTP_ENCRYPTION ||
      process.env.MAIL_ENCRYPTION ||
      ""
    ).toLowerCase();
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || smtpUser;

    const secure =
      smtpEncryption === "ssl" ||
      smtpEncryption === "smtps" ||
      smtpPort === 465;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !receiverEmail) {
      return NextResponse.json(
        { error: "Email server is not configured." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure,
      requireTLS: smtpEncryption === "tls",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    console.log("SMTP Ready calling verify...");
    await transporter.verify();

    const selectedServices =
      services && services.length > 0 ? services.join(", ") : "None selected";
    const resolvedPhone = phone || "Not provided";
    const resolvedLocation = location || company || "Not provided";

    const subject = `New Contact Inquiry from ${name}`;
    const text = `
New inquiry received:

Name: ${name}
Email: ${email}
Phone: ${resolvedPhone}
Location: ${resolvedLocation}
Services: ${selectedServices}
Project Description:
${project}
`.trim();

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h2 style="margin-bottom: 12px;">New Contact Inquiry</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
          <tr><td style="padding: 8px; font-weight: 600;">Name</td><td style="padding: 8px;">${name}</td></tr>
          <tr><td style="padding: 8px; font-weight: 600;">Email</td><td style="padding: 8px;">${email}</td></tr>
          <tr><td style="padding: 8px; font-weight: 600;">Phone</td><td style="padding: 8px;">${resolvedPhone}</td></tr>
          <tr><td style="padding: 8px; font-weight: 600;">Location</td><td style="padding: 8px;">${resolvedLocation}</td></tr>
          <tr><td style="padding: 8px; font-weight: 600;">Services</td><td style="padding: 8px;">${selectedServices}</td></tr>
          <tr><td style="padding: 8px; font-weight: 600; vertical-align: top;">Project</td><td style="padding: 8px; white-space: pre-wrap;">${project}</td></tr>
        </table>
      </div>
    `;

    await transporter.sendMail({
      from: `"Contact Form" <${smtpUser}>`,
      to: receiverEmail,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown email transport error";
    console.error("Contact email send failed:", message);

    return NextResponse.json(
      {
        error:
          process.env.NODE_ENV === "development"
            ? `Unable to send inquiry: ${message}`
            : "Unable to send the inquiry right now.",
      },
      { status: 500 },
    );
  }
}
