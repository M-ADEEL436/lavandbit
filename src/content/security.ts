import type { Block } from "@/content/types";

export const securityPage = {
  meta: {
    title: "Is Lavandbit Safe? Trust, Data and Limits | Lavandbit",
    description:
      "What Lavandbit does and does not do: no trade execution, no access to your brokerage account, no advice. Plus the honest limits of AI market analysis.",
    keyword: "is trader ai safe",
  },
  eyebrow: "Trust and limits",
  h1: "Information and analysis. Not advice, and not a broker.",
  sub: "The fastest way to judge any AI trading tool is to ask what it actually does. Here is a straight account of what Lavandbit is, what it is not, and where its analysis stops being useful.",
  principles: [
    {
      title: "Not financial advice",
      body: "Lavandbit provides informational tools and market research. Nothing in the platform or on this website is financial product advice, a recommendation, or an offer to buy or sell any investment, and we do not take your objectives or circumstances into account.",
    },
    {
      title: "Not a broker, and not a trading platform",
      body: "Lavandbit does not place trades, execute orders, or connect to your brokerage account. It has no access to your money and no ability to move it. Any transaction is made by you, through your own broker.",
    },
    {
      title: "Not a prediction machine",
      body: "Markets are unpredictable and no tool can see the future. AI can process far more information than a person can and surface what might matter. It cannot tell you what will happen, and we will not pretend otherwise.",
    },
    {
      title: "Analysis you can inspect",
      body: "Every pattern, trend reading and risk factor the platform surfaces is shown with the data behind it, in plain language. You can judge whether the reasoning holds up rather than taking an output on faith.",
    },
    {
      title: "Your research stays yours",
      body: "Watchlists and notes belong to your account. We do not sell personal information, and we do not share it with anyone for advertising. The privacy policy sets out what is collected and how to have it deleted.",
    },
    {
      title: "Clear about what is generated",
      body: "AI-generated analysis is labelled as such. Projections and trend readings are described as informational and are never presented as forecasts or guarantees.",
    },
  ],
  risks: [
    "**Investment risk.** The value of investments can fall as well as rise, and you may get back less than you put in. No research tool changes that.",
    "**Analysis can be wrong.** AI output may be incomplete or incorrect, and it is based on historical data that may not reflect current conditions. Treat it as an input, not a conclusion.",
    "**Over-trust is a real risk.** The most common way investors come unstuck with tools like this is treating a pattern or trend reading as a decision rather than a starting point for their own thinking.",
    "**Data can lag or be incomplete.** Market data depends on third-party sources and can be delayed, revised or missing. Do not rely on it for time-critical decisions.",
  ],
  body: [
    {
      t: "h2",
      text: "Is Lavandbit legit?",
    },
    {
      t: "p",
      text: "It is a fair question, and the honest answer is that you should judge any tool in this category on what it claims, not on how it looks. Lavandbit is an Australian business, and its registered details are on the About page. It is a research tool with no return to promise, which means there is nothing for us to guarantee and little incentive to overstate what the software does.",
    },
    {
      t: "p",
      text: "The category has a problem, though. A lot of products marketed as AI trading tools imply they will make you money, hide how their analysis works, or blur the line between information and advice. Those are the signals that matter.",
    },
    {
      t: "h2",
      text: "The questions worth asking any AI trading tool",
    },
    {
      t: "p",
      text: "Run these against Lavandbit as much as against anyone else. If a product cannot answer them clearly, that is your answer.",
    },
    {
      t: "ol",
      items: [
        "**Does it claim to predict the market?** Nothing can. Reliable prediction is not a feature, it is a warning sign.",
        "**Does it take custody of your money, or connect to your brokerage account?** A research tool has no reason to do either.",
        "**Is the analysis visible, or is it a black box?** You should be able to see what the output is based on.",
        "**Is it clear that it does not provide financial advice?** In Australia, giving financial product advice without an AFS licence is an offence. A tool that blurs that line is a problem for you and for them.",
        "**Is there a real business behind it?** A named entity, an ABN, and a stated regulatory position.",
      ],
    },
    {
      t: "note",
      tone: "stop",
      title: "Walk away if you see",
      text: "Guaranteed returns. Fixed monthly percentages. Claims that AI can predict the market reliably. Pressure to deposit funds with the tool itself. No named company, no ABN, no risk disclosure. Any one of these is disqualifying.",
    },
    {
      t: "cta",
      title: "Ask us the hard questions",
      text: "Register free and we will walk you through what the platform analyses, how the output is generated, and where it stops being useful.",
      button: "Get Started Free",
      href: "/get-started",
    },
    {
      t: "h2",
      text: "What the platform is genuinely good at",
    },
    {
      t: "p",
      text: "Being clear about the limits does not mean the tool is not useful. It is useful in a narrower, more honest way than the category usually admits.",
    },
    {
      t: "ul",
      items: [
        "**Coverage.** Scanning hundreds of instruments for patterns is genuinely impractical by hand, and this is where software earns its place.",
        "**Organisation.** Bringing prices, movements and context into one view removes the tab-hopping that eats most of a research session.",
        "**Risk framing.** Putting the downside in the same view as the opportunity is simple, and most people skip it when researching alone.",
        "**Consistency.** The same analysis applied the same way every time, rather than depending on how much energy you have that evening.",
      ],
    },
    {
      t: "p",
      text: "None of that makes the decision for you. It makes the information in front of you better, faster and more organised, which is the part a tool can actually improve.",
    },
  ] as Block[],
};
