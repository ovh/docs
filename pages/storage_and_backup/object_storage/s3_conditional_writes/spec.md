# Functional Specification — OVHcloud Object Storage: Conditional Writes

**Version:** 1.1  
**Date:** 2026-04-29  
**Status:** In Review  
**Source guide:** `pages/storage_and_backup/object_storage/s3_conditional_writes/guide.en-gb.md`

---

## Change log (relative to current guide)

| # | Change | Impact |
|---|--------|--------|
| 1 | Remove `GetObject` and `HeadObject` from scope | Sections removed; operations table updated |
| 2 | Replace RFC 7232 with RFC 9110 | All normative references updated |
| 3 | Correct HTTP 404 vs 412 distinction for `If-Match` | Response code table and explanatory notes updated |
| 4 | Delete marker returns HTTP 404, not HTTP 412, for `If-Match` | All three versioning tables updated; global note updated |

---

## 1. Scope

### 1.1 In scope

The Conditional Writes feature adds support for the `If-Match` and `If-None-Match` HTTP conditional headers on the following S3 API operations:

| Operation | `If-Match` | `If-None-Match` |
|-----------|-----------|----------------|
| `PutObject` | ✅ | ✅ |
| `DeleteObject` | ✅ | ❌ |
| `CompleteMultipartUpload` | ✅ | ✅ |

### 1.2 Out of scope

The following operations are **explicitly excluded** from the Conditional Writes feature. They MUST NOT appear in documentation, examples, or feature descriptions:

- `GetObject` — conditional read headers are not in scope
- `HeadObject` — conditional metadata-read headers are not in scope

> **Note for doc writers:** `HeadObject` may still appear in the guide as a plain S3 utility call (e.g., "retrieve the current ETag before retrying"). It MUST NOT appear as a conditional-header operation.

---

## 2. Normative reference

All conditional-header semantics are defined by:

**RFC 9110 — HTTP Semantics**  
URL: `https://datatracker.ietf.org/doc/rfc9110/`

RFC 9110 supersedes RFC 7232. All former references to RFC 7232 and its URL (`https://datatracker.ietf.org/doc/rfc7232/`) MUST be replaced with RFC 9110 throughout the guide.

---

## 3. Headers

| Header | Accepted value | Semantics |
|--------|----------------|-----------|
| `If-Match` | Bare ETag string or `*` | Execute **only if** the object's current ETag matches the provided value. |
| `If-None-Match` | `*` only | Execute **only if** the object does not currently exist. |

**ETag format rule:** Provide ETags as bare strings without surrounding double-quotes (e.g., `d41d8cd98f00b204e9800998ecf8427e`, not `"d41d8cd98f00b204e9800998ecf8427e"`).

**Mutual exclusion rule:** `If-Match` and `If-None-Match` MUST NOT appear in the same request. Doing so returns HTTP `400 Bad Request`.

---

## 4. HTTP response code matrix

This table applies to all three in-scope operations.

| HTTP code | Trigger condition |
|-----------|------------------|
| `200 OK` / `204 No Content` | Condition satisfied — operation executed successfully |
| `404 Not Found` | `If-Match` (with any ETag value **or** `*`) — the target object does **not exist** (no current version at the key, or the current version is a delete marker) |
| `412 Precondition Failed` | `If-Match` — the object **exists** but its current ETag does **not** match the provided value; OR `If-None-Match: *` — the object **exists** |
| `409 ConditionalRequestConflict` | A concurrent operation conflicted — the caller must retry |
| `400 Bad Request` | Both `If-Match` and `If-None-Match` are present in the same request |

### 4.1 HTTP 404 vs HTTP 412 for `If-Match` — decision rules

```
If-Match header present?
│
├─ object does NOT exist (no key, no current version, or current
│  version is a delete marker)
│  └─ → HTTP 404 Not Found
│
└─ object EXISTS (current version is a regular object)
   ├─ ETag matches (or header value is `*`)
   │  └─ → operation proceeds (2xx)
   └─ ETag does NOT match
      └─ → HTTP 412 Precondition Failed
```

---

## 5. Global versioning and delete marker rules

- All conditions are evaluated against the **current version** of the object, regardless of whether versioning is enabled on the bucket.
- A **delete marker** in a versioned bucket is **not** considered an existing object for the purpose of conditional evaluation:
  - `If-Match` with an ETag **or** `*` → **HTTP 404 Not Found** when the current version is a delete marker.
  - `If-None-Match: *` → **succeeds** when the current version is a delete marker (treated as non-existent).

---

## 6. Functional requirements by operation

### 6.1 PutObject — conditional write

#### Purpose

Attach a precondition to an object upload to prevent accidental overwrites or to implement first-write-wins logic.

#### Use cases

| Use case | Header | Behaviour |
|----------|--------|-----------|
| First-write-wins / distributed lock | `If-None-Match: *` | Only the first writer succeeds; all concurrent attempts receive `412 Precondition Failed` |
| Safe overwrite (optimistic concurrency) | `If-Match: <etag>` | Write proceeds only if the object's current ETag matches; prevents lost-update race conditions |
| Write-if-exists (any current content) | `If-Match: *` | Write proceeds only if the object already exists |

#### Versioning behaviour — PutObject

| Bucket state | `If-None-Match: *` | `If-Match: <etag>` | `If-Match: *` |
|---|---|---|---|
| Non-versioned — no object at key | Succeeds | **HTTP 404 Not Found** | **HTTP 404 Not Found** |
| Non-versioned — object exists, ETag matches | **HTTP 412 Precondition Failed** | Succeeds (object overwritten) | Succeeds (object overwritten) |
| Non-versioned — object exists, ETag does not match | **HTTP 412 Precondition Failed** | **HTTP 412 Precondition Failed** | Succeeds (object overwritten) |
| Versioned — current version is a regular object | **HTTP 412 Precondition Failed** | Succeeds if ETag matches → creates new version | Succeeds → creates new version |
| Versioned — current version is a **delete marker** | Succeeds → creates new version | **HTTP 404 Not Found** | **HTTP 404 Not Found** |
| Versioned — no version at all | Succeeds → creates first version | **HTTP 404 Not Found** | **HTTP 404 Not Found** |

