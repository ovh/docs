---
title: Creating a snapshot
routes:
    canonical: '/pages/cloud/private-cloud/creer_un_snapshot'
excerpt: Find out how to return to a previous status of your VM using snapshots
legacy_guide_number: '7766547'
updated: 2020-11-18
---

**Last updated 18th November 2020**

## Objective

You can take a snapshot of a virtual machine. Once you have taken the snapshot, you can restore all virtual machines to the most recent snapshot or delete the snapshot.

**This guide explains how snapshots work.**

## Requirements

- a [Managed Bare Metal infrastructure](https://www.ovhcloud.com/en-ie/managed-bare-metal/)
- a user account with access to [vSphere](/pages/cloud/managed-bare-metal/vsphere-interface) (created in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie))

## Instructions

Snapshots are useful when you need to return to the same state multiple times, without creating multiple virtual machines. With snapshots, you create restore positions.

This allows you to preserve the basic state of a VM before migrating it to another type of operation.

While snapshots provide a "snapshot" image of the disk, regular erasure of the snapshots made is recommended. If you have a large number of snapshots, they will take up a lot of disk space and penalise the VM in terms of performance.

> [!primary]
> 
> It is not advisable to use snapshots as a method of virtual machine backups.
> 

The snapshot allows you to capture the status of your VM when you launch it. This snapshot includes (as you choose):

- The status of all disks in the virtual machine.
- The contents of the virtual machine's memory.

> [!warning]
> 
> It is not possible to change the size of a disk when a snapshot is taken on a VM.
> 

### Snapshot capture

Right-click on your VM then choose `Snapshots`{.action} and finally `Take Snapshot...`{.action}:

![Take snapshot](images/snapshot01.png){.thumbnail}

You must now specify the name you want to assign to this snapshot, its description, and if you want the VM memory to be included in the snapshot as well.

Here you can make a snapshot with or without the RAM used by the VM. If you integrate the RAM into the snapshot, this will increase the time it takes to complete the task, but it will prevent an otherwise necessary reboot when restoring the snapshot.

Without having to backup the RAM, the task will be faster, but rebooting the VM will be necessary in case of a recovery.

![Configure snapshot](images/snapshot02.png){.thumbnail}

### Snapshot management

You can find all snapshots of your VM in the snapshot manager. To do this, right-click on the VM, then choose `Snapshots`{.action} and finally `Manage Snapshots`{.action}:

![Create snapshots](images/snapshot03.png){.thumbnail}

### Deleting a Snapshot

In the snapshot manager, select the snapshot you want to delete and click `Delete`{.action}.

All VM snapshots can be removed in one operation by clicking `Delete All`{.action}.

### Restoring a snapshot

In the snapshot manager, select the snapshot to restore and click `Restore`{.action}.

### Consolidate snapshots

The presence of redundant disks can affect the performance of virtual machines.

Snapshot consolidation is useful when snapshot disks fail to compress after a delete operation. After consolidation, redundant disks are removed, improving virtual machine performance and saving storage space.

To perform a consolidation, right-click on the VM, then choose `Snapshots`{.action} and finally `Consolidate`{.action}

![snapshots](images/consolidate.png){.thumbnail}

You can find more information about consolidation on the [VMware documentation](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.vm_admin.doc/GUID-2F4A6D8B-33FF-4C6B-9B02-C984D151F0D5.html){.external}.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
