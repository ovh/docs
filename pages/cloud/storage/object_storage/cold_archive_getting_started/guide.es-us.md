---
title: Cold Archive - Getting started with Cold Archive (EN)
routes:
    canonical: '/pages/cloud/storage/object_storage/cold_archive_getting_started'
excerpt: This guide shows you how to manage your data with Cold Archive
updated: 2023-08-09
---

## Objective

Cold Archive is a service for long-term data storage.
When archived, every object of a bucket is stored on physical tapes.
Restoration can take some time as it needs to be read on tapes.

**This guide explains how to set up storage on tapes with Cold Archive.**

## Requirements

- [Getting started with Object Storage](/pages/cloud/storage/object_storage/s3_getting_started_with_object_storage#using-aws-cli)
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
> - `Id` is a string used to identify the S3 Intelligent-Tiering configuration. Its value is arbitrary and up to you. It will be necessary for further PUT, GET and DELETE operations on the intelligent-tiering configuration.
>
> - `Status` and `Days` are mandatory but not used.
>

To retrieve an Intelligent tiering configuration, use the get-bucket-intelligent-tiering-configuration command:

```bash
aws s3api get-bucket-intelligent-tiering-configuration --bucket example-bucket --id myid
```

```json
{
    "Id": "myid",
    "Status": "Enabled",
    "Tierings": [
        {"Days": 999, "AccessTier": "OVH_ARCHIVE"}
    ]
}
```


> [!primary]
>
> The plugin `awscli-plugin-endpoint` is not working with aliases, the parameter `--endpoint-url` will be required in every command.
>

> [!primary]
>
> If you have defined multiple profiles, add `--profile <profile>` to the command line.
>

### Bucket archiving

Before archiving a bucket, make sure there are no incomplete multipart uploads.
This can be done with:

```bash
aws --endpoint-url https://s3.rbx-archive.io.cloud.ovh.net s3api list-multipart-uploads --bucket <bucket_name>
```

Archive a bucket:

```bash
aws --endpoint-url https://s3.rbx-archive.io.cloud.ovh.net put-ovh-archive <bucket_name>
```

After this request, the bucket is not archived yet.<br>
It will take some time before it is archived on the tapes.<br>
From this command and until a restoration, the bucket cannot accept any read or write requests on objects (listing objects is still allowed).

### Bucket restoring

Restore a bucket:

```bash
aws --endpoint-url https://s3.rbx-archive.io.cloud.ovh.net put-ovh-restore <bucket_name>
```

After this request, the bucket is not restored yet.<br>
It will take some time before it is restored and for the objects to be accessible in read-only (writing objects is forbidden).

### Bucket deletion

Delete an intelligent-tiering configuration and objects of a bucket:

```bash
aws --endpoint-url https://s3.rbx-archive.io.cloud.ovh.net delete-ovh-archive <bucket_name>
```

After this request, the objects of the bucket are not deleted yet as the deletion is done asynchronously.<br>
The operation will delete everything (on tapes and all objects if restored) and the bucket status will be in a "Deleting" status.<br>
Once the deletion is completed:

- The bucket status will be "Flushed".
- In this state, the bucket still exists (but is empty and does not contain any objects) and data has been removed from the tapes.
- The bucket can be released and you can remove your bucket:

```bash
aws s3 rb s3://<bucket_name>
```

### Bucket status

Once an intelligent-tiering configuration has been pushed (via a `put-bucket-intelligent-tiering-configuration` operation) and until it is removed (via a `delete-bucket-intelligent-tiering-configuration` operation), the status of a bucket is readable through:

```bash
aws --endpoint-url https://s3.rbx-archive.io.cloud.ovh.net s3api get-bucket-tagging --bucket <bucket_name>
```

#### List of bucket statuses

| Status      | Description                                                                      | Objects permissions    |
|-------------|----------------------------------------------------------------------------------|------------------------|
| `None`      | No Intelligent-Tiering configuration pushed on the bucket yet.                   | All                    |
| `Archiving` | Archiving in progress on tapes.                                                  | Listing                |
| `Archived`  | Objects archived on tapes only.                                                  | Listing                |
| `Restoring` | Restoration in progress from tapes.                                              | Listing                |
| `Restored`  | Objects restored and accessible.                                                 | Read-only + Listing    |
| `Deleting`  | Objects deletion from tapes (and disks if restored) in progress.                 | Listing                |
| `Flushed`   | Bucket is empty and can safely be removed.                                       | Listing (empty bucket) |

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/es/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.
