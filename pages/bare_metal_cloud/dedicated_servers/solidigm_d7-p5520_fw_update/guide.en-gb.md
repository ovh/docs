---
title: Dedicated Servers - Upgrading your SSD Solidigm D7-P5520 firmware
excerpt: Learn how to upgrade your SSD Solidigm D7-P5520 firmware for Linux, ESXi and Windows Dedicated Servers
updated: 2025-06-16
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objective

Routine firmware updates play a pivotal role in upholding your drives' performance, stability, and security. Such updates often encompass critical bug fixes, enhanced compatibility, and advanced security features that are indispensable for preserving your data integrity and maintaining optimal operational efficiency.

An important patch has been introduced in this new firmware (version 9CV10490). We strongly recommend to update your firmware to avoid premature failure.

> **Firmware Release Notes:**
>
> Mitigates the following issues besides some other minor/corner case fixes:
>
> - Admin Command Timeout During Read Intensive Workloads
> - Drive May Fail to Enumerate Following Unplanned Power Cycle
> - Failure of MOS-FET Component Leads to Higher Drive Failure Rate
>

The purpose of this guide is to help you upgrade your Solidigm D7-P5520 PCIe 4.0 NVMe firmware.

Drive Part Number:

- SSDPF2KX019T1O (1.92TB capacity)
- SSDPF2KX038T1O (3.84TB capacity)
- SSDPF2KX076T1O (7.86TB capacity)
- SSDPF2KX153T1O (15.36TB capacity)

## Requirements

A bare metal server with a Solidigm D7-P5520 PCIe 4.0 NVMe device, from the following ranges:

- High Grade
- Scale
- Advance
- Rise (Processors: AMD Ryzen R5-5600X ; AMD Ryzen R7-5800X ; AMD Ryzen R7-3700pro ; AMD Epyc Epyc7302 ; Intel Xeon  E5-2689v4) 

## Instructions

> [!alert]
>
> Before attempting any firmware update, a backup of the data on the drive must be made. Use our guide on [Backup Storage](/pages/bare_metal_cloud/dedicated_servers/services_backup_storage) to learn how to back up your data.
> The firmware update does not format the drive or delete data, but a firmware update failure may happen. Please do not power off the drive or the bare metal server during the firmware update process.
> 

> [!primary]
>
> All commands must be run as root for Linux and VMware ESXi, and with an administrator account for Windows.
>

### Linux

#### Software configuration tested by OVHcloud

| Platform | Flash tool | Firmware | Result |
| -- | -- | -- | -- |
| Debian 11/12 OS | sofu 2.1 | 9CV10490 | OK |
| Ubuntu 22.04/24.04 OS | sofu 2.1 | 9CV10490 | OK |
| Rocky 8/9 OS | sofu 2.1 | 9CV10490 | OK |

#### Step 1 - Download the firmware package

Download the firmware package on your server:

```bash
wget https://last-public-ovh-baremetal.snap.mirrors.ovh.net/hardware/P5520/P5520_FW_to9CV10490_Linux_64.zip
```

Unpack the archive:

```bash
unzip P5520_FW_to9CV10490_Linux_64.zip
```

#### Step 2 - Make the tool executable

```bash
chmod +x sofu_2.1_x64
```

#### Step 3 - Update the firmware

The tool only detects Solidigm D7-P5520 NVMe devices and starts the flash if the firmware is not up to date:

```bash
./sofu_2.1_x64
```

/// details | **Example result on a server with 3 Solidigm drives to update**

