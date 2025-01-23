---
title: "Build your app with an external repository"
updated: 2025-02-15
---

## Objective

Here, you will learn how to set-up a React application and run it locally.  

By the end of this guide, you will be able to edit a Data Platform application by running it **locally**, **connecting** it to the Platform' ecosystem and **deploying** it with a git repository.

## Prerequisites

There are a few things you need before starting :

- Follow the [Analytics App Getting Started guide](/pages/public_cloud/data_platform/getting-started/app-init/00-app-init-index) up until [this](/pages/public_cloud/data_platform/getting-started/app-init/query-builder) point. This is where you expose your API.
- Install [git](https://git-scm.com/).
- Install [Node.js](https://nodejs.org/en/).
- Install [yarn](https://yarnpkg.com/) (recommended) or [npm](https://www.npmjs.com/).
- Install [npx](https://www.npmjs.com/package/npx).
- Have a **text editor**. You'll be writing HTML, CSS, and JavaScript.

> [!primary]
> The point of communication between your **Data Platform Project** and your app, is the **Data Platform API** that you exposed in our API Manager component. That is why it is required to complete the [Getting Started guide](/pages/public_cloud/data_platform/getting-started/app-init/00-app-init-index) until the part where you expose your data and queries on the API.

## Set-up an application & connect it to Data Platform

### Create an app using an existing template

Clone this [repository](https://github.com/forepaas/getting-started/) and open it:

```bash
git clone https://github.com/forepaas/getting-started.git
cd getting-started/
```

Switch to the branch release/basic

```bash
git checkout release/basic
```

Install node modules :

```bash
yarn
```

> [!warning]
> If you get an error concerning **certificates** when installing yarn, you should contact your IT department to solve the issue. 

Install npx (Skip this step if you have already installed it globaly):

```bash
yarn global add npx
```

Install the Platform modules

```bash
npm run fppm i
```

> [!warning]
> If you run into problems installing the modules, it may be due to your NodeJS configurations. Uninstall and reinstall NodeJS to fix the issue.
>
> If the issue persists, it could be due to NodeJS version compatibility. Install NodeJS v16.20.2 to fix the issue.

Run your app :

```bash
yarn start
```

> [!primary]
> Open [localhost:3333](localhost:3333) to check your app. If you see no error but a blank screen, don't worry! You still need to adjust the app configuration before seeing the panels. The blank screen means your app is up & running. 

### Connect a git repository to the platform (optional)

To link a git repository to the platform, please follow this [guide](/pages/public_cloud/data_platform/product/app-manager/settings/git-integration)

> [!primary]
> Now that you've learned how to create and launch your app, it's time to understand its architecture.

[Understand app architecture and configuration files](/pages/public_cloud/data_platform/getting-further/app-dev/configuration)

## Go further

Join our [community of users](/links/community).