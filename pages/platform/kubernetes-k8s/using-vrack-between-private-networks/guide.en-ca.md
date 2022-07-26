---
title: Using vRack - Communicating between different private networks
slug: using-vrack-between-private-networks
excerpt: ''
section: Network
order: 01
---

**Last updated July 25th, 2022.**

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

By default, your Kubernetes clusters will have public IPs. For some uses cases, or for security reasons, you might prefer having your Kubernetes cluster inside a private network. 

OVHcloud [vRack](https://www.ovh.com/ca/en/solutions/vrack/) is a private networking solution that enables our customers to route traffic between OVHcloud dedicated servers as well as other OVHcloud services. 

When your Managed Kubernetes and your other services are both in the vRack, but in different private networks, some extra configuration is needed. In this document, you will find an explanation of why this extra configuration is needed and how to do it.


> [!warning]
> You can now [create and use a custom gateway on an OVHcloud Managed Kubernetes cluster](../vrack-k8s-custom-gateway) but if you don't want to, the content of this guide is still relevant.

In this document we suppose that you have some understanding of how to use OVHcloud Managed Kubernetes in the vRack. To get more information on this topic you can look at the [Using vRack Private Network](../using_vrack/) guide and [Working with vRack example - Managed Kubernetes and Public Cloud instances](../vrack-example-k8s-and-pci/) tutorial.

## Networking in Managed Kubernetes inside the vRack

In order to better see why some extra configuration is needed, let's begin by explaining how the OVHcloud Managed Kubernetes integration with vRack private networks is done. 


### OVHcloud Managed Kubernetes without vRack

Let's have a look at our Managed Kubernetes without vRack. Both the master and the nodes have IP addresses in a network exposed on the internet:

![OVHcloud Managed Kubernetes without vRack](images/using-vrack-01.jpg){.thumbnail}

All the traffic between the master and the nodes is done using these IP addresses, as does administrative traffic and traffic to/from resources outside the cluster.

![OVHcloud Managed Kubernetes without vRack](images/using-vrack-02.jpg){.thumbnail}


### OVHcloud Managed Kubernetes inside vRack

When you put an OVHcloud Managed Kubernetes cluster in a private network in the vRack, a new network interface connected to this private network is added to every node. 

![OVHcloud Managed Kubernetes inside vRack](images/using-vrack-03.jpg){.thumbnail}

Using the addresses and names in the schema, each node has a `eth0` network interface to the external network, and a `eth1` to the private network. `eth0` is dedicated to the communication between nodes and master, to your managed service administration traffic and to communication with external services. Pod to pod traffic, and traffic to the private network is routed through `eth1`.

In order to allow this routing, the default gateway for each node is in the external network, via their `eth0` interface, and only the traffic towards the private network is routed through `eth1`.

![OVHcloud Managed Kubernetes inside vRack](images/using-vrack-04.jpg){.thumbnail}

For this use case, no additional configuration is needed, you simply have to choose the private network at the creation of your Managed Kubernetes cluster, as explained in the [Using vRack Private Network](../using_vrack/) guide and [Working with vRack example - Managed Kubernetes and Public Cloud instances](../vrack-example-k8s-and-pci/) tutorial.


### Communication between different private networks

In some use cases you don't want to have a single private network, but several ones, while keeping the capacity to communicate between them (one of the strong points of the vRack is to allow a transparent communication between your private networks).

This use case currently asks for additional configuration on the OVHcloud Managed Kubernetes cluster side.

> [!warning]
> The need of extra manual configuration described in this guide is **temporary**. Our Managed Kubernetes team is working on a more streamlined solution, as explained in [this issue](https://github.com/ovh/public-cloud-roadmap/issues/116) in our [Public Cloud roadmap](https://github.com/ovh/public-cloud-roadmap/).

### The problem

 The reason is the networking model we have detailed in the precedent point. Let's adapt the precedent schema to make the PCI virtual machine to be in a different private network than the Managed Kubernetes cluster:
 
![Communication between different private networks](images/using-vrack-05.jpg){.thumbnail}

As explained before, in order to allow pod to master communication, the default gateway for Managed Kubernetes nodes is in the external network, by `eth0`, and only the traffic to the private network to which the cluster is attached is routed to `eth1`.

That means that if in our schema *Pod 3* wants to communicate with the PCI *vm1*, that is in a different private network, the traffic won't get routed to `eth1` but to `eth0` towards the default gateway, that has no access to *vm1*, thus the connection fails.

![Communication between different private networks](images/using-vrack-06.jpg){.thumbnail}


### The solution

The solution to this problem is to push the routes to the additional private networks via the DHCP of the private networks. This informs the nodes that traffic to the private networks is to be sent via `eth1` instead of `eth0`:

![Communication between different private networks](images/using-vrack-07.jpg){.thumbnail}

With this setup, if in our schema *Pod 3* wants to communicate with the PCI *vm1*, that is in a different private network, the traffic is routed to `eth1`, and thus to *vm1*:

![Communication between different private networks](images/using-vrack-08.jpg){.thumbnail}

## Go further

Join our [community of users](https://community.ovh.com/en/).