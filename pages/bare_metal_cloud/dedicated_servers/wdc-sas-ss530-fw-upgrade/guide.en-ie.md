---
title: High Grade Dedicated Servers - Upgrading your SSD SAS Western Digital SS530 firmware
excerpt: Learn how to upgrade your SSD SAS Western Digital SS530 firmware for Linux, ESXi and Windows Dedicated Servers
updated: 2024-08-06
---

## Objective

Routine firmware updates play a pivotal role in upholding your drives performance, stability, and security. Such updates often encompass critical bug fixes, enhanced compatibility, and advanced security features that are indispensable for preserving your data integrity and maintaining optimal operational efficiency.

An important patch has been introduced in this new firmware (version BPGNB969). We strongly recommend that you update your firmware to avoid premature end-of-life.

Firmware Release Notes: <https://last-public-ovh-baremetal.snap.mirrors.ovh.net/hardware/SS530/PCN-005196-A01.pdf>

**The purpose of this guide is to help you upgrade your SSD SAS Western Digital SS530 firmware.**

Disk Part Number:

- WUSTR6440ASS201 (400GB capacity)
- WUSTR6416ASS201 (1.6TB capacity)
- WUSTR1538ASS201 (3.84TB capacity)
- WUSTR1515ASS201 (15.36TB capacity)

## Requirements

- A bare metal server with SSD SAS Western Digital SS530, from the following:
    - High Grade HCI
    - mHG/HG/BHG 2019

## Instructions

> [!alert]
>
> - Before attempting any firmware update, a backup of the data on the drive must be made. Use our guide on [Backup Storage](/pages/bare_metal_cloud/dedicated_servers/services_backup_storage) to learn how to back up your data.
> - The firmware update does not format the drive or delete data, but a firmware update failure may happen. Please do not power off the drive or the bare metal server during the firmware update process.

> [!primary]
> All commands must be run as root for Linux and VMWare and with an administrator account for Windows.
>

### Linux

#### Hardware/software configuration tested on the OVHcloud side

| Platform                                         | Flash tool    | Firmware | Result |
|--------------------------------------------------|---------------|----------|--------|
| Debian 11/12 OS                                  | StorCLI 007.2705.0000.0000 | BPGNB969 | OK     |
| Ubuntu 22.04 OS                                  | StorCLI 007.2705.0000.0000 | BPGNB969 | OK     |
| Rocky 7/8 OS                                     | StorCLI 007.2705.0000.0000 | BPGNB969 | OK     |
| Debian 11/12 OS + HARD RAID                      | StorCLI 007.2705.0000.0000 | BPGNB969 | OK     |
| Ubuntu 22.04 OS + HARD RAID                      | StorCLI 007.2705.0000.0000 | BPGNB969 | OK     |
| Rocky 7/8 OS + HARD RAID                         | StorCLI 007.2705.0000.0000 | BPGNB969 | OK     |

#### Step 1 - Download StorCLI

Download the StorCLI package on your server:

```bash
wget https://docs.broadcom.com/docs-and-downloads/007.2705.0000.0000_storcli_rel.zip
```

Unpack the global archive:

```bash
unzip 007.2705.0000.0000_storcli_rel.zip
```

Then unpack the archive containing the binaries for the various OS:

```bash
unzip storcli_rel/Unified_storcli_all_os.zip
```

#### Step 2 - Install StorCLI

- For Debian, Ubuntu, Mint, Proxmox and similar:

```bash
dpkg -i Unified_storcli_all_os/Ubuntu/storcli_007.2705.0000.0000_all.deb
```

- For RHEL, CentOS, RockyLinux, AlmaLinux, Fedora and similar:

```bash
rpm -ivh Unified_storcli_all_os/Linux/storcli-007.2705.0000.0000-1.noarch.rpm
```

#### Step 3 - Check if a firmware update is needed

Run the following command to retrieve your controller ID in the *Ctl* field:

```bash
/opt/MegaRAID/storcli/storcli64 show
```

Example:

