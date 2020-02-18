---
title: 'Using the Helm Chart Museum'
excerpt: ''
slug: using-helm-chart-museum
section: 'Tutorials'
---


**Last updated 18<sup>th</sup> February, 2020.**

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

OVHcloud Managed Private Registry service is a composite cloud-native registry which supports both container image management and [Helm](https://helm.sh/){.external} [chart](https://docs.helm.sh/developing_charts){.external} management. This guide will explain how to manage Helm charts in the OVHcloud Managed Private Registry service: how to upload charts, list the available ones and use them.

##  Requirements

- An OVHcloud Managed Private Registry (see the [creating a private registry](../creating-a-private-registry/) guide for more information)
- An access to the Harbor UI to operate the private registry (see the [connecting to the UI](../connecting-to-the-ui/) guide for more information)
- A private project and an user with the right to read and write on the project (see the [managing users and projects](../managing-users-and-projects/) guide for more information)
- An OVHcloud Managed Kubernetes with Helm installed (see the [installing helm](../../kubernetes-k8s/installing-helm/) guide for more information)


## Instructions

### Manage Helm Charts via the Harbor UI

If you go to the Harbor UI and click on your project, you will see 