---
title: Hardware RAID
slug: raid-hard
excerpt: This guide is meant to help you verify the state of your RAID as well as your hard drives' health using a Hardware RAID controller (LSI, LSI MegaRaid and 3ware [Deprecated]).
section: Server Management
---


## Requirements
- Having a root access in SSH.
- Having a server with a RAID Hard.



> [!warning]
>
> It is dangerous to play with MegaCli and lsiutil if
> you don't know what you are doing. You risk losing your data, backup
> before doing anything.
> 


## MegaRaid RAID controller

### Step 1 &#58; Informations
Prior to verify your RAID state, let's start by making sure you got a MegaRaid controller:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">lspci | grep -i lsi | grep -i megaraid</span> <span class="output">03:00.0 RAID bus controller: LSI Logic / Symbios Logic MegaRAID SAS 2108 [Liberator] (rev 05)</span> </pre></div>
This confirms the server has indeed a MegaRaid RAID controller installed.

To gather and list available RAID arrays, you can use MegaCli command:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">MegaCli -LDInfo -Lall -aALL (Or : storcli /c0 /vall show)</span> <span class="output">Adapter 0 - Virtual Drive Information:</span> <span class="output">Virtual Drive: 0 (Target Id: 0)</span> <span class="output">Name :</span> <span class="output">RAID Level : Primary-1, Secondary-0, RAID Level Qualifier-0</span> <span class="output">Size : 36.321 GB</span> <span class="output">Sector Size : 512</span> <span class="output">Mirror Data : 36.321 GB</span> <span class="output">State : Optimal</span> <span class="output">Strip Size : 64 KB</span> <span class="output">Number Of Drives : 2</span> <span class="output">Span Depth : 1</span> <span class="output">Default Cache Policy: WriteBack, ReadAdaptive, Cached, Write Cache OK if Bad BBU</span> <span class="output">Current Cache Policy: WriteBack, ReadAdaptive, Cached, Write Cache OK if Bad BBU</span> <span class="output">Default Access Policy: Read/Write</span> <span class="output">Current Access Policy: Read/Write</span> <span class="output">Disk Cache Policy : Disk's Default</span> <span class="output">Encryption Type : None</span> <span class="output">Bad Blocks Exist: No</span> <span class="output">Is VD Cached: No</span> <span class="blank">&nbsp;</span> <span class="blank">&nbsp;</span> <span class="output">Virtual Drive: 1 (Target Id: 1)</span> <span class="output">Name :</span> <span class="output">RAID Level : Primary-1, Secondary-0, RAID Level Qualifier-0</span> <span class="output">Size : 2.727 TB</span> <span class="output">Sector Size : 512</span> <span class="output">Mirror Data : 2.727 TB</span> <span class="output">State : Optimal</span> <span class="output">Strip Size : 64 KB</span> <span class="output">Number Of Drives : 2</span> <span class="output">Span Depth : 1</span> <span class="output">Default Cache Policy: WriteBack, ReadAdaptive, Cached, Write Cache OK if Bad BBU</span> <span class="output">Current Cache Policy: WriteBack, ReadAdaptive, Cached, Write Cache OK if Bad BBU</span> <span class="output">Default Access Policy: Read/Write</span> <span class="output">Current Access Policy: Read/Write</span> <span class="output">Disk Cache Policy : Disk's Default</span> <span class="output">Encryption Type : None</span> <span class="output">Bad Blocks Exist: No</span> <span class="output">Is VD Cached: Yes</span> <span class="output">Cache Cade Type : Read Only</span> <span class="blank">&nbsp;</span> <span class="output">Exit Code: 0x00</span> </pre></div>
We can see 2 virtual drives which are composed of 2 physical hard drives each, so a total of 4 physical disks.

In that case, the RAID status shows Optimal which means the RAID is up and running fine.

If it happens the RAID status shows Degraded, we recommend you to verify the hard drives' state as well.


