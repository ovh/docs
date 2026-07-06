---
title: "Object Storage - Browser-Based Uploads Using POST"
excerpt: "Learn how to let end users upload files directly from their browser to an OVHcloud Object Storage bucket using a server-signed HTML form"
updated: 2026-07-06
---

## Objective

**This guide explains how to implement browser-based direct uploads to OVHcloud Object Storage using the HTTP POST method, with server-side POST Policy generation and SigV4 authentication.**

## Requirements

- A [Public Cloud project](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project) in your OVHcloud account
- An [Object Storage user](/pages/storage_and_backup/object_storage/s3_identity_and_access_management) already created
- [AWS CLI installed and configured](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage)

## Instructions

### Overview

Browser-based POST uploads allow web applications to let end users upload files directly to an OVHcloud Object Storage bucket, without routing file data through your application server. Your backend generates a policy and signature, the user selects a file, and the browser sends the upload directly to the bucket.

The upload flow consists of the following steps:

1. Your backend generates a **POST Policy** (a JSON document defining upload constraints) and signs it with a SigV4 HMAC-SHA256 signature.
2. Your HTML page contains a form embedding the policy, signature, and object metadata as hidden fields.
3. The user selects a file and submits the form.
4. The browser sends the `multipart/form-data` POST request directly to the OVHcloud Object Storage endpoint.
5. OVHcloud validates the policy, verifies the signature, and stores the object.
6. The browser receives a response: an HTTP redirect or a status code depending on your form configuration.

> [!primary]
> OVHcloud Object Storage requires the **virtual-hosted style** URL format for POST uploads:
>
> ```
> https://<bucket_name>.s3.<region>.io.cloud.ovh.net/
> ```
>
> Replace `<region>` with the OVHcloud region identifier (for example: `gra`, `rbx`, `sbg`, `bhs`, `de`, `uk`).

> [!warning]
> **HTTPS is mandatory.** The POST Policy, credentials, and signature are transmitted in plaintext within the HTML form. Using HTTP exposes them in transit and must not be used.

Objects written via POST are immediately visible in the bucket (strong read-after-write consistency). The maximum object size per POST upload is 5 GB.

### Configure bucket CORS

Browser POST uploads always trigger a CORS preflight (`OPTIONS`) request before any data is sent. Without a matching CORS rule on the bucket, the browser blocks the upload silently.

Save the following XML to a file named `cors.xml`:

```xml
<CORSConfiguration>
  <CORSRule>
    <AllowedOrigin>https://your-application.com</AllowedOrigin>
    <AllowedMethod>POST</AllowedMethod>
    <AllowedHeader>*</AllowedHeader>
    <ExposeHeader>ETag</ExposeHeader>
    <ExposeHeader>x-amz-version-id</ExposeHeader>
    <MaxAgeSeconds>3000</MaxAgeSeconds>
  </CORSRule>
</CORSConfiguration>
```

Then apply it to your bucket:

```sh
aws s3api put-bucket-cors --bucket <bucket_name> --cors-configuration file://cors.xml
```

**Explanations:**

- `--bucket <bucket_name>`: replace with the name of your bucket.
- `--cors-configuration file://cors.xml`: path to the CORS configuration file.

> [!primary]
> - Set `AllowedOrigin` to the exact origin of your web application. Using `*` is accepted but not recommended in production.
> - Remove `<ExposeHeader>x-amz-version-id</ExposeHeader>` if versioning is not enabled on the bucket.

### Generate the POST Policy

The POST Policy is a UTF-8 JSON document generated server-side. It defines the constraints that OVHcloud validates before accepting the upload. The document must be base64-encoded before being placed in the form.

#### Policy structure

```json
{
  "expiration": "2026-07-07T12:00:00.000Z",
  "conditions": [
    {"bucket": "<bucket_name>"},
    ["starts-with", "$key", "uploads/"],
    {"x-amz-algorithm": "AWS4-HMAC-SHA256"},
    {"x-amz-credential": "<access_key>/20260706/<region>/s3/aws4_request"},
    {"x-amz-date": "20260706T000000Z"},
    ["content-length-range", 1, 10485760]
  ]
}
```

**Explanations:**

- `expiration`: mandatory ISO 8601 timestamp in GMT. The policy is rejected with HTTP 403 once this time is passed. Evaluated against the OVHcloud server time.
- `conditions`: every form field included in the request (except `x-amz-signature`, `file`, and `policy` itself) must have a matching condition in this array.
- `content-length-range`: restricts the accepted file size in bytes (here, 1 byte to 10 MB).

