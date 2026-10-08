import Link from "next/link";

/**
 * Internal linking blocks. This is the mechanism that moves rankings on a
 * content site: every article links up to a hub and across to related pages,
 * so authority flows to the money pages instead of pooling in the blog.
 */
export function RelatedLinks({
  heading,
  links,
}: {
  heading: string;
  links: readonly { href: string; label: string; note?: string }[];
}) {
  if (links.length === 0) return null;

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-surface-2 p-5">
      <p className="eyebrow mb-4 text-ink-3">{heading}</p>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href} className="flex flex-col gap-0.5">
            <Link href={link.href} className="text-[0.92rem] font-medium text-brand hover:underline">
              {link.label}
            </Link>
            {link.note && <span className="text-[0.82rem] text-ink-3">{link.note}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