```bash
root@labo:~# ./sofu_2.1_x64
 
- PHAX410202711P9BGN 1 -
 
DeviceStatus : Healthy
DevicePath : /dev/nvme0n1
ProductFamily : Intel SSD DC P5520 Series
FirmwareUpdateAvailable : 9CV10490
Index : 0
Firmware : 9CV10207
Bootloader : Value not found
SerialNumber : PHAX410202711P9BGN
ModelNumber : INTEL SSDPF2KX019T1O
 
Updating firmware...
 
 
Status : Firmware updated successfully. Please reboot the system.
 
=================================================
            S U C C E S S
=================================================
 
Status : Firmware updated successfully. Please reboot the system.
 
 
- PHAX220103V43P8CGN 1 -
 
DeviceStatus : Healthy
DevicePath : /dev/nvme1n1
ProductFamily : Intel SSD DC P5520 Series
FirmwareUpdateAvailable : 9CV10490
Index : 1
Firmware : 9CV10207
Bootloader : Value not found
SerialNumber : PHAX220103V43P8CGN
ModelNumber : INTEL SSDPF2KX038T1O
 
Updating firmware...
 
 
Status : Firmware updated successfully. Please reboot the system.
 
=================================================
            S U C C E S S
=================================================
 
Status : Firmware updated successfully. Please reboot the system.
 
 
- PHAX3413009F7P6DGN 1 -
 
DeviceStatus : Healthy
DevicePath : /dev/nvme2n1
ProductFamily : Intel SSD DC P5520 Series
FirmwareUpdateAvailable : 9CV10490
Index : 2
Firmware : 9CV10207
Bootloader : Value not found
SerialNumber : PHAX3413009F7P6DGN
ModelNumber : INTEL SSDPF2KX076T1O
 
Updating firmware...
 
 
Status : Firmware updated successfully. Please reboot the system.
 
=================================================
            S U C C E S S
=================================================
 
Status : Firmware updated successfully. Please reboot the system.
```

///

The following message should be displayed for each NVMe Solidigm D7-P5520 device whose firmware was not up to date:

```bash
Status : Firmware updated successfully. Please reboot the system.

=================================================
            S U C C E S S
=================================================

Status : Firmware updated successfully. Please reboot the system.
```

At this point the firmware update is complete. You should now reboot your server.

#### Step 4 - Check the firmware version is up-to-date after the server reboot

To check that the firmware is up to date, simply run the *Sofu* tool once more:

```bash
./sofu_2.1_x64
```

The tool should return the following message for each drive: **"The selected drive contains current firmware as of this tool release."**

You can also check for each NVMe that the firmware version is the expected one : **9CV10490**

/// details | **Example result on a server with 3 Solidigm drives to update**

```bash
root@labo:~# ./sofu_2.1_x64
 
- PHAX410202711P9BGN 1 -
 
DeviceStatus : Healthy
DevicePath : /dev/nvme0n1
ProductFamily : Intel SSD DC P5520 Series
FirmwareUpdateAvailable : The selected drive contains current firmware as of this tool release.
Index : 0
Firmware : 9CV10490
Bootloader : Value not found
SerialNumber : PHAX410202711P9BGN
ModelNumber : INTEL SSDPF2KX019T1O
 
Updating firmware...
 
 
Status : The selected drive contains current firmware as of this tool release.
 
 
- PHAX220103V43P8CGN 1 -
 
DeviceStatus : Healthy
DevicePath : /dev/nvme1n1
ProductFamily : Intel SSD DC P5520 Series
FirmwareUpdateAvailable : The selected drive contains current firmware as of this tool release.
Index : 1
Firmware : 9CV10490
Bootloader : Value not found
SerialNumber : PHAX220103V43P8CGN
ModelNumber : INTEL SSDPF2KX038T1O
 
Updating firmware...
 
 
Status : The selected drive contains current firmware as of this tool release.
 
 
- PHAX3413009F7P6DGN 1 -
 
DeviceStatus : Healthy
DevicePath : /dev/nvme2n1
ProductFamily : Intel SSD DC P5520 Series
FirmwareUpdateAvailable : The selected drive contains current firmware as of this tool release.
Index : 2
Firmware : 9CV10490
Bootloader : Value not found
SerialNumber : PHAX3413009F7P6DGN
ModelNumber : INTEL SSDPF2KX076T1O
 
Updating firmware...
 
 
Status : The selected drive contains current firmware as of this tool release.
```

///

### ESXi 8.0

#### Software configuration tested by OVHcloud

| Platform | Flash tool | Firmware | Result |
| -- | -- | -- | -- |
| ESXi 8.0U2c OS | sofu 2.2 | 9CV10490 | OK |

#### Step 1 - Download the firmware package

Download the firmware package on your server:

```bash
wget https://last-public-ovh-baremetal.snap.mirrors.ovh.net/hardware/P5520/P5520_FW_to_9CV10490_ESXi.zip --no-check-certificate
```

