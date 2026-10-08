"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * Mobile-only sticky CTA bar. Appears once the visitor has scrolled past the
 * hero, so it never competes with the primary hero button.
 */
export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-canvas/95 p-3 backdrop-blur-md lg:hidden">
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-[0.78rem] font-semibold text-ink">
            Free 20-minute demo
          </p>
          <p className="truncate text-[0.72rem] text-ink-3">No card required</p>
        </div>
        <Link
          href="/get-started"
          className="shrink-0 rounded-[var(--radius-control)] bg-brand px-4 py-2.5 text-[0.85rem] font-semibold text-white"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
