---
title: Object Storage - Bucket ACL (EN)
slug: s3/bucket-acl
section: Tutorials
order: 150
updated: 2023-03-09
routes:
    canonical: 'https://docs.ovh.com/gb/en/storage/object-storage/s3/bucket-acl/'
---

**Last updated on 9th March 2023**

## Overview

By default, all resources (buckets, objects) and sub-resources (lifecycle configuration, webite configuration, ...etc) are private in OVHcloud S3 Object Storage. Only the resource owner, i.e the user account that creates it, has full control.

Access to private resources can be granted via access policies.

Access policies can be categorized broadly into 2 types :

- user based
- resource based : bucket policies and ACLs are policies that are attached directly to specific resources

### User based

Access policies attached to a specific user are called user policies. A user policy is evaluated using OVHcloud S3 Object Storage IAM permissions and applies only to the specific user it is attached to.

### Resource based

#### ACL

An ACL is a list of permissions granted to identified grantees. ACLs are typically used to grant basic read/write permissions to other accounts.

ACLs can either be attached at bucket level or at individual object level.

Although ACLs are the legacy way to manage permissions, they are still relevant and not deprecated. However based on the situation, you might want to use policies to apply fine grained control of your resources.

#### Bucket policy

Akin to user policies, a bucket policy controls permissions for a bucket and the objects in it. The difference is that whereas user policies control permissions for a specific user to a list of resources, a bucket policy controls permissions to a specific bucket and its objects for a list of users.

![policies](images/s3_bucket_acl-20230228171656561.png)

> [!warning]
>
> Bucket policies is a feature that is not yet available for OVHcloud S3 Object Storage.
>

## Manage permissions with ACLs

### Supported grantees

OVHCloud Object Storage supports 2 types of grantees:

- Public Cloud account users
- Predefined groups

#### Public Cloud account

Public Cloud account users are identified by a canonical user id. When you grant access rights, the canonical user id is specified by `id=<value>` where `<value>` equals `<project_name>:<user_name>`.

Example: if you have a Public Cloud project named `my_project` and you have created a user named `storage-user` then you get `id=my_project:storage-user`

#### Predefined groups

Supported predefined user groups are the following and are identified by a URI:

