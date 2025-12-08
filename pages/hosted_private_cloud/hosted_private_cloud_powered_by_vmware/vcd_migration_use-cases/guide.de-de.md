---
title: "Public VCF as-a-Service - Migrate from VMware vSphere on OVHcloud"
excerpt: "Find out how to prepare a migration from managed VMware vSphere on OVHcloud to a solution based on a Public VCF as-a-Service environnement"
updated: 2025-05-06
---

> [!primary]
>
> Public VCF as-a-Service is currently in alpha phase. This guide can evolve and be updated in the future with the advances of our teams in charge of this product.
>

## Objective

**The purpose of this guide is to provide you with the information you need to migrate to a Public VCF as-a-Service environment.**

## Requirements

- A managed [VMware vSphere on OVHcloud](/links/hosted-private-cloud/vmware) offer.
- You must have access to the [OVHcloud Control Panel](/links/manager) and be technical administrator of the managed VMware vSphere on OVHcloud infrastructure.

## Instructions

This practical guide is designed to provide you with information and solutions on the process of migrating your managed VMware vSphere on OVHcloud services to a Public VCF as-a-Service solution.

It also details the requirements for each use case, and if applicable, explains the requirements for a migration.

| **OVHcloud Control Panel**                                                                      | **Steps**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|:--------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![Public VCF as-a-ServiceMigration Block](images/vcd_migration_bloc_validation_en.png){.thumbnail} | 1. Before migrating, it is important to read the checklist of specific use cases below and follow any associated recommendations.<br/>2. Once you have met these requirements, you can log in to the OVHcloud Control Panel to sign (in the provided field for this purpose) the specific conditions (T&Cs) of the environment which will be migrated. A confirmation email will be sent, containing a link and a temporary password to access Public VCF as-a-Service. <br/>3. OVHcloud teams will migrate VMs from the chosen datacenter (vDC), using a hot migration path (vMotion).<br/> |

This hot migration will minimize disruptions to your public or private networks. Private networks are the most likely to be affected, with downtime of the order of a few minutes.

Your virtual machines will remain operational during the migration, with no downtime. However, there is a risk that some network packets will be lost during vMotion.

> [!warning]
> **Network availability during migration**
>
> During the migration, your virtual machines (VMs) are moved using vMotion.
> Depending on your network topology, some VMs may temporarily lose connectivity:
>
> - **Public network (VMNetwork)**: no impact, as the public network is extended to the new infrastructure.
> - **Private network without inter-VM communication**: no impact.
> - **Private network with inter-VM communication**: possible brief downtime between VMs during the migration phase, as encapsulation technology changes from VLAN/VXLAN to Geneve.
> 
> We recommend that you plan accordingly and monitor your environment during the migration.

This migration should be done with no noticeable impact for most applications, but we recommend that you monitor them closely throughout the process.

As a reminder, if you decide to switch to the Public VCF as-a-Service offer, the new prices will not be applied to your existing servers/hosts. We will cover the increase of licensing prices until the migration is complete.

### Step 1 - Before migration (mandatory)

**Important**: The Particular Terms and Conditions (C&P) available since the beginning of September 2024 in the OVHcloud Control Panel must be signed for the migration to be carried out by the OVHcloud teams.

Please review the product demo and webinar to familiarize yourself with this new offering.

You can find all the information you need on our Public VCF as-a-Service pages:

