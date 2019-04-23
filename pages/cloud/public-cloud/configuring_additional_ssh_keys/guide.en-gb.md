---
title: 'Configuring additional SSH keys'
slug: configuring_additional_ssh_keys
excerpt: 'This guide will explain how to configure additional SSH keys for your instance in order to grant access to other people.'
legacy_guide_number: g1924
section: Knowledge Base
---

**Last updated 13th March 2019**

## Objective
 
When creating an instance, it isn't possible to configure only one SSH key. However, you can still grant access to  other users who have SSH keys for your instance by configuring the authorized_keys file.

**This guide will explain how to configure additional SSH keys for your instance in order to grant access to other people.**

## Requirements

* access to the [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}
* a [Public Cloud Instance](https://www.ovh.co.uk/public-cloud/instances/){.external} in your OVH account
* Command line access to your instance via SSH

## Instructions

### Creating the SSH key

First, follow our guide to [Create your first SSH keys](https://docs.ovh.com/gb/en/public-cloud/create-ssh-keys/){.external}.

### Configuring the new user

Next, connect to your instance via SSH and use the commands below to create a new user:

```
admin@server-1:~$ sudo adduser user2

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

Next, save a new public SSH key in the personal folder of the new user, using the command below:

```
admin@server-1:~$ sudo vim /home/user2/.ssh/authorized_keys
```

If the .ssh file doesn't already exist, you can create it with this command:

```
admin@serveur-1:~$ sudo mkdir /home/user2/.ssh/
```

From now on, you can connect with this user using the private key linked to the one you've configured.

```
root@server:~$ ssh user2@149.xxx.xxx.22

Linux server-1 3.2.0-4-amd64 #1 SMP Debian 3.2.68-1+deb7u1 x86_64
Last login: Fri Oct 16 08:14:24 2015 from proxy-109-190-254-35.ovh.net

user2@server-1:~$
```


You can configure another SSH key for the admin user by adding them to the corresponding authorized_keys file with this command:

```
admin@server-1:~$ sudo vim /home/admin/.ssh/authorized_keys
```

## Go further

[Create SSH keys](https://docs.ovh.com/gb/en/public-cloud/create-ssh-keys/){.external}

[Replacing your lost SSH key pair](https://docs.ovh.com/gb/en/public-cloud/replacing_your_lost_ssh_key_pair/){.external}

Join our community of users on <https://community.ovh.com/en/>.

