import { test, expect, Page } from "@playwright/test";

const goToDetailPage = async (page: Page) => {
  await page.goto("http://localhost:3000");
  const listCards = page.locator(".list-card");
  const detailPage = page.locator(".detail-page");

  await listCards.first().click();
  await expect(detailPage).toBeVisible();
};

test("Click on a card should redirect to the detail page", async ({ page }) => {
  await goToDetailPage(page);
});

test("Show detail page with correct data", async ({ page }) => {
  await goToDetailPage(page);

  const subject = page.locator("h1");
  const title = page.locator("h2");
  const description = page.locator("p");
  const image = page.locator("img[alt=teaser]");
  const backButton = page.locator("a:has-text('Back')");
  const favoriteIcon = page.locator("img[alt=favourite_icon]");
  const favoriteLink = page.locator("img[alt=favourite_icon]");

  await expect(subject).toBeVisible();
  await expect(title).toBeVisible();
  await expect(description).toBeVisible();
  await expect(image).toBeVisible();
  await expect(backButton).toBeVisible();
  await expect(favoriteIcon).toBeVisible();

  await favoriteLink.click();
});
