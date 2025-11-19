import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  use: {
    baseURL: 'http://localhost:3000', // 👈 same as Vite
    headless: false,                  // show browser while learning
  },

  // 👇 Playwright will run this before tests and wait for this URL
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',     // 👈 wait until this is reachable
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,              // wait up to 120s instead of 60
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
