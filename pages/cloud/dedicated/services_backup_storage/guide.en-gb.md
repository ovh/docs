---
title: 'Using backup storage on a dedicated server'
slug: services-backup-storage
excerpt: 'This guide explains how to enable the Backup Storage functionality and how to use it.'
section: Storage
---

**Last updated 14th May, 2018**

## Objective

OVH provides 500 GB of free backup storage space with each Dedicated Server.

**This guide explains how to enable and use this Backup storage space**.

## Requirements

* Access to a [dedicated server](https://www.ovh.co.uk/dedicated_servers/){.external}
* Access to your [OVH control panel](https://www.ovh.com/auth/?action=gotomanager){.external}

## Instructions

### Activate Backup storage

Log into your [OVH control panel](https://www.ovh.com/auth/?action=gotomanager){.external}, and go to your server's page. Then select the `Backup storage`{.action} tab, and click the `Activate the Backup Storage`{.action} button.

![Activate Backup storage](images/backup-storage-01-edited.png){.thumbnail}


Then click the `Confirm`{.action} button.

![Activate Backup storage](images/backup-storage-02.PNG){.thumbnail}

You will now receive an activation email, and your backup storage will be configured in a few minutes.

### Set up access control

Access to your Backup storage is restricted by IP address using an access control list (ACL). Only IPs in your OVH Account will be able to access the Storage, once they are whitelisted in the ACL. They The other protocols (NFS and CIFS) are not authorised by default. To authorise them, you will need to create an ACL.

#### Add backup access

Log into your [OVH control panel](https://www.ovh.com/auth/?action=gotomanager){.external}, and go to your server's page. Then select the `Backup storage`{.action} tab, and click the `Add an access button`{.action}.

![Add backup access](images/backup-storage-03-edited.png){.thumbnail}

You will then need to select the IP block that you want to authorise. After selecting the IP block, select the protocol you want to authorise, and then click the `Next`{.action} button.

> [!primary]
>
> You can only authorise IP blocks in your OVH account to access the backup storage.
>

![Add backup access](images/backup-storage-07-edited.png){.thumbnail}

Now confirm your options and click the `Finish`{.action} button.

![Add backup access](images/backup-storage-08-edited.png){.thumbnail}

You will now be able to access your server's backup storage from the IP block you selected.

#### Modifying Access

To change the protocols for an authorised IP block, click the pencil icon for the IP block you want to modify, and then select/deselect the desired protocols. When you have finished, click the tick button to save your changes.

![Modifying access](images/modify_access.png){.thumbnail}

#### Deleting Access

To revoke authorisation for an IP block, click the trash can icon that appears at the end of the line.

![Modifying access](images/delete_access.png){.thumbnail}

And then click to confirm.

![Modifying access](images/Confirm_IP_Removal.png){.thumbnail}

Access to the backup storage will now be revoked for that IP block.

### Reset your password

Log into your [OVH control panel](https://www.ovh.com/auth/?action=gotomanager){.external}, and go to your server's page. Then select the `Backup storage`{.action} tab and click the `Forgotten your password`{.action} button.

![Reset your password](images/backup-storage-04-edited.png){.thumbnail}

Then click the `Confirm`{.action} button.

![Reset your password](images/backup-storage-09.PNG){.thumbnail}

A password recover email will now be sent to the email address registered to your admin account. Please follow the instructions in the email to reset your password.

### Delete the Backup Storage

Log into your [OVH control panel](https://www.ovh.com/auth/?action=gotomanager){.external}, and go to your server's page. Then select the `Backup storage`{.action} tab and click the `Delete the Backup Storage button`{.action}

![Delete the Backup storage](images/backup-storage-05-edited.png){.thumbnail}

Click `Confirm`{.action} on the warning message to proceed with the deletion.

![Delete the Backup storage](images/backup-storage-10.PNG){.thumbnail}

The Backup storage will now be deleted after a few minutes.

### Order disk space

Log into your [OVH control panel](https://www.ovh.com/auth/?action=gotomanager){.external}, and go to your server's page. Then select the `Backup storage`{.action} tab and click the `Order disk space`{.action} button.

![Order disk space](images/backup-storage-06-edited.png){.thumbnail}

Select the storage capacity you would like and then click the `Next`{.action} button.

![Order disk space](images/backup-storage-11-edited.png){.thumbnail}

Tick the box to confirm that you have read an understood the terms and conditions and then click the `Confirm`{.action} button.

![Order disk space](images/backup-storage-12-edited.png){.thumbnail}

An order will now be created. Once your payment has been processed, you will receive your additional storage space.

### Using the backup storage

> [!primary]
>
> The Backup storage service does not automatically back up your data, it only provides the space and the access protocols. It is your responsibility to implement an adequate backup strategy using the tools of your choice.
>

#### FTP/FTPS

##### ncftp (for Linux)

To save individual files to your backup storage, you can use the following command:

```sh
# ncftpput -u FtpUserName -p FtpPassword HostName /FolderLocation /File
```

**Please note that this command does not support the FTPS protocol. If you need secure transfer you should use lftp or curl instead.**

The code example above contains variables, which you will need to substitute with your own values.

* **FtpUsername** : Your FTP username
* **FtpPassword**: Your FTP password
* **HostName**: The host name of your backup storage
* **FolderLocation**: The path to the target folder where you want to save the file
* **File**: The name of the file you want to save

Backing up a folder is done by creating a folder archive, and then uploading it all with one command:

```sh
# tar czf - /FolderName | ncftpput -u FtpUserName -p FtpPassword -c HostName ArchiveName.tar.gz
```

The code example above contains variables, which you will need to substitute with your own values.

* **FolderName**: The path to the folder you want to back up
* **FtpUsername**: Your FTP username
* **FtpPassword**: Your FTP password
* **HostName**: The host name of your backup storage
* **ArchiveName**: The name of the folder you want to back up

To download an archive file from your backup storage, you can use the following command:

```sh
# ncftpget -v -u FtpUsername -p FtpPassword HostName /LocalFolder /File
```

The code example above contains variables, which you will need to substitute with your own values.

* **FtpUsername**: Your FTP username
* **FtpPassword**: Your FTP password
* **HostName**: The host name of your backup storage
* **LocalFolder**: The path to the local folder where you want to save the file
* **File**: The path to the file you want to download

##### Curl (for Linux)

> [!primary]
>
> To use FTPS you must change the hostname of the backup storage. For example, if the name of your backup storage is ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net, you need to change it to ftpback-rbxX-YYY.mybackup.ovh.net. You also need to add the -ssl flag to the commands below.
>

To save individual files to your backup storage, you can use the following command:

```sh
# curl -aT File ftp://FtpUsername:FtpPassword@HostName/FolderLocation
```

The code example above contains variables, which you will need to substitute with your own values.

* **File**: The name of the file you want to save
* **FtpUsername**: Your FTP username
* **FtpPassword**: Your FTP password
* **HostName**: The host name of your backup storage
* **FolderLocation**: The path to the target folder where you want to save the file

Backing up a folder is done by creating a folder archive, and then uploading it all with one command:

```sh
# tar czf - /FolderName | curl ftp://FtpUsername:FtpPassword@HostName/FolderLocation/ArchiveName-$(date +%Y%m%d%H%M).tar.gz -T -
```

The code example above contains variables, which you will need to substitute with your own values.

* **FolderName**: The path to the folder you want to back up
* **FtpUsername**: Your FTP username
* **FtpPassword**: Your FTP password
* **HostName**: The host name of your backup storage
* **FolderLocation**: The path to the target folder where you want to save the folder
* **ArchiveName**: The name of the folder you want to back up

To download an archive file from your backup storage, you can use the following commands:

```sh
# cd /LocalFolder
# curl -u FtpUsername:FtpPassword ftp://HostName/File 
```

The code example above contains variables, which you will need to substitute with your own values.

* **FtpUsername**: Your FTP username
* **FtpPassword**: Your FTP password
* **HostName**: The host name of your backup storage
* **LocalFolder**: The name of the local folder where you want to save the file
* **File**: The path to the file you want to download

##### lftp (for Linux)

> [!primary]
>
> lftp uses FTP+SSL/TLS by default. So you must change the host name of the backup storage. For example, if the name of your backup storage is ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net, you need to change it to ftpback-rbxX-YYY.mybackup.ovh.net.
>

To save individual files to your backup storage, you can use the following command:

```sh
# lftp ftp://FtpUsername:FtpPassword@HostName:21 -e "cd FolderLocation; put File; quit"
```

The code example above contains variables, which you will need to substitute with your own values.

* **File**: The name of the file you want to save
* **FtpUsername**: Your FTP username
* **FtpPassword**: Your FTP password
* **HostName**: The host name of your backup storage
* **FolderLocation**: The path to the target folder where you want to save the file

Backing up a folder is done by creating a folder archive, and then uploading it all with one command:

```sh
# tar czf - /FolderName | ftp://FtpUsername:FtpPassword@HostName:21 -e "cd FolderLocation; put /dev/stdin -o ArchiveName-$(date +%Y%m%d%H%M).tar.gz;quit"
```

The code example above contains variables, which you will need to substitute with your own values.

* **FolderName**: The path to the folder you want to back up
* **FtpUsername**: Your FTP username
* **FtpPassword**: Your FTP password
* **HostName**: The host name of your backup storage
* **FolderLocation**: The path to the target folder where you want to save the folder
* **ArchiveName**: The name of the folder you want to back up

To download an archive file from your backup storage, you can use the following commands:

```sh
# cd /LocalFolder
# lftp ftp://FtpUsername:FtpPassword@HostName:21 -e "get /File; quit"
```

The code example above contains variables, which you will need to substitute with your own values.

* **FtpUsername**: Your FTP username
* **FtpPassword**: Your FTP password
* **HostName**: The host name of your backup storage
* **LocalFolder**: The name of the local folder where you want to save the file
* **File**: The path to the file you want to download

##### Filezilla (for Windows)

After installing FileZilla on your server, you can configure it to connect to your backup storage using the FTP credentials that were emailed to you when you activated the Backup storage. To connect successfully, you will need the host name and password of your Backup storage.

#### NFS

First make sure that you have authorised your IP blocks to access the storage and use the NFS protocol. Depending on your Linux operating system, you might have to install the **NFS** client and start the NFS/portmap service.

Once you have the NFS client installed and portmap running, you can mount the NFS share like a normal partition as shown below:

```
# mount -t nfs HostName:/export/ftpbackup/ServiceName /FolderMount
```

The code example above contains variables, which you will need to substitute with your own values.

* **HostName**: The host name of your backup storage
* **ServiceName**: The name of your server (e.g. ns0000000.ip-123-123-123.net)
* **FolderMount**: The folder where you want to mount the NFS share

Once the share is mounted, you can use commands like **cp** and rsync like on a normal directory.

#### CIFS

##### Windows

Log on to your server, open the command prompt, and type the following command:

```sh
net use z: \\HostName\ServiceName
```

The code example above contains variables, which you will need to substitute with your own values.

* **HostName**: The host name of your backup storage
* **ServiceName**: The name of your server (e.g. ns0000000.ip-123-123-123.net)

##### Linux

Establish an SSH connection to your server, and type the following command:

```sh
# mount -t cifs -o sec=ntlm,uid=root,gid=100,dir_mode=0700,username=root,password= //HostName/ServiceName /mnt/FolderMount
```

The code example above contains variables, which you will need to substitute with your own values.

* **HostName**: The host name of your backup storage
* **ServiceName**: The name of your server (e.g. ns0000000.ip-123-123-123.net)
* **FolderMount**: The folder where you want to mount the share (it must already exist)

## Go further

Join our community of users on <https://community.ovh.com/en/>.
