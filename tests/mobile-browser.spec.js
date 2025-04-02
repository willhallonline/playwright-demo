// @ts-check
import { test, expect } from '@playwright/test';

// Test for mobile browsers
const devices = ['iPhone 12', 'Pixel 5'];

devices.forEach(device => {
  test(`Test on ${device}`, async ({ playwright }) => {
    const browser = await playwright.webkit.launch();
    const context = await browser.newContext({
      ...playwright.devices[device]
    });
    const page = await context.newPage();

    await page.goto('https://playwright.dev/');

    // Check if the page is responsive and functional
    await expect(page).toHaveTitle(/Playwright/);

    // Perform additional checks specific to mobile browsers
    const menuButton = page.locator('button[aria-label="Menu"]');
    await menuButton.click();
    await expect(page.locator('nav')).toBeVisible();

    await browser.close();
  });
});