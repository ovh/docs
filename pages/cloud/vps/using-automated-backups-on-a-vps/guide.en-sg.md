---
title: 'Using automatic backups on a VPS'
slug: using-automated-backups-on-a-vps
excerpt: 'Find out how to enable and use the Automated Backup option in the OVHcloud Control Panel'
section: 'Backup options'
order: 2
---

**Last updated 22th April 2020**


## Objective

This option offers a convenient way to frequently have complete VPS backups available from your OVHcloud Control Panel without having to connect to the server to create and restore them manually. Another advantage is that you can also choose to mount a backup and then access it via SSH.

**This guide explains the usage of auto-backups for your OVHcloud VPS.**

> [!primary]
>
Before applying backup options, we recommend to consult the [product pages and FAQ](https://www.ovhcloud.com/en-sg/vps/options/) for pricing comparisons and further details.
>

## Requirements

- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager)
- an OVHcloud [VPS service](https://www.ovhcloud.com/en-sg/vps/) already set up
- administrative access (root) via SSH to your VPS (optional)

## Instructions

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager), navigate to the "Server" section, and select your server from the left-hand sidebar under `VPS`{.action}.

### Step 1: Subscribing to the Automated backups option

After selecting your VPS, click on the `Automated backup`{.action} tab in the horizontal menu.

In the next step, please take note of the pricing information, then click on `Order`{.action}. You will be guided through the order process and receive a confirmation email. Backups will now be created daily until the option is cancelled again.


### Step 2: Restoring a backup from the OVHcloud Control Panel

After selecting your VPS, click on the `Automated backup`{.action} tab in the horizontal menu. There will be a maximum of 15 daily backups available. Click on `...`{.action} next to the backup you would like to restore and select `Restoration`{.action}.

![autobackupvps](images/backup_vps_step1.png){.thumbnail}

If you recently changed your root password, make sure to tick the option "Modify the root password on restoration" in the popup window to preserve your current root password and click on `Confirm`{.action}. You will receive an email as soon as the task is complete. The restoration might take a while, depending on the disk space used.

> [!alert]
>
Please note that the automated backups will not include your additional disks.
>

### How to mount and access a backup

It is not necessary to completely overwrite your existing service with a restoration. The "Mounting" option allows you to access the backup data to retrieve your files. 

> [!warning]
>OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend contacting a specialised provider and/or the software publisher for the service if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the “Go further” section of this guide.
>

#### Step 1: Control Panel 

Click on `...`{.action} next to the backup you need to access and select `Mounting`{.action}.

![autobackupvps](images/backup_vps_step2.png){.thumbnail}

After the process is completed, you will receive an email. You can now connect to your VPS and add the partition where your backup is located.

#### Step 2: Secure Shell

First, connect to your VPS via SSH.

You can use the following command to verify the name of the newly attached device:

```
# lsblk
```

Here is a sample output of this command:

```
NAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda       8:0    0   25G  0 disk 
├─sda1    8:1    0 24.9G  0 part /
├─sda14   8:14   0    4M  0 part 
└─sda15   8:15   0  106M  0 part 
sdb       8:16   0   25G  0 disk 
├─sdb1    8:17   0 24.9G  0 part 
├─sdb14   8:30   0    4M  0 part 
└─sdb15   8:31   0  106M  0 part /boot/efi
sdc       8:32   0   50G  0 disk 
```
In this example, the partition containing your backup filesystem is named "sdb1".
Next, create a directory for this partition and define it as the mountpoint:

```
# mkdir -p /mnt/restore
# mount /dev/sdb1 /mnt/restore
```

You can now switch to this folder and access your backup data.


## Go further

[Using snapshots on a VPS](https://docs.ovh.com/sg/en/vps/using-snapshots-on-a-vps)


Join our community of users on <https://community.ovh.com/en/>.
