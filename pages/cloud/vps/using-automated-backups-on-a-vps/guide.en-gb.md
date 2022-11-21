---
title: 'Using automatic backups on a VPS'
slug: using-automated-backups-on-a-vps
excerpt: 'Find out how to enable and use the Automated Backup option in the OVHcloud Control Panel'
section: 'Backup options'
order: 2
---

**Last updated 15th November 2022**

## Objective

This option offers a convenient way to frequently have complete VPS backups available from your OVHcloud Control Panel without having to connect to the server to create and restore them manually. Another advantage is that you can also choose to mount a backup and then access it via SSH.

**This guide explains the usage of auto-backups for your OVHcloud VPS.**

> [!primary]
>
Before applying backup options, we recommend to consult the [product pages and FAQ](https://www.ovhcloud.com/en-gb/vps/options/) for pricing comparisons and further details.
>

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- An OVHcloud [VPS service](https://www.ovhcloud.com/en-gb/vps/) already set up
- Administrative access (root) via SSH to your VPS (optional)

## Instructions

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), open the `Bare Metal Cloud`{.action} section, and select your server under `Virtual Private Servers`{.action}.

### Step 1: Activating the automated backup option

After selecting your VPS, click on the `Automated backup`{.action} tab in the horizontal menu.

In the next step, please take note of the pricing information, then click on `Order`{.action}. You will be guided through the order process and receive a confirmation email. Backups will now be created daily until the option is cancelled again.

#### Configuring the backup time

You can change the time of day at which the backup will take place. 

Click on `...`{.action} above the table and then on `Edit`{.action}.

![autobackupvps](images/backup_vps_time01.png){.thumbnail}

In the window that appears, edit the time of day (24-hour UTC time standard). Click on `Confirm`{.action}.

![autobackupvps](images/backup_vps_time02.png){.thumbnail}

> [!primary]
>
Once confirmed in the Control Panel, the change will come into effect after 24 to 48 hours.
>

### Step 2: Restoring a backup from the OVHcloud Control Panel

After selecting your VPS, click on the `Automated backup`{.action} tab in the horizontal menu. There will be a maximum of 7 daily backups available (15 with older VPS ranges). Click on `...`{.action} next to the backup you would like to restore and select `Restoration`{.action}.

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

Click on `...`{.action} next to the backup you need to access and select `Mounting`{.action}.

![autobackupvps](images/backup_vps_step2.png){.thumbnail}

When you use this option, a read-write copy of the backup is created and mounted. The original backup will remain available unchanged for future restorations.

After the process is completed, you will receive an email. You can now connect to your VPS and access the partition where your backup is located.

#### Using Secure Shell

First, connect to your VPS via SSH.

You can use the following command to verify the name of the newly attached device:

```
$ lsblk
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
```

In this example, the partition containing your backup filesystem is named "sdb1".
Next, create a directory for this partition and define it as the mountpoint:

```
$ mkdir -p /mnt/restore
$ mount /dev/sdb1 /mnt/restore
```

You can now switch to this folder and access your backup data.
                                        
#### Using Windows

Establish an RDP connection to your server. Once logged in, right-click on the `Start Menu`{.action} button, and then click `Disk Management`{.action}.

![disk management](images/windowsbackup1.png){.thumbnail}

When the disk management tool opens, your mounted backup will appear as a basic disk with the same storage space as your main disk.

![mounted backup](images/windowsbackup2.png){.thumbnail}

The disk will appear as `Offline`, right-click on the disk and select `Online`{.action}.

![online backup](images/windowsbackup3.png){.thumbnail}

Once done, your mounted backup will be accessible in the `File Explorer`.

![file explorer](images/windowsbackup4.png){.thumbnail}

> [!warning]
> Please note that a server reboot will occur when the backup is unmounted.
>  

### Best practice for using auto-backups

The Automated Backup functionality is based on VPS snapshots. We recommend to follow the steps below to prevent any issues before using this option.

#### Configuring the QEMU agent on a VPS

Snapshots are instantaneous images of your running system ("live snapshot"). To ensure the availability of your system when the snapshot is created, the QEMU agent is used to prepare the filesystem for the process.

The required *qemu-guest-agent* is not installed by default on most distributions. Moreover, licensing restrictions may prevent OVHcloud from including it in the available OS images. Therefore, it is best practice to verify and install the agent in case it is not activated on your VPS. Connect to your VPS via SSH and follow the instructions below, according to your operating system.

##### **Debian-based distributions (Debian, Ubuntu)**

Use the following command to check whether the system is properly set up for snapshots:

```
$ file /dev/virtio-ports/org.qemu.guest_agent.0
/dev/virtio-ports/org.qemu.guest_agent.0: symbolic link to ../vport2p1
```

If the output is different ("No such file or directory"), install the latest package:

```
$ sudo apt-get update
$ sudo apt-get install qemu-guest-agent
```

Reboot the VPS:

```
$ sudo reboot
```

Start the service to ensure it is running:

```
$ sudo service qemu-guest-agent start
```

##### **Redhat-based distributions (Centos, Fedora)**

Use the following command to check whether the system is properly set up for snapshots:

```
$ file /dev/virtio-ports/org.qemu.guest_agent.0
/dev/virtio-ports/org.qemu.guest_agent.0: symbolic link to ../vport2p1
```

If the output is different ("No such file or directory"), install and enable the agent:

```
$ sudo yum install qemu-guest-agent
$ sudo chkconfig qemu-guest-agent on
```

Reboot the VPS:

```
$ sudo reboot
```

Start the agent and verify that it is running:

```
$ sudo service qemu-guest-agent start
$ sudo service qemu-guest-agent status
```

##### **Windows**

You can install the agent via MSI file, available from the Fedora project website: <https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/latest-qemu-ga/>

Verify that the service is running by using this powershell command:

```
PS C:\Users\Administrator> Get-Service QEMU-GA
Status   Name               DisplayName
------   ----               -----------
Running  QEMU-GA            QEMU Guest Agent
```

## Go further

[Using snapshots on a VPS](../using-snapshots-on-a-vps)

Join our community of users on <https://community.ovh.com/en/>.
