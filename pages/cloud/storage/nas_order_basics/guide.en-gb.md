---
title: Getting started with a HA-NAS solution
slug: nas/get-started
excerpt: Find out how to manage a HA-NAS via the OVHcloud Control Panel
section: NAS
order: 01
---

**Last updated 31/08/2021**

## Objective

The Network Attached Storage (NAS) is a file server connected to a network whose main function is the sotcking of data in a centralized volume for heterogeneous network clients.

## Requirements

- an IP address attached to an OVHcloud service (Hosted Private Cloud, Dedicated Server, VPS, Public Cloud Instance, etc)
- a [HA-NAS solution](https://www.ovh.co.uk/nas/)
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external}

## Instructions

You can manage your HA-NAS via the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external}.

Once you have logged in, click on `Bare Metal Cloud`{.action}, then `NAS and CDN`{.action} in the menu on the left. Click on your service to access the administration menu.

![NAS access](images/nas2021-01.png){.thumbnail}

### Creating a partition

To add a new partition, click `Create a partition`{.action}.

![create a partition](images/nas2021-02.png){.thumbnail}

Simply enter your partition **name**, partition **size**, and authorised **protocol** (NFS or CIFS).

![partition attributes](images/nas2021-03.png){.thumbnail}

### Modifying the size of a partition

To change the size of a partition, click on the `...`{.action} button to the right of the partition concerned, then `Modify size`{.action}.

![change the size of a partition](images/nas2021-04.png){.thumbnail}

Enter the new size, then confirm.

### Change the frequency of snapshots

By default, a snapshot of your NAS content takes place every hour, and is saved on your NAS.

However, you can create up to 3 additional snapshots at different frequencies if you wish, which will also be saved on your NAS.

To do this, click the `...`{.action} button to the right of the partition concerned, then click `Frequency of snapshots`{.action}.

![change snapshot frequency](images/nas2021-05.png){.thumbnail}

Select the new frequency, then confirm.

### Creating an instant snapshot

Apart from the snapshots taken automatically, you can create an instant snapshot of a partition at any time by clicking on the `...`{.action} button to the right of the partition, then on `Custom snapshot`{.action}.

![snapshot](images/nas2021-10.png){.thumbnail}

Name the snapshot and click `Add`{.action}

### Adding an access

In order to access the partition you created earlier, you will need to configure access.

> [!primary]
>
> Only OVHcloud service IP addresses can access your NAS (e.g. a dedicated server, a VPS, a Public Cloud instance, etc.)
>

To authorise an IP to access the NAS, click on the `...`{.action} button to the right of the existing partition, then on `Manage access`{.action}.

![manage access](images/nas2021-06.png){.thumbnail}

Then click `Add an access`{.action}, and select the IP address of your OVHcloud product.
<br>You must also define whether the authorised access for this IP address is read-only or read-write.

![add access](images/nas2021-07.png){.thumbnail}

#### Deleting an access

To remove access to a partition, click on the `...`{.action} button to the right of the IP address concerned, then `Delete`{.action}.

![createaccess](images/nas2021-09.png){.thumbnail}

### ZFS settings

> [!warning]
>
> All the default Z File System settings are optimal. Though we do not recommend changing those settings, this menu does allow you to tune the ZFS that the HA-NAS is using.
>

To change the ZFS settings of a partition, click on the `...`{.action} button to the right of the partition concerned, then `Z File System (ZFS) settings`{.action}.

![zfss](images/nas2021-13.png){.thumbnail}

- Disabling access time update (atime): Disabling atime means the ZFS filesystem will no longer update the access times. It could be referred to the last date and time a specific file had bean read on the filesystem level. Disabling atime can help with frequent read operation such as on static web pages but should not be done for uses such as a database.
- ZFS record size: This property changes the maximum block size on the ZFS filesystem. Please note that ZFS will also use a smaller block size if the file is smaller. For example, a 16KB file will use a 16KB (plus metadata) to not waste storage space. We generally don't recommend to change this option because of this reason.
- Sync: This changes the behaviour of how the ZFS filesystem will take in data to RAM and/or the drives. We do not recommend changing this unless you know what you're doing.

### Deleting a partition

> [!alert]
>
> Deleting a partition deletes all of the data stored on it permanently.
>

To delete a partition, click on the `...`{.action} button to the right of the existing partition, then `Delete`{.action}.

![delete a partition](images/nas2021-08.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/>.
