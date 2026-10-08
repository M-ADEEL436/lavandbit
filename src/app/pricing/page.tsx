import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHead } from "@/components/Section";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, isPlaceholder } from "@/lib/schema";
import { pricingPage } from "@/content/pages";

/* Plans and plan features still holding a placeholder are dropped rather than
   printed, so the page never shows "[Plan name]" or "[$XX]" to a visitor. The
   grid collapses to one column when only the free tier survives. Everything
   here returns on its own once the client supplies real pricing. */
const plans = pricingPage.plans
  .filter((plan) => !isPlaceholder(plan.name) && !isPlaceholder(plan.price))
  .map((plan) => ({
    ...plan,
    features: plan.features.filter((feature) => !isPlaceholder(feature)),
  }));

export const metadata: Metadata = {
  title: pricingPage.meta.title,
  description: pricingPage.meta.description,
  alternates: { canonical: "/pricing" },
  openGraph: {
    url: "/pricing",
    title: pricingPage.meta.title,
    description: pricingPage.meta.description,
  },
};

const trail = [
  { name: "Home", path: "/" },
  { name: "Pricing", path: "/pricing" },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <JsonLd data={faqSchema(pricingPage.faq)} />
      <PageHero
        title={pricingPage.h1}
        sub={pricingPage.sub}
        trail={trail}
      />
      <Section>
        <div
          className={`grid gap-6 ${
            plans.length === 1 ? "max-w-md" : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col gap-6 rounded-[var(--radius-card)] border p-5 ${
                plan.featured
                  ? "border-brand bg-surface shadow-lg shadow-brand/10"
                  : "border-line bg-surface"
              }`}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-[1.1rem]">{plan.name}</h2>
                  {plan.featured && (
                    <span className="eyebrow rounded-full bg-brand-soft px-2.5 py-1 text-brand-strong">
                      Most popular
                    </span>
                  )}
                </div>
                <p className="tabular flex items-baseline gap-2">
                  <span className="font-display text-[2rem] font-bold leading-none text-ink">
                    {plan.price}
                  </span>
                  <span className="text-[0.85rem] text-ink-3">{plan.period}</span>
                </p>
                <p className="text-[0.9rem] leading-relaxed text-ink-2">{plan.summary}</p>
              </div>
              <ul className="flex flex-1 flex-col gap-2.5 border-t border-line pt-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-[0.9rem] leading-relaxed text-ink-2">
                    <svg
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 shrink-0 text-brand"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/get-started"
                className={`inline-flex items-center justify-center rounded-[var(--radius-control)] px-5 py-3 text-[0.9rem] font-semibold transition-colors ${
                  plan.featured
                    ? "bg-brand text-white hover:bg-brand-strong"
                    : "border border-line bg-surface text-ink hover:bg-surface-2"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-[var(--radius-card)] border border-line bg-surface-2 p-5">
          <h2 className="mb-5 text-[1.05rem]">{pricingPage.includedHeading}</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {pricingPage.included.map((item) => (
              <li key={item} className="flex gap-3 text-[0.9rem] leading-relaxed text-ink-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <Section tone="muted">
        <SectionHead title={pricingPage.faqHeading} />
        <div className="mt-8 max-w-4xl">
          <FaqAccordion items={pricingPage.faq} defaultOpen={null} />
        </div>
      </Section>
    </>
  );
}
