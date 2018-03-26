---
title: Migrate from RunAbove to Public Cloud
excerpt: Migrate from RunAbove to Public Cloud
slug: migrate_from_runabove_to_public_cloud
legacy_guide_number: g1942
---


## 
As you can see on the [website](https://www.runabove.com/index.xml), RunAbove is now the brand representing all of OVH's innovations in various Lab forms such as [Desktop as a service](https://www.runabove.com/deskaas.xml) and of course everything to do with [IoT](https://www.runabove.com/iot-paas-timeseries.xml).

b]Labs such as [Object Storage](https://www.runabove.com/cloud-storage.xml), [instances](https://www.runabove.com/cloud-instance.xml) and [additionnal volumes](https://www.runabove.com/cloud-disks.xml) are now closed. However, you can still find them on the [OVH Public Cloud](https://www.ovh.com/us/cloud/) in a new and improved version.


## 
Since RunAbove is now in its closing phase, it is necessary to migrate your activities based on instances, additional volumes and object storage as soon as possible. Several guides have been created in order to assist you with this migration.


## Requirements

- [Prepare the environment to use the OpenStack API]({legacy}1851)




## Modifying the OpenStack environment variables for RunAbove
First, you need to retrieve the RC file containing all the information necessary for the use of the OpenStack APIs:


- Login to your RunAbove account;

- Click on your name in the upper right corner and select b]OpenStack Horizon;



![](images/img_3038.jpg){.thumbnail}

- Select the region on the left-hand side;

- Go to the Access & Security menu and then to the API Access tab;



![](images/img_3039.jpg){.thumbnail}

- Click on Download OpenStack RC File;

- Load the OpenStack environment variables for RunAbove by using the RC file;


```
root@serveur:~$ source RunAbove_OpenRC.sh
```





## Migration
There are guides explaining how to transfer instance backups and additional volumes from one datacenter to another.

Since they're compatible with RunAbove, you can use them as a support tool for the migration your project:

Migrating instances:


- [Transferring a backup from one datacenter to another]({legacy}1853)


Migrating additional volumes:

- [Transferring a volume backup from one datacenter to another]({legacy}1941)


When it comes to migrating an Object Storage, it is possible to download and send your data to your new project. It is also possible to synchronize two containers between each other:


- [Synchronizing object containers]({legacy}1919)




## Billing
Contrary to RunAbove, there are 2 types of billing:


- Hourly billing: 

As with the RunAbove's billing system, the invoice will be generated based on your usage during the following month.


- Monthly billing: 

You can take advantage of a 50% discount when you choose this billing method. The invoice will be generated automatically on a pro rata basis for the current month.


## Features
Certain functionalities are currently unavailable on Public Cloud:


- Private networks;
- Floating IPs.


Private networks will arrive soon and will be compatible with vRack.

At the same time, other functionalities that weren't present on RunAbove are now available on Public Cloud:


- Windows licenses are available for EG and SP instances;
- Import of Failover IP addresses;
- Use of IP load balancing




## 
[Go back to the index of Cloud guides]({legacy}1785)

