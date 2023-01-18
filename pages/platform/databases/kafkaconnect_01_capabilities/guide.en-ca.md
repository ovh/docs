---
title: Kafka Connect - Capabilities and Limitations
slug: kafkaconnect/capabilities
excerpt: Discover the capabilities and limitations of Public Cloud Databases for Kafka Connect
section: Kafka Connect - Guides
order: 010
---

**Last updated October 26, 2022**

## Objective

This page provides the technical capabilities and limitations of the Public Cloud Databases for Kafka Connect offer.

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

Database nodes have to be in the same region. Multi-AZ is currently not supported.

### Plans

Three plans are available:

- *Essential*
- *Business*
- *Enterprise*

Here is an overview of the various plans' capabilities:

| Plan         | Number of nodes | Additional nodes |
| ------------ | --------------- | ---------------- |
| *Essential*  | 1               | No               |
| *Business*   | 3               | No               |
| *Enterprise* | 6               | No               |

Your choice of plan affects the number of nodes your cluster run or the SLA.


#### Nodes

- **Essential**: the cluster consists of one node.
- **Business**: the cluster is delivered with 3 nodes.
- **Enterprise**: the cluster is delivered with 6 nodes.

### Hardware resources

Here are the node types you can choose from:

| Name   | Disk (GB) | Cores | Memory (GB) |
| ------ | --------- | ----- | ----------- |
| db1-7  | N/A       | 2     | 7           |
| db1-15 | N/A       | 4     | 15          |
| db1-30 | N/A       | 8     | 30          |

All nodes of a given cluster should be of the same type and distributed in the same region.

### Features

#### Network
Public as well as private networking (vRack) can be used for all the offers.

Ingress and Egress traffic are included in the service plans and unmetered.

##### Private network considerations
Here are some considerations to take into account when using private network:

- Network ports are created in the private network of your choice. Thus, further operations on that network might be restricted - e.g. you won’t be able to delete the network if you didn’t stop the Public Cloud Databases services first.
- When connecting from outside subnet, Openstack IP gateway must be enable in the subnet use for the Database service. Customer is responsible for other custom network setup.
#### Logs and metrics

Logs and metrics are available via the OVHcloud Public Cloud Control Panel.
As of today, you can't export logs and metrics, nor plug them into a remote tool.

- **Logs retention**: 1000 lines of logs
- **Metrics retention**: 1 calendar month

Please note that if the cluster is deleted, logs and metrics are also automatically deleted.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!
