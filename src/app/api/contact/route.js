import { NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body || {};

    const errors = {};

    // Validate Name
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      errors.name = "Please provide your name (at least 2 characters).";
    } else if (name.trim().length > 100) {
      errors.name = "Name must be less than 100 characters.";
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      errors.email = "Please provide a valid email address.";
    }

    // Validate Message
    if (!message || typeof message !== "string" || message.trim().length < 10) {
      errors.message = "Please enter a message of at least 10 characters.";
    } else if (message.trim().length > 3000) {
      errors.message = "Message must be less than 3000 characters.";
    }

    // If validation fails, return 400 Bad Request with field errors
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed. Please correct the fields below.",
          errors,
        },
        { status: 400 }
      );
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    const targetRecipient =
      process.env.CONTACT_EMAIL || "minhasahamod@gmail.com";

    // 1. Try Resend if RESEND_API_KEY is configured
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);

      const fromAddress =
        process.env.RESEND_FROM || "Portfolio Contact <onboarding@resend.dev>";

      const sendResult = await resend.emails.send({
        from: fromAddress,
        to: [targetRecipient],
        replyTo: trimmedEmail,
        subject: `New Portfolio Message from ${trimmedName}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
            <h2 style="color: #0f172a; margin-top: 0; font-size: 20px; border-bottom: 2px solid #38bdf8; padding-bottom: 12px;">
              New Message from Minhas Ahmod's Portfolio
            </h2>
            <div style="margin: 16px 0;">
              <p style="margin: 6px 0; color: #475569; font-size: 14px;"><strong>Sender Name:</strong> ${trimmedName}</p>
              <p style="margin: 6px 0; color: #475569; font-size: 14px;"><strong>Sender Email:</strong> <a href="mailto:${trimmedEmail}" style="color: #2563eb;">${trimmedEmail}</a></p>
              <p style="margin: 6px 0; color: #475569; font-size: 14px;"><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
            </div>
            <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #38bdf8;">
              <h4 style="margin: 0 0 8px 0; color: #0f172a; font-size: 14px;">Message Content:</h4>
              <p style="margin: 0; color: #334155; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${trimmedMessage}</p>
            </div>
            <p style="margin-top: 24px; font-size: 12px; color: #94a3b8; text-align: center;">
              Sent from Minhas Ahmod Portfolio Contact Form
            </p>
          </div>
        `,
      });

      if (sendResult.error) {
        console.error("Resend delivery error:", sendResult.error);
        return NextResponse.json(
          {
            success: false,
            error: "Failed to deliver email through Resend. Please try again or reach out directly.",
          },
          { status: 500 }
        );
      }

      return NextResponse.json(
        {
          success: true,
          message: "Thank you! Your message has been sent successfully.",
        },
        { status: 200 }
      );
    }

    // 2. Try Nodemailer if SMTP credentials are provided
    if (process.env.SMTP_HOST && process.env.SMTP_USER) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: Boolean(process.env.SMTP_SECURE === "true"),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"${trimmedName}" <${process.env.SMTP_USER}>`,
        to: targetRecipient,
        replyTo: trimmedEmail,
        subject: `New Portfolio Message from ${trimmedName}`,
        text: `From: ${trimmedName} (${trimmedEmail})\n\n${trimmedMessage}`,
      });

      return NextResponse.json(
        {
          success: true,
          message: "Thank you! Your message has been sent successfully.",
        },
        { status: 200 }
      );
    }

    // 3. Fallback for Development/Testing without API keys set
    console.log("=========================================");
    console.log("📨 [CONTACT FORM SUBMISSION RECEIVED]");
    console.log(`From: ${trimmedName} <${trimmedEmail}>`);
    console.log(`To: ${targetRecipient}`);
    console.log(`Message: ${trimmedMessage}`);
    console.log("ℹ️ To deliver live emails, set RESEND_API_KEY in .env.local");
    console.log("=========================================");

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you, your message has been received! (Delivered in dev mode; configure RESEND_API_KEY in .env.local for production email sending).",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request. Please try again later.",
      },
      { status: 500 }
    );
  }
}
