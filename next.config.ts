import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * cacheComponents (Partial Prerendering) is deliberately off.
   *
   * It is built for sites that mix static and dynamic content. This site is
   * entirely static content, so PPR buys nothing — but it does impose route
   * segment restrictions that break two things we need:
   *   - `dynamicParams = false`, which is what turns an unknown slug into a
   *     real 404 instead of a soft 404 (a 200 carrying a not-found page)
   *   - `export const runtime`, used by the lead API route
   *
   * With it off, every page is fully prerendered to static HTML and
   * unknown slugs return a correct 404 status. Re-enable only if the site
   * later gains genuinely dynamic, per-request content.
   */
  cacheComponents: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
