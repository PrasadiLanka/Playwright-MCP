import { test, expect } from '@playwright/test';

test('Search for T-shirts and verify result', async ({ page }) => {
  // Step 1: Navigate to the website
  await page.goto('http://www.automationpractice.pl/index.php');

  // Step 2: Search for 'T-shirts'
  await page.getByRole('textbox', { name: 'Search' }).fill('T-shirts');
  await page.getByRole('textbox', { name: 'Search' }).press('Enter');

  // Step 3: Verify the result contains "Faded Short Sleeve T-shirts" in the main results (center_column)
  const productHeading = page.locator('#center_column h5', { hasText: 'Faded Short Sleeve T-shirts' });
  await expect(productHeading).toBeVisible();
});
