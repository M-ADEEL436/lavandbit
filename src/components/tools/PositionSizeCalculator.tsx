"use client";

import { useState } from "react";
import { CalcShell, NumberField, ResultPanel, fmt, num } from "@/components/tools/parts";

export function PositionSizeCalculator() {
  const [balance, setBalance] = useState("10000");
  const [riskPct, setRiskPct] = useState("1");
  const [entry, setEntry] = useState("100");
  const [stop, setStop] = useState("95");

  const b = num(balance);
  const r = num(riskPct);
  const e = num(entry);
  const s = num(stop);

  const riskAmount = (b * r) / 100;
  const riskPerUnit = Math.abs(e - s);
  const units = riskPerUnit > 0 && e > 0 ? riskAmount / riskPerUnit : 0;
  const positionValue = units * e;
  const leverage = b > 0 ? positionValue / b : 0;

  const invalid = e <= 0 || s <= 0 || riskPerUnit === 0;

  return (
    <CalcShell
      inputs={
        <>
          <NumberField
            id="ps-balance"
            label="Account balance"
            value={balance}
            onChange={setBalance}
            prefix="$"
            hint="Total equity you are trading with."
          />
          <NumberField
            id="ps-risk"
            label="Risk per trade"
            value={riskPct}
            onChange={setRiskPct}
            suffix="%"
            hint="Most professionals risk between 0.5% and 2% per trade. Above 5% is where a losing streak becomes terminal."
          />
          <NumberField id="ps-entry" label="Entry price" value={entry} onChange={setEntry} prefix="$" />
          <NumberField
            id="ps-stop"
            label="Stop loss price"
            value={stop}
            onChange={setStop}
            prefix="$"
            hint="Where you exit if the trade goes against you."
          />
        </>
      }
      results={
        <ResultPanel
          headline="Position size"
          value={invalid ? "-" : fmt(units, units < 10 ? 4 : 2)}
          unit="units / shares"
          rows={[
            { label: "Amount at risk", value: invalid ? "-" : `$${fmt(riskAmount)}`, emphasis: true },
            { label: "Risk per unit", value: invalid ? "-" : `$${fmt(riskPerUnit, 4)}` },
            { label: "Position value", value: invalid ? "-" : `$${fmt(positionValue)}` },
            {
              label: "Leverage required",
              value: invalid || leverage === 0 ? "-" : `${fmt(leverage, 2)}×`,
            },
            {
              label: "Account risked",
              value: invalid ? "-" : `${fmt(r, 2)}%`,
            },
          ]}
          note={
            invalid ? (
              <span className="text-danger">
                Entry and stop price must be different, and both must be greater than zero.
              </span>
            ) : (
              <>
                Position sizing shapes the outcome more than entry timing does, and
                it is the decision most easily distorted by how confident you feel.
                Work the number out here, then research whether the setup is worth it.
              </>
            )
          }
        />
      }
    />
  );
}