#### Condition types

| Type | Syntax | Description |
|---|---|---|
| Exact match | `{"field": "value"}` | The field value must exactly equal the given value |
| Exact match (array) | `["eq", "$field", "value"]` | Equivalent to the object form above |
| Starts-with | `["starts-with", "$field", "prefix"]` | The field value must start with the given prefix |
| Starts-with (any) | `["starts-with", "$field", ""]` | Any value is accepted for that field |
| Content-length range | `["content-length-range", min, max]` | File size must fall within the given byte range |

> [!primary]
> - The `${filename}` variable in the `key` field is substituted with the browser-supplied filename before policy validation. Use a `starts-with` condition on `$key` to restrict accepted filenames.
> - Fields prefixed with `x-ignore-` are excluded from policy validation and are not stored on the object.
> - Unicode values must be escaped as `\uXXXX`. Backslash `\` and dollar sign `$` characters must also be escaped.
> - OVHcloud normalises all form field names to lowercase before validation.

### Calculate the SigV4 signature

The signature is computed server-side using HMAC-SHA256. The input to the signature is the base64-encoded policy document.

**Step 1 - Encode the policy**

Encode the policy JSON as a UTF-8 byte string, then base64-encode those bytes. The resulting string is both the `policy` form field value and the input to the signature (StringToSign).

**Step 2 - Derive the signing key**

```
dateKey              = HMAC-SHA256("AWS4" + <secret_key>, <date>)
dateRegionKey        = HMAC-SHA256(dateKey, <region>)
dateRegionServiceKey = HMAC-SHA256(dateRegionKey, "s3")
signingKey           = HMAC-SHA256(dateRegionServiceKey, "aws4_request")
```

**Explanations:**

- `<secret_key>`: the secret access key of your Object Storage user.
- `<date>`: signing date in `YYYYMMDD` format (for example: `20260706`). Must be within 7 days of the OVHcloud server's current date.
- `<region>`: OVHcloud region identifier (for example: `gra`, `rbx`, `bhs`). Must match the region used in `x-amz-credential`.
- HMAC-SHA256 inputs and outputs are raw bytes, not hex strings, at every intermediate step.

**Step 3 - Calculate the signature**

```
signature = hex( HMAC-SHA256(signingKey, StringToSign) )
```

The result is a lowercase hexadecimal string. Use this value as the `x-amz-signature` form field.

### Build the HTML upload form

The upload form must use `method="POST"` and `enctype="multipart/form-data"`. The `action` attribute must be the virtual-hosted bucket URL.

> [!warning]
> The `file` input field must be the **last field** in the form. Any fields placed after `file` are ignored by OVHcloud Object Storage.

#### Example form

```html
<form action="https://<bucket_name>.s3.<region>.io.cloud.ovh.net/"
      method="POST"
      enctype="multipart/form-data">

  <!-- Required authentication fields -->
  <input type="hidden" name="key"               value="uploads/${filename}">
  <input type="hidden" name="policy"            value="<base64_encoded_policy>">
  <input type="hidden" name="x-amz-algorithm"  value="AWS4-HMAC-SHA256">
  <input type="hidden" name="x-amz-credential" value="<access_key>/20260706/<region>/s3/aws4_request">
  <input type="hidden" name="x-amz-date"       value="20260706T000000Z">
  <input type="hidden" name="x-amz-signature"  value="<hex_signature>">

  <!-- Optional fields (examples) -->
  <input type="hidden" name="Content-Type"              value="image/jpeg">
  <input type="hidden" name="success_action_status"     value="201">
  <input type="hidden" name="x-amz-meta-uploaded-by"   value="user-123">

  <!-- File field must always be last -->
  <input type="file" name="file">
  <button type="submit">Upload</button>
