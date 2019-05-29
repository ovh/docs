---
title: 'Updating the kernel on a dedicated server'
slug: updating-kernel-dedicated-server
excerpt: 'Find out how to update the kernel for distributions that use an OVH core'
section: 'Advanced use'
---

**Last updated 03rd August 2018**

## Objective

[OVH Dedicated Servers](https://www.ovh.co.uk/dedicated_servers/){.external} are easily able to boot into a Linux operating system using an updated kernel with the netboot startup system. However, it's best practice to update the kernel on the local machine.

## What is a Kernel?

A Kernel is a low-level system that's responsible for interfacing the Operating System and Applications with the physical hardware of the server. The kernel also allows used for sharing processes. 

**This guide will show you how to update the kernel for distributions that use an OVH core.**

> [!warning]
>
> By default, all system snapshots offered on [OVH Dedicated Servers](https://www.ovh.co.uk/dedicated_servers/){.external} use an optimised OVH core. If you have replaced these snapshots with your own distribution, please refer to your distribution’s official documentation.
>

> [!primary]
>
> OVH provides self-managed machines that you are responsible for administering. We have no access to these machines and therefore cannot manage them. It is up to you to ensure that your machine is secured and your software is up to date.
>
> We have made this guide available to assist you in applying this update. However, we recommend that you contact a specialist provider if you are facing any issues or have any doubts about managing, using or securing your server.
>

## Requirements

- an [OVH Dedicated Server](https://www.ovh.co.uk/dedicated_servers/){.external}
- root access to the server via SSH
- a backup of your data (see the official documentation for your distribution)

## Instructions

> [!warning]
>
> Please note that Ubuntu installation templates do not come with OVH kernels any more due to copyright issues. You must add the OVH repositories to the /etc/apt/sources.list file.
>

### Identify the kernel

Find the version of your kernel by typing the following command:

```sh
uname -r
```

For example:

```sh
uname -r

4.09.76-xxxx-std-ipv6-64
```

In this case, the kernel version is  **4.09.76-xxxx-std-ipv6-64**.


### Update the kernel using OVH packages

On Debian-based and RedHat-based distributions, the kernel is installed using the package manager.

#### Step 1: Update the kernel package

On Debian-based distributions, update the kernel package using the following command:

```sh
apt-get update && apt-get dist-upgrade
```

On RedHat-based distributions, update the kernel package using the following command:

```sh
yum update
```

#### Step 2: Reboot the server

In order for the modifications to take effect, you must reboot the server:

```sh
reboot
```


### Update the kernel without using OVH packages

#### Step 1: Navigate to the correct directory

The kernel image must be placed in the following directory:

```sh
cd /boot
```

#### Step 2: Get the image

Without recompiling the kernel, download the appropriate bzImage version, ideally the latest one. You can find these images at the following address: <https://last-public-ovh-kernel.snap.mirrors.ovh.net/builds/>. 

Kernels are monolithic, so they don’t take into account kernel modules, such as CEPH, NBD, ZFS...

Let’s return to our example. We have this kernel version: **4.09.76-xxxx-std-ipv6-64**.

We therefore need to download the image using this command:

```sh
wget https://last-public-ovh-kernel.snap.mirrors.ovh.net/builds/4.9.118/313405/bzImage/4.9.118-xxxx-std-ipv6-64/bzImage-4.9.118-xxxx-std-ipv6-64
```

#### Step 3: Update the boot loader program (GRUB)

Update the boot loader program (GRUB) using the following command:

```sh
update-grub
```

The command should return the following:

```sh
Generating grub configuration file ...
done
```

> [!primary]
>
> Verify that the following file (required for the update) is present in your configuration: `06_OVHkernel`. You can verify that the file is present by executing the following command:
>
> `ls /etc/grub.d/`
>

#### Step 4: Reboot the server

In order for the modifications to take effect, you must reboot the server, using the following command:

```sh
reboot
```

### Rollback

In the event that you make a mistake or receive an error, it's possible to rollback your changes. To do so, the server must be placed in [Rescue mode](https://docs.ovh.com/gb/en/dedicated/rescue_mode/){.external}. This will require you to mount your system using the following commands:

```sh
mount /dev/md1 /mnt
```

> [!primary]
>
> In this example, the root directory (or slash `/`) is named *md1*. Please note, the name can vary. To verify the name of your root directory, type the following command:
>
> `fdisk`or `lsblk`
>

```sh
mount -o rbind /dev /mnt/dev
```

```sh
mount -t proc proc /mnt/proc
```

```sh
mount -t sysfs sys /mnt/sys
```

```sh
chroot /mnt
```

Navigate to the `/boot` directory and delete the last files installed (`rm`command). In our example, the following command is used:

```sh
rm bzImage-4.9.118-xxxx-std-ipv6-64
```

The boot loader (GRUB) must be updated again:

```sh
update-grub
```

Finally, exit Rescue mode (reboot to disk) and perform a soft reboot using the following command:

```sh
reboot
```

### Verify that the update has been applied correctly.

Once the update is complete, verify the newly installed kernel version using the following command:

```sh
uname -r
```

> [!primary]
>
> You can refer to the website of your distribution’s vendor to verify if the new version of the kernel is patched to protect you against the Meltdown and Spectrum vulnerabilities.
>
> If necessary, there are a number of tools (for example, this one: <https://github.com/speed47/spectre-meltdown-checker>) that identify if the kernel being used is vulnerable or not.
>
> **OVH cannot guarantee the reliability of any third-party tools and these should be used at your own risk. **
>

## Go further

[Rescue Mode](https://docs.ovh.com/gb/en/dedicated/rescue_mode/){.external}.

[Information on Meltdown and Spectre  vulnerabilities](https://docs.ovh.com/fr/dedicated/information-about-meltdown-spectre-vulnerability-fixes/){.external}.

[Update following Meltdown and Spectrum vulnerabilities by operating system](https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/){.external}.

Join our user community on  <https://community.ovh.com/en/>
