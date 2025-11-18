---
title: Dedicated Servers - Upgrading your Micron 7500 PRO firmware
excerpt: Learn how to upgrade your Micron 7500 PRO firmware for Linux, ESXi and Windows Dedicated Servers
updated: 2025-09-25
---

## Objective

Routine firmware updates play a pivotal role in upholding your drives, performance, stability, and security. Such updates often encompass critical bug fixes, enhanced compatibility, and advanced security features that are indispensable for preserving your data integrity and maintaining optimal operational efficiency.

**An important patch has been introduced in this new firmware (version E3MQ005). We strongly recommend updating your firmware to avoid premature failure.**

> **Firmware Release Notes:**
> 
> - Increased compatibility with customer platforms  
> - Disable LTR (Latency Tolerance Reporting) support  
> - Improved overall product robustness for handling invalid commands and non‑compliant host behavior  
> - Improved firmware handling during shutdown and power‑on  
> - Improved MCP command handling  
> - Improved NVMe‑Mi command processing and handling  
> - Improved alignment with OCP 2.0 specification  

## Drive Part Number

- **MTFDKCC960TGP-1BK1DABYY** (960 GB capacity)  
- **MTFDKCC1T9TGP-1BK1DABYY** (1.92 TB capacity)  
- **MTFDKCC3T8TGP-1BK1DABYY** (3.84 TB capacity)  
- **MTFDKCC7T6TGP-1BK1DABYY** (7.86 TB capacity)  
- **MTFDKCC15T3TGP-1BK1DABYY** (15.36 TB capacity)  

**The purpose of this guide is to help you upgrade your Micron 7500 PRO PCIe 4.0 NVMe firmware.**

## Requirements

A bare metal server with a Micron 7500 PRO PCIe 4.0 NVMe device, from the following ranges:

- High Grade  
- Scale  
- Advance  
- Rise (Processor AMD Ryzen R5‑5600X, AMD Ryzen R7‑5800X, AMD Ryzen R7‑3700pro, AMD Epyc 7302, Intel Xeon E5‑2689v4)  

## Instructions

> [!alert]
> - Before attempting any firmware update, a backup of the data on the drive **must** be made. Use our guide on [Backup Storage](/pages/bare_metal_cloud/dedicated_servers/services_backup_storage) to learn how to back up your data.  
> - The firmware update does **not** format the drive or delete data, but a firmware update failure may happen. **Do not power off the drive or the bare metal server during the firmware update process.**


> [!primary]
> All commands must be run as **root** for Linux and VMware ESXi, and with an **administrator** account for Windows.  

### Linux

#### Software configuration tested by OVHcloud

| Platform      | nvme flash tool version | Firmware | Result |
|---------------|-------------------------|----------|--------|
| Debian 13 OS  | 2.13‑2                 | E3MQ005 | OK |
| Debian 12 OS  | 2.4+really2.3‑3       | E3MQ005 | OK |
| Ubuntu 22.04 OS | 1.16‑3ubuntu0.3      | E3MQ005 | OK |
| Ubuntu 24.04 OS | 2.8‑1ubuntu0.1       | E3MQ005 | OK |
| Rocky 9 OS    | 2.11‑6.el9_6           | E3MQ005 | OK |
| Rocky 10 OS   | 2.11‑6.el10_0          | E3MQ005 | OK |

#### Step 1 – Install `nvme‑cli`

```bash
dnf install nvme-cli          # RHEL, CentOS, RockyLinux, AlmaLinux, Fedora, etc.
```

```bash
apt install nvme-cli          # Debian, Ubuntu, Mint, Proxmox, etc.
```

#### Step 2 – Check if a firmware update is needed

The command `nvme list` lists all NVMe devices on your server:

```bash
nvme list | grep -E 'Node|MTFDKCC960TGP-1BK1DABYY|MTFDKCC1T9TGP-1BK1DABYY|MTFDKCC3T8TGP-1BK1DABYY|MTFDKCC7T6TGP-1BK1DABYY|MTFDKCC15T3TGP-1BK1DABYY'
```

> [!primary]
> We added a filter on this command to only display Micron 7500 PRO NVMe devices, because the firmware update only concerns these NVMe models and your server may have other disks connected to it.

> [!primary]
> If the column **FW Rev** for all your Micron 7500 PRO devices is already **E3MQ005**, your firmware is up‑to‑date and you do not need to continue. Otherwise, proceed with step 3.

##### Example result (2 drives to update)

```text
Node                  Generic               SN                   Model                                    Namespace  Usage                      Format           FW Rev
/dev/nvme0n1          /dev/ng0n1            032510B842C5         MTFDKCC1T9TGP-1BK1DABYY                  0x1          8.19 kB /   1.92 TB    512 B + 0 B   E3MQ001
/dev/nvme1n1          /dev/ng1n1            132510B824CD         MTFDKCC1T9TGP-1BK1DABYY                  0x1          8.19 kB /   1.92 TB    512 B + 0 B   E3MQ001
```

