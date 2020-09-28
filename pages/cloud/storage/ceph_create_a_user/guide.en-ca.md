---
title: User creation
slug: ceph/create-a-user
excerpt: This guide shows you how to create a new user
section: Cloud Disk Array
---


## Using web interface


> [!primary]
>
> Using web interface is the easiest way to create a user.
> 

First, connect to the [manager](https://ca.ovh.com/manager/dedicated/#/configuration){.external} and under Platforms and services you'll fine the Ceph service. 

In the tab 'Users', you will find the **user list**. No user is created by default (except *admin* that you can't use and that is hidden).


![Ceph users](images/ceph-add-user-1.png){.thumbnail}

Enter a username.



> [!warning]
>
> Your username needs at least three characters.
> 


![Ceph user creation](images/ceph-add-user-2.png){.thumbnail}

After user creation, you are back to manager. You can see that cluster status has changed because the user is being created.


![Ceph user creation](images/ceph-task-1.png){.thumbnail}


## Using API

> [!api]
>
> @api {POST} /dedicated/ceph/{serviceName}/user
> 
serviceName is the fsid of your cluster.

You can check user creation by listing users.


```bash
GET /dedicated/ceph/98d166d8-7c88-47b7-9cb6-63acd5a59c15/user
[
  {
    mdsCaps: ""
    monCaps: "allow r"
    serviceName: "98d166d8-7c88-47b7-9cb6-63acd5a59c15"
    name: "myuser"
    osdCaps: "allow class-read object_prefix rbd_children"
    key: "AQA9KpdXoBrDNhAAFCM7m/XOtmWh3LMSNlHVqw=="
  }
]
```