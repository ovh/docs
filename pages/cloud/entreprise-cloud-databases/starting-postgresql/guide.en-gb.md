---
title: 'Getting started with a PostgreSQL cluster'
slug: get-started-with-postgresql
excerpt: 'Find out how to order, secure and connect to your PostgreSQL instance'
section: 'Getting started with a PostgreSQL cluster'
order: 2
---

**Last updated 30th December 2019**

## Objective

The Enterprise Cloud Databases solution offers database engines such as PostgreSQL on a dedicated cluster.
The cluster is managed by OVHcloud, but you have the **superuser** role on your cluster.
This guide will give you step-by-step instructions on how to create your PostgreSQL cluster, and test the connection.

## Requirements
- an active OVHcloud customer account
- the ability to establish a connection from an IP added into the security groups
- a PostgreSQL client installed on the desktop you want to use for accessing the database

## Introduction
A cluster is initially made up of the following elements:

- a master node in read/write mode
- a replication node in read-only mode
- a backup node that does not accept customer connections

Please refer to the [technical architecture documentation](https://www.postgresql.org/docs/){.external} for further information on the technical aspects of how your managed solution works.

## Instructions

### Step 1: Order your cluster.

Log in to the OVHcloud Control Panel, and click `Server`{.action}, then `Enterprise Cloud Databases`{.action}. Next, click `Order a cluster`{.action}.

You will then need to choose a number of different settings to create your cluster:

- the version of PostgreSQL you want to install
- the region
- your solution’s technical features (with four configurations offered — cluster16, cluster32, cluster64, cluster128)
- the option of adding extra nodes to your cluster (with technical features that are equal to the cluster)
- the commitment period
- the payment frequency

### Step 2: Update your user.

Once your order is complete, your cluster will appear in your control panel. By default, OVHcloud creates a user with  "**postgres**" admin rights. You will need to set the user’s password before the first connection.

### Step 3: Configure a security group.

Since access to your PostgreSQL instance is exposed on the public network, you will need to filter access using a security group. This can just include standalone IPs, or blocks of IP addresses.

With your service open on the OVHcloud Control Panel, go to the `Settings`{.action} tab, then click on the `Security groups`{.action} section. Click `Create a group`{.action}.

Give your group a name, then enter the IP addresses. 

```
For example:
181.36.14.xxx/32
83.4.121.xxx/32
```

### Step 4: Connect to your instance.

OVHcloud provides you with two unique entry points to your cluster, no matter how many nodes have been created:

- read-write connection point
- read-only connection point

The connection settings and methods are all available via the OVHcloud Control Panel.

Go to the `Home tab`{.action}, then go to the `Connection information`{.action} section.

Here are some examples of connection strings:

```
read-write
postgresql://postgres:*******@5f771a6d99ee4102980c2d.prm.clouddb.ovh.net:38697/postgres?sslmode-require
psql -U postgres -h 5f771a6d99ee4102980c2d.prm.clouddb.ovh.net -p 38697 -W --set=sslmode=require
```
   
```
read-only
postgresql://postgres:*******@5f771a6d99ee4102980c2d.prm.clouddb.ovh.net:6713/postgres?sslmode=require
psql -U postgres -h 5f771a6d99ee4102980c2d.prm.clouddb.ovh.net -p 6713 -W --set=sslmode=require
```

### Step 5: Create the databases and users.

Once you have logged in to your cluster, you can create additional databases and users. Please refer to the [PostgreSQL documentation](https://www.postgresql.org/docs/){.external} for instructions on how to create databases and users.


## Go further

Learn how to manage your PostgreSQL cluster by reading [OVHcloud’s technical guides](../){.external} for further information on the technical aspects of how your managed solution works.

Join our community of users on <https://community.ovh.com/en/>.
