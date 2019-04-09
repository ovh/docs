---
title: 'Configure automatic object deletion'
slug: configure-auto-delete-objects
legacy_guide_number: 1950
section: 'Object Storage'
---

## Overview
To help manage your Object Storage, it is possible to specify the life of some files.  For example, this makes it possible to keep backups for a determined period of time. This guide explains how to automatically delete files after a certain time, or particular date.


### Requirements
- [Prepare the environment to use the OpenStack API ]({legacy}1851){.ref}
- [Load OpenStack environment variables]({legacy}1852){.ref}


## Configuring Object Deletion
There are two ways to delete your files:

- After a certain number of seconds
- On a given date


### After a certain number of seconds
To do this, you will need to configure the X-Delete-After** ** header of your objects:


```bash
root@server:~$ swift post --header "X-Delete-After: 3600" container test.txt
```

The test.txt** file** will be deleted after 1 hour.


### On a given date
First, you will need to know the date of deletion in epoch format. It is possible to use [converters](http://www.epochconverter.com/){.external} to easily find the value to enter.

Then you can enter this date in the ** X-Delete-At** header:


```bash
root@server:~$ swift post --header "X-Delete-At: 1448928000" container test.txt
```

The **test.txt file** will be deleted on December 1, 2015.