**By default, ESXi's firewall policy blocks outbound HTTPS traffic. If you are unable to download the firmware, you may need to add a firewall rule to allow outbound HTTPS connections.**

Unpack the archive:

```bash
unzip -d /tmp P5520_FW_to_9CV10490_ESXi.zip
```

#### Step 2 - Install Sofu

```bash
esxcli software vib install -v /tmp/solidigm-firmware-updater_2.2.201-400.vib --no-sig-check
```

Run a server reboot, which is necessary in order to update the binary.

#### Step 3 - Update the firmware

Enter the tool directory:

```bash
cd /opt/solidigm/sofu/
```

The tool only detects Solidigm D7-P5520 NVMe devices and starts the flash if the firmware is not up to date:

```bash
./sofu
```

/// details | **Example result on a server with 4 Solidigm drives to update**

```bash
[root@labo:~] cd /opt/solidigm/sofu/
[root@labo:/opt/solidigm/sofu] ./sofu
 
- BTAX444308M31P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
Firmware : 9CV10207
SerialNumber : BTAX444308M31P9BGN
FirmwareUpdateAvailable : 9CV10490
DeviceStatus : Healthy
Index : 0
ProductFamily : Intel SSD DC P5520 Series
Bootloader : Value not found
DevicePath : nvmeMgmt-nvmhba0
 
Updating firmware...
 
 
Status : Firmware update successful. Please reboot to apply update.
 
=================================================
            S U C C E S S
=================================================
 
Status : Firmware update successful. Please reboot to apply update.
 
 
- PHAX216501QX1P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
Firmware : 9CV10207
SerialNumber : PHAX216501QX1P9BGN
FirmwareUpdateAvailable : 9CV10490
DeviceStatus : Healthy
Index : 1
ProductFamily : Intel SSD DC P5520 Series
Bootloader : Value not found
DevicePath : nvmeMgmt-nvmhba1
 
Updating firmware...
 
 
Status : Firmware update successful. Please reboot to apply update.
 
=================================================
            S U C C E S S
=================================================
 
Status : Firmware update successful. Please reboot to apply update.
 
 
- PHAX2165021L1P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
Firmware : 9CV10207
SerialNumber : PHAX2165021L1P9BGN
FirmwareUpdateAvailable : 9CV10490
DeviceStatus : Healthy
Index : 4
ProductFamily : Intel SSD DC P5520 Series
Bootloader : Value not found
DevicePath : nvmeMgmt-nvmhba4
 
Updating firmware...
 
 
Status : Firmware update successful. Please reboot to apply update.
 
=================================================
            S U C C E S S
=================================================
 
Status : Firmware update successful. Please reboot to apply update.
 
 
- BTAX4443088A1P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
Firmware : 9CV10207
SerialNumber : BTAX4443088A1P9BGN
FirmwareUpdateAvailable : 9CV10490
DeviceStatus : Healthy
Index : 5
ProductFamily : Intel SSD DC P5520 Series
Bootloader : Value not found
DevicePath : nvmeMgmt-nvmhba5
 
Updating firmware...
 
 
Status : Firmware update successful. Please reboot to apply update.
 
=================================================
            S U C C E S S
=================================================
 
Status : Firmware update successful. Please reboot to apply update.
```

///

The following message should be displayed for each NVMe Solidigm D7-P5520 device whose firmware was not up to date:

```bash
Status : Firmware updated successfully. Please reboot the system.

=================================================
            S U C C E S S
=================================================

Status : Firmware updated successfully. Please reboot the system.
```

At this point the firmware update is complete. You should now reboot your server.

### Step 4 - Check the firmware version is up-to-date after the server reboot

To check that the firmware is up to date, simply run the *Sofu* tool once more:

```bash
cd /opt/solidigm/sofu/
./sofu
```

The tool should return the following message for each drive: **"The selected drive contains current firmware as of this tool release."**

You can also check for each NVMe that the firmware version is the expected one : **9CV10490**

/// details | **Example result on a server with 4 Solidigm drives to update**

