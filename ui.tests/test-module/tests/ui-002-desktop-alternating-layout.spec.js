const { test, expect } = require('@playwright/test')
const {
    assertDesktopAlternatingLayout,
    assertImageSizing,
    assertNoCriticalA11y,
    openAboutUs
} = require('./helpers/aboutUs')

test('UI-002: feature sections alternate text and media alignment on desktop', async ({ page }, testInfo) => {
    await openAboutUs(page, testInfo.project.name)

    await assertDesktopAlternatingLayout(page)
    await assertImageSizing(page)
    await expect(page.locator('#section-why-we-race .cmp-teaser')).toBeVisible()
    await expect(page.locator('#section-oreca .cmp-teaser')).toBeVisible()
    await assertNoCriticalA11y(page)
    await expect(page).toHaveScreenshot('ui-002-desktop-layout.png', { fullPage: true })
})
