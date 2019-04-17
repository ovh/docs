---
title: 'Replacing a defective disk'
slug: disk-replacement
excerpt: 'Find out how to identify a defective disk, and request a replacement'
section: 'Server Management'
---

**Last updated 21st June 2018**

## Objective

If you notice that a disk is faulty, or receive a notification email about a faulty disk, you must take the measures required to replace it as soon as possible.

**This guide explains how to identify a defective disk, and how to request a disk replacement from our teams.**

> [!warning]
>
> OVH is providing you with services that you will be responsible for. We have no access to these machines, and therefore cannot manage them, so we cannot provide administrative assistance. You are responsible for your own software and security management.
> 
> This guide is designed to assist you in common tasks as much as possible. However, we recommend that you call upon a specialist service provider if you experience any issues or doubts when it comes to managing, using or securing your server. You can find more information in the “Go further” section of this guide.
> 


## Requirements

- a [Dedicated Server](https://www.ovh.co.uk/dedicated_servers/){.external}
- administrative (root) access to the server via SSH

## Instructions

### Back up your data

Before you do anything else, **you will need to back up your data**. The sole purpose of RAID, apart from RAID 0, is to protect your data against disks that become faulty. Once a disk becomes unusable, all of your data is reliant on the remaining disk (or disks) working properly.

Although it’s rare to have two disks become faulty at the same time, it’s not impossible.

We will not carry out any disk replacements without:

- confirmation from you that you have backed up your data
- confirmation that you accept full knowledge of the risk of data loss as a result of disk replacement


### Detecting a defective disk

If you receive an email alert, or notice any signs that you might have a faulty disk, it is absolutely essential to check that all your disks are working properly. If two disks that make up part of the same RAID array seem to be faulty, we will replace the one that flags the highest number of errors as a priority.

#### Servers using soft RAID

If you have a server that uses soft RAID, please refer to the [software RAID](https://docs.ovh.com/gb/en/dedicated/raid-soft/){.external} guide to find the disks installed on your server.

Once you have found the access path for your disks, you can test them using the `smartctl` command, as follows:

```sh
smartctl -a /dev/sdX
```

> [!primary]
>
> Please remember to replace `/dev/sdX` with the access path to your disk, with sdX being the disk concerned, i.e. sdA, sdB, etc.
> 

By running this command, you can also retrieve the *Serial Number* of the disks that need to be replaced, so that you can give them to the technician.

Here is an example of a result that may be returned:

```sh
smartctl -a /dev/sda

>>> smartctl 5.41 2011-06-09 r3365 [x86_64-linux-3.14.32-xxxx-grs-ipv6-64] (local build)                                                                                          
>>> Copyright (C) 2002-11 by Bruce Allen, http://smartmontools.sourceforge.net

>>> === START OF INFORMATION SECTION ===
>>> Device Model:     TOSHIBA DT01ACA050
>>> Serial Number:    5329T58NS
>>> LU WWN Device Id: 5 000039 ff6d28993
>>> Firmware Version: MS1OA750
>>> User Capacity:    500 107 862 016 bytes [500 GB]
>>> Sector Sizes:     512 bytes logical, 4096 bytes physical
>>> Device is:        Not in smartctl database [for details use: -P showall]
>>> ATA Version is:   8
>>> ATA Standard is:  ATA-8-ACS revision 4
>>> Local Time is:    Thu Nov 24 15:51:25 2016 CET
>>> SMART support is: Available - device has SMART capability.
>>> SMART support is: Enabled
```

In this case, the line to look out for is as follows:

**`Serial Number:    5329T58N`**

#### Servers using hard RAID

If you have a server that uses hard RAID, please refer to the [hardware RAID](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external} guide, and use the appropriate procedure for your RAID controller type to find the access paths to your disks.

Once you have found the access path for your disks, you can test them using the `smartctl` command, as follows:

```sh
smartctl -d megaraid,N -a /dev/sdX
```

> [!primary]
>
> Please remember to replace `/dev/sdX` with the access path to your disk, with sdX being the disk concerned, i.e. sdA, sdB, etc.
> 


> [!warning]
>
> In some cases, the command may return the following message: `/dev/sda [megaraid_disk_00][SAT]: Device open changed type from 'megaraid' to 'sat'`.
> 
> In this case, you will need to replace `megaraid` with `sat+megaraid` as follows: `smartctl -d sat+megaraid,N -a /dev/sdX`.
> 

For LSI RAID cards, you can test the disks using the `smartctl` command, as follows:

```sh
smartctl -a /dev/sgY
```

You will need to specify the RAID number (/dev/sg0 = 1er RAID, /dev/sg1 = 2e RAID, etc.).


#### Servers with NVMe disks

If you have an NVMe disk, you will need to put the server into [rescue mode](https://docs.ovh.com/gb/en/dedicated/ovh-rescue/){.external}, on which the **nvme-cli** tool is installed by default.

You will then need to use the `nvme list` command, and retrieve your disks’ serial numbers:

```sh
root@rescue:~# nvme list
>>> Node           SN                  Model                 Namespace Usage                     Format        FW Rev
>>> -------------- ------------------- --------------------- --------- ------------------------- ------------- --------
>>> /dev/nvme0n1   CVPF636600YC450RGN  INTEL SSDPE2MX450G7   1         450.10  GB / 450.10  GB   512  B +  0 B MDV10253
>>> /dev/nvme1n1   CVPF6333002Y450RGN  INTEL SSDPE2MX450G7   1         450.10  GB / 450.10  GB   512  B +  0 B MDV10253
```

#### Check S.M.A.R.T logs in rescue mode
You can check S.M.A.R.T logs in web panel of rescue mode.To check how you can use rescue mode please follow [this guide](https://docs.ovh.com/gb/en/dedicated/ovh-rescue/){.external}



### Requesting a disk replacement

#### Cold-swapping the disk (server downtime required)

To request a disk replacement, you simply need to create a ticket through your [OVH Control Panel](https://www.ovh.com/manager/dedicated/index.html#/ticket){.external}. You can speed up the process by providing the information required for the tests. Below is a list of what you will need to provide:

- **The serial number of the disk that needs to be replaced, as well as the serial numbers for all other disks that are working properly**. To retrieve the serial number of the disk that needs to be replaced, please follow [this guide](https://docs.ovh.com/gb/en/dedicated/find-disk-serial-number/){.external}. If, for any reason, you are unable to retrieve the disk’s serial number, please let us know in the ticket, and list the serial numbers of the disks that don’t need to be replaced. 

As a reminder, it’s important to include the serial numbers of all the disks. They will be sent to the datacentre technician, and this will avoid any mistakes being made as the replacement operation is carried out.

- **The intervention date and time**. Please note that there will be a short service interruption, but you can schedule the intervention to take place anytime, 24/7.

- **Confirmation that your data is backed up, and confirmation that you accept the potential risk of your data being lost.**


#### Hot-swapping the disk (no server downtime)

> [!primary]
>
> This replacement type is only possible for [FS-48T](https://www.ovh.co.uk/dedicated_servers/storage/1901fs03.xml){.external}, [STOR-72T](https://www.ovh.co.uk/dedicated_servers/storage/1801fs09.xml){.external}, [FS-MAX](https://www.ovh.co.uk/dedicated_servers/storage/1801fs05.xml){.external}, [mHG](https://www.ovh.co.uk/dedicated_servers/hg/1801mhg03.xml){.external}(2019 range only), [HG](https://www.ovh.co.uk/dedicated_servers/hg/1801hg03.xml){.external} and [BHG](https://www.ovh.co.uk/dedicated_servers/hg/1801bhg03.xml){.external} 
> 

If you are hot-swapping a disk on a server with a MegaRAID card you can refer to our [Hot Swap - Hardware RAID](https://docs.ovh.com/gb/en/dedicated/hotswap-raid-hard/){.external} guide. 

While if you are hot-swapping a disk using software RAID (with a LSI card) please refer to our [Hot Swap - Software RAID](https://docs.ovh.com/gb/en/dedicated/hotswap-raid-soft/){.external} guide 


> [!primary]
>
> Even though you’re making the disk’s LED light flash, please remember to include the disk’s serial number and *slot* in your support ticket.
> 

### After the replacement is complete

If you have a server that uses hard RAID, then the RAID will rebuild itself. Please note that *auto-rebuild* is enabled by default. For it to work, please ensure that you have not disabled it. The resync process will take a few minutes, and may decrease your RAID’s read/write performance.

If you have a server that uses soft RAID, we recommend that you resync your disks manually. To do this, you can refer to our [software RAID](https://docs.ovh.com/gb/en/dedicated/raid-soft/){.external} guide.


## Go further

[Software RAID](https://docs.ovh.com/gb/en/dedicated/raid-soft/){.external}

[Hardware RAID](https://docs.ovh.com/gb/en/dedicated/raid-hard){.external}

[Rescue Mode](https://docs.ovh.com/gb/en/dedicated/rescue_mode/){.external}


Join our community of users on <https://community.ovh.com/en/>.
