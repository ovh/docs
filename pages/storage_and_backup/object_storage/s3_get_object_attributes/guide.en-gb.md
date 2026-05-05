---
title: "Object Storage - GetObjectAttributes"
excerpt: "Learn how to retrieve metadata attributes from your objects (ETag, size, storage class, checksum, multipart parts) without downloading the object body"
updated: 2026-05-05
---

## Objective

**This guide explains how to use the `GetObjectAttributes` S3 API operation to retrieve metadata attributes from objects in your OVHcloud Object Storage buckets without downloading the object body.**

## Requirements

- A [Public Cloud project](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project) in your OVHcloud account
- An [Object Storage user](/pages/storage_and_backup/object_storage/s3_identity_and_access_management) already created
- [AWS CLI installed and configured](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage)

## Instructions

### Why use GetObjectAttributes?

Inspecting an object's metadata traditionally requires at least two separate API calls: `HeadObject` to retrieve the ETag, size, and storage class, and `ListParts` to enumerate the parts of multipart objects. Each additional call adds latency, which becomes significant at scale in data pipelines, integrity verification workflows, or storage auditing systems.

`GetObjectAttributes` consolidates all attribute retrieval into a **single selective API call**. You request exactly the attributes you need, the service returns only those fields - no object body is transferred.

**Key benefits:**

- **No body transfer:** retrieve metadata only, regardless of object size.
- **Selective response:** receive only the attributes you request.
- **Single-call consolidation:** replaces the `HeadObject` + `ListParts` pattern.
- **Any S3-compatible client:** works with AWS CLI, any S3 SDK, and direct HTTP calls.

---

### Supported attributes

You select which attributes to retrieve by listing them in the `x-amz-object-attributes` request header (space-separated for AWS CLI, comma-separated for raw HTTP). Attributes not listed are absent from the response.

| Attribute | Description |
|---|---|
| `ETag` | Opaque identifier representing a specific version of the object's content |
| `Checksum` | Checksum value computed using the algorithm stored with the object at upload time |
| `ObjectParts` | Multipart structure of the object: list of parts with their number, size, and optional checksum |
| `StorageClass` | Storage class of the object (`STANDARD`, `STANDARD_IA`, `GLACIER_IR`, `DEEP_ARCHIVE`, `EXPRESS_ONEZONE`) |
| `ObjectSize` | Total size of the object in bytes |

The `Last-Modified` response header is always returned regardless of which attributes are requested.

> [!primary]
>
> The `x-amz-object-attributes` header is **required**. A request without it returns `400 Bad Request`. Attribute names are case-sensitive.
>

---

### Retrieve object attributes

> [!tabs]
> Via AWS CLI
>> ```sh
>> # Retrieve ETag and size
>> aws s3api get-object-attributes \
>>   --bucket <bucket_name> \
>>   --key <object_key> \
>>   --object-attributes ETag ObjectSize
>> ```
>>
>> **Successful response:**
>>
>> ```json
>> {
>>     "LastModified": "2026-04-15T10:23:45+00:00",
>>     "ETag": "d41d8cd98f00b204e9800998ecf8427e",
>>     "ObjectSize": 1048576
>> }
>> ```
>>
>> To request all attributes at once:
>>
>> ```sh
>> aws s3api get-object-attributes \
>>   --bucket <bucket_name> \
>>   --key <object_key> \
>>   --object-attributes ETag Checksum ObjectParts StorageClass ObjectSize
>> ```
>>
> Via curl (S3 REST API)
>> ```sh
>> curl -X GET \
>>   -H "x-amz-object-attributes: ETag,ObjectSize" \
>>   --aws-sigv4 "aws:amz:<region>:s3" \
>>   --user "<access_key>:<secret_key>" \
>>   "https://s3.<region>.io.cloud.ovh.net/<bucket_name>/<object_key>?attributes"
>> ```
>>
>> **Success:** HTTP `200 OK` with an XML body containing the requested attributes.
>>

---

### Checksum attribute

When `Checksum` is requested, the response includes the algorithm and value stored with the object at upload time. If the object was uploaded without a checksum, the `Checksum` element is absent from the response - this is not an error.

**Supported checksum algorithms on OVHcloud Object Storage:**

