/**
 * Content block system.
 *
 * Long-form pages are stored as arrays of typed blocks rather than JSX or
 * markdown. Three reasons: no extra build dependency, the client can edit copy
 * in the same way as the rest of the site, and CTA blocks can be dropped into
 * the middle of an article, which is where most of the conversion happens.
 *
 * Inline formatting inside `text` and `items` supports:
 *   **bold**    [link text](/href)    `code`
 */

export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "note"; tone?: "tip" | "warn" | "stop"; title?: string; text: string }
  | { t: "table"; head: string[]; rows: string[][] }
  | { t: "quote"; text: string; cite?: string }
  | { t: "cta"; title: string; text: string; button: string; href: string };

export type Author = {
  slug: string;
  name: string;
  role: string;
  /** Real credentials. Google treats financial content as YMYL and checks. */
  bio: string;
  expertise: string[];
};

export type Post = {
  slug: string;
  title: string;
  /** Meta title if it should differ from the H1; ~60 chars. */
  metaTitle?: string;
  description: string;
  /** Primary keyword this post targets. */
  keyword: string;
  category: string;
  authorSlug: string;
  published: string;
  updated: string;
  readingMinutes: number;
  /** Slugs of related posts, drives the internal linking web. */
  related: string[];
  /** Money pages this post should funnel to. */
  funnelsTo: { href: string; label: string }[];
  body: Block[];
  faq?: { q: string; a: string }[];
};

export type Competitor = {
  slug: string;
  /** Shown as "Lavandbit vs X" */
  name: string;
  metaTitle: string;
  description: string;
  keyword: string;
  intro: string;
  /** Honest summary of where the alternative is genuinely better. */
  theirStrengths: string[];
  summary: { label: string; theirs: string; ours: string }[];
  body: Block[];
  faq: { q: string; a: string }[];
  related: string[];
};

export type UseCase = {
  slug: string;
  name: string;
  metaTitle: string;
  description: string;
  keyword: string;
  h1: string;
  intro: string;
  pains: { title: string; body: string }[];
  fits: string[];
  notFor: string;
  body: Block[];
  faq: { q: string; a: string }[];
};

export type GlossaryTerm = {
  slug: string;
  term: string;
  short: string;
  metaTitle: string;
  description: string;
  body: Block[];
  related: string[];
};
