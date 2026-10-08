import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHead } from "@/components/Section";
import { Blocks } from "@/components/Blocks";
import { RichText } from "@/components/RichText";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { securityPage } from "@/content/security";

export const metadata: Metadata = {
  title: securityPage.meta.title,
  description: securityPage.meta.description,
  alternates: { canonical: "/security" },
  openGraph: {
    url: "/security",
    title: securityPage.meta.title,
    description: securityPage.meta.description,
  },
};

const trail = [
  { name: "Home", path: "/" },
  { name: "Security", path: "/security" },
];

export default function SecurityPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <PageHero
        title={securityPage.h1}
        sub={securityPage.sub}
        trail={trail}
      />
      <Section>
        <SectionHead title="Seven things that protect your account" />
        <dl className="mt-8 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {securityPage.principles.map((p) => (
            <div key={p.title} className="flex flex-col gap-2 border-t border-line pt-6">
              <dt className="font-display text-[1.02rem] font-semibold text-ink">{p.title}</dt>
              <dd className="text-[0.93rem] leading-relaxed text-ink-2">{p.body}</dd>
            </div>
          ))}
        </dl>
      </Section>
      <Section tone="muted">
        <SectionHead
          title="The risks automation does not remove"
        />
        <ul className="mt-8 grid gap-x-12 gap-y-6 lg:grid-cols-2">
          {securityPage.risks.map((risk) => (
            <li
              key={risk.slice(0, 30)}
              className="border-t border-line pt-5 text-[0.95rem] leading-relaxed text-ink-2"
            >
              <RichText text={risk} />
            </li>
          ))}
        </ul>
      </Section>
      <Section>
        <div className="max-w-3xl">
          <Blocks blocks={securityPage.body} />
        </div>
        <div className="mt-8 rounded-[var(--radius-card)] border border-line bg-surface-2 p-5">
          <p className="text-[0.82rem] leading-relaxed text-ink-3">
            Trading financial instruments carries a high risk of losing your
            capital. Automated strategies do not guarantee profit. Nothing on
            this page is investment advice. See our{" "}
            <Link href="/risk-disclaimer" className="font-medium text-brand hover:underline">
              full risk disclaimer
            </Link>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
