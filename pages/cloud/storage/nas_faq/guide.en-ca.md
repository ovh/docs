---
title: NAS - Frequently Asked Questions
slug: faq-nas
excerpt: Do you have questions about NAS? Here are the most frequently asked questions
section: NAS
order: 02
---

**Last updated 29th July 2022**

## Objective

**Here are the most frequently asked questions about the OVHcloud HA-NAS solution.**

## General questions

### What is the OVHcloud HA-NAS solution?

HA-NAS is a fully managed, shared file storage service, based on OpenZFS open-source technology.

### What can I do with HA-NAS?

HA-NAS enables data to be centralised across different Linux workloads, as well as Windows for multiple scenarios:

- shared and external storage for IT applications (VM, DB, etc.)
- web content management 
- file sharing on the network, etc.

### Can I manage my HA-NAS via a configuration panel?

Yes, you can access it from your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca) by going to the `Bare Metal Cloud`{.action} section, then `NAS and CDN`{.action}.

## Availability

### Which SLA comes with HA-NAS?

HA-NAS comes with a 99.99% availability rate.

## IP and Security

### What file transfer protocols are currently supported on the HA-NAS solution?

HA-NAS supports file transfer through NFS (NFSv3) and CIFS (SMB).

### Which OVHcloud services can I push data from?

HA-NAS is a service that can receive data from all existing OVHcloud services: Bare Metal Cloud (VPS, OVHcloud Dedicated Servers, So you Start, Kimsufi), Public Cloud, Hosted Private Cloud, etc.

### How do I manage access to a HA-NAS solution?

You can configure the access control list (ACL) in your OVHcloud Control Panel. Simply enter the IP address of the service for which you want to authorise access to the HA-NAS.

### Is the HA-NAS service compatible with other servers outside of OVHcloud?

No. You can only access your HA-NAS from the OVHcloud network.

### Is HA-NAS eligible for the vRack solution?

Currently, HA-NAS cannot be integrated into the vRack private network. However, HA-NAS and vRack are not incompatible if you go via the public IP path of the server connected to vRack.

## Capacity and performance

### What storage capacity options are available?

The minimum size of a service is 3 TB, and the maximum size is 144 TB .<br>
We offer the following storage capacities based on 3 TB disks:

- 3 TB  
- 6 TB
- 9 TB
- 18 TB
- 36 TB

We offer the following storage capacities on a 12 TB disk base:

- 12 TB
- 24 TB
- 36 TB
- 72 TB
- 144 TB

The storage capacities offered are the usable capacities.

### Are the resources of my HA-NAS dedicated to my services?

The disks of your HA-NAS are dedicated to your services. The machine’s other resources are shared (RAM, CPU, bandwidth).

**Special case:** If you sign up to the 144 TB solution, all of the host server’s resources are dedicated to you (RAM, CPU, bandwidth).

### How many HA-NAS services can I create from my customer account?

There is no limit to the number of services per customer account.

### What is the maximum number of partitions per service?

You can create as many partitions as you want. The minimum size is 10 GB and the maximum size is defined by the maximum size of the service.

### Are the transfer and availability rates guaranteed?

- Transfer: the service’s bandwidth is shared. Transfer rates cannot be guaranteed by OVHcloud.
- Availability: service availability is guaranteed, and is the subject of a service level agreement. You can view the details in our Terms of Use.

## Using the product

### Can HA-NAS be connected to several servers at once?

Yes. You can have your NAS interacted simultaneously with several OVHcloud services.

### Can I install an operating system on a HA-NAS?

No, you cannot install operating systems on HA-NAS solutions.

### Can the allocated space be partitioned?

Yes, you will need to create one or several partitions, depending on how you will use it. There are no limits to creating partitions.

## Snapshots

### What are snapshots?

Snapshots are instantaneous images of your disk’s state and the data stored on it at that particular point in time. They offer you the first level of backup. You can configure and manage snapshots from your OVHcloud Control Panel.

By default, the snapshot feature is enabled when you create your partition, and the frequency is set at “once every hour” by default.

### Which backup policy is associated with HA-NAS?

Users are responsible for managing their backups (tools and policies) inside and outside the service, as well as their business continuity and disaster recovery plans. However, for reasons of infrastructure security and resilience, OVHcloud can take snapshots of the service on a remote server, without any obligation.

In the event of an outage or attack, if OVHcloud has taken a snapshot on a remote server, we can then restore the data from the last available snapshot. Please note, however, that this is done on request and is an optional service that will be billed.

### How often are snapshots taken? <a name="frequency"></a>

You can manage the frequency of snapshots from your OVHcloud Control Panel. You can choose the frequency from the following options:

- every hour (default)
- once every 6 hours
- once every day
- once every 2 days
- once every 3 days
- once every week

You can also create manual snapshots at any time, save them without any time limit, or delete them. This feature is available in your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca) or via the following [API](https://ca.api.ovh.com/) call:

> [!api]
>
> @api {POST} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
>

> [!primary]
> Please refer to our [Getting started with OVHcloud APIs](https://docs.ovh.com/ca/en/api/first-steps-with-ovh-api/) guide to get familiar with using OVHcloud APIs.
>

### How does the snapshot management system work?

You can configure automatic snapshots, and a selection of frequencies are available. No matter what frequency is set, the most recent snapshot taken will replace and delete the previous one. You can also create and delete snapshots on demand.

### Can I delete a snapshot?

Only snapshots created “on demand” can be deleted (see previous question [How often are snapshots taken?](#frequency)).<br>
Snapshots with a set frequency are automatically deleted, and cannot be deleted manually.

### Are snapshots included in the capacity of a service?

You are allocated additional space on the same physical media to ensure that your snapshots are stored. This space corresponds to at least 15% of the primary volume. In case you exceed this limit, the snapshots will be stored on your main storage space. You cannot use the additional space for anything other than storing your snapshots.

For example, for a 3 TB service, an additional 450 GB is reserved for snapshots.

### What is the maximum number of snapshots I can create?

- For automatic snapshots: one per partition
- For manual snapshots: ten per partition

### Where are snapshots stored?

Snapshots are stored at the same level as your service. Snapshots are replicated on two separate servers in two different racks. In addition, OVHcloud takes a daily snapshot at a remote site.

### Where can I retrieve my snapshots?

In the partition concerned, you will find a hidden directory called `.zfs`, which contains a `snapshots` directory. The files are available in read only.

### How many snapshot policies can I create per volume?

1

## Billing

### What type of pricing is linked to the service?

HA-NAS is a service billed monthly by volume (from 3 to 144 TB in stages).

### How long can I subscribe to a HA-NAS solution?

The subscription periods offered are 1 month, 12 months, 24 months and 36 months. At the end of your subscription period, your subscription will be renewed automatically unless you submit a [cancellation request](https://docs.ovh.com/ca/en/billing/how-to-cancel-your-services/). You can do this for the entire duration of your subscription, via the OVHcloud Control Panel.

## Go further

Join our user community on <https://community.ovh.com/en/>.
