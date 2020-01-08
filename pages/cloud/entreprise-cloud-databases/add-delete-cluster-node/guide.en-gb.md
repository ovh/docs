---
title: 'Adding and deleting a node from your cluster'
slug: "add-delete-node"
excerpt: 'Find out how to add and delete nodes from your cluster'
section: 'Getting started with a PostgreSQL cluster'
---

**Last updated 03rd January 2020**

## Objective
Enterprise Cloud Database solutions offer database instances equipped with several physical nodes.
Equipped with a minimum of three nodes, each cluster can be scaled horizontally to increase performance and resilience.
This guide explains how to add and delete additional nodes on your cluster.


## Requirements
- an Enterprise Cloud Databases cluster
- access to the OVHcloud Control Panel or API with sufficient rights (admin or technical)


## Instructions

### Step 1: Get an understanding of the benefits of scaling.
When your application’s load increases, your database often receives a lot more read and write requests. It needs to process more data, and keep up its speed. With Enterprise Cloud Databases, you can distribute the read requests across several nodes.

Each additional node increases your capacity to accept read requests, and it also helps improve your cluster’s resilience.

Add or delete computing power to your cluster, in a way that suits your requirements.

> [!primary]
>
> We recommend having an odd number of nodes in your cluster, in order to meet the minimum number required for managing high availability.
>


### Step 2: Add a node.
You can add up to eight additional nodes, for a total of 10 read-only (replica) nodes within the cluster.

You can add one or more additional resources in the OVHcloud Control Panel. Click `Cluster nodes`{.action}, then `Actions`{.action}. Next, click `Add a replica`{.action}.

A dialogue box will open, prompting you to choose the number of replica nodes you want to add.

> [!primary]
> The new node will reach the minimum requirement for high availability, and can then become a primary node (processing write requests) during the cluster’s lifetime.
>


## Step 3: Delete a node.
Use the OVHcloud Control Panel interface to delete a node you have added.

Go to the `Cluster nodes`{.action} page, then click `...`{.action}. Next, click `Delete`{.action} to delete a resource. 

A dialogue box will open, prompting you to choose the number of replica nodes you want to delete.

> [!primary]
> Please note that refunds are not applicable if you choose to delete a node before the end of your subscription period.
>

> [!primary]
> Deleting a node may result in a short period of downtime, if the action causes a new node to be used for both read and write requests.
>

## Go further

Learn how to manage your PostgreSQL cluster by reading [OVHcloud’s technical guides](../enterprise-cloud-databases/){.external} for further information on the technical aspects of how your managed solution works.

Join our community of users on <https://community.ovh.com/en/>.
