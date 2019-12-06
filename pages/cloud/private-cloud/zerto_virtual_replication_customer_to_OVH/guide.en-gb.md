---
title: Setting up a VPN for your  OVHCloud Zerto DRP
slug: zerto-virtual-replication-customer-to-ovh
excerpt: learn how to setup a VPN tunnel to connect your on-premises plaftorm to your OVHCloud Private Cloud
section: Services et options OVH
---

## Introduction

This document will help you configure a virtual private network between an on-prem Zerto platform and an OVH Cloud Private Cloud.
We will use the OpnSense open source VPN Solution as an example, we will focus on the simplest configuration where the VPN tunnel arrives in the Zerto network. 

## Prerequisites

- The target private Cloud needs to have at least one public IP availaible for the VPN endpoint   
- The on-prem platform needs to have a Zerto platform installed
- The VRAs (Virtual Replication Appliances) on both side need to be able to connect to their counterparts on TCP ports 4007 and 4008
- Zerto administration consoles or ZVMs (Zerto Virtual Managers ) on both side need to be able to connect to their counterpart on TCP port 9081

## 1. Solution Architecture


![](images/image-EN-1.png)

## 2. Parameters

Customer side :

- VPN Endpoint public IP adress (1)
- VPN Endpoint internal IP adress (2)
- ZVM Internal IP adress (3)
- ZVM Internal network (4)

OVHCloud Side :

- VPN Endpoint public IP adress (5)
- ZVM Internal network (6)
- ZVM Internal IP adress (7)

**Note :** You need to decide in which network the OVHCloud ZVM must be deployed to avoid any overlap with local networks, which would prevent routing.
You can either accept the suggested network or provide your own, as long as it is a valid /23 range

## 3. Activate Zerto features

Feature activation is very simple from the OVHCloud control panel. You just need to select the datacenter associated to the PCC you want to use in the Disaster Recovery Plan tab.
![](images/image-EN-2.png)

Select « Between your infrastructure and an OVH Private Cloud  » then click  « Activate Zerto DRP »

![](images/image-EN-3.png)

Select a free public IP from the dropdown menu

![](images/image-EN-4.png)

Vous pouvez ensuite saisir la plage réseau souhaitée pour le déploiement de la ZVM

![](images/image-EN-5.png)

Confirm the VRA Network range and then click « Install»

![](images/image-EN-6.png)

## 4. IPSec Service Activation

From OPNSense interface, go to VPN menu on the left, IPSec section and select « Tunnel Setting »

![](images/image-EN-7.png)

Click  « Enable IPsec »

![](images/image-EN-8.png)

Click « Save »

## 5. IPSec Tunnel configuration

IPSec Tunnel configuration is done by defining two sets of parameters, called phase 1 and phase 2.

### a. Phase 1 Setup

In the VPN menu, go to "Tunnel settings" click on the "+" to add a new phase 1:

![](images/image-EN-9.png)

#### i. Tunnel settings : General information

> ![](images/image-EN-10.png)

The default values are correct :

- Connection Method : Default
- Key Exchange version : V2
- Internet Protocol  : IPV4
- Interface : WAN

The only required parameter is OVHCloud IPSec Endpoint IP adress.

#### ii. Tunnel settings : Phase 1 Authentication

Once again default values are valid, you only need to give the shared secret for authentication

![](images/image-EN-11.png)

#### iii. Tunnel settings  : Phase 1 Encryption algorithms

![](images/image-EN-12.png)

Supported values for each parameters :

- Encryption algorithms : AES 256 bits
- Hash algorithms : SHA256
- Diffie-Hellman key group : 14 (2048 bits)
- Lifetime : 28 800 seconds

You can keep the default values for the other parameters.
Click  « SAVE » then  « Apply changes »

The new Phase 1 is now present in the interface:

![](images/image-EN-13.png)

### b. Phase 2 Setup

Click on  « Show Phase 2 entries »

![](images/image-EN-14.png)

There is no available phase 2, so you need to add one :

![](images/image-EN-15.png)

Click on « + »

![](images/image-EN-16.png)

#### i. Phase 2 - General information

![](images/image-EN-17.png)

Check that the mode is set to  « Tunnel IPV4 »

#### ii.Phase 2 – Local Network

![](images/image-EN-18.png)

Local Network type must be set to  « Lan subnet »

#### iii. Phase 2 – Remote Network

