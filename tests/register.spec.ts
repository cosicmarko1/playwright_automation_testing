import { test } from '@playwright/test';
import { HomePage } from '../POMs/homePage';
import { RegisterPage } from '../POMs/registerPage';
import { UrlEnvironments } from '../environments/urlEnvironments';
import { CredentialsEnvironments } from '../environments/credentialsEnvironments';

test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    const urlEnvironments = new UrlEnvironments(page);
    await homePage.goto(urlEnvironments.baseUrl);
});

test('Register', async ({ page }) => {
    const homePage = new HomePage(page);
    const registerPage = new RegisterPage(page);
    const credentialsEnvironments = new CredentialsEnvironments(page);

    await homePage.gotoRegister();
    await registerPage.register(credentialsEnvironments.firstName, credentialsEnvironments.lastName, credentialsEnvironments.dayOfBirth, credentialsEnvironments.monthOfBirth,
        credentialsEnvironments.yearOfBirth, credentialsEnvironments.email, credentialsEnvironments.companyName, credentialsEnvironments.password);
    await registerPage.assertRegistrationIsSuccessful();
});
