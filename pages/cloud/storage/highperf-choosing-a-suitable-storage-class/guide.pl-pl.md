---
title: Wybór odpowiedniej klasy pamięci do swoich potrzeb (EN)
slug: s3/choosing-the-right-storage-class-for-your-needs
section: Object Storage S3 High Performance
order: 005
routes:
    canonical: 'https://docs.ovh.com/gb/en/storage/s3/choosing-the-right-storage-class-for-your-needs/'
---

**Last updated September 27<sup>th</sup>2022**

Object Storage is a family of storage solutions that offer high-performance, scalable and secure storage spaces.

With object storage solutions, you can store static files (videos, images, web files...) in an unlimited space via a public access point, called an endpoint. You can use these files from an application, or you can make them accessible on the web. These storage spaces are accessible via an API interface.

## The S3 object storage offers are:

### Standard object storage - S3 API

The Standard storage class offers a scalable object storage service, compatible with the vast majority of use cases, adapted to any type of volume. The solution is based on HDD storage within a resilient architecture in a datacentre. The solution is accessible via an S3 API.

This offer is suitable for the following use cases: media/content storage & delivery, datalake, website, backup, logs and application metrics.

### High Performance object storage - S3 API

The High Performance storage class is a high-performance object storage space for applications that have high bandwidth requirements and require extremely fast and intensive read and write access to data. The solution relies on storage on high-performance NVMe SSD disks, within a resilient architecture in a datacentre. The solution is accessible via an S3 API.

This offer is suitable for the following use cases: AI & Analytics, Datalake, High power Computing Multimedia / Content Platform.

## The SWIFT object storage offers are:

### Standard object storage - SWIFT API

The Standard storage class (SWIFT) offers a data storage service with no particular need for performance, within a resilient architecture by triple replication of data within the same datacentre. The solution is accessible via a SWIFT API and an S3 API (less compatible than the new Object Storage S3 solutions).

### Cloud Archive - SWIFT API

The Cloud Archive (SWIFT) storage class offers a storage service for long-term data retention for business needs or other obligations. Adapted to suit this use case, the service offers low storage costs and several minutes of latency for data recovery. The solution is accessible via a SWIFT API.

## All storage classes are accessible through the standard API

| Storage Class | Offer lifecycle management | Standard access via S3 API | OpenStack access via SWIFT API |
| ------ | ------ | ------ | ------ |
| Standard object storage - S3 API | Last generation of solutions | yes | no |
| High Performance object storage - S3 API | Last generation of solutions | yes | no |
| Standard object storage - SWIFT API  | Close listing end | partial | yes |
| Cloud Archive - SWIFT API | Close listing end | no | yes |

## Go further

Join our community of users on <https://community.ovh.com/en/>.
