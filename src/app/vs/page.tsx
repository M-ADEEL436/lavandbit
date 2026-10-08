import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { competitors } from "@/content/competitors";

export const metadata: Metadata = {
  title: "Compare Research Approaches | Lavandbit",
  description:
    "How AI-assisted research compares with doing it yourself, following stock tips, robo-advice and prediction tools, and where each one is genuinely better.",
  alternates: { canonical: "/vs" },
};

const trail = [
  { name: "Home", path: "/" },
  { name: "Compare", path: "/vs" },
];

export default function CompareHubPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <PageHero
        title="Automation is not better at everything. Here is where it is."
        sub="Each comparison names what the alternative does genuinely better, because a comparison that only goes one way is an advertisement, not a comparison."
        trail={trail}
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {competitors.map((c) => (
            <Link
              key={c.slug}
              href={`/vs/${c.slug}`}
              className="flex flex-col gap-3 rounded-[var(--radius-card)] border border-line bg-surface p-5 transition-colors hover:border-ink-3"
            >
              <h2 className="text-[1.2rem] leading-snug">Lavandbit vs {c.name}</h2>
              <p className="text-[0.92rem] leading-relaxed text-ink-2">{c.intro}</p>
              <span className="mt-1 font-mono text-[0.72rem] tracking-wide text-brand">
                Read the comparison →
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
