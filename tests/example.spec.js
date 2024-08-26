// @ts-check 

const { test, expect, request, defineConfig } = require('@playwright/test');

export default defineConfig({
  use: {
  testIdAttribute: 'data-test'
  },
  });



test('Login Successfully', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const usernameInput = page.getByPlaceholder('Username');
  await usernameInput.fill("JamesBrown");

  const passwordInput = page.getByPlaceholder('Password');
  await passwordInput.fill("secret_sauce");
  

  const loginButton = page.getByText("Login")
  await loginButton.click();
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});


test('User locked out', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const usernameInput = page.getByPlaceholder('Username');
  await usernameInput.fill("locked_out_user");

  const passwordInput = page.getByPlaceholder('Password');
  await passwordInput.fill("secret_sauce");
  

  const loginButton = page.getByText("Login")
  await loginButton.click();
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

test('Buying', async ({ page, request }) => {4

  //use 'request' to retreive data from https://jsonplaceholder.typicode.com/users

  await page.goto('https://www.saucedemo.com/');

  const usernameInput = page.getByPlaceholder('Username');
  await usernameInput.fill("standard_user");

  const passwordInput = page.getByPlaceholder('Password');
  await passwordInput.fill("secret_sauce");
  
});