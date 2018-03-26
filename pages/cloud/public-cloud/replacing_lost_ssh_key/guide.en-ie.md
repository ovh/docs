---
title: Replacing your lost SSH key pair
excerpt: Replacing your lost SSH key pair
slug: replacing_your_lost_ssh_key_pair
legacy_guide_number: g2069
---


## 
If you have lost your SSH key you might be unable to connect to your instance if you have not configured any alternative way to do so.

To regain access, we have provided you with a rescue mode which allows you to log in with a password and then change your files.

This guide explains how to configure the admin user's authorized_keys file so that you can add a new SSH key to regain access to your instance .


## Prerequisites

- [Creating SSH keys]({legacy}1769)
- Put an instance in rescue mode




## 
After mounting your instance's disk in rescue mode, you will be able to access all your files.

The file containing your SSH keys is:


```
/home/USER_NAME/.ssh/authorized_keys
```


If you want to add your new SSH key, you just have to edit this file and add your new key to it:


```
admin@instance:~$ sudo vim
/mnt/home/USER_NAME
/.ssh/authorized_keys

ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000== old@sshkey
ssh-rsa AAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDEEEEEEEEE
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhh== new@sshkey
```



## Information:
To change your default user's SSH key, you just have to go to the user's personal file.

For example, for the admin user, the file you need is in the following folder:


```
/home/admin/.ssh/authorized_keys
```


For an Ubuntu 15.10 instance, the default user will be ubuntu and the file will therefore be in the following folder:


```
/home/ubuntu
/.ssh/authorized_keys
```



## For your information:
You can also change your default user's password by using rescue mode and the following commands (if the user is admin):


- The root directory is changed so that it is placed directly on the instance's disk:


```
root@instance:/home/admin# mount /dev/vdb1 /mnt/
root@instance:/home/admin# chroot /mnt/
```


- The admin password is changed

:


```
root@instance:/# passwd 
admin
```


Once this change has taken place and been backed up, you just have to reboot your instance on its disk so that you can log in to your instance with your new SSH key.


## 

- [Become root and select a password]({legacy}1786)




## 
[Go back to the index of Cloud guides]({legacy}1785)

