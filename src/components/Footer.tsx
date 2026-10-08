import Link from "next/link";
import { Logo } from "@/components/Logo";
import { PaymentMethods } from "@/components/PaymentMethods";
import { footerNav } from "@/lib/nav";
import { site, riskDisclaimerFull } from "@/content/site";
import { isPlaceholder } from "@/lib/schema";

// Baked into the static HTML at build time, so it re-stamps on each deploy.
const year = new Date().getFullYear();

/* The legal entity and ABN are client-supplied and still outstanding. They are
   printed in two places in the footer, which means an unfilled placeholder
   would have shown on all sixty pages. Both spots stay empty until the client
   supplies the details, then fill themselves in. */
const legalNameReady = !isPlaceholder(site.legalName);

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface-2">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.6fr)] lg:gap-10">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-[0.9rem] leading-relaxed text-ink-3">
              {site.tagline}.
            </p>
            <a
              href={`mailto:${site.contact.email}`}
              className="w-fit text-[0.9rem] font-medium text-brand hover:text-brand-strong"
            >
              {site.contact.email}
            </a>
            {/* Moved here from under the hero form, where they were the
                tallest block in the card. */}
            <div className="pt-1">
              <PaymentMethods />
            </div>
          </div>

          {/* Three columns at every width from sm up, because there are now
              exactly three groups. The old sm:grid-cols-2 left the third
              group stranded on a row of its own between 640px and 1024px. */}
          <div className="grid gap-x-8 gap-y-8 sm:grid-cols-3">
            {footerNav.map((group) => (
              <nav key={group.heading} aria-label={group.heading} className="flex flex-col gap-3">
                <h2 className="eyebrow text-ink-3">{group.heading}</h2>
                <ul className="flex flex-col gap-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[0.9rem] text-ink-2 transition-colors hover:text-brand"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Risk warning. Required on every page that discusses trading. */}
        <div className="mt-8 rounded-[var(--radius-card)] border border-line bg-surface p-5">
          <p className="eyebrow mb-2 text-danger">Risk warning</p>
          <p className="max-w-4xl text-[0.8rem] leading-relaxed text-ink-3">
            {riskDisclaimerFull}
            {legalNameReady ? ` ${site.legalName}.` : ""}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 text-[0.8rem] text-ink-3 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          {legalNameReady && (
            <p className="font-mono text-[0.72rem] tracking-wider text-ink-3">
              {site.legalName}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
