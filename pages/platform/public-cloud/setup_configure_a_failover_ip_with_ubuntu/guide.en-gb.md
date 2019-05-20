---
title: Configure a failover IP with Ubuntu
excerpt: Configure a failover IP with Ubuntu
slug: configure_a_failover_ip_with_ubuntu
legacy_guide_number: g2043
section: Knowledge base
---


## 
You may need to configure a failover IP address on your instances, for one of the following reasons:

- you have a large number of websites on your instance, 
- you host international projects,

In order to do this you can either buy or import a failover IP address for your Public Cloud instances. 

However failover IPs will not be automatically configured on your instance. 

This guide explains how to configure your instance's network interface so that a failover IP can be allocated to it.


## Requirements

- [Make sure you have launched an instance in your OVH customer account OVH]({legacy}1775)
- You must have a failover IP address




## Configuring the interface

- Edit the configuration file with the following command:

```
vi /etc/network/interfaces
```


- Add the following lines to the end of the file:

```
auto ethX:Y
iface ethX:Y inet static
address xxx.xxx.xxx.xxx
netmask 255.255.255.255
broadcast xxx.xxx.xxx.xxx
```



|# Variables|#Values|
|X|main interface number (usually eth0 )|
|xxx.xxx.xxx.xxx|failover IP to configure|
|Y|the number of the alias (starting at 0 and then 1 etc. depending on the number of IPs there are to configure)|


If you have many IPs to allocate, they must be added on the same line:
by increasing the value of Y (the alias number)


## - Restart the network services with the command:

- Restart the network services with the command:

```
service networking restart
```





## 

- [Migrate a failover IP]({legacy}1890)




## 
[Go back to the index of Cloud guides]({legacy}1785)

