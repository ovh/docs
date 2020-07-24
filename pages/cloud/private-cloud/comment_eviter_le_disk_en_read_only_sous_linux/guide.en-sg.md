---
title: Avoiding the read-only switch of your VM disk on Linux
slug: how-avoid-disk-read-only-switch-linux
excerpt: Find out how to avoid read-only switching on your Linux VM disk
section: Virtual machine management
order: 10
---

**Last updated 25th June 2020**

## Objective

Occasionally, as a result of a storage-related event, some partitions on a Linux machine may become read-only.

**This guide explains how to correct this status and reduce the risks of a switch.**


## Instructions

When partitions are read-only, writing to the file system is no longer possible.

```sh
>     $ touch test
>
>     touch: cannot touch 'test': Read-only file system
```

The file system status can be confirmed using the `mount` command:

```sh
> $ mount
>
> **/dev/sda1 on / type ext3 (ro,errors=remount-ro)**
> tmpfs on /lib/init/rw type tmpfs (rw,nosuid,mode=0755)
> proc on /proc type proc (rw,noexec,nosuid,nodev)
> sysfs on /sys type sysfs (rw,noexec,nosuid,nodev)
> procbususb on /proc/bus/usb type usbfs (rw)
> udev on /dev type tmpfs (rw,mode=0755)
> tmpfs on /dev/shm type tmpfs  (rw,nosuid,nodev)
> devpts on /dev/pts type devpts (rw,noexec,nosuid,gid=5,mode=620)
```

To restore `/` to *read-write*, the virtual machine must be restarted.

### Workaround solution

By default, the timeout of SCSI devices is 30 seconds on Linux.

*VMware Tools* can increase this time to 180 seconds.

It is recommended to set the timeout to 3600 seconds. Using the following command will execute this for the current session.

```sh
>     $ echo 3600 > /sys/block/`basename /dev/sda`/device/timeout
```

To set this value at the VM's start-up:

```sh
>   $ nano /etc/rc.local 
	
	#!/bin/sh -e
	#
	# rc.local
	#
	# This script is executed at the end of each multiuser runlevel.
	#
	# Make sure that the script will "exit 0" on success or any other value on error.
	#
	# In order to enable or disable this script just change the execution
	# bits.
	#
	# By default this script does nothing.

	echo 3600 > /sys/block/`basename /dev/sda`/device/timeout
	exit 0
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.
