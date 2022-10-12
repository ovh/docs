---
title: Enterprise File Storage - Managing volumes
slug: netapp/volumes
excerpt: Manage Enterprise File Storage volumes using the OVHcloud API
section: Enterprise File Storage
order: 3
---

**Last updated 27th October 2021**

## Objective

In this tutorial, we will provide an overview of how to manage the volumes of your OVHcloud Enterprise File Storage offer.

**Learn how to list volumes and their mount points, create a new volume and remove a volume using the OVHcloud API.**

## Requirements

- An OVHcloud Enterprise File Storage service
- You should be logged into the [OVHcloud API](https://ca.api.ovh.com)

## Basics

A volume is a persistent, readable and writable file system volume. It uses a protocol and has a size.

It can also optionally have a name and a description.

> [!warning]
>
> By default, all access to a newly created volume is restricted. An ACL has to be created in order to allow access.
>

## Instructions

All API routes used for this tutorial are available under the */storage* section here: <https://ca.api.ovh.com/console/#/storage>.

> [!primary]
>
> While using the API, all fields marked with an asterisk (\*) are required.
>

### Listing existing volumes

All existing volumes can be retrieved using the following route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share
>> >
>>
>
> Parameters:
>
>> > **serviceName** *
>> >
>> >> Service ID
>> >
>

Replace `serviceName` with the ID of your service.

### Retrieving information about a volume

To retrieve the information about a volume, use the following route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share/{shareId}
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

### Creating a volume

To create a new volume, use the following route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /storage/netapp/{serviceName}/share
>> >
>>
>
> Parameters:
>
>> > **serviceName** *
>> >
>> >> Service ID
>> >
>

Replace `serviceName` with the ID of your service.

Choose `NFS` protocol for your new volume (`protocol` property) and its `size`.
You can also specify `name` and `description` properties (optional).

### Viewing mount points for a volume

To determine the mount path of a volume, use the following route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share/{shareId}/accessPath
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

Returned mount paths can be used to mount your volume.

The mount command will be different, depending on the protocol chosen for the volume.

> [!primary]
>
> For NFS, you can refer to [this guide](https://docs.ovh.com/us/en/storage/nas-nfs/).
>
> Note that the retrieved mount path replaces IP_NAS/NFS_PATH in that documentation.
>

### Deleting a volume

To remove a volume, use the following route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {DELETE} /storage/netapp/{serviceName}/share/{shareId}
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

## Go further

Join our community of users on <https://community.ovh.com/en/>.
