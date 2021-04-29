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

**Last updated 29th April 2021**

## Objective

OVHcloud Managed Kubernetes service provides you Kubernetes clusters without the hassle of installing or operating them. This guide will cover the creation of a new cluster.

## Requirements

A Public Cloud project in your OVHcloud account

## Instructions

Access our administration UI for your OVHcloud Managed Kubernetes clusters by clicking on the *Containers and Orchestration* menu in the Public Cloud section of the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia), then go to the `Managed Kubernetes Service`{.action} category and click on `Create a cluster`{.action}.

![Create a cluster](images/creating-a-cluster-01.png){.thumbnail}

Select a location for your new cluster.

![Select a location](images/creating-a-cluster-02.png){.thumbnail}

Choose the minor version of Kubernetes. 

> [!primary]
> We recommend you to always use the last stable version. 
> Please read our [End of life / end of support](../eos-eol-policies/) page to understand our version policy.

![Choose the minor version of Kubernetes](images/creating-a-cluster-03.png){.thumbnail}

You can now choose to integrate your Kubernetes cluster into a private network using OVHcloud vRack. For more information about this option, please read our [Using the vRack](../using_vrack/) guide.

![Choose a private network for this cluster](images/creating-a-cluster-04.png){.thumbnail}

Now you can configure the default node pool. A node pool is a group of nodes sharing the same configuration, allowing you a lot of flexibility in your cluster management. 

> [!primary]
> You can read the [Managing node pools](../managing-nodes/) guide to get more information on node pools.

Then choose the size of the default node pool, and the type of instance.

![Choose the size of the default node pool, and the type of instance](images/creating-a-cluster-05.png){.thumbnail}

In the next step you can activate anti-affinity, and choose the billing mode (monthly or hourly).

> [!primary]
> By enabling anti-affinity, current and future nodes will be launched on different hypervisors (physical servers), guaranteeing higher fault tolerance. Anti-affinity node pools can only include up to 5 nodes.

![Choose the billing mode](images/creating-a-cluster-06.png){.thumbnail}

Finally, name your cluster and click the `Send`{.action} button.

![Name your cluster](images/creating-a-cluster-07.png){.thumbnail}

Your cluster creation is now in progress, it should be available within a few minutes.

![Name your cluster](images/creating-a-cluster-08.png){.thumbnail}

## Go further

To have an overview of OVHcloud Managed Kubernetes service, you can go to the [OVHcloud Managed Kubernetes page](https://www.ovhcloud.com/en-gb/public-cloud/kubernetes/).

Otherwise to skip it and push to deploy your first application on your Kubernetes cluster, we invite you to follow our guide to [configuring default settings for `kubectl`](../configuring-kubectl/) and [deploying a Hello World application](../deploying-hello-world/) .

Join our [community of users](https://community.ovh.com/en/).
