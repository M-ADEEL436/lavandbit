"use client";

import { useState } from "react";
import { CalcShell, NumberField, ResultPanel, fmt, num } from "@/components/tools/parts";

export function RiskRewardCalculator() {
  const [entry, setEntry] = useState("100");
  const [stop, setStop] = useState("95");
  const [target, setTarget] = useState("115");

  const e = num(entry);
  const s = num(stop);
  const t = num(target);

  const riskPerUnit = Math.abs(e - s);
  const rewardPerUnit = Math.abs(t - e);
  const rr = riskPerUnit > 0 ? rewardPerUnit / riskPerUnit : 0;

  // The win rate at which this ratio breaks even. Below it, the strategy loses.
  const breakeven = rr > 0 ? (1 / (1 + rr)) * 100 : 100;

  const isLong = t > e && s < e;
  const isShort = t < e && s > e;
  const direction = isLong ? "Long" : isShort ? "Short" : null;

  const invalid = e <= 0 || s <= 0 || t <= 0 || riskPerUnit === 0 || !direction;

  return (
    <CalcShell
      inputs={
        <>
          <NumberField id="rr-entry" label="Entry price" value={entry} onChange={setEntry} prefix="$" />
          <NumberField
            id="rr-stop"
            label="Stop loss price"
            value={stop}
            onChange={setStop}
            prefix="$"
            hint="For a long this sits below entry; for a short, above it."
          />
          <NumberField
            id="rr-target"
            label="Take profit price"
            value={target}
            onChange={setTarget}
            prefix="$"
          />
        </>
      }
      results={
        <ResultPanel
          headline="Risk to reward ratio"
          value={invalid ? "-" : `${fmt(rr, 2)} : 1`}
          unit={direction ? direction.toLowerCase() : undefined}
          rows={[
            {
              label: "Risk per unit",
              value: riskPerUnit > 0 ? `$${fmt(riskPerUnit, 4)}` : "-",
            },
            {
              label: "Reward per unit",
              value: rewardPerUnit > 0 ? `$${fmt(rewardPerUnit, 4)}` : "-",
            },
            {
              label: "Break-even win rate",
              value: invalid ? "-" : `${fmt(breakeven, 1)}%`,
              emphasis: true,
            },
          ]}
          note={
            invalid ? (
              <span className="text-danger">
                {!direction
                  ? "Your stop and target are on the same side of the entry price. A long needs its stop below entry and its target above; a short is the reverse."
                  : "Entry and stop price must be different, and all values must be greater than zero."}
              </span>
            ) : (
              <>
                Below a {fmt(breakeven, 1)}% win rate this ratio loses money. That
                is the number to compare your strategy against, not the return,
                and not how the last few trades felt.
              </>
            )
          }
        />
      }
    />
  );
}
