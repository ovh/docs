---
title: OVHcloud Dedicated Connect service provisioning
slug: occdedicated-delivery
excerpt: 'Delivery process for the OVHcloud Dedicated Connect solution'
section: Getting started
order: 1
---

**Last updated 14th September 2020**

## Objective

OVHCloud Connect allows you to connect your company network to your private network at OVHcloud (local and international data centres) in a completely isolated and secure way.

**This guide lists the necessary steps for setting up the OVHcloud Connect service.**

## Requirements

### Requesting the OVHcloud Connect documentation from the Support team and your Account Manager

We offer two guides:

- The Deployment Guide, which serves as a reference document for understanding all of the technical details regarding the OVHcloud Connect solution.

- The Cookbook, which provides a condensed version of the information in the Deployment Guide, and also offers a number of configuration examples.

### Defining the target architecture

Depending on your needs, choose between one or more layer 2 or layer 3 connections, with a speed of 1Gbps or 10Gbps. A layer 3 connection with BGP protocol allows for more flexibility and redundancy, with high availability between different points of presence (PoPs).

If you need further information, you can contact your Account Manager to organise a workshop with your WAN network provider and an OVHcloud resource expert who specialises in the OVHcloud Connect solution.

## Instructions

### Step 1: Order the OVHcloud Connect cross-connections directly via the OVHcloud website

Visit [**this page**](https://www.ovh.co.uk/solutions/ovhcloud-connect/){.external} and log in using your OVHcloud credentials to order **each connection**. The following features will be offered:

- The maximum port speed:
    + 1Gbps
    + 10Gbps

- The number of ports on the OVHcloud Connect routers:
    + 1 port 
    + 2 ports (L2: LACP protocol mandatory, L3: BGP mandatory) to have local redundancy for the PoP

- The OVHcloud Connect PoP:
    + OVHcloud Connect points of presence are listed [**here**](https://www.ovh.co.uk/solutions/ovhcloud-connect/){.external}, and updated regularly.
    + If a connection request is made to a PoP that is unavailable, please contact the Support team or your Account Manager for more information.

- The network level of the OSI connection model: 

    + Layer 2: Ethernet 
    + Layer 3: BGP

If you have an architecture with two OVHcloud Connect connections in two different PoPs, you will need to place two different orders.

Once your orders have been processed, your billing contact will receive a summary email containing:

- the configuration details to provide to the OVHcloud Support team, in order to set up your OVHcloud Connect solution 

- the Letter of Authorisation (LOA), so that you or your provider can order the cross-connection in the MMR (meet-me room) from the manager of the PoP

### Step 2: From your WAN network provider, order the cross-connection to the OVHcloud Connect points of presence

Your WAN network provider or your technical teams will also need to order the cross-connection in the MMR (meet-me room) from the manager of the PoP.

### Step 3: Send the Support Team your OVHcloud Connect cross-connections, validated by your technical teams or WAN network provider

The information you need to provide is as follows for a Layer 3 configuration:

**Point of presence (PoP) side**

| PoP name    | Port speed | Network /30 cross-connections | Private AS ID for OVHcloud routers | Private or public AS ID for your routers |
|:-------:|:------:|:-----:|:---:|:---:|
| PoP 1   | 1 or 10Gbps | x.x.x.x/30 | Between 64,512 and 65,534 | xxx |
| PoP 2 (option) |1 or 10Gbps |x.x.x.x/30 | same as above|  same as above |  

The OVHcloud Connect PoP routers will have the first usable IP address of the network/30.

**OVHcloud data centre side**

| Data centre name | Incoming network minimum /28 in the vRack | If static routing in vRack, static route | If static routing in vRack, next hop | If BGP dynamic routing in the vRack, private AS ID for your virtual routers | If BGP dynamic routing in the vRack, IP address of your virtual router for network /28| Your vRack ID |
|:-------:|:------:|:-----:|:---:|:---:|:---:|:---:|
| DC1 | x.x.x.x/28 |  |  | | |pn-xxx |
| DC2 (option) | different to the one above |  |  | | | same as above |

On the data centre side, the OVHcloud Connect routers will have the first three usable IP addresses of the incoming network in the table above (the first IP for the virtual address of the VRRP cluster, the second IP for router 1 of the cluster, the third IP for router 2 of the cluster). 

If you have any questions on how to configure this, please contact the Support team or your Account Manager.

### Most common issues when setting up an OVHcloud Connect cross-connection

- A lack of cross-connection between the receiving elements, and RX/TX transmissions between OVHcloud routers and “your” routers. Request for the manager at the PoP to reverse the fibre optic connection.

- Check optical levels in emission and reception. If after switching TX/RX you still have no power on reception, request a double-check on the cross-connect with the position from the LOA.

- Disable autonegotiation. The speed value setting is not always sufficient, some additional commands might be needed:

| OS Model | Command |
|:--------:|:-----------------|
| IOS | speed nonegotiate |
| NX-OS | no negotiation auto |

- Check your SFP/SFP+: 1000Base-LX/LH for 1Gb/s speed, 10GBase-LR for 10Gb/s speed.

- If more than 100 networks are announced through each BGP session, the session will automatically expire. To prevent this from happening, you will need to consolidate your networks.

- If you have any doubts regarding the configuration, please contact our Support team to receive an extract of the configuration set up by OVHcloud.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
