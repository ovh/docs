---
title: 'Become the root user and select a password'
slug: become_the_root_user_and_select_a_password
excerpt: 'This guide will show you how to become the root user and create a password for the root account'
legacy_guide_number: g1786
section: 'Getting started'
order: 5
---

**Last updated 5th October 2021**

## Objective

To perform certain administrative functions on your server (e.g. installing packages), you'll need to have a high level of user access. On Linux servers, this access is called "root".

**This guide will show you how to become the root user and create a password for the root account.**

## Requirements

* a [Public Cloud instance](https://www.ovhcloud.com/en-ie/public-cloud/) in your OVHcloud account
* access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}

## Instructions

> [!primary]
>
This guide assumes that the default user is called 'admin'.
>

### Setting the root password <a name="settingtherootpassword"></a>

First, establish an [SSH connection](https://docs.ovh.com/ie/en/public-cloud/public-cloud-first-steps/#step-4-connecting-to-your-instance) to your server.

At the command line, enter a password for the admin user (for security reasons, the password will not be shown as you type it):

```sh
~$ sudo passwd
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated 
successfully
```

### Become root

To become the root user, type the following command at the command line:

```
~$ sudo su -
~#
```

Next, enter the root password.

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

### Enable root login and Password authentication

#### For connections via the built-in VNC console in the OVHcloud Control Panel

- [First, set the root password](#settingtherootpassword)

Next, access the VNC console on the manager:

Click on the `...`{.action} button next to the corresponding instance and then click on `Instance details`{.action}. Switch to the tab VNC console.  

At the command prompt, enter your login as **root** and your password.

![vnc](images/vnc.png){.thumbnail} 

#### For connections using linux terminals

- [First, set the root password](#settingtherootpassword)

Next, enable root login and password authentication in your **sshd_config** file:

```
~$ sudo sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/g' /etc/ssh/sshd_config

~$ sudo sed -i 's/PasswordAuthentication no/PasswordAuthentication yes/g' /etc/ssh/sshd_config
```

Restart the SSH service

```
~$ service sshd restart
```

Once done, you should be able to access your server with the root user and password set.

#### For connections using Putty

- [First, set the root password](#settingtherootpassword)

Next, enable root login and password authentication in your **sshd_config** file:

```
~$ sudo sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/g' /etc/ssh/sshd_config

~$ sudo sed -i 's/PasswordAuthentication no/PasswordAuthentication yes/g' /etc/ssh/sshd_config
```

Restart the SSH service

```
~$ service sshd restart
```

In the Putty authentication agent (pageant key list) remove your private SSH key.

![Remove private key](images/pageantkeylist.png){.thumbnail}

Once done, you should be able to access your server with the root user and password set.

## Go further

Join our community of users on <https://community.ovh.com/en/>.