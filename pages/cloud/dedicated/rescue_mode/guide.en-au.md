---
title: 'Activating and using rescue mode'
slug: ovh-rescue
excerpt: 'Find out how to activate and use rescue mode on a dedicated server'
section: 'Diagnostic and rescue mode'
order: 1
---

**Last updated 19th March 2021**

## Objective

Rescue mode is a tool on your server that allows you to boot into a temporary operating system for the purpose of diagnosing and resolving issues.

Usual tasks the rescue mode is appropriate for include:

- Resetting your root password
- Diagnosing network problems
- Repairing a broken operating system
- Fixing a software firewall misconfiguration
- Testing disk performance
- Testing CPU and RAM

Backing up your data should be the first step in rescue mode if you do not already have recent backups available.

**This guide will show you how to activate and use your server's rescue mode.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/UdMZSgXATFU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Requirements

- a [dedicated server](https://www.ovhcloud.com/en-au/bare-metal/) in your OVHcloud account
- access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au)

## Instructions

You can activate rescue mode only from your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au). Go to the `Bare Metal Cloud`{.action} section and then select the server on which you wish to enable rescue mode from **Dedicated Servers** in the left-hand sidebar. 

Look for "Boot" in the **General informations** box and click on `...`{.action}, then on `Modify`{.action}.

![Modify boot mode](images/rescue-mode-01.png){.thumbnail}

In the popup window, tick **Boot in rescue mode**. If your server has a Linux-based OS, select "rescue64-pro" from the menu. If your server runs on Windows, you can also choose "WinRescue" (see the [guide section below](#windowsrescue)). Specify an alternative email address below if you do *not* want the login credentials sent to your customer account's primary address.

Click on `Next`{.action} and `Confirm`{.action}.

![Mode rescue-pro](images/rescue-mode-03.png){.thumbnail}

Once the change is completed, click on `...`{.action} next to "Status" in the box labelled **Service status**. Select `Reboot`{.action} and the server will restart into rescue mode.<br>This might take a few minutes; you can check the status on the `Tasks`{.action} tab. An email will be sent which contains some information and the login password for the rescue mode's "root" user.

![Reboot the server](images/rescue-mode-02.png){.thumbnail}

Remember to change the netboot back to `Boot from the hard disk`{.action} before restarting after finishing your rescue mode tasks.

### Linux

#### Using rescue mode (SSH)

> [!primary]
> 
> If you are using an SSH key (also active in the OVHcloud Control Panel), you will not be sent a password. Once the server is in rescue mode, you can connect directly via your SSH key.
>

Once your server has rebooted, you will receive an email with your rescue mode access credentials. This email is also available in your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au) as soon as it is sent: Click on the name associated with your NIC handle (Customer ID) in the menu bar in the top right-hand corner, then select `Service emails`{.action}.

You will then need to access your server via the command line or an SSH tool, using the root password generated for the rescue mode.

For example:

```
ssh root@your_server_IP
root@your_server_password:
```
> [!warning]
> 
> Your SSH client will likely block the connection at first due to a mismatch of the ECDSA fingerprint. This is normal because the rescue mode uses its own temporary SSH server.
>
> One way around this is commenting the fingerprint of your regular system by adding a `#` in front of its line in the *known_hosts* file. Revert that change before returning to normal boot.
>

For most changes you make to your server via SSH while in rescue mode, you will need to mount a partition. This mode has its own temporary file system, so any file system changes you make in rescue mode will be lost once you reboot the server in normal mode.

You can mount partitions using the `mount` command in SSH. Firstly, list your partitions in order to retrieve the name of the partition you need to mount. You can refer to the following code examples:

```
rescue:~# fdisk -l

Disk /dev/hda 40.0 GB, 40020664320 bytes
255 heads, 63 sectors/track, 4865 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes

Device Boot Start End Blocks Id System
/dev/hda1 * 1 1305 10482381 83 Linux
/dev/hda2 1306 4800 28073587+ 83 Linux
/dev/hda3 4801 4865 522112+ 82 Linux swap / Solaris

Disk /dev/sda 8254 MB, 8254390272 bytes
16 heads, 32 sectors/track, 31488 cylinders
Units = cylinders of 512 * 512 = 262144 bytes

Device Boot Start End Blocks Id System
/dev/sda1 1 31488 8060912 c W95 FAT32 (LBA)
```

Once you have found the name of the partition you want to mount, use the command below:

```
rescue:~# mount /dev/hda1 /mnt/
```

> [!primary]
>
> Your partition will now be mounted. You can then carry out operations on the file system.
> 
> If your server uses a softRAID configuration, you will need to mount your RAID volume (usually `/dev/mdX`).
>

To exit rescue mode, change the boot mode back to `Boot from the hard disk`{.action} in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au) and restart the server from the command line.

