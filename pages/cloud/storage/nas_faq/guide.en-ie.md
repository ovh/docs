---
title: NAS - Frequently Asked Questions
slug: faq-nas
excerpt: Do you have questions about NAS? Here are the most frequently asked questions
section: NAS
order: 02
---

**Last updated 9th September 2021**

## The product

### Can I manage my HA-NAS via a configuration panel?

Yes, you can manage it from your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) by going to the `Bare Metal Cloud`{.action}, then `NAS and CDN`{.action} section.

### Can I increase the total storage capacity of my NAS?

Once you have ordered a HA-NAS, you cannot increase its storage capacity. To increase your storage capacity, you will need to migrate your data onto a second NAS with a higher storage capacity.

### What storage capacity options are available?

We offer the following options for storage capacity:

- 3 To
- 6 To
- 9 To
- 18 To
- 36 To

The storage capacities offered are the usable capacities.

### Are the resources of my HA-NAS dedicated to my services?

The disks of your HA-NAS are dedicated to your services. The machine’s other resources are shared (RAM, CPU, bandwidth).

**Special case:** If you sign up to the 36 To solution, all of the host server’s resources are dedicated to you (RAM, CPU, bandwidth).

### How long can I subscribe to an HA-NAS solution?

The subscription periods offered are 1 month, 3 months, 6 months and 12 months. At the end of your subscription period, your subscription is renewed automatically unless you submit a cancellation request. You can do this at any time during your subscription period, via your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie).

## Using the product

### Can HA-NAS be connected to several servers at once?

Yes. You can make your NAS interact simultaneously with several OVHcloud services.

### Can I install an operating system on a HA-NAS?

No, you cannot install operating systems on HA-NAS solutions.

### Which protocols are compatible with the HA-NAS solution?

HA-NAS can be mounted on a Windows or Linux server via CIFS (Samba) or NFS protocols.

### Can the allocated space be partitioned?

Yes, you will need to create one or several partitions, depending on how you will use it. There are no limits to creating partitions.

## Product compatibility

### Is HA-NAS compatible with other services outside of OVHcloud?

No, you can only access your HA-NAS from the OVHcloud network.

### Which service(s) can I use to access HA-NAS?

The service is accessible from all OVHcloud products that have an operating system or distribution: dedicated servers (OVHcloud, So you Start, Kimsufi), Hosted Private Cloud, Public Cloud and VPS.

### How do I manage access to a HA-NAS solution?

The access control list (ACL) can be configured from your OVHcloud Control Panel. Simply enter the IP address of the service for which you would like to authorise access to the HA-NAS.

### Is HA-NAS eligible for the vRack solution?

Currently, HA-NAS cannot be integrated into the vRack private network. However, HA-NAS and vRack are not incompatible if you go via the public IP route of the server connected to vRack.

## Bandwidth

### Are the transfer and availability rates guaranteed?

- Transfer: the service’s bandwidth is shared. The transfer rate cannot be guaranteed by OVHcloud.
- Availability: service availability is guaranteed, and is the subject of a service level agreement.  The details can be accessed in our Special Conditions of Use.

## Snapshots

### What are snapshots?

Snapshots are instantaneous images of your disk’s state and the data stored on it at that particular point in time. You can configure and manage snapshots from your Control Panel.

By default, the snapshot feature is enabled when you create your partition, and the frequency is set at “once every hour” by default.

### How frequently are snapshots taken?

You can set the frequency of snapshots from your Control Panel. You can choose the frequency from the following options:

- once every hour (default);
- once every 6 hours;
- once every day;
- once every 2 days;
- once every 3 days;
- once every week.

You can also create manual snapshots at any time, save them without any time limit, or delete them. This feature is available in your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) or via the [API](https://api.ovh.com/):

> [!api]
>
> @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot

### How does the snapshot management system work?

You can configure automatic snapshots, and a selection of frequencies are available. No matter what frequency is set, the most recent snapshot taken will replace and delete the previous one. You can also create and delete snapshots on demand.

### Can I delete a snapshot?

Only snapshots that are created “on demand” can be deleted (see previous question “How frequently are snapshots taken?”). Snapshots with a set frequency are automatically deleted, and cannot be deleted manually.

### How much storage space do snapshots use on a HA-NAS solution?

The storage capacity used by a snapshot can vary depending on the actions taken in the time period between two snapshots.

From the moment you take the snapshot, all actions made on the partition concerned are stored in this snapshot, and they will increase the file size.

### What is the maximum number of snapshots I can create?

- For automatic snapshots: one per partition
- For manual snapshots: ten per partition

### Where can I retrieve my snapshots?

In the partition concerned: a hidden directory called `.zfs` → directory `snapshots` . Files are available in read-only mode.

### Does OVHcloud also create backups of my data?

Yes, OVHcloud creates internal daily backups. It also generates a snapshot. This backup cannot be disabled by the customer.

## Go further

Join our user community on <https://community.ovh.com/en/>.
