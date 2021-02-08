---
title: Frequently asked questions about the NAS
slug: faq-nas
excerpt: Have a question about the NAS? Here are the most frequently asked questions
section: NAS
---

**Last updated 2017/12/27**

## The solution

### What does HA mean when I order a NAS from OVH?
The acronym HA (High Availability) means that OVH is committed to providing you with high service availability. This guarantee is applied through SLAs (Service Level Agreements) under which OVH is obligated to compensate its customers, should an incident render the service unavailable.

### In which data center can I rent a NAS-HA?
You can use a NAS-HA in our French data centres (Roubaix, Strasbourg, Gravelines) as well as our Canadian data center located in Beauharnois. The choice of a data centre can be made when ordering. WARNING: once the product has been ordered, the data centre can no longer be changed.

### Can we manage the NAS-HA through a configuration interface?
Yes, that interface is accessible through your [OVH customer control panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca){.external}, under `Cloud`{.action} and `Platforms and services`{.action}.

### Is it possible to increase the total capacity of my NAS?
A NAS-HA’s capacity cannot be increased once the solution has been ordered. To increase your storage, you need to migrate your data to a second NAS with a larger capacity.

### What storage capacities are available?
We offer the following storage capacities:

- 1.2 TB (or 1.1 TB of usable space);
- 2.4 TB (or 2.2 TB of usable space);
- 3.6 TB (or 3.2 TB of usable space);
- 7.2 TB (or 6.4 TB of usable space);
- 13.2 TB (or 10 TB of usable space);
- 19.2 TB (or 17 TB of usable space);
- 26.4 TB (or 24 TB of usable space);

These capacities are all made up of 1.2 TB dedicated disks.

### Does my NAS-HA have dedicated resources?
Your NAS-HA has dedicated disks. Other resources for the machine are shared (RAM, CPU, bandwidth).

**Particular case:** If you choose the 26.4 TB package, all resources for the host server will be dedicated (RAM, CPU, bandwidth).

### How long can I rent a NAS-HA for?
The available rental periods are 1, 3, 6 and 12 months. At the end of your commitment period, your plan will be automatically renewed if you didn’t submit any cancellation request. Such a request can be made throughout the duration of your plan via your [OVH customer control panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca){.external}.

### Do we get the same capacity as displayed when ordering?
As with most storage solutions, the theoretical capacity always differs slightly from the usable capacity, since part of that space must be used for disk operation:

- for a 1.2 TB NAS-HA, 1.1 TB will be used;
- for a 2.4 TB NAS-HA, 2.2 TB will be used;
- for a 3.6 TB NAS-HA, 3.2 TB will be used;
- for a 7.2 TB NAS-HA, 6.4 TB will be used;
- for a 13.2 TB NAS-HA, 10 TB will be used;
- for a 19.2 TB NAS-HA, 17 TB will be used;
- for a 26.4 TB NAS-HA, 24 TB will be used;

Please note that this data is provided for information purposes only and is subject to change.

## <b>Product use:</b>

