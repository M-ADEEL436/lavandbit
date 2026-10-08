import { site } from "@/content/site";

/**
 * JSON-LD builders. Structured data is what earns FAQ rich results and
 * software listings in search, on a YMYL financial page it is worth more
 * than almost any other technical work.
 *
 * NOTE: Review and AggregateRating are deliberately absent. Emitting rating
 * markup without a genuine, collected review set is a manual-action risk.
 * Add them only once the client has real, permissioned reviews.
 */

/**
 * True while a content record still holds a [bracketed] placeholder.
 *
 * Financial content credited to "[Full name]" is worse than unpublished -
 * anonymous YMYL pages are treated as low quality, and a literal placeholder
 * in the byline reads as unfinished. Pages that fail this check are kept out
 * of the sitemap and marked noindex until the client supplies real details.
 */
export function isPlaceholder(value: string): boolean {
  return /\[[^\]]+\]/.test(value);
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    email: site.contact.email,
    logo: `${site.url}/logo.png`,
    sameAs: [site.social.x, site.social.linkedin, site.social.youtube].filter(
      (u) => !u.includes("[handle]"),
    ),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.contact.email,
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: site.contact.supportEmail,
        availableLanguage: ["English"],
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "en",
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    applicationCategory: "FinanceApplication",
    applicationSubCategory: "Trading platform",
    operatingSystem: "Web, iOS, Android",
    url: site.url,
    description: site.description,
    featureList: [
      "24/7 AI trade execution",
      "No-code strategy builder",
      "Historical backtesting",
      "Enforced risk limits",
      "Multi-broker connectivity",
      "Paper trading mode",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: site.pricing.currency,
      description: "Free demo and paper trading available",
      url: `${site.url}/pricing`,
    },
  };
}

export function faqSchema(items: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbSchema(
  trail: readonly { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${site.url}${crumb.path}`,
    })),
  };
}

/** Person markup for an author page, a direct E-E-A-T signal on YMYL topics. */
export function personSchema(author: {
  slug: string;
  name: string;
  role: string;
  bio: string;
  expertise: readonly string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    url: `${site.url}/authors/${author.slug}`,
    knowsAbout: author.expertise,
    worksFor: { "@type": "Organization", name: site.name, url: site.url },
  };
}

export function articleSchema(post: {
  slug: string;
  title: string;
  description: string;
  published: string;
  updated: string;
  category: string;
  authorName: string;
  authorSlug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    articleSection: post.category,
    datePublished: post.published,
    dateModified: post.updated,
    inLanguage: "en",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}/blog/${post.slug}` },
    author: {
      "@type": "Person",
      name: post.authorName,
      url: `${site.url}/authors/${post.authorSlug}`,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: { "@type": "ImageObject", url: `${site.url}/logo.png` },
    },
  };
}

export function howToSchema(
  name: string,
  description: string,
  steps: readonly { title: string; body: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    totalTime: "PT30M",
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.body,
    })),
  };
}
