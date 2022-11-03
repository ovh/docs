---
title: Object Storage - Encrypt your server-side objects with SSE-C
slug: s3/encrypt-your-objects-with-sse-c
excerpt:
section: Tutorials
order: 005
---

<style>
td:nth-of-type(1) {
  vertical-align: top;
  white-space: nowrap;
}
.optional {
  font-style:italic;
  margin-top:10px;
  text-align:center;
}
</style>

**Last updated 15<sup>th</sup> April, 2022**

## Objective

Using server-side encryption with customer-provided encryption keys (SSE-C) allows you to set your own encryption keys.  

When you upload an object, S3 Object Storage uses the encryption key you provide to apply AES-256 encryption to your data. When you retrieve an object, you must provide the same encryption key as part of your request. S3 Object Storage first verifies that the encryption key you provided matches and then decrypts the object before returning the object data to you.

**This guide explains how to encrypt your server-side objects with SSE-C.**

> [!warning]
>
> S3 Object Storage does not store the encryption key you provide. That means if you lose the encryption key, you lose the object. The only thing left to do is to delete it.
>

## Requirements

- A bucket
- A user with the required access rights on the bucket
- Have installed and configured aws-cli

See our [Getting started with S3 Object Storage](https://docs.ovh.com/gb/en/storage/object-storage/s3/getting-started-with-object-storage/) guide.

## Instructions

When you use SSE-C, you must provide encryption key information using the following request headers.

| Name | Description |
|:-----|:------------|
| --sse​-customer-algorithm | Use this header to specify the encryption algorithm. The header value must be *AES256.* |
| --sse-customer-key | Use this header to provide the 256-bit, base64-encoded encryption key for S3 Object Storage to use to encrypt or decrypt your data. |
| --sse​-customer-key-md5<p class="optional">Optional</p>| Use this header to provide the base64-encoded 128-bit MD5 digest of the encryption key according to RFC 1321. S3 Object Storage uses this header for a message integrity check to ensure that the encryption key was transmitted without error. |

### Creating an encryption key

Example of creating an encryption key ( *--sse-customer-key* ):

```bash
$ encKey=$(openssl rand -base64 32)
```

and the MD5 key ( *--sse-customer-key-md5* ):

```bash
$ md5Key=$(echo $encKey | md5sum | awk '{print $1}' | base64 -w0)
```

### Uploading an object with SSE-C

To upload an object with SSE-C and aws-cli, proceed as follows:

```bash
$ aws s3api put-object \
  --body /etc/magic \
  --bucket <bucket_name> \
  --key encrypt_magic \
  --sse-customer-algorithm AES256 \
  --sse-customer-key $encKey \
  --sse-customer-key-md5 $md5Key
```

### Downloading an object with SSE-C

To download an object with SSE-C and aws-cli, proceed as follows:

```bash
$ aws s3api get-object \
  --bucket <bucket_name> \
  --key encrypt_magic \
  --sse-customer-algorithm AES256 \
  --sse-customer-key $encKey \
  --sse-customer-key-md5 $md5Key \
  decrypt_magic
```

Without encryption headers, you will get a `Bad Request` error:

```bash
$ aws s3api get-object \
  --bucket <bucket_name> \
  --key encrypt_magic \
  decrypt_magic

$ An error occurred (400) when calling the HeadObject operation: Bad Request
```

### Getting object metadata with SSE-C

To get an object metadata with SSE-C and aws-cli, proceed as follows:

```bash
$ aws s3api head-object \
  --bucket <bucket_name> \
  --key encrypt_magic \
  --sse-customer-algorithm AES256 \
  --sse-customer-key $encKey \
  --sse-customer-key-md5 $md5Key
```

Output should look like:

```json
{
    "LastModified": "Tue, 19 Apr 2022 09:38:47 GMT",
    "ContentLength": 111,
    "ETag": "\"272913026300e7ae9b5e2d51f138e674\"",
    "VersionId": "1650376416551536",
    "ContentType": "binary/octet-stream",
    "Metadata": {},
    "StorageClass": "STANDARD"
}
```

Without encryption headers, you will get a `Bad Request` error.

### Deleting an encrypted object with SSE-C

To delete an encrypted object with SSE-C and aws-cli, proceed as follows:

```bash
$ aws s3 rm s3://<bucket_name>/encrypt_magic
```

### Presigned URLs and SSE-C

Presigned URLs, that can be used for operations such as upload a new object, retrieve an existing object, or object metadata, support the SSE-C as follows:

- When creating a presigned URL, you must specify the algorithm using the `x-amz-server-side​-encryption​-customer-algorithm` header in the signature calculation.

- When using the presigned URL to upload a new object, retrieve an existing object, or retrieve only object metadata, you must provide all the encryption headers in your client application.

> [!primary]
>
> You can use the presigned URL for SSE-C objects only programmatically, because in addition to the presigned URL, you also need to include HTTP headers that are specific to SSE-C objects.
>

## Go further

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/).