| Algorithm | XML element in response |
|---|---|
| CRC-32 | `ChecksumCRC32` |
| CRC-32C | `ChecksumCRC32C` |
| CRC-64/NVME | `ChecksumCRC64NVME` |
| SHA-1 | `ChecksumSHA1` |
| SHA-256 | `ChecksumSHA256` |

> [!tabs]
> Via AWS CLI
>> ```sh
>> aws s3api get-object-attributes \
>>   --bucket <bucket_name> \
>>   --key <object_key> \
>>   --object-attributes Checksum
>> ```
>>
>> **Response (object has a CRC32 checksum):**
>>
>> ```json
>> {
>>     "LastModified": "2026-04-15T10:23:45+00:00",
>>     "Checksum": {
>>         "ChecksumCRC32": "aGVsbG8="
>>     }
>> }
>> ```
>>
>> **Response (object has no checksum):**
>>
>> ```json
>> {
>>     "LastModified": "2026-04-15T10:23:45+00:00"
>> }
>> ```
>>
> Via curl (S3 REST API)
>> ```sh
>> curl -X GET \
>>   -H "x-amz-object-attributes: Checksum" \
>>   --aws-sigv4 "aws:amz:<region>:s3" \
>>   --user "<access_key>:<secret_key>" \
>>   "https://s3.<region>.io.cloud.ovh.net/<bucket_name>/<object_key>?attributes"
>> ```
>>

---

### ObjectParts attribute (multipart objects)

When `ObjectParts` is requested on a multipart object, the response lists all parts with their number, size, and optional checksum. For single-part (non-multipart) objects, `ObjectParts` is returned as an empty element.

**Pagination:** results are paginated at up to 1000 parts per response.

> [!tabs]
> Via AWS CLI
>> ```sh
>> # List all parts (default: up to 1000)
>> aws s3api get-object-attributes \
>>   --bucket <bucket_name> \
>>   --key <object_key> \
>>   --object-attributes ObjectParts
>> ```
>>
>> **Response:**
>>
>> ```json
>> {
>>     "LastModified": "2026-04-20T08:10:00+00:00",
>>     "ObjectParts": {
>>         "TotalPartsCount": 3,
>>         "MaxParts": 1000,
>>         "IsTruncated": false,
>>         "Parts": [
>>             { "PartNumber": 1, "Size": 5242880 },
>>             { "PartNumber": 2, "Size": 5242880 },
>>             { "PartNumber": 3, "Size": 1048576 }
>>         ]
>>     }
>> }
>> ```
>>
> Via curl (S3 REST API)
>> ```sh
>> curl -X GET \
>>   -H "x-amz-object-attributes: ObjectParts" \
>>   --aws-sigv4 "aws:amz:<region>:s3" \
>>   --user "<access_key>:<secret_key>" \
>>   "https://s3.<region>.io.cloud.ovh.net/<bucket_name>/<object_key>?attributes"
>> ```
>>

/// details | Paginating through ObjectParts (objects with more than 1000 parts)

When an object has more than 1000 parts, `IsTruncated` is `true` and `NextPartNumberMarker` indicates where to resume. Use `--part-number-marker` to fetch subsequent pages.

> [!tabs]
> Via AWS CLI
>> ```sh
>> # First page
>> aws s3api get-object-attributes \
>>   --bucket <bucket_name> \
>>   --key <object_key> \
>>   --object-attributes ObjectParts \
>>   --max-parts 1000
>>
>> # Next page - use NextPartNumberMarker from the previous response
>> aws s3api get-object-attributes \
>>   --bucket <bucket_name> \
>>   --key <object_key> \
>>   --object-attributes ObjectParts \
>>   --max-parts 1000 \
>>   --part-number-marker <next_part_number_marker>
>> ```
>>
> Via curl (S3 REST API)
>> ```sh
>> # First page
>> curl -X GET \
>>   -H "x-amz-object-attributes: ObjectParts" \
>>   -H "x-amz-max-parts: 1000" \
>>   --aws-sigv4 "aws:amz:<region>:s3" \
>>   --user "<access_key>:<secret_key>" \
>>   "https://s3.<region>.io.cloud.ovh.net/<bucket_name>/<object_key>?attributes"
>>
>> # Next page
>> curl -X GET \
>>   -H "x-amz-object-attributes: ObjectParts" \
>>   -H "x-amz-max-parts: 1000" \
>>   -H "x-amz-part-number-marker: <next_part_number_marker>" \
>>   --aws-sigv4 "aws:amz:<region>:s3" \
>>   --user "<access_key>:<secret_key>" \
>>   "https://s3.<region>.io.cloud.ovh.net/<bucket_name>/<object_key>?attributes"
>> ```
>>

