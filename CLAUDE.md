# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start the development server at http://localhost:4321
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run Astro type checking

## Architecture

This is a cybersecurity blog built with Astro, featuring seamless Obsidian integration for content management.

### Core Structure
- **Content-first Astro site** with SSG for optimal performance
- **Obsidian integration** via `astro-loader-obsidian` with real-time sync
- **Content collections** system using Astro's typed content API
- **React components** integrated within Astro pages for interactivity

### Content System
Content is managed directly in the Obsidian vault:
- **Obsidian Vault** (`obsidian-vault/`) - Primary content authoring with real-time sync
- **Real-time updates** - Changes automatically reflected in development server
- **Automatic link resolution** - `[[wiki-links]]` and `![[embeds]]` work seamlessly

Content categories are defined in four collections:
- `tools/` - Security tools and scripts  
- `guides/` - Step-by-step tutorials
- `research/` - Original research and analysis
- `resources/` - Curated reference materials

### Key Components
- **Header.tsx** - React-based navigation with mobile sheet menu
- **Content Collections** - Type-safe frontmatter schema in `content.config.ts`
- **Sync Script** - Automated content synchronization with frontmatter processing
- **Tailwind Config** - Cybersecurity-themed dark color scheme

### Site Configuration
- Site constants in `src/consts.ts` (title, navigation, URLs)
- Astro config in `astro.config.mjs` (integrations: MDX, React, Tailwind, Sitemap)
- Content schema validation ensures consistent metadata across all content

### Content Workflow
1. Write content directly in Obsidian vault using category folders
2. Add frontmatter with required fields (title, description, pubDate, category, tags)
3. Changes automatically sync to development server in real-time
4. Astro builds static site with type-safe content collections

The `astro-loader-obsidian` handles automatic content loading and link resolution, ensuring all Obsidian-style links and embeds work seamlessly in the generated site.