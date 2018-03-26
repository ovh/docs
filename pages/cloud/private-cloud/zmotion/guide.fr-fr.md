---
title: ZMotion
slug: zmotion
legacy_guide_number: '4161650'
section: Services et options OVH
---


ZMotion is a OVH technology which transfer data through client private network between 2 physical storage arrays.

Summary
-------

Our NFS datastores are running NFS on top on ZFS in a home made storage array called "Leclerc". To get better flexibility within our hardware management, we developped way to hot move ZFS datastore from one Hardware Device to another one.

This technology is called "ZMotion", for "ZFS Motion".

The aim of ZMotion is to free a dataset (zpool) without any actions from vCenter (no vMotion, no cloning actions...) and without any action from our customer.

How does it work?
-----------------

Data is automatically processed without any action from our customer.

![](images/zmotionPrez.png){.thumbnail}

Steps
-----

- A free zpool on another hardware is reserved in our datacenter to push all the data.
- Our network properties are set on the destination datastore
- Data transfer starts within customer dedicated private network1
- When all data are transfered, the NFS service switches from one array to another one

There is no downtime from VMware perspective.


