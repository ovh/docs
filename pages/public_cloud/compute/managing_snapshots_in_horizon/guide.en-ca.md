---
title: Managing snapshots of an instance in Horizon
updated: 2024-09-04
---

## Objective

During your activity, you will probably need to back up your data, configurations and even your entire instances. To do this, you can create snapshots of your instances. These can be used to restore a later configuration on your instance, or to create an exact copy of an instance.

**This guide explains how to manage snapshots from the OpenStack Horizon interface.**

## Requirements

- An [OVHcloud Public Cloud instance](/pages/public_cloud/compute/public-cloud-first-steps#create-instance) 
- [Access to the Horizon interface](/pages/public_cloud/compute/introducing_horizon)

## Instructions

### Snapshot creation

Log into the Horizon interface, and ensure that you are in the correct region. You can verify this on the top left corner.

![Region selection](images/region2021.png){.thumbnail}

Next, click on the `Compute`{.action} menu on the left side and select `Instances`{.action}. Select `Create Snapshot`{.action} next to the corresponding instance.

![Create snapshot](images/createsnapshot.png){.thumbnail}

In the pop-up window, enter the required information:

Snapshot Name: Set a name for the snapshot and click on `Create Snapshot`{.action}.

![Create snapshot](images/createsnapshot2.png){.thumbnail}

The snapshot will then be listed in the `Images`{.action} section. For this reason, we recommend naming each snapshot explicitly.

### Restore a snapshot

You can restore a snapshot by creating a new instance from it.

In the horizon interface, click on the `Compute`{.action} menu on the left side, then click on `Images`{.action}.

Click on `Launch`{.action} next to the selected snapshot.

![restore snapshot](images/restoresnapshot.png){.thumbnail}

In the pop-up window, a number of options need to be selected to complete the restoration of the snapshot.

> [!tabs]
> **Details**
>>
>> **Instance Name:** Specify the name you want for the instance.<br>
>> **Count:** Select the amount of instances you want to launch from the snapshot.<br><br>
>>![snapshot](images/restoresnapshot1.png){.thumbnail}<br>
>>
> **Flavor**
>>
>> Select the flavor you want. Make sure you select a flavor whose resources are equal to or greater than the size of the image (snapshot).<br><br>
>>![network](images/restoresnapshot2.png){.thumbnail}<br>
>>
> **Network**
>>
>> Select a public network (Ext-Net) to attach to the instance.<br><br>
>>![network](images/restoresnapshot3.png){.thumbnail}<br>
>>
> **Keypair**
>>
>> Select (3), create (1) or import (2) a key pair.<br><br>
>>![network](images/restoresnapshot4.png){.thumbnail}<br>
>>

Once done, click on `Launch Instance`{.action} to begin the creation of your instance.

### Deleting a snapshot

In the horizon interface, click on the `Compute`{.action} menu on the left side, then click on `Images`{.action}.

Next, click the drop-down arrow next to the snapshot you want to delete and click on `Delete Image`{.action}. Confirm the deletion of the snapshot.

![public-cloud](images/deletesnapshot.png){.thumbnail}

## Go further

Join our [community of users](/links/community).