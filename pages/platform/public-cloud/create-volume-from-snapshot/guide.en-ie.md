---
title: Create a volume from a backup
slug: create-volume-from-backup
excerpt: 'Find out how to create additional disks from a backup of an additional disk'
section: Storage
order: 2
---

**Last updated 2nd April 2021**

## Objective

You can create additional disks for your Public Cloud instances by backing up an additional disk.

This may be useful in the following cases:

- If you want to restore additional disk data.
- If you want to have a highly available, high-performance storage space with your data.
- If you want to move your data to another instance.

**This guide explains how to create and configure an additional disk on one of your instances from an additional disk backup.**

## Requirements

- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.
- a [Public Cloud instance](https://www.ovhcloud.com/en-ie/public-cloud/){.external} in your OVHcloud account
- a disk backup in the same OpenStack region
- administrative (root) access to your instance via SSH

## Instructions

### Creating the disk from a backup

Log in to [the OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie), go to the `Public Cloud`{.action} section, and select the Public Cloud project concerned. Then click `Volume Snapshot`{.action} in the left-hand navigation bar under `Storage`.

To the right of the backup you want to create a volume from, click the `...`{.action} button, then `Create a volume`{.action}.

![create volume](images/volume01.png){.thumbnail}

Then enter the name and capacity of the new disk, and click `Create Volume`{.action}.

![create volume](images/volume02.png){.thumbnail}

It may take a few minutes to create the disk, depending on its size.

### Attaching the disk to an instance

Once the disk has been created, you can choose to attach it to an instance. To do this, click `Block Storage`{.action} in the left-hand navigation bar under `Storage`.

To the right of the volume of your choice, click on the `...`{.action} button, then `Attach to instance`{.action}.

![attaching volume](images/volume03.png){.thumbnail}

Now select the instance and click `Confirm`{.action} to attach the disk.

![attaching volume](images/volume04.png){.thumbnail}

The process of attaching the disk to your instance will then begin, and this may take a few minutes.

![attaching volume](images/volume05.png){.thumbnail}

> [!warning]
You should avoid browsing outside the current tab while the disk is being attached. This may interrupt the process.
>

Once the attachment is complete, you can follow these steps on how to configure the additional disk [using Linux](../create_and_configure_an_additional_disk_on_an_instance/#using-linux) or [using Windows](../create_and_configure_an_additional_disk_on_an_instance/#using-windows).

## Go further

Join our community of users on <https://community.ovh.com/en/>.
