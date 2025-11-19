// Import 'test' and 'expect' helpers from Playwright test library.
import { test, expect } from '@playwright/test';

/*
  This defines ONE test case.

  - 'basic UI loads' is just the name of the test. 
    (You will see this in terminal, e.g. "✓ basic UI loads")

  - async ({ page }) => { ... } is the function that describes
    what Playwright should do in the browser.
*/
test('basic UI loads', async ({ page }) => {
  /*
    1️⃣ Open your React app in the browser.

    - baseURL is defined in playwright.config.js (e.g. http://localhost:5173)
    - page.goto('/') means: open that base URL + '/'
      → example: http://localhost:5173/
  */
  await page.goto('/');

  /*
    2️⃣ Find the <h1 data-testid="title"> element.

    - getByTestId reads the "data-testid" attribute from HTML.
    - We used data-testid="title" in App.jsx, so we can find it here.
  */
  const title = page.getByTestId('title');

  /*
    3️⃣ Check (assert) that the title text is EXACTLY "Hello Playwright".

    - expect(thing).toHaveText('...') is an assertion.
    - If the text is different, the test FAILS.
    - If the text matches, this part of the test PASSES.
  */
  await expect(title).toHaveText('Hello Playwright');

  /*
    4️⃣ Find the <button data-testid="btn"> element.
  */
  const button = page.getByTestId('btn');

  /*
    5️⃣ Check that the button is visible on the screen.

    - If the button is hidden or missing, test FAILS.
    - If the button is visible, assertion PASSES.
  */
  await expect(button).toBeVisible();
});
