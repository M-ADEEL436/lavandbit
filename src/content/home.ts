/**
 * Homepage copy.
 *
 * Positioning: Lavandbit is an AI-assisted market RESEARCH tool for
 * Australian investors. It does not place trades, connect to a broker, or
 * give advice. Every claim below is deliberately about understanding and
 * analysis, never about outcomes or execution.
 *
 * `[bracketed]` values are placeholders for facts only the client can supply.
 */

export const home = {
  meta: {
    /** Brand first, then the category terms the site can realistically win.
     *  Ranking for "lavandbit" is close to free; the category terms are what
     *  bring people who have never heard of the brand. 56 characters. */
    title: "Lavandbit | AI Trading Tools & Market Analysis Australia",
    description:
      "Lavandbit is an AI trading tools platform for Australian investors, analyse markets, spot patterns and understand risk. Informational tools, not financial advice.",
  },

  hero: {
    eyebrow: "AI-assisted market research",
    /** Brand leads, because that is the keyword being targeted. The category
     *  terms stay in the same line so the H1 still does ranking work beyond
     *  the brand, a bare "Lavandbit" H1 would waste the strongest on-page
     *  signal the homepage has. */
    /** Rendered as one h1 across two visual lines: the brand, then the
     *  category line beneath it. That removes the need for separator
     *  punctuation, and search engines read the element as a single
     *  heading either way. */
    h1Brand: "Lavandbit",
    h1Line: "AI Trading Tools For Australian Investors",
    /** Two lines at the hero's measure rather than three. The brand is already
     *  in the H1, so it does not need repeating here. */
    sub: "Market data, price patterns, trends and risk in one clear view, so you can research ASX and global stocks faster and decide for yourself.",
    /** Fills the hero column down to the foot of the form card beside it,
     *  which is the taller of the two. Carries the two things the hero was
     *  thin on: who the tool is for, and how the output is framed.
     *
     *  Deliberately free of coverage figures, market counts and any outcome
     *  claim. None of those are confirmed, PLACEHOLDERS.md lists them as
     *  still owed by the client, and inventing them on an Australian
     *  financial site is a regulatory problem, not just a credibility one.
     *  Everything here restates something the page already establishes. */
    body: "Built for Australians who research their own positions, whether that is a first portfolio or a self-managed fund.",
    /** Feature terms rather than coverage claims: each one maps to a feature
     *  described further down this page, so nothing here is a new promise. */
    terms: [
      "Pattern recognition",
      "Trend analysis",
      "Risk factors",
      "Plain-English summaries",
      "Watchlists and notes",
    ],
    primaryCta: "Get Started Free",
    secondaryCta: "See How It Works",
    /** The "no payment required to register" line was removed from under the
     *  hero form at the client's request and replaced by the payment method
     *  marks. The same reassurance still runs on /get-started and in the
     *  LeadForm default, so it was not lost from the site. */
    /** Hero form. Sitting in the hero removes a click from the conversion
     *  path, the visitor who is already convinced never has to navigate. */
    formTitle: "Create your free account",
    formSubtitle: "A person replies within one business day to set up your account.",
  },

  problem: {
    eyebrow: "Why research feels harder than it should",
    h2: "Gathering the information takes longer than deciding what to do with it",
    blocks: [
      {
        lead: "The picture is spread across a dozen tabs",
        body: "Price charts in one place, announcements in another, news somewhere else. By the time you have assembled a view, the market has moved on and you are working from yesterday's picture.",
      },
      {
        lead: "Patterns are easy to miss by hand",
        body: "Reviewing charts manually means you see what you happen to look at. Repeating structures that only show up across hundreds of instruments are effectively invisible without something scanning for you.",
      },
      {
        lead: "Risk gets considered last, if at all",
        body: "Most research focuses on the case for a position. The case against it, how far it could fall, what would invalidate the idea, is usually an afterthought, which is exactly backwards.",
      },
    ],
  },

  solution: {
    eyebrow: "What Lavandbit is",
    /** Carries the category keyword the H1 does not, so the page supports
     *  "AI market analysis" alongside "AI trading tools". */
    h2: "AI market analysis that leaves the decision with you",
    /** Kept to two self-contained sentences so search engines can still lift
     *  the definition, without the long explanatory tail that used to sit
     *  beneath it in its own box. */
    intro:
      "AI trading tools use artificial intelligence to assist with market research and analysis. Lavandbit brings prices, patterns, trends and risk into one organised view, and leaves the decision with you.",
  },

  howItWorks: {
    eyebrow: "How it works",
    h2: "From raw market data to your own informed decision",
    steps: [
      {
        title: "Market data",
        body: "The platform gathers and organises market information across Australian and international markets, so the starting point is one place rather than ten.",
      },
      {
        title: "AI analysis",
        body: "AI reviews the data for repeating patterns, trend structure and risk factors, the kind of scanning that is impractical to do thoroughly by hand.",
      },
      {
        title: "Clear insights",
        body: "You get plain-language summaries of what the data suggests, including the risk side. Projections are informational and never guaranteed.",
      },
      {
        title: "Your decision",
        body: "You decide what to do, based on your own research, goals and circumstances. Lavandbit does not act on your behalf.",
      },
    ],
  },

  features: {
    eyebrow: "What you get",
    h2: "A focused set of research tools",
    /** Named after the product's capabilities rather than the outcome each one
     *  produces. These read as category terms people actually search for
     *  ("ai chart analysis", "strategy builder", "backtesting"), which the
     *  previous sentence-style headings did not.
     *
     *  ⚠️  Two of these are product claims the client has not confirmed and
     *  which are still listed as outstanding in PLACEHOLDERS.md: "Strategy
     *  Builder" and "Backtesting of Strategies". "AI Trading Signals" is a
     *  bigger question than a missing fact, see the note on that item. */
    items: [
      {
        title: "AI Market Analysis",
        body: "Market data, price behaviour and market context gathered into one organised view, so you start from a whole picture rather than assembling one across a dozen tabs.",
      },
      {
        title: "AI Chart Analysis",
        body: "Price charts are read for structure, trend and repeating shapes, and what the analysis finds is described in plain language rather than assumed knowledge.",
      },
      {
        title: "Strategy Builder",
        body: "Set out the rules of an approach you already use, so the same criteria get applied the same way each time instead of being judged fresh from scratch.",
      },
      {
        title: "Risk Management",
        body: "Risk factors are surfaced alongside the opportunity rather than buried under it. The case against a position is part of the research, not an afterthought.",
      },
      {
        /* Deliberately not "we send you buy and sell calls". Selling trading
           signals is providing financial product advice in Australia and needs
           an AFS licence, and the comparison table further down this same page
           contrasts Lavandbit against exactly that. The copy therefore frames
           it as alerts on conditions the reader sets, which is a different
           product. The heading is the client's and is the part that needs a
           decision. */
        title: "AI Trading Signals",
        body: "Alerts when the conditions you have set are met, so you can look at what has changed rather than watching charts through the whole trading day.",
      },
      {
        title: "Backtesting of Strategies",
        body: "Test how a set of rules would have behaved against historical price data, so you can see how an approach held up over time before you rely on it.",
      },
    ],
  },

  audience: {
    eyebrow: "Who it is for",
    h2: "Built for Australian investors who do their own research",
    segments: [
      {
        title: "The self-directed investor",
        body: "You research your own positions and want better inputs, not someone else's opinion. Lavandbit organises the picture and leaves the judgement with you.",
      },
      {
        title: "The newer investor",
        body: "You are learning how markets behave and want to see patterns and risk explained in plain language rather than assumed knowledge.",
      },
      {
        title: "The SMSF trustee",
        body: "You are responsible for decisions in a self-managed fund and want research organised well enough to document and revisit.",
      },
    ],
  },

  trust: {
    /** Two lines at the section's measure, and it no longer repeats the first
     *  two points verbatim, which the previous heading did. */
    h2: "Information and analysis. Not advice, not a broker.",
    /** Each body trimmed to roughly three lines so the four points read as a
     *  set rather than four paragraphs. The substance is unchanged. */
    points: [
      {
        title: "Not financial advice",
        body: "Nothing on the platform or this website is financial advice, or a recommendation to buy or sell anything.",
      },
      {
        title: "Not a broker, and not a trading platform",
        body: "We do not place trades, hold funds, or connect to your brokerage account. Any decision to act is yours, through your own broker.",
      },
      {
        title: "Not a prediction machine",
        body: "No tool can see the future. AI can process far more information than a person and surface what might matter, but it cannot tell you what will happen.",
      },
      {
        title: "Not a substitute for your own judgement",
        body: "You know your goals and what you can afford to lose. No algorithm does. The platform supports your thinking rather than replacing it.",
      },
    ],
  },

  proof: {
    h2: "From people who research their own positions",
    /**
     * ⚠️  THE QUOTES BELOW ARE PLACEHOLDERS AND MUST BE REPLACED.
     *
     * Names, roles and location are set. The quote text is deliberately left
     * as a marked placeholder rather than written to fit the names, because
     * inventing words and attributing them to a named person is a fabricated
     * testimonial. Under the Australian Consumer Law that is misleading
     * conduct, and the FTC treats it the same way in the US. It is also a
     * credibility risk: a reader who knows Michael Turner and knows he never
     * said this has learned something about the whole site.
     *
     * Before publishing, for each person:
     *   1. Get their actual words, in writing.
     *   2. Get written permission to publish their name, role and location.
     *   3. Keep the quote free of returns, accuracy percentages and any other
     *      performance claim.
     *
     * If a quote cannot be obtained, remove that testimonial. Three placeholder
     * cards are worse than two real ones.
     */
    testimonials: [
      {
        quote:
          "[Michael's actual words. Ask what he was doing before, and one specific thing that changed. A concrete detail reads as true; three adjectives do not.]",
        name: "Michael Turner",
        role: "Independent Investor",
        location: "Australia",
      },
      {
        quote:
          "[Daniel's actual words. Ask for the frustration he had before and what changed after. Keep any numbers out of it.]",
        name: "Daniel Brooks",
        role: "Self-Directed Investor",
        location: "Australia",
      },
      {
        quote:
          "[Olivia's actual words. A quote that mentions what she still does herself is more believable than one claiming the tool does everything.]",
        name: "Olivia Bennett",
        role: "Private Investor",
        location: "Australia",
      },
    ],
  },

  comparison: {
    eyebrow: "How it compares",
    h2: "Lavandbit, manual research, and following someone else's calls",
    /** "Stock tips and signals" rather than "…and signal groups": at the
     *  column width this table uses, the longer label wrapped to two lines on
     *  its own while the headers either side sat on one. */
    columns: ["Researching by hand", "Stock tips and signals", "Lavandbit"],
    rows: [
      { label: "Covers hundreds of instruments at once", values: ["No", "Varies", "Yes"] },
      { label: "Patterns surfaced automatically", values: ["No", "Sometimes", "Yes"] },
      { label: "Risk factors shown alongside the idea", values: ["If you look", "Rarely", "Yes"] },
      { label: "You make the final decision", values: ["Yes", "No", "Yes"] },
      { label: "Independent of anyone's position", values: ["Yes", "No", "Yes"] },
      { label: "Costs your time", values: ["Hours weekly", "Low", "Minutes"] },
    ],
  },

  faq: {
    eyebrow: "Questions investors ask",
    h2: "Straight answers before you start",
    /** These are the questions the live site's FAQ page already answers -
     *  real queries worth targeting directly. */
    items: [
      {
        q: "What is Lavandbit?",
        a: "Lavandbit is a set of AI-assisted tools that help you research and understand financial markets. It organises market data, highlights possible patterns and trends, and presents what it finds in plain English. It is a research tool: it does not place trades, hold funds, or tell you what to buy.",
      },
      {
        q: "Is Lavandbit a broker?",
        a: "No. Lavandbit is not a broker, dealer or investment adviser. It does not execute trades and does not connect to your brokerage account. Any decision to act on your research is made by you, through your own broker.",
      },
      {
        q: "Is Lavandbit legit?",
        a: "Lavandbit is an Australian business, and its registered details are set out on the About page. It is a research and information tool, so there is no return to promise and nothing to guarantee. We state plainly on every page what the platform does and does not do, including that it does not provide financial advice.",
      },
      {
        q: "Is Lavandbit regulated in Australia?",
        a: "Lavandbit is not a broker, dealer or investment adviser, and it does not provide financial product advice. It is a software tool for market research: it does not hold client funds, does not deal in financial products, and does not act on anyone's behalf. If you need advice about your own situation, speak to someone licensed to give it.",
      },
      {
        q: "Can AI predict the market?",
        a: "No. No tool can predict market movements. AI can identify patterns in historical price behaviour and describe possible directions, but projections are informational and never guaranteed. Anyone claiming reliable prediction should be treated with caution.",
      },
      {
        q: "Does Lavandbit guarantee profits?",
        a: "No, and no honest tool can. Trading and investing involve risk, including the possible loss of the capital you put in. Lavandbit provides information and analysis only.",
      },
      {
        q: "What risks should I understand?",
        a: "The main ones are market risk, the value of investments can fall as well as rise, and the risk of over-trusting analysis. AI-generated insight can be incomplete, can be wrong, and is based on historical data. It should inform your thinking, not replace it.",
      },
      {
        q: "How do I get started?",
        a: "Register with your name, email and phone number. There is no payment required to register, and the team will be in touch with the next steps to set up your account.",
      },
    ],
  },

  closing: {
    h2: "Research the market with better inputs, and make your own call",
    body: "Tell us a little about how you invest. We will set up your account and walk you through what Lavandbit does, including the parts it does not do.",
    primaryCta: "Get Started Free",
    secondaryCta: "Talk to the team",
    microcopy: "No payment required to register. Your details are used only to set up your account.",
  },
} as const;
