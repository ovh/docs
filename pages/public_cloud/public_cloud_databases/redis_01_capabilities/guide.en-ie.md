---
title: Valkey - Capabilities and Limitations
excerpt: Discover the capabilities and limitations of Public Cloud Databases for Valkey
updated: 2025-07-31
---

## Objective

This page provides the technical capabilities and limitations of the Public Cloud Databases for Valkey offer.

We continuously improve our offers. You can follow and submit ideas to add to our roadmap at <https://github.com/orgs/ovh/projects/16/views/5>.

## Capabilities and limitations

### Supported regions and multi-AZ

The Public Cloud Databases offer is available in the following regions:

- `BHS` (Beauharnois, Canada)
- `DE` (Frankfurt, Germany)
- `GRA` (Gravelines, France)
- `SBG` (Strasbourg, France)
- `SGP` (Singapore, Singapore)
- `EU-WEST-PAR` (Paris, France)
- `EU-SOUTH-MIL` (Milan, France)
- `UK` (London, United Kingdom)
- `WAW` (Warsaw, Poland)

Database nodes have to be in the same region. Multi-AZ is currently not supported.

### Valkey versions

The Public Cloud Databases offer uses the following Redis® open source and Valkey versions:

- Valkey 7.2
- Valkey 8.0

Please refer to the [DBMS lifecycle policy guide](/pages/public_cloud/public_cloud_databases/information_02_lifecycle_policy) for recommendations on version upgrades and end of life announcements of major versions. Additionally, you can follow Redis® release cycle on their official page: <https://redis.io/topics/releases>

### Valkey clients

You can use any of the [clients recommended by Redis®](https://redis.io/clients) to access your instance.

### Plans

Two plans are available:

- *Essential*
- *Business/Production*

Here is an overview of the various plans' capabilities:

| Plan                  | Number of nodes by default | Additional nodes |
| --------------------- | -------------------------- | ---------------- |
| *Essential*           | 1                          | No               |
| *Business/Production* | 2                          | No               |

Your choice of plan affects the number of nodes your cluster can run, the SLA, and a few other features such as read replicas or backup retention.

> [!primary]
> Be aware that you will be able to upgrade your plan but you won't be able to downgrade it afterwards.

#### Nodes and replicas

- **Essential**: the cluster can support at most one node.
- **Business/Production**: the cluster is delivered with 2 nodes by default.

#### License type

Valkey is provided under BSD 3-Clause License.

More information on <https://valkey.io/topics/license/>.

### Hardware resources

For information on node types and pricing, please refer to the [price page](https://www.ovhcloud.com/en-ie/public-cloud/prices/#7262).

### Features

#### Network
Valkey clusters are reachable through default port 20182.

Public as well as private networking (vRack) can be used for all the offers.

Ingress and Egress traffic are included in the service plans and unmetered.

The database service's IP address is subject to change periodically. Thus, it is advised not to rely on these IPs for any configuration, such as connection or egress policy. Instead, utilize the provided DNS record and implement CIDR-based egress policies for more robust and flexible network management.

##### Private network considerations
Here are some considerations to take into account when using private network:

- Network ports are created in the private network of your choice. Thus, further operations on that network might be restricted - e.g. you won’t be able to delete the network if you didn’t stop the Public Cloud Databases services first.
- When connecting from an outside subnet, the Openstack IP gateway must be enabled in the subnet used for the Database service. The customer is responsible for any other custom network setup.
- Subnet sizing should include considerations for service nodes, other co-located services within the same subnet, and an allocation of additional available IP addresses for maintenance purposes. Failure to adequately size subnets could result in operational challenges and the malfunctioning of services.
- OpenStack subnets routes announcement will not be applied to your services.
- You can only create private network services if you are the original owner of the network. You can not create private network services on a shared network.

##### Authorised IPs

Once your service is up and running, you will be able to specify IP addresses (or CIDR blocks) to authorise incoming traffic. Until then, your service will be unreachable. 

#### Maximum simultaneous connections

The number of simultaneous connections in Public Cloud Databases for Valkey depends on the available total memory on the server. We allow 4 \* megabytes_of_bytes_memory connections per RAM GB, but at least 10000 connections, even on the smallest servers.

So for example on a server with 7GB memory, you will get up to 7 \* 4096 = 28672 simultaneous connections.

#### Advanced parameters

You can further customise your service by using advanced parameters. See the [Advanced parameters references documentation](/pages/public_cloud/public_cloud_databases/redis_09_advanced_parameters_references) for more information on the supported parameters.

#### Backups

*Essential* plan clusters are automatically backed up every 12 hours during their maintenance window. Backup retention is 1 day.

*Business/Production* plan clusters are automatically backed up every 12 hours during their maintenance window. Backup retention is 3 days.

See the [Automated Backups guide](/pages/public_cloud/public_cloud_databases/databases_05_automated_backups) for more information.

#### Logs and metrics

Logs and metrics are available through the Control Panel, API and can be forwarded to Logs Data Platform. For setup instructions, see the [Public Cloud Databases - How to setup logs forwarding guide](/pages/public_cloud/public_cloud_databases/databases_16_logs_to_customer).

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

You can follow the official Redis® documentation about Commands: <https://redis.io/commands/>.

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
> Update of user ACLs is allowed only via API. Follow this [guide](/pages/public_cloud/public_cloud_databases/redis_07_update_acls) to learn more.
>

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!
