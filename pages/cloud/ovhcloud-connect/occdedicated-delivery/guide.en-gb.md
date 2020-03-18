---
title: Installation
slug: occdedicated-delivery
excerpt: 'Setting up the OVHcloud Dedicated Connect solution'
section: Dedicated
---

**Last updated 18th March 2020**

## Objective

This guide lists the steps you need to take for setting up an OVHcloud Connect connection.

### Step 1: Request the OVHcloud Connect documentation from the support team and your Account Manager. 

We offer two guides:

* The Deployment Guide, which serves as a reference document for understanding all of the technical details for the OVHcloud Connect solution.

* The Cookbook, which provides a condensed version of the information in the Deployment Guide, and also offers a number of configuration examples.

### Step 2: Define the target architecture.

Depending on your needs, choose between one or more layer 2 or layer 3 connections, with a speed of 1Gbps or 10Gbps. A layer 3 connection with BGP protocol allows for more flexibility and redundancy, with high availability between different points of presence (PoPs).

If you need further information, you can contact your account manager to organise a workshop with your WAN network provider, and an OVHcloud resource expert who specialises in the OVHcloud Connect solution.


### Step 3: Order the OVHcloud Connect cross-connections directly via the OVHcloud website.

Visit [**this page**](https://www.ovh.co.uk/solutions/ovhcloud-connect/){.external} and log in using your OVHcloud credentials to order **each** connection. The following features will be offered:

* The maximum port speed: 

    - 1Gbps
    - 10Gbps

* The number of ports on the OVHcloud Connect routers: 

    - 1 port 
    - 2 ports (L2: LACP protocol mandatory, L3: BGP mandatory) to have local redundancy for the PoP


* The OVHcloud Connect point of presence (PoP): 

    - OVHcloud Connect points of presence are listed [**here**](https://www.ovh.co.uk/solutions/ovhcloud-connect/){.external}, and updated regularly.
    - If a connection request is made to a point of presence that is unavailable, please contact the support team or your account manager for more information.


* The network level of the OSI connection model: 

    - Layer 2: Ethernet 
    - Layer 3: BGP

If you have an architecture with two OVHcloud Connect connections in two different points of presence, you will need to place two different orders.

Once your orders have been processed, your billing contact will receive a summary email containing:

* The configuration details to provide to the OVHcloud support team, in order to set up your OVHcloud Connect solution 

* The Letter of Authorisation (LOA), so that you or your provider can order the cross-connection in the MeetMe Room (MMR) from the manager of the point of presence

### Step 4: From your WAN network provider, order the cross-connection to the OVHcloud Connect points of presence.

Your WAN network provider or your technical teams will also need to order the cross-connection in the MeetMe Room (MMR) from the manager of the point of presence.

### Step 5: Send the support team your OVHcloud Connect cross-connections, validated by your technical teams or WAN network provider.

The information you need to provide is as follows for layer 3 configurations:

**Point of presence (PoP) side**

| PoP name    | Port speed | Network /30 cross-connections | Private AS ID for OVHcloud routers | Private or public AS ID for your routers |
|:-------:|:------:|:-----:|:---:|:---:|
| PoP 1   | 1 or 10Gbps | x.x.x.x/30 | Between 64,512 and 65,534 | xxx |
| PoP 2 (option) |1 or 10Gbps |x.x.x.x/30 | same as above|  same as above |  

The PoP-side OVHcloud Connect routers will have the first usable IP address of the network/30.

**OVHcloud datacentre side**

| Datacentre name | Incoming network minimum /28 in the vRack | If static routing in vRack, static route | If static routing in vRack, next hop | If BGP dynamic routing in the vRack, private AS ID for your virtual routers | If BGP dynamic routing in the vRack, IP address of your virtual router for network /28| Your vRack ID |
|:-------:|:------:|:-----:|:---:|:---:|:---:|:---:|
| DC1 | x.x.x.x/28 |  |  | | |pn-xxx |
| DC2 (option) | different to the one above |  |  | | | same as above |

On the datacentre side, the OVHcloud Connect routers will have the first three usable IP addresses of the incoming network in the table above (the first IP for the virtual address of the VRRP cluster, the second IP for router 1 of the cluster, the third IP for router 2 of the cluster). 


If you have any questions on how to configure this, please contact the support team or your Account Manager.


### Step 6: Issues setting up an OVHcloud Connect cross-connection

The most common issues encountered during setup are:

* A lack of cross-connection between the receiving elements, and RX/TX transmissions between OVHcloud routers and “your” routers. Request for the manager at the point of presence to reverse the fibre optic connection.

* If more than 100 networks are announced through each BGP session, the session will automatically expire. To prevent this from happening, you will need to consolidate your networks.

* If you have any doubts regarding the configuration, please contact our support team to receive an extract of the configuration set up by OVHcloud.

## Go further

Join our community of users on <https://community.ovh.com/en/>.