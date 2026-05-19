---
title: 'Object Storage - Getting Started with Versioning'
excerpt: 'Learn how to enable and manage versioning for your OVHcloud Object Storage buckets using APIs'
updated: 2026-04-14
---

## Objective

**This guide explains how to enable and manage versioning for your OVHcloud Object Storage buckets using APIs.**

## Requirements

- A [Public Cloud project](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project) in your OVHcloud account
- An [Object Storage user](/pages/storage_and_backup/object_storage/s3_identity_and_access_management) already created
- [AWS CLI installed and configured](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage)

<!-- CP-NAV-START:publiccloud-projects -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Navigation path:** `Public Cloud`{.action} > Select your project

---
<!-- CP-NAV-END:publiccloud-projects -->

## Instructions

### Concept

Versioning lets you keep multiple variants of an object in the same bucket. This feature helps preserve, retrieve, and restore every version of every object stored in your buckets, making it easier to recover from unintended user actions or application failures. By default, versioning is disabled on buckets, and you must explicitly enable it.

### General information

An Object Storage bucket can be in one of three states:

1. **Unversioned** (default state): No versions are kept for the objects.
2. **Versioning-enabled**: Multiple versions of each object are kept.
3. **Versioning-suspended**: Versions are not created for new objects, but existing versions are retained.

> [!warning]
> Once versioning is enabled, it cannot be disabled, it can only be suspended.

![Versioning States](images/versionning.png){.thumbnail}

Enabling and suspending versioning is done at the bucket level. Once enabled, all objects in the bucket will receive a unique version ID. Existing objects will have a version ID of null until they are modified.

#### How versioning works

Versioning adds a layer of protection to your data by keeping multiple versions of an object in the same bucket. When you enable versioning for a bucket, every object in the bucket gets a unique version ID. This means that every time an object is modified or deleted, a new version is created, and the old version is retained. This allows you to recover previous versions of an object if necessary.

- **Uploading new objects:** A unique version ID is assigned to each object.
- **Modifying objects:** A new version ID is generated, and the previous version is retained.
- **Deleting objects:** The deletion operation creates a delete marker but does not remove the previous versions. The object can be restored by removing the delete marker.

#### Version IDs

Each object has a unique version ID, whether or not versioning is enabled. In a versioning-enabled bucket, this version ID distinguishes one version from other versions of the same object.

- **Current version:** The most recently created version of an object (with the most recent `LastModifiedDate` metadata value).
- **Noncurrent versions:** Versions previously created (with their own unique version IDs).

When versioning is not enabled:

- There are no noncurrent versions as OVHcloud Object Storage will always overwrite the current version with the latest created version when you PUT the same object (i.e., with the same key).

![Versioning Disabled](images/Withversioningdisabled.png){.thumbnail}

- If you delete an object, it will be permanently deleted as only one version of your object exists at any given time.

![Permanent Deletion Without Versioning](images/Withversioningdisabled2.png){.thumbnail}

### With versioning enabled

When versioning is enabled:

- Each time you upload the same object, a noncurrent version of the object is created, and the latest created version becomes the current version. Old versions are kept, and data is protected from accidental deletions or application failures. You can retrieve them anytime.

![Versioning Enabled](images/Withversioningenabled.png){.thumbnail}

- If you delete an object, by default, OVHcloud will create a Delete Marker (DM) as the new current version, and all previous versions remain. The object is thus considered "deleted," and a GET object operation on that object will return a 404 error.

![Delete Marker With Versioning](images/Withversioningenabled2.png){.thumbnail}

- You can still download or delete a specific version of an object by specifying a version ID. Deleting an object by specifying a version number is irreversible.

![Downloading or Deleting Specific Versions](images/Withversioningenabled3.png){.thumbnail}

### How to enable versioning

