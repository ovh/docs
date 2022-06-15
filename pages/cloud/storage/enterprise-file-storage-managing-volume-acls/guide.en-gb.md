---
title: Enterprise File Storage - Managing volume ACLs
slug: netapp-volume-acl
excerpt: Manage Enterprise File Storage volume ACLs using the OVHcloud API
section: Enterprise File Storage
order: 4
---

**Last updated 27th October 2021**

## Objective

In this tutorial, we will provide an overview of how to manage ACLs for OVHcloud Enterprise File Storage volumes.

**Learn how to list ACLs, create a new ACL and remove an ACL using the OVHcloud API.**

## Requirements

- An OVHcloud Enterprise File Storage volume
- You should be logged in to the [OVHcloud API](https://api.ovh.com)

## Basics

Volume ACLs allow to authorise or restrict access to a volume.

> [!warning]
>
> By default, all access to a newly created volume is restricted. An ACL has to be created in order to allow access.
>

Using ACLs, you can allow an IP or range of IP addresses (CIDR notation) to access a volume.

## Instructions

All API routes used for this tutorial are available under the */storage* section here: <https://api.ovh.com/console/#/storage>.

> [!primary]
>
> While using the API, all fields marked with an asterisk (\*) are required.
>

### Listing existing ACLs

All existing ACLs for a volume can be retrieved using the following route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share/{shareId}/acl
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

You should have no ACLs by default.

### Allowing access to a volume using an ACL

To create a new ACL, use the following route:

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

Replace `serviceName` with the ID of your service and `shareId` with your volume ID.

Choose the `accessLevel` you want to allow: either `ro` (read-only) or `rw` (read and write).

Finally, replace `accessTo` with the IP address from which you want to authorize connections.

### Removing an ACL

Removing an ACL will prevent all further access from the IP adresses specified by it.

To remove an ACL, use the following route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {DELETE} /storage/netapp/{serviceName}/share/{shareId}/acl/{aclRuleId}
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

Replace `serviceName` with the ID of your service and `shareId` with your volume ID.

You can get the `aclRuleId` either from the ACL creation body response or by listing existing ACLs for your volume.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
