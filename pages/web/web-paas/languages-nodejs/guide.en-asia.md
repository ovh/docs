---
title: Node.js
slug: languages-nodejs
section: Languages
order: 4
---

**Last updated 26th March 2021**


## Objective  

Node.js is a popular JavaScript runtime built on Chrome's V8 JavaScript engine.  Web PaaS supports deploying Node.js applications quickly and easily. Using our Multi-App support you can build a micro-service oriented system mixing both Javascript and PHP applications.


## Supported versions

| **Grid** | 
|----------------------------------|  
|  6 |  
|  8 |  
|  10 |  
|  12 |  
|  14 |  

If you need other versions, take a look at our [options for installing them with NVM](nvm).

## Deprecated versions

Some versions with a minor (such as 8.9) are available but are not receiving security updates from upstream, so their use is not recommended.

| **Grid** | 
|----------------------------------|  
|  0.12 |  
|  4.7 |  
|  4.8 |  
|  6.1 |  
|  6.9 |  
|  8.2 |  

## Support libraries

While it is possible to read the environment directly from your application, it is generally easier and more robust to use the [`platformsh-config`](https://github.com/platformsh/config-reader-nodejs) NPM library which handles decoding of service credential information for you.

## Configuration

To use Web PaaS and Node.js together, configure the `.platform.app.yaml` file with a few key settings, as described here (a complete example is included at the end).

1\. Specify the language of your application (available versions are listed above):


```yaml   
type: 'nodejs:14'
```  


2\. Specify your dependencies under the `nodejs` key, like this:

```yaml
dependencies:
  nodejs:
    pm2: "^4.5.0"
```

   These are the global dependencies of your project (the ones you would have installed with `npm install -g`). Here we specify the `pm2` process manager that will allow us to run the node process.

3\. Configure the command you use to start serving your application (this must be a foreground-running process) under the `web` section, e.g.:

```yaml
web:
  commands:
    start: "PM2_HOME=/app/run pm2 start index.js --no-daemon"
```

   If there is a package.json file present at the root of your repository, Web PaaS will automatically install the dependencies. We suggest including the `platformsh-config` helper npm module, which makes it trivial to access the running environment.

```json
{
  "dependencies": {
    "platformsh-config": "^2.0.0"
  }
}
```

> [!primary]  
>   If using the `pm2` process manager to start your application, it is recommended that you do so directly in `web.commands.start` as described above, rather than by calling a separate script the contains that command. Calling `pm2 start` at `web.commands.start` from within a script, even with the `--no-daemon` flag, has been found to daemonize itself and block other processes (such as backups) with continuous respawns.
> 

4\. Create any Read/Write mounts. The root file system is read only. You must explicitly describe writable mounts. In (3) we set the home of the process manager to `/app/run` so this needs to be writable.

```yaml
mounts:
    run:
        source: local
        source_path: run
```

5\. Include any relevant commands needed to build and setup your application in the `hooks` section, e.g.:

```yaml
hooks:
  build: |
    npm install
    npm run build
```

6\. Setup the routes to your Node.js application in `.platform/routes.yaml`.

```yaml
"https://{default}/":
  type: upstream
  upstream: "app:http"
```

7\. (Optional) If Web PaaS detects a `package.json` file in your repository, it will automatically include a `default` [`build` flavor](../configuration-app/build#build), that will run `npm prune --userconfig .npmrc && npm install --userconfig .npmrc`. You can modify that process to use an alternative package manager by including the following in your `.platform.app.yaml` file:

```yaml
build:
  flavor: none
```

   Consult the documentation specific to [Node.js builds](../configuration-app/build#nodejs-npm-by-default) for more information.


Here's a complete example that also serves static assets (.png from the `/public` directory):

```yaml
name: node
type: nodejs:14

web:
  commands:
    start: "PM2_HOME=/app/run pm2 start index.js --no-daemon"
    #in this setup you will find your application stdout and stderr in /app/run/logs
  locations:
    "/public":
      passthru: false
      root: "public"
      # Whether to allow files not matching a rule or not.
      allow: true
      rules:
        '\.png$':
          allow: true
          expires: -1
dependencies:
  nodejs:
    pm2: "^4.5.0"
mounts:
   run:
       source: local
       source_path: run
disk: 512
```

## In your application...

Finally, make sure your Node.js application is configured to listen over the port given by the environment (here we use the platformsh helper and get it from `config.port`) that is available in the environment variable ``PORT``.  Here's an example:

```js
// Load the http module to create an http server.
const http = require('http');

// Load the Web PaaS configuration
const config = require('platformsh-config').config();

const server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "application/json"});
  response.end(JSON.stringify(config));
});

server.listen(config.port);
```

## Accessing services

To access various [services](../configuration-services) with Node.js, see the following examples.  The individual service pages have more information on configuring each service.

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

## Project templates

A number of project templates for Node.js applications and typical configurations are available on GitHub. Not all of them are proactively maintained but all can be used as a starting point or reference for building your own website or web application.


### strapi  

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

### Gatsby with Strapi  

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

<p>This template builds a simple GitHub App using [Probot](https://github.com/probot/probot) for Node.js.  It includes a minimalist skeleton GitHub app that demonstrates a basic GitHub connection response.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Note that there are several setup steps required after first deploy to connect your project to GitHub.  See the included README file for details.</p>
<p>Probot is a framework for building GitHub Apps in Node.js.</p>
  
#### Features
- Node.js 12<br />  
- Automatic TLS certificates<br />  
- npm-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/probot) on GitHub.

### Gatsby with Drupal  

<p>This template builds a two-application project to deploy the Headless CMS pattern using Gatsby as its frontend and Drupal for its backend. The <code>gatsby-source-drupal</code> source plugin is used to pull data from Drupal during the <code>post_deploy</code> hook into the Gatsby Data Layer and build the frontend site. Gatsby utilizes the Web PaaS Configuration Reader library for Node.js to define the backend data source in its configuration. It is intended for you to use as a starting point and modify for your own needs.</p>
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

### Gatsby with Wordpress  

<p>This template builds a two application project to deploy the Headless CMS pattern using Gatsby as its frontend and Wordpress for its backend. The `gatsby-source-wordpress` source plugin is used to pull data from Wordpress during the `post_deploy` hook into the Gatsby Data Layer and build the frontend site. Gatsby utilizes the Web PaaS Configuration Reader library for Node.js to define the backend data source in its configuration. It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Note that after you have completed the Wordpress installation, the project will require a redeploy to build and deploy Gatsby for the first time. See the included README's post-install section for details.</p>
<p>Gatsby is a free and open source framework based on React that helps developers build statically-generated websites and apps, and WordPress is a blogging and lightweight CMS written in PHP.</p>
  
#### Features
- Node.js 14<br />  
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- npm-based build for Gatsby<br />  
- Composer-based build for Wordpress<br />  
- Multi-app configuration<br />  
- Delayed SSG build (post deploy hook)<br />  
 
[View the repository](https://github.com/platformsh-templates/gatsby-wordpress) on GitHub.

### Gatsby  

<p>This template builds a simple application using Gatsby.  Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps.  The website is statically generated by a Node.js application during the build step, and then served statically at runtime.</p>
<p>Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps.</p>
  
#### Features
- Node.js 14<br />  
- Automatic TLS certificates<br />  
- yarn-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/gatsby) on GitHub.

### Express  

<p>This template demonstrates building the Express framework for Web PaaS.  It includes a minimalist application skeleton that demonstrates how to connect to a MariaDB server.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Express is a minimalist web framework written in Node.js.</p>
  
#### Features
- Node.js 14<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- npm-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/express) on GitHub.

### NuxtJS  

<p>This template builds a simple application using the NuxtJS web framework that can be used as a starting point.</p>
<p>NuxtJS is an open-source web framework based on Vue.js.</p>
  
#### Features
- Node.js 14<br />  
- Automatic TLS certificates<br />  
- yarn-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/nuxtjs) on GitHub.

### Koa  

<p>This template demonstrates building the Koa framework for Web PaaS.  It includes a minimalist application skeleton that demonstrates how to connect to a MariaDB server for data storage.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Koa is a lightweight web microframework for Node.js.</p>
  
#### Features
- Node.js 10<br />  
- MariaDB 10.2<br />  
- Automatic TLS certificates<br />  
- npm-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/koa) on GitHub.

### Node.js  

<p>This template builds a simple application using the Node.js built-in `http` web server. It includes a minimalist application skeleton that demonstrates how to connect to the included MariaDB server, but you are free to alter it as needed.</p>
<p>Node.js is an open-source JavaScript runtime built on Chrome's V8 JavaScript engine.</p>
  
#### Features
- Node.js 14<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- npm-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/nodejs) on GitHub.

### Next.js  

<p>This template builds a simple application using the Next.js web framework. It includes a minimal application skeleton that demonstrates how to set up an optimized build using Next.js and Yarn, as well as how to begin defining individual pages (such as the <code>/api/hello</code>) endpoint that comes pre-defined with this template.</p>
<p>Next.js is an open-source web framework written for Javascript.</p>
  
#### Features
- Node.js 14<br />  
- Automatic TLS certificates<br />  
- yarn-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/nextjs) on GitHub.

