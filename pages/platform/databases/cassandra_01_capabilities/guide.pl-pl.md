---
title: Cassandra - Capabilities and Limitations
slug: cassandra/capabilities
excerpt: Discover the capabilities and limitations of Public Cloud Databases for Cassandra
section: Cassandra - Guides
order: 010
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/cassandra/capabilities/'
---

**Last updated April 7, 2022**

## Objective

This page provides the technical capabilities and limitations of the Public Cloud Databases' Cassandra offer.

We continuously improve our offers. You can follow and submit ideas to add to our roadmap at <https://github.com/ovh/public-cloud-roadmap/projects/2>.

## Capabilities and limitations

### Supported regions and multi-AZ

The Public Cloud Databases offer is available in the following regions:

- `BHS` (Beauharnois, Canada)
- `DE` (Frankfurt, Germany)
- `GRA` (Gravelines, France)
- `SBG` (Strasbourg, France)
- `UK` (London, United Kingdom)
- `WAW` (Warsaw, Poland)

Entire database instances have to be in the same region. Multi-AZ is currently not supported.

### Cassandra versions

The Public Cloud Databases offer supports the following Cassandra versions:

- Cassandra 4.0

Cassandra recommends always installing and using the latest stable version.


### Plans

Three plans are available:

- *Essential*
- *Business*
- *Enterprise*

Here is an overview of the various plans' capabilities:

| Plan         | Number of nodes by default | Read replicas  | Network                        |
| ------------ | -------------------------- | -------------  | ------------------------------ |
| *Essential*  | 3                          | No             | Public only                    |
| *Business*   | 3                          | Planned        | Public & Private vRack         |
| *Enterprise* | 6                          | Planned        | Public & Private vRack         |

Your choice of plan affects the number of nodes your cluster can run, the SLA, and a few other features such as private network, read replicas and backup retention.

#### Nodes and replicas

- **Essential**: The cluster is delivered with 3 nodes by default. Adding read replicas is planned.
- **Business**: The cluster is delivered with 3 nodes by default. Adding read replicas is planned.
- **Enterprise**: The cluster is delivered with 6 nodes by default. Adding read replicas is planned.

#### License type

Each cluster is provided with the Cassandra Community (GPL) license.

If any, license cost is included inside the service plans. You can't bring your own licenses.

### Hardware resources

Here are the node types you can choose from:

**Essentials plans**

| Name    | Disk (GB) | Cores | Memory (GB) |
| ------- | --------- | ----- | ----------- |
| db1-7   | 160       | 2     | 7           |

**Business plans**

| Name    | Disk (GB) | Cores | Memory (GB) |
| ------- | --------- | ----- | ----------- |
| db1-15  | 960       | 4     | 15          |
| db1-30  | 1920      | 8     | 30          |
| db1-60  | 3840      | 16    | 60          |
| db1-120 | 7680      | 32    | 120         |


**Enterprise plans**

| Name    | Disk (GB) | Cores | Memory (GB) |
| ------- | --------- | ----- | ----------- |
| db1-15  | 1920      | 4     | 15          |
| db1-30  | 3840      | 8     | 30          |
| db1-60  | 7680      | 16    | 60          |
| db1-120 | 15360     | 32    | 120         |

Right now, all nodes of a given cluster should be of the same type and live in the same region.


### Features

#### Network

Public networking can be used for all the offers.

Private networking (vRack) is available for *Business* and *Enterprise*.

When using private networking, some network ports get created in the private network of your choice. Thus, further operations on that network might suffer from some restrictions - e.g. you won't be able to delete the network if you didn't stop the Public Cloud Databases services first.

Ingress and Egress traffic are included in the service plans and unmetered.



#### Logs and metrics

Logs and metrics are available via the OVHcloud Public Cloud Control Panel.
As of today, you can't export logs and metrics, nor plug them into a remote tool.

- **Logs retention**: 1000 lines of logs
- **Metrics retention**: 1 calendar month

Please note that if the database instance is deleted, logs and metrics are also automatically deleted.


## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

Are you on Discord? Connect to our channel at <https://discord.gg/PwPqWUpN8G> and interact directly with the team that builds our databases service!
