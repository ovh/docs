---
title: Kafka Connect - Capabilities and Limitations
excerpt: Discover the capabilities and limitations of Public Cloud Databases for Kafka Connect
updated: 2024-05-27
---

## Objective

This page provides the technical capabilities and limitations of the Public Cloud Databases for Kafka Connect offer.

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

> [!primary]
> Be aware that you will be able to upgrade your plan but you won't be able to downgrade it afterwards.

#### Nodes

- **Essential**: the cluster consists of one node.
- **Business**: the cluster is delivered with 3 nodes.
- **Enterprise**: the cluster is delivered with 6 nodes.

### Hardware resources

For detailed information about node types and pricing, please refer to the [Public Cloud pricing page](https://www.ovhcloud.com/en-ca/public-cloud/prices/#9667).

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
- OpenStack subnets routes announcement will not be applied to your services. 

##### Authorised IPs

Once your service is up and running, you will be able to specify IP addresses (or CIDR blocks) to authorise incoming traffic. Until then, your service will be unreachable.

#### Advanced parameters

You can further customise your Kafka Connect by using advanced parameters. See the [Advanced parameters references documentation](/pages/public_cloud/public_cloud_databases/kafkaconnect_02_advanced_parameters_references) for more information on the supported parameters.

#### Logs and metrics

Logs and metrics are available through the Control Panel and the API. Additionally, cross service integration can be configured to leverage your logs and metrics in other Public Cloud Database services. You could then view your Kafka Connect logs in Opensearch and metrics in Grafana (metrics have to be exported first in a time series compatible engine such as PostgreSQL or M3db). See the [Cross Service Integration documentation](/pages/public_cloud/public_cloud_databases/databases_07_cross_service_integration) for more information.

- **Logs retention**: 1000 lines of logs
- **Metrics retention**: 1 calendar month

Please note that if the cluster is deleted, logs and metrics are also automatically deleted.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-ca/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!
