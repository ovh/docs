---
title: Install Ghost on your POWER web hosting plan
slug: nodejs-install-ghost
excerpt: Find out how to install Ghost  on your POWER web hosting plan
section: Node.js
order: 3
updated: 2021-02-04
---


<style>
 pre {
     font-size: 14px;
 }
 pre.console {
   background-color: #300A24; 
   color: #ccc;
   font-family: monospace;
   padding: 5px;
   margin-bottom: 5px;
 }
 pre.console code {
   border: solid 0px transparent;
   font-family: monospace !important;
 }
 .small {
     font-size: 0.75em;
 }
</style>

**Last updated 4th February 2021**

## Objective

You've subscribed to a Web POWER web hosting plan to deploy **Node.js** applications, and you want to deploy a [Ghost](https://ghost.org/) blogging platform on it.

This guide will explain how to do it.


**Find out how to install Ghost on your POWER web hosting plan.**


## Requirements

- A [Node.js](https://labs.ovh.com/managed-nodejs) POWER web hosting plan
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)

If you have just started to use your Web POWER web hosting plan, we suggest to have a look at our [Getting started with a POWER web hosting plan](../getting-started-with-power-web-hosting/) guide before going further.

## Instructions


Let's suppose you have the default configuration for Node.js hosting:

- Runtime: nodejs 14   
- Entrypoint: index.js 
- DocumentRoot: www

> [!primary]
>
> To verify your configuration, you can use the [Retrieve active configuration](../getting-started-with-power-web-hosting/#api-get-active-configuration) API endpoint

[Connect via SSH](../getting-started-with-power-web-hosting/#ssh) to your POWER web hosting.
Let's begin by configuring the domain name in a `DOMAIN` variable:

```sh
echo "Enter your domain (my-domain.ovh for example):"
read DOMAIN
```

Then install Ghost using `npm` at your home folder (not `www`):

```sh
cd $HOME
npm install ghost-cli@latest
export PATH=$HOME/node_modules/.bin:$PATH
rm -rf www
# Install Ghost
ghost install local --development --dir www --no-setup --no-start --no-enable
# Setup configuration
cd www
cat << EOF > config.${OVH_ENVIRONMENT}.json
{
  "url": "https://${DOMAIN}",
  "paths": {
    "contentPath": "content"
  },
  "database": {
    "client": "sqlite3",
    "connection": {
      "filename": "content/data/ghost-development.db"
    },
    "useNullAsDefault": true,
    "debug": false
  }
}

EOF
# Symlink index.js entrypoint
VERSION=$(ghost --version | sed -n 's/Ghost version: \([0-9.]*\).*/\1/p')
ln -fs versions/${VERSION}/index.js index.js
```

[Restart your instance](../getting-started-with-power-web-hosting/#restart) and your Ghost will be online.


![Ghost](images/nodejs-install-ghost-01.png){.thumbnail}


Terminal output:

<pre class="console"><code> $ echo "Enter your domain (my-domain.ovh for example):"
Enter your domain (my-domain.ovh for example):

~/www $ read DOMAIN
power.mydomain.ovh

~/www $ cd $HOME
~ $ npm install ghost-cli@latest
> yarn@1.22.10 preinstall /home/powerlp/node_modules/yarn
> :; (node ./preinstall.js > /dev/null 2>&1 || true)
[...]
+ ghost-cli@1.15.3
added 420 packages from 208 contributors and audited 420 packages in 20.791s
[...]
`npm audit fix` to fix them, or `npm audit` for details

~ $ export PATH=$HOME/node_modules/.bin:$PATH

~ $ rm -rf www

~ $ ghost install local --development --dir www --no-setup --no-start --no-enable
✔ Checking system Node.js version
✔ Checking current folder permissions
✔ Checking memory availability
✔ Checking free space
✔ Checking for latest Ghost version
✔ Setting up install directory
✔ Downloading and installing Ghost v3.41.3
✔ Finishing install process

~ $ cd www

~/www $ cat << EOF > config.${OVH_ENVIRONMENT}.json
> {
>   "url": "https://${DOMAIN}",
>   "paths": {
>     "contentPath": "content"
>   },
>   "database": {
>     "client": "sqlite3",
>     "connection": {
>       "filename": "content/data/ghost-development.db"
>     },
>     "useNullAsDefault": true,
>     "debug": false
>   }
> }
>
> EOF

~/www $ VERSION=$(ghost --version | sed -n 's/Ghost version: \([0-9.]*\).*/\1/p')

~/www $ ln -fs versions/${VERSION}/index.js index.js

~/www $ mkdir -p tmp

~/www $ touch tmp/restart.txt
</code></pre>


## Go further

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/).

**Join [our Discord](https://discord.gg/ovhcloud) on our web-hosting-power channel to discuss directly with the team and other users of this lab.**