---
title: Pool creation
slug: ceph/create-a-pool
excerpt: This guide shows you how to create a pool using the web interface.
section: Cloud Disk Array
---


## Using web interface


> [!primary]
>
> Using web interface is the easiest way to create a pool.
> 

First, connect to the [Cloud Disk Array manager](https://www.ovh.com/manager/cloud/index.html){.external}. Under 'Platforms and services' select your Ceph cluster.

On the bottom right, you will find the existing pools. Pool rbd is created by default and can be use without issue.


![Ceph pools](images/create_a_pool_1.png){.thumbnail}

Enter a poolname, your pool needs at least three characters.


![Ceph pool creation](images/create_a_pool_2.png){.thumbnail}

After pool creation you are back to manager, you can see that cluster status has changed because the pool is being created.


![Ceph pool creation](images/create_a_pool_3.png){.thumbnail}


![Ceph pool creation](images/create_a_pool_4.png){.thumbnail}


## Using API

> [!api]
>
> @api {POST} /dedicated/ceph/{serviceName}/pool
> 
serviceName is the fsid of your cluster.

You can check pool creation by listing pools.


> [!api]
>
> @api {GET} /dedicated/ceph/{serviceName}/pool
> 
For example:


```bash
GET /dedicated/ceph/98d166d8-7c88-47b7-9cb6-63acd5a59c15/pool
[
{
  replicaCount: 3
  serviceName: "98d166d8-7c88-47b7-9cb6-63acd5a59c15"
  name: "rbd"
  minActiveReplicas: 2
  poolType: "REPLICATED"
  backup: false
},
{
  replicaCount: 3
  serviceName: "98d166d8-7c88-47b7-9cb6-63acd5a59c15"
  name: "testpool"
  minActiveReplicas: 2
  poolType: "REPLICATED"
  backup: true
  }
]
```