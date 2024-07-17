---
title: Cassandra - Capabilities and Limitations
excerpt: Discover the capabilities and limitations of Public Cloud Databases for Cassandra
updated: 2024-05-27
---

## Objective

This page provides the technical capabilities and limitations of the Public Cloud Databases' Cassandra offer.

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

Entire database instances have to be in the same region. Multi-AZ is currently not supported.

### Cassandra versions

The Public Cloud Databases offer supports Cassandra version 4.

Cassandra recommends always installing and using the latest stable version.

### Plans

Three plans are available:

- *Essential*
- *Business*
- *Enterprise*

Here is an overview of the various plans' capabilities:

| Plan         | Number of nodes by default | Read replicas  |
| ------------ | -------------------------- | -------------  |
| *Essential*  | 3                          | No             |
| *Business*   | 3                          | Planned        |
| *Enterprise* | 6                          | Planned        |

Your choice of plan affects the number of nodes your cluster can run, the SLA, and a few other features such as read replicas or backup retention.

#### Nodes and replicas

- **Essential**: The cluster is delivered with 3 nodes by default.
- **Business**: The cluster is delivered with 3 nodes by default. Adding read replicas is planned.
- **Enterprise**: The cluster is delivered with 6 nodes by default. Adding read replicas is planned.

#### License type

Each cluster is provided with the Cassandra Community (GPL) license.

If any, license cost is included inside the service plans. You can't bring your own licenses.

### Hardware resources

For detailed information about node types and pricing, please refer to the [Public Cloud pricing page](https://www.ovhcloud.com/en/public-cloud/prices/#9482).

### Features

#### Network

Public as well as private networking (vRack) can be used for all the offers.

Ingress and Egress traffic are included in the service plans and unmetered.

The database service's IP address is subject to change periodically. Thus, it is advised not to rely on these IPs for any configuration, such as connection or egress policy. Instead, utilize the provided DNS record and implement CIDR-based egress policies for more robust and flexible network management.

##### Private network considerations

Here are some considerations to take into account when using private network:

- Network ports are created in the private network of your choice. Thus, further operations on that network might be restricted - e.g. you won’t be able to delete the network if you didn’t stop the Public Cloud Databases services first.
- When connecting from an outside subnet, the Openstack IP gateway must be enabled in the subnet used for the Database service. The customer is responsible for any other custom network setup.
- Subnet sizing should include considerations for service nodes, other co-located services within the same subnet, and an allocation of additional available IP addresses for maintenance purposes. Failure to adequately size subnets could result in operational challenges and the malfunctioning of services.
- Openstack subnets routes announcement will not be applied to your services. 

##### Authorised IPs

Once your service is up and running, you will be able to specify IP addresses (or CIDR blocks) to authorise incoming traffic. Until then, your service will be unreachable.

#### Advanced parameters

You can further customise your Cassandra by using advanced parameters. See the [Advanced parameters references documentation](/pages/public_cloud/public_cloud_databases/cassandra_03_advanced_parameters_references) for more information on the supported parameters.

#### Backups

Your services are automatically backed up daily. The point-in-time recovery (PITR) feature is currently not available.

See the [Automated Backups guide](/pages/public_cloud/public_cloud_databases/databases_05_automated_backups) for more information.

#### Logs and metrics

Logs and metrics are available through the Control Panel, API and can be forwarded to Logs Data Platform. Additionally, cross service integration can be configured to leverage your logs and metrics in other Public Cloud Database services. You could then view your Cassandra logs in Opensearch and metrics in Grafana (metrics have to be exported first in a time series compatible engine such as PostgreSQL or M3db). See the [Cross Service Integration documentation](/pages/public_cloud/public_cloud_databases/databases_07_cross_service_integration) for more information. For more details on logs forwarding, see the [Public Cloud Databases - How to setup logs forwarding](/pages/public_cloud/public_cloud_databases/databases_16_logs_to_customer) guide.

- **Logs retention**: 1000 lines of logs
- **Metrics retention**: 1 calendar month

Please note that if the database instance is deleted, logs and metrics are also automatically deleted.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!
