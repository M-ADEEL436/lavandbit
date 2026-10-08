# Lavandbit

Next.js site for Lavandbit, an AI trading platform targeting retail traders.
Built to do one job: turn search traffic into submitted leads.

The copy comes from `lavandbit-lead-gen-playbook.html` (the original Lavandbit brief) (in the parent folder) —
that document explains the strategy. This is the implementation.

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4

`cacheComponents` (Partial Prerendering) is intentionally **off** in
`next.config.ts`. It is built for sites mixing static and dynamic content; this
site is entirely static, so it buys nothing while blocking `dynamicParams =
false` — which is what makes an unknown slug return a real 404 instead of a
soft 404 (a 200 response carrying a not-found page). Search engines treat soft
404s as low quality. The comment in `next.config.ts` has the full reasoning.

## Quick start

```bash
npm install
cp .env.example .env.local     # then fill it in — see "Lead delivery" below
npm run dev                    # http://localhost:3000
```

```bash
npm run build && npm start     # production
npx eslint src                 # lint
```

## Domain and email

`src/content/site.ts` starts with a single `DOMAIN` constant. Every canonical
URL, sitemap entry, JSON-LD block and email address derives from it — change
that one line and the entire site follows.

Role-based addresses (`hello@`, `support@`, `privacy@`, `legal@`, `leads@`) are
defined in the same file and imported wherever they appear, so no address is
hardcoded in a page.

## Editing the copy

All text lives in `src/content/`. Components read from it, so you can rewrite
the site without touching JSX.

| File | Contains |
|------|----------|
| `src/content/site.ts` | Brand name, contact details, stats, brokers, social links, risk disclaimers |
| `src/content/home.ts` | Every string on the homepage |
| `src/content/pages.ts` | Every inner page, including the three legal documents |

**Anything in `[square brackets]` is a placeholder.** They are listed in
[PLACEHOLDERS.md](./PLACEHOLDERS.md) with what to chase and why. In development
the server prints a warning listing any placeholder that reaches a rendered
page, so you can browse the site and see what is still missing.

## Lead delivery

Leads post to `src/app/api/lead/route.ts`. Configure delivery in `.env.local`:

1. **Resend (recommended)** — set `RESEND_API_KEY`, `LEAD_NOTIFY_EMAIL` and
   `LEAD_FROM_EMAIL`. Leads arrive as email with the visitor set as reply-to.
2. **Webhook** — set `LEAD_WEBHOOK_URL` to push JSON into a CRM, Zapier or Make
   scenario. Runs alongside Resend if both are configured.
3. **SMTP** — swap `sendViaResend()` for a nodemailer transport.

With nothing configured the form still works in development (leads are logged
to the console). In production it returns a 503 and tells the visitor to email
instead, rather than silently discarding the lead — a deliberate choice, so a
misconfigured deploy is loud rather than lossy.

Spam is handled by a honeypot field plus a time-on-form check. Both are in the
form component and the route.

## How a lead is tracked

Every form redirects to `/thank-you`, which fires a GA4 `generate_lead` event.
A distinct URL is the only reliable way to track a conversion, and it is what
Google Ads needs to optimise spend. That page is `noindex` and excluded from
`robots.txt`.

## SEO

- **Per-page metadata** via the Next.js Metadata API, with canonical URLs.
- **JSON-LD**: `Organization` and `WebSite` site-wide; `SoftwareApplication`
  and `FAQPage` on the homepage; `FAQPage` on pricing; `HowTo` on how-it-works;
  `BreadcrumbList` on every inner page.
- **`sitemap.xml`** and **`robots.txt`** generated from `src/app/sitemap.ts` and
  `src/app/robots.ts`. `/thank-you` is excluded from both.

Two deliberate omissions worth understanding before you add them:

- **No `AggregateRating` or `Review` markup.** Emitting rating markup without a
  genuine, collected review set is a manual-action risk. Add it once the client
  has real, permissioned reviews.
- **No guaranteed-return or profit claims anywhere.** Trading content is YMYL,
  and financial-promotion rules in most jurisdictions treat that language as
  illegal advertising. The hero shows the risk-limit interface rather than a
  profit chart for the same reason. Section 02 of the playbook has the detail.

## Structure

```
src/
├── app/
│   ├── layout.tsx           fonts, metadata, header/footer, site-wide schema
│   ├── page.tsx             homepage
│   ├── api/lead/route.ts    lead intake
│   ├── free-demo/           the conversion page
│   ├── how-it-works/  features/  pricing/  about/  contact/  security/
│   ├── blog/[slug]/         articles
│   ├── vs/[slug]/           comparison pages
│   ├── for/[slug]/          audience pages
│   ├── glossary/[slug]/     terms
│   ├── authors/[slug]/      named authors
│   ├── risk-disclaimer/  privacy-policy/  terms/
│   ├── thank-you/           conversion endpoint, noindex
│   ├── sitemap.ts  robots.ts  not-found.tsx
│   └── globals.css          design tokens
├── components/
│   ├── Header  Footer  Logo  Cta  Section  PageHero  LegalPage
│   ├── LeadForm             validation, states, honeypot
│   ├── Blocks  RichText     the content-block renderer
│   ├── PostCard  AuthorBox  TableOfContents  RelatedLinks
│   ├── FaqAccordion  ComparisonTable  TrustBar  ProductPreview
│   ├── StickyMobileCta      mobile-only, appears past the hero
│   ├── ConversionTracker    GA4 event on /thank-you
│   └── JsonLd
├── content/                 all copy — see "Content model" above
└── lib/
    ├── schema.ts            JSON-LD builders
    ├── nav.ts               navigation config
    └── build-time.ts        cached build-time values
```

