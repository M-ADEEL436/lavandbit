import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHead } from "@/components/Section";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, howToSchema } from "@/lib/schema";
import { howItWorksPage } from "@/content/pages";

export const metadata: Metadata = {
  title: howItWorksPage.meta.title,
  description: howItWorksPage.meta.description,
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    url: "/how-it-works",
    title: howItWorksPage.meta.title,
    description: howItWorksPage.meta.description,
  },
};

const trail = [
  { name: "Home", path: "/" },
  { name: "How it works", path: "/how-it-works" },
];

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <JsonLd
        data={howToSchema(
          "How to automate a trading strategy with Lavandbit",
          howItWorksPage.meta.description,
          howItWorksPage.steps,
        )}
      />
      <PageHero
        title={howItWorksPage.h1}
        sub={howItWorksPage.sub}
        trail={trail}
      />
      <Section>
        <ol className="flex flex-col">
          {howItWorksPage.steps.map((step) => (
            <li
              key={step.number}
              className="grid gap-6 border-t border-line py-10 last:border-b lg:grid-cols-[auto_1fr_1fr] lg:gap-10"
            >
              <span className="tabular font-mono text-[0.95rem] font-medium tracking-widest text-brand">
                {step.number}
              </span>
              <div className="flex flex-col gap-3">
                <h2 className="text-[1.3rem]">{step.title}</h2>
                <p className="text-[0.97rem] leading-relaxed text-ink-2">{step.body}</p>
              </div>
              <ul className="flex flex-col gap-2.5">
                {step.detail.map((d) => (
                  <li key={d} className="flex gap-3 text-[0.9rem] leading-relaxed text-ink-2">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                    />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>
      <Section tone="muted">
        <SectionHead
          title={howItWorksPage.afterHeading}
        />
        <ul className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2">
          {howItWorksPage.after.map((item) => (
            <li key={item} className="border-t border-line pt-6 text-[0.97rem] leading-relaxed text-ink-2">
              {item}
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="dark">
        <div className="flex flex-col items-start gap-6">
          <h2 className="max-w-2xl text-h2 text-inverse">
            {howItWorksPage.cta.h2}
          </h2>
          <p className="max-w-xl text-[1.02rem] leading-relaxed text-inverse-2">
            {howItWorksPage.cta.body}
          </p>
          <Cta href="/get-started" size="lg">
            {howItWorksPage.cta.button}
          </Cta>
        </div>
      </Section>
    </>
  );
}
