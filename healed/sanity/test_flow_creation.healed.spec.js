import testData from '../../test-data.json';
const { test, expect } = require('../../../fixtures/walker_fixture.js');
const { heal } = require('../../../fixtures/inline_healer.js');

test('generated flow @sanity', async ({ page }) => {
  await page.goto(testData.url);
  await expect(page).toHaveURL(testData.url);
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

  await heal(page, 'remember me checkbox', 'visible', null,
    () => page.locator('#remember_me'));
  await heal(page, 'remember me checkbox', 'check', null,
    () => page.locator('#remember_me'));

  await heal(page, 'sign in with email button', 'click', null,
    () => page.getByRole('button', { name: 'Sign in with Email', exact: true }));
  await page.waitForLoadState('domcontentloaded');

  await heal(page, 'customer button', 'click', null,
    () => page.getByRole('button').filter({ hasText: 'Customer' }));

  await heal(page, 'customers link', 'click', null,
    () => page.getByRole('link', { name: 'Customers', exact: true }));
  await page.waitForLoadState('domcontentloaded');

  await heal(page, 'new customer button', 'click', null,
    () => page.getByRole('button', { name: 'New Customer', exact: true }));
  await page.waitForLoadState('domcontentloaded');

  await heal(page, 'customer name field', 'visible', null,
    () => page.locator('input[name="customer.name"][type="text"]'));
  await heal(page, 'customer name field', 'fill', 'test_ficftgh',
    () => page.locator('input[name="customer.name"][type="text"]'));

  await heal(page, 'market field', 'visible', null,
    () => page.locator('[data-cy="customerCreateSelectMarket"]'));
  await heal(page, 'market field', 'click', null,
    () => page.locator('[data-cy="customerCreateSelectMarket"]'));

  await heal(page, 'automotive option', 'click', null,
    () => page.locator('li[data-label="Automotive"]'));

  await heal(page, 'continue button', 'click', null,
    () => page.getByRole('button', { name: 'Continue', exact: true }));

  await heal(page, 'yes, add record button', 'click', null,
    () => page.getByRole('button', { name: 'Yes, add record', exact: true }));

  await heal(page, 'go to record link', 'click', null,
    () => page.getByRole('link', { name: 'Go to record', exact: true }));
  await page.waitForLoadState('domcontentloaded');

  await heal(page, 'edit mode button', 'click', null,
    () => page.locator('[data-cy="customerEditMode"]'));

  await heal(page, 'select contact button', 'click', null,
    () => page.getByRole('button', { name: 'Select Contact', exact: true }));

  await heal(page, 'continue button', 'click', null,
    () => page.getByRole('button', { name: 'Continue', exact: true }));

  await heal(page, 'website field', 'visible', null,
    () => page.locator('input[name="customer.website"][type="text"]'));
  await heal(page, 'website field', 'fill', 'https:www.amazon.com',
    () => page.locator('input[name="customer.website"][type="text"]'));

  await heal(page, 'duns number field', 'visible', null,
    () => page.locator('input[name="customer.duns_number"][type="text"]'));
  await heal(page, 'duns number field', 'fill', '7',
    () => page.locator('input[name="customer.duns_number"][type="text"]'));

  await heal(page, 'select a tier field', 'click', null,
    () => page.getByRole('textbox', { name: 'Select a Tier', exact: true }));
  await heal(page, 'growth option', 'click', null,
    () => page.locator('li[data-label="Growth"]'));

  await heal(page, 'add additional support button', 'click', null,
    () => page.getByRole('button', { name: 'Add Additional Support', exact: true }));

  await heal(page, 'additional support checkbox', 'visible', null,
    () => page.locator('#checkbox.input.47'));
  await heal(page, 'additional support checkbox', 'check', null,
    () => page.locator('#checkbox.input.47'));

  await heal(page, 'continue button', 'click', null,
    () => page.getByRole('button', { name: 'Continue', exact: true }));

  await heal(page, 'select user button', 'click', null,
    () => page.getByRole('button', { name: 'Select User', exact: true }));

  await heal(page, 'usr0148 row', 'visible', null,
    () => page.getByRole('row', { name: 'USR0148 MATTHEW N BROLL' }));
  await heal(page, 'usr0148 radio', 'check', null,
    () => page.getByRole('row', { name: 'USR0148 MATTHEW N BROLL' }).getByRole('radio'));

  await heal(page, 'continue button', 'click', null,
    () => page.getByRole('button', { name: 'Continue', exact: true }));

  await heal(page, 'select user button', 'click', null,
    () => page.getByRole('button', { name: 'Select User', exact: true }));

  await heal(page, 'usr0047 row', 'visible', null,
    () => page.getByRole('row', { name: 'USR0047 ALICIA E ADAMS CX' }));
  await heal(page, 'usr0047 radio', 'check', null,
    () => page.getByRole('row', { name: 'USR0047 ALICIA E ADAMS CX' }).getByRole('radio'));

  await heal(page, 'continue button', 'click', null,
    () => page.getByRole('button', { name: 'Continue', exact: true }));

  await heal(page, 'customer edit button', 'click', null,
    () => page.locator('[id="customer::edit-' + testData.otp + '"]'));

  await heal(page, 'new address button', 'click', null,
    () => page.getByRole('button', { name: 'New Address', exact: true }));

  await heal(page, 'company field', 'visible', null,
    () => page.locator('input[name="address.company"][type="text"]'));
  await heal(page, 'company field', 'fill', 'test_fio',
    () => page.locator('input[name="address.company"][type="text"]'));

  await heal(page, 'attention field', 'visible', null,
    () => page.locator('input[name="address.attention"][type="text"]'));
  await heal(page, 'attention field', 'fill', 'vghh',
    () => page.locator('input[name="address.attention"][type="text"]'));

  await heal(page, 'address line 1 field', 'visible', null,
    () => page.locator('input[name="address.address_line_one"][type="text"]'));
  await heal(page, 'address line 1 field', 'fill', 'bnbnb',
    () => page.locator('input[name="address.address_line_one"][type="text"]'));

  await heal(page, 'address line 2 field', 'visible', null,
    () => page.locator('input[name="address.address_line_two"][type="text"]'));
  await heal(page, 'address line 2 field', 'fill', 'cvgdhcvhd',
    () => page.locator('input[name="address.address_line_two"][type="text"]'));

  await heal(page, 'city field', 'visible', null,
    () => page.locator('input[name="address.city"][type="text"]'));
  await heal(page, 'city field', 'fill', 'vcgdhcvdhgc',
    () => page.locator('input[name="address.city"][type="text"]'));

  await heal(page, 'state field', 'visible', null,
    () => page.locator('input[name="address.state"][type="text"]'));
  await heal(page, 'state field', 'click', null,
    () => page.locator('input[name="address.state"][type="text"]'));
  await heal(page, 'alabama option', 'click', null,
    () => page.locator('li[data-label="Alabama"]'));

  await heal(page, 'postal code field', 'visible', null,
    () => page.locator('input[name="address.postal_code"][type="text"]'));
  await heal(page, 'postal code field', 'fill', testData.postalCode,
    () => page.locator('input[name="address.postal_code"][type="text"]'));

  await heal(page, 'phone field', 'visible', null,
    () => page.locator('input[name="address.phone_number"][type="phone"]'));
  await heal(page, 'phone field', 'fill', testData.phone2,
    () => page.locator('input[name="address.phone_number"][type="phone"]'));

  await heal(page, 'address label field', 'visible', null,
    () => page.locator('input[name="address.address_label"][type="text"]'));
  await heal(page, 'address label field', 'fill', 'bvchdjchj',
    () => page.locator('input[name="address.address_label"][type="text"]'));

  await heal(page, 'billing address checkbox', 'visible', null,
    () => page.locator('#addressbilling-addressbilling-billing-address'));
  await heal(page, 'billing address checkbox', 'check', null,
    () => page.locator('#addressbilling-addressbilling-billing-address'));

  await heal(page, 'default billing address checkbox', 'visible', null,
    () => page.locator('#addressdefault-billing-addressdefault-billing-default-billing-address'));
  await heal(page, 'default billing address checkbox', 'check', null,
    () => page.locator('#addressdefault-billing-addressdefault-billing-default-billing-address'));

  await heal(page, 'address edit save button', 'click', null,
    () => page.locator('[id="address::edit-save-"]'));

  await heal(page, 'user menu button', 'visible', null,
    () => page.locator('#user-menu-button'));
  await heal(page, 'user menu button', 'click', null,
    () => page.locator('#user-menu-button'));

  await heal(page, 'logout link', 'click', null,
    () => page.getByRole('link', { name: 'Logout', exact: true }));
  await page.waitForLoadState('domcontentloaded');
});