```bash
[root@labo:~] cd /opt/solidigm/sofu/
[root@labo:/opt/solidigm/sofu] ./sofu

- BTAX444308M31P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
Firmware : 9CV10490
SerialNumber : BTAX444308M31P9BGN
FirmwareUpdateAvailable : The selected drive contains current firmware as of this tool release.
DeviceStatus : Healthy
Index : 0
ProductFamily : Intel SSD DC P5520 Series
Bootloader : Value not found
DevicePath : nvmeMgmt-nvmhba0
 
Updating firmware...
 
 
Status : The selected drive contains current firmware as of this tool release.
 
 
- PHAX216501QX1P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
Firmware : 9CV10490
SerialNumber : PHAX216501QX1P9BGN
FirmwareUpdateAvailable : The selected drive contains current firmware as of this tool release.
DeviceStatus : Healthy
Index : 1
ProductFamily : Intel SSD DC P5520 Series
Bootloader : Value not found
DevicePath : nvmeMgmt-nvmhba1
 
Updating firmware...
 
 
Status : The selected drive contains current firmware as of this tool release.
 
 
- PHAX2165021L1P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
Firmware : 9CV10490
SerialNumber : PHAX2165021L1P9BGN
FirmwareUpdateAvailable : The selected drive contains current firmware as of this tool release.
DeviceStatus : Healthy
Index : 4
ProductFamily : Intel SSD DC P5520 Series
Bootloader : Value not found
DevicePath : nvmeMgmt-nvmhba4
 
Updating firmware...
 
 
Status : The selected drive contains current firmware as of this tool release.
 
 
- BTAX4443088A1P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
Firmware : 9CV10490
SerialNumber : BTAX4443088A1P9BGN
FirmwareUpdateAvailable : The selected drive contains current firmware as of this tool release.
DeviceStatus : Healthy
Index : 5
ProductFamily : Intel SSD DC P5520 Series
Bootloader : Value not found
DevicePath : nvmeMgmt-nvmhba5
 
Updating firmware...
 
 
Status : The selected drive contains current firmware as of this tool release.
```

///

### Windows

#### Software configuration tested by OVHcloud

| Platform | Flash tool | Firmware | Result |
| -- | -- | -- | -- |
| Windows 2019 | sofu 2.1 | 9CV10490 | OK |
| Windows 2022 | sofu 2.1 | 9CV10490 | OK |
| Windows 2025 | sofu 2.1 | 9CV10490 | OK |

#### Step 1 - Download the firmware package

Download the firmware package on your server: <https://last-public-ovh-baremetal.snap.mirrors.ovh.net/hardware/P5520/P5520_FW_to_9CV10490_Win64.zip>

**Tool version: 2.1**

Unzip the archive. The tool to use is `sofu_2.1_win64.exe`, it is located in the unzipped folder.

#### Step 2 - Update the firmware

Run Windows PowerShell as administrator, then run the following command in the directory where `sofu_2.1_win64.exe` was unzipped :

```bash
.\sofu_2.1_win64.exe
```

/// details | **Example result on a server with 4 Solidigm drives to update**

```bash
PS C:\Users\admin\Desktop\P5520_FW_to_9CV10490_Win64> .\sofu_2.1_win64.exe
 
- PHAX2165021L1P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
DevicePath : \\\\.\\PHYSICALDRIVE2
ProductFamily : Intel SSD DC P5520 Series
Firmware : 9CV10207
SerialNumber : PHAX2165021L1P9BGN
FirmwareUpdateAvailable : 9CV10490
Index : 2
Bootloader : Value not found
DeviceStatus : Healthy
 
Updating firmware...
 
 
Status : Firmware updated successfully. Please reboot the system.
 
=================================================
            S U C C E S S
=================================================
 
Status : Firmware updated successfully. Please reboot the system.
 
 
- BTAX4443088A1P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
DevicePath : \\\\.\\PHYSICALDRIVE3
ProductFamily : Intel SSD DC P5520 Series
Firmware : 9CV10207
SerialNumber : BTAX4443088A1P9BGN
FirmwareUpdateAvailable : 9CV10490
Index : 3
Bootloader : Value not found
DeviceStatus : Healthy
 
Updating firmware...
 
 
Status : Firmware updated successfully. Please reboot the system.
 
=================================================
            S U C C E S S
=================================================
 
Status : Firmware updated successfully. Please reboot the system.
 
 
- BTAX444308M31P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
DevicePath : \\\\.\\PHYSICALDRIVE4
ProductFamily : Intel SSD DC P5520 Series
Firmware : 9CV10207
SerialNumber : BTAX444308M31P9BGN
FirmwareUpdateAvailable : 9CV10490
Index : 4
Bootloader : Value not found
DeviceStatus : Healthy
 
Updating firmware...
 
 
Status : Firmware updated successfully. Please reboot the system.
 
=================================================
            S U C C E S S
=================================================
 
Status : Firmware updated successfully. Please reboot the system.
 
 
- PHAX216501QX1P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
DevicePath : \\\\.\\PHYSICALDRIVE5
ProductFamily : Intel SSD DC P5520 Series
Firmware : 9CV10207
SerialNumber : PHAX216501QX1P9BGN
FirmwareUpdateAvailable : 9CV10490
Index : 5
Bootloader : Value not found
DeviceStatus : Healthy
 
Updating firmware...
 
 
Status : Firmware updated successfully. Please reboot the system.
 
=================================================
            S U C C E S S
=================================================
 
Status : Firmware updated successfully. Please reboot the system.
```

