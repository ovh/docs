---
title: 'How to enable logins with the root user via SSH'
excerpt: 'Find out to configure SSH to allow root logins'
slug: enable-root-login
section: Tutorials
hidden: true
---

**Last updated 19th September 2020**

## Objective

To perform certain administrative functions on your server (e.g. installing packages), you’ll need to have a high level of user access. On Linux servers, this access is called “root”.

**This guide provides some basic information on how to enable root logins via SSH.**

> [!warning]
>
> While OVHcloud provides you with the devices, the responsibility rests solely in your hands. Since we have no access to these machines, we are not their administrators. It is your responsibility to manage the software, and apply proper security measures on a daily basis. This guide is designed to help you with the most common tasks. Nevertheless, we recommend that you contact a specialised service provider if you have difficulties or doubts concerning the administration, usage or implementation of security measures on a server.
>

## Requirements

- A service (VPS, Dedicated Server, Public Cloud Instance) that currently does not have root logins enabled.

## Instructions

### Become root

To become the root user, type the following command at the command line:

```sh
~$ sudo su -
~#
```

You should be prompted for your current password to change users.

### Set the root password

Now that you are the root user, you can set a password for it.

```sh
~# passwd
New password: 
Retype new password: 
passwd: password updated successfully
```

### Enable root logins

You will need to configure the SSH service to allow root logins.

> [!warning]
>
> Enabling root logins is not recommended as it will open your server to brute force attacks.
> We recommend taking measures to secure your VPS first. You can refer to our guide on [Securing a VPS](../tips-for-securing-a-vps/){.external}
>

#### Open the sshd_config file

You need to use a text editor such as vim or nano.

```sh
~# vi /etc/ssh/sshd_config
```

Add the following line to allow root logins.

```sh
PermitRootLogin yes
```

Save the file

### Restart the SSH service

```sh
~# systemctl restart ssh
```

You should now be able to login with the root user.


## Go further

[Securing a VPS](../tips-for-securing-a-vps/)

Join our community of users on <https://community.ovh.com/en/>.
