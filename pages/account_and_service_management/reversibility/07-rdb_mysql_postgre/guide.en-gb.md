---
title: "Reversibility Policy for Managed Relational Database Product"
updated: 2025-06-12
---

## Objective

This document outlines the reversibility policy for the product line Managed Relational Database covering following OVHcloud offers : Managed MySQL and Managed PostgreSQL.

This policy aims to implement general reversibility principles and our compliance with the SWIPO IaaS Code of Conduct for cloud providers.

## List of Features

Features of the product line Managed Relational Database are divided into three categories:

1. **Core features** for which we guarantee migration capability.
1. **OVHcloud implementations** that require adaptation to a new environment for migration.
1. **Specific features** that cannot be guaranteed for migration as they are tied to the OVHcloud environment or involve custom developments.

### 1 - Core features

| **Feature** | **Description** | **Available Formats** | **Migration Model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| Export/Import - PostgreSQL | Use of `pg_dump`/`pg_restore` for native data transfer. | SQL, CSV, BINARY | **Incoming**: Restore via CLI with rights adjustments. <br> **Outgoing**: Standard dump export. | [PostgreSQL - Tutorial - How to migrate an on-premises database to Public Cloud Databases](/pages/public_cloud/public_cloud_databases/postgresql_tuto_03_migrate_ecdb) |
| Export/Import - MySQL | Export and import using native MySQL tools (`mysqldump`, `mysql`, etc.). | SQL, CSV | **Incoming**: Export from source (SQL dump), then import into Managed MySQL via `mysql` or OVHcloud UI. <br> **Outgoing**: SQL dump via `mysqldump`, then import into target environment (cloud or on-premises). | [MySQL - Capabilities and Limitations](/pages/public_cloud/public_cloud_databases/mysql_01_capabilities) |
| Service Access - MySQL | Access to the database via standard MySQL protocol on a dynamic port made available in the OVHcloud Manager. | N/A | **Incoming**: Connection from existing tools or applications. <br> **Outgoing**: Connect from any standard MySQL client for data extraction or migration. | [MySQL - Connect with CLI](/pages/public_cloud/public_cloud_databases/mysql_03_connect_cli) <br> [MySQL - Connect with PHP](/pages/public_cloud/public_cloud_databases/mysql_04_connect_php) <br> [MySQL - Connect with Python](/pages/public_cloud/public_cloud_databases/mysql_05_connect_python) <br> [MySQL - Connect with MySQL Workbench](/pages/public_cloud/public_cloud_databases/mysql_06_connect_workbench) |
| Service Access - PostgreSQL | Access via PostgreSQL protocol, compatible with standard clients and tools. | N/A | **Incoming**: Direct connection from existing tools/applications. <br> **Outgoing**: Standard connection for extraction or migration. | [PostgreSQL - Connect with CLI](/pages/public_cloud/public_cloud_databases/postgresql_03_connect_cli) <br> [PostgreSQL - Connect with PHP](/pages/public_cloud/public_cloud_databases/postgresql_04_connect_php) <br> [PostgreSQL - Connect with Python](/pages/public_cloud/public_cloud_databases/postgresql_05_connect_python) <br> [PostgreSQL - Connect with pgAdmin](/pages/public_cloud/public_cloud_databases/postgresql_06_connect_pgadmin)|
| Manual Backup | Ability to generate a full on-demand database backup. | SQL, CSV, tar | **Incoming**: Restore from existing SQL dump. <br> **Outgoing**: SQL dump generated from OVHcloud instance, usable on any compatible MySQL environment. | [MySQL dump](https://dev.mysql.com/doc/refman/8.4/en/mysqldump.html) |

### 2 - OVHcloud Implementations

| **Feature** | **Description** | **Available Formats** | **Migration Model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| OVHcloud Automatic Backups | Backups managed by OVHcloud, not directly exportable outside the OVH ecosystem. | Internal snapshots | **Incoming**: Not applicable for direct import. <br> **Outgoing**: Requires restoration on OVHcloud instance, then manual export (SQL dump) for migration. | [Public Cloud Databases - Automated Backups](/pages/public_cloud/public_cloud_databases/databases_05_automated_backups) <br> [Analytics - Automated Backups](/pages/public_cloud/data_analytics/analytics/information_05_automated_backups) |
| Point in Time Recovery (PITR) | Restore to a specific point in time using OVHcloud internal snapshots. | Internal snapshots | **Incoming**: Not applicable for direct import, prior restoration required. <br> **Outgoing**: Export restored snapshot as SQL dump, then manual import in target environment. | [Public Cloud Databases - Automated Backups](/pages/public_cloud/public_cloud_databases/databases_05_automated_backups) <br> [Analytics - Automated Backups](/pages/public_cloud/data_analytics/analytics/information_05_automated_backups) |
| OVHcloud API | Manage databases via OVHcloud REST API or graphical interface. | N/A | **Incoming**: Automated creation and import of instances. <br> **Outgoing**: Data export via API or automated dump scripts. |[First Steps with the OVHcloud APIs](/pages/manage_and_operate/api/first-steps) |
| OVHcloud Connection Pooling | Automatic PostgreSQL connection pooling, not directly portable. | N/A | **Incoming**: May require adaptation depending on source setup. <br> **Outgoing**: Pooling must be reconfigured on target infrastructure. | [PostgreSQL - Create and Use Connection Pools](/pages/public_cloud/public_cloud_databases/postgresql_08_pool) |
| Observability | Metrics collection via OVHcloud-integrated Prometheus. | Prometheus metrics | **Incoming**: Adapt dashboards and metrics to OVHcloud environment. <br> **Outgoing**: Metrics export is possible, requires adaptation on new monitoring platform. | [MySQL - Capabilities and Limitations](/pages/public_cloud/public_cloud_databases/mysql_01_capabilities) <br> [PostgreSQL - Capabilities and Limitations](/pages/public_cloud/public_cloud_databases/postgresql_01_capabilities) |
| vRack | Virtual rack (vRack) is a private VLAN technology that connects OVHcloud services. | N/A | **Incoming**: MySQL and PostgreSQL services are included in vRack by default. <br> **Outgoing**: Record the network architecture and replicate it using VLANs. | [How to create a VLAN](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/creation_vlan) <br> [Public Cloud Databases - How to configure your Private Network](/pages/public_cloud/public_cloud_databases/databases_08_vrack) |
| Role and Permission Adaptation | No superuser (e.g.: `postgres`). Roles must be adapted to `avnadmin` or equivalent. | N/A | **Incoming**: Modify dump to replace superuser roles with OVHcloud-compatible roles. <br> **Outgoing**: Reverse adaptation based on target environment privileges. | [PostgreSQL - Tutorial - How to migrate an on-premises database to Public Cloud Databases](/pages/public_cloud/public_cloud_databases/postgresql_tuto_03_migrate_ecdb) |
| OVHcloud ACL Management | Access rights managed through OVHcloud interface. | N/A | **Incoming**: Manually recreate rules in the OVHcloud interface. <br> **Outgoing**: Convert ACL rules to the new providers format. | [MySQL - Capabilities and Limitations](/pages/public_cloud/public_cloud_databases/mysql_01_capabilities) <br> [PostgreSQL - Capabilities and Limitations](/pages/public_cloud/public_cloud_databases/postgresql_01_capabilities) |

### 3 - Specific features

| **Feature** | **Description** | **Available Formats** | **Migration Model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| OVHcloud Database Forking | Instant duplication of a database via OVHcloud's native "fork" feature. | OVHcloud internal | **Incoming**: Feature not available for import. <br> **Outgoing**: Not portable, requires manual data export to replicate elsewhere. | [Public Cloud Databases - How to restore a backup](/pages/public_cloud/public_cloud_databases/databases_06_restore_backup) <br> [Analytics - How to restore a backup](/pages/public_cloud/data_analytics/analytics/analytics_restore_backup) |
| Infrastructure as Code | Automated deployment via OVHcloud-specific Terraform modules. | N/A | **Incoming**: Scripts need to be adapted for other providers. <br> **Outcoming**: Configuration rewrite required for Terraform. | [Terraform](https://registry.terraform.io/providers/ovh/ovh/latest/docs) |
| OVHcloud-Managed Updates | MySQL or PostgreSQL versioning and updates are managed by OVHcloud. | N/A | **Incoming**: Ensure compatibility. <br> **Outgoing**: Migration responsibility falls to the customer. | [MySQL - Capabilities and Limitations](/pages/public_cloud/public_cloud_databases/mysql_01_capabilities) <br> [PostgreSQL - Capabilities and Limitations](/pages/public_cloud/public_cloud_databases/postgresql_01_capabilities) |
| Anti-DDoS | Anti-DDoS is a set of tools and mechanisms designed to absorb denial-of-service attacks. It includes traffic analysis, "scrubbing" through a specialized network, and mitigation handled by the VAC technology developed by OVHcloud. | N/A | **Incoming:** The anti-DDoS system is part of our infrastructure and is enabled by default. No action is required. <br> **Oucoming:** Order and configure an anti-DDoS service with the new provider. | [Anti-DDoS Protection](/links/security/antiddos) |

## List of Architectures

**Managed MySQL and Managed PostgreSQL** support different architectures depending on the selected service tier.

The **Business** and **Enterprise** plans offer **high availability** with multiple nodes and **automatic asynchronous replication**.

## Partners Services

The OVHcloud partners concerned are listed in the [OVHcloud partners](/links/partner) directory under the **"cloud migration"** keywords.

OVHcloud also offers a dedicated service: [OVHcloud Professional Services](/links/professional-services).

## Cost and Fees

- **No termination fees**: There are no additional charges related to data migration by default.
- Billing stops as soon as the service is terminated.

## Data Retention After Contract Termination

> [!warning]
>
> OVHcloud does not guarantee the usability or availability of backups for restoring customer data after the termination of the service.

OVHcloud **does not retain any data** after a Managed Data Visualization cluster is deleted.

Both **automatic and manual snapshots are permanently deleted**.

A **manual export** must be performed in advance if data needs to be preserved.

Primary instances are **deleted immediately**, and **backups are retained for a period ranging from 2 days to 1 month** depending on the options specified in the contract.