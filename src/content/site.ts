/**
 * Global site facts.
 *
 * ⚠️  Anything wrapped in [square brackets] is a PLACEHOLDER that the client
 * must replace with a verified fact before launch. Nothing here should be
 * invented, several of these are legal or regulatory claims.
 *
 * PRODUCT NOTE. This matters for every line of copy on the site:
 * Lavandbit is a market RESEARCH AND ANALYSIS tool. It does not place trades,
 * does not connect to a broker, and does not execute anything. The product
 * surfaces patterns, trends, analysis and risk information so the user can
 * make their own decision. Copy must never imply execution or advice.
 */

/**
 * The domain lives here and nowhere else. Every email address and canonical
 * URL is derived from it.
 */
const DOMAIN = "lavandbit.com";

export const emails = {
  general: `hello@${DOMAIN}`,
  support: `support@${DOMAIN}`,
  privacy: `privacy@${DOMAIN}`,
  legal: `legal@${DOMAIN}`,
  leads: `leads@${DOMAIN}`,
} as const;

export const site = {
  name: "Lavandbit",
  /** Used where the market focus needs to be explicit, e.g. in schema. */
  fullName: "Lavandbit",
  domain: DOMAIN,
  legalName: "[Legal entity name and ABN]",
  url: `https://${DOMAIN}`,
  locale: "en_AU",

  tagline: "AI-assisted market research for Australian investors",

  description:
    "Lavandbit is an AI trading tools platform for Australian investors, analyse markets, spot patterns and understand risk. Informational tools, not financial advice.",

  contact: {
    email: emails.general,
    supportEmail: emails.support,
    privacyEmail: emails.privacy,
    legalEmail: emails.legal,
    phone: "[+61 0 0000 0000]",
    whatsapp: "[+61 0 0000 0000]",
    address: "[Registered office address, Australia]",
    hours: "Monday to Friday, 09:00 - 17:00 AEST",
  },

  /**
   * ⚠️ Replace every one of these with a real, current figure, or delete the
   * item. An invented stat a competitor can disprove is worse than a shorter
   * trust bar. Note that "rating" would need a genuine, collected review set.
   */
  /**
   * Capability strip that sits under the hero.
   *
   * Deliberately descriptive rather than numeric. The previous version held
   * placeholder figures ([X,XXX] investors, [XXX] ASX stocks) which could not
   * be published without the client supplying verified numbers, and inventing
   * them on an Australian financial site would be both a credibility risk and
   * a regulatory one. What the platform does can be stated without anyone
   * having to verify a count.
   */
  capabilities: [
    { lead: "AI-Powered", sub: "Market Intelligence" },
    { lead: "Multi-Market", sub: "Coverage" },
    { lead: "Real-Time", sub: "Market Insights" },
    { lead: "Integrated", sub: "Data Sources" },
  ],

  markets: {
    asx: "ASX-listed stocks",
    global: "[global markets covered]",
    dataSources: "[data sources]",
  },

  /** LEGAL, the client must supply the exact position. See the FAQ on the
   *  live site, which answers "Is Lavandbit Regulated In Australia?". */
  regulatory: "[Client must supply the exact regulatory status, legal entity and ABN.]",

  security: {
    encryption: "[encryption standard]",
    twoFactor: "[2FA method]",
  },

  /** ⚠️ TODO: the live site shows no pricing. Confirm before publishing any. */
  pricing: {
    model: "[Pricing model, free tier, subscription, or tiered plans]",
    currency: "AUD",
  },

  social: {
    x: "https://x.com/[handle]",
    linkedin: "https://linkedin.com/company/[handle]",
    youtube: "https://youtube.com/@[handle]",
  },

  demo: {
    duration: "20 minutes",
    promise: "No payment required to register.",
  },
} as const;

/**
 * The disclaimer. It appears in full in the footer of every page, required
 * for financial content, and it is also a trust signal rather than a cost.
 */
export const riskDisclaimerShort = `Lavandbit provides informational tools and market research. Trading and investing involve risk, including the possible loss of capital. Nothing on this website is financial advice, and past performance does not guarantee future results.`;

export const riskDisclaimerFull = `${riskDisclaimerShort} Always do your own research and consider seeking professional advice before making any financial decision.`;

/** The three commitments the whole product is built around. */
export const productPromises = [
  "Information and analysis, not financial advice",
  "You stay in control of your decisions",
  "Clear risk information included",
] as const;

export function warnOnPlaceholders(...values: string[]) {
  if (process.env.NODE_ENV !== "development") return;
  const pending = values.filter((v) => /\[[^\]]+\]/.test(v));
  if (pending.length > 0) {
    console.warn(
      `[Lavandbit] ${pending.length} placeholder value(s) rendered. Fill these in src/content/site.ts before launch:\n` +
        pending.map((p) => `  • ${p}`).join("\n"),
    );
  }
}
