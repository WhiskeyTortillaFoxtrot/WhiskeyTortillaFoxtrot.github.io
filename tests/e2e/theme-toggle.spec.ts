import { test, expect } from '@playwright/test';

test.describe('Theme Toggle', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => localStorage.removeItem('theme'));
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.reload();
  });

  test('starts in dark mode by default', async ({ page }) => {
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });

  test('clicking toggle switches to light mode', async ({ page }) => {
    await page.click('#theme-toggle');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  });

  test('clicking toggle twice returns to dark mode', async ({ page }) => {
    await page.click('#theme-toggle');
    await page.click('#theme-toggle');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });

  test('persists preference across page reload', async ({ page }) => {
    await page.click('#theme-toggle');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
    await page.reload();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  });

  test('persists preference across navigation', async ({ page }) => {
    await page.click('#theme-toggle');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
    await page.click('a[href="/about/"]');
    await page.waitForURL('**/about/');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  });

  test('stores theme in localStorage', async ({ page }) => {
    await page.click('#theme-toggle');
    const stored = await page.evaluate(() => localStorage.getItem('theme'));
    expect(stored).toBe('light');
  });

  test('respects OS prefers-color-scheme: light on first visit', async ({ page }) => {
    await page.evaluate(() => localStorage.removeItem('theme'));
    await page.emulateMedia({ colorScheme: 'light' });
    await page.reload();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  });

  test('toggle button is accessible', async ({ page }) => {
    const toggle = page.locator('#theme-toggle');
    await expect(toggle).toHaveAttribute('aria-label', 'Toggle theme');
    await expect(toggle).toBeVisible();
  });
});
