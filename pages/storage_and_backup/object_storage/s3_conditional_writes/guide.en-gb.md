---
title: "Object Storage - Conditional Writes"
excerpt: "Learn how to use If-Match and If-None-Match conditional headers to prevent overwrites, avoid race conditions, and control reads on your OVHcloud Object Storage buckets"
updated: 2026-04-29
---

## Objective

**This guide explains how to use the `If-Match` and `If-None-Match` HTTP conditional headers on `PutObject`, `DeleteObject`, `GetObject`, `HeadObject`, and `CompleteMultipartUpload` requests on your OVHcloud Object Storage buckets.**

## Requirements

- A [Public Cloud project](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project) in your OVHcloud account
- An [Object Storage user](/pages/storage_and_backup/object_storage/s3_identity_and_access_management) already created
- [AWS CLI installed and configured](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage)

## Instructions

### Why use conditional writes?

Object Storage is inherently concurrent — multiple application instances, microservices, or background jobs may read and write the same object at the same time. Without coordination, concurrent writes can silently overwrite each other, causing data loss that is difficult to detect and reproduce.

Conditional writes solve this problem **at the storage layer**, without requiring an external coordination service such as a database or a distributed lock manager. By attaching a precondition to an S3 API call, you ensure the operation only proceeds if the object is in the expected state at the moment the request is evaluated.

**Key benefits:**