///

The following message should be displayed for each NVMe Solidigm D7-P5520 device whose firmware was not up to date:

```bash
Status : Firmware updated successfully. Please reboot the system.

=================================================
            S U C C E S S
=================================================

Status : Firmware updated successfully. Please reboot the system.
```

At this point the firmware update is complete. You should now reboot your server.

#### Step 3 - Check the firmware version is up-to-date after the server reboot

To check that the firmware is up to date, simply run the *Sofu* tool once more. Run Windows PowerShell as administrator, then run the following command in the directory where `sofu_2.1_win64.exe` was unzipped :

```bash
.\sofu_2.1_win64.exe
```

The tool should return the following message for each drive: **"The selected drive contains current firmware as of this tool release."**

You can also check for each NVMe that the firmware version is the expected one : **9CV10490**

/// details | **Example result on a server with 4 Solidigm drives to update**

```bash
PS C:\Users\admin\Desktop\P5520_FW_to_9CV10490_Win64> .\sofu_2.1_win64.exe
 
- PHAX2165021L1P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
DevicePath : \\\\.\\PHYSICALDRIVE2
ProductFamily : Intel SSD DC P5520 Series
Firmware : 9CV10490
SerialNumber : PHAX2165021L1P9BGN
FirmwareUpdateAvailable : The selected drive contains current firmware as of this tool release.
Index : 2
Bootloader : Value not found
DeviceStatus : Healthy
 
Updating firmware...
 
 
Status : The selected drive contains current firmware as of this tool release.
 
 
- BTAX4443088A1P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
DevicePath : \\\\.\\PHYSICALDRIVE3
ProductFamily : Intel SSD DC P5520 Series
Firmware : 9CV10490
SerialNumber : BTAX4443088A1P9BGN
FirmwareUpdateAvailable : The selected drive contains current firmware as of this tool release.
Index : 3
Bootloader : Value not found
DeviceStatus : Healthy
 
Updating firmware...
 
 
Status : The selected drive contains current firmware as of this tool release.
 
 
- BTAX444308M31P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
DevicePath : \\\\.\\PHYSICALDRIVE4
ProductFamily : Intel SSD DC P5520 Series
Firmware : 9CV10490
SerialNumber : BTAX444308M31P9BGN
FirmwareUpdateAvailable : The selected drive contains current firmware as of this tool release.
Index : 4
Bootloader : Value not found
DeviceStatus : Healthy
 
Updating firmware...
 
 
Status : The selected drive contains current firmware as of this tool release.
 
 
- PHAX216501QX1P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
DevicePath : \\\\.\\PHYSICALDRIVE5
ProductFamily : Intel SSD DC P5520 Series
Firmware : 9CV10490
SerialNumber : PHAX216501QX1P9BGN
FirmwareUpdateAvailable : The selected drive contains current firmware as of this tool release.
Index : 5
Bootloader : Value not found
DeviceStatus : Healthy
 
Updating firmware...
 
 
Status : The selected drive contains current firmware as of this tool release.
```

///

## Go further <a name="gofurther"></a>

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our [community of users](/links/community).