import {test,expect} from '@playwright/test'

test('iframe test',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/iframe')

    const frame=page.frameLocator("#mce_0_ifr")

    await frame.locator('body').click()

    await frame.locator('body').press('Control+A')

    await frame.locator('body').press('Backspace')

    await frame.locator('body').fill('playwright javascript')

    await expect(frame.locator('body')).toContainText('playwright javascript')
})