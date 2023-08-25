---
title: 'Resetting a Windows password'
excerpt: 'Guide to resetting a Windows password'
updated: 2020-11-25
---


## Objective

In some cases you might need to reset a Windows password. This guide will show you how to reset the password of your Windows user account and successfully log in to your VPS again.

## Requirements

- The VPS must be in rescue mode (see [Activating rescue mode on a VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)).

## Instructions

Connect to the VPS via VNC in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) with the login details you have received by email.

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

You can now leave the rescue mode and reboot normally (see [Activating rescue mode on a VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)).

When logging in to your VPS now, you will not have to enter a password to log in to a Windows session.

> [!warning]
>
> It is extremely unsafe to leave the Administrator account (or any account with administrative privileges) password blank. Please log in immediately to your VPS and change the password.
>

Once logged in to your Windows session, press `CTRL` + `ALT` + `DELETE` and then click on `Change a password`. If you are using the VNC console, click on the button on the top right that says `Send CtrlAltDel`.

Leave the `Old password` field blank and type your new password twice. Make sure the passwords provided match.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
