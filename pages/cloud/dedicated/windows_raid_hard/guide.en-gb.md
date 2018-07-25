---
title: 'Creating a Windows partition on a server with hardware RAID'
slug: windows-raid-hard
excerpt: 'This guide will explain the steps needed to create a Windows partition on a server with hardware RAID.'
section: 'Server Management'
---

**Last updated 24th July 2018**

## Objective

When you install Windows on a server with a hardware RAID configuration, the RAID partition will need to be built manually.

**This guide will explain the steps needed to create a Windows partition on a server with hardware RAID.**

## Requirements

- a [Dedicated Server](https://www.ovh.co.uk/dedicated_servers/){.external} with Windows installed and a hardware RAID card (LSI MegaRaid)
- at least two identical disks
- access to the [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}

## Instructions

> [!warning]
>
> Following the steps in this guide will require you to delete and rebuild the existing RAID volume. This means that all the existing data will be lost. Be sure to make a backup of your data beforehand. This guide is for experienced users.
> 

### List the existing RAID volumes
First, we need to list the existing RAID volumes so that we can delete them. To do this, we will use the following command: `MegaCli -LDInfo -Lall -aAll`{.action}.

```sh
# root@rescue:~# MegaCli -LDInfo -Lall -aAll
 
Adapter 0 -- Virtual Drive Information:
Virtual Drive: 0 (Target Id: 0)

Name                 :
RAID Level           : Primary-5, Secondary-0, RAID Level Qualifier-3
Size                 : 3.637 TB
Sector Size          : 512
Is VD emulated       : No
Parity Size          : 1.818 TB
State                : Optimal
Strip Size           : 256 KB
Number Of Drives     : 3
Span Depth           : 1
Default Cache Policy : WriteBack, ReadAhead, Direct, No Write Cache if Bad BBU
Current Cache Policy : WriteBack, ReadAhead, Direct, No Write Cache if Bad BBU
Default Access Policy: Read/Write
Current Access Policy: Read/Write
Disk Cache Policy    : Disk's Default
Encryption Type      : None
Bad Blocks Exist     : No
PI type              : No PI
 
Is VD Cached: No
 
Exit Code: 0x00
```

We can see in the results above that we currently have only one RAID volume on the server, and that the server has the **Virtual Drive** `0`.

### Deleting the RAID
We can now break the existing RAID and then create our new RAID.

To do this, we will use the command below. We will need to use the **Virtual Drive** number found in the previous step.

`MegaCli -CfgLDDel -Lx -a0`{.action}

`x` is the number of the **Virtual Drive**.

Example:

```sh
# root@rescue:~# MegaCli -CfgLDDel -L0 -a0
 
Adapter 0: Deleted Virtual Drive-0(target id-0)
 
Exit Code: 0x00
```

> [!primary]
>
> If your server already has more than one RAID, repeat the operation with each **Virtual Drive** number.
> 


### Find the disk IDs
We will now retrieve the **Enclosure ID** and the **SlotID** of the disks on the server to create our new RAID.

To do this, we will use the following command: `MegaCli -PdList -aALL | egrep -i "Adapter|Slot|Enclosure Device"`{.action}.

Example:

```sh
# root@rescue:~# MegaCli -PdList -aALL | egrep -i "Adapter|Slot|Enclosure Device"
Adapter #0
Enclosure Device ID: 252
Slot Number: 0
Enclosure Device ID: 252
Slot Number: 1
Enclosure Device ID: 252
Slot Number: 2
```

We can see that we have three disks. The **Enclosure ID** and **SlotIDs** are 252:0, 252:1, and 252:2 respectively.

### Create the new RAID
First, we will create the first RAID that will be used for our operating system.

We will use the following command: `MegaCli -CfgLdAdd -rX[EncID:SlotID,EncID:SlotID,...] -szYYYYY -a0`{.action}.

`X` is the desired RAID level (0, 1, 5, or 6).

`EncID` is the enclosure ID of the disk found in the previous step.

`SlotID` is the SlotIDs of the the disk found in the previous step.

`YYYYY` is the size of our first virtual disk specified in MB.

In our example, we will create a RAID-5 volume on our three disks, with 200GB for our operating system.

> [!primary]
>
> It is advisable to create a volume with a little more space than the minimum size required. This is to ensure that the the system has room for updates and installations.
> 

```sh
# root@rescue:~# MegaCli -CfgLdAdd -r5[252:0,252:1,252:2] -sz204800 -a0
 
Adapter 0: Created VD 0
 
Adapter 0: Configured the Adapter!!
 
Exit Code: 0x00 
```

Here, our first RAID has been created. Now we just have to assign the rest of the available space.

We will therefore create a second RAID via the following command: `MegaCli -CfgLdAdd -rX[EncID:SlotID,EncID:SlotID,...] -a0`{.action}.

`X` is the desired RAID level (0, 1, 5, or 6).

`EncID` is the enclosure ID of the disk found in the previous step.

`SlotID` is the SlotIDs of the the disk found in the previous step.

Example:

```sh
# root@rescue:~# MegaCli -CfgLdAdd -r5[252:0,252:1,252:2] -a0
 
Adapter 0: Created VD 1
 
Adapter 0: Configured the Adapter!!
 
Exit Code: 0x00 
```

It's done. Now all we have to do is check our RAID.


### Check the RAID's creation
We will use the first command in this guide, which lists the RAID volumes: `MegaCli -LDInfo -Lall -aALL`{.action}.

Example:

```sh
root@rescue:~# MegaCli -LDInfo -Lall -aAll

Adapter 0 -- Virtual Drive Information:
Virtual Drive: 0 (Target Id: 0)

Name                 :
RAID Level           : Primary-5, Secondary-0, RAID Level Qualifier-3
Size                 : 200.195 GB
Sector Size          : 512
Is VD emulated       : No
Parity Size          : 100.097 GB
State                : Optimal
Strip Size           : 256 KB
Number Of Drives     : 3
Span Depth           : 1
Default Cache Policy : WriteBack, ReadAhead, Direct, No Write Cache if Bad BBU
Current Cache Policy : WriteBack, ReadAhead, Direct, No Write Cache if Bad BBU
Default Access Policy: Read/Write
Current Access Policy: Read/Write
Disk Cache Policy    : Disk's Default
Encryption Type      : None
Bad Blocks Exist     : No
PI type              : No PI
 
Is VD Cached: No

Virtual Drive: 1 (Target Id: 1)

Name                 :
RAID Level           : Primary-5, Secondary-0, RAID Level Qualifier-3
Size                 : 3.441 TB
Sector Size          : 512
Is VD emulated       : No
Parity Size          : 1.720 TB
State                : Optimal
Strip Size           : 256 KB
Number Of Drives     : 3
Span Depth           : 1
Default Cache Policy : WriteBack, ReadAhead, Direct, No Write Cache if Bad BBU
Current Cache Policy : WriteBack, ReadAhead, Direct, No Write Cache if Bad BBU
Default Access Policy: Read/Write
Current Access Policy: Read/Write
Disk Cache Policy    : Disk's Default
Encryption Type      : None
Bad Blocks Exist     : No
PI type              : No PI
 
Is VD Cached: No
 
Exit Code: 0x00
```

We can also use the command `fdisk -l`{.action} to view our two RAID volumes.

```sh
# root@rescue:~# fdisk -l
 
Disk /dev/sda: 200.2 GiB, 214958080000 bytes, 419840000 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
 
Disk /dev/sdb: 3.5 TiB, 3784730214400 bytes, 7392051200 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes 
```

### Installing Windows from the OVH Control Panel
Finally, go to the OVH Control Panel to proceed with the installation of Windows on your server.

You will need to check the `Customize partition configuration`{.action} box, and change the current partition scheme to one specifying disk **C**, with a maximum size of 200GB.

Once the system is installed, log in to your Windows system and open up the utility `Disk Management`{.action}, and then partition the second virtual disk (corresponding to our second RAID, which is displayed as "unallocated") in the format GPT.

## Go further

[Hardware RAID](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external}.

Join our community of users on <https://community.ovh.com/en/>.