/**
 * Payment method marks, shown in the footer under the brand block.
 *
 * They used to sit under the hero form. They were moved out because they were
 * the tallest block in that card after the fields and pushed it well past the
 * hero copy beside it, and a footer is where these marks are conventionally
 * read anyway.
 *
 * ⚠️  These are a factual claim: displaying them tells a visitor the client
 * accepts that method. Only show methods the client is genuinely able to
 * take. Every one of these brands restricts use of its mark to parties that
 * actually accept it, and PayPal's merchant agreement and Stripe's brand
 * guidelines both cover logo use specifically. These are hand-drawn
 * approximations, fine for a preview, but replace them with the official
 * assets from each brand centre before the site goes live.
 *
 * Stripe is deliberately absent. It is a payment processor, not a method a
 * customer chooses, so a mark for it beside Visa and Mastercard tells the
 * visitor nothing they can act on. If the client wants the association shown,
 * the convention is a single "Powered by Stripe" line in the footer.
 *
 * Brand colours are hardcoded on purpose. They are brand marks, not part of
 * the site's theme, so they must not follow the design tokens.
 */

import type { ReactNode } from "react";

const VISA_BLUE = "#1a1f71";
const MC_RED = "#eb001b";
const MC_YELLOW = "#f79e1b";
const MC_ORANGE = "#ff5f00";
const AMEX_BLUE = "#006fcf";
const PAYPAL_NAVY = "#003087";
const PAYPAL_BLUE = "#009cde";
const WISE_GREEN = "#9fe870";
const WISE_NAVY = "#163300";

const wordmark = "font-display text-[0.78rem] font-bold leading-none";

/* The mark inside each chip is real text, not an image, so it is left
   readable rather than hidden behind an aria-label on the list item, which
   several screen readers ignore anyway. Only the decorative shapes are
   hidden. */
function Chip({ children }: { children: ReactNode }) {
  return (
    <li className="flex h-7 items-center gap-1.5 rounded-[var(--radius-control)] border border-line bg-surface px-2">
      {children}
    </li>
  );
}

/**
 * Two overlapping circles with the intersection in Mastercard's orange.
 * The lens is an arc path rather than a third circle, because a circle would
 * bulge past the overlap and read as a blob at this size.
 */
function MastercardMark() {
  return (
    <span className="flex items-center gap-1.5">
      <svg viewBox="0 0 32 20" className="h-[15px] w-6 shrink-0" aria-hidden="true">
        <circle cx="11" cy="10" r="9" fill={MC_RED} />
        <circle cx="21" cy="10" r="9" fill={MC_YELLOW} />
        <path d="M16 2.517A9 9 0 0 1 16 17.483A9 9 0 0 1 16 2.517Z" fill={MC_ORANGE} />
      </svg>
      <span className={`${wordmark} text-ink`}>Mastercard</span>
    </span>
  );
}

function AmexMark() {
  return (
    <span
      className="grid h-[17px] shrink-0 place-items-center rounded-[3px] px-1"
      style={{ backgroundColor: AMEX_BLUE }}
    >
      <span className="font-display text-[0.56rem] font-bold leading-none tracking-[0.07em] text-white">
        AMEX
      </span>
    </span>
  );
}

function WiseMark() {
  return (
    <span className="flex items-center gap-1.5">
      <span
        className="grid h-[15px] w-[15px] shrink-0 place-items-center rounded-[4px]"
        style={{ backgroundColor: WISE_GREEN }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 16 16" className="h-[9px] w-[9px]">
          <path d="M2 11.6 8.4 3.6h4.4l-3 4.2h2.6L5.2 15l1.3-4.4H2Z" fill={WISE_NAVY} />
        </svg>
      </span>
      <span className={`${wordmark} -tracking-[0.02em]`} style={{ color: WISE_NAVY }}>
        wise
      </span>
    </span>
  );
}

function BankIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="h-[15px] w-[15px] shrink-0 text-ink-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 7.5 10 3l7.5 4.5" />
      <path d="M4.5 8.5v5.5M8 8.5v5.5M12 8.5v5.5M15.5 8.5v5.5" />
      <path d="M2.5 16.5h15" />
    </svg>
  );
}

export function PaymentMethods() {
  return (
    <>
      {/* The visible "Payment methods accepted" label was removed at the
          client's request, so the row now reads on the marks alone. The
          wording stays as the list's accessible name, otherwise a screen
          reader announces six unconnected brand names with nothing to say
          what they are. */}
      {/* Order runs cards, then wallets, then transfers, so the row reads as
          groups rather than a heap. */}
      {/* No width cap and no centring here, unlike the version that sat under
          the form. In the footer this sits in the narrow brand column, so it
          wraps on the column rather than on a cap, and it is left-aligned to
          line up with the tagline and the email above it. */}
      <ul
        aria-label="Payment methods accepted"
        className="flex flex-wrap items-center gap-1"
      >
        <Chip>
          <span className={`${wordmark} italic tracking-[0.06em]`} style={{ color: VISA_BLUE }}>
            VISA
          </span>
        </Chip>

        <Chip>
          <MastercardMark />
        </Chip>

        <Chip>
          <AmexMark />
        </Chip>

        <Chip>
          <span className={wordmark}>
            <span style={{ color: PAYPAL_NAVY }}>Pay</span>
            <span style={{ color: PAYPAL_BLUE }}>Pal</span>
          </span>
        </Chip>

        <Chip>
          <WiseMark />
        </Chip>

        <Chip>
          <BankIcon />
          <span className="text-[0.74rem] font-medium text-ink-2">Bank transfer</span>
        </Chip>
      </ul>
    </>
  );
}