- **Data integrity in concurrent environments:** Prevent a write from silently overwriting changes made by another process between your read and your write (a classic *check-then-act* race condition).
- **Distributed locking primitive:** Implement a lightweight, storage-native lock using `If-None-Match: *` on `PutObject` — only the first writer succeeds; all others receive `412 Precondition Failed`.
- **Atomic compare-and-swap:** Read an object's ETag, modify it, then write back with `If-Match: <original_etag>`. The write is rejected if the object was modified in between, giving you a safe optimistic concurrency pattern.
- **No extra infrastructure:** Coordination happens inside the Object Storage service itself — no additional databases, queues, or lock managers required.
- **Any S3-compatible client:** The conditional headers are part of the HTTP standard ([RFC 7232](https://datatracker.ietf.org/doc/rfc7232/)) and the S3 API — they work with AWS CLI, any S3 SDK, and raw HTTP calls.

---

### Overview

Conditional requests allow you to attach a precondition to an S3 API call based on the current state of the target object. OVHcloud Object Storage evaluates the condition **atomically** before executing the operation. If the condition is not met, the request is rejected without modifying any data.

Two HTTP headers are supported, based on [RFC 7232](https://datatracker.ietf.org/doc/rfc7232/):

| Header | Accepted value | Meaning |
|--------|---------------|---------|
| `If-Match` | Bare ETag value or `*` | Execute **only if** the object's current ETag matches |
| `If-None-Match` | `*` only | Execute **only if** the object does not exist |

Supported operations:

| Operation | `If-Match` | `If-None-Match` |
|-----------|-----------|----------------|
| `PutObject` | ✅ | ✅ |
| `DeleteObject` | ✅ | ❌ |
| `GetObject` | ✅ | ✅ |
| `HeadObject` | ✅ | ✅ |
| `CompleteMultipartUpload` | ✅ | ✅ |

> [!primary]
>
> **ETag format:** When using `If-Match`, provide the ETag as a **bare string without surrounding quotes** — for example `d41d8cd98f00b204e9800998ecf8427e`, not `"d41d8cd98f00b204e9800998ecf8427e"`.
>
> To retrieve an object's current ETag, use `aws s3api head-object --bucket <bucket_name> --key <object_key>` and read the `ETag` field from the response, stripping the surrounding quotes.
>

> [!warning]
>
> You cannot send both `If-Match` and `If-None-Match` in the same request. Doing so returns an HTTP `400 Bad Request` error.
>

#### Response codes

| HTTP code | Meaning |
|-----------|---------|
| `200 OK` / `204 No Content` | Condition was satisfied — operation executed |
| `412 Precondition Failed` | Condition was not satisfied — operation rejected, object unchanged |
| `409 ConditionalRequestConflict` | A concurrent operation conflicted — retry required |

#### Versioning and delete markers

All conditions are evaluated against the **current version** of the object, regardless of whether versioning is enabled on the bucket.

> [!primary]
>
> A **delete marker** in a versioned bucket is **not** considered an existing object:
> - `If-Match` (with an ETag or `*`) → `412 Precondition Failed` when the current version is a delete marker.
> - `If-None-Match: *` → **succeeds** when the current version is a delete marker (treated as non-existent).
>

> [!primary]
>
> **Encryption support:** Conditional writes are supported for unencrypted objects and objects encrypted with SSE-S3. Support for SSE-C encrypted objects will be available in a future release.
>

---

### PutObject — conditional write

Add a precondition to an object upload to prevent accidental overwrites or to implement first-write-wins logic.

**Use cases:**

- **First-write-wins / distributed lock:** Multiple processes race to create the same object. Only the first call with `If-None-Match: *` succeeds — all others receive `412`.
- **Safe overwrite:** Read an object, modify it, write it back with `If-Match: <original_etag>`. If another client modified the object in between, the write is rejected.
- **Idempotent initialisation:** Create a configuration object without risk of overwriting an existing version.

> [!tabs]
> Via AWS CLI
>> ```sh
>> # Write only if the object does not exist (first-write-wins)
>> aws s3api put-object \
>>   --bucket <bucket_name> \
>>   --key <object_key> \
>>   --body <local_file_path> \
>>   --if-none-match "*"
>>
>> # Write only if the current ETag matches (safe overwrite)
>> aws s3api put-object \
>>   --bucket <bucket_name> \
>>   --key <object_key> \
>>   --body <local_file_path> \
>>   --if-match <current_etag>
>>
>> # Write only if the object exists (any ETag)
>> aws s3api put-object \
>>   --bucket <bucket_name> \
>>   --key <object_key> \
>>   --body <local_file_path> \
>>   --if-match "*"
>> ```
>>
>> **Successful upload:**
>>
>> ```json
>> {
>>     "ETag": "d41d8cd98f00b204e9800998ecf8427e"
>> }
>> ```
>>
>> **Rejected upload (condition not satisfied):**
>>
>> ```
>> An error occurred (PreconditionFailed) when calling the PutObject operation:
>> At least one of the pre-conditions you specified did not hold
>> ```
>>
> Via curl (S3 REST API)
>> ```sh
>> # Write only if the object does not exist
>> curl -X PUT \
>>   -H "If-None-Match: *" \
>>   -H "Content-Type: application/octet-stream" \
>>   --data-binary @<local_file_path> \
>>   --aws-sigv4 "aws:amz:<region>:s3" \
>>   --user "<access_key>:<secret_key>" \
>>   "https://s3.<region>.io.cloud.ovh.net/<bucket_name>/<object_key>"
>>
>> # Write only if the current ETag matches
>> curl -X PUT \
>>   -H "If-Match: <current_etag>" \
>>   -H "Content-Type: application/octet-stream" \
>>   --data-binary @<local_file_path> \
>>   --aws-sigv4 "aws:amz:<region>:s3" \
>>   --user "<access_key>:<secret_key>" \
>>   "https://s3.<region>.io.cloud.ovh.net/<bucket_name>/<object_key>"
>> ```
>>
>> **Success:** HTTP `200 OK`
>>
>> **Condition not satisfied:** HTTP `412 Precondition Failed`
>>

/// details | Versioning behaviour for PutObject

| Bucket state | `If-None-Match: *` | `If-Match: <etag>` | `If-Match: *` |
|---|---|---|---|
| Non-versioned | Succeeds only if no object exists | Succeeds only if current ETag matches | Succeeds only if object exists |
| Versioned — current version exists | `412 Precondition Failed` | Succeeds if ETag matches → creates new version | Succeeds → creates new version |
| Versioned — current version is a delete marker | Succeeds → creates new version | `412 Precondition Failed` | `412 Precondition Failed` |
| Versioned — no version at all | Succeeds → creates first version | `412 Precondition Failed` | `412 Precondition Failed` |

///

---

### DeleteObject — conditional delete

Delete an object only if the ETag condition is satisfied. Only `If-Match` is supported for `DeleteObject` — `If-None-Match` is not applicable.

**Use cases:**

- **Safe delete:** Read an object's ETag, then delete it with `If-Match: <etag>`. The delete is rejected if the object was modified between your read and your delete.
- **Delete-if-exists:** Use `If-Match: *` to delete an object only if it currently exists.

> [!tabs]
> Via AWS CLI
>> ```sh
>> # Delete only if the current ETag matches
>> aws s3api delete-object \
>>   --bucket <bucket_name> \
>>   --key <object_key> \
>>   --if-match <current_etag>
>>
>> # Delete only if the object exists (any ETag)
>> aws s3api delete-object \
>>   --bucket <bucket_name> \
>>   --key <object_key> \
>>   --if-match "*"
>>
>> # Delete a specific version only if its ETag matches
>> aws s3api delete-object \
>>   --bucket <bucket_name> \
>>   --key <object_key> \
>>   --version-id <version_id> \
>>   --if-match <version_etag>
>> ```
>>
>> When `--version-id` is specified, the ETag is evaluated against that **specific version**, not the current version.
>>

> [!primary]
>
> In a **versioned bucket**, a successful `DeleteObject` creates a delete marker as the new current version — it does not permanently delete the object. To permanently delete a specific version, include `--version-id` in the request.
>

/// details | Versioning behaviour for DeleteObject

| Bucket state | `If-Match: <etag>` | `If-Match: *` |
|---|---|---|
| Non-versioned | Permanently deletes if ETag matches | Permanently deletes if object exists |
| Versioned — current version exists | Creates delete marker if current version ETag matches | Creates delete marker if current version exists |
| Versioned — current version is a delete marker | `412 Precondition Failed` | `412 Precondition Failed` |

///

---

### GetObject — conditional read

Retrieve an object only if the ETag condition is met. This is typically used for cache validation.

**Use cases:**

- **Cache validation:** Store an object's ETag locally. On the next access, send `If-Match: <cached_etag>` — the download proceeds only if the object has not changed.
- **Read-if-not-exists guard:** Use `If-None-Match: *` to read an object only if it does not yet exist (returns the object body if there is no current version).

> [!tabs]
> Via AWS CLI
>> ```sh
>> # Download only if the ETag matches the cached value
>> aws s3api get-object \
>>   --bucket <bucket_name> \
>>   --key <object_key> \
>>   --if-match <cached_etag> \
>>   <output_file>
>>
>> # Download only if the object exists (any ETag)
>> aws s3api get-object \
>>   --bucket <bucket_name> \
>>   --key <object_key> \
>>   --if-match "*" \
>>   <output_file>
>> ```
>>

Conditions for `GetObject` and `HeadObject` are always evaluated against the **current version**. To target a specific version, add `--version-id <version_id>` — the condition is then evaluated against that version.

---

### HeadObject — conditional metadata read

Check object metadata and ETag without downloading the object body. Semantics are identical to `GetObject` but no response body is returned.

**Use cases:**

- **Lightweight existence check:** Confirm an object exists and retrieve its current ETag before performing a conditional write.
- **Freshness check:** Confirm a cached ETag is still valid without incurring download costs.

> [!tabs]
> Via AWS CLI
>> ```sh
>> # Check object exists (any ETag) and retrieve metadata
>> aws s3api head-object \
>>   --bucket <bucket_name> \
>>   --key <object_key> \
>>   --if-match "*"
>>
>> # Check object metadata only if the ETag matches
>> aws s3api head-object \
>>   --bucket <bucket_name> \
>>   --key <object_key> \
>>   --if-match <cached_etag>
>> ```
>>

---

### CompleteMultipartUpload — conditional finalization

Attach a precondition to the final step of a multipart upload. The condition is evaluated **at the time `CompleteMultipartUpload` is called**, not when `CreateMultipartUpload` was initiated.

**Use cases:**

- **Atomic large-file replacement:** Begin a multipart upload of a large replacement file. At finalization, use `If-Match: <etag>` to ensure the target object has not been modified during the upload.
- **First-write-wins for large files:** Use `If-None-Match: *` at finalization so that only one concurrent multipart upload permanently creates the object.

> [!tabs]
> Via AWS CLI
>> ```sh
>> # Finalize only if the object does not yet exist
>> aws s3api complete-multipart-upload \
>>   --bucket <bucket_name> \
>>   --key <object_key> \
>>   --upload-id <upload_id> \
>>   --multipart-upload file://parts.json \
>>   --if-none-match "*"
>>
>> # Finalize only if the current ETag matches
>> aws s3api complete-multipart-upload \
>>   --bucket <bucket_name> \
>>   --key <object_key> \
>>   --upload-id <upload_id> \
>>   --multipart-upload file://parts.json \
>>   --if-match <current_etag>
>> ```
>>

> [!warning]
>
> If you receive a `409 ConditionalRequestConflict` error on `CompleteMultipartUpload`, you must restart the entire multipart upload sequence:
>
> 1. Call `AbortMultipartUpload` to clean up the in-progress upload.
> 2. Retrieve the current ETag with `HeadObject`.
> 3. Call `CreateMultipartUpload` to start a new upload.
> 4. Re-upload all parts with `UploadPart`.
> 5. Retry `CompleteMultipartUpload` with the updated condition.
>

/// details | Versioning behaviour for CompleteMultipartUpload

| Bucket state | `If-None-Match: *` | `If-Match: <etag>` | `If-Match: *` |
|---|---|---|---|
| Non-versioned | Succeeds only if no object exists at finalization time | Succeeds only if current ETag matches at finalization time | Succeeds only if object exists at finalization time |
| Versioned — current version exists | `412 Precondition Failed` | Succeeds if ETag matches → creates new version | Succeeds → creates new version |
| Versioned — current version is a delete marker | Succeeds → creates new version | `412 Precondition Failed` | `412 Precondition Failed` |
| Versioned — no version at all | Succeeds → creates first version | `412 Precondition Failed` | `412 Precondition Failed` |

///

---

### Important considerations

- **Atomicity:** The condition check and the operation execute as a single atomic unit. No concurrent operation can alter the object between the check and the write.
- **Single header per request:** You cannot combine `If-Match` and `If-None-Match` in the same request — this results in `400 Bad Request`.
- **409 retry for PutObject / DeleteObject:** On `409 ConditionalRequestConflict`, re-fetch the object's current ETag with `HeadObject` and retry your request with the updated value.
- **No IAM changes required:** No additional permissions are needed. The existing `s3:PutObject`, `s3:DeleteObject`, and `s3:GetObject` permissions are sufficient.
- **Object Lock compatibility:** Conditional headers are evaluated independently from Object Lock (WORM) rules. Both constraints apply.

## Go further

Join our [community of users](/links/community).