---
title: "Getting started with OVHcloud Key Management Service (KMS)"
excerpt: "Discover the steps you need to take to set up your first Key Management Service (KMS), create a key, and access it"
updated: 2025-10-14
---

## Objective

The purpose of this guide is to show you the steps you need to take to set up your first Key Management Service (KMS), create a key, and an access certificate.

## Requirements

- An [OVHcloud customer account](/pages/account_and_service_management/account_information/ovhcloud-account-creation).

## Instructions

### Ordering your KMS

Each KMS is associated with a region, so the keys stored in that region are guaranteed to stay in that region.<br>
You can order multiple KMSs, either in different regions or in the same region.

Since the billing for a KMS is based on the number of keys stored on it, ordering a KMS does not generate billing per se.

You can order a KMS from the [OVHcloud Control Panel](/links/manager) by going to `Identity, Security & Operations`{.action} and `Key Management Service`{.action}. Then click the `Order a KMS`{.action} button.

![Access to the KMS menu](images/access_to_the_KMS_menu_01.png){.thumbnail}

Enter the region of your KMS.

![Order the KMS](images/order_kms_01.png){.thumbnail}

You can then finalize the command in another tab. If it has not opened automatically, the command link is displayed:

![Order the KMS](images/order_kms_02.png){.thumbnail}

After a few seconds, the KMS will be available in your Control Panel.

![Order the KMS](images/order_kms_03.png){.thumbnail}

### Via the administration console

#### Create an encryption key

You can create an encryption key from the dedicated menu of the OVHcloud console, using the `Create a key`{.action} button.

![Create a key](images/create_key_01.png){.thumbnail}

A form allows you to configure the key and select its type, size and usage.

![Create a key](images/create_key_02.png){.thumbnail}

> [!warning]
>
> Only key creation through [regionalized APIs](/pages/manage_and_operate/kms/kms-usage) is covered by PCI-DSS certifications.
>

Once the key is created, click it to access its details.

The dashboard displays the cryptographic properties of the key, and the actions for renaming, disabling or deleting it.

To reduce the risks of an unwanted deletion, it is mandatory to disable a key before deleting it.

> [!warning]
>
> A deleted key is not recoverable by any means and such deletion involves the loss of any data encrypted with it. Any deletion should be performed with great caution.

![Create a key](images/create_key_03.png){.thumbnail}

#### Create an access certificate

To communicate with your KMS, you will need to create an access certificate.
This will be used for any interaction with the KMS, either to create encryption keys or to carry out operations with them.

Necessary steps to create an access certificate are available on the [dedicated documentation](/pages/manage_and_operate/kms/okms-certificate-management).

### Via the API

#### Create an encryption key

You can create a key using the following API:

|**Method**|**Path**|**Description**|
| :-: | :-: | :-: |
|POST|/okms/resource/{okmsId}/serviceKey|Create or import a CMK|

The API expects the following values:

|**Field**|**Value**|**Description**|
| :-: | :-: | :-: |
|name|string|Key name|
|context|string|Additional credential to verify key authenticity|
|type|oct, RSA, EC|Key type: Byte sequence (oct) for symmetric keys, RSA (RSA), Elliptic Curve (EC)|
|size|Integer|Key size - see lookup below|
|operations|Array|Key Usage - see lookup below|
|curve|P-256, P-384, P-521|(optional) Cryptographic curve for EC type keys|

**Example of symmetric key creation:**

```json
{
  "name": "My first AES key",
  "context": "project A",
  "type": "oct",
  "size": 256,
  "operations": [
    "encrypt",
    "decrypt"
  ]
}
```

**Example of asymmetric key creation:**

```json
{
  "name": "My first RSA key",
  "context": "project A",
  "type": "RSA",
  "size": 4096,
  "operations": [
    "sign",
    "verify"
  ]
}
```

**Example of EC key creation:**

```json
{
  "name": "My first EC key",
  "context": "project A",
  "type": "EC",
  "operations": [
    "sign",
    "verify"
  ],
  "curve": "P-256"
}
```

Depending on the key type, the possible sizes and operations are:

- **Oct**:
    - size: 128, 192, 256
    - operations:
        - encrypt, decrypt
        - wrapKey, unwrapKey
- **RSA**:
    - size: 2048, 3072, 4096
    - operations: sign, verify
- **EC**:
    - size: do not specify
    - curve: P-256, P-384, P-521
    - operations: sign, verify

> [!warning]
>
> Only key creation through [regionalized APIs](/pages/manage_and_operate/kms/kms-usage) is covered by PCI-DSS certifications.
>

#### Create an access certificate

To communicate with your KMS, you will need to create an access certificate.
This will be used for any interaction with the KMS, either to create encryption keys or to carry out operations with them.

Necessary steps to create an access certificate are available on the [dedicated documentation](/pages/manage_and_operate/kms/okms-certificate-management).

### Use the OVHcloud KMS

Once your OVHcloud KMS is set up, there are two different ways to use it:

- Using the [Rest API](/pages/manage_and_operate/kms/kms-usage) if you want to manually use the API to encrypt or sign your data.
- Using the [KMIP protocol](/pages/manage_and_operate/kms/kms-kmip) if you want to connect any KMIP compatible product with your OVHcloud KMS.

## Go further

[Using the OVHcloud KMS with your data](/pages/manage_and_operate/kms/kms-usage)
Join our [community of users](/links/community).
