import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/PageHero";
import { Blocks, headings } from "@/components/Blocks";
import { AuthorBox } from "@/components/AuthorBox";
import { TableOfContents } from "@/components/TableOfContents";
import { RelatedLinks } from "@/components/RelatedLinks";
import { PostCard } from "@/components/PostCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema, faqSchema, isPlaceholder } from "@/lib/schema";
import { getPost, posts, getRelatedPosts } from "@/content/posts";
import { getAuthor } from "@/content/authors";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

/**
 * Every valid slug is known at build time, so anything else should be a real
 * 404. Without this, an unknown slug renders on demand and `notFound()` fires
 * mid-stream, after the 200 status has already been sent, which produces a
 * soft 404. Search engines treat those as low quality. Adding a post requires
 * a rebuild, which is the normal trade for a static content site.
 */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const title = post.metaTitle ?? `${post.title} | Lavandbit`;
  const authorReady = !isPlaceholder(getAuthor(post.authorSlug).name);

  return {
    title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    // Kept out of the index until the article has a real named author.
    robots: authorReady ? undefined : { index: false, follow: true },
    openGraph: {
      type: "article",
      url: `/blog/${post.slug}`,
      title,
      description: post.description,
      publishedTime: post.published,
      modifiedTime: post.updated,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const author = getAuthor(post.authorSlug);
  const toc = headings(post.body);
  const related = getRelatedPosts(post.related);

  const trail = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <JsonLd
        data={articleSchema({
          slug: post.slug,
          title: post.title,
          description: post.description,
          published: post.published,
          updated: post.updated,
          category: post.category,
          authorName: author.name,
          authorSlug: author.slug,
        })}
      />
      {post.faq && post.faq.length > 0 && <JsonLd data={faqSchema(post.faq)} />}

      <article>
        <header className="border-b border-line bg-canvas py-12 sm:py-16">
          <div className="container-page flex flex-col gap-5">
            <Breadcrumbs trail={trail} />
            <h1 className="max-w-4xl text-h2">{post.title}</h1>
            <p className="max-w-2xl text-[1.05rem] leading-relaxed text-ink-2">
              {post.description}
            </p>
          </div>
        </header>

        <div className="container-page grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-10">
          <div className="flex min-w-0 flex-col gap-8">
            <AuthorBox author={author} published={post.published} updated={post.updated} />

            <Blocks blocks={post.body} />

            {post.faq && post.faq.length > 0 && (
              <section className="mt-6 flex flex-col gap-6">
                <h2 className="text-[1.5rem]">Common questions</h2>
                <FaqAccordion items={post.faq} defaultOpen={null} />
              </section>
            )}

            <div className="mt-4 rounded-[var(--radius-card)] border border-line bg-surface-2 p-5">
              <p className="text-[0.82rem] leading-relaxed text-ink-3">
                This article is general information about trading software, not
                investment advice. Trading financial instruments carries a high
                risk of losing your capital, and automated strategies do not
                guarantee profit. Read our{" "}
                <Link href="/risk-disclaimer" className="font-medium text-brand hover:underline">
                  full risk disclaimer
                </Link>
                .
              </p>
            </div>
          </div>

          <aside className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
            <TableOfContents items={toc} />
            <RelatedLinks heading="Where to go next" links={post.funnelsTo} />
          </aside>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-line bg-surface-2 py-16">
          <div className="container-page flex flex-col gap-8">
            <h2 className="text-[1.4rem]">Related reading</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <PostCard key={r.slug} post={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
