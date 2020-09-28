---
title: 'Creating and restoring a virtual server from a backup'
slug: create-restore-virtual-server-from-backup
excerpt: 'Find out how to create or restore an instance backup'
legacy_guide_number: 1882
section: Management via Control Panel
order: 2
---

**Last updated 02nd December 2019**

## Objective
There may be situations where where you need to restore your instance using a backup. For example, you may want to do this if you make a mistake configuring your instance. 

You can also use a backup to create a new instance, duplicate the first one for load balancing purposes, and ensure that you have a high-availability infrastructure.

This guide will show you how to use backups to re-create, duplicate and restore your instances.

## Requirements
- A backup of a Public Cloud instance. To find out how to create one, please refer to out guide on [Backing up an instance](../back-up-instance/).
- access to the OVHcloud Control Panel

## Instructions

### Create an instance from a backup.

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}, then select `Public Cloud`{.action}. Next, select the `Instance backup`{.action} section.

Click on the `...`{.action} button to the right of the backup, then `Create an instance`{.action}.

![public-cloud-instance-backup](images/restorebackup1.png){.thumbnail}

The page for creating an instance will pop up.

![public-cloud-instance-backup](images/restorebackup2.png){.thumbnail}

Some elements are pre-defined:

* <b>Location</b>. Your instance will be created in the same datacentre as your backup.
* <b>Image</b>. The image will correspond to your backup.
* <b>Models</b>. Only the models that are compatible with your image are available, depending on your quota.

For further information on creating an instance, please refer to [this guide](../create_an_instance_in_your_ovh_customer_account/).

To create an instance in a different datacentre to the one your backup is stored in, you will need to transfer it to the region you want. If you would like to do this, please refer to our guide to [transferring an instance backup from one datacentre to another](../transfer_instance_backup_from_one_datacentre_to_another/).

### Restore an instance from a backup.

To restore an instance from a backup, select the `Instance`{.action} menu, then click on the `...`{.action} button on the right-hand side of the instance you want to restore. Next, click `Edit`{.action}.

![public-cloud-instance-backup](images/restorebackup3.png){.thumbnail}

The page for editing an instance will pop up. You can change:

* the instance name
* the instance image
* the instance model
* the instance’s billing mode (from ‘hourly’ to ‘monthly’ only)

Go to the `Image`{.action} section for the backup you want to restore.

![public-cloud-instance-backup](images/restorebackup4.png){.thumbnail}


> [!alert]
>
>As detailed in the yellow box above, any data added after this backup is created cannot be recovered.
>

## Go further

Join our community of users on <https://community.ovh.com/en/>.
