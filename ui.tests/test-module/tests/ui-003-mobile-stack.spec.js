const { test, expect } = require('@playwright/test')
const {
    assertImageSizing,
    assertMobileStacking,
    assertNoCriticalA11y,
    getPagePath
} = require('./helpers/aboutUs')

test('UI-003: mobile layout stacks content and images without overlap or clipping', async ({ page }, testInfo) => {
    await assertMobileStacking(page, testInfo.project.name)
    await assertImageSizing(page)

    await expect(page.locator('#about-us-page')).toBeVisible()
    await assertNoCriticalA11y(page)
    await expect(page).toHaveScreenshot('ui-003-mobile-layout.png', { fullPage: true })

    await page.goto(getPagePath(testInfo.project.name), { waitUntil: 'domcontentloaded' })
})
