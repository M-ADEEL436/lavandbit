/**
 * Article table of contents. Rendered as a plain list of in-page anchors -
 * hash links are resolved by the browser without any client script, which
 * keeps the page static and avoids a hydration cost on long articles.
 */
export function TableOfContents({
  items,
}: {
  items: readonly { id: string; text: string }[];
}) {
  if (items.length < 3) return null;

  return (
    <nav
      aria-label="On this page"
      className="rounded-[var(--radius-card)] border border-line bg-surface-2 p-5"
    >
      <p className="eyebrow mb-3 text-ink-3">On this page</p>
      <ol className="flex flex-col gap-2">
        {items.map((item, i) => (
          <li key={item.id} className="flex gap-3">
            <span className="tabular mt-0.5 font-mono text-[0.7rem] text-brand">
              {String(i + 1).padStart(2, "0")}
            </span>
            <a
              href={`#${item.id}`}
              className="text-[0.88rem] leading-snug text-ink-2 hover:text-brand"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
