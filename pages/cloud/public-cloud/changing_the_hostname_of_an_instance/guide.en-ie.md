---
title: Changing the hostname of an instance
excerpt: Changing the hostname of an instance
slug: changing_the_hostname_of_an_instance
legacy_guide_number: g1928
---


## 
The cloud-init program not only lets you configure your Public Cloud instance when you create it but also each time you reboot. 
Therefore, if you want to reconfigure your hostname, whether due to an error when creating your instance, or because you need to reconfigure your mail server for example, you will need to disable the cloud-init program that configures the hostname, to prevent it from being reset. 

This guide explains how to reconfigure cloud-init so that you can change your instance hostname.


## Prerequisites

- An instance




## Disabling the cloud-init program

- Edit the configuration file:

```
admin@serveur-1:~$ sudo vim /etc/cloud/cloud.cfg
```


- Edit the status of these modules:

```
preserve_hostname: true
manage_etc_hosts: false
```





## Changing the host name

- Edit the /etc/hostname file:

```
admin@serveur-1:~$ sudo vim /etc/hostname

webserver
```


- Edit the /etc/hosts file:

```
admin@serveur-1:~$ sudo vim /etc/hosts

127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```


- Reboot the instance 

```
admin@serveur-1:~$ sudo reboot
```



Following the reboot the host name change has been correctly registered:

```
admin@webserver:~$ sudo cat /etc/hosts

127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```




## 
 

