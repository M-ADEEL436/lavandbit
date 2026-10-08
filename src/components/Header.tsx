"use client";

import { useState, type MouseEvent as ReactMouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { mainNav } from "@/lib/nav";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  /**
   * Clicking "Home" while already on the homepage would otherwise do nothing:
   * the router sees the same path and skips the navigation. Scrolling to the
   * top takes the visitor back to the hero, which is what the link implies.
   */
  function handleNavClick(event: ReactMouseEvent<HTMLAnchorElement>, href: string) {
    setOpen(false);
    if (href !== "/" || pathname !== "/") return;
    event.preventDefault();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                aria-current={active ? "page" : undefined}
                className={`rounded-[var(--radius-control)] px-3 py-2 text-[0.9rem] font-medium transition-colors ${
                  active ? "text-ink" : "text-ink-2 hover:bg-surface-2 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/get-started"
            className="hidden rounded-[var(--radius-control)] bg-brand px-5 py-2.5 text-[0.9rem] font-semibold text-white transition-colors hover:bg-brand-strong sm:inline-flex"
          >
            Get Started
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-control)] border border-line bg-surface text-ink lg:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
              {open ? (
                <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-canvas lg:hidden"
      >
        <nav aria-label="Mobile" className="container-page flex flex-col py-3">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(event) => handleNavClick(event, item.href)}
              className="rounded-[var(--radius-control)] px-3 py-3 text-[0.95rem] font-medium text-ink-2 hover:bg-surface-2 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/get-started"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-[var(--radius-control)] bg-brand px-4 py-3 text-center text-[0.95rem] font-semibold text-white"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
