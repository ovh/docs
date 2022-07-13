---
title: Kafka MirrorMaker - Capabilities and Limitations
slug: mirrormaker/capabilities
excerpt: Discover the capabilities and limitations of Public Cloud Databases for Kafka MirrorMaker
section: Kafka MirrorMaker - Guides
order: 1
---

**Last updated January 26<sup>th</sup>, 2022**

## Objective

This page provides the technical capabilities and limitations of the Public Cloud Databases for Kafka MirrorMaker offer.

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

Kafka MirrorMaker nodes have to be in the same region. Multi-AZ is currently not supported.

### Kafka versions

The Public Cloud Databases offer supports the following Kafka versions:

- Kafka MirrorMaker 2.0

You can follow Kafka Release Cycle on their official page : <https://kafka.apache.org/downloads>

### Kafka clients

You can use any of the Kafka-recommended clients to access your cluster.

Please note that Kafka Connect is not available so far.

### Plans

Three plans are available:

- *Essential*
- *Business*
- *Enterprise*

Here is an overview of the various plans' capabilities:

| Plan         | Number of nodes by default | Additional nodes | Network                |
| ------------ | -------------------------- | ---------------- | ---------------------- |
| *Essential*  | 1                          | No               | Public only            |
| *Business*   | 3                          | No               | Public & Private vRack |
| *Enterprise* | 6                          | No               | Public & Private vRack |

Your choice of plan affects the number of nodes your cluster can run, the SLA, and a few other features such as private network.

#### Nodes

- **Essential**: The cluster is delivered with 3 nodes by default.
- **Business**: The cluster is delivered with 3 nodes by default.
- **Enterprise**: The cluster is delivered with 6 nodes by default.

#### License type

Kafka software is under the Apache 2 license, a liberal open-source license.
More information on <https://github.com/apache/kafka/blob/trunk/LICENSE>.

### Hardware resources

Here are the node types you can choose from:

**Essential plans**

| Name    | Disk (GB) | Cores | Memory (GB) |
| ------- | --------- | ----- | ----------- |
| db1-7   | N/A       | 2     | 7           |
| db1-15  | N/A       | 4     | 15          |
| db1-30  | N/A       | 8     | 30          |

**Business plans**

| Name    | Disk (GB) | Cores | Memory (GB) |
| ------- | --------- | ----- | ----------- |
| db1-7   | N/A       | 2     | 7           |
| db1-15  | N/A       | 4     | 15          |
| db1-30  | N/A       | 8     | 30          |

**Enterprise plans**

| Name    | Disk (GB) | Cores | Memory (GB) |
| ------- | --------- | ----- | ----------- |
| db1-7   | N/A       | 2     | 7           |
| db1-15  | N/A       | 4     | 15          |
| db1-30  | N/A       | 8     | 30          |

Right now, all nodes of a given cluster should be of the same type and distributed in the same region.

### Features

#### Network

Public networking can be used for all the offers.

Private networking (vRack) is available for *Business* and *Enterprise*.

When using private networking, some network ports get created in the private network of your choice. Thus, further operations on that network might suffer from some restrictions - e.g. you won't be able to delete the network if you didn't stop the Public Cloud Databases services first.

For both public and private networks, Ingress and Egress traffic are included in the service plans and unmetered.

#### Kafka replication and data retention

You can select a Kafka source cluster and a Kafka destination cluster from the same Public Cloud project.
External Kafka clusters are not supported so far.

You  need at least 2 Kafka clusters to create replication flows.

Replication flows allowed parameters are:

- Source
- Target
- Topics
- Topics exclusion
- Sync group offset
- Sync interval in seconds (s)
- Heartbeats (true/false)

Data retention is only limited by your cluster storage space.

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

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

Are you on Discord? Connect to our channel at <https://discord.gg/PwPqWUpN8G> and interact directly with the team that builds our databases service!
