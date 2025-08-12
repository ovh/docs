---
title: "Reversibility Policy for the Managed Search Engine Software Platform product"
updated: 2025-07-15
---

## Objective

This document describes the reversibility policy for the Managed Search Engine Software Platform product covering the OVHcloud Managed OpenSearch offer.

This policy aims to implement the general reversibility principles and our compliance with the SWIPO IAAS Code of Conduct for cloud providers.

## List of features

Features of the product line fall into three categories:

1. **Core features** for which we guarantee migration capacity.
2. **OVHcloud implementations** that require adaptation to a new migration environment.
3. **Specific features**  for which migration cannot be guaranteed because they are linked to the OVHcloud environment or involve custom developments.

### 1. Core features

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| Platform as a Service | NoSQL indexing, content search and data analysis engine fully managed by OVHcloud | JSON (S3 snapshots) | **Inbound**: source snapshot creation, migration via RFS to the platform <br>**Outbound**: export OVHcloud snapshots to any compatible OpenSearch cluster via RFS or native tools | [OpenSearch - Getting started](/pages/public_cloud/public_cloud_databases/opensearch_02_getting_Started) |
| Standard REST API access | Access via OpenSearch REST API (port 9200) | JSON | **Inbound**: direct connection from existing tools and applications <br>**Outbound**: data extraction via API for migration to another cluster | [OVH - OpenSearch API](https://eu.api.ovh.com/console/?section=%2Fcloud&branch=v1#get-/cloud/project/-serviceName-/database/opensearch) |
| Manual snapshots | Create snapshots manually via API or Dashboard | JSON (S3, external storage) | **Inbound**: restoring an external snapshot <br>**Outbound**: snapshot exportable to any OpenSearch environment | [OVH - OpenSearch API](https://eu.api.ovh.com/console/?section=%2Fcloud&branch=v1#get-/cloud/project/-serviceName-/database/opensearch) |
| Standard plugins | List of open-source plugins (ICU Analysis, Phonetic Analysis, etc.) that can be activated, deactivated and compatible with the technology | Official OpenSearch plugins | **Inbound**: enable plugins compatible with the target version <br>**Outbound**: reuse plugins if they are supported by the new environment | [OpenSearch - Capabilities and Limitations](/pages/public_cloud/public_cloud_databases/opensearch_01_capabilities) |

### 2. OVHcloud Implementations

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| Automatic backups managed by OVHcloud | Daily backups managed by OVHcloud (retention varies depending on the chosen offer) | OVHcloud internal snapshots | **Inbound**: not applicable. Feature available by default and no action is required by the user of the platform <br>**Outbound**: create a new service, restore an OVHcloud snapshot locally, then export it manually to the new environment | [Public Cloud Databases - Automatic backups ](/pages/public_cloud/public_cloud_databases/databases_05_automated_backups) |
| vRack | The vRack or virtual rack, is a private VLAN technology that enables the connection between OVHcloud services | NA | **Inbound**: <br>**Outbound**: | [Creating Public Cloud Databases V(x)LANs](/pages/public_cloud/public_cloud_databases/databases_08_vrack) |
| Access Control List (ACL) | Manage access rights via the OVHcloud interface | NA | **Inbound**: create rules manually in the OVHcloud interface <br>**Outbound**: convert ACL rules to new provider format | [OpenSearch - Capabilities and Limitations](/pages/public_cloud/public_cloud_databases/opensearch_01_capabilities) |
| Metrics | Metrics collection integrated into the OVHcloud infrastructure | Prometheus metrics | **Inbound**: send logs via a dedicated entry point <br>**Outbound**: possible export and reconfiguration needed on the new platform | [OpenSearch - Monitor your infrastructure ](/pages/public_cloud/public_cloud_databases/opensearch_200_elk_like) |

### 3. Specific features

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| Infrastructure as a code | Automated deployment via Terraform modules specific to OVHcloud | NA | **Inbound**: scripts to be adapted for other providers <br>**Outbound**: Terraform configurations need to be rewritten | [Terraform](https://registry.terraform.io/providers/ovh/latest/docs) |
| Anti-DDoS protection| Anti-DDoS is a set of tools and mechanisms designed to absorb denial of service attacks. It includes traffic analysis, "clean-up" via a specialized network, and mitigation using VAC technology developed by OVHcloud | N/A | **Inbound**: the anti-DDoS system is part of our infrastructure and is enabled by default. No action is required <br> **Outbound**: order and configure an anti-DDoS solution from the new provider | [Anti-DDoS OVHcloud](/links/security/antiddos) |

## List of architectures

The product offers multi-node clusters (up to 3 nodes for the Business range), with data replication for high availability. Automatic sharding is managed via the number of replicas configured per index.

Architectures include:

- Dedicated cluster: Logical isolation of resources by project.
- vRack integration: Secure interconnection with other OVHcloud services.
- Vertical scalability: Node scalability (RAM, storage) via the OVHcloud interface.

## Partner services

The OVHcloud partners concerned are listed in the [OVHcloud partners directory](/links/partner) under the "**Data center expansion and Migration**" keywords.

OVHcloud also has a dedicated service: [OVHcloud Professional Services](/links/professional-services).

## Cost and fees

Features described in the tables are available at no cost, unless otherwise specified and are freely usable by the customer. By default, no extra billing is applied following the data migration. Billing stops as soon as the service is cancelled.

## Data retention after contract termination 

Snapshots (automatic or manual ones) are irreversibly deleted and a manual export is required to preserve data.
Primary instances are deleted immediately, and backups are stored by OVHcloud between 2 days and 1 month depending on the options specified in the contract.

Please note that the customer cannot rely on these backups to perform data restores. OVHcloud does not guarantee exploitation and availability of backups to perform restores of customer data after the service cancellation.