### Step 2 &#58; Disk's state
First, you must list the Device Id for each drives in order to fully test them with smartmontools:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">MegaCli -PDList -aAll | egrep 'Slot\ Number|Device\ Id|Inquiry\ Data|Raw|Firmware\ state' | sed 's/Slot/\nSlot/g' (Or : storcli /c0 /eall /sall show)</span> <span class="blank">&nbsp;</span> <span class="output">Slot Number: 0</span> <span class="output">Device Id: 4</span> <span class="output">Raw Size: 279.460 GB [0x22eec130 Sectors]</span> <span class="output">Firmware state: Online, Spun Up</span> <span class="output">Inquiry Data: BTWL3450062J300PGN  INTEL SSDSC2BB300G4                     D2010355</span> <span class="blank">&nbsp;</span> <span class="output">Slot Number: 1</span> <span class="output">Device Id: 5</span> <span class="output">Raw Size: 279.460 GB [0x22eec130 Sectors]</span> <span class="output">Firmware state: Online, Spun Up</span> <span class="output">Inquiry Data: BTWL345003X6300PGN  INTEL SSDSC2BB300G4                     D2010355</span> <span class="blank">&nbsp;</span> <span class="output">Slot Number: 2</span> <span class="output">Device Id: 7</span> <span class="output">Raw Size: 2.728 TB [0x15d50a3b0 Sectors]</span> <span class="output">Firmware state: Online, Spun Up</span> <span class="output">Inquiry Data:       PN2234P8K2PKDYHGST HUS724030ALA640                    MF8OAA70</span> <span class="blank">&nbsp;</span> <span class="output">Slot Number: 3</span> <span class="output">Device Id: 6</span> <span class="output">Raw Size: 2.728 TB [0x15d50a3b0 Sectors]</span> <span class="output">Firmware state: Online, Spun Up</span> <span class="output">Inquiry Data:       PN2234P8JYP59YHGST HUS724030ALA640                    MF8OAA70</span> </pre></div>
With smartmontools's command smartctl, we will test each hard drives like this :

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">smartctl -d megaraid,N -a /dev/sdX</span> </pre></div>
is the drive's Device ID

is the RAID's Device: /dev/sda = 1st RAID, /dev/sdb = 2nd RAID, etc.



> [!primary]
>
> In some situation, you may receive this output:
> <div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="output">/dev/sda [megaraid_disk_00] [SAT]: Device open changed type from 'megaraid' to 'sat'</span> </pre></div>
> You must then replace megaraid by sat+megaraid:
> <div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">smartctl -d sat+megaraid,N -a /dev/sdX</span> </pre></div>



> [!warning]
>
> If one of your hard drives is showing SMART errors, perform a
> full backup of your data as soon as possible and contact our
> support.
> It will then inform the Slot Number and Device ID so we can identify the defected disk.
> 


### Step 3 &#58; Resynchronisation
If you had one or more hard drives replaced, the RAID will re-synchronize automatically.

You can use this command to see which hard drives are currently rebuilding :

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">MegaCli -PDList -aAll | egrep 'Slot\ Number|Device\ Id|Inquiry\ Data|Raw|Firmware\ state' | sed 's/Slot/\nSlot/g' (Or : storcli /c0 /eall /sall show)</span> <span class="blank">&nbsp;</span> <span class="output">Slot Number: 0</span> <span class="output">Device Id: 4</span> <span class="output">Raw Size: 279.460 GB [0x22eec130 Sectors]</span> <span class="output">Firmware state: Online, Spun Up</span> <span class="output">Inquiry Data: BTWL3450062J300PGN  INTEL SSDSC2BB300G4                     D2010355</span> <span class="blank">&nbsp;</span> <span class="output">Slot Number: 1</span> <span class="output">Device Id: 5</span> <span class="output">Raw Size: 279.460 GB [0x22eec130 Sectors]</span> <span class="output">Firmware state: Online, Spun Up</span> <span class="output">Inquiry Data: BTWL345003X6300PGN  INTEL SSDSC2BB300G4                     D2010355</span> <span class="blank">&nbsp;</span> <span class="output">Slot Number: 2</span> <span class="output">Device Id: 7</span> <span class="output">Raw Size: 2.728 TB [0x15d50a3b0 Sectors]</span> <span class="output">Firmware state: Online, Spun Up</span> <span class="output">Inquiry Data:       PN2234P8K2PKDYHGST HUS724030ALA640                    MF8OAA70</span> <span class="blank">&nbsp;</span> <span class="output">Slot Number: 3</span> <span class="output">Device Id: 6</span> <span class="output">Raw Size: 2.728 TB [0x15d50a3b0 Sectors]</span> <span class="output">Firmware state: Rebuild</span> <span class="output">Inquiry Data:       PN2234P8JYP59YHGST HUS724030ALA640                    MF8OAA70</span> </pre></div>
To monitor the progress rebuild of a disk, you can use this command:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">MegaCli -PDRbld -ShowProg -PhysDrv [EncID:SlotID] -aALL (Or : storcli /c0/eEncID/sSlotID show rebuild)</span> </pre></div>
Enclosure ID

Slot ID

These values are obtained while listing the hard drives as shown above


### Step 4 &#58; CacheCade


> [!primary]
>
> CacheCade is a module from LSI used to improve random read performance
> of hard drives using an SSD as front caching device.
> 

