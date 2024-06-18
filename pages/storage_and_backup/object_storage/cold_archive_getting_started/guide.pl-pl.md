---
title: Cold Archive - Getting started with Cold Archive (EN)
excerpt: This guide shows you how to manage your data with Cold Archive
updated: 2024-03-04
---

## Objective

Cold Archive is a service for long-term data storage.
When archived, every object of a bucket is stored on physical tapes.
Restoration can take some time as it needs to be read on tapes.

**This guide explains how to set up storage on tapes with Cold Archive.**

## Requirements

- [Getting started with Object Storage](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage#using-aws-cli)
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
> If you have defined multiple profiles, add `--profile <profile>` to the command line.
>

### Bucket archiving

Before archiving a bucket, make sure there are no incomplete multipart uploads.
This can be done with:

```bash
aws --endpoint-url https://s3.rbx-archive.io.cloud.ovh.net s3api list-multipart-uploads --bucket <bucket_name>
```

#### Archive a bucket

```bash
aws --endpoint-url https://s3.rbx-archive.io.cloud.ovh.net put-ovh-archive <bucket_name>
```

After this request, the bucket is not archived yet.<br>
It will take some time before it is archived on the tapes.<br>
From this command and until a restoration, the bucket cannot accept any read or write requests on objects (listing objects is still allowed).

#### Archive a bucket with retention lock

By default, an archive is not locked i.e you can still delete an archive after it has been written to tapes. To ensure your archive follows the WORM (Write Once Read Many) model, you can set a retention period in your intelligent tiering configuration using the `OVH_ARCHIVE_LOCK` access tier and a number of days. The archive will be then locked until the current date + the number of days specified.

> [!primary]
>
> With the default `OVH_ARCHIVE` access tier, the `Days` attribute has no effect.
> Unlike the previous intelligent tiering configuration, by using the `OVH_ARCHIVE_LOCK` access tier, the `Days` attribute will be taken into account in calculating the lock duration and must be a positive integer.
>

```json
{
    "Id": "myid",
    "Status": "Enabled",
    "Tierings": [
        {"Days": <retention_in_days>, "AccessTier": "OVH_ARCHIVE_LOCK"}
    ]
}
```

> [!primary]
>
> You cannot have multiple intelligent tiering configurations on your archive.
> Similarly, you cannot have multiple access tiers in your intelligent tiering configuration i.e either you use the `OVH_ARCHIVE` access tier or you use the `OVH_ARCHIVE_LOCK` access tier but not both.
>

#### Lock a bucket after it is archived

If you have buckets that have been previously archived without using the `OVH_ARCHIVE_LOCK` access tier, you can still lock them by re-applying an intelligent tiering configuration to your bucket using the `OVH_ARCHIVE_LOCK` access tier and specifying a retention duration in days.

> [!primary]
>
> In order to lock an already archived bucket, it must be in the "Archived" or "Restored" status.
> You must also use the same intelligent tiering configuration "Id".
>

If you want to edit the retention period, similarly, re-apply the intelligent tiering configuration using the same "Id".

> [!primary]
>
> You cannot reduce a previously set retention period i.e the new retention period (current date + number of days) must be higher than the previous retention period.
> Example:
>
> - On 2024-02-22 you have set up a 10 days lock, the retention period will be until the 2024-03-03. 
> - On 2024-02-23, you change your mind and decide to set the lock duration to 5 days. 
> - OVHcloud Cold Archive will return an error because 2024-02-23 + 5 days < 2024-03-03.
>

### Bucket restoring

Restore a bucket:

```bash
aws --endpoint-url https://s3.rbx-archive.io.cloud.ovh.net put-ovh-restore <bucket_name>
```

After this request, the bucket is not restored yet.<br>
It will take some time before it is restored and for the objects to be accessible in read-only (writing objects is forbidden).

### Bucket deletion

> [!primary]
>
> If you have locked your archive, trying to delete it before the end of the retention period will result in a 400 Bad Request error:
> `An error occurred (BadRequest) when calling the DeleteBucketIntelligentTieringConfiguration operation: Archive deletion is locked until 2124-01-19T15:24:56.000Z`
>

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

If you have locked your archive, you can check the retention period using the `get-bucket-tagging command`.

- Example:

```bash
aws --endpoint-url https://s3.rbx-archive.io.cloud.ovh.net s3api get-bucket-tagging --bucket <bucket_name>

{
    "TagSet": [
        {
            "Key": "ovh:intelligent_tiering_status",
            "Value": "Archived"
        },
        {
            "Key": "ovh:intelligent_tiering_archive_lock_until",
            "Value": "2124-01-19T15:24:56.000Z"
        }
    ]
} 
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

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/pl/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.
