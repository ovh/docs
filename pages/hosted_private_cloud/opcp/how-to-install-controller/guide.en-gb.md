---
title: "OPCP - How to install a controller"
excerpt: "Learn how to install an OPCP controller from the Debian image provided by OVHcloud"
updated: 2026-05-21
---

## Objective

This guide explains how to install an **OPCP** controller from the Debian-based installation image provided by OVHcloud. It covers preparing the installation media, cabling the server, selecting the RAID 1 disks, configuring the controller access network, and making the adjustments required after the first boot.

> [!primary]
>
> In this guide, the **OOB** network refers to the controller access network. It is the server's first physical data interface, connected to the customer's network.
>
> It is not the server's dedicated management port (IPMI, iDRAC, iLO, and so on), which should only be used to mount the ISO or open a remote console.

> [!warning]
>
> The installation process erases all data on the selected disks.
>
> OVHcloud provides you with services for which you are responsible. You must therefore ensure that they function correctly after the installation.

## Prerequisites

- A physical server intended to host the OPCP controller
- The OPCP installation image: <https://opcp-public-release.snc.ovh.net/releases/live-image-amd64.hybrid.iso>
- A USB key, virtual media device, or any other bootable installation media
- Access to the local console or to the server's remote management console (IPMI, iDRAC, iLO, and so on)
- At least two physical disks of comparable size for the RAID 1 installation
- One network cable connected to the server's first data interface and to the customer's network
- If you use a static configuration, the IP address, subnet mask, gateway, and DNS servers for the controller access network

## Instructions

### 1. Download the installation image

Download the OPCP installation image, then write it to your boot media:

```bash
curl -O https://opcp-public-release.snc.ovh.net/releases/live-image-amd64.hybrid.iso

sudo dd if=live-image-amd64.hybrid.iso of=/dev/sdX bs=4M status=progress oflag=sync
```

Replace `/dev/sdX` with the device corresponding to your installation media.

### 2. Cable the server

Before you start the installation:

- connect the server's first data network interface to the customer's network
- keep the dedicated management port (IPMI, iDRAC, iLO, and so on) separate from this network configuration
- if the server has several data interfaces, use the first one so that it is easier to identify during the installation

You can use the BMC remote console to mount the ISO and boot the server, but the BMC or IPMI port must not be used as the controller access network.

### 3. Boot the installer

Boot the server from the installation media, then follow the interactive installer.

During the installation, the image:

- detects the available physical disks
- prompts you to select the disks to use for RAID 1
- configures the system automatically on the selected disks
- prompts you to choose the network interface used for controller access
- enables `root` SSH access on the controller at first boot

### 4. Select the installation disks

When prompted by the installer, select at least two physical disks for the controller.

Use identical disks whenever possible, or disks that are as close as possible in size and performance, so that the RAID 1 configuration can be created correctly.

The installer automatically creates the RAID 1 configuration and the system LVM layout on the selected disks.

### 5. Configure the controller access network

When the installer shows the list of physical network interfaces:

1. Select the interface connected to the customer's network.
2. Choose `DHCP` if addressing is provided automatically, or `Static` if you need to enter the settings manually.
3. In static mode, enter the IP address, subnet mask, gateway, and DNS servers requested by the installer.
4. Confirm the summary before the network configuration is written.

At the end of the base installation, this configuration is applied to the installed system to allow initial SSH access to the controller.

### 6. Verify access after first boot

After the server restarts:

1. Connect from the network linked to the server's first data interface.
2. Verify that the controller IP address responds over SSH.
3. Verify that the controller can reach the network resources it needs in your environment.

If the interface or network settings are incorrect, restart the installation and select the expected values.

### 7. Adjust the logical volume sizes

After the first boot, log in to the controller and adjust the logical volume sizes according to the actual disk capacity and your needs.

> [!warning]
>
> The sizes below are example targets. Check the used and available space before reducing any volume, then adapt the values to your disk capacity.

Start by reducing the `spare` volume, then reallocate the released space to the volumes you actually use:

```bash
lvreduce -r -L 100G -v /dev/mapper/vg-spare
lvresize -r -L100G -v /dev/mapper/vg-home
lvresize -r -L100G -v /dev/mapper/vg-root
lvresize -r -L30G -v /dev/mapper/vg-tmp
lvresize -r -L200G -v /dev/mapper/vg-var
```

## Go further

If you need training or technical assistance implementing our solutions, contact your sales representative or click [this link](/links/professional-services) to get a quote and request a custom analysis of your project from our Professional Services team.

Join our [community of users](/links/community).