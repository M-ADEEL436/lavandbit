"use client";

import { useEffect, useRef, useState, type ReactNode, type SubmitEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Variant = "register" | "contact";

type Errors = Partial<
  Record<"firstName" | "lastName" | "email" | "phone" | "message", string>
>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Country codes. Australia first and the default. This site is built for
 * Australian investors, and a form that opens on the wrong country code is a
 * fast way to look like it was built somewhere else entirely.
 */
const COUNTRY_CODES = [
  { value: "+61", label: "AU +61", flag: "au" },
  { value: "+64", label: "NZ +64", flag: "nz" },
  { value: "+44", label: "UK +44", flag: "gb" },
  { value: "+1", label: "US/CA +1", flag: "us" },
  { value: "+65", label: "SG +65", flag: "sg" },
  { value: "+91", label: "IN +91", flag: "in" },
  { value: "+92", label: "PK +92", flag: "pk" },
  { value: "+971", label: "AE +971", flag: "ae" },
] as const;

const DEFAULT_COUNTRY = "+61";

/**
 * Flag images rather than emoji.
 *
 * Windows does not render regional-indicator flag emoji at all, it shows the
 * two letter code instead, so an emoji flag would look broken for a large
 * share of visitors. A native select cannot contain images either, so the flag
 * sits beside the select and reflects whatever is currently chosen.
 */
function flagUrl(code: string) {
  return `https://flagcdn.com/w40/${code}.png`;
}

/**
 * Three fields on the registration form: name, email, phone.
 *
 * First and last name were split out to match a registration system, then
 * merged back deliberately, each extra field costs roughly a tenth of the
 * submissions, and the API splits the full name server-side for any CRM that
 * needs the parts.
 */
/** Underlined so the links are visible in a line of small grey text, where a
 *  colour shift alone would not read as a link. */
function ConsentLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="font-medium text-ink-2 underline underline-offset-2 hover:text-brand">
      {children}
    </Link>
  );
}

