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

  await heal(page, 'customer groups link', 'click', null,
    () => page.getByRole('link', { name: 'Customer Groups', exact: true }));

  await heal(page, 'new customer group button', 'click', null,
    () => page.getByRole('button', { name: 'New Customer Group', exact: true }));

  await heal(page, 'customer group name field', 'visible', null,
    () => page.locator('input[name="customerGroup.name"][type="text"]'));
  await heal(page, 'customer group name field', 'fill', testData.inputText,
    () => page.locator('input[name="customerGroup.name"][type="text"]'));

  await heal(page, 'continue button', 'click', null,
    () => page.getByRole('button', { name: 'Continue', exact: true }));

  await heal(page, 'yes add record button', 'click', null,
    () => page.getByRole('button', { name: 'Yes, add record', exact: true }));

  await heal(page, 'go to record close button', 'click', null,
    () => page.locator('div').filter({ hasText: /^Go To Record Close$/ }).first());

  await heal(page, 'close button', 'click', null,
    () => page.getByRole('button', { name: 'Close', exact: true }));

  // This locator is only available as XPath in trace, so we must use it as last resort.
  // The sequence is click/focus/click/check/input, but collapse to one check.
  await heal(page, 'customer group checkbox', 'visible', null,
    () => customerGroupCheckbox);
  await heal(page, 'customer group checkbox', 'click', null,
    () => customerGroupCheckbox);
  await heal(page, 'customer group checkbox', 'check', null,
    () => customerGroupCheckbox.locator('input[type="checkbox"]'));

  await heal(page, 'input field', 'visible', null,
    () => page.locator('[data-cy="input"]'));
  await heal(page, 'input field', 'fill', testData.inputText,
    () => page.locator('[data-cy="input"]'));

  await heal(page, 'kishore battula fortis solutions group button', 'click', null,
    () => page.getByRole('button', { name: 'Kishore Battula Fortis Solutions Group', exact: true }));

  await heal(page, 'logout link', 'click', null,
    () => page.getByRole('link', { name: 'Logout', exact: true }));

});