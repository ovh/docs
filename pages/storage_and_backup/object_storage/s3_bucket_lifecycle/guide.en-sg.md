---
title: Object Storage - Smart Storage Management with Lifecycle Rules
excerpt: Learn how to optimise your storage costs with OVHcloud lifecycle rules
updated: 2025-01-10
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

**Learn how to optimise your storage costs with OVHcloud lifecycle rules.**

> [!warning]
>
> The feature is currently in beta.
> 
> The release of the feature will be done in 2 phases:
>
> - Phase 1: release of expiration only
> - Phase 2: support for transitions

## Introduction

### What is lifecycle ?

OVHcloud Object Storage bucket lifecycle is a feature that allows you to optimize your storage costs by managing your objects throughout their lifecycle. By uploading a lifecycle configuration to a bucket, you define a set a rules that the object storage solution applies to the objects of the said bucket to perform specific actions.

There are 2 types of actions that OVHcloud Object Storage performs on your objects:

- **expiration**: these actions determine when your objects expire. Expired objects are then automatically deleted.
- **transition**: these actions determine when your objects are transitioned to a lower cost storage tier. For instance, you might want to transition your objects stored in the High Performance to Standard tier after 30 days.

### Examples of use cases

By leveraging the lifecycle configuration feature, you can tell OVHcloud Object Storage to:

- **clean incomplete multi-parts uploads**: suppose you have uploaded a large number of large (>5GB) objects using multi-part uploads, but for some reasons, for many objects, the multi-part upload did not complete successfully. In this scenario, even if you haven't fully uploaded all the parts of an object, you still have to pay for the storage cost of the uploaded parts. In that case, you might want to clean the parts of all the incomplete multi-parts uploads to save money.
- **clean old unused data**: suppose you have an application that stores its logs in a bucket. Your organization might define a log retention policy of 30 days. After that, the logs are no longer needed and you might want to delete them in order to save money.
- **optimize storage costs by transitioning infrequently accessed data to a less expensive storage tier**: suppose you have certain files which are often used for a brief duration before they are hardly used again. Eventually, you might not require immediate access to them, yet your organization or laws might mandate that you keep them for a certain timeframe. Once that period is over, you can then remove them to save money.

### Special considerations

When an object reaches the end of its lifetime based on its lifecycle configuration, the result of transition or expiration actions performed by OVHcloud Object Storage varies according to the versioning state of the bucket:

- **non-versioned**: there is only one existing version of the object which is the current version and it is deleted permanently.
- **versioned**: a delete marker is created and becomes the current version. You can also choose how many old versions you want to keep. If the current object version is the only object version and it is also a delete marker, that delete marker will be removed.
- **versioning-suspended**: we currently do not allow for the suspension of versioning if you have a lifecycle configuration in effect and vice-versa. We currently do not allow for the upload of a lifecycle configuration if versioning is suspended on the bucket.

## Expiration

Lifecycle rules are processed asynchronously and on a best-effort basis. Most rules are applied within 24 hours, but for very large buckets or when processing many objects, it might take longer. During this delay, you continue to be billed for the object's current storage tier, even if the rule (e.g., expiration or transition) has already been triggered but not yet completed. For example, if an object is set to be deleted on day 30 but is only processed on day 32, you may be billed for an additional two days.

### Conflicting expiration dates

Typically, the lifecycle feature is designed to help you optimize your storage costs. For instance, if two expiration rules overlap i.e they target the same set of objects but with different expiration dates, the rule with the shorter duration is applied, ensuring that data is not retained beyond the anticipated timeframe: OVHcloud Object Storage always tries to chose the path that is the most cost-effective for you.

Generally speaking, when you have multiple rules in a bucket lifecycle configuration that apply to the same set of objects:

- Permanent deletion takes precedence over transition.
- Transition takes precedence over creation of delete markers.
- The shorter expiration/transition date takes precedence over the longer one.

### Current vs noncurrent versions

In a versioning-enabled bucket, each object has one current version and zero or more noncurrent versions. When you delete an object:

