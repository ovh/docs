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

A volume snapshot is a recovery point stored within the same storage cluster as the original volume. Operations will be fast, but in case of incident on the cluster, both volume and snapshotmight be unavailable. Volume Snapshots creation do not required the volume to be detached from the instance.

A volume backup is an image created out of your volume, which is stored in the Object Storage cluster of the original volume localisation.
Level of resiliency is ideal and will allow you to quickly react to any incident on your volume, creating another volume from the backup. Volume backup creation requires the volume to be detached from the instance.

Both volume Snapshot and volume Backup allow you to:

- Create backups of your volume with a few clicks and keep them as long as needed
- Use the backups to restore your volume state
- Use the backups as a template to create identical volumes

**This guide explains how to create a volume snapshot or volume backup in the OVHcloud Control Panel.**

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- A [Block storage volume](https://docs.ovh.com/gb/en/public-cloud/create_and_configure_an_additional_disk_on_an_instance/) created in your [Public Cloud](https://www.ovhcloud.com/en-gb/public-cloud/) project

## Instructions

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), go to the `Public Cloud`{.action} section, and select the Public Cloud project concerned. Then open `Block Storage`{.action} in the left-hand navigation bar under **Storage**.

![Volume Snapshot](images/volume_snapshot01.png){.thumbnail}

In the row of the volume concerned, click on `...`{.action} and select `Create a backup`{.action} (It is not required to detach the volume from its instance first). However, if you wish to detach your volume, please consult this [section](https://docs.ovh.com/gb/en/public-cloud/create_and_configure_an_additional_disk_on_an_instance/#on-linux) of the corresponding guide for Linux and this [section](https://docs.ovh.com/gb/en/public-cloud/create_and_configure_an_additional_disk_on_an_instance/#on-windows) for Windows.

![Volume Snapshot](images/volume_snapshot02.png){.thumbnail}

In the popup window, you can enter a different name for the snapshot. Take note of the pricing information, then click on `Take a snapshot`{.action}.

The snapshot creation time may take several hours, depending on the amount of data present on the volume, the instance resource utilization at the time of the snapshot and other host-specific factors.

We therefore recommend that you perform your snapshots outside of your production hours. 

Other best practices include:

- Avoid creating snapshots during peak hours (04:00 AM - 10:00 PM Paris time).
- Install the qemu-guest agent if it is not installed... or try to disable it if necessary.
- Try not to "solicit" the server too much during the snapshot creation phase (I/O limitation, RAM consumption, etc.).

Since a volume snapshot is a clone of the entire disk, it will have the maximum size of the original volume, regardless of the actual disk space allocation.

![Volume Snapshot](images/volume_snapshot03.png){.thumbnail}

Open the section `Volume Snapshot`{.action} in the left-hand navigation bar. After the snapshot is created, it will be added to this table.

Click on the button `...`{.action} to `Delete`{.action} a snapshot or to `Create a volume`{.action} based on the respective snapshot. You can find further information in [this guide](https://docs.ovh.com/gb/en/public-cloud/create-volume-from-backup/).


## Go further

[Creating a volume from a backup](https://docs.ovh.com/gb/en/public-cloud/create-volume-from-backup/)

[Creating and configuring an additional disk on an instance](https://docs.ovh.com/gb/en/public-cloud/create_and_configure_an_additional_disk_on_an_instance/)

[Increasing the size of an additional disk](https://docs.ovh.com/gb/en/public-cloud/increase_the_size_of_an_additional_disk/)

Join our community of users on <https://community.ovh.com/en/>.
