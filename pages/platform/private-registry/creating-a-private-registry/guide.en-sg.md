---
title: 'Creating a private registry'
excerpt: ''
slug: creating-a-private-registry
section: 'Getting started'
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


A Docker Registry is a system that lets you store and distribute your Docker images. The best known Registry is the official [Docker Hub](https://hub.docker.com/){.external}, where you can find official public images such as [Alpine](https://hub.docker.com/_/alpine){.external}, [Golang](https://hub.docker.com/_/golang){.external} or [Debian](https://hub.docker.com/_/debian){.external}.

Today, OVHcloudallows you to spawn your own authenticated Docker Registry where you can privately store your Docker images. This is the best way to use your private images with our OVHcloudManaged Kubernetes Service offer without exposing them to everyone.


## Objective

OVHcloudManaged Private Registry service provides you a managed, authenticated Docker registry where you can privately store your Docker images. This guide will explain how to create your Private Registry.

## Instructions

1. First, log in to the OVHcloudPublic Cloud Manager.

1. In the left menu, in section *Orchestration/Industrialisation*, select *Managed Private Registry*.

    ![Create a Private Registry](images/create-a-private-registry-001-s.jpg){.thumbnail}

1. Then click on *Create a Private Registry*. During the beta, the private registry is totally free.

    ![Create a Private Registry](images/create-a-private-registry-002-s.jpg){.thumbnail}


1. In the pop-up *Create a private registry*, write a name for your private registry and read and accept the beta terms.

    ![Create a Private Registry](images/create-a-private-registry-003-s.jpg){.thumbnail}

1. So let's write `yourname-registry`, then tick the box to accept beta terms and click then on the blue button *Create*.

    ![Create a Private Registry](images/create-a-private-registry-004-s.jpg){.thumbnail}


1. Your private registry is being created...

    ![Create a Private Registry](images/create-a-private-registry-005-s.jpg){.thumbnail}


1. When status switches to *Ready*. click on the right end button...

    ![Create a Private Registry](images/create-a-private-registry-006-s.jpg){.thumbnail}


1. And select *Regenerate credentials*

    ![Create a Private Registry](images/create-a-private-registry-007-s.jpg){.thumbnail}

1. Then confirm to generate new credentials    

    ![Create a Private Registry](images/create-a-private-registry-008-s.jpg){.thumbnail}

1. Credential will be shown on the page. Please write then down, you will need them in order to use your private registry

    ![Create a Private Registry](images/create-a-private-registry-009-s.jpg){.thumbnail}


Congratulations, you have now a working OVHcloud Managed Private Registry

## Go further

To go further you can look at our guide on [Connecting to the UI](../connecting-to-the-ui/).