- If you don't specify a version ID in your delete request, a delete marker is created instead of deleting the object. The current object version becomes non-current, and the delete marker becomes the current version.
- If you specify a version ID in your delete request, the version of the object that is specified is permanently deleted (a delete marker is not created).
- A delete marker with zero noncurrent versions is called an expired object delete marker.

### Configuration

> [!primary]
>
> Version 1 of lifecycle configuration (with Prefix attribute outside of Filter) is deprecated. We tolerate version 1 by automatically transforming the json to match version 2 format. However, we strongly advise you to use only version 2 as described below.
>

/// details | The following is the basic structure of a lifecycle configuration JSON containing expiration rules


```JSON
{
  "Rules": [
    {
      "ID": "string",
      "Status": "Enabled"|"Disabled",
      "Filter": {
        "Prefix": "string",
        "Tag": {
          "Key": "string",
          "Value": "string"
        },
        "ObjectSizeGreaterThan": long,
        "ObjectSizeLessThan": long,
        "And": {
          "Prefix": "string",
          "Tags": [
            {
              "Key": "string",
              "Value": "string"
            }
          ],
          "ObjectSizeGreaterThan": long,
          "ObjectSizeLessThan": long
        }
      },
      "Expiration": {
        "Date": timestamp,
        "Days": integer,
        "ExpiredObjectDeleteMarker": "true"|"false"
      },
      "NoncurrentVersionExpiration": {
        "NoncurrentDays": integer,
        "NewerNoncurrentVersions": integer
      },
      "AbortIncompleteMultipartUpload": {
        "DaysAfterInitiation": integer
      }
    }
  ]
}
```

