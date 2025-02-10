import { test, expect } from "@playwright/test";

test("Statista list should be visible on the page", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const listCards = page.locator(".list-card");
  await expect(listCards).toHaveCount(4);
});

test("Pagination should be visible on the page", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const pagination = page.locator("ul>li");
  await expect(pagination).toHaveCount(7);
});

test("Click on pagination should change the page", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const pagination = page.locator("ul>li");
  const listCards = page.locator(".list-card");

  await pagination.nth(2).click();
  await expect(listCards).toHaveCount(4);
});
