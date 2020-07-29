---
title: Creating a cluster
slug: creating-a-cluster
excerpt: ''
section: Getting started
order: 0
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
   font-size: 0.75em;
   color: #ccc;
 }
 .small {
     font-size: 0.75em;
 }
</style>

**Last updated July 23<sup>th</sup> July, 2020.**

## Objective

OVHcloud Managed Kubernetes service provides you Kubernetes clusters without the hassle of installing or operating them. This guide will cover the creation of a new cluster.

## Requirements

A OVHcloud Public Cloud project.

## Instructions

Access our administration UI for your OVHcloud Managed Kubernetes clusters by clicking on the *Containers and Orchestration* menu in the [OVH Cloud Manager](https://www.ovh.com/manager/cloud/), then go to the *Managed Kubernetes Service* category and click on *Create a cluster* button.

![Create a cluster](images/creating-a-cluster-01.png){.thumbnail}

Select a location for your new cluster.

![Select a location](images/creating-a-cluster-02.png){.thumbnail}

Choose the minor version of Kubernetes. 

> [!primary]
> We recommend you to use always the last stable version. 
> Please read our [End of life / end of support](../eos-eol-policies/) for understand our version policy.

![Choose the minor version of Kubernetes](images/creating-a-cluster-03.png){.thumbnail}

Now you can configure the default node pool. A node pool is a groups of nodes sharing the same configuration, allowing you a lot of flexibility in your cluster management. 

> [!primary]
> You can go to the [Managing node pools](../managing-nodes/) section to have more information on node pools.

Then choose the size of the default node pool, and the type of instance.

![Choose the size of the default node pool, and the type of instance](images/creating-a-cluster-04.png){.thumbnail}

And choose the billing mode (monthly or hourly).

![Choose the billing mode](images/creating-a-cluster-05.png){.thumbnail}

Finally, name your cluster and click on the *Send* button.

![Name your cluster](images/creating-a-cluster-06.png){.thumbnail}

Your cluster creation is now in progress, it should be available in a few minutes.

![Name your cluster](images/creating-a-cluster-07.png){.thumbnail}

## Go further

To have an overview of OVHcloud Managed Kubernetes service, you can go to the [OVHcloud Managed Kubernetes site](https://www.ovh.com/public-cloud/kubernetes/).

Otherwise to skip it and push to deploy your first application on your Kubernetes cluster, we invite you to follow our guide to [configuring default settings for `kubectl`](../configuring_default_settings_for_kubectl/configuring_default_settings_for_kubectl/) and [deploying an application](../deploying_an_application/deploying_an_application/) .

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/).