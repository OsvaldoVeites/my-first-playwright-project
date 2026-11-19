
import { test, expect } from '@playwright/test';

test('user can log in', async ({ page }) => {
  await page.goto('https://lab.becomeqa.com');

  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByLabel('Username').fill('admin@becomeqa.com');
  await page.getByLabel('Password').fill('testpass123');

  await page.locator('#login-modal-overlay')
    .getByRole('button', { name: 'Login' }).click();

  // Debug
  console.log('URL actual:', page.url());
  console.log('Texto de la página:', await page.locator('body').innerText());

  // Verify successful login
  await expect(page.getByText('Track your Travel')).toBeVisible();
});
