---
title: Configure automatic object deletion
excerpt: Configure automatic object deletion
slug: configure_automatic_object_deletion
section: Object Storage
legacy_guide_number: g1950
---


## 
To easily manage your Object Storage, you may need to define the lifespan of some of your files. This allows you, for example, to keep some backups only for a specific period.

This guide shows you how to set up automatic file deletion after a specified period or on a specific date.


## Prerequisites

- [Prepare the environment to use the OpenStack API]({legacy}1851)
- Set OpenStack environment variables




## 
There are two ways to delete your objects/files

- After a certain number of seconds
- On a specific date




## After a certain number of seconds
To do this, configure your request's X-Delete-After header 


```
root@server:~$ swift post --header "X-Delete-After: 3600" container test.txt
```


The test.txt file will be deleted in an hour.


## On a specific date
First, you need to know what the deletion date is in epoch format.
To help you find the value you need to insert, use a [converter](http://www.epochconverter.com/).

Then you can enter this date in the X-Delete-At header:


```
root@server:~$ swift post --header "X-Delete-At: 1448928000000" container test.txt
```


The file will therefore be deleted on the 1st of December 2015.


## 
 

