import { Page } from '@playwright/test';

export class CredentialsEnvironments {
    page: Page;
    firstName: string;
    lastName: string;
    dayOfBirth: string;
    monthOfBirth: string;
    yearOfBirth: string;
    email: string;
    incorrectEmail: string;
    incorrectEmailFormat: string;
    companyName: string;
    password: string;
    incorrectPassword: string;

    constructor(page: Page) {
        this.page = page;
        this.firstName = 'Test';
        this.lastName = 'User';
        this.dayOfBirth = '1';
        this.monthOfBirth = '1';
        this.yearOfBirth = '2024';
        this.email = 'playwrighttest123@gmail.com';
        this.incorrectEmail = 'playwright@yahoo.com';
        this.incorrectEmailFormat = 'playwright.com';
        this.companyName = 'Test Company';
        this.password = 'PlaywrightTest.123';
        this.incorrectPassword = 'pass1';
    }
}