```bash
root@labo:~# /opt/MegaRAID/storcli/storcli64 show
CLI Version = 007.2705.0000.0000 August 24, 2023
Operating system = Linux 5.10.0-30-amd64
Status Code = 0
Status = Success
Description = None
 
Number of Controllers = 1
Host Name = labo
Operating System  = Linux 5.10.0-30-amd64
StoreLib IT Version = 07.2703.0200.0000
StoreLib IR3 Version = 16.14-0
 
IT System Overview :
==================
 
--------------------------------------------------------------------------
Ctl Model       AdapterType   VendId DevId SubVendId SubDevId PCI Address
--------------------------------------------------------------------------
  0 SAS9305-24i   SAS3224(A1) 0x1000  0xC4    0x1000   0x31A0 00:b5:00:00
--------------------------------------------------------------------------
```

Then retrieve enclosure and disk slot numbers by running the command:

```bash
/opt/MegaRAID/storcli/storcli64 /cx /sall show | grep -i 'WUSTR6440ASS201\|WUSTR6416ASS201\|WUSTR1538ASS201\|WUSTR1515ASS201'
```

> [!primary]
> x is the ID of the controller managing the disks to be updated (see above).

**We added a filter on this command to only display the SSD SAS Western Digital SS530 because the firmware update only concerns these disk reference and your server may have other disks connected to it.**

In our example, 2 disks need to be updated (:0 and :1). 0/1 is the disk slot number:

```bash
root@labo:~# /opt/MegaRAID/storcli/storcli64 /c0 /sall show | grep -i 'WUSTR6440ASS201\|WUSTR6416ASS201\|WUSTR1538ASS201\|WUSTR1515ASS201'
 :0       2 UGood -  3.492 TB SAS  SSD -   -  512B WUSTR1538ASS201  -
 :1       3 UGood -  3.492 TB SAS  SSD -   -  512B WUSTR1538ASS201  -
```

#### Step 4 - Firmware update

Download the firmware binary on your server:

```bash
wget https://last-public-ovh-baremetal.snap.mirrors.ovh.net/hardware/SS530/BPGNB969.bin
```

Execute the following command for each identified disk displayed in step 3:

```bash
/opt/MegaRAID/storcli/storcli64 /cx /sz download src=BPGNB969.bin
```

> [!primary]
> x is the ID of the controller managing the disks to be updated; y is the disk enclosure ID; z is the disk slot number (see above).

In our previous example, 2 disks need a firmware update to the latest firmware version **BPGNB969**. Here's how we update the 2 disks and the command line returns:

```bash
root@labo:~# /opt/MegaRAID/storcli/storcli64 /c0 /s0 download src=BPGNB969.bin
Starting microcode update.please wait...
CLI Version = 007.2705.0000.0000 August 24, 2023
Operating system = Linux 5.10.0-30-amd64
Controller = 0
Status = Success
Description = Firmware Download Succeeded.
root@labo:~# /opt/MegaRAID/storcli/storcli64 /c0 /s1 download src=BPGNB969.bin
Starting microcode update.please wait...
CLI Version = 007.2705.0000.0000 August 24, 2023
Operating system = Linux 5.10.0-30-amd64
Controller = 0
Status = Success
Description = Firmware Download Succeeded.
```

At this point the firmware update is complete, please reboot your server.

#### Step 5 - Check the firmware version after the server reboot

Execute the following command for each identified disk displayed in step 3:

```bash
/opt/MegaRAID/storcli/storcli64 /cx /sz show all | grep -i 'Firmware Revision'
```

> [!primary]
> x is the ID of the controller managing the disks to be updated; y is the disk enclosure ID; z is the disk slot number (see above).

Result for our example in this guide:

```bash
root@labo:~# /opt/MegaRAID/storcli/storcli64 /c0 /s0 show all | grep -i 'Firmware Revision'
Firmware Revision = B969
root@labo:~# /opt/MegaRAID/storcli/storcli64 /c0 /s1 show all | grep -i 'Firmware Revision'
Firmware Revision = B969
```

> [!primary]
> The firmware version displayed for each disk must be B969, corresponding to the firmware we have just flashed.

### ESXi 7.x

#### Hardware/software configuration tested on OVHcloud side

| Platform                                         | Flash tool                   | Firmware | Result |
|--------------------------------------------------|------------------------------|----------|--------|
| ESXi 7.0 U3o OS + data in clear from disk        | StorCLI 007.2705.0000.0000   | BPGNB969 | OK     |
| ESXi 7.0 U3o OS + HARD RAID                      | StorCLI 007.2705.0000.0000   | BPGNB969 | OK     |

#### Step 1 - Download StorCLI

Download the StorCLI package on your server:

