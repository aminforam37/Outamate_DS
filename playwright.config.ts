import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',  // Test directory
  // Define global settings for the test environment
  //timeout: 30000, // Global timeout for each test (30 seconds)
  timeout: 50 * 60 * 1000, // 60 seconds per test
  workers: 1, // Run tests in a single worker to ensure only one login session is created
  use: {
    // Run tests in a single workeruse
    headless: false, // Run tests in headless mode by default
    //viewport: { width: 1280, height: 720 }, // Default viewport size
    video: 'on-first-retry', // Record video of tests that fail
    trace: 'on-first-retry', // Record a trace of the tests that fail
    screenshot: 'on', // Take a screenshot on test failure
    bypassCSP: true,
    acceptDownloads: true,
    ignoreHTTPSErrors: true, // Ignore SSL errors
    baseURL: 'https://qalogin.authparency.com/', // Replace with your app's base URL
    viewport: null,
    launchOptions: {
      args: ["--start-maximized"]
    },
  },

  // Projects define the environments in which tests will run
  projects: [
    {
      //name: 'Desktop Chrome',
      use: {
        //...devices['Desktop Chrome'], // Use the "Desktop Chrome" device profile
        browserName: 'chromium', // Use Chromium (Chrome)
        viewport: null,
    launchOptions: {
      args: ['--start-maximized']
    },
      },
    },
    // {
    //   name: 'Desktop Firefox',
    //   use: {
    //     ...devices['Desktop Firefox'], // Use the "Desktop Firefox" device profile
    //     browserName: 'firefox', // Use Firefox
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'], // Use the "iPhone 12" device profile
    //     browserName: 'webkit', // Use WebKit (Safari)
    //   },
    // },
  ],

//   // Additional configuration options
//   reporter: [['dot'], ['json', { outputFile: 'test-results.json' }]], // Reporters to output test results (dot and json)
//   globalSetup: './global-setup.ts', // Path to a global setup file for any required setup before tests
//   globalTeardown: './global-teardown.ts', // Path to a global teardown file for cleanup after tests
});
