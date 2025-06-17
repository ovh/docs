---
title: Object Storage - Scegliere la classe di archiviazione giusta per le tue esigenze (EN)
updated: 2025-06-04
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

### Comparison Table

| Storage Class | Use Cases | Performance (TTFB) | Supported Regions | Availability SLA | Minimum storage duration | Retrieval fee | Granularity |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **High Performance** | AI & Analytics, Datalake, High power Computing Multimedia / Content Platform | milliseconds | 1-AZ | 1-AZ regions: 99,9% | No | No | Object-level, lifecycle management support |
| **Standard** | Media/content storage, datalake, website, backup, logs, application metrics | milliseconds | 1-AZ and 3-AZ | 1-AZ regions: 99,9% - 3-AZ regions: 99,99% | No | No | Object-level, lifecycle management support |
| **Infrequent Access** | Long-term storage, backups, disaster recovery. | milliseconds | 1-AZ and 3-AZ | 1-AZ regions: 99,9% - 3-AZ regions: 99,99% | 30 days | Yes | Object-level, lifecycle management support |
| **Cold Archive** | Very long-term storage, backups, disaster recovery. | hours | 4 dedicated DCs | 99,9% | 90 days | Yes | Bucket-level, no lifeycle management support yet|

More details about available regions [here](/pages/storage_and_backup/object_storage/s3_location).


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
