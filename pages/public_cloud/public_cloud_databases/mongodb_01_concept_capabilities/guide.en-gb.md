---
title: MongoDB - Capabilities and Limitations
excerpt: Find out what are the capabilities and limitations of the Public Cloud Databases for MongoDB offer
updated: 2024-07-09
---

## Objective

This page provides the technical capabilities and limitations of the Public Cloud Databases for MongoDB offer.

## Capabilities and limitations

### Supported regions

The Public Cloud Databases offer is available in the following regions:

- `BHS` (Beauharnois, Canada)
- `DE` (Frankfurt, Germany)
- `GRA` (Gravelines, France)
- `UK` (London, United Kingdom)
- `SBG` (Strasbourg, France)
- `WAW` (Warsaw, Poland)

### MongoDB versions

The Public Cloud Databases offer supports the following MongoDB versions:

- MongoDB 5.0
- MongoDB 6.0
- MongoDB 7.0

Please refer to the [DBMS lifecycle policy guide](/pages/public_cloud/public_cloud_databases/information_02_lifecycle_policy) for recommendations on version upgrades and end of life announcements of major versions. Additionally, MongoDB recommends always installing and using the latest stable version of MongoDB. See [MongoDB Versioning](https://docs.mongodb.com/manual/reference/versioning/){.external} for more information.

### MongoDB Drivers

You can use any one of the [MongoDB-recommended drivers](https://docs.mongodb.com/drivers/){.external} to access your cluster.

### Plans

Six plans are available:

- *Essential*
- *Discovery*
- *Business*
- *Production*
- *Enterprise*
- *Advanced*

Here is an overview of the various plans' capabilities:

| Plan         | Number of nodes | MongoDB License | BI Connector  | Compass   |
| ------------ | --------------- | --------------- | ------------  | --------- |
| *Essential*  | 1               | Community       | Not available | Available |
| *Discovery*  | 3               | Community       | Not available | Available |
| *Business*   | 3 to 8          | Community       | Not available | Available |
| *Production* | 3               | Community       | Not available | Available |
| *Enterprise* | 3 to 8          | Enterprise      | Available     | Available |
| *Advanced*   | 3 to 7          | Enterprise      | Available     | Available |

Your choice of plan affects the number of nodes your cluster can run as well as the MongoDB license type.

> [!primary]
> Be aware that you will be able to upgrade your plan but you won't be able to downgrade it afterwards.

#### Nodes

- *Essential*: The cluster supports at most one node.
- *Discovery*: The cluster contains 3 nodes.
- *Business*, *Production*, *Enterprise* and *Advanced*: The cluster can support 3 to 8 nodes including optionally an analytics node.

#### License type

- *Essential*, *Discovery*, *Business* and *Production* plans use the MongoDB Community license.
- *Enterprise* and *Advanced* plans upgrade your cluster so that it uses the MongoDB Enterprise license, giving you the capability to use the [MongoDB BI Connector](https://www.mongodb.com/products/bi-connector){.external} as well as [MongoDB Compass](https://www.mongodb.com/products/compass){.external}.

License cost is included inside the service plans. You cannot bring your own licenses.

### Hardware resources

Please refer to the [price page](https://www.ovhcloud.com/en-gb/public-cloud/prices/#4951) for details on node types and their specifications.

### Features

#### Network

MongoDB clusters are reachable through default port 27017.

Public as well as private networking (vRack) can be used for all the offers. Private network is not available for the Discovery offer.

Ingress and Egress traffic are included in the service plans and unmetered.

The database service's IP address is subject to change periodically. Thus, it is advised not to rely on these IPs for any configuration, such as connection or egress policy. Instead, utilize the provided DNS record and implement CIDR-based egress policies for more robust and flexible network management.

##### Private network considerations

Here are some considerations to take into account when using private network:

- Network ports are created in the private network of your choice. Thus, further operations on that network might be restricted - e.g. you won’t be able to delete the network if you didn’t stop the Public Cloud Databases services first.
- **DHCP must be enabled** in your private network in order to launch MongoDB clusters in the said private network.
- When connecting from an outside subnet, the Openstack IP gateway must be enabled in the subnet used for the Database service. The customer is responsible for any other custom network setup.
- Subnet sizing should include considerations for service nodes, other co-located services within the same subnet, and an allocation of additional available IP addresses for maintenance purposes. Failure to adequately size subnets could result in operational challenges and the malfunctioning of services.

##### Authorised IPs

Once your service is up and running, you will be able to specify IP addresses (or CIDR blocks) to authorize incoming traffic. Until then, your service will be unreachable.

#### Backups

*Discovery* plan clusters are not backed up.

*Business* and *Production* plan clusters are automatically backed up daily. Backup retention is 7 days.

*Enterprise* and *Advanced* plan clusters are automatically backed up daily, with [PITR](https://en.wikipedia.org/wiki/Point-in-time_recovery){.external} support. Backup retention is 30 days with PITR capability for the last 24 hours.

See the [Automated Backups guide](/pages/public_cloud/public_cloud_databases/databases_05_automated_backups) for more information.

#### Logs and Metrics

Logs and metrics are available through the Control Panel, API, and can be forwarded to Logs Data Platform. See the [Public Cloud Databases - How to setup logs forwarding guide](/pages/public_cloud/public_cloud_databases/databases_16_logs_to_customer) for more information.

- **Logs retention:** 1000 lines of logs;
- **Metrics retention:** 1 calendar year.

Please note that if the database instance is deleted, logs and metrics are also automatically deleted.

#### Users and roles

Creation of users is allowed with the proposed roles:

| Role                 | Database        |
| -------------------- | --------------- |
| backup               | admin           |
| clusterManager       | admin           |
| clusterMonitor       | admin           |
| clusterAdmin         | admin           |
| dbAdmin              | User configured |
| dbAdminAnyDatabase   | admin           |
| dbOwner              | User configured |
| enableSharding       | User configured |
| hostManager          | User configured |
| read                 | User configured |
| readWrite            | User configured |
| readWriteAnyDatabase | admin           |
| readAnyDatabase      | admin           |
| restore              | admin           |
| root                 | admin           |
| userAdmin            | User configured |
| userAdminAnyDatabase | admin           |

In order to properly manage your MongoDB cluster, some MongoDB users are set up in your clusters by OVHcloud:

- `admin@admin` is your initial user
- `mms-automation@admin` is a technical user required for automation purposes
- `backup-*@admin` are used to perform backups

Furthermore, user creation from the MongoDB Shell is **not** supported: You need to use the OVHcloud API or the OVHcloud Control Panel in order to manage your clusters' users. Any user created through the mongo shell will be deleted by the automation mechanism.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project. Join our community of users on <https://community.ovh.com/en/>.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!
