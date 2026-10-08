export function ComparisonTable({
  columns,
  rows,
}: {
  columns: readonly string[];
  rows: readonly { label: string; values: readonly string[] }[];
}) {
  // The final column is always Lavandbit, highlight it.
  const highlight = columns.length;

  /* Column widths are set rather than left to the browser. The values in this
     table are one or two words ("No", "Sometimes", "Minutes"), so an even
     split gave each of them a third of a metre of empty space while the label
     column, which carries full sentences, was cramped. */
  const LABEL_PCT = 36;
  const labelWidth = `w-[${LABEL_PCT}%]`;
  const valueWidth = `${Math.floor((100 - LABEL_PCT) / columns.length)}%`;

  return (
    <div className="overflow-x-auto rounded-[var(--radius-card)] border border-line bg-surface">
      <table className="w-full min-w-[38rem] border-collapse text-[0.88rem]">
        <thead>
          <tr>
            <th
              scope="col"
              className={`eyebrow ${labelWidth} border-b border-line px-5 py-3.5 text-left text-ink-3`}
            >
              What matters
            </th>
            {columns.map((col, i) => (
              <th
                key={col}
                scope="col"
                style={{ width: valueWidth }}
                className={`border-b border-line px-5 py-3.5 text-left ${
                  i + 1 === highlight
                    ? "bg-brand-soft font-display text-[0.95rem] font-bold text-brand-strong"
                    : "eyebrow text-ink-3"
                }`}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-[var(--color-line-soft)] last:border-0">
              <th scope="row" className="px-5 py-3 text-left font-medium text-ink">
                {row.label}
              </th>
              {row.values.map((value, i) => {
                const isUs = i + 1 === highlight;
                return (
                  <td
                    key={`${row.label}-${i}`}
                    className={`px-5 py-3 ${
                      isUs
                        ? "bg-brand-soft/60 font-semibold text-brand-strong"
                        : "text-ink-2"
                    }`}
                  >
                    {value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
