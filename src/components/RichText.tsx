import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Renders the inline formatting used across content files:
 *   **bold**   [link text](/href)   `code`
 * Internal hrefs become Next.js links; anything else opens in a new tab.
 */
const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|`[^`]+`)/g;

export function RichText({ text }: { text: string }): ReactNode {
  const parts = text.split(TOKEN).filter((p) => p !== "");

  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="rounded bg-surface-2 px-1.5 py-0.5 font-mono text-[0.85em] text-ink"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (link) {
      const [, label, href] = link;
      if (href.startsWith("/")) {
        return (
          <Link key={i} href={href} className="font-medium text-brand underline underline-offset-2 hover:text-brand-strong">
            {label}
          </Link>
        );
      }
      return (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-brand underline underline-offset-2 hover:text-brand-strong"
        >
          {label}
        </a>
      );
    }

    return part;
  });
}
