module.exports = {
    root: true,
    env: { node: true, es2022: true },
    parserOptions: { ecmaVersion: 2022, sourceType: 'commonjs' },
    extends: ['eslint:recommended'],
    ignorePatterns: [
        '.auth/**',
        'node/**',
        'node_modules/**',
        'results/**',
        'html-report/**',
        'playwright-report/**',
        'test-results/**'
    ],
    rules: {}
}
