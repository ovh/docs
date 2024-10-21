---
title: Migrating a PCC to Hosted Private Cloud 
excerpt: Find out how to manage all aspects of migrating a PCC infrastructure
updated: 2021-12-06
---

## Objective

There are two aspects to migrating a PCC infrastructure:

- The Hosted Private Cloud (OVHcloud) context, which includes the customer's side of administrating an infrastructure.
- The VMware infrastructure, which includes the entire VMware eco-system.

**This guide explains how to cover all aspects of migrating a PCC service.**

> [!primary]
>
> Should you choose to migrate an infrastructure to a new vDC instead, please follow [this dedicated guide](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/service-migration-vdc).
>

## Requirements

- a [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/)
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) (`Private Cloud`{.action} in the `Hosted Private Cloud`{.action} section)

## Instructions

> [!primary]
>
> If you want to be assisted by:
>
> - OVHcloud partners, who are certified and experts on our products, to assist you with your migration or perform it on your behalf, please click [this link](https://www.ovhcloud.com/en-gb/private-cloud-migration/).
> - our OVHcloud technical experts for tailored support and advice at every stage of your migration project, please click [this link](https://www.ovhcloud.com/en-gb/private-cloud-migration/).
>

This guide will use the notions of a **source PCC** and a **destination Hosted Private Cloud**.

### Hosted Private Cloud context

#### Security

##### **Hosted Private Cloud access**

For connections to the VMware platform, you can choose to block access to vSphere by default. Please refer to our guide on the [vCenter access policy](/pages/bare_metal_cloud/managed_bare_metal/vcenter-modify-access-policy) for details.

If the access policy has been changed to "Restricted", you will need to apply the same connection IPs to the destination Hosted Private Cloud as to the source PCC.

##### **Hosted Private Cloud users**

In the lifecycle of the source PCC, a list of users may have been created for business or organisational needs. You must therefore create them again on the destination Hosted Private Cloud and assign them the appropriate rights, depending on the configuration of the destination Hosted Private Cloud.

To do this, please refer to our guides on [Changing user rights](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/change_users_rights), [Changing the User Password](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/changement_du_mot_de_passe_utilisateur) and [Associating an email with a vSphere user](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vsphere_edit_user).

##### **Key Management Server (KMS)**

If virtual machines are protected by encryption and this is a prerequisite for the destination Hosted Private Cloud, it will be necessary to recreate the encryption context on the destination Hosted Private Cloud.
Please refer to our guide on [Enabling Virtual Machine Encryption](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vm_encrypt) in order to enable KMS on the destination Hosted Private Cloud.

##### **Certifications**

For compliance reasons, [PCI DSS](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/safety-compliance/pci-dss/) and [HDS](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/safety-compliance/hds/) options may have been enabled on the source PCC.

These options must therefore be reactivated on the destination Hosted Private Cloud. To do this, please refer to our [guide on activating them](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/activer_l_option_hds_hipaa_ou_pci_dss).

#### Network

##### **vRack**

> [!warning]
>
> VMnetworks located in the same region cannot be interconnected in a vRack.
>

As part of a migration process, you can link your PCC services within the same vRack. Please consult our guide to [Using Private Cloud within a vRack](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/using_private_cloud_in_vrack).

##### **Public network**

> [!warning]
>
> If your PCC offer pre-dates 2016, please contact our support teams to verify the requirements.
>

If the public IP addresses attached to the source PCC are required on the destination Hosted Private Cloud, it will be necessary to transfer them.

Please consult our guide to [Migrate an IP block between two Hosted Private Cloud services](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/ajout_de_bloc_ip#migrate-an-ip-block-between-two-hosted-private-cloud-solutions).

The video below also shows how to migrate an IP block between two Hosted Private Cloud services.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Gemao3Fd7rI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### VMware context

#### Step 1: Preparing your destination Hosted Private Cloud

##### **1.1 HA**

The migration involves reconfiguring VMware High Availability (HA), including boot order and priority. Please consult our guide about [VMware HA configuration](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_ha_high_availability).

Here is a checklist of aspect to take into account:

- Host monitoring settings
- VM monitoring settings
- Admission control
- Advanced HA options
- VM Overrides

**Automation tips:** Powercli cmdlet “Get-Cluster” returns information on HA and DRS configuration settings that can be applied to the destination cluster with “Set-Cluster” cmdlet.

##### **1.2 DRS**

The migration involves reconfiguring the VMware Distributed Resource Scheduler (DRS) feature, in particular the affinity or anti-affinity rules for groups of hosts and VMs. Please consult our guide about [configuring VMware DRS](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_drs_distributed_ressource_scheduler_new).

Here is a checklist of aspects to take into account:

- Automation level
- VM/Hosts Groups
- VM/Host affinity/anti-affinity rules
- VM Overrides

**Automation tips:** [This VMware community thread](https://communities.vmware.com/t5/VMware-PowerCLI-Discussions/Backup-Restore-DRS-VM-affinity-anti-affinity-rules-can-these-be/td-p/733981/page/2) details options to export and import affinity-rules via powercli.

##### **1.3 Resource pools**

The migration requires rebuilding resource pools including reservations, shares, and vApps. This also applies to vApps and any start-up order configuration set in the vApps.

For more information, consult [VMware's documentation for managing resource pools](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.resmgmt.doc/GUID-60077B40-66FF-4625-934A-641703ED7601.html){.external}.

Here is a checklist of aspects to take into account:

- CPU/Memory shares settings
- CPU/Memory reservations
- CPU/Memory expandable option
- CPU/Memory Limits

**Automation tips:** Powercli cmdlet “Get-ResourcePool” to gather the resource pool information and cmdlet “New-ResourcePool” to recreate the resource pool on the destination Hosted Private Cloud.

##### **1.4 Datastore Clusters**

If datastore clusters are present in the source PCC, migration may involve the need to recreate these Datastore Clusters on the destination Hosted Private Cloud if the same level of structure and SDRS is needed.

Here is a checklist of aspects to take into account:

- SDRS automation level
- SDRS space, I/O, rule, policy, VM evacuation settings
- SDRS affinity/anti-affinity rules
- SDRS VM Overrides

##### **1.5 vSAN**

If vSAN was enabled on your source PCC, you will need to enable it again on the destination Hosted Private Cloud. Please refer to our guide on [Using VMware Hyperconvergence with vSAN](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_vsan).

##### **1.6 vSphere networking**

Migration involves recreating the vRack VLAN-backed portgroups on the destination Hosted Private Cloud to ensure VM network consistency. If vRack VLANs are in use on the source PCC vRack can be used to stretch the L2 domain to the destination Hosted Private Cloud to allow for a more phased migration plan. For more information consult our guide about [Using Private Cloud within a vRack](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/using_private_cloud_in_vrack).

Here is a checklist of aspects to take into account:

- Portgroup VLAN type
- Security settings (**Important in case promiscuous mode is needed**)
- Teaming and Failover settings
- Customer network resource allocation

For more information, consult VMware's documentation on [how to edit general distributed port group settings](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.networking.doc/GUID-FCA2AE5E-83D7-4FEE-8DFF-540BDB559363.html){.external} and on [how to edit distributed port teaming and failover policies](https://docs.vmware.com/en/VMware-vSphere/6.0/com.vmware.vsphere.hostclient.doc/GUID-BB8EC262-5F85-4F42-AFC5-5FED456E2C11.html){.external}.

**Automation tips:** Powercli cmdlet “Export-VDPortGroup” can retrieve Distibuted Virtual Portgroup information which can then be imported into the destination Distributed Switch with the use of the “New-VDPortgroup -BackupPath” cmdlet.

> [!warning]
>
> - Some virtual routing appliances such as pfSense use CARP to provide high availability.
> - VMs that use CARP will need “Promiscuous Mode” enabled in the security settings of a portgroup.
> - Customers can enable this setting themselves on the vRack vDS on the destination Hosted Private Cloud.
> - However, if promiscuous mode needs to be enabled on the “VM Network” portgroup in the new Hosted Private Cloud, please open a ticket with OVHcloud support before migration to ensure connectivity remains during migration.
>

##### **1.7 Veeam backup config**

If OVHcloud provided Veeam is currently in use to backup VMs on the source PCC, it will be necessary to recreate the backup configuration for the VMs in the destination Hosted Private Cloud post-migration.

Here is a checklist of aspects to take into account:

- List of VMs being backed up
- Backup settings

Please refer to our guide on [activating and using Veeam Managed Backup](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/veeam_backup_as_a_service).

**Automation tips:** OVHcloud API provides VM backup information attached to each VM via:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}
>

The “backup” section of the returning json will give information on current backup configuration.

##### **1.8 Inventory organisation (optional)**

For organisational reasons, the VMs, hosts or datastores may have been placed in directories.

If you still need this organisation, you will need to create it again in the destination Hosted Private Cloud.

**Automation tips:** Powercli cmdlet “Get-Folder” to gather the folder information and cmdlet “New-Folder” to recreate the folder on the destination Hosted Private Cloud.

##### **1.9 NSX**

###### **1.9.1 NSX Objects**

NSX objects include IP Sets, MAC Sets, Services, Service Groups, Security Groups, Networks, Clusters and Datacenters. These are objects that are used to dynamically group vSphere entities for use in, for example, an NSX Edge firewall rule.

These objects will have locally significant IDs in the source PCC and, when re-created in the destination Hosted Private Cloud, will generate a different ID.
Keeping track of these IDs is crucial to automating the migration of Edge firewall rules and distributed firewall rules.

**Automation tips:** The [NSX API guide](https://docs.vmware.com/en/VMware-NSX-Data-Center-for-vSphere/6.4/nsx_64_api.pdf){.external} gives examples on how to get object IDs and how to create them.

Example: Get a "Service Object": `GET /api/2.0/services/application/scope/{scopeId}`
<br>
Example: Create a "Service Object": `POST /api/2.0/services/application/{scopeId}` (body containing xml configuration of the service object)

###### **1.9.2 NSX Edges**

On the destination Hosted Private Cloud, it will be necessary to recreate any NSX edges that are in use on the source PCC. Items to recreate include:

- Edge HA settings
- Interfaces on the destination Edge so that it mirrors the source Edge
- Edge services (Firewall, NAT, IPSEC, etc) on the destination Edge so that it mirrors the source Edge (**NOTE:** If automating this process, be sure to map any referenced object IDs to object IDs that exist in the destination Hosted Private Cloud)

**Automation tips:** The [NSX API guide](https://docs.vmware.com/en/VMware-NSX-Data-Center-for-vSphere/6.4/nsx_64_api.pdf){.external} gives examples on how to GET Edge configurations and how to add service
configurations onto new Edges.

Example: Get an Edge current configuration: `GET /api/4.0/edges/{edgeId}`
<br>
Example: Push a new firewall ruleset to an Edge: `PUT /api/4.0/edges/{edgeId}/firewall/config` (body containing firewall xml config)

###### **1.9.3 NSX Distributed Firewall**

On the destination Hosted Private Cloud, it will be necessary to recreate any Distributed Firewall rules that are in use on the source PCC. Items to recreate include:

- DFW sections on the destination DFW so that it mirrors the source DFW
- DFW rules on the destination DFW so that it mirrors the source DFW (**Note**: If automating this process, be sure to map any referenced object IDs to object IDs that exist in the destination Hosted Private Cloud)

**Automation tips:** The [NSX API guide](https://docs.vmware.com/en/VMware-NSX-Data-Center-for-vSphere/6.4/nsx_64_api.pdf){.external} gives examples on how to GET the DFW configuration and how to create DFW
rules and sections.

Example: Get DFW current configuration: `GET /api/4.0/firewall/globalroot-0/config`
<br>
Example: Create a new Layer 3 section in a DFW: `POST /api/4.0/firewall/globalroot-0/config/layer3sections` (body containing section xml config)

#### Step 2: Preparing Veeam for migration

The following elements are required:

- SPLA licences (on source PCC and destination Hosted Private Cloud)
- A Veeam licence
- An IP address available on the source PCC and destination Hosted Private Cloud
- A [Veeam Backup & Replication](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_veeam_backup_replication) virtual machine on the source PCC
- [Authorising the Veeam Backup & Replication virtual machine to connect](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/autoriser_des_ip_a_se_connecter_au_vcenter) to the source and destination vCenter

Please refer to our guide on setting up [Veeam Backup & Replication](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_veeam_backup_replication).

The video below shows how to configure Hosted Private Cloud with the Veeam Backup & Replication solution.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/f8ufrsP4PQw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>The following video explains how to replicate your Hosted Private Cloud infrastructure with the Veeam Backup & Replication solution.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/NqNtKrJSH8w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>You can also refer to the [Veeam documentation](https://www.veeam.com/veeam_backup_10_0_user_guide_vsphere_pg.pdf){.external} (PDF).

#### Step 3: Post migration tasks

##### **3.1 Affinity rules**

Affinity rules are based on VM objects so rules can only be created after VMs have been migrated to the destination Hosted Private Cloud. Once the migration is completed, affinity rules can be re-applied on the destination Hosted Private Cloud.

**Automation tips:** [This VMware community thread](https://communities.vmware.com/t5/VMware-PowerCLI-Discussions/Backup-Restore-DRS-VM-affinity-anti-affinity-rules-can-these-be/td-p/733981/page/2) details options to export and import affinity-rules via powercli.

##### **3.2 Veeam Backup configuration**

OVHcloud provided Veeam backups are configured per VM so can only be re-applied after the migration. Once the migration is completed, VMs can have their Veeam backups re-enabled using the UI or API

**Automation tips:** OVHcloud API allows VM backups to be enabled for each vm via (body containing the list of backup days, e.g.  backupDays='["Friday","Monday","Saturday","Sunday"):

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}
>

## Go further

Join our community of users on <https://community.ovh.com/en/>.
