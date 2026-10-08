import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { glossary } from "@/content/glossary";

export const metadata: Metadata = {
  title: "Investing Glossary | Market & AI Terms | Lavandbit",
  description:
    "Plain-English definitions of the terms that matter when researching markets: drawdown, position sizing, volatility, franking credits, SMSF and more.",
  alternates: { canonical: "/glossary" },
};

const trail = [
  { name: "Home", path: "/" },
  { name: "Glossary", path: "/glossary" },
];

export default function GlossaryHubPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <PageHero
        title="The terms that decide whether an account survives"
        sub="Drawdown, position sizing, overfitting. These are the words that matter more than entry signals, and almost nobody explains them first."
        trail={trail}
      />
      <Section>
        <dl className="grid gap-x-12 gap-y-2 sm:grid-cols-2">
          {glossary.map((term) => (
            <div key={term.slug} className="border-t border-line py-4">
              <dt>
                <Link
                  href={`/glossary/${term.slug}`}
                  className="font-display text-[1.05rem] font-semibold text-ink hover:text-brand"
                >
                  {term.term}
                </Link>
              </dt>
              <dd className="mt-1.5 text-[0.9rem] leading-relaxed text-ink-2">{term.short}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  );
}
