---
title: "Reversibility Policy for the Managed Mutualized Virtualization product"
updated: 2025-07-15
---

## Objective

This document describes the reversibility policy for the Managed Mutualized Virtualization product covering the OVHcloud Public VCF-as-a-Service offer.

This policy aims to implement the general reversibility principles and our compliance with the SWIPO IAAS Code of Conduct for cloud providers.

## List of features

Features of the product line fall into three categories:

1. **Core features** for which we guarantee migration capacity.
2. **OVHcloud implementations** that require adaptation to a new migration environment.
3. **Specific features** that cannot be guaranteed for migration as they are related to the OVHcloud environment or involve custom developments.

### 1. Core features

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| Standard VM images | Import and export VM images in standard formats supported by the OVF hypervisor | OVF | **Inbound**: import images via API or User Interface <br>**Outbound**: export VM images which can be reused on any compatible environment | [The fundamentals of Public VCF-as-a-Service](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-get-concepts) <br><br>[Public VCF-as-a-Service - Migrate from VMware vSphere on OVHcloud ](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_migration_use-cases) <br><br>[OVF Tool](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/ovf_tool) |

### 2. OVHcloud Implementations

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| Management with OVHcloud API | VM management via API | JSON, YAML, scripts | **Inbound**: automated deployment, management and import <br>**Outbound**: export configurations, scripts and automations that can be used on other platforms | [First Steps with the OVHcloud APIs](/pages/manage_and_operate/api/first-steps) |
| Manual backup and restore | Snapshots, backups and restores on demand via User Interface or API | Snapshots, disk images | **Inbound**: standard VM Image Import <br>**Outbound**: no access to native backup files. You cannot export to a new hosting environment | [Backups with Veeam and restorations](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-backup) |

### 3. Specific features

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| Virtual network management | Network configuration (subnets, security groups) specific to OVHcloud | NA | **Inbound**: adapt network configurations to the OVHcloud environment. <br>**Outbound**: configurations cannot be exported. Take note of the architecture and reproduce it in the target environment | [Public VCF-as-a-Service - Network Concepts and Best Practices](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_concepts) <br><br>[Public VCF-as-a-Service - Creating Network Components via Public VCF as-a-Service]() |
| Administration and monitoring | Manage security policies, users, groups, and monitor infrastructure| NA | **Inbound**: interfaces and features available by default <br> **Outbound**: rules cannot be exported. Order and configure tools in the target environment | [Public VCF-as-a-Service core concepts](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-get-concepts)<br><br>[Public VCF-as-a-Service - Learn how to use the user interface](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-getting-started) |
| Anti-DDoS protection| Anti-DDoS is a set of tools and mechanisms designed to absorb denial of service attacks. It includes traffic analysis, "clean-up" via a specialized network, and mitigation using VAC technology developed by OVHcloud. | N/A | **Inbound**: the anti-DDoS system is part of our infrastructure and is enabled by default. No action is required <br> **Outbound**: order and configure an anti-DDoS solution from the new provider | [Anti-DDoS OVHcloud](/links/security/antiddos) |

## List of architectures

The product is based on a VMware hypervisor and enables isolated VMs to run on shared physical hosts. The architecture supports full virtualization, live migration of VMs, dynamic resource allocation (CPU, RAM, storage), advanced network management (GENEVA segment) and backup of snapshots on demand. VMs can run various OS (Linux, Windows and BSD).

## Partner services

The OVHcloud partners concerned are listed in the [OVHcloud partners directory](/links/partner) under the "**Data center expansion and Migration**" keywords.

OVHcloud also has a dedicated service: [OVHcloud Professional Services](/links/professional-services).

## Cost and fees

Billing is for monthly use without duration commitment and there is no specific cancelation fee. Deleting the service will stop billing at the end of the current period and any associated OVHcloud credits cannot be transferred. It is the client’s responsibility to export data, images, snapshots and configurations before service deletion, as deletion is irreversible.

## Data retention after contract termination

After the service deletion or a contract termination, OVHcloud permanently deletes all data, images, snapshots and configurations of the shared VMs. Automatic backups are also deleted. It is therefore imperative to export all necessary data before deletion. No restoration is possible after the fact.

