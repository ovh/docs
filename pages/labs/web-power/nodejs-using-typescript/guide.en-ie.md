---
title: Using TypeScript on your POWER web hosting plan
excerpt: Find out how to use TypeScript on your POWER web hosting plan
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

You've subscribed to a Web POWER web hosting plan to deploy **Node.js** applications, and you want to deploy [TypeScript](https://www.typescriptlang.org/){.external} code.

This guide will explain how to do it.


**Find out how to install Strapi on your POWER web hosting plan.**


## Requirements

- A [Node.js](https://labs.ovh.com/managed-nodejs) POWER web hosting plan
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie)

If you have just started to use your Web POWER web hosting plan, we suggest to have a look at our [Getting started with a POWER web hosting plan](/pages/labs/web-power/getting-started) guide before going further.

## Instructions

TypeScript projects can't run directly by our stack, they should be compiled to JS first.

You should include typescript as dev dependency module for your project:

```sh
npm add --save-dev typescript
```

Create a `tsconfig.json` (if you don't have one already) with the following content for example (see the [TypeScript doc](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html){.external} for more information):

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "rootDir": "./",
    "outDir": "./build",
    "esModuleInterop": true,
    "strict": true
  }
}
```

Build the project, either directly with `tsc` command:

```
npx tsc  --project ./
```

or by adding the build script to the `package.json`:

```json
"scripts": {
  "build": "tsc --project ./"
},
```

and executing it with `npm run build`.

Your entrypoint should point to the one in your output dir, for example :

```sh
ln -s build/server.js server.js
```

## Go further

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/).

**Join [our Gitter room](https://gitter.im/ovh/power-web-hosting) to discuss directly with the POWER Web Hosting team and the other users of this lab.**