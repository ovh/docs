---
title: "How to replace an SSH key pair on a Public Cloud instance"
excerpt: "Find out how restore server access by replacing an SSH key pair with a new one in case your private key is lost"
updated: 2024-06-13
---

## Objective

Losing your private SSH key means losing access to your instance if you have not configured an alternative way of access.

However, you can still connect to your instance via the OVHcloud rescue mode, which allows you to log in with a provisional password and modify your files.

**This guide explains how to replace your SSH keys if you have lost access to your instance.**

> [!warning]
> OVHcloud provides services for which you are responsible with regard to their configuration and management. It is therefore your responsibility to ensure that they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend contacting a [specialist service provider](/links/partner) or reaching out to [our community](/links/community) if you experience any issues.
>

## Requirements

- A [Public Cloud instance](/links/public-cloud/public-cloud) in your OVHcloud account
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

### Step 1: Create a new key pair

Create a new SSH key pair on your local device, as described in the first part of the [SSH key guide](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated).

### Step 2: Access your instance in rescue mode

Follow the steps in the [rescue mode guide](/pages/public_cloud/compute/put_an_instance_in_rescue_mode) to reboot the instance into rescue mode, connect to it and mount your partitions.

Once you have used the `mount` command as described in the guide and your system partition is accessible, you can use the following command:

```bash
chroot path/to/partition/mountpoint
```

The file path is dependent on the mountpoint you used. If you have mounted your partition at `/mnt`, you would enter the following:

```bash
chroot /mnt/
```

You should now have full write access to your files in this folder.

### Step 3: Replace the key

Open the "authorized_keys" file concerned with a text editor. This file stores SSH keys and is located in the `home` folder of the user with which you connect to your instance.

Example:

```bash
nano /mnt/home/USER_NAME/.ssh/authorized_keys
```

Replace "USER_NAME" with your actual user name.

Copy and paste your new public key (created in step 1) into the file. It should look similar to the following example:

```console
ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000== old@sshkey
ssh-rsa AAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDEEEEEEEEE
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhh== new@sshkey
```

For security reasons, delete the obsolete "old" key string from the file. Save your changes and exit the editor.

Restart the instance in "normal" mode from your [OVHcloud Control Panel](/links/manager). Refer to the [rescue mode guide](/pages/public_cloud/compute/put_an_instance_in_rescue_mode) if needed.

You have now access to the instance with your new SSH key pair.


## Go further

Join our [community of users](/links/community).