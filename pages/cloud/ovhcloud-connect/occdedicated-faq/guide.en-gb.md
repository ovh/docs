---
title: FAQ
slug: occdedicated-faq
excerpt: 'FAQ - OVHcloud Dedicated Connect'
section: Dedicated
---

**Last updated 30th March 2020**

## Objective

We will list and answer the most frequently asked questions from customers on OVHcloud Connect.

## Questions

### 1. What is the OVHcloud Connect solution designed for?

With OVHcloud Connect, you can link your company network to your private OVHcloud vRack network, without creating a VPN tunnel through the internet. This will give you a quicker, more stable connection with guaranteed bandwidth.

### 2. Which products are compatible with OVHcloud Connect?

OVHcloud Connect is an extension of your OVHcloud vRack private network, so all products with the vRack feature enabled will be compatible.


### 3. How do I choose between a layer 2 or layer 3 cross-connection for the OSI model?

You will need to keep in mind the features associated with layer 2 and layer 3 networks as you build your infrastructure, so that you select the best cross-connection for your hybrid cloud requirements.

#### Layer 2 OSI

The OVHcloud Connect product dedicated to layer 2 means that the connection is transparent to the Ethernet protocol.

The advantage of a layer 2 connection is that it simplifies the way you connect your datacentre’s campus network to your OVHcloud vRack private network. 

You will need basic knowledge of how to use LAN networks. 

Redundancy can be local within the same point of presence (PoP), using LACP 802.3ad protocol.

The virtual local area networks (VLANs) are the same in your datacentre and within OVHcloud datacentres.

#### Layer 3 OSI

The layer 3-dedicated OVHcloud Connect product is a connection managed by routers. 

The advantage of a layer 3 cross-connection is that you can connect your company’s WAN network to your OVHcloud vRack private network, so that it is considered as a site within your WAN network. 

You will need advanced knowledge of MAN and WAN networks, as well as knowledge of how to manage inter-network routing. 

Layer 3 networks require one or more private external BGP sessions to be established between the company and OVHcloud. 

Redundancy can be local within the same point of presence (PoP), and geographical between two points of presence (PoPs) using BGP redundancy mechanisms.

The virtual local area networks (VLANs) are not the same in your datacentre and within OVHcloud datacentres.

### 4. Can OVHcloud host my routers?

OVHcloud does not host network hardware for customers in datacentres and points of presence (PoPs). Customers need to have their hardware hosted by an operator, or by a third party, then request a connection to OVHcloud hardware in the MeetMeRoom (MMR) of the points of presence. Information on how to do this is listed in the Letter of Authorisation (LOA). 


### 5. What connections are supported for OVHcloud Connect?

We support single-mode fibre optic, your SFP/SFP+ must support either 1000LX/LH or 10G-LR.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
