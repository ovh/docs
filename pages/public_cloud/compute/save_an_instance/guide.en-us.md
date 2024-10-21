---
title: Backing up an instance
excerpt: Find out how to back up a Public Cloud instance in the OVHcloud Control Panel
updated: 2024-07-03
---

## Objective

You can create a single backup of an instance or configure a schedule in order to automate your instance backups. Backups can be used to restore your instance to a previous state or to create a new, identical instance.

**This guide explains how to create manual and automatic backups of a Public Cloud instance.**

## Requirements

- A [Public Cloud instance](https://www.ovhcloud.com/en/public-cloud/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

### Creating a backup of an instance

> [!warning]
> This option is only available through a **Cold Snapshot** for Metal instances. During this process, the Metal instance will be switched to rescue-mode, and once the backup is performed, the instance will reboot back to normal mode.
>

Log in to the [OVHcloud Control Panel](/links/manager) and open your `Public Cloud`{.action} project. Then click on `Instances`{.action} in the left-hand menu.

Click on the `...`{.action} button to the right of the instance and select `Create a backup`{.action}.

![public-cloud-instance-backup](images/createbackup1.png){.thumbnail}

Enter a name for the backup on the next page. Take note of the pricing information and click on `Confirm`{.action}.

![public-cloud-instance-backup](images/createbackup2.png){.thumbnail}

It is not possible to track the progress of the backup in real time, however, in the `Instance Backup`{.action} section under `Storage`{.action} in the left-hand menu, the status will be displayed as "Backup in progress" during the process.

![public-cloud-instance-backup](images/backup_in_progress.png){.thumbnail}

Once the backup is complete, it will be available in the `Instance Backup`{.action} section under `Storage`{.action} in the left-hand menu.

![public-cloud-instance-backup](images/createbackup3.png){.thumbnail}

### Creating an automated backup of an instance

Click on the `...`{.action} button to the right of the instance and select `Create an automatic backup`{.action}.

![public-cloud-instance-backup](images/createbackup4.png){.thumbnail}

You can configure the following backup settings on the next page:

#### **The workflow** 

Currently, only one workflow exists. It will create a backup for the instance and its primary volume.

![public-cloud-instance-backup](images/createbackup5.png){.thumbnail}

#### **The resource** 

You can select the instance to back up.

![public-cloud-instance-backup](images/createbackup6.png){.thumbnail}

#### **The schedule** 

You can set up a custom backup schedule or choose one of the default frequencies:

- Daily backup with retention of the last 7 backups
- Daily backup with retention of the last 14 backups

![public-cloud-instance-backup](images/createbackup7.png){.thumbnail}

#### **The name** 

Enter a name for the automatic backup schedule. Take note of the pricing information and create the schedule with `Confirm`{.action}.
 
![public-cloud-instance-backup](images/createbackup8.png){.thumbnail}

### Managing backups and schedules

Schedules can be created and deleted in the `Workflow Management`{.action} section, which is located under `Storage`{.action} in the left-hand menu.

![public-cloud-instance-backup](images/createbackup9.png){.thumbnail}

Your instance backups are managed in the Public Cloud `Instance Backup`{.action} section, which can be found under `Storage`{.action} in the left-hand menu.

![public-cloud-instance-backup](images/createbackup10.png){.thumbnail}

> [!warning]
> The instance backup option must be deleted separately if you no longer wish to be billed for it. Deleting an instance does not delete the options attached to it.
>

> [!warning]
> **Note that you cannot delete an instance backup if an instance that has been spawned from this backup is running at the time of the delete action.**

Find out how to use backups to clone or restore instances in [this guide](/pages/public_cloud/compute/create_restore_a_virtual_server_with_a_backup).

## Go further

[Using instance backups to create or restore an instance](/pages/public_cloud/compute/create_restore_a_virtual_server_with_a_backup)

Join our community of users on <https://community.ovh.com/en/>.
