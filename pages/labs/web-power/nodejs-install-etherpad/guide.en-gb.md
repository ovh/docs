---
title: Install Etherpad on your POWER web hosting plan
slug: nodejs-install-etherpad
excerpt: Find out how to install Etherpad  on your POWER web hosting plan
section: Node.js
order: 2
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

**Last updated 3<sup>rd</sup> February 2021**

## Objective

You've subscribed to a Web POWER web hosting plan to deploy **Node.js** applications, and you want to deploy an [Etherpad](https://etherpad.org/) server on it.

This guide will explain how to do it.


**Find out how to install Etherpad on your POWER web hosting plan.**


## Requirements

- A [Node.js](https://labs.ovh.com/managed-nodejs) POWER web hosting plan
- Access to the [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager)

If you have just started to use your Web POWER web hosting plan, we suggest you to have a look to our [Getting started with a POWER web hosting plan](../getting-started-with-power-web-hosting/) guide before going further.

## Instructions


Let's suppose you have the default configuration for Node.js hosting:

- Runtime : nodejs 14   
- Entrypoint : index.js 
- DocumentRoot : www

> [!primary]
>
> To verify your configuration, you can use the [Retrieve active configuration](../getting-started-with-power-web-hosting/#api-get-active-configuration) API endpoint

[Access via SSH](../getting-started-with-power-web-hosting/#ssh) to your POWER web hosting, and retrieve etherpad sources into the `www` folder:

```sh
cd www
git init
git remote add origin https://github.com/ether/etherpad-lite.git
git pull origin master
```

Then install Etherpad dependencies and setup the entry point:

```sh
bash bin/installDeps.sh
ln -fs node_modules/ep_etherpad-lite/node/server.js index.js
```

And [restart your instance](../getting-started-with-power-web-hosting/#restart), your Etherpad will be online.

![Etherpad](images/nodejs-install-etherpad-01.png){.thumbnail}

Terminal output:

<pre class="console"><code>~ $ node -v
v14.15.4
~ $ rm -rf www
~ $ mkdir www
~ $ cd www
~/www $ git init
~/www $ git remote add origin https://github.com/ether/etherpad-lite.git
~/www $ git pull origin master
remote: Enumerating objects: 2, done.
remote: Counting objects: 100% (2/2), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 36100 (delta 1), reused 0 (delta 0), pack-reused 36098
Receiving objects: 100% (36100/36100), 16.57 MiB | 14.04 MiB/s, done.
Resolving deltas: 100% (25484/25484), done.
From https://github.com/ether/etherpad-lite
 * branch            master     -> FETCH_HEAD
 * [new branch]      master     -> origin/master
Checking out files: 100% (492/492), done.
~/www $ bash bin/installDeps.sh
Copy the settings template to settings.json...
Ensure that all dependencies are up to date...  If this is the first time you have run Etherpad please be patient.

> wd@1.12.1 install /home/powerlp/www/src/node_modules/wd
> node scripts/build-browser-scripts

added 799 packages in 11.642s
Clearing minified cache...
~/www $ ln -fs node_modules/ep_etherpad-lite/node/server.js index.js
~/www $ mkdir -p tmp
~/www $ touch tmp/restart.txt</code></pre>

## Going Further

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/).
