---
title: JavaScript/Node.js
slug: languages-nodejs
section: Languages
order: 4
---

**Last updated 31st August 2023**



## Objective  

Node.js is a popular asynchronous JavaScript runtime.
Deploy scalable Node.js apps of all sizes on {{< vendor/name >}}.
You can also develop a microservice architecture mixing JavaScript and other apps with [multi-app projects](../../create-apps/multi-app/_index.md).

## Supported versions

{{% major-minor-versions-note %}}

| Grid and {{% names/dedicated-gen-3 %}} | {{% names/dedicated-gen-2 %}} |
|----------------------------------------|------------------------------ |
| - 18  
- 16 |

{{% language-specification type="nodejs" display_name="Node.js" %}}

To use a specific version in a container with a different language, [use a version manager](../../(node-version).

{{% deprecated-versions %}}

| Grid | {{% names/dedicated-gen-2 %}} |
| ---- | ----------------------------- |
| - 14  
- 12  
- 10  
- 8  
- 6  
- 4.8  
- 4.7  
- 0.12 |

## Usage example

To use JavaScript with Node.js on {{< vendor/name >}}, configure your [app configuration](../../create-apps/_index.md)
(a complete example is included at the end).

### 1. Specify the version

Choose a version from the [list of supported versions](#supported-versions)
and add it to your app configuration:


```yaml   
type: 'nodejs:18'
```  


### 2. Specify any global dependencies

Add the following to your app configuration:

```yaml {configFile="app"}
dependencies:
    nodejs:
        sharp: "*"
```

These are now available as commands, the same as installing with `npm install -g`.

### 3. Build your app

Include any commands needed to build and setup your app in the `hooks`, as in the following example:

```yaml {configFile="app"}
hooks:
    build: |
        npm run setup-assets
        npm run build
```

### 4. Start your app

Specify a command to start serving your app (it must be a process running in the foreground):

```yaml {configFile="app"}
web:
    commands:
        start: node index.js
```

### 5. Listen on the right port

Make sure your Node.js application is configured to listen over the port given by the environment.
The following example uses the [`platformsh-config` helper](#configuration-reader):

```js
// Load the http module to create an http server.
const http = require('http');

// Load the {{< vendor/name >}} configuration
const config = require('platformsh-config').config();

const server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end("Hello world!");
});

// Listen on the port from the {{< vendor/name >}} configuration
server.listen(config.port);
```

### Complete example

A complete basic app configuration looks like the following:

```yaml {configFile="app"}
name: node-app

type: nodejs:18

disk: 512

dependencies:
    nodejs:
        sharp: "*"

hooks:
    build: |
        npm run setup-assets
        npm run build

web:
    commands:
        start: "node index.js"
```

## Dependencies

By default, {{< vendor/name >}} assumes you're using npm as a package manager.
If your code has a `package.json`, the following command is run as part of the default [build flavor](../../create-apps/app-reference.md#build):

```bash
npm prune --userconfig .npmrc && npm install --userconfig .npmrc
```

This means you can specify configuration in a `.npmrc` file in [your app root](../../create-apps/app-reference.md#root-directory).

### Use Yarn as a package manager

To switch to Yarn to manage dependencies, follow these steps:

1\. Turn off the default use of npm:


```yaml {configFile="app"}
build:
    flavor: none
```

2\. Specify the version of Yarn you want:


```json {location="package.json"}
{
  ...
  "packageManager": "yarn@3.2.1"
}
```

What you do next depends on the versions of Yarn and Node.js you want.

> [!tabs]      


## Connecting to services

The following examples show how to use Node.js to access various [services](../../add-services/_index.md).
To configure a given service, see the page dedicated to that service.

> [!tabs]      

{{% config-reader %}}[Node.js configuration reader library](https://github.com/platformsh/config-reader-nodejs){{% /config-reader%}}

## Project templates


### Directus 

![image]()

<p>This template demonstrates building Directus for Web PaaS. It includes a quickstart application configured to run with PostgreSQL. It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Directus is an open-source platform that allows you to create and manage an API from data stored in a database.</p>
  
#### Features
- Node.js 14<br />  
- PostgreSQL 12<br />  
- Redis 6.0<br />  
- Automatic TLS certificates<br />  
- npm-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/directus) on GitHub.

### Express 

![image](images/express.png)

<p>This template demonstrates building the Express framework for Web PaaS.  It includes a minimalist application skeleton that demonstrates how to connect to a MariaDB server.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Express is a minimalist web framework written in Node.js.</p>
  
#### Features
- Node.js 14<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- npm-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/express) on GitHub.

### Gatsby 

![image](images/gatsby.png)

<p>This template builds a simple application using Gatsby.  Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps.  The website is statically generated by a Node.js application during the build step, and then served statically at runtime.</p>
<p>Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps.</p>
  
#### Features
- Node.js 16<br />  
- Automatic TLS certificates<br />  
- yarn-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/gatsby) on GitHub.

### Koa 

![image](images/koa.png)

<p>This template demonstrates building the Koa framework for Web PaaS.  It includes a minimalist application skeleton that demonstrates how to connect to a MariaDB server for data storage.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Koa is a lightweight web microframework for Node.js.</p>
  
#### Features
- Node.js 10<br />  
- MariaDB 10.2<br />  
- Automatic TLS certificates<br />  
- npm-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/koa) on GitHub.

### Next.js 

![image](images/nextjs.png)

<p>This template builds a simple application using the Next.js web framework. It includes a minimal application skeleton that demonstrates how to set up an optimized build using Next.js and Yarn, as well as how to begin defining individual pages (such as the <code>/api/hello</code>) endpoint that comes pre-defined with this template.</p>
<p>Next.js is an open-source web framework written for Javascript.</p>
  
#### Features
- Node.js 14<br />  
- Automatic TLS certificates<br />  
- yarn-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/nextjs) on GitHub.

### NuxtJS 

![image](images/nuxtjs.png)

<p>This template builds a simple application using the NuxtJS web framework that can be used as a starting point.</p>
<p>NuxtJS is an open-source web framework based on Vue.js.</p>
  
#### Features
- Node.js 18<br />  
- Automatic TLS certificates<br />  
- yarn-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/nuxtjs) on GitHub.

### strapi4 

![image]()

<p>This template builds a Strapi version 4 backend for Web PaaS, which can be used to quickly create an API that can be served by itself or as a Headless CMS data source for another frontend application in the same project. This repository does not include a frontend application, but you can add one of your choice and access Strapi by defining it in a relationship in your frontend's <code>.platform.app.yaml</code> file.</p>
<p>Strapi is a Headless CMS framework written in Node.js.</p>
  
#### Features
- Node.js 12<br />  
- PostgreSQL 12<br />  
- Automatic TLS certificates<br />  
- yarn-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/strapi4) on GitHub.

