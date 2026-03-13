---
title: Object Storage - Límites técnicos (EN)
excerpt: Find here the technical limits of the Object Storage offer
updated: 2026-03-13
---

## Objective

This page provides an overview of the technical limitations of the OVHcloud Object Storage offer.

## Performance

### Maximum bandwidth per connection

1 Gbps/connection.

As **OVHcloud Object Storage** is a highly distributed system, using **parallel requests** will help overcome this limitation. Depending on your application and use case, this can be accomplished by simultaneously initiating requests (also called concurrent requests). 

Discover how to maximize your performance with [this guide](/pages/storage_and_backup/object_storage/s3_performance_optimization).

### Default maximum number of write and read requests per second on a bucket

- PUT: 300 requests per second
- GET: 900 requests per second

It is important to note that these maximum values are "soft limits" and can be easily overcome by adopting best practices to distribute the I/Os as widely as possible in the object storage cluster, taking advantage of the **sharding mechanism**. Indeed, a gradual ramp-up of requests allows you to maximize performance and capitalize on the native sharding of the infrastructure. In other words, limitations can be overcome through a good distribution of the names of the prefixes/object keys and reach multiple thousands of requests per second both in read and write.

Discover how to maximize your performance with [this guide](/pages/storage_and_backup/object_storage/s3_performance_optimization).

## Service default quotas and limitations

| Resource | Default quota | Additional Details |
| --- | --- | --- |
| **Maximum number of buckets per project** | 100 | Up to 1,000 buckets through [support requests](https://help.ovhcloud.com/csm?id=csm_get_help) |
| **Maximum number of objects in a bucket** | unlimited | - |
| **Part size** | From 5 MiB to 5 GiB | - |
| **Maximum parts per MPU** | 10,000 | - |
| **Maximum Object size** | 48 TiB | This maximum can be achieved using Multi-Part Upload (MPU), via a single PUT request, the maximum object size is 5 GiB |
| **Maximum number of users per project** | 1,000 | - |
| **Maximum lifecycle rules** | 1,000 | Understanding [lifecycle rules](/pages/storage_and_backup/object_storage/s3_bucket_lifecycle) |
| **Maximum replication rules** | 1,000 | Understanding [bucket replication](/pages/storage_and_backup/object_storage/s3_asynchronous_replication) |
| **Maximum bucket tags** | 50 | - |
| **Maximum object tags** | 10 | - |
| **Maximum number of versions per object** | 100,000 | Beyond this value, a 403 error is returned with MaxVersionsReached code. Understanding [object versioning](/pages/storage_and_backup/object_storage/s3_versioning) |


### Bucket and object name assignment

- Must be between 3 and 63 characters long.
- Must begin and end with lower case alphanumeric characters (a to z and 0 to 9).
- Must be unique within OVHcloud.
- May contain the following punctuation marks: `.` and `-`.
- Must not contain multiple punctuation marks in a row (e.g. `..` or `-.` or `.-` or `--`).
- Must not look like an IP address (192.168.1.1).

### Features availability

Read our guide on [Object Storage - Compatibility](/pages/storage_and_backup/object_storage/s3_s3_compliancy).

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).
