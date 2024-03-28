---
title: High Grade Dedicated Servers - Upgrading your SSD SAS Western Digital SS300 firmware (EN)
excerpt: Learn how to upgrade your SSD SAS Western Digital SS300 firmware for Linux, ESXi and Windows Dedicated Servers
updated: 2024-03-26
---

## Objective

Routine firmware updates play a pivotal role in upholding your drive's performance, stability, and security. Such updates often encompass critical bug fixes, enhanced compatibility, and advanced security features that are indispensable for preserving your data integrity and maintaining optimal operational efficiency.

An important patch has been introduced in this new firmware (version BCGNB17D). We strongly recommend updating your firmware to avoid any premature end-of-life.

Firmware Release Notes: <https://last-public-ovh-baremetal.snap.mirrors.ovh.net/hardware/SS300/PCN-005015-A00.pdf>

**The purpose of this guide is to help you upgrade your SSD SAS Western Digital SS300 firmware.**

Disk part numbers:

- HUSMR3280ASS201 (800GB capacity)
- HUSMR3240ASS201 (400GB capacity)

## Requirements

- A bare metal server with SSD SAS Western Digital SS300, from the following:
    - mHG/HG/BHG 2017
    - mHG/HG/BHG 2018
    - mHG/HG/BHG 2019


## Instructions

> [!alert]
>
> - Before attempting any firmware update, a backup of the data on the drive must be made. Use our guide on [Backup Storage](/pages/bare_metal_cloud/dedicated_servers/services_backup_storage) to learn how to back up your data.
> - The firmware update does not format the drive or delete data, but a firmware update failure may happen. Please do not power off the drive or the bare metal server during the firmware update process.

> [!primary]
> All commands must be run as root for Linux and VMWare and with an administrator account for Windows.

### Linux

#### Hardware/software configuration tested on the OVHcloud side

| Platform                                         | Flash tool    | Firmware | Result |
|--------------------------------------------------|---------------|----------|--------|
| Debian 11/12 OS                                  | StorCLI 007.2705.0000.0000 | BCGNB17D | OK     |
| Ubuntu 22.04 OS                                  | StorCLI 007.2705.0000.0000 | BCGNB17D | OK     |
| Rocky 7/8 OS                                     | StorCLI 007.2705.0000.0000 | BCGNB17D | OK     |
| Debian 11/12 OS + HARD RAID                      | StorCLI 007.2705.0000.0000 | BCGNB17D | OK     |
| Ubuntu 22.04 OS + HARD RAID                      | StorCLI 007.2705.0000.0000 | BCGNB17D | OK     |
| Rocky 7/8 OS + HARD RAID                         | StorCLI 007.2705.0000.0000 | BCGNB17D | OK     |

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
Operating system = Linux 6.1.51-mod-std
Status Code = 0
Status = Success
Description = None

Number of Controllers = 1
Host Name = labo.ovh.net
Operating System  = Linux 6.1.51-mod-std
StoreLib IT Version = 07.2703.0200.0000
StoreLib IR3 Version = 16.14-0

System Overview :
===============

------------------------------------------------------------------------------------
Ctl Model                   Ports PDs DGs DNOpt VDs VNOpt BBU sPR DS  EHS ASOs Hlth
------------------------------------------------------------------------------------
  0 AVAGOMegaRAIDSAS9361-4i     4   4   0     0   0     0 Opt On  1&2 Y      3 Opt
------------------------------------------------------------------------------------

