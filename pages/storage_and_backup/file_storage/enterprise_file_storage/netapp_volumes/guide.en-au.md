---
title: Enterprise File Storage - Managing volumes
excerpt: Manage Enterprise File Storage volumes using the OVHcloud API
updated: 2021-10-27
---

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
>> > @api {v1} /storage GET /storage/netapp/{serviceName}/share
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
>> > @api {v1} /storage GET /storage/netapp/{serviceName}/share/{shareId}
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
>> > @api {v1} /storage POST /storage/netapp/{serviceName}/share
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
>> > @api {v1} /storage GET /storage/netapp/{serviceName}/share/{shareId}/accessPath
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
> For NFS, you can refer to [this guide](/pages/storage_and_backup/file_storage/ha_nas/nas_nfs).
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
>> > @api {v1} /storage DELETE /storage/netapp/{serviceName}/share/{shareId}
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

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-au/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.