## Design

Cool graphite neutrals with a deep teal brand. Light-first, with one deliberate
dark "instrument" section carrying the product story. Archivo for display,
Public Sans for body, JetBrains Mono for data and labels.

Tokens are defined once in `src/app/globals.css` under `@theme`. Change the
palette there and it propagates everywhere.

## Deploying

Vercel is the path of least resistance: push the repo, import it, add the
environment variables from `.env.local`, deploy. Set `site.url` in
`src/content/site.ts` to the real domain first — it feeds canonical URLs, the
sitemap and every schema block.

Before going live, work through [PLACEHOLDERS.md](./PLACEHOLDERS.md). In
particular: the regulatory status must be confirmed in writing, and the privacy
policy and terms need a lawyer.

## Content model

Long-form pages are arrays of typed blocks (`src/content/types.ts`), not JSX
or markdown. That keeps the build dependency-free, lets the client edit copy
the same way as the rest of the site, and — most usefully — allows `cta` blocks
inside an article body, which is where most of the conversion happens.

Block types: `p`, `h2`, `h3`, `ul`, `ol`, `note`, `table`, `quote`, `cta`.
Inline formatting inside text: `**bold**`, `[link](/href)`, `` `code` ``.

## The content engine

Tier 1 pages compete on intent. These compete on traffic:

| Route | Count | Role |
|-------|-------|------|
| `/tools/*` | 3 calculators | **The best backlink asset on the site.** They rank without needing brand recognition and people link to them unprompted. |
| `/blog/[slug]` | 8 posts | The main organic traffic source. Pillar guide plus cluster posts. |
| `/vs/[slug]` | 4 comparisons | Highest-converting format. Searcher is one decision away. |
| `/for/[slug]` | 5 segments | Beginner, busy professional, part-time, crypto, forex. |
| `/glossary/[slug]` | 16 terms | Long-tail traffic and featured-snippet surface. Cheap to maintain. |
| `/authors/[slug]` | 2 | Named authors. A direct E-E-A-T requirement on financial content. |

### The calculators

`position-size-calculator`, `risk-reward-calculator` and
`drawdown-recovery-calculator` are client components in
`src/components/tools/`, sharing `parts.tsx` for fields, the result panel and
number formatting. They run entirely in the browser — no data leaves the page
and nothing is stored, which is stated on the hub.

Each ends on a CTA tied to what the tool just showed rather than a generic one:
the drawdown calculator offers an *enforced* drawdown limit, the position size
calculator offers a size that gets applied automatically. That specificity is
the whole reason a calculator visitor converts at all.

Verified in a real browser at 390px and 1440px: the maths matches independently
computed values, inputs update results live, and the edge cases degrade
properly (`entry == stop` and a stop/target on the same side of entry both show
a readable explanation instead of `NaN`).

**Internal linking is the mechanism, not a nicety.** Every post links up to a
hub, across to `related` posts, and down to one money page through `funnelsTo`
plus an inline CTA block. The footer carries links to every hub from every
page. That pattern is what makes the blog rank and what stops authority from
pooling in the blog instead of reaching `/free-demo`.

When you add a post: set `related`, set `funnelsTo`, and put one `cta` block
in the body. A post without those is traffic that never becomes a lead.

## Adding a page

- **Blog post** — append to `posts` in `src/content/posts.ts`. Everything else
  (route, sitemap entry, article schema, TOC, author box) is automatic.
- **Comparison** — append to `competitors.ts`. `/vs` hub and sidebar update
  themselves.
- **Use case** — append to `use-cases.ts`.
- **Glossary term** — append to `glossary.ts`.
- **Calculator** — append to `tools.ts`, add a client component under
  `src/components/tools/`, and a page under `src/app/tools/[slug]/` that passes
  it to `ToolLayout`. The hub, sidebar and sitemap pick it up automatically.

## Not built yet

- **Real competitor pages.** The four comparisons compare *approaches* rather
  than named companies. Naming a real competitor requires accurate, current,
  verifiable facts about their product — publishing an inaccurate comparison of
  a named business is a legal and credibility risk. Add `/vs/[their-name]`
  pages once the client can supply those facts. They convert hardest of
  anything on the site.
- **Broker integration pages** (`/integrations/[broker]`) — one per supported
  broker. Low competition, very high intent. Blocked on the client's real
  broker list.
- **Remaining Tier 3**: original research (a data report is the strongest link
  magnet after the calculators, but needs real data the client has not supplied),
  case studies, partner program.
- **GA4 script** in the layout — the `/thank-you` conversion event is wired, it
  just needs `NEXT_PUBLIC_GA_ID` and the script tag.
- **More posts.** Eight is a start, not an engine. Sticking to the cluster
  pattern in the playbook (section 06) and publishing steadily matters more
  than publishing a lot at once.
