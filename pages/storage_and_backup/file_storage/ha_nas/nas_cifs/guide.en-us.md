---
title: Mount your HA-NAS via a CIFS share
excerpt: This guide shows you how to mount your HA-NAS using CIFS protocol
updated: 2025-10-23
---

## Objective

**Find out how to configure and mount an OVHcloud HA-NAS storage space using CIFS protocol.**

## Requirements

- a [Dedicated Server](/links/bare-metal/bare-metal) **or** a [VPS](/links/bare-metal/vps) **or** a [Public Cloud Instance](/links/public-cloud/public-cloud)
- a [HA-NAS solution](/links/storage/nas-ha)

## Instructions

### Settings for Microsoft Windows

- **Windows Server 2008**: Click on the menu `Start`{.action} > `All the programs`{.action} > `Accessories`{.action} > `Command prompt`{.action}.
- **Windows Server 2012**: Click the `Windows PowerShell`{.action} icon at the bottom of the screen in the taskbar.
- **Windows Server 2016/2019/2022/2025**: Click on the menu `Start`{.action}, then on the `Windows PowerShell`{.action} icon.


Then run the following command:

```bash
net use z: \\CIFS_SERVER_IP\CIFS_PATH
```

#### Example

- CIFS mounting for a NAS-HA:

```bash
net use z: \\10.16.101.8\zpool-000206_PARTITION_NAME_1
```

> [!alert]
>
> The SMB/CIFS user is `nobody`. Changing permissions with this user may generate conflicts with existing NFS permissions. 
> 

The following error messages may appear:

```console
System error 1272 has occurred.

You can't access this shared folder because your organization's security policies block unauthenticated guest access. These policies help protect your PC from unsafe or malicious devices on the network.
```

```console
System error 3227320323 has occurred.
```

> [!primary]
>
> To correct these errors, refer to the official Microsoft documentation :<br>
> [How to enable insecure guest logons in SMB2 and SMB3](https://learn.microsoft.com/en-gb/windows-server/storage/file-server/enable-insecure-guest-logons-smb2-and-smb3?tabs=powershell).<br>
> [Control SMB signing behavior](https://learn.microsoft.com/en-gb/windows-server/storage/file-server/smb-signing?tabs=powershell).


### Settings for Linux

Open an SSH connection to your server and type the following command:

```sh
mount -t cifs -o uid=root,gid=100,dir_mode=0700,username=root,password= //IP_SERVEUR_CIFS/CHEMIN_CIFS /mnt/FolderMount
```

> [!warning]
>
> In order to mount shares by host name (as opposed to IP addresses), the `mount.cifs` utility is required. It is usually part of the `cifs-utils` package.
>
> `mount.cifs` is a wrapper that resolves host names and adds the parameter `ip=` to the mount parameters transmitted to the kernel.
>
> Without `mount.cifs`, attempts to mount by host name will result in the following error:
>
> ```text
> mount: /mnt/FolderMount: mount(2) system call failed: No route to host.
>        dmesg(1) may have more information after failed mount system call.
> ```
>

## Go further

[NAS - Frequently Asked Questions](/pages/storage_and_backup/file_storage/ha_nas/nas_faq)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).