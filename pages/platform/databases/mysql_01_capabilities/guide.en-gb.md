---
title: MySQL - Capabilities and Limitations
slug: mysql/capabilities
excerpt: Find out what are the capabilities and limitations of the Public Cloud Databases for MySQL offer
section: MySQL
order: 1
---

**Last updated September 29<sup>th</sup>, 2021**

## Objective

This page provides the technical capabilities and limitations of the Public Cloud Databases for MySQL offer.
We improve our offers continuously. You can follow and submit ideas for our roadmap on <https://github.com/ovh/public-cloud-roadmap/projects/2>.


## BETA phase

Please note that currently, Public cloud Databases for MySQL are under BETA Phase, meaning :

- Free service during all the BETA phase;
- Not ready for production;
- No official support;
- No contractual agreements (SLA);
- Some features are under development. You can BETA vs General Availability release here : <https://github.com/ovh/public-cloud-roadmap/issues/119>.

## Capabilities and limitations

### Supported regions and Multi-AZ

The Public Cloud Databases offer is available in the following regions:

- `BHS` (Beauharnois, Canada)
- `DE` (Frankfurt, Germany)
- `GRA` (Gravelines, France)
- `UK` (London, United Kingdom)
- `WAW` (Warsaw, Poland)

The whole database instances has to be in the same region. Multi-AZ is currently not supported.

### MySQL versions

The Public Cloud Databases offer supports the following MySQL versions:

- MySQL 8.0

MySQL recommends always installing and using the latest stable version.


### MySQL connectors

You can use any of the [MySQL-recommended connectors and API](https://dev.mysql.com/doc/refman/8.0/en/connectors-apis.html){.external} to access your cluster.

### Plans

Three plans are available:

- *Essential*
- *Business*
- *Enterprise*

Here is an overview of the various plans capabilities:

| Plan         | Number of nodes by default | Read replicas | MySQL License   | Network                        |
| ------------ | -------------------------- | ------------- | --------------- | ------------------------------ |
| *Essential*  | 1                          | No            | Community       | Public only                    |
| *Business*   | 2                          | Planned       | Community       | Public (Private vRack planned) |
| *Enterprise* | 3                          | Planned       | Community       | Public (Private vRack planned) |

Your choice of plan affects the number of nodes your cluster can run, the SLA, and few features such as private network, read replicas and backups retention.

#### Nodes and replicas

- **Essential**: the cluster can support at most one node.
- **Business**: the cluster is delivered with 2 nodes by default. Adding read replicas is planned.
- **Enterprise**: the cluster is delivered with 3 nodes by default. Adding read replicas is planned.

#### License type

Each cluster is provided with MySQL Community (GPL) license.

If any, license cost is included inside the service plans. You cannot bring your own licenses.

### Hardware resources

Here are the node types you can choose from:

| Name    | Disk (GB) | Cores | Memory (GB) |
| ------- | --------- | ----- | ----------- |
| db1-7   | 50        | 2     | 7           |
| db1-15  | 100       | 4     | 15          |
| db1-30  | 200       | 8     | 30          |
| db1-60  | 400       | 16    | 60          |
| db1-120 | 400       | 32    | 120         |

Right now, all nodes of a given cluster should be of the same type and live in the same region.

#### Effective storage

The disk size listed above is the total disk size of the underlying machine, however, a small part of it goes towards the OS install.

We try hard to avoid "disk full" situations that could be harmful to cluster health. Therefore, The customer will :

1. receive a first email alert once cluster is reaching 80% storage capacity;
2. receive a second email alert once cluster is reaching 95% storage capacity;
3. have his database instance moved in "DISK_FULL" state, and 'read-only+delete" mode, meaning no more writes can be done.


### Features

#### Network

MySQL clusters are reachable through default port 3306.

Public networking can be used for all the offers.

Private Networking (vRack) is planned for *Business* and *Enterprise*.

When using private networking, some network ports get created in the private network of your choice. Thus, further operations on that network might suffer from some restrictions - e.g. you won't be able to delete the network if you didn't stop the Public Cloud Databases services first.

Ingress and Egress traffic are included in the service plans and unmetered.

#### Maximum simultaneous connections

Number of simultaneous connections connections in Public Cloud Databases for MySQL depends on the available total memory on the node. 
We allow 75 connections per each GB of usable memory. Usable memory is the total memory on the node minus operating system and management overhead, which is currently estimated at 350 MiB. The usable memory is rounded to nearest gibibyte.

So for example on a server with 7 GB memory, you will get 7 * 75 = 525 connections and with 15 GB memory you will get 14 * 75 = 1050 connections. 
Note that the MySQL max-connections setting is always set to one higher (e.g. 526 / 1051 in the example cases) because there is usually one system process that consumes one of the available connections.

#### Advanced parameters

We currently do not support MySQL advanced parameters.


#### Backups

*Essential* plan clusters are automatically backed up daily during their maintenance window. Backup retention is 2 days.

*Business* plan clusters are automatically backed up daily during their maintenance window. Backup retention is 14 days.

*Enterprise* plan clusters are automatically backed up daily during their maintenance window. Backup retention is 30 days.

#### Logs and Metrics

Logs and metrics are available via the OVHcloud Public Cloud Control Panel.
As of today, you can't export Logs and metrics, neither plug them to a remote tool.

**Logs retention :** 1000 lines of logs;
**Metrics retention :** 1 calendar month.

Please note that if the database instance is deleted, logs and metrics are also automatically deleted.

#### Users and roles

Creation of users is allowed via control panel and API with default admin roles and privileges.



## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

Are you on Discord? Connect to our channel at <https://discord.gg/PwPqWUpN8G> and interact directly with the team that builds our databases service!
