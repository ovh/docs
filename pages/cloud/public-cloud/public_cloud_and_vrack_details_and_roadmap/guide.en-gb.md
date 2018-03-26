---
title: Public Cloud and vRack - details and roadmap
excerpt: Public Cloud and vRack - details and roadmap
slug: public_cloud_and_vrack_-_details_and_roadmap
section: Knowledge base
---


## 
vRack is an OVH technology which lets you connect your different OVH services within private networks, wherever they are located. The services in question just have to be compatible with vRack. 

The vRack is a private virtual network which lets you connect your OVH services. For example you might connect dedicated servers in Beauharnois, Cloud servers in Strasbourg and a Dedicated Cloud in Roubaix.

Once the technology is enabled, your services can communicate with each other across a VLAN. Each VLAN being an isolated private network.


## 
The Public Cloud vRack is a third generation vRack. Some network equipment needs to be changed or updated in order for vRack to work. Several steps must be taken before it becomes fully available.


## Step 1: Only Public Cloud and only in Strasbourg and Gravelines
This stage is in production.
The first iteration will involve deploying this technology for Public Cloud instances in the Strasbourg and Gravelines datacentre.

This means that you will be able to make instances in the same project communicate with each other if they are deployed in the SBG1 or GRA1 region.


## Step 3: all the datacentres will be connected
This stage is in production.
In the second iteration of the cycle, vRack will be available in all the regions. As well as SBG1 and GRA1, it will be possible to also enable the vRack in Beauharnois in the BHS1 region. 

In addition, the different regions will be linked together, communication will be possible between datacentres in the same group. 

Private networks which carry the same ID will be automatically connected. It will be possible for an SBG1 instance to communicate with an instance in the same group in the same private network in BHS1 or GRA1.


## Step 2: vRack Public Cloud will be open to other vRack products
It will be possible to use vRacks to connect Public Cloud instances with other OVH products. 

You just have to add the services to the vRack where the Public Cloud already exists to make them communicate. All the OVH services connected to the same vRack will be able to communicate with each other, whether they are located in Strasbourg, Beauharnois or in other OVH datacentres. For example, for a Public Cloud project, instances locared in BHS1 will be able to communicate with instances located in SBG1 but also with a Dedicated Cloud in Roubaix.


## 
On a dedicated server, there are two ways to configure the vRack network interface (known as eth1 under Linux).


- eth1: 192.168.0.2 - Here we have directly assigned a private address to eth1.

In this case the vRack network will implicitly use VLAN ID 0 to make the servers communicate. 

- eth1.8: 10.8.0.2 - Here we have tagged eth1 with the VLAN ID 8. We have chosen the VLAN ID that we are going to use and we will assign a private address to this tagged interface. 


Thus, all the VLANs are led to the dedicated server's interface and the choice of VLAN will be made by the network interface's configuration depending on the ID used.

For Public Cloud, in order to use private networks, you have to connect a project to a vRack. 

Once the project is connected to a vRack, you can create private networks which will directly carry the VLAN ID that you have chosen. This means that it is no longer necessary to tag the interfaces in the instances because they are directly isolated at the private network level. 

One of the consequences of this is that when you are using lots of VLANS the Public Cloud instances will have multiple network interfaces (eth1, eth2 etc.) whereas with a Dedicated server you have to use the same interface but with different tags (eth1.4, eth1.123 etc.).


## 
[Public Cloud and vRack - How to use the vRack and private networks with Public Cloud instances?]({legacy}2162)


## 
[Configure user access to Horizon]({legacy}1773)

