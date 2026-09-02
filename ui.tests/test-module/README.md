# Playwright UI Test Module

This module documents the recommended structure for a Playwright test module and adheres to the Cloud Manager UI test module conventions,
ensuring that tests will be executed and reports generated are stored in the proper location.

Some examples of basic tasks like logging in-out of AEM instances, taking screenshots, logging browser requests are included.


- Install dependencies
  ```shell
  npm install
  ```

- Set environment variables required for test execution
  ```shell
  export AEM_AUTHOR_URL=https://author-p***-e***.adobeaemcloud.com
  export AEM_AUTHOR_USERNAME=<user>
  export AEM_AUTHOR_PASSWORD=***
  export AEM_PUBLISH_URL=https://publish-p***-e***.adobeaemcloud.com
  export REPORTS_PATH=target/
  ```

- Run tests with one of the following commands
  ```shell
  npm test              # Run all configured Playwright projects
  npm run test:chromium # Publish Chromium smoke
  npm run test:author   # Authenticated author Chromium smoke
  ```

- For debugging tests, you may run Playwright with the browser visible
  ```shell
  npm run test:headed
  ```


In order to be able to interpret the results of the tests correctly, a summary in JUnit format needs to be
provided. Playwright is configured to emit that report to the path expected by Cloud Manager:

```javascript
const reportsPath = process.env.REPORTS_PATH || 'results'
```

In order for the report to be found `reportPath` must be the value passed in the environment
variable `REPORTS_PATH` as expected by EaaS. See [playwright.config.js](playwright.config.js).

Playwright will automatically retain videos for failures and create screenshots for test failures.

Additional screenshots can be captured during the test execution using following command:

```javascript
await expect(page).toHaveScreenshot()
```

`$REPORTS_PATH/artifacts` will contain traces, screenshots, and videos.

`$REPORTS_PATH/results.xml` will contain the JUnit report.
