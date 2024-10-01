---
title: 'Connecting to the UI'
excerpt: ''
updated: 2021-09-24
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
   color: #ccc;
   font-family: monospace !important;
   font-size: 0.75em;
 }
 .small {
     font-size: 0.75em;
 }
</style>

## Objective

OVHcloud Managed Private Registry service provides you a managed, authenticated Docker registry where you can privately store your Docker images. This managed private registry is an instance of [Harbor](https://goharbor.io/), an open source trusted cloud native registry project that stores, signs, and scans Docker images. This guide will explain how connect to Harbor UI to operate your OVHcloud Managed Private Registry service.

## Requirements

- An OVHcloud Managed Private Registry (see the [creating a private registry](/pages/public_cloud/containers_orchestration/managed_private_registry/creating-a-private-registry) guide for more information)

## Instructions

1. In your [OVHcloud Control Panel](/links/manager), select your `Managed Private Registry`{.action}, click on the *more options* (`...`{.action}) button at the right end and click on `Harbor user interface`{.action}:

    ![Managing users and projects](images/connecting-to-the-ui-002.png){.thumbnail}

2. On the login page of the [Harbor](https://goharbor.io/) UI, the open source engine running your OVHcloud Managed Private Registry, enter the credentials (user and password) of your OVHcloud Managed Private Registry:

    ![Managing users and projects](images/connecting-to-the-ui-003.png){.thumbnail}

Now you can use the Harbor UI to manage your private registry

![Managing users and projects](images/connecting-to-the-ui-004.png){.thumbnail}

## Go further

To go further you can look at our guide on [Managing users and projects](/pages/public_cloud/containers_orchestration/managed_private_registry/managing-users-and-projects).
