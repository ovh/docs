---
title: "OPCP - Object Storage features and specifications"
excerpt: "Discover the specifications of Object Storage for OVHcloud OPCP, with information on bucket access, performance classes, encryption and versioning."
updated: 2025-11-12
---

> [!primary]
>
> Please note that this information may change prior to General Availability (GA). Our current estimate for GA is **March 2026**. We will make every effort to keep you informed of any updates, but we recommend checking this guide regularly for the latest information. Thank you for your understanding.
>

## Objective

OVHcloud Object Storage in **OPCP** provides a scalable, durable, and low-latency solution for storing and accessing unstructured data.  Designed to meet the needs of various applications, it offers a robust platform for data storage with OPCP-specific optimizations to ensure high performance and availability.

## How is bucket access managed?

All access keys of a project can access all buckets in OPCP.

## Performance classes

- **Standard**: the performance classes in OPCP are the same as the standard performance of OVHcloud, ensuring consistency in data processing and access speeds.
- **High Performance**: High Performance storage classes are not available in OPCP at the moment. Only Standard classes are supported.

Support for High Performance classes in OPCP may be considered in the future by OVHcloud.

## Features

The features of Object Storage in OPCP are mainly the same as in OVHcloud regions. Some important differences are detailed in [the comparison table in this guide](/pages/storage_and_backup/object_storage/s3_s3_compliancy).

## MultiAZ and MonoAZ specifications

### MultiAZ (Multi-availability zone)

- **Overview**: MultiAZ ensures high availability and redundancy by distributing data across multiple availability zones within the same region, guaranteeing data access even in the event of a zone failure.
- **Availability**: MultiAZ configurations are available in regions but are not supported in OPCP, which focuses on low-latency access within a single zone.

### MonoAZ (Single-availability zone)

- **Overview**: MonoAZ stores data in a single availability zone, offering **reduced latency and high performance** for applications that do not require MultiAZ redundancy.
- **Availability**: MonoAZ is supported in OPCP, suitable for use cases prioritizing performance and low latency.

### Metadata API (unavailable)

- **Overview**: The metadata API, which allows retrieving storage information, is not available in OPCP. This includes the number of buckets and total size via the customer area or API.
- **Impact**: Users cannot track or manage their storage usage programmatically in OPCP.  

Our teams are working on the future integration of this API.

### Encryption and versioning

#### Encryption

- **Current status**: Encryption at rest is not supported in OPCP.
- **Supported encryption**: Client-side encryption (SSeC) is available, allowing users to encrypt their data before sending it to the Object Storage service.

#### Versioning

- **Current status** : versioning is supported by the API, allowing the management of multiple versions of an object in a bucket.
- A more comprehensive versioning integration will be proposed in future API updates.

### User policies (unavailable)

- **Overview**: *User policies* can theoretically control access, but they do not affect the OPCP model.
- **Impact**: All access keys of a project have unlimited access to all OPCP buckets, which may not meet certain security requirements.  

Improvements for user policy management are planned for future updates.

## Go further

If you need training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to request a quote and have your project analyzed by our Professional Services team experts.

Join our [community of users](/links/community).