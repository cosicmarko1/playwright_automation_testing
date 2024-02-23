import { Page } from '@playwright/test';

export class UrlEnvironments {
    page: Page;
    baseUrl: string;
    computersUrl: string;
    electronicsUrl: string;
    apparelUrl: string;
    digitalDownloadsUrl: string;
    booksUrl: string;
    jewelryUrl: string;
    giftCardsUrl: string;

    constructor(page: Page) {
        this.page = page;
        this.baseUrl = 'https://demo.nopcommerce.com/';
        this.computersUrl = 'https://demo.nopcommerce.com/computers';
        this.electronicsUrl = 'https://demo.nopcommerce.com/electronics';
        this.apparelUrl = 'https://demo.nopcommerce.com/apparel';
        this.digitalDownloadsUrl = 'https://demo.nopcommerce.com/digital-downloads';
        this.booksUrl = 'https://demo.nopcommerce.com/books';
        this.jewelryUrl = 'https://demo.nopcommerce.com/jewelry';
        this.giftCardsUrl = 'https://demo.nopcommerce.com/gift-cards';
    }
}
