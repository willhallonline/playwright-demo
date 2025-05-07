// @ts-check
import { test, expect } from '@playwright/test';

test('new testing method', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Perform a new test action.
  await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
});