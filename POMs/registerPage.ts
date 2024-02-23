import { expect, Locator, Page } from '@playwright/test';

export class RegisterPage {
    readonly page: Page;
    readonly genderMale: Locator;
    readonly genderFemale: Locator;
    readonly firstNameInputField: Locator;
    readonly lastNameInputField: Locator;
    readonly dayOfBirth: Locator;
    readonly monthOfBirth: Locator;
    readonly yearOfBirth: Locator;
    readonly emailInputField: Locator;
    readonly companyNameInputField: Locator;
    readonly passwordInputField: Locator;
    readonly confirmPasswordInputField: Locator;
    readonly registerButton: Locator;
    readonly successfulRegistrationMessage: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.genderMale = page.locator('span').filter({ hasText: 'Male' }).first();
        this.genderFemale = page.locator('span').filter({ hasText: 'Female' });
        this.firstNameInputField = page.getByLabel('First name:');
        this.lastNameInputField = page.getByLabel('Last name:');
        this.dayOfBirth = page.locator('select[name="DateOfBirthDay"]');
        this.monthOfBirth = page.locator('select[name="DateOfBirthMonth"]');
        this.yearOfBirth = page.locator('select[name="DateOfBirthYear"]');
        this.emailInputField = page.getByLabel('Email:');
        this.companyNameInputField = page.getByLabel('Company name:');
        this.passwordInputField = page.getByLabel('Password:', { exact: true });
        this.confirmPasswordInputField = page.getByLabel('Confirm password:');
        this.registerButton = page.getByRole('button', { name: 'Register' });
        this.successfulRegistrationMessage = page.getByText('Your registration completed');
        this.continueButton = page.getByRole('link', { name: 'Continue' });
    }

    async register(firstName: string, lastName: string, dayOfBirth: string, monthOfBirth: string, yearOfBirth: string, email: string, companyName: string, password: string) {
        await this.genderMale.click();
        await this.firstNameInputField.fill(firstName);
        await this.lastNameInputField.fill(lastName);
        await this.dayOfBirth.click();
        await this.dayOfBirth.selectOption(dayOfBirth);
        await this.monthOfBirth.selectOption(monthOfBirth);
        await this.yearOfBirth.selectOption(yearOfBirth);
        await this.emailInputField.fill(email);
        await this.companyNameInputField.fill(companyName);
        await this.passwordInputField.fill(password);
        await this.confirmPasswordInputField.fill(password);
        await this.registerButton.click();
    }

    async assertRegistrationIsSuccessful() {
        await expect(this.successfulRegistrationMessage).toBeVisible();
        await this.continueButton.click();
    }

}