Ctl=Controller Index|DGs=Drive groups|VDs=Virtual drives|Fld=Failed
PDs=Physical drives|DNOpt=Array NotOptimal|VNOpt=VD NotOptimal|Opt=Optimal
Msng=Missing|Dgd=Degraded|NdAtn=Need Attention|Unkwn=Unknown
sPR=Scheduled Patrol Read|DS=DimmerSwitch|EHS=Emergency Spare Drive
Y=Yes|N=No|ASOs=Advanced Software Options|BBU=Battery backup unit/CV
Hlth=Health|Safe=Safe-mode boot|CertProv-Certificate Provision mode
Chrg=Charging | MsngCbl=Cable Failure
```

Then retrieve enclosure and disk slot numbers by running the command:

```bash
/opt/MegaRAID/storcli/storcli64 /cx /eall /sall show | grep -i 'HUSMR3240ASS201\|HUSMR3280ASS201'
```

> [!primary]
> x is the ID of the controller managing the disks to be updated (see above).

**We added a filter on this command to only display the SSD SAS Western Digital SS300 because the firmware update only concerns this particular disk and your server may have other disks connected to it.**

In our example, 2 disks need to be updated (252:0 and 252:1). 252 is the disk enclosure ID and 0/1 the disk slot number:

```bash
root@labo:~# /opt/MegaRAID/storcli/storcli64 /c0 /eall /sall show | grep -i 'HUSMR3240ASS201\|HUSMR3280ASS201'
252:0     6 JBOD  -  745.211 GB SAS  SSD Y   N  512B HUSMR3280ASS201  U  -
252:1     4 JBOD  -  745.211 GB SAS  SSD Y   N  512B HUSMR3280ASS201  U  -
```

#### Step 4 - Firmware update

Download the firmware binary on your server:

```bash
wget https://last-public-ovh-baremetal.snap.mirrors.ovh.net/hardware/SS300/BCGNB17D.bin
```

Execute the following command for each identified disk displayed in step 3:

```bash
/opt/MegaRAID/storcli/storcli64 /cx /ey /sz download src=BCGNB17D.bin
```

> [!primary]
> x is the ID of the controller managing the disks to be updated; y is the disk enclosure ID; z is the disk slot number (see above).

In our previous example, 2 disks need a firmware update to the latest firmware version BCGNB17D. Here's how we update the 2 disks and the command line returns:

```bash
root@labo:~# /opt/MegaRAID/storcli/storcli64 /c0 /e252 /s0 download src=BCGNB17D.bin
Starting microcode update .....please wait...
Flashing PD image .....please wait...
CLI Version = 007.2705.0000.0000 August 24, 2023
Operating system = Linux 6.1.51-mod-std
Controller = 0
Status = Success
Description = Firmware Download Succeeded.
root@labo:~# /opt/MegaRAID/storcli/storcli64 /c0 /e252 /s1 download src=BCGNB17D.bin
Starting microcode update .....please wait...
Flashing PD image .....please wait...
CLI Version = 007.2705.0000.0000 August 24, 2023
Operating system = Linux 6.1.51-mod-std
Controller = 0
Status = Success
Description = Firmware Download Succeeded.
```

At this point the firmware update is complete, please reboot your server.

#### Step 5 - Check the firmware version after the server reboot

Execute the following command for each identified disk displayed in step 3:

```bash
/opt/MegaRAID/storcli/storcli64 /cx /ey /sz show all | grep -i 'Firmware Revision'
```

> [!primary]
> x is the ID of the controller managing the disks to be updated; y is the disk enclosure ID; z is the disk slot number (see above).

Result for our example in this guide:

```bash
root@rescue:~# /opt/MegaRAID/storcli/storcli64 /c0 /e252 /s0 show all | grep -i 'Firmware Revision'
Firmware Revision = B17D
root@rescue:~# /opt/MegaRAID/storcli/storcli64 /c0 /e252 /s1 show all | grep -i 'Firmware Revision'
Firmware Revision = B17D
```

> [!primary]
> The firmware version displayed for each disk must be B17D, corresponding to the firmware we have just flashed.

Your NVMe drive now should have the firmware version **BCGNB17D**.

### ESXi 7.x

#### Hardware/software configuration tested on the OVHcloud side

| Platform                                         | Flash tool                   | Firmware | Result |
|--------------------------------------------------|------------------------------|----------|--------|
| ESXi 7.0 U3o OS + data in clear from disk        | StorCLI 007.2705.0000.0000   | BCGNB17D | OK     |
| ESXi 7.0 U3o OS + HARD RAID                      | StorCLI 007.2705.0000.0000   | BCGNB17D | OK     |

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

Run the following command to retrieve your controller ID in the *Ctl* field:

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
 
------------------------------------------------------------------------------------
Ctl Model                   Ports PDs DGs DNOpt VDs VNOpt BBU sPR DS  EHS ASOs Hlth
------------------------------------------------------------------------------------
  0 AVAGOMegaRAIDSAS9361-4i     4   4   2     0   2     0 Opt On  1&2 Y      3 Opt
------------------------------------------------------------------------------------
 
Ctl=Controller Index|DGs=Drive groups|VDs=Virtual drives|Fld=Failed
PDs=Physical drives|DNOpt=Array NotOptimal|VNOpt=VD NotOptimal|Opt=Optimal
Msng=Missing|Dgd=Degraded|NdAtn=Need Attention|Unkwn=Unknown
sPR=Scheduled Patrol Read|DS=DimmerSwitch|EHS=Emergency Spare Drive
Y=Yes|N=No|ASOs=Advanced Software Options|BBU=Battery backup unit/CV
Hlth=Health|Safe=Safe-mode boot|CertProv-Certificate Provision mode
Chrg=Charging | MsngCbl=Cable Failure
```

