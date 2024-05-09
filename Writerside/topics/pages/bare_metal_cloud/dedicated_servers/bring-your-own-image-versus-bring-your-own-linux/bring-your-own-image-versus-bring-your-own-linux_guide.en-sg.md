---
title: Bring Your Own Image (BYOI) / Bring Your Own Linux (BYOLinux), a comparison sheet
excerpt: Find out which custom OS image service is best for your usage
updated: 2024-01-31
---

## Objective

Although OVHcloud provides its customers with [a wide range of Operating System (OS) for your dedicated servers](https://www.ovhcloud.com/en-sg/bare-metal/os/), you might have good reasons to need to install a custom OS:

- OS is not part of [the OVHcloud catalog](https://www.ovhcloud.com/en-sg/bare-metal/os/),
- Specific OS build version,
- OS with specific kernel version.

There are two different services that you can use for installing a custom OS on a dedicated server:

- **Bring Your Own Image** (BYOI),
- **Bring Your Own Linux** (BYOLinux).

This page is about breaking down the feature differences between the **Bring Your Own Image** and the **Bring Your Own Linux** services.

## Features

|Feature Name|Feature Description|BYOI|BYOLinux|
|-|-|-|-|
|Custom Image|Provide the download URL to a custom OS image|✅|✅|
|Custom Partitioning¹|Exploit [OVHcloud partitioning API](partitioning_ovh1.) to configure partitions, software RAID, LVM, ZFS in your custom image at OS installation|❌|✅|
|Image Format|Image URL provided must redirect to a file format that is compatible|RAW, QCOW2|QCOW2|
|Hardware RAID²|Exploit OVHcloud API to configure your dedicated server's hardware raid controller at OS installation|✅|✅|
|Non-Linux-based OS|In addition to Linux-based-OS, use any OS: UNIX, Windows, FreeBSD etc.|✅|❌|

¹ Your image must be built accordingly.<br />
² Assuming you have compatible hardware.<br />

## Go further

[Bring Your Own Image (BYOI)](bring-your-own-image1.)

[Bring Your Own Linux (BYOLinux)](bring-your-own-linux1.)

[OVHcloud API & OS installation](api-os-installation1.)

Join our user community on <https://community.ovh.com/en/>.
