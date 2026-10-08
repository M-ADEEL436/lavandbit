import type { Author } from "@/content/types";

/**
 * ⚠️  PLACEHOLDER PEOPLE.
 *
 * Named, credentialled authors are a direct E-E-A-T ranking factor on
 * financial (YMYL) pages, Google treats anonymous trading content as
 * low-quality. Replace these with the client's real team before publishing
 * articles, or the blog will struggle to rank no matter how good the writing is.
 *
 * Do not publish invented credentials. If the client has no one with trading
 * or engineering background willing to be named, the honest move is to publish
 * under the company name and accept a slower ranking curve.
 */
export const authors: Author[] = [
  {
    slug: "author-one",
    name: "[Full name]",
    role: "[Role, e.g. Co-founder & Head of Research]",
    bio: "[Two or three sentences of real background: years in markets, which markets, what they did before, what they are qualified in. Vague bios rank worse than no bio, Google's quality raters check whether the author demonstrably knows the subject.]",
    expertise: [
      "[e.g. Australian equities]",
      "[e.g. Technical analysis]",
      "[e.g. Investor education]",
    ],
  },
  {
    slug: "author-two",
    name: "[Full name]",
    role: "[Role, e.g. Co-founder & CTO]",
    bio: "[Real engineering background: systems built, languages, years of experience. For a market analysis product, a named person who can speak to how the analysis is generated is a genuine trust signal.]",
    expertise: [
      "[e.g. Market data engineering]",
      "[e.g. Applied machine learning]",
      "[e.g. Platform reliability]",
    ],
  },
];

export function getAuthor(slug: string) {
  return authors.find((a) => a.slug === slug) ?? authors[0];
}
