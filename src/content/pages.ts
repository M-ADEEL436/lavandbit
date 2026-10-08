import { emails } from "@/content/site";

/**
 * Copy for the Tier 1 inner pages.
 *
 * ⚠️  The legal pages (privacy, terms, risk disclaimer) are working drafts,
 * not legal advice. Australian financial services and privacy law both apply
 * here, a qualified lawyer must review these before launch.
 *
 * Email addresses come from src/content/site.ts, so changing the domain there
 * updates every page at once.
 */

export const getStartedPage = {
  meta: {
    title: "Get Started Free | AI Market Research | Lavandbit",
    description:
      "Create your Lavandbit account and start researching markets with AI-assisted pattern recognition, trend analysis and risk insights. No payment required to register.",
  },
  eyebrow: "Get started",
  h1: "Create your Lavandbit account",
  sub: "Enter your details and we will set up your account and walk you through the platform, including the parts it does not do.",
  bullets: [
    "No payment required to register",
    "Your details are used only to set up your account",
    "Plain language tools built for Australian investors",
    "We will show you the platform on your own watchlist",
  ],
  formTitle: "Your details",
  formNote:
    "No payment required. Your details are used only to set up your account and are never sold.",
  whatNextHeading: "What happens next",
  whatNext: [
    "You get a confirmation email within one business day.",
    "A member of the team sets up your account and sends your access details.",
    "We offer a short walkthrough covering pattern recognition, trend tools and how risk is surfaced.",
    "You keep full control of what you research and what, if anything, you act on.",
  ],
  objectionHeading: "Before you sign up",
  objections: [
    {
      title: "This is not financial advice",
      body: "Lavandbit provides informational tools and market research. Nothing in the platform or on this site is a recommendation to buy or sell any investment.",
    },
    {
      title: "This is not a broker",
      body: "Lavandbit does not place trades, hold funds, or connect to your brokerage account. Any decision to act is made by you, through your own broker.",
    },
    {
      title: "There is no cost to register",
      body: "Registration requires no payment. Create an account and use the core research tools before deciding whether anything paid is worth it to you.",
    },
  ],
};

export const howItWorksPage = {
  meta: {
    title: "How Lavandbit Works | AI Market Analysis Process",
    description:
      "How Lavandbit turns raw market data into clear analysis: data gathered, patterns scanned, insights written in plain language, and the final decision left to you.",
  },
  eyebrow: "How it works",
  h1: "From raw market data to your own informed decision",
  sub: "Four stages. The tools do the scanning and organising, and you do the deciding, which is the only arrangement that makes sense for research software.",
  steps: [
    {
      number: "01",
      title: "Market data is gathered and organised",
      body: "Lavandbit collects market information across Australian and international markets into one place, so your starting point is a single organised view rather than a dozen browser tabs.",
      detail: [
        "ASX-listed stocks and international markets together",
        "Prices, movements and market structure in one view",
        "Watchlists so the instruments you care about stay together",
      ],
    },
    {
      number: "02",
      title: "AI reviews the data for patterns and structure",
      body: "The analysis layer scans price data for repeating shapes and structures that may signal a possible setup, and describes the trend structure around them. This is the part that is impractical to do thoroughly by hand.",
      detail: [
        "Pattern recognition across hundreds of instruments at once",
        "Trend structure and momentum description",
        "Risk factors surfaced alongside the pattern, not after it",
        "No prediction, the output describes what the data shows",
      ],
    },
    {
      number: "03",
      title: "You get plain-language insight, not a wall of indicators",
      body: "What the analysis found is written up in clear English, including the case against the idea. The output is designed to be understood without a technical background.",
      detail: [
        "Summaries in plain language rather than assumed jargon",
        "Risk information included in the same view as the opportunity",
        "Market insights that summarise themes rather than headlines",
        "Projections clearly labelled as informational, never guaranteed",
      ],
    },
    {
      number: "04",
      title: "You decide what to do with it",
      body: "Lavandbit does not act. It does not place orders, connect to your broker, or tell you what to buy. What you do with the research is your decision, made with your own goals, time horizon and risk tolerance in mind.",
      detail: [
        "No trade execution of any kind",
        "No connection to your brokerage account",
        "No recommendations, because this is information, not advice",
        "Your research stays yours to interpret",
      ],
    },
  ],
  afterHeading: "What the platform never does",
  after: [
    "It does not place trades or connect to your brokerage account.",
    "It does not hold your funds. It has no access to them at all.",
    "It does not tell you what to buy, sell or hold.",
    "It does not guarantee outcomes, because no tool can.",
  ],
  cta: {
    h2: "See the whole process on your own watchlist",
    body: "Register free and we will walk through the platform with instruments you already follow, so you can judge whether the analysis is useful to you.",
    button: "Get Started Free",
  },
};

