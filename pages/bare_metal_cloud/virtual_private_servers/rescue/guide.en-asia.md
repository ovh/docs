---
title: Activating and using rescue mode on a VPS
excerpt: Find out how to use the OVHcloud rescue mode to troubleshoot your VPS and run system checks
updated: 2024-02-19
---

## Objective

Rescue mode is a tool provided by OVHcloud to boot your VPS into a temporary operating system. You can then access your system in order to run diagnostic tasks and resolve various issues, for example:

- [Resetting your user password to regain access](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)
- Diagnosing network problems
- Repairing a broken operating system
- Fixing a misconfigured software firewall 
- Testing disk performance

If you are facing a problem with your system, performing checks in rescue mode helps to determine whether it is related to software installed on the VPS or caused by a more profound issue. Before contacting our support teams, we recommend to gather test results and exclude any software errors by using rescue mode.

> [!warning]
>
> If you have any services still online, rescue mode will interrupt them as the server is being rebooted into the auxiliary rescue environment.
>

**This guide explains how to activate rescue mode in your OVHcloud Control Panel and how to use it to access your VPS file system.**

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager)
- An OVHcloud [VPS service](https://www.ovhcloud.com/asia/vps/) already set up

> [!warning]
>OVHcloud provides services for which you are responsible with regard to their configuration and management. It is therefore your responsibility to ensure that they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a [specialist service provider](https://partner.ovhcloud.com/asia/directory/) or reach out to [our community](https://community.ovh.com/en/) if you face difficulties or doubts concerning the administration, usage or implementation of services on a server.
>

## Instructions

### Activating rescue mode

Log in to the [OVHcloud Control Panel](/links/manager), go to the `Bare Metal Cloud`{.action} section and select your server from `Virtual Private Servers`{.action}.

On the `Home`{.action} tab, click on `...`{.action} next to "Boot" in the **Your VPS** box.

![rescue mode control panel](images/rescue_new.png){.thumbnail}

Select `Reboot in rescue mode`{.action} from the menu and click `Confirm`{.action} in the popup window.

If your Control Panel looks different, please refer to our guide "[Managing a legacy VPS](/pages/bare_metal_cloud/virtual_private_servers/vps_legacy_control_panel)".

### Using rescue mode

After initiating the reboot, a progress bar will indicate the duration of the task. Note that this can take several minutes.

> [!primary]
>
> You will receive an automated email with the SSH credentials for rescue mode access. Please wait for the email to arrive before taking any further action. This email can also be viewed in your [OVHcloud Control Panel](/links/manager): Click on the name associated with your NIC handle (Customer ID) in the menu bar in the top right-hand corner, then select `Service emails`{.action}.
>

You will then need to [access your server via SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction), using the temporary password generated for the rescue mode.

Example:

```bash
ssh root@vps-x11x11xyy.vps.ovh.net
```

```console
root@vps-x11x11xyy.vps.ovh.net's password:
```

> [!warning]
> 
> Your SSH client will likely block the connection at first due to a mismatch of the ECDSA fingerprint. This is normal because the rescue mode uses its own temporary SSH server.
>
> One way around this is "commenting out" the fingerprint of your VPS by adding a `#` in front of its line in the `known_hosts` file. Remember to revert this change before switching the netboot back to "normal" mode.<br>You can also delete the line from the file. Your SSH client will then add a new fingerprint entry for the VPS when the connection is established anew. If you require more detailed instructions, please refer to our guide "[Getting started with SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction#login)".
>

For most changes you make to your server via SSH while in rescue mode, you will need to mount the system partition.

Once you are connected, verify the attached disks with this command:

```bash
lsblk
```

The result will look similar to the following example output:

```console
NAME    MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda       8:0    0   2.9G  0 disk
└─sda1    8:1    0   2.9G  0 part /
sdb       8:16   0   160G  0 disk
├─sdb1    8:17   0 159.9G  0 part
├─sdb14   8:30   0     4M  0 part
└─sdb15   8:31   0   106M  0 part
```

In rescue mode, `sda` is the rescue mode disk and `sda1` is the primary rescue partition mounted on `/`.

In this example, the primary disk of the VPS is `sdb` and the system partition is `sdb1` (indicated by the size).

Mount this partition with the following command:

```bash
mount /dev/sdb1 /mnt/
```

Your files are now accessible from the mount point `/mnt`:

```bash
cd /mnt
```

```bash
ls
```

You should then see your file system displayed:

```console
bin  boot  dev  etc  home  lib  lib32  lib64  libx32  lost+found  media  mnt  opt  proc  root  run  sbin  snap  srv  sys  tmp  usr  var
```

Before you can manipulate this partition however, you need to open it for write access which you can do with the following command:

```bash
chroot /mnt
```

You can now apply changes to your system, for example [reset user passwords and SSH keys](#gofurther).

Once you have completed your actions in rescue mode, reboot the VPS again in the regular mode from the OVHcloud Control Panel.

![rescue mode control panel](images/rescue_exit.png){.thumbnail}

### Troubleshooting boot issues

If you encounter errors when rebooting a VPS, use the following procedure:

- Check the KVM in the OVHcloud Control Panel for relevant information as to why the VPS is unable to start. Consult our [KVM guide](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps) for help with this feature.
- If the KVM shows that the VPS is stuck in boot or unable to find the disk, ensure you have [boot logs enabled](/pages/bare_metal_cloud/virtual_private_servers/bootlog_display_kvm). Relay the pertinent logs to our support teams for further investigations by [creating a support request](https://help.ovhcloud.com/csm?id=csm_get_help).


<a name="gofurther"></a>

## Go further

[Getting started with SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Recovering server access if your user password is lost](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

[How to replace an SSH key pair](/pages/bare_metal_cloud/dedicated_servers/replacing-lost-ssh-key)

[Checking the file system on a VPS](/pages/bare_metal_cloud/virtual_private_servers/check-filesystem)

Join our [community of users](/links/community).