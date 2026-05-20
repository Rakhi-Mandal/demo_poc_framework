import testData from '../../test-data.json';
const { test, expect } = require('../../../fixtures/walker_fixture.js');
const { heal } = require('../../../fixtures/inline_healer.js');

test('create product @sanity', async ({ page }) => {
  await page.goto(testData.url);
  await page.waitForLoadState('domcontentloaded');

  await heal(page, 'sign in with email button', 'click', null,
    () => page.getByRole('button', { name: 'Sign in with Email' }));
  await heal(page, 'email field', 'click', null,
    () => page.locator('input[name="email"]'));
  await heal(page, 'email field', 'fill', testData.email,
    () => page.locator('input[name="email"]'));
  await heal(page, 'password field', 'click', null,
    () => page.locator('input[name="password"]'));
  await heal(page, 'password field', 'fill', testData.password,
    () => page.locator('input[name="password"]'));
  await expect(page.locator('input[name="password"]')).toHaveValue(testData.password);
  await heal(page, 'sign in with email button', 'click', null,
    () => page.getByRole('button', { name: 'Sign in with Email' }));

  await page.waitForLoadState('domcontentloaded');
  await heal(page, 'customer button', 'click', null,
    () => page.getByRole('button').filter({ hasText: 'Customer' }));
  await heal(page, 'items button', 'click', null,
    () => page.getByRole('button').filter({ hasText: 'Items' }));
  await heal(page, 'product items link', 'click', null,
    () => page.getByRole('link', { name: 'Product Items' }));

  await page.waitForLoadState('domcontentloaded');
  await heal(page, 'new product item link', 'click', null,
    () => page.getByRole('link', { name: 'New Product Item' }));

  await page.waitForLoadState('domcontentloaded');
  await heal(page, 'select customer button', 'click', null,
    () => page.getByRole('button', { name: 'Select Customer' }));

  await heal(page, 'customer search field', 'click', null,
    () => page.locator('input[name="filters.searchByName"]'));
  await heal(page, 'customer search field', 'fill', testData.customerName,
    () => page.locator('input[name="filters.searchByName"]'));

  await heal(page, 'customer selected checkbox', 'check', null,
    () => page.locator('input[name="customerSelectedId"]').first());
  await heal(page, 'choose customer heading', 'visible', null,
    () => page.getByRole('heading', { name: 'Choose Customer' }));

  await heal(page, 'continue button', 'click', null,
    () => page.getByRole('button', { name: 'Continue' }));

  await heal(page, 'select a product class textbox', 'click', null,
    () => page.getByRole('textbox', { name: 'Select a Product Class' }));
  await heal(page, 'blank label', 'click', null,
    () => page.getByText('Blank Label'));

  await heal(page, 'customer part number textbox', 'click', null,
    () => page.getByRole('textbox', { name: 'Customer Part Number' }));
  await heal(page, 'customer part number textbox', 'fill', testData.customerpat,
    () => page.getByRole('textbox', { name: 'Customer Part Number' }));

  await heal(page, 'brand name textbox', 'click', null,
    () => page.getByRole('textbox', { name: 'Brand Name' }));
  await heal(page, 'brand name textbox', 'fill', testData.brand,
    () => page.getByRole('textbox', { name: 'Brand Name' }));

  await heal(page, 'max od (inches) spinbutton', 'click', null,
    () => page.getByRole('spinbutton', { name: 'Max OD (inches)' }));
  await heal(page, 'max od (inches) spinbutton', 'fill', testData.odnum,
    () => page.getByRole('spinbutton', { name: 'Max OD (inches)' }));

  await heal(page, 'select substrate textbox', 'click', null,
    () => page.getByRole('textbox', { name: 'Select Substrate' }));
  await heal(page, 'aluminum', 'click', null,
    () => page.getByText('ALUMINUM'));

  await heal(page, 'select a coating textbox', 'click', null,
    () => page.getByRole('textbox', { name: 'Select a Coating' }));
  await heal(page, 'cold foil', 'click', null,
    () => page.getByText('Cold Foil'));

  await heal(page, 'select a core diameter textbox', 'click', null,
    () => page.getByRole('textbox', { name: 'Select a Core Diameter' }));
  await heal(page, 'core diameter 1', 'click', null,
    () => page.getByRole('list').getByText('1', { exact: true }));

  await heal(page, 'select an unwind textbox', 'click', null,
    () => page.getByRole('textbox', { name: 'Select an Unwind' }));
  await heal(page, 'unwind print out head first', 'click', null,
    () => page.getByText('- Print out, Head first.'));

  await heal(page, 'select a sales unit textbox', 'click', null,
    () => page.getByRole('textbox', { name: 'Select a Sales Unit' }));
  await heal(page, 'meters', 'click', null,
    () => page.getByText('Meters'));

  await heal(page, 'quantity in sales uom spinbutton', 'click', null,
    () => page.getByRole('spinbutton', { name: 'Quantity in Sales UOM' }));
  await heal(page, 'quantity in sales uom spinbutton', 'fill', testData.uomnum,
    () => page.getByRole('spinbutton', { name: 'Quantity in Sales UOM' }));

  await heal(page, 'description textbox', 'click', null,
    () => page.getByRole('textbox', { name: 'Description' }));
  await heal(page, 'description textbox', 'fill', testData.desc,
    () => page.getByRole('textbox', { name: 'Description' }));

  await heal(page, 'c of c required checkbox', 'check', null,
    () => page.getByRole('checkbox', { name: 'C of C Required' }).first());

  await heal(page, 'select a category textbox', 'click', null,
    () => page.getByRole('textbox', { name: 'Select a category' }));
  await heal(page, 'film', 'click', null,
    () => page.getByText('Film', { exact: true }).first());

  await heal(page, 'create button', 'click', null,
    () => page.getByRole('button', { name: 'Create' }));

  await heal(page, 'ready', 'visible', null,
    () => page.getByText('Ready'));

  await heal(page, 'links button', 'click', null,
    () => page.getByRole('button', { name: 'Links' }));
  await heal(page, 'kishore battula fortis solutions group button', 'click', null,
    () => page.getByRole('button', { name: 'Kishore Battula Fortis Solutions Group' }));
  await heal(page, 'logout link', 'click', null,
    () => page.getByRole('link', { name: 'Logout' }));

  await page.waitForLoadState('domcontentloaded');
});