```bash
wget https://docs.broadcom.com/docs-and-downloads/007.2705.0000.0000_storcli_rel.zip --no-check-certificate
```

Unpack the global archive:

```bash
unzip 007.2705.0000.0000_storcli_rel.zip
```

Then unpack the archive containing the binaries for the various OS:

```bash
unzip storcli_rel/Unified_storcli_all_os.zip
```

#### Step 2 - Install StorCLI

Unpack the ESXi 7.x archive:

```bash
unzip Unified_storcli_all_os/VMware/ESXi7/BCM-vmware-storcli64_007.2705.0000.0000-01_22442561-package.zip
unzip BCM-vmware-storcli64_007.2705.0000.0000-01_22442561.zip
```

Then install StorCLI:

```bash
esxcli software vib install -v=<absolute path>/vib20/vmware-storcli64/BCM_bootbank_vmware-storcli64_007.2705.0000.0000-01.vib
```

> [!primary]
> `<absolute path>` must be replaced with the .vib package absolute path from the root directory (/).

#### Step 3 - Check if a firmware update is needed

Run the following command to retrieve your controller ID in the Ctl field:

```bash
/opt/lsi/storcli64/storcli64 show
```

Example:

```bash
[root@labo:~] /opt/lsi/storcli64/storcli64 show
CLI Version = 007.2705.0000.0000 August 24, 2023
Operating system = VMkernel 7.0.3
Status Code = 0
Status = Success
Description = None
 
Number of Controllers = 1
Host Name = labo
Operating System  = VMkernel 7.0.3
StoreLib IT Version = 07.2703.0200.0000
StoreLib IR3 Version = 16.14-0
 
System Overview :
===============
 
--------------------------------------------------------------------------
Ctl Model       AdapterType   VendId DevId SubVendId SubDevId PCI Address
--------------------------------------------------------------------------
  0 SAS9305-24i   SAS3224(A1) 0x1000  0xC4    0x1000   0x31A0 00:b5:00:00
--------------------------------------------------------------------------
```

Then retrieve enclosure and disk slot numbers by running the command:

```bash
/opt/lsi/storcli64/storcli64 /cx /sall show | grep -i 'WUSTR6440ASS201\|WUSTR6416ASS201\|WUSTR1538ASS201\|WUSTR1515ASS201'
```

> [!primary]
> x is the ID of the controller managing the disks to be updated (see above).

**We added a filter on this command to only display the SSD SAS Western Digital SS530 because the firmware update only concerns this disk reference and your server may have other disks connected to it.**

In our example, 2 disks need to be updated (:0 and :1). 0/1 is the disk slot number:

```bash
[root@labo:~] /opt/lsi/storcli64/storcli64 /c0 /sall show | grep -i 'WUSTR6440ASS201\|WUSTR6416ASS201\|WUSTR1538ASS201\|WUSTR1515ASS201'
 :0       2 UGood -  3.492 TB SAS  SSD -   -  512B WUSTR1538ASS201  -
 :1       3 UGood -  3.492 TB SAS  SSD -   -  512B WUSTR1538ASS201  -
```

#### Step 4 - Firmware update

Download the firmware binary on your server:

```bash
wget https://last-public-ovh-baremetal.snap.mirrors.ovh.net/hardware/SS530/BPGNB969.bin --no-check-certificate
```

Execute the following command for each identified disk displayed in step 3:

```bash
/opt/lsi/storcli64/storcli64 /cx /sz download src=BPGNB969.bin
```

> [!primary]
> x is the ID of the controller managing the disks to be updated; y is the disk enclosure ID; z is the disk slot number (see above).

In our previous example, 2 disks need a firmware update to the latest firmware version **BPGNB969**. Here's how we update the 2 disks and the command line returns:

```bash
[root@labo:~] /opt/lsi/storcli64/storcli64 /c0 /s0 download src=BPGNB969.bin
Starting microcode update .....please wait...
Flashing PD image .....please wait...
CLI Version = 007.2705.0000.0000 August 24, 2023
Operating system = VMkernel 7.0.3
Controller = 0
Status = Success
Description = Firmware Download Succeeded.
[root@labo:~] /opt/lsi/storcli64/storcli64 /c0 /s1 download src=BPGNB969.bin
Starting microcode update .....please wait...
Flashing PD image .....please wait...
CLI Version = 007.2705.0000.0000 August 24, 2023
Operating system = VMkernel 7.0.3
Controller = 0
Status = Success
Description = Firmware Download Succeeded.
```

