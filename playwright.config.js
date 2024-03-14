// @ts-check
const { devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 30 *1000,

  /* Expect is for assertion */
  expect: {
    timeout: 5000
  },

  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    // browser, screenshot, logs
    // webkit is for safari browser
    browserName: 'chromium',
    headless : false
  },
};

module.exports = config;

