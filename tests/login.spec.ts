import { test } from '@playwright/test';
import { HomePage } from '../POMs/homePage';
import { LoginPage } from '../POMs/loginPage';
import { UrlEnvironments } from '../environments/urlEnvironments';
import { CredentialsEnvironments } from '../environments/credentialsEnvironments';

test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    const urlEnvironments = new UrlEnvironments(page);
    await homePage.goto(urlEnvironments.baseUrl);
});

test('Login', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const credentialsEnvironments = new CredentialsEnvironments(page);

    await homePage.gotoLogin();
    await loginPage.login(credentialsEnvironments.email, credentialsEnvironments.password);
    await loginPage.assertLoginIsSuccessful();
});

test('Login - incorrect email', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const credentialsEnvironments = new CredentialsEnvironments(page);

    await homePage.gotoLogin();
    await loginPage.login(credentialsEnvironments.incorrectEmail, credentialsEnvironments.password);
    await loginPage.assertUnsuccessfulLoginMessageIsDisplayed();
});

test('Login - incorrect email format', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const credentialsEnvironments = new CredentialsEnvironments(page);

    await homePage.gotoLogin();
    await loginPage.login(credentialsEnvironments.incorrectEmailFormat, credentialsEnvironments.password);
    await loginPage.assertWrongEmailErrorIsDisplayed();
});

test('Login - incorrect password', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const credentialsEnvironments = new CredentialsEnvironments(page);

    await homePage.gotoLogin();
    await loginPage.login(credentialsEnvironments.email, credentialsEnvironments.incorrectPassword);
    await loginPage.assertUnsuccessfulLoginMessageIsDisplayed();
});

test('Login - no email and password', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await homePage.gotoLogin();
    await loginPage.clickOnLoginButton();
    await loginPage.assertEmailInputFieldErrorIsDisplayed();
});