#### Step 3 – Firmware update

Download the firmware binary on your server:

```bash
wget https://last-public-ovh-baremetal.snap.mirrors.ovh.net/hardware/7500_PRO/Micron_7500_E3MQ005_release.ubi
```

Execute the following command for each NVMe identified in step 2:  
(Replace `X` with the device node.)

```bash
nvme fw-download --fw Micron_7500_E3MQ005_release.ubi /dev/nvmeX
nvme fw-commit /dev/nvmeX -s 2 -a 3
```

**NVMe firmware update example**

```text
root@labo:/home/debian# nvme fw-download --fw Micron_7500_E3MQ005_release.ubi /dev/nvme0
Firmware download success
root@labo:/home/debian# nvme fw-commit /dev/nvme0 -s 2 -a 3
Success committing firmware action:3 slot:2
Multiple Update Detected (MUD) Value: 0
root@labo:/home/debian# nvme fw-download --fw Micron_7500_E3MQ005_release.ubi /dev/nvme1
Firmware download success
root@labo:/home/debian# nvme fw-commit /dev/nvme1 -s 2 -a 3
Success committing firmware action:3 slot:2
Multiple Update Detected (MUD) Value: 0
```

> [!primary]
> Once the command line is launched, a confirmation is requested before starting the flash. Confirm with `Y`.

#### Step 4 – Verify firmware version after server reboot

You can use the same command as in step 2:

```bash
nvme list | grep -E 'Node|MTFDKCC960TGP-1BK1DABYY|MTFDKCC1T9TGP-1BK1DABYY|MTFDKCC3T8TGP-1BK1DABYY|MTFDKCC7T6TGP-1BK1DABYY|MTFDKCC15T3TGP-1BK1DABYY'
```

Expected output:

```text
Node                  Generic               SN                   Model                                    Namespace  Usage                      Format           FW Rev
/dev/nvme0n1          /dev/ng0n1            032510B842C5         MTFDKCC1T9TGP-1BK1DABYY                  0x1          8.19 kB /   1.92 TB    512 B + 0 B   E3MQ005
/dev/nvme1n1          /dev/ng1n1            132510B824CD         MTFDKCC1T9TGP-1BK1DABYY                  0x1          8.19 kB /   1.92 TB    512 B + 0 B   E3MQ005
```

Now your NVMe drives should have have the firmware version **E3MQ005**.

### ESXi

#### Software configuration tested by OVHcloud

| Platform          | Flash tool | Firmware | Result |
|-------------------|------------|----------|--------|
| ESXi 8.0.3 OS     | esxcli 8.0.3 | E3MQ005 | OK |
| ESXi 9.0.0 OS     | esxcli 9.0.0 | E3MQ005 | OK |

#### Step 1 – List NVMe drives and check if a firmware update is needed

The command  `esxcli nvme controller list` lists all NVMe devices on your server:

```bash
esxcli nvme adapter list | grep -oE '^vmhba\S' \
  | xargs -I% sh -c "esxcli nvme device get -A % \
      | grep -qE 'MTFDKCC960TGP-1BK1DABYY|MTFDKCC1T9TGP-1BK1DABYY|MTFDKCC3T8TGP-1BK1DABYY|MTFDKCC7T6TGP-1BK1DABYY|MTFDKCC15T3TGP-1BK1DABYY' && echo %" \
  | xargs -I% sh -c "echo %:; esxcli nvme device get -A % \
      | grep -E 'Model Number:|Firmware Revision:'"
```

> [!primary]
>  We added a filter on this command to only display Micron 7500 PRO NVMe devices, because the firmware update only concerns these NVMe models and your server may have other disks connected to it.

> [!primary]
> If the column "Firmware Revision" for all your NVMe Micron 7500 PRO devices is already version E3MQ005, your firmware is up-to-date and you do not need to continue this process.
> On the other hand, if at least one firmware is different from version E3MQ005, you must proceed with step 2.

##### Example result (2 drives to update)

```bash
[root@labo:~] esxcli nvme adapter list | grep -oE '^vmhba\S' | xargs -I% sh -c "esxcli nvme device get -A % | grep -qE 'MTFDKCC960TGP-1BK1DABYY|MTFDKCC1T9TGP-1BK1DABYY|MTFDKCC3T8TGP-1BK1DABYY|MTFDKCC7T6TG
```

```text
vmhba4:
   Model Number: MTFDKCC1T9TGP-1BK1DABYY
   Firmware Revision: E3MQ001
vmhba5:
   Model Number: MTFDKCC1T9TGP-1BK1DABYY
   Firmware Revision: E3MQ001
```

