const { test, expect } = require('@playwright/test');

test.describe('Mobile Browser Testing', () => {
  const mobileDevices = [
    { name: 'iPhone 12', viewport: { width: 390, height: 844 } },
    { name: 'Pixel 5', viewport: { width: 393, height: 851 } },
    { name: 'Galaxy S21', viewport: { width: 360, height: 800 } },
  ];

  mobileDevices.forEach(device => {
    test(`should work on ${device.name}`, async ({ page }) => {
      await page.setViewportSize(device.viewport);
      await page.goto('https://example.com');

      // Perform tests specific to mobile browsers
      const title = await page.title();
      expect(title).toBe('Example Domain');

      // Add more assertions as needed
    });
  });
});