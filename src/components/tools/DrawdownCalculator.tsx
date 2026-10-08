"use client";

import { useState } from "react";
import { CalcShell, NumberField, ResultPanel, fmt, num } from "@/components/tools/parts";

const LADDER = [10, 20, 30, 40, 50, 60, 70, 80, 90];

function requiredGain(drawdownPct: number) {
  if (drawdownPct <= 0 || drawdownPct >= 100) return null;
  return (1 / (1 - drawdownPct / 100) - 1) * 100;
}

export function DrawdownCalculator() {
  const [dd, setDd] = useState("30");

  const d = num(dd);
  const gain = requiredGain(d);
  const remaining = Math.max(0, 100 - d);

  return (
    <div className="flex flex-col gap-8">
      <CalcShell
        inputs={
          <>
            <NumberField
              id="dd-percent"
              label="Drawdown from peak"
              value={dd}
              onChange={setDd}
              suffix="%"
              hint="How far your account has fallen from its highest point."
            />
            <div className="mt-2 flex flex-col gap-2 rounded-[var(--radius-control)] border border-line bg-surface-2 p-4">
              <p className="eyebrow text-ink-3">Reference ladder</p>
              <p className="text-[0.85rem] leading-relaxed text-ink-2">
                Recovery is not symmetrical, a 50% loss needs a 100% gain to get
                back to where you started. This is why drawdown is treated as the
                primary risk figure, ahead of returns.
              </p>
            </div>
          </>
        }
        results={
          <ResultPanel
            headline="Gain required to recover"
            value={gain === null ? "-" : `${fmt(gain, 1)}%`}
            rows={[
              {
                label: "Capital remaining",
                value: `${fmt(remaining, 1)}%`,
              },
              {
                label: "Drawdown",
                value: `${fmt(d, 1)}%`,
              },
              {
                label: "Return needed",
                value: gain === null ? "-" : `${fmt(gain, 1)}%`,
                emphasis: true,
              },
            ]}
            note={
              gain === null ? (
                <span className="text-danger">
                  Enter a drawdown between 0 and 100 percent.
                </span>
              ) : (
                <>
                  A {fmt(d, 0)}% drawdown requires a {fmt(gain, 0)}% gain just to
                  break even. Most traders who reach this level close the account
                  before finding out whether the strategy recovers, which is why
                  the limit should be set before you need it.
                </>
              )
            }
          />
        }
      />

      {/* The ladder: genuinely tabular data, so it is a table. */}
      <div className="overflow-x-auto rounded-[var(--radius-card)] border border-line bg-surface">
        <table className="w-full min-w-[26rem] border-collapse text-[0.9rem]">
          <caption className="sr-only">Drawdown levels and the gain required to recover</caption>
          <thead>
            <tr>
              <th scope="col" className="eyebrow border-b border-line px-5 py-3.5 text-left text-ink-3">
                Drawdown
              </th>
              <th scope="col" className="eyebrow border-b border-line px-5 py-3.5 text-left text-ink-3">
                Capital left
              </th>
              <th scope="col" className="eyebrow border-b border-line px-5 py-3.5 text-left text-ink-3">
                Gain to recover
              </th>
            </tr>
          </thead>
          <tbody>
            {LADDER.map((level) => {
              const g = requiredGain(level);
              const active = Math.round(d) === level;
              return (
                <tr
                  key={level}
                  className={`border-b border-[var(--color-line-soft)] last:border-0 ${
                    active ? "bg-brand-soft" : ""
                  }`}
                >
                  <th
                    scope="row"
                    className={`tabular px-5 py-3 text-left font-medium ${
                      active ? "text-brand-strong" : "text-ink"
                    }`}
                  >
                    {level}%
                  </th>
                  <td className={`tabular px-5 py-3 ${active ? "text-brand-strong" : "text-ink-2"}`}>
                    {100 - level}%
                  </td>
                  <td
                    className={`tabular px-5 py-3 ${
                      active ? "font-semibold text-brand-strong" : "text-ink-2"
                    }`}
                  >
                    {g === null ? "-" : `${fmt(g, 0)}%`}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
