import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  reporter: process.env.CI
    ? [["list"], ["html", { outputFolder: "test-report" }], ["allure-playwright", { outputFolder: "allure-results", detail: true, categories: ["passed", "failed", "broken", "skipped"] }]]
    : [["list"], ["html", { outputFolder: "test-report" }], ["allure-playwright", { outputFolder: "allure-results", detail: true, categories: ["passed", "failed", "broken", "skipped"] }]],
  use: {
    baseURL: "https://jsonplaceholder.typicode.com",
    extraHTTPHeaders: {
      "Content-Type": "application/json"
    }
  }
});