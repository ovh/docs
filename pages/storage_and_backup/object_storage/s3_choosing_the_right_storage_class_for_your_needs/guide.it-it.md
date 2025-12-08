---
title: Object Storage - Scegliere la classe di archiviazione giusta per le tue esigenze (EN)
excerpt: Discover the different OVHcloud Object Storage classes and choose the one that best suits your needs
updated: 2025-11-19
---

Object Storage is a family of storage solutions that offer high-performance, scalable and secure storage spaces.

With object storage solutions, you can store static files (videos, images, web files...) in an unlimited space via a public access point, called an endpoint. You can use these files from an application, or you can make them accessible on the web. These storage spaces are accessible via an API interface.

We offer two Object Storage solutions: our **latest generation S3<sup>1</sup>-compatible Object Storage**, which is generally available, and our **established SWIFT Object Storage**, which remains a supported option for users. However, we recommend using the S3-compatible Object Storage solution for newly designed applications as it benefits from the latest features.

## S3 compatible Object Storage tiers

Our **S3 compatible Object Storage classes** are tailored to meet specific requirements for your workloads including overall performance, availability and resiliency levels, access time and costs. 

### Object Storage - Standard class (S3 compatible)

The Standard storage class offers a scalable object storage service, compatible with the vast majority of use cases, adapted to any type of volume. The solution is based on HDD storage within a resilient architecture in a datacentre. The solution is accessible via S3 compatible API.

This offer is suitable for the following use cases: media/content storage & delivery, datalake, website, backup, logs and application metrics.

### Object Storage - High Performance class (S3 compatible)

The High Performance storage class is a high-performance object storage space for applications that have high bandwidth requirements and require extremely fast and intensive read and write access to data. The solution relies on storage on high-performance NVMe SSD disks, within a resilient architecture in a datacentre.

This offer is suitable for the following use cases: AI & Analytics, Datalake, High power Computing Multimedia / Content Platform.

### Object Storage - Infrequent Access class (S3 compatible)

The Infrequent Access storage class is designed for infrequently accessed data, also known as "cool" data storage, requiring fast data retrieval. It offers similar performance (ms TTFB, low latency) and availability than Standard Object Storage but with a lower cost per GiB-hour and a per GiB retrieval fee.

This offer is suitable for the following use cases: long-term storage, backups, disaster recovery.

### Object Storage - Cold Archive class (S3 compatible)

The Cold Archive storage class is an archival storage class. Also existing on its own as [a dedicated product at OVHcloud](/pages/storage_and_backup/object_storage/cold_archive_getting_started) (bucket-level granularity), Cold Archive is also available as a class in a general-purpose object storage container. Cold Archive is designed for long-term data storage and data archiving with a very low cost per GiB-hour and per GiB restore fee. Indeed, data in the Cold Archive class is not available in real-time and needs to be restored before being available.


### Comparison Table

<table>
    <tr>
        <td><strong>Storage Class<strong></td>
        <td><strong>Use Cases<strong></td>
        <td><strong>Performance (TTFB)<strong></td>
        <td><strong>Supported Regions<strong></td>
        <td><strong>Availability SLA<strong></td>
        <td><strong>Minimum storage duration<strong></td>
        <td><strong>Retrieval fee<strong></td>
        <td><strong>Granularity<strong></td>
    </tr>
    <tr>
        <td><strong>High Performance<strong></td>
        <td>AI &amp; Analytics, Datalake, High power Computing Multimedia / Content Platform</td>
        <td>milliseconds</td>
        <td>1-AZ</td>
        <td>1-AZ regions: 99,9%</td>
        <td>No</td>
        <td>No</td>
        <td>Object-level, lifecycle management support</td>
    </tr>
    <tr>
        <td><strong>Standard<strong></td>
        <td>Media/content storage, datalake, website, backup, logs, application metrics</td>
        <td>milliseconds</td>
        <td>1-AZ and 3-AZ</td>
        <td>1-AZ regions: 99,9% - 3-AZ regions: 99,99%</td>
        <td>No</td>
        <td>No</td>
        <td>Object-level, lifecycle management support</td>
    </tr>
    <tr>
        <td><strong>Infrequent Access<strong></td>
        <td>Long-term storage, backups, disaster recovery</td>
        <td>milliseconds</td>
        <td>1-AZ and 3-AZ</td>
        <td>1-AZ regions: 99,9% - 3-AZ regions: 99,99%</td>
        <td>30 days</td>
        <td>Yes</td>
        <td>Object-level, lifecycle management support</td>
    </tr>
    <tr>
        <td><strong>Cold Archive*<strong></td>
        <td>Very long-term storage, backups, disaster recovery</td>
        <td>hours</td>
        <td>Paris, 3-AZ region</td>
        <td>99,9%</td>
        <td>180 days</td>
        <td>Yes</td>
        <td>Object-level, lifeycle management support</td>
    </tr>
   </table>

