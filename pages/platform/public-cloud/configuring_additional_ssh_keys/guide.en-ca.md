---
title: 'Configuring additional SSH keys'
slug: configuring_additional_ssh_keys
excerpt: 'Find out how to configure additional SSH keys for your Public Cloud instance'
section: Tutorials
order: 01
---

**Last updated 4th February 2022**

## Objective
 
When creating an instance, only one SSH key for the initial connection can be configured. In order to grant access to your instance to other users, additional keys can be added by configuring the *authorized_keys* file.

**This guide explains how to configure additional SSH keys for connections to your instance.**

## Requirements

- A [Public Cloud instance](https://www.ovhcloud.com/en-ca/public-cloud/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca)
- Administrative access (root) to your instance via SSH

## Instructions

> [!primary]
>
If you would like to store an SSH key in the OVHcloud Control Panel, we recommend to use RSA or ECDSA encryption. ED25519 is currently not supported.
>

### Creating the SSH key

To create a new SSH key, consult the [Public Cloud first steps guide](../public-cloud-first-steps/).

### Configuring the new user

[Connect to your instance with SSH](../public-cloud-first-steps/#connect-to-instance) and use the command below to create a new user:

```bash
~$ sudo adduser user2

Adding user `user2' ...
Adding new group `user2' (1001) ...
Adding new user `user2' (1001) with group `user2' ...
Creating home directory `/home/user2' ...
Copying files from `/etc/skel' ...

Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
Changing the user information for user2
Enter the new value, or press ENTER for the default
Full Name []:
Room Number []:
Work Phone []:
Home Phone []:
Other []:
Is the information correct? [Y/n] Y
```

Open the *authorized_keys* file in the personal folder of the new user with a text editor:

```bash
~$ sudo nano /home/user2/.ssh/authorized_keys
```

Add the public key created in the first step to the file. Save and close the editor.

If the .ssh folder does not already exist, you can create it with this command:

```bash
~$ sudo mkdir /home/user2/.ssh/
```

You can configure multiple SSH keys by adding them to the *authorized_keys* files of the corresponding user folders.

From now on, you can log in with the user and the private key configured previously:

```bash
~$ ssh user2@instance_IP
```
```console
Linux b2-7-de1 5.10.0-10-cloud-amd64 #1 SMP Debian 5.10.84-1 (2021-12-08) x86_64

user2@server:~$
```


## Go further

[Public Cloud first steps](../public-cloud-first-steps/)

[Replacing your lost SSH key pair](../replacing_your_lost_ssh_key_pair/)

Join our community of users on <https://community.ovh.com/en/>.