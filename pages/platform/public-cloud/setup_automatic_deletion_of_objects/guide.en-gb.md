---
title: 'Configuring automatic object deletion'
slug: configure-auto-delete-objects
legacy_guide_number: 1950
section: Knowledge Base
---

## Introduction
To help manage your Object Storage, you can specify the TTL (Time to Live) for some files. For example, by doing this you can define a time period for keeping backups. This guide explains how to delete files automatically after a set time, or on a particular date.


### Requirements
- an environment that is ready to use the OpenStack API
- OpenStack environment variables set


## Configure object deletion.
There are two ways you can delete your files:

- after a certain number of seconds
- on a given date


### After a certain number of seconds
To do this, you will need to configure the **X-Delete-After** header on your objects:


```bash
root@server:~$ swift post --header "X-Delete-After: 3600" container test.txt
```

The **test.txt** file will be deleted after 1 hour.


### On a given date
First of all, you need to know the deletion date in Epoch format. You can use [this timestamp converter](http://www.epochconverter.com/){.external} to find the value you need to enter.

Then you can enter this date in the **X-Delete-At**header:


```bash
root@server:~$ swift post --header "X-Delete-At: 1448928000" container test.txt
```

The **test.txt** file will be deleted on 01 December, 2015.