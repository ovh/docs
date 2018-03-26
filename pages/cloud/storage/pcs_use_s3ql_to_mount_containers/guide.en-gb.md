---
title: Use S3QL to mount object storage containers
excerpt: Use S3QL to mount object storage containers
slug: use_s3ql_to_mount_object_storage_containers
section: Object Storage
legacy_guide_number: g1908
---


## 
S3QL is a remote file system that can be configured locally to store data using cloud storage solutions like OVH Object Storage. 
It has several features, such as data compression, encryption, and container snapshots, which makes this solution particularly suitable for creating backups.

You can find more information directly on their [website](http://www.rath.org/s3ql-docs/).

This guide shows you how to set up an object container as file system.


## Prerequisites

- [Create user access to Horizon]({legacy}1773)
- [Add storage space]({legacy}1790)



## Please note
Using an object container as a file system can impact the performance of your operations.


## Create your file system

- Install S3QL:

```
admin@serveur1:~$ sudo apt-get install s3ql
```



The latest version should be available in the Debian 8 repository

- Create a file containing the login information:

```
admin@serveur1:~$ sudo vim s3qlcredentials.txt

[swift]
backend-login: TENANT_NAME:USERNAME
backend-password: PASSWORD
storage-url: swiftks://auth.cloud.ovh.net/REGION_NAME:CT_NAME
fs-passphrase: PASSPHRASE
```



Information such as TENANT_NAME, USERNAME can be found in your OpenRC file. 
You can follow this guide below in order to retrieve it:

- [Access and Security in Horizon]({legacy}1774)


The REGION_NAME and CT_NAME arguments can be adapted according the name and location of your object container. 


- Change authentication file access permissions:

```
admin@serveur1:~$ sudo chmod 600 s3qlcredentials.txt
```


- Object container formating:

```
admin@serveur1:~$ sudo mkfs.s3ql --authfile s3qlcredentials.txt swiftks://auth.cloud.ovh.net/GRA1:CT_S3QL
```



You then have to add the passphrase to your authentication file. 
If you do not want to configure it, you have to delete the "fs-passphrase: PASSPHRASE" line from your file.


## Configure your file system

- Create the mounting point

```
admin@serveur1:~$ sudo mkdir /mnt/container
```


- Mount the object container

```
admin@serveur1:~$ sudo mount.s3ql --authfile s3qlcredentials.txt swiftks://auth.cloud.ovh.net/GRA1:CT_S3QL /mnt/container/
```


- Check mounting:

```
admin@serveur1:~$ sudo df -h

Filesystem Size Used Avail Use% Mounted on
/dev/vda1 9.8G 927M 8.5G 10% /
udev 10M 0 10M 0% /dev
tmpfs 393M 5.2M 388M 2% /run
tmpfs 982M 0 982M 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 982M 0 982M 0% /sys/fs/cgroup
swiftks://auth.cloud.ovh.net/GRA1:CT_S3QL 1.0T 0 1.0T 0% /mnt/container
```



You cannot use S3QL in offline mode, you should not configure persistance via the /etc/fstab file but by using a script which will run when your sever starts up.


## F.A.Q.
Please do not hesitate to see view the  [S3QL FAQ](https://bitbucket.org/nikratio/s3ql/wiki/FAQ)


## 
 

