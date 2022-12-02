---
title: Creating a volume snapshot
slug: creating-volume-snapshot
excerpt: 'Find out how to create a snapshot of a Public Cloud additional disk'
section: Storage
order: 2
---

**Last updated 18th January 2022**

## Objective

A snapshot of an additional volume serves two general purposes:

- You can create backups with a few clicks and keep them as long as needed.
- You can use the snapshot as a template for identical volumes.

**This guide explains how to create a volume snapshot in the OVHcloud Control Panel.**

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- A [Block storage volume](../create_and_configure_an_additional_disk_on_an_instance/) created in your [Public Cloud](https://www.ovhcloud.com/en-gb/public-cloud/) project

## Instructions

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), go to the `Public Cloud`{.action} section, and select the Public Cloud project concerned. Then open `Block Storage`{.action} in the left-hand navigation bar under **Storage**.

![Volume Snapshot](images/volume_snapshot01.png){.thumbnail}

In the row of the volume concerned, click on `...`{.action} and select `Create a snapshot`{.action}. (It is not required to detach the volume from its instance first. However, if you wish to detach your volume first before creating the snapshot, please consult this [section](../create_and_configure_an_additional_disk_on_an_instance/detach-the-volume/#on-linux) of the corresponding guide for linux and this [section](../create_and_configure_an_additional_disk_on_an_instance/detach-the-volume/#on-windows) for windows.

![Volume Snapshot](images/volume_snapshot02.png){.thumbnail}

In the popup window, you can enter a different name for the snapshot. Take note of the pricing information, then click on `Take a snapshot`{.action}.

The snapshot creation time depends on the amount of data on the volume.

Since a volume snapshot is a clone of the entire disk, it will have the maximum size of the original volume, regardless of the actual disk space allocation.

![Volume Snapshot](images/volume_snapshot03.png){.thumbnail}

Open the section `Volume Snapshot`{.action} in the left-hand navigation bar. After the snapshot is created, it will be added to this table.

Click on the button `...`{.action} to `Delete`{.action} a snapshot or to `Create a volume`{.action} based on the respective snapshot. You can find further information in [this guide](../create-volume-from-backup/).


## Go further

[Creating a volume from a backup](../create-volume-from-backup/)

[Creating and configuring an additional disk on an instance](../create_and_configure_an_additional_disk_on_an_instance/)

[Increasing the size of an additional disk](../increase_the_size_of_an_additional_disk/)

Join our community of users on <https://community.ovh.com/en/>.