import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { getStartedPage } from "@/content/pages";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: getStartedPage.meta.title,
  description: getStartedPage.meta.description,
  alternates: { canonical: "/get-started" },
  openGraph: {
    url: "/get-started",
    title: getStartedPage.meta.title,
    description: getStartedPage.meta.description,
  },
};

const trail = [
  { name: "Home", path: "/" },
  { name: "Get started", path: "/get-started" },
];

export default function GetStartedPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <PageHero
        title={getStartedPage.h1}
        sub={getStartedPage.sub}
        trail={trail}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="flex flex-col gap-8">
            <ul className="flex flex-col gap-5">
              {getStartedPage.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3.5 border-t border-line pt-5">
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[0.98rem] leading-relaxed text-ink-2">{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-[var(--radius-card)] border border-line bg-surface-2 p-5">
              <h2 className="mb-5 text-[1.05rem]">{getStartedPage.objectionHeading}</h2>
              <dl className="flex flex-col gap-5">
                {getStartedPage.objections.map((item) => (
                  <div key={item.title} className="flex flex-col gap-1.5">
                    <dt className="font-semibold text-ink">{item.title}</dt>
                    <dd className="text-[0.92rem] leading-relaxed text-ink-2">{item.body}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5 shadow-lg shadow-black/[0.04]">
              <h2 className="mb-2 text-[1.25rem]">{getStartedPage.formTitle}</h2>
              <p className="mb-6 text-[0.88rem] text-ink-3">
                A person replies within one business day to set up your account.
              </p>
              {/* The page's own "no payment required…" note was dropped with
                  the one on the hero. This form now carries the same consent
                  line as every other, which is the part with a legal job. */}
              <LeadForm />
              <div className="mt-6 border-t border-line pt-5">
                <p className="text-[0.82rem] leading-relaxed text-ink-3">
                  Prefer email? Write to{" "}
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="font-medium text-brand hover:underline"
                  >
                    {site.contact.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section tone="muted">
        <h2 className="mb-8 text-[1.5rem]">{getStartedPage.whatNextHeading}</h2>
        <ol className="flex max-w-3xl flex-col">
          {getStartedPage.whatNext.map((step, i) => (
            <li key={step} className="flex gap-5 border-t border-line py-4 last:border-b">
              <span className="tabular font-mono text-[0.8rem] text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[0.97rem] leading-relaxed text-ink-2">{step}</span>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
