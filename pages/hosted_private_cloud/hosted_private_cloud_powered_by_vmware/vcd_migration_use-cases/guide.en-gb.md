---
title: "VMware Cloud Director - Migrate from VMware vSphere on OVHcloud"
excerpt: "Find out how to prepare a migration from managed VMware vSphere on OVHcloud to a solution based on a managed VMware Cloud Director (VCD) on OVHcloud environnement"
updated: 2024-09-13
---


> [!primary]
>
> Managed VCD on OVHcloud is currently in alpha phase. This guide can evolve and be updated in the future with the advances of our teams in charge of this product.
>

## Objective

**The purpose of this guide is to provide a procedure for migrating to VMware Cloud Director on OVHcloud.**

## Requirements

- A managed VMware vSphere on OVHcloud solution.
- You must have access to the [OVHcloud Control Panel](/links/manager) and be technical administrator of the managed VMware vSphere on OVHcloud infrastructure.

## In practice

This practical guide is designed to provide you with information and solutions on the process of migrating your managed VMware vSphere on OVHcloud services to a managed VMware Cloud Director on OVHcloud solution.

It also details the requirements for each use case, and if applicable, explains the requirements for a migration.

| **Images**                                                                      | **Steps**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|:--------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![VCD Migration Block](images/vcd_migration_block_validation_en.png){thumbnail} | 1. Before migrating, it is important to check the checklist of specific use cases below and follow any associated recommendations.<br/>2. Once you have met these requirements, you can log in to the OVHcloud Control Panel to sign (in the block provided for this purpose) the specific conditions of the environment planned to be migrated (T&C).<br/>3. OVHcloud teams will migrate VMs from the main VMware vSphere on OVHcloud datacentre (vDC) using a hot migration path (vMotion).<br/> |

This hot migration will minimize disruptions to your public or private networks. Private networks are the most likely to be affected, with downtime of the order of a few minutes.

Your virtual machines will remain operational during the migration, with no downtime. However, there is a risk that some network packets will be lost during vMotion.

This migration should be done with no noticeable impact for most applications, but we recommend that you monitor them closely throughout the process.

As a reminder, if you decide to switch to the managed VCD on OVHcloud offer, the new prices will not be applied to your existing servers/hosts. We will cover the increase of licensing prices until the migration is complete.

### Step 1 - Before migration (mandatory)

#### Applications made before 01 November 2024

> [!primary]
>
> You can migrate your current VMware vSphere on OVHcloud environments as soon as you receive your request.
>
> **Important**: The special conditions available since the beginning of November 2024 in the OVHcloud Control Panel must be signed for the migration to be carried out by the OVHcloud teams.
>

Please review the product demo and webinar to familiarize yourself with this new offering.

You can find all the information you need on our VCD pages:

