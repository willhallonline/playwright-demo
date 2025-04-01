const { test, expect } = require('@playwright/test');
const { injectAxe, checkA11y } = require('axe-playwright');

test.describe('Accessibility Tests', () => {
  test('Check accessibility of example page', async ({ page }) => {
    await page.goto('https://example.com');

    // Inject axe-core into the page
    await injectAxe(page);

    // Run accessibility checks
    await checkA11y(page);
  });
});