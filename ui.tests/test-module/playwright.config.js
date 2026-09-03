const { defineConfig, devices } = require('@playwright/test')
const path = require('path')

const reportsPath = process.env.REPORTS_PATH || 'results'
const authorURL = process.env.AEM_AUTHOR_URL || 'http://localhost:4502'
const publishURL = process.env.AEM_PUBLISH_URL || 'http://localhost:4503'

module.exports = defineConfig({
    testDir: './tests',
    globalSetup: require.resolve('./global-setup'),
    outputDir: path.join(reportsPath, 'artifacts'),
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 1 : 0,
    timeout: 60_000,
    expect: { timeout: 10_000 },
    reporter: [
        ['list'],
        ['junit', { outputFile: path.join(reportsPath, 'results.xml') }],
        ['html', { outputFolder: path.join(reportsPath, 'html-report'), open: 'never' }]
    ],
    use: {
        ignoreHTTPSErrors: true,
        screenshot: 'only-on-failure',
        trace: 'on-first-retry',
        video: 'retain-on-failure'
    },
    projects: [
        {
            name: 'publish-chromium',
            use: {
                ...devices['Desktop Chrome'],
                baseURL: publishURL
            }
        },
        {
            name: 'publish-firefox',
            use: {
                ...devices['Desktop Firefox'],
                baseURL: publishURL
            }
        },
        {
            name: 'publish-webkit',
            use: {
                ...devices['Desktop Safari'],
                baseURL: publishURL
            }
        },
        {
            name: 'publish-mobile-safari',
            use: {
                ...devices['iPhone 13'],
                baseURL: publishURL
            }
        },
        {
            name: 'author-chromium',
            use: {
                ...devices['Desktop Chrome'],
                baseURL: authorURL,
                storageState: path.join(__dirname, '.auth', 'state.json')
            }
        }
    ]
})
