---
title: Capabilities and Limitations of Public Cloud Analytics with ClickHouse
excerpt: Discover the technical capabilities and limitations of the Public Cloud Analytics for ClickHouse offer, including supported regions, plans, storage, networking, and backups
updated: 2026-04-15
---

## Objective

**This page provides the technical capabilities and limitations of the Analytics for ClickHouse offer.**

We continuously improve our offers. You can follow and submit ideas to add to our roadmap at <https://github.com/orgs/ovh/projects/16/views/18>.

## Capabilities and limitations

### Supported regions and multi-AZ

The Analytics offer is available in the following regions:

- `EU-WEST-PAR` (Paris, France).
- `EU-SOUTH-MIL` (Milan, Italy).

Analytics nodes have to be in the same region.

### ClickHouse versions

The Analytics offer supports the following ClickHouse versions:

- ClickHouse 25

See the [Analytics services lifecycle policy guide](/pages/public_cloud/data_analytics/analytics/information_02_lifecycle_policy) for version upgrade recommendations and end-of-life announcements. Additionally, you can follow the EOL lifecycle for ClickHouse versions on their official page: <https://clickhouse.com/docs/whats-new/changelog>

### ClickHouse connectors

You can use any of the [ClickHouse-recommended drivers and interfaces](https://clickhouse.com/docs/interfaces/overview) to access your instance.

### Plans

Two plans are available:

- **Discovery** (Soon): 1 node
- **Production**: 3 nodes

Your choice of plan affects the number of nodes your cluster can run, the SLA, and a few other features such as backup retention.

#### License type

ClickHouse software is under the Apache License 2.0, a liberal open-source license, similar to BSD or MIT licenses.
More information on <https://github.com/ClickHouse/ClickHouse/blob/master/LICENSE>.

### Hardware resources

For information on node types and pricing, see the [price page](/links/public-cloud/prices).

#### Flexible storage

You can increase the storage of your cluster up to the maximum allowed for a given reference. See the "[Resize your cluster storage guide](/pages/public_cloud/data_analytics/analytics/analytics_resize_cluster_storage)" for details.

#### Node template upgrade

You can upgrade the node template of your cluster to scale your hardware resources up. This operation causes no interruption of service, but be aware that you will not be able to downgrade the node template afterwards.

#### Disk type

The type of storage available may vary according to the region your cluster lives in: see our page "[Availability of Public Cloud products](/links/public-cloud/regions-pci)" for more information about block storage type availability depending on region. Thus, your cluster may be backed by e.g. *High Speed* or *High Speed Gen2* block storage.

Also, the performance characteristics of the various storage offerings may vary depending on e.g. the storage size your cluster uses: *High Speed* may offer better iops than *High Speed Gen2* for some disk sizes. See the [Block Storage page](/links/public-cloud/block-storage) for more information about those performance characteristics.

Analytics will select the most efficient disk type for your cluster depending on your cluster parameters.

#### Effective storage

The disk size listed above is the total disk size of the underlying machine. However, a small part of it goes towards the OS install.

We try hard to avoid "disk full" situations that could be harmful to cluster health. Therefore:

1. When reaching a concerning level of disk usage, a warning email is sent.
2. When reaching a concerning level of disk usage, the service is moved to the `DISK_FULL` state and `read-only` mode, meaning no more writes can be done.
3. You can then upgrade to a higher service plan with more storage.

See the "[Handling 'Disk Full' situations documentation](/pages/public_cloud/data_analytics/analytics/analytics_full_disk_handling)" for more information.

### Features

#### Network

ClickHouse clusters are reachable on a customized port available through the OVHcloud Control Panel and the OVHcloud API.

Public as well as private networking (vRack) can be used for all the offers.

Ingress and Egress traffic are included in the service plans and unmetered.

The Analytics service's IP address is subject to change periodically. Thus, it is advised not to rely on these IPs for any configuration, such as connection or egress policy. Instead, utilize the provided DNS record and implement CIDR-based egress policies for more robust and flexible network management.

##### Private network considerations

Consider the following when using a private network:

- Network ports are created in the private network of your choice. Thus, further operations on that network might be restricted - e.g. you won’t be able to delete the network if you didn’t stop the Analytics services first.
- When connecting from an outside subnet, the OpenStack IP gateway must be enabled in the subnet used for the Analytics service. You are responsible for any other custom network setup.
- Subnet sizing should include considerations for service nodes, other co-located services within the same subnet, and an allocation of additional available IP addresses for maintenance purposes. Failure to adequately size subnets could result in operational challenges and the malfunctioning of services.
- OpenStack subnet route announcements will not be applied to your services.
- You can only create private network services if you are the original owner of the network. You can not create private network services on a shared network.

##### Authorised IPs

Once your service is running, you can specify CIDR blocks to authorise incoming traffic. Until then, your service will be unreachable.

#### Maximum simultaneous connections

The number of simultaneous connections in Public Cloud Analytics for ClickHouse depends on the available total memory on the node.
We allow approximately 100 connections per 4 GB of RAM memory, capped to a maximum of 1000 active connections.

So for example on a server with 7 GB memory, you will get approximately 200 connections and with 15 GB memory you will get 400 connections.

#### Backups

*Production* plan clusters are automatically backed up daily. Backup retention is 14 days.

See the [Automated Backups guide](/pages/public_cloud/data_analytics/analytics/information_05_automated_backups) for more information.

#### Logs and metrics

Logs and metrics are available through the OVHcloud Control Panel, the OVHcloud API and can be forwarded to Logs Data Platform. For setup instructions, see the guide "[Analytics - How to set up logs forwarding](/pages/public_cloud/data_analytics/analytics/analytics_logs_to_customer)".

- **Logs retention**: 1000 lines of logs.
- **Metrics retention**: 1 calendar month.

If the Analytics instance is deleted, logs and metrics are also automatically deleted.

#### Users and roles

Creation of users is allowed via the OVHcloud Control Panel and the OVHcloud API with default admin roles and privileges.
The only specific privilege you can set is `replication`.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our Analytics service!

Join our [community of users](/links/community).