---

### 6.2 DeleteObject — conditional delete

#### Purpose

Delete an object only if the ETag condition is satisfied.

#### Header support

- `If-Match`: supported
- `If-None-Match`: **not supported** for `DeleteObject`

#### Use cases

| Use case | Header | Behaviour |
|----------|--------|-----------|
| Safe delete (optimistic concurrency) | `If-Match: <etag>` | Delete proceeds only if current ETag matches; prevents deleting an object that has been modified by a concurrent writer |
| Delete-if-exists | `If-Match: *` | Delete proceeds only if the object currently exists |

#### Versioning behaviour — DeleteObject

| Bucket state | `If-Match: <etag>` | `If-Match: *` |
|---|---|---|
| Non-versioned — no object at key | **HTTP 404 Not Found** | **HTTP 404 Not Found** |
| Non-versioned — object exists, ETag matches | Permanently deleted | Permanently deleted |
| Non-versioned — object exists, ETag does not match | **HTTP 412 Precondition Failed** | Permanently deleted |
| Versioned — current version is a regular object, ETag matches | Creates delete marker | Creates delete marker |
| Versioned — current version is a regular object, ETag does not match | **HTTP 412 Precondition Failed** | Creates delete marker |
| Versioned — current version is a **delete marker** | **HTTP 404 Not Found** | **HTTP 404 Not Found** |

> **Note:** In a versioned bucket, a successful `DeleteObject` without `--version-id` creates a delete marker as the new current version — it does not permanently remove the object. To permanently delete a specific version, the request must include `--version-id`.

---

### 6.3 CompleteMultipartUpload — conditional finalization

#### Purpose

Attach a precondition to the final step of a multipart upload. The condition is evaluated **at the time `CompleteMultipartUpload` is called**, not when `CreateMultipartUpload` was initiated.

#### Use cases

| Use case | Header | Behaviour |
|----------|--------|-----------|
| Atomic large-file replacement | `If-Match: <etag>` | Finalization proceeds only if the target object has not been modified during the upload window |
| First-write-wins for large files | `If-None-Match: *` | Only one concurrent multipart upload permanently creates the object at finalization |

#### Versioning behaviour — CompleteMultipartUpload

| Bucket state | `If-None-Match: *` | `If-Match: <etag>` | `If-Match: *` |
|---|---|---|---|
| Non-versioned — no object at key at finalization time | Succeeds | **HTTP 404 Not Found** | **HTTP 404 Not Found** |
| Non-versioned — object exists at finalization time, ETag matches | **HTTP 412 Precondition Failed** | Succeeds (object replaced) | Succeeds (object replaced) |
| Non-versioned — object exists at finalization time, ETag does not match | **HTTP 412 Precondition Failed** | **HTTP 412 Precondition Failed** | Succeeds (object replaced) |
| Versioned — current version is a regular object | **HTTP 412 Precondition Failed** | Succeeds if ETag matches → creates new version | Succeeds → creates new version |
| Versioned — current version is a **delete marker** | Succeeds → creates new version | **HTTP 404 Not Found** | **HTTP 404 Not Found** |
| Versioned — no version at all | Succeeds → creates first version | **HTTP 404 Not Found** | **HTTP 404 Not Found** |

#### 409 retry procedure for CompleteMultipartUpload

When a `409 ConditionalRequestConflict` is returned, the caller MUST restart the entire multipart upload sequence:

1. Call `AbortMultipartUpload` to clean up the in-progress upload.
2. Retrieve the current ETag of the target object using a plain `HeadObject` call (no conditional header).
3. Call `CreateMultipartUpload` to start a new upload.
4. Re-upload all parts with `UploadPart`.
5. Retry `CompleteMultipartUpload` with the updated condition.

---

## 7. Cross-cutting constraints

| Constraint | Specification |
|------------|--------------|
| Atomicity | The condition check and the operation execute as a single atomic unit. No concurrent operation can alter the object between the check and the execution. |
| Single header per request | Combining `If-Match` and `If-None-Match` in the same request returns `400 Bad Request`. |
| 409 retry (PutObject / DeleteObject) | On `409 ConditionalRequestConflict`, re-fetch the current ETag using a plain `HeadObject` call (no conditional header) and retry the request with the updated value. |
| IAM permissions | No additional IAM permissions are required. Existing `s3:PutObject`, `s3:DeleteObject`, and `s3:GetObject` grants are sufficient. |
| Object Lock compatibility | Conditional headers are evaluated independently from Object Lock (WORM) rules. Both constraints apply simultaneously. |
| Encryption support | Conditional writes are supported for unencrypted objects and SSE-S3 encrypted objects. SSE-C support is not yet available. |

---

## 8. Open questions

| # | Question | Owner | Status |
|---|----------|-------|--------|
| 1 | Should the `409` retry procedure for `PutObject` and `DeleteObject` in the "Important considerations" section also be updated to remove the mention of "HeadObject as conditional call" and clarify it is a plain utility call? | Doc writer | Open |

---

## 9. References

| Source | URL | Consulted on |
|--------|-----|--------------|
| RFC 9110 — HTTP Semantics | https://datatracker.ietf.org/doc/rfc9110/ | 2026-04-29 |
| Current guide (to be updated) | `pages/storage_and_backup/object_storage/s3_conditional_writes/guide.en-gb.md` | 2026-04-29 |
