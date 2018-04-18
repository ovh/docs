---
title: Disk replacement
slug: disk-replacement
excerpt: This guide explains you the steps to follow in case of a disk replacement.
section: Server Management
---

**Last updated 18th April 2018**

## Requirements
If you see a disk failure or that our system sent you a notification email to notify you of a disk failure, you need to take steps to replace it as soon as possible.


## Procedure

### Step 1 &#58; Backup
Before doing anything, **it is really important to perform a backup**. The sole purpose of a RAID (except RAID 0) is to protect your data against hard disk failures. Once a disk is failing, all of your data depends on the health of the remaining disk.

It is improbable that two drives fails at the same time, but it is not impossible. By all means, implement an adequate backup strategy.

If you do not confirm that you have made your backup before asking for a disk replacement, you must state that you are aware of the risks and that you accept full responsibility for any data loss.


### Step 2 &#58;Find defective disk(s)
Whether you have found the failure by yourself or if our system notified you, it is good practice to check the health of all hard disks.

The reason is that if we have two failing disks in a RAID array, we will start by replacing the disk with the higher error count.


#### Software RAID
If you have a Software RAID, [use this guide](../raid-soft/){.ref} to find the installed disks on your server.

Once you have found the device path of you disks, you can test them using smartctl like so:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">smartctl -a /dev/sdX</span> </pre></div>

> [!primary]
>
> Don't forget to replace /dev/sdX for the actual device path of your disk.
> 

This will also allow you to retrieve the serial number of the disk(s) you want to replace, which is required by the technician.

Here is an example of the returned result.

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">smartctl -a -d ata /dev/sda</span>
<span class="output">smartctl 5.41 2011-06-09 r3365 [x86_64-linux-3.14.32-xxxx-grs-ipv6-64] (local build)</span>
<span class="output">Copyright (C) 2002-11 by Bruce Allen, http://smartmontools.sourceforge.net</span>
<span class="blank">&nbsp;</span>
<span class="output">=== START OF INFORMATION SECTION ===</span>
<span class="output">Device Model:     TOSHIBA DT01ACA050</span>
<span class="output">Serial Number:    5329T58NS</span>
<span class="output">LU WWN Device Id: 5 000039 ff6d28993</span>
<span class="output">Firmware Version: MS1OA750</span>
<span class="output">User Capacity:    500 107 862 016 bytes [500 GB]</span>
<span class="output">Sector Sizes:     512 bytes logical, 4096 bytes physical</span>
<span class="output">Device is:        Not in smartctl database [for details use: -P showall]</span>
<span class="output">ATA Version is:   8</span> <span class="output">ATA Standard is:  ATA-8-ACS revision 4</span>
<span class="output">Local Time is:    Thu Nov 24 15:51:25 2016 CET</span> <span class="output">SMART support is: Available - device has SMART capability.</span>
<span class="output">SMART support is: Enabled</span>
</pre></div>

#### For a NVMe Disk
In the case of an NVMe disk, it will be necessary to place the server in Recue-pro mode on which the **nvme-cli** tool is installed by default.

You will need to use the nvme list command to retrieve the serial numbers of your disks.

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@rescue:~# nvme list</span>
<span class="output">Node             SN                   Model                                    Namespace Usage                      Format           FW Rev</span>
<span class="output">---------------- -------------------- ---------------------------------------- --------- -------------------------- ---------------- --------</span>
<span class="output">/dev/nvme0n1     CVPF636600YC450RGN   INTEL SSDPE2MX450G7                      1         450.10  GB / 450.10  GB    512   B +  0 B   MDV10253</span>
<span class="output">/dev/nvme1n1     CVPF6333002Y450RGN   INTEL SSDPE2MX450G7                      1         450.10  GB / 450.10  GB    512   B +  0 B   MDV10253</span> </pre></div>

#### Hardware RAID
For Hardware RAID, [use this guide](../raid-hard/){.ref} and use the procedure related to your RAID controler to find out the device path of your disks.

Once you have found the device path of you disks, you can test them using smartctl like so:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">smartctl -d megaraid,N -a /dev/sdX</span> </pre></div>
N is the drive's Device ID

X is the RAID's device (/dev/sda = 1st RAID, /dev/sdb = 2nd RAID, etc.)



> [!primary]
>
> Don't forget to replace /dev/sdX for the actual device path of your disk.
> 



> [!warning]
>
> In some cases, you may get the following message : /dev/sda [megaraid_disk_00][SAT]: Device open changed type from 'megaraid' to 'sat'.
> You will then have to replace megaraid by sat+megaraid as following : smartctl -d sat+megaraid,N -a /dev/sdX
> 

For a LSI Raid Card, you can test disks them using smartctl like so:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">smartctl -a /dev/sgY</span> </pre></div>
The disk's Device (/dev/sg0 = 1st disk, /dev/sg1 = 2nd disk, etc.)


### Step 3 &#58; Disk replacement
To request a disk replacement, simply open a Support Ticket in the [OVH Manager](https://www.ovh.com/manager/){.external}.

To accelerate the process, please provide the following informations:

1. **A date and time including the time zone at which we should perform the replacement** (you must plan for a small down time, but replacements can be scheduled 24/7).
2. **A confirmation that either you have made your backup or that you take full responsibility for any data loss**
3. **The serial number of the hard disk we must change** (to find the hard disk's serial number, please follow this [this guide](../find-disk-serial-number/){.ref}) [[1]](#id2){.note-ref #id1}

[[1]](#){.note-ref #id2} - ([1](#id1){.fn-backref}) 
<cite>If for some reason it is not possible to retreive the Serial Number of the failing hard disk, please specify this in the ticket and provide the Serial Numbers of all the other disks.</cite>


### Step 4 &#58; After the replacement
If you have Hardware RAID, the RAID will automatically re-sync itself. Please note that the re-sync process can take some time and affect the read/write performances of your disks.

Don't hesitate to consult [this guide](../raid-hard/){.ref} to verify the RAID's state.

If you have Software RAID, then you will have to manually rebuild your RAID array. [This guide explains how to do it](../raid-soft/){.ref}.