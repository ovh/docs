---
title: Create a Windows partition on a server with hardware RAID
slug: windows-raid-hard
excerpt: This guide will explain the steps needed to create a Windows partition on a server with hardware RAID.
section: Server Management
---


## Requirements


> [!warning]
>
> Manipulations in this guide requires breaking the existing RAID. This means that all the existing data will be lost. Be sure to make a backup of your data beforehand.
> This guide is for experienced users.
> 

In order to create your partitions, it is necessary to create new RAID volumes on the RAID device.
For this, you will need to :

- Have a server with hardware RAID. (LSI MegaRaid card)
- Have at least two identical disks. (In this guide we have a server with 3 disks)
- Have access to rescue mode.


## Procedure

### List the existing RAID volumes
First, we need to list the existing RAID volumes so that we can delete them.

To do this, we will use the following command `MegaCli -LDInfo -Lall -aAll`{.action}

Example :

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@rescue:~# MegaCli -LDInfo -Lall -aAll</span>
<span class="blank">&nbsp;</span>
<span class="output">Adapter 0 -- Virtual Drive Information:</span>
<span class="output">Virtual Drive: 0 (Target Id: 0)</span>
<span class="output">Name                :</span>
<span class="output">RAID Level          : Primary-5, Secondary-0, RAID Level Qualifier-3</span>
<span class="output">Size                : 3.637 TB</span>
<span class="output">Sector Size         : 512</span>
<span class="output">Is VD emulated      : No</span>
<span class="output">Parity Size         : 1.818 TB</span>
<span class="output">State               : Optimal</span>
<span class="output">Strip Size          : 256 KB</span>
<span class="output">Number Of Drives    : 3</span>
<span class="output">Span Depth          : 1</span>
<span class="output">Default Cache Policy: WriteBack, ReadAhead, Direct, No Write Cache if Bad BBU</span>
<span class="output">Current Cache Policy: WriteBack, ReadAhead, Direct, No Write Cache if Bad BBU</span>
<span class="output">Default Access Policy: Read/Write</span>
<span class="output">Current Access Policy: Read/Write</span>
<span class="output">Disk Cache Policy   : Disk's Default</span>
<span class="output">Encryption Type     : None</span>
<span class="output">Bad Blocks Exist: No</span>
<span class="output">PI type: No PI</span>
<span class="blank">&nbsp;</span>
<span class="output">Is VD Cached: No</span>
<span class="blank">&nbsp;</span>
<span class="output">Exit Code: 0x00</span> </pre></div>
We can see that we currently have only one RAID volume on the server, and that the server has the **Virtual Drive** `0`.


### Breaking the RAID
We can now break the existing RAID and then create our new RAID.

To do this, we will use the command below, we will need to use the **Virtual Drive** number found in the previous step.

`MegaCli -CfgLDDel -Lx -a0`{.action}

`x` is the number of the **Virtual Drive**

Example :

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@rescue:~# MegaCli -CfgLDDel -L0 -a0</span>
<span class="blank">&nbsp;</span>
<span class="output">Adapter 0: Deleted Virtual Drive-0(target id-0)</span>
<span class="blank">&nbsp;</span>
<span class="output">Exit Code: 0x00</span> </pre></div>

> [!primary]
>
> If your server already has more than one RAID, repeat the operation with each **Virtual Drive** number.
> 


### Find the disk IDs
We will now retrieve the **Enclosure ID** and the **SlotID** of the disks on the server to create our new RAID.

To do this, we will use the following command : `MegaCli -PdList -aALL | egrep -i "Adapter|Slot|Enclosure Device"`{.action}

Example :

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@rescue:~# MegaCli -PdList -aALL | egrep -i "Adapter|Slot|Enclosure Device"</span>
<span class="output">Adapter #0</span>
<span class="output">Enclosure Device ID: 252</span>
<span class="output">Slot Number: 0</span>
<span class="output">Enclosure Device ID: 252</span>
<span class="output">Slot Number: 1</span>
<span class="output">Enclosure Device ID: 252</span>
<span class="output">Slot Number: 2</span> </pre></div>
We can see that we have 3 disks, the **Enclosure ID** and **SlotID** are 252:0, 252:1, and 252:2 respectively.


### Create the new RAID
First, we create the 1st RAID that will be used for our operating system.

We use the following command : `MegaCli -CfgLdAdd -rX[EncID:SlotID,EncID:SlotID,...] -szYYYYY -a0`{.action}

`X` is the desired RAID level (0, 1, 5, or 6)

`EncID` is the enclosure ID of the disk found in the previous step.

`SlotID` is the SlotIDs of the the disk found in the previous step.

`YYYYY` is the size of our 1st virtual disk specified in MB.

In our example, we will create a RAID-5 volume on our 3 disks, with a size of 200 GB for our operating system.



> [!primary]
>
> It is advisable to create a volume with a little more space than the minimum size required, this is to ensure that the our system has room for updates and installations.
> 

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@rescue:~# MegaCli -CfgLdAdd -r5[252:0,252:1,252:2] -sz204800 -a0</span>
<span class="blank">&nbsp;</span>
<span class="output">Adapter 0: Created VD 0</span>
<span class="blank">&nbsp;</span>
<span class="output">Adapter 0: Configured the Adapter!!</span>
<span class="blank">&nbsp;</span>
<span class="output">Exit Code: 0x00</span> </pre></div>
Here, our first RAID has been created. Now we just have to assign the rest of the available space.

