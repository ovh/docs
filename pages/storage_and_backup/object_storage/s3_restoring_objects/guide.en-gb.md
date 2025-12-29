---
title: Object Storage - Restoring an archived object from Cold Archive storage class
excerpt: Restore objects from Cold Archive storage class
updated: 2025-11-19
---

## Objective

Find out how to restore an object from the Cold Archive tier in OVHcloud S3<sup>1</sup>-compatible Object Storage.

## Requirements

- A [Public Cloud project](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project) in your OVHcloud account
- Access to the [OVHcloud Control Panel](/links/manager)
- An [Object Storage user](/pages/storage_and_backup/object_storage/s3_identity_and_access_management) already created

## Context and considerations

The **Cold Archive** storage class is an archival storage class. Also existing on its own as [a dedicated product at OVHcloud](/pages/storage_and_backup/object_storage/cold_archive_getting_started) (bucket-level granularity), Cold Archive is now also available as an Object Storage class in a general-purpose Object Storage container.

Objects in a Cold Archive storage class **must be restored** before they are available for download. Moreover, the Cold Archive storage class has a minimum storage duration and additional fees to consider:

Objects in a Cold Archive storage class **must be restored** before they are available for download. Moreover the Cold Archive storage class has a minimum storage duration and additional fees to consider:

- The minimum storage duration for Cold Archive is 180 days. If an object is deleted during this period, an additional charge will be applied (prorated cost of storing the object for the full 180 days).
- When a restoration request is made, users are asked to set a period of time (in *days*) during which the requested objects are available to download and are billed upfront at the Standard class rate.
- Once a restoration request is made, it is not possible to add another restoration request with a shorter period of time. The first request can't be preempted.
- If you are using [multipart upload (MPU)](/pages/storage_and_backup/object_storage/s3_performance_optimization), you need to know that in-progress multipart parts are billed at Standard class rate until you complete the upload.
- There are no storage overhead charges.

Restore process can take up to 48 hours depending on the size of the objects. Download action is then available when the restore process is done.

You can restore an object in the Cold Archive storage class by using the [OVHcloud Control Panel](/links/manager), OVHcloud APIs or by using the Amazon S3 REST API or CLI. 

## Restoring an archived object

> [!tabs]
> Via the OVHcloud Control Panel
>> Click on `Object Storage`{.action} in the navigation bar on the left and then on the `My containers`{.action} tab.
>>
>> In the list of objects, click on the `...`{.action} button associated to the object you want to restore, and then click `Restore`{.action}.
>>
>> You can also monitor the status of your restoration in the list of objects view, through a dedicated status.
>> 
> Via the OVHcloud API
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/region/{regionName}/storage/{name}/object/{key}/restore
>> 
> Via AWS CLI
>>
>> ```bash
>> aws s3api restore-object --bucket <bucket-name> --key <object-name> --restore-request '{"Days":10}'
>> ```
>>
>> > [!primary]
>> >
>> > Cold Archive does not support the `GlacierJobParameters` from the S3 API. When restored, objects remained in the Cold Archive class from an object storage class point-of-view but are available for download.  
>> > Cold Archive class is mapped with `DEEP_ARCHIVE` AWS S3 tier. To know more about mapping between OVHcloud Object Storage tiers and AWS S3 tiers, please read the [Endpoints and Object Storage geoavailability](/pages/storage_and_backup/object_storage/s3_location) guide.
>> > 
>> >
>> You can also monitor the status of your restoration:
>>
>> ```bash
>> aws s3api head-object --bucket <bucket-name> --key <object-name>
>> ```
>>

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).

<sup>1</sup>: S3 is a trademark of Amazon Technologies, Inc. OVHcloud’s service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies, Inc.