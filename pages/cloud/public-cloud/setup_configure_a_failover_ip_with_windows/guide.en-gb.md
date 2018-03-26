---
title: Configure a failover IP with Windows
excerpt: Configure a failover IP with Windows
slug: configure_a_failover_ip_with_windows
legacy_guide_number: g2046
section: Networking
---


## 
You may need to configure a failover IP address on your instances, for one of the following reasons:

- you have a large number of websites on your instance, 
- you host international projects.

In order to do this you can either buy or import a failover IP address for your Public Cloud instances. 

However failover IPs will not be automatically configured on your instance. 

This guide explains how to configure your instance's network interface so that a failover IP can be allocated to it.


## Requirements

- [Make sure you have launched an instance in your OVH customer account OVH]({legacy}1775)
- You must have a failover IP address




## Configuring the interface
Windows does not allow you to configure a failover IP address in addition to configuring a main IP address in DHCP. You therefore have to reconfigure your network card with a manually assigned IP address. 


- Recover network information using "ipconfig":



![](images/img_3609.jpg){.thumbnail}

- Go to the Control Panel then the Network and Sharing Centre



![](images/img_3602.jpg){.thumbnail}

-  Modify the card's parametres:



![](images/img_3603.jpg){.thumbnail}

- Access your interface's properties:



![](images/img_3604.jpg){.thumbnail}

- Access the TCP/IPv4 configuration



![](images/img_3605.jpg){.thumbnail}

- Complete your configuration manually, and use a similar configuration to the one shown below by adapating the IP addresses according to the information obtained from your "ipconfig", and then click on "Advanced:



![](images/img_3606.jpg){.thumbnail}

- Add your failover IP as follows:



![](images/img_3607.jpg){.thumbnail}


## 

- [Migrate a failover IP Over]({legacy}1890)




## 
[Go back to the index of Cloud guides]({legacy}1785)

