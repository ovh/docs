---
title: 'Resetting a Windows password'
slug: resetting-a-windows-password-pci
routes:
    canonical: 'https://docs.ovh.com/au/en/vps/resetting-a-windows-password-vps'
excerpt: 'Guide to resetting a Windows password'
section: Tutorials
updated: 2020-11-25
---

**Last updated 25th November 2020**

## Objective

In some cases you might need to reset a Windows password. This guide will show you how to reset the password of your Windows user account and successfully log in to your instance again.

## Requirements

- The instance must be in rescue mode (see [Putting an instance in rescue mode](../put_an_instance_in_rescue_mode)).

## Instructions

Connect to the instance via VNC in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au) with the login details you have received by email.

Type the following commands to mount the remote file system:

```sh
ntfsfix /dev/sdb2
mount -t ntfs-3g /dev/sdb2 /mnt
```

Now start the password reset procedure:

```sh
cd /mnt/Windows/System32/config
chntpw -l SAM
```

You will see a list of users. Take note of the administrator account (or the account you wish to change the password for). In this example, we will use `Administrator`. Please note that the commands are case-sensitive.

```sh
chntpw -u Administrator SAM
```

Press `1` and `Enter` to clear the password. Press `q` to quit the password change prompt. Afterwards, press `y` to write the changes to the file.

You can now leave the rescue mode and reboot normally (see [Putting an instance in rescue mode](../put_an_instance_in_rescue_mode)).

When logging in to your instance now, you will not have to enter a password to log in to a Windows session.

> [!warning]
>
> It is extremely unsafe to leave the Administrator account (or any account with administrative privileges) password blank. Please log in immediately to your instance and change the password.
>

Once logged in to your Windows session, press `CTRL` + `ALT` + `DELETE` and then click on `Change a password`. If you are using the VNC console, click on the button on the top right that says `Send CtrlAltDel`.

Leave the `Old password` field blank and type your new password twice. Make sure the passwords provided match.

## Go further

Join our community of users on <https://community.ovh.com/en/>.