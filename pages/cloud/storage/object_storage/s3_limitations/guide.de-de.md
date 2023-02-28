---
title: Object Storage - Technische Grenzen (EN)
slug: s3/limitations
excerpt: Find here the technical limits of the S3 Object Storage offer
section: General information
order: 025
routes:
    canonical: 'https://docs.ovh.com/gb/en/storage/s3/limitations/'
updated: 2022-03-31
---

**Last updated 1st March 2023**

## Objective

This page provides an overview of the technical limitations of the S3 Object Storage offer.

### Maximum number of buckets per project

100

### Maximum number of objects in a bucket

Unlimited

### Maximum bandwidth per connection

1 Gbps / connection

### Maximum number of write requests per second on a bucket

300 (beyond that, the quality of service is no longer guaranteed)

### Maximum size per object / mpu / part

- Maximum 5 GB per object
- 10000 parts maximum in a mpu
- 5MB is the minimum size for a part

### Maximum number of user accounts per project

1,000

### Name assignment

- Must be between 3 and 63 characters long.
- Must begin and end with lower case alphanumeric characters (a to z and 0 to 9).
- Must be unique within the same OVHcloud region.
- May contain the following punctuation marks: "." and "-".
- May not contain multiple punctuation marks in a row ("." or " -." or ".-" or " --").
- May not look like an IP address (192.168.1.1).

## Go further

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
