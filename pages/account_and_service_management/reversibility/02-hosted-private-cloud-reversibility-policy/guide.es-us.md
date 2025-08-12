---
title: Reversibility Policy for Managed Dedicated Cloud product (EN)
updated: 2025-08-08
---

## Objective

This document describes the reversibility policy for the Managed Dedicated Cloud product covering the offer VMware on OVHcloud.

This policy aims to implement the general reversibility principles and our compliance with the SWIPO IAAS Code of Conduct for cloud providers.

## Features map

Features of the product line fall into three categories:

1. **Core features** for which we guarantee migration capacity.
2. **OVHcloud implementations** that require adaptation to a new migration environment.
3. **Specific features** that cannot be guaranteed for migration as they are related to the OVHcloud environment or involve custom developments.


### 1. Core features

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| Virtualization | VM management via vSphere, vCenter, vMotion, and support for VMware standard formats | OVA, OVF | **Inbound**: import VMs, disks, snapshots via vSphere interface or any specialized tools (e.g. Veeam, Zerto, etc...) <br>**Oubound**: export VMs, disks via vSphere, and reuse on any VMware or compatible environment. Specialized tools can be used (e.g. Veeam, Zerto, PowerCLI, etc.) | [Connect to the vSphere web interface](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vsphere_interface_connexion)<br><br>[Deploying a virtual machine](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/deploiement_d_une_machine_virtuelle)<br><br>[How to connect an ISO image to a VM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/how_to_connect_an_iso_image_to_a_vm) <br><br>[Create a cluster and enable EVC](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/create_cluster_enable_evc) |
| User and rights management | Create, manage and delete users. Manage permissions and roles via the user interface | JSON, CSV (exports) | **Inbound**: manual or automated import of users and permissions <br>**Outbound**: export of user lists, permissions and adaptation on the target. | [IAM for VMware on OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_getting_started) |
| Virtual network management | Network configuration via NSX, VLAN management, routing, firewall, network security via API or UI | YAML, JSON, scripts | **Inbound**: definition of networks, VLAN, firewall rules <br>**Outbound**: export of network configurations through the available VMWare APIs | [Getting started with NSX](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-01-first-steps) |
| Dedicated storage (vSAN and/or NFS) | Use of dedicated vSAN and/or NFS datastores, snapshot and clone management. | NA | **Inbound**: add datastores, restore VMs and snapshots <br>**Outbound**: export VMs and snapshots to compatible target storage. | [Using VMware Hyperconvergence with vSAN](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_vsan)|


### 2. OVHcloud Implementations

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
|vRack|vRack, or Virtual rack, is a private VLAN technology that enables connection between OVHcloud services|N/A|**Inbound**: Hosted private Cloud is included by default into vRack.<br><br>**Outbound**: record the network architecture and reproduce it with VLAN.|[Using Private Cloud with vRack](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/using_private_cloud_in_vrack)<br><br>[How to create a V(x)LAN](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/creation_vlan)|
|Monitoring and supervision|VMware standard monitoring solution via vROps|Many formats supported by the platform(e.g JSON, Syslog, etc) |**Inbound**: vROps is included by default with every Hosted Private Server. Adaptation of Cloud dashboards and monitoring agents.<br><br>**Outbound**: install and configure vROps in a vSphere environment.|[First connection on vROps](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vrops_introduction)|
|Backup and replication|Backup-as-a-Service solution for your VMs|VBK, VIB, VBM|**Inbound**: activation of Veeam backup option in the [OVHcloud Control Panel](/links/manager).<br><br>**Outbound**: import backups manually, then restore backups|[Activating and using Veeam Managed Backup](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/veeam_backup_as_a_service)<br><br>[Move2Cloud - Migrating VMware Workloads to OVHcloud Hosted Private Cloud with Veeam Replication](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_migration_veeam)|
|Zerto|Business continuity and disaster recovery platform.|N/A|**Inbound**: activation of the option in the [OVHcloud Control Panel](/links/manager) or directly in the provided Zerto Replication Interface.<br><br>**Outbound**: export zerto VPG settings and import those settings in the new environment.|[Setting up Zerto Virtual Replication for your DRP](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/zerto_virtual_replication_as_a_service)<br><br>[Move2Cloud - Migrate VMware workloads to OVHcloud Hosted Private Cloud with Zerto](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_migration_zerto)<br><br>[Exporting Zerto VPG settings](https://www.zerto.com/myzerto/knowledge-base/exporting-and-importing-vpg-settings-with-zerto-diagnostic-tool/)|

### 3. Specific features

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
|Anti-DDoS|The anti-DDoS is a set of equipment and means put in place to absorb distributed denial of service attacks. It includes an analysis of traffic, the "aspiration" towards a specialized network, and mitigation, ensured by VAC technology developed by OVHcloud.|N/A|**Inbound migration**: the Anti-DDoS is a component of our infrastructure, enabled by default. No action is required.<br><br>**Outbound migration**: order and configure an anti-DDoS with the new provider.|[OVHcloud anti-DDoS protection](/links/security/antiddos)|
|Advanced security|Package of features improving security, such as Zero trust implementation, MFA, IDS for vSphere access ...|N/A|**Inbound migration**: order the activation of security advanced in the [OVHcloud Control Panel](/links/manager).<br><br>**Outbound migration**: order and configure appropriate security features with the new provider.|[SDDC Advanced Security Pack](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/safety-compliance/sddc/)<br><br>[Using the secure interface](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/interface-secure) |

## List of architectures

The product is based on a dedicated VMware solution, including bricks such as vSphere, vCenter, NFS storage, vROps, advanced security options (encryption, MFA) and NSX (SDN) and/or vSAN options to be enabled. Resources (compute, storage, network) are physically and logically isolated, with fine grained rights management (IAM), and the integration of private network services. The architecture is carried out in OVHcloud datacentres.


### Partner services

The OVHcloud partners concerned are listed in the [OVHcloud partners directory](/links/partner) under the "**Data center expansion and Migration**" keywords.

OVHcloud also has a dedicated service: [OVHcloud Professional Services](/links/professional-services).


### Cost and fees

Billing is on monthly basis, with or without a duration commitment. No specific cancelation fees apply: deleting the service will stop the billing immediately. Migration features (VM export, disks, configuration) are included at no extra cost. The costs are linked to the resource usage and options subscribed to (hosts, storage, etc.).

### Retention of data after contract termination

After termination or deletion of the service, OVHcloud carries out a secure erasure of data, VMs, snapshots and configurations. It is imperative to export all necessary data before permanent deletion, as no post-removal recovery will be possible.
