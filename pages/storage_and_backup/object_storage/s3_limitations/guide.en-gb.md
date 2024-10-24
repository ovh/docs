---
title: Object Storage - Technical Limitations
excerpt: Find here the technical limits of the S3 Object Storage offer
updated: 2024-08-22
---

<style>
td:nth-of-type(2) {
  white-space:nowrap;
}
</style>

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
- Must be unique within OVHcloud.
- May contain the following punctuation marks: "." and "-".
- Must not contain multiple punctuation marks in a row (".." or " -." or ".-" or " --").
- Must not look like an IP address (192.168.1.1).

<a name="features-matrix"></a>

### Features availability

<table>
    <tr>
        <th> Theme </th>
        <th> Feature </th>
        <th> Operation </th>
        <th> Regions </th>
        <th> Local&nbsp;Zones </th>
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

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
