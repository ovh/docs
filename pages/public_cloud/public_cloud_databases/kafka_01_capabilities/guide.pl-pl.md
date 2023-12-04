---
title: Kafka - Capabilities and Limitations
excerpt: Discover the capabilities and limitations of Public Cloud Databases for Kafka
updated: 2023-08-17
---

## Objective

This page provides the technical capabilities and limitations of the Public Cloud Databases for Kafka offer.

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

Kafka nodes have to be in the same region. Multi-AZ is currently not supported.

### Kafka versions

The Public Cloud Databases offer supports the following Kafka versions:

- Kafka 3.3
- Kafka 3.4 (soon)

Please refer to the [DBMS lifecycle policy guide](/pages/public_cloud/public_cloud_databases/information_02_lifecycle_policy) for recommendations on version upgrades and end of life announcements of major versions. Additionally, you can follow Kafka Release Cycle on their official page: <https://kafka.apache.org/downloads>

### Kafka clients

You can use any of the Kafka-recommended clients to access your cluster.

Kafka Connect and Kafka Mirrormaker 2 are available at OVHcloud.

### Plans

Two plans are available:

- *Business*
- *Enterprise*

Here is an overview of the various plans' capabilities:

| Plan         | Number of nodes by default | Additional nodes |
| ------------ | -------------------------- | ---------------- |
| *Business*   | 3                          | No               |
| *Enterprise* | 6                          | No               |

Your choice of plan affects the number of nodes your cluster can run, the SLA, and a few other features such as read replicas or backup retention.

> [!primary]
> Be aware that you will be able to upgrade your plan but you won't be able to downgrade it afterwards.

#### Nodes and replicas

- **Business**: the cluster is delivered with 3 nodes by default.
- **Enterprise**: the cluster is delivered with 6 nodes by default.

#### License type

Kafka software is under the Apache 2 license, a liberal open-source license.
More information on <https://github.com/apache/kafka/blob/trunk/LICENSE>.

### Hardware resources

Here are the node types you can choose from:

**Business plans**

| Name    | Storage                  | vCore | Memory (GB) |
| ------- | ------------------------ | ----- | ----------- |
| db1-4   | From 480 GB to 1.44 TB   | 2     | 4           |
| db1-7   | From 960 GB to 2.88 TB   | 2     | 7           |
| db1-15  | From 1.92 TB to 5.76 TB  | 4     | 15          |
| db1-30  | From 3.84 TB to 11.52 TB | 8     | 30          |
| db1-60  | From 7.68 TB to 23.04 TB | 16    | 60          |

**Enterprise plans**

| Name    | Storage                   | vCore | Memory (GB) |
| ------- | ------------------------- | ----- | ----------- |
| db1-7   | From 1.92 TB to 5.76 TB   | 2     | 7           |
| db1-15  | From 3.84 TB to 11.52 TB  | 4     | 15          |
| db1-30  | From 7.68 TB to 23.04 TB  | 8     | 30          |
| db1-60  | From 15.36 TB to 46.08 TB | 16    | 60          |

Right now, all nodes of a given cluster should be of the same type and distributed in the same region.

#### Flexible storage

You can increase the storage of your cluster up to the maximum allowed for a given reference. Please refer to the [Resize your cluster storage guide](/pages/public_cloud/public_cloud_databases/databases_11_resize_your_cluster_storage) for more information.

#### Node template upgrade

You can upgrade the node template of your cluster to scale your hardware resources up. This operation causes no interruption of service but be aware that you will not be able to downgrade the node template afterwards.

#### Disk type

The type of storage available may vary according to the region your cluster lives in: see [Availability of Public Cloud products](https://www.ovhcloud.com/pl/public-cloud/regions-availability/) for more information about block storage type availability depending on region. Thus, your cluster may be backed by e.g. *High Speed* or *High Speed Gen2* block storage.

Also, the performance caracteristics of the various storage offerings may vary depending on e.g. the storage size your cluster uses: *High Speed* may offer better iops than *High Speed Gen2* for some disk sizes. See [Block Storage documentation](https://www.ovhcloud.com/pl/public-cloud/block-storage/) for more information about those performance caracteristics.

Public Cloud Databases will select the most efficient disk type for your cluster depending on your cluster parameters.

#### Effective storage

The disk size listed above is the total disk size of the underlying machine. However, a small part of it goes towards the OS install.

We try hard to avoid "disk full" situations that could be harmful to cluster health. Therefore:

1. When reaching a concerning level of disk usage, a warning email is sent.
2. When reaching a concerning level of disk usage, the service is moved in the "DISK_FULL" state, and "read-only" mode, meaning no more writes can be done.
3. You then have the ability to upgrade to a higher service plan with more storage.

See the [Handling «Disk Full» situations documentation](/pages/public_cloud/public_cloud_databases/databases_10_full_disk_handling) for more information.

### Features
#### Network
Kafka clusters are reachable through a random port, attributed during cluster creation. Once your cluster is in **RUNNING** status, the Service URI will display the port to use.

Public as well as private networking (vRack) can be used for all the offers.

Ingress and Egress traffic are included in the service plans and unmetered.

##### Private network considerations
Here are some considerations to take into account when using private network:

- Network ports are created in the private network of your choice. Thus, further operations on that network might be restricted - e.g. you won’t be able to delete the network if you didn’t stop the Public Cloud Databases services first.
- When connecting from an outside subnet, the Openstack IP gateway must be enabled in the subnet used for the Database service. The customer is responsible for any other custom network setup.
- Subnet sizing should include considerations for service nodes, other co-located services within the same subnet, and an allocation of additional available IP addresses for maintenance purposes. Failure to adequately size subnets could result in operational challenges and the malfunctioning of services.

##### Authorised IPs

Once your service is up and running, you will be able to specify IP addresses (or CIDR blocks) to authorise incoming traffic. Until then, your service will be unreachable.

#### Maximum simultaneous connections

The number of simultaneous connections in Public Cloud Databases for Kafka depends on the available total memory on the node.
We allow approximately 100 connections per 4 GB of RAM memory, capped to a maximum of 1000 active connections.

So for example on a server with 7 GB memory, you will get approximately 200 connections, and with 15 GB memory you will get 400 connections.

#### Schema registry

Schema registry is supported and can be activated on a running Kafka service by setting the `schemaRegistry` to `true` with an API call:

> [!api]
>
> @api {v1} /cloud PUT /cloud/project/{serviceName}/database/kafka/{clusterId}

#### Advanced parameters

You can further customise your Kafka by using advanced parameters. See the [Advanced parameters references documentation](/pages/public_cloud/public_cloud_databases/kafka_03_advanced_parameters_references) for more information on the supported parameters.

#### Backups

Kafka is a streaming tool. We don't backup Kafka data.

#### Logs and metrics

Logs and metrics are available through the Control Panel and the API. Additionally, cross service integration can be configured to leverage your logs and metrics in other Public Cloud Database services. You could then view your Kafka logs in Opensearch and metrics in Grafana (metrics have to be exported first in a time series compatible engine such as PostgreSQL or M3db). See the [Cross Service Integration documentation](/pages/public_cloud/public_cloud_databases/databases_07_cross_service_integration) for more information.

- **Logs retention**: 1000 lines of logs
- **Metrics retention**: 1 calendar month

Please note that if the database instance is deleted, logs and metrics are also automatically deleted.

#### Users and roles

Creation of users is allowed via the Control Panel and API.

You can specify a username for each user. By default, the role is **admin**.

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

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/pl/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!
