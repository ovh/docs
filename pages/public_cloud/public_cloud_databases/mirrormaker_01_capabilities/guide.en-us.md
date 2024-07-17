---
title: Kafka MirrorMaker - Capabilities and Limitations
excerpt: Discover the capabilities and limitations of Public Cloud Databases for Kafka MirrorMaker
updated: 2024-05-27
---

## Objective

This page provides the technical capabilities and limitations of the Public Cloud Databases for Kafka MirrorMaker offer.

We continuously improve our offers. You can follow and submit ideas to add to our roadmap at <https://github.com/orgs/ovh/projects/16/views/5>.

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
- Kafka 3.6

You can follow Kafka Release Cycle on their official page: <https://kafka.apache.org/downloads>

### Kafka clients

You can use any of the Kafka-recommended clients to access your cluster.

Additionally, Kafka Connect is available at OVHcloud.

### Plans

Three plans are available:

- *Essential*
- *Business*
- *Enterprise*

Here is an overview of the various plans' capabilities:

| Plan         | Number of nodes by default | Additional nodes |
| ------------ | -------------------------- | ---------------- |
| *Essential*  | 1                          | No               |
| *Business*   | 3                          | No               |
| *Enterprise* | 6                          | No               |

Your choice of plan affects the number of nodes your cluster can run as well as the SLA.

> [!primary]
> Be aware that you will be able to upgrade your plan but you won't be able to downgrade it afterwards.

#### Nodes

- **Essential**: the cluster is delivered with 1 node by default.
- **Business**: the cluster is delivered with 3 nodes by default.
- **Enterprise**: the cluster is delivered with 6 nodes by default.

#### License type

Kafka software is under the Apache 2 license, a liberal open-source license.
More information on <https://github.com/apache/kafka/blob/trunk/LICENSE>.

### Hardware resources

For information on node types and pricing, please refer to the [price page](https://www.ovhcloud.com/en/public-cloud/prices/#8763).

### Features

#### Network
Public as well as private networking (vRack) can be used for all the offers.

Ingress and Egress traffic are included in the service plans and unmetered.

The database service's IP address is subject to change periodically. Thus, it is advised not to rely on these IPs for any configuration, such as connection or egress policy. Instead, utilize the provided DNS record and implement CIDR-based egress policies for more robust and flexible network management.

##### Private network considerations
Here are some considerations to take into account when using private network:

- Network ports are created in the private network of your choice. Thus, further operations on that network might be restricted - e.g. you won’t be able to delete the network if you didn’t stop the Public Cloud Databases services first.
- When connecting from an outside subnet, the Openstack IP gateway must be enabled in the subnet used for the Database service. The customer is responsible for any other custom network setup.
- Subnet sizing should include considerations for service nodes, other co-located services within the same subnet, and an allocation of additional available IP addresses for maintenance purposes. Failure to adequately size subnets could result in operational challenges and the malfunctioning of services.
- Openstack subnets routes announcement will not be applied to your services. 

##### Authorised IPs

Once your service is up and running, you will be able to specify IP addresses (or CIDR blocks) to authorise incoming traffic. Until then, your service will be unreachable.

#### Kafka replication and data retention

You can select a Kafka source cluster and a Kafka destination cluster from the same Public Cloud project.
External Kafka clusters are not supported so far.

You need at least 2 Kafka clusters to create replication flows.

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

Though advanced parameters are supported for Kafka, they are not supported for Kafka MirrorMaker.

#### Backups

Kafka is a streaming tool. We don't backup Kafka data.

#### Logs and metrics

Logs and metrics are available through the Control Panel, API and can be forwarded to Logs Data Platform. For setup instructions, see the [Public Cloud Databases - How to setup logs forwarding guide](/pages/public_cloud/public_cloud_databases/databases_16_logs_to_customer).

- **Logs retention**: 1000 lines of logs
- **Metrics retention**: 1 calendar month

Please note that if the database instance is deleted, logs and metrics are also automatically deleted.

#### Users and roles

Creation of users is allowed via the Control Panel and API.

You can specify a username for each user. By default, the role is **admin**.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!
