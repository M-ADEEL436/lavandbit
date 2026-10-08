import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Blocks } from "@/components/Blocks";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { glossary, getTerm, getRelatedTerms } from "@/content/glossary";

export function generateStaticParams() {
  return glossary.map((t) => ({ slug: t.slug }));
}

/** See the note in /blog/[slug], keeps unknown slugs as real 404s, not soft 404s. */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const term = getTerm(slug);
  if (!term) return {};
  return {
    title: term.metaTitle,
    description: term.description,
    alternates: { canonical: `/glossary/${term.slug}` },
    openGraph: { url: `/glossary/${term.slug}`, title: term.metaTitle, description: term.description },
  };
}

export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const term = getTerm(slug);
  if (!term) notFound();

  const related = getRelatedTerms(term.related);

  const trail = [
    { name: "Home", path: "/" },
    { name: "Glossary", path: "/glossary" },
    { name: term.term, path: `/glossary/${term.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />

      <header className="border-b border-line bg-canvas py-12 sm:py-16">
        <div className="container-page flex flex-col gap-5">
          <Breadcrumbs trail={trail} />
          <h1 className="max-w-3xl text-h2">{term.term}</h1>
          <p className="max-w-2xl text-[1.08rem] leading-relaxed text-ink-2">{term.short}</p>
        </div>
      </header>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-10">
          <div className="min-w-0">
            <Blocks blocks={term.body} />
            <div className="mt-8 rounded-[var(--radius-card)] border border-line bg-surface-2 p-5">
              <p className="text-[0.82rem] leading-relaxed text-ink-3">
                General information about trading software, not investment
                advice. See our{" "}
                <Link href="/risk-disclaimer" className="font-medium text-brand hover:underline">
                  risk disclaimer
                </Link>
                .
              </p>
            </div>
          </div>

          <aside className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[var(--radius-card)] border border-ink-panel-line bg-ink-panel p-5">
              <p className="font-display text-[1.05rem] font-bold text-inverse">
                Put this into practice
              </p>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-inverse-2">
                See your own strategy running, with these controls in place.
              </p>
              <Cta href="/get-started" className="mt-5 w-full">
                Get Started Free
              </Cta>
            </div>

            <RelatedLinks
              heading="Related terms"
              links={related.map((r) => ({
                href: `/glossary/${r.slug}`,
                label: r.term,
                note: r.short,
              }))}
            />

            <RelatedLinks
              heading="Read more"
              links={[
                { href: "/blog/ai-trading-guide", label: "AI trading: the complete guide" },
                { href: "/blog/trading-drawdown-explained", label: "Trading drawdown explained" },
              ]}
            />
          </aside>
        </div>
      </Section>
    </>
  );
}
