---
title: "Reversibility Policy for the Managed In-Memory Database product"
updated: 2025-08-28
---

##Objective

This document describes the reversibility policy for the Managed In-Memory Database product covering the OVHcloud Valkey offer.

This policy aims to implement the general reversibility principles and our compliance with the SWIPO IAAS Code of Conduct for cloud providers.

## List of features

Features of the product line fall into three categories:

1. **Core features** for which we guarantee migration capacity.
2. **OVHcloud implementations** that require adaptation to a new migration environment.
3. **Specific features** that cannot be guaranteed for migration as they are related to the OVHcloud environment or involve custom developments.

## 1. Core features

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| In-memory key-value storage | High-performance storage of key-value pairs entirely in memory | JSON, RDB, AOF | **Inbound**: import data via API, CLI, or dump restoring <br>**Outbound**: export data with BGSAVE or dump commands | [Valkey - Capabilities and limits](/pages/public_cloud/public_cloud_databases/redis_01_capabilities) <br><br>[Valkey - Connect with CLI](/pages/public_cloud/public_cloud_databases/redis_03_connect_cli) |
| High availability | Automatic failover with Valkey Sentinel or in cluster mode | NA | **Inbound**: replica and failover configuration with CLI <br>**Outbound**: take note of the configurations and reproduce it in the target infrastructure | [Valkey - Capabilities and limits](/pages/public_cloud/public_cloud_databases/redis_01_capabilities) |
| Persistence | Data backups via RDB snapshots or AOF logs | RDB, AOF | **Inbound**: import snapshots or AOF logs via Redis or Valkey CLI and configure backups <br>**Outbound**: export data via dump command (CLI) | [Valkey - Capabilities and limits](/pages/public_cloud/public_cloud_databases/redis_01_capabilities) |
| Scalability | Cluster mode to distribute keys across multiple database instances (shards) | No special format required, it depends on the customer choice | **Incoming** : import of resharding keys to adapt to service topology via the CLI <br>**Outgoing** CLI : export and re-import of keys into the target infrastructure via the CLI | [Valkey - Capabilities and limits](/pages/public_cloud/public_cloud_databases/redis_01_capabilities) |

## 2. OVHcloud Implementations

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| Network Security (ACL) | Access control by IP list | IPv4, JSON | **Inbound**: IP configuration authorized via the web interface (Control Panel) or API <br>**Outbound**: export the configuration and adapt it to the target architecture | [Valkey - Capabilities and limits](/pages/public_cloud/public_cloud_databases/redis_01_capabilities) |
| vRack | The vRack, or virtual rack, is a private VLAN technology that enables the connection between OVHcloud services | NA | **Inbound**: enable and configure network connection <br>**Outbound**: take note of the network architecture and reproduce it with VLANs | [Creating Public Cloud Databases V(x)LANs](/pages/public_cloud/public_cloud_databases/databases_08_vrack) |

## 3. Specific features

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| Infrastructure as a code | Automated deployment via Terraform modules specific to OVHcloud | NA | **Inbound**: scripts to be adapted for other providers <br>**Outbound**: Terraform configurations need to be rewritten | [Terraform](https://registry.terraform.io/providers/ovh/latest/docs) |
| Anti-DDoS protection| Anti-DDoS is a set of tools and mechanisms designed to absorb denial of service attacks. It includes traffic analysis, "clean-up" via a specialized network, and mitigation using VAC technology developed by OVHcloud. | N/A | **Inbound**: The anti-DDoS system is part of our infrastructure and is enabled by default. No action is required <br> **Outbound**: Order and configure an anti-DDoS solution from the new provider | [Anti-DDoS OVHcloud](/links/security/antiddos) |

## List of architectures

The product is based on a distributed in-memory architecture, leveraging Valkey Sentinel technology to ensure high availability. 
It supports replication, fault tolerance, and automatic failovers to ensure service reliability.

## Partner services

The OVHcloud partners concerned are listed in the [OVHcloud partners directory](/links/partner) under the "**Data center expansion and Migration**" keywords.

OVHcloud also has a dedicated service: [OVHcloud Professional Services](/links/professional-services).

## Cost and fees

The features described in the tables are available at no cost, unless otherwise specified, and are freely usable by the customer.
Pricing is Pay-as-you-go and depends on the memory capacity and instance type. No additional egress fee is applied, but it is essential to export all data before termination, as it will be permanently deleted.

## Data retention after contract termination

Once the service has been canceled, all of the data stored in the Valkey instances is irreversibly deleted. It is the customer’s responsibility to carry out a full backup before termination.

OVHcloud does not guarantee the operation and availability of backups to perform restores of customer data after the service cancelation.

OVHcloud backups of customer databases are stored for a period ranging from 2 days to one month after the contract is terminated.
