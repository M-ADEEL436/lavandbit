import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/PageHero";
import { Section, SectionHead } from "@/components/Section";
import { Blocks } from "@/components/Blocks";
import { FaqAccordion } from "@/components/FaqAccordion";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { useCases, getUseCase } from "@/content/use-cases";

export function generateStaticParams() {
  return useCases.map((u) => ({ slug: u.slug }));
}

/** See the note in /blog/[slug], keeps unknown slugs as real 404s, not soft 404s. */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) return {};
  return {
    title: useCase.metaTitle,
    description: useCase.description,
    alternates: { canonical: `/for/${useCase.slug}` },
    openGraph: {
      url: `/for/${useCase.slug}`,
      title: useCase.metaTitle,
      description: useCase.description,
    },
  };
}

export default async function UseCasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) notFound();

  const others = useCases.filter((u) => u.slug !== useCase.slug);

  const trail = [
    { name: "Home", path: "/" },
    { name: `For ${useCase.name}`, path: `/for/${useCase.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <JsonLd data={faqSchema(useCase.faq)} />
      <header className="border-b border-line bg-canvas py-12 sm:py-16">
        <div className="container-page flex flex-col gap-5">
          <Breadcrumbs trail={trail} />
          <h1 className="max-w-4xl text-h2">{useCase.h1}</h1>
          <p className="max-w-2xl text-[1.05rem] leading-relaxed text-ink-2">{useCase.intro}</p>
          <div className="mt-2">
            <Cta href="/get-started" size="lg">
              Get Started Free
            </Cta>
          </div>
        </div>
      </header>
      <Section>
        <SectionHead title="The problem, stated plainly" />
        <div className="mt-8 grid gap-x-12 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {useCase.pains.map((pain) => (
            <div key={pain.title} className="flex flex-col gap-2.5 border-t border-line pt-6">
              <h3 className="text-[1.02rem] leading-snug">{pain.title}</h3>
              <p className="text-[0.92rem] leading-relaxed text-ink-2">{pain.body}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-10">
          <div className="flex min-w-0 flex-col gap-8">
            <Blocks blocks={useCase.body} />
          </div>
          <aside className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5">
              <p className="eyebrow mb-3 text-brand">A good fit if</p>
              <ul className="flex flex-col gap-2.5">
                {useCase.fits.map((f) => (
                  <li key={f} className="flex gap-3 text-[0.88rem] leading-relaxed text-ink-2">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[var(--radius-card)] border-l-2 border-signal bg-signal-soft px-5 py-4">
              <p className="eyebrow mb-2 text-signal">Not for you if</p>
              <p className="text-[0.9rem] leading-relaxed text-ink-2">{useCase.notFor}</p>
            </div>
            <RelatedLinks
              heading="Other traders"
              links={others.map((o) => ({ href: `/for/${o.slug}`, label: `For ${o.name}` }))}
            />
          </aside>
        </div>
      </Section>
      <Section>
        <div className="max-w-4xl">
          <h2 className="mb-8 text-[1.5rem]">Common questions</h2>
          <FaqAccordion items={useCase.faq} defaultOpen={null} />
        </div>
        <div className="mt-8 rounded-[var(--radius-card)] border border-line bg-surface-2 p-5">
          <p className="text-[0.82rem] leading-relaxed text-ink-3">
            Trading financial instruments carries a high risk of losing your
            capital, and automated strategies do not guarantee profit. Nothing
            here is investment advice. See our{" "}
            <Link href="/risk-disclaimer" className="font-medium text-brand hover:underline">
              risk disclaimer
            </Link>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
