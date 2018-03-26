---
title: Backup storage
slug: services-backup-storage
excerpt: This guide explains how to enable the Backup Storage functionality and how to use.
section: Storage
---


## Requirements
- Having an OVH Server.
- Having access to the ManagerV6.

OVH provide free backup storage for all of its dedicated servers.

The OVH backup storage is accessible via these popular protocols:

- FTPS
- FTP
- NFS
- CIFS

The access is restricted by IP using ACL. You can create a ACL for the IPs that are on your server via the manager or the API. By default, all IPs in your account have FTP/FTPS access to the backup storage. The other protocols are not authorized by default. To authorize them you have to create a ACL.


## Procedure

### Step 1 &#58; Activation
To activate the backup storage;

1. Log into your [Manager](https://www.ovh.com/manager/){.external}
1. Select your server in the **Infrastructures** tab
1. Select the **Backup storage** tab
1. Click the **Activate the Backup Storage** button

![Activating Backup Storage](images/services-backup-storage-activate.png){.thumbnail}

1. Click Confirm

![Confirm Backup Storage activation](images/services-backup-storage-activate-confirm.png){.thumbnail}

1. You should see a confirmation message and receive an activation email

![Activation completed](images/services-backup-storage-activate-done.png){.thumbnail}


### Step 2 &#58; Usage summary
1. Log into your Manager
1. Select your server in the **Infrastructures** tab
1. Select the **Backup storage** tab

![Backup storage usage summary](images/services-backup-storage-usage.png){.thumbnail}

There you will see the amount of space used versus the amount of space available in your backup storage.


### Step 3 &#58; Reset password
Backup storage passwords are generated automatically, for security reasons you cannot specify your own password.

If you lost your password, you can generate a new one using this procedure:

1. Go in your Manager
1. Select your server in the **Infrastructures** tab
1. Select the **Backup storage** tab
1. Click the **Forgotten password?** button

![Reset password](images/services-backup-storage-reset-password.png){.thumbnail}

1. Click the Confirm button

![Reset password confirmation](images/services-backup-storage-reset-password-confirm.png){.thumbnail}

1. You should now see this message and receive an email with the new password

![Reset password completed](images/services-backup-storage-reset-password-done.png){.thumbnail}


## ACL Management
To authorize IPs on your backup storage you need to create an ACL and allow a connection protocol for that IP.

The ACL management can be done at two places, either with the Manager or with the API.


### Step 1 &#58; Adding a new access
To authorize an IP to a backup storage using the Manager:

1. Log into your [Manager](https://www.ovh.com/manager/){.external}
1. Select your server in the **Infrastructures** tab
1. Select the **Backup storage** tab
1. If the IP is not in the list click the **Add an access** button

![Add access](images/services-backup-storage-access-add.png){.thumbnail}

1. Select the IP or block you want to autorize

![Add access](images/services-backup-storage-access-select.png){.thumbnail}

1. Confirm your selection

![Add access](images/services-backup-storage-access-confirm.png){.thumbnail}

1. You should see a confirmation message

![Add access](images/services-backup-storage-access-done.png){.thumbnail}


### Step 2 &#58; Modifying an access
To modify an existing access:

1. Click on the "cog" in the last column and then on "**Modify the access**".

![Modify access](images/services-backup-storage-access-modify.png){.thumbnail}

1. Select the protocols you want to authorize for this IP or block:

![Select protocols to add or remove for an IP](images/services-backup-storage-access-modify-select.png){.thumbnail}

1. You should see a confirmation message;

![Modify access](images/services-backup-storage-access-modify-done.png){.thumbnail}


### Step 3 &#58; Deleting an access
To delete an access:

1. Click on the "cog" in the last column and then on "**Delete the access**".

![Delete an access](images/services-backup-storage-access-modify.png){.thumbnail}

1. Confirm the deletion :

![Delete confirmation](images/services-backup-storage-delete-confirm.png){.thumbnail}

1. You should see a confirmation message;

![Access deleted](images/services-backup-storage-delete-done.png){.thumbnail}


### Step 4 &#58; Deleting a backup
1. Log into your [Manager](https://www.ovh.com/manager/){.external}
1. Select your server in the **Infrastructures** tab
1. Select the **Backup storage** tab
1. Click the **Delete Backup Storage** button

![Delete backup storage](images/services-backup-storage-delete-backup.png){.thumbnail}



> [!critical]
>
> This operation is non-reversible, all data is permanently destroyed!
> 


## Using the backup storage
The backup storage service does not automatically backup your data, it only provide the space and the access protocols. It is your responsibility to implement an adequate backup strategy using the tools of your choice.


### Step 1 &#58; FTP/FTPS

#### ncftp (For Linux)


> [!primary]
>
> This command does not support the FTPS protocole. If you need secure
> transfer you should use lftp or curl instead.
> 

To save individual files you can use the following command:

<div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="prompt">ncftpput -uFTPUSER -pFTPPASS FTPBACKUPHOST /REMOTE/FOLDER /FILE/TO/SAVE</span> </pre></div>
Replace the following variables with the correct information:

The FTP username

The FTP password

The hostname of the backup server

The local file to upload

The remote target directory where to save the file

To backup a folder, simply create an archive before uploading it:

<div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="prompt">tar czf - /DIRTOSAVE | ncftpput -uFTPUSER -pFTPPASS -c FTPBACKUPHOST DIRNAME.tar.gz</span> </pre></div>
The name of the directory you want to put in the archive

The FTP username

The FTP password

The hostname of the backup server

The name of the directory you want to upload

To download an archive file from your backup storage, you can use the following command:

<div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="prompt">ncftpget -v -u FTPPASS -p FTPPASS FTPBACKUPHOST /LOCALDIR /FILEBACKUP</span> </pre></div>
The FTP username

The FTP password

The hostname of the backup server

The local target directory where to save the file

The path to the file you want to download


#### Curl (For Linux)


> [!primary]
>
> To use FTPS you must change the hostname of the backup storage.
> For example, if the name of your backup storage is ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net,
> you need to change it for ftpback-rbxX-YYY.mybackup.ovh.net.
> You also need to add the -ssl flag to the commands below.
> 

To backup individual files, use the following command:

<div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="prompt">curl -aT FILETOSAVE ftp://FTPUSER:FTPPASS@FTPBACKUPHOST/REMOTEDIR/</span> </pre></div>
The name of the file you want to backup

The FTP username

The FTP password

The hostname of the backup server

The remote directory where the file should be uploaded

To backup a directory:

<div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="prompt">tar czf - /DIRTOSAVE | curl ftp://FTPUSER:FTPPASS@FTPBACKUPHOST/REMOTEDIR/DIRNAME-$(date +%Y%m%d%H%M).tar.gz -T -</span> </pre></div>
Path of the directory to backup

The FTP username

The FTP password

The hostname of the backup server

The remote directory where the file should be uploaded

The name of the directory to backup

To download an archive from you backup storage you can use the following command:

<div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="prompt">cd /LOCALDIR</span> <span class="prompt">curl -u FTPUSER:FTPPASS ftp://FTPBACKUPHOST/FILEBACKUP</span> </pre></div>
The FTP username

The FTP password

The hostname of the backup server

The local directory where to save the file

Full path of the archive to download


#### lftp (For Linux)


> [!primary]
>
> lftp use FTP+SSL/TLS by default. So you must change the hostname of the backup storage.
> For example, if the name of your backup storage is ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net,
> you need to change it for ftpback-rbxX-YYY.mybackup.ovh.net.
> 

To backup individual file use the following command:

<div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="prompt">lftp ftp://username:password@ftpback-rbxX-YYY.mybackup.ovh.net:21 -e "cd REMOTEDIR; put FILETOSAVE; quit"</span> </pre></div>
Replace by FTP or FTPS

The FTP username

The FTP password

The hostname of the backup server

The remote directory where the file should be uploaded

Name of the file to backup

To backup a directory, use the following command:

<div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="prompt">tar czf - /DIRTOSAVE | ftp://username:password@ftpback-rbxX-YYY.mybackup.ovh.net:21 -e "cd REMOTEDIR; put /dev/stdin -o DIRNAME-$(date +%Y%m%d%H%M).tar.gz;quit"</span> </pre></div>
Replace by FTP or FTPS

Full path of the directory to backup

The FTP username

The FTP password

The hostname of the backup server

The remote directory where the file should be uploaded

The name of the directory to backup

To retrieve a file from the backup storage, use the following command:

<div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="prompt">cd /LOCALDIR</span> <span class="prompt">lftp ftp://username:password@ftpback-rbxX-YYY.mybackup.ovh.net:21 -e "get /FILEBACKUP; quit"</span> </pre></div>
Replace by FTP or FTPS

The FTP username

The FTP password

The hostname of the backup server

The local directory where to save the file

Full path of the archive to download


#### Filezilla (For Windows)
1. Connect to your server using **Remote Desktop**.
1. Open the Internet browser and download FileZilla. (When asked, it is not necessary to install complementary software)
1. Launch FileZilla and use the FTP credentials you received by email
The host of the backup storage

The username of your backup storage

The password of your backup storage

1. Click **Quickconnect**


> [!primary]
>
> The left pane shows the local content of your server, the right pane
> shows the content of your backup storage. You can drag and drop files from
> one pane to another to upload or download file from your backup storage.
> 


### Step 2 &#58; NFS


> [!primary]
>
> The NFS protocol is for use with Linux distributions. For Windows you
> should use CIFS or FTP.
> 

First make sure you added the necessary ACLs to allow **NFS** protocol with the IP you want to use. If you did not, please refer to the [ACL Management](#acl-management){.internal} section.

Depending on your distribution, you might have to install the NFS client and start the NFS/portmap services.

Once you have the NFS client installed and portmap running, you can mount the NFS share like a normal partition:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">mount -t nfs FTPBACKUPHOST:/export/ftpbackup/SERVICENAME /DOSSIERMOUNT</span> </pre></div>
The host of the backup storage

The name of your server (ex: ns0000000.ip-123-123-123.net)

The folder where you want to mount the NFS share

Once the share is mounted, you can use commands like cp and rsync like on a normal directory.


### Step 3 &#58; CIFS
First make sure you added the necessary ACLs to allow **CIFS** protocol with the IP you want to use. If you did not, please refer to the [ACL Management](#acl-management){.internal} section.


#### For Windows
Open the command prompt and type the following command:

<div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="prompt">net use z: \\FTPBACKUPHOST\SERVICENAME</span> </pre></div>
The host of the backup storage

The name of your server (ex: ns0000000.ip-123-123-123.net)

Once completed, you should now have a new **Z:** drive that you can use like a normal mounted share.


#### For Linux
Use SSH to connect to your server and type the following command:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">mount -t cifs -o sec=ntlm,uid=root,gid=100,dir_mode=0700,username=root,password= //FTPBACKUPHOST/SERVICENAME /mnt/DIRNAME</span> </pre></div>
The host of the backup storage

The name of your server (ex: ns0000000.ip-123-123-123.net)

Directory name where to mount the share (it **must** exists!)