Then retrieve enclosure and disk slot numbers by running the command:

```bash
/opt/lsi/storcli64/storcli64 /cx /eall /sall show | grep -i 'HUSMR3240ASS201\|HUSMR3280ASS201'
```

> [!primary]
> x is the ID of the controller managing the disks to be updated (see above).


**We added a filter on this command to only display the SSD SAS Western Digital SS300 because the firmware update only concerns this particular disk and your server may have other disks connected to it.**

In our example, 2 disks need to be updated (252:0 and 252:1). 252 is the disk enclosure ID and 0/1 the disk slot number:

```bash
[root@labo:~] /opt/lsi/storcli64/storcli64 /c0 /eall /sall show | grep -i 'HUSMR3240ASS201\|HUSMR3280ASS201'
252:0     6 Onln   0 744.687 GB SAS  SSD Y   N  512B HUSMR3280ASS201  U  -
252:1     4 Onln   0 744.687 GB SAS  SSD Y   N  512B HUSMR3280ASS201  U  -
```

#### Step 4 - Firmware update

Download the firmware binary on your server:


```bash
wget https://last-public-ovh-baremetal.snap.mirrors.ovh.net/hardware/SS300/BCGNB17D.bin --no-check-certificate
```

Execute the following command for each identified disk displayed in step 3:

```bash
/opt/lsi/storcli64/storcli64 /cx /ey /sz download src=BCGNB17D.bin
```

> [!primary]
> x is the ID of the controller managing the disks to be updated; y is the disk enclosure ID; z is the disk slot number (see above).

In our previous example, 2 disks need a firmware update to the latest firmware version **BCGNB17D**. Here's how we update the 2 disks and the command line returns:

```bash
[root@labo:~] /opt/lsi/storcli64/storcli64 /c0 /e252 /s0 download src=BCGNB17D.bin
Starting microcode update .....please wait...
Flashing PD image .....please wait...
CLI Version = 007.2705.0000.0000 August 24, 2023
Operating system = VMkernel 7.0.3
Controller = 0
Status = Success
Description = Firmware Download Succeeded.
[root@labo:~] /opt/lsi/storcli64/storcli64 /c0 /e252 /s1 download src=BCGNB17D.bin
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
/opt/lsi/storcli64/storcli64 /cx /ey /sz show all | grep -i 'Firmware Revision'
```

> [!primary]
> x is the ID of the controller managing the disks to be updated; y is the disk enclosure ID; z is the disk slot number (see above).

Result for our example in this guide:

