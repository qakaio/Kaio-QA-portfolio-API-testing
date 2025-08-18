import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests", // Directory containing test files
  timeout: 30 * 1000, // Global timeout for each test (30s)
  expect: {
    timeout: 5000, // Timeout for expect conditions (5s)
  },
  reporter: [["list"], ["html", { outputFolder: "test-report" }]], // CLI + HTML report
  use: {
    baseURL: "https://jsonplaceholder.typicode.com",
    extraHTTPHeaders: {
      "Content-Type": "application/json"
    }
  }
});
