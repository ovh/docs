---
title: Configuring additional SSH keys
excerpt: Configuring additional SSH keys
slug: configuring_additional_ssh_keys
legacy_guide_number: g1924
---


## 
When creating an instance, it isn't possible to configure only one SSH key. However, you can still grant access to  other users who have SSH keys for your instance by configuring the authorized_keys file.

This guide will explain how to configure additional SSH keys for your instance in order to grant access to other people.


## Prerequisite

- An instance




## Creating the SSH key
You can use the following when creating the SSH key:

- [Creating SSH keys]({legacy}1769)


However, adding it to your OVH manager isn't necessary.


## Configuring the new user

- Connect to your instance
- Create a new user

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


- Add a new public SSH key in the personal folder of the new user

```
admin@server-1:~$ sudo vim /home/user2/.ssh/authorized_keys
```



You can create the .ssh file if it doesn't already exist.

```
admin@serveur-1:~$ sudo mkdir /home/user2/.ssh/
```


From now on, you can connect with this user with the private key linked to the one you've configured.

```
root@server:~$ ssh user2@149.xxx.xxx.22

Linux server-1 3.2.0-4-amd64 #1 SMP Debian 3.2.68-1+deb7u1 x86_64
Last login: Fri Oct 16 08:14:24 2015 from proxy-109-190-254-35.ovh.net

user2@server-1:~$
```


You can configure other SSH key for the admin user by adding them to the corresponding authorized_keys file.

```
admin@server-1:~$ sudo vim /home/admin/.ssh/authorized_keys
```




## 
[Back to the Cloud guide index]({legacy}1785)

