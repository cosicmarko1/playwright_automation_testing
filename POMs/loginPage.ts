import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailInputField: Locator;
    readonly passwordInputField: Locator;
    readonly loginButton: Locator
    readonly incorrectUsernameOrPasswordError: Locator;
    readonly emptyEmailInputFieldError: Locator;
    readonly wrongEmailError: Locator;
    readonly myAccountTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInputField = page.getByLabel('Email:');
        this.passwordInputField = page.getByLabel('Password:');
        this.loginButton = page.getByRole('button', { name: 'Log in' });
        this.incorrectUsernameOrPasswordError = page.getByText('Login was unsuccessful.');
        this.emptyEmailInputFieldError = page.getByText('Please enter your email');
        this.wrongEmailError = page.getByText('Wrong email');
        this.myAccountTab = page.getByRole('link', { name: 'My account' }).first();
    }

    async login(emailValue: string, passwordValue: string) {
        await this.emailInputField.fill(emailValue);
        await this.passwordInputField.fill(passwordValue);
        await this.loginButton.click();
    }

    async clickOnLoginButton() {
        await this.loginButton.click();
    }

    async assertLoginIsSuccessful() {
        await expect(this.myAccountTab).toBeVisible();
    }

    async assertEmailInputFieldErrorIsDisplayed() {
        await expect(this.emptyEmailInputFieldError).toBeVisible();
    }

    async assertUnsuccessfulLoginMessageIsDisplayed() {
        await expect(this.incorrectUsernameOrPasswordError).toBeVisible();
    }

    async assertWrongEmailErrorIsDisplayed() {
        await expect(this.wrongEmailError).toBeVisible();
    }
}
