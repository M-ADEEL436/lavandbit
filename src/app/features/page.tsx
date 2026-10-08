import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { featuresPage } from "@/content/pages";

export const metadata: Metadata = {
  title: featuresPage.meta.title,
  description: featuresPage.meta.description,
  alternates: { canonical: "/features" },
  openGraph: {
    url: "/features",
    title: featuresPage.meta.title,
    description: featuresPage.meta.description,
  },
};

const trail = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
];

export default function FeaturesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <PageHero
        title={featuresPage.h1}
        sub={featuresPage.sub}
        trail={trail}
      />
      <Section>
        <div className="flex flex-col gap-10 lg:gap-20">
          {featuresPage.groups.map((group) => (
            <article
              key={group.title}
              className="grid gap-8 border-t border-line pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10"
            >
              <div className="flex flex-col gap-4">
                <h2 className="text-[1.35rem]">{group.title}</h2>
                <p className="rounded-[var(--radius-control)] border-l-2 border-signal bg-signal-soft px-4 py-3 text-[0.9rem] leading-relaxed text-ink-2">
                  <span className="font-semibold text-ink">The problem it removes: </span>
                  {group.problem}
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-[1rem] leading-relaxed text-ink-2">{group.body}</p>
                <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {group.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[0.9rem] leading-relaxed text-ink-2">
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
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="dark">
        <div className="flex flex-col items-start gap-6">
          <h2 className="max-w-2xl text-h2 text-inverse">
            {featuresPage.cta.h2}
          </h2>
          <p className="max-w-xl text-[1.02rem] leading-relaxed text-inverse-2">
            {featuresPage.cta.body}
          </p>
          <Cta href="/get-started" size="lg">
            {featuresPage.cta.button}
          </Cta>
        </div>
      </Section>
    </>
  );
}
