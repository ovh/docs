---
title: "Replacing your lost SSH key pair"
excerpt: "Find out how to regain SSH access to your dedicated server"
updated: 2023-02-06
---

**Last updated 6th February 2023**

## Objective

If you are [using SSH keys](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated) to connect to your dedicated server, losing your private SSH key could mean losing access to your server altogether.

However, you can still connect to your server via the OVHcloud [rescue mode](/pages/bare_metal_cloud/dedicated_servers/rescue_mode), which allows you to log in with a provisional password and modify your files.

**This guide explains how to replace your SSH keys if you have lost access to your server.**

> [!warning]
>OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. It is therefore your responsibility to ensure that they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a [specialist service provider](https://partner.ovhcloud.com/en-gb/directory/) or reach out to [our community](https://community.ovh.com/en/) if you face difficulties or doubts concerning the administration, usage or implementation of services on a server.
>

## Requirements

- A [dedicated server](https://www.ovhcloud.com/en-gb/bare-metal/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)

## Instructions

### Step 1: Disable the current SSH key

In order to access your server in rescue mode, the currently active SSH key has to be disabled first.

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) and navigate to the `SSH keys`{.action} section. Use our [SSH key guide](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated#cpsshkey) if necessary.

Since the public key stored in the Control Panel is useless without the corresponding private key, you can simply remove it. Click on the <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i> button in the row of the key and select `Delete key`{.action}.

![Delete key](images/replace-lost-key-01.png){.thumbnail}

In the popup window, click on `Confirm`{.action}.

### Step 2: Create a new key pair

Create a new SSH key pair on your device, as described in the first part of the [SSH key guide](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated).

### Step 3: Access your server in rescue mode and replace the key

Follow the steps in the [rescue mode guide](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) to connect to your server and mount your partitions.

When you have access to your files, open the "authorized_keys" file concerned with a text editor. This file stores SSH keys and is located in the `home` folder of the user with which you connect to your server. (Replace "USER_NAME" with your actual user name.)

```
rescue-customer:~# sudo nano /mnt/home/USER_NAME/.ssh/authorized_keys
```

Copy and paste your new public key (created in step 2) into the file. It should look similar to the following example:

```console
ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000== old@sshkey
ssh-rsa AAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDEEEEEEEEE
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhh== new@sshkey
```

You can delete the now obsolete "old" key string from the file. Save your changes and exit the editor.

Switch the boot mode back to "normal" and restart the server in your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB). Refer to the [rescue mode guide](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) if necessary.

You have now access to the server with your new SSH key pair.

## Go further

[Changing the root password on a dedicated server](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)

Join our community of users on <https://community.ovh.com/en/>.