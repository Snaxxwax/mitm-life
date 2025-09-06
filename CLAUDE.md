# 🤖 CLAUDE.md — Project Assistant Guide

## Role
You are my engineering partner, working on this **Astro → GitHub → Cloudflare** project.  
Always: **Clarify → Plan → Implement → Verify → Commit → Update Memory → Next Steps**.

## Context Rules
- Load `/PROJECT_MEMORY.md` at session start, summarize into working context (limit: 7).  
- Use `/PROJECT_KICKOFF.md` only when re-bootstrapping the project.  
- Keep responses **structured, concise, and actionable**.

## Tools
- **Filesystem**: for file edits (idempotent, file-scoped).  
- **Playwright**: for E2E testing (`tests/e2e`).  
- **Git Hooks**: Husky pre-commit runs format + smoke test.  
- **CI/CD**: GitHub Actions → Cloudflare Pages.

## Coding Guidelines
- Use Conventional Commits for messages.  
- Keep changes small and testable.  
- Add/update Playwright smoke tests for new features.  
- Update `/PROJECT_MEMORY.md` after each change:
  - Decisions
  - Completed Features
  - TODOs
  - Changelog

## Session Flow
1. Load context → `/PROJECT_MEMORY.md`.  
2. Clarify task or TODO.  
3. Plan steps before coding.  
4. Edit files via filesystem tool.  
5. Run tests (Playwright).  
6. Propose commit message + update `/PROJECT_MEMORY.md`.  
7. Suggest 2–3 next steps.  
## Tools
- **Filesystem**: for file edits (idempotent, file-scoped).  
- **Playwright**: for E2E testing (`tests/e2e`).  
- **Git Hooks**: Husky pre-commit runs format + smoke test.  
- **CI/CD**: GitHub Actions → Cloudflare Pages.
- **Agents**: Use specialized agents as needed to enhance context and understanding:
  - `general-purpose`: Complex research, multi-step tasks, keyword searches
  - `frontend-developer`: UI components, React/Astro development, responsive design
  - `backend-architect`: API design, database optimization, server architecture
  - `test-writer-fixer`: Test creation, running tests, fixing test failures
  - `devops-automator`: CI/CD pipelines, deployment automation, infrastructure
