---
title: Activating and using rescue mode on a VPS
slug: rescue
excerpt: Find out how to activate and use rescue mode on a VPS
section: Diagnostics and rescue mode
---

**Last updated 2nd May 2022**

## Objective

Rescue mode is a tool provided by OVHcloud to boot your VPS into a temporary operating system. You can use it to diagnose and possibly resolve various issues on your primary OS.

Usual tasks the rescue mode is appropriate for include:

- Resetting your root password
- Diagnosing network problems
- Repairing a broken operating system
- Fixing a software firewall misconfiguration
- Testing disk performance

Performing checks in rescue mode helps to determine whether an issue is software-related or the hardware is at fault. We recommend doing this before contacting our support teams.

> [!warning]
>
> If you have any services still online, rescue mode will interrupt them as the machine is being rebooted into the auxiliary rescue environment.
>

**This guide explains how to activate and use the rescue mode on your VPS.**

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- An OVHcloud [VPS service](https://www.ovhcloud.com/en-gb/vps/) already set up

> [!warning]
>OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend contacting a specialised provider and/or the software publisher for the service if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the “Go further” section of this guide.
>

## Instructions

### Activating rescue mode

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), go to the `Bare Metal Cloud`{.action} section and select your server from `Virtual Private Servers`{.action}.

#### With a current VPS range

On the `Home`{.action} tab, click on `...`{.action} next to "Boot" in the **Your VPS** box.

![rescue mode control panel](images/rescue_new.png){.thumbnail}

Select `Reboot in rescue mode`{.action} from the menu and click `Confirm`{.action} in the popup window.

#### With older VPS ranges

On the `Home`{.action} tab, click on the shortcut link labelled `Reboot in rescue mode`{.action}.

![rescue mode control panel](images/rescue_legacy.png){.thumbnail}

In the popup window, click on `Confirm`{.action}.

### Using rescue mode

After you have initiated the reboot, a progress bar will show how the task is progressing. Note that this can take several minutes.

> [!primary]
>
> You will receive an automated email with the SSH credentials for rescue mode access. Please wait for the email to arrive before taking any further action. This email is also available in your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) when it is sent: Click on the name associated with your NIC handle (Customer ID) in the menu bar in the top right-hand corner, then select `Service emails`{.action}.
>

You will then need to access your server via the command line or an SSH tool, using the root password generated for the rescue mode.

For example:

```
ssh root@your_server_IP
root@your_server_password:
```
> [!warning]
> 
> Your SSH client will likely block the connection at first due to a mismatch of the ECDSA fingerprint. This is normal because the rescue mode uses its own temporary SSH server.
>
> One way around this is commenting the fingerprint of your regular system by adding a `#` in front of its line in the *known_hosts* file. Revert that change before returning to normal boot.
>

For most changes you make to your server via SSH while in rescue mode, you will need to mount a partition. This mode has its own temporary file system, so any file system changes you make in rescue mode will be lost once you reboot the server in normal mode.

Once you are connected, verify the available disks with this command:

```bash
[RESCUE] root@vps-111111d:~ $ lsblk
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0   80G  0 disk
└─sdb1   8:17   0   80G  0 part
```

Next, mount the partition:

```bash
[RESCUE] root@vps-111111d:~ $ mount /dev/sdb1 /mnt
```

Your data will now be accessible from the `/mnt` folder.

Once you have completed your actions in rescue mode, reboot the VPS again in 'normal' mode from the OVHcloud Control Panel.

![rescue mode control panel](images/rescue_exit.png){.thumbnail}

## Go further

[Changing your root password on a VPS](../root-password/)

[Introduction to SSH](../../dedicated/ssh-introduction/)

Join our community of users on <https://community.ovh.com/en/>.
