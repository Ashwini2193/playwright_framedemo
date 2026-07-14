import {test,expect} from '@playwright/test'

test('download files',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/download')

    const downloadPromise=page.waitForEvent('download')
    
    await page.click("//a[text()='sample.xlsx']")

    const download=await downloadPromise;

    await download.saveAs('./downloads/sample.xlsx')
})