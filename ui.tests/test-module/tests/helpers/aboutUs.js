/* global document, getComputedStyle, window */
const { expect } = require('@playwright/test')
const AxeBuilder = require('@axe-core/playwright').default

const PAGE_PATH = '/content/Copilot-test/us/en/about-us.html'
const CONTROL_PAGE_PATH = '/content/Copilot-test/us/en.html'
const DAM_PREFIX = '/content/dam/Copilot-test/about-us/'
const EXPECTED_THEME = {
    accent: 'rgb(214, 66, 74)',
    lightText: 'rgb(244, 247, 250)',
    panel: 'rgb(26, 34, 48)',
    surface: 'rgb(16, 21, 29)'
}

const SECTION_SEQUENCE = [
    { id: 'about-us-hero' },
    { id: 'section-we-stop', title: 'We Stop Breaches', image: 'we-stop-breaches.jpg', layout: 'row' },
    { id: 'section-why-we-race', title: 'Why We Race', image: 'why-we-race.jpg', layout: 'row-reverse' },
    { id: 'section-apr', title: 'CrowdStrike Racing by APR', image: 'IMSAROLEX26_01_23_26_111222_FH_8052.jpg', layout: 'row' },
    { id: 'section-oreca', title: 'No. 4 CrowdStrike Oreca 07', image: 'IMSA_D24_26_01_25_001036_JP35529.jpg', layout: 'row-reverse' },
    { id: 'section-globe', title: 'Protection Around the Globe', image: 'Falcon-2.jpg', layout: 'row' },
    { id: 'section-win-one', title: 'We Win as One' }
]

function isAuthorProject(projectName) {
    return projectName.indexOf('author-') === 0
}

function getPagePath(projectName) {
    return isAuthorProject(projectName) ? `${PAGE_PATH}?wcmmode=disabled` : PAGE_PATH
}

function getSectionLocator(page, id) {
    return page.locator(`#${id}`).first()
}

async function openAboutUs(page, projectName) {
    await page.goto(getPagePath(projectName), { waitUntil: 'domcontentloaded' })
}

async function assertSingleH1(page) {
    await expect(page.locator('h1')).toHaveCount(1)
    await expect(page.getByRole('heading', { level: 1, name: 'About Us' })).toBeVisible()
}

async function assertSectionOrder(page) {
    const tops = []

    for (const section of SECTION_SEQUENCE) {
        const locator = getSectionLocator(page, section.id)
        await expect(locator, `Expected section id ${section.id} to be visible.`).toBeVisible()
        const box = await locator.boundingBox()
        expect(box, `Unable to measure section ${section.id}.`).not.toBeNull()
        tops.push({ id: section.id, y: box.y })
    }

    for (let index = 1; index < tops.length; index += 1) {
        expect(
            tops[index].y,
            `${tops[index].id} should render after ${tops[index - 1].id}.`
        ).toBeGreaterThan(tops[index - 1].y)
    }
}

async function assertExpectedSectionTitles(page) {
    for (const section of SECTION_SEQUENCE.filter((item) => item.title)) {
        await expect(getSectionLocator(page, section.id).getByRole('heading', { name: section.title })).toBeVisible()
    }
}

async function assertHeroImage(page) {
    const hero = getSectionLocator(page, 'about-us-hero')
    const heroImage = hero.locator('img').first()
    await expect(heroImage).toBeVisible()
    await expect(heroImage).toHaveAttribute('src', /D_ABOUTUS_Hero_Interior\.jpg/i)
    await expect(heroImage).toHaveAttribute('alt', /.+/)
    expect(await heroImage.evaluate((image) => image.naturalWidth)).toBeGreaterThan(0)
}

async function assertSectionImageLoaded(page, id, fileName) {
    const section = getSectionLocator(page, id)
    const image = section.locator('img').first()

    await expect(image).toBeVisible()
    await expect(image).toHaveAttribute('src', new RegExp(`${DAM_PREFIX.replace(/\//g, '\\/')}.*${fileName.replace(/\./g, '\\.')}`, 'i'))
    await expect(image).toHaveAttribute('alt', /.+/)

    const naturalWidth = await image.evaluate((element) => element.naturalWidth)
    expect(naturalWidth, `${id} image did not load.`).toBeGreaterThan(0)
}

async function assertAllDamImagesLoaded(page) {
    await assertHeroImage(page)

    for (const section of SECTION_SEQUENCE.filter((item) => item.image)) {
        await assertSectionImageLoaded(page, section.id, section.image)
    }
}