More details about available regions [here](/pages/storage_and_backup/object_storage/s3_location).

> [!primary]
>
> Before November 2025, Cold Archive only existed with a bucket-level granularity, as [a dedicated product at OVHcloud](/pages/storage_and_backup/object_storage/cold_archive_getting_started). The product has been updated to allow object-level granularity and Cold Archive is now considered as a class of Object Storage compatible with [**lifecycle management feature**](/pages/storage_and_backup/object_storage/s3_bucket_lifecycle).
>

### Additional details

#### Minimum storage duration

It refers to the **minimum amount of time that an object must be stored in a particular storage class**. In case of early deletion, using *delete-object* requests, a pro-rated fee equal to the remaining days is applied. Be careful with non-versioned buckets, if the object is overwritten, this will be considered as a deletion of the current object version and the pro-rated fee will be applied too.

For example, for the Infrequent Access class, the minimum storage time is 730 hours (30 days). If an object is deleted during this period, an additional charge will be applied and calculated using the following formula: [730h - # of hours of storage of the object] x price per hour of storage class.

#### Retrieval fee

It refers to a **charge that is applied when you retrieve or access data that is stored in a particular storage class**. The retrieval fee is calculated based on the amount of data retrieved (per GiB retrieved).

For the Infrequent Access class, only *get-object* requests are considered as retrieval fee.

For our Cold Archive class, only *restore* requests are considered as retrieval fee.

#### Lifecycle management support

It refers to the ability to **automatically manage the storage lifecycle of your objects**, such as transitioning them from one storage class to another, based on predefined rules and policies. This allows you to optimize storage costs and simplify data management. Object-level granularity is required because it allows you to manage at the individual object level. **Lifecycle transition requests are free of charge.**

More details about lifecycle management [here](/pages/storage_and_backup/object_storage/s3_bucket_lifecycle).

#### Cold Archive (Object-level management) class considerations

When using the Cold Archive class in an Object Storage general-purpose bucket, **archived objects are not available in real-time**. The user is asked to first restore the object through a "restore" request and then, after some time (from minutes up to multiple hours), the object is available to download for a duration set by the user when requesting it and is billed upfront at the Standard class rate. However its class will remain as Cold Archive but will be available for GET requests or other actions. In summary, for each object restored, a one time restoration fee per GiB of data plus the storage cost at the Standard rate of the object are billed.

For official prices, see our page "[Object Storage pricing](https://www.ovhcloud.com/en-gb/public-cloud/prices/#storage)".

## OpenStack SWIFT Object Storage tiers

### Standard object storage - SWIFT API

The Standard storage class (SWIFT) offers a data storage service with no particular need for performance, within a resilient architecture by triple replication of data within the same datacentre. The solution is accessible via a SWIFT API and an Amazon S3 compatible API (less compatible than the new Object Storage solutions (Standard/High Performance)).

### Cloud Archive - SWIFT API

The Cloud Archive (SWIFT) storage class offers a storage service for long-term data retention for business needs or other obligations. Adapted to suit this use case, the service offers low storage costs and several minutes of latency for data recovery. The solution is accessible via a SWIFT API.

## All storage classes are accessible through the standard API

| Storage Class | Compatibility | Availability | Status |
| ------ | ------ | ------ | ------ |
| Object Storage - High Performance class | S3-compatible | General Availability | Latest Generation |
| Object Storage - Standard class | S3-compatible | General Availability | Latest Generation |
| Object Storage - Infrequent Access class | S3-compatible | General Availability | Latest Generation |
| Swift Standard Object Storage | OpenStack SWIFT | Supported | Established Solution |
| Cloud Archive - SWIFT API | OpenStack SWIFT | Supported | Established Solution |

The list of all API endpoints can be found [here](/pages/storage_and_backup/object_storage/s3_location).

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).

<sup>1</sup>: S3 is a trademark of Amazon Technologies, Inc. OVHcloud’s service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies, Inc.
