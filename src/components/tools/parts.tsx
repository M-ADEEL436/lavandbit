"use client";

import type { ReactNode } from "react";

/** Shared building blocks for the calculators. */

export function NumberField({
  id,
  label,
  value,
  onChange,
  suffix,
  prefix,
  step = "any",
  hint,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  suffix?: string;
  prefix?: string;
  step?: string;
  hint?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[0.82rem] font-semibold text-ink">
        {label}
      </label>
      <div className="flex items-stretch overflow-hidden rounded-[var(--radius-control)] border border-line bg-surface focus-within:border-brand">
        {prefix && (
          <span className="grid place-items-center border-r border-line bg-surface-2 px-3 font-mono text-[0.8rem] text-ink-3">
            {prefix}
          </span>
        )}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          step={step}
          min="0"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="tabular w-full bg-transparent px-3.5 py-3 text-[0.95rem] text-ink outline-none"
        />
        {suffix && (
          <span className="grid place-items-center border-l border-line bg-surface-2 px-3 font-mono text-[0.8rem] text-ink-3">
            {suffix}
          </span>
        )}
      </div>
      {hint && <p className="text-[0.78rem] text-ink-3">{hint}</p>}
    </div>
  );
}

export function ResultPanel({
  headline,
  value,
  unit,
  rows,
  note,
}: {
  headline: string;
  value: string;
  unit?: string;
  rows: { label: string; value: string; emphasis?: boolean }[];
  note?: ReactNode;
}) {
  return (
    <div className="flex h-full flex-col gap-5 rounded-[var(--radius-card)] border border-ink-panel-line bg-ink-panel p-5">
      <p className="eyebrow text-inverse-3">{headline}</p>

      <p className="tabular flex items-baseline gap-2">
        <span className="font-display text-[2.4rem] font-bold leading-none text-inverse">
          {value}
        </span>
        {unit && <span className="font-mono text-[0.8rem] text-inverse-3">{unit}</span>}
      </p>

      <dl className="flex flex-col divide-y divide-[var(--color-ink-panel-line)] border-t border-ink-panel-line">
        {rows.map((row) => (
          <div key={row.label} className="flex items-baseline justify-between gap-4 py-3">
            <dt className="text-[0.85rem] text-inverse-2">{row.label}</dt>
            <dd
              className={`tabular font-mono text-[0.85rem] ${
                row.emphasis ? "font-semibold text-brand-bright" : "text-inverse"
              }`}
            >
              {row.value}
            </dd>
          </div>
        ))}
      </dl>

      {note && <div className="mt-auto text-[0.8rem] leading-relaxed text-inverse-3">{note}</div>}
    </div>
  );
}

export function CalcShell({
  inputs,
  results,
}: {
  inputs: ReactNode;
  results: ReactNode;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
      <div className="flex flex-col gap-5 rounded-[var(--radius-card)] border border-line bg-surface p-5">
        {inputs}
      </div>
      {results}
    </div>
  );
}

/** Formats a number for display, falling back to an em dash when unusable. */
export function fmt(n: number, decimals = 2) {
  if (!Number.isFinite(n)) return "-";
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function num(value: string) {
  const n = Number.parseFloat(value);
  return Number.isFinite(n) ? n : 0;
}