export function LeadForm({
  variant = "register",
  submitLabel = "Create Your Account",
  note,
  footer,
}: {
  variant?: Variant;
  submitLabel?: string;
  /** ReactNode rather than string so the default consent line can carry links
   *  to the three legal pages. */
  note?: ReactNode;
  /** Replaces the note line under the button outright. Used where the space
   *  under the button needs to carry something other than a sentence, such as
   *  the payment method marks on the homepage hero. */
  footer?: ReactNode;
}) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [country, setCountry] = useState<string>(DEFAULT_COUNTRY);
  const selected = COUNTRY_CODES.find((c) => c.value === country) ?? COUNTRY_CODES[0];

  // Set on mount rather than during render, Next.js refuses a render-time
  // clock read, and this correctly measures time-on-form for the bot check.
  const openedAt = useRef(0);
  useEffect(() => {
    openedAt.current = Date.now();
  }, []);

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerError(null);

    const data = new FormData(event.currentTarget);
    const values = {
      firstName: String(data.get("firstName") ?? "").trim(),
      lastName: String(data.get("lastName") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      countryCode: String(data.get("countryCode") ?? "+61"),
      phone: String(data.get("phone") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      honeypot: String(data.get("company_website") ?? ""),
      elapsedMs: openedAt.current === 0 ? 5000 : Date.now() - openedAt.current,
      variant,
    };

    const next: Errors = {};
    /* "Required" rather than a full sentence. Each message sits under its own
       box, and in a two-up row that box is about 150px on a phone, where
       "Please enter your first name" would wrap to three lines and shove the
       rest of the form down. */
    if (values.firstName.length < 1) next.firstName = "Required";
    if (values.lastName.length < 1) next.lastName = "Required";
    if (!EMAIL_RE.test(values.email)) next.email = "Please enter a valid email address.";
    if (values.phone.replace(/\D/g, "").length < 6) {
      next.phone = "Please enter a phone number we can reach you on.";
    }
    if (variant === "contact" && values.message.length < 10) {
      next.message = "Please tell us a little more so we can help.";
    }

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setServerError(json.error ?? "Something went wrong. Please try again.");
        return;
      }
      router.push("/thank-you");
    } catch {
      setStatus("error");
      setServerError("We could not reach the server. Please check your connection and try again.");
    }
  }

  const error = (key: keyof Errors) =>
    errors[key] ? (
      <p id={`${key}-error`} className="mt-1.5 text-[0.78rem] font-medium text-danger">
        {errors[key]}
      </p>
    ) : null;

  /* Taller on phones, tighter from sm up. On a phone a field is a tap target
     and wants the extra height; on desktop it is a mouse target and the space
     is needed to keep the card close to the height of the text beside it. */
  /* Tight from sm up, roomier on a phone. On a phone a field is a tap target
     and wants the height; on desktop it is a mouse target and every pixel of
     the card is height the visitor has to scan past. */
  const inputClass = (key: keyof Errors) =>
    `w-full rounded-[var(--radius-control)] border bg-surface px-3 py-2.5 text-[0.92rem] text-ink placeholder:text-ink-3 transition-colors sm:py-2 ${
      errors[key] ? "border-danger" : "border-line focus:border-brand"
    }`;

  /* leading-none rather than the inherited 1.5. A label is one short word,
     and at 1.5 it carried 6.4px of empty leading per field, three times over.
     mb-1 puts that space back as an actual gap. */
  const labelClass = "mb-1 block text-[0.8rem] font-semibold leading-none text-ink";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3.5">
      {/* First and last name share one row. They were a single "Full name"
          field before, and the API split it; two boxes means the parts are
          captured as typed rather than guessed from a space. Each box is
          about 150px on a phone, which is why the labels are the short forms
          and the placeholders are single words. */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="lf-first-name" className={labelClass}>
            First name
          </label>
          <input
            id="lf-first-name"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
            className={inputClass("firstName")}
            placeholder="Jane"
          />
          {error("firstName")}
        </div>
        <div>
          <label htmlFor="lf-last-name" className={labelClass}>
            Last name
          </label>
          <input
            id="lf-last-name"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            aria-invalid={Boolean(errors.lastName)}
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
            className={inputClass("lastName")}
            placeholder="Trader"
          />
          {error("lastName")}
        </div>
      </div>

      <div>
        <label htmlFor="lf-email" className={labelClass}>
          Email
        </label>
        <input
          id="lf-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={inputClass("email")}
          placeholder="you@example.com"
        />
        {error("email")}
      </div>

      <div>
        <label htmlFor="lf-phone" className={labelClass}>
          Phone
          {variant === "contact" && <span className="font-normal text-ink-3"> (optional)</span>}
        </label>
        <div
          className={`flex items-stretch overflow-hidden rounded-[var(--radius-control)] border bg-surface focus-within:border-brand ${
            errors.phone ? "border-danger" : "border-line"
          }`}
        >
          <span
            aria-hidden="true"
            className="grid place-items-center border-r border-line bg-surface-2 pl-2.5 pr-1.5"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={flagUrl(selected.flag)}
              alt=""
              width={20}
              height={15}
              loading="lazy"
              className="h-[15px] w-5 rounded-[2px] object-cover"
            />
          </span>
          <select
            name="countryCode"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            aria-label="Country calling code"
            className="border-r border-line bg-surface-2 py-2.5 pl-1.5 pr-1 font-mono text-[0.78rem] text-ink-2 outline-none sm:py-2"
          >
            {COUNTRY_CODES.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
          <input
            id="lf-phone"
            name="phone"
            type="tel"
            autoComplete="tel-national"
            required={variant === "register"}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className="tabular w-full bg-transparent px-3 py-2.5 text-[0.92rem] text-ink outline-none placeholder:text-ink-3 sm:py-2"
            placeholder="400 000 000"
          />
        </div>
        {error("phone")}
      </div>

      {variant === "contact" && (
        <div>
          <label htmlFor="lf-message" className={labelClass}>
            How can we help?
          </label>
          <textarea
            id="lf-message"
            name="message"
            rows={5}
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${inputClass("message")} resize-y`}
            placeholder="Tell us what you follow and what you are trying to solve."
          />
          {error("message")}
        </div>
      )}

      {/* Honeypot: hidden from people, irresistible to bots. */}
      <div aria-hidden="true" className="absolute h-0 w-0 overflow-hidden opacity-0">
        <label htmlFor="lf-company">Company website</label>
        <input id="lf-company" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-0.5 inline-flex items-center justify-center gap-2 rounded-[var(--radius-control)] bg-brand px-5 py-2.5 text-[0.92rem] font-semibold text-white transition-colors hover:bg-brand-strong disabled:cursor-not-allowed disabled:opacity-60 sm:py-2"
      >
        {status === "sending" ? "Sending…" : submitLabel}
      </button>

      {serverError && (
        <p
          role="alert"
          className="rounded-[var(--radius-control)] bg-danger-soft px-3.5 py-3 text-[0.85rem] font-medium text-danger"
        >
          {serverError}
        </p>
      )}

      {/* Consent line, not a reassurance line. It replaced "No payment
          required to register…", which was doing conversion work but said
          nothing about what the visitor is agreeing to. Links open in the same
          tab, which is the convention for terms links in a form and is what
          the visitor expects. */}
      {footer ?? (
        <p className="text-[0.76rem] leading-snug text-ink-3">
          {note ?? (
            <>
              By submitting this form, you agree to our{" "}
              <ConsentLink href="/terms">Terms &amp; Conditions</ConsentLink>,{" "}
              <ConsentLink href="/privacy-policy">Privacy Policy</ConsentLink> and{" "}
              <ConsentLink href="/risk-disclaimer">Risk Disclaimer</ConsentLink>.
            </>
          )}
        </p>
      )}
    </form>
  );
}
