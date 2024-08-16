---
title: Object Storage - S3 Compliancy
excerpt: Discover the compliancy of OVHcloud S3 API versus the global AWS S3 API
updated: 2024-05-15
---

## Objective

This guide lists the S3 API features supported by S3 Object Storage.

## Instructions

| Theme                  | Feature             | Operation                       | Supported? |
|-------------------------|---------------------|----------------------------------|------------|
| **Bucket management**   | **Bucket creation** | create bucket                   | yes        |
|                         |                     | delete bucket                   | yes        |
|                         |                     | list buckets                    | yes        |
|                         |                     | get bucket location             | yes        |
|                         |                     | head bucket                     | yes        |
|                         |                     | put bucket tagging              | yes        |
|                         |                     | get bucket tagging              | yes        |
|                         |                     | delete bucket tagging           | yes        |
| **Lifecycle operations**| **Intelligent tiering** | delete intelligent tiering conf | no         |
|                         |                     | put intelligent tiering conf    | no         |
|                         |                     | list intelligent tiering conf   | no         |
|                         |                     | get intelligent tiering conf    | no         |
|                         | **Lifecycle policy**| put bucket lifecycle conf       | no         |
|                         |                     | get bucket lifecycle conf       | no         |
|                         |                     | delete bucket lifecycle conf    | no         |
| **Access control**      | **ACL**             | put bucket ACL                  | yes        |
|                         |                     | get bucket ACL                  | yes        |
|                         |                     | put object ACL                  | yes        |
|                         |                     | get object ACL                  | yes        |
|                         | **Block public access** | put public block              | no         |
|                         |                     | get public access block         | no         |
|                         |                     | delete public block status      | no         |
|                         | **Bucket policy**   | put bucket policy               | no         |
|                         |                     | delete bucket policy            | no         |
|                         |                     | get bucket policy status        | no         |
|                         |                     | get bucket policy               | no         |
|                         | **CORS**            | put bucket cors                 | yes        |
|                         |                     | get bucket cors                 | yes        |
|                         |                     | delete bucket cors              | yes        |
|                         | **Object ownership**| put ownership controls          | no         |
|                         |                     | get ownership controls          | no         |
|                         |                     | delete ownership controls       | no         |
| **Immutability**        | **Versioning**      | get bucket versioning           | yes        |
|                         |                     | put bucket versioning           | yes        |
|                         | **Object lock**     | put object lock configuration   | yes        |
|                         |                     | get object lock configuration   | yes        |
|                         |                     | put object legal hold           | yes        |
|                         |                     | get object legal hold           | yes        |
|                         |                     | put object retention            | yes        |
|                         |                     | get object retention            | yes        |
| **Encryption at rest**  | **SSE-C**           | n/c                             | yes        |
|                         | **SSE-S3**          | put bucket encryption           | yes        |
|                         |                     | delete bucket encryption        | yes        |
|                         |                     | get bucket encryption           | yes        |
|                         | **SSE-KMS**         | put bucket encryption           | no         |
|                         |                     | delete bucket encryption        | no         |
|                         |                     | get bucket encryption           | no         |
| **Object management**   | **Single object creation** | put object                  | yes        |
|                         |                     | delete object                   | yes        |
|                         |                     | list objects v2                 | yes        |
|                         |                     | get object                      | yes        |
|                         |                     | delete objects                  | yes        |
|                         |                     | copy object                     | yes        |
|                         |                     | put object tagging              | yes        |
|                         |                     | get object tagging              | yes        |
|                         |                     | delete object tagging           | yes        |
|                         | **Multipart upload**| create mpu                      | yes        |
|                         |                     | upload part                     | yes        |
|                         |                     | list mpus                       | yes        |
|                         |                     | complete mpu                    | yes        |
|                         |                     | abort mpu                       | yes        |
|                         |                     | list parts                      | yes        |
|                         | **Metadata mgt**    | get attributes                  | no         |
|                         |                     | head object                     | yes        |
|                         |                     | list object versions            | yes        |
| **Event driven architectures** | **Event notification** | put bucket notification configuration | no |
|                         |                     | get bucket notification configuration | no   |
| **Resiliency**          | **Async replication** | get bucket replication         | yes        |
|                         |                     | delete bucket replication       | yes        |
|                         |                     | put bucket replication          | yes        |
| **Observability**       | **Server access logging** | get bucket logging          | yes        |
|                         |                     | delete bucket logging           | yes        |
|                         |                     | put bucket logging              | yes        |
|                         | **Bucket metrics**  | put bucket metrics configuration | no        |
|                         |                     | get bucket metrics configuration | no        |
|                         |                     | list bucket metrics configuration | no       |
|                         |                     | delete bucket metrics configuration | no      |
|                         | **Storage class analytics** | put bucket analytics configuration | no   |
|                         |                     | get bucket analytics configuration | no       |
|                         |                     | list bucket analytics configuration | no      |
|                         |                     | delete bucket analytics configuration | no     |
|                         | **Bucket inventory** | put bucket inventory configuration | no      |
|                         |                     | get bucket inventory configuration | no       |
|                         |                     | list bucket inventory configurations | no     |
|                         |                     | delete bucket inventory configuration | no     |
| **Web content**         | **Static web site** | put bucket website              | yes        |
|                         |                     | get bucket website              | yes        |
|                         |                     | delete bucket website           | yes        |
|                         | **Pre-signed urls** | GET                             | yes        |
|                         |                     | PUT                             | yes        |
|                         |                     | POST                            | no         |
| **Data analytics**      | **S3 Select**       | select object content           | no         |

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
