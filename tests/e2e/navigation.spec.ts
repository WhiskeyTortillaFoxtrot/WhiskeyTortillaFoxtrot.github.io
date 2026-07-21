import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  const links = [
    { label: 'Home', href: '/' },
    { label: 'SeenAt', href: '/seenat/' },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
  ];

  for (const { label, href } of links) {
    test(`navigates to ${label} page via nav link`, async ({ page }) => {
      await page.click(`.navbar__link:has-text("${label}")`);
      await expect(page).toHaveURL(new RegExp(href.replace('/', '\\/') + '?$'));
    });
  }

  test('active link is highlighted on current page', async ({ page }) => {
    const homeLink = page.locator(`.navbar__link:has-text("Home")`);
    await expect(homeLink).toHaveClass(/navbar__link--active/);
  });

  test('home link is active on home page', async ({ page }) => {
    const homeLink = page.locator(`.navbar__link:has-text("Home")`);
    await expect(homeLink).toHaveClass(/navbar__link--active/);
  });

  test('different page marks correct link as active', async ({ page }) => {
    await page.click(`.navbar__link:has-text("About")`);
    await page.waitForURL('**/about/');
    const aboutLink = page.locator(`.navbar__link:has-text("About")`);
    await expect(aboutLink).toHaveClass(/navbar__link--active/);
    const homeLink = page.locator(`.navbar__link:has-text("Home")`);
    await expect(homeLink).not.toHaveClass(/navbar__link--active/);
  });

  test('navigates back to home from another page', async ({ page }) => {
    await page.click(`.navbar__link:has-text("SeenAt")`);
    await page.waitForURL('**/seenat/');
    await page.click(`.navbar__link:has-text("Home")`);
    await expect(page).toHaveURL('/');
  });

  test('navigating to unknown route shows 404 page', async ({ page }) => {
    await page.goto('/this-does-not-exist/');
    await expect(page.locator('body')).toContainText(/404|not found/i);
  });

  test('all nav links are visible in the header', async ({ page }) => {
    const nav = page.locator('.navbar');
    await expect(nav.locator(`.navbar__link:has-text("Home")`)).toBeVisible();
    await expect(nav.locator(`.navbar__link:has-text("SeenAt")`)).toBeVisible();
    await expect(nav.locator(`.navbar__link:has-text("About")`)).toBeVisible();
    await expect(nav.locator(`.navbar__link:has-text("Contact")`)).toBeVisible();
  });
});
