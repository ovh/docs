---
title: 'Getting Started with Versioning Using OVHcloud APIs'
excerpt: 'Learn how to enable and manage versioning for your OVHcloud Object Storage buckets using APIs. Future updates will cover the OVHcloud Control Panel.'
updated: 2024-06-26
---

## Objective

**This guide explains how to enable and manage versioning for your OVHcloud Object Storage buckets using APIs.**

## Requirements

- A Public Cloud project in your OVHcloud account
- Access to the OVHcloud Control Panel
- An S3 user already created
- AWS CLI installed and configured

## Instructions

### Concept

Versioning in Object Storage allows you to keep multiple variants of an object in the same bucket. This feature helps preserve, retrieve, and restore every version of every object stored in your buckets, making it easier to recover from unintended user actions or application failures. By default, versioning is disabled on buckets, and you must explicitly enable it.

### General Information

An Object Storage bucket can be in one of three states:

1. **Unversioned** (default state): No versions are kept for the objects.
2. **Versioning-enabled**: Multiple versions of each object are kept.
3. **Versioning-suspended**: Versions are not created for new objects, but existing versions are retained.

![bucket versioning states](https://confluence.ovhcloud.tools/download/attachments/123456789/Bucket_Versioning_States.png?version=1&modificationDate=1568362102000&api=v2)

/!\ Once versioning is enabled, it cannot be disabled; it can only be suspended.

Enabling and suspending versioning is done at the bucket level. Once enabled, all objects in the bucket will receive a unique version ID. Existing objects will have a version ID of null until they are modified.

### How Versioning Works

Versioning adds a layer of protection to your data by keeping multiple versions of an object in the same bucket. When you enable versioning for a bucket, every object in the bucket gets a unique version ID. This means that every time an object is modified or deleted, a new version is created, and the old version is retained. This allows you to recover previous versions of an object if necessary.

- **Uploading new objects:** A unique version ID is assigned to each object.
- **Modifying objects:** A new version ID is generated, and the previous version is retained.
- **Deleting objects:** The deletion operation creates a delete marker but does not remove the previous versions. The object can be restored by removing the delete marker.

### How to Enable Versioning

#### Using the AWS CLI

To enable versioning on an S3 Object Storage bucket, use the following command:

```sh
aws s3api put-bucket-versioning --bucket my-bucket --versioning-configuration Status=Enabled
```

**Explanation:**

- **put-bucket-versioning:** AWS CLI command to configure versioning.
- **--bucket my-bucket:** Replace `my-bucket` with the name of your bucket.
- **--versioning-configuration Status=Enabled:** Enables versioning for the specified bucket.

After enabling versioning, all objects added to the bucket will have a unique version ID. This means that every time an object is modified or deleted, a new version is created, which can be restored if needed.

### How to Suspend Versioning

#### Using the AWS CLI

To suspend versioning, set the versioning configuration status to `Suspended`:


```sh
aws s3api put-bucket-versioning --bucket my-bucket --versioning-configuration Status=Suspended
```

**Explanation:**

- **put-bucket-versioning:** AWS CLI command to configure versioning.
- **--bucket my-bucket:** Replace `my-bucket` with the name of your bucket.
- **--versioning-configuration Status=Suspended:** Suspends versioning for the specified bucket.

Suspending versioning stops new objects from receiving a version ID. Existing objects and their versions remain unchanged, but new objects will not have version IDs until versioning is re-enabled.

### Important Considerations

- **Storage Costs:** Each version of an object is stored as a full object, incurring standard S3 storage costs.
- **Application:** When versioning is enabled, it applies to all objects in the bucket, including those added before versioning was enabled.
- **Suspension:** Suspending versioning does not delete existing versions; it only stops new versions from being created.
- **Permissions:** Only the bucket owner can enable or suspend versioning.

## Go Further

Join our community of users on <https://community.ovh.com/en/>.
