---
title: 'Putting an instance in rescue mode'
slug: put_an_instance_in_rescue_mode
excerpt: 'Find out how to activate rescue mode for your Public Cloud instance'
legacy_guide_number: g2029
section: Management via Control Panel
order: 3
---

**Last updated 8th April 2020**

## Objective

Your Public Cloud instance may become inaccessible due to a lost SSH key or configuration errors.

In such circumstances, you can use the rescue mode to reconfigure your instance or to recover your data. 

**This guide will explain how to put your OVHcloud Public Cloud instance in rescue mode and access your data.**

## Requirements

- a [Public Cloud instance](https://www.ovhcloud.com/en-gb/public-cloud/) in your OVHcloud account
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager)
- administrative access (root) to your instance via SSH

## Instructions

### Step 1: Activating rescue mode

First, log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager), go to the `Public Cloud`{.action} section and select the Public Cloud service concerned. Then, click on the `Instances`{.action} tab in the left-hand navigation.

![control panel](images/compute.png){.thumbnail}

Next, click on `...`{.action} to the right of the instance and select `Reboot in rescue mode`{.action}

![control panel](images/rescue1.png){.thumbnail}

You will now see the 'Reboot in rescue mode' dialog box. Click the dropdown list to select the distribution you would like to use in rescue mode and then click the `Restart`{.action} button.

![control panel](images/rescue2.png){.thumbnail}

Once your instance has been rebooted in rescue mode, a message will appear at the top of the screen, containing your temporary password.

![control panel](images/rescuedata.png){.thumbnail}


### Step 2: Accessing your data

When rescue mode has been activated, your instance's data will be attached as an additional disk. You will now need to mount it, by taking the following steps.

First, establish an SSH connection to your instance. Once you are connected, verify the available disks with this command:

```
root@instance:/home/admin# lsblk

NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 253:0 0 1G 0 disk
└─vda1 253:1 0 1023M 0 part /
vdb 253:16 0 10G 0 disk
└─vdb1 253:17 0 10G 0 part
```

Next, mount the partition:

```
root@instance:/home/admin# mount /dev/vdb1 /mnt
```

Your data will now be accessible from the /mnt folder.

### Deactivating rescue mode

Once you have completed your tasks, you can deactivate rescue mode by rebooting your instance from the Control Panel interface. To execute this, click on on `...`{.action} and select `Exit rescue mode`{.action}.

![control panel](images/rescueexit.png){.thumbnail}

### Activating rescue mode using the OpenStack API

You can also activate rescue mode via the OpenStack API using the following command:

```
# root@server:~# nova rescue INSTANCE_ID
```

To exit rescue mode, use the following command:

```
# root@server:~# nova unrescue INSTANCE_ID
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.
