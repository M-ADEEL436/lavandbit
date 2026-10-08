import type { ReactNode } from "react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Blocks } from "@/components/Blocks";
import { FaqAccordion } from "@/components/FaqAccordion";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { tools, type Tool } from "@/content/tools";

/**
 * Shared frame for a calculator page: hero, the tool itself, usage steps,
 * explanatory content, FAQ and a CTA tied to what the tool just showed.
 */
export function ToolLayout({
  tool,
  calculator,
  trail,
}: {
  tool: Tool;
  calculator: ReactNode;
  trail: readonly { name: string; path: string }[];
}) {
  const others = tools.filter((t) => t.slug !== tool.slug);

  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <JsonLd data={faqSchema(tool.faq)} />

      <header className="border-b border-line bg-canvas py-12 sm:py-16">
        <div className="container-page flex flex-col gap-5">
          <Breadcrumbs trail={trail} />
          <h1 className="max-w-4xl text-h2">{tool.h1}</h1>
          <p className="max-w-2xl text-[1.05rem] leading-relaxed text-ink-2">{tool.intro}</p>
        </div>
      </header>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-10">
          <div className="flex min-w-0 flex-col gap-10">
            {calculator}

            <section className="flex flex-col gap-6">
              <h2 className="text-[1.5rem]">How to use it</h2>
              <ol className="flex flex-col">
                {tool.howToUse.map((step, i) => (
                  <li key={step.title} className="flex gap-5 border-t border-line py-4 last:border-b">
                    <span className="tabular mt-0.5 font-mono text-[0.8rem] text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-[1.02rem] leading-snug">{step.title}</h3>
                      <p className="text-[0.93rem] leading-relaxed text-ink-2">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <Blocks blocks={tool.body} />

            <section className="flex flex-col gap-6">
              <h2 className="text-[1.5rem]">Common questions</h2>
              <FaqAccordion items={tool.faq} defaultOpen={null} />
            </section>

            <div className="rounded-[var(--radius-card)] border border-line bg-surface-2 p-5">
              <p className="text-[0.82rem] leading-relaxed text-ink-3">
                These calculators are educational tools, not investment advice.
                Trading financial instruments carries a high risk of losing your
                capital. See our{" "}
                <Link href="/risk-disclaimer" className="font-medium text-brand hover:underline">
                  risk disclaimer
                </Link>
                .
              </p>
            </div>
          </div>

          <aside className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[var(--radius-card)] border border-ink-panel-line bg-ink-panel p-5">
              <p className="font-display text-[1.1rem] font-bold text-inverse">
                {tool.cta.title}
              </p>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-inverse-2">{tool.cta.text}</p>
              <Cta href="/get-started" className="mt-5 w-full">
                {tool.cta.button}
              </Cta>
            </div>

            <RelatedLinks
              heading="Other calculators"
              links={others.map((o) => ({ href: `/tools/${o.slug}`, label: o.name }))}
            />

            <RelatedLinks heading="Read next" links={tool.related} />

            <RelatedLinks
              heading="The platform"
              links={[
                { href: "/features", label: "Features" },
                { href: "/security", label: "Security and risk controls" },
              ]}
            />
          </aside>
        </div>
      </Section>
    </>
  );
}