```bash
root@rescue:~# /opt/lsi/storcli64/storcli64 /c0 /e252 /s0 show all | grep -i 'Firmware Revision'
Firmware Revision = B17D
root@rescue:~# /opt/lsi/storcli64/storcli64 /c0 /e252 /s1 show all | grep -i 'Firmware Revision'
Firmware Revision = B17D
```

> [!primary]
> The firmware version displayed for each disk must be B17D, corresponding to the firmware we have just flashed.


### ESXi 8.x

#### Hardware/software configuration tested on the OVHcloud side

| Platform                                         | Flash tool                   | Firmware | Result |
|--------------------------------------------------|------------------------------|----------|--------|
| ESXi 8.0b OS                                     | StorCLI 007.2705.0000.0000   | BCGNB17D | OK     |
| ESXi 8.0b OS + HARD RAID                         | StorCLI 007.2705.0000.0000   | BCGNB17D | OK     |
  
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

Run the following command to retrieve your controller ID in the *Ctl* field:

```bash
/opt/storcli/bin/storcli64 show
```

Example:

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
 
System Overview :
===============
 
------------------------------------------------------------------------------------
Ctl Model                   Ports PDs DGs DNOpt VDs VNOpt BBU sPR DS  EHS ASOs Hlth
------------------------------------------------------------------------------------
  0 AVAGOMegaRAIDSAS9361-4i     4   4   2     0   2     0 Opt On  1&2 Y      3 Opt
------------------------------------------------------------------------------------
 
