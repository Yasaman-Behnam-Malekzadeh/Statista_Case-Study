import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,
    baseURL: 'http://localhost:3000',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});