#### Step 2 – Firmware update

Download the firmware binary on your server:

```bash
wget https://last-public-ovh-baremetal.snap.mirrors.ovh.net/hardware/7500_PRO/Micron_7500_E3MQ005_release.ubi --no-check-certificate
```

> [!primary]
> By default, ESXi’s firewall blocks outbound HTTPS traffic. If the download fails, add a firewall rule to allow outbound HTTPS connections.

Execute the following command for each NVMe identified in step 1:  
(Replace `X` with the adapter index.)

```bash
esxcli nvme device firmware download -A vmhbaX -f /[path-to-firmware]/Micron_7500_E3MQ005_release.ubi
esxcli nvme device firmware activate -a 3 -A vmhbaX -s 2
```

##### NVMe firmware update example

In our previous example, both NVMe drives need a firmware update to the latest version ****. Here are example commands for how to update the 2 NVMe drives and their output:

```bash
[root@labo:~] esxcli nvme device firmware download -A vmhba6 -f /Micron_7500_E3MQ005_release.ubi
Download firmware successfully.
[root@labo:~] esxcli nvme device firmware activate -a 3 -A vmhba6 -s 2
Commit firmware successfully.
[root@labo:~] esxcli nvme device firmware download -A vmhba7 -f /Micron_7500_E3MQ005_release.ubi
Download firmware successfully.
[root@labo:~] esxcli nvme device firmware activate -a 3 -A vmhba7 -s 2
Commit firmware successfully.
```

At this point the firmware update is complete. Reboot the server to finish the process.

#### Step 3 – Verify firmware version after reboot

You can use the same nvme list command as in step 1:

```bash
esxcli nvme adapter list | grep -oE '^vmhba\S' \
  | xargs -I% sh -c "esxcli nvme device get -A % \
      | grep -qE 'MTFDKCC960TGP-1BK1DABYY|MTFDKCC1T9TGP-1BK1DABYY|MTFDKCC3T8TGP-1BK1DABYY|MTFDKCC7T6TGP-1BK1DABYY|MTFDKCC15T3TGP-1BK1DABYY' && echo %" \
  | xargs -I% sh -c "echo %:; esxcli nvme device get -A % \
      | grep -E 'Model Number:|Firmware Revision:'"
```

Expected output:

```text
vmhba4:
   Model Number: MTFDKCC1T9TGP-1BK1DABYY
   Firmware Revision: E3MQ005
vmhba5:
   Model Number: MTFDKCC1T9TGP-1BK1DABYY
   Firmware Revision: E3MQ005
```

Now your NVMe drives should have have the firmware version **E3MQ005**.


### Windows

#### Software configuration tested by OVHcloud

| Platform        | Flash tool      | Firmware | Result |
|-----------------|-----------------|----------|--------|
| Windows 2019 OS | msecli 08.11.25 | E3MQ005  | OK     |
| Windows 2022 OS | msecli 08.11.25 | E3MQ005  | OK     |
| Windows 2025 OS | msecli 08.11.25 | E3MQ005  | OK     |

#### Step 1 – Download `msecli`

Download the `msecli` executable:  
<https://last-public-ovh-baremetal.snap.mirrors.ovh.net/hardware/7500_PRO/msecli-windows.exe>

Install the software with the default options.

#### Step 2 – List NVMe drive

Open Windows PowerShell as Administrator, then run the following command to list NVMe devices:

```bash
msecli -L | sls "MTFDKCC960TGP-1BK1DABYY","MTFDKCC1T9TGP-1BK1DABYY","MTFDKCC3T8TGP-1BK1DABYY","MTFDKCC7T6TGP-1BK1DABYY","MTFDKCC15T3TGP-1BK1DABYY" -Context 0,11
```

> [!primary]
> We added a filter on this command to only display the Micron 7500 PRO NVMe, because the firmware update only concerns these NVMe references and your server may have other disks connected to it.

> [!primary]
> If the line **FW‑Rev** for all your NVMe Micron 7500 PRO devices already displays version **E3MQ005**, your firmware is up‑to‑date and you do not need to continue this process.  
> On the other hand, if at least one firmware is different from version **E3MQ005**, you must proceed with step 3.

##### Example result on a server with 2 NVMe drives to update

```bash
PS C:\Windows\system32> msecli -L | sls "MTFDKCC960TGP-1BK1DABYY","MTFDKCC1T9TGP-1BK1DABYY","MTFDKCC3T8TGP-1BK1DABYY","MTFDKCC7T6TGP-1BK1DABYY","MTFDKCC15T3TGP-1BK1DABYY" -Context 0,11
```

Expected output:

