---
title: Backup Agent - Bare Metal recovery with Veeam Backup Agent
excerpt: Learn how to restore your entire system using a recovery ISO and Veeam backups stored at OVHcloud, whether hosted or on-premise
updated: 2025-09-30
---

## Objective

**This guide explains how to recover your entire system using Veeam's Bare Metal Recovery, with your backups stored in a Veeam Cloud Connect repository hosted by OVHcloud.**

You’ll learn how to:

- Create a recovery ISO (a file that helps you start your machine when it doesn’t boot)
- Use it to access and restore your latest backup stored on the OVHcloud infrastructure

This guide is designed for all OVHcloud customers using Veeam backup, whether your infrastructure is hosted by us or on your own premises.

You can use it if you're running:

- A Windows-based or Linux-based VPS
- A Public Cloud Compute instance with Windows or Linux
- A Bare Metal server using the Veeam Agent
- A Hosted Private Cloud (PCC) VM running Windows or Linux
- A physical or virtual machine on your premises with Windows or Linux

> [!warning]
> This guide focuses on the Veeam Agent for Windows. If you're using the Veeam Agent for Linux, the process is similar, although the interface is text-based.

## Requirements

Before you begin, make sure you have:

- A [Veeam Enterprise solution](/links/hosted-private-cloud/veeam-enterprise) set up with OVHcloud
- A tenant delivered with the Alpha Backup Agent
- A machine where the Veeam Backup Agent is installed and has already pushed at least one backup to the Cloud Connect repository 
- A supported operating system:
    - Windows Server 2012 or newer, or
    - A Linux distribution supported by Veeam Agent for Linux
- Administrator access to the machine
- A way to boot from the recovery ISO:
    - Use a USB key or external drive if you're restoring a physical machine
    - Use a virtual CD/DVD drive if you're restoring a virtual machine

## Instructions

### Step 1: Create your recovery media ISO

If your computer ever stops working, you’ll need a recovery ISO to boot it up.

Here's how to create it:

1\. Open the **Create Recovery Media** tool on your computer (it comes with the Veeam Backup Agent).

![Launch the Create Recovery Media tool](images/bare_metal_recovery_01.png){.thumbnail}

2\. Veeam will ask if you want to include extra drivers.

> **Tip:** If you’re using special hardware (like a RAID controller or a Wi-Fi dongle), select the drivers you need. Otherwise, the default is usually fine.

![Select drivers for boot image](images/bare_metal_recovery_02.png){.thumbnail}

3\. Choose where to save the recovery ISO and give it a name.

![Set ISO location and name](images/bare_metal_recovery_03.png){.thumbnail}

4\. Let the tool finish. Your ISO file will be created.

![Recovery ISO creation complete](images/bare_metal_recovery_04.png){.thumbnail}

![Recovery file](images/bare_metal_recovery_05.png){.thumbnail}

You can now use this ISO to create a bootable USB stick using a tool like Rufus — or, if you're restoring a VM, mount the ISO directly in your VM management console.

### Step 2: Boot your computer from the recovery ISO

If your system isn’t working and you need to restore it:

1\. Plug in the USB stick or mount the ISO in your VM console, then **boot the system from it**.

> **Not sure how to boot from USB?** Restart your physical machine and press the key shown (usually F2, F12, ESC, or DEL) to access the boot menu.
> **For virtual machines**, use your hypervisor interface (e.g., OpenStack, vSphere, Proxmox) to attach the ISO and boot from it.

2\. Once the system starts, the Veeam Recovery Wizard will open. Click `Bare Metal Recovery`{.action}.

![Launch Bare Metal Recovery](images/step2_01.png){.thumbnail}

3\. Select `Network Storage`{.action} to access your online backups.

> [!warning]
>  If your network is not detected, you may need to manually configure it. Click `Configure network settings`{.action} and load any missing drivers.

![Select Network Storage](images/step2_02.png){.thumbnail}

4\. Select `Veeam Cloud Connect repository`{.action}.

![Choose Cloud Connect Repository](images/step2_03.png){.thumbnail}

5\. Enter the following address when prompted for the service provider:

```bash
backup.private.ovhcloud.dev
```

![Enter DNS](images/step2_04.png){.thumbnail}

6\. Enter your username and password to log in.

![Enter credentials](images/step2_05.png){.thumbnail}

7\. Select the `server`{.action} you want to restore.

![Select server](images/step2_06.png){.thumbnail}

8\. Choose the `restore point (date/time)`{.action} you want to go back to.

We recommend using the most recent successful backup unless you have a specific reason to go back further.

![Choose restore point](images/step2_07.png){.thumbnail}

9\. Choose the `Restore mode`{.action} that fits your situation (usually **Entire computer**).

![Recovery mode](images/step2_08.png){.thumbnail}

10\. Review the summary and start the `Restore`{.action}.

![Launch restore - confirmation](images/step2_09.png){.thumbnail}

![Launch restore - progress](images/step2_10.png){.thumbnail}

> [!warning]
> The recovery process may take a while, depending on the size of your backup and your internet speed. Once complete, your system will reboot with all your data restored to the selected backup point.

## Go further

If you need training or technical assistance to implement our solutions, please contact your Technical Account Manager or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Ask questions, give your feedback and interact directly with the team building our Hosted Private Cloud services on the dedicated [Discord](https://discord.gg/ovhcloud) channel.

Join our [community of users](/links/community).