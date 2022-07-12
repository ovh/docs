---
title: Node.js
slug: languages-nodejs
section: Languages
order: 4
---

**Last updated 2nd June 2022**



## Objective  

Node.js is a popular asynchronous JavaScript runtime.
Deploy scalable Node.js apps of all sizes on Web PaaS.
You can also develop a microservice architecture mixing JavaScript and other apps with [multi-app projects](../configuration-app).

## Supported versions

| **Grid** | 
|----------------------------------|  
|  6 |  
|  8 |  
|  10 |  
|  12 |  
|  14 |  
|  16 |  


To use a specific version in a container with a different language, [use a version manager](./nvm).

## Deprecated versions

| **Grid** | 
|----------------------------------|  
|  0.12 |  
|  4.7 |  
|  4.8 |  
|  6.1 |  
|  6.9 |  
|  8.2 |  

## Usage example

To use Node.js on Web PaaS and Node.js together, configure the `.platform.app.yaml` file with a few key settings
(a complete example is included at the end).

### 1. Specify the version

Choose a version from the [list above](#supported-versions)
and add it to your [app configuration](../configuration-app):


```yaml   
type: 'nodejs:16'
```  


### 2. Specify any global dependencies

Add the following to your app configuration:

```yaml 
location=".platform.app.yaml"
dependencies:
    nodejs:
        yarn: "*"
```

These are now available as commands, the same as installing with `npm install -g`.

### 3. Build your app

Include any commands needed to build and setup your app in the `hooks`, as in the following example:

```yaml 
location=".platform.app.yaml"
hooks:
    build: |
        npm run setup-assets
        npm run build
```

### 4. Start your app

Specify a command to start serving your app (it must be a process running in the foreground):

```yaml 
location=".platform.app.yaml"
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

// Load the Web PaaS configuration
const config = require('platformsh-config').config();

const server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end("Hello world!");
});

// Listen on the port from the Web PaaS configuration
server.listen(config.port);
```

### Complete example

A complete basic app configuration looks like the following:

```yaml 
location=".platform.app.yaml"
name: node-app

type: nodejs:16

disk: 512

dependencies:
    nodejs:
        yarn: "*"

hooks:
    build: |
        npm run setup-assets
        npm run build

web:
    commands:
        start: "node index.js"
```

## Dependencies

By default, Web PaaS assumes you're using npm as a package manager.
If you have a `package.json` file in your code, the default [build flavor is run](../../configuration-app/build/#build):

```bash
npm prune --userconfig .npmrc && npm install --userconfig .npmrc
```

This means you can specify configuration in a `.npmrc` file in your app root.

### Use yarn as a package manager

To switch to yarn to manage dependencies, follow these steps:

#### Step 1: Switch to a build flavor of `none` (so packages aren't installed with npm)

```yaml 
location=".platform.app.yaml"
build:
    flavor: none
```

#### Step 2: Add yarn as a global dependency

```yaml 
location=".platform.app.yaml"
dependencies:
    nodejs:
        yarn: "1.22.17"
```

#### Step 3: Install dependencies in the `build` hook


```yaml 
location=".platform.app.yaml"
hooks:
    build: |
        yarn --frozen-lockfile
```

## Connecting to services

The following examples show how to use Node.js to access various [services](../configuration-services).
To configure a given service, see the page dedicated to that service.

> [!tabs]      
> Elasticsearch     
>> ``` js     
>> {!> web/web-paas/static/files/fetch/examples/nodejs/elasticsearch !}  
>> ```     
> Memcached     
>> ``` js     
>> {!> web/web-paas/static/files/fetch/examples/nodejs/memcached !}  
>> ```     
> MongoDB     
>> ``` js     
>> {!> web/web-paas/static/files/fetch/examples/nodejs/mongodb !}  
>> ```     
> MySQL     
>> ``` js     
>> {!> web/web-paas/static/files/fetch/examples/nodejs/mysql !}  
>> ```     
> PostgreSQL     
>> ``` js     
>> {!> web/web-paas/static/files/fetch/examples/nodejs/postgresql !}  
>> ```     
> Redis     
>> ``` js     
>> {!> web/web-paas/static/files/fetch/examples/nodejs/redis !}  
>> ```     
> Solr     
>> ``` js     
>> {!> web/web-paas/static/files/fetch/examples/nodejs/solr !}  
>> ```     


[`platformsh-config` package](https://github.com/platformsh/config-reader-nodejs)

## Project templates


### Gatsby with Strapi 

![image](images/gatsby.png)

<p>This template builds a two application project to deploy the Headless CMS pattern using Gatsby as its frontend and Strapi for its backend. The `gatsby-source-strapi` source plugin is used to pull data from Strapi during the `post_deploy` hook into the Gatsby Data Layer and build the frontend site. Gatsby utilizes the Web PaaS Configuration Reader library for Node.js to define the backend data source in its configuration. It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Note that there are several setup steps required after the first deploy to create your first content types and access permissions in Strapi. See the included README's post-install section for details.</p>
<p>Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps, and Strapi is a Headless CMS framework written in Node.js.</p>
  
#### Features
- Node.js 14<br />  
- PostgreSQL 12<br />  
- Automatic TLS certificates<br />  
- yarn-based build<br />  
- Multi-app configuration<br />  
- Delayed SSG build (post deploy hook)<br />  
 
[View the repository](https://github.com/platformsh-templates/gatsby-strapi) on GitHub.

### Probot 

![image](images/probot.png)

<p>This template builds a simple GitHub App using [Probot](https://github.com/probot/probot) for Node.js.  It includes a minimalist skeleton GitHub app that demonstrates a basic GitHub connection response.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Note that there are several setup steps required after first deploy to connect your project to GitHub.  See the included README file for details.</p>
<p>Probot is a framework for building GitHub Apps in Node.js.</p>
  
#### Features
- Node.js 12<br />  
- Automatic TLS certificates<br />  
- npm-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/probot) on GitHub.

### strapi 

![image](images/strapi.png)

<p>This template builds a Strapi backend for Web PaaS, which can be used to quickly create an API that can be served by itself or as a Headless CMS data source for another frontend application in the same project. This repository does not include a frontend application, but you can add one of your choice and access Strapi by defining it in a relationship in your frontend's <code>.platform.app.yaml</code> file.</p>
<p>Strapi is a Headless CMS framework written in Node.js.</p>
  
#### Features
- Node.js 12<br />  
- PostgreSQL 12<br />  
- Automatic TLS certificates<br />  
- npm-based build<br />  
- OpenAPI spec generation<br />  
- Automatic public API documentation<br />  
 
[View the repository](https://github.com/platformsh-templates/strapi) on GitHub.

### Gatsby with WordPress 

![image](images/gatsby.png)

<p>This template builds a two application project to deploy the Headless CMS pattern using Gatsby as its frontend and WordPress for its backend. The `gatsby-source-WordPress` source plugin is used to pull data from WordPress during the `post_deploy` hook into the Gatsby Data Layer and build the frontend site. Gatsby utilizes the Web PaaS Configuration Reader library for Node.js to define the backend data source in its configuration. It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Note that after you have completed the WordPress installation, the project will require a redeploy to build and deploy Gatsby for the first time. See the included README's post-install section for details.</p>
<p>Gatsby is a free and open source framework based on React that helps developers build statically-generated websites and apps, and WordPress is a blogging and lightweight CMS written in PHP.</p>
  
#### Features
- Node.js 14<br />  
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- npm-based build for Gatsby<br />  
- Composer-based build for WordPress<br />  
- Multi-app configuration<br />  
- Delayed SSG build (post deploy hook)<br />  
 
[View the repository](https://github.com/platformsh-templates/gatsby-wordpress) on GitHub.

### Gatsby 

![image](images/gatsby.png)

<p>This template builds a simple application using Gatsby.  Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps.  The website is statically generated by a Node.js application during the build step, and then served statically at runtime.</p>
<p>Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps.</p>
  
#### Features
- Node.js 14<br />  
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

### Node.js 

![image](images/nodejs.png)

<p>This template builds a simple application using the Node.js built-in `http` web server. It includes a minimalist application skeleton that demonstrates how to connect to the included MariaDB server, but you are free to alter it as needed.</p>
<p>Node.js is an open-source JavaScript runtime built on Chrome's V8 JavaScript engine.</p>
  
#### Features
- Node.js 14<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- npm-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/nodejs) on GitHub.

### Next.js 

![image](images/nextjs.png)

<p>This template builds a simple application using the Next.js web framework. It includes a minimal application skeleton that demonstrates how to set up an optimized build using Next.js and Yarn, as well as how to begin defining individual pages (such as the <code>/api/hello</code>) endpoint that comes pre-defined with this template.</p>
<p>Next.js is an open-source web framework written for Javascript.</p>
  
#### Features
- Node.js 14<br />  
- Automatic TLS certificates<br />  
- yarn-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/nextjs) on GitHub.

### Express 

![image](images/express.png)

<p>This template demonstrates building the Express framework for Web PaaS. It includes a minimalist application skeleton that demonstrates how to connect to a MariaDB server. It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Express is a minimalist web framework written in Node.js.</p>
  
#### Features
- Node.js 14<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- npm-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/express) on GitHub.

### NuxtJS 

![image](images/nuxtjs.png)

<p>This template builds a simple application using the NuxtJS web framework that can be used as a starting point.</p>
<p>NuxtJS is an open-source web framework based on Vue.js.</p>
  
#### Features
- Node.js 14<br />  
- Automatic TLS certificates<br />  
- yarn-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/nuxtjs) on GitHub.

### Gatsby with Drupal 

![image](images/gatsby.png)

<p>This template builds a two-application project to deploy the Headless CMS pattern using Gatsby as its frontend and Drupal 8 for its backend. The <code>gatsby-source-drupal</code> source plugin is used to pull data from Drupal during the <code>post_deploy</code> hook into the Gatsby Data Layer and build the frontend site. Gatsby utilizes the Web PaaS Configuration Reader library for Node.js to define the backend data source in its configuration. It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Note that after you have completed the Drupal installation and included a few articles, the project will require a redeploy to build and deploy Gatsby for the first time. See the included README's post-install section for details.</p>
<p>Gatsby is a free and open source framework based on React that helps developers build statically-generated websites and apps, and Drupal is a flexible and extensible PHP-based CMS framework.</p>
  
#### Features
- Node.js 12<br />  
- PHP 7.4<br/>  
- MariaDB 10.4<br/>  
- Redis 5.0<br/>  
- Automatic TLS certificates<br />  
- npm-based build for Gatsby<br />  
- Composer-based build for Drupal<br />  
- Multi-app configuration<br />  
- Delayed SSG build (post deploy hook)<br />  
 
[View the repository](https://github.com/platformsh-templates/gatsby-drupal) on GitHub.

### Directus 

<p>This template demonstrates building Directus for Web PaaS. It includes a quickstart application configured to run with PostgreSQL. It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Directus is an open-source platform that allows you to create and manage an API from data stored in a database.</p>
  
#### Features
- Node.js 14<br />  
- PostgreSQL 12<br />  
- Redis 6.0<br />  
- Automatic TLS certificates<br />  
- npm-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/directus) on GitHub.