export const featuresPage = {
  meta: {
    title: "Features | AI Market Analysis Tools | Lavandbit Australia",
    description:
      "Pattern recognition, trend insights, risk awareness and stock analysis: what each tool does, and how it helps you research Australian and global markets.",
  },
  eyebrow: "Features",
    h1: "What is inside the platform",
  sub: "Six capabilities, and the specific problem each one removes. A feature is only worth listing if you can name what it saves you from.",
  groups: [
    {
      eyebrow: "Patterns",
      title: "Pattern recognition",
      problem: "Repeating structures are effectively invisible when you review charts by hand.",
      body: "The analysis layer scans price data across hundreds of instruments for repeating shapes and structures that may signal a possible setup. Rather than studying charts one at a time, you get a shortlist worth a closer look.",
      points: [
        "Scans across ASX-listed and international markets continuously",
        "Surfaces candidate patterns rather than confirming conclusions",
        "Each pattern is shown in context, not in isolation",
        "You decide which are worth your attention",
      ],
    },
    {
      eyebrow: "Risk",
      title: "Risk awareness",
      problem: "Most research argues the case for a position and treats the case against it as an afterthought.",
      body: "Risk factors are surfaced in the same view as the opportunity. How far a position could fall, what would invalidate the idea, and what the downside looks like, considered while you are still deciding, not after.",
      points: [
        "Downside shown alongside the setup, not buried beneath it",
        "Volatility and drawdown context for each instrument",
        "Risk framing written in plain language",
        "Built into the research flow rather than bolted on",
      ],
    },
    {
      eyebrow: "Stocks",
      title: "AI-assisted stock analysis",
      problem: "Assembling a view of a company means jumping between five different sources.",
      body: "Stock and market information is brought into one organised view, with AI-assisted analysis summarising what the data shows. Less time collecting, more time understanding.",
      points: [
        "ASX-listed stocks in one consistent view",
        "Organised summaries instead of scattered data points",
        "Compare instruments on the same basis",
        "Watchlists keep the companies you follow together",
      ],
    },
    {
      eyebrow: "Trends",
      title: "Trend insights",
      problem: "Direction is obvious in hindsight and ambiguous in the moment.",
      body: "Trend tools describe the possible direction of a market from recent price behaviour and highlight shifts in momentum. A compass rather than a crystal ball, informational, and never guaranteed.",
      points: [
        "Direction described from recent price behaviour",
        "Momentum shifts highlighted as they develop",
        "Clearly labelled as informational, not predictive",
        "Best read alongside your own research, not instead of it",
      ],
    },
    {
      eyebrow: "Market",
      title: "Market insights",
      problem: "Financial news is written to be read, not to be acted on.",
      body: "Insights summarise what is moving across markets and why, in digestible form. You see the broader picture without working through everything that was written about it.",
      points: [
        "Themes rather than headline volume",
        "Australian and global market context together",
        "Written to be understood quickly",
        "No noise added to fill a page",
      ],
    },
    {
      eyebrow: "Research",
      title: "Research tools",
      problem: "Good analysis scattered across tabs and screenshots is not research, it is a pile.",
      body: "Notes, watchlists and analysis organised in one place, so your thinking builds over time instead of being reconstructed from scratch every time you sit down.",
      points: [
        "Watchlists for the instruments you follow",
        "Notes kept alongside the analysis they relate to",
        "Revisit your own reasoning later",
        "Useful for documenting decisions in a self-managed fund",
      ],
    },
  ],
  cta: {
    h2: "See it working on instruments you already follow",
    body: "Register free and we will walk through pattern recognition, trend analysis and risk on your own watchlist.",
    button: "Get Started Free",
  },
};

