---
title: Changing your root password on a VPS
slug: root-password
excerpt: Learn how to change the root password of a VPS
section: Diagnostic and rescue mode
---

**Last updated 27th June 2018**

## Objective

When you install or reinstall a distribution or operating system, you are provided with a root access password. We strongly recommend that you change it, as detailed in our guide on [securing a VPS](https://docs.ovh.com/gb/en/vps/tips-for-securing-a-vps/). You may also find that you have lost this password, and need to change it. This guide will take you through both scenarios.
Learn how to change the root password of a VPS.

## Requirements

- You must be connected via SSH to your VPS (root access).
- [Reboot your VPS in rescue mode](https://docs.ovh.com/gb/en/vps/rescue/).

<iframe width="560" height="315" src="https://www.youtube.com/embed/ua1qoTMq35g?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Instructions

### Change the password with root user account access

If you still have your current password, the process is simpler. Log in to your server, then type the following command:

```sh
passwd
```

You must then enter your new password for the first time, and confirm it. You will then receive the following confirmation:

```sh
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

> [!primary]
>
> On a Linux distribution, the password you enter **will not appear**.
> 

### Changing a password after you have lost it

#### Step 1: Identify the mount point

The mount is created automatically on any VPS in the 2016 range, so you just need to identify where your partition is mounted. To do this, you can use two commands:

##### df -h

```sh
root@rescue-pro:~# df -h
Size Used Avail Use% Mounted on
/dev/vda1 4.7G 1.3G 3.2G 29% /
udev 10M 0 10M 0% /dev
tmpfs 774M 8.4M 766M 2% /run
tmpfs 1.9G 0 1.9G 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 1.9G 0 1.9G 0% /sys/fs/cgroup
/dev/vdb1 20G 934M 18G 5% /mnt/vdb1
```

##### lsblk

```sh
root@rescue-pro:~# lsblk
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 254:0 0 4.9G 0 disk
└─vda1 254:1 0 4.9G 0 part /
vdb 254:16 0 20G 0 disk
└─vdb1 254:17 0 20G 0 part /mnt/vdb1
```

The image above shows that your system partition is mounted on **/mnt/vdb1**.


#### Step 2: CHROOT permissions

You now need to edit the root directory, for the changes to be applied to your system. You can do this by using the `chroot command. Please enter the following command:

```sh
root@rescue-pro:~# chroot /mnt/vdb1/
root@rescue-pro:/#
```

You can check by typing the `ls -l` command, which will list the content stored in the root directory of your system:

```sh
root@rescue-pro:/# ls -l
```

#### Step 3: change the root password

Now, you just need to change the root password with the `passwd` command:

```sh
passwd
```
```sh
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

Finally, reboot your VPS on its drive via your OVH Control Panel.

## Go further

[Introduction to SSH](https://docs.ovh.com/gb/en/dedicated/ssh-introduction/)
[Activating rescue mode on VPS](https://docs.ovh.com/gb/en/vps/rescue/)

Join our user community on <https://community.ovh.com/en/>.