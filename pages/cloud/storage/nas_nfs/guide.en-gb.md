---
title: 'Mount your NAS via NFS share'
slug: nas-nfs
excerpt: 'Find out how to mount a NAS over an NFS share here.'
section: NAS
---

## Requirements

This guide allows you to mount NFS on the most common distributions. To mount an NFS share, you must have:

- An OVH NAS.
- A machine on the OVH network (Dedicated Server, VPS, Instance...).
- An NFS-compatible distribution.


### Linux

Compatibility: Debian 6/7/8 & Ubuntu 12/13/14

To mount an NFS share on Linux, you must:

- Connect to the server in SSH.
- Install the "nfs-client" package via command:


```sh
nfs-client install capability
```

Then use the following mount command:


```sh
mount -t nfs -o _netdev,mountproto=tcp IP_NAS:/CHEMIN_NFS /DOSSIER_MONTAGE
```

|Argument|Description|
|---|---|
|IP_NAS|Corresponds to NAS name or IP|
|/NFS_PATH|Path to NFS server for sharing (Ex: "nas-000YY/partition")|
|MOUNTING_FOLDER|Corresponds to the folder where you will mount your NFS share on your server|


> [!primary]
>
> In order to automate the NAS mount when your distribution starts up, add the following line to the /etc/fstab file:
> 
> ```
> IP_NAS:/CHEMIN_NFS /DOSSIER_MONTAGE nfs rw,_netdev,mountproto=tcp 0 0
> ```
>

*For example:*

```sh
mount -t nfs -o _netdev,mountproto=tcp 10.16.XXX.YYY:zpool-999888/PartitionName /media/NasHA -v
```

|Argument|Description|
|---|---|
|IP_NAS|10.16.XXX.YYY|
|/NFS_PATH|zpool-999888/PartitionName|
|MOUNTING_FOLDER|/media/NasHA -v|

### CentOS 6

Compatibility: centos

To mount an NFS share under CentOS 6, you must:

- Connect to the server in SSH.
- Install the "nfs-utils" and "rpcbind" packages via the command:


```sh
yum install nfs-utils rpcbind
```

Then restart the `rpcbind` service with the following command:


```sh
/etc/init.d/rpcbind start
```

Then use the following mount command:

```sh
mount -t nfs -o _netdev,mountproto=tcp IP_NAS:/CHEMIN_NFS /DOSSIER_MONTAGE
```

|Argument|Description|
|---|---|
|IP_NAS|Corresponds to NAS name or IP|
|/NFS_PATH|Path to NFS server for sharing (Ex: "nas-000YY/partition")|
|MOUNTING_FOLDER|Corresponds to the folder where you will mount your NFS share on your server|


> [!primary]
>
> In order to automate the NAS mount when your distribution starts up, add the following line to the /etc/fstab file:
> 
> ```
> IP_NAS:/CHEMIN_NFS /DOSSIER_MONTAGE nfs rw,_netdev,mountproto=tcp 0 0
> ```
>

### Gentoo

To mount an NFS share on Gentoo, you need to:

- Connect to the server in SSH.
- Install the "nfs-utils" package via command:


```sh
emerge nfs-utils
```

Then start the NFS service using the command:

```sh
/etc/init.d/nfs start
```

Finally, use the following mount command:


```sh
mount -t nfs IP_NAS:/CHEMIN_NFS /FOLDER_MOUNTING
```

|Argument|Description|
|---|---|
|IP_NAS|Corresponds to NAS name or IP|
|/NFS_PATH|Path to NFS server for sharing (Ex: "nas-000YY/partition")|
|MOUNTING_FOLDER|Corresponds to the folder where you will mount your NFS share on your server|


> [!primary]
>
> In order to automate the NAS mount when your distribution starts up, add the following line to the /etc/fstab file:
> 
> ```
> IP_NAS:/CHEMIN_NFS /DOSSIER_MONTAGE nfs rw 0 0
> ```
> 
> Then put the "nfsmount" service to the server starting up, with the following command. 
> 
> ```
> rc-update add nfsmount default
> ```
>

### Proxmox v3.2

Compatibility: Proxmox v3.3

To mount an NFS share under Proxmox, you must:

- Connect to the Proxmox administration interface.
- Switch to the “Import” tab.


Configuration

- Click ` Add`{.action} and select `NFS`{.action}.


Configuration


|Argument|Description|
|---|---|
|ID|Name you want for your NFS share|
|Server|Corresponds to NAS name|
|Export|Path to NFS server for sharing|
|Content|Content type for this NFS share (possible value: Images, ISO, Template, Backups, Containers)|


> [!primary]
>
> In order to automate the mounting of the NAS when your distribution starts up, add the following line to the /etc/fstab file:
> 
> ```
> IP_NAS:/CHEMIN_NFS /DOSSIER_MONTAGE nfs rw 0 0
> ```
>

### ESXI 5.5:

To mount an NFS share under ESXI, you must have:

- Server access via vSphere.
- Access to the OVH Control Panel, to click `Inventory`{.action}: 


Configuration

- Navigate to the `Configuration`{.action} tab:


Configuration

- Then click `Storage`{.action} in the left-hand menu:


Configuration

You will then have access to a form to complete:


Configuration

|Argument|Description|
|---|---|
|server:|Corresponds to NAS name or IP|
|Folder|Path to NFS server for sharing (Ex: "/nas-000YY/partition")|
|Datastore|This is the name you want to give to the datastore|



## Additional information


> [!alert]
>
> The NFS user is `root`, rights changes with this user can generate conflicts with existing CIFS/SMB rights.
> 