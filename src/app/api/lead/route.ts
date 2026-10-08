import { NextResponse } from "next/server";
import { site } from "@/content/site";

/**
 * Lead intake endpoint.
 *
 * Configure delivery in .env.local, see .env.local.example.
 *   1. RESEND_API_KEY   → emails the lead to LEAD_NOTIFY_EMAIL (recommended)
 *   2. LEAD_WEBHOOK_URL → POSTs the lead to a CRM / Zapier / Make hook
 * Both can run at once. With neither set, leads are logged to the server
 * console so the form still works end-to-end in development.
 *
 * To use SMTP instead of Resend, replace sendViaResend() with nodemailer
 * using SMTP_HOST / SMTP_USER / SMTP_PASS.
 */

type Payload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  countryCode?: string;
  phone?: string;
  message?: string;
  honeypot?: string;
  elapsedMs?: number;
  variant?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Whitelisted so a crafted request cannot inject arbitrary text into the lead. */
const ALLOWED_COUNTRY_CODES = new Set([
  "+61", "+64", "+44", "+1", "+65", "+91", "+92", "+971",
]);

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const firstName = (body.firstName ?? "").trim();
  const lastName = (body.lastName ?? "").trim();
  /** Joined for the email subject line and for CRMs that keep one field. */
  const name = `${firstName} ${lastName}`.trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const message = (body.message ?? "").trim();
  const variant = body.variant === "contact" ? "contact" : "register";
  const countryCode = ALLOWED_COUNTRY_CODES.has(body.countryCode ?? "")
    ? (body.countryCode as string)
    : "+61";

  // Spam gates: a filled honeypot or an impossibly fast submit is a bot.
  if (body.honeypot) {
    return NextResponse.json({ ok: true }); // pretend success, drop silently
  }
  if (typeof body.elapsedMs === "number" && body.elapsedMs < 1200) {
    return NextResponse.json({ ok: true });
  }

  if (!firstName) {
    return NextResponse.json({ error: "Please enter your first name." }, { status: 400 });
  }
  if (!lastName) {
    return NextResponse.json({ error: "Please enter your last name." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (variant === "register" && phone.replace(/\D/g, "").length < 6) {
    return NextResponse.json(
      { error: "Please enter a phone number we can reach you on." },
      { status: 400 },
    );
  }

  const lead = {
    name,
    /** Captured in their own fields on the form, not derived from a split. */
    firstName,
    lastName,
    email,
    phone: phone ? `${countryCode} ${phone}`.trim() : "",
    countryCode,
    message,
    variant,
    source: variant === "register" ? "Website registration" : "Contact form",
    submittedAt: new Date().toISOString(),
  };

  const delivered: string[] = [];

  const resendKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.LEAD_NOTIFY_EMAIL;
  if (resendKey && notifyEmail) {
    const sent = await sendViaResend(lead, resendKey, notifyEmail);
    if (sent) delivered.push("email");
  }

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    const sent = await sendViaWebhook(lead, webhook);
    if (sent) delivered.push("webhook");
  }

  if (delivered.length === 0) {
    if (process.env.NODE_ENV === "production") {
      console.error(
        "[lead] No delivery channel configured. This lead was NOT stored.",
        lead,
      );
      return NextResponse.json(
        { error: "We could not submit your request right now. Please email us instead." },
        { status: 503 },
      );
    }
    console.info("[lead] Development mode, lead captured locally:\n", lead);
  }

  return NextResponse.json({ ok: true });
}

type Lead = {
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  message: string;
  variant: string;
  source: string;
  submittedAt: string;
};

function leadText(lead: Lead) {
  return [
    `Name:    ${lead.name}`,
    `Email:   ${lead.email}`,
    `Phone:   ${lead.phone || "-"}`,
    `Source:  ${lead.source}`,
    lead.message ? `Message:\n${lead.message}` : null,
    `Time:    ${lead.submittedAt}`,
  ]
    .filter(Boolean)
    .join("\n");
}

async function sendViaResend(lead: Lead, apiKey: string, to: string) {
  const from = process.env.LEAD_FROM_EMAIL ?? `Lavandbit Leads <onboarding@resend.dev>`;
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: lead.email,
        subject: `New ${lead.source.toLowerCase()}, ${lead.name}`,
        text: leadText(lead),
      }),
    });
    if (!res.ok) {
      console.error("[lead] Resend rejected the send:", res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error("[lead] Resend request failed:", err);
    return false;
  }
}

async function sendViaWebhook(lead: Lead, url: string) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lead, site: site.url }),
    });
    if (!res.ok) {
      console.error("[lead] Webhook rejected the lead:", res.status);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[lead] Webhook request failed:", err);
    return false;
  }
}
