import type { Metadata } from "next";
import { Section, SectionHead } from "@/components/Section";
import { Cta } from "@/components/Cta";
import { ConversionTracker } from "@/components/ConversionTracker";
import { thankYouPage } from "@/content/pages";
import { site } from "@/content/site";

/** Conversion endpoint, keep it out of the index. */
export const metadata: Metadata = {
  title: thankYouPage.meta.title,
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <ConversionTracker source="website-form" />
      <section className="border-b border-line bg-canvas py-20 sm:py-28">
        <div className="container-page flex max-w-3xl flex-col items-start gap-6">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-soft">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 text-brand"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <path d="M5 12.5l4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <h1 className="text-h2">{thankYouPage.h1}</h1>
          <p className="max-w-xl text-[1.05rem] leading-relaxed text-ink-2">
            {thankYouPage.sub}
          </p>
        </div>
      </section>
      <Section>
        <SectionHead title={thankYouPage.heading} />
        <ol className="mt-8 flex max-w-3xl flex-col">
          {thankYouPage.steps.map((step, i) => (
            <li key={step} className="flex gap-5 border-t border-line py-4 last:border-b">
              <span className="tabular font-mono text-[0.8rem] text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[0.97rem] leading-relaxed text-ink-2">{step}</span>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-xl text-[0.88rem] text-ink-3">{thankYouPage.note}</p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Cta href="/how-it-works" variant="secondary" size="lg">
            How it works
          </Cta>
          <a
            href={`mailto:${site.contact.email}`}
            className="text-[0.9rem] font-medium text-brand hover:underline"
          >
            {site.contact.email}
          </a>
        </div>
      </Section>
    </>
  );
}
