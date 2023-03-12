---
title: Create a Volume Backup
slug: volume-backup
excerpt: 
section: Storage
order: 
---

**Last updated 28th February 2023**

## Objective

If you value the data stored in you Block Storage volumes, it worth to organize the backup of this data to prevent the potential impact of any potential issue on this data, being it a human error or cluster incident.

A Volume Snapshot is a recovery point stored within the same storage cluster as the original volume. Operations will be fast, but in case of incident on the cluster, both volume and Volume Snapshot might be unavailable. Volume Snapshot creation do not required the volume to be detached from the instance.

A Volume Backup is an image created out of your volume, which is stored in the Object Storage cluster of the original volume localisation.
Level of resiliency is ideal and will allow you to quickly react to any incident on your volume, creating another volume from the backup. Volume Backup creation requires the volume to be detached from the instance.

Both Volume Snapshot and Volume Backup allow you to:

- Create backups of your volume with a few clicks and keep them as long as needed
- Use the backups to restore your volume state
- Use the backups as a template to create identical volumes

**This guide explains how to create a backup of your Block Storage volume in the OVHcloud Control Panel.**

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- A [Block storage volume](https://docs.ovh.com/gb/en/public-cloud/create_and_configure_an_additional_disk_on_an_instance/) created in your [Public Cloud](https://www.ovhcloud.com/en-gb/public-cloud/) project

## Instructions

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), go to the `Public Cloud`{.action} section, and select the Public Cloud project concerned. Then open `Block Storage`{.action} in the left-hand navigation bar under **Storage**.

==> Insert listing Page Block Storage Screenshot

In the row of the volume concerned, click on `...`{.action} and select `Create a backup`{.action} (It is not required to detach the volume from its instance first). However, if you wish to detach your volume, please consult this [section](https://docs.ovh.com/gb/en/public-cloud/create_and_configure_an_additional_disk_on_an_instance/#on-linux) of the corresponding guide for Linux and this [section](https://docs.ovh.com/gb/en/public-cloud/create_and_configure_an_additional_disk_on_an_instance/#on-windows) for Windows.

==> Insert Volume Backup Creation workflow Screenshot

Coming from Block Storage volume section, the volume concerned is indicated. Otherwise, select the volume you want to backup.
Then select the type of backup you want to create: Volume Snapshot or Volume Backup.
Choosing Volume Snapshot, you will have the possibility to modify the name of the Volume Snapshot to be created before validating `Create the backup`{.action}.
Choosing Volume Backup, you'll be asked to detach your volume from the instance in order to continue. You'll be then able to modify the name of the Volume Snapshot to be created before validating `Create the backup`{.action}.

The backup creation time, being it a volume snapshot or a volume backup, may take several hours, depending on the amount of data present on the volume, as well as the instance resource utilization for the volume snapshot, and other host-specific factors.

We therefore recommend that you perform your snapshots outside of your production hours. 

Other best practices include:

- Avoid creating snapshot/backup during peak hours (04:00 AM - 10:00 PM Paris time).
- Regularly validate you're able to get your data back from your voluma snapshot or volume backup.
- Install the qemu-guest agent if it is not installed... or try to disable it if necessary.
- Even if note mandatory, prefer to detach your volume when creating a volume snapshot.

Since a volume snapshot / volume backup is a clone of the entire disk, it will have the maximum size of the original volume, regardless of the actual disk space allocation.

==> Insert listing page Volume Snapshot

You will find the list of your Volume Snapshots in the section `Volume Snapshot`{.action} in the left-hand navigation bar. After the snapshot is created, it will be added to this table.

==> Insert listing page Volume Backup

You will find the list of your Volume Backups in the section `Volume Backup`{.action} in the left-hand navigation bar. As soon as the Volume Backup creation is requested, it will be added to this table with a status "Creating".

==

Click on the button `...`{.action} to `Delete`{.action} or to `Create a volume`{.action} based on the respective Volume Snapshot or Volume Backup.
You can find further information in [this guide](https://docs.ovh.com/gb/en/public-cloud/create-volume-from-backup/).


## Go further

[Creating a volume from a backup](https://docs.ovh.com/gb/en/public-cloud/create-volume-from-backup/)

[Creating and configuring an additional disk on an instance](https://docs.ovh.com/gb/en/public-cloud/create_and_configure_an_additional_disk_on_an_instance/)

[Increasing the size of an additional disk](https://docs.ovh.com/gb/en/public-cloud/increase_the_size_of_an_additional_disk/)

Join our community of users on <https://community.ovh.com/en/>.
