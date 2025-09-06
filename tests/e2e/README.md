# E2E Test Suite

This directory contains end-to-end tests for the MITM.life cybersecurity blog using Playwright.

## Test Files

- **`smoke.spec.ts`** - Basic smoke tests to ensure the site loads and core functionality works
- **`navigation.spec.ts`** - Tests for navigation between pages and menu functionality  
- **`content.spec.ts`** - Tests for content pages (guides, research, resources, tools, about)
- **`responsive.spec.ts`** - Responsive design tests across different viewport sizes
- **`accessibility.spec.ts`** - Accessibility tests using axe-core

## Running Tests

```bash
# Run all E2E tests
pnpm run e2e

# Run with UI mode for debugging
pnpm run e2e:ui

# Run specific test file
pnpm exec playwright test smoke.spec.ts

# Run tests in headed mode (visible browser)
pnpm exec playwright test --headed

# Run on specific browser
pnpm exec playwright test --project=chromium
```

## Test Coverage

The test suite covers:

- ✅ Homepage loading and basic functionality
- ✅ Navigation between main sections
- ✅ Content page rendering
- ✅ Responsive design across mobile, tablet, and desktop
- ✅ Accessibility compliance (WCAG)
- ✅ Console error detection
- ✅ Meta tag presence
- ✅ 404 error handling

## Configuration

Tests are configured in `playwright.config.ts` with:

- Multi-browser support (Chrome, Firefox, Safari, Mobile Chrome, Mobile Safari)
- Automatic dev server startup
- Screenshots on failure
- Trace recording on retry
- HTML reporting

## Continuous Integration

The E2E tests are designed to run in CI/CD pipelines with proper retry logic and parallelization.