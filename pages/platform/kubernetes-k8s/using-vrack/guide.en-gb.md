---
title: Using vRack Private Network
slug: using_vrack
excerpt: ''
section: User guides
order: 8
---

**Last updated July 31th<sup>th</sup>, 2021.**

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

## Objective

OVHcloud Managed Kubernetes service provides you Kubernetes clusters without the hassle of installing or operating them. 

By default, your Kubernetes clusters will have public IPs. For some uses cases, or for security reasons, you could prefer having your Kubernetes cluster inside a private network. 

OVHcloud [vRack](https://www.ovh.co.uk/solutions/vrack/) is a private networking solution that enables our customers to route traffic between OVHcloud dedicated servers as well as other OVHcloud services. 

This guide will cover the integration of OVHcloud Managed Kubernetes clusters into vRack private networks.

## Requirements

- A Public Cloud project in your OVHcloud account

## Instructions

First of all, you will need to set up vRack Private Network for your Public Cloud. To do it, please follow the [Configuring vRack for Public Cloud](../../public-cloud/public-cloud-vrack/) guide. Once you have created a vRack and added it into a Private Network, you can continue. 

Integrating a cluster into a vRack Private Network must be done at the third step on cluster creation, when you can choose an existing private network for the cluster:

![Choose a private network for this cluster](images/using-vrack-01.png){.thumbnail}

Your new cluster will be created inside the vRack Private Network you have chosen.

In the Managed Kubernetes Service Dashboard, you will see the cluster, with the chosen private network in the *Attached network* column:

![Private network information in Attached network column](images/using-vrack-02.png){.thumbnail}


## Known limits

- All nodes within a Kubernetes cluster with vRack Private Network activated are available with that single Private Nework. (No public/private mix, single private network available).
- To expose some workload on the Internet, you can use the External Load Balancers that are now compatible with nodes in Vrack.
- The OVHcloud Public Cloud does not support security groups on vRack. This is planned to be supported late 2021.
- You will still see a public IPv4 address on your worker nodes. This IP won't be reachable from the Internet, and used exclusively for the administration of your nodes and its link to the Kubernetes control plane.

## Go further

Join our [community of users](https://community.ovh.com/en/).
