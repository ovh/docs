---
title: "VPS - Enable Windows boot logs"
excerpt: "Find out how to enable Windows boot logs to help with diagnosing and troubleshooting your VPS boot issues"
updated: 2026-01-21
---

## Objective

Windows boot logs allow you to identify the drivers and services loaded during system startup.  
They are particularly useful for **diagnosing boot issues**, **blue screens**, or **system freezes**.

**This guide explains how to enable Windows boot logs on a server to help diagnose and troubleshoot VPS issues.**

## Requirements

- An active [VPS](/links/bare-metal/vps) offer in your OVHcloud Control Panel.

## Instructions

### Enabling Windows boot logs

To enable boot logs, follow the steps below:

> [!tabs]
> 1. **Connect to the server**
>>
>> Connect to your server via a remote desktop or a [KVM session](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps).
>>
> 2. **Open the Run utility**
>>
>> Open the Windows `Start` menu and click `Run`{.action}.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_start_run.png){.thumbnail}
>>
> 3. **Open `msconfig`**
>>
>> Type `msconfig` and click `OK`{.action}.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_msconfig.png){.thumbnail}
>>
> 4. **Enable logs**
>>
>> In the new window, enable the log option next to `Boot log`. Then click `OK`{.action}.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_log.png){.thumbnail}
>>

At the next server startup, the logs will be saved in a `.txt` file. The file path is: `C:\Windows\ntbtlog.txt`.

To access the log file in rescue mode, follow the instructions in the guide "[Enable and use rescue mode on a VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)".

## Go further

[Change the administrator password on a Windows server](/pages/bare_metal_cloud/virtual_private_servers/resetting_a_windows_password)

[VPS FAQ](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

[SSH introduction](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Secure a VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[How to recover access to the server if you lose the user password](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

Join our [community of users](/links/community).