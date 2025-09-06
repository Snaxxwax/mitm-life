# 🧠 Project Memory — Astro → GitHub → Cloudflare

This document tracks **decisions, context, and progress** for the project.  
Always update this file after each coding session with Claude Code (Agent mode).

---

## 📌 Project Overview
| Field | Value |
|------|-------|
| **Project Name** | **MITM.life - Cybersecurity Blog** |
| **Goal** | A modern cybersecurity blog focused on security research, tools, and analysis with content management via Obsidian |
| **Stack** | Frontend: **Astro** · Hosting: **Cloudflare Pages** · CI: **GitHub Actions** |
| **Agents & Tools** | Agent: **Claude Code** (context window: **7**) · Tools: **Playwright**, **filesystem**, **git hooks** |

---

## 🗂️ Architecture & Structure
| Category | Choice |
|----------|--------|
| **Folder Layout** | `/src`, `/public`, `/src/pages`, `/src/components`, `/src/layouts`, `/tests/e2e`, `/docs`, `/obsidian-vault` |
| **Frontend Framework** | Astro with React integration for interactive components |
| **Server/Edge** | Cloudflare Pages (with content loaded from Obsidian vault) |
| **Styling** | TailwindCSS with shadcn/ui components and dark theme |
| **Testing** | Playwright (E2E), Vitest (unit tests), accessibility testing with @axe-core/playwright |
| **Other Libraries** | astro-loader-obsidian, ESLint, Prettier, Husky, lint-staged, TypeScript |

---

## 🧩 Agents, Hooks, and Tools
| Topic | Configuration |
|------|----------------|
| **Agent** | Use **Claude Code Agent** with **context=7**. Summarize long diffs into memory snippets when exceeding context. Prefer file-scoped edits via filesystem tool. |
| **Filesystem Tool** | Allowed to read/write within repo. All generated files must be idempotent and formatted. Never overwrite `.env` without explicit confirmation. |
| **Playwright** | `tests/e2e` directory; run in CI and locally; record traces on failure. |
| **Git Hooks** | Husky pre-commit runs lint/format + Playwright smoke test. |
| **Commit Style** | Conventional Commits. Agent generates commit messages & updates this memory file. |

---

## 📝 Decisions Log
| Date | Decision |
|------|----------|
| 2025-01-06 | Use **Astro** with **Cloudflare Pages** deployment via GitHub Actions |
| 2025-01-06 | Add **Playwright** for E2E; record traces on CI |
| 2025-01-06 | Enable **Husky** + **lint-staged**; enforce Prettier & ESLint |
| 2025-01-06 | Use **Obsidian vault** for content management with astro-loader-obsidian |
| 2025-01-06 | Focus on **WiFi security** as initial content area |
| 2025-01-06 | Implement **TailwindCSS + shadcn/ui** for component library |

---

## ✅ Completed Features
| Date | Feature |
|------|---------|
| 2025-01-06 | Initialize Astro project & base pages |
| 2025-01-06 | Add Obsidian integration for content collections (guides, tools, research, resources) |
| 2025-01-06 | Implement comprehensive UI with TailwindCSS and React components |
| 2025-01-06 | Set up complete testing suite (Playwright E2E, Vitest unit tests, accessibility) |
| 2025-01-06 | Configure build tooling (ESLint, Prettier, TypeScript, git hooks) |
| 2025-01-06 | Add WiFi security content (5 guides, 1 tool documentation) |
| 2025-01-06 | Create homepage with hero, categories, recent posts, newsletter signup |
| 2025-01-06 | Configure GitHub Actions CI (build + test) |

---

## 🚧 Open TODOs
| Status | Task | Notes |
|--------|------|-------|
| ⬜ | Deploy to Cloudflare Pages | Set up production deployment |
| ⬜ | Fix remaining ESLint issues | 5 accessibility and React issues remaining |
| ⬜ | Expand content beyond WiFi security | Add network analysis, malware research, etc. |
| ⬜ | Configure analytics & SEO | robots, sitemap, meta tags |
| ⬜ | Add RSS feed generation | Leverage @astrojs/rss integration |
| ⬜ | Performance optimization | Run Lighthouse, optimize bundle |

---

## 🐞 Known Issues / Bugs
| Date | Issue | Status |
|------|-------|--------|
| 2025-01-06 | ESLint: 5 remaining accessibility and React rules violations | Open |
| 2025-01-06 | Tests: Playwright E2E tests need to be run and validated | Open |

---

## 🔄 Changelog
| Date | Type | Scope | Description |
|------|------|-------|-------------|
| 2025-01-06 | feat | init | Restructure project with modern Astro cybersecurity blog |
| 2025-01-06 | feat | content | Add Obsidian integration for content management |
| 2025-01-06 | feat | ui | Implement TailwindCSS + shadcn/ui component library |
| 2025-01-06 | feat | testing | Set up comprehensive testing suite (Playwright + Vitest) |
| 2025-01-06 | feat | content | Add WiFi security content (5 guides, 1 tool) |
| 2025-01-06 | fix | lint | Configure ESLint for mixed environments |

---

## ⚙️ CI/CD & Deployment Notes
| Category | Details |
|----------|---------|
| **CI Provider** | GitHub Actions |
| **Build** | `npm ci && npm run build` (Astro → `dist/`) |
| **Deploy** | Cloudflare Pages via GitHub Action or Pages Git integration |
| **Env Vars** | `CLOUDFLARE_API_TOKEN` (Pages write) · `CLOUDFLARE_ACCOUNT_ID` |
| **Wrangler** | Optional: `wrangler pages deploy dist` |

---

## 🧪 Testing Notes
| Topic | Details |
|------|---------|
| **Playwright** | Headless in CI; trace on failure: `retain-on-failure`; artifacts uploaded |
| **Smoke Test** | `/` returns 200 and contains brand text |
| **Local** | `npx playwright install` once; `npm run test:e2e` |

---

## 📚 References
| Resource | Link |
|----------|-----|
| Design Doc | [URL] |
| Cloudflare Pages Docs | [URL] |
| Astro Docs | [URL] |
| Playwright Docs | [URL] |

---

✅ **Instructions for Claude Code (Agent)**  
1. Load this file (context=7) and summarize key points into a short session context.  
2. Use filesystem tool for edits; suggest small, testable changes.  
3. After changes: run tests, propose commit message, and update tables (Decisions/Completed/TODOs/Changelog).  