| Attribute                                           | Required | Description |
| --------------------------------------------------- | -------- | ----------- |
| Rules                                               | yes      | Array of lifecycle rules. |
| ID                                                  | yes      | A unique id for a lifecycle rule. |
| Status                                              | yes      | Tells if a lifecycle rule is enabled or disabled. |
| Filter                                              | yes      | A filter that identifies the subset of objects to which the replication rule applies. To replicate all objects in the bucket, specify an empty object. |
| Filter.Prefix                                       | no       | An object key name prefix that identifies the object or objects to which the rule applies. To include all objects in a bucket, specify an empty string. |
| Filter.Tag                                          | no       | Filter the objects by tag key and/or value. |
| Filter.Tag.Key                                      | no       | Key of the tag filter. |
| Filter.Tag.Value                                    | no       | Value of the tag filter. |
| Filter.ObjectSizeGreaterThan                        | no       | Minimum object size to which the rule applies. |
| Filter.ObjectSizeLessThan                           | no       | Maximum object size to which the rule applies. |
| Filter.And                                          | no       | You can apply multiple selection criteria in the filter. A logical AND applies to multiple filter criteria. |
| Filter.And.Tags                                     | no       | An array of tag filters. All of the tags of the array must exist in the object's tag set in order for the rule to apply. |
| Expiration                                          | yes*     | A lifecycle action that applies a deletion operation to the set of filtered objects. </br></br> ⚠️ Mandatory if Transitions or AbortIncompleteMultipartUpload is not present |
| Expiration.Date                                     | no*      | Indicates the deletion date of the objects. The date value must be in the ISO 8601 date format and the time must always be set to midnight UTC. </br></br> ⚠️ This attribute is not mandatory if Days is present.  </br> ⚠️ this attribute is mutually exclusive with Days i.e you either have Date or Days but you cannot specify both. |
| Expiration.Days                                     | yes*     | Indicates the duration in days after which the objects are to be deleted. The value must be an integer equal to or greater than 1. </br></br> ⚠️ This attribute is mandatory if Date is not present. </br> ⚠️ this attribute is mutually exclusive with Date i.e you either have Date or Days but you cannot specify both. |
| Expiration.ExpiredObjectDeleteMarker                | no       | Tells if OVHcloud Object Storage should immediately remove delete markers with no noncurrent versions aka expired delete markers. </br></br> ⚠️ You cannot specify Days or Date with ExpiredObjectDeleteMarker in the same rule. When you specify the Days/Date, expired delete markers are automatically deleted like normal objects when they satisfy the age criteria. ExpiredObjectDeleteMarker is used to clean up delete markers as soon as they become the only version, you have to create a separate rule with only ExpiredObjectDeleteMarker attribute in Expiration. </br> ⚠️ When you use the ExpiredObjectDeleteMarker lifecycle action, the rule cannot specify a tag-based filter. |
| NoncurrentVersionExpiration                         | no       | A lifecycle action that indicates when noncurrent object versions should be deleted. This action does not affect the current versions. It only deletes the versions that are not current. |
| NoncurrentVersionExpiration.NoncurrentDays          | no       | Indicates the number of days before a noncurrent version is eligible to deletion after they became noncurrent i.e the minimum age of a noncurrent version. </br> Example: </br></br> Suppose you have an object A with 10 versions: </br> - A v10 (current version, creation date: 2024-10-23) </br> - A v9 (noncurrent version, creation date: 2024-10-22) </br> - A v8 (noncurrent version, creation date: 2024-10-21) </br> - A v7 (noncurrent version, creation date: 2024-10-20) </br> - A v6 (noncurrent version, creation date: 2024-10-19) </br> - A v5 (noncurrent version, creation date: 2024-10-18) </br> - A v4 (noncurrent version, creation date: 2024-10-17) </br> - A v3 (noncurrent version, creation date: 2024-10-16) </br> - A v2 (noncurrent version, creation date: 2024-10-15) </br> - A v1 (noncurrent version, creation date: 2024-10-14) </br></br> If current date is 2024-10-23 and **NoncurrentDays**=5, the lifecycle rule will delete the noncurrent versions older than 5 days i.e v1, v2, v3, v4 and v5. |
| NoncurrentVersionExpiration.NewerNoncurrentVersions | no       | Indicates the number of most recent noncurrent versions to retain. Maximum is 100. </br></br> Example: </br> Suppose you have an object B with 10 versions: </br> - B v10 (current version, creation date: 2024-10-23) </br> - B v9 (noncurrent version, creation date: 2024-10-22) </br> - B v8 (noncurrent version, creation date: 2024-10-21) </br> - B v7 (noncurrent version, creation date: 2024-10-20) </br> - B v6 (noncurrent version, creation date: 2024-10-19) </br> - B v5 (noncurrent version, creation date: 2024-10-18) </br> - B v4 (noncurrent version, creation date: 2024-10-17) </br> - B v3 (noncurrent version, creation date: 2024-10-16) </br> - B v2 (noncurrent version, creation date: 2024-10-15) </br> - B v1 (noncurrent version, creation date: 2024-10-14) </br></br> If **NewerNoncurrentVersions**=3, the lifecycle rule will delete all the noncurrent versions except the 3 most recent i.e v9, v8 and v7. |
| AbortIncompleteMultipartUpload                      | no       | A lifecycle action that applies a delete operation on parts of an incomplete multipart upload. |
| AbortIncompleteMultipartUpload.DaysAfterInitiation  | no       | Indicates the number of days after which all the parts of all incomplete multipart uploads are deleted and aborts the underlying multipart uploads. |

///

### Get the scheduled expiration date

If an object is scheduled to be deleted, a HEAD-OBJECT call will return a special http response header x-amz-expiration that contains a timestamp indicating its expiry date and an id of the lifecycle rule that has been applied.

The header format is: `x-amz-expiration: expiry-date=<timestamp>, rule-id=<rule-id>`

- expire-date: is obtained by adding the creation date and the delay from expiration
- rule-id: the matched rule id triggering the deletion

**Example**: Get expiration date via direct http API call

```http
HEAD /{key}
Host: {bucket}.s3.{region}.io.cloud.ovh.net
...
 
HTTP/1.1 200 OK
...
x-amz-expiration: expiry-date="Fri, 21 Dec 2024 00:00:00 GMT", rule-id="123456789"
```

**Example**: Get expiration date via the cli

