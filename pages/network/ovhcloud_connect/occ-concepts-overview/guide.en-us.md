---
title: Concepts overview
excerpt: 'Concepts overview - OVHcloud Connect'
updated: 2020-09-14
---

**Last updated 14th September 2020**

## What is OVHcloud Connect?

OVHcloud Connect describes a connection between your vRack and an external network.

![OVHcloud Connect](images/VrackConnectDedicated.png){.thumbnail}

## Benefits of OVHcloud Connect

### Dedicated service

Dedicated Mode is a direct connection with OVHcloud devices. You can manage different configurations, from a single connection to a multiple one using LACP (Layer 2) or BGP-ECMP (Layer 3) with port speed at 1Gb or 10Gb. Interface and bandwidth are not shared with other customers.

### Private connection

Your traffic is isolated from the Internet. You manage your own VLANs (Layer 2) and/or your own IP addresses (Layer 3). Even BGP instances are private and you can configure the ASN you want.

OVHcloud Connect is connected to your vRack with all compatible services.

### Network extension

OVHcloud Connect can be connected either to your WAN or your data centre network, allowing extension to the cloud or even easing your migration by keeping VLAN topology or IP addresses.

### High availability

Using BGP, you can inter-connect your network through several PoPs and reach several OVHcloud data centres. From your vRack, configure BGP to enable maximum resiliency with distributed services.

## Components of OVHcloud Connect

### PoP - EntryPoint

Points of presence are facilities like Equinix, InterXion, Telehouse or Global Switch. OVHcloud Connect's service entry PoP is called *EntryPoint*.

### DC - EndPoint

The OVHcloud data centre is the service *EndPoint* of OVHcloud Connect.

### Cross-connect

A cross-connection is a physical link (monomode fiber) managed by the local facility team in the PoP. The cross-connection is established in the MMR (meet-me room) between the position given by OVHcloud and the position owned by the customer. The customer must order and manage the cross-connect for OVHcloud Connect Direct. 

### vRack

OVHcloud Private Network, available on compute resources between all OVHcloud data centres.

### BGP

BGP is the routing protocol to use when using Layer 3 mode.

## Principles of OVHcloud Connect

OVHcloud Connect is based on a virtual link between an *EntryPoint* and an *EndPoint*. The *EntryPoint* is where you want to make the inter-connection with OVHcloud. The *EndPoint* is the OVHcloud data centre with your services. You can choose any data centre in the same region as the PoP. 

### Layer 2 Mode (L2)

The virtual link is a L2 tunnel for OVHcloud Connect L2. Only one PoP/*EntryPoint* with one DC/*EndPoint* can be configured.

### Layer 3 Mode (L3)

The virtual link is a full mesh IP network between any PoP/*EntryPoint* and any DC/*EndPoint* of the same region.

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.
