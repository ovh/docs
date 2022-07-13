---
title: Kafka - Capabilities and Limitations
slug: kafka/capabilities
excerpt: Discover the capabilities and limitations of Public Cloud Databases for Kafka
section: Kafka - Guides
order: 1
---

**Last updated January 26<sup>th</sup>, 2022**

## Objective

This page provides the technical capabilities and limitations of the Public Cloud Databases for Kafka offer.

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

Kafka nodes have to be in the same region. Multi-AZ is currently not supported.

### Kafka versions

The Public Cloud Databases offer supports the following Kafka versions:

- Kafka 2.8
- Kafka 3.0

You can follow Kafka Release Cycle on their official page : <https://kafka.apache.org/downloads>

### Kafka clients

You can use any of the Kafka-recommended clients to access your cluster.

Please note that Kafka Connect isn't available so far.

### Plans

Three plans are available:

- *Essential*
- *Business*
- *Enterprise*

Here is an overview of the various plans' capabilities:

| Plan         | Number of nodes by default | Additional nodes | Network                |
| ------------ | -------------------------- | ---------------- | ---------------------- |
| *Business*   | 3                          | No               | Public & Private vRack |
| *Enterprise* | 6                          | No               | Public & Private vRack |

Your choice of plan affects the number of nodes your cluster can run, the SLA, and a few other features such as private network, read replicas and backup retention.

#### Nodes and replicas

- **Business**: The cluster is delivered with 3 nodes by default.
- **Enterprise**: The cluster is delivered with 6 nodes by default.

#### License type

Kafka software is under the Apache 2 license, a liberal open-source license.
More information on <https://github.com/apache/kafka/blob/trunk/LICENSE>.

### Hardware resources

Here are the node types you can choose from:

**Business plans**

| Name    | Disk (GB) | Cores | Memory (GB) |
| ------- | --------- | ----- | ----------- |
| db1-7   | 960       | 2     | 7           |
| db1-15  | 1920      | 4     | 15          |
| db1-30  | 3840      | 8     | 30          |
| db1-60  | 7680      | 16    | 60          |

**Enterprise plans**

| Name    | Disk (GB) | Cores | Memory (GB) |
| ------- | --------- | ----- | ----------- |
| db1-7   | 1920      | 2     | 7           |
| db1-15  | 3840      | 4     | 15          |
| db1-30  | 7680      | 8     | 30          |
| db1-60  | 15360     | 16    | 60          |

Right now, all nodes of a given cluster should be of the same type and distributed in the same region.

### Features

#### Network

Kafka clusters are reachable through a random port, attributed during cluster creation.
Once your cluster is in **RUNNING** status, the Service URI will display the port to use.

Public networking can be used for all the offers.

Private networking (vRack) is available for *Business* and *Enterprise*.

When using private networking, some network ports get created in the private network of your choice. Thus, further operations on that network might suffer from some restrictions - e.g. you won't be able to delete the network if you didn't stop the Public Cloud Databases services first.

For both public and private networks, Ingress and Egress traffic are included in the service plans and unmetered.

#### Maximum simultaneous connections

The number of simultaneous connections in Public Cloud Databases for Kafka depends on the available total memory on the node.
We allow approximately 100 connections per 4 GB of RAM memory, capped to a maximum of 1000 active connections.

So for example on a server with 7 GB memory, you will get approximately 200 connections, and with 15 GB memory you will get 400 connections.

#### Advanced parameters

We do not currently support Kafka advanced parameters.

#### Backups

Kafka is a streaming tool. We don't backup Kafka data.

#### Logs and metrics

Logs and metrics are available via the OVHcloud Public Cloud Control Panel.
As of today, you can't export logs and metrics, nor plug them into a remote tool.

- **Logs retention**: 1000 lines of logs
- **Metrics retention**: 1 calendar month

Please note that if the database instance is deleted, logs and metrics are also automatically deleted.

#### Users and roles

Creation of users is allowed via the Control Panel and API.

For each user you can specify a username. Role by default is **admin**.

#### Topics

Creation of topics is allowed via the Control Panel and API.

For each topic you can specify:

- A topic name;
- The replication factor;
- The amount of partitions;
- The size of partitions;
- The retention time;
- The minimum in-sync replication;
- The deletion policy.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

Are you on Discord? Connect to our channel at <https://discord.gg/PwPqWUpN8G> and interact directly with the team that builds our databases service!
