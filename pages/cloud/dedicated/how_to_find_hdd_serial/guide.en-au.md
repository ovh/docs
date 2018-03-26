---
title: How do I find the serial number of my hard disk ?
sslug: find-disk-serial-number
excerpt: Find here how to retrieve the serial number of a disk in order to proceed with its replacement.
section: Server Management
---


## Requirements
To minimize chances of human errors during hard disk replacement, we ask our client to provide the serial number of the disk they whish to replace.

In some cases, for example with a dead hard disk, it is not possible to retrieve the serial number.

In such case, provide the serial number of all other hard disks and ask for the replacement of the disk that is **not** listed in the serial numbers you provided us.

In most cases, you can find it while testing your hard drives individualy with smartmontools.

To realize this manipulations, it must :

- Having an SSH access.
- Having the need to replace a disk.
- The sas2ircu utility must be installed beforehand. (Available via the [broadcom](https://www.broadcom.com/support/download-search/?dk=sas2ircu){.external} search engine). Only for Windows.



> [!primary]
>
> In the case of an NVMe disk, it will be necessary to place the server in Rescue-pro mode, and use the nvme-cli tool installed by default.
> 


## For Software RAID
To retrieve your hard drive's serial number with a software RAID configuration, you can simply use smartctl:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">smartctl -a /dev/sdX | grep Serial</span> <span class="output">Serial Number:    XXXXXXX</span> </pre></div>
The device as detected by the OS (Ex: /dev/sda, /dev/sdb, etc..)


### For a NVMe disk
It will be necessary to use the command nvme list :

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@rescue:~# nvme list</span> <span class="output">Node             SN                   Model                                    Namespace Usage                      Format           FW Rev</span> <span class="output">---------------- -------------------- ---------------------------------------- --------- -------------------------- ---------------- --------</span> <span class="output">/dev/nvme0n1     CVPF636600YC450RGN   INTEL SSDPE2MX450G7                      1         450.10  GB / 450.10  GB    512   B +  0 B   MDV10253</span> <span class="output">/dev/nvme1n1     CVPF6333002Y450RGN   INTEL SSDPE2MX450G7                      1         450.10  GB / 450.10  GB    512   B +  0 B   MDV10253</span> </pre></div>
We can then see the serial numbers of our NVMe disks (nvme0 and nvme1).


### Sous Windows
The Windows-based guide is similar in general to the Linux-based guide. Indeed, we will use the utility: sas2ircu, and the commands are the same as under Linux.



> [!primary]
>
> It will be important to run the command terminal as an administrator to avoid errors.
> 

To retrieve the serial number in the case of a Software RAID, you must use the following command :

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">.\smartctl -a /dev/sdX</span> <span class="output">Serial Number:    KKKKKKKKKK</span> </pre></div>
The device as detected by the OS (Ex: /dev/sda, /dev/sdb, etc..)


![smart_sdb_windows](images/smart_sdb_windows.png){.thumbnail}


## For Hardware RAID
For an in-depth look of these commands and how to test your hard disks, refer to [this guide (LSI raid controller)](../guide.en-au.md){.ref}.


### MegaRaid Controller

#### Step 1 &#58; Recover RAID sets
You can find the serial number using smartctl command as well. However, prior to execute the smartctl command, you will need to find how many RAID (or Virtual Drive) your server contains.

You can retrieve this information by using the following command:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">MegaCli -LDInfo -Lall -aALL | egrep 'Adapter|Size' | grep -v Strip</span> <span class="output">Adapter 0 — Virtual Drive Information:</span> <span class="output">Size : 36.321 GB</span> <span class="output">Adapter 1 — Virtual Drive Information:</span> <span class="output">Size : 2.727 TB</span> </pre></div>
In this example, there is two RAIDs configured on the server (Adapter 0 and Adapter 1). These should be mapped to /dev/sda and /dev/sdb.


#### Step 2 &#58; Recover Disks informations
Next, you will need to gather the physical disk informations using the following command:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">MegaCli -PDList -aAll | egrep 'Slot\ Number|Device\ Id|Inquiry\ Data|Raw|Firmware\ state' | sed 's/Slot/\nSlot/g'</span> <span class="blank">&nbsp;</span> <span class="output">Slot Number: 0</span> <span class="output">Device Id: 4</span> <span class="output">Raw Size: 279.460 GB [0x22eec130 Sectors]</span> <span class="output">Firmware state: Online, Spun Up</span> <span class="output">Inquiry Data: BTWL3450062J300PGN  INTEL SSDSC2BB300G4                     D2010355</span> <span class="blank">&nbsp;</span> <span class="output">Slot Number: 1</span> <span class="output">Device Id: 5</span> <span class="output">Raw Size: 279.460 GB [0x22eec130 Sectors]</span> <span class="output">Firmware state: Online, Spun Up</span> <span class="output">Inquiry Data: BTWL345003X6300PGN  INTEL SSDSC2BB300G4                     D2010355</span> <span class="blank">&nbsp;</span> <span class="output">Slot Number: 2</span> <span class="output">Device Id: 7</span> <span class="output">Raw Size: 2.728 TB [0x15d50a3b0 Sectors]</span> <span class="output">Firmware state: Online, Spun Up</span> <span class="output">Inquiry Data:       PN2234P8K2PKDYHGST HUS724030ALA640                    MF8OAA70</span> <span class="blank">&nbsp;</span> <span class="output">Slot Number: 3</span> <span class="output">Device Id: 6</span> <span class="output">Raw Size: 2.728 TB [0x15d50a3b0 Sectors]</span> <span class="output">Firmware state: Online, Spun Up</span> <span class="output">Inquiry Data:       PN2234P8JYP59YHGST HUS724030ALA640                    MF8OAA70</span> </pre></div>

#### Step 3 &#58; Recover the Serial Number
The Device ID and Adapter ID will be used to tell smartctl which disk to look for in which RAID array.

The command should look like this:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">smartctl -d megaraid,N -a /dev/sdX | grep Serial</span> <span class="output">Serial Number:    XXXXXXX</span> </pre></div>
The drive's Device ID

The RAID's Device : /dev/sda = 1st RAID, /dev/sdb = 2nd RAID, etc.



> [!primary]
>
> In some situation, you may receive this output:
> <div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="output">/dev/sda [megaraid_disk_00] [SAT]: Device open changed type from 'megaraid' to 'sat'</span> </pre></div>
> You must then replace megaraid by sat+megaraid:
> <div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">smartctl -d sat+megaraid,N -a /dev/sdX | grep Serial</span> <span class="output">Serial Number:    XXXXXXX</span> </pre></div>


### LSI Controller
LSI RAID controller uses a module called sg-map which map devices in /dev/sgX (**X** being the number defining the device).

You can refer to [this guide (LSI raid controller)](../guide.en-au.md){.ref} to know which hard drive relate to a designed sg device.

Once you found the sg device related to the hard disk you want to query, use the following command:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">smartctl -a /dev/sgX | grep Serial</span> <span class="output">Serial Number:    XXXXXXX</span> </pre></div>
The sg device number (Ex: /dev/sg0, /dev/sg1)