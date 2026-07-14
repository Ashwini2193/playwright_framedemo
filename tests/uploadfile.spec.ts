import {test,expect} from '@playwright/test'

test('upload file',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload')

    await page.setInputFiles("//input[@id='file-upload']",['test-data/test.txt'])
    
    await page.locator("//input[@id='file-submit']").click()

    await expect(page.locator("h3")).toContainText("File Uploaded!")

})