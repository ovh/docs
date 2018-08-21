---
title: Finding the serial number of a hard disk
slug: find-disk-serial-number
excerpt: This guide will show you how to retrieve the serial number of a disk in order to proceed with its replacement.
section: Server Management
---

**Last update 21st August 2018**

## Objective

To minimise the chance of human error during hard disk replacements, we ask our customers to provide the serial number of the disk they want to replace.

**This guide will show you how to retrieve the serial number of your disk. In most cases, you can find it while testing your hard drives individually with smartmontools.**

## Requirements

- a [dedicated server](https://www.ovh.co.uk/dedicated_servers/){.external}
- administrative (root) access to the server via SSH
- the sas2ircu utility installed on your Windows server (available via the [broadcom](https://www.broadcom.com/support/download-search/?dk=sas2ircu){.external} search engine).

## Instructions

> [!primary]
>
> In the case of an NVMe disk, it will be necessary to place the server in Rescue64 mode, and use the nvme-cli tool installed by default.
> 

### Retrieve a disk's serial number (Software RAID)

To retrieve your hard drive's serial number with a software RAID configuration, you can simply use smartctl:

```sh
smartctl -a /dev/sdX | grep Serial Serial Number:    XXXXXXX
```

The device is detected by the OS (ex: /dev/sda, /dev/sdb, etc.).

### Retrieve a disk's serial number (NVMe disks)

For NVMe disks, it will be necessary to use the command nvme list:

```sh
root@rescue:~# nvme list

Node          SN                  Model                Namespace  Usage                      Format   FW Rev
/dev/nvme0n1  CVPF636600YC450RGN  INTEL SSDPE2MX450G7  1          450.10 GB / 450.10 GB 512  B + 0 B  MDV10253
/dev/nvme1n1  CVPF6333002Y450RGN  INTEL SSDPE2MX450G7  1          450.10 GB / 450.10 GB 512  B + 0 B  MDV10253
```

You can then see the serial numbers of your NVMe disks (nvme0 and nvme1).

### Retrieve a disk's serial number (Windows)

The Windows-based guide is generally similar to the Linux-based guide. We will use the sas2ircu utility, with the same commands we used for Linux.

> [!primary]
>
> You will need to run the command terminal with administrator rights to avoid errors.
> 

To retrieve the serial number of a Software RAID configuration, you must use the following command:

```sh
.\smartctl -a /dev/sdX Serial Number: 1234567890
```

The device will be detected by the OS, and displayed as follows: /dev/sda, /dev/sdb, etc.

![smart_sdb_windows](images/smart_sdb_windows.png){.thumbnail}


### Retrieve a disk's serial number (Hardware RAID)

For an in-depth look of these commands and how to test your hard disks, refer to [this guide (LSI raid controller)](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external}.


#### MegaRaid Controller

##### Step 1: Recover RAID sets

You can find the serial number using the smartctl command. However, prior to executing this command, you will need to find how many RAID sets (or Virtual Drives) your server contains.

You can retrieve this information by using the following command:

```sh
MegaCli -LDInfo -Lall -aALL | egrep 'Adapter|Size' | grep -v Strip

Adapter 0

Virtual Drive Information: Size : 36.321 GB

Adapter 1

Virtual Drive Information: Size : 2.727 TB
```

In this example, there are two RAIDs configured on the server (Adapter 0 and Adapter 1). These should be mapped to /dev/sda and /dev/sdb.


##### Step 2: Recover disks informations

Next, you will need to gather the physical disk informations using the following command:

```sh
MegaCli -PDList -aAll | egrep 'Slot\ Number|Device\ Id|Inquiry\ Data|Raw|Firmware\ state' | sed 's/Slot/\nSlot/g'

Slot Number: 0
Device Id: 4
Raw Size: 279.460 GB [0x22eec130 Sectors]
Firmware state: Online, Spun Up
Inquiry Data: BTWL3450062J300PGN  INTEL SSDSC2BB300G4                     D2010355

Slot Number: 1
Device Id: 5
Raw Size: 279.460 GB [0x22eec130 Sectors] 
Firmware state: Online, Spun Up 
Inquiry Data: BTWL345003X6300PGN  INTEL SSDSC2BB300G4                     D2010355

Slot Number: 2
Device Id: 7
Raw Size: 2.728 TB [0x15d50a3b0 Sectors] 
Firmware state: Online, Spun Up 
Inquiry Data:       PN2234P8K2PKDYHGST HUS724030ALA640                    MF8OAA70

Slot Number: 3 
Device Id: 6 
Raw Size: 2.728 TB [0x15d50a3b0 Sectors] 
Firmware state: Online, Spun Up 
Inquiry Data:       PN2234P8JYP59YHGST HUS724030ALA640                    MF8OAA70
```

##### Step 3: Recover the serial number

The Device ID and Adapter ID will be used to tell smartctl which disk to look for in which RAID array.

The command should look like this:

```sh
smartctl -d megaraid,N -a /dev/sdX | grep Serial Serial Number: 1234567890
```

The RAID Device ID will be displayed as follows: /dev/sda = 1st RAID, /dev/sdb = 2nd RAID, etc.


> [!primary]
>
> In some situations, you may receive this output:
> 
> ```
> /dev/sda [megaraid_disk_00] [SAT]: Device open changed type from 'megaraid' to 'sat'
> ```
> 
> You must then replace megaraid with sat+megaraid:
>
> ```
> smartctl -d sat+megaraid,N -a /dev/sdX | grep Serial Serial Number:    1234567890
> ```
>

#### Retrieve a disk's serial number (LSI RAID Controller)

LSI RAID controller uses a module called sg-map which maps devices in /dev/sgX (**X** being the number defining the device).

You can refer to [this guide (LSI raid controller)](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external} to find which hard drive relates to a designated sg device.

Once you have found the sg device related to the hard disk you want to query, use the following command:

```sh
smartctl -a /dev/sgX | grep Serial Serial Number:    1234567890
```

The sg device number will be displayed as follows: /dev/sg0, /dev/sg1) etc.


## Go further

Join our community of users on <https://community.ovh.com/en/>