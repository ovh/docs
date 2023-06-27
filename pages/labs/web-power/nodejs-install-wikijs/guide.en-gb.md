---
title: Install WikiJS on your POWER web hosting plan
excerpt: Find out how to install WikiJS on your POWER web hosting plan
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

You've subscribed to a Web POWER web hosting plan to deploy **Node.js** applications, and you want to deploy a [WikiJS](https://wiki.js.org/){.external} wiki platform on it.

This guide will explain how to do it.


**Find out how to install WikiJS on your POWER web hosting plan.**


## Requirements

- A [Node.js](https://labs.ovh.com/managed-nodejs) POWER web hosting plan
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)

If you have just started to use your Web POWER web hosting plan, we suggest to have a look at our [Getting started with a POWER web hosting plan](/pages/labs/web-power/getting-started) guide before going further.

## Instructions


Let's suppose you have the default configuration for Node.js hosting:

- Runtime: nodejs 14   
- Entrypoint: index.js 
- DocumentRoot: www

> [!primary]
>
> To verify your configuration, you can use the [Retrieve active configuration](/pages/labs/web-power/getting-started#api-get-active-configuration) API endpoint.

[Connect via SSH](/pages/labs/web-power/getting-started#ssh) to your POWER web hosting.

Let's begin by going into the `www` folder and retrieving WikiJS source:


```sh
cd www
wget https://github.com/Requarks/wiki/releases/download/2.5.170/wiki-js.tar.gz
tar xzf wiki-js.tar.gz
rm -f wiki-js.tar.gz
```

Create a `config.yml` file:

```yaml
port: 3000
db:
  type: sqlite
  storage: database.sqlite
logLevel: info
dataPath: ./data
```

and rebuild the `sqlite3` module: 

```sh
npm rebuild sqlite3
```

Make the symlink for the entry point:

```sh
ln -fs server/index.js index.js
```

Then [restart your instance](/pages/labs/web-power/getting-started#restart) and your WikiJS will be online.


![WikiJS](images/nodejs-install-wikijs-01.png){.thumbnail}


Terminal output:

<pre class="console"><code> ~ $ cd  www

~/www $ wget https://github.com/Requarks/wiki/releases/download/2.5.170/wiki-js.tar.gz
--2021-02-03 14:50:23--  https://github.com/Requarks/wiki/releases/download/2.5.170/wiki-js.tar.gz
Resolving github.com (github.com)… 140.82.121.4
Connecting to github.com (github.com)|140.82.121.4|:443… connecté.
TTP request sent, awaiting response... 200 OK
Length: 65010291 (62M) [application/octet-stream]
Saving to: « wiki-js.tar.gz »

wiki-js.tar.gz                100%[===============================================>]  62,00M  19,9MB/s    ds 3,1s

2021-02-03 14:50:28 (19,9 MB/s) — « wiki-js.tar.gz » saved [65010291/65010291]

~/www $ tar xzf wiki-js.tar.gz

~/www $ rm -f wiki-js.tar.gz

~/www $ vi config.yml
port: 3000
db:
  type: sqlite
  storage: database.sqlite
logLevel: info
dataPath: ./data
 
~/www $ npm rebuild sqlite3 
> sqlite3@5.0.0 install /home/user/www/node_modules/sqlite3
> node-pre-gyp install --fallback-to-build 
node-pre-gyp WARN Using request for node-pre-gyp https download
[sqlite3] Success: "/home/user/www/node_modules/sqlite3/lib/binding/napi-v3-linux-x64/node_sqlite3.node" already installed
Pass --update-binary to reinstall or --build-from-source to recompile
sqlite3@5.0.0 /home/user/www/node_modules/sqlite3 
 
~/www $ ln -fs server/index.js index.js

~/www $ mkdir -p tmp

~/www $ touch tmp/restart.txt
</code></pre>


## Go further

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/).

**Join [our Discord](https://discord.gg/ovhcloud) on our web-hosting-power channel to discuss directly with the team and other users of this lab.**