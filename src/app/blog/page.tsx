import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { PostCard, PostList } from "@/components/PostCard";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { posts } from "@/content/posts";

export const metadata: Metadata = {
  title: "AI Trading Blog | Guides, Risk and Strategy | Lavandbit",
  description:
    "Plain-English guides to AI-assisted market research: what AI can and cannot do with market data, how to research ASX stocks, drawdown, franking credits and more.",
  alternates: { canonical: "/blog" },
  openGraph: {
    url: "/blog",
    title: "AI Trading Blog | Lavandbit",
    description:
      "Plain-English guides to AI-assisted market research and investing in Australian markets.",
  },
};

const trail = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
];

export default function BlogHubPage() {
  const [pillar, ...rest] = posts;

  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <PageHero
        title="Guides written for people who actually trade"
        sub="No profit promises and no shortcuts. These explain the mechanics, how automation works, how to test honestly, and what decides whether an account survives."
        trail={trail}
      />
      <Section>
        <PostCard post={pillar} featured />
      </Section>
      <Section tone="muted">
        <PostList posts={rest} />
      </Section>
      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          <RelatedLinks
            heading="Start here"
            links={[
              { href: "/how-it-works", label: "How Lavandbit works", note: "From market data to your own decision, in four stages" },
              { href: "/glossary/ai-trading", label: "What is AI trading?", note: "The definition, and what it does not mean" },
            ]}
          />
          <RelatedLinks
            heading="Before you rely on any tool"
            links={[
              { href: "/security", label: "Is Lavandbit safe?", note: "What it does, what it does not, and the real risks" },
              { href: "/get-started", label: "Get started free", note: "See your own strategy running, no card required" },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