///

---

### Versioned objects

By default, `GetObjectAttributes` operates on the **current version** of the object. To retrieve attributes for a specific version, add `--version-id` to the request.

> [!tabs]
> Via AWS CLI
>> ```sh
>> aws s3api get-object-attributes \
>>   --bucket <bucket_name> \
>>   --key <object_key> \
>>   --version-id <version_id> \
>>   --object-attributes ETag ObjectSize StorageClass
>> ```
>>
>> The `x-amz-version-id` response header echoes the version ID of the retrieved object.
>>
> Via curl (S3 REST API)
>> ```sh
>> curl -X GET \
>>   -H "x-amz-object-attributes: ETag,ObjectSize" \
>>   --aws-sigv4 "aws:amz:<region>:s3" \
>>   --user "<access_key>:<secret_key>" \
>>   "https://s3.<region>.io.cloud.ovh.net/<bucket_name>/<object_key>?attributes&versionId=<version_id>"
>> ```
>>

> [!primary]
>
> **IAM permissions with versionId:** using `--version-id` requires the `s3:GetObjectVersion` and `s3:GetObjectVersionAttributes` permissions, instead of the default `s3:GetObject` + `s3:GetObjectAttributes`.
>

---

### Encrypted objects (SSE-C)

For objects encrypted with SSE-C (customer-provided keys), you must supply the three encryption headers with every `GetObjectAttributes` request. The service does not store the key.

> [!tabs]
> Via AWS CLI
>> ```sh
>> aws s3api get-object-attributes \
>>   --bucket <bucket_name> \
>>   --key <object_key> \
>>   --object-attributes ETag ObjectSize \
>>   --sse-customer-algorithm AES256 \
>>   --sse-customer-key <base64_encoded_256_bit_key> \
>>   --sse-customer-key-md5 <base64_encoded_md5_of_key>
>> ```
>>
> Via curl (S3 REST API)
>> ```sh
>> curl -X GET \
>>   -H "x-amz-object-attributes: ETag,ObjectSize" \
>>   -H "x-amz-server-side-encryption-customer-algorithm: AES256" \
>>   -H "x-amz-server-side-encryption-customer-key: <base64_encoded_key>" \
>>   -H "x-amz-server-side-encryption-customer-key-MD5: <base64_md5_of_key>" \
>>   --aws-sigv4 "aws:amz:<region>:s3" \
>>   --user "<access_key>:<secret_key>" \
>>   "https://s3.<region>.io.cloud.ovh.net/<bucket_name>/<object_key>?attributes"
>> ```
>>

> [!warning]
>
> All three SSE-C headers are mandatory for SSE-C objects. Omitting any one of them returns `400 Bad Request`. Providing the wrong key returns `403 Forbidden`.
>
> For unencrypted and SSE-S3 objects, do **not** include SSE-C headers - including them returns `400 Bad Request`.
>

---

### IAM permissions

| Situation | Required permissions |
|---|---|
| Without `versionId` | `s3:GetObject` + `s3:GetObjectAttributes` |
| With `versionId` | `s3:GetObjectVersion` + `s3:GetObjectVersionAttributes` |

No additional permissions are required beyond the standard read permissions.

---

### Error codes

| HTTP code | Error code | Condition |
|---|---|---|
| `200 OK` | - | Request successful |
| `400 Bad Request` | `InvalidArgument` | Missing `x-amz-object-attributes`, invalid attribute name, or invalid SSE-C header combination |
| `403 Forbidden` | `AccessDenied` | Missing IAM permission, or wrong SSE-C key |
| `404 Not Found` | `NoSuchKey` | Object does not exist and requester has `s3:ListBucket` |
| `403 Forbidden` | `AccessDenied` | Object does not exist and requester does NOT have `s3:ListBucket` |
| `405 Method Not Allowed` | - | The target version is a delete marker |

> [!primary]
>
> **Delete markers:** in a versioned bucket, if the current version of an object (or the version specified by `--version-id`) is a delete marker, the service returns `405 Method Not Allowed` with the `x-amz-delete-marker: true` response header.
>

## Go further

Join our [community of users](/links/community).
