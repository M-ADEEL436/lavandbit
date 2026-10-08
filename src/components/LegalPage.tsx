import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export type LegalDoc = {
  meta: { title: string; description: string };
  eyebrow: string;
  h1: string;
  updated: string;
  intro: string;
  sections: readonly { heading: string; body: readonly string[] }[];
};

export function LegalPage({
  doc,
  trail,
}: {
  doc: LegalDoc;
  trail: readonly { name: string; path: string }[];
}) {
  return (
    <>
      <PageHero
        title={doc.h1}
        sub={doc.intro}
        trail={trail}
      />
      <Section>
        <p className="eyebrow mb-10 text-ink-3">{doc.updated}</p>
        <div className="flex max-w-3xl flex-col gap-10">
          {doc.sections.map((section, i) => (
            <section key={section.heading} className="flex flex-col gap-4">
              <h2 className="flex items-baseline gap-3 text-[1.2rem]">
                <span className="tabular font-mono text-[0.8rem] text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {section.heading}
              </h2>
              {section.body.map((para) => (
                <p key={para.slice(0, 40)} className="text-[0.97rem] leading-relaxed text-ink-2">
                  {para}
                </p>
              ))}
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
