---
title: Install Etherpad on your POWER web hosting plan
excerpt: Find out how to install Etherpad  on your POWER web hosting plan
updated: 2023-04-27
---

## Objective

You've subscribed to a Web POWER web hosting plan to deploy **Node.js** applications, and you want to deploy an [Etherpad](https://etherpad.org/){.external} server on it.

This guide will explain how to do it.

**Find out how to install Etherpad on your POWER web hosting plan.**

## Requirements

- a [Node.js](https://labs.ovh.com/managed-nodejs) POWER web hosting plan
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

[Access via SSH](/pages/ovhcloud_labs/power_web_hosting/getting-started#ssh) to your POWER web hosting, and retrieve Etherpad sources into the `www` folder:

```sh
cd www
git init
git remote add origin https://github.com/ether/etherpad-lite.git
git pull origin refs/tags/1.8.6
```

> [!alert]
>
> Etherpad 1.8.7 is not compatible with POWER web hosting because [we currently do not support the "experimental-worker" option](https://github.com/ether/etherpad-lite/wiki/Running-Etherpad-on-Phusion-Passenger#phusion-passenger-for-apache).

Then install Etherpad dependencies and set up the entry point:

```sh
bash bin/installDeps.sh
ln -fs node_modules/ep_etherpad-lite/node/server.js index.js
```

[Restart your instance](/pages/ovhcloud_labs/power_web_hosting/getting-started#restart) and your Etherpad will be online.

![Etherpad](images/nodejs-install-etherpad-01.png){.thumbnail}

Terminal output:

```console
~ $ node -v
v14.15.4
~ $ rm -rf www
~ $ mkdir www
~ $ cd www
~/www $ git init
~/www $ git remote add origin https://github.com/ether/etherpad-lite.git
~/www $ git pull origin refs/tags/1.8.6
remote: Enumerating objects: 2, done.
remote: Counting objects: 100% (2/2), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 36100 (delta 1), reused 0 (delta 0), pack-reused 36098
Receiving objects: 100% (36100/36100), 16.57 MiB | 14.04 MiB/s, done.
Resolving deltas: 100% (25484/25484), done.
From https://github.com/ether/etherpad-lite
 * branch            release/1.8.6     -> FETCH_HEAD
 * [new branch]      release/1.8.6     -> origin/master
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
~/www $ touch tmp/restart.txt
```

## Go further

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/).

**Join [our Discord](https://discord.gg/ovhcloud) on our web-hosting-power channel to discuss directly with the team and other users of this lab.**