- [Webinar - Public VCF as-a-Service (video)](https://vimeo.com/936590009/b52b3ba8ce)
- [Webinar - VMware by Broadcom New Offerings and Opportunities (video)](https://www.youtube.com/watch?v=aS2A9AhjnMg)
- [OVHcloud.com - Public VCF as-a-Service](/links/hosted-private-cloud/vmware-vcd)
- [OVHcloud Labs - Public VCF as-a-Service](https://labs.ovhcloud.com/en/vmware-cloud-director/)

Migrations will be carried out in 4 waves, from november 2024, depending on the services active in your environment.

The planned schedule, which is compatible with these environments during the migration, is as follows:

| **Waves**&nbsp;&nbsp;&nbsp;&nbsp; |             **From**              | **Target<br/>Offers** |  **Microsoft<br/>(SPLA)**   |  **vRack**  | **NSX** | **Summary of migration compatible environments**                                                                                                         |
|:---------------------------------:|:----------------------------------:|:---------------------:|:----------:|:-----------:|:-------------------:|----------------------------------------------------------------------------------------------------------------------------------------------------------|
|             `Wave 1`              |         **January 2025<br/>February 2025**          |      `Standard`       |     ❌      |      ❌      |          ❌          | - **Without** Microsoft Windows VM license (SPLA) provided by OVHcloud<br/>- **Without** NSX |
|             `Wave 2`              | **Mid-May 2025** |      `Standard`       |     ✅      |      ❌      |          ❌          | - **With** Microsoft Windows VM license (SPLA) provided by OVHcloud<br/>- **Without** NSX |
|             `Wave 3`              |         **December 2025**          |      `Standard`       |     ✅      |      ✅       |          ❌          | - **With** Microsoft Windows VM license (SPLA) provided by OVHcloud<br/> - **With** vRack<br/> - **Without** NSX |
|             `Wave 4`              |           **End of<br/>February 2026**           |       `Advanced`       |     ✅      |      ✅      |          ✅          | - **With** Microsoft Windows license (SPLA) provided by OVHcloud<br/>- **With** vRack<br/>- **With** NSX |

During this process, your data will remain unchanged, except for vSAN Storage. Your IP addresses will also remain unchanged.

The migration date will be sent to you by email at least 15 days before the migration starts.

We recommend reading our guide [Public VCF as-a-Service - The fundamentals of Public VCF as-a-Service](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-get-concepts) to see which features are included in each migration wave of your environments.

#### Checklist before migration

- **Blocking\* specific use cases**:

The table below lists each individual blocking use cases, bottlenecks, and the criticality levels that must be met before requesting a migration from OVHcloud support teams.

| **Checklist** | **Use cases**                                        | **Goals**                                        | **Additional information**                                                                                                                                                                                              | **Help and references**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|:--------------:|:-----------------------------------------------------|:-------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1️⃣      | 🏢🏢 `Multi-vDC`                                     | Migrate VMs and vApps to a single vDC            | - Can only be migrated if your architecture has only one vDC (for now). <br/> If not, please ensure that you transfer all your data (VMs, vApp) into the vDC that will be used for the migration by the OVHcloud teams. | [Migrating an infrastructure to a new vDC](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/service-migration-vdc)                                                                                                                                                                                                                                                                                                                                                                    |
|      2️⃣      | 📜 `Non-active PCI-DSS, SecNumCloud and HDS options` | No solution for now                              | - Cannot be migrated if, to date, your VMware vSphere on OVHcloud workloads are PCI-DSS, HDS or SecNumCloud certified.                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|      3️⃣      | 🔐 `Encryption VMs (KMS/OKMS or vNKP)`               | Decrypt or disable the encryption policy for VMs | - It is not possible to migrate with VMs, vApps encrypted in VMware vSphere on OVHcloud.                                                                                                                                | [Enabling Virtual Machine Encryption (VM Encryption)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vm_encrypt)                                                                                                                                                                                                                                                                                                                                                                    |
|      4️⃣      | 💾 `Zerto`                                           | No solution for now                              | - If you are using Zerto solutions (data continous replication for disaster recovery), you cannot make Zerto work with Public VCF as-a-Service (for now).                                                               | [Setting up Zerto Virtual Replication between two OVHcloud datacentres](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/zerto_virtual_replication_as_a_service)                                                                                                                                                                                                                                                                                                                      |

\***Blocking** : prevents any possible migration to a Public VCF as-a-Service environnement.

- **Non-blocking specific use cases**:

| **Checklist**  | **Use cases**                               | **Goals**                                                                                                                                        | **Additional information**                                                                                                                                                                           | **Help and references**                                                                                                                                                                                |
|:--------------:|:--------------------------------------------|:-----------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      5️⃣       | 🚫 `FT (fault tolerance)`                     | Disable VM Fault Tolerance in VMware vSphere on OVHcloud                                                                           | - Right-click your VMs and select `Fault Tolerance`{.action} > `Disable Fault Tolerance`{.action} in managed VMware vSphere on OVHcloud                                                           | [VMware fault tolerance](/pages/bare_metal_cloud/managed_bare_metal/vmware_fault_tolerance)                                                                                                       |
|      6️⃣       | ⚠️ `Affinity/anti-affinity rules DRS`       | Reconstruction of affinity/anti-affinity rules in Public VCF as-a-Service                                                                              | - To be retained, DRS affinity/anti-affinity rules will have to be manually recreated by you in Public VCF as-a-Service after migration (for now).                                                           | [VMware DRS distributed resource scheduler](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_drs_distributed_ressource_scheduler_new)                                                                      |
|      7️⃣       | 📀 `Special devices (CD, DVD, etc...)`      | Unplug all special equipment in VMware vSphere on OVHcloud                                                                             | - All special devices (CDs, DVDs, etc.) must be removed prior to migration, otherwise they will be removed by the migration process (for now).                                                       | [Modify virtual machine resources](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/modify_hardware_configuration_of_vm)                                              |
|      8️⃣       | 🛢 `Datastore clusters`                     | Delete all clustering rules in VMware vSphere on OVHcloud                                                                       | - Clustering rules must be removed before migration, as this concept no longer exists with Public VCF as-a-Service                                                                                           | [Cluster creation and EVC activation](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/create_cluster_enable_evc)                                                                  |
|      9️⃣       | 🔄 `Over-committed memory`                  | Plan or scale your resource requirements in Public VCF as-a-Service.<br/>Or optimize your requirements before migrating (vSphere control panel side) | - Because you cannot over-commit resources within Public VCF as-a-Service. This concept does not exist.                                                                                                      | [Modify virtual machine resources](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/modify_hardware_configuration_of_vm)                                          |
|       🔟       | 🔗 `Resource pools (share)`                 | Replace with vApps in Public VCF as-a-Service                                                                                                          | - Resource pools will be lost after the migration, as this concept no longer exists on the Public VCF as-a-Service side. Instead, we recommend using vApp concepts within the Public VCF as-a-Service Control Panel. | [Using vApps in the Public VCF as-a-Service control panel](https://docs.vmware.com/en/VMware-Cloud-Director/10.6/VMware-Cloud-Director-Tenant-Guide/GUID-AC48FB5E-4ADC-4835-AACE-B949B297A147.html)  |
|       ⏸️       | 🆓 `Hosts + Datastore`                      | Free up resources (hosts + datastore) in VMware vSphere on OVHcloud                                                                        | - Free "Freespare" and "Hourly" resources (hosts + datastores) must be released before the migration, or converted into monthly resources ("Monthly").                                               | [Hosted Private Cloud billing information](/pages/account_and_service_management/managing_billing_payments_and_services/facturation_private_cloud)                                             |

### Step 2 - After migration (mandatory)

Here is a reminder of the tasks you still need to carry out, once the migration is complete (if you have the following uses).

#### Post action (only for specific use cases)

| **Post<br/>actions** | **Use cases**                                       | **Goals**                                                                                                                                                  | **Help and references**                                                                                                                                                                                                                                                                                   |
|:---------------:|:----------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|       1️⃣       | 🏢🏢 `Multi-vDC`                                    | Re-migrate the VMs and vApp data to your multi-vDc datastore in Public VCF as-a-Service if you are in this use case                                                |                                                                                                                                                                                                                                                                                                           |
|       5️⃣       | 🚫 `FT (fault tolerance)`                             | Fault Tolerance is not available in Public VCF as-a-Service.                                                                                                       |                                                                                                                                                                                |
|       6️⃣       | ⚠️ `Affinity/anti-affinity rules DRS`               | Reconstruct affinity/anti-affinity rules in Public VCF as-a-Service                                                                                                | - [Create a VM affinity rule in Public VCF as-a-Service](https://docs.vmware.com/en/VMware-Cloud-Director/10.5/VMware-Cloud-Director-Tenant-Guide/GUID-950F736F-76D5-4522-8E08-CF6727FC569C.html)                                                                                               |
|       7️⃣       | 📀 `Special devices (CD, DVD, etc...)`              | Reconnect any special equipment required for VMs to work properly in Public VCF as-a-Service                                                                       | - Because all special devices (CD, DVD, etc.) must be removed before migration. [Insert support into a virtual machine in the Public VCF as-a-Service](https://docs.vmware.com/en/VMware-Cloud-Director/10.5/VMware-Cloud-Director-Tenant-Guide/GUID-01E3E275-D076-464D-BDE3-65F19A0793AD.html) |
|       3️⃣       | 🔐 `Encryption VMs (KMS/OKMS or vNKP)`              | Reactivate the encryption policy for the VMs in Public VCF as-a-Service with your defined solutions (KMS/OKMS/vNKP) after migration, and launch the VM encryption. | - As it is not currently possible to migrate with VMs or encrypted vApps.<br/>You will need to import or configure your encryption solution (KMS/OKMS, vNKP) before enabling VM encryption in Public VCF as-a-Service                                                                                             |

#### Managed Veeam for Public VCF as-a-Service (mandatory)

Backup is not set up by default following the Public VCF as-a-Service migration. You must subscribe to the **Managed Veeam for Public VCF as-a-Service** backup service in the control panel and configure it, if you want to protect your new environment.

**Storage repository configuration**

These settings can be customized to suit your chosen service levels:

| **Repository**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |  **Target Offer**  | **Comments**                                                                          |
|:---------------------------------------------------------|:------------------:|:--------------------------------------------------------------------------------------|
| 🥉 `Bronze Repository (100 TB)`                          |     `Standard`     | - **Standard Object Storage**                                                         |
| 🥈 `Silver Repository (100 TB)`                          |     `Advanced`     | - **Standard Object Storage** with off-site backup                                    |
| 🥇 `Gold Repository (100 TB)`                            |     `Premium`      | - **High Performance Object Storage** with off-site backup and 14 immutability points |

All these repositories have a storage quota of **100 TB**. You can contact the [support](https://help.ovhcloud.com/csm?id=csm_get_help) teams to increase this quota.

For more information, please refer to our guide: [Public VCF as-a-Service - Veeam Data Platform backup](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-backup)

### Reset the "Admin" password on Public VCF as-a-Service

You can now reset the **Admin** password for a Public VCF as-a-Service organization using APIv2: [Access APIv2](https://eu.api.ovh.com/console/?section=%2FvmwareCloudDirector&branch=v2#post-/vmwareCloudDirector/organization/-organizationId-/password).

> [!api]
>
> @api {v2} /vmwareCloudDirector POST /vmwareCloudDirector/organization/{organizationId}/password

### Accessing datastores after migration

After migrating your Managed vSphere service to your Public VCF as-a-Service organization, you can still access your datastores via the legacy Managed vSphere interface.

![Datastores dashboard](images/datastores_01.PNG){.thumbnail}

This interface allows you to view and download the files still stored on your datastores.

![Datastores dashboard](images/datastores_02.PNG){.thumbnail}

For security reasons, only users who existed before the migration can log in.

Passwords for these users may have been reset during the migration process. If needed, you can update them using the [dedicated OVHcloud API](/links/console) with the following call:

> [!api]
>
> @api {v1} /dedicatedCloud/ POST /dedicatedCloud/{serviceName}/user/{userId}/changePassword
>

> [!warning]
> Virtual machines cannot be recovered from this interface. To export your VMs, use your Public VCF as-a-Service organization.

## Go further

You can go even further by reading these guides, to get a better understanding of the advantages of using Public VCF as-a-Service:

- [Public VCF as-a-Service - Getting started](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-getting-started)
- [Public VCF as-a-Service - Public VCF as-a-Service fundamental concepts](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-get-concepts)
- [Public VCF as-a-Service - Frequently Asked Questions](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-faq)
- [Public VCF as-a-Service - Log in from the Public VCF as-a-Service control panel](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-logging)
- [Public VCF as-a-Service - Network concepts and best practices](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_concepts)
- [Public VCF as-a-Service - Creating network components via Public VCF as-a-Service](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation)
- [Public VCF as-a-Service - Veeam Data Platform backup](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-backup)

If you need training or technical assistance to implement our solutions, please contact your Technical Account Manager or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Ask questions, give your feedback and interact directly with the team building our Hosted Private Cloud services on the dedicated [Discord](https://discord.gg/ovhcloud) channel.

Join our [community of users](/links/community).
