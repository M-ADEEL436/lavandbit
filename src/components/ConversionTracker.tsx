"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Fires the GA4 lead conversion on the thank-you page.
 *
 * Point every form at /thank-you rather than showing an inline success
 * message, a distinct URL is the only reliable way to track a conversion,
 * and it is what Google Ads needs to optimise spend.
 */
export function ConversionTracker({ source }: { source?: string }) {
  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "generate_lead", {
        event_category: "lead",
        event_label: source ?? "website",
        value: 1,
      });
    }
  }, [source]);

  return null;
}
