---
title: Web Hosting Reversibility Policy
updated: 2025-08-25
---

## Objective

This document describes the reversibility policy for the Managed Web Hosting product covering the OVHcloud Web Hosting offer.

This policy aims to implement the general reversibility principles and our compliance with the SWIPO IAAS Code of Conduct for cloud providers.


## List of features

Features of the product line fall into three categories:

1. **Core features** for which we guarantee migration capacity.
2. **OVHcloud implementations** that require adaptation to a new migration environment.
3. **Specific features** that cannot be guaranteed for migration as they are related to the OVHcloud environment or involve custom developments.


## 1. Core features

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| Standard web hosting package | Use standard open-source components: Linux, Apache, MySQL/MariaDB, PHP | SQL, PHP, HTML, JSON, CSV | **Inbound**: copy of application files, import databases via SQL dump <br>**Outbound**: export data files/database dumps, reusable on any compatible environment | [How to create a Debian or Ubuntu web server](/pages/bare_metal_cloud/dedicated_servers/installing_lamp_debian9_ubuntu18) |
| Import and export application files | Transfer web files (PHP, HTML, assets) via FTP/SFTP and rsync for professional and performance offers | All file formats | **Inbound**: Direct file upload <br>**Outbound**: Direct file export for migration to any other hosting provider | [Export your website](/pages/web_cloud/web_hosting/exporter-son-site-web) |
| SSH/SFTP access to the client environment | Easy user access to your environment for file transfer and automation | Files, scripts, dumps | **Inbound**: application file transfer, SQL dumps, scripts via FTP/SFTP and rsync/scp/SSH for Professional and Performance plans <br>**Outbound**: export files, dumps, scripts via FTP/SFTP and rsync/scp/SSH for Professional and Performance plans to any other hosting provider| [Export your website](/pages/web_cloud/web_hosting/exporter-son-site-web) |

## 2. OVHcloud Implementations

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| Cron jobs and scheduled jobs | Automated tasks via crontab | NA | **Inbound**: recreating scheduled jobs on the target via the OVHcloud Control Panel or API <br>**Outbound**: export via API. Manual adaptation to be made in the target environment for tasks to be scheduled | [Create automated tasks](/pages/web_cloud/web_hosting/cron_tasks) |
| Non-standard Apache/PHP modules | Modules or extensions not present on the target by default | Modules, extensions | **Inbound**: adaptation of applications to the hosting environment provided. Apache configuration, PHP available online <br>**Outbound**: check the availability of modules on the target, adaptation is possible | [Web hosting](/pages/web_cloud/web_hosting/web_hosting_main_info)<br><br>[Configure your hosting environment](/pages/web_cloud/web_hosting/configure_your_web_hosting) |
| Synchronization with Git repositories | Synchronize data with Git repositories | All file types | **Inbound**: import data via configuration of a Git repository <br>**Outbound**: export data via configuration of a Git repository | [Configure and use Git](/pages/web_cloud/web_hosting/git_integration_webhosting) |

## 3. Specific features

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| Monitoring | Dashboard for monitoring: FTP commands, http requests, average response time, outgoing connections, CPU usage, exceeding the resource limit | NA | **Inbound**: activation is automatic when the service is created, no action required <br>**Outbound**: NA | [View website statistics and logs](/pages/web_cloud/web_hosting/logs_and_statistics) |
| Data analysis | Data analysis tool (OWSTAT) to generate a statistical follow-up on a given website | HTTP | **Inbound**: activation is automatic when the service is created, no action required <br>**Outbound**: no export possible | [View website statistics and logs](/pages/web_cloud/web_hosting/logs_and_statistics) |
| Anti-DDoS protection| Anti-DDoS is a set of tools and mechanisms designed to absorb denial of service attacks. It includes traffic analysis, "clean-up" via a specialized network, and mitigation using VAC technology developed by OVHcloud. | N/A | **Inbound**: The anti-DDoS system is part of our infrastructure and is enabled by default. No action is required <br> **Outbound**: Order and configure an anti-DDoS solution from the new provider | [Anti-DDoS OVHcloud](/links/security/antiddos) |

### List of architectures

All components of an OVHcloud Web product are accessible through the [OVHcloud Control Panel](/links/manager). This allows to visualize and manage the front-end web servers, file servers, databases, domain names, email, ... as well as the features that are attached to these components.

### Partner services

The OVHcloud partners concerned are listed in the [OVHcloud partners directory](/links/partner) under the "**Data center expansion and Migration**" keywords.

OVHcloud also has a dedicated service: [OVHcloud Professional Services](/links/professional-services).

### Cost and fees

Billing is per year. No specific cancelation fee applies: deletion of the service will stop billing on the anniversary date. It is the customer’s responsibility to export their files, databases and configurations before deletion, as deletion is irreversible.

### Retention of data after contract termination
After deleting the service or contract termination, OVHcloud permanently deletes all stored data (files, databases, snapshots). A retention period of 45 days following the service’s expiry date applies.
