---
title: 'Replacing your lost SSH key pair'
slug: replacing_your_lost_ssh_key_pair
excerpt: 'Find out how to regain SSH access to your Public Cloud Instance'
legacy_guide_number: g2069
section: Security
order: 4
---

**Last updated 27th September 2018**

## Objective

If you have lost your SSH key, you might be unable to connect to your Public Cloud Instance if you have not configured any alternative way to do so.

To regain access, we have provided you with a [rescue mode](https://docs.ovh.com/ie/en/public-cloud/put_an_instance_in_rescue_mode/), which allows you to log in with a password and then change your files.

**This guide explains how to configure the *authorized_keys* file for the admin user, so that you can add a new SSH key to regain access to your instance.**

## Requirements

- a [Public Cloud Instance](https://www.ovhcloud.com/en-ie/public-cloud/) in your OVHcloud account
- access to your instance via SSH

## Instructions

> [!primary]
>
If you would like to store an SSH key in the OVHcloud Control Panel, we recommend to use RSA, or ECDSA encryption. ED25519 is currently not supported.
>

After mounting your instance's disk in [rescue mode](https://docs.ovh.com/ie/en/public-cloud/put_an_instance_in_rescue_mode/), you will be able to access all your files. The file containing your SSH keys is shown below:

```
/home/USER_NAME/.ssh/authorized_keys
```

If you want to add your new SSH key, you just have to edit this file as follows:

```
admin@instance:~$ sudo vim /mnt/home/USER_NAME/.ssh/authorized_keys

ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000== old@sshkey
ssh-rsa AAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDEEEEEEEEE
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhh== new@sshkey
```

### Change the SSH key for the default user

To change your default user's SSH key, you just have to go to the user's personal file.

For example, for the admin user, the file you need is in the following folder:

```
/home/admin/.ssh/authorized_keys
```

For an Ubuntu instance, the default user will be "ubuntu" and the file will therefore be in the following folder:

```
/home/ubuntu/.ssh/authorized_keys
```

### Change the password for the default user

You can also change your default user's password by using rescue mode and the following commands (if the user is admin).

First, change the root directory so that it is placed directly on the instance's disk:

> [!primary]
>
In the example below, we have used **vdb1** as the name of the server's disk and **mnt** as the mount point.
>


```
root@instance:/home/admin# mount /dev/vdb1 /mnt/
root@instance:/home/admin# chroot /mnt/
```

Then change the admin password.

```
root@instance:/# passwd 
admin
```

Once this change has taken place and been backed up, you need to reboot your instance on its disk, so that you can log in with your new SSH key.

## Go further

[Become root and select a password](https://docs.ovh.com/ie/en/public-cloud/become_root_and_select_a_password/)

Join our community of users on <https://community.ovh.com/en/>.