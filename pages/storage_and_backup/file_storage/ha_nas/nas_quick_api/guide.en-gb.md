---
title: HA-NAS - API Quickstart
excerpt: Find out how to get started with HA-NAS using the OVHcloud API
updated: 2022-07-20
---

## Objective

The OVHcloud HA-NAS service allows you to manage file storage that can be accessed over a network. 

**This guide provides an overview of how to use your HA-NAS service via the OVHcloud API.**

## Requirements

- An OVHcloud [HA-NAS service](https://www.ovh.co.uk/nas/)
- Consulting the [OVHcloud API first steps guide](/pages/manage_and_operate/api/first-steps) to familiarise yourself with the OVHcloud APIv6

## Instructions

All API routes in this guide are available in the section */dedicated/nasha*: <https://api.ovh.com/console/#/dedicated/nasha>.

> [!primary]
>
> When using the API, all fields marked with an asterisk (\*) are required.
>

### Retrieving information about your service

All your active services can be retrieved by using the following route:

> [!api]
>
> @api {v1} /dedicated/nasha GET /dedicated/nasha
>

### Creating a partition

Use the following route to create a new partition:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /dedicated/nasha POST /dedicated/nasha/{serviceName}/partition
>> >
>>
>
> Parameters:
>
>> > **serviceName** *
>> >
>> >> The internal name of your HA-NAS service
>> >
>> > **partitionDescription** 
>> >
>> >> Optional description
>> >
>> > **partitionName** *
>> >
>> >> A name for the partition
>> >
>> > **protocol** *
>> >
>> >> *NFS*, *CIFS*, or *NFS_CIFS* for both  
>> >
>> > **size** *
>> >
>> >> The size of the partition
>

Choose `NFS` as protocol and a size of `10` Gigabytes, for example.

### Adding an ACL entry to access the partition

> [!warning]
>
> Access is denied by default unless granted via the ACL. Only IP addresses attached to your OVHcloud services can be added.
>

You can verify the IP addresses that are eligible for access via the following API calls:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /dedicated/nasha GET /dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableIps
>> >
>> > @api {v1} /dedicated/nasha GET /dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableBlocks
>> >
>>
>
> Parameters:
>
>> > **serviceName** *
>> >
>> >> The internal name of your HA-NAS service
>> >
>> > **partitionName** *
>> >
>> >> Name of the partition
>

To create a new ACL entry that will allow you to connect to your partition, use the following route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /dedicated/nasha POST /dedicated/nasha/{serviceName}/partition/{partitionName}/access
>> >
>>
>
> Parameters:
>
>> > **serviceName** *
>> >
>> >> The internal name of your HA-NAS service
>> >
>> > **partitionName** *
>> >
>> >> Name of the partition
>> >
>> > **ip** *
>> >
>> >> The IP address or range to be granted access
>> >
>> > **type** *
>> >
>> >> ACL access type for this entry: *readonly* or *readwrite*
>

> [!primary]
>
> Use CIDR notation for IP ranges, for example: 192.0.2.0/24.
>

### Creating a manual snapshot

To add a manual snapshot, use the following route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /dedicated/nasha POST /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
>> >
>>
>
> Parameters:
>
>> > **serviceName** *
>> >
>> >> The internal name of your HA-NAS service
>> >
>> > **partitionName** *
>> >
>> >> Name of the partition
>> >
>> > **expiration**
>> >
>> >> An optional expiration date, for example: 2022-06-24 (ISO 8601)
>> >
>> > **name** *
>> >
>> >> A name for the snapshot
>

### Deleting a partition

Use the following route to delete a partition:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /dedicated/nasha DELETE /dedicated/nasha/{serviceName}/partition/{partitionName}
>> >
>>
>
> Parameters:
>
>> > **serviceName** *
>> >
>> >> The internal name of your HA-NAS service
>> >
>> > **partitionName** *
>> >
>> >> Name of the partition
>

## Go further

[Mount your NAS via NFS share](/pages/storage_and_backup/file_storage/ha_nas/nas_nfs)

[Mount your NAS on Windows Server via CIFS](/pages/storage_and_backup/file_storage/ha_nas/nas_cifs)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.
