import testData from '../../test-data.json';
const { test, expect } = require('../../../fixtures/walker_fixture.js');
const { heal } = require('../../../fixtures/inline_healer.js');

test('generated flow @sanity', async ({ page }) => {
  // 1. Go to login page
  await page.goto(testData.url);
  await page.waitForLoadState('domcontentloaded');

  await heal(page, 'sign in with email button', 'click', null,
    () => page.getByRole('button', { name: 'Sign in with Email', exact: true }));

  await heal(page, 'email field', 'visible', null,
    () => page.locator('input[name="email"][type="email"]'));
  await heal(page, 'email field', 'fill', testData.email,
    () => page.locator('input[name="email"][type="email"]'));

  await heal(page, 'password field', 'visible', null,
    () => page.locator('input[name="password"][type="password"]'));
  await heal(page, 'password field', 'fill', testData.password,
    () => page.locator('input[name="password"][type="password"]'));

  await heal(page, 'sign in with email button', 'click', null,
    () => page.getByRole('button', { name: 'Sign in with Email', exact: true }));

  await heal(page, 'customer button', 'click', null,
    () => page.getByRole('button').filter({ hasText: 'Customer' }).first());

  await heal(page, 'customer groups link', 'click', null,
    () => page.getByRole('link', { name: 'Customer Groups', exact: true }));

  await heal(page, 'new customer group button', 'click', null,
    () => page.getByRole('button', { name: 'New Customer Group', exact: true }));

  await heal(page, 'cancel button', 'click', null,
    () => page.getByRole('button', { name: 'Cancel', exact: true }));

  await heal(page, 'quick search field', 'visible', null,
    () => page.getByPlaceholder('Quick Search'));
  await heal(page, 'quick search field', 'fill', testData.inputText,
    () => page.getByPlaceholder('Quick Search'));

  // Use strict locator for the checkbox in the first row matching the test value
  await heal(page, 'customer group checkbox', 'visible', null,
    () => customerGroupCheckbox);
  await heal(page, 'customer group checkbox', 'check', null,
    () => customerGroupCheckbox);

  await heal(page, 'reset button', 'click', null,
    () => page.getByRole('button', { name: 'Reset', exact: true }));

  await heal(page, 'kishore battula fortis solutions group button', 'click', null,
    () => page.getByRole('button', { name: 'Kishore Battula Fortis Solutions Group', exact: true }));

  await heal(page, 'logout link', 'click', null,
    () => page.getByRole('link', { name: 'Logout', exact: true }));

  await page.waitForLoadState('domcontentloaded');
});