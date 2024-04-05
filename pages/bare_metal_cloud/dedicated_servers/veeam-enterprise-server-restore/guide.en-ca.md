---
title: Restoring a Bare Metal Server with Veeam Enterprise
excerpt: Learn how to restore a Bare Metal Server using the Veeam Backup & Replication application
updated: 2024-04-05
---

## Objective

If you are unable to restore data from a backup, it serves no purpose. After reading this article, you should have a clear process for restoring a Bare Metal Server or an individual file using Veeam Backup & Replication.

**Learn how to restore a Bare Metal Server using the Veeam Backup & Replication application.**

## Requirements

- An [OVHcloud Bare Metal server](https://www.ovhcloud.com/en-ca/bare-metal/)
- [Veeam Backup & Replication installed and registered](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_veeam_backup_replication)

> [!primary]
> This guide presupposes that you have followed the steps detailed in our [Backing up a Bare Metal Server guides](/products/bare-metal-cloud-dedicated-servers-backup-restore).

## Instructions

There are several options for restoring data on a server. In this guide, we will be showing you the "Guest files restore" option.

In the Veeam Backup & Replication application, from the `Home`{.action} tab, click `Restore`{.action} and select the `Agent...`{.action} option.

![Home - restore job](images/DS_restore_Veeam01.png){.thumbnail}

In the pop-up window, select `Guest files restore`{.action}.

![Guest files restore](images/DS_restore_Veeam02.png){.thumbnail}

Choose the operating system of the machine from which you are restoring.

![OS choice](images/DS_restore_Veeam03.png){.thumbnail}

Select the **Machine** that has the files you wish to restore.

Click the `Next`{.action} button.

![machine choice](images/DS_restore_Veeam04.png){.thumbnail}

Choose the **Restore Point** from which to restore the files.

Click the `Next`{.action} button.

![restore point choice](images/DS_restore_Veeam05.png){.thumbnail}

Enter the **Restore reason**.

Click the `Next`{.action} button.

![restore reason](images/DS_restore_Veeam06.png){.thumbnail}

At the Summary section, click the `Browse`{.action} button.

![summary](images/DS_restore_Veeam07.png){.thumbnail}

Navigate through the browser and choose the file or files that you wish to restore. Once you have selected the file(s), right-click on one of them, hover your mouse over `Restore`.action}, and select `Keep`.action}.

![select files](images/DS_restore_Veeam08.png){.thumbnail}

A pop-up window will appear that displays the progress of the restore. Once the progress is complete, the file has been restored and you can close the "Backup Browser" window.

![restore progress](images/DS_restore_Veeam09.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.
