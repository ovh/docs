---
title: 'Getting Started with Versioning Using OVHcloud APIs'
excerpt: 'Learn how to enable and manage versioning for your OVHcloud Object Storage buckets using APIs. Future updates will cover the OVHcloud Control Panel.'
updated: 2023-06-30
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

Enabling and suspending versioning is done at the bucket level. Once enabled, all objects in the bucket will receive a unique version ID. Existing objects will have a version ID of null until they are modified.

### How to Enable Versioning

#### Using the AWS CLI

To enable versioning on an S3 Object Storage bucket, use the following command:

```sh
aws s3api put-bucket-versioning --bucket my-bucket --versioning-configuration Status=Enabled

```

## Explanation:

**put-bucket-versioning:** AWS CLI command to configure versioning.  
**--bucket my-bucket:** Replace `my-bucket` with the name of your bucket.  
**--versioning-configuration Status=Enabled:** Enables versioning for the specified bucket.

After enabling versioning, all objects added to the bucket will have a unique version ID. This means that every time an object is modified or deleted, a new version is created, which can be restored if needed.

## How to Suspend Versioning

### Using the AWS CLI

To suspend versioning, set the versioning configuration status to `Suspended`:

```sh
aws s3api put-bucket-versioning --bucket my-bucket --versioning-configuration Status=Suspended
```
## Explanation:

**put-bucket-versioning:** AWS CLI command to configure versioning.  
**--bucket my-bucket:** Replace `my-bucket` with the name of your bucket.  
**--versioning-configuration Status=Suspended:** Suspends versioning for the specified bucket.

Suspending versioning stops new objects from receiving a version ID. Existing objects and their versions remain unchanged, but new objects will not have version IDs until versioning is re-enabled.

## Important Considerations

- **SOAP API:** The SOAP API does not support S3 Versioning.
- **Storage Costs:** Each version of an object is stored as a full object, incurring standard S3 storage costs.
- **Application:** When versioning is enabled, it applies to all objects in the bucket, including those added before versioning was enabled.
- **Suspension:** Suspending versioning does not delete existing versions; it only stops new versions from being created.

## Using S3 Versioning with S3 Lifecycle

You can combine S3 Versioning with S3 Lifecycle policies to manage your data retention and control storage costs. For example, you can set up lifecycle rules to automatically delete older versions of objects after a certain period or transition them to a cheaper storage class. For more information, see [Managing your storage lifecycle](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html).

### Example Lifecycle Configuration:

```json
{
  "Rules": [
    {
      "ID": "Archive old versions",
      "Status": "Enabled",
      "Prefix": "",
      "NoncurrentVersionTransitions": [
        {
          "NoncurrentDays": 30,
          "StorageClass": "GLACIER"
        }
      ]
    },
    {
      "ID": "Delete old versions",
      "Status": "Enabled",
      "Prefix": "",
      "NoncurrentVersionExpiration": {
        "NoncurrentDays": 365
      }
    }
  ]
}

```
This configuration will transition non-current versions to the GLACIER storage class after 30 days and permanently delete them after 365 days.

## Go further
 
Join our community of users on <https://community.ovh.com/en/>.
