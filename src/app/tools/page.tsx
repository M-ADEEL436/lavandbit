import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { tools } from "@/content/tools";

export const metadata: Metadata = {
  title: "Free Trading Calculators | Position Size & Drawdown | Lavandbit",
  description:
    "Free trading calculators for position size, risk to reward and drawdown recovery. No signup, nothing stored, everything runs in your browser.",
  alternates: { canonical: "/tools" },
  openGraph: {
    url: "/tools",
    title: "Free Trading Calculators | Lavandbit",
    description:
      "Position size, risk to reward and drawdown recovery, the three numbers that decide whether an account survives.",
  },
};

const trail = [
  { name: "Home", path: "/" },
  { name: "Tools", path: "/tools" },
];

export default function ToolsHubPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <PageHero
        title="The three numbers that decide whether an account survives"
        sub="Position size, risk to reward, and drawdown. None of them is an entry signal, and all three matter more than one. Everything runs in your browser, nothing is sent anywhere and nothing is stored."
        trail={trail}
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="flex flex-col gap-3 rounded-[var(--radius-card)] border border-line bg-surface p-5 transition-colors hover:border-ink-3"
            >
              <h2 className="text-[1.2rem] leading-snug">{tool.name}</h2>
              <p className="flex-1 text-[0.92rem] leading-relaxed text-ink-2">{tool.intro}</p>
              <span className="mt-1 font-mono text-[0.72rem] tracking-wide text-brand">
                Open calculator →
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <Section tone="muted">
        <div className="grid gap-6 sm:grid-cols-2">
          <RelatedLinks
            heading="Learn the concepts"
            links={[
              { href: "/glossary/position-sizing", label: "Position sizing", note: "How much to risk per trade" },
              { href: "/glossary/drawdown", label: "Drawdown", note: "Peak-to-trough decline, explained" },
              { href: "/glossary/volatility", label: "Volatility", note: "Movement, which is not the same as risk" },
            ]}
          />
          <RelatedLinks
            heading="Go deeper"
            links={[
              { href: "/blog/trading-drawdown-explained", label: "Trading drawdown explained" },
              { href: "/blog/why-trading-bots-lose-money", label: "Why most trading bots lose money" },
              { href: "/blog/ai-trading-guide", label: "AI trading: the complete guide" },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
