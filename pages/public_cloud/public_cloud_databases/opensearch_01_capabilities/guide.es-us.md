---
title: OpenSearch - Capabilities and Limitations
excerpt: Discover the capabilities and limitations of Public Cloud Databases for OpenSearch
updated: 2024-05-27
---

## Objective

This page provides the technical capabilities and limitations of the Public Cloud Databases for OpenSearch offer.

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

### OpenSearch versions

The Public Cloud Databases offer supports the following OpenSearch versions:

- OpenSearch 2

Please refer to the [DBMS lifecycle policy guide](/pages/public_cloud/public_cloud_databases/information_02_lifecycle_policy) for recommendations on version upgrades and end of life announcements of major versions. Additionally, you can follow the OpenSearch version history on their official page: <https://opensearch.org/docs/latest/version-history/>

### OpenSearch clients and plugins compatibility

You can use any of the [OpenSearch-recommended clients and plugins](https://opensearch.org/docs/latest/clients/index/#){.external} to access and populate your instance.

### Plans

Three plans are available:

- *Essential*
- *Business*
- *Enterprise*

Here is an overview of the various plans' capabilities:

| Plan         | Number of nodes by default | Additional Read replicas |
| ------------ | -------------------------- | ------------------------ |
| *Essential*  | 1                          | No                       |
| *Business*   | 3                          | Planned                  |
| *Enterprise* | 6                          | Planned                  |

Your choice of plan affects the number of nodes your cluster can run, the SLA, and a few other features such as read replicas or backup retention.

> [!primary]
> Be aware that you will be able to upgrade your plan but you won't be able to downgrade it afterwards.

#### Nodes and replicas

- **Essential**: the cluster can support at most one node.
- **Business**: the cluster is delivered with 3 nodes by default.
- **Enterprise**: the cluster is delivered with 6 nodes by default.

#### License type

OpenSearch software is under the Apache 2.0 license, a liberal open-source license.
More information on <https://github.com/opensearch-project/>.

### Hardware resources

For detailed information about node types and pricing, please refer to the [Public Cloud pricing page](https://www.ovhcloud.com/es/public-cloud/prices/#8551).

### Features

#### Plugin enabled by default

Here is the list of plugins enabled by default:

- ICU Analysis
- Phonetic Analysis
- kuromoji (Japanese Analysis)
- Mapper Size
- Open Distro for Elasticsearch SQL plugin
- Open Distro for Elasticsearch Alerting plugin
- Anomaly detection
- Asynchronous search
- Index Management
- k-NN
- Notebooks
- Performance Analyzer
- OpenSearch Dashboards Reports
- Scheduler for Dashboards Reports
- OpenSearch Dashboards GANTT Charts
- OpenSearch Dashboards Trace Analytics

#### Network

OpenSearch clusters are reachable through port specified in the control panel or API, for example 23125.

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

You can further customise your OpenSearch by using advanced parameters. See the [Advanced parameters references documentation](/pages/public_cloud/public_cloud_databases/opensearch_03_advanced_parameters_references) for more information on the supported parameters.

#### Backups

*Essential* plan clusters are automatically backed up hourly and daily. Backup retention is 24 hours for hourly backups and 2 days for daily backups.

*Business* plan clusters are automatically backed up hourly and daily. Backup retention is 24 hours for hourly backups and 14 days for daily backups.

*Enterprise* plan clusters are automatically backed up hourly and daily. Backup retention is 24 hours for hourly backups and 30 days for daily backups.

See the [Automated Backups guide](/pages/public_cloud/public_cloud_databases/databases_05_automated_backups) for more information.

#### Logs and metrics

Logs and metrics are available through the Control Panel, API and can be forwarded to Logs Data Platform. Additionally, cross service integration can be configured to leverage your logs and metrics in other Public Cloud Database services. You could then view your OpenSearch metrics in Grafana. See the [Cross Service Integration documentation](/pages/public_cloud/public_cloud_databases/databases_07_cross_service_integration) for more information. For more details on logs forwarding, see the [Public Cloud Databases - How to setup logs forwarding](/pages/public_cloud/public_cloud_databases/databases_16_logs_to_customer) guide.

- **Logs retention**: 1000 lines of logs
- **Metrics retention**: 1 calendar month

Please note that if the database instance is deleted, logs and metrics are also automatically deleted.

#### Access control (ACL)

We support index-level access control lists (ACL) to control permissions. This approach allows you to limit the operations that are available to specific connections and to restrict access to certain data sets, which improves the security of your data.

You can grant the following permissions:

- **deny**: no access
- **admin**: full access to APIs and documents
- **readwrite**: full access to documents
- **read**: allow only searching and retrieving documents
- **write**: allow updating, adding, and deleting documents

*Note*: Write permission allows the service user to create new indexes that match the pattern, but it does not allow deletion of those indexes.

Rules are defined separately for each user as **pattern/permission** combinations. The **pattern** defines the indexes that the permission applies to. Patterns are glob-style, where * matches any number of characters and ? matches any character.

When multiple rules match, they are applied in the order listed above. If no rules match, access is denied.

#### Controlling access to top-level APIs

OpenSearch has several “top-level” API endpoints (_mget, _msearch, and so on), where you have to grant access separately. To do this, use patterns similar to the index patterns, for example:

- _*/admin would grant unlimited access to all top-level APIs
- _msearch/admin grants unlimited access to the _msearch API only

#### Access control and OpenSearch Dashboards

Enabling ACLs does not restrict access to OpenSearch Dashboards itself, but all requests done by OpenSearch Dashboards are checked against the current user’s ACLs.

In practice, for OpenSearch Dashboards to function properly, you must grant the user admin-level access to the _msearch interface (permission: admin, pattern: _msearch) or switch on the ExtendedAcl option.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/es/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!
