UI Testing module (Playwright) for your AEM application
===

Sample structure for [Playwright](https://playwright.dev) UI test module which conforms to
AEM Cloud Manager quality gate UI test conventions.


AEM provides an integrated suite of Cloud Manager quality gates to ensure smooth updates to custom applications,
UI tests are executed as part of a specific quality gate for each Cloud Manager pipeline with a dedicated Custom UI Testing step.

The Cloud Manager UI test module convention defines the expected structure of the test module as well as the environment
variables which will be passed at runtime. This is explained in detail in the [Building UI Tests](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/implementing/using-cloud-manager/test-results/functional-testing/ui-testing.html?lang=en#building-ui-tests)
section of the documentation.


- `/test-module` The test project (add your tests there)

**Do not modify following files**
- `Dockerfile` commands to assemble the image
- `pom.xml` defines project dependencies and build configuration which will be used by Cloud Manager to build the test module image
- `assembly-ui-test-docker-context.xml` Packages test project for AEMaaCS


Sample dockerfile is based on the `mcr.microsoft.com/playwright` image, which provides the required
browsers and dependencies to run Playwright tests headlessly in Cloud Manager.

Refer to [test-module/README.md](test-module/README.md).


The image built from the Dockerfile can be used to execute tests locally against an AEM environment. The `ui-tests-docker-execution`
maven profile will start the docker-compose setup starting the test module, executing the tests against
the AEM instance defined via environment variables. The test results will be stored in the `./target/reports` directory.

The following environment variables (AEM UI test convention) can be passed

| envvar               | default               |
|----------------------|-----------------------|
| AEM_AUTHOR_URL       | http://localhost:4502 |
| AEM_AUTHOR_USERNAME  | `admin`               |
| AEM_AUTHOR_PASSWORD  | `admin`               |
| AEM_PUBLISH_URL      | http://localhost:4503 |
| AEM_PUBLISH_USERNAME | `admin`               |
| AEM_PUBLISH_PASSWORD | `admin`               |
| REPORTS_PATH         | `results`             |

1. Build the Docker UI test image with below command
   ```
   mvn clean package -Pui-tests-docker-build
   ```
2. Run the test
   ```
   mvn verify -Pui-tests-docker-execution -DAEM_AUTHOR_URL=https://author.my-deployment.com -DAEM_AUTHOR_USERNAME=<USER> -DAEM_AUTHOR_PASSWORD=<PASS> -DAEM_PUBLISH_URL=https://publish.my-deployment.com
   ```
