import Link from "next/link";
import type { Author } from "@/content/types";

/**
 * Author attribution. On financial (YMYL) content this is a ranking factor,
 * not decoration, Google's quality guidelines expect a named, credentialled
 * author on money-related pages.
 */
export function AuthorBox({
  author,
  published,
  updated,
}: {
  author: Author;
  published: string;
  updated: string;
}) {
  const fmt = (d: string) =>
    new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-y border-line py-4">
      <Link
        href={`/authors/${author.slug}`}
        className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-soft font-display text-[0.95rem] font-bold text-brand-strong"
        aria-hidden="true"
        tabIndex={-1}
      >
        {author.name.replace(/[[\]]/g, "").charAt(0) || "?"}
      </Link>
      <div className="flex flex-col gap-0.5">
        <Link href={`/authors/${author.slug}`} className="text-[0.9rem] font-semibold text-ink hover:text-brand">
          {author.name}
        </Link>
        <span className="font-mono text-[0.7rem] tracking-wide text-ink-3">{author.role}</span>
      </div>
      <div className="ml-auto flex flex-col gap-0.5 text-right">
        <span className="font-mono text-[0.7rem] text-ink-3">Published {fmt(published)}</span>
        {updated !== published && (
          <span className="font-mono text-[0.7rem] text-ink-3">Updated {fmt(updated)}</span>
        )}
      </div>
    </div>
  );
}
