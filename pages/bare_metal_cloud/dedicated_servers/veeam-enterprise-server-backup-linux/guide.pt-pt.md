---
title: Backing up a Bare Metal Linux Server with Veeam Enterprise (EN)
excerpt: Learn how to back up your Bare Metal Linux Server using Veeam Backup and Replication (Enterprise)
updated: 2024-04-05
---

## Objective

Whether it is a hardware failure or accidentally deleting an important file, maintaining frequent backups is extremely important and can save you countless hours of unnecessary work.

**Learn how to back up your Bare Metal Linux Server using Veeam Backup and Replication (Enterprise)**

> [!primary]
> To back up a Bare Metal Windows server using the Veeam Agent for Microsoft Windows, see [this guide](/pages/bare_metal_cloud/dedicated_servers/veeam-enterprise-server-backup-windows-agent).

## Requirements

- An [OVHcloud Bare Metal Linux server](https://www.ovhcloud.com/pt/bare-metal/)
- [Veeam Backup & Replication installed and registered](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_veeam_backup_replication)

> [!warning]
> This guide presupposes that you have followed the steps detailed in our first guide [Preparing a Bare Metal Server backup with Veeam Enterprise](/pages/bare_metal_cloud/dedicated_servers/veeam-enterprise-server-backup-preparation).

## Instructions

To begin, from the `Home`{.action} tab of Veeam, click the `Backup Job`{.action} button and select one of the `Linux computer...` option to backup.

![Home - backup job](images/backup01.png){.thumbnail}

In the **Job Mode** section, select the server **Type** and the **Mode** for backup.

Then, click the `Next`{.action} button.

![Job mode - type and mode](images/backup02.png){.thumbnail}

In the **Name** section, give your backup job a **Name** and **Description**.

Then, click the `Next`{.action} button.

![Name - name and description](images/backup03.png){.thumbnail}

In the **Computers** section, click the `Add...`{.action} button.

![Computers - add](images/backup04.png){.thumbnail}

In the **Add Computer** pop-up, enter the **Host name or IP address** of the server.

Then, click the `Add...`{.action} button, select `Stored`{.action} and then `Linux account...`{.action}.

![Add computer - host name or IP address](images/backup05.png){.thumbnail}

Enter the **Username** and **Password**. Select the **Elevate account privileges automatically** box and then click `OK`{.action}.

![Add computer - username and password](images/backup06.png){.thumbnail}

In the **Backup Mode** section, select the backup mode for this job.

Then, click the `Next`{.action} button.

![Backup Mode - select mode](images/backup07.png){.thumbnail}

In the **Storage** section, choose the **Backup repository** and settings.

Then, click the `Next`{.action} button.

![Storage - backup repostory](images/backup08.png){.thumbnail}

Click the `Next`{.action} button again to skip the **Guest Processing** section, as no configurations are needed.

In the **Schedule** section, you can click `Run the job automatically`{.action} if you would like to configure the backup job to be reoccurring.

For this article, we will be executing the backup manually so we will click the `Apply`{.action} button to proceed.

![Schedule](images/backup09.png){.thumbnail}

Review the **Summary** section to ensure that everything is correct.

If you want to run the job as soon as you finish setup, select the `Run the job when I click Finish`{.action} checkbox.

![Summary](images/backup10.png){.thumbnail}

Click the `Finish`{.action} button to conclude setting up the backup job. This will open a new window where you can view the details of the backup being performed.

![backup details](images/backup11.png){.thumbnail}

Once the job is complete, you will have created your backup.

For information about restoring a Bare Metal Server, please check out our [Restoring a Bare Metal Server with Veeam Enterprise](/pages/bare_metal_cloud/dedicated_servers/veeam-enterprise-server-restore) guide.

## Go further

Join our [community of users](/links/community).
