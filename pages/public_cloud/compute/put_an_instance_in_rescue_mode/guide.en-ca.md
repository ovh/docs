---
title: "How to activate rescue mode on a Public Cloud instance"
excerpt: "Find out how to enable and use the OVHcloud rescue mode for your Public Cloud instance"
updated: 2024-06-03
---

## Objective

Your Public Cloud instance may become inaccessible due to a lost SSH key or configuration errors.

In such circumstances, you can use the rescue mode to reconfigure your instance or to recover your data. 

**This guide explains how to restart your OVHcloud Public Cloud instance into rescue mode and access your files.**

## Requirements

- A [Public Cloud instance](/links/public-cloud/public-cloud) in your OVHcloud account
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

> [!alert]
>
> To date, rescue mode for Metal instances cannot be accessed via the OVHcloud Control Panel. For more information, please refer to our guide on [rescue mode for Metal instances](/pages/public_cloud/compute/rescue_mode_metal_instance).

### Step 1: Activating rescue mode

Log in to the [OVHcloud Control Panel](/links/manager) and open your `Public Cloud`{.action} project. Then click on `Instances`{.action} in the left-hand menu.

Click on `...`{.action} in the row of the instance concerned and select `Reboot in rescue mode`{.action}.

![control panel](images/rescue2022.png){.thumbnail}

You will now see the `Reboot in rescue mode` dialog box. Click the drop-down list to select the distribution you would like to use in rescue mode and then click the `Restart`{.action} button.

![control panel](images/rescue2.png){.thumbnail}

Once your instance has been rebooted in rescue mode, an information box will display the available ways of access. 

![control panel](images/rescuedata.png){.thumbnail}

Your temporary **rescue mode password** will only be shown in the VNC console. Click on your instance in the table, then switch to the tab `VNC console`{.action} to retrieve it.

<table><tbody><tr><td><img alt="VNC console" class="thumbnail" src="/images/vncconsole.png" loading="lazy"></td><td><img alt="VNC rescue" class="thumbnail" src="/images/vncrescue.png" loading="lazy"></td></tr></tbody></table>

### Step 2: Accessing your data

When rescue mode has been activated, your instance's data will be attached as an additional disk. You will now need to mount it, by taking the following steps.

Establish an [SSH connection](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) to your instance. Once you are connected, verify the available disks with this command:

```bash
lsblk
```

The result will look similar to the following example output:

```console
NAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS
sda       8:0    0  2.9G  0 disk
└─sda1    8:1    0  2.9G  0 part /
sdb       8:16   0   25G  0 disk
├─sdb1    8:17   0   24G  0 part
├─sdb14   8:30   0    4M  0 part
├─sdb15   8:31   0  106M  0 part
└─sdb16 259:0    0  913M  0 part
```

In rescue mode, `sda` is the rescue mode disk and `sda1` is the primary rescue partition mounted on `/`.

In this example, the primary disk is `sdb` and the system partition is `sdb1` (indicated by the size).

Mount this partition with the following command:

```bash
mount /dev/sdb1 /mnt/
```

Your data will now be accessible from the `/mnt` folder.

### Step 3: Deactivating rescue mode

Once you have completed your tasks, you can deactivate rescue mode by rebooting your instance from the Control Panel interface. To execute this, click on `...`{.action} and select `Exit rescue mode`{.action}.

![control panel](images/rescueexit2022.png){.thumbnail}

> [!warning]
> If the `Exit rescue mode`{.action} button is not displayed while the instance is in rescue mode, we recommend that you refresh your browser tab.
>

### Activating rescue mode using the OpenStack API

You can also activate rescue mode via the OpenStack API using the following command:

```bash
nova rescue INSTANCE_ID
```

To exit rescue mode, use the following command:

```bash
nova unrescue INSTANCE_ID
```

## Go further

[How to replace an SSH key pair on an instance](/pages/public_cloud/compute/replacing_lost_ssh_key)

Join our [community of users](/links/community).
