---
title: Put an instance in rescue mode
excerpt: Put an instance in rescue mode
slug: put_an_instance_in_rescue_mode
legacy_guide_number: g2029
---


## 
If something has been poorly configured or you have lost your SSH key, you may not be able to access your instance anymore. 
We suggest that you use rescue mode to access your data and correct your different configuration files. 

The way this works is quite simple:
You instance is launched on a new image, or an instance with a basic configuration.
You instance's disk is attached to your instance as an additional disk, you therefore just have to mount it in order to access the data. 

This guide explains how to use rescue mode.


## Prerequisites

- Create an instance in the OVH customer account




## Go to rescue mode
To put your server in rescue mode, you just have to click on the arrow at the top right of your instanceand select "Reboot in rescue mode":

![](images/img_3494.jpg){.thumbnail}
You then have to choose the image onto which you want to restart your server in rescue mode:

![](images/img_3495.jpg){.thumbnail}
You will see the default image suggestions, as well as an additional image "rescue-pro", which lets you connect to your instance in recue mode using a temporary password. 

Once the server has gone into rescue mode, a new window will appear at the bottom right, containing your temporary password:

![](images/img_3497.jpg){.thumbnail}


## Access your data
As explained above, your instance's data will be attached as an additional disk in rescue mode. You therefore just have to mount it by following the following procedure so that you can access it:


- Connect in root:


```
admin@instance:~$ sudo su
```


- Verify the available disks:


```
root@instance:/home/admin# lsblk
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 253:0 0 1G 0 disk
└─vda1 253:1 0 1023M 0 part /
vdb 253:16 0 10G 0 disk
└─vdb1 253:17 0 10G 0 part
```


- Mount the partition;


```
root@instance:/home/admin# mount /dev/vdb1 /mnt
```



You data is now accessible from the /mnt file. 

You can now, for example, edit the file containing the list of SSH keys which that admin user can use:


```
root@instance:/home/admin# vim /mnt/home/admin/.ssh/authorized_keys
```




## Reboot your instance normally
Once you have completed your tasks, you can reboot your instance normally, you just have to click on the arrow at the top right of your instace and select
"Exit rescue mode" :

![](images/img_3496.jpg){.thumbnail}


## With the OpenStack APIs
You can reboot your instance in rescue mode via the OpenStack APIs using the following command:


```
root@server:~# nova rescue INSTANCE_ID
```


To exit rescue mode, use the following command:


```
root@server:~# nova unrescue INSTANCE_ID
```




## 

- [Create SSH keys]({legacy}1769)




## 

- [Configuring additional SSH keys]({legacy}1924)



