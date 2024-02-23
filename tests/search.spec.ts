import { test } from '@playwright/test';
import { HomePage } from '../POMs/homePage';
import { UrlEnvironments } from '../environments/urlEnvironments';
import { SearchEnvironments } from '../environments/searchEnvironments';

test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    const urlEnvironments = new UrlEnvironments(page);
    await homePage.goto(urlEnvironments.baseUrl);
});

test('Search for the valid item', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchEnvironments = new SearchEnvironments(page);

    await homePage.searchForItem(searchEnvironments.validSearchItem);
    await homePage.assertSearchWasSuccessful();
});

test('Search for the invalid item', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchEnvironments = new SearchEnvironments(page);

    await homePage.searchForItem(searchEnvironments.invalidSearchItem);
    await homePage.assertSearchWasUnsuccessful();
});