You need to give the ZVM IP and the associated network range. Make sure to double check the parameters otherwiser the VPN tunnel won't come up.
On OVHCloud side, the ZVM network is always a /23 network (512 IPs)

![](images/image-EN-19.png)

#### iv.  Phase 2 – Key Exchange

Supported values are:

- Protocole : ESP
- Encryption algorithm : AES 256 bits
- Hash algorithms : SHA256
- PFS : Off

![](images/image-EN-20.png)

You can leave advanced parameters to their default value.
Click « Save » then « Apply changes »

### c. Check VPN status

![](images/image-EN-21.png)

Click the green triangle on the right to initiate connexion :

![](images/image-EN-22.png)

If all the parameters are correct, the tunnel comes up and 2 new icons appear :

- Tear down tunnel
- Tunnel information

![](images/image-EN-23.png)

Click on the information icon.

![](images/image-EN-24.png)

Tunnel is now up, make sure to add, if required, to add a route to OVHCloud ZVM Network on your local ZVM.

**Troubleshooting** :

If the tunnel is not coming up, make sure that the parameters values are identical on both sides:

- Shared secret
- Remote Endpoint IP address
- Remonte network range

Make that a firewall is not interfering in the dialog between the local and remote endpoint.
You can check the IPSec logfile in /var/log/ipsec.log on the OPNSense appliance to get more information

## 6. Firewall opening

To allow the pairing between on-prem and OVHCloud instance, traffic must be authorized on the following ports:

- TCP 9081 between ZVMs
- TCP 4007/4008 between vRAs

### a. ZVM Opening

Go to « Firewall » menu,  « Rules » section,  « IPSec » interface:

![](images/image-EN-25.png)

Click on  Add to create a new rule

![](images/image-EN-26.png)

![](images/image-EN-27.png)

Rule parameter are as follow :

- Action : « Pass » (Authorize traffic)
- Interface : « IPsec » (incoming traffic comming from the VPN tunnel)
- Protocol : « TCP »

For Source and Destination, select « Single host or Network » type.
Source is the OVHCloud ZVM and destination is on-prem ZVM.

![](images/image-EN-28.png)

Destination TCP port is 9081.
click "Save" and "Apply Change"

### b. vRAs opening

vRAs opening si a bit more complex since there are multiple VRAs on each side that need to be able to exchange information on TCP ports 4007 and 4008.
To simplify this setup we are going to use the alias feature of OPNSenser. An alias is a group of objects IPs, networks, URLs…) that can be used in firewall rules..

We will define 3 aliases :

- One for vRA IPs on customer side
- One for vRA IPs on OVHCloud side
- One for the ports

You can get the OVH Cloud vRAs IP from the destination Private Cloud vCenter interface  

![](images/image-EN-29.png)

Let's create the  OVH_VRA alias  for OVHCLoud vRAs:

![](images/image-EN-30.png)

In the same fashion we can create an alias for the on-prem vRAs :

![](images/image-EN-31.png)

Last step, let's create the ports alias

![](images/image-EN-32.png)

We have now all the elements we need to implements the required firewall rules to authorize data coming from the OVHCloud platform.
It is the same procedure as before, we just need to use the aliases instead of explicit IPs or ports:

![](images/image-EN-33.png)

At this point we have a functional and secure link between our on-prem and cloud instance.

![](images/image-EN-34.png)

## 7. ZVM Pairing

Login into your on-prem ZVM, the following screen is displayed:

![](images/image-EN-35.png)

Select « Pair to a site with a licence » , enter OVHCloud ZVM IP and press "Start"

In the dashboard you can see the pairing is ongoing:

![](images/image-EN-36.png)

You are notified when the pairing is successfull :

![](images/image-EN-37.png)

You can check that your PCC OVHCloud is visible in the « Sites » tab

![](images/image-EN-38.png)

At this point your Zerto setup is functionnal and you can start to create your virtual protection groups (VPGs)

***NOTE :*** If the on-prem ZVM is not able to contact successfully the OVHCloud ZVM (for example due to an incorrect firewall setup) you will get the following message:

![](images/image-EN-39.png)

then you are brought back to the login screen with the following error message.

![](images/image-EN-40.png)
The most probable cause is that the OVHCloud ZVM is not authorized to contact on-prem ZVM on TCP 9081 (it needs to be able to initiate the connection)