export const pricingPage = {
  meta: {
    title: "Plans | AI Market Research Tools | Lavandbit Australia",
    description:
      "Lavandbit pricing and plans. Registration is free, no payment required to create an account and start researching markets.",
  },
  eyebrow: "Plans",
  h1: "Start free, and see whether it earns its place",
  sub: "Registration requires no payment, and no card details are asked for at any point.",
  plans: [
    {
      id: "free",
      name: "Free",
      price: "$0",
      period: "to register",
      summary: "Create an account and use the core research tools.",
      features: [
        "Pattern recognition",
        "Trend insights",
        "Market insights",
        "[Watchlist limit]",
        "Email support",
      ],
      cta: "Get Started Free",
      featured: false,
    },
    {
      id: "standard",
      name: "[Plan name]",
      price: "[$XX]",
      period: "per month",
      summary: "[One line on who this tier is for.]",
      features: [
        "Everything in Free",
        "[Expanded market coverage]",
        "[More watchlists]",
        "[Export and reporting]",
        "Priority support",
      ],
      cta: "Get Started Free",
      featured: true,
    },
    {
      id: "custom",
      name: "[Plan name]",
      price: "Custom",
      period: "talk to us",
      summary: "[One line for SMSFs, advisers or high-volume users.]",
      features: [
        "Everything above",
        "Additional seats",
        "Onboarding session",
        "[Data export options]",
      ],
      cta: "Talk to the team",
      featured: false,
    },
  ],
  includedHeading: "Included on every plan",
  included: [
    "No payment required to register",
    "Information and analysis, never advice",
    "Risk information in the same view as the opportunity",
    "No connection to your brokerage account",
    "Cancel at any time",
  ],
  faqHeading: "Plan questions",
  faq: [
    {
      q: "Do I need to pay to try Lavandbit?",
      a: "No. Registration requires no payment and no card details, and there is no time limit on a free account.",
    },
    {
      q: "Does Lavandbit take a percentage of my trades?",
      a: "No. Lavandbit is a research tool. It does not place trades and has no access to your brokerage account, so there is nothing for it to take a percentage of. It is not a broker and not a broker's agent.",
    },
    {
      q: "What happens if I cancel?",
      a: "You can ask us to close your account at any time. Email hello@lavandbit.com and we will confirm in writing once it is done.",
    },
    {
      q: "Do you offer refunds?",
      a: "Registration is free, so there is nothing to refund on a free account. If you have paid for a plan and have a concern, contact us and we will work through it with you.",
    },
    {
      q: "Is there a plan for SMSFs or advisers?",
      a: "Talk to us. Tell us how you work and we will confirm what is available for funds and advisory firms today.",
    },
  ],
};

export const aboutPage = {
  meta: {
    title: "About Lavandbit | AI Market Research Australia",
    description:
      "Who builds Lavandbit, why the platform gives analysis rather than advice, and how the company is structured and regulated in Australia.",
  },
  eyebrow: "About",
  h1: "We build research tools, not recommendations",
  sub: "Lavandbit exists because most investors do not lack information. They lack a clear, organised view of it, and the time to assemble one while also holding down a job.",
  story: [
    "The tools available to self-directed investors tend to fall into two camps. At one end, professional terminals built for people who trade full time. At the other, apps that make it very easy to act and very hard to understand what you are acting on.",
    "Lavandbit is built for the space in between: investors who research their own positions, want better inputs, and have no intention of handing the decision to software. The platform organises market data, scans for patterns and trends, and puts risk information in front of you at the moment you are deciding, then stops there.",
    "That last part is deliberate. We do not tell you what to buy, we do not execute anything, and we do not touch your brokerage account. What we can do is make the research faster and clearer than doing it by hand. What you do with it stays your call, because you know your goals and your circumstances and no algorithm does.",
  ],
  /** ⚠️ Replace with the real team. Named, credentialled people is a direct
   *  E-E-A-T ranking factor on financial (YMYL) pages. */
  teamHeading: "Who you are dealing with",
  team: [
    {
      id: "person-1",
      name: "[Full name]",
      role: "[Role, e.g. Co-founder]",
      bio: "[Two or three sentences of real background. Years in markets or software, what they built before, what they are qualified in. Vague bios rank worse than no bio, Google's quality raters check whether the author demonstrably knows the subject.]",
    },
    {
      id: "person-2",
      name: "[Full name]",
      role: "[Role, e.g. Head of Product]",
      bio: "[Real background, products built, domain experience, relevant credentials.]",
    },
    {
      id: "person-3",
      name: "[Full name]",
      role: "[Role, e.g. Head of Research]",
      bio: "[Real background. For a market analysis product, a named person responsible for analytical quality is a genuine trust signal.]",
    },
  ],
  factsHeading: "Company details",
  facts: [
    { label: "Legal entity", value: "[Legal entity name and ABN]" },
    { label: "Registered office", value: "[Registered office address, Australia]" },
    { label: "Regulatory status", value: "[Client must supply the exact regulatory position]" },
    { label: "Founded", value: "[Year]" },
    { label: "Contact", value: emails.general },
  ],
};

