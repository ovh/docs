---
title: 'VMware Cloud Director - Audit tricky use cases of migration to VCD'
excerpt: 'Discover the methods for examining the tricky scenarios within your managed vSphere/vCenter OVHcloud workflows, in preparation for a VCD migration'
updated: 2024-07-23
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

- Have a Hosted Private Cloud managed VMware product on OVHcloud.
- You must have completed the verification steps in the following guide before launching a migration to VCD.
- Do not use Zerto backup on OVHcloud solutions.
- Do not require PCI-DSS, SNC or HDS certification.
- Access to your managed vSphere [web interface](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vsphere_interface_connection).
- Not having several datacentres with your managed vSphere solution on OVHcloud.

## Instructions

> [!warning]
>
> This audit is mandatory before any possible migration to VCD on OVHcloud.
>

This how-to guide will provide you with information on the process of migrating your Hosted Private Cloud maanaged vSphere/vCenter on OVHcloud services to a VMware Cloud Director on OVHcloud ecosystem.

This document also details the requirements for the migration, and if applicable, explains how to comply with them.

### Step 1 - Requirements and special cases (mandatory)

What are the special use cases and solutions for your managed vSphere on OVHcloud to migrate to VCD? on OVHcloud ?

Once you have checked these requirements, your managed vSphere on OVHcloud VMs will be migrated (hot migration) fully and operated by the OVHcloud teams.

This hot migration will minimize disruptions from your public or private networks. Private networks are the most likely to be affected, with downtime of the order of a few minutes.

#### Table - Special cases

The table below lists each of the migration bottlenecks and criticality levels that must be remediated before the migration can begin.

| **Steps**   | **Warning** | **Special use-cases**                    | **Solutions**                                              | **Comments**                                                                                                                                                                                                           | **Reference to external documentation**                                                                                                                                         |
|-------------|-------------|------------------------------------------|------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Step 1**  | ❌           | **Multi-vDC**                            | **Migrate data to a single datacentre.**                   | - Can only be migrated if it has only one data centre in a vSphere managed on OVHcloud. If not, make sure to migrate your data in the datacenter that will be migrated.                                                | [Migrating an infrastructure to a new vDC](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/service-migration-vdc)                                            |                                                                                                                                                                                                                                                                                                                                                  
| **Step 2**  | ❎           | **FT (fault tolerance)**                 | **Disable FT from VMs in managed vSphere on OVHcloud.**    |                                                                                                                                                                                                                        | [VMware Fault Tolerance](/pages/bare_metal_cloud/managed_bare_metal/vmware_fault_tolerance)                                                                                     |                                                                                                                                                                                                                                                                                                                                                            
| **Step 3**  | ️❎          | **DRS affinity/anti-affinity**           | **Reconstitution of affinity/anti-affinity rules in VCD.** | - Between VMs migration can be migrated to VCD, but between VMs and hosts cannot be migrated.                                                                                                                          | [VMware DRS distributed resource scheduler](/pages/bare_metal_cloud/managed_bare_metal/vmware_drs_distributed_resource_scheduler)                                               |                                                                                                                                                                                                                                                                                                                                               
| **Step 4**  | ❎           | **Special devices (CD, DVD etc..)**      | **Unplug all special devices.**                            | - Nothing must be plugged into to migrated vSphere managed data centers. All special devices (CD, DVD etc..) must be removed before migration, otherwise they will be force-removed by the migration process and lost. |                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
| **Step 5**  | ❎           | **Datastore  clusters**                  | **Delete all clustering rules.**                           | - Clustering rules will have to be deleted before migration because this notion do not exist on the VCD side.                                                                                                          |                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
| **Step 6**  | ❎           | **Memory over-commitment**               | **Scale up VCD.**                                          | - Foresee more resources on the VCD side or resize/optimize the VMs before migration on the vSphere on OVHcloud side. <br/> Because you won't be able to over-commit resources.                                        | [Modifying virtual machine resources](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/modify_hardware_configuration_of_vm)                                   |                                                                                                                                                
| **Step 7**  | ❎           | **Resource pools** (sharing)             |                                                            | - Resource pools will be lost after migration because this notion no longer exists on the VCD side.                                                                                                                    |                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
| **Step 8**  | ❎           | **Security options (PCI-DSS, HDS, SNC)** |                                                            | - Cannot be migrated if the vSphere managed on OVHcloud is certified PCI-DSS, HDS, SNC (vSphere on OVHcloud with security options).                                                                                    |                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
| **Step 9**  | ❌           | **Encrypted VMs**                        | **Decipher VM in managed vSphere on OVHcloud.**            | - Impossible to migrate with vSphere encrypted data (VMs, vApp) managed on OVHcloud.                                                                                                                                   |                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
| **Step 10** | ❌           | **Zerto**                                |                                                            | - If you use Zerto, you cannot be migrated to VCD for now.                                                                                                                                                             | [Setting up Zerto Virtual Replication between two OVHcloud data centres](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/zerto_virtual_replication_as_a_service) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
| **Step 11** | ❎           | **Hosts / ZP (ZFS pool)**                | **Release resources (hosts + ZP).**                        | - The "Freespare" and "Hourly" resources (hosts + ZP zpools) must be released before the migration. <br/> Or convert in "Monthly" resources.                                                                           | [Hosted Private Cloud billing information](/pages/account_and_service_management/managing_billing_payments_and_services/facturation_private_cloud)                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
| **Step 12** | ❌           | **HCX**                                  |                                                            | - If so it cannot be migrated to VCD.                                                                                                                                                                                  |                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

## Go further

If you require training or technical support to implement your migration with VCD, please contact your TAM or [click here](/links/professional-services) to get a quote and request a custom analysis of your project from our Professional Services team experts.

Ask questions, give your feedback and interact directly with the team building our Hosted Private Cloud services on the dedicated [Discord](https://discord.gg/ovhcloud) canal.

Join our [community of users](/links/community).
