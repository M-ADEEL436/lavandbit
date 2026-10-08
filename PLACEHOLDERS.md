# Placeholders — fill these before launch

Every value below is wrapped in `[square brackets]` in the code. Nothing here
was invented: each one is a fact about the business that only the client can
supply, and several are legal or regulatory claims.

## How placeholders behave now

**None of them reach a rendered page.** Anything still in brackets is either
dropped or written around, so a visitor never sees `[Full name]` or `[Plan
name]`, and nothing unfinished is indexable. That covers:

| Where | What happens while unfilled |
|-------|-----------------------------|
| Footer legal entity and ABN | Both spots render empty (`Footer.tsx`) |
| `/pricing` plans | Placeholder plans and plan features are filtered out; the grid collapses to one column |
| `/about` team and company facts | Both sections disappear rather than print brackets |
| `/contact` channels | Any channel with a placeholder value is dropped |
| `/authors` index | `noindex` and out of the sitemap until a real name exists |
| `/blog/*` posts | `noindex` and out of the sitemap while the author is a placeholder |
| Body copy | Written around: "Australian and international markets" instead of "[markets]" |

Supplying the real values in `src/content/` turns each of these back on with no
code change. **Verified with a script that fetches all 42 sitemap pages and
greps the full document, footer included: zero bracket text reaches a page.**

**Quick check while running the dev server:** placeholders that reach a rendered
page are logged to the terminal as a warning, so you can see what is still
missing as you browse.

The client checklist in section 09 of `lavandbit-lead-gen-playbook.html` covers
the same ground in the order you should chase them.

---

## Blocking — the site should not go live without these

| # | What | Where | Why it blocks |
|---|------|-------|---------------|
| 1 | **Regulatory status** and legal entity name | `src/content/site.ts` → `regulatory`, `legalName`; `src/content/pages.ts` → `riskDisclaimerPage`, `aboutPage.facts` | Publishing a trading platform without stating its regulatory position is a legal exposure and a trust failure. Get it in writing. |
| 2 | **Legal review** of privacy policy and terms | `src/content/pages.ts` → `privacyPage`, `termsPage` | Both are working drafts, not legal advice. A lawyer must review them against the client's jurisdiction before publication. |
| 3 | **Real prices** | `src/content/pages.ts` → `pricingPage.plans`, `pricingPage.faq` | Hidden pricing forfeits the `ai trading platform pricing` query and suppresses conversion. |
| 4 | **Real testimonials**, with written permission | `src/content/home.ts` → `proof.testimonials` | Do not write these on the client's behalf. If they have none yet, delete the section — launching without proof costs less than launching with invented proof. |
| 5 | **Trust bar figures** | `src/content/site.ts` → `stats` | Trader count, broker count, market count, average rating. Use real, current numbers or delete the item. |
| 6 | **Team bios and credentials** | `src/content/pages.ts` → `aboutPage.team`; `src/content/authors.ts` | Named, credentialled people on a financial site is a direct E-E-A-T ranking factor, not decoration. |
| 7 | **Author identities** | `src/content/authors.ts` | Every blog post is credited to a placeholder person, and every article visibly shows `[Full name]`. Author pages and all 8 posts stay out of the sitemap until the names stop containing brackets — Google penalises anonymous financial content. |

## Needed before the pages read as complete

