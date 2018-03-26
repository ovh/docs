---
title: How to migrate your server from vrack 1.0 to vrack 2.0
excerpt: How to migrate your server from vrack 1.0 to vrack 2.0
slug: how_to_migrate_your_server_from_vrack_10_to_vrack_20
legacy_guide_number: g1994
---


## 
This guide explains how to migrate from vrack 1.0 to vrack 2.0


## 
To carry out the migration explained in this guide:

- Your servers must currently be in vrack 1.0 and they must have two network cards (i.e. professional range servers outside of the Superplan range) 
- A vrack 1.0




## 
To migrate your servers from vrack 1.0 to vrack 2.0, you must take the following steps:

- Determine the second interface for each server
- Create vrack 2.0
- Configure a temporary IP address for your vrack 2.0 interface
- Disable the vrack 1.0 interface and reconfigure the vrack 2.0 interface




## Determine the Vrack 2.0 interface

## To place a server in vrack 2.0, your server must have two network interfaces.
Determine your server’s vrack 2.0 interface:

To determine which interface to configure with Linux or pro rescue mode run the following command: 


```
ifconfig -a | grep eth | awk '{print $1}'
```


Example return: 


```
#ifconfig -a | grep eth | awk '{print $1}'
eth0
eth1
```


Eth0 is already our main interface, you can view your ip wih ifconfig

Then use the function:


```
#ifconfig eth1 up
#ethtool eth1 | grep "Link detected"
Link detected: yes
```


If no link is detected, you don’t have the correct interface and you must use the following function:


```
#ifconfig eth1 down
```


And do the same with the other interfaces

In our example we will keep eth1.


## Creating vrack 2.0
To order vrack 2.0, we recommend that you follow the appropriate guide


## Add your vrack 1.0 to vrack 2.0
In order to migrate from vrack 1.0 to vrack 2.0, you must add vrack 1.0 to vrack 2.0 

Login to your customer account 

https://www.ovh.com/manager/

Select vrack 2.0 in the left hand menu

You will see the following:

![](images/img_3295.jpg){.thumbnail}
Select vrack 1.0 in the list of available servers (the left-hand column)

Then click “add”


## Add your servers to vrack 2.0
In order to migrate from vrack 1.0 to vrack 2.0, you must add your servers to vrack 2.0 

Log into your customer account 

Select vrack 2.0 in the left hand menu

You will see the following

![](images/img_3297.jpg){.thumbnail}
Select a server from the list of available services in the left-hand column  

Then click “Add”


## Configure a temporary IP on the vrack 2.0 interface

## Firstly, to verify that vrack 2.0 is working you must configure a temporary IP address
Add a private IP to each of your servers in the vrack interface:

Example:
(Using a debian server with eth1 for the vrack 2.0 interface and the 10.0.0.0/24 block)

Add the following to the configuration file: /etc/network/interfaces: 


```
auto eth1
iface eth1 inet static
address 10.0.0.1
netmask 255.255.255.0
broadcast 10.0.0.255
```


Then restart your network interface:


```
Service networking restart
```



## Important:
You now need to check that you can ping your servers from the private IP addresses which you have just configured.
If all the servers respond to a ping you can move onto the following step.

If not, run the following command: 


```
arping -I INTERFACE_VRACK_1.5 1.1.1.1
```


Replace  INTERFACE_VRACK_1.5  with your vrack 2.0 interface. In our example this would be eth1.


## Disable vrack 1.0 and reconfigure vrack 2.0

## Important
There will be a short interruption while your IP address is being moved from the 1.0 to the 2.0 interface
Remove temporary configuration for your vrack 2.0 and vrack 1.0 interfaces

Then restart your interfaces

Only after doing this should you add the ip for vrack 1.0 to your vrack 2.0 interface.  

For example, with debian:

Sample configuration beforehand


```
auto eth0.XXXX
iface eth0.XXXX inet static
address 172.16.0.1
netmask 255.240.0.0
post-up ip r a 172.16.0.0/12 via 172.31.255.254 dev eth0.XXXX 

auto eth1
iface eth1 inet static
address 10.0.0.1
netmask 255.255.255.0
broadcast 10.0.0.255
```


Sample configuration afterwards:

```
auto eth1
iface eth1 inet static
address 172.16.0.1
netmask 255.240.0.0
broadcast 255.240.0.0
```


and then restart the network interfaces.

Your servers should be able to communicate with each other straight away.


## Public ip block

## Important:
Do not follow this part of the guide if the public block is ACE or Firewall ASA

## If you have a public ip block and all your servers are compatible with vrack 1.5 you can add your public ip block to vrack 2.0. You will then no longer use vrack 1.0 via your OVH manager:
Log into your customer account:

https://www.ovh.com/manager/dedicated

Select the public ip block in the left-hand menu

You will see the following:

![](images/img_3297.jpg){.thumbnail}

## Select a server from the list of available services in the left-hand column
Then click “Add”

## Important
This will cause a service interruption lasting about one minute.


## Removing vrack 1.0

## Important:
Only follow this part of the guide if you no longer have any hardware working in vrack 1.0. For example:

an old superplan server which is compatible with vrack 1.0
an ACE
an ASA firewall for vrack.

If you have any of this hardware you cannot currently migrate from vrack 1.0
Once your servers are communicating in vrack2.0 you can remove your vrack 1.0 servers	

Log into your manager

https://www.ovh.com/manager

Then

Select vrack 1.0
Then select “Remove a server from the Virtual Bay”
Then remove your servers from the vrack by selecting them from the section entitled “current infrastructure composition” and click on ">>"

Once all your servers are working in vrack 2.0 and you have removed all your vrack 1.0 servers contact our support team to permanently erase your vrack 1.0.

