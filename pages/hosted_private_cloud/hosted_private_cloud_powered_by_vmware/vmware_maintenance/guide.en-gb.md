-----
title: 'Maintaining VMware on OVHcloud maintenance operations' 
excerpt: 'Find out more about the operations carried out to ensure the reliability and performance of your Hosted Private Cloud VMware on OVHcloud equipment' 
updated: 2023-06-17

> [!warning]
> 
> If you require training or technical assistance in implementing our solutions, please contact your Technical Account Manager or go to [this page](/links/professional-services) for a quote and request a custom analysis of your project from our Professional Services team experts.

## Objective

**This guide provides clarification on the maintenance operations carried out by the OVHcloud teams.**

## In practice

Maintenance operations at OVHcloud are a testament to in-house expertise. It has been improved over the years to guarantee the reliability and performance of the equipment.

## Access Hosted Private Cloud operations

### From the OVHcloud Control Panel :

To access your maintenance operations from the [OVHcloud Control Panel](/links/manager), please refer to the beginning of the guide: [In practice - Access scheduled maintenance operations on your Hosted Private Cloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/maintenance-rescheduling).

![Maintenance Operation](/pages/assets/screens/manager/hosted_private_cloud/VMware/private_cloud/pcc/Maintenance.png){.thumbnail}

To find out which operations are in progress, or refresh previous operations, you can update this
operation section of the control panel by clicking `Rafraîchir`{.action} : ![Maintenance Operation Refresh Button](/pages/assets/screens/manager/hosted_private_cloud/VMware/private_cloud/operation/Maintenance_refresh_button.png){.thumbnail}

You can change the processing date of an operation in progress by clicking `...`{.action}, then `Modifier la date de traitement`{.action}.

For more information on the options available for rescheduling a maintenance operation, see the
guide: [How to reschedule a maintenance operation on your Hosted Private Cloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/maintenance-rescheduling).

You can also apply a progressive order filter to your operations, thanks to the action criterion slot under the h2 "Operation":

![Maintenance Operation Filtre](/pages/assets/screens/manager/hosted_private_cloud/VMware/private_cloud/operation/Maintenance_operation_filtre.png){.thumbnail}

## Access to details of maintenance operations

### From the OVHcloud Control Panel :

The OVHcloud Control Panel operation section has 11 sections.

Here is an example of an export of VMware Hosted Private Cloud Control Panel operations on OVHcloud:

| Reference | Name | Type | Progress | Comment | Affected services | Created by | Created By | Processing | End | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 44XXXXXX | provisionVcsaSolo | Generic | Completed | Infrastructure management provisions for customer | Task: 44XXXXXX | Information unavailable | Information unavailable | May XX, 2023 6:37:51 p.m. | XX May 2023 6:37:XX | XX May 2023 6:37:58 PM |
|  |  |  |  |  |  |  |  |  |  |  |

An operation referencing ID is always added on each operation, along with an assigned name, type, progress, comment, service, and processing dates.

Of course, for each OVHcloud service (Bare Metal Cloud, Public Cloud, etc.) these names and references may change.

#### Via the OVHcloud API :

Read the [Getting started with OVHcloud APIs](/pages/manage_and_operate/api/first-steps) guide to get familiar with using OVHcloud APIv6.

> [!api]
> 
> @api {v1} /dedicatedCloud get /dedicatedCloud/{serviceName}/robot
>

> **Parameters:**
> 
> serviceName : Your Dedicated Cloud reference, (pcc-XXX-XXX-XXX-XXX).
>

For example, this return pattern may vary and be quite long depending on the size of your infrastructure :

``` shell
...
  "updateUser",
  maintenanceLinkAlreadyOrderedCertsToObjects,
  maintenanceFixTransportMode,
  maintenanceUpdateAntivirusConfiguration,
...
```

To get the details of each robot :

> [!api]
>
> @api {v1} /dedicatedCloud get /dedicatedCloud/{serviceName}/robot/{name}
>

> **Parameters :**
> 
> serviceName : Your Dedicated Cloud reference, (pcc-XXX-XXX-XXX-XXX).
> 
> name : The name of the robot, (maintenanceUpdateAntivirusConfiguration).
>

``` Shell
{
  "type": "task",
  "enabled": true,
  "name": "maintenanceUpdateAntivirusConfiguration",
  "criticity": "normal",
  "description": ""
}
```

## Details of Hosted Private Cloud maintenance operations

