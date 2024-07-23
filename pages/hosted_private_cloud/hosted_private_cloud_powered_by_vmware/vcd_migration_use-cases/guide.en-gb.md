---
title: 'VMware Cloud Director - Audit tricky use cases of migration to VCD'
excerpt: 'Discover the methods for examining the tricky scenarios within your vSphere/vCenter OVHcloud managed workflows, in preparation for a VCD migration'
updated: 2024-07-22
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

> [!primary]
>
> VCD on OVHcloud is currently in alpha phase. This guide may therefore be incomplete and can be updated in the future. 
> 

## Objective

**The aim of this guide is to audit the special cases of vSphere managed HPC that may pose problems for migration to VCD on OVHcloud.**

## Requirements

- You must have completed the verification steps in the following guide before launching a migration to VCD.

## Instructions

> [!warning]
>
> This audit is mandatory before any possible migration to VCD on OVHcloud.
>

Welcome to this how-to guide to provide you with information on the process of migrating your vSphere/vCenter Hosted Private Cloud infrastructure to VMware Cloud Director in the VMware on OVHcloud ecosystem.

This document also details the requirements for the migration, and if applicable, explains how to comply with them.

### Step 1 - Requirements and tricky use cases (mandatory)

/// details | What are the verification steps before you can migrate to VCD ?

Once you have checked these requirements, your virtual machines will be hot-migrated and fully operated by the OVHcloud teams.

This hot migration will minimize disruptions to your public or private networks. Private networks are the most likely to be affected, with downtime of the order of a few minutes.

#### Table - All special use cases

| **Steps**   | **Warning** | **Special use-cases**                    | **Requirements**                                                       | **Comments**                                                                                                                                                                                                   | **Reference to external documentation**                                                                                                                                         |
|-------------|-------------|------------------------------------------|------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Step 1**  | ❌           | **Multi-vDC**                            | **No multi-vDC (multiple data centres, only one possible).**           | - Can only be migrated if it has only one data centre in a vSphere managed on OVHcloud. If not, make sure to migrate your data in the datacenter that will be migrated.                                        | [Migrating an infrastructure to a new vDC](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/service-migration-vdc)                                            |                                                                                                                                                                                                                                                                                                                                                  
| **Step 2**  | ❎           | **FT (fault tolerance)**                 | **No fault tolerance.**                                                | - Does my vSphere managed on OVHcloud service have VMs with FT (fault tolerance) activated ?                                                                                                                   | [VMware Fault Tolerance](/pages/bare_metal_cloud/managed_bare_metal/vmware_fault_tolerance)                                                                                     |                                                                                                                                                                                                                                                                                                                                                            
| **Step 3**  | ️❎          | **DRS affinity/anti-affinity**           | **No DRS Affinity/Anti affinity rules.**                               | - Between VMs migration can be migrated to VCD, but between VMs and hosts cannot be migrated.                                                                                                                  | [VMware DRS distributed resource scheduler](/pages/bare_metal_cloud/managed_bare_metal/vmware_drs_distributed_resource_scheduler)                                               |                                                                                                                                                                                                                                                                                                                                               
| **Step 4**  | ❎           | **Special devices (CD, DVD etc..)**      | **No special devices.**                                                | - Nothing must be plugged into to migrated vSphere managed data centers. All special devices (CD, DVD etc..) must be removed before migration, otherwise they will be force-removed by the migration process and lost. |                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
| **Step 5**  | ❎           | **Datastore  clusters**                  | **Make sure all clustering rules are deleted in vSphere on OVHcloud.** | - Clustering rules will have to be deleted before migration because this notion do not exist on the VCD side.                                                                                                  |                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
| **Step 6**  | ❎           | **Memory over-commitment**               | **Scale up VCD.**                                                      | - Foresee more resources on the VCD side or resize/optimize the VMs before migration on the vSphere on OVHcloud side. <br/> Because you won't be able to over-commit resources.                                | [Modifying virtual machine resources](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/modify_hardware_configuration_of_vm)                                   |                                                                                                                                                
| **Step 7**  | ❎           | **Resource pools** (sharing)             | **Do not need resource pools.**                                        | - Resource pools will be lost after migration because this notion no longer exists on the VCD side.                                                                                                            |                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
| **Step 8**  | ❎           | **Security options (PCI-DSS, HDS, SNC)** | **To not have security options in vSphere on OVHcloud.**               | - Cannot be migrated if the vSphere managed on OVHcloud is certified PCI-DSS, HDS, SNC (vSphere on OVHcloud with security options).                                                                            |                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
| **Step 9**  | ❌           | **Encrypted VMs**                        | **Decipher VM in vSphere on OVHcloud.**                                | - Impossible to migrate with vSphere encrypted data (VMs, vApp) managed on OVHcloud.                                                                                                                           |                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
| **Step 10** | ❌           | **Zerto**                                | **No Zerto.**                                                          | - If you use Zerto, you cannot be migrated to VCD for now.                                                                                                                                                     | [Setting up Zerto Virtual Replication between two OVHcloud data centres](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/zerto_virtual_replication_as_a_service) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
| **Step 11** | ❎           | **Hosts / ZP (ZFS pool)**                | **Release resources (hosts + ZP).**                                    | - The "Freespare" and "Hourly" resources (hosts + ZP zpools) must be released before the migration. <br/> Or convert in "Monthly" resources.                                                                   | [Hosted Private Cloud billing information](/pages/account_and_service_management/managing_billing_payments_and_services/facturation_private_cloud)                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
| **Step 12** | ❌           | **HCX**                                  | **No HCX usage in vSphere  on OVHcloud.**                              | - If so it cannot be migrated to VCD.                                                                                                                                                                          |                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

///

### FAQ - Frequently asked questions

#### In what order should I perform my checks to migrate to VCD?

Looking at the table above, you will notice that a number of checks need to be performed. We recommend launching these pre-checks for your Dedicated Cloud from top to bottom, as suggested in the step column. You can print this guide and tick the "Done" box for each step.

We invite you to ask yourself questions, such as:

- Does my vSphere managed on OVHcloud infrastructure use multi-vDC?
    - Yes, I need to migrate all my data to one data centre in order to migrate to VCD.
    - No, I'll move on to the next step.

- Does my VMware on OVHcloud infrastructure use fault tolerance (FT)?
    - Yes, so I have to disable it before migrating, otherwise I won't be able to migrate to VCD.
    - No, I'll move on to the next step.

- And so on...

#### Is VCD compatible with PCI-DSS, SNC, HDS certifications?

No, VCD on OVHcloud is not yet compatible with PCI-DSS, SNC, HDS security options.

#### What type of migration will be used ?

This will be a hot cross vCenter migration.

#### Will the Dedicated Cloud be retained after the migration ?

No, all configurations and Dedicated Cloud data will be deleted after the migration.

#### Do I have access to the VCD console after the migration ?

Yes, the action is performed by OVHcloud and allows you to access the data after the migration from the VCD on OVHcloud console.

#### Who does the VCD migration ?

The migration is carried out by OVHcloud in full, but the necessary steps before the migration must be carried out by you. These steps will evolve as the VCD product advances, and will help to alleviate the necessary requirements.

## Go further

If you require training or technical support to implement your migration with VCD, please contact your TAM or [click here](/links/professional-services) to get a quote and request a custom analysis of your project from our Professional Services team experts.

Ask questions, give your feedback and interact directly with the team building our Hosted Private Cloud services on the dedicated [Discord](https://discord.gg/ovhcloud) canal.

Join our [community of users](/links/community).
