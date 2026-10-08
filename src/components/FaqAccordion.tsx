"use client";

import { useState } from "react";

export function FaqAccordion({
  items,
  defaultOpen = 0,
}: {
  items: readonly { q: string; a: string }[];
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="divide-y divide-[var(--color-line)] border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-button-${i}`}
                className="flex w-full items-start justify-between gap-6 py-4 text-left"
              >
                <span className="font-display text-[1.02rem] font-semibold leading-snug text-ink">
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-line text-ink-3 transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M8 3v10M3 8h10" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-button-${i}`}
              hidden={!isOpen}
              className="pb-6 pr-10"
            >
              <p className="max-w-3xl text-[0.95rem] leading-relaxed text-ink-2">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
