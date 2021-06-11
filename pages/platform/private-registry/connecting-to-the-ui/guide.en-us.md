---
title: 'Connecting to the UI'
excerpt: ''
slug: connecting-to-the-ui
section: 'Getting started'
order: 2
---

**Last updated 20<sup>th</sup> January, 2020.**

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

- An OVHcloud Managed Private Registry (see the [creating a private registry](../creating-a-private-registry/) guide for more information)


## Instructions

1. On your OVHcloud Public Cloud Manager, select your *Managed Private Registry* and click on the *more options* (*...*) button at the right end

    ![Managing users and projects](images/connecting-to-the-ui-001-s.jpg){.thumbnail}

1. Select Harbor UI ([Harbor](https://goharbor.io/) is the open source engine running your OVHcloud Managed Private Registry)

    ![Managing users and projects](images/connecting-to-the-ui-002-s.jpg){.thumbnail}

1. On the login page of Harbor UI, introduce the credentials (user and password) of your OVHcloud Managed Private Registry

    ![Managing users and projects](images/connecting-to-the-ui-003-s.jpg){.thumbnail}


Now you can use Harbor UI to manage your private registry

![Managing users and projects](images/connecting-to-the-ui-004-s.jpg){.thumbnail}



## Go further

To go further you can look at our guide on [Managing users and projects](../managing-users-and-projects/).