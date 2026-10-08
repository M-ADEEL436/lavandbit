import type { GlossaryTerm } from "@/content/types";

/**
 * Glossary terms. Short, self-contained answers, the format search engines
 * lift into featured snippets and AI answers. Weighted towards terms an
 * Australian investor actually runs into, including a few that are specific
 * to investing here.
 */
export const glossary: GlossaryTerm[] = [
  {
    slug: "ai-trading",
    term: "AI trading",
    short:
      "Using artificial intelligence to assist with market research and analysis, not to predict prices or place trades.",
    metaTitle: "What Is AI Trading? Definition | Lavandbit Australia",
    description:
      "AI trading definition: using AI to assist with market research and analysis. What it does, what it cannot do, and how it differs from prediction tools.",
    body: [
      {
        t: "p",
        text: "AI trading is the use of artificial intelligence to help with market research and analysis. In practice that means processing large amounts of market data, identifying patterns and trend structure, and presenting findings in a form a person can act on.",
      },
      {
        t: "p",
        text: "It is worth separating that from the way the term is often marketed. Some products imply AI can predict where a price is going. It cannot. Markets are influenced by events, sentiment and the collective actions of everyone participating, and no model captures that.",
      },
      {
        t: "note",
        tone: "warn",
        title: "What it does not mean",
        text: "AI trading does not mean guaranteed outcomes, and it does not mean the software decides for you. It removes the manual work of scanning and organising information. The judgement stays with the investor.",
      },
    ],
    related: ["pattern-recognition", "market-analysis", "trend-analysis"],
  },
  {
    slug: "market-analysis",
    term: "Market analysis",
    short:
      "Examining price behaviour, market structure and context to understand what is happening in a market.",
    metaTitle: "Market Analysis Definition | Investing | Lavandbit",
    description:
      "Market analysis definition: examining price behaviour and market context to understand what is happening, the two main approaches, and what each can tell you.",
    body: [
      {
        t: "p",
        text: "Market analysis is the process of examining price behaviour and market conditions to understand what is happening and what might be relevant. It divides broadly into two approaches.",
      },
      {
        t: "ul",
        items: [
          "**Technical analysis** looks at price and volume history, patterns, trends, support and resistance. It describes what prices have done.",
          "**Fundamental analysis** looks at the business behind the security, earnings, debt, competitive position, industry conditions. It attempts to assess value.",
        ],
      },
      {
        t: "p",
        text: "Most self-directed investors use some of both. Neither approach predicts the future; both help you form a view you can act on deliberately rather than reactively.",
      },
    ],
    related: ["pattern-recognition", "trend-analysis", "support-and-resistance"],
  },
  {
    slug: "pattern-recognition",
    term: "Pattern recognition",
    short:
      "Identifying repeating shapes and structures in price data that may indicate a possible setup.",
    metaTitle: "Pattern Recognition in Trading | Definition | Lavandbit",
    description:
      "Pattern recognition definition: identifying repeating structures in price data, what chart patterns can and cannot tell you, and why software finds them faster.",
    body: [
      {
        t: "p",
        text: "Pattern recognition is the identification of repeating shapes and structures in price data, the arrangements chartists have named for decades, such as consolidations, breakouts and reversals.",
      },
      {
        t: "p",
        text: "The value is not that a pattern predicts an outcome. It is that a pattern marks a point where price behaviour has changed in a recognisable way, which makes it worth looking closer. What happens next still depends on everything else.",
      },
      {
        t: "note",
        tone: "tip",
        title: "Why software helps here",
        text: "Scanning three hundred instruments for a pattern by hand is not realistic. Software can do it continuously, which means you see candidates you would never have opened, the main practical advantage of AI-assisted research.",
      },
    ],
    related: ["trend-analysis", "support-and-resistance", "market-analysis"],
  },
  {
    slug: "trend-analysis",
    term: "Trend analysis",
    short:
      "Describing the general direction of a market from recent price behaviour, a description, not a forecast.",
    metaTitle: "Trend Analysis Definition | Markets | Lavandbit",
    description:
      "Trend analysis definition: describing market direction from recent price behaviour. Why a trend reading is a description of the past, not a prediction of the future.",
    body: [
      {
        t: "p",
        text: "Trend analysis describes the general direction a market has been moving, based on recent price behaviour. An uptrend means prices have generally been rising, a downtrend that they have generally been falling, and a sideways market that neither has dominated.",
      },
      {
        t: "p",
        text: "It is a description of what has happened, not a forecast of what will. Trends can reverse without warning, which is why trend readings are best treated as context for your own thinking rather than as signals.",
      },
      {
        t: "p",
        text: "Trend structure is often more useful than the direction alone, whether a market is making higher highs and higher lows, or whether that pattern has broken, tells you more than the label.",
      },
    ],
    related: ["market-regime", "support-and-resistance", "pattern-recognition"],
  },
  {
    slug: "support-and-resistance",
    term: "Support and resistance",
    short:
      "Price levels where a market has repeatedly stopped falling (support) or stopped rising (resistance).",
    metaTitle: "Support and Resistance Definition | Lavandbit",
    description:
      "Support and resistance definition: price levels where a market has repeatedly turned. Why these levels matter to investors and how they are used in research.",
    body: [
      {
        t: "p",
        text: "Support is a price level where a market has repeatedly stopped falling, because buyers have tended to step in there. Resistance is a level where it has repeatedly stopped rising, because sellers have tended to appear.",
      },
      {
        t: "p",
        text: "These levels matter because they mark places where price behaviour has changed before. They are not guarantees, a level that has held five times can fail on the sixth, but they are useful reference points when thinking about where a position might behave unexpectedly.",
      },
      {
        t: "note",
        tone: "tip",
        title: "How to read them",
        text: "Treat them as zones rather than exact prices, and pay attention to what happens when price reaches one. A level that breaks and then holds is often more informative than the level itself.",
      },
    ],
    related: ["pattern-recognition", "trend-analysis", "market-analysis"],
  },
  {
    slug: "drawdown",
    term: "Drawdown",
    short:
      "The fall from a portfolio's highest point to its lowest point afterwards, measured as a percentage.",
    metaTitle: "Drawdown Definition | Investing | Lavandbit Australia",
    description:
      "Drawdown definition: the peak-to-trough fall in a portfolio's value. Why recovery maths is asymmetric, and why drawdown matters more than returns.",
    body: [
      {
        t: "p",
        text: "Drawdown measures how far a portfolio has fallen from its highest point. Maximum drawdown is the largest such fall over the period you are measuring, and it is one of the most useful figures for judging whether you could actually hold an investment through its worst period.",
      },
      {
        t: "table",
        head: ["Drawdown", "Gain needed to recover"],
        rows: [
          ["10%", "11%"],
          ["20%", "25%"],
          ["33%", "50%"],
          ["50%", "100%"],
          ["75%", "300%"],
        ],
      },
      {
        t: "p",
        text: "Recovery is asymmetric because percentages are calculated from a shrinking base. A 50% fall needs a 100% gain just to get back to where you started, which is why drawdown deserves more attention than it usually gets.",
      },
    ],
    related: ["volatility", "risk-management", "market-regime"],
  },
  {
    slug: "volatility",
    term: "Volatility",
    short:
      "How much a price moves around over a period, a measure of movement, not of risk on its own.",
    metaTitle: "Volatility Definition | Investing | Lavandbit Australia",
    description:
      "Volatility definition: how much a price moves over a period. Why volatility and risk are not the same thing, and how investors use volatility in research.",
    body: [
      {
        t: "p",
        text: "Volatility describes how much a price moves around over a given period. High volatility means larger swings in both directions; low volatility means the price is relatively stable.",
      },
      {
        t: "p",
        text: "Volatility is often used as shorthand for risk, and that is imprecise. Volatility measures movement, not the chance of permanent loss. A volatile asset that recovers is not risky in the same way as a stable one that declines steadily.",
      },
      {
        t: "note",
        tone: "tip",
        title: "What it is useful for",
        text: "Volatility is a practical input when thinking about position sizing, a more volatile holding producing the same return will swing further, which affects whether you can hold it through a bad period.",
      },
    ],
    related: ["drawdown", "position-sizing", "risk-management"],
  },
  {
    slug: "position-sizing",
    term: "Position sizing",
    short:
      "How much of a portfolio goes into a single holding, a decision that shapes outcomes more than most people expect.",
    metaTitle: "Position Sizing Definition | Investing | Lavandbit",
    description:
      "Position sizing definition: how much of a portfolio to allocate to one holding. Why sizing decisions shape outcomes more than entry timing.",
    body: [
      {
        t: "p",
        text: "Position sizing is the decision about how much of your portfolio to put into a single holding. It gets far less attention than what to buy, and it has more influence on whether you can stay invested through a bad period.",
      },
      {
        t: "ul",
        items: [
          "**Concentration** puts more into fewer holdings, higher potential return and higher potential loss.",
          "**Diversification** spreads across more holdings, which reduces the damage any single one can do.",
          "**Risk-based sizing** sets each position so that a poor outcome costs a fixed share of the portfolio, which makes the total risk predictable rather than accidental.",
        ],
      },
      {
        t: "p",
        text: "The practical question is not which approach is optimal, but which one you could hold through a drawdown without abandoning it. Sizing you cannot stick with is worse than sizing that is merely adequate.",
      },
    ],
    related: ["drawdown", "risk-management", "diversification"],
  },
  {
    slug: "risk-management",
    term: "Risk management",
    short:
      "Deciding in advance how much you could lose, and structuring a portfolio so that no single outcome is damaging.",
    metaTitle: "Risk Management Definition | Investing | Lavandbit",
    description:
      "Risk management definition: deciding in advance how much you could lose and structuring a portfolio accordingly. Why it matters more than picking winners.",
    body: [
      {
        t: "p",
        text: "Risk management is the practice of deciding in advance how much you are prepared to lose, and structuring your portfolio so that no single outcome is damaging to your overall position.",
      },
      {
        t: "p",
        text: "It covers position sizing, diversification, and a clear view of what would make you change your mind about a holding. It is less exciting than finding opportunities and considerably more important.",
      },
      {
        t: "note",
        tone: "warn",
        title: "The gap between plan and behaviour",
        text: "Most investors know what risk management looks like and still act differently when a position is falling. Deciding your limits while you are calm, and writing them down, is what closes that gap.",
      },
    ],
    related: ["position-sizing", "drawdown", "diversification"],
  },
  {
    slug: "diversification",
    term: "Diversification",
    short:
      "Spreading investments across holdings, sectors and markets so no single one determines your outcome.",
    metaTitle: "Diversification Definition | ASX Investing | Lavandbit",
    description:
      "Diversification definition: spreading investments so no single holding determines the outcome. Why it matters more on a concentrated market like the ASX.",
    body: [
      {
        t: "p",
        text: "Diversification means spreading your investments across different holdings, sectors and markets so that the performance of any one of them has a limited effect on your overall outcome.",
      },
      {
        t: "p",
        text: "It matters more on the ASX than in broader markets. A relatively small number of large companies dominate the Australian index, with heavy concentration in financials and resources, so an undiversified ASX portfolio can look far more spread out than it actually is.",
      },
      {
        t: "p",
        text: "Diversification reduces the damage a single holding can do. It does not protect against a broad market decline, which affects most holdings at once.",
      },
    ],
    related: ["position-sizing", "risk-management", "market-regime"],
  },
  {
    slug: "market-regime",
    term: "Market regime",
    short:
      "The broad condition a market is in, trending, ranging or volatile, which changes how holdings behave.",
    metaTitle: "Market Regime Definition | Investing | Lavandbit",
    description:
      "Market regime definition: the prevailing condition of a market. Why different strategies and holdings behave differently as the regime changes.",
    body: [
      {
        t: "p",
        text: "A market regime describes the broad condition of a market over a period: trending steadily in one direction, ranging sideways, or unusually volatile.",
      },
      {
        t: "p",
        text: "Different approaches perform differently depending on the regime. Dividend-focused and defensive holdings tend to behave differently in a ranging market than in a strong trend, and volatility changes what a normal move looks like.",
      },
      {
        t: "note",
        tone: "tip",
        title: "Why it is worth naming",
        text: "When a period feels unusually difficult, checking what regime the market is in often explains it. A period that looks like a failure of judgement is frequently just a change in conditions.",
      },
    ],
    related: ["trend-analysis", "volatility", "drawdown"],
  },
  {
    slug: "overfitting",
    term: "Overfitting",
    short:
      "Fitting a rule so closely to past data that it describes the past well and the future poorly.",
    metaTitle: "Overfitting Definition | Market Research | Lavandbit",
    description:
      "Overfitting definition: tuning an approach until it fits historical data closely, at the cost of future usefulness. The most common trap in data-driven research.",
    body: [
      {
        t: "p",
        text: "Overfitting is what happens when you adjust an approach repeatedly until it fits the historical data closely. You have not discovered a pattern. You have described the past in increasing detail, including its random noise.",
      },
      {
        t: "p",
        text: "It is the main reason data-driven strategies disappoint in practice. Every parameter you tune to improve a historical result increases the risk that the improvement was specific to that period rather than something real.",
      },
      {
        t: "note",
        tone: "tip",
        title: "The defence",
        text: "Prefer simple explanations, and be suspicious of anything that only works with very specific settings. A pattern that requires precise tuning to appear is usually not a pattern.",
      },
    ],
    related: ["market-analysis", "pattern-recognition", "ai-trading"],
  },
  {
    slug: "asx",
    term: "ASX",
    short:
      "The Australian Securities Exchange, where Australian listed companies and other securities trade.",
    metaTitle: "What Is the ASX? | Australian Securities Exchange | Lavandbit",
    description:
      "The ASX is the Australian Securities Exchange. What trades on it, how the market is structured, and what Australian investors should understand about it.",
    body: [
      {
        t: "p",
        text: "The ASX, Australian Securities Exchange, is the primary exchange for listed companies in Australia. Shares, exchange-traded funds, bonds and other securities trade there.",
      },
      {
        t: "p",
        text: "The Australian market is concentrated. A relatively small number of large companies account for a substantial share of the index, with heavy weighting toward financials and resources. This means index-level movements can say surprisingly little about what is happening across the market as a whole.",
      },
      {
        t: "note",
        tone: "tip",
        title: "What this means in practice",
        text: "Because the index is concentrated, scanning individual companies often tells you more than watching the index. It also means an ASX portfolio that looks diversified can carry more concentration risk than it appears to.",
      },
    ],
    related: ["franking-credits", "smsf", "diversification"],
  },
  {
    slug: "franking-credits",
    term: "Franking credits",
    short:
      "Tax credits attached to dividends paid by Australian companies from profits that have already been taxed.",
    metaTitle: "Franking Credits Explained | Australian Investing | Lavandbit",
    description:
      "Franking credits explained: what they are, why Australian investors pay attention to them, and how they change the way dividend returns are compared.",
    body: [
      {
        t: "p",
        text: "Franking credits, also called imputation credits, are tax credits attached to dividends paid by Australian companies out of profits on which the company has already paid Australian tax.",
      },
      {
        t: "p",
        text: "They exist to avoid the same profit being taxed twice: once in the company's hands and again in the shareholder's. For many Australian investors, particularly those in retirement, franking can make a meaningful difference to the after-tax return on a dividend-paying holding.",
      },
      {
        t: "note",
        tone: "warn",
        title: "Where investors get caught",
        text: "A dividend yield quoted before franking is not the after-tax return. Two companies with the same headline yield can produce quite different outcomes once franking and your own marginal rate are accounted for. This is general information, not tax advice, your circumstances matter.",
      },
    ],
    related: ["asx", "smsf", "diversification"],
  },
  {
    slug: "smsf",
    term: "SMSF",
    short:
      "A self-managed super fund, a superannuation fund where the members are also the trustees.",
    metaTitle: "What Is an SMSF? | Self-Managed Super Fund | Lavandbit",
    description:
      "An SMSF is a self-managed super fund, where members act as trustees and make the investment decisions themselves. What that involves.",
    body: [
      {
        t: "p",
        text: "An SMSF, self-managed super fund, is a superannuation fund with fewer than five members, where the members are also the trustees. That structure means the members make the investment decisions and carry the legal responsibility for them.",
      },
      {
        t: "p",
        text: "Running one involves obligations that do not apply to ordinary super accounts: preparing and regularly reviewing an investment strategy, keeping records, and complying with superannuation law.",
      },
      {
        t: "note",
        tone: "warn",
        title: "What a research tool can and cannot do",
        text: "Software can help you organise research and document your reasoning. It cannot discharge any trustee obligation, and it does not provide financial advice. Those remain with the trustees.",
      },
    ],
    related: ["asx", "franking-credits", "risk-management"],
  },
];

export function getTerm(slug: string) {
  return glossary.find((t) => t.slug === slug);
}

export function getRelatedTerms(slugs: readonly string[]) {
  return slugs.map((s) => getTerm(s)).filter((t): t is GlossaryTerm => Boolean(t));
}
