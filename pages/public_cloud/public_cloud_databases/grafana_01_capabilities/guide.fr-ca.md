---
title: Grafana - Capacités et limitations (EN)
excerpt: Discover the capabilities and limitations of Public Cloud Databases for Grafana
routes:
    canonical: '/pages/public_cloud/public_cloud_databases/grafana_01_capabilities'
updated: 2023-05-23
---

**Last updated May 23rd, 2023**

## Objective

This page provides the technical capabilities and limitations of the Public Cloud Databases for Grafana offer.

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

Grafana nodes have to be in the same region. Multi-AZ is currently not supported.

### Grafana versions

The Public Cloud Databases offer supports the following Grafana versions:

- Grafana 9.1

Please refer to the [DBMS lifecycle policy guide](/pages/public_cloud/public_cloud_databases/information_02_lifecycle_policy) for recommendations on version upgrades and end of life announcements of major versions. Additionally, you can follow the Grafana Release Cycle on their official page: <https://grafana.com/>.

### Grafana clients

You can use your browser to access your Grafana cluster.

### Plans

The only plan available is *Essential*.

Here is an overview of the *Essential* plan capabilities:

| Plan         | Number of nodes by default | Additional nodes |
| ------------ | -------------------------- | ---------------- |
| *Essential*  | 1                          | No               |

The *Essential* plan offer an automatic backup retention of 2 days. It supports public or private networks (vRack).

#### Nodes and replicas

- **Essential**: the cluster is delivered with 1 node.

#### License type

Grafana software is under the GNU Affero General Public License, a liberal open-source license.
More information on <https://raw.githubusercontent.com/grafana/grafana/main/LICENSE>.

### Hardware resources

Here are the node types you can choose from:

**Essential plans**

| Name    | Storage | vCore | Memory (GB) |
| ------- | ------- | ----- | ----------- |
| db1-4   | N/A     | 2     | 4           |
| db1-7   | N/A     | 2     | 7           |

#### Node template upgrade

You can upgrade the node template of your cluster to scale your hardware resources up. This operation causes no interruption of service but be aware that you will not be able to downgrade the node template afterwards.

### Features
#### Network
Grafana clusters are reachable through a random port, attributed during cluster creation. Once your cluster is in **RUNNING** status, the Service URI will display the port to use.

Public as well as private networking (vRack) can be used for all the offers.

Ingress and Egress traffic are included in the service plans and unmetered.

##### Private network considerations
Here are some considerations to take into account when using private network:

- Network ports are created in the private network of your choice. Thus, further operations on that network might be restricted - e.g. you won’t be able to delete the network if you didn’t stop the Public Cloud Databases services first.
- When connecting from an outside subnet, the Openstack IP gateway must be enabled in the subnet used for the Database service. The customer is responsible for any other custom network setup.

##### Authorised IPs

Once your service is up and running, you will be able to specify IP addresses (or CIDR blocks) to authorise incoming traffic. Until then, your service will be unreachable.

#### Advanced parameters

You can further customise your Grafana by using advanced parameters. See the [Advanced parameters references documentation](/pages/public_cloud/public_cloud_databases/grafana_03_advanced_parameters_references) for more information on the supported parameters.

#### Backups

Your services are automatically backed up hourly with a one day retention.

See the [Automated Backups guide](/pages/public_cloud/public_cloud_databases/databases_05_automated_backups) for more information.

#### Logs and metrics

Logs and metrics are available through the Control Panel and the API. Additionally, cross service integration can be configured to leverage your logs and metrics in other Public Cloud Database services. You could then view your Grafana logs in Opensearch. See the [Cross Service Integration documentation](/pages/public_cloud/public_cloud_databases/databases_07_cross_service_integration) for more information.

- **Logs retention**: 1000 lines of logs
- **Metrics retention**: 1 calendar month

Please note that if the database instance is deleted, logs and metrics are also automatically deleted.

#### Users and roles

Creation of users must be done through the Grafana Web interface.

Only one user is created by default and its name is `admin`. You must reset its password to connect for the first time to the Grafana web interface.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/fr-ca/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!
