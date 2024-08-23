---
title: How to replace an SSH key pair
excerpt: Find out how restore server access by replacing an SSH key pair with a new one in case your private key is lost
updated: 2024-04-04
---

## Objective

If you are [using SSH keys](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated) to connect to your server, losing your private SSH key could mean losing access to your server altogether.

However, you can still connect to your server via the OVHcloud rescue mode, which allows you to log in with a provisional password and modify your files.

**This guide explains how to replace your SSH keys if you have lost access to your server.**

> [!warning]
>OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. It is therefore your responsibility to ensure that they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a [specialist service provider](/links/partner) or reach out to [our community](https://community.ovh.com/en/) if you face difficulties or doubts concerning the administration, usage or implementation of services on a server.
>

## Requirements

- A [dedicated server](https://www.ovhcloud.com/en-gb/bare-metal/) or a [VPS](https://www.ovhcloud.com/en-gb/vps/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

### Step 1: Create a new key pair

Create a new SSH key pair on your device, as described in the first part of the [SSH key guide](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated).

<a name="step2"></a>

### Step 2: Access your server in rescue mode and replace the key

Follow the steps in the rescue mode guide to connect to your server and mount your partitions:

- [Dedicated server rescue mode](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)
- [VPS rescue mode](/pages/bare_metal_cloud/virtual_private_servers/rescue)

In order to proceed, your system partition must be mounted and you must have write access to your file system.

This means that you have entered a version of the following command into the rescue mode shell:

```bash
chroot path/to/partition/mountpoint
```

The exact command is dependent on the mountpoint you used. For example, if you have mounted your partition at `/mnt`, it would be the following:

```bash
chroot /mnt/
```

When you have access to your files, open the "authorized_keys" file concerned with a text editor. This file stores SSH keys and is located in the `home` folder of the user with which you connect to your server. (Replace "USER_NAME" with your actual user name.)

```bash
nano /mnt/home/USER_NAME/.ssh/authorized_keys
```

Copy and paste your new public key (created in step 1) into the file. It should look similar to the following example:

```console
ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000== old@sshkey
ssh-rsa AAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDEEEEEEEEE
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhh== new@sshkey
```

For security reasons, delete the obsolete "old" key string from the file. Save your changes and exit the editor.

Switch the boot mode back to "normal" and restart the server in your [OVHcloud Control Panel](/links/manager). Refer to the [rescue mode guide](#step2) if necessary.

You have now access to the server with your new SSH key pair.

## Go further

[Getting started with SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Dedicated server rescue mode](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[VPS rescue mode](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Join our [community of users](/links/community).
