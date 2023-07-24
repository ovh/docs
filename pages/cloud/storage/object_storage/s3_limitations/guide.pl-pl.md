---
title: Object Storage - Ograniczenia techniczne (EN)
excerpt: Find here the technical limits of the S3 Object Storage offer
routes:
    canonical: '/pages/cloud/storage/object_storage/s3_limitations'
updated: 2023-06-01
---

**Last updated 1st June 2023**

## Objective

This page provides an overview of the technical limitations of the S3 Object Storage offer.

### Maximum number of buckets per project

- 100 (default)
- 1000 (requires a manual intervention, please contact the support teams)

### Maximum number of objects in a bucket

Unlimited

### Maximum bandwidth per connection

1 Gbps / connection

### Maximum number of write requests per second on a bucket

300 (beyond that, the quality of service is no longer guaranteed)

### Maximum size per object / mpu / part

#### Via a single PUT

Maximum 5 GB per object (for an object which size is above 5GB, use a multi-part upload).

#### Via a multi-part upload (MPU)

- The size for a single part must be between 5MB (minimum) and 5GB (maximum)
- 10000 parts maximum in a mpu

The theoretical maximum size of a single large object uploaded via MPU is thus 48TB.

### Maximum number of user accounts per project

1,000

### Name assignment

- Must be between 3 and 63 characters long.
- Must begin and end with lower case alphanumeric characters (a to z and 0 to 9).
- Must be unique on OVHcloud.
- May contain the following punctuation marks: "." and "-".
- Must not contain multiple punctuation marks in a row (".." or " -." or ".-" or " --").
- Must not look like an IP address (192.168.1.1).

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/pl/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