- [Webinar - Managed VMware Cloud Director on OVHcloud (EN)](https://vimeo.com/936590009/b52b3ba8ce)
- [Webinar - VMware by Broadcom New Offerings and Opportunities (Video EN)](https://www.youtube.com/watch?v=aS2A9AhjnMg)
- [Knowledge - Managed VMware Cloud Director on OVHcloud (EN)](https://www.ovhcloud.com/en/lp/vmware-vcd-evolution/)
- [OVHcloud Labs - VMware Cloud Director on OVHcloud (EN)](https://labs.ovhcloud.com/en/vmware-cloud-director/)

Migrations will be carried out in 4 waves, from October onwards, depending on the services active in your environment.

The planned schedule, which is compatible with these environments during the migration, is as follows:

| **Waves** |     **Dates**     | **Target Offers** |  **NSX**   |  **vRack**  |  **vSAN**   | **Microsoft (SPLA)<br/>on OVHcloud** | **Summary of migration compatible environments**                                                                                                         |
|:----------:|:-----------------:|:---------------:|:----------:|:-----------:|:-----------:|:------------------------------------:|----------------------------------------------------------------------------------------------------------------------------------------------------------|
|     ❶      | **November 2024** |    `Standard`    |     ❌      |      ❌      |      ❌      |                  ❌                   | - **Without** Microsoft Windows VM license (SPLA) provided by OVHcloud<br/>- **Without** NSX<br/>- **Without** High performance storage (vSAN)           |
|     ❷      | **December 2024** |    `Standard`    |     ❌      |      ❌      |      ❌      |                  ✅                   | - **With** Microsoft Windows VM license (SPLA) provided by OVHcloud<br/>- **Without** NSX<br/>- **Without** High performance storage (vSAN)              |
|     ❸      | **January 2024**  |    `Advanced`    |     ✅      |      ✅      |      ❌      |                  ✅                   | - **With** Microsoft Windows VM license (SPLA) provided by OVHcloud<br/>- **With** NSX + vRack support<br/>- **Without** High performance storage (vSAN) |
|     ❹      | **February 2024**  |    `Premium`     |     ✅      |      ✅      |      ✅      |                  ✅                   | - **With** Microsoft Windows license (SPLA) provided by OVHcloud<br/>- **With** NSX + vRack support<br/>- **With** High performance storage (vSAN)       |

During this process, your data will remain unchanged, except for vSAN Storage. Your IP addresses will also remain unchanged.

The migration date will be sent to you by email at least 15 days before the start of the migration.

We recommend reading our guide [VMware Cloud Director - The fundamentals of VCDs](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-get-concepts) to see which features are included in each migration wave of your environments.

#### Applications made after 01 November 2024

> [!primary]
>
> Migration requests made after 01 November 2024 have the same requirements as for all other migration requests mentioned in this guide.
>
> You will need to make a request via a [support ticket](https://help.ovhcloud.com/csm?id=csm_get_help), which will allow you to have all the information and sign the T&Cs.
>

We will then notify you of the migration date, and set it.

#### Checklist before migration

- **Special blocking use cases\***:

The table below lists each individual blocking use cases, bottlenecks, and the criticality levels that must be met before requesting a migration from OVHcloud support teams.

| **Checklist** | **Use cases**                                        | **Goals**                                        | **Additional information**                                                                                                                                                                                              | **Help and references**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|:--------------:|:-----------------------------------------------------|:-------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1️⃣      | 🏢🏢 `Multi-vDC`                                     | Migrate VMs and vApps to a single vDC            | - Can only be migrated if your architecture has only one vDC (for now). <br/> If not, please ensure that you transfer all your data (VMs, vApp) into the vDC that will be used for the migration by the OVHcloud teams. | [Migrating an infrastructure to a new vDC](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/service-migration-vdc)                                                                                                                                                                                                                                                                                                                                                                    |
|      2️⃣      | 📜 `Non-active PCI-DSS, SecNumCloud and HDS options` | No solution for now                              | - Cannot be migrated if your VMware vSphere on OVHcloud workloads are PCI-DSS, HDS or SecNumCloud certified for now.                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|      3️⃣      | 🔐 `Encryption VMs (KMS/OKMS or vNKP)`               | Decrypt or disable the encryption policy for VMs | - It is not possible to migrate with VMs, vApps encrypted in VMware vSphere on OVHcloud.                                                                                                                                | [Enabling Virtual Machine Encryption (VM Encryption)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vm_encrypt)                                                                                                                                                                                                                                                                                                                                                                    |
|      4️⃣      | 💾 `Zerto`                                           | No solution for now                              | - If you are using Zerto solutions (data continous replication for disaster recovery), you cannot make Zerto work with managed VCD on OVHcloud (for now).                                                               | [Setting up Zerto Virtual Replication between two OVHcloud datacentres](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/zerto_virtual_replication_as_a_service)                                                                                                                                                                                                                                                                                                                      |

\***Blocking** : prevents any possible migration to a managed VCD on OVHcloud environnement.

- **Special non-blocking use cases**:

| **Checklist**  | **Use cases**                               | **Goals**                                                                                                                                        | **Additional information**                                                                                                                                                                           | **Help and references**                                                                                                                                                                                |
|:--------------:|:--------------------------------------------|:-----------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      5️⃣       | 🚫 `FT (fault tolerance)`                     | Disable VM Fault Tolerance in VMware vSphere on OVHcloud                                                                           | - Right-click on your VMs and select `Fault Tolerance`{.action} > `Disable Fault Tolerance`{.action} in managed VMware vSphere on OVHcloud                                                           | [VMware fault tolerance](/pages/bare_metal_cloud/managed_bare_metal/vmware_fault_tolerance)                                                                                                       |
|      6️⃣       | ⚠️ `Affinity/anti-affinity rules DRS`       | Reconstruction of affinity/anti-affinity rules in VCD on OVHcloud                                                                              | - To be retained, DRS affinity/anti-affinity rules will have to be manually recreated by you in VCD on OVHcloud after migration (for now).                                                           | [VMware DRS distributed resource scheduler](/pages/bare_metal_cloud/managed_bare_metal/vmware_drs_distributed_resource_scheduler)                                                                      |
|      7️⃣       | 📀 `Special devices (CD, DVD, etc...)`      | Unplug all special equipment in VMware vSphere on OVHcloud                                                                             | - All special devices (CDs, DVDs, etc.) must be removed prior to migration, otherwise they will be removed by the migration process (for now).                                                       | [Modify virtual machine resources](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/modify_hardware_configuration_of_vm)                                              |
|      8️⃣       | 🛢 `Datastore clusters`                     | Delete all clustering rules in VMware vSphere on OVHcloud                                                                       | - Clustering rules must be removed before migration, as this concept no longer exists with VCD on OVHcloud                                                                                           | [Cluster creation and EVC activation](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/create_cluster_enable_evc)                                                                  |
|      9️⃣       | 🔄 `Over-committed memory`                  | Plan or scale your resource requirements in VCD on OVHcloud,<br/>or optimize your requirements before migrating (vSphere control panel side) | - Because you cannot over-commit resources within VCD on OVHcloud. This concept does not exist.                                                                                                      | [Modify virtual machine resources](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/modify_hardware_configuration_of_vm)                                          |
|       🔟       | 🔗 `Resource pools (share)`                 | Replace with vApps in VCD on OVHcloud                                                                                                          | - Resource pools will be lost after the migration, as this concept no longer exists on the VCD on OVHcloud side. Instead, we recommend using vApp concepts within the VCD on OVHcloud Control Panel. | [Using vApps in the control panel VCD on OVHcloud](https://docs.vmware.com/en/VMware-Cloud-Director/10.6/VMware-Cloud-Director-Tenant-Guide/GUID-AC48FB5E-4ADC-4835-AACE-B949B297A147.html)  |
|       ⏸️       | 🆓 `Hosts + Datastore`                      | Free up resources (hosts + datastore) in VMware vSphere on OVHcloud                                                                        | - Free "Freespare" and "Hourly" resources (hosts + datastores) must be released before the migration, or converted into monthly resources ("Monthly").                                               | [Hosted Private Cloud billing information](/pages/account_and_service_management/manage_billing_payment_and_services/billing_private_cloud)                                             |

### Step 2 - After migration

Here is a reminder of the tasks you still need to carry out, once the migration is complete (if you have the following uses).

#### Post action (not mandatory, only if used case)

| **Post actions** | **Use cases**                                       | **Goals**                                                                                                                                                  | **Help and references**                                                                                                                                                                                                                                                                                      |
|:--------------:|:----------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|       1️⃣        | 🏢🏢 `Multi-vDC`                                    | Re-migrate the VMs and vApp data to your multi-vDc datastore in VCD on OVHcloud if you are in this use case                                                |                                                                                                                                                                                                                                                                                                              |
|       5️⃣        | 🚫 `FT (fault tolerance)`                             | Reactivate Fault Tolerance on VMs in VCD on OVHcloud                                                                                                       | - Right-click on your VMs and select `Fault Tolerance`{.action} > `Enable Fault Tolerance`{.action} in managed VCD on OVHcloud.                                                                                                                                                                              |
|       6️⃣        | ⚠️ `Affinity/anti-affinity rules DRS`               | Reconstruct affinity/anti-affinity rules in VCD on OVHcloud                                                                                                | - [Create a VM affinity rule in VMware Cloud Director on OVHcloud](https://docs.vmware.com/gb/en/VMware-Cloud-Director/10.5/VMware-Cloud-Director-Tenant-Guide/GUID-950F736F-76D5-4522-8E08-CF6727FC569C.html)                                                                                               |
|       7️⃣        | 📀 `Special devices (CD, DVD, etc...)`              | Reconnect any special equipment required for VMs to work properly in VCD on OVHcloud                                                                       | - Because all special devices (CD, DVD, etc.) must be removed before migration. [Insert support into a virtual machine in the VMware Cloud Director on OVHcloud](https://docs.vmware.com/gb/en/VMware-Cloud-Director/10.5/VMware-Cloud-Director-Tenant-Guide/GUID-01E3E275-D076-464D-BDE3-65F19A0793AD.html) |
|       3️⃣        | 🔐 `Encryption VMs (KMS/OKMS or vNKP)`              | Reactivate the encryption policy for the VMs in VCD on OVHcloud with your defined solutions (KMS/OKMS/vNKP) after migration, and launch the VM encryption. | - As it is not currently possible to migrate with VMs or encrypted vApps,<br/>You will need to import or configure your encryption solution (KMS/OKMS, vNKP) before enabling VM encryption in VCD on OVHcloud                                                                                                |

#### Managed Veeam for VCD (mandatory)

**Storage repository configuration**

After the migration, you will need to configure your new **Veeam Data Platform** on managed VCD on OVHcloud storage implementation with the correct settings.

These settings can be customized to suit your chosen service levels:

| **Repository**&nbsp;&nbsp;&nbsp;&nbsp; |  **Target Offers**  | **Comments**                                                                          |
|:---------------------------------------|:-------------------:|:--------------------------------------------------------------------------------------|
| 🥉 `Bronze Repository (100 To)`        |     `Standard`      | - **Standard Object Storage**                                                         |
| 🥈 `Silver Repository (100 To)`        |     `Advanced`      | - **Standard Object Storage** with off-site backup                                    |
| 🥇 `Gold Repository (100 To)`          |      `Premium`      | - **High Performance Object Storage** with off-site backup and 14 immutability points |

All these repositories have a storage quota of **100 To**. You can contact the [support](https://help.ovhcloud.com/csm?id=csm_get_help) teams to increase this quota.

For more information, please refer to our guide: [VMware Cloud Director - Veeam Data Platform backup](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-backup)

## Go further

You can go even further by reading these guides, to get a better understanding of the advantages of using VCD on OVHcloud:

- [VMware Cloud Director - Getting started](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-getting-started)
- [VMware Cloud Director - VCD fundamental concepts](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-get-concepts)
- [VMware Cloud Director - Frequently Asked Questions](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-faq)
- [VMware Cloud Director - Log in from the VCD control panel](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-logging)
- [VMware Cloud Director - Network concepts and best practices](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_concepts)
- [VMware Cloud Director - Creating network components via VCD on OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation)
- [VMware Cloud Director - Veeam Data Platform backup](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-backup)

If you require training or technical support to implement our solutions, please contact your Technical Account Manager or request a custom analysis of your project from our [Professional Services](/links/professional-services) to get a quote and  team experts.

Ask questions, give your feedback and interact directly with the team building our Hosted Private Cloud services on the dedicated [Discord](https://discord.gg/ovhcloud) channel.

Join our [community of users](/links/community).
