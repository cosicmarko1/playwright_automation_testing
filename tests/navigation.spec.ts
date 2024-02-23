import { test } from '@playwright/test';
import { HomePage } from '../POMs/homePage';
import { UrlEnvironments } from '../environments/urlEnvironments';

test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    const urlEnvironments = new UrlEnvironments(page);
    await homePage.goto(urlEnvironments.baseUrl);
});

test('Go to Computers section', async ({ page }) => {
    const homePage = new HomePage(page);
    const urlEnvironments = new UrlEnvironments(page);

    await homePage.gotoComputersSection();
    await homePage.assertPageIsOpenedSuccessfully(urlEnvironments.computersUrl);
});

test('Go to Electronics section', async ({ page }) => {
    const homePage = new HomePage(page);
    const urlEnvironments = new UrlEnvironments(page);

    await homePage.gotoElectronicsSection();
    await homePage.assertPageIsOpenedSuccessfully(urlEnvironments.electronicsUrl);
});

test('Go to Apparel section', async ({ page }) => {
    const homePage = new HomePage(page);
    const urlEnvironments = new UrlEnvironments(page);

    await homePage.gotoApparelSection();
    await homePage.assertPageIsOpenedSuccessfully(urlEnvironments.apparelUrl);
});

test('Go to Digital downloads section', async ({ page }) => {
    const homePage = new HomePage(page);
    const urlEnvironments = new UrlEnvironments(page);

    await homePage.gotoDigitalDownloadsSection();
    await homePage.assertPageIsOpenedSuccessfully(urlEnvironments.digitalDownloadsUrl);
});

test('Go to Books section', async ({ page }) => {
    const homePage = new HomePage(page);
    const urlEnvironments = new UrlEnvironments(page);

    await homePage.gotoBooksSection();
    await homePage.assertPageIsOpenedSuccessfully(urlEnvironments.booksUrl);
});

test('Go to Jewelry section', async ({ page }) => {
    const homePage = new HomePage(page);
    const urlEnvironments = new UrlEnvironments(page);

    await homePage.gotoJewelrySection();
    await homePage.assertPageIsOpenedSuccessfully(urlEnvironments.jewelryUrl);
});

test('Go to Gift cards section', async ({ page }) => {
    const homePage = new HomePage(page);
    const urlEnvironments = new UrlEnvironments(page);

    await homePage.gotoGiftCardsSection();
    await homePage.assertPageIsOpenedSuccessfully(urlEnvironments.giftCardsUrl);
});
