---
title: OpenSearch - Capabilities and Limitations
slug: opensearch/capabilities
excerpt: Discover the capabilities and limitations of Public Cloud Databases for OpenSearch
section: OpenSearch - Guides
order: 1
---

**Last updated November 8th, 2022**

## Objective

This page provides the technical capabilities and limitations of the Public Cloud Databases for OpenSearch offer.

We continuously improve our offers. You can follow and submit ideas to add to our roadmap at <https://github.com/ovh/public-cloud-roadmap/projects/2>.

## Capabilities and limitations

### Supported regions and multi-AZ

The Public Cloud Databases offer is available in the following regions:

- `BHS` (Beauharnois, Canada)
- `DE` (Frankfurt, Germany)
- `GRA` (Gravelines, France)
- `SBG`(Strasbourg, France)
- `UK` (London, United Kingdom)
- `WAW` (Warsaw, Poland)

Database nodes have to be in the same region. Multi-AZ is currently not supported.

### OpenSearch versions

The Public Cloud Databases offer supports the following OpenSearch versions:

- OpenSearch 1.1

You can follow version history for OpenSearch version on their official page: <https://opensearch.org/docs/latest/version-history/>

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

Your choice of plan affects the number of nodes your cluster can run, the SLA, and a few other features such as backup retention.

#### Nodes and replicas

- **Essential**: the cluster can support at most one node.
- **Business**: The cluster is delivered with 3 nodes by default.
- **Enterprise**: The cluster is delivered with 6 nodes by default.

#### License type

OpenSearch software is under the Apache 2.0 license, a liberal open-source license.
More information on <https://github.com/opensearch-project/>.

### Hardware resources

Here are the node types you can choose from:

**Essentials plans**

| Name    | Disk (GB) | Cores | Memory (GB) |
| ------- | --------- | ----- | ----------- |
| db1-7   | 80        | 2     | 7           |
| db1-15  | 160       | 4     | 15          |


**Business plans**

| Name    | Disk (GB) | Cores | Memory (GB) |
| ------- | --------- | ----- | ----------- |
| db1-7   | 240       | 2     | 7           |
| db1-15  | 480       | 4     | 15          |
| db1-30  | 960       | 8     | 30          |
| db1-60  | 1920      | 16    | 60          |
| db1-120 | 3840      | 32    | 120         |


**Enterprise plans**

| Name    | Disk (GB) | Cores | Memory (GB) |
| ------- | --------- | ----- | ----------- |
| db1-7   | 480       | 2     | 7           |
| db1-15  | 960       | 4     | 15          |
| db1-30  | 1920      | 8     | 30          |
| db1-60  | 3840      | 16    | 60          |
| db1-120 | 7680      | 32    | 120         |

Right now, all nodes of a given cluster should be of the same type and distributed in the same region.

#### Disk type

The type of storage available may vary according to the region your cluster lives in: see [Availability of Public Cloud products](https://www.ovhcloud.com/asia/public-cloud/regions-availability/) for more information about block storage type availability depending on region. Thus, your cluster may be backed by e.g. *High Speed* or *High Speed Gen2* block storage.

Also, the performance caracteristics of the various storage offerings may vary depending on e.g. the storage size your cluster uses: *High Speed* may offer better iops than *High Speed Gen2* for some disk sizes. See [Block Storage documentation](https://www.ovhcloud.com/asia/public-cloud/block-storage/) for more information about those performance caracteristics.

Public Cloud Databases will select the most efficient disk type for your cluster depending on your cluster parameters.

#### Effective storage

The disk size listed above is the total disk size of the underlying machine. However, a small part of it goes towards the OS install.

### Features

#### Plugin enabled by default

Here is the list of plugins enabled by default:

    ICU Analysis
    Phonetic Analysis
    kuromoji (Japanese Analysis)
    Mapper Size
    Open Distro for Elasticsearch SQL plugin
    Open Distro for Elasticsearch Alerting plugin
    Anomaly detection
    Asynchronous search
    Index Management
    k-NN
    Notebooks
    Performance Analyzer
    OpenSearch Dashboards Reports
    Scheduler for Dashboards Reports
    OpenSearch Dashboards GANTT Charts
    OpenSearch Dashboards Trace Analytics

#### Network

OpenSearch clusters are reachable through port specified in the control panel or API, for example 23125. 

Public as well as private networking (vRack) can be used for all the offers.

When using private networking, some network ports get created in the private network of your choice. Thus, further operations on that network might suffer from some restrictions - e.g. you won't be able to delete the network if you didn't stop the Public Cloud Databases services first.

Ingress and Egress traffic are included in the service plans and unmetered.

#### Advanced parameters

We do not currently support OpenSearch advanced parameters.

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

Are you on Discord? Connect to our channel at <https://discord.gg/PwPqWUpN8G> and interact directly with the team that builds our databases service!
