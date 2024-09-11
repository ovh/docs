---
title: "How to configure additional SSH keys on an instance"
excerpt: "Find out how to configure additional SSH keys for user accounts and add them to your Public Cloud instance"
updated: 2024-09-09
---

## Objective
 
When creating an instance in the OVHcloud Control Panel, you can add only one SSH key for the preconfigured user account. In order to log on to your instance with other user accounts, you can create more keys and add them to the instance in a few steps.

**This guide explains how to configure additional SSH keys for connections to your instance.**

> [!warning]
> OVHcloud provides services for which you are responsible with regard to their configuration and management. It is therefore your responsibility to ensure that they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend contacting a [specialist service provider](/links/partner) or reaching out to [our community](/links/community) if you experience any issues.
>

## Requirements

- A [Public Cloud instance](/links/public-cloud/public-cloud) in your OVHcloud account
- [Administrative access to your instance via SSH](/pages/public_cloud/compute/creating-ssh-keys-pci#login-linux)

## Instructions

> [!primary]
>
> We currently support the following SSH key formats: **RSA**, **ECDSA** and **ED25519**.
>
> Note that the instructions below are for general use, based on an Ubuntu server OS. Some commands may require customization for the distribution or operating system you are using.
>

### Step 1: Create a new SSH key pair

If necessary, use our [SSH key guide](/pages/public_cloud/compute/creating-ssh-keys-pci) to create a new SSH key pair.  
You can also find information on [managing multiple keys](/pages/public_cloud/compute/creating-ssh-keys-pci#create-ssh-key) on your local device if your setup requires it.

### Step 2: Configure a new user account

[Connect to your instance](/pages/public_cloud/compute/public-cloud-first-steps#connect-to-instance) and use the commands below to create a new user account and `.ssh` folder:

```bash
sudo adduser user2
```

```console
info: Adding user `user2' ...
info: Selecting UID/GID from range 1000 to 59999 ...
info: Adding new group `user2' (1003) ...
info: Adding new user `user2' (1003) with group `user2 (1003)' ...
info: Creating home directory `/home/user2' ...
info: Copying files from `/etc/skel' ...
New password: 
Retype new password:
passwd: password updated successfully
Changing the user information for user2
Enter the new value, or press ENTER for the default
        Full Name []:
        Room Number []:
        Work Phone []: 
        Home Phone []: 
        Other []: 
Is the information correct? [Y/n] y
info: Adding new user `user2' to supplemental / extra groups `users' ...
info: Adding user `user2' to group `users' ...
```

```bash
sudo mkdir /home/user2/.ssh/
```

Without further steps, the user account `user2` in this example has no elevated permissions. If you need to grant this account `root privileges` on your instance, add it to the `sudo group`:

```bash
sudo usermod -aG sudo user2
```

You can learn more about user permissions and related topics in our [user account guide](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).

### Step 3: Add the public SSH key to your instance

#### Transferring public keys created on systems based on GNU/Linux, MacOS or BSD

If you have created your SSH key pairs on a GNU/Linux, MacOS or BSD based system, you can use the command `ssh-copy-id` to add the public keys to your server.

The `ssh-copy-id` utility copies public keys to the file `~/.ssh/authorized_keys` on the specified remote server and will automatically create the file in this directory if necessary.

```bash
ssh-copy-id username@IP_ADDRESS
```

By default, `ssh-copy-id` will try to transfer **all** public keys inside your local user's `~/.ssh` directory. In order to add a single public key, you can specify this key file with the option `-i` followed by the file path:

```bash
ssh-copy-id -i ~/.ssh/KeyFileName username@IP_ADDRESS
```

Example:
    
```bash
ssh-copy-id -i ~/.ssh/myInstance_rsa.pub user2@203.0.113.102
```

You will be prompted for the user's password. If the process was successful, you will receive a message similar to the one below.

```console
Number of key(s) added: 1

Now try logging into the machine, with:   "ssh 'user@server-ip'"
and check to make sure that only the key(s) you wanted were added.
```

If you receive an error message instead, you can always add your public keys manually by following the steps described below.

> [!primary]
>
> As a best practice and for security reasons, a key pair should not be used by multiple users. Since each user on GNU/Linux systems has their own `authorized_keys` file in `~/.ssh/`, you can use the command `ssh-copy-id` as shown above and adapt `KeyFileName` and `user` after you have [created the key pair](/pages/public_cloud/compute/creating-ssh-keys-pci#create-ssh-key).
>

#### Adding public keys to the instance manually

[Connect to your instance](/pages/public_cloud/compute/public-cloud-first-steps#connect-to-instance) and open the file `authorized_keys` in the personal folder of the new user with your preferred text editor (`nano` is used in this example):

```bash
sudo nano /home/user2/.ssh/authorized_keys
```

Paste the **public key string** into this file. Save the file and exit the editor.  
Reboot your instance (`sudo reboot`) or only restart the OpenSSH service with one of the following commands (the appropriate command may vary depending on your OS):

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

The new user can now connect to the instance from the device that stores the corresponding private SSH key:

```bash
ssh username@IP_ADDRESS
```

Example:

```bash
ssh user2@203.0.113.102
```

Consult the [SSH key guide](/pages/public_cloud/compute/creating-ssh-keys-pci) to learn more about using SSH keys with Public Cloud instances.


## Go further

[How to create Public Cloud instances](/pages/public_cloud/compute/public-cloud-first-steps)

[How to replace an SSH key pair on a Public Cloud instance with rescue mode](/pages/public_cloud/compute/replacing_lost_ssh_key)

Join our [community of users](/links/community).