const { test, expect } = require('@playwright/test')
const {
    assertNoCriticalA11y,
    assertThemeScoped,
    openAboutUs
} = require('./helpers/aboutUs')

test('UI-005: dark theme and red accents are scoped to the About Us page body', async ({ page }, testInfo) => {
    await openAboutUs(page, testInfo.project.name)

    await assertThemeScoped(page, testInfo.project.name)
    await page.goto(testInfo.project.name.indexOf('author-') === 0
        ? '/content/Copilot-test/us/en/about-us.html?wcmmode=disabled'
        : '/content/Copilot-test/us/en/about-us.html', { waitUntil: 'domcontentloaded' })

    await expect(page.locator('#section-win-one .cmp-title__text')).toHaveCSS('color', 'rgb(244, 247, 250)')
    await assertNoCriticalA11y(page)
    await expect(page).toHaveScreenshot('ui-005-scoped-theme.png', { fullPage: true })
})
