---
title: "Retrieving databases in rescue mode"
excerpt: "Find out how to access and save your databases using rescue mode"
updated: 2023-04-13
---

**Last updated 13th April 2023**

## Objective

With rescue mode, you can always access your data, even if the server's OS or the software hosted on the server is no longer working.

**This tutorial explains how to access a system in rescue mode and retrieve database files.**

## Requirements

- A [dedicated server](https://www.ovhcloud.com/en-au/bare-metal/), a [VPS](https://www.ovhcloud.com/en-au/vps/) or a [Public Cloud instance](https://www.ovhcloud.com/en-au/public-cloud/) in your OVHcloud account (excluding Windows systems)
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au)

> [!warning]
>OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. It is therefore your responsibility to ensure that they function correctly.
>
>This tutorial is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a [specialist service provider](https://partner.ovhcloud.com/en-au/directory/) or reach out to [our community](https://community.ovh.com/en/) if you face difficulties or doubts concerning the administration, usage or implementation of services on a server.
>

## Instructions

### Rebooting your server into rescue mode

Follow the respective guide to put your OVHcloud service into rescue mode:

- [Dedicated server](/pages/cloud/dedicated/rescue_mode)
- [VPS](/pages/cloud/vps/rescue)
- [Public Cloud instance](/pages/platform/public-cloud/put_an_instance_in_rescue_mode)

Follow the instructions in [this section](#pci) for a **VPS** or a **Public Cloud instance**. Skip to the [subsequent section](#dedicated) for a **dedicated server**. 

### Accessing your data on a VPS or a Public Cloud instance <a name="pci"></a>

First we need to identify the mount point containing the `/` of our system.

To do this, you can use the commands `lsblk` and `fdisk -l`.

- **lsblk** example output:

```output
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0   10G  0 disk
└─sdb1   8:17   0   10G  0 part
```
 
- **fdisk -l** example output:

```output
Disk /dev/sdb: 10 GiB, 10737418240 bytes, 20971520 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x961fcb1c
 
Device     Boot Start      End  Sectors Size Id Type
/dev/sdb1  *     2048 20971486 20969439  10G 83 Linux
 
 
Disk /dev/sda: 2.5 GiB, 2621440000 bytes, 5120000 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0xaf5119d2
 
Device     Boot Start     End Sectors  Size Id Type
/dev/sda1  *     2048 5117951 5115904  2.5G 83 Linux
```

> [!primary]
>
> The following code sections are for the purpose of illustration only, based on the example output above. You will need to adjust the instructions according to your actual configuration by replacing the values in the commands with your disk and volume identifiers.
>

In this example the primary disk (10 GB) is named "sdb". Our data in `/` is therefore located on the partition `/dev/sdb1`. (Whereas "sda" is the rescue mode disk and "sda1" is the primary rescue partition mounted on `/`.)

We mount the system partition in the folder `/mnt` and then verify its content:

```shell-session
root@rescue:~# mount /dev/sdb1 /mnt
root@rescue:~# ls /mnt
bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@rescue:~#
```

In order to launch services on the system from rescue mode, you will need to mount these partitions as well:

```shell-session
root@rescue:~# mount -o rbind /dev /mnt/dev
root@rescue:~# mount -t proc proc /mnt/proc
root@rescue:~# mount -t sysfs sys /mnt/sys
 
root@rescue:~# mount | grep /mnt
/dev/sdb1 on /mnt type ext4 (rw,relatime,data=ordered)
udev on /mnt/dev type devtmpfs (rw,nosuid,relatime,size=990236k,nr_inodes=247559,mode=755)
devpts on /mnt/dev/pts type devpts (rw,nosuid,noexec,relatime,gid=5,mode=620,ptmxmode=000)
tmpfs on /mnt/dev/shm type tmpfs (rw,nosuid,nodev)
hugetlbfs on /mnt/dev/hugepages type hugetlbfs (rw,relatime)
mqueue on /mnt/dev/mqueue type mqueue (rw,relatime)
proc on /mnt/proc type proc (rw,relatime)
sys on /mnt/sys type sysfs (rw,relatime)
```

Continue with the [database retrieval section below](#databases).
 
### Accessing your data on a dedicated server (software RAID configuration) <a name="dedicated"></a>

First we need to identify the mount point containing the `/` of our system.

To do this, you can use the commands `lsblk` and `fdisk -l`.

Example output:

```shell-session
root@rescue:~# fdisk -l
```
```output
Disk /dev/sda: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 5E158D46-2A45-42C9-8089-697BE070F669
 
Device          Start        End    Sectors    Size Type
/dev/sda1          40       2048       2009 1004.5K BIOS boot
/dev/sda2        4096    1050623    1046528    511M Linux RAID
/dev/sda3     1050624   42008575   40957952   19.5G Linux RAID
/dev/sda4    42008576 3905972223 3863963648    1.8T Linux RAID
/dev/sda5  3905972224 3907018751    1046528    511M Linux swap
 
Disk /dev/sdb: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 8039EE93-AB98-4EA1-B316-74EE89EF5EB6
 
Device          Start        End    Sectors    Size Type
/dev/sdb1          40       2048       2009 1004.5K BIOS boot
/dev/sdb2        4096    1050623    1046528    511M Linux RAID
/dev/sdb3     1050624   42008575   40957952   19.5G Linux RAID
/dev/sdb4    42008576 3905972223 3863963648    1.8T Linux RAID
/dev/sdb5  3905972224 3907018751    1046528    511M Linux swap
 
Disk /dev/md4: 1.8 TiB, 1978349322240 bytes, 3863963520 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk /dev/md3: 19.5 GiB, 20970405888 bytes, 40957824 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk /dev/md2: 511 MiB, 535756800 bytes, 1046400 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

> [!primary]
>
> The following code sections are for the purpose of illustration only, based on the example output above. You will need to adjust the instructions according to your actual configuration by replacing the values in the commands with your disk and volume identifiers.
>

In this example, our data in `/` is located on the volume `/dev/md3`.

We mount the system partition in the folder `/mnt` and then verify its content:

```shell-session
root@rescue:~# mount /dev/md3 /mnt
root@rescue:~# ls /mnt
bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@rescue:~#
```

In order to launch services on the system from rescue mode, you will need to mount these partitions as well:

```shell-session
root@rescue:~# mount -o rbind /dev /mnt/dev
root@rescue:~# mount -t proc proc /mnt/proc
root@rescue:~# mount -t sysfs sys /mnt/sys
 
root@rescue:~# mount | grep /mnt
/dev/md3 on /mnt type ext4 (rw,relatime,data=ordered)
devtmpfs on /mnt/dev type devtmpfs (rw,relatime,size=16412720k,nr_inodes=4103180,mode=755)
tmpfs on /mnt/dev/shm type tmpfs (rw,nosuid,nodev)
devpts on /mnt/dev/pts type devpts (rw,nosuid,noexec,relatime,gid=5,mode=620,ptmxmode=000)
hugetlbfs on /mnt/dev/hugepages type hugetlbfs (rw,relatime)
mqueue on /mnt/dev/mqueue type mqueue (rw,relatime)
proc on /mnt/proc type proc (rw,relatime)
sys on /mnt/sys type sysfs (rw,relatime)
```

 
### Retrieving the databases <a name="databases"></a>

With all the necessary partitions mounted, we need to be able to execute commands on the actual system. You can do this by using the `chroot` command:

```shell-session
root@rescue:~# chroot /mnt/
root@rescue:/#
```
From this point on, all commands that you enter will be applied to your system instead of the temporary rescue mode environment.

We can now start the `mysql` service:

```shell-session
root@rescue:/# service mysql start
[ ok ] Starting MariaDB database server: mysqld ..
root@rescue:/#
```

Use the command `mysqldump` to save the database as a file:

```shell-session
root@rescue:/# mysqldump -u root -p scarif > /home/dump.sql
Enter password:
root@rescue:/#
```

In this case, the `mysql` user logging in to the database is `root`. The option `-p` allows you to enter the password of `root` and the recovered database is named `scarif`.

The database file is then saved into the `/home` directory under the name `dump.sql`.

You can also back up all databases at once:

```shell-session
root@rescue:/# mysqldump -u root -p --all-databases > alldb.sql
Enter password:
root@rescue:/#
```

Listing the contents of `/home` shows both database files created by the previous commands:

```shell-session
root@rescue:/# ls /home
alldb.sql  dump.sql
```

In case of corrupted tables, this command can be used for repair:

```shell-session
root@rescue:/# mysqlcheck -u root -p Password_Root_MySQL --auto-repair --optimize --all-databases
```

From the `/home` folder, you can now send your backup files to a remote server. This example uses the file transfer utility `scp`:

```shell-session
root@rescue:/# scp -P SSH_Port_Number dump.sql user@IP_address:/home/backup
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.
