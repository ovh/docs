---
title: 'Resetting a Windows password'
slug: repairing-the-grub-bootloader
excerpt: 'Guide to resetting a Windows password'
section: Tutorials
---

**Last updated 25rd November 2020**

## Objective

In some cases you might need to reset a Windows password. This guide will show you how to easily reset the password in your Windows install and successfully login your instance.

## Requirements

- The instance must be in rescue mode (see [Putting an instance in rescue mode](../put_an_instance_in_rescue_mode)).

## Instructions

Connect to the instance via VNC in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager) with the login details you would have recieved by e-mail.

Type the following commands to mount the remote file system:

```sh
ntfsfix /dev/sdb2
mount -t ntfs-3g /dev/sdb2 /mnt
```

Now start the password reset procedure :

```sh
cd /mnt/Windows/System32/config
chntpw -l SAM
```

You will see a list of users. Take note of the administrator account (or the account you wish to change the password). In this example, we will use `Administrator`. Please note that the commands are case-sensitive.

```sh
chntpw -u Administrator SAM
```

Press `1` and `Enter` to clear the password. Press `q` to quit the password change prompt. Afterwards, press `y` to write the changes to the hive.

You can now leave the rescue mode and boot normally (see [Putting an instance in rescue mode](../put_an_instance_in_rescue_mode)).

When logging in to your instance, you will not have to enter a password to log into a Windows session.

> [!warning]
>
> It is extremely unsafe to leave the Administrator account (or any account with administrative privileges) password blank. Please login immediately to your instance and change the password right away.
>

Once logged in to your Windows session, press `CTRL` + `ALT` + `DELETE` and then click on `Reset a password`. If you are using a VNC, click on the button on the top right that says `Send CtrlAltDel`.

Leave the `Old password` field blank and type your new password twice. Make sure the passwords provided match.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