```bash
~$ aws s3api head-bucket --bucket $bucket --key $object_name
{
  ...
  "Expiration" : "expiry-date=\"Fri, 21 Dec 2024 00:00:00 GMT\", rule-id=\"123456789\"",
  ...
}
```

### Examples of expiration configurations

/// details | Delete all objects in a non-versioned bucket

Since the bucket is non-versioned, the following configuration will permanently delete all objects in the bucket after 30 days:

```JSON
{
  "Rules": [
    {
      "ID": "123456",
      "Status": "Enabled",
      "Filter": { },
      "Expiration": {
        "Days": 30
      }
    }
  ]
}
```

///

/// details | Abort incomplete multipart uploads

The following configuration will direct OVHcloud Object Storage to abort all incomplete multipart uploads identified by the prefix "/mpus" and delete the parts already uploaded within 7 days after their initiation:

```JSON
{
  "Rules": [
    {
      "ID": "123456",
      "Status": "Enabled",
      "Filter": {
        "Prefix": "/mpus"
      },
      "AbortIncompleteMultipartUpload": {
        "DaysAfterInitiation": 7
      }
    }
  ]
}
```

///

/// details | Expire objects in a non-versioned bucket with overlapping prefixes

In the following configuration, there are 2 lifecycle rules:

- The rule "123456" permanently deletes all objects prefixed "old" 30 days after their creation.
- The rule "456789" permanently deletes all objects prefixed "old/logs" 65 days after their creation.

The same set of objects are eligible to both lifecycle rule. In this case, the first rule will apply after 30 days and the second rule will then be ignored because the objects will have already been removed.

```JSON
{
  "Rules": [
    {
      "ID": "123456",
      "Status": "Enabled",
      "Filter": {
        "Prefix": "/old"
      },
      "Expiration": {
        "Days": 30
      }
    },
    {
      "ID": "456789",
      "Status": "Enabled",
      "Filter": {
        "Prefix": "/old/logs"
      },
      "Expiration": {
        "Days": 65
      }
    }
  ]
}
```

///

/// details | Expire objects in a non-versioned bucket with overlapping tags

In the following configuration, there are 2 lifecycle rules:

- The rule "123456" permanently deletes all objects tagged "age" with value "old" 30 days after their creation.
- The rule "456789" permanently deletes all objects tagged "type" with value "logs" 65 days after their creation.

If an object has both tags i.e if an object is tagged "age" with value "old" and "type" with value "logs", the first rule will apply after 30 days and the second rule will then be ignored because the object will have already been removed.

```JSON
{
  "Rules": [
    {
      "ID": "123456",
      "Status": "Enabled",
      "Filter": {
        "Tag": {
           "Key": "age",
           "Value": "old"
        }
      },
      "Expiration": {
        "Days": 30
      }
    },
    {
      "ID": "456789",
      "Status": "Enabled",
      "Filter": {        
        "Tag": {
           "Key": "type",
           "Value": "logs"
        }       },
      "Expiration": {
        "Days": 65
      }
    }
  ]
}
```

///

/// details | Expire objects in a versioned bucket

In a versioned bucket, the following configuration does the following actions:

- after 45 days, it automatically expires all the objects with prefix "old/" by creating delete markers for each of the current object versions: the current version becomes noncurrent, and the delete marker becomes the current version.
- all 15+ days old noncurrent versions of the selected objects are then deleted except for the 3 most recent noncurrent versions. If there are less than 3 noncurrent versions, the NoncurrentVersionExpiration action will not be applied.

```JSON
{
  "Rules": [
    {
      "ID": "123456",
      "Status": "Enabled",
      "Filter": {
        "Prefix": "old/"
      },
      "Expiration": {
        "Days": 45
      },
      "NoncurrentVersionExpiration": {
        "NoncurrentDays": 15,
        "NewerNoncurrentVersions": 3
      }
    }
  ]
}
```

///

## Transition

### Supported transitions

> [!warning]
>
> Only transitions from a higher cost storage tier to a lower cost storage tier are allowed. Additionally, all transitions to Cold Archive are currently not supported.

The following are the currently supported transitions:

