---
title: Migrating an infrastructure to a Managed Bare Metal solution
excerpt: Find out how to manage all aspects of migrating an infrastructure to Managed Bare Metal
updated: 2020-11-23
---

## Objective

There are two aspects to migrating an infrastructure to a Managed Bare Metal solution:

- The OVHcloud infrastructure itself which includes the customer's side of administrating an infrastructure.
- The VMware infrastructure, which includes the entire VMware eco-system.

**This guide explains how to cover all aspects of migrating a pre-existing OVHcloud infrastructure to a Managed Bare Metal solution.**

> [!primary]
>
> Should you choose to migrate an infrastructure to a new vDC instead, please follow [this dedicated guide](/pages/bare_metal_cloud/managed_bare_metal/service-migration-vdc).
>

## Requirements

- a [Managed Bare Metal infrastructure](https://www.ovhcloud.com/en-gb/managed-bare-metal/)
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)

## Instructions

This guide will utilise the notions of a **source infrastructure** and a **destination Managed Bare Metal**.

### OVHcloud context

#### Security

##### **Managed Bare Metal access**

For connections to the VMware platform, you can choose to block access to vSphere by default. Please refer to our guide on the [vCenter access policy](/pages/bare_metal_cloud/managed_bare_metal/vcenter-modify-access-policy) for details.

If the access policy has been changed to "Restricted", you will need to apply the same connection IPs to the destination Managed Bare Metal as to the source infrastructure.

##### **Managed Bare Metal users**

In the lifecycle of the source infrastructure, a list of users may have been created for business or organisational needs. You must therefore create them again on the destination Managed Bare Metal and assign them the appropriate rights, depending on the configuration of the destination Managed Bare Metal.

To do this, please refer to our guides on [Changing user rights](/pages/bare_metal_cloud/managed_bare_metal/change-user-rights), [Changing the User Password](/pages/bare_metal_cloud/managed_bare_metal/changer-user-password) and [Associating an email with a vSphere user](/pages/bare_metal_cloud/managed_bare_metal/vsphere-edit-user).

##### **Key Management Server (KMS)**

If virtual machines are protected by encryption and this is a prerequisite for the destination Managed Bare Metal, it will be necessary to recreate the encryption context on that destination infrastructure.
Please refer to our guide on [Enabling Virtual Machine Encryption](/pages/bare_metal_cloud/managed_bare_metal/vm_encrypt) in order to enable KMS on the destination Managed Bare Metal.

#### Network

##### **vRack**

> [!warning]
>
> VMnetworks located in the same region cannot be interconnected in a vRack.
>

As part of a migration process, you can link your Managed Mare Metal services within the same vRack. Please consult our guide to [Using Managed Bare Metal within a vRack](/pages/bare_metal_cloud/managed_bare_metal/using-vrack).

##### **Public network**

> [!warning]
>
> If your source OVHcloud infrastructure pre-dates 2016, please contact our support teams to verify the requirements.
>

If the public IP addresses attached to the source infrastructure are required on the destination Managed Bare Metal, it will be necessary to transfer them.

