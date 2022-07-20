---
title: HA-NAS - Managing snapshots via API
slug: nas/nas-snapshots-api
excerpt: Find out how to manage HA-NAS snapshots using the OVHcloud API
section: NAS
---

**Last updated 29th June 2022**

## Objective

OVHcloud HA-NAS allows you to create and manage file volumes that can be accessed over a network. 

**This guide explains how to manage the snapshots of a HA-NAS partition via the OVHcloud API.**

## Requirements

- An OVHcloud [HA-NAS service](https://www.ovh.co.uk/nas/)
- Consulting the [OVHcloud API first steps guide](../../api/first-steps-with-ovh-api/) to familiarise yourself with the OVHcloud APIv6

## Instructions

> [!primary]
> Please visit the [HA-NAS FAQ page](../faq-nas/) for detailed information on the snapshot function.
>

All API routes in this guide are available in the section */dedicated/nasha*: <https://api.ovh.com/console/#/dedicated/nasha>.

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

Snapshots are created by default and saved on your HA-NAS. You can add up to 3 additional automatic snapshot frequencies.

### Retrieving the automatic snapshot schedule

To view the active automatic snapshot schedule, use the following route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot
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

### Adding an automatic snapshot interval

To create additional automatic snapshots at a selected frequency, use the following route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot
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
>> > **snapshotType** *
>> >
>> >> A frequency for the snapshot: *day-1*, *day-2*, *day-3*, *day-7*, *hour-1*, or *hour-6*
>

### Retrieving information about automatic snapshots

To retrieve the details of an automatic snapshot, use the following route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot/{snapshotType}
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
>> > **snapshotType** *
>> >
>> >> The snapshot frequency concerned: *day-1*, *day-2*, *day-3*, *day-7*, *hour-1*, or *hour-6*
>

### Removing an automatic snapshot interval

Use the following route to delete an automatic snapshot frequency:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {DELETE} /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot/{snapshotType}
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
>> > **snapshotType** *
>> >
>> >> The snapshot frequency concerned: *day-1*, *day-2*, *day-3*, *day-7*, *hour-1*, or *hour-6*
>

You can also utilise instant snapshots with your HA-NAS (custom snapshots) via the following endpoints.

### Listing custom snapshots

Use the following route to retrieve existing custom snapshots:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
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


### Creating a custom snapshot

To add a manual snapshot, use the following route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
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

### Retrieving information about a custom snapshot

To view the details of a custom snapshot, use the following route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot/{name}
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
>> > **name** *
>> >
>> >> The name of the snapshot
>

### Removing a custom snapshot

Use the following route to delete a custom snapshot:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {DELETE} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot/{name} 
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
>> > **name** *
>> >
>> >> The name of the snapshot
>


## Go further

[Mount your NAS via NFS share](../nas-nfs/)

[Mount your NAS on Windows Server via CIFS](../nas-cifs/)

Join our community of users on <https://community.ovh.com/en/>.
