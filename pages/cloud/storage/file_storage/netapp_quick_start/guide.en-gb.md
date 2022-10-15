---
title: Enterprise File Storage - API Quickstart
slug: netapp/quick-start
excerpt: Getting started with Enterprise File Storage using the OVHcloud API
section: Enterprise File Storage
order: 2
---

**Last updated 27th October 2021**

## Objective

In this quickstart guide, we will provide an overview of how to use your Enterprise File Storage offer for file storage.

**Learn how to retrieve information about your service and how to create and access your first volume using the OVHcloud API.**

## Basics

OVHcloud Enterprise File Storage allows you to create and manage file volumes that can be accessed over a network.

You're able to choose file volume size, manage accesses using ACLs or create snapshots.

## Requirements

- An Enterprise File Storage service
- You should be logged in to the [OVHcloud API](https://api.ovh.com)
- Basic understanding of how to [mount a NFS volume](https://docs.ovh.com/gb/en/storage/nas-nfs/)

## Instructions

All API routes used for this quickstart are available under the */storage* section here: <https://api.ovh.com/console/#/storage>.

> [!primary]
>
> While using the API, all fields marked with an asterisk (\*) are required.
>

### Retrieving information about your service

All your active services can be retrieved by using the following route:

> [!api]
>
> @api {GET} /storage/netapp
>

### Creating a new volume

A volume is a unit of storage with a size and a protocol.

To create a new volume use the following route:

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
>> > **NetAppShare** *
>> >
>> >> **description**
>> >> >
>> >> > Volume description
>> >>
>> >> **name**
>> >>
>> >> > Volume name
>> >>
>> >> **protocol** *
>> >>
>> >> > Volume protocol
>> >>
>> >> **size** *
>> >>
>> >> > Volume size in Gigabytes
>

Choose `NFS` as protocol and a size of `10` Gigabytes for example.

### Adding an ACL to the volume

Volume ACLs allow to grant or deny access to a volume.

> [!warning]
>
> Default behaviour is to deny all access to a volume.
>

After creating a volume, you need to grant access to it.

To create a new ACL that will allow you to connect to your newly created volume, use the following route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /storage/netapp/{serviceName}/share/{shareId}/acl
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
>> > **NetAppShareACLRule** *
>> >
>> >> **accessLevel** *
>> >> >
>> >> > ACL access level. Can be **rw** (read and write) or **ro** (read-only).
>> >>
>> >> **accessTo** *
>> >> >
>> >> > IP address or a range of IP addresses in CIDR notation.
>

> [!primary]
>
> Using CIDR notation, you can grant access to your volume from x.x.x.x/x network.
> For example: 192.0.2.0/24
>

### Mounting the volume

Inspect the ACL creation status using the following route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share/{shareId}/acl/{aclRuleId}
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
>> > **aclRuleId** *
>> >
>> >> ACL ID
>

Replace `aclRuleId` with the ID of the ACL created for your volume.

> [!primary]
>
> ACL status should be `active`.
>

Once the ACL is active, retrieve access paths for the volume using the following route:

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

You will be presented with one or multiple access paths for your volume.

You are now able to mount the volume with the following command:

```sh
mount -t nfs accessPath
```

> [!primary]
>
> If you are using Linux, you will need to have `nfs-utils` package installed.
>

Once mounted, your volume is now usable to store files.

### Cleaning up

You can remove your volume using the following route:

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

## Go further

Join our community of users on <https://community.ovh.com/en/>.
