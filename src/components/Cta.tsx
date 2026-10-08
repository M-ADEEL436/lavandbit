import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost-inverse";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-control)] font-semibold transition-colors duration-150 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-strong",
  secondary: "border border-line bg-surface text-ink hover:border-ink-3 hover:bg-surface-2",
  "ghost-inverse": "border border-ink-panel-line text-inverse hover:bg-ink-panel-2",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-[0.9rem]",
  lg: "px-6 py-3.5 text-[0.95rem]",
};

export function Cta({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </Link>
  );
}
