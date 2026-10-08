import type { Post } from "@/content/types";

/**
 * Blog posts, the organic traffic engine.
 *
 * Each post targets one keyword, links up to the pillar, and funnels to one
 * money page through `funnelsTo` plus an inline CTA block. That internal
 * linking pattern moves rankings more than the writing does.
 *
 * The angle throughout is honest about what AI can and cannot do. In this
 * category that is both the right position and the differentiating one -
 * every competitor is promising prediction.
 */
export const posts: Post[] = [
  // ------------------------------------------------------------------ PILLAR
  {
    slug: "ai-trading-guide",
    title: "AI Trading: The Complete Guide",
    description:
      "What AI trading actually is, what AI can and cannot do with market data, and how to use AI-assisted research without over-trusting it.",
    keyword: "ai trading",
    category: "Guide",
    authorSlug: "author-one",
    published: "2026-10-01",
    updated: "2026-10-01",
    readingMinutes: 13,
    related: [
      "can-ai-predict-the-stock-market",
      "is-ai-trading-safe",
      "why-trading-bots-lose-money",
      "pattern-recognition-explained",
    ],
    funnelsTo: [
      { href: "/how-it-works", label: "See how Lavandbit works" },
      { href: "/get-started", label: "Get started free" },
    ],
    body: [
      {
        t: "p",
        text: "\"AI trading\" is one of the most oversold phrases in finance. It gets attached to everything from a spreadsheet with a moving average to services implying they can tell you what a share price will do next. This guide separates what the technology genuinely does from what it is sold as.",
      },
      {
        t: "note",
        tone: "warn",
        title: "Read this first",
        text: "Nothing in this guide is financial advice. The value of investments can go down as well as up, and you may get back less than you put in. AI can make research faster and broader; it cannot make the market predictable.",
      },
      { t: "h2", text: "What AI trading actually means" },
      {
        t: "p",
        text: "There are three distinct things people mean when they say AI trading, and conflating them causes most of the confusion.",
      },
      {
        t: "ol",
        items: [
          "**Analysis assistance.** Software processes large amounts of market data, identifies patterns and trend structure, and presents findings in plain language. No prediction is involved. It describes what the data contains. This is what most honest products in the category actually do.",
          "**Statistical modelling.** Algorithms trained on historical data to find relationships or estimate probabilities. Genuine research, but it degrades: a relationship that held in 2015 may have been arbitraged away by 2020.",
          "**Large language models.** Used to read announcements, filings or news and summarise them. Useful for speed, unproven for anything resembling prediction.",
        ],
      },
      {
        t: "p",
        text: "The distinction that matters is between describing the past and forecasting the future. Analysis assistance describes. Modelling forecasts, with uncertain reliability. Almost every product in this space is selling the first and letting its marketing imply the second.",
      },
      { t: "h2", text: "What AI is genuinely good at" },
      {
        t: "ul",
        items: [
          "**Coverage.** Scanning hundreds of instruments for repeating patterns is not something a person can do thoroughly by hand. Software can, continuously.",
          "**Organisation.** Bringing prices, movements and context into one consistent view removes the assembly work that eats most of a research session.",
          "**Consistency.** The same analysis applied the same way every time, rather than depending on how much energy you have that evening.",
          "**Volume.** Processing far more information than a person realistically could, and surfacing the parts that might matter.",
        ],
      },
      {
        t: "p",
        text: "Notice what is absent from that list: knowing what happens next, or assessing whether a business is any good. Those are the questions people most want answered, and they are precisely the ones no software answers.",
      },
      {
        t: "cta",
        title: "See what the analysis actually gives you",
        text: "Register free and run it on instruments you already know well, so you can judge the output against your own reading.",
        button: "Get Started Free",
        href: "/get-started",
      },
      { t: "h2", text: "Why AI cannot predict the market" },
      {
        t: "p",
        text: "This is not a limitation waiting to be engineered away. Prices move because of the collective actions of everyone participating, driven by events, sentiment, policy and information that arrives unpredictably. Any model is trained on the past, and markets adapt to whatever works, which is why edges decay.",
      },
      {
        t: "p",
        text: "A model that appeared to work would attract capital that arbitrages it away, or would have captured something specific to the period it was trained on. This is why [why trading bots lose money](/blog/why-trading-bots-lose-money) is worth reading before believing any performance claim.",
      },
      {
        t: "note",
        tone: "stop",
        title: "The clearest warning sign",
        text: "A product claiming reliable prediction of prices, showing profit screenshots as typical, or using the language of certainty about future outcomes. Either the people behind it do not understand the problem, or they are counting on you not understanding it.",
      },
      { t: "h2", text: "What AI-assisted research is actually for" },
      {
        t: "p",
        text: "The honest use case is narrower and more useful than the marketing suggests. It is not a machine that tells you what to buy. It is a machine that shows you what is there, faster and more broadly than you could find it yourself.",
      },
      {
        t: "ul",
        items: [
          "**Widening your field of view.** You see candidates outside the handful of charts you thought to open.",
          "**Cutting the assembly time.** Prices, movements and context in one view, so your time goes on thinking rather than collecting.",
          "**Putting risk in the same frame.** Downside context arrives with the opportunity instead of after it.",
          "**Making your own notes comparable.** The same analysis each session means your reasoning from three months ago still makes sense today.",
        ],
      },
      { t: "h2", text: "How to use it well" },
      {
        t: "ol",
        items: [
          "**Check it against something you know.** Run the analysis on a company you understand deeply and see whether the output matches your own reading. That tells you more than any demo.",
          "**Ask why something was surfaced.** The pattern, the trend reading, the risk factor. If you cannot see the reasoning, you cannot evaluate it.",
          "**Keep doing your own thinking.** A tool that replaces your judgement has made you worse off, not better. The point is better inputs, not fewer decisions.",
          "**Never treat output as a conclusion.** It is a starting point for your own research, and it can be incomplete, wrong, or based on conditions that have changed.",
        ],
      },
      {
        t: "p",
        text: "If you take one thing from this guide: the value of AI in investing is in the work it removes, not the answers it provides. Anyone selling the second is selling something that does not exist.",
      },
    ],
    faq: [
      {
        q: "What is AI trading?",
        a: "AI trading is the use of artificial intelligence to assist with market research and analysis, processing large amounts of data, identifying patterns and trend structure, and presenting findings in a form you can act on. It is not prediction.",
      },
      {
        q: "Can AI predict the stock market?",
        a: "No. Markets are influenced by events, sentiment, policy and the actions of everyone participating. AI can describe patterns in historical data and surface what might matter, but no tool can reliably tell you what a price will do next.",
      },
      {
        q: "Is AI trading profitable?",
        a: "AI-assisted research can make your research faster and broader. Whether that translates into returns depends on your decisions, which remain yours. No tool guarantees an outcome, and anyone claiming otherwise should be treated with caution.",
      },
      {
        q: "What is the best way to use AI for investing?",
        a: "Use it for coverage and organisation, scanning more instruments and assembling information faster than you could by hand. Keep the interpretation and the decision yourself, and check the analysis against companies you already understand.",
      },
    ],
  },

  // ---------------------------------------------------------------- CLUSTER
  {
    slug: "can-ai-predict-the-stock-market",
    title: "Can AI Predict the Stock Market? An Honest Answer",
    description:
      "No. Here is why market prediction is not a solvable problem, what AI can actually do with price data, and how to spot tools that imply otherwise.",
    keyword: "can ai predict the stock market",
    category: "Explainer",
    authorSlug: "author-one",
    published: "2026-10-02",
    updated: "2026-10-02",
    readingMinutes: 8,
    related: ["ai-trading-guide", "why-trading-bots-lose-money", "is-ai-trading-safe"],
    funnelsTo: [
      { href: "/vs/ai-prediction-tools", label: "Research tools vs prediction tools" },
      { href: "/get-started", label: "Get started free" },
    ],
    body: [
      {
        t: "p",
        text: "The short answer is no, and the reason is not that the models are not good enough yet. It is that predicting market prices is a fundamentally different kind of problem from the ones AI has solved well.",
      },
      { t: "h2", text: "Why prediction is different" },
      {
        t: "p",
        text: "AI has produced remarkable results on problems with stable rules and abundant examples, recognising images, translating language, predicting protein structures. Markets do not behave like that.",
      },
      {
        t: "ul",
        items: [
          "**The system adapts.** If a pattern reliably made money, capital would flow toward it until it stopped. Edges decay precisely because they are found.",
          "**The inputs are unbounded.** Prices move on interest rates, elections, company announcements, supply chain disruption, and the sentiment those create. No training set contains what has not happened yet.",
          "**The past is not a sample of the future.** Models trained on historical data assume the future resembles it. Market regimes change, and a model has no way to know when it has left the conditions it learned from.",
          "**Feedback changes behaviour.** Forecasts that people act on change the thing being forecast. That does not happen with weather or protein folding.",
        ],
      },
      {
        t: "note",
        tone: "warn",
        title: "How to read a backtest",
        text: "A model that performed well on historical data has demonstrated that it fits history. That is not evidence it will work forward, and in a market context it is usually evidence of overfitting, see [overfitting](/glossary/overfitting).",
      },
      { t: "h2", text: "What AI can genuinely do with market data" },
      {
        t: "p",
        text: "This is not an argument against using AI for investing. It is an argument for using it for the right things.",
      },
      {
        t: "table",
        head: ["Task", "Can AI do it?", "Why"],
        rows: [
          ["Scan hundreds of instruments for patterns", "Yes, well", "Mechanical, high volume, well suited to software"],
          ["Summarise a company announcement", "Yes", "Language task on existing content"],
          ["Organise prices and context in one view", "Yes, well", "Assembly work, exactly what software is for"],
          ["Describe the trend structure of a market", "Yes", "A description of the past, not a forecast"],
          ["Tell you what a price will do next", "No", "Not a solvable prediction problem"],
          ["Tell you whether a company is well run", "No", "Requires judgement about people and strategy"],
        ],
      },
      {
        t: "p",
        text: "The dividing line is between describing what is there and forecasting what comes next. The first column is genuinely useful and where the time savings come from. The second is where the category oversells.",
      },
      {
        t: "cta",
        title: "See the difference on your own watchlist",
        text: "Register free and look at what the analysis gives you, patterns, trend context and risk, with the reasoning shown rather than a conclusion with nothing behind it.",
        button: "Get Started Free",
        href: "/get-started",
      },
      { t: "h2", text: "How to spot a tool implying prediction" },
      {
        t: "ul",
        items: [
          "**Language of certainty about future prices.** \"This stock will rise\" is a claim no honest tool makes.",
          "**Profit screenshots presented as typical.** They are trivially fabricated and tell you nothing about the method.",
          "**Guaranteed or fixed returns.** Disqualifying in any jurisdiction.",
          "**No explanation of what the output is based on.** A conclusion you cannot inspect is a conclusion you cannot evaluate.",
          "**Reluctance to say what the tool cannot do.** Products confident enough to state their limits are the ones worth listening to.",
        ],
      },
      {
        t: "p",
        text: "The pattern underneath all of these is the same: someone has noticed that people want a prediction, and has built something that looks like one. The want is real. The prediction is not.",
      },
      { t: "h2", text: "What to do instead" },
      {
        t: "p",
        text: "Accept that you are investing under uncertainty, and get better at the parts you can control: broader coverage, a consistent research process, risk considered before you commit, and your own reasoning written down so you can review it later.",
      },
      {
        t: "p",
        text: "None of that is as satisfying as a prediction. All of it actually helps.",
      },
    ],
    faq: [
      {
        q: "Can AI predict share prices?",
        a: "No. Markets are influenced by events, sentiment and the collective actions of participants, and any pattern that worked would be arbitraged away as capital moved toward it. Model performance on historical data is not evidence of future prediction.",
      },
      {
        q: "Are AI trading tools worth using if they cannot predict?",
        a: "Yes, for research. Scanning hundreds of instruments, organising information and framing risk are genuinely valuable and genuinely faster with software. The value is in the work removed, not in answers provided.",
      },
      {
        q: "What is overfitting and why does it matter?",
        a: "Overfitting is tuning an approach until it fits historical data closely, which makes it perform worse on new data. It is the main reason data-driven strategies disappoint in practice, and the reason impressive backtests should be treated with caution.",
      },
    ],
  },

  {
    slug: "is-ai-trading-safe",
    title: "Is AI Trading Safe? An Honest Breakdown",
    description:
      "What is genuinely risky about AI trading tools, what the real risks are, and the five questions that separate an honest product from a misleading one.",
    keyword: "is ai trading safe",
    category: "Risk",
    authorSlug: "author-two",
    published: "2026-10-03",
    updated: "2026-10-03",
    readingMinutes: 9,
    related: ["ai-trading-guide", "can-ai-predict-the-stock-market", "why-trading-bots-lose-money"],
    funnelsTo: [
      { href: "/security", label: "What Lavandbit is and is not" },
      { href: "/get-started", label: "Get started free" },
    ],
    body: [
      {
        t: "p",
        text: "The honest answer is that using AI for market research is safe in the same way any research is safe, and risky in one specific way that most people underestimate.",
      },
      {
        t: "note",
        tone: "stop",
        title: "The one fact that never changes",
        text: "The value of investments can go down as well as up, and you may get back less than you put in. No research tool changes that, and any product implying otherwise is misrepresenting what software does.",
      },
      { t: "h2", text: "The risks that are real" },
      { t: "h3", text: "1. Over-trust" },
      {
        t: "p",
        text: "This is the one that actually costs people money. An AI summary reads as authoritative. It is confident, well-written and presented as analysis. It is also sometimes wrong, incomplete, or based on conditions that have changed.",
      },
      {
        t: "p",
        text: "The failure mode is treating a pattern or trend reading as a decision rather than an input. That is a bigger risk than any data or technology issue, because it feels like diligence while actually being its opposite.",
      },
      { t: "h3", text: "2. Data quality and timing" },
      {
        t: "p",
        text: "Market data comes from third-party sources and can be delayed, revised or missing. Analysis built on it inherits those problems. Do not rely on any research tool for time-critical decisions.",
      },
      { t: "h3", text: "3. Products that blur the line" },
      {
        t: "p",
        text: "Some tools in this category imply they are recommending investments, or simply do not say clearly that they are not. That matters legally and practically. In Australia, providing financial product advice without an AFS licence is an offence, and a tool that blurs the line is a problem for you as much as for them.",
      },
      { t: "h3", text: "4. Giving a tool access it does not need" },
      {
        t: "p",
        text: "A research tool has no reason to hold your money or connect to your brokerage account. If a product you are evaluating asks for either, that is a signal worth taking seriously.",
      },
      {
        t: "cta",
        title: "Ask us the uncomfortable questions",
        text: "Register free and we will walk you through what the platform analyses, how the output is generated, and where it stops being useful.",
        button: "Get Started Free",
        href: "/get-started",
      },
      { t: "h2", text: "Five questions for any AI trading tool" },
      {
        t: "ol",
        items: [
          "**Does it claim to predict the market?** Nothing can. Reliable prediction is a warning sign, not a feature.",
          "**Does it hold your money or connect to your broker?** A research tool should do neither.",
          "**Can you see what the output is based on?** A conclusion with nothing behind it cannot be evaluated by you or anyone else.",
          "**Does it state clearly that it is not financial advice?** If that is vague, be careful.",
          "**Is there a named business behind it?** An entity, an ABN, and a stated regulatory position.",
        ],
      },
      {
        t: "note",
        tone: "tip",
        title: "The signal to look for",
        text: "A product that states its own limits is more trustworthy than one that only lists capabilities. Anyone can list features. Talking honestly about what a tool cannot do takes confidence in the thing itself.",
      },
      { t: "h2", text: "What actually keeps you safe" },
      {
        t: "ul",
        items: [
          "**Understand what you are investing in** rather than relying on a summary of it.",
          "**Never invest money you cannot afford to lose.** This is the single most effective protection there is.",
          "**Write your reasoning down before you act.** It makes over-trust visible, because you have to articulate why.",
          "**Check the analysis against something you know.** If it does not match your own reading of a familiar company, find out why before relying on it.",
          "**Seek licensed advice for your circumstances** where the decision matters enough to warrant it.",
        ],
      },
      { t: "h2", text: "The bottom line" },
      {
        t: "p",
        text: "AI research tools are safe in the sense that they cannot lose your money. They never touch it. They are risky in the sense that they can make a poorly reasoned decision feel well researched. That second risk is entirely about how you use the output.",
      },
    ],
    faq: [
      {
        q: "Is AI trading safe?",
        a: "Using AI for market research is safe in the sense that the software has no access to your money. The real risk is over-trust, treating analysis as a decision rather than an input. That risk is about how you use the output, not about the technology.",
      },
      {
        q: "Can AI trading tools lose my money?",
        a: "A research tool cannot lose your money because it never has access to it. Lavandbit does not place trades, connect to brokerage accounts, or hold funds. Investment losses come from investment decisions, which remain yours.",
      },
      {
        q: "Should I trust AI-generated market analysis?",
        a: "Treat it as an input, not a conclusion. It can be incomplete, wrong, or based on conditions that have changed. Check it against companies you understand well, and ask why something was surfaced before acting on it.",
      },
    ],
  },

  {
    slug: "why-trading-bots-lose-money",
    title: "Why Trading Bots Lose Money",
    description:
      "The five reasons automated trading systems fail in practice, and none of them is that the market is rigged or that the bot was unlucky.",
    keyword: "do trading bots work",
    category: "Risk",
    authorSlug: "author-two",
    published: "2026-10-04",
    updated: "2026-10-04",
    readingMinutes: 9,
    related: ["can-ai-predict-the-stock-market", "is-ai-trading-safe", "ai-trading-guide"],
    funnelsTo: [
      { href: "/vs/ai-prediction-tools", label: "Prediction tools vs research tools" },
      { href: "/get-started", label: "Get started free" },
    ],
    body: [
      {
        t: "p",
        text: "Trading bots lose money for reasons that are boring and repeatable. None of them is bad luck, and understanding them is more useful than any amount of strategy theory.",
      },
      {
        t: "note",
        tone: "warn",
        title: "First, a definition",
        text: "A trading bot is software that places trades automatically. Lavandbit is not one. It is a research tool that does not execute anything. This article is about why the automated category struggles, which is worth understanding before believing any claim made in it.",
      },
      { t: "h2", text: "1. The strategy had no edge to begin with" },
      {
        t: "p",
        text: "The most common reason. A bot executes a rule; if the rule does not work, the bot loses, faster and more consistently than a person would, because it takes every signal without hesitation. Automation amplifies whatever is there, including nothing.",
      },
      { t: "h2", text: "2. The backtest was too optimistic" },
      {
        t: "p",
        text: "No commission, no slippage, spreads tighter than you would ever get, and parameters tuned until the curve looked good. The live result then looks nothing like the test, and the conclusion drawn is that the bot is broken. It is not broken. It is doing exactly what it was told, in conditions it was never tested against.",
      },
      {
        t: "note",
        tone: "tip",
        title: "The cheapest test you can run",
        text: "Re-run a backtest with double the costs you estimated. If the strategy stops working, those costs were the entire edge. See [overfitting](/glossary/overfitting) for the other half of this problem.",
      },
      { t: "h2", text: "3. Costs accumulated invisibly" },
      {
        t: "p",
        text: "A strategy trading twenty times a week pays twenty times the spread and commission. Over a year that consumes an edge that looked healthy in a cost-free backtest. High-frequency approaches are especially exposed, because cost per trade stays constant while the edge per trade is small.",
      },
      { t: "h2", text: "4. Nobody modelled the technology failing" },
      {
        t: "ul",
        items: [
          "A broker API goes down and the exit order never places",
          "A connection drops and the bot cannot manage what it opened",
          "A misconfigured value places a position ten times the intended size",
          "An exchange changes its API and the integration silently breaks",
        ],
      },
      {
        t: "p",
        text: "These are not exotic. They happen to almost everyone who runs automation long enough. The mitigation is limits that sit outside the strategy, plus alerting that tells you when something is wrong rather than assuming silence means everything is fine.",
      },
      {
        t: "cta",
        title: "The alternative to trusting a black box",
        text: "Lavandbit does not execute anything. It shows you patterns, trends and risk with the reasoning visible, and leaves the decision with you.",
        button: "Get Started Free",
        href: "/get-started",
      },
      { t: "h2", text: "5. The prediction was never real" },
      {
        t: "p",
        text: "This is the root cause underneath most of the others. Bots are usually sold on the premise that a model has found a repeatable relationship in price data. In practice, what most have found is a description of the period they were trained on, which stops being true when conditions change.",
      },
      {
        t: "p",
        text: "Markets adapt. Any relationship reliable enough to be found is valuable enough to be arbitraged away. This is why [AI cannot predict the market](/blog/can-ai-predict-the-stock-market), and why the entire category is built on a premise that does not hold.",
      },
      {
        t: "note",
        tone: "stop",
        title: "The pattern underneath all five",
        text: "In almost every case the software did what it was designed to do. The failure was in the premise, the testing, or the human decision to switch it off at the wrong moment. Very rarely is it a bug.",
      },
      { t: "h2", text: "What this means for you" },
      {
        t: "p",
        text: "If a product's value depends on predicting prices, the value is not there. What is genuinely available is faster, broader, better-organised research, which improves the information in front of you without pretending to know what happens next.",
      },
      {
        t: "ul",
        items: [
          "Be sceptical of any performance figure you cannot verify independently.",
          "Prefer tools that describe what data contains over tools that forecast.",
          "Ask what happens when the tool is wrong, because it will be.",
          "Never invest money you cannot afford to lose, whatever the software claims.",
        ],
      },
    ],
    faq: [
      {
        q: "Do trading bots actually work?",
        a: "They work in the sense that they execute instructions reliably. Whether that makes money depends on the underlying premise, which is usually a prediction that does not hold. There is no bot that turns a strategy without an edge into a profitable one.",
      },
      {
        q: "Why do most automated strategies fail?",
        a: "The most common causes are an over-optimistic backtest, costs that were not modelled, technology failures that were not planned for, and a core premise, usually price prediction. That was never valid.",
      },
      {
        q: "Is it better to use a research tool than a trading bot?",
        a: "They do different things. A bot aims to remove you from the decision, which only works if the underlying strategy has an edge. A research tool improves your inputs and leaves the decision with you. If prediction does not work, the second is the more honest proposition.",
      },
    ],
  },

  {
    slug: "trading-drawdown-explained",
    title: "Drawdown: The Number That Decides Whether You Last",
    description:
      "Drawdown is the figure that determines whether you can actually hold an investment through a bad period. What it is, how to read it, and why recovery maths works against you.",
    keyword: "trading drawdown",
    category: "Risk",
    authorSlug: "author-one",
    published: "2026-10-05",
    updated: "2026-10-05",
    readingMinutes: 8,
    related: ["ai-trading-guide", "is-ai-trading-safe", "how-to-research-asx-stocks"],
    funnelsTo: [
      { href: "/tools/drawdown-recovery-calculator", label: "Drawdown recovery calculator" },
      { href: "/glossary/drawdown", label: "Drawdown, defined" },
    ],
    body: [
      {
        t: "p",
        text: "Ask an investor about a holding and they will tell you the return. Ask whether they could have held it through its worst period and the conversation usually stops. Drawdown is the second question, and it is the one that decides the outcome.",
      },
      { t: "h2", text: "What drawdown is" },
      {
        t: "p",
        text: "Drawdown is the fall from a peak in value to the lowest point afterwards, expressed as a percentage. If your portfolio reaches $120,000 and falls to $96,000 before recovering, that is a 20% drawdown.",
      },
      {
        t: "p",
        text: "Maximum drawdown is the largest such fall over the period you are measuring. It is the most useful single risk figure for comparing investments, because it tells you what the worst moment actually felt like.",
      },
      { t: "h2", text: "Why recovery maths is brutal" },
      {
        t: "p",
        text: "Losses and gains are not symmetrical. A 50% drawdown requires a 100% gain to get back to where you started. This is why experienced investors obsess over drawdown and treat returns as secondary.",
      },
      {
        t: "table",
        head: ["Drawdown", "Gain required to recover"],
        rows: [
          ["10%", "11%"],
          ["20%", "25%"],
          ["33%", "50%"],
          ["50%", "100%"],
          ["75%", "300%"],
          ["90%", "900%"],
        ],
      },
      {
        t: "note",
        tone: "warn",
        title: "The point of the table",
        text: "A holding with a 50% maximum drawdown needs to double just to break even. Most people who experience one do not stay invested to find out. They sell near the bottom. The drawdown figure is really a question about whether you can stay in the seat.",
      },
      { t: "h2", text: "How to read it when researching" },
      {
        t: "ol",
        items: [
          "**Look at maximum drawdown before returns.** If you could not have held through that period, the return figure is academic.",
          "**Check how long it lasted.** A 20% drawdown recovering in three weeks is a different experience from one lasting eleven months. Duration matters as much as depth.",
          "**Check how often it happens.** One bad period in ten years is different from touching 15% every other year, even if the maximum is the same.",
          "**Compare it against the return.** A 15% average return with a 45% drawdown is worse in practice than a 10% return with a 12% drawdown, for almost everyone.",
        ],
      },
      {
        t: "cta",
        title: "Work out your own recovery figure",
        text: "The drawdown recovery calculator shows the gain required to recover any drawdown, plus a reference ladder.",
        button: "Open the calculator",
        href: "/tools/drawdown-recovery-calculator",
      },
      { t: "h2", text: "What to do with this" },
      {
        t: "p",
        text: "The main lever is position sizing. Halving what you hold in a volatile investment roughly halves the depth of any given fall, which moves the recovery requirement from impossible to routine. It is the cheapest risk control available and the one most often ignored.",
      },
      {
        t: "p",
        text: "The other thing to do is decide, while calm, what drawdown you would genuinely accept and still hold. Write it down. The version of you watching a holding fall is not the one who should be deciding that.",
      },
      {
        t: "p",
        text: "The [drawdown recovery calculator](/tools/drawdown-recovery-calculator) will give you the numbers; the [glossary entry](/glossary/drawdown) covers the definition.",
      },
    ],
    faq: [
      {
        q: "What is a good maximum drawdown?",
        a: "There is no universal figure. What matters is whether you could genuinely continue holding after experiencing it. If you could not, it is too high for you regardless of what is normal for that asset class.",
      },
      {
        q: "How much gain do I need to recover a 50% loss?",
        a: "100%. If a portfolio falls from $100,000 to $50,000, the remaining amount must double to return to the starting value. This asymmetry is why drawdown is treated as the primary risk measure.",
      },
      {
        q: "How do I reduce drawdown?",
        a: "Position size is the main lever, reducing what you hold in volatile investments reduces the depth of any given fall proportionally. Diversification helps against single-holding risk but not against a broad market decline.",
      },
    ],
  },

  {
    slug: "how-to-research-asx-stocks",
    title: "How to Research ASX Stocks Without Wasting Your Evening",
    description:
      "A practical research routine for Australian investors: what to look at, in what order, and where the time actually goes.",
    keyword: "how to research asx stocks",
    category: "How-to",
    authorSlug: "author-one",
    published: "2026-10-06",
    updated: "2026-10-06",
    readingMinutes: 10,
    related: ["ai-trading-guide", "trading-drawdown-explained", "pattern-recognition-explained"],
    funnelsTo: [
      { href: "/for/asx-investors", label: "For ASX investors" },
      { href: "/get-started", label: "Get started free" },
    ],
    body: [
      {
        t: "p",
        text: "Most ASX research time goes on collecting rather than thinking. Charts in one tab, announcements in another, dividend history somewhere else. By the time the picture is assembled there is no evening left to consider what it means.",
      },
      { t: "h2", text: "The order that actually works" },
      {
        t: "ol",
        items: [
          "**Start with the business, not the chart.** What does the company sell, who buys it, and what would have to be true for it to do well? A price chart is uninterpretable without this.",
          "**Then look at what the price has done.** Trend structure, where it has repeatedly turned, and how volatile it has been. This is description, not forecast.",
          "**Check the risk before the opportunity.** What would make you change your mind? How far could it fall, and could you hold it if it did?",
          "**Compare it against alternatives.** A holding that looks reasonable in isolation may look worse next to something else you could own instead.",
          "**Write down your reasoning.** Before you act, not after. This is the step everyone skips and the one that makes the rest useful.",
        ],
      },
      {
        t: "note",
        tone: "tip",
        title: "The single highest-value habit",
        text: "Writing your reasoning down before you act. It makes you articulate why, and it gives you something to review in six months when you want to know whether your thinking or the market was the problem.",
      },
      { t: "h2", text: "Where the time actually goes" },
      {
        t: "p",
        text: "If you time a typical research session, most of it is assembly: finding the price, checking what it has done, looking up the dividend, reading the announcement. None of that is thinking, and all of it is mechanical.",
      },
      {
        t: "p",
        text: "That is the part worth handing to software. The judgement, is this a business I want to own, does this fit my goals, could I hold it through a bad period, is the part that needs you.",
      },
      { t: "h2", text: "What the ASX does differently" },
      {
        t: "ul",
        items: [
          "**It is concentrated.** A relatively small number of large companies dominate the index, heavily weighted to financials and resources. Index movements can say very little about the broader market.",
          "**Dividends and franking matter more.** For many Australian investors the after-tax dividend is a substantial part of the return. [Franking credits](/glossary/franking-credits) change how two similar yields compare.",
          "**Global exposure is embedded.** Many ASX-listed companies earn overseas, so local holdings carry global risk. Watching both is more useful than watching either.",
          "**Time horizons tend to be longer.** Superannuation shapes how Australians invest, which makes drawdown tolerance more relevant than short-term timing.",
        ],
      },
      {
        t: "cta",
        title: "Let the scanning happen without you",
        text: "Register free and Lavandbit will scan ASX-listed stocks for patterns and trend structure, so your evening goes on the thinking rather than the collecting.",
        button: "Get Started Free",
        href: "/get-started",
      },
      { t: "h2", text: "A routine you can actually sustain" },
      {
        t: "p",
        text: "Weekly is enough for most investors. Patterns and trend structure do not change meaningfully hour to hour, and checking daily mostly increases the chance of reacting to noise.",
      },
      {
        t: "ol",
        items: [
          "**Twenty minutes at the weekend.** Review what the analysis surfaced across your watchlist during the week.",
          "**Follow up properly on two or three.** Depth on a few beats a skim of everything.",
          "**Note your reasoning** as you go, in the same place as the analysis it relates to.",
          "**Then leave it until next week.** The platform is doing the scanning in between. You do not need to.",
        ],
      },
      {
        t: "note",
        tone: "warn",
        title: "The habit to avoid",
        text: "Checking constantly because it is available on your phone. Frequent checking increases the chance of reacting to movement and decreases the chance of following your own plan. Visit deliberately, not habitually.",
      },
      { t: "h2", text: "What none of this does" },
      {
        t: "p",
        text: "A better research routine does not tell you what will happen, and it does not remove the risk of loss. The value of investments can go down as well as up. What a good routine does is make sure the decision you make is the one you actually intended to make.",
      },
    ],
    faq: [
      {
        q: "How do I research ASX stocks?",
        a: "Start with the business rather than the chart, then look at price behaviour, then risk, then compare against alternatives. Write your reasoning down before acting. Most of the time saving comes from getting the assembly work, prices, movements and context, into one place.",
      },
      {
        q: "How much time should I spend researching shares?",
        a: "A weekly review of twenty to thirty minutes is enough for most long-term investors. Checking daily tends to increase reaction to noise rather than improve decisions.",
      },
      {
        q: "What should I look at first when researching a stock?",
        a: "The business. What it sells, who buys it, and what would have to be true for it to do well. Without that, a price chart has no context and cannot be interpreted meaningfully.",
      },
    ],
  },

  {
    slug: "pattern-recognition-explained",
    title: "Chart Patterns: What They Actually Tell You",
    description:
      "Chart patterns describe where price behaviour changed, not what happens next. What pattern recognition is genuinely useful for, and where it stops.",
    keyword: "chart patterns explained",
    category: "Explainer",
    authorSlug: "author-two",
    published: "2026-10-07",
    updated: "2026-10-07",
    readingMinutes: 8,
    related: ["ai-trading-guide", "can-ai-predict-the-stock-market", "how-to-research-asx-stocks"],
    funnelsTo: [
      { href: "/features", label: "Pattern recognition in Lavandbit" },
      { href: "/glossary/pattern-recognition", label: "Pattern recognition, defined" },
    ],
    body: [
      {
        t: "p",
        text: "Chart patterns occupy an odd place in investing. They are treated either as secret knowledge or as astrology, and neither is right. What they actually are is a way of describing where price behaviour changed, which is useful, as long as you do not ask them to do more than that.",
      },
      { t: "h2", text: "What a pattern actually is" },
      {
        t: "p",
        text: "A pattern is a recognisable arrangement of price movement, a consolidation before a move, a level that has repeatedly held, a series of higher lows. The names come from decades of chartists describing the same shapes, and the naming is genuinely useful shorthand.",
      },
      {
        t: "p",
        text: "What a pattern is not is a prediction. It marks a point where price has behaved in a particular way before, which makes it worth examining. What happens next depends on everything else happening in the market.",
      },
      {
        t: "note",
        tone: "warn",
        title: "The honest framing",
        text: "A pattern raises the question \"is something changing here?\" It does not answer it. Anyone presenting a pattern as a forecast has moved from description into prediction, which is where the category gets into trouble.",
      },
      { t: "h2", text: "Why software is genuinely better at finding them" },
      {
        t: "p",
        text: "Scanning three hundred instruments for a repeating structure is not something a person can do by hand, not because it is difficult, but because it does not scale. You review the charts you thought to open, which means you only ever find patterns in companies already on your radar.",
      },
      {
        t: "p",
        text: "Software can scan the whole set continuously and surface candidates you would never have looked at. That is a genuine advantage, and it is the part of AI-assisted research that is easiest to justify.",
      },
      { t: "h2", text: "The patterns worth knowing" },
      {
        t: "table",
        head: ["Pattern", "What it describes", "What it does not tell you"],
        rows: [
          ["Support and resistance", "Levels where price has repeatedly turned", "That it will turn again"],
          ["Trend structure", "Whether highs and lows are rising, falling or flat", "When the structure will break"],
          ["Consolidation", "A period of reduced movement after a move", "Which direction it resolves"],
          ["Breakout", "Price moving beyond an established range", "Whether it holds or reverses"],
          ["Reversal", "Price changing direction after a sustained move", "Whether it is a reversal or a pause"],
        ],
      },
      {
        t: "cta",
        title: "See patterns surfaced across the whole market",
        text: "Lavandbit scans ASX-listed and international markets for repeating structures, so you start from a shortlist rather than the charts you happened to open.",
        button: "Get Started Free",
        href: "/get-started",
      },
      { t: "h2", text: "How to use patterns well" },
      {
        t: "ol",
        items: [
          "**Treat them as questions, not answers.** Something has changed in how price is behaving. Is that interesting, and why?",
          "**Ask what would invalidate it.** If you cannot say what would show the pattern is not meaningful, you are not really evaluating it.",
          "**Check the context.** A pattern in a company with deteriorating fundamentals means something different from the same pattern in a stable one.",
          "**Watch for confirmation bias.** You will find the pattern you were looking for. Worth asking whether you would have noticed it if you had not already been interested.",
        ],
      },
      {
        t: "note",
        tone: "stop",
        title: "Where patterns stop being useful",
        text: "When they are presented as signals with win rates attached, or as a system that produces buy and sell calls. That is the point at which a descriptive tool is being sold as a predictive one, see [can AI predict the stock market](/blog/can-ai-predict-the-stock-market).",
      },
      { t: "h2", text: "The bottom line" },
      {
        t: "p",
        text: "Pattern recognition is a useful lens, not an oracle. It is genuinely better done by software than by hand, because software can scan far more than you can. What it produces is a shortlist of things worth thinking about, and the thinking is still yours.",
      },
    ],
    faq: [
      {
        q: "Do chart patterns actually work?",
        a: "They work as descriptions of where price behaviour changed, which makes them useful starting points for research. They do not predict what happens next, and treating them as signals with reliable outcomes is where the approach stops being useful.",
      },
      {
        q: "What is pattern recognition in trading?",
        a: "It is identifying repeating shapes and structures in price data, consolidations, breakouts, reversals and levels that have repeatedly held, so you can look more closely at the points where behaviour has changed.",
      },
      {
        q: "Can AI find chart patterns better than I can?",
        a: "For coverage, yes. Software can scan hundreds of instruments continuously, while manual review is limited to the charts you thought to open. What software cannot do is judge whether a pattern matters for your goals and circumstances.",
      },
    ],
  },

  {
    slug: "franking-credits-explained",
    title: "Franking Credits Explained for Australian Investors",
    description:
      "What franking credits are, why they exist, and how they change the way two similar dividend yields compare for Australian investors.",
    keyword: "franking credits explained",
    category: "Australian investing",
    authorSlug: "author-one",
    published: "2026-10-08",
    updated: "2026-10-08",
    readingMinutes: 7,
    related: ["how-to-research-asx-stocks", "trading-drawdown-explained", "ai-trading-guide"],
    funnelsTo: [
      { href: "/for/asx-investors", label: "For ASX investors" },
      { href: "/glossary/franking-credits", label: "Franking credits, defined" },
    ],
    body: [
      {
        t: "p",
        text: "Franking credits are one of the few genuinely Australian features of investing, and they change how dividend returns should be compared. A headline yield quoted without them is not the after-tax return.",
      },
      {
        t: "note",
        tone: "warn",
        title: "General information, not tax advice",
        text: "How franking affects you depends on your marginal tax rate, your entity structure and your circumstances. Nothing here is tax advice, speak to a registered tax agent about your own situation.",
      },
      { t: "h2", text: "What franking credits are" },
      {
        t: "p",
        text: "When an Australian company earns a profit, it pays tax on it. When it pays a dividend to shareholders out of that already-taxed profit, it attaches a franking credit representing the tax already paid.",
      },
      {
        t: "p",
        text: "The purpose is to avoid the same profit being taxed twice, once in the company's hands and again in the shareholder's. The shareholder declares both the dividend and the franking credit as income, then receives a credit for the tax the company already paid.",
      },
      { t: "h2", text: "Why it matters when comparing holdings" },
      {
        t: "p",
        text: "Two companies with the same headline dividend yield can produce quite different after-tax outcomes, depending on how much of the dividend is franked. A fully franked dividend carries more value to an Australian resident shareholder than an unfranked one of the same size.",
      },
      {
        t: "ul",
        items: [
          "**Fully franked** means the dividend is paid from profits that have already borne the full Australian company tax rate.",
          "**Partially franked** means only part of the profit was taxed in Australia.",
          "**Unfranked** means no Australian tax was paid on the profit, common for dividends from overseas earnings.",
        ],
      },
      {
        t: "note",
        tone: "tip",
        title: "Where this shows up in practice",
        text: "Investors in retirement with a low marginal rate can receive a refund of excess franking credits, which makes franked dividends particularly valuable in that phase. For investors on higher marginal rates the benefit is different but still real.",
      },
      {
        t: "cta",
        title: "Research ASX holdings with the full picture",
        text: "Lavandbit brings price behaviour, trend structure and risk into one view for ASX-listed companies, so you are comparing holdings on more than a headline yield.",
        button: "Get Started Free",
        href: "/get-started",
      },
      { t: "h2", text: "The mistake to avoid" },
      {
        t: "p",
        text: "Chasing yield for the franking alone. A company paying a high fully franked dividend because its share price has fallen may be offering a worse total outcome than a lower-yielding holding that is not declining. Franking is a meaningful input, not a reason on its own.",
      },
      {
        t: "p",
        text: "The second mistake is comparing an Australian franked yield against an international yield without adjusting for it. They are not the same number in after-tax terms, and treating them as equivalent leads to conclusions that do not hold.",
      },
      { t: "h2", text: "How to think about it" },
      {
        t: "p",
        text: "Treat franking as one factor among several, alongside the sustainability of the dividend, the trend in the underlying business, and how the holding fits your overall portfolio. It is a genuine advantage of investing in Australian companies, and it is not a substitute for assessing the company.",
      },
    ],
    faq: [
      {
        q: "What are franking credits?",
        a: "Franking credits, also called imputation credits, are tax credits attached to dividends paid by Australian companies from profits on which the company has already paid Australian tax. They prevent the same profit being taxed twice.",
      },
      {
        q: "Are franking credits worth more to some investors than others?",
        a: "Yes. Their value depends on your marginal tax rate and entity structure. Investors on lower marginal rates, particularly in retirement, can receive excess franking credits as a refund, which makes them more valuable in that phase.",
      },
      {
        q: "Should I choose shares based on franking?",
        a: "No. Franking is one factor among several. A high fully franked yield in a company whose share price is falling may produce a worse outcome than a lower-yielding holding. Consider dividend sustainability, the business, and how the holding fits your portfolio.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slugs: readonly string[]) {
  return slugs.map((s) => getPost(s)).filter((p): p is Post => Boolean(p));
}

export const postCategories = Array.from(new Set(posts.map((p) => p.category)));