### When should you use a NAS-HA?
Inside an infrastructure, the NAS-HA is a storage space solution you can use to connect several [dedicated servers](https://www.ovh.com/fr/serveurs_dedies/), [Private Cloud](https://www.ovh.com/fr/dedicated-cloud/) or [Public Cloud instances](https://www.ovh.com/fr/public-cloud/instances/).

Use cases are numerous, but the high availability of the OVH NAS solution is particularly appreciated in the following cases:

- storage of data rarely used: data that doesn’t generate any significant traffic, but still needs to be permanently accessible (legal documentation, user manuals, etc.);
- “Static” data storage: data that’s not meant to be modified regularly. This allows to free some space on a reliable infrastructure to prioritize data that is constantly changing or requires computing power (databases, business applications, etc.):
- Hot Backup solution: the high availability of the NAS service ensures that you can access your data at any time, thereby allowing you to access (or redirect) files that would be unavailable or corrupt elsewhere.

### In which cases do we recommend the NAS-HA instead of Backup Storage?
The NAS-HA and the Backup Storage don’t have the same purpose. We recommend using a NAS to store static data that must remain permanently accessible. Conversely, the Backup Storage is used to backup data that’s not meant to be used regularly.

Technically, the major differences are as follow:

- NAS-HA data is stored on dedicated disks, whereas space for the Backup Storage is shared;
- The NAS-HA is a storage space mounted over another server that uses the NFS or CIFS transfer protocols. The Backup Storage is autonomous and can be reached using FTP.

### Are there any synchronization functions (such as Synology)?
No. The NAS-HA can only be mounted as a file system directly over a distribution. However, setting up a synchronization process can still be done by the administrator.

### Can the NAS-HA be connected to several servers at the same time?
Yes You can make your NAS interact with several OVH services.

### Can we install an operating system on a NAS-HA?
No. You cannot install an OS on any of the NAS-HA solutions.

### Which protocols are compatible with the NAS-HA solution?
The NAS-HA can be mounted on a Windows or Linux server using the CIFS (Samba) or NFS protocols.

### Is the NAS-HA compatible with the FTP protocol?
No. The solution isn’t compatible with the FTP protocol.

### Can the allocated space be partitioned?
Yes. In fact, it is necessary to create one or several partitions depending on your usage. There are no limitations when partitioning.

## Product compatibility

### Is the NAS-HA compatible with other servers outside of OVH?
No. You can only access your NAS-HA from the OVH network.

### Through which service(s) is the NAS-HA accessible?
This service can be accessed using any OVH product where an operating system is installed: dedicated servers (OVH, So you Start, Kimsufi), Dedicated Cloud, Public Cloud and VPS.

### How do you manage access rights for the NAS-HA?
The access control list (ACL) can be configured from your OVH customer control panel. All you need to do is enter the IP address of the service you wish the NAS-HA to access.

### Is the NAS-HA eligible for the vRack solution?
Currently, the NAS-HA cannot be integrated into the vRack private network. However, the NAS-HA and the vRack are not compatible when used through the public IP route of the server connected to the vRack.

## Throughput

### Is the transfer and availability rate guaranteed?

- Transfer: the service has shared bandwidth. Transfer rates cannot be guaranteed by OVH.
- Availability: service availability is guaranteed and subject to a service level agreement Details can be read in our specific terms of use.

## Snapshots

### What are snapshots?
Snapshots are instant images showing the status of your disk and the data stored on it, taken at a precise moment in time. The configuration and management of the snapshots can be done through your customer control panel.

By default, the snapshot function is enabled during the creation of your partition and the frequency is preset to “every hour”.

### What is the frequency of snapshots?

Snapshot frequency can be managed from your customer control panel. You can choose the frequency among the following options: 

- Every hour;
- Every 6 hours;
- Every day;
- Every 2 days;
- Every 3 days;
- Weekly. 


At any time you can also create manual snapshots, keep them with no time limit or delete them. This feature is available in your [OVH customer control panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca){.external} or through the[API](https://ca.api.ovh.com/){.external}:

> [!api]
>
> @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
> 

### How does the snapshot management system work?

You can configure automatic snapshots, with various frequencies. Regardless of the frequency you have set, the last snapshot will always replace and overwrite the previous one. You can also create and delete snapshots on demand.

### Can you delete a snapshot?
Only snapshots that have been created “on demand” can be deleted (see previous question “What is the frequency of snapshots?.” Snapshots with a fixed frequency are automatically deleted, with no possibility of deleting them manually.

### How much space is taken up by snapshots on a NAS-HA?
The capacity used by a snapshot varies based on actions done during the time between snapshots.

From the moment you start the snapshot, all actions done on the chosen partition will be stored in that snapshot and will increase the size of the file. Therefore, you will be able to go back at any time to the initial state of your partition (as it was when the snapshot started). Technically, modifying and deleting data is what increases the storage space used by the snapshot files.

### What is the maximum number of snapshots that can be made?
- For automatic snapshots: one per partition
- For manual snapshots: ten per partition

### Where can I retrieve my snapshots?
In the chosen partition: hidden directory called `.zfs` → directory `snapshots` . Files available in Read Only.

### Does OVH also backup my data?
Yes. An internal back is done daily. It generates one extra snapshot. This backup can’t be disabled by the customer.

## Going further:

Discuss with our user community at: https://community.ovh.com/ca/en.