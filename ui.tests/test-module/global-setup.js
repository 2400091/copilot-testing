const { request } = require('@playwright/test')
const fs = require('fs')
const path = require('path')

const STATE_PATH = path.join(__dirname, '.auth', 'state.json')

module.exports = async (config) => {
    const hasAuthorProject = config.projects.some((project) => project.name.indexOf('author-') === 0)

    if (!hasAuthorProject) {
        return
    }

    const authorURL = process.env.AEM_AUTHOR_URL || 'http://localhost:4502'
    const username = process.env.AEM_AUTHOR_USERNAME
    const password = process.env.AEM_AUTHOR_PASSWORD

    fs.mkdirSync(path.dirname(STATE_PATH), { recursive: true })

    if (!username || !password) {
        fs.writeFileSync(STATE_PATH, JSON.stringify({ cookies: [], origins: [] }, null, 2))
        return
    }

    const context = await request.newContext({
        baseURL: authorURL,
        ignoreHTTPSErrors: true
    })

    const response = await context.post('/libs/granite/core/content/login.html/j_security_check', {
        form: {
            _charset_: 'utf-8',
            j_username: username,
            j_password: password,
            j_validate: 'true'
        }
    })

    if (!response.ok()) {
        throw new Error(`AEM author login failed (HTTP ${response.status()}) at ${authorURL}.`)
    }

    await context.storageState({ path: STATE_PATH })
    await context.dispose()
}
