import testData from '../test-data.json';
import { test, expect } from '@playwright/test';

test('generated flow @regression', async ({ page }) => {
  await page.goto(testData.url);
  await page.waitForLoadState('domcontentloaded');

  await expect(page.getByRole('button', { name: 'Sign in with Email' })).toBeEnabled();
  await page.getByRole('button', { name: 'Sign in with Email' }).click();

  const emailInput = page.locator('input[name="email"][type="email"]');
  await expect(emailInput).toBeVisible();
  await expect(emailInput).toBeEditable();
  await emailInput.fill(testData.email);

  const passwordInput = page.locator('input[name="password"][type="password"]');
  await expect(passwordInput).toBeVisible();
  await expect(passwordInput).toBeEditable();
  await passwordInput.fill(testData.password);

  const rememberMeCheckbox = page.locator('#remember_me');
  await expect(rememberMeCheckbox).toBeVisible();
  await expect(rememberMeCheckbox).toBeEnabled();
  await rememberMeCheckbox.check();

  await expect(page.getByRole('button', { name: 'Sign in with Email' })).toBeEnabled();
  await page.getByRole('button', { name: 'Sign in with Email' }).click();
  await page.waitForLoadState('domcontentloaded');

  await expect(page.getByRole('button').filter({ hasText: 'Customer' })).toBeEnabled();
  await page.getByRole('button').filter({ hasText: 'Customer' }).click();

  await expect(page.getByRole('link', { name: 'Leads/Prospects' })).toBeEnabled();
  await page.getByRole('link', { name: 'Leads/Prospects' }).click();
  await page.waitForLoadState('domcontentloaded');

  await expect(page.getByRole('button', { name: 'New Lead' })).toBeEnabled();
  await page.getByRole('button', { name: 'New Lead' }).click();

  const companyNameInput = page.locator('input[name="lead.name"][type="text"]');
  await expect(companyNameInput).toBeVisible();
  await expect(companyNameInput).toBeEditable();
  await companyNameInput.fill(testData.leadCompanyName);

  const firstNameInput = page.locator('input[name="contact.first_name"][type="text"]');
  await expect(firstNameInput).toBeVisible();
  await expect(firstNameInput).toBeEditable();
  await firstNameInput.fill(testData.leadFirstName);

  const lastNameInput = page.locator('input[name="contact.last_name"][type="text"]');
  await expect(lastNameInput).toBeVisible();
  await expect(lastNameInput).toBeEditable();
  await lastNameInput.fill(testData.leadLastName);

  const workPhoneInput = page.locator('input[name="contact.work_phone"][type="phone"]');
  await expect(workPhoneInput).toBeVisible();
  await expect(workPhoneInput).toBeEditable();
  await workPhoneInput.fill(testData.customerPhone);

  const mobilePhoneInput = page.locator('input[name="contact.mobile_phone"][type="phone-no-ext"]');
  await expect(mobilePhoneInput).toBeVisible();
  await expect(mobilePhoneInput).toBeEditable();
  await mobilePhoneInput.fill(testData.phone);

  const faxInput = page.locator('input[name="contact.fax"][type="phone"]');
  await expect(faxInput).toBeVisible();
  await expect(faxInput).toBeEditable();
  await faxInput.fill(testData.leadFax);

  const contactEmailInput = page.locator('input[name="lead.email"][type="text"]');
  await expect(contactEmailInput).toBeVisible();
  await expect(contactEmailInput).toBeEditable();
  await contactEmailInput.fill(testData.leadEmail);

  const websiteInput = page.locator('input[name="lead.website"][type="text"]');
  await expect(websiteInput).toBeVisible();
  await expect(websiteInput).toBeEditable();
  await websiteInput.fill(testData.leadWebsite);

  const marketInput = page.locator('input[name="lead.market_id"][type="text"]');
  await marketInput.scrollIntoViewIfNeeded();
  await expect(marketInput).toBeVisible();
  await expect(marketInput).toBeEnabled();
  await marketInput.click();
  await expect(page.getByText('Automotive')).toBeVisible();
  await page.getByText('Automotive').click();

  await expect(page.getByRole('button', { name: 'Next', exact: true })).toBeEnabled();
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await page.waitForLoadState('domcontentloaded');

  await expect(page.getByRole('button').filter({ hasText: 'Customer' })).toBeEnabled();
  await page.getByRole('button').filter({ hasText: 'Customer' }).click();

  await expect(page.getByRole('link', { name: 'Opportunities' })).toBeEnabled();
  await page.getByRole('link', { name: 'Opportunities' }).click();
  await page.waitForLoadState('domcontentloaded');

  await expect(page.getByRole('button', { name: 'New Opportunity' })).toBeEnabled();
  await page.getByRole('button', { name: 'New Opportunity' }).click();

  const projectNameInput = page.locator('input[name="project.name"][type="text"]');
  await expect(projectNameInput).toBeVisible();
  await expect(projectNameInput).toBeEditable();
  await projectNameInput.fill(testData.opportunityName);

  const projectDescriptionInput = page.locator('textarea[name="project.description"]');
  await expect(projectDescriptionInput).toBeVisible();
  await expect(projectDescriptionInput).toBeEditable();
  await projectDescriptionInput.fill(testData.projectDescription);

  await expect(page.getByRole('button', { name: 'Select Customer' })).toBeEnabled();
  await page.getByRole('button', { name: 'Select Customer' }).click();

  const customerSearchInput = page.locator('input[name="filters.searchByName"][type="text"]');
  await expect(customerSearchInput).toBeVisible();
  await expect(customerSearchInput).toBeEditable();
  await customerSearchInput.fill(testData.customerSearchNameOpportunity);
  await customerSearchInput.press('Enter');
  await page.waitForTimeout(3000);

  await page.getByRole('radio').check();
  await expect(page.getByRole('button', { name: 'Continue' })).toBeEnabled();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByRole('button', { name: 'Next', exact: true })).toBeEnabled();
  await page.getByRole('button', { name: 'Next', exact: true }).click();
});
