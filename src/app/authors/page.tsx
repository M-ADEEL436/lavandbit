import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, isPlaceholder } from "@/lib/schema";
import { authors } from "@/content/authors";
import { posts } from "@/content/posts";

/* Kept out of the index, and out of the sitemap, while every name on it is
   still a placeholder. A short page of "[Full name]" is a worse signal for a
   financial site than no authors page at all. It turns itself on the moment
   the client supplies real people. */
const authorsReady = authors.some((a) => !isPlaceholder(a.name));

export const metadata: Metadata = {
  title: "Authors | Who Writes for Lavandbit",
  description:
    "The people who research and write Lavandbit's trading guides, and the experience they bring to them.",
  alternates: { canonical: "/authors" },
  robots: authorsReady ? { index: true, follow: true } : { index: false, follow: true },
};

const trail = [
  { name: "Home", path: "/" },
  { name: "Authors", path: "/authors" },
];

export default function AuthorsIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <PageHero
        title="Who writes these guides"
        sub="Financial content is judged on who stands behind it. These are the people who research and write ours, and what they have actually done."
        trail={trail}
      />
      <Section>
        <div className="grid gap-8 sm:grid-cols-2">
          {authors.map((author) => {
            const count = posts.filter((p) => p.authorSlug === author.slug).length;
            return (
              <article
                key={author.slug}
                className="flex flex-col gap-4 rounded-[var(--radius-card)] border border-line bg-surface p-5"
              >
                <div
                  aria-hidden="true"
                  className="grid h-14 w-14 place-items-center rounded-full bg-brand-soft font-display text-[1.1rem] font-bold text-brand-strong"
                >
                  {author.name.replace(/[[\]]/g, "").charAt(0) || "?"}
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[1.15rem]">
                    <Link href={`/authors/${author.slug}`} className="hover:text-brand">
                      {author.name}
                    </Link>
                  </h2>
                  <p className="font-mono text-[0.72rem] tracking-wide text-brand">{author.role}</p>
                </div>
                <p className="text-[0.92rem] leading-relaxed text-ink-2">{author.bio}</p>
                <ul className="flex flex-wrap gap-2">
                  {author.expertise.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[0.68rem] tracking-wide text-ink-3"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                {count > 0 && (
                  <p className="mt-auto font-mono text-[0.72rem] tracking-wide text-ink-3">
                    {count} article{count === 1 ? "" : "s"}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </Section>
    </>
  );
}
