---
title: "Reversibility Policy for the Managed Database System for Web Hosting product"
updated: 2025-08-25
---

## Objective

This document describes the reversibility policy for the Managed Database System for Web Hosting product covering the OVHcloud Web Cloud Databases offer.

This policy aims to implement the general reversibility principles and our compliance with the SWIPO IAAS Code of Conduct for cloud providers.

## List of features

Features of the product line fall into three categories:

1. **Core features** for which we guarantee migration capacity.
2. **OVHcloud implementations** that require adaptation to a new migration environment.
3. **Specific features** that cannot be guaranteed for migration as they are related to the OVHcloud environment or involve custom developments.

## 1. Core features

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| Database package for a standard web hosting plan| Using standard open-source components. | SQL, NoSQL | **Inbound**: Copy of application files, import of databases via SQL dump, standard configuration. <br>**Outbound**: Export files/dumps, reusable on any compatible environment. | [Creating a database on your web hosting plan](/pages/web_cloud/web_hosting/sql_create_database) |
| Export and import a database | Backup and restore databases via the API or the OVHcloud Control Panel. | SQL, CSV | **Inbound**: Import an existing SQL dump. <br>**Outbound**: Export an SQL dump, which can be imported on any MySQL/MariaDB/PostgreSQL server. | [Importing a backup into a Web Hosting plan database](/pages/web_cloud/web_hosting/sql_importing_mysql_database) |
| Users and permissions | User and rights management system stored in the database. | N/A | **Inbound**: Import users and permissions via database dump <br>**Outbound**: Export users and permissions via database dump. | [Changing the password for a Web Hosting plan’s database](/pages/web_cloud/web_hosting/sql_change_password) |



## 2. OVHcloud Implementations

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| Custom configuration | Changes to some settings via the user interface. | N/A | **Inbound**: Rehabilitation and adjustment are required, manual import of some configurations and settings via API or the Control Panel. <br>**Outbound**: Rehabilitation of configurations in the target environment. | [Create a database on your web hosting plan](/pages/web_cloud/web_hosting/sql_create_database) |
| Backups managed by OVHcloud | OVHcloud has a backup policy with a history of 30 backups. Ability to restore one of 30 backups at any time. | N/A | **Inbound**: Backup automation possible via CRON and the OVHcloud API. <br>**Outbound**: Configure or adapt the backup policy in the target environment if possible. | [Retrieving the backup of a Web Hosting plan’s database](/pages/web_cloud/web_hosting/sql_database_export)<br><br>[Using automated tasks on a Web Hosting plan](/pages/web_cloud/web_hosting/cron_tasks) |
| Standard PostgreSQL modules | Modules or extensions not present on the target by default. | Modules, extensions | **Inbound**: Native Postgre modules installed and enabled on request from the customer. Only Postgis does not come from the publisher and is installed and activatable. <br>**Outbound**: Check the availability of modules on the target, adaptable. | [PostgreSQL - Available extensions](/pages/public_cloud/public_cloud_databases/postgresql_02_extensions) |


## 3. Specific features

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| Anti-DDoS protection| Anti-DDoS is a set of tools and mechanisms designed to absorb denial of service attacks. It includes traffic analysis, "clean-up" via a specialized network, and mitigation using VAC technology developed by OVHcloud. | N/A | **Inbound**: The anti-DDoS system is part of our infrastructure and is enabled by default. No action is required. <br> **Outbound**: Order and configure an anti-DDoS solution from the new provider. | [Anti-DDoS OVHcloud](/ links/security/antiddos) |

## List of architectures

The product is based on VPS with Linux OS, DBMS engines and PostgreSQL modules using Docker technology. The architecture allows partial customization: add modules, partial PostgreSQL server configuration, scheduled tasks, automated backups via API and network integration. Resources (CPU, RAM, NVMe SSD storage) are scalable depending on the webcloud database offer chosen.

## Partner services

The OVHcloud partners concerned are listed in the [OVHcloud partners directory](/links/partner) under the "**Data center expansion and Migration**" keywords.

OVHcloud also has a dedicated service: [OVHcloud Professional Services](/links/professional-services).

## Cost and fees

Billing depends on the offer chosen, with a variable subscription duration. No specific cancelation fees apply: deleting the service will stop the billing immediately. Any associated OVHcloud credits cannot be transferred. It is the customer’s responsibility to export their files, databases and configurations before deletion, as deletion is irreversible.

## Data retention after contract termination 

After deleting the service or contract termination, OVHcloud permanently deletes all data stored on the VPS or server (files, databases, snapshots). By combining the Managed Web Hosting product with this product, a retention period of 45 days following the service’s expiry date applies.
