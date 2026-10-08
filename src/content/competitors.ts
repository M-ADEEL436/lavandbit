import type { Competitor } from "@/content/types";

/**
 * Comparison pages.
 *
 * These compare *approaches* rather than named companies. Naming a real
 * competitor requires accurate, current, verifiable facts about their
 * product, publishing an inaccurate comparison of a named business is both
 * a legal risk and a credibility risk. Add named pages once the client can
 * supply those facts; they convert hardest of anything on the site.
 */
export const competitors: Competitor[] = [
  {
    slug: "researching-by-hand",
    name: "Researching By Hand",
    metaTitle: "AI Market Research vs Doing It Yourself | Lavandbit",
    description:
      "An honest comparison of AI-assisted market research and doing it manually: what software genuinely does better, what you lose, and when hand research wins.",
    keyword: "ai trading tools vs manual research",
    intro:
      "Doing your own research is not the problem, the time it takes is. Software is better at four specific things here, and worse at one. Knowing which is which is the whole decision.",
    theirStrengths: [
      "You build genuine intuition for how markets behave, which no summary gives you",
      "You can follow a line of thinking wherever it leads without a tool's structure",
      "No dependency on a data provider being correct or current",
      "Nothing to learn. You already know how you like to work",
    ],
    summary: [
      { label: "Instruments reviewed per session", theirs: "A handful", ours: "Hundreds" },
      { label: "Time spent assembling data", theirs: "Most of it", ours: "Near zero" },
      { label: "Patterns surfaced automatically", theirs: "No", ours: "Yes" },
      { label: "Risk shown alongside the setup", theirs: "If you look", ours: "Yes, by default" },
      { label: "Builds your own market intuition", theirs: "Strongly", ours: "Less so" },
      { label: "Consistency across sessions", theirs: "Depends on your energy", ours: "Same every time" },
      { label: "Cost", theirs: "Your time", ours: "Subscription" },
      { label: "Decides anything for you", theirs: "No", ours: "No" },
    ],
    body: [
      { t: "h2", text: "What software is genuinely better at" },
      {
        t: "p",
        text: "There are four things a tool does better than a person with a browser open, and they are all about scale and organisation rather than insight.",
      },
      {
        t: "ol",
        items: [
          "**Coverage.** Reviewing three hundred charts by hand is not a thing anyone does. Software scanning the same set for repeating structures is trivial, and it means you see candidates you would never have opened.",
          "**Assembly.** Most research time goes on collecting, prices here, movements there, context somewhere else. That work is mechanical, and mechanical work is what software is for.",
          "**Consistency.** Your analysis depends on how much time and energy you have that evening. Software applies the same process every time, which makes your own notes comparable across months.",
          "**Risk framing.** Left alone, most people research the case for an idea and skip the case against it. Putting risk in the same view by default corrects a very human bias.",
        ],
      },
      {
        t: "note",
        tone: "warn",
        title: "The honest counterweight",
        text: "Software gives you a broader and better-organised view. It does not give you judgement, and it does not build the intuition that comes from doing the work yourself. Investors who use tools like this well still read, still think, and still form their own view.",
      },
      { t: "h2", text: "What you give up" },
      {
        t: "p",
        text: "Hands-on research builds a feel for markets that no summary replaces. If you are early in learning how markets behave, there is real value in having done the manual version. You will read an AI summary very differently once you have spent a year building your own view.",
      },
      {
        t: "p",
        text: "There is also a dependency cost. Using a tool means trusting its data source and its pattern definitions. Worth knowing what you are relying on, and worth checking its output against your own reading of a chart you know well.",
      },
      {
        t: "cta",
        title: "See whether the output is useful to you",
        text: "Register free and we will run the analysis on instruments you already know well, so you can judge it against your own reading rather than taking our word for it.",
        button: "Get Started Free",
        href: "/get-started",
      },
      { t: "h2", text: "The sensible arrangement" },
      {
        t: "ul",
        items: [
          "Let the tool do the scanning and assembling. That is the part it is genuinely better at.",
          "Spend the time you save on the part that needs a human: judging whether a setup makes sense for your goals and time horizon.",
          "Keep reading and forming your own view. A tool that replaces your thinking has made you worse off, not better.",
          "Check the analysis against charts you know well before you rely on it for ones you do not.",
        ],
      },
      { t: "h2", text: "The bottom line" },
      {
        t: "p",
        text: "Doing it by hand builds judgement and costs you hours. Software buys back the hours and gives you a wider view. Neither one decides anything, and anyone selling a tool that claims to should be treated with suspicion.",
      },
    ],
    faq: [
      {
        q: "Is AI market research better than doing it yourself?",
        a: "It is faster and broader, and it removes the manual assembly work. It does not give you judgement or market intuition, which only come from doing the thinking yourself. Most people use both: the tool scans and organises, they decide.",
      },
      {
        q: "Will AI tools replace my own research?",
        a: "They should not. Lavandbit is built to support your thinking, not replace it. If you find yourself acting on output without understanding the reasoning behind it, that is a sign to slow down.",
      },
      {
        q: "Do I need investing experience to use AI research tools?",
        a: "No, but experience helps you interpret what you are looking at. Newer investors often get more from doing some manual research first, then using tools to widen their coverage.",
      },
    ],
    related: ["stock-tips", "ai-prediction-tools", "robo-advisers"],
  },

  {
    slug: "stock-tips",
    name: "Stock Tips And Signal Groups",
    metaTitle: "Stock Tips vs Your Own Research | Lavandbit Australia",
    description:
      "Paid stock tips and signal groups versus research you do yourself: what you actually learn from each, and why following calls rarely builds anything durable.",
    keyword: "stock tips vs own research",
    intro:
      "A tip tells you what someone else decided. It does not tell you why, how much to risk, or what to do when it goes wrong, which is where most of the outcome is decided.",
    theirStrengths: [
      "Fast, and easy to act on without any research of your own",
      "Can be genuinely useful for learning how an experienced investor reasons",
      "Cheap or free compared with research tools",
      "No learning curve and nothing to set up",
    ],
    summary: [
      { label: "You understand the reasoning", theirs: "Rarely", ours: "Yes, the analysis is visible" },
      { label: "Sizing and risk guidance", theirs: "Usually absent", ours: "Risk shown alongside the setup" },
      { label: "Independent of anyone's position", theirs: "Often unclear", ours: "Yes, research only" },
      { label: "Verifiable track record", theirs: "Usually a screenshot", ours: "n/a. We make no performance claims" },
      { label: "Builds your own judgement", theirs: "No", ours: "Yes, if you engage with the analysis" },
      { label: "Works when the call is wrong", theirs: "You are on your own", ours: "You saw the risk before acting" },
      { label: "Costs your time", theirs: "None", ours: "Some" },
    ],
    body: [
      { t: "h2", text: "The gap between receiving a tip and making money from it" },
      {
        t: "p",
        text: "Assume the tip is good. You still have to decide how much to put in, when to get out if it goes wrong, and whether it even fits your goals and time horizon. None of that comes with the tip.",
      },
      {
        t: "p",
        text: "And when it does not work out, you have nothing to reason with. You cannot tell whether the idea was bad, the timing was bad, or the market simply moved against it, because you never saw the reasoning in the first place. That is the actual cost, and it is paid over years rather than in one trade.",
      },
      { t: "h2", text: "How to judge a tip or signal service" },
      {
        t: "ul",
        items: [
          "**Ask for the losing calls, not the winning ones.** Anyone can show you a good month. An honest operator shows the ones that went wrong.",
          "**Check whether a reason is given.** A call with no reasoning teaches you nothing and cannot be evaluated later.",
          "**Look for disclosure of interest.** In Australia, providing financial product advice for a fee generally requires an AFS licence. Ask whether they hold one.",
          "**Ignore screenshots.** They are trivially fabricated. There is no substitute for a verifiable track record.",
        ],
      },
      {
        t: "note",
        tone: "tip",
        title: "A fair use for tips",
        text: "Treat them as a source of ideas and as a way to see how an experienced investor frames a situation. Then do your own research on the idea before acting. The learning is real; the shortcut is not.",
      },
      {
        t: "cta",
        title: "Ideas you can actually evaluate",
        text: "Register free and see the analysis behind a pattern rather than a call with no reasoning attached.",
        button: "Get Started Free",
        href: "/get-started",
      },
      { t: "h2", text: "What changes when the analysis is visible" },
      {
        t: "p",
        text: "When you can see why something was surfaced, which pattern, which trend reading, which risk factors. You can disagree with it. You can check it against what you know about the company. And when it goes wrong, you can work out why.",
      },
      {
        t: "p",
        text: "That is a different exercise from following calls. It is slower, and it builds something that stays with you.",
      },
      { t: "h2", text: "The bottom line" },
      {
        t: "p",
        text: "Tips are someone else's conclusion delivered to you without the working. They can be a starting point for your own research. They are a poor substitute for it.",
      },
    ],
    faq: [
      {
        q: "Are stock tips worth paying for?",
        a: "Sometimes, as education, seeing how an experienced investor reasons about a situation has real value. They rarely solve the decision problem, because you still have to size the position, set a limit and decide when to exit. Judge them on what you learn, not on whether following them made money.",
      },
      {
        q: "Do I need a licence to give stock tips in Australia?",
        a: "Generally, providing financial product advice to others for a fee requires an Australian Financial Services licence, unless an exemption applies. This is a legal question specific to the arrangement, take proper advice rather than relying on a general answer.",
      },
      {
        q: "How is Lavandbit different from a signal group?",
        a: "Lavandbit does not tell you what to buy or sell. It surfaces patterns, trends and risk information with the data behind them, so you can form your own view. It is a research tool, not a source of calls.",
      },
    ],
    related: ["researching-by-hand", "ai-prediction-tools", "robo-advisers"],
  },

  {
    slug: "robo-advisers",
    name: "Robo-Advisers",
    metaTitle: "Robo-Advisers vs Self-Directed Research | Lavandbit Australia",
    description:
      "Robo-advisers manage a portfolio for you. Research tools help you manage your own. A fair comparison of the two, including where robo-advice wins.",
    keyword: "robo advice vs self directed investing",
    intro:
      "These are not competing products. A robo-adviser makes the decisions and manages the money. A research tool gives you better information and leaves the decisions to you. Which you want depends on a question about yourself, not about software.",
    theirStrengths: [
      "You do not have to make any decisions, which suits a lot of people very well",
      "Automatic diversification and rebalancing, done consistently",
      "Generally low fees and a very low time commitment",
      "Regulated advice, with an AFS licence behind the recommendations",
      "Removes the behaviour gap, most investors do worse by acting on impulse",
    ],
    summary: [
      { label: "Who makes the decisions", theirs: "The provider", ours: "You" },
      { label: "Holds your money", theirs: "Yes. It manages your portfolio", ours: "No. It never touches your funds" },
      { label: "Licensed to give advice", theirs: "Yes, generally", ours: "No, information only" },
      { label: "Time required from you", theirs: "Minutes a year", ours: "Ongoing, because you are deciding" },
      { label: "Control over individual holdings", theirs: "Limited or none", ours: "Total. They are your calls" },
      { label: "Suited to a hands-off investor", theirs: "Very", ours: "No" },
      { label: "Suited to someone who wants to research", theirs: "Not really", ours: "Yes" },
      { label: "Cost", theirs: "Management fee", ours: "Subscription" },
    ],
    body: [
      { t: "h2", text: "The question that decides this" },
      {
        t: "p",
        text: "Do you want to make your own investment decisions? Not whether you are capable of it, whether you actually want to. A meaningful number of people have the ability and no interest, and for them a robo-adviser is very often the better answer.",
      },
      {
        t: "p",
        text: "There is no version of this where a research tool is the right choice for someone who wants to be hands-off. It will not make decisions, it will not manage a portfolio, and it will not rebalance anything.",
      },
      {
        t: "note",
        tone: "warn",
        title: "Worth being honest with yourself",
        text: "The strongest argument for robo-advice is behavioural. Investors who act on impulse tend to underperform those who do not. If you know you will make emotional decisions, an automated portfolio may serve you better than better information ever would.",
      },
      { t: "h2", text: "Where a research tool fits" },
      {
        t: "ul",
        items: [
          "You already invest directly and want better inputs rather than a managed portfolio.",
          "You want to understand Australian and global markets rather than delegate that understanding.",
          "You are comfortable being responsible for your own outcomes, including the bad ones.",
          "You want your research organised and documented, useful if you are a trustee of a self-managed fund.",
        ],
      },
      {
        t: "cta",
        title: "For investors who want to do the deciding",
        text: "Register free and see what the analysis gives you to work with on instruments you already follow.",
        button: "Get Started Free",
        href: "/get-started",
      },
      { t: "h2", text: "Can you use both?" },
      {
        t: "p",
        text: "Absolutely, and plenty of people do. A managed core portfolio plus a smaller self-directed allocation is a common and sensible structure, the robo-adviser handles the part you do not want to think about, and tools like this support the part you do.",
      },
      { t: "h2", text: "The bottom line" },
      {
        t: "p",
        text: "Robo-advice answers \"what should I invest in\". A research tool answers \"what is happening in this market\". If you want the first answer, a robo-adviser is the right product. If you want the second, it is the wrong one.",
      },
    ],
    faq: [
      {
        q: "Is a robo-adviser better than investing yourself?",
        a: "For many people, yes, particularly those who do not want to make decisions or who know they act on impulse. For investors who want to research and decide themselves, it removes control they want. It is a question about your preferences, not about which product is superior.",
      },
      {
        q: "Is Lavandbit a robo-adviser?",
        a: "No. Lavandbit does not manage a portfolio, does not recommend investments, and does not hold your money. It is a research tool that provides information and analysis.",
      },
      {
        q: "Does Lavandbit give financial advice?",
        a: "No. Lavandbit provides informational tools and market research only. It does not consider your objectives, financial situation or needs, and nothing on the platform is a recommendation.",
      },
    ],
    related: ["stock-tips", "researching-by-hand", "ai-prediction-tools"],
  },

  {
    slug: "ai-prediction-tools",
    name: "AI Prediction Tools",
    metaTitle: "AI Market Prediction vs AI Research Tools | Lavandbit",
    description:
      "Some AI tools claim to predict the market. Here is what AI can and cannot do with market data, and how a research tool differs from a prediction service.",
    keyword: "ai stock market prediction",
    intro:
      "No tool can predict the market. Some products are honest about that and some are not, and the difference shows up in the way they describe what their software does. This page is about telling them apart.",
    theirStrengths: [
      "Predictions are emotionally satisfying, a clear answer is easier to act on than a nuanced one",
      "Some prediction models are genuinely sophisticated research projects",
      "A confident output is easier to market, which is exactly why the category attracts so many of them",
    ],
    summary: [
      { label: "Claims to predict the market", theirs: "Usually", ours: "Never" },
      { label: "Shows its reasoning", theirs: "Rarely", ours: "Always" },
      { label: "Says what it cannot do", theirs: "Seldom", ours: "On every page" },
      { label: "Guarantees an outcome", theirs: "Sometimes, indirectly", ours: "No" },
      { label: "Useful as a research input", theirs: "Hard to evaluate", ours: "Yes" },
      { label: "What it gives you", theirs: "An answer", ours: "Better information to form your own" },
    ],
    body: [
      { t: "h2", text: "What AI can actually do with market data" },
      {
        t: "p",
        text: "AI is genuinely good at processing large amounts of information and finding structure a person would not spot by hand. That is real and useful. What it cannot do is tell you what happens next, and the reason is not a limitation waiting to be engineered away.",
      },
      {
        t: "ul",
        items: [
          "**It can scan.** Reviewing hundreds of instruments for repeating patterns is exactly the kind of task software should do.",
          "**It can organise.** Bringing dispersed market information into one consistent view is a genuine improvement on doing it manually.",
          "**It can describe.** Trend direction and momentum from recent price behaviour is a description of what has happened, not a forecast of what will.",
          "**It cannot predict.** Markets are influenced by events, sentiment, policy and the actions of everyone else participating. No model captures that, and models trained on the past degrade as markets adapt.",
        ],
      },
      {
        t: "note",
        tone: "stop",
        title: "The pattern to be suspicious of",
        text: "A tool that claims reliable prediction, shows profit screenshots as typical, or uses the language of certainty about future prices. Either the people behind it do not understand the problem, or they are hoping you do not.",
      },
      { t: "h2", text: "Why an \"answer\" feels more useful than it is" },
      {
        t: "p",
        text: "A prediction gives you something to act on, which feels like progress. But if the prediction is not reliable, acting on it is worse than acting on nothing. You have skipped your own research in exchange for confidence you should not have had.",
      },
      {
        t: "p",
        text: "A research tool gives you less satisfying output: here is a pattern, here is the trend structure, here is the risk. It asks you to do something with it. That is a harder product to sell and a more useful one to own.",
      },
      {
        t: "cta",
        title: "See the difference on your own watchlist",
        text: "Register free and look at what the analysis gives you, patterns, trend context and risk, with the reasoning shown.",
        button: "Get Started Free",
        href: "/get-started",
      },
      { t: "h2", text: "How to evaluate any claim in this category" },
      {
        t: "ol",
        items: [
          "Ask what the tool does when it is wrong, because it will be. A product with no answer is not being straight with you.",
          "Ask whether the reasoning is visible. If the output is a conclusion with nothing behind it, you cannot evaluate it and neither can anyone else.",
          "Look at how the product describes itself under pressure. Clear, hedged language about limits is a good sign. Confident language about outcomes is not.",
          "Check whether it holds your money. A prediction service that wants your funds has stopped being a research product.",
        ],
      },
      { t: "h2", text: "The bottom line" },
      {
        t: "p",
        text: "AI can make your research faster, broader and better organised. It cannot make the market predictable. Products that blur that line are selling you a feeling, and the feeling is the expensive part.",
      },
    ],
    faq: [
      {
        q: "Can AI predict the stock market?",
        a: "No. AI can identify patterns and structure in historical data and describe possible directions, but markets are influenced by too many unpredictable factors for reliable prediction. Treat any tool claiming otherwise as a warning sign rather than a selling point.",
      },
      {
        q: "Is AI stock analysis accurate?",
        a: "It can be accurate about what the data shows and still be unhelpful about what happens next. AI analysis should be treated as an input to your own thinking, not as a conclusion. It can be incomplete, wrong, or based on conditions that have changed.",
      },
      {
        q: "What is the difference between AI prediction and AI research?",
        a: "A prediction service tells you what it thinks will happen. A research tool shows you what the data contains, patterns, trend structure, risk factors, and leaves the interpretation to you. Lavandbit is the second kind.",
      },
    ],
    related: ["stock-tips", "researching-by-hand", "robo-advisers"],
  },
];

export function getCompetitor(slug: string) {
  return competitors.find((c) => c.slug === slug);
}
