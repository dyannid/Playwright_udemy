const {test, expect} = require('@playwright/test');

test('browser context Playwright test', async ({browser})=>
{
    // playwright
    // Step1 -- open browser
    // step2 enter
    // step3 - click
    // Asysnchrone means there will try to run all steps
    // at the same time. This is why we are using await!!!!!1

    const context = await browser.newContext();
    const page = await context.newPage();

    const username = page.locator('#username');
    const password = page.locator("[type='password']");
    const singIn = page.locator('#signInBtn');
    const cardTitles = page.locator('.card-body a');

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    // css  type, fill
    await username.fill('learning');
    await password.fill('learning');
    await page.locator('#signInBtn').click();
    // in other Tools you have to ask the driver to wait until locator is 
    // shown. but in Playwright it will wait automatically!!!
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
    //console.log(await page.locator("[style*='block']").textContent());

    await username.fill("");
    await password.clear();
    await username.fill("rahulshettyacademy");
    await password.fill("learning");
    await singIn.click();
    await expect(page).toHaveTitle("ProtoCommerce");

    // There are 4 elements hier. How to get the first element
    console.log('yannide');
    //console.log(await page.locator('.card-body a').nth(0).textContent());
    //console.log(await page.locator('.card-body a').first().textContent());
    //await page.waitForLoadState('networkidle');   // To wait dynimacally
    await page.locator(".card-body b").first().waitFor();
    const allTitle = await cardTitles.allTextContents();
    console.log('yannide');
    console.log(allTitle);

})

test('page Playwright test', async ({page})=>
{
    await page.goto("https://google.com");
    // get the title and assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");

})

