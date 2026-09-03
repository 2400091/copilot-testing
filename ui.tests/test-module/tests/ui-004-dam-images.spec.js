const { test, expect } = require('@playwright/test')
const {
    assertAllDamImagesLoaded,
    assertNoCriticalA11y,
    openAboutUs
} = require('./helpers/aboutUs')

test('UI-004: all authored images load from DAM-backed paths', async ({ page }, testInfo) => {
    await openAboutUs(page, testInfo.project.name)

    await assertAllDamImagesLoaded(page)
    await expect(page.locator('#about-us-page img')).toHaveCount(6)
    await assertNoCriticalA11y(page)
    await expect(page).toHaveScreenshot('ui-004-dam-images.png', { fullPage: true })
})
