import { Browser, chromium } from "@playwright/test";
import { test, expect } from "@playwright/test";

const baseUrl = "http://localhost:3000";

test.describe("Navigation Component", () => {
  let browser: Browser;

  test.beforeAll(async () => {
    browser = await chromium.launch();
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
  });

  test("should render hamburger icon button", async ({ page }) => {
    const hamburgerIcon = await page.locator(".hamburger-icon");
    await expect(hamburgerIcon).toBeVisible();
  });

  test("should toggle menu when hamburger icon button is clicked", async ({
    page,
  }) => {
    const menuList = await page.locator("ul");
    expect(menuList).toHaveCount(0);

    await page.click(".hamburger-icon");
    await expect(page.locator("ul")).toBeVisible();

    await page.click(".hamburger-icon");
    await expect(page.locator(".hamburger-icon")).toBeVisible();
  });

  test("should navigate to the correct pathname when menu item is clicked", async ({
    page,
  }) => {
    await page.click(".hamburger-icon");
    await expect(page.locator("ul")).toBeVisible();
    const location1 = { display: "About", pathname: "/about" };
    const location2 = { display: "Settings", pathname: "/settings" };

    await page.click(`ul :has-text("${location1.display}")`);
    await page.waitForURL(`${baseUrl}${location1.pathname}`);
    await expect(page.url()).toBe(`${baseUrl}${location1.pathname}`);

    await page.goBack();
    await page.click(".hamburger-icon");

    await page.click(`ul :has-text("${location2.display}")`);
    await page.waitForURL(`${baseUrl}${location2.pathname}`);
    await expect(page.url()).toBe(`${baseUrl}${location2.pathname}`);
  });
});
