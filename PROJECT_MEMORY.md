# 🧠 Project Memory — Astro → GitHub → Cloudflare

This document tracks **decisions, context, and progress** for the project.  
Always update this file after each coding session with Claude Code (Agent mode).

---

## 📌 Project Overview
| Field | Value |
|------|-------|
| **Project Name** | *[Fill in]* |
| **Goal** | *[One-sentence project description]* |
| **Stack** | Frontend: **Astro** · Hosting: **Cloudflare Pages** · CI: **GitHub Actions** |
| **Agents & Tools** | Agent: **Claude Code** (context window: **7**) · Tools: **Playwright**, **filesystem**, **git hooks** |

---

## 🗂️ Architecture & Structure
| Category | Choice |
|----------|--------|
| **Folder Layout** | `/src`, `/public`, `/src/pages`, `/src/components`, `/src/layouts`, `/tests/e2e`, `/docs` |
| **Frontend Framework** | Astro (with optional integrations: React/Vue/Svelte as needed) |
| **Server/Edge** | Cloudflare Pages (optional Workers/functions for API) |
| **Styling** | *[TailwindCSS / UnoCSS / Vanilla]* |
| **Testing** | Playwright (E2E) |
| **Other Libraries** | *[Wrangler for CF, ESLint, Prettier, Husky, lint-staged]* |

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
| YYYY-MM-DD | Use **Astro** with **Cloudflare Pages** deployment via GitHub Actions |
| YYYY-MM-DD | Add **Playwright** for E2E; record traces on CI |
| YYYY-MM-DD | Enable **Husky** + **lint-staged**; enforce Prettier & ESLint |

---

## ✅ Completed Features
| Date | Feature |
|------|---------|
| YYYY-MM-DD | Initialize Astro project & base pages |
| YYYY-MM-DD | Add Playwright E2E test for homepage |
| YYYY-MM-DD | Configure GitHub Actions CI (build + test) |
| YYYY-MM-DD | Cloudflare Pages deploy from `main` |

---

## 🚧 Open TODOs
| Status | Task | Notes |
|--------|------|-------|
| ⬜ | Add site layout + navigation | `/src/layouts/Base.astro` |
| ⬜ | Configure analytics & SEO | robots, sitemap, meta tags |
| ⬜ | Add preview deploys for PRs | Cloudflare Pages previews |
| ⬜ | Add smoke E2E (Playwright) | run on pre-commit (fast) |

---

## 🐞 Known Issues / Bugs
| Date | Issue | Status |
|------|-------|--------|
| YYYY-MM-DD | *[example]* Flaky E2E on CI (slow network) | Open |

---

## 🔄 Changelog
| Date | Type | Scope | Description |
|------|------|-------|-------------|
| 2025-09-03 | feat | init | Scaffold Astro + CI + CF Pages wiring |
| YYYY-MM-DD | test | e2e | Add Playwright smoke tests |

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
