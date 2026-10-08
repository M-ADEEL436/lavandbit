import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, isPlaceholder } from "@/lib/schema";
import { contactPage } from "@/content/pages";

export const metadata: Metadata = {
  title: contactPage.meta.title,
  description: contactPage.meta.description,
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: contactPage.meta.title,
    description: contactPage.meta.description,
  },
};

const trail = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <PageHero
        title={contactPage.h1}
        sub={contactPage.sub}
        trail={trail}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <dl className="flex flex-col divide-y divide-[var(--color-line)] border-y border-line">
            {/* Channels still holding a placeholder are dropped rather than
                printed. A visible "[+61 0 0000 0000]" costs more trust than a
                shorter list does, and the client's real details appear here
                automatically once they are filled in. */}
            {contactPage.channels
              .filter((channel) => !isPlaceholder(channel.value))
              .map((channel) => (
                <div key={channel.label} className="flex flex-col gap-1.5 py-6">
                  <dt className="eyebrow text-brand">{channel.label}</dt>
                  <dd className="font-display text-[1.05rem] font-semibold text-ink">
                    {channel.value}
                  </dd>
                  <dd className="text-[0.88rem] leading-relaxed text-ink-3">{channel.note}</dd>
                </div>
              ))}
          </dl>
          <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5">
            <h2 className="mb-2 text-[1.25rem]">{contactPage.formTitle}</h2>
            <p className="mb-6 text-[0.88rem] text-ink-3">
              Most messages get a reply within one business day.
            </p>
            <LeadForm
              variant="contact"
              submitLabel="Send Message"
              note="We use your details only to answer your enquiry. Never sold or shared."
            />
          </div>
        </div>
      </Section>
    </>
  );
}
