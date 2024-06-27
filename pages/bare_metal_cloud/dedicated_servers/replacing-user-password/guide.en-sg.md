---
title: How to recover server access if your user password is lost
excerpt: Find out how to configure a new password for a user account on a GNU/Linux operating system with the OVHcloud rescue mode
updated: 2024-02-19
---


## Objective

Without a different mode of authentication or another user account, losing your password means you can no longer log in to your server in a regular way.

In this case you can connect to your server via the OVHcloud rescue mode, which allows you to log in with a provisional password and modify your files.

**This guide explains how to reset your user account password if you have lost access to your server.**

> [!primary]
> 
To recover access to a server that you log in to with an SSH key, refer to our guide on [How to replace an SSH key pair](/pages/bare_metal_cloud/dedicated_servers/replacing-lost-ssh-key) instead.
>

## Requirements

- A [dedicated server](https://www.ovhcloud.com/en-sg/bare-metal/) or a [VPS](https://www.ovhcloud.com/en-sg/vps/) with a Linux-based OS in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg)

> [!primary]
> This guide is not applicable for **Windows** server installations. Please refer to our guides on [How to change the admin password on a Windows dedicated server](/pages/bare_metal_cloud/dedicated_servers/rcw-changing-admin-password-on-windows) and [How to change the admin password on a Windows VPS](/pages/bare_metal_cloud/virtual_private_servers/resetting_a_windows_password).
>

## Instructions

Be sure to consult our "Getting started" guides as well:

- For a [dedicated server](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- For a [dedicated server of the **Eco** product line](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- For a [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

> [!warning]
>OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. It is therefore your responsibility to ensure that they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a [specialist service provider](https://partner.ovhcloud.com/en-sg/directory/) or reach out to [our community](https://community.ovh.com/en/) if you face difficulties or doubts concerning the administration, usage or implementation of services on a server.
>

<a name="step1"></a>

### Step 1: Restart the server into rescue mode

Use the corresponding rescue mode guide to connect to your server and mount your partitions:

- [Dedicated server rescue mode](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)
- [VPS rescue mode](/pages/bare_metal_cloud/virtual_private_servers/rescue)

In order to proceed, your system partition must be mounted and you must have write access to your file system.

This means that you have entered a version of the following command into the rescue mode shell:

```bash
chroot path/to/partition/mountpoint/
```

The exact command depends on the mountpoint you used. For example, if you have mounted your partition at `/mnt`, it would be the following:

```bash
chroot /mnt/
```

### Step 2: Reset the user password

Note: On a GNU/Linux distribution, **a password prompt will not display your keyboard inputs**.

Change the user password with the following command (replace `username` with the actual name of the user account):

```bash
passwd username
```

```text
New password: 
Retype new password:
passwd: password updated successfully
```

Remember to use the regular boot mode of your server when restarting it in your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg).

Refer to the corresponding [rescue mode guide](#step1) if necessary.

You have now access to the server with your new password.


## Go further

[Creating and using SSH keys](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)

[Dedicated server rescue mode](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[VPS rescue mode](/pages/bare_metal_cloud/virtual_private_servers/rescue)

[How to configure user accounts and root access on a server](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)

Join our community of users on <https://community.ovh.com/en/>.