import { test, expect } from "@playwright/test";

test("Search button and search box should be visible on the page and search box should be empty", async ({
  page,
}) => {
  await page.goto("http://localhost:3000");

  const searchBox = page.locator('input[type="search"]');
  const searchButton = page.locator("button");

  await expect(searchBox).toBeVisible();
  await expect(searchBox).toHaveValue("");
  await expect(searchBox).toHaveAttribute("placeholder", "Search statistic");
  await expect(searchButton).toBeVisible();
  await expect(searchButton).toHaveText("Search");
});

test("Search one item and check if it is displayed", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const searchBox = page.locator('input[type="search"]');
  const searchButton = page.locator("button");
  const listCards = page.locator(".list-card");

  await searchBox.fill("countries");
  await searchButton.click();

  await expect(listCards).toHaveCount(2);
});
