---
title: Object Storage – How to share an object or file externally
excerpt: Learn how to securely share Object Storage files externally in OVHcloud, using presigned URLs, public-read objects, or bucket policies for controlled access
updated: 2025-12-19
---

## Objective

This guide explains how to securely share files or objects stored in OVHcloud Object Storage with external users, covering temporary access, public-read objects, and bucket policies, while highlighting URL types and best practices.

### Use case scenarios

Usual use case scenarios for sharing objects in OVHcloud Object Storage include:

- You want to provide a temporary download link to a partner or client without giving full bucket access.
- You need to make specific objects public, such as images or product documents, while keeping the rest of the bucket private.
- You want to grant controlled access to certain files for collaborators or external users.

## Comparison of URL Types

When sharing objects in OVHcloud Object Storage, understanding the difference between **path-style** and **virtual-hosted-style** URLs is important.

| Feature              | Path-style URL                                                                | Virtual-hosted-style URL                                     |
| -------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------ |
| Format               | `https://s3.<region>.io.cloud.ovh.net/<bucket>/<object-key>/<generated-code>` | `https://<bucket>.s3.<region>.io.cloud.ovh.net/<object-key>` |
| Typical use          | Presigned URLs generated via API                                              | URLs from the Control Panel or public objects                |
| Bucket Name Location | In the URL path                                                               | In the subdomain                                             |
| Best For             | Temporary or programmatic access                                              | Public sharing or stable links                               |
| Access Control       | Limited by presigned URL expiration                                           | Controlled by ACLs or bucket policies                        |

**Key Takeaways:**

- Use path-style URLs for temporary, API-generated access.
- Use virtual-hosted-style URLs for public or long-term sharing, as they are more standard and easier to manage.

## Requirements

- A bucket
- A user with the required access rights on the bucket

See our [Getting started with Object Storage](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage) guide.

## Instructions

OVHcloud Object Storage offers three main ways to share objects externally. Choose the method depending on whether you need temporary access, public access, or controlled sharing.

> [!tabs]
> Via Presigned URLs
>> Presigned URLs provide temporary access to a private object without changing bucket permissions.
>>
>> Steps:
>>
>> - Generate a presigned URL using the OVHcloud API or an S3-compatible SDK.
>> - Set an expiration time.
>> - Share the URL with the external user.
>>
>> Example (AWS CLI compatible):
>>
>> ```bash
>> aws s3 presign s3://my-bucket/reports/data.csv --expires-in 3600 \
>>  --endpoint-url https://s3.gra.io.cloud.ovh.net
>> ```
>>
>> This command returns a temporary link valid for 1 hour.
>>
>> After expiration, access is automatically blocked and the object remains private.
>>
> Via Public Objects
>> Specific objects can be publicly accessible by applying a public-read ACL. Only those objects become public; the bucket and its listing stay private.
>>
>> Steps:
>>
>> - Select the object via API.
>> - Apply the public-read ACL.
>> - Share the object's URL.
>>
>> Example (AWS CLI compatible):
>>
>> ```bash
>> aws s3api put-object-acl \
>>  --bucket my-bucket \
>>  --key docs/manual.pdf \
>>  --acl public-read \
>>  --endpoint-url https://s3.gra.io.cloud.ovh.net
>> ```
>>
>> The object becomes accessible at: `https://my-bucket.s3.gra.io.cloud.ovh.net/docs/manual.pdf`
>>

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).

