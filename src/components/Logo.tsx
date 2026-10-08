import Link from "next/link";
import { site } from "@/content/site";

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="28" height="28" rx="8" fill="currentColor" />
      <rect x="7" y="15" width="3.2" height="6" rx="1.6" fill="var(--color-brand-bright)" />
      <rect x="12.4" y="11" width="3.2" height="10" rx="1.6" fill="var(--color-brand-bright)" opacity="0.75" />
      <rect x="17.8" y="7" width="3.2" height="14" rx="1.6" fill="var(--color-brand-bright)" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 text-ink ${className}`}
      aria-label={`${site.name} home`}
    >
      <LogoMark className="h-7 w-7 shrink-0" />
      <span className="font-display text-[1.15rem] font-bold tracking-[-0.03em]">
        {site.name}
      </span>
    </Link>
  );
}