export const contactPage = {
  meta: {
    title: "Contact Lavandbit | Support & Enquiries",
    description:
      "Talk to the Lavandbit team about the platform, your account, or what the tools cover. Support and general enquiries, answered within one business day.",
  },
  eyebrow: "Contact",
  h1: "Talk to a person",
  sub: "Most messages get a reply within one business day. If your question is about whether the platform covers the instruments you follow, that is usually quicker to answer on a call.",
  channels: [
    {
      label: "General enquiries",
      value: emails.general,
      note: "Best for: platform questions, plans, getting started.",
    },
    {
      label: "Support",
      value: emails.support,
      note: "Best for: existing accounts and technical issues.",
    },
    {
      label: "Privacy",
      value: emails.privacy,
      note: "Best for: access, correction or deletion requests under the Australian Privacy Principles.",
    },
    {
      label: "Phone",
      value: "[+61 0 0000 0000]",
      note: "Monday to Friday, 09:00 - 17:00 AEST.",
    },
    {
      label: "Registered office",
      value: "[Registered office address, Australia]",
      note: "Correspondence address. Not a support location.",
    },
  ],
  formTitle: "Send a message",
};

export const thankYouPage = {
  meta: {
    title: "Thank You | Lavandbit",
  },
  h1: "Your details are in",
  sub: "A member of the team will be in touch within one business day to set up your account and send your access details.",
  heading: "What happens next",
  steps: [
    "You get a confirmation email with your next steps.",
    "We set up your account and send your access details.",
    "We offer a short walkthrough on your own watchlist, covering pattern recognition, trend tools and how risk is surfaced.",
    "You keep full control of what you research, and what, if anything. You act on.",
  ],
  note: "If you need to change anything, reply to the confirmation email.",
};

export const riskDisclaimerPage = {
  meta: {
    title: "Risk Disclaimer | Lavandbit Australia",
    description:
      "Risk warning for users of Lavandbit. Trading and investing involve risk including loss of capital, and Lavandbit provides information only, not financial advice.",
  },
  eyebrow: "Legal",
  h1: "Risk disclaimer",
  updated: "Last updated 7 October 2026",
  intro:
    "This notice explains the risks of trading and investing, and the limits of what Lavandbit provides. Read it before acting on anything you research here.",
  sections: [
    {
      heading: "General information only, not financial advice",
      body: [
        "Lavandbit provides informational tools and market research. Nothing on this website, in the platform, or in any communication from us constitutes financial product advice, a recommendation, or an offer to buy or sell any financial product.",
        "We do not take into account your objectives, financial situation or needs. Because of that, you should consider whether any information is appropriate for your circumstances and, if necessary, seek advice from a licensed adviser before making any decision.",
      ],
    },
    {
      heading: "Investment risk",
      body: [
        "Trading and investing involve risk, including the possible loss of the capital you put in. The value of investments can go down as well as up, and you may get back less than you invested.",
        "Past performance is not a reliable indicator of future performance. Nothing in the platform or on this site should be read as a promise or guarantee of any outcome.",
      ],
    },
    {
      heading: "The limits of AI and automated analysis",
      body: [
        "AI systems process large amounts of data and can identify patterns that a person reviewing charts by hand would miss. They cannot predict the future. Markets are influenced by events, sentiment and factors that no model captures.",
        "Analysis generated by the platform may be incomplete, may be wrong, and is based on historical data that may not reflect current or future conditions. It is a research input, not a conclusion.",
      ],
    },
    {
      heading: "Lavandbit is not a broker",
      body: [
        "Lavandbit does not place trades, hold funds, or connect to your brokerage account. It does not execute anything on your behalf and has no access to your money.",
        "Any transaction you make is made by you, through your own broker, on your own judgement and at your own risk.",
      ],
    },
    {
      heading: "Regulatory position",
      body: [
        "Lavandbit provides information and analysis tools. It is not a broker, dealer or investment adviser, it does not provide financial product advice, and it does not hold client funds or deal in financial products on anyone's behalf. Registered business details are published on the About page.",
        "If you need advice about your own circumstances, speak to someone licensed to give it.",
      ],
    },
    {
      heading: "Your responsibility",
      body: [
        "You are solely responsible for your investment decisions and for determining whether any information is suitable for you. Do your own research, understand what you are investing in, and never invest money you cannot afford to lose.",
      ],
    },
  ],
};

