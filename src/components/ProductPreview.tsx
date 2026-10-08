/**
 * Hero visual: a compact view of the research interface, showing a detected
 * pattern, a trend reading and the risk factor surfaced alongside it.
 *
 * Deliberately not a profit chart and not an execution screen. Lavandbit does
 * not place trades, so a mock order ticket would misrepresent the product on
 * its own homepage. It shows the analysis and nothing about outcomes.
 *
 * The "interface illustration" caption that used to sit beneath it has been
 * removed at the client's request. Worth knowing what that gives up: the panel
 * now reads as a real screenshot rather than a mock, so the values in it
 * ($12.40 to $13.10, "6 weeks") should stay obviously generic. The compliance
 * line it also carried is still present elsewhere on every page, in the footer
 * risk warning and on the risk disclaimer page.
 *
 * Kept small on purpose. An earlier version carried a taller chrome bar, a
 * two-row risk block and a footer strip, which made it tall enough to dominate
 * the section it sits in. The detail was cut rather than scaled down, because
 * a smaller version of a busy panel is still busy.
 */
export function ProductPreview() {
  return (
    <figure className="m-0">
      <div className="overflow-hidden rounded-[14px] border border-ink-panel-line bg-ink-panel shadow-xl shadow-black/10">
        {/* window chrome */}
        <div className="flex items-center gap-2.5 border-b border-ink-panel-line px-3.5 py-2">
          <span className="flex gap-1" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-ink-panel-line" />
            <span className="h-2 w-2 rounded-full bg-ink-panel-line" />
            <span className="h-2 w-2 rounded-full bg-ink-panel-line" />
          </span>
          <span className="font-mono text-[0.66rem] tracking-wider text-inverse-3">
            lavandbit.com/dashboard
          </span>
        </div>

        <div className="flex flex-col gap-3 p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-bright" aria-hidden="true" />
              <span className="text-[0.74rem] font-medium text-inverse">Analysis updated</span>
            </div>
            <span className="rounded-full border border-ink-panel-line px-2 py-0.5 font-mono text-[0.6rem] tracking-wider text-inverse-3">
              ASX
            </span>
          </div>

          {/* pattern */}
          <div className="rounded-[8px] border border-ink-panel-line bg-ink-panel-2 px-3 py-2.5">
            <p className="eyebrow mb-1 text-inverse-3">Pattern detected</p>
            <p className="text-[0.78rem] leading-snug text-inverse">
              Consolidation after a sustained move
            </p>
            <p className="mt-1.5 font-mono text-[0.68rem] text-inverse-3">
              Range <span className="tabular text-brand-bright">$12.40 - $13.10</span>
            </p>
          </div>

          {/* trend */}
          <div className="flex items-baseline justify-between gap-4 border-t border-ink-panel-line pt-2.5">
            <span className="eyebrow text-inverse-3">Trend</span>
            <span className="font-mono text-[0.68rem] text-inverse">Higher lows, 6 weeks</span>
          </div>

          {/* risk */}
          <div className="flex items-baseline justify-between gap-4 border-t border-ink-panel-line pt-2.5">
            <span className="eyebrow text-inverse-3">Risk</span>
            <span className="max-w-[15rem] text-right text-[0.68rem] leading-snug text-inverse-2">
              Volatility above the 6-month average
            </span>
          </div>
        </div>
      </div>
    </figure>
  );
}
