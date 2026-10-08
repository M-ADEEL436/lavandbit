import type { Metadata } from "next";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import { Section, SectionHead } from "@/components/Section";
import { ProductPreview } from "@/components/ProductPreview";
import { TrustBar } from "@/components/TrustBar";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FaqAccordion } from "@/components/FaqAccordion";
import { LeadForm } from "@/components/LeadForm";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, softwareApplicationSchema, isPlaceholder } from "@/lib/schema";
import { home } from "@/content/home";

/* Testimonials carrying a placeholder quote are dropped, and the whole social
   proof section hides if that leaves none. See the note at the section. */
const testimonials = home.proof.testimonials.filter((t) => !isPlaceholder(t.quote));

export const metadata: Metadata = {
  title: home.meta.title,
  description: home.meta.description,
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: home.meta.title,
    description: home.meta.description,
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd data={faqSchema(home.faq.items)} />
      {/* ---------------- Hero ---------------- */}
      {/* items-start rather than items-center. Centring the text column
          against the taller form card pushed the headline 60 to 84px below the
          top of the card, which read as a large empty gap between the header
          and the heading. Top-aligned, the two columns start together. */}
      <section className="border-b border-line bg-canvas py-8 sm:py-12">
        <div className="container-page grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="flex flex-col items-start gap-5">
            <h1 className="text-display">
              <span className="block">{home.hero.h1Brand}</span>
              {home.hero.h1Line}
            </h1>
            <p className="max-w-xl text-[1rem] leading-relaxed text-ink-2">
              {home.hero.sub}
            </p>
            {/* Fills the column to the foot of the form card beside it, which
                is the taller element in this row. Previously the text stopped
                about 130px short and the left column read as floating. */}
            <div className="w-full border-t border-line pt-4">
              <p className="max-w-xl text-[0.95rem] leading-relaxed text-ink-2">
                {home.hero.body}
              </p>
              <ul className="mt-3.5 flex flex-wrap gap-x-5 gap-y-1.5">
                {home.hero.terms.map((term) => (
                  <li
                    key={term}
                    className="flex items-center gap-2 text-[0.82rem] text-ink-3"
                  >
                    <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-brand-bright" />
                    {term}
                  </li>
                ))}
              </ul>
            </div>
            {/* No primary button here, the form beside it is the primary
                action, and two competing calls to action on the same screen
                split attention rather than doubling it. The link closes the
                column rather than sitting third, so the reading order is
                heading, what it is, who it is for, then the way in. */}
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-[0.9rem] font-semibold text-brand hover:text-brand-strong"
            >
              {home.hero.secondaryCta}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="rounded-[var(--radius-card)] border border-line bg-surface p-4 shadow-lg shadow-black/[0.04] sm:p-5">
            <h2 className="text-[1.1rem]">{home.hero.formTitle}</h2>
            <p className="mb-2.5 mt-1 text-[0.8rem] text-ink-3">{home.hero.formSubtitle}</p>
            {/* The payment marks that used to sit under the form are in the
                footer now, so the card ends at the button and the hero column
                beside it is closer to the card's height. The "no payment
                required" line the marks replaced is still gone; /get-started
                carries it. */}
            <LeadForm />
          </div>
        </div>
      </section>
      <TrustBar />
      {/* ---------------- Problem ---------------- */}
      <Section>
        <SectionHead title={home.problem.h2} />
        <div className="mt-8 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {home.problem.blocks.map((block) => (
            <div key={block.lead} className="flex flex-col gap-2.5 border-t border-line pt-6">
              <h3 className="text-[1.05rem] leading-snug">{block.lead}</h3>
              <p className="text-[0.95rem] leading-relaxed text-ink-2">{block.body}</p>
            </div>
          ))}
        </div>
      </Section>
      {/* ---------------- Solution ---------------- */}
      <Section tone="muted">
        {/* Heading on the left, interface preview on the right. The boxed
            "category, defined" panel that used to sit here was removed, and
            its explanation folded into the supporting line under the heading
            so the definition is still on the page for search engines. The
            text column is now the wider of the two: the preview reads better
            smaller than it did filling half the section. */}
        <div className="grid gap-10 lg:grid-cols-[1.12fr_1fr] lg:items-center lg:gap-10">
          <SectionHead
            title={home.solution.h2}
            intro={home.solution.intro}
          />
          <ProductPreview />
        </div>
      </Section>
      {/* ---------------- How it works (dark) ---------------- */}
      <Section tone="dark">
        <SectionHead
          title={home.howItWorks.h2}
          tone="dark"
          intro={
            <Link href="/how-it-works" className="font-medium text-brand-bright hover:underline">
              Read the full walkthrough →
            </Link>
          }
        />
        <ol className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2">
          {home.howItWorks.steps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-3 border-t border-ink-panel-line pt-6">
              <span className="tabular font-mono text-[0.72rem] tracking-widest text-brand-bright">
                STEP {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[1.1rem] text-inverse">{step.title}</h3>
              <p className="text-[0.95rem] leading-relaxed text-inverse-2">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <Cta href="/get-started" variant="ghost-inverse" size="lg">
            Get Started Free
          </Cta>
        </div>
      </Section>
      {/* ---------------- Features ---------------- */}
      <Section>
        <SectionHead
          title={home.features.h2}
          intro={
            <Link href="/features" className="font-medium text-brand hover:underline">
              See everything in the platform →
            </Link>
          }
        />
        <div className="mt-8 grid gap-x-8 gap-y-7 md:grid-cols-2 lg:grid-cols-3">
          {home.features.items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-2.5 rounded-[var(--radius-card)] border border-line bg-surface p-5"
            >
              <h3 className="text-[1.02rem] leading-snug">{item.title}</h3>
              <p className="text-[0.92rem] leading-relaxed text-ink-2">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>
      {/* ---------------- Audience ---------------- */}
      <Section tone="muted">
        <SectionHead title={home.audience.h2} />
        <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2">
          {home.audience.segments.map((segment) => (
            <div key={segment.title} className="flex flex-col gap-2.5">
              <h3 className="text-[1.02rem] leading-snug">{segment.title}</h3>
              <p className="text-[0.92rem] leading-relaxed text-ink-2">{segment.body}</p>
            </div>
          ))}
        </div>
      </Section>
      {/* ---------------- Trust ---------------- */}
      {/* Stacked rather than heading-left, points-right. In the two column
          version the heading was shorter than the points beside it, which left
          a large hole under the heading, and four equal claims read better as
          a set in one row than as a block beside a paragraph. */}
      <Section>
        <SectionHead title={home.trust.h2} />
        <dl className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {home.trust.points.map((point) => (
            <div key={point.title} className="flex flex-col gap-2 border-t border-line pt-5">
              <dt className="font-display text-[1rem] font-semibold leading-snug text-ink">
                {point.title}
              </dt>
              <dd className="text-[0.9rem] leading-relaxed text-ink-2">{point.body}</dd>
            </div>
          ))}
        </dl>
      </Section>
      {/* ---------------- Social proof ----------------
          Hidden entirely until at least one real quote exists. The names and
          roles are set, but the quote text is a deliberate placeholder, and
          printing "[Michael's actual words...]" on the homepage is worse than
          showing no testimonial at all. Writing the quotes on the client's
          behalf is not an option: a fabricated testimonial attributed to a
          named person is misleading conduct under the Australian Consumer
          Law. The section turns itself on once the quotes are filled in. */}
      {testimonials.length > 0 && (
      <Section tone="muted">
        <SectionHead title={home.proof.h2} />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="m-0 flex flex-col justify-between gap-5 rounded-[var(--radius-card)] border border-line bg-surface p-5"
            >
              <blockquote className="text-[0.93rem] leading-relaxed text-ink-2">
                {t.quote}
              </blockquote>
              {/* Name on its own line at a readable weight, role and country
                  beneath it. Location is the country only, no state or city. */}
              <figcaption className="flex flex-col gap-0.5">
                <span className="font-display text-[0.88rem] font-semibold leading-snug text-ink">
                  {t.name}
                </span>
                <span className="font-mono text-[0.7rem] tracking-wide text-ink-3">
                  {t.role}, {t.location}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
      )}
      {/* ---------------- Comparison ---------------- */}
      <Section>
        <SectionHead title={home.comparison.h2} />
        <div className="mt-6">
          <ComparisonTable columns={home.comparison.columns} rows={home.comparison.rows} />
        </div>
        <div className="mt-6">
          <Cta href="/get-started" size="lg">
            Get Started Free
          </Cta>
        </div>
      </Section>
      {/* ---------------- Free tools ----------------
          Interactive, no signup, nothing stored. These rank without needing
          brand recognition and are the site's best backlink asset, so they
          get a prominent slot on the strongest page. */}
      <Section tone="muted">
        <SectionHead
          title="Three numbers that decide whether an account survives"
          intro="None of them is an entry signal, and all three matter more than one. No signup, nothing stored, everything runs in your browser."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {[
            {
              href: "/tools/position-size-calculator",
              title: "Position size calculator",
              body: "Work out how many units to trade from your balance, risk percentage and stop distance.",
            },
            {
              href: "/tools/risk-reward-calculator",
              title: "Risk to reward calculator",
              body: "Get the ratio, and the win rate you need just to break even at that ratio.",
            },
            {
              href: "/tools/drawdown-recovery-calculator",
              title: "Drawdown recovery calculator",
              body: "See the gain required to recover a drawdown. A 50% loss needs a 100% gain.",
            },
          ].map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="flex flex-col gap-2.5 rounded-[var(--radius-card)] border border-line bg-surface p-5 transition-colors hover:border-ink-3"
            >
              <h3 className="text-[1.02rem] leading-snug hover:text-brand">{tool.title}</h3>
              <p className="flex-1 text-[0.9rem] leading-relaxed text-ink-2">{tool.body}</p>
              <span className="mt-1 font-mono text-[0.72rem] tracking-wide text-brand">
                Open calculator →
              </span>
            </Link>
          ))}
        </div>
      </Section>
      {/* ---------------- FAQ ----------------
          The "learn first" link block that used to sit here was removed: the
          tools section above it already covers the same ground, and the footer
          links every content hub from every page, so nothing lost a route in. */}
      <Section tone="muted">
        <SectionHead title={home.faq.h2} />
        <div className="mt-8 max-w-4xl">
          <FaqAccordion items={home.faq.items} />
        </div>
      </Section>
      {/* ---------------- Closing CTA ----------------
          A button rather than a second form. The hero already carries the
          registration form, and repeating it here would put two identical
          forms on one page, which competes rather than reinforces. */}
      <Section tone="dark" id="get-started">
        <div className="flex max-w-3xl flex-col items-start gap-5">
          <h2 className="text-h2 text-inverse">{home.closing.h2}</h2>
          <p className="text-[1.02rem] leading-relaxed text-inverse-2">{home.closing.body}</p>
          <Cta href="/get-started" size="lg" className="mt-2">
            {home.closing.primaryCta}
          </Cta>
          <p className="text-[0.82rem] text-inverse-3">{home.closing.microcopy}</p>
        </div>
      </Section>
      <StickyMobileCta />
    </>
  );
}
