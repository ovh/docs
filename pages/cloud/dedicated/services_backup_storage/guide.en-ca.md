---
title: Using backup storage on a dedicated server
slug: using-backup-storage
excerpt: 'Find out how to enable and access your additional storage space'
section: Storage
---

**Last updated 15th March 2021**

## Objective

OVHcloud dedicated servers include additional backup space to store important data and configuration files. This space is scalable, secure and independent of the main server.

**This guide explains how to enable and use your storage space.**

> [!primary]
> We recommend to consult the [product page](https://www.ovhcloud.com/en-ca/bare-metal/backup-storage/) as well for further details about the service.
>
> Note that this guide is not applicable for OVHcloud US services.
>

## Requirements

- A [dedicated server](https://www.ovhcloud.com/en-ca/bare-metal/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca)

> [!warning]
> This feature might be unavailable or limited on servers of the [**Eco** product line](https://eco.ovhcloud.com/en-ca/about/).
>
> Please visit our [comparison page](https://eco.ovhcloud.com/en-ca/compare/) for more information.

## Instructions

### Activating the backup storage

Log into your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca). Switch to the `Bare Metal Cloud`{.action} section and select your server from **Dedicated Servers**. On the `Backup storage`{.action} tab, click the `Enable backup storage`{.action} button.

![Activate Backup storage](images/backup-storage01.png){.thumbnail}

Click the `Confirm`{.action} button in the popup window.

![Activate Backup storage](images/backup-storage02.png){.thumbnail}

Your backup storage will be configured within a few minutes. A confirmation email will be sent as soon as it is ready.

### Managing access control

Access to the backup storage is restricted by IP address according to an access control list (ACL). Only IPs linked to your OVHcloud customer account will be able to access the storage, once they are whitelisted in the ACL. The access protocols (FTP, NFS and CIFS) are not authorised by default but have to be selected when adding IP addresses.

#### Adding a backup access

Log into your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca). Switch to the `Bare Metal Cloud`{.action} section and select your server from **Dedicated Servers**. On the `Backup storage`{.action} tab, click on the button `Add an access`{.action}.

![Add backup access](images/backup-storage03.png){.thumbnail}

You will then need to select the IP block that you want to authorise. After selecting the IP block, select the protocol(s) for the access, and click the `Next`{.action} button.

> [!primary]
>
> Only IP blocks in your OVHcloud customer account can be added to the ACL from your Control Panel.
>

![Add backup access](images/backup-storage04.png){.thumbnail}

Confirm by clicking on `Finish`{.action}. You will now be able to access your server's backup storage from the IP block you have selected.

#### Modifying or deleting a backup access

Once the service is enabled, your ACL table will be displayed in the `Backup storage`{.action} tab. Click on `...`{.action} in the row of an IP block to open the access menu.

![Add backup access](images/backup-storage05.png){.thumbnail}

To change the protocols for an authorised IP block, click on `Modify the access`{.action} and select/deselect protocols in the popup window. Save the changes by clicking on `Confirm`{.action}.

To revoke authorisation for an IP block, click on `Delete the access`{.action} and then on `Confirm`{.action} in the popup window.

#### Accessing the backup storage from an IP address outside of your account <a name="accessbackup"></a>

Access to the storage space of your dedicated server is restricted to IP addresses linked to your OVHcloud customer acccount.

In order to add other IP addresses from which to access, you can use the OVHcloud API. This will allow you to retrieve your backup data from a different service.

> [!warning]
> Only OVHcloud IP addresses can be authorised.
>

Log in to [api.ovh.com](https://ca.api.ovh.com/) and use the following call:

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/features/backupFTP/access
>

Fill in the fields as follows:

- `serviceName`: The service name of your server
- `cifs`: check if necessary
- `ftp`: check if necessary
- `ipBlock`: enter the IP address that will have access in the form `1.2.3.4/32`
- `nfs`: check if necessary

![apiacladdress](images/aclapi01.png){.thumbnail}

To verify that your IP address is authorised, use the following call:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/features/backupFTP/access
>

![apiacladdress](images/aclapi02.png){.thumbnail}

### Resetting your password

Log into your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca). Switch to the `Bare Metal Cloud`{.action} section and select your server from **Dedicated Servers**. On the `Backup storage`{.action} tab, click on the button `Forgotten your password?`{.action}.

If you click on `Confirm`{.action} in the popup window, a password recovery email will be sent to the email address of your admin contact. Follow the instructions in the email to reset your password.

### Deleting the backup storage

Log into your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca). Switch to the `Bare Metal Cloud`{.action} section and select your server from **Dedicated Servers**. On the `Backup storage`{.action} tab, click on the button `Delete backup storage`{.action}.

If you click on `Confirm`{.action} in the popup window, the backup storage will be disabled within a few minutes. All data on the storage space will be deleted.

### Ordering more disk space

Log into your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca). Switch to the `Bare Metal Cloud`{.action} section and select your server from **Dedicated Servers**. On the `Backup storage`{.action} tab, click on the button `Order disk space`{.action}.

![Add backup access](images/backup-storage06.png){.thumbnail}

Select the additional storage capacity you would like to order and then click on the `Next`{.action} button.

Take note of the pricing and contract information in the next window and click on `Confirm`{.action}.
An order will be created and once your payment has been processed, you will be notified about the successful expansion of the space.

### Using the backup storage

> [!primary]
>
> The backup storage service does not automatically back up your data, it only provides the space and the access protocols. It is your responsibility to implement an adequate backup strategy using the tools of your choice.
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
