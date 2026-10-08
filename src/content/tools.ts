import type { Block } from "@/content/types";

/**
 * Free calculators.
 *
 * These exist for three reasons, in order of value:
 *   1. They rank on their own, "position size calculator" is a query with
 *      real volume and no need for a brand.
 *   2. They earn backlinks. A genuinely useful free tool is the most reliable
 *      link-building asset an SEO team can produce, and links are the hardest
 *      thing for a new domain to get.
 *   3. They bring qualified traffic. Somebody calculating position size is
 *      already trading, which makes them a far better lead than a reader.
 *
 * Each page ends on a CTA tied to what the tool just showed, not a generic one.
 */

export type Tool = {
  slug: string;
  name: string;
  metaTitle: string;
  description: string;
  keyword: string;
  h1: string;
  intro: string;
  howToUse: { title: string; body: string }[];
  body: Block[];
  faq: { q: string; a: string }[];
  related: { href: string; label: string; note?: string }[];
  cta: { title: string; text: string; button: string };
};

export const tools: Tool[] = [
  {
    slug: "position-size-calculator",
    name: "Position Size Calculator",
    metaTitle: "Position Size Calculator | Risk Per Trade | Lavandbit",
    description:
      "Work out exactly how many units or shares to trade based on your account balance, risk percentage, entry and stop loss. Free, no signup.",
    keyword: "position size calculator",
    h1: "Position Size Calculator",
    intro:
      "Enter your account balance, the percentage you are willing to risk and your entry and stop prices. The calculator returns the position size that keeps your loss at exactly that amount.",
    howToUse: [
      {
        title: "Enter your account balance",
        body: "Use total equity, not the balance of a single position. If you have open trades, include their unrealised value, the risk you are calculating sits on top of what is already exposed.",
      },
      {
        title: "Choose your risk per trade",
        body: "This is the percentage of your account you lose if the stop is hit. Between 0.5% and 2% is the usual professional range. It should be a number you can repeat twenty times in a row without the account becoming unrecoverable.",
      },
      {
        title: "Enter your entry and stop prices",
        body: "The distance between them is your risk per unit. A wide stop means a smaller position; a tight stop means a larger one. The calculator adjusts the size so the money at risk stays the same either way.",
      },
      {
        title: "Place the trade at the size returned",
        body: "The result is the number of units or shares that puts exactly your chosen risk on the line. Anything larger risks more than you decided to.",
      },
    ],
    body: [
      { t: "h2", text: "Why position sizing matters more than your entry" },
      {
        t: "p",
        text: "Ask a trader what makes a strategy work and they will talk about entries. Ask what makes an account survive and the answer is sizing. A mediocre strategy with disciplined sizing keeps going long enough to find out whether it works. A good strategy with reckless sizing ends the account during the first normal losing streak.",
      },
      {
        t: "p",
        text: "The maths is unforgiving because losses and gains are not symmetrical. A 50% drawdown needs a 100% gain to recover. Size too large and a streak that any strategy would survive becomes one you cannot, no matter how good the strategy was.",
      },
      {
        t: "note",
        tone: "tip",
        title: "The 1% test",
        text: "Risking 1% per trade means ten consecutive losses cost you roughly 9.6% of your account. Risking 10% per trade, the same streak costs about 65%. Same strategy, same losing streak, one account continues, the other does not.",
      },
      { t: "h2", text: "The mistakes this calculator is designed to prevent" },
      {
        t: "ul",
        items: [
          "**Sizing by confidence.** Taking a bigger position because a setup looks obvious is the most common way traders break their own rules. The setup looking obvious is not information.",
          "**Fixed lot sizes across instruments.** One lot of one instrument is not the same risk as one lot of another. Sizing must follow the stop distance, not a habit.",
          "**Widening the stop instead of reducing size.** If the stop feels too tight, the answer is a smaller position, not a stop you will talk yourself out of moving.",
          "**Ignoring open positions.** Sizing each trade at 2% while holding four correlated positions is not risking 2%. It is risking 8% on one idea.",
        ],
      },
      { t: "h2", text: "How to make it stick" },
      {
        t: "p",
        text: "The calculation is the easy part. The hard part is applying the same size when you feel strongly about a trade, and the same size after three losses when you want to win it back. Those are exactly the moments where a rule stops being self-enforced.",
      },
      {
        t: "p",
        text: "The fix is procedural rather than technological: work the number out before the trade, while you are calm and nothing is moving, and write it down. A size you calculated in advance is much harder to talk yourself out of than one you are estimating in the moment.",
      },
      {
        t: "cta",
        title: "Work out your numbers, then research the setup",
        text: "Register free and use the platform alongside this calculator, patterns, trend structure and risk surfaced across the market, with the sizing left to you.",
        button: "Get Started Free",
        href: "/get-started",
      },
    ],
    faq: [
      {
        q: "What is a good risk per trade?",
        a: "Most professional traders risk between 0.5% and 2% of account equity per trade. The right number for you is the largest one you could repeat through twenty consecutive losses without the account becoming unrecoverable, which is usually smaller than people expect.",
      },
      {
        q: "How do I calculate position size?",
        a: "Divide the amount you are willing to risk by the distance between your entry and your stop. On a $10,000 account risking 1% ($100) with a $5 stop distance, the position size is 20 units.",
      },
      {
        q: "Does a tighter stop mean a bigger position?",
        a: "Yes, if you keep the money at risk constant. A tighter stop means less risk per unit, so more units fit within the same risk budget. This is why very tight stops can produce surprisingly large positions.",
      },
      {
        q: "Should I use the same position size on every trade?",
        a: "Keep the money at risk the same, not the number of units. Because stop distances differ between instruments and setups, the same risk typically means different unit sizes on each trade.",
      },
    ],
    related: [
      { href: "/glossary/position-sizing", label: "Position sizing, defined", note: "The concept behind the calculation" },
      { href: "/glossary/drawdown", label: "Drawdown, defined", note: "What oversized positions eventually cause" },
      { href: "/blog/trading-drawdown-explained", label: "Trading drawdown explained", note: "Why recovery maths is brutal" },
    ],
    cta: {
      title: "Work out your numbers, then research the setup",
      text: "Register free and use the platform alongside this calculator, patterns, trend structure and risk surfaced across the market, with the sizing left to you.",
      button: "Get Started Free",
    },
  },

  {
    slug: "risk-reward-calculator",
    name: "Risk to Reward Calculator",
    metaTitle: "Risk Reward Ratio Calculator | Break-Even Win Rate | Lavandbit",
    description:
      "Calculate your risk to reward ratio and the win rate you need just to break even. Free calculator, no signup required.",
    keyword: "risk reward calculator",
    h1: "Risk to Reward Calculator",
    intro:
      "Enter your entry, stop and target to get the ratio, and, more usefully, the win rate you need just to break even at that ratio.",
    howToUse: [
      {
        title: "Enter your entry price",
        body: "The price you are planning to open the position at.",
      },
      {
        title: "Enter your stop loss price",
        body: "Below entry for a long, above entry for a short. The calculator detects the direction from where your stop and target sit.",
      },
      {
        title: "Enter your take profit price",
        body: "Where you intend to close for a gain. If it is on the same side of entry as your stop, the calculator will tell you rather than returning a meaningless number.",
      },
      {
        title: "Read the break-even win rate",
        body: "This is the figure most traders never calculate. Below it, the ratio loses money over time regardless of how the last few trades went.",
      },
    ],
    body: [
      { t: "h2", text: "What risk to reward actually tells you" },
      {
        t: "p",
        text: "Risk to reward compares what you stand to lose against what you stand to gain on a single trade. A 3:1 ratio means the target is three times further from entry than the stop.",
      },
      {
        t: "p",
        text: "On its own, the ratio says nothing about whether a strategy makes money. A 5:1 ratio with a 10% win rate loses. A 1:1 ratio with a 60% win rate wins. The ratio and the win rate only mean something together, which is why the break-even win rate is the more useful output.",
      },
      { t: "h2", text: "The break-even win rate, explained" },
      {
        t: "p",
        text: "Every risk-to-reward ratio has a win rate at which it exactly breaks even. Above it you make money over enough trades; below it you lose, however good any individual trade looked.",
      },
      {
        t: "table",
        head: ["Risk to reward", "Break-even win rate"],
        rows: [
          ["1 : 1", "50.0%"],
          ["1.5 : 1", "40.0%"],
          ["2 : 1", "33.3%"],
          ["3 : 1", "25.0%"],
          ["5 : 1", "16.7%"],
          ["10 : 1", "9.1%"],
        ],
      },
      {
        t: "p",
        text: "The table explains a trade-off that catches people out. A high ratio looks attractive, but it demands a low win rate to work, and low win rates are psychologically hard to hold. A 5:1 strategy losing eight trades in a row is normal, and most traders abandon it during that streak, right before it works.",
      },
      {
        t: "note",
        tone: "warn",
        title: "The number to compare against",
        text: "Once you know your break-even win rate, compare it to your strategy's actual historical win rate. If the real figure sits below the break-even line, the strategy loses money, and no amount of discipline at execution will change that.",
      },
      { t: "h2", text: "Where traders go wrong with this ratio" },
      {
        t: "ul",
        items: [
          "**Measuring the ratio in hindsight.** The ratio that matters is the one you set before entering, not the one the trade happened to produce.",
          "**Moving the target further out to improve the ratio.** A 10:1 ratio you never reach is worse than a 2:1 ratio you take consistently.",
          "**Ignoring the win rate entirely.** A ratio with no win rate attached is half a calculation.",
          "**Forgetting costs.** Commission and slippage land on both the risk and the reward side and quietly move the break-even win rate up.",
        ],
      },
      {
        t: "cta",
        title: "Check the ratio against your real results",
        text: "Lavandbit's backtester reports win rate alongside the risk-to-reward each rule produced, so you can see whether the strategy clears its own break-even line.",
        button: "Get Started Free",
        href: "/get-started",
      },
    ],
    faq: [
      {
        q: "What is a good risk to reward ratio?",
        a: "Any ratio can work if the win rate clears its break-even point. 2:1 and 3:1 are common because they tolerate a win rate most traders can realistically achieve, but the ratio is only half the calculation, the other half is whether you actually win that often.",
      },
      {
        q: "How do I calculate risk to reward?",
        a: "Divide the distance from entry to target by the distance from entry to stop. Entry at 100, stop at 95 and target at 115 gives a risk of 5 and a reward of 15, so 3:1.",
      },
      {
        q: "What win rate do I need at 2:1?",
        a: "33.3%. Below that, a 2:1 strategy loses money over enough trades, even though each individual winner is twice the size of each loser.",
      },
      {
        q: "Is a higher risk to reward ratio always better?",
        a: "No. Higher ratios require lower win rates to break even, and low win rates mean long losing streaks that are genuinely difficult to sit through. A ratio you can execute consistently beats a better one you abandon.",
      },
    ],
    related: [
      { href: "/tools/position-size-calculator", label: "Position size calculator", note: "Work out how much to trade" },
      { href: "/tools/drawdown-recovery-calculator", label: "Drawdown recovery calculator", note: "What a losing streak costs" },
      { href: "/blog/why-trading-bots-lose-money", label: "Why most trading bots lose money", note: "The six failure modes" },
    ],
    cta: {
      title: "Check the ratio against your real results",
      text: "Lavandbit's backtester reports win rate alongside the risk-to-reward each rule produced, so you can see whether the strategy clears its own break-even line.",
      button: "Get Started Free",
    },
  },

  {
    slug: "drawdown-recovery-calculator",
    name: "Drawdown Recovery Calculator",
    metaTitle: "Drawdown Recovery Calculator | Gain to Recover | Lavandbit",
    description:
      "See exactly how much gain a drawdown requires to recover. A 50% loss needs a 100% gain, calculate your own figure before you need it.",
    keyword: "drawdown recovery calculator",
    h1: "Drawdown Recovery Calculator",
    intro:
      "Losses and gains are not symmetrical. Enter a drawdown to see the return required to get back to where you started, a number that is usually far larger than people expect.",
    howToUse: [
      {
        title: "Enter your drawdown",
        body: "How far your account has fallen from its highest point, as a percentage. If it peaked at $12,000 and now sits at $9,600, that is a 20% drawdown.",
      },
      {
        title: "Read the required gain",
        body: "This is the return you need just to break even, not to profit. The figure is always larger than the drawdown itself.",
      },
      {
        title: "Check the ladder",
        body: "The table shows how the required gain grows out of proportion as the drawdown deepens. It is the clearest argument for setting a limit before you need one.",
      },
      {
        title: "Set your limit in advance",
        body: "Decide now, while you are calm, the drawdown at which you would stop trading. The version of you watching a position go against them is not the one who should be making that decision.",
      },
    ],
    body: [
      { t: "h2", text: "Why recovery requires a bigger gain than the loss" },
      {
        t: "p",
        text: "Percentages are calculated from the current value, and that value has shrunk. Lose 50% of $10,000 and you have $5,000. To get back to $10,000 you need to double $5,000, a 100% gain to undo a 50% loss.",
      },
      {
        t: "p",
        text: "The asymmetry compounds as losses deepen, and it is the single most under-appreciated fact in retail trading. It is also entirely mechanical: no strategy, discipline or software changes the arithmetic.",
      },
      { t: "h2", text: "What this means in practice" },
      {
        t: "ul",
        items: [
          "**A 20% drawdown needs a 25% gain.** Tolerable, and recoverable within a normal run of trades.",
          "**A 50% drawdown needs a 100% gain.** Most traders who reach this point close the account before finding out whether the strategy recovers.",
          "**A 90% drawdown needs a 900% gain.** This is not recovery, it is rebuilding from scratch with a fraction of the capital.",
        ],
      },
      {
        t: "note",
        tone: "stop",
        title: "The behaviour behind the maths",
        text: "The arithmetic above assumes you keep running the strategy. In practice, deep drawdowns cause traders to change the strategy, increase position size to win it back, or stop entirely. All three usually convert a recoverable drawdown into a permanent loss.",
      },
      { t: "h2", text: "Setting a drawdown limit you can actually hold" },
      {
        t: "p",
        text: "The limit should be the number you would genuinely accept, not the one that sounds disciplined. A limit you would override at the moment it triggers is not a limit. It is a preference.",
      },
      {
        t: "p",
        text: "Writing the number down while you are calm is what makes it usable later. The version of you watching a holding fall is not the one who should be deciding where the limit sits.",
      },
      {
        t: "cta",
        title: "Research with the downside in the same view",
        text: "Lavandbit surfaces risk factors alongside every pattern and trend reading, so the case against an idea is in front of you while you are still deciding.",
        button: "Get Started Free",
        href: "/get-started",
      },
      { t: "h2", text: "How to size so that drawdown stays survivable" },
      {
        t: "p",
        text: "Drawdown is a function of position size. Halving your risk per trade roughly halves the depth of a given losing streak, which moves the recovery requirement from impossible to routine. It is the cheapest risk control available and the one most often ignored.",
      },
      {
        t: "p",
        text: "Use the [position size calculator](/tools/position-size-calculator) to work out what your current risk per trade implies, then check it against the drawdown you could actually live with.",
      },
    ],
    faq: [
      {
        q: "How much gain do I need to recover a 50% loss?",
        a: "100%. If your account falls from $10,000 to $5,000, you need to double the remaining $5,000 to get back to the starting point. This asymmetry is why drawdown is treated as the primary risk measure.",
      },
      {
        q: "Why does recovery need a bigger percentage than the loss?",
        a: "Because percentages are calculated against a shrinking base. A loss reduces the amount the recovery percentage is measured from, so the same absolute recovery becomes a larger percentage.",
      },
      {
        q: "What is a safe maximum drawdown?",
        a: "There is no universal figure. It depends on what you could genuinely continue holding through. What matters is deciding the number before you need it, and writing it down, rather than deciding while the value is falling.",
      },
      {
        q: "How do I reduce drawdown?",
        a: "Position size is the main lever. Reducing the percentage risked per trade reduces the depth of any given losing streak proportionally, which moves the recovery requirement into a range that is actually achievable.",
      },
    ],
    related: [
      { href: "/blog/trading-drawdown-explained", label: "Trading drawdown explained", note: "The full treatment" },
      { href: "/tools/position-size-calculator", label: "Position size calculator", note: "The lever that controls drawdown" },
      { href: "/glossary/risk-management", label: "Risk management", note: "Why sizing and limits matter more than picking" },
    ],
    cta: {
      title: "Research with the downside in the same view",
      text: "Lavandbit surfaces risk factors alongside every pattern and trend reading, so the case against an idea is in front of you while you are still deciding.",
      button: "Get Started Free",
    },
  },
];

export function getTool(slug: string) {
  return tools.find((t) => t.slug === slug);
}
