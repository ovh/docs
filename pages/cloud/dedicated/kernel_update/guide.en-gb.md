---
title: 'Updating the kernel on a dedicated server'
excerpt: 'Find out how to update the kernel for distributions that use an OVH core'
slug: updating-kernel-dedicated-server
section: 'Advanced use'
---

**Last updated 19th July 2018**

## Objective

OVH [dedicated servers](https://www.ovh.co.uk/dedicated_servers/){.external} are easily able to boot into a Linux operating system using an updated kernel with the netboot startup system. However, it's best practice to update the kernel on the local machine.

**This guide will show you how to update the kernel for distributions that use an OVH core.**

> [!warning]
>
By default, all system snapshots offered on OVH [dedicated servers](https://www.ovh.co.uk/dedicated_servers/){.external} use an optimised OVH core. If you have replaced these snapshots with your own distribution, please refer to your distribution’s official documentation.
>

> [!primary]
>
> OVH provides self-managed machines that you are responsible for administering.  We have no access to these machines and therefore cannot manage them. It is up to you to ensure that your machine is secured and software is up to date.
>
> We make this guide available to assist you in this update. However, we recommend that you contact a specialized provider if you are facing any issues or have any doubts about managing, using or securing your server.
>

## Requirements

- a [dedicated server](https://www.ovh.co.uk/dedicated_servers/){.external}
- root access to the server via SSH
- backup of your data (see the official documentation for your distribution)

## Instructions

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

### Update the kernel

#### Step 1: Navigate to the correct directory

The kernel image must be placed in the following directory:

```sh
cd /boot
```

#### Step 2: Get the image

Without recompiling the kernel, download the appropriate bzImage version, ideally the latest one. You can find the images at the following address: <ftp://ftp.ovh.net/made-in-ovh/bzImage/>. 

Kernels are monolithic, so they don’t take into account kernel modules such as: CEPH, NBD, ZFS...

Let’s go back to our example. We had kernel version: **4.09.76-xxxx-std-ipv6-64**.

We need to download the following image using this command:

```sh
wget ftp://ftp.ovh.net/made-in-ovh/bzImage/4.14.13/bzImage-4.14.13-xxxx-std-ipv6-64
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

In order for the modifications to take effect, you must to reboot the server:

```sh
reboot
```

### Rollback

In the event that you made an mistake or received an error, you have the possibility rollback. To rollback, the server must be placed in [Rescue mode](https://docs.ovh.com/gb/en/dedicated/rescue_mode/){.external}. This will require you to mount your system using the following commands:

```sh
mount /dev/md1 /mnt
```

> [!primary]
>
> In this example, the root directory (or slash `/`) is named *md1*. Please note the name can vary. To verify the name of your root directory, type the following command:
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
rm bzImage-4.14.13-xxxx-std-ipv6-64
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
> You can refer to your distribution’s vendor’s website to verify if the new version of the kernel is patched to protect you against the Meltdown and Spectrum vulnerabilities.
>
> If needed, there are a number of tools (for example this one: <https://github.com/speed47/spectre-meltdown-checker>) that identify if the kernel being used is vulnerable or not.
>
> **OVH cannot guarantee the reliability of any third-party tools and these tools should be used at your own risk. **
>

## Go further

[Rescue Mode](https://docs.ovh.com/gb/en/dedicated/rescue_mode/){.external}.

[Information on Meltdown and Spectre  vulnerabilities](https://docs.ovh.com/fr/dedicated/information-about-meltdown-spectre-vulnerability-fixes/){.external}.

[Updated following Meltdown and Spectrum vulnerabilities by operating system](https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/){.external}.

Join our user community on  <https://community.ovh.com/en/>