Ctl=Controller Index|DGs=Drive groups|VDs=Virtual drives|Fld=Failed
PDs=Physical drives|DNOpt=Array NotOptimal|VNOpt=VD NotOptimal|Opt=Optimal
Msng=Missing|Dgd=Degraded|NdAtn=Need Attention|Unkwn=Unknown
sPR=Scheduled Patrol Read|DS=DimmerSwitch|EHS=Emergency Spare Drive
Y=Yes|N=No|ASOs=Advanced Software Options|BBU=Battery backup unit/CV
Hlth=Health|Safe=Safe-mode boot|CertProv-Certificate Provision mode
Chrg=Charging | MsngCbl=Cable Failure
```

Then retrieve enclosure and disk slot numbers by running the command:

```bash
/opt/storcli/bin/storcli64 /cx /eall /sall show | grep -i 'HUSMR3240ASS201\|HUSMR3280ASS201'
```

> [!primary]
> x is the ID of the controller managing the disks to be updated (see above).


**We added a filter on this command to only display the SSD SAS Western Digital SS300 because the firmware update only concerns this particular disk and your server may have other disks connected to it.**

In our example, 2 disks need to be updated (252:0 and 252:1). 252 is the disk enclosure ID and 0/1 the disk slot number:

```bash
[root@labo:~] /opt/storcli/bin/storcli64 /c0 /eall /sall show | grep -i 'HUSMR3240ASS201\|HUSMR3280ASS201'
252:0     6 Onln   0 744.687 GB SAS  SSD Y   N  512B HUSMR3280ASS201  U  -
252:1     4 Onln   0 744.687 GB SAS  SSD Y   N  512B HUSMR3280ASS201  U  -
```

#### Step 4 - Firmware update

Download the firmware binary on your server:

```bash
wget https://last-public-ovh-baremetal.snap.mirrors.ovh.net/hardware/SS300/BCGNB17D.bin --no-check-certificate
```

Execute the following command for each identified disk displayed in step 3:

```bash
/opt/storcli/bin/storcli64 /cx /ey /sz download src=BCGNB17D.bin
```

> [!primary]
> x is the ID of the controller managing the disks to be updated; y is the disk enclosure ID; z is the disk slot number (see above).

In our previous example, 2 disks need a firmware update to the latest firmware version **BCGNB17D**. Here's how we update the 2 disks and the command line returns:

```bash
[root@labo:~] /opt/storcli/bin/storcli64 /c0 /e252 /s0 download src=BCGNB17D.bin
Starting microcode update .....please wait...
Flashing PD image .....please wait...
CLI Version = 007.2705.0000.0000 August 24, 2023
Operating system = VMkernel 8.0.2
Controller = 0
Status = Success
Description = Firmware Download Succeeded.
[root@labo:~] /opt/storcli/bin/storcli64 /c0 /e252 /s1 download src=BCGNB17D.bin
Starting microcode update .....please wait...
Flashing PD image .....please wait...
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
/opt/storcli/bin/storcli64 /cx /ey /sz show all | grep -i 'Firmware Revision'
```

> [!primary]
> x is the ID of the controller managing the disks to be updated; y is the disk enclosure ID; z is the disk slot number (see above).

Result for our example in this guide:

```bash
root@rescue:~# /opt/storcli/bin/storcli64 /c0 /e252 /s0 show all | grep -i 'Firmware Revision'
Firmware Revision = B17D
root@rescue:~# /opt/storcli/bin/storcli64 /c0 /e252 /s1 show all | grep -i 'Firmware Revision'
Firmware Revision = B17D
```

> [!primary]
> The firmware version displayed for each disk must be B17D, corresponding to the firmware we have just flashed.


### Windows

#### Hardware/software configuration tested on the OVHcloud side

| Platform                                      | Flash tool                   | Firmware | Result |
|-----------------------------------------------|------------------------------|----------|--------|
| Windows 2016                                  | StorCLI 007.2705.0000.0000 | BCGNB17D | OK     |
| Windows 2019                                  | StorCLI 007.2705.0000.0000 | BCGNB17D | OK     |
| Windows 2022                                  | StorCLI 007.2705.0000.0000 | BCGNB17D | OK     |
| Windows 2016 + HARD RAID                      | StorCLI 007.2705.0000.0000 | BCGNB17D | OK     |
| Windows 2019 + HARD RAID                      | StorCLI 007.2705.0000.0000 | BCGNB17D | OK     |
| Windows 2022 + HARD RAID	                     | StorCLI 007.2705.0000.0000 | BCGNB17D | OK     |

#### Step 1 - Download StorCLI

Download the StorCLI via this link: <https://docs.broadcom.com/docs-and-downloads/007.2705.0000.0000_storcli_rel.zip>

Unzip the archive. The tool you need to use, **storcli.exe**, is located in the folder: storcli_rel\Unified_storcli_all_os.zip\Unified_storcli_all_os\Windows

#### Step 2 - Check if a firmware update is needed

Open Windows PowerShell as Administrator, then run the following command in the directory where storcli.exe was unzipped to retrieve your controller ID in the *Ctl* field:

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
Host Name = NS6821121
Operating System  = Windows Server 2019
StoreLib IT Version = 07.2703.0200.0000
StoreLib IR3 Version = 16.14-0
 
System Overview :
===============
 
------------------------------------------------------------------------------------
Ctl Model                   Ports PDs DGs DNOpt VDs VNOpt BBU sPR DS  EHS ASOs Hlth
------------------------------------------------------------------------------------
  0 AVAGOMegaRAIDSAS9361-4i     4   4   2     0   2     0 Opt On  1&2 Y      3 Opt
------------------------------------------------------------------------------------
 
Ctl=Controller Index|DGs=Drive groups|VDs=Virtual drives|Fld=Failed
PDs=Physical drives|DNOpt=Array NotOptimal|VNOpt=VD NotOptimal|Opt=Optimal
Msng=Missing|Dgd=Degraded|NdAtn=Need Attention|Unkwn=Unknown
sPR=Scheduled Patrol Read|DS=DimmerSwitch|EHS=Emergency Spare Drive
Y=Yes|N=No|ASOs=Advanced Software Options|BBU=Battery backup unit/CV
Hlth=Health|Safe=Safe-mode boot|CertProv-Certificate Provision mode
Chrg=Charging | MsngCbl=Cable Failure
```

Then retrieve enclosure and disk slot numbers by running the command:

```bash
.\storcli64.exe /cx /eall /sall show | oss | sls "HUSMR3240ASS201","HUSMR3280ASS201"
```