export const privacyPage = {
  meta: {
    title: "Privacy Policy | Lavandbit Australia",
    description:
      "How Lavandbit collects, uses and protects personal information, in line with the Australian Privacy Principles.",
  },
  eyebrow: "Legal",
  h1: "Privacy policy",
  updated: "Last updated 7 October 2026",
  intro:
    "This policy explains what personal information Lavandbit collects, why it is collected, how it is used and how you can have it corrected or deleted. It is written to sit alongside the Australian Privacy Principles.",
  sections: [
    {
      heading: "What we collect",
      body: [
        "Information you give us directly: your name, email address, phone number and any message you send through a form on this website.",
        "Information collected automatically: IP address, browser and device type, pages visited and referring URL, collected through cookies and analytics tools.",
        "Account information, if you register: the details needed to create and secure your account, and the research you save within the platform.",
      ],
    },
    {
      heading: "How we use it",
      body: [
        "To set up and manage your account, and to contact you about it.",
        "To provide and support the platform.",
        "To send communications you have opted in to, which you can opt out of at any time.",
        "To meet legal, regulatory and accounting obligations.",
      ],
    },
    {
      heading: "Disclosure",
      body: [
        "We do not sell your personal information. We may disclose it to service providers who help us operate, hosting, email delivery, analytics and support, and to authorities where the law requires it.",
        "Our service providers are bound to use your information only to provide the service to us. Where information is handled outside Australia, we take reasonable steps to ensure it receives comparable protection under the Australian Privacy Principles.",
      ],
    },
    {
      heading: "Access and correction",
      body: [
        `You may request access to the personal information we hold about you, and ask us to correct it if it is inaccurate. Contact ${emails.privacy} to make a request.`,
        "If you are not satisfied with our response, you may complain to the Office of the Australian Information Commissioner (OAIC).",
      ],
    },
    {
      heading: "Retention and security",
      body: [
        "We keep personal information only for as long as it is needed for the purpose it was collected, or for as long as the law requires. You can ask us to delete your account and the personal information held in it, and we will tell you what we have done.",
        "How account access is protected is described on the security page.",
      ],
    },
    {
      heading: "Cookies",
      body: [
        "We use cookies for analytics and to keep you signed in. We do not use them to build an advertising profile of you, and we do not sell cookie data. You can control or clear cookies through your browser settings at any time.",
      ],
    },
    {
      heading: "Contact",
      body: [`Questions about this policy, or a privacy request: ${emails.privacy}.`],
    },
  ],
};

export const termsPage = {
  meta: {
    title: "Terms and Conditions | Lavandbit Australia",
    description:
      "The terms governing your use of the Lavandbit research platform and website.",
  },
  eyebrow: "Legal",
  h1: "Terms and conditions",
  updated: "Last updated 7 October 2026",
  intro:
    "These terms set out the agreement between you and Lavandbit for your use of this website and the research platform. They are written to sit alongside the Australian Consumer Law, not around it.",
  sections: [
    {
      heading: "Agreement",
      body: [
        "By accessing this website or using the Lavandbit platform, you agree to these terms. If you do not agree, do not use the service.",
      ],
    },
    {
      heading: "What the service is",
      body: [
        "Lavandbit provides software tools for market research and analysis. It is an information service. Lavandbit is not a broker, dealer, market participant or investment adviser, does not hold client funds, and does not execute transactions.",
      ],
    },
    {
      heading: "No financial advice",
      body: [
        "Lavandbit does not provide financial product advice and does not consider your objectives, financial situation or needs. Any decision you make is your own, and you should seek licensed advice where appropriate.",
      ],
    },
    {
      heading: "Your responsibilities",
      body: [
        "You are responsible for the decisions you make, for the accuracy of the information you provide, and for keeping your account credentials secure. You must be legally able to enter into these terms and to invest in the products you research.",
      ],
    },
    {
      heading: "No warranty of accuracy or outcome",
      body: [
        "Market data and analysis are provided as-is. We do not warrant that the service will be uninterrupted or error-free, or that any analysis will be accurate, complete or predictive of future performance. See the risk disclaimer, which forms part of these terms.",
      ],
    },
    {
      heading: "Fees and cancellation",
      body: [
        "Registration is free and no card details are collected to create an account. If paid plans are introduced, the fees, billing cycle and cancellation terms will be published on this page, and you will see them before you are asked to pay anything.",
        "You can ask us to close your account at any time. Email hello@lavandbit.com and we will confirm in writing once it is done.",
      ],
    },
    {
      heading: "Limitation of liability",
      body: [
        "Nothing in these terms excludes, restricts or modifies any guarantee, right or remedy you have under the Australian Consumer Law, or under any other law, that cannot lawfully be excluded, restricted or modified.",
      ],
    },
    {
      heading: "Governing law",
      body: ["These terms are governed by the laws of Australia."],
    },
  ],
};
