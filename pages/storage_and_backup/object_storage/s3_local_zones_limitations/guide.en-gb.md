---
title: Object Storage - Local Zones limitations
excerpt: ""
updated: 2024-08-07
---

<style>
td:nth-of-type(2) {
  white-space:nowrap;
}
</style>

## Objective

OVHcloud Object Storage in Local Zones provides a scalable, durable, and low-latency solution for storing and accessing unstructured data. Designed to meet the needs of various applications, it offers a robust platform for data storage with specific enhancements for local zones to ensure high performance and availability.

## How bucket access is handled

All access keys within a project can access all buckets across all local zones. 

## Performance classes

**Standard**: Performance classes in local zones are the same as OVH's standard performance, ensuring consistency in data handling and access speeds.

**High Performance**: High-performance storage classes are not available in local zones at this time. Only standard storage classes are supported.

## Feature Set

The feature sets for object storage in regions and local zones are mainly the same. However, there are some key differences which are highlighted in [the matrix below](#features-matrix)

## MultiAZ and MonoAZ Specifications

### MultiAZ (Multi-Availability Zone)

- **Overview**: MultiAZ provides high availability and redundancy by distributing data across multiple availability zones within a region. This configuration ensures that data remains accessible even if one availability zone experiences an outage.
- **Availability**: MultiAZ configurations are available in regions but are not currently supported in local zones. Local zones focus on providing low-latency access within a single availability zone.

### MonoAZ (Single-Availability Zone)

- **Overview**: MonoAZ stores data within a single availability zone, offering lower latency and higher performance for applications that do not require the high availability provided by MultiAZ.
- **Availability**: MonoAZ configurations are available in local zones, making them suitable for use cases that prioritize performance and low latency over cross-zone redundancy.

### Missing meta-data api 

- **Overview**: The meta-data API, which allows users to retrieve metadata about their storage, is currently not available in local zones. This includes querying the number of buckets and the total size of buckets via the manager or API.
- **Impact**: Customers cannot easily manage or monitor their storage usage and capacities programmatically in local zones.
- **Future Plans**: The development team is working on implementing this API, and it will be represented in the Jira backlog for prioritization.

### Encryption and Versioning

#### Encryption

- **Current State**: Encryption is not supported in local zones, meaning that data is not encrypted at rest by the service.
- **Supported Encryption**: Server-Side Encryption with Customer-Provided Keys (SSeC) is supported. This allows users to encrypt their data before sending it to the object storage service, providing a layer of security.

#### Versioning

- **Current State**: Versioning is supported by API, allowing users to maintain multiple versions of an object in a bucket.
- **Future Plans**: Versioning support will be further integrated into the API later, providing more comprehensive management and control over object versions.

### User Policies are not supported

- **Overview**: User policies can theoretically be used to grant specific access to users. However, these policies do not alter the access model for local zones.
- **Impact**: All access keys within a project have unrestricted access to all buckets in local zones, which may not meet all security requirements for some users.
- **Future Plans**: Enhancements to user policy management are being considered for future updates.

### Performance classes for objects

- **Current State**: Local zones only support standard storage classes. High-performance storage classes will not be available in local zones for the time being.
- **Future State**: Once OVHcloud releases new storage classes, the potential for expanding local zones to support high-performance classes will be evaluated.

## Object Storage for Local Zones features availability <a name="features-matrix"></a>

<table>
    <tr>
        <th> Theme </th>
        <th> Feature </th>
        <th> Operation </th>
        <th> Regions </th>
        <th> Local Zones</th>
    </tr>
    <tr>
        <td rowspan="8">Bucket management</td>
        <td rowspan="8">Bucket creation</td>
        <td> create bucket</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>delete bucket</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>list buckets</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>get bucket location</td>
        <td>yes</td>
        <td>no</td>
    </tr>
    <tr>
        <td>head bucket</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>put bucket tagging</td>
        <td>yes</td>
        <td>no</td>
    </tr>
    <tr>
        <td>get bucket tagging</td>
        <td>yes</td>
        <td>no</td>
    </tr>
    <tr>
        <td>delete bucket tagging</td>
        <td>yes</td>
        <td>no</td>
    </tr>
    <tr>
        <td rowspan="7">Lifecycle operations</td>
        <td rowspan="4">Intelligent tiering</td>
        <td>delete intelligent tiering conf</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <td>put intelligent tiering conf</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <td>list intelligent tiering conf</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <td>get intelligent tiering conf</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <td rowspan="3">Lifecycle policy</td>
        <td>put bucket lifecycle conf</td>
        <td>no</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>get bucket lifecycle conf</td>
        <td>no</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>delete bucket lifecycle conf</td>
        <td>no</td>
        <td>yes</td>
    </tr>
    <tr>
        <td rowspan="17">Access control</td>
        <td rowspan="4">ACL</td>
        <td>put bucket ACL</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>get bucket ACL</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>put object ACL</td>
        <td>yes</td>
        <td>no</td>
    </tr>
    <tr>
        <td>get object ACL</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td rowspan="3">Block public access</td>
        <td>put public block</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <td>get public access block</td>
        <td>no</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>delete public block status</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <td rowspan="4">Bucket policy</td>
        <td>put bucket policy</td>
        <td>no</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>delete bucket policy</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <td>get bucket policy status</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <td>get bucket policy</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <td rowspan="3">CORS</td>
        <td>put bucket cors</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>get bucket cors</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>delete bucket cors</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td rowspan="3">Object ownership</td>
        <td>put ownership controls</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <td>get ownership controls</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <td>delete ownership controls</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <td rowspan="8">Immutability</td>
        <td rowspan="2">Versioning</td>
        <td>get bucket versioning</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>put bucket versioning</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td rowspan="6">Object lock</td>
        <td>put object lock configuration</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>get object lock configuration</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>put object legal hold</td>
        <td>yes</td>
        <td>no</td>
    </tr>
    <tr>
        <td>get object legal hold</td>
        <td>yes</td>
        <td>no</td>
    </tr>
    <tr>
        <td>put object retention</td>
        <td>yes</td>
        <td>no</td>
    </tr>
    <tr>
        <td>get object retention</td>
        <td>yes</td>
        <td>no</td>
    </tr>
    <tr>
        <td rowspan="7">Encryption at rest</td>
        <td>SSE-C</td>
        <td>n/c</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td rowspan="3">SSE-S3</td>
        <td>put bucket encryption</td>
        <td>yes</td>
        <td>no</td>
    </tr>
    <tr>
        <td>delete bucket encryption</td>
        <td>yes</td>
        <td>no</td>
    </tr>
    <tr>
        <td>get bucket encryption</td>
        <td>yes</td>
        <td>no</td>
    </tr>
    <tr>
        <td rowspan="3">SSE-KMS</td>
        <td>put bucket encryption</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <td>delete bucket encryption</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <td>get bucket encryption</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <td rowspan="18">Object management</td>
        <td rowspan="9">Single object creation</td>
        <td>put object</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>delete object</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>list objects v2</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>get object</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>delete objects</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>copy object</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <td>put object tagging</td>
        <td>yes</td>
        <td>no</td>
    </tr>
    <tr>
        <td>get object tagging</td>
        <td>yes</td>
        <td>no</td>
    </tr>
    <tr>
        <td>delete object tagging</td>
        <td>yes</td>
        <td>no</td>
    </tr>
    <tr>
        <td rowspan="6">Multipart upload</td>
        <td>create mpu</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>upload part</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>list mpus</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>complete mpu</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>abort mpu</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>list parts</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td rowspan="3">Metadata mgt</td>
        <td>get attributes</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <td>head object</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>list object versions</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td rowspan="2">Event driven architectures</td>
        <td rowspan="2">Event notification</td>
        <td>put bucket notification configuration</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <td>get bucket notification configuration</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <td rowspan="3">Resiliency</td>
        <td rowspan="3">Async replication</td>
        <td>get bucket replication</td>
        <td>yes</td>
        <td>no</td>
    </tr>
    <tr>
        <td>delete bucket replication</td>
        <td>yes</td>
        <td>no</td>
    </tr>
    <tr>
        <td>put bucket replication</td>
        <td>yes</td>
        <td>no</td>
    </tr>
    <tr>
        <td rowspan="15">Observability</td>
        <td rowspan="3">Server access logging</td>
        <td>get bucket logging</td>
        <td>yes</td>
        <td>no</td>
    </tr>
    <tr>
        <td>delete bucket logging</td>
        <td>yes</td>
        <td>no</td>
    </tr>
    <tr>
        <td>put bucket logging</td>
        <td>yes</td>
        <td>no</td>
    </tr>
    <tr>
        <td rowspan="4">Bucket metrics</td>
        <td>put bucket metrics configuration</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <td>get bucket metrics configuration</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <td>list bucket metrics configuration</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <td>delete bucket metrics configuration</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <td rowspan="4">Storage class analytics</td>
        <td>put bucket analytics configuration</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <td>get bucket analytics configuration</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <td>list bucket analytics configuration</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <td>delete bucket analytics configuration</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <td rowspan="4">Bucket inventory</td>
        <td>put bucket inventory configuration</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <td>get bucket inventory configuration</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <td>list bucket inventory configurations</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <td>delete bucket inventory configuration</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <td rowspan="6">Web content</td>
        <td rowspan="3">Static web site</td>
        <td>put bucket website</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>get bucket website</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>delete bucket website</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td rowspan="3">Pre-signed urls</td>
        <td>GET</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>PUT</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>no</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>Data analytics</td>
        <td>S3 Select</td>
        <td>select object content</td>
        <td>no</td>
        <td>no</td>
    </tr>
</table>