---
title: "VCD - FAQ"
excerpt: "Frequently asked questions on vCD"
updated: 2024-04-16
flag: hidden
---

## Objective

## Requirements
  
## Instructions

<a name="vDConOVH"></a>

### What is VMware Cloud Director by OVHcloud ?

This is a new product available in the VMware on OVHcloud offering that provides you with virtual Datacenter powered by VMware technology, on top of a mutualized infrastructure hosted and operated by OVHcloud.   

VMware Cloud Director by OVHcloud will be available in 3 tiers:

    VCD Standard, providing the standard VMware stack virtualization capabilities.
    VCD Advanced, including advanced networking & security capabilities on top of the standard tier. 
    VCD Premium, adding high-performance vSAN storage to the Advanced tier. 

Please see [Page name]<add a link to the key features page > for more information.

<a name="migrationvCD"></a>

### How migration will be done by OVHcloud ?

If you choose to migrate to VCD, OVH will be handling the migration for you. 

As an exception, we won’t be charging the new current server/host prices during the migration process. We’ll absorb the costs of the license price increase while the migration is ongoing. Whether or not you choose to continue using the current solution, you’ll still benefit the new VCD prices right away, starting on 1 May 2024.

However, our goal is to migrate to VCD as soon as we’re ready. We’ll notify you 1 to 2 weeks before your migration starts, which will be carried out with zero downtime. If, for technical reasons, a live migration cannot be done, we’ll discuss with you how best to proceed.

<a name="migrationdata"></a>

### How are you migrating my data to VCD ?

Your data stays on the Leclerc v3 filers, we will expose to VCD the storage like we are exposing the storage to vSphere. The ‘live’ migration between two hosts with the same CPU (Intel) is done via vMotion.

<a name="accessAPI"></a>

### Can i still have access to vSphere ESXi and vCenter API with VMware Cloud Director ?

With VMware Cloud Director, you cannot access to vSphere ESXi and vCenter API. You will have access to Cloud Director API, and you can use tool like Terraform

<a name="backupTools"></a>

### Can I still use product like Veeam, Naviko, Rubik to backup my VMs ?

No with VMware Cloud Director, you cannot use tool that request access to vSphre ESXi or vCenter.

For Backup we will propose Veeam Managed Backup with an integrated plugin for Backup VMs.
You will propose by default 3 types of jobs, but you can add different policies if you need.

Consumption will be based per VMs per Month and storage consumption per month.

<a name="rulesvSphere"></a>

### Can i use rules like Affinity and anti-affinity like previously with vSphere ?

With VMware Cloud Director, you are able to set group Affinity for Virtual Machines and rules like Anti-affinity to separate differents virtual machines.

<a name="certifications"></a>

### Which certifications apply to the new VCD service ?

At the service launch, no specific certification will be applicable to the VMware Cloud Director by OVHcloud service. 

However, supporting HDS, ISO27001, SOC2 or PCI-DSS certifications are clearly roadmap objectives. 

## Go further

Join our community of users on <https://community.ovh.com/en/>.