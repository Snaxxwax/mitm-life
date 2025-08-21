# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **mitm.life** - a static blog focused on OSINT (Open Source Intelligence) and cybersecurity research built with Next.js, Contentlayer, and TailwindCSS. The project has one main monetization surface: an affiliate tool hub (/tools).

## Development Commands

### Setup & Installation
```bash
pnpm install
```

### Development
```bash
pnpm dev                    # Start development server
```

### Build & Export
```bash
pnpm build                  # Build the application
pnpm export                 # Export static files
pnpm typecheck             # Run TypeScript type checking
pnpm lint                  # Run ESLint
```

### Content Management
```bash
pnpm feeds:generate        # Generate RSS/Atom/JSON feeds
pnpm new:post "Title" --slug  # Create new post
```

## Project Architecture

### Core Technologies
- **Next.js 14+** with App Router for static site generation
- **Contentlayer** for MDX content management and type safety
- **TailwindCSS + shadcn/ui** for styling
- **TypeScript** in strict mode
- **Pagefind** for static search functionality
- **Shiki** for code syntax highlighting

### Content Structure
- **Posts**: `/content/posts/*.mdx` - Blog posts with rich frontmatter
- **Pages**: `/content/pages/*.mdx` - Static pages (About, Contact, etc.)
- **Authors**: `/content/authors/*.yml` - Author metadata

- **Tools**: `/data/tools.yml` - Affiliate tool definitions

### Key Components

- `AffiliateCard` - Tool display cards
- `GoRedirect` - Cloaked affiliate redirect handler
- `LegalDisclosure` - Compliance and disclaimer component

### Routing Structure
- `/` - Homepage with latest posts and search
- `/research` - Long-form OSINT analyses
- `/guides` - How-to content and playbooks
- `/notes` - Short field notes
- `/tools` - Affiliate hub with filtering

- `/go/[slug]` - Cloaked affiliate redirects (noindex)
- `/tags/[tag]` - Tag taxonomy pages
- `/categories/[category]` - Category taxonomy pages

### Configuration Files
- `site.config.ts` - Site metadata, analytics, payment providers, affiliate settings
- `contentlayer.config.ts` - Content schema definitions
- `next.config.mjs` - Next.js configuration for static export
- `tsconfig.json` - TypeScript configuration with strict mode

### Monetization Integration
- **Payment providers**: Stripe and LemonSqueezy support
- **Webhook integration**: N8N webhook for order processing
- **Affiliate tracking**: UTM parameter injection and click tracking
- **Test mode**: Configurable via NEXT_PUBLIC_PAYMENTS_TEST_MODE

### Security & SEO Features
- CSP headers via next-safe
- Structured data (Article, BreadcrumbList, WebSite)
- Social OG images via @vercel/og
- RSS/Atom/JSON feeds
- Sitemap and robots.txt generation
- Privacy-first analytics (Plausible/Umami)

### Content Features
- MDX shortcodes: Callout, YouTube, Mermaid, Figure, Source
- Reading time calculation
- Table of contents generation
- Dark theme with toggle
- Comment system via Giscus
- Footnote support
- Anchor links for headings

## Development Notes

### File Organization
The project uses a flat structure in the mitm/ directory with components, configuration, and content management files at the root level. TypeScript path mapping is configured with `@/*` pointing to `./src/*`.

### Static Export Only
This project is configured for static export only and deploys to Cloudflare Pages. All features must work without server-side runtime.

### Environment Variables
Key environment variables are documented in the project. Check `site.config.ts` for runtime configuration and ensure `.env` file contains necessary API keys for payment processing and webhooks.