#### Mounting a datastore

You can mount a VMware datastore in a similar way as described in the previous segment. Firstly, install the necessary package:

```
rescue:~# apt-get update && apt-get install vmfs-tools
```

Then list your partitions in order to retrieve the name of the datastore partition:

```
rescue:~# fdisk -l
```

Now mount the partition with the following command, replacing `sdbX` with the value identified in the previous step:

```
rescue:~# vmfs-fuse /dev/sdbX /mnt
```

To exit rescue mode, change the boot mode back to `Boot from the hard disk`{.action} in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au) and restart the server from the command line.

### Using the rescue mode web interface ("rescue64-pro" only)

Once your server has rebooted, you can access the web interface by entering `your_server_IP:81` into your browsers address bar. With https, use port *444* instead. For example:

```
https://169.254.10.20:444
```

If you have already secured your data, you can use the rescue mode web interface to test the following components.

- **Disk test**: Checks their integrity using SMART.
- **Processors**: Checks that the CPU is functioning normally. (This may take a while.)
- **Partitions**: Checks the states of readers.
- **Memory**: Checks the RAM installed on the server. (This may take a while.)
- **Network**: Checks the connection to an OVHcloud-internal reference system as well as the connection to your browser.

![Web interface for rescue mode](images/rescue-mode-04.png){.thumbnail}

### Windows <a name="windowsrescue"></a>

#### Using WinRescue tools

Once your server has rebooted, you will receive an email with your rescue mode access credentials. This email is also available in your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au) as soon as it is sent: Click on the name associated with your NIC handle (Customer ID) in the menu bar in the top right-hand corner, then select `Service emails`{.action}.

To use the Windows rescue mode GUI, you will need to download and install a VNC console or use the `IPMI` module in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au).

![Winrescue Windows](images/rescue-mode-07.png){.thumbnail}

The following tools are already installed in this mode:

|Tool|Description|
|---|---|
|Mozilla ULight|A web browser.|
|Memory Diagnostics Tool|A Windows tool to test the RAM.|
|Explorer_Q-Dir|An alternative file explorer.|
|GSmartControl|A tool to check HDDs and SSDs.|
|PhotoRec|A tool to recover possibly lost files from a disk.|
|SilverSHielD|A SSH2 and SFTP server.|
|System Recovery|The built-in Windows system restore and troubleshooting tool.|
|TestDisk|A powerful data recovery application. You can use it to recover and modify corrupted partitions, find lost partitions, repair a boot sector and even rebuild a defective MBR.|
|FileZilla|An open-source FTP client. It supports SSH and SSL protocols, and has a clear and intuitive drag-and-drop interface. You can use it to transfer your data to an FTP server, like the FTP backup service included with most OVHcloud server models.|
|7-Zip|A utility for compressing and archiving files, which reads the following formats: ARJ, CAB, CHM, CPIO, CramFS, DEB, DMG, FAT, HFS, ISO, LZH, LZMA, MBR, MSI, NSIS, NTFS, RAR, RPM, SquashFS, UDF, VHD, WIM, XAR and Z. You can also use it to create your own archives in the following formats: BZIP2, GZIP, TAR, WIM, XZ, Z and ZIP.|

## Go further

[Changing the admin password on a Windows dedicated server](../windows-admin-password-change/)

Join our community of users on <https://community.ovh.com/en/>.