> [!primary]
> x is the ID of the controller managing the disks to be updated; y is the disk enclosure ID; z is the disk slot number (see above).

**We added a filter on this command to only display the SSD SAS Western Digital SS300 because the firmware update only concerns this particular disk and your server may have other disks connected to it.**

In our example, 2 disks need to be updated (252:0 and 252:1). 252 is the disk enclosure ID and 0/1 the disk slot number:

```bash
PS C:\Users\admin\Desktop\007.2705.0000.0000_storcli_rel\storcli_rel\Unified_storcli_all_os\Unified_storcli_all_os\Windows> .\storcli64.exe /c0 /eall /sall show | oss | sls "HUSMR3240ASS201","HUSMR3280ASS201"
 
252:0     6 Onln   0 744.687 GB SAS  SSD Y   N  512B HUSMR3280ASS201  U  -
252:1     4 Onln   0 744.687 GB SAS  SSD Y   N  512B HUSMR3280ASS201  U  -
```

#### Step 3 - Firmware update

Download the firmware binary on your server:

```bash
wget "https://last-public-ovh-baremetal.snap.mirrors.ovh.net/hardware/SS300/BCGNB17D.bin" -outfile "BCGNB17D.bin"
```

Execute the following command for each identified disk displayed in step 2:

```bash
.\storcli64.exe /cx /ey /sz download src=BCGNB17D.bin
```

> [!primary]
> x is the ID of the controller managing the disks to be updated; y is the disk enclosure ID; z is the disk slot number (see above).

In our previous example, 2 disks need a firmware update to the latest firmware version BCGNB17D. Here's how we update the 2 disks and the command line returns:

```bash
PS C:\Users\admin\Desktop\007.2705.0000.0000_storcli_rel\storcli_rel\Unified_storcli_all_os\Unified_storcli_all_os\Windows> .\storcli64.exe /c0 /e252 /s0 download src=BCGNB17D.bin
Starting microcode update .....please wait...
Flashing PD image .....please wait...
CLI Version = 007.2705.0000.0000 August 24, 2023
Operating system = Windows Server 2019
Controller = 0
Status = Success
Description = Firmware Download Succeeded.
 
PS C:\Users\admin\Desktop\007.2705.0000.0000_storcli_rel\storcli_rel\Unified_storcli_all_os\Unified_storcli_all_os\Windows> .\storcli64.exe /c0 /e252 /s1 download src=BCGNB17D.bin
Starting microcode update .....please wait...
Flashing PD image .....please wait...
CLI Version = 007.2705.0000.0000 August 24, 2023
Operating system = Windows Server 2019
Controller = 0
Status = Success
Description = Firmware Download Succeeded.
```

#### Step 4 - Check the firmware version after the server reboot

Execute the following command for each identified disk displayed in step 2:

```bash
.\storcli64.exe /cx /ey /sz show all | oss | sls "Firmware Revision"
```

> [!primary]
> x is the ID of the controller managing the disks to be updated; y is the disk enclosure ID; z is the disk slot number (see above).

Result for our example in this guide:

```bash
PS C:\Users\admin\Desktop\007.2705.0000.0000_storcli_rel\storcli_rel\Unified_storcli_all_os\Unified_storcli_all_os\Windows> .\storcli64.exe /c0 /e252 /s0 show all | oss | sls "Firmware Revision"
 
Firmware Revision = B17D
 
PS C:\Users\admin\Desktop\007.2705.0000.0000_storcli_rel\storcli_rel\Unified_storcli_all_os\Unified_storcli_all_os\Windows> .\storcli64.exe /c0 /e252 /s1 show all | oss | sls "Firmware Revision"
 
Firmware Revision = B17D
```

> [!primary]
> The firmware version displayed for each disk must be B17D, corresponding to the firmware we have just flashed.


## Go further <a name="gofurther"></a>

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/fr/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our user community on <https://community.ovh.com/en/>.
