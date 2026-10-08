import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { posts } from "@/content/posts";
import { competitors } from "@/content/competitors";
import { useCases } from "@/content/use-cases";
import { glossary } from "@/content/glossary";
import { authors, getAuthor } from "@/content/authors";
import { tools } from "@/content/tools";
import { isPlaceholder } from "@/lib/schema";

type Entry = {
  path: string;
  priority: number;
  freq: MetadataRoute.Sitemap[number]["changeFrequency"];
  lastModified?: Date;
};

/**
 * /thank-you is deliberately absent. It is a conversion endpoint and is
 * marked noindex on the page itself. Author pages still holding placeholder
 * names are excluded too, so unfinished pages never reach the index.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  /* The authors index only earns a place once there is somebody real on it.
     With every name still a placeholder it is a short page of brackets, and
     a thin page of brackets is worse for the site than no page at all. */
  const authorsReady = authors.some((a) => !isPlaceholder(a.name));

  const core: Entry[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/get-started", priority: 0.9, freq: "monthly" },
    { path: "/pricing", priority: 0.9, freq: "monthly" },
    { path: "/how-it-works", priority: 0.8, freq: "monthly" },
    { path: "/features", priority: 0.8, freq: "monthly" },
    { path: "/security", priority: 0.7, freq: "monthly" },
    { path: "/blog", priority: 0.7, freq: "weekly" },
    { path: "/tools", priority: 0.7, freq: "monthly" },
    { path: "/glossary", priority: 0.6, freq: "monthly" },
    { path: "/vs", priority: 0.6, freq: "monthly" },
    ...(authorsReady ? [{ path: "/authors", priority: 0.5, freq: "monthly" as const }] : []),
    { path: "/about", priority: 0.6, freq: "monthly" },
    { path: "/contact", priority: 0.5, freq: "yearly" },
    { path: "/risk-disclaimer", priority: 0.3, freq: "yearly" },
    { path: "/privacy-policy", priority: 0.3, freq: "yearly" },
    { path: "/terms", priority: 0.3, freq: "yearly" },
  ];

  // A post stays out of the sitemap while its author is still a placeholder.
  // Publishing financial articles under "[Full name]" reads as unfinished and
  // undercuts the E-E-A-T signals the rest of the site is building.
  const postsEntries: Entry[] = posts
    .filter((p) => !isPlaceholder(getAuthor(p.authorSlug).name))
    .map((p) => ({
      path: `/blog/${p.slug}`,
      priority: 0.7,
      freq: "monthly",
      lastModified: new Date(p.updated),
    }));

  const compareEntries: Entry[] = competitors.map((c) => ({
    path: `/vs/${c.slug}`,
    priority: 0.8,
    freq: "monthly",
  }));

  const useCaseEntries: Entry[] = useCases.map((u) => ({
    path: `/for/${u.slug}`,
    priority: 0.7,
    freq: "monthly",
  }));

  const glossaryEntries: Entry[] = glossary.map((t) => ({
    path: `/glossary/${t.slug}`,
    priority: 0.4,
    freq: "yearly",
  }));

  // Tools get a high priority: they are the site's best backlink asset and
  // they rank without needing brand recognition.
  const toolEntries: Entry[] = tools.map((t) => ({
    path: `/tools/${t.slug}`,
    priority: 0.8,
    freq: "monthly",
  }));

  const authorEntries: Entry[] = authors
    .filter((a) => !a.name.includes("["))
    .map((a) => ({ path: `/authors/${a.slug}`, priority: 0.4, freq: "yearly" }));

  return [
    ...core,
    ...toolEntries,
    ...postsEntries,
    ...compareEntries,
    ...useCaseEntries,
    ...glossaryEntries,
    ...authorEntries,
  ].map(({ path, priority, freq, lastModified }) => ({
    url: `${site.url}${path}`,
    lastModified: lastModified ?? now,
    changeFrequency: freq,
    priority,
  }));
}
