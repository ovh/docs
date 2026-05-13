---
title: "Verify the BMC Firmware Version on a Linux Dedicated Server"
excerpt: "Check and verify the BMC firmware version on your OVHcloud dedicated server to ensure hardware management compatibility."
updated: 2026-02-25
---

## Objective

A BMC (Baseboard Management Controller) is responsible for the remote management and low-level control of the server hardware. An outdated version can directly impact security, stability, and manageability of the server. Keeping the BMC firmware updated is necessary to patch security vulnerabilities, maintain system stability, and meet compliance requirements.

**This guide outlines the steps to check the BMC firmware version on a dedicated server.**

## Requirements

- A [dedicated server](/links/bare-metal/bare-metal) in your OVHcloud account.
- Administrator rights (sudo).
- Your dedicated server must be connected to the Internet (only if the `ipmitool` tool is not already installed).

> [!primary]
> Due to our dedicated configuration, BMC upgrade is only performed by OVHcloud automation supervised by our technician, we do not provide any package or automated mechanism to do so.
>

### On a Linux Server

First, you need to install the `ipmitool` package. This tool allows you to query the BMC via the IPMI interface. For more information, see the official documentation: <https://linux.die.net/man/1/ipmitool>.

Depending on the Linux distribution, the command may vary:

> [!tabs]
> **Debian/Ubuntu**
>>
>> ```sh
>> sudo apt update
>> sudo apt install ipmitool -y
>> ```
>>
> **RHEL/CentOS/AlmaLinux/Rocky Linux**
>>
>> ```sh
>> sudo dnf install epel-release -y
>> sudo dnf install ipmitool -y
>> ```
>>

Check the BMC firmware version using the following command:

```sh
sudo ipmitool mc info
```

![BMC firmware version output from ipmitool on Linux](images/ipmi_tool.png){.thumbnail}

### On a Windows Server

Currently, we are only able to provide the procedure for servers running Linux operating systems. We recommend that you restart your Windows server in our [rescue mode](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) environment to check the version by following the instructions below.

### On a Server in Rescue Mode

Once your server is restarted in [rescue mode](/pages/bare_metal_cloud/dedicated_servers/rescue_mode), install the `ipmitool` package.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # apt install ipmitool -y
```

Next, check the firmware version:

```sh
ipmitool mc info
```

![BMC firmware version output from ipmitool in rescue mode](images/ipmi_tool_rescue.png){.thumbnail}

## Go further

[Upgrading Samsung NVMe PM9A1 Firmware on Dedicated Servers](/pages/bare_metal_cloud/dedicated_servers/samsung-nvme-fw-upgrade)

[Dedicated Servers - Upgrading your Micron 7500 PRO firmware](/pages/bare_metal_cloud/dedicated_servers/micron-7500-fw-upgrade)

For specialized services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you need assistance with the use and configuration of your OVHcloud solutions, we offer various [support options](/links/support).

Join our [community of users](/links/community).
