---
title: "How to activate and use rescue mode"
excerpt: "Find out how to use the OVHcloud rescue mode to troubleshoot your dedicated server"
updated: 2024-05-21
---

## Objective

Rescue mode is a tool provided by OVHcloud that allows you to boot into a temporary operating system for the purpose of diagnosing and resolving issues on your server.

Usual tasks the rescue mode is appropriate for include:

- [Resetting your user password](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)
- [Diagnosing network problems](/pages/bare_metal_cloud/dedicated_servers/hardware-diagnose)
- Repairing a broken operating system
- Fixing a software firewall misconfiguration
- [Testing disk performance](/pages/bare_metal_cloud/dedicated_servers/hardware-diagnose)
- [Testing CPU and RAM](/pages/bare_metal_cloud/dedicated_servers/hardware-diagnose)

> [!warning]
>
> Backing up your data should be the first step in rescue mode if you do not already have recent backups available.
>
> If you have any services still online, rescue mode will interrupt them as the machine is being rebooted into the auxiliary rescue environment.
>

**This guide explains how to reboot a server into rescue mode and mount partitions.**

## Requirements

- A [dedicated server](https://www.ovhcloud.com/en-gb/bare-metal/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

You can only activate rescue mode from your [OVHcloud Control Panel](/links/manager). Go to the `Bare Metal Cloud`{.action} section and then select the server on which to enable rescue mode from **Dedicated Servers**.

Look for "Boot" in the **General information** box and click on `...`{.action}, then on `Edit`{.action}.

![Modify boot mode](images/rescue-mode-001.png){.thumbnail}

In the next page, select **Boot in rescue mode**.

### Linux Rescue

If your server has a Linux-based OS, select `rescue-customer`{.action} from the menu. 

Two authentication modes are available:

- Password authentication
- SSH Key authentication

#### SSH Key authentication

> [!primary]
> 
> If you choose SSH Key authentication, make sure your public SSH key respects one of the formats `RSA`, `ECDSA`, or `ED25519`.
>

Select the “Authentication via SSH key” option, then enter your **public** SSH key in the dedicated text area.

![Linux SSH Key authentication](images/rescue-mode-08.png){.thumbnail}

#### Password authentication

Select the “Password authentication” option.<br>
Login details will be sent by default to the main address of your OVHcloud account. You can enter a different address in the field `Send new login details to the following email address`.

![Linux password authentication](images/rescue-mode-09.png){.thumbnail}

### Windows Rescue

For servers with a Windows operating system, please refer to the [dedicated guide](/pages/bare_metal_cloud/dedicated_servers/rescue-customer-windows).

You can also choose the `WinRescue`{.action} option, depending on your server. For more information about this mode, see the [guide section below](#windowsrescue). Note that only password authentication is available with this type of rescue mode.

Specify an alternative email address below if you do *not* want the login credentials sent to your customer account's primary address.

![Windows password authentication](images/rescue-mode-10.png){.thumbnail}

> [!warning]
>
> Some OVHcloud customer accounts may be affected by an error regarding the language of rescue emails: they are sent in French instead of the chosen account language. Although the cause of the error has been corrected since September 20, 2022, the email address needs to be updated once to resolve the issue. To do this, enter your customer account's email address in this step before you enable rescue mode.
>

### Final steps

Click on `Next`{.action} to proceed to the next step and on `Confirm`{.action} to validate the change.

Once the change is completed, click on `...`{.action} next to "Status" in the box labelled **Service status**. Select `Restart`{.action} and the server will restart into rescue mode.<br>This might take a few minutes; you can check the status on the `Tasks`{.action} tab. An email will be sent which contains some information and the login password for the rescue mode's "root" user.

![Reboot the server](images/rescue-mode-02.png){.thumbnail}

Remember to change the netboot back to `Boot from the hard disk`{.action} before restarting after finishing your rescue mode tasks.

### Linux

#### Using rescue mode (SSH)

> [!primary]
>
> If you are using an SSH key (also active in the OVHcloud Control Panel), you will not be sent a password. Once the server is in rescue mode, you can connect directly via your SSH key.
>

Once your server has rebooted, you will receive an email with your rescue mode access credentials. This email is also available in your [OVHcloud Control Panel](/links/manager) as soon as it is sent: Click on the name associated with your NIC handle (Customer ID) in the menu bar in the top right-hand corner, then select `Service emails`{.action}.

You will then need to access your server via the command line or an [SSH tool](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction), using the root password generated for the rescue mode.

For example:

```bash
ssh root@ns3956771.ip-169-254-10.eu
root@ns3956771.ip-169-254-10.eu's password:
```

> [!warning]
> 
> Your SSH client will likely block the connection at first due to a mismatch of the ECDSA fingerprint. This is normal because the rescue mode uses its own temporary SSH server.
>
> One way around this is "commenting out" the fingerprint of your server by adding a `#` in front of its line in the `known_hosts` file. Remember to revert this change before switching the netboot back to "normal" mode.<br>You can also delete the line from the file. Your SSH client will then add a new fingerprint entry for the server when the connection is established anew. If you require more detailed instructions, please refer to our guide "[Getting started with SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction#login)".
>

#### Mounting partitions

Unless you are configuring server disks in a way that requires them to be detached (unmounted), you need to first mount the system partition.

You can mount partitions using the `mount` command in SSH. Firstly, list your partitions in order to retrieve the name of the partition you need to mount. You can refer to the following code examples:

```bash
fdisk -l
```

```console
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

```bash
mount /dev/hda1 /mnt/
```

> [!primary]
>
> Your partition will now be mounted. You can then carry out operations on the file system.
>
> If your server uses a softRAID configuration, you will need to mount your RAID volume (usually `/dev/mdX`).
>

To exit rescue mode, change the boot mode back to `Boot from the hard disk`{.action} in the [OVHcloud Control Panel](/links/manager) and restart the server from the command line.

#### VMware - Mounting a datastore

You can mount a VMware datastore in a similar way as described in the previous segment.

List your partitions in order to retrieve the name of the datastore partition:

```bash
fdisk -l
```

Mount the partition with the following command, replacing `sdbX` with the value identified in the previous step:

```bash
vmfs-fuse /dev/sdbX /mnt
```

If you have `VMFS 6` datastores, access the `sbin` folder and create the mount folder:

```bash
cd /usr/local/sbin/
mkdir /mnt/datastore
```

List your partitions in order to retrieve the name of the datastore partition:

```bash
fdisk -l
```

Mount the partition with the following command, replacing `sdbX` with the value identified in the previous step:

```bash
vmfs6-fuse /dev/sdbX /mnt/datastore/
```

To exit rescue mode, change the boot mode back to `Boot from the hard disk`{.action} in the [OVHcloud Control Panel](/links/manager) and restart the server from the command line.

### Windows <a name="windowsrescue"></a>

For servers with a Windows operating system, please refer to the [dedicated guide](/pages/bare_metal_cloud/dedicated_servers/rescue-customer-windows).

#### Using WinRescue tools (deprecated)

Once your server has rebooted, you will receive an email with your rescue mode access credentials. This email is also available in your [OVHcloud Control Panel](/links/manager) as soon as it is sent: Click on the name associated with your NIC handle (Customer ID) in the menu bar in the top right-hand corner, then select `Service emails`{.action}.

To use the Windows rescue mode GUI, you will need to download and install a VNC console or use the `IPMI` module in the [OVHcloud Control Panel](/links/manager).

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

[Changing the admin password on a Windows dedicated server](/pages/bare_metal_cloud/dedicated_servers/changing-admin-password-on-windows)

Join our community of users on <https://community.ovh.com/en/>.