- **log delivery group**: this group contains the applicative users used by OVHcloud services to write server access logs inside buckets (read our [Server Access Logging](https://docs.ovh.com/pt/storage/object-storage/s3/server-access-logging/) guide for more information)

```console
http://acs.amazonaws.com/groups/s3/LogDelivery
```

- **authenticated users group**: this group contains all the OVHcloud Public Cloud account users  

```console
http://acs.amazonaws.com/groups/global/AuthenticatedUsers
```

- **all users group**: this group is the default group that contains all users in the world and is equivalent to anonymous users

```console
http://acs.amazonaws.com/groups/global/AllUsers
```

### Permissions

The managed permissions are listed below. Note that depending on the level (bucket or object), not all permissions can apply.

| Permission | Bucket level | Object level |
| --- | --- | --- |
| READ | allows to list all objects in the bucket | allows to read an object and its metadata |
| WRITE | allows creation/deletion/overwrites of objects in the bucket | n/a |
| READ_ACP | allows read of the bucket ACL | allows read of the object ACL |
| WRITE_ACP | allows creation/deletion/overwrites of the bucket ACL | allows creation/deletion/overwrites of the object ACL |
| FULL_CONTROL | shorthand for READ, WRITE, READ_ACP, WRITE_ACP on the bucket | shorthand for READ, READ_ACP, WRITE_ACP on the object |

### Predefined ACLs

Predefined ACLs have a predefined set of grantees and permissions and are a convenient shorthand for the most common use cases.

| ACL | Description | Bucket | Object | Comment |
| --- | --- | --- | --- | --- |
| private | default behavior, owner has FULL_CONTROL | x | x |  |
| public-read | owner has FULL_CONTROL<br>AllUsers group has READ | x | x |  |
| public-read-write | owner has FULL_CONTROL<br>AllUsers group has READ, WRITE | x | x |  |
| authenticated-read | owner has FULL_CONTROL<br>AuthenticatedUsers group has READ | x | x |  |
| bucket-owner-read | object owner has FULL_CONTROL<br>bucket owner has READ |    | x | currently not managed yet |
| bucket-owner-full-control | object owner and bucket owner both have FULL_CONTROL |  | x | currently not managed yet |
| log-delivery-write | LogDelivery group has WRITE, READ_ACP | x |  |  |

### Instructions

#### Set ACL on a bucket

You can set the ACL on a bucket at its creation or afterwards, by calling the `put-bucket-acl` endpoint.

Example:

```bash
$ aws s3api create-bucket --bucket my-bucket --region gra --acl public-read
```

In this example, we created a bucket named "my-bucket" using a predefined ACL "public-read".

To verifiy that ACL are set correctly, you can use the following command to return the ACL:

```bash
$ aws s3api get-bucket-acl --bucket my-bucket
```

```json
{
    "Owner": {
        "DisplayName": "2171889990277389:user-xxxxxxxxxxxx",
        "ID": "2171889990277389:user-xxxxxxxxxxxx"
    },
    "Grants": [
        {
            "Grantee": {
                "Type": "Group",
                "URI": "http://acs.amazonaws.com/groups/global/AllUsers"
            },
            "Permission": "READ"
        },
        {
            "Grantee": {
                "DisplayName": "2171889990277389:user-xxxxxxxxxxxx",
                "ID": "2171889990277389:user-xxxxxxxxxxxx",
                "Type": "CanonicalUser"
            },
            "Permission": "FULL_CONTROL"
        }
    ]
}
```



To change the ACL, you can call the `put-bucket-acl` endpoint by using the AWS cli:

```bash
$ aws s3api put-bucket-acl --bucket acl-bucket --grant-write id=po-training:user-yyyyyyyyyy
```

Here, we change the ACL to give account user "user-yyyyyyyyyy" the permission to write in the bucket.

Again, to verify that ACL are set correctly:

```bash
$ aws s3api get-bucket-acl --bucket my-bucket
```

```json
{
    "Owner": {
        "DisplayName": "2171889990277389:user-xxxxxxxxxxxx",
        "ID": "2171889990277389:user-xxxxxxxxxxxx"
    },
    "Grants": [
        {
            "Grantee": {
                "DisplayName": "po-training:user-yyyyyyyyyy",
                "ID": "po-training:user-yyyyyyyyyy",
                "Type": "CanonicalUser"
            },
            "Permission": "WRITE"
        }
    ]
}
```

#### Set ACL on an object

Similar to bucket level, you can set the ACL on an object at its creation or afterwards.

Example:

```bash
$ aws s3api put-object --bucket my-bucket --body file.txt --key file --grant-full-control id=po-training:user-yyyyyyyyyy
```

In this example, we created an object named "file" and we gave "FULL_CONTROL" on that object to account user "user-yyyyyyyyyy".

## Best practices

### When to use ACLs?

#### At object level

As mentioned before, ACLs can be attached at object level.

You might consider the following scenarios to use object ACL.

- the bucket owner and the object owner are not the same: in a scenario where the bucket owner has granted another account to write objects inside the bucket, access to those objects must be granted through ACLs
- permissions vary from individual object to individual object

#### At bucket level

We stongly advise you to use policies instead for a better and more fine grained access control over the bucket and its objects. However, for very basic permission control needs, you might consider using bucket ACLs to grant permissions to the objects and ACLs related to the bucket.

### When to use bucket policies?

You might consider using bucket policies if you want to set **cross-account** permissions over the resources related to a specific bucket.

### When to use user policy?

You might consider using user policies if you want to set **cross-resource** permissions for a specific account.

> [!warning]
>
> **Important**
>
> ACLs and policies can be combined. However the principle of least privilege will always be applied and can be summerized as "**allow only if there is an explicit allow and no explicit deny, else, deny all**"
>

## Go further

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/).
