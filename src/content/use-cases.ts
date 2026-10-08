import type { UseCase } from "@/content/types";

export const useCases: UseCase[] = [
  {
    slug: "self-directed-investors",
    name: "Self-Directed Investors",
    metaTitle: "AI Research Tools for Self-Directed Investors | Lavandbit",
    description:
      "For investors who make their own decisions and want better inputs: AI-assisted pattern recognition, trend analysis and risk framing across ASX and global markets.",
    keyword: "ai tools for self directed investors",
    h1: "Better inputs for the decisions you already make yourself",
    intro:
      "You are not looking for someone to manage your money. You are looking for a clearer view of the market than you can assemble by hand in the time you have.",
    pains: [
      {
        title: "Research time disappears into collecting, not thinking",
        body: "Most of an evening goes on gathering, prices in one tab, movements in another, context somewhere else. By the time the picture is assembled, there is no time left to think about what it means.",
      },
      {
        title: "You only see what you happen to open",
        body: "Reviewing charts manually means reviewing the ones you thought of. Anything outside your existing watchlist is effectively invisible, which quietly narrows your universe over time.",
      },
      {
        title: "The case against an idea gets skipped",
        body: "When you research alone, it is easy to build the argument for a position and never write down what would prove it wrong. That gap shows up later, usually at the worst moment.",
      },
    ],
    fits: [
      "You make your own investment decisions and intend to keep doing so",
      "You follow ASX-listed and global stocks",
      "You want broader coverage than manual review gives you",
      "You want risk in the same view as the opportunity, by default",
    ],
    notFor:
      "This is not for you if you want someone else to make the decisions. Lavandbit does not recommend, manage or execute anything, and it will not tell you what to buy.",
    body: [
      { t: "h2", text: "What actually changes" },
      {
        t: "p",
        text: "The first change is coverage. Instead of reviewing the handful of charts you thought to open, the analysis scans across ASX-listed and international markets and surfaces candidates worth a closer look. You start from a shortlist rather than a blank page.",
      },
      {
        t: "p",
        text: "The second is that risk arrives with the idea rather than after it. Downside context, volatility and what would invalidate a setup appear in the same view, which makes it much harder to talk yourself into something without seeing the other side.",
      },
      {
        t: "note",
        tone: "tip",
        title: "Where the time actually goes",
        text: "Most of the saving comes from the assembly work, collecting prices, movements and context into one view. That is mechanical, and it is where the hours go.",
      },
      { t: "h2", text: "What you still do yourself" },
      {
        t: "ul",
        items: [
          "**Decide.** Nothing in the platform makes a call. You weigh what you have found against your goals, your time horizon and what you can afford to lose.",
          "**Judge.** A pattern is a starting point, not a conclusion. Whether it matters depends on things about the company and the market that no scan knows.",
          "**Act.** Lavandbit does not trade and does not connect to your broker. Whatever you do next happens through your own broker, on your own judgement.",
        ],
      },
      {
        t: "cta",
        title: "Run it on instruments you already know",
        text: "Register free and we will look at the analysis for stocks you follow closely, so you can judge it against your own reading.",
        button: "Get Started Free",
        href: "/get-started",
      },
      { t: "h2", text: "Where it fits in a normal week" },
      {
        t: "ol",
        items: [
          "**Set up your watchlist** with the companies and markets you actually follow. Ten minutes, once.",
          "**Review the week's output** rather than checking daily. Patterns and trend structure do not change meaningfully hour to hour.",
          "**Investigate what looks interesting** using the research tools, and note your reasoning as you go.",
          "**Revisit your own notes** before acting. Your reasoning from three weeks ago is often more useful than today's reaction to a headline.",
        ],
      },
    ],
    faq: [
      {
        q: "Does Lavandbit tell me what to buy?",
        a: "No. Lavandbit surfaces patterns, trends and risk information and leaves the decision with you. It is a research tool, not a source of recommendations, and it does not provide financial advice.",
      },
      {
        q: "Does Lavandbit connect to my broker?",
        a: "No. Lavandbit does not place trades, does not connect to brokerage accounts, and has no access to your funds. It is research software only.",
      },
      {
        q: "Is it useful if I already do my own research?",
        a: "That is exactly who it is built for. It removes the assembly work and widens your coverage, while leaving the judgement, which is the part that actually needs a human, entirely with you.",
      },
    ],
  },

  {
    slug: "beginners",
    name: "New Investors",
    metaTitle: "AI Market Research for Beginners | Lavandbit Australia",
    description:
      "Learning how markets behave? See patterns, trends and risk explained in plain language, without the jargon or the promises, so you can build your own understanding.",
    keyword: "ai trading for beginners australia",
    h1: "Learn how markets behave, in plain language",
    intro:
      "The investing industry has a habit of explaining things in vocabulary that assumes you already know the answer. Lavandbit is written the other way around. If a summary needs a glossary to understand, it has failed.",
    pains: [
      {
        title: "Most material assumes knowledge you do not have yet",
        body: "Commentary is often written for people who already know what the terms mean and why they matter. That makes it very hard to use as a starting point.",
      },
      {
        title: "Everything is presented with more confidence than it deserves",
        body: "Being new means the confident voice is the most persuasive one, which is exactly backwards. The honest sources are the ones that hedge.",
      },
      {
        title: "It is hard to tell a bad idea from a bad outcome",
        body: "When a decision goes wrong, you cannot tell whether the reasoning was flawed or the market simply moved against you. That makes it hard to learn anything from it.",
      },
    ],
    fits: [
      "You are new to investing and building your understanding",
      "You want plain-language summaries rather than assumed jargon",
      "You want risk explained alongside opportunity, not instead of it",
      "You intend to make your own decisions as you get more confident",
    ],
    notFor:
      "This will not tell you what to invest in, and it will not do the learning for you. If you want recommendations to follow, this is not that, and no honest tool is.",
    body: [
      { t: "h2", text: "What AI can and cannot do for a new investor" },
      {
        t: "p",
        text: "The honest version: it is good at showing you what is there. It scans for patterns across hundreds of stocks so you are not limited to the few you happened to open, it describes trend structure, and it puts risk information in front of you. What it cannot do is tell you whether a company is a good business, or what will happen next.",
      },
      {
        t: "p",
        text: "That is not a limitation of this particular tool. There is no software that answers those questions, and products that claim to are the ones to be most careful with.",
      },
      {
        t: "note",
        tone: "warn",
        title: "The most important thing on this page",
        text: "Before acting on anything you research: the value of investments can go down as well as up, and you may get back less than you put in. Never invest money you cannot afford to lose, and consider licensed advice for your own circumstances.",
      },
      { t: "h2", text: "A sensible way to start" },
      {
        t: "ol",
        items: [
          "**Learn the vocabulary first.** The [glossary](/glossary) explains the terms that actually matter, drawdown, position sizing, risk, in plain language and without padding.",
          "**Follow a handful of companies you understand.** Familiarity with the business makes the price movements easier to interpret, which speeds up everything else.",
          "**Use the analysis as a starting point, not an answer.** When something is surfaced, ask why. That question is where the learning happens.",
          "**Write down your reasoning before you act.** Revisiting it later is the fastest way to find out whether your thinking or the market was the problem.",
          "**Start small, and expect to be wrong.** The tuition is unavoidable; the aim is to keep it cheap.",
        ],
      },
      {
        t: "cta",
        title: "Start with instruments you already understand",
        text: "Register free and we will walk through the analysis on companies you already know something about.",
        button: "Get Started Free",
        href: "/get-started",
      },
      { t: "h2", text: "What plain language actually means here" },
      {
        t: "p",
        text: "Every summary the platform produces is written to be understood without a technical background. Where a term is unavoidable, it is explained in the same sentence. Trend readings are described as informational rather than as forecasts, because that is what they are.",
      },
      {
        t: "p",
        text: "It is a deliberate choice, and it costs something, plain language is longer than jargon. It is worth it, because a summary you cannot evaluate is worse than no summary at all.",
      },
    ],
    faq: [
      {
        q: "Is Lavandbit suitable for beginners?",
        a: "Yes, with an important caveat: it will not tell you what to invest in, and it will not make the learning happen for you. What it does is show you patterns, trends and risk in plain language, so you can build your own understanding faster than reviewing charts by hand.",
      },
      {
        q: "Do I need experience to use it?",
        a: "No. The analysis is written without assumed jargon. Some familiarity with markets helps you interpret what you are looking at, but it is not required to use the platform.",
      },
      {
        q: "Can AI tell me if a company is a good investment?",
        a: "No. AI can show you what price data contains, patterns, trend structure, risk factors. It cannot assess the quality of a business, and it cannot tell you what will happen. Any tool claiming otherwise should be treated with caution.",
      },
    ],
  },

  {
    slug: "busy-professionals",
    name: "Busy Professionals",
    metaTitle: "AI Market Research Around a Full-Time Job | Lavandbit",
    description:
      "Stay across your holdings and the wider market without spending every evening rebuilding the same view. AI-assisted research for investors with limited time.",
    keyword: "market research for busy professionals",
    h1: "Stay informed in the time you actually have",
    intro:
      "You have a portfolio, a view about how you want to invest, and almost no time during the week to act on either. The problem is not interest. It is that research expands to fill whatever time you give it.",
    pains: [
      {
        title: "Market hours are working hours",
        body: "The part of the day when markets are most active is exactly when you cannot look. By the time you sit down, you are reviewing decisions you could not have made anyway.",
      },
      {
        title: "Every session starts from scratch",
        body: "Without a record of where you left off, each research session begins with rebuilding context you already built last week. That is the single biggest time sink there is.",
      },
      {
        title: "News arrives without structure",
        body: "Headlines reach you continuously and out of order. Volume of information is not the same as understanding, and more of it rarely produces a better decision.",
      },
    ],
    fits: [
      "You invest directly and want to keep doing so",
      "Your available research time is evenings and weekends",
      "You want to stay across the market without checking constantly",
      "You would rather review once properly than skim daily",
    ],
    notFor:
      "This is not for someone who wants to trade actively during the day. Lavandbit is a research tool with no execution of any kind. It will not act on your behalf.",
    body: [
      { t: "h2", text: "What the time saving actually comes from" },
      {
        t: "p",
        text: "Most research time is assembly: collecting prices, checking movements, finding context. That work is mechanical and it is what the platform takes over. What remains is the part that needed you, judgement about whether something is worth acting on.",
      },
      {
        t: "p",
        text: "The second saving is continuity. Watchlists and notes persist, so a session resumes where the last one stopped instead of starting from a blank page.",
      },
      {
        t: "note",
        tone: "tip",
        title: "The realistic time commitment",
        text: "Set-up takes about ten minutes once. After that, a weekly review is enough for most investors, patterns and trend structure do not change meaningfully hour to hour, and checking daily mostly produces worse decisions.",
      },
      { t: "h2", text: "A weekly routine that fits" },
      {
        t: "ol",
        items: [
          "**Weekend, twenty minutes.** Review what the analysis surfaced across your watchlist during the week.",
          "**Follow up on two or three.** Investigate properly rather than skimming everything.",
          "**Write your reasoning down.** A short note on why something interested you is worth more next month than a screenshot.",
          "**Then leave it.** Between sessions the platform is doing the scanning. You do not need to.",
        ],
      },
      {
        t: "cta",
        title: "Set it up on a weekend, review weekly",
        text: "Register free and we will set up a watchlist with the instruments you already follow.",
        button: "Get Started Free",
        href: "/get-started",
      },
      { t: "h2", text: "The trap to avoid" },
      {
        t: "p",
        text: "Having research available on your phone makes it tempting to check constantly, which is the opposite of what limited time should be doing for you. Frequent checking increases the chance of reacting to noise and decreases the chance of following your own plan.",
      },
      {
        t: "p",
        text: "Treat the platform as something you visit deliberately, not something you graze. The analysis will still be there on the weekend, and it will be less distracting than the market's moment-to-moment movement.",
      },
    ],
    faq: [
      {
        q: "How much time does Lavandbit take each week?",
        a: "After a short set-up, most investors find a weekly review is enough. The platform scans continuously, so there is no need to check daily, and checking daily tends to make decisions worse rather than better.",
      },
      {
        q: "Can I use it if I cannot look at markets during the day?",
        a: "Yes. It is research software, not a trading platform, so nothing depends on you being available at a particular moment. You review the analysis when it suits you.",
      },
      {
        q: "Will it work on my phone?",
        a: "The platform runs in a browser and is built to work on a phone as well as a desktop, so there is nothing to install and nothing to update. No app store account is needed.",
      },
    ],
  },

  {
    slug: "smsf-trustees",
    name: "SMSF Trustees",
    metaTitle: "AI Research Tools for SMSF Trustees | Lavandbit Australia",
    description:
      "For self-managed super fund trustees who need investment research organised, documented and revisitable, with the decisions kept firmly in your own hands.",
    keyword: "smsf investment research tools",
    h1: "Research you can revisit, and document, and stand behind",
    intro:
      "As a trustee you are responsible for the fund's investment decisions, and you may need to demonstrate how those decisions were reached. Research scattered across browser tabs and screenshots is not a record of anything.",
    pains: [
      {
        title: "The reasoning behind a decision is rarely written down",
        body: "Months later you know what you did but not why. That makes it hard to review your own process, and harder to show that a decision was reasoned rather than reactive.",
      },
      {
        title: "Investment strategy obligations are ongoing",
        body: "Trustees are expected to prepare and regularly review an investment strategy. Doing that well means having a documented view of the market and how the fund's holdings sit within it.",
      },
      {
        title: "Good research habits are hard to sustain alone",
        body: "Without a consistent process, the quality of your analysis depends on how much time and energy you have that month, which is exactly the variability you are trying to avoid in a long-term fund.",
      },
    ],
    fits: [
      "You are a trustee of a self-managed super fund",
      "You make the fund's investment decisions directly",
      "You want your research organised and revisitable",
      "You want risk considered alongside opportunity, consistently",
    ],
    notFor:
      "Lavandbit does not provide financial advice, does not consider your fund's circumstances, and cannot help you meet your trustee obligations on its own. It is a research and organisation tool.",
    body: [
      { t: "h2", text: "What it can and cannot do for a trustee" },
      {
        t: "p",
        text: "Be clear about this: Lavandbit is not a compliance tool and does not give advice. It cannot tell you whether an investment is appropriate for your fund, and it does not know your fund's circumstances, objectives or member composition. Those obligations remain yours.",
      },
      {
        t: "p",
        text: "What it can do is make the research side of the job more organised and more consistent, which is the part that usually gets squeezed when life is busy.",
      },
      { t: "h2", text: "Where it genuinely helps" },
      {
        t: "ul",
        items: [
          "**A consistent process.** The same analysis applied the same way each time, rather than depending on how much time you had that month.",
          "**Risk in the same view.** Downside context sits alongside the opportunity, which makes it harder to consider one without the other.",
          "**Documented reasoning.** Notes saved alongside the analysis they relate to, so your thinking is reviewable later.",
          "**Broader coverage.** ASX-listed and international markets scanned together, rather than only what you thought to open.",
        ],
      },
      {
        t: "note",
        tone: "warn",
        title: "What this does not replace",
        text: "Your fund's investment strategy, your trustee obligations under superannuation law, and professional advice where your circumstances call for it. A research tool supports the process; it does not discharge any of those responsibilities.",
      },
      {
        t: "cta",
        title: "See how the research is organised",
        text: "Register free and we will walk through watchlists, notes and how the analysis is presented for each instrument.",
        button: "Get Started Free",
        href: "/get-started",
      },
      { t: "h2", text: "A workable routine for a trustee" },
      {
        t: "ol",
        items: [
          "**Quarterly, review the fund's holdings** against the investment strategy, with your notes from the period to hand.",
          "**Monthly, review what the analysis surfaced** across your watchlist and note anything worth following up.",
          "**As decisions are made, record the reasoning.** This is the habit that makes the quarterly review useful rather than a reconstruction exercise.",
        ],
      },
      {
        t: "p",
        text: "For the terminology you will run into while reviewing, [drawdown](/glossary/drawdown), [position sizing](/glossary/position-sizing), [market regime](/glossary/market-regime), the [glossary](/glossary) explains each in plain language.",
      },
    ],
    faq: [
      {
        q: "Does Lavandbit provide financial advice for SMSFs?",
        a: "No. Lavandbit provides informational tools and market research only. It does not consider your fund's objectives, financial situation or needs, and nothing in the platform is a recommendation or financial product advice.",
      },
      {
        q: "Can Lavandbit help me meet my trustee obligations?",
        a: "It can help you keep research organised and documented, which supports a consistent process. It does not discharge any trustee obligation under superannuation law, and it is not a compliance or advice service. Get proper advice for those requirements.",
      },
      {
        q: "Can the analysis be used across multiple holdings?",
        a: "The platform covers ASX-listed and international markets, and watchlists let you keep the instruments relevant to the fund together. Contact us if you need to confirm a specific limit for your fund.",
      },
    ],
  },

  {
    slug: "asx-investors",
    name: "ASX Investors",
    metaTitle: "AI Market Analysis for ASX Investors | Lavandbit Australia",
    description:
      "Research the Australian share market with AI-assisted pattern recognition, trend insights and risk analysis, built for how ASX investors actually work.",
    keyword: "asx market analysis tools",
    h1: "Built for the way Australians actually invest",
    intro:
      "Most market analysis tools are built for American markets and adapted afterwards. Lavandbit starts from the ASX, the companies, the reporting rhythm, the way dividends and franking shape what investors here care about.",
    pains: [
      {
        title: "Most tools treat the ASX as an afterthought",
        body: "Global platforms are designed around US markets and cover Australia thinly. Coverage is shallow, presentation is inconsistent, and local context is missing.",
      },
      {
        title: "The ASX has its own shape",
        body: "A concentrated market dominated by financials and resources behaves differently from a broad index. Analysis built elsewhere does not always translate.",
      },
      {
        title: "Local and global exposure interact",
        body: "Australian investors typically hold ASX-listed companies with global exposure, and global markets that affect the local one. Looking at either in isolation misses half the picture.",
      },
    ],
    fits: [
      "You invest primarily in ASX-listed companies",
      "You also want context from global markets",
      "You want analysis written with Australian investors in mind",
      "You research your own positions and intend to keep doing so",
    ],
    notFor:
      "Lavandbit does not provide financial advice, does not recommend specific securities, and does not execute anything. If you want recommendations rather than research, this is the wrong tool.",
    body: [
      { t: "h2", text: "What being built for Australia actually means" },
      {
        t: "ul",
        items: [
          "**ASX coverage as the starting point**, not an add-on to a US-centric product.",
          "**Local and global markets in the same view**, so you can see how a global move may flow through to local holdings.",
          "**Australian spelling and context throughout**, including how franking and dividends shape the way returns are discussed here.",
          "**Risk framed for how Australians invest**, where long-term holdings and superannuation shape time horizons more than short-term trading.",
        ],
      },
      {
        t: "note",
        tone: "tip",
        title: "The ASX is a concentrated market",
        text: "A relatively small number of large companies dominate the index, which means index-level moves can say very little about what is happening across the market. Scanning individual instruments matters more here than in a broader market.",
      },
      { t: "h2", text: "Researching ASX stocks without the tab-hopping" },
      {
        t: "p",
        text: "A typical ASX research session involves price charts, company announcements, dividend history and news, across several sites. Bringing those into one organised view is unglamorous and it is most of the value, because the assembly work is where the hours go.",
      },
      {
        t: "p",
        text: "Once the information is in one place, the analysis layer scans for patterns and trend structure across the market, so you start from what the data shows rather than from the handful of charts you thought to open.",
      },
      {
        t: "cta",
        title: "Run it on your own ASX watchlist",
        text: "Register free and we will walk through the analysis on the Australian companies you already follow.",
        button: "Get Started Free",
        href: "/get-started",
      },
      { t: "h2", text: "What the analysis will and will not tell you" },
      {
        t: "p",
        text: "It will show you patterns in price behaviour, describe trend structure, and put risk information in front of you. It will not tell you whether a company is well run, whether its dividend is sustainable, or what will happen to the share price.",
      },
      {
        t: "p",
        text: "That distinction is worth holding onto, because the second set of questions is where most of the actual return comes from, and no software answers them.",
      },
    ],
    faq: [
      {
        q: "Does Lavandbit cover ASX-listed stocks?",
        a: "Yes. ASX coverage is the starting point rather than an add-on, and international markets are scanned alongside it. Contact us if you need to confirm whether a particular market is covered.",
      },
      {
        q: "Is Lavandbit suitable for Australian investors?",
        a: "It is built specifically for them, ASX coverage, local and global markets in the same view, and analysis written with Australian investors' time horizons and holdings in mind.",
      },
      {
        q: "Does it give buy or sell recommendations on ASX stocks?",
        a: "No. Lavandbit surfaces patterns, trends and risk information and leaves the decision with you. It does not provide financial product advice or recommendations.",
      },
    ],
  },
];

export function getUseCase(slug: string) {
  return useCases.find((u) => u.slug === slug);
}