At this point the firmware update is complete, please reboot your server.

#### Step 5 - Check the firmware version after the server reboot

Execute the following command for each identified disk displayed in step 3:

```bash
/opt/lsi/storcli64/storcli64 /cx /sz show all | grep -i 'Firmware Revision'
```

> [!primary]
> x is the ID of the controller managing the disks to be updated; y is the disk enclosure ID; z is the disk slot number (see above).

Result for our example in this guide:

```bash
root@rescue:~# /opt/lsi/storcli64/storcli64 /c0 /s0 show all | grep -i 'Firmware Revision'
Firmware Revision = B969
root@rescue:~# /opt/lsi/storcli64/storcli64 /c0 /s1 show all | grep -i 'Firmware Revision'
Firmware Revision = B969
```

> [!primary]
> The firmware version displayed for each disk must be B969, corresponding to the firmware we have just flashed.

### ESXi 8.x

#### Hardware/software configuration tested on OVHcloud side

| Platform                                         | Flash tool                   | Firmware | Result |
|--------------------------------------------------|------------------------------|----------|--------|
| ESXi 8.0b OS                                     | StorCLI 007.2705.0000.0000   | BPGNB969 | OK     |
| ESXi 8.0b OS + HARD RAID                         | StorCLI 007.2705.0000.0000   | BPGNB969 | OK     |


#### Step 1 - Download StorCLI

Download the StorCLI package on your server:

```bash
wget https://docs.broadcom.com/docs-and-downloads/007.2705.0000.0000_storcli_rel.zip --no-check-certificate
```

Unpack the global archive:

```bash
unzip 007.2705.0000.0000_storcli_rel.zip
```

Then unpack the archive containing the binaries for the various OS:

```bash
unzip storcli_rel/Unified_storcli_all_os.zip
```

#### Step 2 - Install StorCLI

Unpack the ESXi 8.x archive:

```bash
unzip Unified_storcli_all_os/VMware/ESXi8/BCM-storcli_007.2705.0000.0000-01_22439253-package.zip
unzip BCM-storcli_007.2705.0000.0000-01_22439253.zip
```

Then install StorCLI:

```bash
esxcli software vib install -v=<absolute path>/vib20/storcli/BCM_bootbank_storcli_007.2705.0000.0000-01.vib
```

> [!primary]
> `<absolute path>` must be replaced with the .vib package absolute path from the root directory (/).

Run a server reboot, which is necessary in order to update the binary.

#### Step 3 - Check if a firmware update is needed

Run the following command to retrieve your controller ID in the Ctl field:

```bash
/opt/storcli/bin/storcli64 show
```

```bash
[root@labo:~] /opt/storcli/bin/storcli64 show
CLI Version = 007.2705.0000.0000 August 24, 2023
Operating system = VMkernel 8.0.2
Status Code = 0
Status = Success
Description = None
 
Number of Controllers = 1
Host Name = labo
Operating System  = VMkernel 8.0.2
StoreLib IT Version = 07.2703.0200.0000
StoreLib IR3 Version = 16.14-0
 
IT System Overview :
==================
 
--------------------------------------------------------------------------
Ctl Model       AdapterType   VendId DevId SubVendId SubDevId PCI Address
--------------------------------------------------------------------------
  0 SAS9305-24i   SAS3224(A1) 0x1000  0xC4    0x1000   0x31A0 00:b5:00:00
--------------------------------------------------------------------------
```

Then retrieve enclosure and disks slots numbers by running the command:

```bash
/opt/storcli/bin/storcli64 /cx /sall show | grep -i 'WUSTR6440ASS201\|WUSTR6416ASS201\|WUSTR1538ASS201\|WUSTR1515ASS201'
```

> [!primary]
> x is the ID of the controller managing the disks to be updated (see above).

**We added a filter on this command to only display the SSD SAS Western Digital SS530 because the firmware update only concerns these disk reference and your server may have other disks connected to it.**

In our example, 2 disks need to be updated (:0 and :1). 0/1 is the disk slot number:

```bash
[root@labo:~] /opt/storcli/bin/storcli64 /c0 /sall show | grep -i 'WUSTR6440ASS201\|WUSTR6416ASS201\|WUSTR1538ASS201\|WUSTR1515ASS201'
 :0       2 UGood -  3.492 TB SAS  SSD -   -  512B WUSTR1538ASS201  -
 :1       3 UGood -  3.492 TB SAS  SSD -   -  512B WUSTR1538ASS201  -
 ```

