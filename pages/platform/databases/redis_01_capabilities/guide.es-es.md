---
title: Redis - Capabilities and Limitations
slug: redis/capabilities
excerpt: Discover the capabilities and limitations of Public Cloud Databases for Redis
section: Redis - Guides
order: 010
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/redis/capabilities/'
---

**Last updated January 26<sup>th</sup>, 2022**

## Objective

This page provides the technical capabilities and limitations of the Public Cloud Databases for Redis offer.

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

### Redis versions

The Public Cloud Databases offer supports the following Redis versions:

- Redis 6.2

You can follow Redis Release Cycle on their official page: <https://redis.io/topics/releases>

### Redis clients

You can use any of the [Redis-recommended clients](https://redis.io/clients){.external} to access your instance.

### Plans

Three plans are available:

- *Essential*
- *Business*
- *Enterprise*

Here is an overview of the various plans' capabilities:

| Plan         | Number of nodes by default | Additional nodes | Network                |
| ------------ | -------------------------- | ---------------- | ---------------------- |
| *Essential*  | 1                          | No               | Public only            |
| *Business*   | 2                          | No               | Public & Private vRack |
| *Enterprise* | 3                          | No               | Public & Private vRack |

Your choice of plan affects the number of nodes your cluster can run, the SLA, and a few other features such as private network, read replicas and backup retention.

#### Nodes and replicas

- **Essential**: the cluster can support at most one node.
- **Business**: the cluster is delivered with 2 nodes by default.
- **Enterprise**: The cluster is delivered with 3 nodes by default.

#### License type

Redis Community software is under the 3-Clause-BSD license, a liberal open-source license.
More information on <https://redis.com/legal/licenses/>.

### Hardware resources

Here are the node types you can choose from:

| Name    | Disk (GB) | Cores | Memory (GB) |
| ------- | --------- | ----- | ----------- |
| db1-7   | N/A       | 2     | 7           |
| db1-15  | N/A       | 4     | 15          |
| db1-30  | N/A       | 8     | 30          |
| db1-60  | N/A       | 16    | 60          |
| db1-120 | N/A       | 32    | 120         |

Right now, all nodes of a given cluster should be of the same type and distributed in the same region.

### Features

#### Network

Redis clusters are reachable through default port 20182.

Public networking can be used for all the offers.

Private networking (vRack) is available for *Business* and *Enterprise*.

When using private networking, some network ports get created in the private network of your choice. Thus, further operations on that network might suffer from some restrictions - e.g. you won't be able to delete the network if you didn't stop the Public Cloud Databases services first.

Ingress and Egress traffic are included in the service plans and unmetered.

#### Maximum simultaneous connections

The number of simultaneous connections in Public Cloud Databases for Redis depends on the available total memory on the server. We allow 4 \* megabytes_of_bytes_memory connections per RAM GB, but at least 10000 connections, even on the smallest servers.

So for example on a server with 7GB memory, you will get up to 7 \* 4096 = 28672 simultaneous connections.

#### Advanced parameters

We do not currently support Redis advanced parameters.

#### Backups

*Essential* plan clusters are automatically backed up daily during their maintenance window. Backup retention is 2 days.

*Business* plan clusters are automatically backed up daily during their maintenance window. Backup retention is 14 days.

*Enterprise* plan clusters are automatically backed up daily during their maintenance window. Backup retention is 30 days.

#### Logs and metrics

Logs and metrics are available via the OVHcloud Public Cloud Control Panel.
As of today, you can't export logs and metrics, nor plug them into a remote tool.

- **Logs retention**: 1000 lines of logs
- **Metrics retention**: 1 calendar month

Please note that if the database instance is deleted, logs and metrics are also automatically deleted.

#### Users and roles

Creation of users is allowed via the Control Panel and API.

For each user you can specify:

- Username
- Keys (such as "cached:*")
- Categories (such as "@set")
- Commands (such as "+ping +info +echo +get +set")
- Channels (such as "*")

You can follow the official Redis documentation about Commands: <https://redis.io/commands/>.

Here is the list of unsupported commands:

- bgrewriteaof
- cluster
- command
- debug
- failover
- migrate
- role
- slaveof
- script
- eval
- evalsha
- acl
- bgsave
- config
- replicaof
- lastsave
- save
- shutdown
- monitor

> [!primary]
>
> Update of user ACLs is allowed only via API. Follow this [guide](https://docs.ovh.com/es/publiccloud/databases/redis/acls/) to learn more.
>

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

Are you on Discord? Connect to our channel at <https://discord.gg/PwPqWUpN8G> and interact directly with the team that builds our databases service!
