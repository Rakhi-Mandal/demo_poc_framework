import testData from '../test-data.json';
import { test, expect } from '@playwright/test';

test('generated flow @sanity', async ({ page }) => {
  // 1. Go to login page
  await page.goto(testData.url);
  await page.waitForLoadState('domcontentloaded');

  await expect(page.getByRole('button', { name: 'Sign in with Email', exact: true })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'Sign in with Email', exact: true })).toBeEnabled();
  await page.getByRole('button', { name: 'Sign in with Email', exact: true }).click();

  await expect(page.locator('input[name="email"][type="email"]')).toBeVisible();
  await page.locator('input[name="email"][type="email"]').fill(testData.email);

  await expect(page.locator('input[name="password"][type="password"]')).toBeVisible();
  await page.locator('input[name="password"][type="password"]').fill(testData.password);

  await expect(page.getByRole('button', { name: 'Sign in with Email', exact: true })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'Sign in with Email', exact: true })).toBeEnabled();
  await page.getByRole('button', { name: 'Sign in with Email', exact: true }).click();


  await expect(page.getByRole('link', { name: 'Customer Groups', exact: true })).toBeEnabled();
  await page.getByRole('link', { name: 'Customer Groups', exact: true }).click();

  await expect(page.getByRole('button', { name: 'New Customer Group', exact: true })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'New Customer Group', exact: true })).toBeEnabled();
  await page.getByRole('button', { name: 'New Customer Group', exact: true }).click();

  await expect(page.locator('input[name="customerGroup.name"][type="text"]')).toBeVisible();
  await page.locator('input[name="customerGroup.name"][type="text"]').fill(testData.inputText);

  await expect(page.getByRole('button', { name: 'Continue', exact: true })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'Continue', exact: true })).toBeEnabled();
  await page.getByRole('button', { name: 'Continue', exact: true }).click();

  await expect(page.getByRole('button', { name: 'Yes, add record', exact: true })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'Yes, add record', exact: true })).toBeEnabled();
  await page.getByRole('button', { name: 'Yes, add record', exact: true }).click();

  await expect(page.locator('div').filter({ hasText: /^Go To Record Close$/ }).first()).toBeEnabled();
  await page.locator('div').filter({ hasText: /^Go To Record Close$/ }).first().click();

  await expect(page.getByRole('button', { name: 'Close', exact: true })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'Close', exact: true })).toBeEnabled();
  await page.getByRole('button', { name: 'Close', exact: true }).click();


  // This locator is only available as XPath in trace, so we must use it as last resort.
  // The sequence is click/focus/click/check/input, but collapse to one check.
  await expect(customerGroupCheckbox).toBeVisible();
  await customerGroupCheckbox.click();
  await customerGroupCheckbox.locator('input[type="checkbox"]').check();

  await expect(page.locator('[data-cy="input"]')).toBeVisible();
  await page.locator('[data-cy="input"]').fill(testData.inputText);


  await expect(page.getByRole('button', { name: 'Kishore Battula Fortis Solutions Group', exact: true })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'Kishore Battula Fortis Solutions Group', exact: true })).toBeEnabled();
  await page.getByRole('button', { name: 'Kishore Battula Fortis Solutions Group', exact: true }).click();

  await expect(page.getByRole('link', { name: 'Logout', exact: true })).toBeEnabled();
  await page.getByRole('link', { name: 'Logout', exact: true }).click();

});