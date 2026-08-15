import { NextResponse } from "next/server";
import { Resend } from "resend";
import { validateContactForm, looksLikeSpam, type ContactFormData } from "@/lib/validation";
import { buildNotificationEmail, buildConfirmationEmail } from "@/lib/email";
import { CONTACT_EMAIL } from "@/lib/constants";

export const runtime = "nodejs";

function sanitize(input: unknown): string {
  return typeof input === "string" ? input.trim().slice(0, 4000) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body." }, { status: 400 });
  }

  const data: ContactFormData = {
    name: sanitize(body.name),
    email: sanitize(body.email),
    company: sanitize(body.company),
    title: sanitize(body.title),
    stage: sanitize(body.stage),
    industry: sanitize(body.industry),
    openRoles: sanitize(body.openRoles),
    hiringFor: sanitize(body.hiringFor),
    supportType: sanitize(body.supportType),
    message: sanitize(body.message),
    website: sanitize(body.website),
    renderedAt: typeof body.renderedAt === "number" ? body.renderedAt : undefined,
  };

  // Spam: honeypot filled, or submitted faster than a human plausibly could.
  if (looksLikeSpam(data)) {
    // Respond as if successful so bots don't learn the honeypot was tripped.
    return NextResponse.json({ success: true });
  }

  const { valid, errors } = validateContactForm(data);
  if (!valid) {
    return NextResponse.json({ success: false, errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured — contact form cannot send email.");
    return NextResponse.json(
      { success: false, error: "Email is not configured on the server yet." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const fromAddress = process.env.RESEND_FROM_EMAIL || "Just Genius <onboarding@resend.dev>";

  try {
    // The internal notification is the actual lead delivery — if this fails, the
    // submission did not reach Just Genius, so the request must fail loudly.
    // (The Resend SDK returns { data, error } rather than throwing on API errors.)
    const notification = buildNotificationEmail(data);
    const { error: notificationError } = await resend.emails.send({
      from: fromAddress,
      to: CONTACT_EMAIL,
      replyTo: data.email,
      subject: notification.subject,
      html: notification.html,
    });

    if (notificationError) {
      console.error("Failed to send lead notification email:", notificationError);
      return NextResponse.json(
        { success: false, error: "Something went wrong sending your message. Please try again." },
        { status: 502 }
      );
    }

    // The confirmation email is a courtesy — the lead is already captured above,
    // so a failure here is logged but doesn't fail the whole submission.
    const confirmation = buildConfirmationEmail(data);
    const { error: confirmationError } = await resend.emails.send({
      from: fromAddress,
      to: data.email,
      subject: confirmation.subject,
      html: confirmation.html,
    });
    if (confirmationError) {
      console.error("Failed to send prospect confirmation email:", confirmationError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong sending your message. Please try again." },
      { status: 502 }
    );
  }
}
