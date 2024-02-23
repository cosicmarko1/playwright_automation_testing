import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly loginButton: Locator;
    readonly searchInputField: Locator;
    readonly searchButton: Locator;
    readonly computersSection: Locator;
    readonly electronicsSection: Locator;
    readonly apparelSection: Locator;
    readonly digitalDownloadsSection: Locator;
    readonly booksSection: Locator;
    readonly jewelrySection: Locator;
    readonly giftCardsSection: Locator;
    readonly successfulSearchMessage: Locator;
    readonly unsuccessfulSearchMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginButton = page.getByRole('link', { name: 'Log in' })
        this.searchInputField = page.getByPlaceholder('Search store');
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.computersSection = page.getByRole('link', { name: 'Computers' });
        this.electronicsSection = page.getByRole('link', { name: 'Electronics' }).first();
        this.apparelSection = page.getByRole('link', { name: 'Apparel' }).first();
        this.digitalDownloadsSection = page.getByRole('link', { name: 'Digital downloads' }).first();
        this.booksSection = page.getByRole('link', { name: 'Books' }).first();
        this.jewelrySection = page.getByRole('link', { name: 'Jewelry' });
        this.giftCardsSection = page.getByRole('link', { name: 'Gift Cards' });
        this.successfulSearchMessage = page.getByText('Sort by');
        this.unsuccessfulSearchMessage = page.getByText('No products were found that matched your criteria.');
    }

    async goto(url: string) {
        await this.page.goto(url);
    }

    async gotoLogin() {
        await this.loginButton.click();
    }

    async gotoComputersSection() {
        await this.computersSection.click();
    }

    async gotoElectronicsSection() {
        await this.electronicsSection.click();
    }

    async gotoApparelSection() {
        await this.apparelSection.click();
    }

    async gotoDigitalDownloadsSection() {
        await this.digitalDownloadsSection.click();
    }

    async gotoBooksSection() {
        await this.booksSection.click();
    }

    async gotoJewelrySection() {
        await this.jewelrySection.click();
    }

    async gotoGiftCardsSection() {
        await this.giftCardsSection.click();
    }

    async assertPageIsOpenedSuccessfully(url: string) {
        await expect(this.page).toHaveURL(url);
    }

    async searchForItem(item: string) {
        await this.searchInputField.fill(item);
        await this.searchButton.click();
    }

    async assertSearchWasSuccessful() {
        await expect(this.successfulSearchMessage).toBeVisible();
    }

    async assertSearchWasUnsuccessful() {
        await expect(this.unsuccessfulSearchMessage).toBeVisible();
    }
}
