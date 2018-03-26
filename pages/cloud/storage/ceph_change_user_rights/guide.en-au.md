---
title: Change user rights
slug: ceph/change-user-rights
excerpt: This guide shows you how to change Ceph user rights using the web interface.
section: Cloud Disk Array
---


## Using web interface
Using web interface is the easiest way to change user rights.

You must first select your user.


![Ceph users](images/change_user_rights_1.png){.thumbnail}

It will list current rights, by default there is no rights.


![Ceph pool creation](images/change_user_rights_2.png){.thumbnail}

Let's chose some rights for our user.


![Ceph pool creation](images/change_user_rights_3.png){.thumbnail}

As usual cluster status and task list changes.


## Using API

> [!api]
>
> @api {PUT} /dedicated/ceph/{serviceName}/pool
> 

> [!api]
>
> @api {GET} /dedicated/ceph/{serviceName}/user
> 
Result example:


```bash
GET /dedicated/ceph/98d166d8-7c88-47b7-9cb6-63acd5a59c15/user
[
  {
    mdsCaps: "",
    monCaps: "allow r",
    serviceName: "98d166d8-7c88-47b7-9cb6-63acd5a59c15",
    name: "myuser"
    osdCaps: "allow class-read object_prefix rbd_children, allow rwx pool=mypool",
    key: "AQA9KpdXoBrDNhAAFCM7m/XOtmWh3LMSNlHVqw==",
  }
]
```