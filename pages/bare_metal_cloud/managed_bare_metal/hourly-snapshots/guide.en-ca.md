---
title: OVHcloud hourly snapshots
routes:
    canonical: '/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/snapshots_horaires_ovh'
excerpt: Find out how OVHcloud hourly snapshots work
updated: 2020-11-30
---

**Last updated 26th November 2020**

## Objective

To ensure continuity of service and avoid data loss, OVHcloud automatically takes snapshots of your datastore every hour.

**This guide explains how the hourly snapshot functionality works and how snapshots can be used.**

## Requirements

- a [Managed Bare Metal infrastructure](https://www.ovhcloud.com/en-ca/managed-bare-metal/)
- a user account with access to vSphere (created in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca))

## Instructions

### Technical basis

A file system consists of blocks that hold data. At the beginning of the file system there is an index that contains the pointers, and these allow you to find the location of the different blocks.

A file is often fragmented into several blocks, so the index can optimise the access time to a file. The index performs a similar function to a table of contents for a book, allowing you to know the page number of the chapter that you want to read.
 
A ZFS snapshot is like a photograph of the file system, taken at a point in time *T*. It usually serves as the basis for a backup.
 
When creating the snapshot, ZFS does not need to copy the entire hard disk because all the files are already there. The snapshot saves the index containing pointers referencing the free blocks and blocks in use. Overall, it stores the positioning of blocks and ZFS will add blocks to it according to changes in data. The snapshot takes up very little space as long as no data is modified, and it is very quick to create.
 
After the snapshot is created, ZFS will intercept write requests. If the index pointer references
 
- a used block, it will copy the block into the snapshot and update the index so that it points to the new block, not the old block.
- a free block, it will copy the block to the file system and ZFS will update the global index of the filesystem.
 
Adding a file does not make the snapshot larger, as the snapshot does not handle free blocks. Similarly, multiple block rewrites do not affect the snapshot size, because the snapshot retains only one version for each block: the one from a point in time *T*.
 
It can therefore be said that the size of a snapshot is approximately equal to the size of the blocks used at its creation that have been modified since. Above all, remember that the size of a snapshot depends on how you use your file system, and the lifespan of the snapshot.
 
In practice, a snapshot created at a point in time *T* will only take up kilobytes. The snapshot size will increase as changes are made to the next snapshot. If you delete your data, the space will only be freed when the snapshot is deleted.

### Snapshots at H-1

You can retrieve the latest ZFS snapshot (H-1) from the vSphere Web Client, as it is placed directly on your datastores. 

#### Retrieving the latest snapshot

In your vSphere Web Client, go to the datastores view, then to the `Shared Storages` folder of the datastore containing the virtual machine you want to restore.

Browse the datastore by clicking `Browse Files`.

![data store](images/snapshot01.png){.thumbnail}

Create a folder to which you will later copy the files to restore.

![destination folder](images/snapshot02.png){.thumbnail}

Go to the `.zfs` folder and expand the tree-view to the folder of the virtual machine to restore, then copy all of the files present in this folder to the new folder created in the previous step.

![copy files](images/snapshot03.png){.thumbnail}

Once the files are copied, simply add this VM to your **Inventory** by clicking on the `.vmx` file, then on the `Register VM`{.action} menu item above.

![register vm](images/snapshot04.png){.thumbnail}

You now need to follow the VM Creation Wizard to complete the procedure.

### Accessing snapshots from before the last hour (H-1)

> [!warning]
>Hourly snapshots are **not** a backup system and are **not** guaranteed.
>

OVHcloud retains the other 23 hourly snapshots (up to H-24) on a datastore to which you do not have direct access. However, you can request to restore a particular snapshot beyond H-1 for a single VM via a **paid intervention** by creating a support ticket containing the necessary information in your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca). We will only be able to restore the requested snapshot on the same datastore, and we cannot guarantee this restoration under any circumstances.

Keep in mind that hourly snapshots are an additional security measure for internal purposes, and should only be used as a last resort in order to prevent any potential data loss.

We recommend using a full backup solution, such as our [Veeam Managed Backup](/pages/bare_metal_cloud/managed_bare_metal/veeam_backup_as_a_service) service, or any other system that performs a full backup of your virtual machines.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
