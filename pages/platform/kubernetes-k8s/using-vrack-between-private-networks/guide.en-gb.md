---
title: Using vRack - Communicating between different private networks
slug: using-vrack-between-private-networks
excerpt: ''
section: Technical resources
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

When your Managed Kubernetes and your other services are both in vRack, but in different private networks, some extra configuration is needed. In this document, you will find an explanation of why this extra configuration is needed and how to do it.


> [!warning]
> The need of extra manual configuration described in this guide is **temporary**. Our Managed Kubernetes team is working on a more streamlined solution, as explained in [this issue](https://github.com/ovh/public-cloud-roadmap/issues/116) in our [Public Cloud roadmap](https://github.com/ovh/public-cloud-roadmap/).
>

In this document we suppose that you have some understanding of how to use OVHcloud Managed Kubernetes in the vRack. To get  ore information nn this topic you can look at the [Using vRack Private Network](../using_vrack/) guide and [../vrack-example-k8s-and-pci/](Working with vRack example - Managed Kubernetes and Public Cloud instances) tutorial.


## Networking in Managed Kubernetes inside the vRack