</form>
```

#### Required form fields

| Field | Description |
|---|---|
| `key` | Object key. Accepts the `${filename}` variable, substituted with the browser-supplied filename |
| `policy` | Base64-encoded POST Policy JSON document |
| `x-amz-algorithm` | Always `AWS4-HMAC-SHA256` |
| `x-amz-credential` | `<access_key>/<date>/<region>/s3/aws4_request` |
| `x-amz-date` | Signing date in `YYYYMMDDTHHMMSSZ` format |
| `x-amz-signature` | HMAC-SHA256 signature of the policy, lowercase hex-encoded |
| `file` | File content - must be the last field in the form |

#### Optional form fields

| Field | Description |
|---|---|
| `acl` | Object ACL: `private`, `public-read`, `public-read-write`, `authenticated-read`, `bucket-owner-read`, `bucket-owner-full-control` |
| `Content-Type` | MIME type of the object |
| `Content-Disposition` | HTTP `Content-Disposition` header for the object |
| `Cache-Control` | HTTP `Cache-Control` header for the object |
| `Expires` | HTTP expiry date for the object |
| `success_action_redirect` | Absolute HTTPS URL to redirect the browser to after a successful upload |
| `success_action_status` | HTTP status code returned on success when no redirect is set: `200`, `201`, or `204` (default) |
| `x-amz-meta-*` | Custom user metadata fields (for example: `x-amz-meta-author`) |
| `tagging` | XML-formatted object tags |
| `x-amz-storage-class` | Storage class for the object |

> [!primary]
> Total form data, **excluding the file content**, must not exceed 20,480 bytes (20 KB). Only one file may be uploaded per POST request.

### Handle responses

#### Success responses

| `success_action_status` value | HTTP status | Response body |
|---|---|---|
| `204` (default) | 204 | Empty |
| `200` | 200 | Empty |
| `201` | 201 | XML with `Location`, `Bucket`, `Key`, `ETag` |

If `success_action_redirect` is set and the upload succeeds, the browser is redirected to that URL. The query parameters `bucket`, `key`, and `etag` are appended automatically. `success_action_redirect` takes priority over `success_action_status` when both fields are present.

> [!warning]
> OVHcloud enforces no domain restriction on the `success_action_redirect` target. Always restrict this field server-side when generating the form to prevent open redirect vulnerabilities.

#### Error responses

On failure, OVHcloud returns an S3-compatible XML error body:

```xml
<Error>
  <Code>AccessDenied</Code>
  <Message>...</Message>
  <RequestId>...</RequestId>
</Error>
```

Common error conditions:

| Condition | HTTP status | XML error code |
|---|---|---|
| Expired policy | 403 | `AccessDenied` |
| Invalid signature | 403 | `SignatureDoesNotMatch` |
| Form field missing from policy conditions | 403 | `AccessDenied` |
| SSE-C key MD5 mismatch | 400 | `InvalidDigest` |
| `file` field not last or missing | 400 | `InvalidArgument` |
| File smaller than `content-length-range` minimum | 400 | `EntityTooSmall` |
| File larger than `content-length-range` maximum | 400 | `EntityTooLarge` |

### Server-Side Encryption

#### SSE-S3 - OVHcloud-managed key

To request server-side encryption with an OVHcloud-managed AES-256 key, add the following hidden field to the form:

| Form field | Value |
|---|---|
| `x-amz-server-side-encryption` | `AES256` |

Add the corresponding condition to the POST Policy:

```json
{"x-amz-server-side-encryption": "AES256"}
```

> [!primary]
> If the bucket has a default SSE-S3 configuration, encryption is applied automatically without adding this field to the form.

#### SSE-C - customer-provided key

To encrypt the object with a key you provide, add the following three fields to the form. All three must have corresponding conditions in the POST Policy.

| Form field | Description |
|---|---|
| `x-amz-server-side-encryption-customer-algorithm` | Always `AES256` |
| `x-amz-server-side-encryption-customer-key` | Your 256-bit (32-byte) AES key, base64-encoded (44 characters including padding) |
| `x-amz-server-side-encryption-customer-key-MD5` | Base64-encoded MD5 of the raw 32 key bytes (RFC 1321) |

> [!warning]
> - SSE-C fields in the request take priority over any default SSE-S3 bucket configuration.
> - With SSE-C, the returned `ETag` is an opaque server-generated value and cannot be used for content integrity verification.

### Versioning behavior

The versioning state of the target bucket affects the upload response:

| Bucket state | Behavior |
|---|---|
| Versioning disabled (default) | Concurrent writes to the same key result in last-writer-wins with no ordering guarantee |
| Versioning enabled | OVHcloud generates a unique version ID per upload. The response includes the `x-amz-version-id` header with a non-null value |
| Versioning suspended | The `x-amz-version-id` response header is present with the literal value `null` |

For more information, see the [Object Storage Versioning guide](/pages/storage_and_backup/object_storage/s3_versioning).

## Go further

Join our [community of users](/links/community).
