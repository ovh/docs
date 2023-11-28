---
title: HA-NAS - Managing ACLs via API
excerpt: Find out how to manage HA-NAS access using the OVHcloud API
updated: 2022-07-20
---

## Objective

The OVHcloud HA-NAS service allows you to manage file storage that can be accessed over a network.

**This guide explains how to manage the ACL of a HA-NAS partition via the OVHcloud API.**

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

> [!warning]
>
> Access is denied by default unless granted via the ACL. Only IP addresses attached to your OVHcloud services can be added.
>

### Retrieving the ACL of a partition

To retrieve the IP addresses that can access the partition, use the following route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /dedicated/nasha GET /dedicated/nasha/{serviceName}/partition/{partitionName}/access
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

### Retrieving all eligible IP addresses

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

### Adding an ACL entry

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

### Removing an ACL entry

To delete an IP address or address range from the ACL, use the following route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /dedicated/nasha DELETE /dedicated/nasha/{serviceName}/partition/{partitionName}/access/{ip}
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
>> >> The IP address or range to be denied access
>

## Go further

[Mount your NAS via NFS share](/pages/storage_and_backup/file_storage/ha_nas/nas_nfs)

[Mount your NAS on Windows Server via CIFS](/pages/storage_and_backup/file_storage/ha_nas/nas_cifs)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-au/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.
