---
title: Creating a volume snapshot
excerpt: 'Find out how to create a snapshot of a Public Cloud additional disk'
updated: 2025-04-28
---

## Objective

A **volume snapshot** is a recovery point stored within the same storage cluster as the original volume. Operations will be fast, but in case of an incident on the cluster, both volume and volume snapshot might be unavailable. Volume snapshot creation does not require the volume to be detached from the instance.

This is not to be confused with a **volume backup** which is an image created out of your volume, which is stored in the Object Storage cluster where the original volume is located. The level of resiliency is ideal and will allow you to quickly react to any incident on your volume, creating another volume from the backup. Volume backup creation requires the volume to be detached from the instance. For more information on this option, please consult this [guide](/pages/public_cloud/compute/volume-backup).

A snapshot of an additional volume serves two general purposes:

- You can create backups with a few clicks and keep them as long as needed.
- You can use the snapshot as a template for identical volumes.

**This guide explains how to create a volume snapshot in the OVHcloud Control Panel.**

## Requirements

- A [Block storage volume](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance) created in your [Public Cloud project](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project)

<!-- CP-NAV-START:publiccloud-projects -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Navigation path:** `Public Cloud`{.action} > Select your project

---
<!-- CP-NAV-END:publiccloud-projects -->

## Instructions

<!-- CP-STEPS-START:create-volume-snapshot -->
Open `Block Storage`{.action} in the left-hand navigation bar under **Storage & backup**.

![Volume Snapshot](images/volume_snapshot01.png){.thumbnail}

In the row of the volume concerned, click the `...`{.action} button and select `Create a backup`{.action} (It is not required to detach the volume from its instance first). However, if you wish to detach your volume, please consult the "Detach a volume" instructions from [this guide](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance).

Then select `Volume Snapshot`{.action}, name it and click `Create backup`{.action}.

![Volume Snapshot](images/volume_snapshot02.png){.thumbnail}

In the popup window, you can enter a different name for the snapshot. Take note of the pricing information, then click on `Take a snapshot`{.action}.

The snapshot creation time may take several hours, depending on the amount of data present on the volume, the instance resource utilization at the time of the snapshot and other host-specific factors.

We therefore recommend that you perform your snapshots outside of your production hours. 

Other best practices include:

- Avoid creating snapshots during peak hours (04:00 AM - 10:00 PM Paris time).
- Install the qemu-guest agent if it is not installed or try to disable it if necessary.
- Try not to "solicit" the server too much during the snapshot creation phase (I/O limitation, RAM consumption, etc.).

Since a volume snapshot is a clone of the entire disk, it will have the maximum size of the original volume, regardless of the actual disk space allocation.

![Volume Snapshot](images/volume_snapshot03.png){.thumbnail}

Open the section `Volume Snapshot`{.action} in the left-hand navigation bar. After the snapshot is created, it will be added to this table.

Click on the button `...`{.action} to `Delete`{.action} a snapshot or to `Create a volume`{.action} based on the respective snapshot. You can find further information in [this guide](/pages/public_cloud/compute/create-volume-from-snapshot).
<!-- CP-STEPS-END:create-volume-snapshot -->

## Go further

[Creating a volume backup](/pages/public_cloud/compute/volume-backup)

[Creating a volume from a backup](/pages/public_cloud/compute/create-volume-from-snapshot)

[Creating and configuring an additional disk on an instance](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance)

[Increasing the size of an additional disk](/pages/public_cloud/compute/increase_the_size_of_an_additional_disk)

Join our [community of users](/links/community).