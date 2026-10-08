import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Blocks } from "@/components/Blocks";
import { FaqAccordion } from "@/components/FaqAccordion";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { competitors, getCompetitor } from "@/content/competitors";

export function generateStaticParams() {
  return competitors.map((c) => ({ slug: c.slug }));
}

/** See the note in /blog/[slug], keeps unknown slugs as real 404s, not soft 404s. */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const comp = getCompetitor(slug);
  if (!comp) return {};
  return {
    title: comp.metaTitle,
    description: comp.description,
    alternates: { canonical: `/vs/${comp.slug}` },
    openGraph: {
      url: `/vs/${comp.slug}`,
      title: comp.metaTitle,
      description: comp.description,
    },
  };
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comp = getCompetitor(slug);
  if (!comp) notFound();

  const others = competitors.filter((c) => c.slug !== comp.slug);

  const trail = [
    { name: "Home", path: "/" },
    { name: "Compare", path: "/vs" },
    { name: `vs ${comp.name}`, path: `/vs/${comp.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <JsonLd data={faqSchema(comp.faq)} />

      <header className="border-b border-line bg-canvas py-12 sm:py-16">
        <div className="container-page flex flex-col gap-5">
          <Breadcrumbs trail={trail} />
          <h1 className="max-w-4xl text-h2">
            Lavandbit vs {comp.name}
          </h1>
          <p className="max-w-2xl text-[1.05rem] leading-relaxed text-ink-2">{comp.intro}</p>
        </div>
      </header>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-10">
          <div className="flex min-w-0 flex-col gap-10">
            <div className="overflow-x-auto rounded-[var(--radius-card)] border border-line bg-surface">
              <table className="w-full min-w-[34rem] border-collapse text-[0.9rem]">
                <thead>
                  <tr>
                    <th scope="col" className="eyebrow border-b border-line px-5 py-4 text-left text-ink-3">
                      What matters
                    </th>
                    <th scope="col" className="eyebrow border-b border-line px-5 py-4 text-left text-ink-3">
                      {comp.name}
                    </th>
                    <th
                      scope="col"
                      className="border-b border-line bg-brand-soft px-5 py-4 text-left font-display text-[0.95rem] font-bold text-brand-strong"
                    >
                      Lavandbit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comp.summary.map((row) => (
                    <tr key={row.label} className="border-b border-[var(--color-line-soft)] last:border-0">
                      <th scope="row" className="px-5 py-3.5 text-left font-medium text-ink">
                        {row.label}
                      </th>
                      <td className="px-5 py-3.5 text-ink-2">{row.theirs}</td>
                      <td className="bg-brand-soft/60 px-5 py-3.5 font-semibold text-brand-strong">
                        {row.ours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-[var(--radius-card)] border-l-2 border-signal bg-signal-soft px-5 py-4">
              <p className="eyebrow mb-3 text-signal">Where {comp.name} is genuinely better</p>
              <ul className="flex flex-col gap-2.5">
                {comp.theirStrengths.map((s) => (
                  <li key={s} className="flex gap-3 text-[0.93rem] leading-relaxed text-ink-2">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Blocks blocks={comp.body} />

            <section className="flex flex-col gap-6">
              <h2 className="text-[1.5rem]">Common questions</h2>
              <FaqAccordion items={comp.faq} defaultOpen={null} />
            </section>

            <div className="rounded-[var(--radius-card)] border border-line bg-surface-2 p-5">
              <p className="text-[0.82rem] leading-relaxed text-ink-3">
                This comparison describes approaches to trading rather than any
                specific competitor’s product, and reflects our own view.
                Trading carries a high risk of losing your capital. See our{" "}
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
                See it against your own strategy
              </p>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-inverse-2">
                Twenty minutes, your rules, no card required.
              </p>
              <Cta href="/get-started" className="mt-5 w-full">
                Get Started Free
              </Cta>
            </div>

            <RelatedLinks
              heading="Other comparisons"
              links={others.map((o) => ({
                href: `/vs/${o.slug}`,
                label: `vs ${o.name}`,
              }))}
            />

            <RelatedLinks
              heading="Go deeper"
              links={[
                { href: "/blog/is-ai-trading-safe", label: "Is AI trading safe?" },
                { href: "/blog/why-trading-bots-lose-money", label: "Why most bots lose money" },
              ]}
            />
          </aside>
        </div>
      </Section>
    </>
  );
}
