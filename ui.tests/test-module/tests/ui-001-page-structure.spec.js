const { test, expect } = require('@playwright/test')
const {
    assertExpectedSectionTitles,
    assertHeroImage,
    assertNoCriticalA11y,
    assertSectionOrder,
    assertSingleH1,
    openAboutUs
} = require('./helpers/aboutUs')

test('UI-001: About Us page renders the hero, H1, and sections in order', async ({ page }, testInfo) => {
    await openAboutUs(page, testInfo.project.name)

    await assertSingleH1(page)
    await assertHeroImage(page)
    await assertExpectedSectionTitles(page)
    await assertSectionOrder(page)

    await expect(page.locator('#about-us-page')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'We Win as One' })).toBeVisible()
    await assertNoCriticalA11y(page)
    await expect(page).toHaveScreenshot('ui-001-page-structure.png', { fullPage: true })
})
