---
title: MongoDB - Capabilities and Limitations
slug: mongodb/capabilities
excerpt: Find out what are the capabilities and limitations of the Public Cloud Databases for MongoDB offer
section: MongoDB - Guides
order: 010
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/mongodb/capabilities/'
---

**Last updated November 8th, 2022**

## Objective

This page provides the technical capabilities and limitations of the Public Cloud Databases for MongoDB offer.

## Capabilities and limitations

### Supported regions

The Public Cloud Databases offer is available in the following regions:

- `BHS` (Beauharnois, Canada)
- `DE` (Frankfurt, Germany)
- `GRA` (Gravelines, France)
- `UK` (London, United Kingdom)
- `SBG` (Strasbourg, France)
- `WAW` (Warsaw, Poland)

### MongoDB versions

The Public Cloud Databases offer supports the following MongoDB versions:

- MongoDB 4.2
- MongoDB 4.4
- MongoDB 5.0

MongoDB recommends always installing and using the latest stable version of MongoDB. See [MongoDB Versioning](https://docs.mongodb.com/manual/reference/versioning/){.external} for more information.

### MongoDB Drivers

You can use anyone of the [MongoDB-recommended driver](https://docs.mongodb.com/drivers/){.external} to access your cluster.

### Plans

Three plans are available:

- *Essential*
- *Business*
- *Enterprise* (coming soon - stay tuned!)

Here is an overview of the various plans' capabilities:

| Plan         | Number of nodes | MongoDB License | BI Connector  | Compass   |
| ------------ | --------------- | --------------- | ------------  | --------- |
| *Essential*  | 1               | Community       | Not available | Available |
| *Business*   | 3 to 8          | Community       | Not available | Available |
| *Enterprise* | 3 to 8          | Enterprise      | Available     | Available |

Your choice of plan affects the number of nodes your cluster can run as well as the MongoDB license type.

#### Nodes

- *Essential*: The cluster supports at most one node.
- *Business* or *Enterprise*: The cluster can support 3 to 8 nodes.

#### License type

- *Essential* and *Business* plans use the MongoDB Community license.
- *Enterprise* plans upgrade your cluster so that it uses the MongoDB Enterprise license, giving you the capability to use the [MongoDB BI Connector](https://www.mongodb.com/products/bi-connector){.external} as well as [MongoDB Compass](https://www.mongodb.com/products/compass){.external}.

License cost is included inside the service plans. You cannot bring your own licenses.

### Hardware resources

Here are the node types you can choose from:

| Name    | Disk (GB) | Cores | Memory (GB) |
| ------- | --------- | ----- | ----------- |
| db1-7   | 50        | 2     | 7           |
| db1-15  | 100       | 4     | 15          |
| db1-30  | 200       | 8     | 30          |
| db1-60  | 400       | 16    | 60          |
| db1-120 | 800       | 32    | 120         |

Right now, all nodes of a given cluster should be of the same type and live in the same regions.

#### Disk type

The type of storage available may vary according to the region your cluster lives in: see [Availability of Public Cloud products](https://www.ovhcloud.com/de/public-cloud/regions-availability/) for more information about block storage type availability depending on region. Thus, your cluster may be backed by e.g. *High Speed* or *High Speed Gen2* block storage.

Also, the performance caracteristics of the various storage offerings may vary depending on e.g. the storage size your cluster uses: *High Speed* may offer better iops than *High Speed Gen2* for some disk sizes. See [Block Storage documentation](https://www.ovhcloud.com/de/public-cloud/block-storage/) for more information about those performance caracteristics.

Public Cloud Databases will select the most efficient disk type for your cluster depending on your cluster parameters.

#### Effective storage

The disk size listed above is the total disk size of the underlying machine, however, a small part of it goes towards the OS install.

We try hard to avoid "disk full" situations that could be harmful to cluster health. Therefore, The customer will :

1. receive a first email alert once cluster is reaching 80% storage capacity;
2. receive a second email alert once cluster is reaching 90% storage capacity;
3. have his database instance moved in "read-only" mode, meaning no more writes can be done.

### Features

#### Network

MongoDB clusters are reachable through default port 27017.

Public as well as private networking (vRack) can be used for all the offers.

When using private networking, some network ports get created in the private network of your choice. Thus, further operations on that network might suffer from some restrictions - e.g. you won't be able to delete the network if you didn't stop the Public Cloud Databases services first.

Ingress and Egress traffic are included in the service plans and unmetered.

#### Backups

*Essential* plan clusters are automatically backed up daily during their maintenance window. Backup retention is 1 day.

*Business* plan clusters are automatically backed up daily during their maintenance window. Backup retention is 7 days.

*Enterprise* plan clusters are automatically backed up daily during their maintenance window, with [PITR](https://en.wikipedia.org/wiki/Point-in-time_recovery){.external} support. Backup retention is 30 days.

#### Logs and Metrics

Logs and metrics are available via the OVHcloud Public Cloud Control Panel.
As of today, you can't export Logs and metrics, neither plug them to a remote tool.

**Logs retention :** 1000 lines of logs;
**Metrics retention :** 1 calendar year.

Please note that if the database instance is deleted, logs and metrics are also automatically deleted.

#### Users and roles

Creation of users is allowed with the proposed roles :

- readAnyDatabase
- readWriteAnyDatabase
- userAdminAnyDatabase
- dbAdminAnyDatabase

In order to properly manage your MongoDB cluster, some MongoDB users are set up in your clusters by OVHcloud:

- `admin@admin` is your initial user
- `mms-automation@admin` is a technical user required for automation purposes
- `backup-*@admin` are used to perform backups

Furthermore, user creation from the MongoDB Shell is **not** supported: You need to use the OVHcloud API or the OVHcloud Control Panel in order to manage your clusters' users. Any user created through the mongo shell will be deleted by the automation mechanism.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have. Join our community of users on <https://community.ovh.com/en/>.

Are you on Discord? Connect to our channel at <https://discord.gg/PwPqWUpN8G> and interact directly with the team that builds our databases service!
