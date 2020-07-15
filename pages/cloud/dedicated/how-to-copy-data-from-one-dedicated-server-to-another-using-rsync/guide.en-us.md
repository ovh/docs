---
title: 'Copying data from one dedicated server to another using rsync'
slug: copy-data-server-rsync
excerpt: 'Copy your data easily from one server to another with rsync'
section: Tutorial
---

## Introduction

As part of a migration or backup process, you may find that you need to copy or transfer data stored on one dedicated server, and move it to another. 

Distributed under the GNU GPL licence, rysnc (short for “remote synchronisation”) is a free file syncing software program that can perform unidirectional synchronisation, i.e. copying files from a source server to a target server. 

**This tutorial will show you how to copy data from one OVHcloud dedicated server to another using rsync.**

> [!warning]
>
This guide will show you how to use one or more OVHcloud solutions with external tools, and the changes you need to make in specific contexts. You may need to adapt the instructions according to your situation. If you experience any difficulties carrying out these operations, please get in touch with a specialised service provider and/or discuss your issues with our community on <https://community.ovh.com/en/>. OVHcloud cannot assist you in this regard.
>

## Requirements


### What you need to know

*     knowledge of Linux administration
*     knowledge of how to install new packets 
*     SSH access


### What you need to have

*     at least two OVHcloud dedicated servers working with a GNU/Linux distribution
*     *root* access to the source server
*     *SSH* access to the target server

## Instructions


### Step 1: Install rsync.

The source server used for this tutorial has Debian 9.4 installed. This distribution has rsync natively in its repositories, so it does not need to be added, and rsync can be installed directly.

To do this, log in via SSH as a superuser (or root user) on your source server, then install rsync via the following command:

```sh
apt-get update && apt-get install rsync
```

### Step 2: Launch the transfer.


#### If you do not want to exclude any folders in your copy

With rsync, you can copy all of the folders, sub-folders and files included in the path entered, and move them to another server.

To do this, the general structure of the command used in this tutorial will be: `rsync -av source/ destination/`  

Since rsync uses SSH protocol to connect to the target server, you will need to add the required login details. The structure of the command will be as follows: `rsync -av *YourLocalFolder*/ login@server:/*DestinationFolder*/`

Also, if you have changed the SSH port and it is not set to port 22, you will need to specify the port number to use in order to establish the SSH connection by adding ` -e 'ssh -p X' ` to your order. <b>Please note that ‘X’ should be replaced with the SSH port number to be used.</b>

Then you will need to run the following command in order to copy your data from one server to another via rsync:

```sh
rsync -av -e 'ssh -p X' YourLocalFolder/ login@server:/DestinationFolder/
```

> [!primary]
>
> By default, there are no indicators that can accurately monitor the progress of the copy.
> To track progress easily (with detailed statistics, expression in MB, GB etc.) and get real-time tracking of the transfer progress, we recommend adding the following argument to the command: `-P --stats --human-readable`. This means it will look like this:
>
> ```sh
> rsync -av -P --stats --human-readable -e 'ssh -p X' YourLocalFolder/ login@server:/DestinationFolder/
> ```


#### If you want to exclude one or more folders in your copy

If rsync can be used to transfer all of the folders from a server, you can exclude certain folders or sub-folders from the copy that you are getting ready to create. If you would like to do this, list the folders, sub-folders and their names on your server.

And generally, we recommend excluding the transfer of temporary caches and system files from the source server, in order to avoid any conflict on the target server. 

Here is a non-exhaustive list of some of the folders that can contain temporary caches and system files on a server with a GNU/Linux distribution: 

* /dev/*
* /proc/* 
* /sys/*
* /tmp/*
* /run/*
* /media/*
* /lost+found
 
Once you have finished listing the files you want to exclude, use the  `--exclude` argument for rsync to ignore these files during the copy. 
 
This argument can be repeated for as many times as there are folders and sub-folders to exclude, and is added to the end of the command. The general structure of a command like this is: `rsync --exclude="Folder_Name" --exclude="Other_Folder_name" source/ destination/`

> [!primary]
>
Please note that the folder location must be expressed in its relative location, because rsync does not take absolute paths into account. So if one of the folders to exclude is located in ‘/home/user/test’,  and you are currently in ‘/test’, simply add ‘--exclude="test"’ (relative path), rather than ‘--exclude="/home/user/test"’ (absolute path).
>


By taking into account the elements that are already exposed, the transfer command will be as follows:
 	
```sh
rsync -av -P --stats --human-readable -e 'ssh -p X' --exclude="Folder_Name" --exclude="Other_Folder_name" YourLocalFolder/ login@server:/DestinationFolder/
```

## Conclusion

You now know how to copy your data easily from one server to another with rsync.

To go further, you can join our community of users on <https://community.ovh.com/en/>.
