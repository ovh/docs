---
title: File Storage reversibility policy
updated: 2025-06-13
---

## Objective

This document outlines the reversibility policy for the product File Storage covering OVHcloud offers: Enterprise File Storage and NAS-HA.

This policy aims at implementing the global reversibility principles and requirements of SWIPO IaaS Code of Conduct for Cloud Providers.

## Features map

Product features are divided into three categories:

- The **core features** for which we guarantee the ability to migrate.
- The **OVHcloud implementation**, whose migration will require adaptations to a new environment.
- **Specific functionalities**, whose migration as such is impossible to guarantee as they are tied to OVHcloud environment or specific developments.

### Core features

|Feature|Description|Available formats|Migration model|Available documentation|
|---|---|---|---|---|
| **NFSv3 Protocol** | Universal access via NFSv3, compatible with all systems supporting this protocol. | Enterprise File Storage: NFSv3<br>NAS-HA: NFSv3+v4 | **Incoming**: Direct mount on OVHcloud or external servers via NFSv3, file copy using standard tools (rsync, cp, etc.).<br>**Outgoing**: Unmount volume, copy files via NFSv3 to any compatible storage. | [File Storage documentation](/products/storage-file-storage) |
| **Manual/Automatic Snapshots** | Snapshot creation/restore for backup or point-in-time recovery. | NFSv3 | **Incoming**: Copy data from snapshot using tools like rsync.<br>**Outgoing**: Export restored data using rsync or similar tools. | [File Storage documentation](/products/storage-file-storage) |
| **Multi-Server Access** | Simultaneous mounting on multiple servers (Linux/Unix/VMs). | NFSv3 | **Incoming**: Mount on all relevant OVHcloud servers.<br>**Outgoing**: Unmount, then remount on the target if NFSv3-compatible. | [File Storage documentation](/products/storage-file-storage) |

### OVHcloud implementation

|Feature|Description|Available formats|Migration model|Available documentation|
|---|---|---|---|---|
| **vRack**  | The vRack (virtual rack) is a private VLAN technology that allows interconnection between OVHcloud services. | N/A | **Incoming**: Hosted Private Cloud services are included by default in the vRack. <br> **Outgoing**: Document the network architecture and replicate it using VLANs on the target environment. | [V(x)LAN creation](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/creation_vlan)<br>[File Storage vRack](https://labs.ovhcloud.com/en/enterprise-file-storage-vrack/) |
| **ACL and Permission Management**| POSIX/ACL permissions are managed at the file system level. | IP ACL | **Incoming**: Manual adaptation of permissions during file transfer, whitelist IP for access, then client manages POSIX rights. <br> **Outgoing**: Export files, then reconfigure permissions on the target according to its POSIX compatibility. |[File Storage documentation](/products/storage-file-storage). |

### Specific functionalities

|Feature|Description|Available formats|Migration model|Available documentation|
|---|---|---|---|---|
|**Anti-DDoS**| The anti-DDoS is a set of equipment and means put in place to absorb distributed denial of service attacks. It includes an analysis of traffic, the "aspiration" towards a specialized network and mitigation, ensured by VAC technology developed by OVHcloud.|N/A|**Incoming**: The Anti-DDoS is a component of our infrastructure, enabled by default. No action is required.<br><br>**Outbound migration**: Order and configure an anti-DDoS with the new provider.|[OVHcloud anti-DDoS protection](/links/security/ddos)<br><br>[Anti-DDoS Technology](/links/security/ddos)|
| **Management via the OVHcloud Control Panel** | OVHcloud-managed service with a proprietary graphical interface and APIs for managing volumes and snapshots. | N/A | **Incoming**: Not applicable. <br> **Outgoing**: Scripts/APIs need to be rewritten for the target; manual management may be required. | [File Storage documentation](/products/storage-file-storage) |

## Architecture listing

OVHcloud's File Storage relies on NetApp® ONTAP® (Enterprise File Storage) or OpenZFS (NAS-HA) depending on the offer. The architecture is active-active, with redundancy across two nodes and local data replication to ensure high availability. Volumes are accessible via NFSv3 or NFSv4, depending on the commercial offer, and can be mounted on multiple servers, with the option for automatic/manual snapshots and private network integration via vRack.

## Partner services

OVHcloud partners are listed with the keyword "Cloud Migration" in the [dedicated directory](/links/partner).

OVHcloud also offers a dedicated service: [OVHcloud Professional Services](/links/professional-services).

## Cost and fees

No termination fees: There is no additional charge by default for data migration. Billing stops as soon as the service is terminated.
Payment is made at the beginning of the month, and refunds are not possible if the service is terminated during the month. The same applies to commitments for 12, 24, or 36 months.

## Retention of data after contract termination

Data is deleted upon service termination and cannot be recovered. To prevent data loss, an export must be performed before termination.
