---
title: PostgreSQL - Capabilities and Limitations
excerpt: Discover the capabilities and limitations of Public Cloud Databases for PostgreSQL
updated: 2024-05-27
---

## Objective

This page provides the technical capabilities and limitations of the Public Cloud Databases for PostgreSQL offer.

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

Database nodes have to be in the same region. Multi-AZ is currently not supported.

### PostgreSQL versions

The Public Cloud Databases offer supports the following PostgreSQL versions:

- PostgreSQL 13
- PostgreSQL 14
- PostgreSQL 15
- PostgreSQL 16

Please refer to the [DBMS lifecycle policy guide](/pages/public_cloud/public_cloud_databases/information_02_lifecycle_policy) for recommendations on version upgrades and end of life announcements of major versions. Additionally, you can follow the EOL lifecycle for PostgreSQL version on their official page : <https://www.postgresql.org/support/versioning/>

### PostgreSQL connectors

You can use any of the [PostgreSQL-recommended drivers and extensions](https://www.postgresql.org/download/product-categories/){.external} to access your instance.

### Plans

Three plans are available:

- *Essential*
- *Business*
- *Enterprise*

Here is an overview of the various plans' capabilities:

| Plan         | Number of nodes by default | Read replicas |
| ------------ | -------------------------- | ------------- |
| *Essential*  | 1                          | No            |
| *Business*   | 2                          | Planned       |
| *Enterprise* | 3                          | Planned       |

Your choice of plan affects the number of nodes your cluster can run, the SLA, and a few other features such as read replicas or backup retention.

> [!primary]
> Be aware that you will be able to upgrade your plan but you won't be able to downgrade it afterwards.

#### Nodes and replicas

- **Essential**: the cluster can support at most one node.
- **Business**: the cluster is delivered with 2 nodes by default. Adding read replicas is planned.
- **Enterprise**: the cluster is delivered with 3 nodes by default. Adding read replicas is planned.

#### License type

PostgreSQL software is under the PostgreSQL License, a liberal open-source license, similar to BSD or MIT licenses.
More information on <https://www.postgresql.org/about/licence/>.

### Hardware resources

For information on node types and pricing, please refer to the [price page](https://www.ovhcloud.com/it/public-cloud/prices/#7261).

#### Flexible storage

You can increase the storage of your cluster up to the maximum allowed for a given reference. Please refer to the [Resize your cluster storage guide](/pages/public_cloud/public_cloud_databases/databases_11_resize_your_cluster_storage) for more information.

#### Node template upgrade

You can upgrade the node template of your cluster to scale your hardware resources up. This operation causes no interruption of service but be aware that you will not be able to downgrade the node template afterwards.

#### Disk type

The type of storage available may vary according to the region your cluster lives in: see [Availability of Public Cloud products](https://www.ovhcloud.com/it/public-cloud/regions-availability/) for more information about block storage type availability depending on region. Thus, your cluster may be backed by e.g. *High Speed* or *High Speed Gen2* block storage.

Also, the performance characteristics of the various storage offerings may vary depending on e.g. the storage size your cluster uses: *High Speed* may offer better iops than *High Speed Gen2* for some disk sizes. See [Block Storage documentation](https://www.ovhcloud.com/it/public-cloud/block-storage/) for more information about those performance characteristics.

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

PostgreSQL clusters are reachable on a customized port available through the Control Panel and the API.

Public as well as private networking (vRack) can be used for all the offers.

Ingress and Egress traffic are included in the service plans and unmetered.

The database service's IP address is subject to change periodically. Thus, it is advised not to rely on these IPs for any configuration, such as connection or egress policy. Instead, utilize the provided DNS record and implement CIDR-based egress policies for more robust and flexible network management.

##### Private network considerations

Here are some considerations to take into account when using private network:

- Network ports are created in the private network of your choice. Thus, further operations on that network might be restricted - e.g. you won’t be able to delete the network if you didn’t stop the Public Cloud Databases services first.
- When connecting from an outside subnet, the Openstack IP gateway must be enabled in the subnet used for the Database service. The customer is responsible for any other custom network setup.
- Subnet sizing should include considerations for service nodes, other co-located services within the same subnet, and an allocation of additional available IP addresses for maintenance purposes. Failure to adequately size subnets could result in operational challenges and the malfunctioning of services.
- OpenStack subnets routes announcement will not be applied to your services. 

##### Authorised IPs

Once your service is up and running, you will be able to specify CIDR blocks to authorise incoming traffic. Until then, your service will be unreachable.

#### Maximum simultaneous connections

The number of simultaneous connections in Public Cloud Databases for PostgreSQL depends on the available total memory on the node.
We allow approximately 100 connections per 4 GB of RAM memory, capped to a maximum of 1000 active connections.

So for example on a server with 7 GB memory, you will get approximately 200 connections and with 15 GB memory you will get 400 connections.

#### Advanced parameters

You can further customise your PostgreSQL by using advanced parameters. See the [Advanced parameters references documentation](/pages/public_cloud/public_cloud_databases/postgresql_10_advanced_parameters_references) for more information on the supported parameters.

#### Backups

*Essential* plan clusters are automatically backed up daily. Backup retention is 2 days.

*Business* plan clusters are automatically backed up daily. Backup retention is 14 days.

*Enterprise* plan clusters are automatically backed up daily. Backup retention is 30 days.

See the [Automated Backups guide](/pages/public_cloud/public_cloud_databases/databases_05_automated_backups) for more information.

#### Logs and metrics

Logs and metrics are available through the Control Panel, API and can be forwarded to Logs Data Platform. For setup instructions, see the [Public Cloud Databases - How to setup logs forwarding guide](/pages/public_cloud/public_cloud_databases/databases_16_logs_to_customer).

- **Logs retention**: 1000 lines of logs
- **Metrics retention**: 1 calendar month

Please note that if the database instance is deleted, logs and metrics are also automatically deleted.

#### Users and roles

Creation of users is allowed via the Control Panel and API with default admin roles and privileges.
The only specific privilege you can set is `replication`.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/it/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!
