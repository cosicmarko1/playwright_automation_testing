import { Page } from '@playwright/test';

export class SearchEnvironments {
    page: Page;
    validSearchItem: string;
    invalidSearchItem: string;

    constructor(page: Page) {
        this.page = page;
        this.validSearchItem = 'Nokia';
        this.invalidSearchItem = 'xyz';
    }
}