> [!tabs]
> Via AWS CLI
>> To enable versioning on an Object Storage bucket, use the following command:
>>
>> ```sh
>> aws s3api put-bucket-versioning --bucket my-bucket --versioning-configuration Status=Enabled
>> ```
>>
>> **Explanations:**
>>
>> - `put-bucket-versioning`: AWS CLI command to configure version management.
>> - `--bucket my-bucket`: replace `my-bucket` with the name of your bucket.
>> - `--versioning-configuration Status=Enabled`: enable versioning for the specified bucket.
>>
>> After enabling versioning, all objects added to the bucket will have a unique version identifier. This means that each time an object is modified or deleted, a new version is created, which can be restored if necessary.
>>
> Via the OVHcloud Control Panel
>> There are two ways to activate versioning on an Object Storage bucket:
>>
>> - When creating a bucket, enable the versioning option in the corresponding step.
>>
>> - For an existing bucket, you can modify its settings from the OVHcloud Control Panel, in the `General information`{.action} tab.
>>

### How to suspend versioning

> [!tabs]
> Via AWS CLI
>> To suspend versioning, set the versioning configuration status to `Suspended`:
>>
>> ```sh
>> aws s3api put-bucket-versioning --bucket my-bucket --versioning-configuration Status=Suspended
>> ```
>>
>> **Explanations:**
>>
>> - `put-bucket-versioning`: AWS CLI command to configure versioning.
>> - `--bucket my-bucket`: replace `my-bucket` with the name of your bucket.
>> - `--versioning-configuration Status=Suspended`: suspend versioning for the specified bucket.
>>
>> Suspending versioning prevents new objects from receiving a version identifier. Existing objects and their versions remain unchanged, but new objects will not have version identifiers until versioning is reactivated.
>>

### Manage and access object versions

#### View object versions

> [!tabs]
> Via the OVHcloud Control Panel
>> You can display or hide object versions in an Object Storage bucket by clicking the `See versions`{.action} button in the `Objects`{.action} tab.
>>

#### View the different versions of an object

> [!tabs]
> Via the OVHcloud Control Panel
>> To view the different versions of an object, click the object in the `Objects`{.action} tab. You will be redirected to a page showing its details. To see the available versions, click the `Versions`{.action} tab.
>>

#### Download a current or previous version of an object

> [!tabs]
> Via the OVHcloud Control Panel
>> From the main page of your Object Storage bucket (if version display is enabled) or from the `Versions`{.action} tab on the object details page (see previous step), you can download the desired version by clicking the `...`{.action} button, then `Download`{.action}.
>>

### Object deletion: simple, permanent deletion and Delete Marker management

> [!primary]
>
> If versioning is enabled on your Object Storage bucket, deleting an object adds a Delete Marker: the object disappears from the default view, but remains visible via the `See versions`{.action} option.
>
> This protection allows you to restore an object deleted by mistake.
>

> [!tabs]
> Via the OVHcloud Control Panel
>> From the `Objects`{.action} tab of your Object Storage bucket, you can delete an object by clicking the `trash can`{.action} button.
>>
>> To permanently delete a specific version, click the object, then go to the `Versions`{.action} tab, click the `...`{.action} button, select `Delete`{.action}, and confirm the permanent deletion.
>>
>>
> Via the AWS CLI
>> To delete an object, use the following command:
>>
>> ```bash
>> aws s3api delete-object --bucket <bucket_name> --key <object_key>
>> ```
>>
>> If you want to see the different versions of an object, use the following command:
>>
>> ```bash
>> aws s3api list-object-versions --bucket <bucket_name> --prefix <object_key>
>> ```
>>
>> To delete a specific version of an object:
>>
>> ```bash
>> aws s3api delete-object --bucket <bucket_name> --key <object_key> --version-id <version_id>
>> ```
>>
>> To delete a delete marker and recover your object version:
>>
>> - List delete markers and identify the version ID of the delete marker:
>>
>> ```bash
>> aws s3api list-object-versions --bucket <bucket_name> --prefix <object_key> \
>>   --query "DeleteMarkers" --output json
>> ```
>>
>> - Delete this delete marker:
>>
>> ```bash
>> aws s3api delete-object \
>>   --bucket <bucket_name> \
>>   --key <object_key> \
>>   --version-id <delete_marker_version_id>
>> ```
>>

### Important considerations

- **Storage Costs:** Each version of an object is stored as a full object, incurring Standard Object Storage costs.
- **Application:** When versioning is enabled, it applies to all objects in the bucket, including those added before versioning was enabled.
- **Suspension:** Suspending versioning does not delete existing versions, it only stops new versions from being created.
- **Permissions:** Only the bucket owner can enable or suspend versioning.

## Go further

Join our [community of users](/links/community).
