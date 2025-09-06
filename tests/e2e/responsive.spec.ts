import { test, expect } from '@playwright/test';

test.describe('Responsive Design Tests', () => {
  const viewports = [
    { name: 'Mobile', width: 375, height: 667 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Desktop', width: 1920, height: 1080 },
  ];

  for (const viewport of viewports) {
    test(`homepage renders correctly on ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize({
        width: viewport.width,
        height: viewport.height,
      });
      await page.goto('/');

      await expect(page.locator('header')).toBeVisible();
      await expect(page.locator('main')).toBeVisible();
      await expect(page.locator('footer')).toBeVisible();

      await expect(page.locator('h1')).toBeVisible();
    });

    test(`navigation works on ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize({
        width: viewport.width,
        height: viewport.height,
      });
      await page.goto('/');

      const nav = page.locator('nav');
      await expect(nav).toBeVisible();

      if (viewport.width < 768) {
        const mobileMenuButton = page.locator(
          '[aria-label*="menu"], button[aria-expanded], .hamburger, .menu-toggle'
        );
        const mobileMenuButtonCount = await mobileMenuButton.count();

        if (mobileMenuButtonCount > 0) {
          await mobileMenuButton.first().click();
        }
      }

      const aboutLink = page.getByRole('link', { name: /about/i });
      if (await aboutLink.isVisible()) {
        await aboutLink.click();
        await expect(page).toHaveURL(/about/);
      }
    });
  }

  test('text remains readable at different zoom levels', async ({ page }) => {
    await page.goto('/');

    const zoomLevels = [0.5, 0.75, 1.0, 1.5, 2.0];

    for (const zoom of zoomLevels) {
      await page.evaluate(`document.body.style.zoom = '${zoom}'`);

      const heading = page.locator('h1');
      await expect(heading).toBeVisible();

      const boundingBox = await heading.boundingBox();
      expect(boundingBox).toBeTruthy();
      expect(boundingBox!.width).toBeGreaterThan(0);
      expect(boundingBox!.height).toBeGreaterThan(0);
    }
  });

  test('images are responsive', async ({ page }) => {
    await page.goto('/');

    const images = page.locator('img');
    const imageCount = await images.count();

    if (imageCount > 0) {
      for (let i = 0; i < Math.min(imageCount, 3); i++) {
        const img = images.nth(i);
        if (await img.isVisible()) {
          const boundingBox = await img.boundingBox();
          expect(boundingBox).toBeTruthy();

          const viewport = page.viewportSize();
          if (viewport) {
            expect(boundingBox!.width).toBeLessThanOrEqual(viewport.width);
          }
        }
      }
    }
  });

  test('no horizontal scroll on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const scrollWidth = await page.evaluate(
      () => document.documentElement.scrollWidth
    );
    const clientWidth = await page.evaluate(
      () => document.documentElement.clientWidth
    );

    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 5); // 5px tolerance
  });
});
