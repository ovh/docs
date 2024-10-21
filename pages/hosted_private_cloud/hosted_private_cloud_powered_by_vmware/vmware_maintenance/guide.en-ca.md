---
title: 'VMware on OVHcloud maintenance operations' 
excerpt: 'Find out more about the operations carried out to ensure the reliability and performance of your Hosted Private Cloud VMware on OVHcloud equipment' 
updated: 2024-09-10
---

> [!success]
> 
> If you require training or technical assistance in implementing our solutions, please contact your Technical Account Manager or visit [this page](/links/professional-services) to get a quote and request a custom analysis of your project from our Professional Services team experts.

## Objective

**This guide will explain the maintenance operations carried out by the OVHcloud teams.**

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager).
- You are the administrative or technical contact for the [VMware on OVHcloud solution](https://www.ovhcloud.com/en-ca/enterprise/products/hosted-private-cloud/) infrastructure.
- You have access to the [OVHcloud Control Panel](/links/manager) or the [API console for your services](https://ca.api.ovh.com/).

## Instructions

Maintenance operations at OVHcloud are a testament to in-house expertise. It has been improved over the years to guarantee the reliability and performance of the equipment.

### How to access Hosted Private Cloud operations

Log in to your [OVHcloud Control Panel](/links/manager) with an administrator account, and click on the `Hosted Private Cloud`{.action} tab.

Select your infrastructure under `VMware`{.action} then click on the `Operations`{.action} tab.

![Maintenance Operation](/pages/assets/screens/control_panel/product-selection/hosted-private-cloud/vmware/operations/maintenance.png){.thumbnail}

To see the operations in progress or refresh the old operations, use the `Refresh`{.action} button located in the top right-hand corner of the operations table.

You can change the processing date of an operation in progress by clicking on the `...`{.action} button to the right of an operation, then on `Modify the processing date`{.action}.

For more information on rescheduling a maintenance operation, please read our guide on [Rescheduling a maintenance operation on your Hosted Private Cloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/maintenance-rescheduling).

You can also filter operations by status via the dropdown menu above the table on the left.

![Maintenance Operation Filter](/pages/assets/screens/control_panel/product-selection/hosted-private-cloud/vmware/operations/maintenance-filter.png){.thumbnail}

### How to access the details of maintenance operations

#### Via the OVHcloud Control Panel

The OVHcloud Control Panel operation section has 11 sections.

Here is an example of an export of VMware Hosted Private Cloud Control Panel operations on OVHcloud:

| Reference | Name | Type | Progress | Comment | Affected services | Created by | Created By | Processing | End | Updated |
|---|---|---|---|---|---|--|--|---|---|---|
| 44XXXXXX | provisionVcsaSolo | Generic | Completed | Infrastructure management provisions for customer | Task: 44XXXXXX | Information unavailable | Information unavailable | May XX, 2023 6:37:51 p.m. | XX May 2023 6:37:XX | XX May 2023 6:37:58 PM |

An operation referencing ID is always added on each operation, along with an assigned name, type, progress, comment, service, and processing dates.

Of course, for each OVHcloud service (Bare Metal Cloud, Public Cloud, etc.) these names and references may change.

#### Via the OVHcloud API

> [!success]
>
> Read the [Getting started with OVHcloud APIs](/pages/manage_and_operate/api/first-steps) guide to get familiar with using OVHcloud APIv6.

Run the following API call to get the list of operations:

> [!api]
> 
> @api {v1} /dedicatedCloud get /dedicatedCloud/{serviceName}/robot
>

> **Parameters:**
> 
> - `serviceName`: Your Dedicated Cloud reference in the form `pcc-XXX-XXX-XXX-XXX`.
>

Return example (the return scheme may vary and be quite long depending on the size of your infrastructure):

``` shell
...
  "updateUser",
  maintenanceLinkAlreadyOrderedCertsToObjects,
  maintenanceFixTransportMode,
  maintenanceUpdateAntivirusConfiguration,
...
```

To get the details of each robot, run the following API call:

> [!api]
>
> @api {v1} /dedicatedCloud get /dedicatedCloud/{serviceName}/robot/{name}
>

> **Parameters:**
> 
> - `serviceName`: Your Dedicated Cloud reference in the form `pcc-XXX-XXX-XXX-XXX`.
> - `name`: The name of the robot, e.g. `maintenanceUpdateAntivirusConfiguration`.
>

**Return :**
``` shell
{
  "type": "task",
  "enabled": true,
  "name": "maintenanceUpdateAntivirusConfiguration",
  "criticity": "normal",
  "description": ""
}
```

### Details of Hosted Private Cloud maintenance operations

> [!primary]
>
> All maintenance operations listed below can be rescheduled.
>

#### **windowsUpdateOnPcc**

| Purpose | Reason | Preventive instructions | Impact | Estimated duration | Frequency |
|---------|--------|-------------------------|--------|--------------------|-----------|
| Windows update on virtual machines in the control plane managed by OVHcloud. | Security update. | None | Maintenance performed only if Veeam and/or Zerto options are subscribed to Control Plane which is unavailable during the maintenance timeout. | 00H30 for Veeam.<br><br> 00H30 for Zerto. | Monthly |

#### **upgradeSwitch**

| Purpose | Reason | Preventive instructions | Impact | Estimated duration | Frequency |
|---------|--------|-------------------------|--------|--------------------|-----------|
| Upgrade (software) of the switches to the latest version validated by the OVHcloud network department. | - OVHcloud Arista lifecycle.<br><br> - Security patches. | Verifying if the host is dual-attached. | Switch from TOR (on Top of Rack) A (switch A) to TOR (on Top of Rack) B (switch B). | 01H30 | Based on the publisher lifecycle |

#### **maintenanceGenericUpgradePackages**

| Purpose | Reason | Preventive instructions | Impact | Estimated duration | Frequency |
|---------|--------|-------------------------|--------|--------------------|-----------|
| Operating system upgrade on control plane virtual machines managed by OVHcloud. | OVHcloud Security Patches lifecycle. | None | Control plane unavailable\* (management) during maintenance timeout.  | 02H00 | Monthly (standard) |

#### **maintenanceRenewAndDeploySslCertificate**

| Purpose | Reason | Preventive instructions | Impact | Estimated duration | Frequency |
|---------|--------|-------------------------|--------|--------------------|-----------|
| Checking, ordering and renewing SSL certificates on control plane virtual machines managed by OVHcloud. | Renewal of SSL certificates before the expiry date. | None | Control plane unavailable\* (management) during the maintenance timeout\*. | 01H00 | Quarterly (typical) |

#### **maintenanceUpgradeHosts**

| Purpose | Reason | Preventive instructions | Impact | Estimated duration | Frequency |
|---------|--------|-------------------------|--------|--------------------|-----------|
| ESXi software upgrade to the latest version offered by OVHcloud. This maintenance can install minor or major versions. | - OVHcloud lifecycle.<br><br> - Security patches. | During this maintenance, all hosts can be put into maintenance mode and all VMs can be evacuated automatically.<br><br> The customer must ensure that none of the following configurations prevent these actions: <br><br>- No ISO media or mounted devices.<br> - Anti-affinity rules.<br> - Any other element that may prevent a virtual machine to move or from being moved.<br> - Third-party products are compliant and compatible with the new ESXi version. | Hosts are set into maintenance mode : all virtual machines are automatically evacuated with vMotion.<br><br> - Hosts are rebooted.<br><br> - Before entering maintenance mode and rebooting each host, Control Plane is unavailable\*. It becomes available after host reboots. | 00H30 per host | Based on the publisher lifecycle |

#### **maintenanceUpgradeVcenter**

| Purpose | Reason | Preventive instructions | Impact | Estimated duration | Frequency |
|---------|--------|-------------------------|--------|--------------------|-----------|
| Upgrade the vCenter Server Appliance software to the latest version offered by OVHcloud.<br> This maintenance can install minor or major versions.<br> Option upgrades can also be triggered (Veeam Managed, zerto) to ensure the compatibility matrix is consistent. | - OVHcloud lifecycle.<br><br> - Security patches. | Third-party software is compliant with the new version of **VCSA**. | Control Plane unavailable\* (management) during maintenance timeout | 02H00 (may vary depending on the number of users and time required to apply permissions) | Based on the publisher lifecycle |

#### **maintenanceUpgradeVrops**

| Purpose | Reason | Preventive instructions | Impact | Estimated duration | Frequency |
|---------|--------|-------------------------|--------|--------------------|-----------|
| Upgrade (upgrade) of Aria Operations virtual machines (previously called vROps) to the latest version offered by OVHcloud. | - OVHcloud Arista lifecycle.<br><br> - Security patches. | None | vROps is unavailable during the maintenance timeout. | 01H30 | Based on the publisher lifecycle |

#### **maintenanceUpgradeNsxt**

| Purpose | Reason | Preventive instructions | Impact | Estimated duration | Frequency |
|---------|--------|-------------------------|--------|--------------------|-----------|
| Upgrade from the NSX-T version to the latest version offered by OVHcloud. | OVHcloud lifecycle from VMware Security upgrade. | Sufficient resources (compute and storage) available on the customer’s infrastructure to host an NSX Edge (see prerequisites: [official VMware NSX documentation](https://docs.vmware.com/en/VMware-NSX/4.1/installation/GUID-22F87CA8-01A9-4F2E-B7DB-9350CA60EA4E.html)).<br><br> Resilience is ensured on the customer’s infrastructure to host the NSX-T Edge Gateways. | NSX-T control plane unavailable\* during the upgrade operation.<br><br> Edges vMotion can experience a slight disruption of flows (reconnection required for statefull applications). | 02H30 | Based on the publisher lifecycle |

#### **maintenanceUpgradeVeeamManaged**

| Purpose | Reason | Preventive instructions | Impact | Estimated duration | Frequency |
|---------|--------|-------------------------|--------|--------------------|-----------|
| Upgrade of the Veeam control plane virtual machines managed by OVHcloud (backup and replication virtual servers, backup proxy) to the latest version offered by OVHcloud. | Veeam OVHcloud lifecycle. | None | Restoration and backup operations cannot be performed during the maintenance timeout. | 01H00 | Based on the publisher lifecycle |

#### **maintenanceUpgradeZvm**

| Purpose | Reason | Preventive instructions | Impact | Estimated duration | Frequency |
|---------|--------|-------------------------|--------|--------------------|-----------|
| Update of Zerto virtual machines (Zerto Virtual Manager, VRA) to the latest version offered by OVHcloud. | Zerto lifecycle of OVHcloud. | None | The Zerto console is unavailable\* during the maintenance. During that period of time, all the related zerto operations can't be performed (failover, VPG management, etc.).<br><br> - VRA is redeployed so that replication is interrupted and the RPO increases momentarily. | 01H30 | Based on the publisher lifecycle |

\*: see explanations below.

### Glossary

**Control Plane Unavailable**: Indicates that the vCenter Server Appliance (VCSA) cannot be contacted. Therefore, not all products that need to reach VCSA will work.

This represents the following products/options in Hosted Private Cloud VMware on OVHcloud :

- **NSX-T** interface.
- **vROps** interface.
- Managed **Veeam** (no backup/restore operation).
- **Zerto** interface (continuous replication).
- **Tanzu** Kubernetes Grid.

Any other tier products that you can use that require **VCSA** will also be affected.

### Control plane explanations

The control plane is the part of the system responsible for managing and controlling resources in a virtualized environment. Specifically, the control plane is the software layer that manages operations and decisions related to the configuration, resource management, tracking, and orchestration of the virtual machines and associated infrastructure.

- **Resource management**: It supports the configuration and management of physical (servers, storage, networking) and virtual (virtual machines) resources.
- **Orchestration**: Coordinates operations between different infrastructure components, making it easy to deploy, migrate and manage virtual machines.
- **Monitoring**: Collects performance, health and resource usage data for real-time monitoring and reporting.
- **Security**: Manages security policies, including authentication, authorization, and access control, ensuring the security of virtualized resources.
- **Automation**: Supports the automation of repetitive tasks, allowing administrators to define automated workflows and policies.

In short, the control plane is the software layer that provides centralized management, coordination, and control.

## Go further

For more information on rescheduling a maintenance operation, please read our guide: [Rescheduling a maintenance operation on your VMware on OVHcloud Hosted Private Cloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/maintenance-rescheduling).

Chat on the Discord dedicated channel: <https://discord.gg/ovhcloud> or join our [community of users](/links/community).
