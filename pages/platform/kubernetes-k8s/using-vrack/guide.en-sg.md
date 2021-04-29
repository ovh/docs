---
title: Using vRack Private Network
slug: using_vrack
excerpt: ''
section: User guides
order: 8
---

**Last updated 29th April 2021**

## Objective

OVHcloud Managed Kubernetes service provides you Kubernetes clusters without the hassle of installing or operating them. 

By default, your Kubernetes clusters will have public IPs. For some uses cases, or for security reasons, you could prefer having your Kubernetes cluster inside a private network. This guide will cover the integration of OVHcloud Managed Kubernetes cluster into vRack Private Networks.

## Requirements

A OVHcloud Public Cloud project. 


## Instructions

First of all, you will need to set up vRack Private Network for your Public Cloud. To do it, please follow the [Configuring vRack for Public Cloud](../../public-cloud/public-cloud-vrack/) guide. After having created a vRack and added it a Private Network, you can continue. 

The easiest way to integrate a cluster into vRack Private Network is to do it at cluster creating.

At the third step on cluster creation, you can choose a private network for the cluster:

![Choose a private network for this cluster](images/using-vrack-01.png){.thumbnail}

Your new cluster will be created inside the vRack Private Network you have chosen.

In the Managed Kubernetes Service Dashboard, you will see the cluster, with the chosen private network in the *Attached network* column:

![Private network information in Attached network column](images/using-vrack-02.png){.thumbnail}


## Known limits

- All nodes within a Kubernetes cluster with vRack Private Network activated are available with that single Private Nework. (No public/private mix, single private network available).
- To expose some workload on the internet, you can use the External Load Balancers that are now compatible with nodes in Vrack.
- The OVHcloud public cloud does not support security groups on vRack. This is planned to be supported late 2021.
- You will still see a public IPv4 address on your worker nodes. This IP won't be reachable from the internet, and used exclusively for the administration of your nodes and its link to the Kubernetes control plane.