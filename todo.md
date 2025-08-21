# Project: mitm.life - Man-in-the-Middle Intelligence (OSINT/Red Team blog)

## Goal
Build a fast, privacy-first static blog with two monetization surfaces: productized OSINT services (/services) and an affiliate tool hub (/tools). Deploy to Cloudflare Pages.

## Phases

### Phase 1: Project Setup and Core Technologies
- [x] Initialize Next.js project with App Router and static export.
- [x] Configure MDX and Contentlayer for content management.
- [x] Set up TailwindCSS and shadcn/ui for styling.
- [x] Integrate Pagefind for static search.
- [x] Implement Shiki for code highlighting with copy and line focus.
- [x] Configure @vercel/og for social images.
- [x] Set up analytics (Plausible or Umami) based on ENV.
- [x] Integrate Giscus for comments (off by default).
- [x] Generate RSS, Atom, JSON feeds, sitemap.xml, and robots.txt.

### Phase 2: Content Model Implementation
- [x] Define Contentlayer schema for posts (`/content/posts/*.mdx`).
  - [x] Implement frontmatter fields: title, slug, date, updated, author, summary, tags[], category, cover, canonicalUrl, readingTime, draft, sources[], disclaimers[], series, ogImageOverride.
- [x] Define Contentlayer schema for pages (`/content/pages/*.mdx`) for About, Disclosures, Contact.
- [x] Implement taxonomy pages: `/tags/[tag]` and `/categories/[category]`.
- [x] Set up authors data at `/content/authors/*.yml`.
- [x] Implement monetization data:
  - [x] `/data/services.yml` with fields: id, name, summary, deliverables[], sla, price, priceId, buttonLabel.
  - [x] `/data/tools.yml` with fields: slug, name, summary, tags[], vendor, affiliateUrl.

### Phase 3: User Experience (UX) Features
- [x] Implement dark theme default with toggle.
- [x] Design and implement post layout: title, meta, TOC, reading time, footnotes, tag links, prev/next.
- [x] Create MDX shortcodes:
  - [x] `<Callout type="note|warn|legal">`
  - [x] `<YouTube id="...">`
  - [x] `<Mermaid code="...">`
  - [x] `<Figure src alt caption>`
  - [x] `<Source name url>`
- [x] Implement keyboard “/” to focus search.
- [x] Build global navigation: Home, Research, Tools, Guides, Notes, Services, About.
- [x] Design and implement footer: disclaimer, license toggle, social links.
- [x] Add anchor links to headings.

### Phase 4: Page Development
- [x] Develop `/` page: latest posts, featured grid, search.
- [x] Develop `/research` page (long-form analyses with category filter).
- [x] Develop `/guides` page (how-tos and playbooks).
- [x] Develop `/notes` page (short field notes).
- [x] Develop `/tools` page: affiliate hub, YAML-driven cards, tag filter.
- [x] Develop `/services` page: productized OSINT tiers, pricing and checkout.
- [x] Implement `/go/[slug]` for cloaked affiliate redirects.
- [x] Create static pages: `/about`, `/disclosures`, `/contact`.
- [x] Ensure feeds: `/feeds/rss.xml`, `/feeds/atom.xml`, `/feeds/feed.json` are correctly generated.

### Phase 5: Monetization Implementation
- [x] Implement `/services` (productized OSINT):
  - [x] Create `<PricingTable items={services} />` component.
  - [x] Create `<CheckoutButton provider="stripe|lemonsqueezy" priceId="..." label="..." />` component.
  - [x] Create `<LegalDisclosure kind="osint" />` component.
  - [x] Implement hosted checkout behavior.
  - [x] Configure successful checkout to post `{serviceId, sessionId, email}` to `process.env.N8N_WEBHOOK_URL`.
  - [x] Display SLA, deliverables, turnaround, and refund policy per tier.
  - [x] Add optional "Request SOW" link (mailto or contact page).
