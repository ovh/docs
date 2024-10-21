---
title: Mounting HA-NAS via NFS share
excerpt: Find out how to connect to your HA-NAS using an NFS share
updated: 2024-09-18
---

## Objective 

The OVHcloud HA-NAS service allows you to manage file storage that can be accessed over a network.

**This guide explains how to access your HA-NAS via NFS on the most common operating systems.**

> [!warning]
>OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. It is therefore your responsibility to ensure  that they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a [specialist service provider](https://partner.ovhcloud.com/en-ca/directory/) or reach out to [our community](https://community.ovh.com/en/) if you face difficulties or doubts concerning the administration, usage or implementation of services on a server.
>

## Requirements

- An [OVHcloud HA-NAS solution](https://www.ovhcloud.com/en-ca/storage-solutions/nas-ha/)
- An OVHcloud service with a public IP address attached to it (Hosted Private Cloud, dedicated server, VPS, Public Cloud instance, etc.)
- An operating system compatible with NFS installed on your server
- [A partition created on the service with the NFS protcol enabled](/pages/storage_and_backup/file_storage/ha_nas/nas_get_started#partition)
- [An ACL entry for the server's IP address](/pages/storage_and_backup/file_storage/ha_nas/nas_get_started#addaccess)
- Administrative access (sudo) to your server via SSH or GUI

## Instructions

The following sections contain configuration examples for the most commonly used distributions / operating systems. The first step is always to log in to your server via SSH or connecting to the GUI of your installed OS. The examples below presume you are logged in as a user with elevated permissions.

You will also need the **internal name** and the **IP address** of your HA-NAS service which you can find in the email received after the installation or in your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca).

The following notations are used as arguments in the command line sections below. Replace them with the appropriate values when entering the commands.

|Argument|Description|
|---|---|
|IP_HA-NAS|The IP address of the HA-NAS (Example: `10.1.1.1`)|
|NFS_PATH|The path to the HA-NAS partition to mount, consisting of the service name and your partitions' name (Example: `zpool-123456/partition01`)|
|MOUNTING_FOLDER|The local folder for your mounted partition|

> [!warning]
>
> The NFS user is `root`; rights changes with this user can generate conflicts with existing CIFS / SMB rights.
>

### Debian based distributions

Install the package `nfs-common`:

```bash
ubuntu@server:~$ sudo apt install nfs-common
```

Then use the following mount command:

```bash
ubuntu@server:~$ sudo mount -t nfs IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

**Example:**

```bash
ubuntu@server:~$ sudo mount -t nfs 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

You can now access your mounted partition at the specified folder.

> [!primary]
>
> In order to automate the mounting process for each time the server boots, add the following line to the file `/etc/fstab`:
>
> `IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER nfs rw 0 0`
>

### CentOS 7 / AlmaLinux / Rocky Linux

Verify that the latest versions of the packages `nfs-utils` and `rpcbind` are installed:

```bash
centos@server:~$ sudo yum install nfs-utils rpcbind
```

If necessary, restart the `rpcbind` service with the following command:

```bash
centos@server:~$ sudo systemctl restart rpcbind
```

To mount your partition, use the following command:

```bash
centos@server:~$ sudo mount -t nfs IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

**Example:**

```bash
centos@server:~$ sudo mount -t nfs 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

You can now access your mounted partition at the specified folder.

> [!primary]
>
> In order to automate the mounting process for each time the server boots, add the following line to the file `/etc/fstab`:
>
> `IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER nfs rw 0 0`
>

### Fedora

Install the package `nfs-utils`:

```bash
fedora@server:~$ sudo dnf -y install nfs-utils
```

Then use the following mount command:

```bash
fedora@server:~$ sudo mount -t nfs IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

**Example:**

```bash
fedora@server:~$ sudo mount -t nfs 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

You can now access your mounted partition at the specified folder.

### Proxmox

In the Proxmox administration interface, click on `Storage`{.action} in the vertical menu.

![proxmox](images/proxmox1.png){.thumbnail}

Click on the button `Add`{.action} and select `NFS`{.action}.

In the popup window, enter the following details.

|Detail|Description|
|---|---|
|ID|An identifier for the share|
|Server|The IP address of the HA-NAS (Example: `10.1.1.1`)|
|Export|The path to the HA-NAS partition (It should be detected by the automatic scan; select it from the list.)|
|Content|Content types for this NFS share (Disk image, ISO image, Container template, VZDump backup file, Container, Snippets)|

![proxmox](images/proxmox2.png){.thumbnail}

Click on `Add`{.action} to mount your partition.

### VMware ESXI

In the VMware ESXI administration interface, click on `Storage`{.action} in the menu on the left.

Then click on the button `New datastore`{.action} to open the assistant.

![ESXI](images/esxi1.png){.thumbnail}

In the new window, select `Mount NFS datastore`{.action} and click on `Next`{.action}.

![ESXI](images/esxi2.png){.thumbnail}

Complete the form with the following details.

|Detail|Description|
|---|---|
|Name|An identifier for the share|
|NFS server|The IP address of the HA-NAS (Example: `10.1.1.1`)|
|NFS share|The path to the HA-NAS partition to mount (Example: `zpool-123456/partition01`)|

![ESXI](images/esxi3.png){.thumbnail}

Once done, click on `Next`{.action}. Click on `Finish`{.action} in the last step.

Your HA-NAS partition is now mounted as a datastore.

![ESXI](images/esxi4.png){.thumbnail}

### NFSv3/NFSv4

The HA-NAS solution supports NFSv3 and NFSv4 protocols. This section explains how they are used.

**What happens if the NFS version is not specified inside the mount command?**

In this case, your NFS client will try to connect directly to the latest version supported by it.<br>
But you can also choose whether you prefer to use NFSv3 or NFSv4:

To force the use of NFSv3, you must use the following command:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=3 IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

- Example:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=3 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

To force the use of NFSv4, you must use the following command:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=4 IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

- Example:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=4 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

You can also use the following command to determine which version is used by the current mount:

```bash
ubuntu@server:~$ nfsstat -m
```

In the return, the parameter `vers=3` or `vers=4` tells you which protocol is used.

Command usage will be similar for CentOS and Fedora.

**Can I enter a specific version for using NFSv4?**

As before, your NFS client will try to connect directly to the highest version supported by it.
If you wish, you can choose between NFSv4.1 and NFSv4.2.

To force the use of NFSv4.1, you must use the following command:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=4.1 IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

- Example:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=4.1 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

To force the use of NFSv4.2, you must use the following command:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=4.2 IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

- Example:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=4.2 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

You can use this command to check the version of your current mount:

```bash
ubuntu@server:~$ nfsstat -m
```

## Tips to optimize the performance and/or stability of your NFS connection

In most cases, the default mount options configured in Linux clients are sufficient to achieve acceptable performance. However, in certain situations, it may be useful to enable or disable certain options in order to have better overall performance.

In addition, in order to achieve optimal performance and avoid various bugs identified in the NFS client, we recommend using the most recent Linux kernel possible.

Below are some elements that may help you refine your NFS client configuration.

### Some mount options to consider

You can see the mount options applied by your Linux client with the `mount -l` command.

Example of this command return:

```bash
XX.XX.XX.XX:/zpool-XXXXXX/DIR on /mnt type nfs4 (rw,relatime,vers=4.2,rsize=131072,wsize=131072,namlen=255,hard,proto=tcp,timeo=600,retrans=2,...)
```

- `rsize=1048576`: Sets the maximum number of bytes of data that the NFS client can receive for each network READ request. This value applies when reading data from a file on an NFS file system. The largest possible size (up to 1048576) guarantees better performance.
- `wsize=1048576`: Sets the maximum number of bytes of data that the NFS client can send for each WRITE request over the network. This value applies when writing data to a file in an NFS file system. The largest possible size (up to 1048576) guarantees better performance.
- `hard`: Sets the recovery behavior of the NFS client after a query times out, so queries are restarted indefinitely until the HA-NAS responds. This option ensures data integrity.
- `timeo=150`: Sets the timeout value that the NFS client uses to wait for a response before retrying an NFS request. Use a value of at least 150, which is equivalent to 15 seconds, to avoid performance issues.
- `retrans=2`: Sets to 2 the number of times the NFS client initiates a query before attempting a recovery action.
- `tcp`: To speed up the mounting of the file system in NFS v3 (not necessary for NFSv4.x which uses only TCP).
- `_netdev`: When this option is present in the /etc/fstab file, it prevents the client OS from attempting to mount the NFS file system until the network is enabled.
- `nofail`: if your client's OS must be able to start regardless of the state of your NFS file system, add the `nofail` option.
- `actimeo=30`: The `actimeo` specification defines all parameters `acregmin`, `acregmax`, `acdirmin` and `acdirmax` at the same value. Using a value less than 30 seconds can alter performance because attribute caches for files and directories expire too quickly.
- `nfsvers`: Avoid using version 4.0 of NFS if possible. Use versions 3, 4.1, or 4.2 instead (whenever possible, use the same version of NFS for all clients connected to the same NFS share).
- `nordirplus`: In some environments with many directories, where only the information from a small subset of directory entries is used by an NFSv3 client, READDIRPLUS may result in slower performance. The nordirplus option allows you to disable this feature

### Force the use of NFSv3 in some cases

- Since NFSv3 is stateless, performance with NFSv3 can be significantly better for some workloads, especially those that make a lot of OPEN, CLOSE, SETATTR, and GETATTR calls.
- If you host a database on your NFS share, please be aware that in the event of network disconnections, the NFS v4.x protocol-specific lock mechanism may cause your application to shut down (see this rfc for more details: <https://datatracker.ietf.org/doc/rfc3530/>).
- If you host VMware virtual machines on your NFS share, please note that the lock mechanism built into the NFSv4.x version is not compatible with the clustering mode implemented on your HA-NAS (cluster in active/passive mode explained on [this page](/links/storage/nas-ha)). It is therefore imperative to use the NFSv3 protocol, otherwise you will lose access to your datastore during an incident affecting the primary server, or during a scheduled maintenance operation.

### Improve read performance by modifying the read_ahead_kb attribute

Some Linux kernels use a default `read_ahead_kb` value of 128 KB. We recommend that you increase this value to 15 MB if you have read performance problems. For more information, see this page: <https://docs.kernel.org/admin-guide/abi-stable.html?highlight=read_ahead_kb#abi-sys-block-disk-queue-read-ahead-kb>.

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-ca/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.