```text
> Model No             : MTFDKCC1T9TGP-1BK1DABYY
  Serial No            : 082510AA535D
  FW-Rev               : E3MQ001
  Drive Density        : 1920.00GB
  Total Size           : 1920.00GB
  Drive Status         : Drive is in good health
  PCI Path (B:D.F)     : 1D:00.0
  Vendor               : Micron
  ZNS Supported        : No
  PCIe Link Speed      : 16.0 GT/s
  Device Path          :
  OS Device            : Drive0
> Model No             : MTFDKCC1T9TGP-1BK1DABYY
  Serial No            : 082510AA5337
  FW-Rev               : E3MQ001
  Drive Density        : 1920.00GB
  Total Size           : 1920.00GB
  Drive Status         : Drive is in good health
  PCI Path (B:D.F)     : 20:00.0
  Vendor               : Micron
  ZNS Supported        : No
  PCIe Link Speed      : 16.0 GT/s
  Device Path          :
  OS Device            : Drive1
```

#### Step 3 – Firmware update

Download the firmware binary on your server:

```bash
Invoke-WebRequest "https://last-public-ovh-baremetal.snap.mirrors.ovh.net/hardware/7500_PRO/Micron_7500_E3MQ005_release.ubi" -OutFile "Micron_7500_E3MQ005_release.ubi"
```

Execute the following command for each identified NVMe in step 2. 
(Replace `X` with the "OS Device" index listed in step 2.)

```bash
msecli -F -U Micron_7500_E3MQ005_release.ubi -n DriveX -S 2
```

> [!primary]
> Once the command is launched, a confirmation is requested before starting the flash. Confirm with `Y`.

##### NVMe firmware update example

In our previous example, both NVMe drives need a firmware update to the latest version **E3MQ005**. Here are example commands for how to update the 2 NVMe drives and their output:

```bash
PS C:\Windows\system32> msecli -F -U Micron_7500_E3MQ005_release.ubi -n Drive0 -S 2
```

```text
Trying to update current firmware for mtinvme082510AA535D.
Are you sure you want to continue(Y|N):Y

Firmware update for mtinvme082510AA535D will take a few minutes to complete.
Please wait
....
Device Name  : mtinvme082510aa535d
Firmware update operation completed successfully.

CMD_STATUS   : Success
STATUS_CODE  : 0
TIME_STAMP   : Tue Sep 23 02:29:10 2025

Copyright (C) 2025 Micron Technology, Inc.
PS C:\Windows\system32> msecli -F -U Micron_7500_E3MQ005_release.ubi -n Drive1 -S 2

Trying to update current firmware for mtinvme082510AA5337.
Are you sure you want to continue(Y|N):Y

Firmware update for mtinvme082510AA5337 will take a few minutes to complete.
Please wait
....
Device Name  : mtinvme082510AA5337
Firmware update operation completed successfully.

CMD_STATUS   : Success
STATUS_CODE  : 0
TIME_STAMP   : Tue Sep 23 02:29:10 2025

Copyright (C) 2025 Micron Technology, Inc.
```

At this point the firmware update is complete. Reboot the server to finish the process.

#### Step 4 – Verify firmware version after server reboot

You can use the same command as in step 2:

```bash
msecli -L | sls "MTFDKCC960TGP-1BK1DABYY","MTFDKCC1T9TGP-1BK1DABYY","MTFDKCC3T8TGP-1BK1DABYY","MTFDKCC7T6TGP-1BK1DABYY","MTFDKCC15T3TGP-1BK1DABYY" -0,11
```

##### Example output after the update

```bash
PS C:\Windows\system32> msecli -L | sls "MTFDKCC960TGP-1BK1DABYY","MTFDKCC1T9TGP-1BK1DABYY","MTFDKCC3T8TGP-1BK1DABYY","MTFDKCC7T6TGP-1BK1DABYY","MTFDKCC15T3TGP-1BK1DABYY" -Context 0,11
```

```text
> Model No             : MTFDKCC1T9TGP-1BK1DABYY
  Serial No            : 082510AA535D
  FW-Rev               : E3MQ005
  Drive Density        : 1920.00GB
  Total Size           : 1920.00GB
  Drive Status         : Drive is in good health
  PCI Path (B:D.F)     : 1D:00.0
  Vendor               : Micron
  ZNS Supported        : No
  PCIe Link Speed      : 16.0 GT/s
  Device Path          :
  OS Device            : Drive2
> Model No             : MTFDKCC1T9TGP-1BK1DABYY
  Serial No            : 082510AA5337
  FW-Rev               : E3MQ005
  Drive Density        : 1920.00GB
  Total Size           : 1920.00GB
  Drive Status         : Drive is in good health
  PCI Path (B:D.F)     : 20:00.0
  Vendor               : Micron
  ZNS Supported        : No
  PCIe Link Speed      : 16.0 GT/s
  Device Path          :
  OS Device            : Drive3
```

Now your NVMe drives should have have the firmware version **E3MQ005**.

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our [community of users](/links/community).