- [x] Implement `/tools` (affiliate hub):
  - [x] Display data from `tools.yml` in a grid of `<AffiliateCard>` components.
  - [x] Implement cloaked redirects at `/go/[slug]` reading `tools.yml` and 302 to `affiliateUrl`.
  - [x] Ensure `/go/*` is `noindex` and excluded from Pagefind.
  - [x] Auto-append UTM from `config.affiliates`.
  - [x] Send outbound click event to analytics.
  - [x] Implement tag filter and search on the page.

### Phase 6: Routing, Guards, Performance, SEO, and Security
- [x] Implement routing guards for `/go/[slug]` (404 if slug not found).
- [x] Add simple HMAC or checksum support for `/go` logging param if `config.affiliates.hardened` is true.
- [x] Configure `/services` to use test mode when `NEXT_PUBLIC_PAYMENTS_TEST_MODE=true`.
- [x] Ensure static export only.
- [x] Integrate `next-safe` for CSP and security headers.
- [x] Implement structured data: Article, BreadcrumbList, WebSite SearchAction.
- [x] Lazy load images and iframes.
- [x] Ensure no third-party fonts are used.

### Phase 7: Configuration and Environment Variables
- [x] Create `site.config.ts` with:
  - [x] `site: { name, description, url }`
  - [x] `nav: [...]`, `social: {...}`
  - [x] `analytics: { provider: "plausible"|"umami", domain|id }`
  - [x] `payments: { provider: "stripe"|"lemonsqueezy", priceIds: { basic, dossier, custom } }`
  - [x] `intake: { n8nWebhook: process.env.N8N_WEBHOOK_URL }`
  - [x] `affiliates: { cloakedPrefix: "/go", utmSource: "mitm.life", hardened: false }`
  - [x] `license: { code: "MIT", content: "CC BY-SA 4.0" }`
- [x] Create `.env.example` with:
  - [x] `SITE_URL=`
  - [x] `NEXT_PUBLIC_ANALYTICS_PROVIDER=`
  - [x] `PLAUSIBLE_DOMAIN=` or `UMAMI_WEBSITE_ID=`
  - [x] `PAYMENTS_PROVIDER=`
  - [x] `STRIPE_PRICE_BASIC=`, `STRIPE_PRICE_DOSSIER=`, `STRIPE_PRICE_CUSTOM=`
  - [x] `LEMONSQUEEZY_STORE_ID=`, `LEMONSQUEEZY_VARIANT_IDS=...`
  - [x] `N8N_WEBHOOK_URL=`

### Phase 8: Development Quality and Automation
- [x] Configure TypeScript strict mode, ESLint, Prettier.
- [x] Define `pnpm` scripts: `dev`, `build`, `export`, `start`, `lint`, `typecheck`, `feeds:generate`, `new:post "Title" --slug`.
- [x] Set up GitHub Actions for: typecheck, build, export, pagefind index, deploy to Cloudflare Pages.

### Phase 9: Deliverables and Acceptance Criteria
- [x] Deliver Next.js app named “mitm-life-blog”.
- [x] Deliver Contentlayer schema for posts and pages.
- [x] Deliver `/data/services.yml` and `/data/tools.yml` with examples.
- [x] Deliver Components: PricingTable, CheckoutButton, AffiliateCard, GoRedirect, LegalDisclosure.
- [x] Deliver OG image template.
- [x] Deliver Cloudflare Pages config and README.
- [x] Ensure Lighthouse 95+ across Perf, SEO, Best Practices, Accessibility on seeded build.
- [x] Verify `/services` renders tiers from `services.yml` and shows three working test checkout buttons.
- [x] Confirm successful checkout triggers 200 from `N8N_WEBHOOK_URL` in test harness.
- [x] Verify `/tools` lists items from `tools.yml`; clicking card goes to `/go/[slug]` then 302 to `affiliateUrl`.
- [x] Confirm `/go/*` is `noindex` and absent from Pagefind results.
- [x] Validate feeds and sitemap; ensure search returns seeded posts.

### Phase 10: Style and Final Review
- [x] Apply minimal dark UI, high contrast, generous spacing, rounded-2xl cards, subtle hovers.
- [x] Use system font stack, monospace accents for technical terms.
- [x] Ensure accessible color contrast.
- [x] Final review of all features and code against requirements.