| Maintenance name | Goal | Reason | Preventive instructions | Impact | Approximate duration | Frequency | Can be rescheduled? | Reference to technical documentation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| windowsUpdateOnPcc | Windows update on virtual machines in the control plane managed by OVHcloud. | Security update. | None | Maintenance performed only if Veeam and/or Zerto options are subscribed to Control Plane which is unavailable during the maintenance slot. | 00H30 for Veeam.  00H30 for Zerto. | Monthly. | Yes |  |
| upgradeSwitch | Software upgrade - upgrades of the switches to the latest version validated by the OVHcloud network department. | OVHcloud Arista lifecycle.   Security patches. | Verifying the host is dual-attached. | Switch from ToR (on Top of Rack) A (with A) to ToR (on Top of Rack) B (switch B). | 01H30 | Based on the publisher lifecycle. | Yes |  |
| maintenanceGenericUpgradePackages | Operating system upgrade on control plane virtual machines managed by OVHcloud. | OVHcloud Security Patches lifecycle. | None | Control plane unavailable\* (management) during maintenance windows. | 02H00 | Monthly (standard). | Yes |  |
| maintenanceRenewAndDeploySslCertificate | Checking, ordering and renewing SSL certificates on control plane virtual machines managed by OVHcloud. | Renewal of SSL certificates before the expiry date. | None | Control plane unavailable\* (management) during the maintenance lead time\*. | 01H00 | Quarterly (typical). | Yes |  |
| maintenanceUpgradeHosts | ESXi software upgrade to the latest version offered by OVHcloud. This maintenance can install minor or major versions. | OVHcloud lifecycle.        Security patches. | During this maintenance, all hosts can be put into maintenance mode and all VMs can be evacuated automatically.   The customer must ensure that none of the following configurations prevent this action: No ISO media or mounted devices Anti-affinity rules Any other element that may prevent a virtual machine from being moved Third-party products are compliant and compatible with the new ESXi version. | Once hosts are in maintenance mode: all VMs are automatically evacuated with vMotion Hosts are rebooted  | 00H30 per host. | Based on the publisher lifecycle. | Yes |  |
| maintenanceUpgradeVcenter | Upgrade (upgrade) the vCenter Server Appliance software to the latest version offered by OVHcloud. This maintenance can install minor or major versions. Option upgrades can also be triggered (Veeam Managed, zerto) to ensure the compatibility matrix is consistent. | OVHcloud lifecycle.        Security patches. | Third-party software is compliant with the new version of VCSA. | Control Plane unavailable\* (management) during maintenance windows. | 02H00 (May vary depending on number of users and time required to apply permissions). | Based on the publisher lifecycle. | Yes |  |
| maintenanceUpgradeVrops | Upgrade (upgrade) of Aria Operations virtual machines (previously called vROps) to the latest version offered by OVHcloud. | OVHcloud Arista lifecycle.   Security patches. | None | vROps is unavailable during the maintenance timeout. | 01H30 | Based on the publisher lifecycle. | Yes |  |
| maintenanceUpgradeNsxt | Upgrade from the NSX-T version to the latest version offered by OVHcloud. | OVHcloud lifecycle from VMware Security upgrade. | Sufficient resources (compute and storage) available on the customer’s infrastructure to host an NSX Edge (see prerequisites: [official VMware NSX documentation](https://docs.vmware.com/en/VMware-NSX/4.1/installation/GUID-22F87CA8-01A9-4F2E-B7DB-9350CA60EA4E.html) {.external} ). Resilience is ensured on the customer’s infrastructure to host the NSX-T Edge Gateways. | The NSX-T control plane is not available during the upgrade operation.  Edge vMotion can experience a slight flow disruption (reconnection required for statefull applications). | 02H30 | Based on the publisher lifecycle. | Yes |  |
| maintenanceUpgradeVeeamManaged | Upgrade of the Veeam control plane virtual machines managed by OVHcloud (backup and replication virtual servers, backup proxy) to the latest version offered by OVHcloud. | Veeam OVHcloud lifecycle. | None | Restore and backup operations cannot be performed during maintenance. | 01H00 | Based on the publisher lifecycle. | Yes |  |
| maintenanceUpgradeZvm | Update of Zerto virtual machines (Zerto Virtual Manager, VRA) to the latest version offered by OVHcloud. | Zerto lifecycle of OVHcloud. | None | The Zerto console is not available during maintenance, not all the associated zerto operations can be performed (failover, management of VPG...) / VRA is redeployed so that replication is interrupted and the RPO increases momentarily. | 01H30 | Based on the publisher lifecycle. | Yes |  |

## Glossary

**Control Plane Unavailable**: Indicates that the vCenter Server Appliance (VCSA) cannot be contacted. Therefore, not all products that need to reach VCSA will work.

This represents the following products/options in Hosted Private Cloud VMware on OVHcloud :

- **NSX-T** interface.
- **vROps** interface.
- Managed **Veeam** (no backup/restore operation).
- **Zerto** interface (continuous replication).
- **Tanzu** Kubernetes Grid.

Any other tier products that you can use that require **VCSA** will also be affected.

## Let us help you with the control plane

The control plane is the part of the system responsible for managing and controlling resources in a virtualized environment. Specifically, the control plane is the software layer that manages operations and decisions related to the configuration, resource management, tracking, and orchestration of the virtual machines and associated infrastructure.

- **Resource management**: It supports the configuration and management of physical (servers, storage, networking) and virtual (virtual machines) resources.
- **Orchestration**: Coordinates operations between different infrastructure components, making it easy to deploy, migrate and manage virtual machines.
- **Monitoring**: Collects performance, health and resource usage data for real-time monitoring and reporting.
- **Security** - Manages security policies, including authentication, authorization, and access control, ensuring the security of virtualized resources.
- **Automation**: Supports the automation of repetitive tasks, allowing administrators to define automated workflows and policies.

In short, the control plane is the software layer that provides centralized management, coordination, and control.

## Go further

For more information on rescheduling a maintenance operation, please read our guide: [Rescheduling a maintenance operation on your VMware on OVHcloud Hosted Private Cloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/maintenance-rescheduling).

Chat on the Discord dedicated channel: <https://discord.gg/ovhcloud> or join our community of users on [this link](/links/community).
