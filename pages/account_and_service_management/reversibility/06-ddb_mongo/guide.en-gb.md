---
title: "Reversibility Policy for Managed Document Database Product"
updated: 2025-06-12
---

## Objective

This document outlines the reversibility policy for the product line Managed Document Database covering OVHcloud offer MongoDB.

This policy aims to implement the general principles of reversibility and our compliance with the SWIPO IaaS Code of Conduct for cloud providers.

## List of features

The functionalities of the product line Managed Document Database are divided into three categories:

1. **Core features** for which we guarantee migration capability.
1. **OVHcloud implementations** that require adaptation to a new environment for migration.
1. **Specific features** that cannot be guaranteed for migration as they are tied to the OVHcloud environment or involve custom developments.

### 1 - Core features

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| Document oriented database | Flexible JSON/BSON data storage for high scalability. | BSON, JSON, CSV | **Incoming**: Import via mongorestore/mongoimport. <br> **Outgoing**: Export via mongodump/mongoexport. | [MongoDB documentation](https://docs.mongodb.com/) |
| Open-source MongoDB compatibility | Standard version of MongoDB without modification, facilitating portability. | Standard MongoDB (CLI, API, tools) | **Incoming**: Direct integration. <br> **Outgoing**: Full export without adaptation. | [MongoDB](/products/public-cloud-databases-mongodb) |
| High availability | Replica sets ensuring redundancy and auto recovery. | N/A | **Incoming**: Configuration of replicas at import. <br> **Outgoing**: Export and deployment on another cluster. | [Replication](https://docs.mongodb.com/manual/replication/) |
| Automatic backups | Daily backups with possibility of restoration. | Snapshots MongoDB | **Incoming**: Restoration possible. <br> **Outgoing**: Manual download/export required. | [MongoDB Backups](/pages/public_cloud/public_cloud_databases/mongodb_06_howto_backup_restore) |

### 2 - OVHcloud implementations

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| OVHcloud Dashboard | MongoDB cluster management and monitoring interface. | N/A | **Incoming**: Initial configuration via the interface. <br> **Outgoing**: Administration interrupted after termination. | [MongoDB](/products/public-cloud-databases-mongodb) |
| Integrated monitoring | Performance tracking via metrics in the interface. | N/A | **Incoming**: Alert configuration. <br> **Outgoing**: To be reconfigured in another environment. | [MongoDB](/products/public-cloud-databases-mongodb) |
| Network security (ACL) | IP filtering, TLS/SSL, and access restricted by vRack. | IP, TLS/SSL | **Incoming**: Definition of security rules. <br> **Outgoing**: Export configuration. | [MongoDB](/products/public-cloud-databases-mongodb) |

### 3 - Specific features

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| Private network OVHcloud (vRack) | Connection with other OVHcloud services in private network. | N/A | **Incoming**: Config vRack. <br> **Outgoing**: Non-transferable functionality. | [vRack](/pages/public_cloud/public_cloud_databases/databases_08_vrack) |
| Updates managed by OVHcloud | MongoDB versioning by OVHcloud. | N/A | **Incoming**: Check compatibility. <br> **Outgoing**: Migration under client responsibility. | [MongoDB](/products/public-cloud-databases-mongodb) |
| Anti-DDoS | Anti-DDoS is a set of tools and mechanisms designed to absorb denial-of-service attacks. It includes traffic analysis, "scrubbing" through a specialized network, and mitigation handled by the VAC technology developed by OVHcloud. | N/A | **Incoming**: The anti-DDoS system is a component of our infrastructure, enabled by default. No action required. <br> **Outgoing**: Order and configure an anti-DDoS with the new provider. | [OVHcloud DDoS Protection](/links/security/antiddos) |

## List of architectures

Managed MongoDB relies on a distributed architecture with Replica Sets to ensure high availability.

Data is distributed across multiple nodes with regular backups, continuous monitoring and integrated security tools.

## Partners services

The OVHcloud partners concerned are listed in the [OVHcloud partners](/links/partner) directory under the **"cloud migration"** keywords.

OVHcloud also has a dedicated service: [OVHcloud Professional Services](/links/professional-services).

## Cost and Fees

Features described in tables are free of charge unless otherwise stated, and are freely usable by the customer.

Billing is based on cluster size, storage capacity, and backups.

There is no exit fee, but the data must be exported before termination as it will be deleted.

## Data retention after termination of the contract

> [!warning]
>
> OVHcloud does not guarantee the use and availability of backups to restore customer data after termination of the service.

After termination, all data from the instance is permanently deleted including backups made by OVHcloud.

It is the responsibility of the customer to complete the export before the end of the service, with OVHcloud not retaining any copies.

Primary instances are **deleted immediately**, and **backups are retained for a period ranging from 2 days to 1 month** depending on the options specified in the contract.