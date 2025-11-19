// Playwright test for Component2 (counter behavior)

import { test, expect } from '@playwright/test';

test('Component2 counter works correctly', async ({ page }) => {
  // 1️⃣ Open the React app homepage
  await page.goto('/');

  // 2️⃣ Make sure Component2 is visible by checking its title
  const title = page.getByTestId('c2-title');
  await expect(title).toHaveText('Component 2 - Counter');

  // 3️⃣ Get the elements we will interact with
  const countText = page.getByTestId('c2-count');
  const incButton = page.getByTestId('c2-inc-btn');
  const resetButton = page.getByTestId('c2-reset-btn');

  // Initial state should be "Count: 0"
  await expect(countText).toHaveText('Count: 0');

  // Click Increment 3 times → Count: 3
  await incButton.click();
  await incButton.click();
  await incButton.click();
  await expect(countText).toHaveText('Count: 3');

  // Click Reset → Count: 0 again
  await resetButton.click();
  await expect(countText).toHaveText('Count: 0');
});


/* npx playwright test Component2 :->
------------------------------------

Running 1 test using 1 worker

  ✓  1 [chromium] › tests\Component2.spec.js:5:1 › Component2 counter works correctly (1.6s)       

  1 passed (4.2s)

*/