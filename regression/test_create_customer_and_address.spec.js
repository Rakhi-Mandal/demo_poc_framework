import testData from '../test-data.json';
import { test, expect } from '@playwright/test';

test('create customer add address and edit details', async ({ page }) => {
  // 1. Go to login page
  await page.goto(testData.url);
  await page.waitForLoadState('domcontentloaded');

  const signInWithEmailButton = page.getByRole('button', { name: 'Sign in with Email', exact: true });
  await expect(signInWithEmailButton).toBeEnabled();
  await signInWithEmailButton.click();

  const emailInput = page.locator('input[name="email"][type="email"]');
  await expect(emailInput).toBeVisible();
  await expect(emailInput).toBeEditable();
  await emailInput.fill(testData.email);

  const passwordInput = page.locator('input[name="password"][type="password"]');
  await expect(passwordInput).toBeVisible();
  await expect(passwordInput).toBeEditable();
  await passwordInput.fill(testData.password);

  const signInConfirmButton = page.getByRole('button', { name: 'Sign in with Email', exact: true });
  await expect(signInConfirmButton).toBeEnabled();
  await signInConfirmButton.click();

  await page.waitForLoadState('domcontentloaded');

  await expect(page.getByRole('button').filter({ hasText: "Customer" })).toBeEnabled();
  await page.getByRole('button').filter({ hasText: "Customer" }).click();

  const customersLink = page.getByRole('link', { name: 'Customers', exact: true });
  await expect(customersLink).toBeVisible();
  await expect(customersLink).toBeEnabled();
  await customersLink.click();

  await page.waitForLoadState('domcontentloaded');

  const newCustomerButton = page.getByRole('button', { name: 'New Customer', exact: true });
  await expect(newCustomerButton).toBeEnabled();
  await newCustomerButton.click();

  const customerNameInput = page.locator('input[name="customer.name"][type="text"]');
  await expect(customerNameInput).toBeVisible();
  await expect(customerNameInput).toBeEditable();
  await customerNameInput.fill(testData.customerNameContact2);

  const marketInput = page.locator('[data-cy="customerCreateSelectMarket"]');
  await expect(marketInput).toBeVisible();
  await expect(marketInput).toBeEnabled();
  await marketInput.click();

  const automotiveOption = page.locator('li[data-label="Automotive"]');
  await expect(automotiveOption).toBeVisible();
  await expect(automotiveOption).toBeEnabled();
  await automotiveOption.click();

  const continueButton = page.getByRole('button', { name: 'Continue', exact: true });
  await expect(continueButton).toBeEnabled();
  await continueButton.click();

  const yesAddRecordButton = page.getByRole('button', { name: 'Yes, add record', exact: true });
  await expect(yesAddRecordButton).toBeEnabled();
  await yesAddRecordButton.click();

  const goToRecordLink = page.getByRole('link', { name: 'Go to record', exact: true });
  await expect(goToRecordLink).toBeVisible();
  await expect(goToRecordLink).toBeEnabled();
  await goToRecordLink.click();

  await page.waitForLoadState('domcontentloaded');

  await expect(page.locator('[data-cy="customerEditMode"]')).toBeEnabled();
  await page.locator('[data-cy="customerEditMode"]').click();
  await page.waitForTimeout(3000);
  const selectContactButton = page.getByRole('button', { name: 'Select Contact', exact: true });
  await expect(selectContactButton).toBeEnabled();
  await selectContactButton.click();

  const davidBognarRow = page.getByRole('row', { name: /David Bognar Kohli/i });
  const davidBognarRadio = davidBognarRow.getByRole('radio');

  await expect(davidBognarRadio).toBeVisible();
  await davidBognarRadio.check();
  await expect(davidBognarRadio).toBeChecked();
  await page.waitForTimeout(3000);
  await page.waitForLoadState('domcontentloaded');
  const continueButton2 = page.getByRole('button', { name: 'Continue', exact: true });
  await expect(continueButton2).toBeEnabled();
  await continueButton2.click();
  await page.waitForTimeout(3000);
  await page.waitForLoadState('domcontentloaded');

  const websiteInput = page.locator('input[name="customer.website"][type="text"]');
  await expect(websiteInput).toBeVisible();
  await expect(websiteInput).toBeEditable();
  await websiteInput.fill(testData.customerWebsite);
   const dunsInput = page.locator('input[name="customer.duns_number"][type="text"]');
  await expect(dunsInput).toBeVisible();
  await expect(dunsInput).toBeEditable();
  await dunsInput.fill(testData.customerDunsNumber);

  const tierInput = page.getByPlaceholder('Select a Tier').first();
  await expect(tierInput).toBeVisible();
  await expect(tierInput).toBeEnabled();
  await tierInput.click();

  const communityOption = page.locator('li[data-label="Community"]');
  await expect(communityOption).toBeVisible();
  await expect(communityOption).toBeEnabled();
  await communityOption.click();
  await page.waitForTimeout(5000);

 const selectUserButton1 = page.getByRole('button', { name: 'Select User', exact: true }).nth(0);
  await expect(selectUserButton1).toBeEnabled();
  await selectUserButton1.click();

  const matthewRow = page.getByRole('row', { name: /USR0148 MATTHEW N BROLL/i });
  const matthewRadio = matthewRow.getByRole('radio');

  await expect(matthewRadio).toBeVisible();
  await matthewRadio.check();
  await expect(matthewRadio).toBeChecked();

  const continueButton4 = page.getByRole('button', { name: 'Continue', exact: true });
  await expect(continueButton4).toBeEnabled();
  await continueButton4.click();

  const selectUserButton2 = page.getByRole('button', { name: 'Select User', exact: true });
  await expect(selectUserButton2).toBeEnabled();
  await selectUserButton2.click();

  const altheaRow = page.getByRole('row', { name: /USR0048 ALTHEA G ADKINS CX/i });
  const altheaRadio = altheaRow.getByRole('radio');

  await expect(altheaRadio).toBeVisible();
  await altheaRadio.check();
  await expect(altheaRadio).toBeChecked();

  const continueButton5 = page.getByRole('button', { name: 'Continue', exact: true });
  await expect(continueButton5).toBeEnabled();
  await continueButton5.click();

  const customerEditSaveButton = page.locator('[data-cy="customerEditSave"]');
  await expect(customerEditSaveButton).toBeEnabled();
  await customerEditSaveButton.click();
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(3000);
  
  const newAddressButton = page.getByRole('button', { name: 'New Address', exact: true }).nth(1);
  await expect(newAddressButton).toBeEnabled();
  await newAddressButton.click();

  await page.waitForLoadState('domcontentloaded');

  const companyInput = page.locator('input[name="address.company"][type="text"]');
  await expect(companyInput).toBeVisible();
  await expect(companyInput).toBeEditable();
  await companyInput.fill(testData.customerCompany);

  const attentionInput = page.locator('input[name="address.attention"][type="text"]');
  await expect(attentionInput).toBeVisible();
  await expect(attentionInput).toBeEditable();
  await attentionInput.fill(testData.customerAttention);

  const addressLineOneInput = page.locator('input[name="address.address_line_one"][type="text"]');
  await expect(addressLineOneInput).toBeVisible();
  await expect(addressLineOneInput).toBeEditable();
  await addressLineOneInput.fill(testData.customerAddressLine1);

  const addressLineTwoInput = page.locator('input[name="address.address_line_two"][type="text"]');
  await expect(addressLineTwoInput).toBeVisible();
  await expect(addressLineTwoInput).toBeEditable();
  await addressLineTwoInput.fill(testData.customerAddressLine2);

  const cityInput = page.locator('input[name="address.city"][type="text"]');
  await expect(cityInput).toBeVisible();
  await expect(cityInput).toBeEditable();
  await cityInput.fill(testData.customerCity);

  const stateInput = page.getByPlaceholder('Select a State/Province').first();
  await expect(stateInput).toBeVisible();
  await expect(stateInput).toBeEnabled();
  await stateInput.click();

  const alabamaOption = page.locator('li[data-label="Alabama"]');
  await expect(alabamaOption).toBeVisible();
  await expect(alabamaOption).toBeEnabled();
  await alabamaOption.click();

  const postalCodeInput = page.locator('input[name="address.postal_code"][type="text"]');
  await expect(postalCodeInput).toBeVisible();
  await expect(postalCodeInput).toBeEditable();
  await postalCodeInput.fill(testData.customerPostalCode);

  const phoneInput = page.locator('input[name="address.phone_number"][type="phone"]');
  await expect(phoneInput).toBeVisible();
  await expect(phoneInput).toBeEditable();
  await phoneInput.fill(testData.customerPhone);

  const addressLabelInput = page.locator('input[name="address.address_label"][type="text"]');
  await expect(addressLabelInput).toBeVisible();
  await expect(addressLabelInput).toBeEditable();
  await addressLabelInput.fill(testData.customerAddressLabel);

  const billingAddressCheckbox = page.locator('#addressbilling-addressbilling-billing-address');
  await expect(billingAddressCheckbox).toBeVisible();
  await expect(billingAddressCheckbox).toBeEnabled();
  await billingAddressCheckbox.check();

  await expect(billingAddressCheckbox).toBeChecked();

  const defaultBillingCheckbox = page.locator('#addressdefault-billing-addressdefault-billing-default-billing-address');
  await expect(defaultBillingCheckbox).toBeVisible();
  await expect(defaultBillingCheckbox).toBeEnabled();
  await defaultBillingCheckbox.check();

  await expect(defaultBillingCheckbox).toBeChecked();

  await expect(page.getByRole('button').first()).toBeEnabled();
  await page.getByRole('button').first().click();

  const saveAddressButton = page.locator('[id="address::edit-save-"]');
  await expect(saveAddressButton).toBeEnabled();
  await saveAddressButton.scrollIntoViewIfNeeded();
  await saveAddressButton.click({ force: true });

  await page.waitForLoadState('domcontentloaded');
  
});



































































































