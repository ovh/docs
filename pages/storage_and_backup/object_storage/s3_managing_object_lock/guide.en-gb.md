---
title: Object Storage - Managing object immutability with Object Lock (WORM)
excerpt: Object Lock is a feature that allows you to store objects using a Write Once, Read Many (WORM) model
updated: 2025-03-25
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objective

Object Lock is a feature that allows you to store objects using a **W**rite **O**nce, **R**ead **M**any (WORM) model and can be used for scenarios where it is imperative that data is not changed or deleted after it has been written.

**This guide explains how to manage Object Lock**

## Concept

Object Lock provides two ways to manage object retention. The first is *retention periods* and the second is *Legal hold*.

### How does Object Lock work ?

Object Lock allows objects to be made immutable for a defined period (*Retention*) or indefinitely (*Legal hold*).

For the feature to work, versioning must be enabled on the bucket.

> [!primary]
>
> To use Object Lock, versioning must be activated.
>

### Retention periods

A retention period defines the length of time an object remains locked. During this period, the object is protected and cannot be modified or deleted. Retention can be defined in days or years, with a minimum of one day and no maximum limit.

When defining a retention period for a bucket or its objects, you must choose the retention mode to apply: **Governance** or **Compliance**.

#### Governance mode

**Governance** mode prevents most users from deleting or modifying objects during the retention period, while allowing certain users with specific rights to manage retention or delete objects.

Authorized users with `s3:BypassGovernanceRetention` can thus replace or delete objects in **Governance** mode.

> [!primary]
> 
> **Best practice:** Use **Governance** mode when you want to protect your data while maintaining operational flexibility for specific administrative roles.
>

#### Compliance mode

**Compliance** mode ensures that objects cannot be modified or deleted by any user, including administrators, during the entire retention period.

Once this mode is enabled for an object, its retention mode and duration cannot be changed.

> [!primary]
>
> **Best practice:** Only use **Compliance** mode if you need to ensure strict immutability for compliance or regulatory purposes.
>

> [!warning]
>
> Compliance mode should only be selected if no user, including the administrator, should be able to delete or modify objects during the retention period.
>

### Legal hold

Designed for any situation where you are not sure for how long you want your objects to stay immutable, Legal hold is an ON/OFF switch that can be applied to every object in a locked bucket, independently from the lock configuration, the object retention or the object age. It can be applied to objects which are locked.

Legal hold provides the same protection as a retention period, but it has no expiration date. Instead, a Legal hold remains in place until you explicitly remove it.

## Requirements

- Your Object Storage credentials (access_key and secret_access_key)
- Aws cli installed and configured

See our [Getting started with Object Storage](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage) guide for more information.

## Instructions

> [!primary]
>
> All the following examples will use aws cli.
>
> To learn more about aws cli, please read this [guide](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage).
>

### Permissions

| Name | Description |
|:--|:--|
| `s3:GetObjectRetention` | Allows users to view an object retention mode and retention period |
| `s3:PutObjectRetention` | Allows users to place an object retention configuration on an object |
| `s3:GetObjectLegalHold` | Allows users to view an object Legal hold status |
| `s3:PutObjectLegalHold` | Allows users to place a Legal hold on an object |
| `s3:GetBucketObjectLockConfiguration` | Allows users to view a bucket's default retention configuration |
| `s3:PutBucketObjectLockConfiguration` | Allows users to place an Object Lock configuration on the specified bucket  |
| `s3:BypassGovernanceRetention` | Allows users to bypass the Governance mode |

*Read this [guide](/pages/storage_and_backup/object_storage/s3_identity_and_access_management) to learn more about IAM.*

### Object Lock configuration

> [!primary]
>
> Enabling Object Lock does not automatically apply to existing or future objects in the bucket. It only enables the feature at the bucket level; a retention configuration must then be defined for objects to be effectively protected.
>
> This action also enables versioning of the bucket.
>

> [!tabs]
> Via AWS cli
>> To use Object Lock, you have to create a bucket that supports the feature with the `--object-lock-enabled-for-bucket` flag. If a bucket is created without `--object-lock-enabled-for-bucket`, the flag cannot be added later.
>>
>> ```bash
>> aws s3api create-bucket \
>>   --bucket object-lock-bucket \
>>   --object-lock-enabled-for-bucket
>> ```
>>
> Via the OVHcloud Control Panel
>> To manage an Object Storage bucket, first log in to your [OVHcloud Control Panel](/links/manager) and open your `Public Cloud`{.action} project.
>>
>> Click on `Object Storage`{.action} in the navigation bar, then click on `Create object container`{.action}.
>>
>> When creating an Object Storage bucket, a dedicated step allows you to enable Object Lock in order to store objects in WORM (Write Once, Read Many) mode.
>>
>> Once Object Lock is enabled, the setting is irreversible for the bucket concerned. All stored objects are therefore guaranteed to remain immutable until the end of the defined retention period.
>>

### How to configure Object Lock on bucket

The lock configuration enables you to set a lock configuration on a specified bucket. Once set, the rule specified in the Object Lock configuration is applied by default to every new object placed in the specified bucket.

