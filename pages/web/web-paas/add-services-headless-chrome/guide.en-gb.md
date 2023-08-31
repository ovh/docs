---
title: Headless Chrome
slug: add-services-headless-chrome
section: Add-Services
---

**Last updated 31st August 2023**



## Objective  

{{% description %}}

You can interact with the `headless-chrome` service container using Puppeteer, a Node.js library that provides an API to control Chrome over the DevTools Protocol.

Puppeteer can be used to generate PDFs and screenshots of web pages, automate form submission, and test your project's UI. You can find out more information about using Puppeteer on [GitHub](https://github.com/GoogleChrome/puppeteer) or in their [documentation](https://pptr.dev/).

## Supported versions

{{% major-minor-versions-note %}}

| Grid | {{% names/dedicated-gen-3 %}} | {{% names/dedicated-gen-2 %}} |
|------|-------------------------------|------------------------------ |
|  - 113  
- 95  
- 91  
- 86  
- 84  
- 83  
- 81  
- 80  
- 73 |

{{% relationship-ref-intro %}}

{{% service-values-change %}}

```yaml
{
    "service": "headlesschrome",
    "ip": "169.254.91.5",
    "hostname": "gvbo7vktgmou2mplnzt4b54hgi.headlesschrome.service._.eu-3.platformsh.site",
    "cluster": "rjify4yjcwxaa-master-7rqtwti",
    "host": "headlesschrome.internal",
    "rel": "http",
    "scheme": "http",
    "type": "chrome-headless:73",
    "port": 9222
}
```

## Requirements

Puppeteer requires at least Node.js version 6.4.0, while using the async and await examples below requires Node 7.6.0 or greater.

Using the [Config Reader](../development/variables/use-variables.md#access-variables-in-your-app) library requires Node.js 10 or later.

### Other languages

If your app container uses a language other than Node.js, upgrade the Node.js version before using Puppeteer.
See how to [manage your Node.js version](../languages/nodejs/node-version.md).

## Usage example

{{% endpoint-description type="chrome-headless" /%}}

After configuration, include Puppeteer as a dependency:

```json {location="package.json"}
{
  "dependencies": {
    "puppeteer": "^13.0.1"
  }
}
```

Using the [Node.js Config Reader library](../development/variables/use-variables.md#access-variables-in-your-app), you can retrieve formatted credentials for connecting to headless Chrome with Puppeteer:

```js
const platformsh = require('platformsh-config');

const config = platformsh.config();
const credentials = config.credentials('chromeheadlessbrowser');
```

and use them to define the `browserURL` parameter of `puppeteer.connect()` within an `async` function:

```js
exports.getBrowser = async function (url) {
    try {
        // Connect to chrome-headless using pre-formatted puppeteer credentials
        const formattedURL = config.formattedCredentials('chromeheadlessbrowser', 'puppeteer');
        const browser = await puppeteer.connect({browserURL: formattedURL});

        ...

        return browser

    } catch (error) {
        console.error({ error }, 'Something happened!');
        browser.close();
    }
};
```

Puppeteer allows your application to [create screenshots](https://pptr.dev/#?product=Puppeteer&version=v13.0.1&show=api-pagescreenshotoptions), [emulate a mobile device](https://pptr.dev/#?product=Puppeteer&version=v13.0.1&show=api-pageemulateoptions), [generate PDFs](https://pptr.dev/#?product=Puppeteer&version=v13.0.1&show=api-pagepdfoptions), and much more.

You can find some useful examples of using headless Chrome and Puppeteer on {{< vendor/name >}} on the Community Portal:

* [How to take screenshots using Puppeteer and Headless Chrome](https://community.platform.sh/t/how-to-take-screenshots-using-puppeteer-and-headless-chrome/305)
* [How to generate PDFs using Puppeteer and Headless Chrome](https://community.platform.sh/t/how-to-generate-pdfs-using-puppeteer-and-headless-chrome/306)
