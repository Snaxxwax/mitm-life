import { test, expect } from '@playwright/test';

test.describe('Content Page Tests', () => {
  test('guides page loads and displays content', async ({ page }) => {
    await page.goto('/guides');

    await expect(page).toHaveTitle(/Guide/);
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
  });

  test('research page loads and displays content', async ({ page }) => {
    await page.goto('/research');

    await expect(page).toHaveTitle(/Research/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('resources page loads and displays content', async ({ page }) => {
    await page.goto('/resources');

    await expect(page).toHaveTitle(/Resource/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('tools page loads and displays content', async ({ page }) => {
    await page.goto('/tools');

    await expect(page).toHaveTitle(/Tool/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('about page loads and displays content', async ({ page }) => {
    await page.goto('/about');

    await expect(page).toHaveTitle(/About/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('blog post cards are clickable (if present)', async ({ page }) => {
    await page.goto('/');

    const blogCards = page.locator(
      '[data-testid="blog-card"], .blog-card, article'
    );
    const cardCount = await blogCards.count();

    if (cardCount > 0) {
      const firstCard = blogCards.first();
      const cardLink = firstCard.locator('a').first();

      if (await cardLink.isVisible()) {
        await cardLink.click();

        await expect(page.locator('h1')).toBeVisible();
      }
    }
  });

  test('pages have proper meta tags', async ({ page }) => {
    const pages = [
      '/',
      '/guides',
      '/research',
      '/resources',
      '/tools',
      '/about',
    ];

    for (const path of pages) {
      await page.goto(path);

      await expect(page.locator('meta[name="description"]')).toHaveCount(1);
      await expect(page.locator('meta[name="viewport"]')).toHaveCount(1);
    }
  });
});
