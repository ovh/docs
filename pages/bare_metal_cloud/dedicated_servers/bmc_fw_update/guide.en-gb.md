---
title: Verifying the BMC firmware version on a dedicated server
excerpt: "Discover how to check the BMC firmware version on a dedicated server."
updated: 2026-02-11
---

## Objective

Routine firmware updates play a pivotal role in upholding your drives performance, stability, and security. Such updates often encompass critical bug fixes, enhanced compatibility, and advanced security features that are indispensable for preserving your data integrity and maintaining optimal operational efficiency.

**This guide outlines the steps to check the BMC firmware version on a dedicated server.**

## Requirements

- A [dedicated server](/links/bare-metal/bare-metal) in your OVHcloud account.
- Administrator rights (sudo).
- Internet connection (only if the `ipmitool` package is not already installed on the server).

### On a Linux Server

First, you need to install the `ipmitool` package. This tool allows you to query the BMC via the IPMI interface. Here is the official documentation: <https://linux.die.net/man/1/ipmitool>

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

![bmc](images/ipmi_tool.png){.thumbnail} 

If the firmware version is lower than 1.14, please contact our support team by creating a [support ticket via the OVHcloud Help Center](/links/support-contact) to request a firmware update. However, if the version is higher than 1.14, no action is required.

### On a Windows Server

Currently, we are only able to provide the procedure for servers running Linux operating systems. We recommend that you restart your Windows server in our [rescue mode](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) environment to check the version. The command also works in rescue mode.

### On a Server in Rescue Mode

Once your server is restarted in [rescue mode](/pages/bare_metal_cloud/dedicated_servers/rescue_mode), install the `ipmitool` package.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # apt install ipmitool -y
```

Next, check the firmware version:

```sh
ipmitool mc info
```

![bmc](images/ipmi_tool_rescue.png){.thumbnail}

If the firmware version is lower than 1.14, please contact our support team by creating a [support ticket via the OVHcloud Help Center](/links/support-contact) to request a firmware update. However, if the version is higher than 1.14, no action is required.

## Go further

For specialized services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you need assistance with the use and configuration of your OVHcloud solutions, we offer various [support options](/links/support).

Join our [community of users](/links/community).