> [!tabs]
> Via AWS cli
>> ```bash
>> aws s3api put-object-lock-configuration \
>>     --bucket object-lock-bucket \
>>     --object-lock-configuration '{ "ObjectLockEnabled": "Enabled", "Rule": { "DefaultRetention": { "Mode": "GOVERNANCE", "Days": 60 }}}'
>> ```
>>
>> To view the Object Lock configuration of a bucket, run:
>>
>> ```bash
>> aws s3api get-object-lock-configuration \
>>    --bucket object-lock-bucket
>> ```
>>
>> The result should look like this:
>>
>> ```json
>> {
>>   "ObjectLockConfiguration": {
>>     "ObjectLockEnabled": "Enabled",
>>     "Rule": {
>>       "DefaultRetention": {
>>         "Mode": "GOVERNANCE",
>>         "Days": 60
>>       }
>>     }
>>   }
>> }
>> ```
>>
> Via the OVHcloud Control Panel
>> To manage an Object Storage bucket, first log in to your [OVHcloud control panel](/links/manager) and open your `Public Cloud`{.action} project.
>>
>> Click on `Object Storage`{.action} in the navigation bar, then on the `My containers`{.action} tab, and then on the `name of your container`{.action}.
>>
>> From the `General Information`{.action} tab, click `Configure Retention`{.action}, enable retention, and then set the applicable retention mode and period. Next, click the `Save`{.action} button.
>>

### How to configure an Object Lock retention period on an object

> [!primary]
>
> Before configuring an Object Lock retention period on an object, ensure that the appropriate permissions are granted. Specifically, the user must have the `s3:PutObjectRetention` action allowed in their IAM policy to set the retention period successfully.
>

To set an object retention configuration on an object:

```bash
aws s3api put-object-retention \
       --bucket object-lock-bucket \
       --key test.txt \
       --retention '{ "Mode": "COMPLIANCE", "RetainUntilDate":
"2023-01-01T12:00:00.00Z" }'
```

> [!primary]
>
> The date format is standard iso8601: `Y-m-dTH:M:S.%3fZ`
>

To view the Object Lock retention configuration of an object, run:

```bash
aws s3api get-object-retention \
   --bucket object-lock-bucket \
   --key test.txt
```

The result should look like this:

```json
{
  "Retention": {
  "Mode": "COMPLIANCE",
  "RetainUntilDate": "2023-01-01T12:00:00Z"
  }
}
```

#### Bypassing Governance mode

> [!primary]
>
> If you have the `s3:BypassGovernanceRetention` permission, you can perform operations on object versions that are locked in governance mode as if they were unprotected.
>

To bypass governance mode, you must explicitly indicate in your request that you want to bypass this mode. To do this, include the `--bypass-governance-retention` header with your request:

```bash
aws s3api delete-object \
  --bucket object-lock-bucket \
  --key test.txt \
  --bypass-governance-retention
```

### How to configure an Object Lock Legal hold on an object

> [!primary]
>
> Before placing an object under Legal Hold, ensure that the necessary permissions are granted. The user must have the `s3:PutObjectLegalHold` permission to apply or remove a Legal Hold.
>

To set a Legal hold configuration to the specified object:

```bash
aws s3api put-object-legal-hold \
  --bucket object-lock-bucket \
  --key test.txt \
  --legal-hold Status=ON
```

To view the Object Lock Legal hold configuration of an object, run:

```bash
aws s3api get-object-legal-hold \
  --bucket object-lock-bucket \
  --key test.txt
```

The result should look like this:

```json
{
  "LegalHold": {
    "Status": "ON"
  }
}
```

### Object Lock and Object Deletion

When versioning is enabled, deleting an object does not delete the object immediately but creates a **delete flag**. This flag becomes the current version of the object with a new ID.

A delete flag:

- Has a key and version ID like any other object.
- Does not contain data (GET returns 404).
- Is not displayed by default in the customer area.
- Can only be manipulated by DELETE, by the bucket owner.

The **Object Lock** feature prevents objects from being:

- Deleted even with a version ID (returns `Access Denied`).
- Overwritten by versioning.

#### How deletions work with Object Lock

When Object Lock is enabled and an object is protected by a retention period or legal hold, deletion attempts behave differently depending on the type of request:

/// details | **Deletion with version ID (permanent DELETE)**

- Deletion is blocked during the retention period.
- The response returned is 403 Forbidden (Access denied).
- This protection applies to all users, even administrators, depending on the retention mode.

To permanently delete an object, you must specify the version ID in your request:

```bash
aws s3api delete-object --bucket my-bucket --key an-object --version-id 123456huijw0
```

> [!primary]
>
> This command will fail if the object is protected by Object Lock in Compliance or Governance mode without the appropriate bypass.
>

///

/// details | **Deletion without version ID (simple DELETE)**
- The request returns 200 OK.
- A deletion token is created in the bucket and becomes the current version of the object.
- The object remains protected by the retention period.

**Note:** Deletion markers and access errors can be managed via the corresponding APIs/CLIs.

///

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).