| What | Where |
|------|-------|
| **Payment method marks** — Visa, Mastercard, Amex, PayPal, Wise and bank transfer are shown under the hero form. Confirm each is genuinely accepted, then replace the hand-drawn approximations with the official assets from each brand centre. Stripe is deliberately **not** shown: it is a processor, not a method a customer chooses. If the client wants that association visible, add a "Powered by Stripe" line in the footer | `src/components/PaymentMethods.tsx` |
| Supported brokers and markets | `src/content/site.ts` → `brokers`; `home.ts` → `faq.items[4]` |
| Broker connection method (API, read-only keys, other) | `home.ts` → `howItWorks.steps[3]`; `pages.ts` → `featuresPage.groups[5]` |
| Encryption standard and 2FA method | `src/content/site.ts` → `security` |
| Paper-trading and free-trial terms | `pages.ts` → `pricingPage.faq`, `demoPage` |
| Number of strategy templates | `home.ts` → `howItWorks.steps[0]`; `pages.ts` → `featuresPage` |
| Years of historical data | `home.ts` → `howItWorks.steps[1]`; `pages.ts` → `featuresPage`, `howItWorksPage` |
| Order latency figure | `pages.ts` → `featuresPage.groups[0]` |
| API / scripting mode — does it exist? | `home.ts` → `faq.items[1]`; `pages.ts` → `featuresPage` |
| Refund and cancellation policy | `pages.ts` → `pricingPage.faq`, `termsPage` |
| Phone, WhatsApp, office address, working hours, timezone | `src/content/site.ts` → `contact` — these cannot be guessed from the domain, so they stay as placeholders |
| Social profile URLs | `src/content/site.ts` → `social` |
| `[Last updated: date]` on the three legal pages | `pages.ts` → `riskDisclaimerPage`, `privacyPage`, `termsPage` |
| Broker and exchange names in FAQ answers | `posts.ts` → `diy-python-bots` FAQ, `use-cases.ts` → crypto and forex FAQ |
| Encryption standard and 2FA in the security page | `security.ts` → `principles` |
| Weekly review time commitment | `use-cases.ts` → `busy-professionals` |

Run `npm run dev` and open the site — the terminal prints a warning listing any
placeholder that reaches a rendered page, so you can browse and see what is
still outstanding.

## Already done — domain and email

The domain lives in **one place**: the `DOMAIN` constant at the top of
`src/content/site.ts`. Every canonical URL, sitemap entry, schema block and
email address is derived from it. Change that one line and the whole site
follows.

These addresses are already set and published across the site:

| Address | Used for |
|---------|----------|
| `hello@lavandbit.com` | Sales, pricing, demo bookings — footer and contact page |
| `support@lavandbit.com` | Existing accounts and technical issues |
| `privacy@lavandbit.com` | Data access, correction and deletion requests (GDPR) |
| `legal@lavandbit.com` | Legal notices |
| `leads@lavandbit.com` | Where form submissions are delivered |

**What still needs doing when the domain is connected:**

1. **Create the mailboxes** at your mail host. The addresses are correct to
   publish today — they just need somewhere to land.
2. **Verify the domain in Resend**, then switch the sender. Open `.env.local`
   and follow the instructions in it — `LEAD_FROM_EMAIL` is deliberately set to
   `onboarding@resend.dev` because Resend rejects mail sent from an unverified
   domain. It is a two-line change once verification completes.
3. **Set `RESEND_API_KEY`** to start real delivery. Until then the form works in
   development (leads print to the terminal) and refuses submissions in
   production on purpose.

## Assets and accounts

- **Logo** — a wordmark-only SVG ships in `src/components/Logo.tsx`. Replace it with the client's real mark, and add `public/logo.png` (the Organization schema references it).
- **OG image** — add `public/og.png` at 1200×630 and reference it in `src/app/layout.tsx` under `openGraph.images`. Without it, shared links render bare.
- **Product screenshots** — the hero shows an interface illustration (`src/components/ProductPreview.tsx`). Swap in real screenshots once available. Never put a profit chart there.
- **GA4** — set `NEXT_PUBLIC_GA_ID`, then add the script to `src/app/layout.tsx`. The `/thank-you` page already fires a `generate_lead` event that will pick it up.
- **Search Console** — verify the domain and submit `https://lavandbit.com/sitemap.xml`.
- **Lead delivery** — copy `.env.example` to `.env.local` and configure at least one channel. Without one, production refuses submissions on purpose.
