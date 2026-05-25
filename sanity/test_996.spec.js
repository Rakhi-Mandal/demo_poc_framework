import testData from '../test-data.json';
import { test, expect } from '@playwright/test';

test('generated flow @sanity', async ({ page }) => {
  // 1. Go to login page
  await page.goto(testData.url);
  await page.waitForLoadState('domcontentloaded');

  await expect(page.getByRole('button', { name: 'Sign in with Email', exact: true })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'Sign in with Email', exact: true })).toBeEnabled();
  await page.getByRole('button', { name: 'Sign in with Email', exact: true }).click();

  const emailInput = page.locator('input[name="email"][type="email"]');
  await expect(emailInput).toBeVisible();
  await emailInput.fill(testData.email);

  const passwordInput = page.locator('input[name="password"][type="password"]');
  await expect(passwordInput).toBeVisible();
  await passwordInput.fill(testData.password);

  await expect(page.getByRole('button', { name: 'Sign in with Email', exact: true })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'Sign in with Email', exact: true })).toBeEnabled();
  await page.getByRole('button', { name: 'Sign in with Email', exact: true }).click();

  await expect(page.getByRole('button').filter({ hasText: 'Customer' }).first()).toBeEnabled();
  await page.getByRole('button').filter({ hasText: 'Customer' }).first().click();

  await expect(page.getByRole('link', { name: 'Customer Groups', exact: true })).toBeEnabled();
  await page.getByRole('link', { name: 'Customer Groups', exact: true }).click();


  await expect(page.getByRole('button', { name: 'New Customer Group', exact: true })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'New Customer Group', exact: true })).toBeEnabled();
  await page.getByRole('button', { name: 'New Customer Group', exact: true }).click();

  await expect(page.getByRole('button', { name: 'Cancel', exact: true })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'Cancel', exact: true })).toBeEnabled();
  await page.getByRole('button', { name: 'Cancel', exact: true }).click();

  const quickSearchInput = page.getByPlaceholder('Quick Search');
  await expect(quickSearchInput).toBeVisible();
  await quickSearchInput.fill(testData.inputText);

  // Use strict locator for the checkbox in the first row matching the test value
  await expect(customerGroupCheckbox).toBeVisible();
  await customerGroupCheckbox.check();

  await expect(page.getByRole('button', { name: 'Reset', exact: true })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'Reset', exact: true })).toBeEnabled();
  await page.getByRole('button', { name: 'Reset', exact: true }).click();


  await expect(page.getByRole('button', { name: 'Kishore Battula Fortis Solutions Group', exact: true })).toBeEnabled();
  await page.getByRole('button', { name: 'Kishore Battula Fortis Solutions Group', exact: true }).click();

  await expect(page.getByRole('link', { name: 'Logout', exact: true })).toBeEnabled();
  await page.getByRole('link', { name: 'Logout', exact: true }).click();

  await page.waitForLoadState('domcontentloaded');
});