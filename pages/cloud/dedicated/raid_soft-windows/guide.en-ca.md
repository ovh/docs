---
title: Configuring a software mirror (RAID) on Windows
slug: dedicated-servers-mirror-soft-raid-windows
excerpt: "Find out how to rebuild your server’s drive configuration after a disk replacement"
section: RAID and disks
updated: 2023-03-28
---

**Last updated 28th March 2023**

## Objective

On a Windows system, data redundancy is achieved by mirroring the primary disk to a second one. This is similar to a RAID 1 configuration but only involves two disks.

**This guide explains how to reconfigure the disk mirror of your Windows system if it needs to be rebuilt due to corruption or disk failure.**

## Requirements

- A Windows [dedicated server](https://www.ovhcloud.com/en-ca/bare-metal/) with a software mirror
- Administrative access to the server via RDP

## Instructions

Establish a remote desktop (RDP) connection to your server.

Once logged in, right-click on the `Start Menu`{.action} button and open `Run`{.action}.

![Software mirror Windows](images/raid-soft-windows-01.png){.thumbnail}

Enter "cmd" and click on `OK`{.action}.

![Software mirror Windows](images/raid-soft-windows-02.png){.thumbnail}

The method to use depends on the partition style of your disks. Follow the instructions in [this section](#mbr) for **MBR** or skip to the [subsequent section](#gpt) for **GPT**. If you are unsure, run `diskpart` at the command prompt and enter `list disk`. Check the "Gpt" column in the output.

### Rebuilding the mirror (MBR partion scheme) <a name="mbr"></a>

At the command prompt, open DiskPart:

```
C:\Windows\system32> diskpart
```

> [!alert]
>
> DiskPart executes commands without issuing warnings or asking for confirmation. Any changes done in DiskPart are irreversible. Entering commands while the wrong disk or volume is selected may therefore cause immediate data loss and/or prevent your system from booting. We recommend to proceed with caution and double-check each command.
>

#### Listing all disks and volumes

```console
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
  Disk 0    Online          447 GB      0 B   *
  Disk 1    Online          447 GB   447 GB
  Disk M0   Missing            0 B      0 B   *
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Mirror       447 GB  Failed Rd  System

```


In this example, `Disk 1` is a replacement drive that has been installed in order to replace the defective `Disk M0` which had been [physically removed](https://docs.ovh.com/ca/en/dedicated/disk-replacement/) previously.


> [!primary]
>
> The following code sections are for the purpose of illustration only, based on the example output above. You will need to adjust the instructions according to your actual configuration by replacing the values in the commands with your disk and volume identifiers.
>


#### Removing the replaced disk from the configuration

```console
DISKPART> select volume c
 
Volume 0 is the selected volume.
 
DISKPART> break disk M0 nokeep
 
DiskPart successfully broke the mirror volume.
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Simple       447 GB  Healthy    System
 
DISKPART> select disk m0
 
Disk M0 is now the selected disk.
 
DISKPART> delete disk
 
DiskPart successfully deleted the missing disk.
 
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---s
  Disk 0    Online          447 GB      0 B   *
  Disk 1    Online          447 GB   447 GB
 
```
 
#### Initialising the replacement disk
 
```console
DISKPART> select disk 1
 
Disk 1 is now the selected disk.
 
DISKPART> convert mbr
 
DiskPart successfully converted the selected disk to MBR format.
 
DISKPART> convert dynamic
 
DiskPart successfully converted the selected disk to dynamic format.

```
 
#### Recreating the mirror between the first and the second disk
 

```console
DISKPART> select volume c
 
Volume 0 is the selected volume.
 
DISKPART> add disk 1
 
DiskPart succeeded in adding a mirror to the volume.
<===>
 
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
* Disk 0    Online          447 GB      0 B   *
  Disk 1    Online          447 GB      0 B   *

``` 

Repeat this step for each existing volume from `Disk 0` that you want to mirror on `Disk 1`, using the associated drive letter (i.e. *d*, *e*, *f*, etc.).
 
The volume state will be `Rebuild` during the process, which may take several hours depending on the data stored on the disk. You can check the status in DiskPart:
 
```console
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
* Volume 0     C   Windows      NTFS   Mirror       447 GB  Rebuild    System

```

It is best not to restart the server until the rebuild process is complete.

### Rebuilding the mirror (GPT partition scheme) <a name="gpt"></a>

At the command prompt, open DiskPart:

```
C:\Windows\system32> diskpart
```

> [!alert]
>
> DiskPart executes commands without issuing warnings or asking for confirmation. Any changes done in DiskPart are irreversible. Entering commands while the wrong disk or volume is selected may therefore cause immediate data loss and/or prevent your system from booting. We recommend to proceed with caution and double-check each command.
>

#### Listing all disks and volumes

```console
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
  Disk 0    Online         1863 GB      0 B   *    *
  Disk 1    Online         1863 GB  1863 GB
  Disk M0   Missing           0  B      0 B   *   
 
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Mirror      1862 GB  Failed Rd  Boot
  Volume 1         EFI          FAT32  Partition    350 MB  Healthy    System
 
```

In this example, `Disk 1` is a replacement drive that has been installed in order to replace the defective `Disk M0` which had been [physically removed](https://docs.ovh.com/ca/en/dedicated/disk-replacement/) previously.

> [!primary]
>
> The following code sections are for the purpose of illustration only, based on the example output above. You will need to adjust the instructions according to your actual configuration by replacing the values in the commands with your disk and volume identifiers.
>



#### Removing the replaced disk from the configuration
 
```console
DISKPART> select volume c
  
Volume 0 is the selected volume.
  
DISKPART> break disk M0 nokeep
  
DiskPart successfully broke the mirror volume.
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Simple      1862 GB  Healthy    Boot
  Volume 1         EFI          FAT32  Partition    350 MB  Healthy    System
 
DISKPART> select disk M0
 
Disk M0 is now the selected disk.
 
DISKPART> delete disk
 
DiskPart successfully deleted the missing disk.
 
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
  Disk 0    Online         1863 GB      0 B   *    *
  Disk 1    Online         1863 GB  1863 GB
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Simple      1862 GB  Healthy    Boot
  Volume 1         EFI          FAT32  Partition    350 MB  Healthy    System
 
```

#### Initialising the replacement disk

On the new disk, create default and mandatory partitions, reflecting the existing partitioning of the first disk:
 
```console
DISKPART> select disk 1
 
Disk 1 is now the selected disk.
 
DISKPART> clean
 
DiskPart succeeded in cleaning the disk.
 
DISKPART> convert gpt
 
DiskPart successfully converted the selected disk to GPT format.
 
DISKPART> select partition 1
 
Partition 1 is now the selected partition.
 
DISKPART> delete partition override
 
DiskPart successfully deleted the selected partition.
 
DISKPART> create partition efi size=350
 
DiskPart succeeded in creating the specified partition.
 
DISKPART> format quick fs=fat32 label=EFI
 
  100 percent completed
 
DiskPart successfully formatted the volume.
 
DiskPart successfully formatted the volume.
 
DISKPART> assign letter=t
 
DiskPart successfully assigned the drive letter or mount point.
 
DISKPART> create partition msr size=128
 
DiskPart succeeded in creating the specified partition.
 
DISKPART> list partition
 
  Partition ###  Type              Size     Offset
  -------------  ----------------  -------  -------
  Partition 1    System             350 MB  1024 KB
* Partition 2    Reserved           128 MB   351 MB

```

#### Recreating the mirror between the first and the second disk 

```console
DISKPART> select volume c
 
Volume 0 is the selected volume.
 
DISKPART> add disk 1
 
DiskPart succeeded in adding a mirror to the volume.
 
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
* Disk 0    Online         1863 GB      0 B   *    *
  Disk 1    Online         1863 GB      0 B   *    *

```

Repeat this step for each existing volume from `Disk 0` that you want to mirror on `Disk 1`, using the associated drive letter (i.e. *d*, *e*, *f*, etc.).

#### Recreating the boot environment and setting boot options for the second disk

```console
DISKPART> select disk 0
 
Disk 0 is now the selected disk.
 
DISKPART> list partition
 
  Partition ###  Type              Size     Offset
  -------------  ----------------  -------  -------
  Partition 1    System             350 MB  1024 KB
  Partition 2    Dynamic Reserved  1024 KB   351 MB
  Partition 3    Reserved           127 MB   352 MB
  Partition 4    Dynamic Data      1862 GB   479 MB
  Partition 5    Dynamic Data        71 KB  1863 GB
 
DISKPART> select partition 1
 
Partition 1 is now the selected partition.
 
DISKPART> assign letter=s
 
DiskPart successfully assigned the drive letter or mount point.
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Mirror      1862 GB  Rebuild    Boot
* Volume 1     S   EFI          FAT32  Partition    350 MB  Healthy    System
  Volume 2     T   EFI          FAT32  Partition    350 MB  Healthy    Hidden
 
DISKPART> exit
 
Leaving DiskPart...
```

Back at the command prompt, copy the boot files from the boot (EFI) partition on first disk (`Disk 0`) to the boot partition on the second disk (`Disk 1`).

Type the following 3 commands and execute each one with `Enter`:
 
```
robocopy s:\ t:\ * /e /copyall /xf BCD.* /xd "System Volume Information"
bcdedit /export t:\EFI\Microsoft\Boot\BCD
bcdedit /store t:\EFI\Microsoft\Boot\BCD /set {bootmgr} device partition=t:
``` 

Then launch DiskPart again and run the following commands:
 
```console
DISKPART> select volume s
 
Volume 2 is the selected volume.
 
DISKPART> remove
 
DiskPart successfully removed the drive letter or mount point.
 
DISKPART> select volume t
 
Volume 1 is the selected volume.
 
DISKPART> remove
 
DiskPart successfully removed the drive letter or mount point.

```

The volume state will be `Rebuild` during the process, which may take several hours depending on the data stored on the disk. You can check the status in DiskPart:

```console
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Mirror      1862 GB  Rebuild    Boot
  Volume 1         EFI          FAT32  Partition    350 MB  Healthy    Hidden
  Volume 2         EFI          FAT32  Partition    350 MB  Healthy    System

```

It is best not to restart the server until the rebuild process is complete.


## Go further

Join our community of users on <https://community.ovh.com/en/>.