To verify the the CacheCade's configuration:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">MegaCli -CfgCacheCadeDsply -a0 (Or : storcli /c0 /dall show cachecade)</span> </pre></div>
To see which RAID array is associated with the CacheCade:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">MegaCli -CfgCacheCadeDsply -a0 | grep "Associated LDs"</span> </pre></div>

## LSI RAID controller

### Step 1 &#58; Informations
Prior to verify your RAID state, let's start by making sure you got a LSI RAID controller card:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">lspci | grep -i lsi | grep -v megaraid</span> <span class="output">01:00.0 Serial Attached SCSI controller: LSI Logic / Symbios Logic SAS2004 PCI-Express Fusion-MPT SAS-2 [Spitfire] (rev 03)</span> </pre></div>
This confirms the server has indeed a LSI RAID controller installed.



> [!primary]
>
> The grep -v megaraid command serves to remove MegaRaid RAID Controller card
> from the lspci output as MegaRaid card are made by LSI Corporation as well
> 

To gather and list available RAID array, you can use the lsiutil command:



> [!warning]
>
> Caution, the values (1,0 21) may differ depending on the version. Be very careful when handling this type of control.
> 

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">lsiutil -p1 -a 1,0 21</span> <span class="blank">&nbsp;</span> <span class="output">LSI Logic MPT Configuration Utility, Version 1.63-OVH (27a4f9f54c)</span> <span class="blank">&nbsp;</span> <span class="output">1 MPT Port found</span> <span class="blank">&nbsp;</span> <span class="output">     Port Name         Chip Vendor/Type/Rev    MPT Rev  Firmware Rev  IOC</span> <span class="output"> 1.  ioc0              LSI Logic SAS2004 03      200      13000000     0</span> <span class="blank">&nbsp;</span> <span class="output">RAID actions menu, select an option:  [1-99 or e/p/w or 0 to quit] 1</span> <span class="blank">&nbsp;</span> <span class="blank">&nbsp;</span> <span class="output">Volume 0 is DevHandle 011e, Bus 1 Target 0, Type RAID1 (Mirroring)</span> <span class="output">  Volume Name:</span> <span class="output">  Volume WWID:  0aaf504551c8efe5</span> <span class="output">  Volume State:  optimal, enabled, background init complete</span> <span class="output">  Volume Settings:  write caching disabled, auto configure hot swap enabled</span> <span class="output">  Volume draws from Hot Spare Pools:  0</span> <span class="output">  Volume Size 1906394 MB, 2 Members</span> <span class="output">  Primary is PhysDisk 1 (DevHandle 0009, Bus 0 Target 0)</span> <span class="output">  Secondary is PhysDisk 0 (DevHandle 000a, Bus 0 Target 1)</span> <span class="blank">&nbsp;</span> <span class="output">RAID actions menu, select an option:  [1-99 or e/p/w or 0 to quit] 0</span> </pre></div>
We can see 1 virtual drive which is composed of 2 physical hard drives.

In this case, the RAID status shows Optimal which means the RAID is up and running fine.

If it happens the RAID status shows Degraded, we recommend you to verify the hard drives' state as well.



> [!primary]
>
> It may happens when you just received the server that you will see [In Progress:  data scrub].
> This indication isn't a problem, it is an automated process generated by the controller
> firmware in order to lower uncorrectable errors as much as possible.
> 


### Step 2 &#58; Disk's state
To take a look at the hard drives state from the RAID controller, you can use this command:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">lsiutil -p1 -a 2,0 21</span> <span class="blank">&nbsp;</span> <span class="output">LSI Logic MPT Configuration Utility, Version 1.63-OVH (27a4f9f54c)</span> <span class="blank">&nbsp;</span> <span class="output">1 MPT Port found</span> <span class="blank">&nbsp;</span> <span class="output">     Port Name         Chip Vendor/Type/Rev    MPT Rev  Firmware Rev  IOC</span> <span class="output"> 1.  ioc0              LSI Logic SAS2004 03      200      13000000     0</span> <span class="blank">&nbsp;</span> <span class="output">RAID actions menu, select an option:  [1-99 or e/p/w or 0 to quit] 2</span> <span class="blank">&nbsp;</span> <span class="blank">&nbsp;</span> <span class="output">PhysDisk 0 is DevHandle 000a, Bus 0 Target 1</span> <span class="output">  PhysDisk State:  optimal</span> <span class="output">  PhysDisk Size 1906394 MB, Inquiry Data:  ATA      HGST HUS724020AL AA70</span> <span class="output">  Path 0 is DevHandle 000a, Bus 0 Target 1, online, primary</span> <span class="output">  Path 1 is DevHandle 000a, invalid</span> <span class="blank">&nbsp;</span> <span class="output">PhysDisk 1 is DevHandle 0009, Bus 0 Target 0</span> <span class="output">  PhysDisk State:  optimal</span> <span class="output">  PhysDisk Size 1906394 MB, Inquiry Data:  ATA      HGST HUS724020AL AA70</span> <span class="output">  Path 0 is DevHandle 0009, Bus 0 Target 0, online, primary</span> <span class="output">  Path 1 is DevHandle 0009, invalid</span> <span class="blank">&nbsp;</span> <span class="output">RAID actions menu, select an option:  [1-99 or e/p/w or 0 to quit] 0</span> </pre></div>
In this case both drives show as Optimal.

