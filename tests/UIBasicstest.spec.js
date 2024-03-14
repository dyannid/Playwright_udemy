const {test, expect} = require('@playwright/test');

test.only('browser context Playwright test', async ({page})=>
{
    const username = page.locator('#username');
    const password = page.locator("[type='password']");
    const singIn = page.locator('#signInBtn');
    const cardTitles = page.locator('.card-body a');
    const dropDown = page.locator('select.form-control');
    const documentLink = page.locator("a[href*='documents-request']");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    // css  type, fill
    
    await dropDown.selectOption("consult");
    await page.locator('.radiotextsty').last().click();
    await page.locator('#okayBtn').click();
    await expect(page.locator('.radiotextsty').last()).toBeChecked();
    //Assertion   
    await page.locator('#terms').click();
    await expect(page.locator('#terms')).toBeChecked();
    await page.locator('#terms').uncheck();
    expect(await page.locator('#terms').isChecked()).toBeFalsy();
    await expect(documentLink).toHaveAttribute('class', "blinkingText");
    await page.pause();

})

test('page Playwright test', async ({page})=>
{
    await page.goto("https://google.com");
    // get the title and assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");

})