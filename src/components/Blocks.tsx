import Link from "next/link";
import { RichText } from "@/components/RichText";
import type { Block } from "@/content/types";

const noteTones = {
  tip: "border-brand bg-brand-soft",
  warn: "border-signal bg-signal-soft",
  stop: "border-danger bg-danger-soft",
} as const;

const noteLabels = {
  tip: "text-brand",
  warn: "text-signal",
  stop: "text-danger",
} as const;

export function Blocks({ blocks }: { blocks: readonly Block[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, i) => {
        switch (block.t) {
          case "h2": {
            const id = slugify(block.text);
            return (
              <h2
                key={i}
                id={id}
                className="mt-6 scroll-mt-24 text-[1.5rem] leading-tight first:mt-0"
              >
                {block.text}
              </h2>
            );
          }

          case "h3": {
            const id = slugify(block.text);
            return (
              <h3 key={i} id={id} className="mt-4 scroll-mt-24 text-[1.15rem] leading-snug">
                {block.text}
              </h3>
            );
          }

          case "p":
            return (
              <p key={i} className="text-[1.02rem] leading-relaxed text-ink-2">
                <RichText text={block.text} />
              </p>
            );

          case "ul":
            return (
              <ul key={i} className="flex flex-col gap-2.5">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-[1rem] leading-relaxed text-ink-2">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                    />
                    <span>
                      <RichText text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            );

          case "ol":
            return (
              <ol key={i} className="flex flex-col gap-3">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3.5 text-[1rem] leading-relaxed text-ink-2">
                    <span className="tabular mt-0.5 shrink-0 font-mono text-[0.8rem] text-brand">
                      {String(j + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <RichText text={item} />
                    </span>
                  </li>
                ))}
              </ol>
            );

          case "note": {
            const tone = block.tone ?? "tip";
            return (
              <aside
                key={i}
                className={`rounded-[var(--radius-card)] border-l-2 px-5 py-4 ${noteTones[tone]}`}
              >
                {block.title && (
                  <p className={`eyebrow mb-2 ${noteLabels[tone]}`}>{block.title}</p>
                )}
                <p className="text-[0.95rem] leading-relaxed text-ink-2">
                  <RichText text={block.text} />
                </p>
              </aside>
            );
          }

          case "table":
            return (
              <div
                key={i}
                className="overflow-x-auto rounded-[var(--radius-card)] border border-line bg-surface"
              >
                <table className="w-full min-w-[34rem] border-collapse text-[0.9rem]">
                  <thead>
                    <tr>
                      {block.head.map((h) => (
                        <th
                          key={h}
                          scope="col"
                          className="eyebrow border-b border-line px-4 py-3 text-left text-ink-3"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr
                        key={r}
                        className="border-b border-[var(--color-line-soft)] last:border-0"
                      >
                        {row.map((cell, c) => (
                          <td
                            key={c}
                            className={`px-4 py-3 align-top ${
                              c === 0 ? "font-medium text-ink" : "text-ink-2"
                            }`}
                          >
                            <RichText text={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case "quote":
            return (
              <figure key={i} className="m-0 border-l-2 border-brand pl-5">
                <blockquote className="text-[1.05rem] italic leading-relaxed text-ink-2">
                  <RichText text={block.text} />
                </blockquote>
                {block.cite && (
                  <figcaption className="mt-2 font-mono text-[0.72rem] tracking-wide text-ink-3">
                    {block.cite}
                  </figcaption>
                )}
              </figure>
            );

          case "cta":
            return (
              <aside
                key={i}
                className="rounded-[var(--radius-card)] border border-ink-panel-line bg-ink-panel px-6 py-6"
              >
                <p className="font-display text-[1.15rem] font-bold text-inverse">
                  {block.title}
                </p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-inverse-2">{block.text}</p>
                <Link
                  href={block.href}
                  className="mt-5 inline-flex items-center justify-center rounded-[var(--radius-control)] bg-brand px-5 py-3 text-[0.9rem] font-semibold text-white transition-colors hover:bg-brand-strong"
                >
                  {block.button}
                </Link>
              </aside>
            );
        }
      })}
    </div>
  );
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/** Pulls an article's section headings for a table of contents. */
export function headings(blocks: readonly Block[]) {
  return blocks
    .filter((b): b is Extract<Block, { t: "h2" }> => b.t === "h2")
    .map((b) => ({ id: slugify(b.text), text: b.text }));
}
