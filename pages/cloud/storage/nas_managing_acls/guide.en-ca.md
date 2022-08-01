---
title: HA-NAS - Managing ACLs via API
slug: nas/nas-manage-acls
excerpt: Find out how to manage HA-NAS access using the OVHcloud API
section: NAS
---

**Last updated 20th July 2022**

## Objective

The OVHcloud HA-NAS service allows you to manage file storage that can be accessed over a network.

**This guide explains how to manage the ACL of a HA-NAS partition via the OVHcloud API.**

## Requirements

- An OVHcloud [HA-NAS service](https://www.ovh.com/ca/en/nas/)
- Consulting the [OVHcloud API first steps guide](../../api/first-steps-with-ovh-api/) to familiarise yourself with the OVHcloud APIv6

## Instructions

All API routes in this guide are available in the section */dedicated/nasha*: <<https://ca.api.ovh.com/console/#/dedicated/nasha>.

> [!primary]
>
> When using the API, all fields marked with an asterisk (\*) are required.
>

### Retrieving information about your service

All your active services can be retrieved by using the following route:

> [!api]
>
> @api {GET} /dedicated/nasha
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
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/access
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
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableIps
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableBlocks
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
>> > @api {POST} /dedicated/nasha/{serviceName}/partition/{partitionName}/access
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
>> > @api {DELETE} /dedicated/nasha/{serviceName}/partition/{partitionName}/access/{ip}
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

[Mount your NAS via NFS share](../nas-nfs/)

[Mount your NAS on Windows Server via CIFS](../nas-cifs/)

Join our community of users on <https://community.ovh.com/en/>.
