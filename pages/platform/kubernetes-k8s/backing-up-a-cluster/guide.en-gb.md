---
title: Backing up a OVH Managed Kubernetes cluster
slug: backing-up-a-cluster
excerpt: 'Find out how to back up a OVH Managed Kubernetes cluster using Velero'
section: Tutorials
---

**Last updated 2<sup>nd</sup> August, 2019.**

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
    font-size: 0.75em;
    color: #ccc;
    }
    .small {
        font-size: 0.75em;
    }
</style>

In this tutorial we are going to guide you with the backing up of a OVH Managed Kubernetes cluster using [Velero](https://velero.io). 

The question of *how to backup an OVH Managed Kubernetes cluster* comes recurrently, and in this tutorial you will get some answers with a quick and painless solution: install [Velero](https://velero.io){.external} with the [Plugin Velero Openstack](https://github.com/cisco-sso/velero-plugin-Openstack){.external}. 


## Before you begin

This tutorial presupposes that you already have a working OVH Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [deploying a Hello World application](../deploying-hello-world/) documentation.

You also need to have [Helm](https://docs.helm.sh/){.external} installed on your workstation and your cluster, please refer to the [How to install Helm on OVH Managed Kubernetes Service](../installing-helm/) tutorial.

## Velero

As explained in [Velero](https://velero.io){.external} website, *Velero is an open source tool to safely backup and restore, perform disaster recovery, and migrate Kubernetes cluster resources and persistent volumes*.

By default Velero supports a variety of storage providers, and it has a plugin system for easily  additional backup and volume storage platforms. In this tutorial we are using this extensibility capacities by installing the [Plugin Velero Openstack](https://github.com/cisco-sso/velero-plugin-Openstack){.external} allowing Velero to use Openstack as both backup and volume storage platform.

## Installing Velero on OVH Managed Kubernetes