#### Step 4 - Firmware update

Download the firmware binary on your server:

```bash
wget https://last-public-ovh-baremetal.snap.mirrors.ovh.net/hardware/SS530/BPGNB969.bin --no-check-certificate
```

Execute the following command for each identified disk displayed in step 3:

```bash
/opt/storcli/bin/storcli64 /cx /sz download src=BPGNB969.bin
```

> [!primary]
> x is the ID of the controller managing the disks to be updated; y is the disk enclosure ID; z is the disk slot number (see above).

In our previous example, 2 disks need a firmware update to the latest firmware version **BPGNB969**. Here's how we update the 2 disks and the command line returns:

```bash
[root@labo:~] /opt/storcli/bin/storcli64 /c0 /s0 download src=BPGNB969.bin
Starting microcode update.please wait...
CLI Version = 007.2705.0000.0000 August 24, 2023
Operating system = VMkernel 8.0.2
Controller = 0
Status = Success
Description = Firmware Download Succeeded.
[root@labo:~] /opt/storcli/bin/storcli64 /c0 /s1 download src=BPGNB969.bin
Starting microcode update.please wait...
CLI Version = 007.2705.0000.0000 August 24, 2023
Operating system = VMkernel 8.0.2
Controller = 0
Status = Success
Description = Firmware Download Succeeded.
```

At this point the firmware update is complete, please reboot your server.

#### Step 5 - Check the firmware version after the server reboot

Execute the following command for each identified disk displayed in step 3:

```bash
/opt/storcli/bin/storcli64 /cx /sz show all | grep -i 'Firmware Revision'
```

> [!primary]
> x is the ID of the controller managing the disks to be updated; y is the disk enclosure ID; z is the disk slot number (see above).

Result for our example in this guide:

```bash
root@rescue:~# /opt/storcli/bin/storcli64 /c0 /s0 show all | grep -i 'Firmware Revision'
Firmware Revision = B969
root@rescue:~# /opt/storcli/bin/storcli64 /c0 /s1 show all | grep -i 'Firmware Revision'
Firmware Revision = B969
```

> [!primary]
> The firmware version displayed for each disk must be B969, corresponding to the firmware we have just flashed.

### Windows

#### Hardware/software configuration tested on OVHcloud side

| Platform                                      | Flash tool                   | Firmware | Result |
|-----------------------------------------------|------------------------------|----------|--------|
| Windows 2016                                  | StorCLI 007.2705.0000.0000 | BPGNB969 | OK     |
| Windows 2019                                  | StorCLI 007.2705.0000.0000 | BPGNB969 | OK     |
| Windows 2022                                  | StorCLI 007.2705.0000.0000 | BPGNB969 | OK     |
| Windows 2016 + HARD RAID                      | StorCLI 007.2705.0000.0000 | BPGNB969 | OK     |
| Windows 2019 + HARD RAID                      | StorCLI 007.2705.0000.0000 | BPGNB969 | OK     |
| Windows 2022 + HARD RAID	                    | StorCLI 007.2705.0000.0000 | BPGNB969 | OK     |

#### Step 1 - Download StorCLI

Download the StorCLI via this link: <https://docs.broadcom.com/docs-and-downloads/007.2705.0000.0000_storcli_rel.zip>

Tool version: StorCLI 007.2705.0000.0000

Unzip the archive. The tool **storcli.exe** to use is located in the folder: `storcli_rel\Unified_storcli_all_os.zip\Unified_storcli_all_os\Windows`

##### Step 2 - Check if a firmware update is needed

Open Windows PowerShell as Administrator, then run the following command in the directory where storcli.exe was unzipped to retrieve your controller ID in the Ctl field:

```bash
.\storcli64.exe show
```

```bash
PS C:\Users\admin\Desktop\007.2705.0000.0000_storcli_rel\storcli_rel\Unified_storcli_all_os\Unified_storcli_all_os\Windows> .\storcli64.exe show
CLI Version = 007.2705.0000.0000 August 24, 2023
Operating system = Windows Server 2019
Status Code = 0
Status = Success
Description = None
 
Number of Controllers = 1
Host Name = NS3186936
Operating System  = Windows Server 2019
StoreLib IT Version = 07.2703.0200.0000
StoreLib IR3 Version = 16.14-0
 
IT System Overview :
==================
 
--------------------------------------------------------------------------
Ctl Model       AdapterType   VendId DevId SubVendId SubDevId PCI Address
--------------------------------------------------------------------------
  0 SAS9305-24i   SAS3224(A1) 0x1000  0xC4    0x1000   0x31A0 00:b5:00:00
--------------------------------------------------------------------------
```

