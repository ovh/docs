---
title: 'Managing Hardware RAID'
slug: raid-hard
excerpt: 'This guide will show you how to verify the state of your RAID and the health of your hard drives'
section: 'Server Management'
---

**Last updated 21st August 2018**

## Objective

On a server with a hardware RAID configuration, the RAID array is managed by a physical component called a RAID controller.

**This guide will show you how to verify the state of your RAID and the health of your hard drives.**

## Requirements

- a [dedicated server](https://www.ovh.co.uk/dedicated_servers/){.external} with a hardware RAID configuration
- administrative (root) access to the server via SSH

> [!warning]
>
> It is not advisable to reconfigure your RAID controller using MegaCli and lsiutil if you're unfamiliar with these tools, as you could risk losing your data. Please make a backup before making any changes.
> 

## Instructions

### Using the MegaRaid RAID controller

#### Step 1: Retrieve RAID information

Prior to verifying your RAID state, verify that you have a MegaRaid controller:

```sh
lspci | grep -i lsi | grep -i megaraid
03:00.0 RAID bus controller: LSI Logic / Symbios Logic MegaRAID SAS 2108 [Liberator] (rev 05)
```

This confirms the server has a MegaRaid controller installed.

To gather and list available RAID arrays, you can use the MegaCli command:

```sh
MegaCli -LDInfo -Lall -aALL (Or : storcli /c0 /vall show)
Adapter 0 - Virtual Drive Information:
Virtual Drive: 0 (Target Id: 0)
Name :
RAID Level : Primary-1, Secondary-0, RAID Level Qualifier-0
Size : 36.321 GB
Sector Size : 512
Mirror Data : 36.321 GB
State : Optimal
Strip Size : 64 KB
Number Of Drives : 2
Span Depth : 1
Default Cache Policy: WriteBack, ReadAdaptive, Cached, Write Cache OK if Bad BBU
Current Cache Policy: WriteBack, ReadAdaptive, Cached, Write Cache OK if Bad BBU
Default Access Policy: Read/Write
Current Access Policy: Read/Write
Disk Cache Policy : Disk's Default
Encryption Type : None
Bad Blocks Exist: No
Is VD Cached: No

Virtual Drive: 1 (Target Id: 1)
Name :
RAID Level : Primary-1, Secondary-0, RAID Level Qualifier-0
Size : 2.727 TB
Sector Size : 512
Mirror Data : 2.727 TB
State : Optimal
Strip Size : 64 KB
Number Of Drives : 2
Span Depth : 1
Default Cache Policy: WriteBack, ReadAdaptive, Cached, Write Cache OK if Bad BBU
Current Cache Policy: WriteBack, ReadAdaptive, Cached, Write Cache OK if Bad BBU
Default Access Policy: Read/Write
Current Access Policy: Read/Write
Disk Cache Policy : Disk's Default
Encryption Type : None
Bad Blocks Exist: No
Is VD Cached: Yes
Cache Cade Type : Read Only

Exit Code: 0x00
```

We can see two virtual drives which are composed of two physical hard drives each, so a total of four physical disks. In this case, the RAID status is "Optimal", which means the RAID is functioning correctly.

If the RAID status is "Degraded", we recommend that you verify the hard drive's state as well.

#### Step 2: Determine the disk's state

First, you must list the device Id for each drive in order to fully test them with smartmontools:

```sh
MegaCli -PDList -aAll | egrep 'Slot\ Number|Device\ Id|Inquiry\ Data|Raw|Firmware\ state' | sed 's/Slot/\nSlot/g' (Or : storcli /c0 /eall /sall show)
 
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

With smartmontools' smartctl command, we will test each hard drive like this:

```sh
smartctl -d megaraid,N -a /dev/sdX
```

In this example, **/dev/sda** is the first RAID, and **/dev/sdb** is the second.

> [!primary]
>
> In some situations, you may receive this output:
> 
> ```
> /dev/sda [megaraid_disk_00] [SAT]: Device open changed type from 'megaraid' to 'sat'
> ```
> You must then replace megaraid with sat+megaraid:
> 
> ```
> smartctl -d sat+megaraid,N -a /dev/sdX
> ```

> [!warning]
>
> If one of your hard drives is showing SMART errors, you should perform a full backup of your data as soon as possible and contact our support team. Our support team will need the slot number and device ID in order to identify the faulty disk.
> 

#### Step 3: Resynchronising the RAID

If you had one or more hard drives replaced, the RAID will re-synchronise automatically. You can use this command to see which hard drives are currently rebuilding:

```sh
MegaCli -PDList -aAll | egrep 'Slot\ Number|Device\ Id|Inquiry\ Data|Raw|Firmware\ state' | sed 's/Slot/\nSlot/g' (Or : storcli /c0 /eall /sall show)
 
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
Firmware state: Rebuild
Inquiry Data:       PN2234P8JYP59YHGST HUS724030ALA640                    MF8OAA70 
```

To monitor the progress of the rebuild operation, you can use this command:

```sh
MegaCli -PDRbld -ShowProg -PhysDrv [EncID:SlotID] -aALL (Or : storcli /c0/eEncID/sSlotID show rebuild)
```

The command will retrieve the enclosure ID and slot ID, as shown above.

#### Step 4: Using CacheCade

> [!primary]
>
> CacheCade is a module from LSI used to improve random read performance of hard drives using an SSD as front caching device.
> 

To verify the the CacheCade's configuration, use the following command:

```sh
MegaCli -CfgCacheCadeDsply -a0 (Or : storcli /c0 /dall show cachecade)
```

To see which RAID array is associated with the CacheCade:

```sh
MegaCli -CfgCacheCadeDsply -a0 | grep "Associated LDs"
```

### Using the LSI RAID controller

#### Step 1: Retrieve RAID information

Prior to verifying the RAID state, ensure that an LSI RAID controller card is installed with the following command:

```sh
lspci | grep -i lsi | grep -v megaraid
01:00.0 Serial Attached SCSI controller: LSI Logic / Symbios Logic SAS2004 PCI-Express Fusion-MPT SAS-2 [Spitfire] (rev 03)
```

This confirms the presence of an LSI RAID controller.

> [!primary]
>
> The grep -v megaraid command removes the MegaRaid RAID controller card from the lspci output, as MegaRaid cards are made by LSI Corporation as well.
> 

To gather and list available RAID arrays, you can use the lsiutil command:

> [!warning]
>
> Caution, the values (1,0 21) may differ depending on the version. Be very careful when handling this type of control.
> 

```sh
lsiutil -p1 -a 1,0 21
 
LSI Logic MPT Configuration Utility, Version 1.63-OVH (27a4f9f54c)
 
1 MPT Port found
 
     Port Name         Chip Vendor/Type/Rev    MPT Rev  Firmware Rev  IOC
 1.  ioc0              LSI Logic SAS2004 03      200      13000000     0
 
RAID actions menu, select an option:  [1-99 or e/p/w or 0 to quit] 1
 
Volume 0 is DevHandle 011e, Bus 1 Target 0, Type RAID1 (Mirroring)
  Volume Name:
  Volume WWID:  0aaf504551c8efe5
  Volume State:  optimal, enabled, background init complete
  Volume Settings:  write caching disabled, auto configure hot swap enabled
  Volume draws from Hot Spare Pools:  0
  Volume Size 1906394 MB, 2 Members
  Primary is PhysDisk 1 (DevHandle 0009, Bus 0 Target 0)
  Secondary is PhysDisk 0 (DevHandle 000a, Bus 0 Target 1)
 
RAID actions menu, select an option:  [1-99 or e/p/w or 0 to quit] 0
```

In the example above, we can see one virtual drive, which is composed of two physical hard drives. In this case, the RAID status is "Optimal", which means the RAID is functioning correctly.

If the RAID status is "Degraded", we recommend that you verify the hard drive's state as well.

> [!primary]
>
> In the case of a newly provisioned server, you may see this message: **[In Progress:  data scrub]**. This message is not an error. Rather, it's an automated process generated by the controller's firmware in order to lower uncorrectable errors as much as possible.
> 

#### Step 2: Determine the disk's state

To take a look at the hard drive's state from the RAID controller, you can use this command:

```sh
lsiutil -p1 -a 2,0 21
 
LSI Logic MPT Configuration Utility, Version 1.63-OVH (27a4f9f54c)
 
1 MPT Port found
 
     Port Name         Chip Vendor/Type/Rev    MPT Rev  Firmware Rev  IOC
 1.  ioc0              LSI Logic SAS2004 03      200      13000000     0
 
RAID actions menu, select an option:  [1-99 or e/p/w or 0 to quit] 2

PhysDisk 0 is DevHandle 000a, Bus 0 Target 1
  PhysDisk State:  optimal
  PhysDisk Size 1906394 MB, Inquiry Data:  ATA      HGST HUS724020AL AA70
  Path 0 is DevHandle 000a, Bus 0 Target 1, online, primary
  Path 1 is DevHandle 000a, invalid

PhysDisk 1 is DevHandle 0009, Bus 0 Target 0
  PhysDisk State:  optimal
  PhysDisk Size 1906394 MB, Inquiry Data:  ATA      HGST HUS724020AL AA70
  Path 0 is DevHandle 0009, Bus 0 Target 0, online, primary
  Path 1 is DevHandle 0009, invalid

RAID actions menu, select an option:  [1-99 or e/p/w or 0 to quit] 0
```

In this case both drives show as "Optimal".

Since the LSI card uses sg-map, we must test the /dev/sgX (X being the device number, like /dev/sg1, for example) corresponding to the hard drives in order to test them with smartmontools.

Here's how to list them:

```sh
cat /proc/scsi/scsi | grep Vendor
  Vendor: LSI      Model: Logical Volume   Rev: 3000
  Vendor: ATA      Model: HGST HUS724020AL Rev: AA70
  Vendor: ATA      Model: HGST HUS724020AL Rev: AA70
```

> [!primary]
>
> Each line represents a sg device, which is mapped according to the order of the device shown
> here.
> 
> Example:
> 
> ```
> Vendor: LSI      Model: Logical Volume   Rev: 3000 => /dev/sg0
> 
> Vendor: ATA      Model: HGST HUS724020AL Rev: AA70 => /dev/sg1
> Vendor: ATA      Model: HGST HUS724020AL Rev: AA70 => /dev/sg2
> ```
> 

In order to list the right devices within one command, use the following:

```sh
cat /proc/scsi/scsi | grep Vendor | nl -v 0 | sed 's/^/\/dev\/sg/' | grep -v LSI | cut -d ' ' -f1,6 | sed 's/sg\ /sg/' | sed 's/\/dev\/sg.\ /\/dev\/sg/'
/dev/sg1
/dev/sg2
```

With smartmontools' smartctl command, we will test each hard drive, as shown below:

```sh
smartctl -a /dev/sgX 
```

The sg device number is shown in the above command.

> [!warning]
>
> If one of your hard drives is showing SMART errors, you should perform a full backup of your data as soon as possible and contact our support team.
> 

#### Step 3: Resynchronise the RAID

If you had one or more hard drives replaced, the RAID will re-synchronise automatically. To see if the RAID is in re-sync and monitor the resync progression, use this command:

> [!warning]
>
> Caution, the values (3,0 21) may differ depending on the version. Be very careful when handling this type of control.
> 

```sh
lsiutil -p1 -a 3,0 21
 
LSI Logic MPT Configuration Utility, Version 1.63-OVH (27a4f9f54c)
 
1 MPT Port found
 
     Port Name         Chip Vendor/Type/Rev    MPT Rev  Firmware Rev  IOC
 1.  ioc0              LSI Logic SAS2004 03      200      13000000     0
 
RAID actions menu, select an option:  [1-99 or e/p/w or 0 to quit] 3
 
Volume 0 is DevHandle 011e, Bus 1 Target 0, Type RAID1 (Mirroring)
 
Volume 0 State:  degraded, enabled, resync in progress
Resync Progress:  total blocks 624943104, blocks remaining 484024888, 77%
 
RAID actions menu, select an option:  [1-99 or e/p/w or 0 to quit] 0
```

> [!warning]
>
> The percentage value shown in the command result is NOT the completion
> percentage. It is the remaining percentage.
> 

### 3Ware RAID controller

> [!alert]
>
> This RAID controller card is deprecated. We highly recommend that you contact OVH Support to schedule an intervention to replace the RAID controller with an LSI, as 3ware RAID controllers are proven to be rather unstable. This type of intervention requires a reinstallation of your server. Be sure to backup your data first.
> 

## Go further

Join our community of users on <https://community.ovh.com/en/>.