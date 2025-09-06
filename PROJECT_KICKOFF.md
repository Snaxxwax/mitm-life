# 🔰 Project Kickoff — Astro → GitHub → Cloudflare

**SYSTEM / INSTRUCTIONS (for Agent)**  
You are my engineering partner. Use **context=7**, prefer concise working memory.  
Loop: **Clarify → Plan → Implement → Verify → Commit → Update Memory → Next**.  
Tools allowed: **filesystem**, **Playwright**. Use git **hooks** for quality gates.

---

## 0) Project Brief (fill in)
- Name: **`<NAME>`**
- Goal: **`<GOAL>`**

Confirm:
- Astro for frontend
- Cloudflare Pages for hosting (with GitHub)
- GitHub Actions for CI
- Tools: Playwright, Husky, lint-staged, ESLint, Prettier

If anything is missing, ask before proceeding.

---

## 1) Initialization Plan (propose, then execute)
- Folder structure for Astro.
- Quality stack (ESLint, Prettier).
- Playwright E2E baseline (homepage).
- Git hooks (pre-commit: format + quick smoke).
- CI workflow (build + test).
- Deploy via Cloudflare Pages (GitHub Action or Pages integration).
- Memory hygiene: summarize to fit **context=7**.

---

## 2) Commands (Agent may execute via filesystem tool as needed)
```bash
# Create Astro project
npm create astro@latest -- --template minimal --typescript

# Project deps
npm i -D prettier eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm i -D husky lint-staged
npm i -D @playwright/test

# Playwright setup (one-time)
npx playwright install --with-deps

# Formatting & linting configs (Agent: write these files)
# .prettierrc, .eslintrc.cjs, .editorconfig

# Git hooks
npx husky init
```
...
