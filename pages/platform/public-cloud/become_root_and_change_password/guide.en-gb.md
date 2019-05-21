---
title: 'Become the root user and select a password'
slug: become_the_root_user_and_select_a_password
excerpt: 'This guide will show you how to become the root user and create a password for the root account'
legacy_guide_number: g1786
section: Knowledge Base
---

**Last updated 11th October 2018**

## Objective

To perform certain administrative functions on your server (e.g. installing packages), you'll need to have a high level of user access. On Linux servers, this access is called "root".

**This guide will show you how to become the root user and create a password for the root account.**

## Requirements

* a Public Cloud project activated
* access to the OVH [Control Panel](https://ca.ovh.com/auth/?action=gotomanager){.external}

## Instructions

> [!primary]
>
This guide assumes that the default user is called 'admin'.
>

### Changing the root password

First, establish an SSH connection to your server.

At the command line, enter a password for the admin user (for security reasons, the password will not be shown as you type it):

```sh
~$ sudo passwd
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated 
successfully
```

### Update repositories (Debian/Ubuntu)

To update the installed software packages on your server, type the following command at the command line:

```
~$ sudo apt-get update
```

### Update the system (CentOS/Fedora)

To update your server's operating system, type the following command at the command line:

```
~$ sudo yum update
```

### Edit a configuration file

```
~$ sudo vi /etc/hosts.allow
```

### Become root

To become the root user, type the following command at the command line:

```
~$ sudo su -
~#
```

Next, enter the root password.

## Go further

Join our community of users on <https://community.ovh.com/en/>.