Please consult our guide to [Migrate an IP block between two Managed Bare Metal services](/pages/bare_metal_cloud/managed_bare_metal/ip-block-addition#migrate-an-ip-block-between-two-managed-bare-metal-solutions).

The video below also shows how to migrate an IP block between two Hosted Private Cloud services. This method also applies for Managed Bare Metal.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Gemao3Fd7rI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### VMware context

#### Cluster configuration

##### **Configuring VMware HA**

The migration involves reconfiguring VMware High Availability (HA), including boot order and priority. Please consult our guide about [VMware HA configuration](/pages/bare_metal_cloud/managed_bare_metal/vmware_ha_high_availability).

Here is a checklist of aspect to take into account:

- Host monitoring settings
- VM monitoring settings
- Admission control
- Advanced HA options
- VM Overrides

**Automation tips:** Powercli cmdlet “Get-Cluster” returns information on HA and DRS configuration settings that can be applied to the destination cluster with “Set-Cluster” cmdlet.

##### **Configuring VMware DRS**

The migration involves reconfiguring the VMware Distributed Resource Scheduler (DRS) feature, in particular the affinity or anti-affinity rules for groups of hosts and VMs. Please consult our guide about [configuring VMware DRS](/pages/bare_metal_cloud/managed_bare_metal/vmware_drs_distributed_ressource_scheduler).

Here is a checklist of aspects to take into account:

- Automation level
- VM/Hosts Groups
- VM/Host affinity/anti-affinity rules
- VM Overrides

**Automation tips:** [This VMware community thread](https://communities.vmware.com/t5/VMware-PowerCLI-Discussions/Backup-Restore-DRS-VM-affinity-anti-affinity-rules-can-these-be/td-p/733981/page/2) details options to export and import affinity-rules via powercli.

##### **Resource pools**

The migration requires rebuilding resource pools including reservations, shares, and vApps. This also applies to vApps and any start-up order configuration set in the vApps.

For more information, consult [VMware's documentation for managing resource pools](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.resmgmt.doc/GUID-60077B40-66FF-4625-934A-641703ED7601.html){.external}.

Here is a checklist of aspects to take into account:

- CPU/Memory shares settings
- CPU/Memory reservations
- CPU/Memory expandable option
- CPU/Memory Limits

**Automation tips:** Powercli cmdlet “Get-ResourcePool” to gather the resource pool information and cmdlet “New-ResourcePool” to recreate the resource pool on the destination Managed Bare Metal.

##### **Datastore Clusters**

If datastore clusters are present in the source infrastructure, migration may involve the need to recreate these Datastore Clusters on the destination Managed Bare Metal if the same level of structure and SDRS is needed.

Here is a checklist of aspects to take into account:

- SDRS automation level
- SDRS space, I/O, rule, policy, VM evacuation settings
- SDRS affinity/anti-affinity rules
- SDRS VM Overrides

##### **Networks**

Migration involves recreating the vRack VLAN-backed portgroups on the destination Managed Bare Metal to ensure VM network consistency. If vRack VLANs are in use on the source infrastructure vRack can be used to stretch the L2 domain to the destination Managed Bare Metal to allow for a more phased migration plan. For more information consult our guide about [Using Managed Bare Metal within a vRack](/pages/bare_metal_cloud/managed_bare_metal/using-vrack).

Here is a checklist of aspects to take into account:

- Portgroup VLAN type
- Security settings
- Teaming and Failover settings
- Customer network resource allocation

For more information, consult VMware's documentation on [how to edit general distributed port group settings](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.networking.doc/GUID-FCA2AE5E-83D7-4FEE-8DFF-540BDB559363.html) and on [how to edit distributed port teaming and failover policies](https://docs.vmware.com/en/VMware-vSphere/6.0/com.vmware.vsphere.hostclient.doc/GUID-BB8EC262-5F85-4F42-AFC5-5FED456E2C11.html).

**Automation tips:** Powercli cmdlet “Export-VDPortGroup” can retrieve Distibuted Virtual Portgroup information which can then be imported into the destination Distributed Switch with the use of the “New-VDPortgroup -BackupPath” cmdlet.

##### **OVHcloud provided Veeam Backup**

If OVHcloud provided Veeam is currently in use to backup VMs on the source infrastructure, it will be necessary to recreate the backup configuration for the VMs in the destination Managed Bare Metal post-migration.

Here is a checklist of aspects to take into account:

- List of VMs being backed up
- Backup settings

**Automation tips:** OVHcloud API provides VM backup information attached to each VM via:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}
>

The “backup” section of the returning json will give information on current backup configuration.

Please refer to our guide on [activating and using Veeam Managed Backup](/pages/bare_metal_cloud/managed_bare_metal/veeam_backup_as_a_service).

#### Inventory organisation

For organisational reasons, the VMs, hosts or datastores may have been placed in directories.

If you still need this organisation, you will need to create it again in the destination Managed Bare Metal.

**AutomationtTips:** Powercli cmdlet "Get-Folder" collects folder information and cmdlet "New-Folder" recreates the folder on the destination Managed Bare Metal.

#### VM

There are several ways of migrating VMs from one Private Cloud to another. We offer to migrate using the Veeam solution and Veeam Replication technology.

The following elements are required:

- SPLA licences (on source and destination infrastructures)
- A Veeam licence
- An IP address available on the source and destination infrastructures
- A [Veeam Backup & Replication](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_veeam_backup_replication) virtual machine on the source infrastructure
- [Authorising the Veeam Backup & Replication virtual machine to connect](/pages/bare_metal_cloud/managed_bare_metal/vcenter-authorise-ip-access) to the source and destination vCenter

Please refer to our guide on setting up [Veeam Backup & Replication](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_veeam_backup_replication).

The video below shows how to configure Hosted Private Cloud with the Veeam Backup & Replication solution. This method also applies for Managed Bare Metal.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/f8ufrsP4PQw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>The following video explains how to replicate your Hosted Private Cloud infrastructure with the Veeam Backup & Replication solution. This tutorial also applies for Managed Bare Metal.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/NqNtKrJSH8w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>You can also refer to the [Veeam documentation](https://www.veeam.com/veeam_backup_10_0_user_guide_vsphere_pg.pdf){.external} (PDF).

## Go further

Join our community of users on <https://community.ovh.com/en/>.