Since the LSI card uses sg-map, we must test the /dev/sgX (X being the device number like /dev/sg1 for example) corresponding to the hard drives in order to test them with smartmontools.

Here's how to list them:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">cat /proc/scsi/scsi | grep Vendor</span> <span class="output">  Vendor: LSI      Model: Logical Volume   Rev: 3000</span> <span class="output">  Vendor: ATA      Model: HGST HUS724020AL Rev: AA70</span> <span class="output">  Vendor: ATA      Model: HGST HUS724020AL Rev: AA70</span> </pre></div>

> [!primary]
>
> Each line represents a sg device which is mapped according to the order of the device shown
> here.
> 
> > [!faq]
> >
> > Ex: Vendor: LSI      Model: Logical Volume   Rev: 3000 => /dev/sg0
> >> 
> Vendor: ATA      Model: HGST HUS724020AL Rev: AA70 => /dev/sg1
> Vendor: ATA      Model: HGST HUS724020AL Rev: AA70 => /dev/sg2
> etc...
> >
> 

In order to get the right device within one command, you may use the following command:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">cat /proc/scsi/scsi | grep Vendor | nl -v 0 | sed 's/^/\/dev\/sg/' | grep -v LSI | cut -d ' ' -f1,6 | sed 's/sg\ /sg/' | sed 's/\/dev\/sg.\ /\/dev\/sg/'</span> <span class="output">/dev/sg1</span> <span class="output">/dev/sg2</span> </pre></div>
With smartmontools's command smartctl, we will test each hard drives like the following:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">smartctl -a /dev/sgX</span> </pre></div>
The sg device number shown in the above command



> [!warning]
>
> If one of your hard drives is showing SMART errors, perform a
> full backup of your data as soon as possible and contact our
> support.
> 


### Step 3 &#58; Resynchronisation
If you had one or more hard drives replaced, the RAID will re-synchronize automatically.

To see if the RAID is in re-sync and monitor the resync progression, you can use this command:



> [!warning]
>
> Caution, the values (3,0 21) may differ depending on the version. Be very careful when handling this type of control.
> 

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">lsiutil -p1 -a 3,0 21</span> <span class="blank">&nbsp;</span> <span class="output">LSI Logic MPT Configuration Utility, Version 1.63-OVH (27a4f9f54c)</span> <span class="blank">&nbsp;</span> <span class="output">1 MPT Port found</span> <span class="blank">&nbsp;</span> <span class="output">     Port Name         Chip Vendor/Type/Rev    MPT Rev  Firmware Rev  IOC</span> <span class="output"> 1.  ioc0              LSI Logic SAS2004 03      200      13000000     0</span> <span class="blank">&nbsp;</span> <span class="output">RAID actions menu, select an option:  [1-99 or e/p/w or 0 to quit] 3</span> <span class="blank">&nbsp;</span> <span class="output">Volume 0 is DevHandle 011e, Bus 1 Target 0, Type RAID1 (Mirroring)</span> <span class="blank">&nbsp;</span> <span class="output">Volume 0 State:  degraded, enabled, resync in progress</span> <span class="output">Resync Progress:  total blocks 624943104, blocks remaining 484024888, 77%</span> <span class="blank">&nbsp;</span> <span class="output">RAID actions menu, select an option:  [1-99 or e/p/w or 0 to quit] 0</span> </pre></div>

> [!warning]
>
> The percentage value shown in the command result is NOT the completion
> percentage. It is the remaining percentage.
> 


## 3Ware RAID controller


> [!alert]
>
> This RAID controller card is deprecated, we highly recommend you to contact
> OVH Support to schedule an intervention to replace the RAID
> controller by an LSI as 3ware RAID controller are proven
> to be rather unstable. This type of intervention requires a reinstallation of your server. Then be sure to backup your data first.
> 