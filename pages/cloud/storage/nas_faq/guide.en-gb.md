---
title: NAS - Frequently Asked Questions
slug: faq-nas
excerpt: Do you have questions about NAS? Here are the most frequently asked questions
section: NAS
---

**Last updated 22nd November 2017**

## The product

### What does the HA acronym mean when I order NAS with OVH?

HA stands for High Availability, and means that OVH guarantees high service availability. This guarantee is provided as an SLA (Service Level Agreement), which makes OVH responsible for offering compensation to its customers, if an incident occurs which makes their service unavailable.

### Which datacentres offer HA-NAS?

You can sign up to HA-NAS in datacentres based in France (Roubaix, Strasbourg, Gravelines), and our datacentre in Beauharnois, Canada. You can choose the datacentre in the order process. IMPORTANT: once you have ordered the product, you cannot change the datacentre it is based in.

### Can I manage my HA-NAS via a configuration panel?

Yes, you can manage it from your [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager) by going to the `Cloud`{.action} section, then `Platforms and services`{.action}.

### Can I increase the total storage capacity of my NAS?

Once you have ordered a HA-NAS, you cannot increase its storage capacity. To increase your storage capacity, you will need to migrate your data onto a second NAS with a higher storage capacity.

### What storage capacity options are available?

We offer the following options for storage capacity:

- 1.2 TB (1.1 TB usable storage space);
- 2.4 TB (2.2 TB usable storage space);
- 3.6 TB (3.2 TB usable storage space);
- 7.2 TB (6.4 TB usable storage space);
- 13.2 TB (10 TB usable storage space);
- 19.2 TB (17 TB usable storage space);
- 26.4 TB (24 TB usable storage space);

These storage capacity options are all made up of 1.2 TB dedicated disks.

### Are the resources of my HA-NAS dedicated to my services?
The disks of your HA-NAS are dedicated to your services. The machine’s other resources are shared (RAM, CPU, bandwidth).

**Special case:** if you sign up to the 26.4 TB solution, all of the host server’s resources are dedicated to your services (RAM, CPU, bandwidth).

### How long can I subscribe to an HA-NAS solution?
The subscription periods offered are 1 month, 3 months, 6 months and 12 months. At the end of your subscription period, your subscription is renewed automatically unless you submit a cancellation request. You can do this at any time during your subscription period, via your [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager).

### Will I have access to all of the storage space displayed in the order?
For most storage solutions, theoretical capacity differs slightly from the usable capacity, since a portion of storage space is needed for the disk to operate:

- for a 1.2 TB HA-NAS, 1.1 TB are usable;
- for a 2.4 TB HA-NAS, 2.2 TB are usable;
- for a 3.6 TB HA-NAS, 3.2 TB are usable;
- for a 7.2 TB HA-NAS, 6.4 TB are usable;
- for a 13.2 TB HA-NAS, 10 TB are usable;
- for a 19.2 TB HA-NAS, 17 TB are usable;
- for a 26.4 TB HA-NAS, 24 TB are usable;

Please note that the information provided is accurate on the ‘last updated’ date at the top of the page, and may vary in future.

## Using the product

