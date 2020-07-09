---
title: Choosing a disk type
slug: choosing-disk-type
excerpt: Find out how to choose between the VMware disk types
legacy_guide_number: '1441955'
section: Virtual machine management
order: 4
---

**Last updated 9th July 2020**

## Objective

VMware offers 3 types of disks for virtual machines.

**This guide explains the differences between the availale disk types.**

## Instructions

### Thin provision

*Thin provisioning* means that only the actual size of the disk will be consumed on the datastore. The size will grow along with the content.

For example, a 1TB disk can be allocated that will be recognised as 1TB by the VM operating system, but it will take up only the 20GB of space on the datastore the *guest OS* occupies.

One could allocate 50 TB (50 1TB VMs allocated) on a 1.2TB datastore, but only occupy 1TB (20GB occupied / VM in our example).

> [!warning]
>
It is important in this situation to control the write consumption of these VMs, so as not to significantly increase the occupancy of the different disks of the VMs and thus fill the datastore.
> The full datastore will prevent any new writing and may potentially cause the VMs to stop.
>

It is not possible to reclaim the occupied space.

Example: If you occupy 40GB on a 100GB thin disk and delete 20GB of data in the VM, the space on the datastore will still be 40GB and the allocated space still 100GB.


### Thick Provision Eager Zeroed

This type of disk will occupy all the allocated space on the datastore.

A 100GB *thick* VM will occupy 100GB of datastore space.

The VM disk is zeroed out (filled with zeros) when the disk is created on the VMFS volume.

### Thick Provision Lazy Zeroed

This type of disk will occupy all the allocated space on the datastore.

A 100GB *thick* VM will occupy 100GB of datastore space.

The allocated space is reserved for the VM disk, but the zeros are written when the VM needs the disk space.

### Example

Example summary for 100GB VMs with 40GB *guest OS*:


|Disk type|Space allocated|Block zeroed|Space occupied|
|---|---|---|---|
|Eager Zero|At VM creation|At VM creation|100GB|
|Lazy Zero|At VM creation|When the block is first written|100GB|
|Thin|When the block is first written|When the block is first written|40GB|

### OVHcloud disk types

On the datastore storage of a Hosted Private Cloud infrastructure, only *Thin provisioning* is available.

On the vSan storage, all 3 types of disk are possible.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
