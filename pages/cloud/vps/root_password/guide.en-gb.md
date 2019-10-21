---
title: Changing your root password on a VPS
slug: root-password
excerpt: Learn how to change the root password of a VPS
section: Diagnostic and rescue mode
---

**Last updated 15th June 2019**

## Objective

It may happen that you need to change the root password on your Linux operating system at one point. In this guide we explore how to change the root password on a Linux operating system in the following scenarios:
- You know your root password, but you want to change it
- You have lost your root password and unable to login via SSH anymore

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

#### Requirements

- You must be connected via SSH to your VPS (root access).
- [Reboot your VPS in rescue mode](https://docs.ovh.com/gb/en/vps/rescue/).

<iframe width="560" height="315" src="https://www.youtube.com/embed/ua1qoTMq35g?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

#### Step 1: Ensure VPS is in rescue mode

If you have not rebooted the VPS into rescue mode yet, you may use the [rescue mode](https://docs.ovh.com/gb/en/vps/rescue/){.external} guide to help you to reboot it into rescue mode.

#### Step 2: Identify the mount point

The mount is created automatically on any VPS in the 2016 & 2018 range, so you just need to identify where your partition is mounted. To do this, you can use two commands:

##### df -h

```sh
df -h
Filesystem      Size  Used Avail Use% Mounted on
udev            5.8G     0  5.8G   0% /dev
tmpfs           1.2G   17M  1.2G   2% /run
/dev/sda1       2.4G  1.5G  788M  66% /
tmpfs           5.8G     0  5.8G   0% /dev/shm
tmpfs           5.0M     0  5.0M   0% /run/lock
tmpfs           5.8G     0  5.8G   0% /sys/fs/cgroup
/dev/sdb1        49G  1.2G   48G   3% /mnt/sdb1
/dev/sdb15      105M  3.6M  101M   4% /mnt/sdb15
```

##### lsblk

```sh
lsblk
NAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda       8:0    0  2.5G  0 disk
└─sda1    8:1    0  2.5G  0 part /
sdb       8:16   0   50G  0 disk
├─sdb1    8:17   0 49.9G  0 part /mnt/sdb1
├─sdb14   8:30   0    4M  0 part
└─sdb15   8:31   0  106M  0 part /mnt/sdb15
```

The image above shows that your system partition is mounted on **/mnt/sdb1**.

#### Step 3: CHROOT permissions

You now need to edit the root directory, for the changes to be applied to your system. You can do this by using the chroot command. Please enter the following command:

```sh
chroot /mnt/sdb1/
```

You can check by typing the `ls -l` command, which will list the content stored in the root directory of your system:

```sh
ls -l
```

#### Step 4: change the root password

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

### Troubleshooting

After you have changed your password and rebooted the VPS from the control panel and you cannot, you should try the following:

- You should check the KVM. It can show some very important information as to why it cannot start. The [KVM guide](https://docs.ovh.com/gb/en/vps/use-kvm-for-vps/){.external} can provide you the help to find the KVM feature on the OVH control panel.
- If the KVM is showing it is booting or cannot find the disk, ensure you have [boot logs enabled](https://docs.ovh.com/gb/en/vps/use-kvm-for-vps/){.external} and contact OVH support via a ticket from the control panel or by calling.

## Go further

[Introduction to SSH](https://docs.ovh.com/gb/en/dedicated/ssh-introduction/)
[Activating rescue mode on VPS](https://docs.ovh.com/gb/en/vps/rescue/)

Join our user community on <https://community.ovh.com/en/>.
