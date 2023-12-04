---
title: Enterprise File Storage - Managing volume snapshots
excerpt: Manage Enterprise File Storage volume snapshots using the OVHcloud API
updated: 2021-10-27
---

## Objective

In this tutorial, we will provide an overview of how to manage snapshots for OVHcloud Enterprise File Storage volumes.

**Learn how to list snapshots, create a new snapshot, get information about a snapshot and remove a snapshot using the OVHcloud API.**

## Requirements

- An OVHcloud Enterprise File Storage offer with an available volume
- You should be logged in to the [OVHcloud API](https://api.ovh.com)

## Basics

A volume snapshot is a point-in-time, read-only copy of a volume.

Snapshots are created from an existing, operational volume.

> [!warning]
>
> Snapshots are linked to a volume, they cannot exist without it.
>

## Instructions

All API routes used for this turorial are available under the */storage* section here: <https://api.ovh.com/console/#/storage>.

> [!primary]
>
> While using the API, all fields marked with an asterisk (\*) are required.
>

### Listing existing snapshots for a volume

All existing snapshots for a volume can be retrieved using the following route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /storage GET /storage/netapp/{serviceName}/share/{shareId}/snapshot
>> >
>>
>
> Parameters:
>
>> > **serviceName** *
>> >
>> >> Service ID
>> >
>> > **shareId** *
>> >
>> >> Volume ID
>

Replace `serviceName` with the ID of your service and `shareId` with your volume ID.

You should have no snapshots by default.

### Creating a new snapshot from a volume

To create a new snapshot, use the following route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /storage POST /storage/netapp/{serviceName}/share/{shareId}/snapshot
>> >
>>
>
> Parameters:
>
>> > **serviceName** *
>> >
>> >> Service ID
>> >
>> > **shareId** *
>> >
>> >> Volume ID
>> >
>> > **NetAppShareSnapshot** *
>> >
>> >> **description**
>> >> >
>> >> > Snapshot description
>> >>
>> >> **name**
>> >> >
>> >> > Snapshot name
>

Replace `serviceName` with the ID of your service and `shareId` with your volume ID.

Both snapshot `name` and `description` parameters are optional.

### Get information about a snapshot

To get information about a snapshot, use the following route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /storage GET /storage/netapp/{serviceName}/share/{shareId}/snapshot/{snapshotId}
>> >
>>
>
> Parameters:
>
>> > **serviceName** *
>> >
>> >> Service ID
>> >
>> > **shareId** *
>> >
>> >> Volume ID
>> >
>> > **snapshotId** *
>> >
>> >> Snapshot ID
>

Replace `serviceName` with the ID of your service, `shareId` with your volume ID and `snapshotId` with your snapshot ID.

### Removing a snapshot

To remove a snapshot, use the following route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /storage DELETE /storage/netapp/{serviceName}/share/{shareId}/snapshot/{snapshotId}
>> >
>>
>
> Parameters:
>
>> > **serviceName** *
>> >
>> >> Service ID
>> >
>> > **shareId** *
>> >
>> >> Volume ID
>> >
>> > **snapshotId**
>> >
>> >> Snapshot ID
>

Replace `serviceName` with the ID of your service, `shareId` with your volume ID and `snapshotId` with your snapshot ID.

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-ie/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.