We will therefore create a second RAID via the following command : `MegaCli -CfgLdAdd -rX[EncID:SlotID,EncID:SlotID,...] -a0`{.action}

`X` is the desired RAID level (0, 1, 5, or 6)

`EncID` is the enclosure ID of the disk found in the previous step.

`SlotID` is the SlotIDs of the the disk found in the previous step.

Example :

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@rescue:~# MegaCli -CfgLdAdd -r5[252:0,252:1,252:2] -a0</span>
<span class="blank">&nbsp;</span>
<span class="output">Adapter 0: Created VD 1</span>
<span class="blank">&nbsp;</span>
<span class="output">Adapter 0: Configured the Adapter!!</span>
<span class="blank">&nbsp;</span>
<span class="output">Exit Code: 0x00</span> </pre></div>
It's done. Now all we have to do is check our RAID.


### Check the RAID's creation
We will use the first command in this guide, which lists the RAID volumes: `MegaCli -LDInfo -Lall -aALL`{.action}

Example :

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@rescue:~# MegaCli -LDInfo -Lall -aAll</span>
<span class="blank">&nbsp;</span>
<span class="blank">&nbsp;</span>
<span class="output">Adapter 0 -- Virtual Drive Information:</span>
<span class="output">Virtual Drive: 0 (Target Id: 0)</span>
<span class="output">Name                :</span>
<span class="output">RAID Level          : Primary-5, Secondary-0, RAID Level Qualifier-3</span>
<span class="output">Size                : 200.195 GB</span>
<span class="output">Sector Size         : 512</span>
<span class="output">Is VD emulated      : No</span>
<span class="output">Parity Size         : 100.097 GB</span>
<span class="output">State               : Optimal</span>
<span class="output">Strip Size          : 256 KB</span>
<span class="output">Number Of Drives    : 3</span>
<span class="output">Span Depth          : 1</span>
<span class="output">Default Cache Policy: WriteBack, ReadAhead, Direct, No Write Cache if Bad BBU</span>
<span class="output">Current Cache Policy: WriteBack, ReadAhead, Direct, No Write Cache if Bad BBU</span>
<span class="output">Default Access Policy: Read/Write</span>
<span class="output">Current Access Policy: Read/Write</span>
<span class="output">Disk Cache Policy   : Disk's Default</span>
<span class="output">Encryption Type     : None</span>
<span class="output">Bad Blocks Exist: No</span>
<span class="output">PI type: No PI</span>
<span class="blank">&nbsp;</span>
<span class="output">Is VD Cached: No</span>
<span class="blank">&nbsp;</span>
<span class="blank">&nbsp;</span>
<span class="output">Virtual Drive: 1 (Target Id: 1)</span>
<span class="output">Name                :</span>
<span class="output">RAID Level          : Primary-5, Secondary-0, RAID Level Qualifier-3</span>
<span class="output">Size                : 3.441 TB</span>
<span class="output">Sector Size         : 512</span>
<span class="output">Is VD emulated      : No</span>
<span class="output">Parity Size         : 1.720 TB</span>
<span class="output">State               : Optimal</span>
<span class="output">Strip Size          : 256 KB</span>
<span class="output">Number Of Drives    : 3</span>
<span class="output">Span Depth          : 1</span>
<span class="output">Default Cache Policy: WriteBack, ReadAhead, Direct, No Write Cache if Bad BBU</span>
<span class="output">Current Cache Policy: WriteBack, ReadAhead, Direct, No Write Cache if Bad BBU</span>
<span class="output">Default Access Policy: Read/Write</span>
<span class="output">Current Access Policy: Read/Write</span>
<span class="output">Disk Cache Policy   : Disk's Default</span>
<span class="output">Encryption Type     : None</span>
<span class="output">Bad Blocks Exist: No</span>
<span class="output">PI type: No PI</span>
<span class="blank">&nbsp;</span>
<span class="output">Is VD Cached: No</span>
<span class="blank">&nbsp;</span>
<span class="output">Exit Code: 0x00</span> </pre></div>
We can also use the command `fdisk -l`{.action} to view our two RAID volumes.

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@rescue:~# fdisk -l</span>
<span class="blank">&nbsp;</span>
<span class="output">Disk /dev/sda: 200.2 GiB, 214958080000 bytes, 419840000 sectors</span>
<span class="output">Units: sectors of 1 * 512 = 512 bytes</span>
<span class="output">Sector size (logical/physical): 512 bytes / 512 bytes</span>
<span class="output">I/O size (minimum/optimal): 512 bytes / 512 bytes</span>
<span class="blank">&nbsp;</span>
<span class="output">Disk /dev/sdb: 3.5 TiB, 3784730214400 bytes, 7392051200 sectors</span>
<span class="output">Units: sectors of 1 * 512 = 512 bytes</span>
<span class="output">Sector size (logical/physical): 512 bytes / 512 bytes</span>
<span class="output">I/O size (minimum/optimal): 512 bytes / 512 bytes</span> </pre></div>

### Installing Windows from the OVH manager
Finally, go to your OVH manager to proceed with the installation of Windows on your server.

You will need to check the box `Customize partition configuration`{.action}, change the current partition scheme to one specify disk **C:**, with a maximum size of 200GB.

Once the system is installed, log in to your Windows system and open up the utility `Disk Management`{.action}, and then partition the second virtual disk (corresponding to our second RAID which is displayed as "unallocated") in the format GPT.