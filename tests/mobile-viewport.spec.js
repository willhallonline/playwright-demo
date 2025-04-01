// @ts-check
import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'iPhone 12', width: 390, height: 844 },
  { name: 'Galaxy S21', width: 360, height: 800 },
  { name: 'Pixel 5', width: 393, height: 851 },
];

test.describe('Mobile Viewports', () => {
  for (const viewport of viewports) {
    test(`Test viewport: ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('https://example.com');

      // Add assertions for key UI elements and interactions
      await expect(page.locator('header')).toBeVisible();
      await expect(page.locator('footer')).toBeVisible();

      // Example interaction
      await page.locator('button.menu-toggle').click();
      await expect(page.locator('nav.menu')).toBeVisible();
    });
  }
});