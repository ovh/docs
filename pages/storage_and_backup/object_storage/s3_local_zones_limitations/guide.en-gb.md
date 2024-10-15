---
title: Object Storage - Local Zones specifications
excerpt: ""
updated: 2024-08-22
---

## Objective

OVHcloud Object Storage in Local Zones provides a scalable, durable, and low-latency solution for storing and accessing unstructured data. Designed to meet the needs of various applications, it offers a robust platform for data storage with specific enhancements for Local Zones to ensure high performance and availability.

## How bucket access is handled

All access keys within a project can access all buckets across all Local Zones.

## Performance classes

- **Standard**: Performance classes in Local Zones are the same as OVHcloud standard performance, ensuring consistency in data handling and access speeds.
- **High Performance**: High-performance storage classes are not available in Local Zones at this time. Only standard storage classes are supported.

Once OVHcloud releases new storage classes, the potential for expanding Local Zones to support high-performance classes will be evaluated.

## Feature Set

The feature sets for Object Storage in regions and Local Zones are mainly the same. However, there are some key differences which are highlighted in [the features matrix on this guide](/pages/storage_and_backup/object_storage/s3_limitations#features-matrix)

## MultiAZ and MonoAZ Specifications

### MultiAZ (Multi-Availability Zone)

- **Overview**: MultiAZ provides high availability and redundancy by distributing data across multiple availability zones within a region. This configuration ensures that data remains accessible even if one availability zone experiences an outage.
- **Availability**: MultiAZ configurations are available in regions but are not currently supported in Local Zones. Local zones focus on providing low-latency access within a single availability zone.

### MonoAZ (Single-Availability Zone)

- **Overview**: MonoAZ stores data within a single availability zone, offering lower latency and higher performance for applications that do not require the high availability provided by MultiAZ.
- **Availability**: MonoAZ configurations are available in Local Zones, making them suitable for use cases that prioritize performance and low latency over cross-zone redundancy.

### Meta-data API (not supported)

- **Overview**: The meta-data API, which allows users to retrieve metadata about their storage, is currently not available in Local Zones. This includes querying the number of buckets and the total size of buckets via the OVHcloud Control Panel or the API.
- **Impact**: Customers cannot easily manage or monitor their storage usage and capacities programmatically in Local Zones.

The OVHcloud development team is working on implementing this API.

### Encryption and Versioning

#### Encryption

- **Current State**: Encryption is not supported in Local Zones, meaning that data is not encrypted at rest by the service.
- **Supported Encryption**: Server-Side Encryption with Customer-Provided Keys (SSeC) is supported. This allows users to encrypt their data before sending it to the object storage service, providing a layer of security.

#### Versioning

- **Current State**: Versioning is supported by API, allowing users to maintain multiple versions of an object in a bucket.
- **Future Plans**: Versioning support will be further integrated into the API later, providing more comprehensive management and control over object versions.

### User Policies (not supported)

- **Overview**: User policies can theoretically be used to grant specific access to users. However, these policies do not alter the access model for Local Zones.
- **Impact**: All access keys within a project have unrestricted access to all buckets in Local Zones, which may not meet all security requirements for some users.
- **Future Plans**: Enhancements to user policy management are being considered for future updates.

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).
