import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { PostCard } from "@/components/PostCard";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, personSchema } from "@/lib/schema";
import { authors } from "@/content/authors";
import { posts } from "@/content/posts";

export function generateStaticParams() {
  return authors.map((a) => ({ slug: a.slug }));
}

/** See the note in /blog/[slug], keeps unknown slugs as real 404s, not soft 404s. */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const author = authors.find((a) => a.slug === slug);
  if (!author) return {};
  return {
    title: `${author.name} | Lavandbit`,
    description: author.bio,
    alternates: { canonical: `/authors/${author.slug}` },
    robots: author.name.includes("[") ? { index: false, follow: true } : undefined,
  };
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const author = authors.find((a) => a.slug === slug);
  if (!author) notFound();

  const written = posts.filter((p) => p.authorSlug === author.slug);

  const trail = [
    { name: "Home", path: "/" },
    { name: "Authors", path: "/authors" },
    { name: author.name, path: `/authors/${author.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <JsonLd data={personSchema(author)} />

      <header className="border-b border-line bg-canvas py-12 sm:py-16">
        <div className="container-page flex flex-col gap-5">
          <Breadcrumbs trail={trail} />
          <h1 className="text-h2">{author.name}</h1>
          <p className="font-mono text-[0.78rem] tracking-wide text-ink-3">{author.role}</p>
          <p className="max-w-2xl text-[1.02rem] leading-relaxed text-ink-2">{author.bio}</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {author.expertise.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-[0.7rem] tracking-wide text-ink-2"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </header>

      {written.length > 0 && (
        <Section>
          <h2 className="mb-8 text-[1.4rem]">Written by {author.name}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {written.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
