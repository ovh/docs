---
title: Hot Swap - Raid Soft
slug: hotswap-raid-soft
excerpt: Here you will find the main steps to allow the replacement of a hot disk on a Raid Software server.
section: Server Management
---


## Requirements
Hot swapping is only possible on the server ranges mHG, HG, and bHG.

To carry out the various steps of this guide, you must:

- Have a server mHG, HG, or bHG.
- Have a RAID server software (with an LSI card).
- Have access to SSH (Linux) or RDP (Windows).
- The sas2ircu utility must be installed beforehand. (Available via the search engine [broadcom](https://www.broadcom.com/support/download-search/?dk=sas2ircu){.external})

In this guide, we will assume that you have received an alert for the /dev/sdb, Serial Number **K4GW439B**, which is defective and you want to replace hot.

For this we will need the **Enclosure ID**, the **Slot ID**, and the **Serial Number** of the disc to be replaced.


## In Linux

### Step 1&#58; Identify the disk
We have been warned that our SDB drive is HS, so we will test it and check its **Serial Number**.

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@ns3054662:/home# smartctl -a /dev/sdb</span> <span class="output">smartctl 6.4 2014-10-07 r4002 [x86_64-linux-3.14.32-xxxx-grs-ipv6-64] (local build)</span> <span class="output">Copyright (C) 2002-14, Bruce Allen, Christian Franke, www.smartmontools.org</span> <span class="blank">&nbsp;</span> <span class="output">=== START OF INFORMATION SECTION ===</span> <span class="output">Vendor:               HGST</span> <span class="output">Product:              HUS726040ALS210</span> <span class="output">Revision:             A907</span> <span class="output">Compliance:           SPC-4</span> <span class="output">User Capacity:        4,000,787,030,016 bytes [4.00 TB]</span> <span class="output">Logical block size:   512 bytes</span> <span class="output">LB provisioning type: unreported, LBPME=0, LBPRZ=0</span> <span class="output">Rotation Rate:        7200 rpm</span> <span class="output">Form Factor:          3.5 inches</span> <span class="output">Logical Unit id:      0x5000cca25d3155bc</span> <span class="output">Serial number:        K4GW439B</span> <span class="output">Device type:          disk</span> <span class="output">Transport protocol:   SAS (SPL-3)</span> <span class="output">Local Time is:        Mon Nov 21 14:23:43 2016 CET</span> <span class="output">SMART support is:     Available - device has SMART capability.</span> <span class="output">SMART support is:     Enabled</span> <span class="output">Temperature Warning:  Enabled</span> <span class="blank">&nbsp;</span> <span class="output">=== START OF READ SMART DATA SECTION ===</span> <span class="output">SMART Health Status: OK</span> <span class="blank">&nbsp;</span> <span class="output">Current Drive Temperature:     34 C</span> <span class="output">Drive Trip Temperature:        85 C</span> <span class="blank">&nbsp;</span> <span class="output">Manufactured in week 44 of year 2016</span> <span class="output">Specified cycle count over device lifetime:  50000</span> <span class="output">Accumulated start-stop cycles:  9</span> <span class="output">Specified load-unload count over device lifetime:  600000</span> <span class="output">Accumulated load-unload cycles:  14</span> <span class="output">Elements in grown defect list: 0</span> <span class="blank">&nbsp;</span> <span class="output">Vendor (Seagate) cache information</span> <span class="output">Blocks sent to initiator = 2305525022720</span> <span class="blank">&nbsp;</span> <span class="output">Error counter log:</span> <span class="output">       Errors Corrected by           Total   Correction     Gigabytes    Total</span> <span class="output">           ECC          rereads/    errors   algorithm      processed    uncorrected</span> <span class="output">       fast | delayed   rewrites  corrected  invocations   [10^9 bytes]  errors</span> <span class="output">read:          0        572         0       22548         77          4.725         5580</span> <span class="output">write:         0        0         0         19548       196         17.344          2569</span> <span class="blank">&nbsp;</span> <span class="output">Non-medium error count:        0</span> <span class="blank">&nbsp;</span> <span class="output">SMART Self-test log</span> <span class="output">Num  Test              Status                 segment  LifeTime  LBA_first_err [SK ASC ASQ]</span> <span class="output"> Description                              number   (hours)</span> <span class="output"># 1  Background short  Completed                   -       6                 - [-   -    -]</span> <span class="output"># 2  Background short  Completed                   -       4                 - [-   -    -]</span> <span class="output"># 3  Background short  Completed                   -       4                 - [-   -    -]</span> <span class="output"># 4  Background short  Completed                   -       4                 - [-   -    -]</span> <span class="output"># 5  Background short  Completed                   -       1                 - [-   -    -]</span> <span class="blank">&nbsp;</span> <span class="output">Long (extended) Self Test duration: 34237 seconds [570.6 minutes]</span> </pre></div>
Or more simply :

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@ns3054662:/home# smartctl -a /dev/sdb | grep Serial</span> <span class="output">Serial number:        K4GW439B</span> </pre></div>
We find that our SDB is actually HS (uncorrected errors in our case), and that its serial number corresponds to the alert received (via Datacentre or any other monitoring tool).

So we can move on to the next step of retrieving the **Enclosure ID** and **Slot ID** information from the disk to be replaced.


### Step 2&#58; Recover the position of the disc
We will retrieve the **Slot ID** and **Enclosure ID** from our SDS HS disk, so we will need the sas2ircu installed on the server.

Above all, it is checked that the drives are connected via an LSI.

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@ns3054662:/home# lspci | grep -i LSI</span> <span class="output">81:00.0 Serial Attached SCSI controller: LSI Logic / Symbios Logic SAS2004 PCI-Express Fusion-MPT SAS-2 [Spitfire] (rev 03)</span> <span class="blank">&nbsp;</span> <span class="prompt">We can see that we have an LSI card.</span> <span class="blank">&nbsp;</span> <span class="prompt">We must now determine the ID of this LSI card.</span> </pre></div><div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@ns3054662:/home# ./sas2ircu list</span> <span class="output">LSI Corporation SAS2 IR Configuration Utility.</span> <span class="output">Version 5.00.00.00 (2010.02.09)</span> <span class="output">Copyright (c) 2009 LSI Corporation. All rights reserved.</span> <span class="blank">&nbsp;</span> <span class="blank">&nbsp;</span> <span class="output">         Adapter      Vendor  Device                       SubSys  SubSys</span> <span class="output"> Index    Type          ID      ID    Pci Address          Ven ID  Dev ID</span> <span class="output"> -----  ------------  ------  ------  -----------------    ------  ------</span> <span class="output">     0     SAS2004     1000h    70h   00h:81h:00h:00h      1000h   3010h</span> <span class="output">SAS2IRCU: Utility Completed Successfully.</span> </pre></div>
The index corresponds to the ID, so our map has the index / ID 0.

With this information, we can now retrieve the **Slot ID** and **Enclosure ID** from our SDB, **Serial Number** K4GW439B.

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@ns3054662:/home# ./sas2ircu 0 display | grep -B 7 -A 2 K4GW439B</span> <span class="output">Device is a Hard disk</span> <span class="output">  Enclosure #                             : 1</span> <span class="output">  Slot #                                  : 3</span> <span class="output">  State                                   : Available (AVL)</span> <span class="output">  Manufacturer                            : HGST</span> <span class="output">  Model Number                            : HUS726040ALS210</span> <span class="output">  Firmware Revision                       : A907</span> <span class="output">  Serial No                               : K4GW439B</span> <span class="output">  Protocol                                : SAS</span> <span class="output">  Drive Type                              : SAS_HDD</span> </pre></div>
With this command we directly retrieve the information from our SDB.

Of course, **K4GW439B** will be replaced by the Serial Number of the drive to be replaced, and **0** by the ID of the RAID card concerned.

For our example, the disk has the **Enclosure ID** 1, and the **Slot ID** 3.


### Step 3&#58; Turn on a disc
With the information retrieved in the previous steps, we can turn on the LED of the HS disk for replacement with the command : ./sas2ircu 0 locate EncID:SlotID on

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@ns3054662:/home# ./sas2ircu 0 locate 1:3 on</span> <span class="output">LSI Corporation SAS2 IR Configuration Utility.</span> <span class="output">Version 5.00.00.00 (2010.02.09)</span> <span class="output">Copyright (c) 2009 LSI Corporation. All rights reserved.</span> <span class="blank">&nbsp;</span> <span class="output">SAS2IRCU: LOCATE command completed successfully.</span> <span class="output">SAS2IRCU: Command LOCATE Completed Successfully.</span> <span class="output">SAS2IRCU: Utility Completed Successfully.</span> </pre></div>
In this example, we have therefore taken over the information previously seen where 1 is the Enclosure ID, 3 the Slot ID, and 0 the Index of the RAID card.

You can turn off the blinking of the disc by replacing "on" with "off" in the command.

Now we have to move on to the last step of getting the defective disk out of the Raid Soft before the surgery.


### Step 4&#58; Remove the disk of the RAID
Before removing the defective disk from the RAID, we must pass it to `` Faulty`` if it is not already the case (always the SDB disk to replace in our example).

We will first look at the RAID state.

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@ns3054662:/home# cat /proc/mdstat</span> <span class="output">Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]</span> <span class="output">md2 : active raid1 sda2[0] sdb2[1]</span> <span class="output">      3885385728 blocks super 1.2 [2/2] [UU]</span> <span class="output">      bitmap: 0/29 pages [0KB], 65536KB chunk</span> <span class="blank">&nbsp;</span> <span class="output">md1 : active raid1 sdb1[1] sda1[0]</span> <span class="output">      20971456 blocks [2/2] [UU]</span> <span class="blank">&nbsp;</span> <span class="output">unused devices: <none></span> </pre></div>
We see that our SDS HS disk is part of md1 and md2 (sdb1 and sdb2).

We will now pass the disk to Faulty (respectively sdb1 in md1, and sdb2 in md2).

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@ns3054662:/home# mdadm --manage /dev/md1 --set-faulty /dev/sdb1</span> <span class="output">mdadm: set /dev/sdb1 faulty in /dev/md1</span> </pre></div><div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@ns3054662:/home# mdadm --manage /dev/md2 --set-faulty /dev/sdb2</span> <span class="output">mdadm: set /dev/sdb2 faulty in /dev/md2</span> </pre></div>
The RAID status is checked again.

<div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@ns3054662:/home# cat /proc/mdstat</span> <span class="output">Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]</span> <span class="output">md2 : active raid1 sda2[0] sdb2[1](F)</span> <span class="output">      3885385728 blocks super 1.2 [2/1] [U_]</span> <span class="output">      bitmap: 0/29 pages [0KB], 65536KB chunk</span> <span class="blank">&nbsp;</span> <span class="output">md1 : active raid1 sdb1[2](F) sda1[0]</span> <span class="output">      20971456 blocks [2/1] [U_]</span> <span class="blank">&nbsp;</span> <span class="output">unused devices: <none></span> </pre></div>
The sdb1 and sdb2 are passed in faulty (F).

Now we can out disks of the RAID.

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@ns3054662:/home# mdadm --manage /dev/md1 --remove /dev/sdb1</span> <span class="output">mdadm: hot removed /dev/sdb1 from /dev/md1</span> </pre></div><div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@ns3054662:/home# mdadm --manage /dev/md2 --remove /dev/sdb2</span> <span class="output">mdadm: hot removed /dev/sdb2 from /dev/md2</span> </pre></div>
Then we check one last time that the disk is no longer present.

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@ns3054662:/home# cat /proc/mdstat</span> <span class="output">Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]</span> <span class="output">md2 : active raid1 sda2[0]</span> <span class="output">      3885385728 blocks super 1.2 [2/1] [U_]</span> <span class="output">      bitmap: 0/29 pages [0KB], 65536KB chunk</span> <span class="blank">&nbsp;</span> <span class="output">md1 : active raid1 sda1[0]</span> <span class="output">      20971456 blocks [2/1] [U_]</span> <span class="blank">&nbsp;</span> <span class="output">unused devices: <none></span> </pre></div>
We are now ready to have the defective disk replaced by a Datacenter technician.

As we have well prepared the intervention, the new disk will take as SDB Name, and it will remain more than to rebuild the RAID.


## In Windows
The Windows-based guide will be similar in general to the replacement guide for Linux. Indeed, we will use the same utility: sas2ircu, and the commands are the same as under Linux.



> [!primary]
>
> It will be important to run the command terminal as an administrator to avoid errors.
> 

In this guide, we will assume that you have received an alert for the /dev/sdb, Serial Number **K4G187WB**, which is defective and you want to replace hot.

For this we will need the **Enclosure ID**, the **Slot ID**, and the **Serial Number** of the disc to be replaced.


### Step 1&#58; Identify the disk
We have been warned that our SDB drive is HS. So we'll test the drive and check its **Serial Number**.


![smart_sdb_windows](images/smart_sdb_windows.png){.thumbnail}



> [!warning]
>
> The disc used for our guide is not actually HS, but we will do as it was the case :)
> 

The Serial Number of the disk corresponds to the alert received (via the Datacentre or any other monitoring tool).

So we can move on to the next step, which is to re-enter the **Enclosure ID** and **Slot ID** information on the disk to be replaced.


### Step 2&#58; Recover the position of the disc
We will now retrieve the **Slot ID** and **Enclosure ID** from our SDS HS disk. To do this, we will need the sas2ircu installed on the server.

First, determine the ID of the LSI RAID card present in the server.


![id_lsi_windows](images/id_lsi_windows.png){.thumbnail}

So we have our LSI card which has index / ID "0".

With this information, we can now recover the **Slot ID** and **Enclosure ID** of our SDB, **Serial Number** K4G187WB.



> [!primary]
>
> The Serial Number K4G187WB will of course be replaced by yours.
> 


![select-string](images/select-string.png){.thumbnail}

You can also search for information by listing the discs in a more general way.


![0display1](images/0display1.png){.thumbnail}


![0display2](images/0display2.png){.thumbnail}

It is therefore found that our **Serial Number** K4G187WB has for **Enclosure ID** 1, and for **Slot ID** 1 (2nd disc of the list in this case).


### Step 3&#58; Turn on the disc
With the information retrieved in the previous steps, we can turn on the LED of the HS disk for replacement with the following command : .\sas2ircu.exe ID locate EncID:SlotID on


![locate](images/locate.png){.thumbnail}



> [!primary]
>
> You can turn off the blinking of the disc after it has been replaced by using "off" instead of "on" in the previous command.
> 

It now remains to go to the last step, take out the disk of RAID Soft before intervention.


### Step 4&#58; Remove the disk of the RAID
Soon...