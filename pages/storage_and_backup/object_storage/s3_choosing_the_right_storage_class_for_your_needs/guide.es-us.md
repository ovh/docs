---
title: Object Storage - Elegir la clase de almacenamiento adecuada para sus necesidades (EN)
updated: 2024-11-25
---

Object Storage is a family of storage solutions that offer high-performance, scalable and secure storage spaces.

With object storage solutions, you can store static files (videos, images, web files...) in an unlimited space via a public access point, called an endpoint. You can use these files from an application, or you can make them accessible on the web. These storage spaces are accessible via an API interface.

## The object storage offers are:

### Object Storage - Standard class (S3 **\*** compatible)

The Standard storage class offers a scalable object storage service, compatible with the vast majority of use cases, adapted to any type of volume. The solution is based on HDD storage within a resilient architecture in a datacentre. The solution is accessible via S3 compatible API.

This offer is suitable for the following use cases: media/content storage & delivery, datalake, website, backup, logs and application metrics.

> [!primary]
> The Standard storage class is available on both **1-AZ and 3-AZ** regions. More details about available regions [here](/pages/storage_and_backup/object_storage/s3_location).

### Object Storage - High Performance class (S3 compatible)

The High Performance storage class is a high-performance object storage space for applications that have high bandwidth requirements and require extremely fast and intensive read and write access to data. The solution relies on storage on high-performance NVMe SSD disks, within a resilient architecture in a datacentre. The solution is accessible via an S3 API.

This offer is suitable for the following use cases: AI & Analytics, Datalake, High power Computing Multimedia / Content Platform.

> [!primary]
> The High Performance storage class is available on **1-AZ regions** only. More details about available regions [here](/pages/storage_and_backup/object_storage/s3_location).

## The SWIFT object storage offers are:

### Standard object storage - SWIFT API

The Standard storage class (SWIFT) offers a data storage service with no particular need for performance, within a resilient architecture by triple replication of data within the same datacentre. The solution is accessible via a SWIFT API and an Amazon S3 compatible API (less compatible than the new Object Storage solutions (Standard/High Performance)).

### Cloud Archive - SWIFT API

The Cloud Archive (SWIFT) storage class offers a storage service for long-term data retention for business needs or other obligations. Adapted to suit this use case, the service offers low storage costs and several minutes of latency for data recovery. The solution is accessible via a SWIFT API.

## All storage classes are accessible through the standard API

| Storage Class | Offer lifecycle management | Standard access via Amazon S3 API | OpenStack access via SWIFT API |
| ------ | ------ | ------ | ------ |
| Object Storage - Standard class (S3 compatible) | Last generation of solutions | yes | no |
| Object Storage - High Performance class (S3 compatible) | Last generation of solutions | yes | no |
| Swift Standard Object Storage  | Close listing end | partial | yes |
| Cloud Archive - SWIFT API | Close listing end | no | yes |

The list of all API endpoints can be found [here](/pages/storage_and_backup/object_storage/s3_location).

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).

**\***: S3 is a trademark of Amazon Technologies, Inc. OVHcloud’s service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies, Inc.
