import { site, productPromises } from "@/content/site";

/**
 * The strip directly under the hero. Two jobs: the three commitments that
 * define what the product is, and a quick read on what it does.
 *
 * The capability blocks are deliberately descriptive rather than numeric.
 * They previously held placeholder counts ([X,XXX] investors, [XXX] ASX
 * stocks), which could not go live without the client supplying verified
 * figures, and inventing them would be both a credibility risk and a
 * regulatory one on an Australian financial site.
 */
export function TrustBar() {
  return (
    <div className="border-y border-line bg-surface">
      {/* Weighted 1fr / 1.3fr rather than even columns. The promises are short
          lines and sit comfortably in the narrower column; the capability grid
          needs the width. "Multi-Market" measures 113.7px, and four cells in
          an even split of a 1080px container are 108px, which wraps that one
          label onto two lines while the other three stay on one and pushes
          its caption out of line. At 1.3fr the cells are ~124px. */}
      <div className="container-page grid gap-8 py-8 lg:grid-cols-[1fr_1.3fr] lg:items-center lg:gap-10">
        <ul className="flex flex-col gap-3">
          {productPromises.map((promise) => (
            <li key={promise} className="flex items-start gap-3">
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[0.95rem] font-medium text-ink">{promise}</span>
            </li>
          ))}
        </ul>

        {/* Term and description pairs, so the markup matches the meaning:
            "AI-Powered" is the term, "Market Intelligence" describes it.

            The column counts change twice on purpose. Between lg and xl this
            grid sits in the narrow right-hand column of a two-column layout,
            where four columns left each cell about 84px and wrapped the labels
            ("AI-Powered" over two lines). Two columns there, four again once
            the strip is wide enough to carry them at xl. */}
        <dl className="grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-4 lg:grid-cols-2 lg:gap-x-6 xl:grid-cols-4 xl:gap-x-4">
          {site.capabilities.map((item) => (
            <div key={item.lead} className="flex min-w-0 flex-col gap-1.5">
              <dt className="font-display text-[1.05rem] font-semibold leading-tight text-ink">
                {item.lead}
              </dt>
              <dd className="text-[0.78rem] leading-snug text-ink-3">{item.sub}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
