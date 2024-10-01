---
title: Install Strapi on your POWER web hosting plan
excerpt: Find out how to install Strapi headless CMS on your POWER web hosting plan
updated: 2021-02-04
---

## Objective

You've subscribed to a Web POWER web hosting plan to deploy **Node.js** applications, and you want to deploy [Strapi](https://strapi.io/){.external} headless CMS on it.

This guide will explain how to do it.

**Find out how to install Strapi on your POWER web hosting plan.**

## Requirements

- A [Node.js](https://labs.ovh.com/managed-nodejs) POWER web hosting plan
- access to the [OVHcloud Control Panel](/links/manager)

If you have just started to use your Web POWER web hosting plan, we suggest to have a look at our [Getting started with a POWER web hosting plan](/pages/ovhcloud_labs/power_web_hosting/getting-started) guide before going further.

## Instructions

Let's suppose you have the default configuration for Node.js hosting:

- Runtime: nodejs 14   
- Entrypoint: index.js 
- DocumentRoot: www

> [!primary]
>
> To verify your configuration, you can use the [Retrieve active configuration](/pages/ovhcloud_labs/power_web_hosting/getting-started#api-get-active-configuration) API endpoint.

[Connect via SSH](/pages/ovhcloud_labs/power_web_hosting/getting-started#ssh) to your POWER web hosting.
Let's begin by cleaning the `www` folder and installing Strapi:

```sh
rm -rf www
npx create-strapi-app www --quickstart --no-run
```

Now let's go into the `www` folder and create the entrypoint `index.js`:

```javascript
const strapi = require('strapi');
 
strapi(/* {...} */).start();

```

Build admin UI site : 

```sh
cd www
yarn build
```

Create also an `.htaccess` file to manage HTTPS redirection:

```sh
RewriteCond %{ENV:HTTPS} !on
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```
Then [restart your instance](/pages/ovhcloud_labs/power_web_hosting/getting-started#restart) and your Strapi headless CMS will be online.

![Strapi](images/nodejs-install-strapi-01.png){.thumbnail}

Terminal output:

```console
 ~ $ rm -rf www

~ $ npx create-strapi-app www --quickstart --no-run
npx: 91 installed in 6.741s
Creating a new Strapi application at /home/user/www.
Creating a quickstart project.
Creating files.
Dependencies installed successfully.
[...]

~ $ cat << 'EOF' > www/index.js
const strapi = require('strapi');
 
strapi(/* {...} */).start();
EOF
~ $ cat << 'EOF' > www/.htaccess
RewriteCond %{ENV:HTTPS} !on
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
EOF

~/www $ mkdir -p tmp

~/www $ touch tmp/restart.txt
```

## Go further

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/).

**Join [our Discord](https://discord.gg/ovhcloud) on our web-hosting-power channel to discuss directly with the team and other users of this lab.**
