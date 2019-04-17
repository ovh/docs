---
title: 'Getting started with SSH'
slug: ssh-introduction
excerpt: 'Learn how to use the SSH service to access your server'
section: 'Getting started'
---

**Last updated 19th July 2017**

## Objective

SSH (Secure Shell) communication protocol is natively installed on all OVH servers (VPS, dedicated servers, Public Cloud instances).

**This guide will introduce you to using SSH to connect to your server.**

## Requirements

- a [dedicated server](https://www.ovh.co.uk/dedicated_servers/){.external}
- administrative (root) access to the server via SSH

## Instructions

### Compatible software

Many software applications enable you to connect to your server via SSH. To help you, here are some examples:

#### Connecting from a Windows PC

To connect to your server from a Windows PC, you can use any of the following applications:

- [PuTTy](http://www.putty.org/){.external} (Free)
- [MobaXterm](https://mobaxterm.mobatek.net/) (free version and paid version)
- [SecureCRT](http://www.vandyke.com/products/securecrt/){.external} (Paid)

For the latest Windows 10 and Windows Server versions, developer mode gives you access to a bash console. Here is a link to the Microsoft documentation: <https://msdn.microsoft.com/en-gb/commandline/wsl/install-win10>.

#### Connecting from a Mac

The `Terminal`{.action} tool comes with Mac OS X can be used to establish an SSH connection to your server.

#### Connecting from a Linux computer

From a Linux computer, you can use the `Console`{.action} or `Terminal`{.action} tool to connect to your server via SSH.

You can also use the `Terminator` tool, which is a terminal emulator that can be used to manage multiple SSH connections in different tabs. You can read an Ubuntu manual for Terminator here: <http://manpages.ubuntu.com/manpages/zesty/man1/terminator.1.html>.

Besides these applications, you can also use [OpenSSH](http://www.openssh.com){.external} for free.

### Steps for connecting via SSH

#### Step 1: Connecting for the first time

To connect to your machine via SSH, you will need the server’s IPv4 address or name, and the server’s root password, which you received by email when the server was first installed.

after opening the command line console, enter the following command:

```sh
ssh root@server_IP
```

Alternatively, you can use the following command:

```sh
ssh root@server_name
```

The following message will appear:

```sh
The authenticity of host servername (server_IP) can’t be established.
RSA key fingerprint is a9:bb:55:35:86:xx:xx:00:xx:00:2b:2c:79:10:96:3c.
Are you sure you want to continue connecting (yes/no)? YES
Warning: Permanently added servername, server_IP (RSA) to the list of known hosts.
Password:
root@vps12345:~#
```

When you first connect, your SSH client will receive an RSA key fingerprint, which is a fingerprint of the server you are connecting to. This is verified for each new connection. If the fingerprint changes, you will be informed, and this means that one fo the following has occured:

- the machine has been reinstalled
- the SSH server has been reinstalled
- you are connecting to another machine

When you first connect, you must accept the fingerprint that will be saved onto your desktop by your SSH client.

#### Step 2: accessing the SSH manual

On Linux distributions, you will have access to a manual with all of the commands available, and their arguments.

```sh
man bash
```

#### Step 3: updating your SSH client

Your SSH client must be kept up-to-date to function properly. Please refer to the documentation for the SSH client you are using to find out how to update it.

## Go further

Join our user community on <https://community.ovh.com/en/>.