### In what cases should I use an HA-NAS solution?
In an infrastructure, the HA-NAS is a storage space to which you can attach several [dedicated servers](https://www.ovh.co.uk/dedicated_servers/), [Private Cloud](https://www.ovh.co.uk/dedicated-cloud/) or [Public Cloud instances](https://www.ovh.co.uk/public-cloud/instances/).

There are many use cases for it, but the high availability of OVH HA-NAS is particularly beneficial for the following uses:

- Storing data that is not frequently accessed: data that doesn’t generate a high volume of traffic, but needs to be permanently accessible (legal documents, instructions, etc.);
- Storing “static” data: data that does not need to be modified regularly. This way, you can free up space on a high-performance infrastructure, to prioritise data that is always being updated, or requires computing power (databases, business applications, etc.);
- The Hot Backup solution: the high availability of the NAS service ensures that your data remains accessible at all times, allowing you to access (or redirect) files that would be unavailable or corrupted elsewhere.

### In what cases would the HA-NAS solution be a better option than Backup Storage?
HA-NAS and Backup Storage are not designed for the same uses. We would advise using NAS for storing static data, which must be permanently accessible. However, Backup Storage is designed for storing data which does not need to be accessed regularly.

From a technical perspective, the major differences are as follows:

- Data on a HA-NAS is stored on dedicated disks, whereas the space is shared for Backup Storage;
- HA-NAS is a storage space mounted on another server that uses NFS or CIFS transfer protocols. Backup Storage is an independent space, accessible via FTP.

### Are there synchronisation features (like with Synology)?
No, HA-NAS can only be mounted as a file system directly on an OS. However, a synchronisation process can still be set up by the administrator of the storage space.

### Can HA-NAS be connected to several servers at once?
Yes. You can make your NAS interact simultaneously with several OVH services.

### Can I install an operating system on a HA-NAS?
No, you cannot install operating systems on HA-NAS solutions.

### Which protocols are compatible with the HA-NAS solution?
HA-NAS can be mounted on a Windows or Linux server via CIFS (Samba) or NFS protocols.

### Is HA-NAS compatible with FTP protocol?
No, the HA-NAS solution is not compatible with FTP protocol.

### Can the allocated space be partitioned?
Yes, you will need to create one or several partitions, depending on how you will use it. There are no limits to creating partitions.

## Product compatibility

### Is HA-NAS compatible with other services outside of OVH?
No, you can only access your HA-NAS from the OVH network.

### Which service(s) can I use to access HA-NAS?
The service is accessible from all OVH products that have an operating system or distribution: dedicated servers (OVH, So you Start, Kimsufi), Dedicated Cloud, Public Cloud and VPS.

### How do I manage access to a HA-NAS solution?
The access control list (ACL) can be configured from your OVH Control Panel. Simply enter the IP address of the service for which you would like to authorise access to the HA-NAS.

### Is HA-NAS eligible for the vRack solution?
Currently, HA-NAS cannot be integrated into the vRack private network. However, HA-NAS and vRack are not incompatible if you go via the public IP route of the server connected to vRack.

## Bandwidth

### Are the transfer and availability rates guaranteed?

- Transfer: the service’s bandwidth is shared. The transfer rate cannot be guaranteed by OVH.
- Availability: service availability is guaranteed, and is the subject of a service level agreement.  The details can be accessed in our Special Conditions of Use.

## Snapshots

### What are snapshots?
Snapshots are instantaneous images of your disk’s state and the data stored on it at that particular point in time. You can configure and manage snapshots from your Control Panel.

By default, the snapshot feature is enabled when you create your partition, and the frequency is set at “once every hour” by default.

### How frequently are snapshots taken?

You can set the frequency of snapshots from your Control Panel. You can choose the frequency from the following options: 

- once every hour;
- once every 6 hours;
- once every day;
- once every 2 days;
- once every 3 days;
- once every week. 


You can also create manual snapshots at any time, save them without any time limit, or delete them. This feature is available in your [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager) or via the [API](https://api.ovh.com/):

> [!api]
>
> @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
> 

### How does the snapshot management system work?

You can configure automatic snapshots, and a selection of frequencies are available. No matter what frequency is set, the most recent snapshot taken will replace and delete the previous one. You can also create and delete snapshots on demand.

### Can I delete a snapshot?
Only snapshots that are created “on demand” can be deleted (see previous question “How frequently are snapshots taken?”). Snapshots with a set frequency are automatically deleted, and cannot be deleted manually.

### How much storage space do snapshots use on a HA-NAS solution?
The storage capacity used by a snapshot can vary depending on the actions taken in the time period between two snapshots.

From the moment you take the snapshot, all actions made on the partition concerned are stored in this snapshot, and they will increase the file size. This way, at any time you can revert back to your partition’s initial state (as it was when the snapshot was taken). From a technical perspective, modifying and deleting data will increase the storage space used by the snapshot files.

### What is the maximum number of snapshots I can create?
- For automatic snapshots: one per partition
- For manual snapshots: ten per partition

### Where can I retrieve my snapshots?
In the partition concerned: a hidden directory called `.zfs` → directory `snapshots` . Files are available in read-only mode.

### Does OVH also create backups of my data?
Yes, OVH creates internal daily backups. It also generates a snapshot. This backup cannot be disabled by the customer.

## Go further

Join our user community on <https://community.ovh.com/en/>.