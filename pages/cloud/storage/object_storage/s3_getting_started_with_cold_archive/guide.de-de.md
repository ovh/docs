---
title: Cold Archive - Getting started with Cold Archive (Alpha) (EN)
slug: s3/getting-started-with-cold-archive
routes:
    canonical: 'https://docs.ovh.com/gb/en/storage/s3/getting-started-with-cold-archive/'
excerpt: This guide shows you how to manage your data with Cold Archive
section: Cold Archive Storage Class Specifics
order: 200
---

**Last updated 15th March 2022**

## Objective

Cold Archive is a service for long-term data storage.
When archived, every object of a bucket is stored on physical tapes.
Restoration can take some time as it needs to be read on tapes.

**This guide explains how to set up storage on tapes with Cold Archive.**

> [!primary]
>
> During the the Alpha period, tapes are not used.

## Requirements

- [Getting started with AWS CLI](https://docs.ovh.com/de/storage/s3/getting-started-with-s3/#using-the-aws-cli)
- `awscli` version >= 1.16.62

## Instructions

In this tutorial, **awscli aliases** are used to simplify the commands.

```bash
mkdir -p ~/.aws/cli
touch ~/.aws/cli/alias
```

Add this content to the file:

```bash
[toplevel]

put-ovh-archive = s3api put-bucket-intelligent-tiering-configuration --id myid --intelligent-tiering-configuration '{"Id": "myid", "Status": "Enabled", "Tierings": [{"Days": 999,"AccessTier": "OVH_ARCHIVE"}]}' --bucket

put-ovh-restore = s3api put-bucket-intelligent-tiering-configuration --id myid --intelligent-tiering-configuration '{"Id": "myid", "Status": "Enabled", "Tierings": [{"Days": 999,"AccessTier": "OVH_RESTORE"}]}' --bucket

get-ovh-bucket-status = s3api get-bucket-intelligent-tiering-configuration --id myid --bucket

delete-ovh-archive = s3api delete-bucket-intelligent-tiering-configuration --id myid --bucket
```

> [!primary]
>
> `Id` will be necessary for further PUT, GET and DELETE operations on the intelligent-tiering configuration.
> `Status` and `Days` are mandatory but not used.
>

> [!primary]
>
> The plugin `awscli-plugin-endpoint` is not working with aliases, the parameter `--endpoint-url` will be required in every command.
>

> [!primary]
>
> If you have defined multiple profiles, add `--profile <profile>` to the command line.
>

### Bucket archiving

After its creation, a bucket is in write-only mode.<br>
Allowed actions are adding and listing objects.

Archive a bucket:

```bash
aws --endpoint-url https://s3.rbx.archive.cloud.ovh.net put-ovh-archive <bucket_name>
```

After this request, the bucket is not archived yet.<br>
It will take some time before it is archived on the tapes.<br>
From this command and until a restoration, the bucket cannot accept any read or write requests on objects (listing objects is still allowed).

> [!primary]
>
> During the Alpha period, nothing is stored on tapes.
>

### Bucket restoring

Restore a bucket:

```bash
aws --endpoint-url https://s3.rbx.archive.cloud.ovh.net put-ovh-restore <bucket_name>
```

After this request, the bucket is not restored yet.<br>
It will take some time before it is restored and for the objects to be accessible in read-only (writing objects is forbidden).

### Bucket deletion

Delete an intelligent-tiering configuration and objects of a bucket:

```bash
aws --endpoint-url https://s3.rbx.archive.cloud.ovh.net delete-ovh-archive <bucket_name>
```

After this request, the objects of the bucket are not deleted yet.<br>
It will take some time before objects are deleted.<br>
Once objects are deleted, the bucket can be released:

```bash
aws s3 rb s3://<bucket_name>
```

### Bucket status

Once an intelligent-tiering configuration has been pushed (via a `put-bucket-intelligent-tiering-configuration` operation) and until it is removed (via a `delete-bucket-intelligent-tiering-configuration` operation), the status of a bucket is readable through:

```bash
aws --endpoint-url https://s3.rbx.archive.cloud.ovh.net get-ovh-bucket-status <bucket_name> | jq '.IntelligentTieringConfiguration.Status'
```

#### List of bucket statuses

| Status      | Description                                                                      | Objects permissions    |
|-------------|----------------------------------------------------------------------------------|------------------------|
| `None`      | No Intelligent-Tiering configuration pushed on the bucket yet.                   | Write-only + Listing   |
| `Locked`    | Archive process asked from user. Waiting for the robot to deal with the request. | Listing                |
| `Archiving` | Archiving in progress on tapes.                                                  | Listing                |
| `Draining`  | Objects stored on tapes and currently being removed from the disks.              | Listing                |
| `Archived`  | Objects archived on tapes only.                                                  | Listing                |
| `Restoring` | Restoration in progress from tapes.                                              | Listing                |
| `Restored`  | Objects restored and accessible.                                                 | Read-only + Listing    |
| `Deleting`  | Objects deletion from tapes (and disks if restored) in progress.                 | Listing                |
| `Flushed`   | Bucket is empty and can safely be removed.                                       | Listing (empty bucket) |

## Go further

Join our community of users on <https://community.ovh.com/en/>.
