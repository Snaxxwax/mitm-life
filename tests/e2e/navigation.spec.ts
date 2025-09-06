import { test, expect } from '@playwright/test';

test.describe('Navigation Tests', () => {
  test('navigation menu is visible and functional', async ({ page }) => {
    await page.goto('/');

    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
  });

  test('can navigate to main sections', async ({ page }) => {
    await page.goto('/');

    const sections = [
      { name: 'Guides', path: '/guides' },
      { name: 'Research', path: '/research' },
      { name: 'Resources', path: '/resources' },
      { name: 'Tools', path: '/tools' },
      { name: 'About', path: '/about' },
    ];

    for (const section of sections) {
      await page.goto('/');

      const link = page.getByRole('link', { name: section.name });
      if (await link.isVisible()) {
        await link.click();

        await expect(page).toHaveURL(new RegExp(section.path));

        await expect(page.locator('h1')).toBeVisible();
      }
    }
  });

  test('logo/home link returns to homepage', async ({ page }) => {
    await page.goto('/about');

    const homeLink = page.locator('a[href="/"]').first();
    await homeLink.click();

    await expect(page).toHaveURL('/');
  });

  test('404 page works for non-existent routes', async ({ page }) => {
    const response = await page.goto('/non-existent-page');

    expect(response?.status()).toBe(404);
  });
});