Then retrieve enclosure and disk slot numbers by running the command:

```bash
.\storcli64.exe /cx /sall show | oss | sls "WUSTR6440ASS201","WUSTR6416ASS201","WUSTR1538ASS201","WUSTR1515ASS201"
```

> [!primary]
> x is the ID of the controller managing the disks to be updated (see above).

**We added a filter on this command to only display the SSD SAS Western Digital SS530 because the firmware update only concerns these disk reference and your server may have other disks connected to it.**

In our example, 2 disks need to be updated (:0 and :1). 0/1 is the disk slot number:

```bash
PS C:\Users\admin\Desktop\007.2705.0000.0000_storcli_rel\storcli_rel\Unified_storcli_all_os\Unified_storcli_all_os\Windows> .\storcli64.exe /c0 /sall show | oss | sls "WUSTR6440ASS201","WUSTR6416ASS201","WUSTR1538ASS201","WUSTR1515ASS201"
 
 :0       2 UGood -  3.492 TB SAS  SSD -   -  512B WUSTR1538ASS201  -
 :1       3 UGood -  3.492 TB SAS  SSD -   -  512B WUSTR1538ASS201  -
```

#### Step 3 - Firmware update

Download the firmware binary on your server:

```bash
wget "https://last-public-ovh-baremetal.snap.mirrors.ovh.net/hardware/SS530/BPGNB969.bin" -outfile "BPGNB969.bin"
```

Execute the following command for each identified disk displayed in step 2:

```bash
.\storcli64.exe /cx /sz download src=BPGNB969.bin
```

> [!primary]
> x is the ID of the controller managing the disks to be updated; y is the disk enclosure ID; z is the disk slot number (see above).

In our previous example, 2 disks need a firmware update to the latest firmware version **BPGNB969**. Here's how we update the 2 disks and the command line returns:

```bash
PS C:\Users\admin\Desktop\007.2705.0000.0000_storcli_rel\storcli_rel\Unified_storcli_all_os\Unified_storcli_all_os\Windows> .\storcli64.exe /c0 /s0 download src=BPGNB969.bin
Starting microcode update.please wait...
CLI Version = 007.2705.0000.0000 August 24, 2023
Operating system = Windows Server 2019
Controller = 0
Status = Success
Description = Firmware Download Succeeded.
 
PS C:\Users\admin\Desktop\007.2705.0000.0000_storcli_rel\storcli_rel\Unified_storcli_all_os\Unified_storcli_all_os\Windows> .\storcli64.exe /c0 /s1 download src=BPGNB969.bin
Starting microcode update.please wait...
CLI Version = 007.2705.0000.0000 August 24, 2023
Operating system = Windows Server 2019
Controller = 0
Status = Success
Description = Firmware Download Succeeded.
```

At this point the firmware update is complete, please reboot your server.

#### Step 4 - Check the firmware version after the server reboot

Execute the following command for each identified disk displayed in step 2:

```bash
.\storcli64.exe /cx /sz show all | oss | sls "Firmware Revision"
```

> [!primary]
> x is the ID of the controller managing the disks to be updated; y is the disk enclosure ID; z is the disk slot number (see above).

Result for our example in this guide:

```bash
PS C:\Users\admin\Desktop\007.2705.0000.0000_storcli_rel\storcli_rel\Unified_storcli_all_os\Unified_storcli_all_os\Windows> .\storcli64.exe /c0 /s0 show all | oss | sls "Firmware Revision"
 
Firmware Revision = B969
 
PS C:\Users\admin\Desktop\007.2705.0000.0000_storcli_rel\storcli_rel\Unified_storcli_all_os\Unified_storcli_all_os\Windows> .\storcli64.exe /c0 /e252 /s1 show all | oss | sls "Firmware Revision"
 
Firmware Revision = B969
```

> [!primary]
> The firmware version displayed for each disk must be B969, corresponding to the firmware we have just flashed.

## Go further <a name="gofurther"></a>

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our [community of users](/links/community).
