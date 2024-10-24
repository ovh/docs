---
title: Object Storage - Technical Limitations
excerpt: Find here the technical limits of the S3 Object Storage offer
updated: 2024-10-24
---

## Objective

This page provides an overview of the technical limitations of the OVHcloud S3 Object Storage offer.

## Performance

### Maximum bandwidth per connection

1 Gbps/connection.

As **OVHcloud S3 Object Storage** is a highly distributed system, using **parallel requests** will help overcome this limitation. Depending on your application and use case, this can be accomplished by simultaneously initiating requests (also called concurrent requests). 

Discover how to maximize your performance with [this guide](/pages/storage_and_backup/object_storage/s3_performance_optimization).

### Maximum number of write requests per second on a bucket

300 (beyond this number, the quality of service is no longer guaranteed).

This maximum value is a soft limit and can be easily overcome by adopting best practices to distribute the I/Os as widely as possible in the object storage cluster, taking advantage of the **sharding mechanism**.

Discover how to maximize your performance with [this guide](/pages/storage_and_backup/object_storage/s3_performance_optimization).

## Bucket limitations

### Maximum number of buckets per project

- 100 (default)
- 1000 (requires a manual intervention, please [contact the support teams](https://help.ovhcloud.com/csm?id=csm_get_help))

### Maximum number of objects in a bucket

Unlimited

### Name assignment

- Must be between 3 and 63 characters long.
- Must begin and end with lowercase alphanumeric characters (a to z and 0 to 9).
- Must be unique within OVHcloud.
- May contain the following punctuation marks: `.` and `-`.
- Must not contain multiple punctuation marks in a row (e.g. `..` or `-.` or `.-` or `--`).
- Must not look like an IP address (e.g. 192.168.1.1).

## Object limitations

### Maximum size per object / mpu / part

#### Via a single PUT

Maximum 5 GB per object (for an object which size is above 5GB, use a multi-part upload).

#### Via a multi-part upload (MPU)

- The size for a single part must be between 5MB (minimum) and 5GB (maximum)
- 10000 parts maximum in a mpu

The theoretical maximum size of a single large object uploaded via MPU is thus 48TB.

## Project lmimitations

### Maximum number of user accounts per project

1,000

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).