| from/to          | High Performance | Standard  | Cold Archive |
| ---------------- | ---------------- | --------- | ------------ |
| High Performance |        -         | yes       | no           |
| Standard         | forbidden        | -         | no           |
| Cold Archive     | forbidden        | forbidden | -            |

### Minimum object size

OVHcloud Object Storage will prevent any transition to any storage tier for objects smaller than **128KB**.

### Minimum transition delay

The minimum duration for transition rules is **30 days** i.e your lifecycle configuration will not be valid and you will get an error if the number of days for your transition rule is less than 30 days. In practice, it means that the lifecycle feature will only consider objects older than **30 days**.

### Expiration vs transitions

As already mentioned before, when you have multiple rules in a bucket lifecycle configuration that apply to the same set of objects:

- Permanent deletion takes precedence over transition
- Transition takes precedence over creation of delete markers
- The shorter expiration/transition date takes precedence over the longer one

### Configuration

/// details | The following is the basic structure of a lifecycle configuration JSON containing transition rules:

```JSON
{
  "Rules": [
    {   
       ...
         
       "Transitions": [
           {
             "Date": timestamp,
             "Days": integer,
             "StorageClass": "STANDARD"
           }
        ],
       "NoncurrentVersionTransitions": [
          {
              "NoncurrentDays": integer,
              "StorageClass": "STANDARD",
              "NewerNoncurrentVersions": integer
          }
       ]
    }
  ]
}
```

| Attribute                                            | Required | Description 
| ---------------------------------------------------- | -------- | ------------
| Transitions                                          | yes*     | An array of lifecycle operations that automatically copy all selected objects from their current storage tier to a most-effective storage tier. |
| Transitions.Date                                     | no*      | Indicates the date when the objects are to be transitioned. The date value must be in the ISO 8601 date format and the time must always be set to midnight UTC. </br></br> ⚠️ This attribute is not mandatory if Days is present. </br> ⚠️ this attribute is mutually exclusive with Days i.e you either have Date or Days but you cannot specify both. |
| Transitions.Days                                     | yes*     | Indicates the duration in days after which the objects are to be transitioned. The value must be an integer equal to or greater than 30. </br></br> ⚠️ This attribute is mandatory if Date is not present. </br> ⚠️ this attribute is mutually exclusive with Date i.e you either have Date or Days but you cannot specify both. |
| Transitions.StorageClass                             | yes      | Indicates the target Storage class. Currently, only "STANDARD" is available. |
| NoncurrentVersionTransitions                         | no       | An array of lifecycle actions that indicate when noncurrent object versions should be transitioned. These actions do not affect the current versions. They only transition the versions that are not current. |
| NoncurrentVersionTransitions.NoncurrentDays          | no       | Indicates the number of days before a noncurrent version is eligible to transition after they became noncurrent i.e the minimum age of a noncurrent version. |
| NoncurrentVersionTransitions.NewerNoncurrentVersions | no       | Indicates the number of most recent noncurrent versions to retain in their current storage tier. Maximum is 100. |

///

### Examples of transition configurations

/// details | Transition objects in a non-versioned bucket

The following configuration will transition all objects with prefix "old" from the High Performance storage tier to the Standard storage tier (EXPRESS_ONEZONE to STANDARD) 30 days after their creation.

```JSON
{
  "Rules": [
    {
      "ID": "123456",
      "Status": "Enabled",
      "Filter": {
        "Prefix": "old/"
      },      
      "Transitions": [
        {
          "Days": 30,
          "StorageClass": "STANDARD"
        }
      ]
     }
  ]
}
```

///

/// details | Transition objects in a versioned bucket

The following configuration specifies the following actions:

- the current version of all objects will be transitioned from the High Performance tier to the Standard tier 30 days after their creation.
- if the objects have noncurrent versions, all the noncurrent versions older than 5 days will be transitioned from the High Performance tier to the Standard tier.

In this scenario, suppose you upload an object with multiple versions:

