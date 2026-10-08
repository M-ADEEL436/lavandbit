import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHead } from "@/components/Section";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, isPlaceholder } from "@/lib/schema";
import { aboutPage } from "@/content/pages";

/* Anything still holding a placeholder is dropped rather than printed. The
   team and the registered facts are client-supplied, and a card reading
   "[Full name]" reads as unfinished to a visitor and to a quality rater.
   Both sections come back on their own the moment real details land. */
const team = aboutPage.team.filter((person) => !isPlaceholder(person.name));
const facts = aboutPage.facts.filter((fact) => !isPlaceholder(fact.value));

export const metadata: Metadata = {
  title: aboutPage.meta.title,
  description: aboutPage.meta.description,
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: aboutPage.meta.title,
    description: aboutPage.meta.description,
  },
};

const trail = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <PageHero
        title={aboutPage.h1}
        sub={aboutPage.sub}
        trail={trail}
      />
      <Section>
        <div className="flex max-w-3xl flex-col gap-5">
          {aboutPage.story.map((para) => (
            <p key={para.slice(0, 40)} className="text-[1.02rem] leading-relaxed text-ink-2">
              {para}
            </p>
          ))}
        </div>
      </Section>
      {team.length > 0 && (
      <Section tone="muted">
        <SectionHead title={aboutPage.teamHeading} />
        <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person) => (
            <div key={person.id} className="flex flex-col gap-3 border-t border-line pt-6">
              <div
                aria-hidden="true"
                className="grid h-14 w-14 place-items-center rounded-full bg-brand-soft font-display text-[1.1rem] font-bold text-brand-strong"
              >
                {person.name.replace(/[[\]]/g, "").charAt(0) || "?"}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[1.02rem]">{person.name}</h3>
                <p className="font-mono text-[0.72rem] tracking-wide text-brand">{person.role}</p>
              </div>
              <p className="text-[0.9rem] leading-relaxed text-ink-2">{person.bio}</p>
            </div>
          ))}
        </div>
      </Section>
      )}
      <Section>
        <div className="flex flex-col gap-8">
          {facts.length > 0 && (
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <SectionHead title={aboutPage.factsHeading} />
              <dl className="divide-y divide-[var(--color-line)] border-y border-line">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6"
                  >
                    <dt className="eyebrow pt-1 text-ink-3">{fact.label}</dt>
                    <dd className="text-[0.95rem] text-ink-2">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
          <div>
            <Cta href="/get-started" size="lg">
              Get Started Free
            </Cta>
          </div>
        </div>
      </Section>
    </>
  );
}
