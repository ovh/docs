---
title: Kafka Connect - Capabilities and Limitations
slug: kafkaconnect/capabilities
excerpt: Discover the capabilities and limitations of Public Cloud Databases for Kafka Connect
section: Kafka Connect - Guides
order: 010
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/kafka/capabilities/'
updated: 2023-04-24
---

**Last updated April 24th, 2023**

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

> [!primary]
> Be aware that you will be able to upgrade your plan but you won't be able to downgrade it afterwards.


#### Nodes

- **Essential**: the cluster consists of one node.
- **Business**: the cluster is delivered with 3 nodes.
- **Enterprise**: the cluster is delivered with 6 nodes.

### Hardware resources

Here are the node types you can choose from:

| Name    | Storage | vCore | Memory (GB) |
| ------- | ------- | ----- | ----------- |
| db1-4   | N/A     | 2     | 4           |
| db1-7   | N/A     | 2     | 7           |
| db1-15  | N/A     | 4     | 15          |
| db1-30  | N/A     | 8     | 30          |

All nodes of a given cluster should be of the same type and distributed in the same region.

### Features

#### Network
Public as well as private networking (vRack) can be used for all the offers.

Ingress and Egress traffic are included in the service plans and unmetered.

##### Private network considerations
Here are some considerations to take into account when using private network:

- Network ports are created in the private network of your choice. Thus, further operations on that network might be restricted - e.g. you won’t be able to delete the network if you didn’t stop the Public Cloud Databases services first.
- When connecting from an outside subnet, the Openstack IP gateway must be enabled in the subnet used for the Database service. The customer is responsible for any other custom network setup.

##### Authorised IPs

Once your service is up and running, you will be able to specify IP addresses (or CIDR blocks) to authorise incoming traffic. Until then, your service will be unreachable.

#### Advanced parameters

You can further customise your Kafka Connect by using advanced parameters. See the [Advanced parameters references documentation](/pages/platform/databases/kafkaconnect_02_advanced_parameters_references) for more information on the supported parameters.

#### Logs and metrics

Logs and metrics are available through the Control Panel and the API. Additionally, cross service integration can be configured to leverage your logs and metrics in other Public Cloud Database services. You could then view your Kafka Connect logs in Opensearch and metrics in Grafana (metrics have to be exported first in a time series compatible engine such as PostgreSQL or M3db). See the [Cross Service Integration documentation](/pages/platform/databases/databases_07_cross_service_integration) for more information.

- **Logs retention**: 1000 lines of logs
- **Metrics retention**: 1 calendar month

Please note that if the cluster is deleted, logs and metrics are also automatically deleted.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/pt/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!