- v5 (current version, creation date 2024-10-23)
- v4 (current version, creation date 2024-10-23)
- v3 (current version, creation date 2024-10-22)
- v2 (current version, creation date 2024-10-18)
- v1 (current version, creation date 2024-10-17)

If the current date is 2024-10-23:

- v5 will be transitioned 30 days after 2024-10-23
- v1 will be transitioned since it has been a noncurrent version for 5 days already

```JSON
{
  "Rules": [
    {
      "ID": "123456",
      "Status": "Enabled",
      "Filter": { },      
      "Transitions": [
        {
          "Days": 30,
          "StorageClass": "STANDARD"
        }
      ],
      "NoncurrentVersionTransitions": [
        {
          "NoncurrentDays": 5,
          "StorageClass": "STANDARD"
        }
       ]
     }
  ]
}
```

///

/// details | Mix of expiration and transition

The following lifecycle configuration applies to all objects with prefix "old" and tag "type" with value "logs". It specifies the following actions:

- 30 days after their creation, the objects will be transitioned from High Performance to Standard tier.
- 90 days after their creation, the objects will be deleted.

In this scenario, the objects will be stored in the High Performance tier for 30 days and then 60 days in the Standard tier before being finally deleted.

```JSON
{
  "Rules": [
    {
      "ID": "123456",
      "Status": "Enabled",
      "Filter": {
        "Prefix": "old/",
        "Tag": {
          "Key": "type",
          "Value": "logs"
        }
      },
      "Expiration": {
        "Days": 90,
      },      
      "Transitions": [
        {
          "Days": 30,
          "StorageClass": "STANDARD"
        }
      ]
    }
  ]
}
```

///

/// details | Mix of expiration and transition rules with conflicting rules

The following lifecycle configuration is uploaded to a non-versioned bucket. It defines 2 rules that apply to all objects with prefix "old" and tag "type" with value "logs":

- 90 days after their creation, the objects will be expired
- 90 days after their creation, the objects will be transitioned

In this scenario, there are two rules that direct OVHcloud Object Storage to perform two different actions on the same set of objects at the same time. Since permanent deletion takes precedence over transition, the objects are removed after 90 days and there is no further point in changing the storage class.

```JSON
{
  "Rules": [
    {
      "ID": "123456",
      "Status": "Enabled",
      "Filter": {
        "Prefix": "old/",
        "Tag": {
          "Key": "type",
          "Value": "logs"
        }
      },
      "Expiration": {
        "Days": 90,
      }
    },
    {
      "ID": "456789",
      "Status": "Enabled",
      "Filter": {
        "Prefix": "old/",
        "Tag": {
          "Key": "type",
          "Value": "logs"
        }
      },
      "Transitions": [
        {
          "Days": 90,
          "StorageClass": "STANDARD"
        }
      ]
    }
  ]
}
```

///

## Instructions

### Using the CLI

As a prerequisite, you must have a bucket containing data on which you want to apply the lifecycle configuration and have the necessary permissions (by default the bucket owner or the **s3:putLifecycleConfiguration** permission given via a user access policy) to do so.

/// details | Create a lifecycle configuration file using your favorite editor.

**Example**: the following configuration aims to empty a bucket after 30 days.

```bash
$ cat lifecycle.json
{
  "Rules": [
    {
      "ID": "123456",
      "Status": "Enabled",
      "Filter": { },
      "Expiration": {
        "Days": 20,
      },
      "NoncurrentVersionExpiration": {
        "NoncurrentDays": 10
      }
    },
    {
      "ID": "654789",
      "Status": "Enabled",
      "Filter": { },
      "Expiration": {
        "ExpiredObjectDeleteMarker": true,
      }
    },
    {
      "ID": "963852",
      "Status": "Enabled",
      "Filter": { }
      "AbortIncompleteMultipartUpload": {
        "DaysAfterInitiation": 10
      }
    }
  ]
}
```

Upload the file to the bucket:

```bash
$ aws s3api put-bucket-lifecycle-configuration --bucket my-bucket --lifecycle-configuration file://lifecycle.json
```

///

### Using the OVHcloud Control Panel (coming soon)

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).