async function assertDesktopAlternatingLayout(page) {
    for (const section of SECTION_SEQUENCE.filter((item) => item.layout)) {
        const teaser = getSectionLocator(page, section.id).locator('.cmp-teaser').first()
        const image = teaser.locator('.cmp-teaser__image').first()
        const content = teaser.locator('.cmp-teaser__content').first()

        await expect(teaser).toBeVisible()
        await expect(image).toBeVisible()
        await expect(content).toBeVisible()

        const display = await teaser.evaluate((element) => getComputedStyle(element).display)
        expect(['flex', 'grid']).toContain(display)

        const flexDirection = await teaser.evaluate((element) => getComputedStyle(element).flexDirection)
        expect(flexDirection).toBe(section.layout)

        const imageBox = await image.boundingBox()
        const contentBox = await content.boundingBox()

        expect(imageBox).not.toBeNull()
        expect(contentBox).not.toBeNull()
        expect(Math.abs(imageBox.y - contentBox.y)).toBeLessThan(80)

        if (section.layout === 'row') {
            expect(imageBox.x, `${section.id} should render image before copy on desktop.`).toBeLessThan(contentBox.x)
        } else {
            expect(imageBox.x, `${section.id} should render image after copy on desktop.`).toBeGreaterThan(contentBox.x)
        }
    }
}

async function assertMobileStacking(page, projectName) {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto(getPagePath(projectName), { waitUntil: 'domcontentloaded' })

    for (const section of SECTION_SEQUENCE.filter((item) => item.layout)) {
        const teaser = getSectionLocator(page, section.id).locator('.cmp-teaser').first()
        const image = teaser.locator('.cmp-teaser__image').first()
        const content = teaser.locator('.cmp-teaser__content').first()

        const flexDirection = await teaser.evaluate((element) => getComputedStyle(element).flexDirection)
        expect(flexDirection).toBe('column')

        const imageBox = await image.boundingBox()
        const contentBox = await content.boundingBox()

        expect(imageBox).not.toBeNull()
        expect(contentBox).not.toBeNull()
        expect(imageBox.y, `${section.id} image should appear above the copy on mobile.`).toBeLessThan(contentBox.y)
        expect(Math.abs(imageBox.x - contentBox.x)).toBeLessThan(24)
        expect(imageBox.width).toBeLessThanOrEqual(390)
        expect(contentBox.width).toBeLessThanOrEqual(390)
    }

    const pageFitsViewport = await page.evaluate(() =>
        document.documentElement.scrollWidth <= window.innerWidth + 1
    )

    expect(pageFitsViewport, 'Mobile layout should not overflow horizontally.').toBeTruthy()
}

async function assertImageSizing(page) {
    const images = page.locator('#about-us-page img')
    const count = await images.count()

    for (let index = 0; index < count; index += 1) {
        const overflow = await images.nth(index).evaluate((image) => {
            const wrapper = image.closest('.cmp-image, [class*="__image"]') || image.parentElement
            return image.getBoundingClientRect().width - wrapper.getBoundingClientRect().width
        })

        expect(overflow, `Image ${index} should stay within its wrapper.`).toBeLessThanOrEqual(1)
    }
}

async function assertThemeScoped(page, projectName) {
    const aboutUsPage = page.locator('#about-us-page')
    await expect(aboutUsPage).toBeVisible()

    const bodyBackground = await aboutUsPage.evaluate((element) => getComputedStyle(element).backgroundColor)
    expect(bodyBackground).toBe(EXPECTED_THEME.surface)

    const teaser = getSectionLocator(page, 'section-we-stop').locator('.cmp-teaser').first()
    const teaserBorderColor = await teaser.evaluate((element) => getComputedStyle(element).borderTopColor)
    const teaserBackground = await teaser.evaluate((element) => getComputedStyle(element).backgroundColor)
    const teaserTitleColor = await teaser.locator('.cmp-teaser__title').evaluate((element) => getComputedStyle(element).color)

    expect(teaserBorderColor).toBe(EXPECTED_THEME.accent)
    expect(teaserBackground).toBe(EXPECTED_THEME.panel)
    expect(teaserTitleColor).toBe(EXPECTED_THEME.lightText)

    await page.goto(isAuthorProject(projectName) ? `${CONTROL_PAGE_PATH}?wcmmode=disabled` : CONTROL_PAGE_PATH, {
        waitUntil: 'domcontentloaded'
    })

    const bodyHasScopedTheme = await page.locator('#about-us-page').count()
    expect(bodyHasScopedTheme, 'Scoped About Us styles should not bleed onto the locale root page.').toBe(0)
}

async function assertNoCriticalA11y(page) {
    const results = await new AxeBuilder({ page }).analyze()
    const blockingViolations = results.violations.filter((violation) =>
        ['critical', 'serious'].indexOf(violation.impact) >= 0
    )

    expect(blockingViolations, JSON.stringify(blockingViolations, null, 2)).toEqual([])
}

module.exports = {
    SECTION_SEQUENCE,
    assertAllDamImagesLoaded,
    assertDesktopAlternatingLayout,
    assertExpectedSectionTitles,
    assertHeroImage,
    assertImageSizing,
    assertMobileStacking,
    assertNoCriticalA11y,
    assertSectionOrder,
    assertSingleH1,
    assertThemeScoped,
    getSectionLocator,
    getPagePath,
    openAboutUs
}
