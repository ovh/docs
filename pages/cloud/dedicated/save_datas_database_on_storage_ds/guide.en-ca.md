---
title: 'Backing up data and databases on a Storage Server'
slug: data-database-backup-on-storage-server
excerpt: 'Find out how to secure your data in five steps'
section: Tutorial
---

## Introduction

Your data is sensitive. Any loss or alteration of it could quickly result in serious issues for your business. Since there is no such thing as a risk-free approach, we strongly recommend creating backups at least daily, and preferably storing them on a server or storage solution that is separate to your production infrastructures.

OVH offers a range of [Dedicated Servers](https://www.ovh.co.uk/dedicated_servers/storage/){.external} that are adapted to fit your storage operations, and equipped with at least four hard drives. You can use these resources to back up an infrastructure hosted with OVH or with another service provider, via the public network.

In this guide, we will show you how to configure an OVH Storage Server to suit your needs, generate a tree-view for receiving backups, then automate backups for two remote servers via SCP protocol.


## Requirements

- an [OVH Storage Server](https://www.ovh.co.uk/dedicated_servers/storage/){.external}
- a production infrastructure ([VPS](https://www.ovh.co.uk/vps/){.external}, [Dedicated Servers](https://www.ovh.co.uk/dedicated_servers/){.external}, [Public Cloud](https://www.ovh.co.uk/public-cloud/instances/){.external}, etc.)
- an SSH connection between the Storage Servers and production infrastructure
- a private network between your servers ([OVH vRack](https://www.ovh.co.uk/solutions/vrack/){.external}) is recommended
- To follow this guide you need knowledge of: Linux administration, logging in via SSH, connecting to/backing up databases, installing operating systems (here we’re using Debian 9.4).


## Instructions

### Step 1: Choose the right RAID mode.

OVH offers a range of [Storage Servers](https://www.ovh.co.uk/dedicated_servers/storage/){.external} with hardware configurations that contain several hard disks. In our example, we are using a software RAID (or softRAID) with four disks, which each have 6 TB capacity.

With OVH, you can choose between RAID 0, 1, 5, 6 and 10 as configurations for storing your data. Each of these configurations have pros and cons in terms of performance and resilience. So with four disks, we can store data efficiently with RAID 5, 6 or 10 configuration (RAID 0 and 1 are not relevant here).

Below are some explanations on these RAID types.

#### RAID 5

This configuration distributes your data across a minimum of three hard disks. It uses a fourth disk to rebuild the others in case one of the disks fails. This fourth disk stores parity data. This way, you have fault tolerance on one of the disks. Read performance is improved, but not write performance (because of the parity bit).

In our case, the volume capacity is 18 TB.

#### RAID 6

This is an improved version of RAID 5, with a minimum of four hard disks required. Parity data is written onto two disks rather than one, which ensures even higher redundancy (fault tolerance on two disks). Both read and write performance are also improved.

In our case, the volume capacity is 12 TB.

#### RAID 10

This configuration is a combination of two processes. The first consists of dividing up your data and storing it on two disks, which increases performance as the disks can be sent requests simultaneously. The second disk duplicates data in a ‘mirror’ mode across two disks. You will then get fault tolerance across two disks on a single cluster.

In our case, the volume capacity is 12 TB.

There is no such thing as a ‘best’ RAID configuration, as they all suit different requirements. In our example, we want to have maximum fault tolerance and conserve high read/write performance. To achieve this, we’ll use a RAID 6 setup.


### Step 2: Set up and configure your server.

Go to the [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}, and set up your server. As a reminder, we’re using Debian 9.4 in this guide. For further information, please refer to our guide on [Getting started with a Dedicated Server](https://docs.ovh.com/gb/en/dedicated/getting-started-dedicated-server/){.external}.

Once you have selected the operating system you want to install, tick `Customise the partition configuration`{.action}.

![Customise the partition configuration](images/partition_customization.png){.thumbnail}

At this stage, you can modify the RAID type from your `/home` (1), and expand the partition (2) if you wish to do so.

![Modifying /home](images/partition_customization_menu.png){.thumbnail}

> [!primary]
> 
> The RAID level for `/boot` cannot be modified.
> 

### Step 3: Create target directories.

To ensure that we organise our backups clearly, we will create target directories. Log in to your server via SSH, then view your partitions:

```sh
df -h

Filesystem      Size    Used Avail Use% Mounted on
udev            7.8G       0  7.8G   0% /dev
tmpfs           1.6G     51M  1.6G   4% /run
/dev/md3         20G    740M   18G   4% /
tmpfs           7.9G       0  7.9G   0% /dev/shm
tmpfs           5,0M       0  5,0M   0% /run/lock
tmpfs           7.9G       0  7.9G   0% /sys/fs/cgroup
/dev/md2        487M     32M  426M   7% /boot
/dev/sda1       510M    152K  510M   1% /boot/efi
/dev/md4         11T     31M   11T   1% /home
```

Create your file tree-view using the `mkdir` command. In our example, the server will receive backups from two web servers that are in production. So we will create two directories: *server1* and *server2*. Each directory will contain a *dump* sub-folder for SQL backups, and a *data* sub-folder for web data.

Using the `tree` command, you can get a tree-view of a directory. For example, the command will return you a result like this:

```sh
tree
.
└── backups
    ├── server1
    │   ├── data
    │   └── dump
    └── server2
        ├── data
        └── dump

7 directories, 0 files
```

### Step 4: Transfer the data from your remote servers to your storage server.

Your Storage Server is now ready to store backups.

> [!primary]
> 
> If your production infrastructures are hosted at OVH and include our vRack private network solution, we recommend using it for your backups. This way, your backup data will not pass through the public network (internet).
>

The basis of this step is to log in to your production servers via SSH, and these servers will connect to your storage servers via SCP protocol. For this to work, all of the resources need to be able to connect to one another via SSH.

To start with, we will create a MySQL database backup, commonly named *dump*. For more advanced usage, please refer to the official documentation for your database.

```sh
mysql --host=localhost --user=myname --password=password mydb
mysqldump --all-databases > dump.sql
```

Now that you have configured your SSH service, you can go to your production servers and use the `scp` command.

```sh
scp your_dump_file user@IP_Storage:/home/backups/server1/dump

The authenticity of host 'IP_Storage (IP_Storage)' can't be established.
ECDSA key fingerprint is SHA256:fmmeu5feHlnaUC56+2DB73sgNd4aMPVkS7oEtcyO2o8.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'IP_Storage' (ECDSA) to the list of known hosts.

user@IP_Storage's password: 
```

> [!primary]
> 
> If you have modified your storage server’s SSH port, you will need to add the `-P` argument.
>

Do the same for your files. With the `scp` command, you can also back up full folders.

```sh
scp -r directory_to_back_up user@IP_Storage:/home/backups/server1/data/2018_01_01
```

You can use other, more efficient methods such as *rsync* for free, and they have advanced features, such as automatic resending if the first attempt fails.


### Step 5: Schedule basic daily backups via cron.

The need to log in daily to each of the servers that need to be backed up will quickly become a hassle. There are basic ways to automate a job, and the most well-known method is via the Unix program, *cron*. You can use it to schedule commands to be run on hourly, daily, monthly or yearly intervals. Unix users have their own lists of scheduled jobs, called *crontab*.

For increased security, we recommend creating an additional Unix user account, and attributing scheduled jobs to it.

To edit this list, run:

```sh
crontab -e
```

Add the following line to automate sending for your SQL dump files, every day of the year at 2:00 a.m.

```sh
0 2 * * * scp your_dump_file user@IP_Storage:/home/backups/server1/dump >/dev/null 2>&1
```

The syntax for a *crontab* is specific. We will not detail it here, but there are several websites you can use to generate it easily, such as [Crontab Generator](https://crontab-generator.org/){.external}.



## Conclusion

You have configured an OVH Storage Server that suits your needs, and automated a basic schedule for backing up the files stored on it. This is an important step to avoid data loss, and secure your business.

As mentioned earlier, there are other free and paid methods you can use to further optimise your backups. If your data is sensitive, we also strongly advise encrypting it, and only transferring it via private networks such as the OVH vRack.