---
title: Advance Dedicated Servers - Upgrading your Samsung NVMe PM9A1 firmware
excerpt: Learn how to upgrade your Samsung NVMe PM9A1 firmware for Linux, ESXi and Windows Dedicated Servers
updated: 2023-10-18
---

## Objective

Routine firmware updates play a pivotal role in upholding your NVMe drives' performance, stability, and security. Such updates often encompass critical bug fixes, enhanced compatibility, and advanced security features that are indispensable for preserving your data integrity and maintaining optimal operational efficiency.

Firmware changelog : <https://last-public-ovh-baremetal.snap.mirrors.ovh.net/hardware/PM9A1/PM9A1_FW_Change_Notification_for_General_customer_v2.1_PDF.pdf>

**The purpose of this guide is to help you upgrade your NVMe Samsung PM9A1 firmware.**

## Requirements

- An [Advance Dedicated Server](https://www.ovhcloud.com/en-au/bare-metal/advance/) with NVMe Samsung PM9A1, from the following:
    - Advance-1
    - Advance-2
    - Advance-3
    - Advance-4
    - Advance-5
    - Advance-6

## Instructions

> [!alert]
>
> - Before attempting any firmware update, a backup of the data on the drive must be made. Use our guide on [Backup Storage](/pages/bare_metal_cloud/dedicated_servers/services_backup_storage) to learn how to back up your data.
> - The firmware update does not format the data, but a firmware update failure may happen. Please do not power off the drive or the bare metal server during the firmware update process.

### Linux

#### Hardware/software configuration tested on OVHcloud side

**The tests have been performed without SED configuration.**

| Platform                                         | Flash tool    | Firmware | Result |
|--------------------------------------------------|---------------|----------|--------|
| Debian 11 OS + data in clear from disk           | cli 1.12      | GXA7802Q | OK     |
| Ubuntu 22.04 OS + data in clear from disk        | nvme-cli 1.16 | GXA7802Q | OK     |
| Rocky 8 OS + data in clear from disk             | nvme-cli 1.16 | GXA7802Q | OK     |
| Debian 11 OS + data in clear from disk + RAID    | nvme-cli 1.12 | GXA7802Q | OK     |
| Ubuntu 22.04 OS + data in clear from disk + RAID | nvme-cli 1.16 | GXA7802Q | OK     |
| Rocky 8 OS + data in clear from disk + RAID      | nvme-cli 1.16 | GXA7802Q | OK     |

#### Step 1 - Install nvme-cli

You can install nvme-cli from your distribution's package manager.

- For RHEL, CentOS, RockyLinux, AlmaLinux, Fedora and similar:

```bash
sudo dnf install nvme-cli
```

- For Debian, Ubuntu, Mint, Proxmox and similar:

```bash
sudo apt install nvme-cli
```

#### Step 2 - List NVMe drives <a name="linux-step2"></a>

The nvme list command lists all NVMe devices on your server:

```bash
sudo nvme list | grep 'Node\|MZVL2512HCJQ-00B07'
Node             SN                   Model                                    Namespace Usage                      Format           FW Rev
/dev/nvme0n1     S63CNX0T124339       SAMSUNG MZVL2512HCJQ-00B07               1           8.63  GB / 512.11  GB    512   B +  0 B   GXA7602Q
/dev/nvme1n1     S63CNX0RA09597       SAMSUNG MZVL2512HCJQ-00B07               1          11.06  GB / 512.11  GB    512   B +  0 B   GXA7602Q
```

> [!primary]
> We added a filter on this command to only display the `SAMSUNG MZVL2512HCJQ-00B07 NVME`, because the firmware update only concerns this NVMe reference and your server may have other disks connected to it.
>

#### Step 3 - Check if a firmware updated is needed

The firmware of each drive is displayed in the `FW Rev` column.

If the firmware version for all your drive is already version **GXA7802Q**, your firmware is up to date and you do not need to continue this process.

On the other hand, if at least one firmware is different from version **GXA7802Q**, you must proceed to the update detailed in step 4.

#### Step 4 - Firmware update

Download the firmware binary on your server :

```bash
wget https://last-public-ovh-baremetal.snap.mirrors.ovh.net/hardware/PM9A1/GXA7802Q_Noformat.bin
```

Execute the following command for each identified drive with a firmware different from version **GXA7802Q**:

> [!primary]
> In your command, replace `X` with the NVME node listed in [step 2](#linux-step2).

```bash
sudo nvme fw-download --fw GXA7802Q_Noformat.bin /dev/nvmeX
sudo nvme fw-activate --slot 0x1 --action 0x1 /dev/nvmeX
```

- **Example**:

In our previous example both NVMe drives need a firmware update to the latest version GXA7802Q. Here's how we update the 2 NVMe drives and the command line returns:

```bash
root@labo:/home/ubuntu# sudo nvme fw-download --fw GXA7802Q_Noformat.bin /dev/nvme0
Firmware download success
root@labo:/home/ubuntu# sudo nvme fw-activate --slot 0x1 --action 0x1 /dev/nvme0
Success committing firmware action:1 slot:1
Multiple Update Detected (MUD) Value: 0
root@labo:/home/ubuntu# sudo nvme fw-download --fw GXA7802Q_Noformat.bin /dev/nvme1
Firmware download success
root@labo:/home/ubuntu# sudo nvme fw-activate --slot 0x1 --action 0x1 /dev/nvme1
Success committing firmware action:1 slot:1
Multiple Update Detected (MUD) Value: 0
```

At this point the firmware update is complete, please reboot your server.

#### Step 5 - Check the firmware version after the server reboot

You can use the same nvme list command which lists all NVMe drives on your server:

```bash
sudo nvme list | grep 'Node\|MZVL2512HCJQ-00B07'
Node             SN                   Model                                    Namespace Usage                      Format           FW Rev
/dev/nvme0n1     S63CNX0T124339       SAMSUNG MZVL2512HCJQ-00B07               1           8.63  GB / 512.11  GB    512   B +  0 B   GXA7802Q
/dev/nvme1n1     S63CNX0RA09597       SAMSUNG MZVL2512HCJQ-00B07               1          11.06  GB / 512.11  GB    512   B +  0 B   GXA7802Q
```

Your NVMe drive now should have the firmware version **GXA7802Q**.

### ESXi

#### Hardware/software configuration tested on OVHcloud side

**The tests have been performed without SED configuration.**

| Platform                                         | Flash tool                   | Firmware | Result |
|--------------------------------------------------|------------------------------|----------|--------|
| ESXi 7.0 U3j OS + data in clear from disk        | esxcli 7.0.0                 | GXA7802Q | OK     |
| ESXi 7.0 U3j OS + data in clear from disk + RAID | esxcli 7.0.0                 | GXA7802Q | OK     |

#### Step 1 - List NVMe drives <a name="esxi-step1"></a>

The `nvme controller list` command lists all NVMe devices on your server:

```bash
esxcli nvme controller list | grep -i 'PM9A1\|Adapter'
Name                                                   Controller Number  Adapter  Transport Type  Is Online
nqn.1994-11.com.samsung:nvme:PM9A1:M.2:S63CNX0TC10818                256  vmhba2   PCIe                 true
nqn.1994-11.com.samsung:nvme:PM9A1:M.2:S63CNX0TC10816                257  vmhba1   PCIe                 true
```

> [!primary]
> We added a filter on this command to only display the **PM9A1 NVMe**, because the firmware update only concerns this NVMe reference and your server may have other disks connected to it.

#### Step 2 - Check if a firmware update is needed <a name="esxi-step2"></a>

For each NVMe in the previous list, we have to check the firmware version :

> [!primary]
> In your command, replace `X` with the NVME node listed in [step 2](#esxi-step1).

```bash
esxcli nvme device get -A vmhbaX | egrep "Model Number|Firmware Revision"
```

- **Example**:

```bash
[root@labo:~] esxcli nvme device get -A vmhba2 | egrep "Model Number|Firmware Revision"
Model Number: SAMSUNG MZVL2512HCJQ-00B07
Firmware Revision: GXA7602Q
[root@labo:~] esxcli nvme device get -A vmhba1 | egrep "Model Number|Firmware Revision"
Model Number: SAMSUNG MZVL2512HCJQ-00B07
Firmware Revision: GXA7602Q
```

If the `Firmware Revision` for all your NVMe is already version **GXA7802Q**, your firmware is up to date and you do not need to continue this process.

On the other hand, if at least one firmware is different from version **GXA7802Q**, you must proceed to the update detailed in step 3.

#### Step 3 - Firmware update

Download the firmware binary on your server :

```bash
wget https://last-public-ovh-baremetal.snap.mirrors.ovh.net/hardware/PM9A1/GXA7802Q_Noformat.bin
```

Execute the following command for each identified drive with a firmware different from version **GXA7802Q**:

> [!primary]
> - Replace `X` with the NVME node listed in [step 2](#esxi-step1).
> - Replace `[path-to-firmware]` with the actual firmware image path.

```bash
esxcli nvme device firmware download -A vmhbaX -f /[path-to-firmware]/GXA7802Q_Noformat.bin
esxcli nvme device firmware activate -a 1 -A vmhbaX -s 1
```

- **Example**:

In our previous example both NVMe drives needed a firmware update to the latest version **GXA7802Q**.<br>
Here's how we updated the 2 NVMe drives and the command line returns:

```bash
[root@labo:~] esxcli nvme device firmware download -A vmhba2 -f /GXA7802Q_Noformat.bin
Download firmware successfully.
[root@labo:~] esxcli nvme device firmware activate -a 1 -A vmhba2 -s 1
Commit firmware successfully, but activation requires reboot.
[root@labo:~] esxcli nvme device firmware download -A vmhba1 -f /GXA7802Q_Noformat.bin
Download firmware successfully.
[root@labo:~] esxcli nvme device firmware activate -a 1 -A vmhba1 -s 1
Commit firmware successfully, but activation requires reboot.
```

At this point the firmware update is complete, you need to reboot your server.

#### Step 4 - Check the firmware version after the server reboot

You can use the same command as in [step 2](#esxi-step2) to check the firmware versions on your server:

```bash
[root@labo:~] esxcli nvme device get -A vmhba2 | egrep "Model Number|Firmware Revision"
   Model Number: SAMSUNG MZVL2512HCJQ-00B07
   Firmware Revision: GXA7802Q
[root@labo:~] esxcli nvme device get -A vmhba1 | egrep "Model Number|Firmware Revision"
   Model Number: SAMSUNG MZVL2512HCJQ-00B07
   Firmware Revision: GXA7802Q
```

Your NVMe drive now should have the firmware version **GXA7802Q**.

### Windows

#### Hardware/software configuration tested on OVHcloud side

**The tests have been performed without SED configuration.**

| Platform                                      | Flash tool                   | Firmware | Result |
|-----------------------------------------------|------------------------------|----------|--------|
| Windows 2016 + data in clear from disk        | Samsung DC Toolkit 2.1.W.Q.0 | GXA7802Q | OK     |
| Windows 2019 + data in clear from disk        | Samsung DC Toolkit 2.1.W.Q.0 | GXA7802Q | OK     |
| Windows 2022 + data in clear from disk        | Samsung DC Toolkit 2.1.W.Q.0 | GXA7802Q | OK     |
| Windows 2016 + data in clear from disk + RAID | Samsung DC Toolkit 2.1.W.Q.0 | GXA7802Q | OK     |
| Windows 2019 + data in clear from disk + RAID | Samsung DC Toolkit 2.1.W.Q.0 | GXA7802Q | OK     |
| Windows 2022 + data in clear from disk + RAID | Samsung DC Toolkit 2.1.W.Q.0 | GXA7802Q | OK     |

#### Step 1 - Download Samsung DC Toolkit for Windows

Download the Samgung DC Toolkit via [this link](https://semiconductor.samsung.com/resources/software-resources/Samsung_SSD_DC_Toolkit_for_Windows_1.exe).

Tool version: Samsung DC Toolkit Version 2.1.W.Q.0

#### Step 2 -  List drives and firmware versions <a name="windows-step2"></a>

Open Windows Command Prompt as Administrator, then use the following command in the directory where the DC Toolkit was downloaded:

```bash
Samsung_SSD_DC_Toolkit_for_Windows_1.exe -L
```

#### Step 3 -  Check if a firmware update is needed <a name="windows-step3"></a>

The following command lists all the devices on your server:

```bash
C:\Users\admin\Downloads>Samsung_SSD_DC_Toolkit_for_Windows_1.exe -L
================================================================================================
Samsung DC Toolkit Version 2.1.W.Q.0
Copyright (C) 2017 SAMSUNG Electronics Co. Ltd. All rights reserved.
================================================================================================
-----------------------------------------------------------------------------------------------------------------------------------------------------------
| Disk   | Path               | Model                      | Serial         | Firmware | Optionrom | Capacity | Drive  | Total Bytes | NVMe Driver          |
| Number |                    |                            | Number         |          | Version   |          | Health | Written     |                      |
-----------------------------------------------------------------------------------------------------------------------------------------------------------
| 0:c    | \\.\PHYSICALDRIVE0 | SAMSUNG MZVL2512HCJQ-00B07 | S63CNF0T114133 | GXA7602Q | N/A       |   476 GB | GOOD   |  0.00 TB    | Windows Inbox Driver |
-----------------------------------------------------------------------------------------------------------------------------------------------------------
| 1:c    | \\.\PHYSICALDRIVE1 | SAMSUNG MZVL2512HCJQ-00B07 | S63CNF0T114205 | GXA7602Q | N/A       |   476 GB | GOOD   |  0.00 TB    | Windows Inbox Driver |
-----------------------------------------------------------------------------------------------------------------------------------------------------------
```

> [!warning]
> This command displays all the disks present in the server. Only the lines `SAMSUNG MZVL2512HCJQ-00B07` have to be checked.

The firmware of each drive is displayed in the `Firmware` column.

If the firmware version for all your drives is already version **GXA7802Q**, your firmware is up to date and you do not need to continue this process.

On the other hand, if at least one firmware is different from version **GXA7802Q**, you must proceed to the update detailed in step 4.

#### Step 4 - Firmware update

Download the firmware binary on your server : <https://last-public-ovh-baremetal.snap.mirrors.ovh.net/hardware/PM9A1/GXA7802Q_Noformat.bin>

Execute the following command for each identified drive with a firmware different from version **GXA7802Q**:

> [!primary]
> - Replace `<X>` with the Disk Number listed in [step 3](#windows-step3).
> - Replace `<firmware directory>` with the directory where the firmware is located.

```bash
Samsung_SSD_DC_Toolkit_for_Windows_1.exe --disk <X> ---firmware-download --path <firmware directory>GXA7802Q_Noformat.bin --action 1 --slot 1
```

- **Example**:

In our previous example both NVMe drives needed a firmware update to the latest version GXA7802Q.<bt>
Here's how we updated the 2 NVMe drives and the command line returns:

```bash
C:\Users\admin\Downloads>Samsung_SSD_DC_Toolkit_for_Windows_1.exe --disk 0:c --nvme-firmware-download --path C:\Users\admin\Downloads\GXA7802Q_Noformat.bin --action 1 --slot 1
================================================================================================
Samsung DC Toolkit Version 2.1.W.Q.0
Copyright (C) 2017 SAMSUNG Electronics Co. Ltd. All rights reserved.
================================================================================================
------------------------------------------------------------------------------------------------
Disk Number: 0:c | Model Name: SAMSUNG MZVL2512HCJQ-00B07 | Firmware Version: GXA7602Q
------------------------------------------------------------------------------------------------
[[ WARNING ]]

Please Note that Firmware Update may format the disk and you will lose your data
Please Ensure that data backup is taken before proceeding to Firmware Update
If you are sure then only proceed, otherwise restart the application after taking a backup
Continue Firmware image download ? [ yes ]: yes
------------------------------------------------------------------------------------------------
[SUCCESS] Downloaded firmware image successfully
------------------------------------------------------------------------------------------------

C:\Users\admin\Downloads>Samsung_SSD_DC_Toolkit_for_Windows_1.exe --disk 1:c --nvme-firmware-download --path C:\Users\admin\Downloads\GXA7802Q_Noformat.bin --action 1 --slot 1
================================================================================================
Samsung DC Toolkit Version 2.1.W.Q.0
Copyright (C) 2017 SAMSUNG Electronics Co. Ltd. All rights reserved.
================================================================================================
------------------------------------------------------------------------------------------------
Disk Number: 1:c | Model Name: SAMSUNG MZVL2512HCJQ-00B07 | Firmware Version: GXA7602Q
------------------------------------------------------------------------------------------------
[[ WARNING ]]

Please Note that Firmware Update may format the disk and you will lose your data
Please Ensure that data backup is taken before proceeding to Firmware Update
If you are sure then only proceed, otherwise restart the application after taking a backup
Continue Firmware image download ? [ yes ]: yes
------------------------------------------------------------------------------------------------
[SUCCESS] Downloaded firmware image successfully
------------------------------------------------------------------------------------------------
```

At this point the firmware update is complete, you need to reboot your server.

#### Step 5 - Check the firmware version after the server reboot

You can use the same command as in [step 2](#windos-step2) to list all NVMe drives on your server:

```bash
C:\Users\admin\Downloads>Samsung_SSD_DC_Toolkit_for_Windows_1.exe -L
================================================================================================
Samsung DC Toolkit Version 2.1.W.Q.0
Copyright (C) 2017 SAMSUNG Electronics Co. Ltd. All rights reserved.
================================================================================================
-----------------------------------------------------------------------------------------------------------------------------------------------------------
| Disk   | Path               | Model                      | Serial         | Firmware | Optionrom | Capacity | Drive  | Total Bytes | NVMe Driver          |
| Number |                    |                            | Number         |          | Version   |          | Health | Written     |                      |
-----------------------------------------------------------------------------------------------------------------------------------------------------------
| 0:c    | \\.\PHYSICALDRIVE0 | SAMSUNG MZVL2512HCJQ-00B07 | S63CNF0T114133 | GXA7802Q | N/A       |   476 GB | GOOD   |  0.00 TB    | Windows Inbox Driver |
-----------------------------------------------------------------------------------------------------------------------------------------------------------
| 1:c    | \\.\PHYSICALDRIVE1 | SAMSUNG MZVL2512HCJQ-00B07 | S63CNF0T114205 | GXA7802Q | N/A       |   476 GB | GOOD   |  0.00 TB    | Windows Inbox Driver |
-----------------------------------------------------------------------------------------------------------------------------------------------------------
```

Your NVMe drive now should have the firmware version **GXA7802Q**.

## Go further <a name="gofurther"></a>

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-au/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our user community on <https://community.ovh.com/en/>.