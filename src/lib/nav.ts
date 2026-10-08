export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/tools", label: "Tools" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
] as const;

/**
 * Footer navigation. This is load-bearing for SEO, not just usability: it
 * puts a link to every hub on every page, so authority flows from the content
 * pages to the money pages and back rather than pooling in the blog.
 *
 * The "Free tools" and "Investors" groups were removed at the client's
 * request. Note what that costs: the five /for/* pages were linked from the
 * Investors group and from nowhere else, so they are now reachable only from
 * each other and from the sitemap. The /tools/* pages are unaffected, since
 * the homepage links them directly. If the /for/* pages are to keep any
 * internal link equity, something else has to link them. See the README note.
 */
export const footerNav = [
  {
    heading: "Platform",
    links: [
      { href: "/features", label: "Features" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/pricing", label: "Pricing" },
      { href: "/security", label: "Security" },
      { href: "/get-started", label: "Get started free" },
    ],
  },
  {
    heading: "Learn",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/blog/ai-trading-guide", label: "AI trading guide" },
      { href: "/glossary", label: "Glossary" },
      { href: "/vs", label: "Comparisons" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/risk-disclaimer", label: "Risk disclaimer" },
      { href: "/privacy-policy", label: "Privacy policy" },
      { href: "/terms", label: "Terms of service" },
    ],
  },
] as const;
