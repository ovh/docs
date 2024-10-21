---
title: "Getting started with OVHcloud Key Management Service (KMS)"
excerpt: "Discover the steps you need to take to set up your first Key Management Service (KMS), create a key, and access it"
updated: 2024-10-18
---

> [!warning]
>
> The OVHcloud KMS is currently in beta phase. This guide may be incomplete, and will be updated during the beta period.
> Feel free to send us feedback on the dedicated Discord channel: <https://discord.gg/ovhcloud>.
>

## Objective

The purpose of this guide is to show you the steps you need to take to set up your first Key Management Service (KMS), create a key, and an access certificate.

## Requirements

- An [OVHcloud customer account](/pages/account_and_service_management/account_information/ovhcloud-account-creation).

## Instructions

### Ordering your KMS

Each KMS is associated with a region, so the keys stored in that region are guaranteed to stay in that region.<br>
You can order multiple KMSs, either in different regions or in the same region.

Since the billing for a KMS is based on the number of keys stored on it, ordering a KMS does not generate billing per se.

You can order a KMS from the [OVHcloud Control Panel](/links/manager) by going to one of the following menus:

- Click `Bare Metal Cloud`{.action} then `Identity, Security & Operations`{.action}. Click `Key Management Service`{.action} then the `Order a KMS`{.action} button.
- Click `Hosted Private Cloud`{.action} then `Identity, Security & Operations`{.action}. Click `Key Management Service`{.action} then the `Order a KMS`{.action} button.

![Access to the KMS menu](images/access_to_the_KMS_menu_01.png){.thumbnail}

Enter the region of your KMS.

![Order the KMS](images/order_kms_01.png){.thumbnail}

You can then finalize the command in another tab. If it has not opened automatically, the command link is displayed:

![Order the KMS](images/order_kms_02.png){.thumbnail}

After a few seconds, the KMS will be available in your Control Panel.

![Order the KMS](images/order_kms_03.png){.thumbnail}

### Via the the administration console

#### Create an encryption key

You can create an encryption key from the dedicated menu of the OVHcloud console, using the `Create a key`{.action} button.

![Create a key](images/create_key_01.png){.thumbnail}

A form allows you to configure the key and select its type, size and usage.

![Create a key](images/create_key_02.png){.thumbnail}

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

It's possible to create this certificate from the dedicated entry on the administration console with the `Generate an access certificate`{.action} button.

![Create a certificate](images/create_certificat_01.png){.thumbnail}

The first part of the form allow you to precise its validity duration and providing or not your own private key through a Certificate Signing Request (CSR).

- Without providing a private key:

If you do not provide a CSR, OVHcloud will generate the certificate and a private key as well.

![Create a certificate](images/create_certificat_02.png){.thumbnail}

- With a CSR:

If you own your own private key, it's possible to use it with a CSR.

![Create a certificate](images/create_certificat_03.png){.thumbnail}

The second part of the form allow you to indicate the [OVHcloud identities](/pages/manage_and_operate/iam/identities-management) associated to this certificate used to calculate access rights via the [OVHcloud IAM](/pages/account_and_service_management/account_information/iam-policy-ui).
It's possible to add the `root` identity to the certificate so not to be constrained by the OVHcloud IAM.

![Create a certificate](images/create_certificat_04.png){.thumbnail}

You then need to download the private key of the certificate.

> [!warning]
>
> The private key will no longer be accessible at a later stage. If you lose it, you will need to regenerate a certificate.
>

![Create a certificate](images/create_certificat_05.png){.thumbnail}

Finally it's possible to download the public key of the certificate from the dashboard.

![Create a certificate](images/create_certificat_06.png){.thumbnail}

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
|crv|P-256, P-384, P-521|(optional) Cryptographic curve for EC type keys|

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
  "crv": "P-256"
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

#### Create an access certificate

To communicate with your KMS, you will need to create an access certificate.
This will be used for any interaction with the KMS, either to create encryption keys or to carry out operations with them.

Each certificate contains an [OVHcloud identity](/pages/manage_and_operate/iam/identities-management) used to calculate access rights via the [OVHcloud IAM](/pages/account_and_service_management/account_information/iam-policy-ui)

You can generate this certificate by letting OVHcloud generate the private key, or by providing your own private security via a Certificate Signing Request (CSR).

##### Without providing a private key

If you do not provide a CSR, OVHcloud will generate the access certificate along with a private key.

You can generate a certificate via the following API:

> [!api]
>
> @api {v2} /okms POST /okms/resource/{okmsId}/credential
>

The following information is required:

- **name**: the name of the certificate
- **identityURNs**: list of OVHcloud identities in URN format that will be provided to the IAM for calculating access rights
- **description**: certificate description (optional)
- **validity**: certificate validity duration in days - 365 days by default (optional)

**Example of certificate creation with root account:**

```json
{
  "description": "My root access credential",
  "identityURNs": [
    "urn:v1:eu:identity:account:xx1111-ovh"
  ],
  "name": "root",
  "validity": 30
}
```

**Example of certificate creation with local user:**

```json
{
  "description": "My access credential",
  "identityURNs": [
    "urn:v1:eu:identity:user:xx1111-ovh/john.smith",
    "urn:v1:eu:identity:group:xx1111-ovh/my_group"
  ],
  "name": "John Smith",
  "validity": 30
}
```

The API then returns the certificate creation status:

```json
{
  "id": "f18b5e0d-75b8-40a3-9b0e-XXXXXX",
  "name": "John Smith",
  "description": "My access credential",
  "identityURNs": [
    "urn:v1:eu:identity:user:xx1111-ovh/john.smith",
    "urn:v1:eu:identity:group:xx1111-ovh/my_group"
  ],
  "status": "CREATING",
  "fromCSR": false,
  "privateKeyPEM": "-----BEGIN EC PRIVATE KEY-----\nMHcCAQEEIDOfWuMVQxl5quoURzThF4zTI9YYTmylSaPjneLBwP+2oAoGCCqGSM49\nAwEHoUQDQgAERd1eMw0YdAD+E9oSymGc4bCL1mfJl0EZwoM2ya/uKFFVFnGMnckg\nXXXXXXXXXXXXXXX==\n-----END EC PRIVATE KEY-----\n",
  "createdAt": "2024-04-04T12:26:28.856619+02:00",
  "expiredAt": "2025-04-04T12:26:28.856616+02:00"
}
```

Copy the value of the **privateKeyPEM** field to a **domain.key** file

> [!warning]
>
> The private key will no longer be accessible at a later stage. If you lose it, you will need to regenerate a certificate.
>

Then copy the certificate ID and access its details via the API:

> [!api]
>
> @api {v2} /okms GET /okms/resource/{okmsId}/credential/{credentialId}
>

The API returns the certificate in PEM:

```json
{
  "id": "f18b5e0d-75b8-40a3-9b0e-XXXXXX",
  "name": "John Smith",
  "description": "My access credential",
  "identityURNs": [
    "urn:v1:eu:identity:user:xx1111-ovh/john.smith",
    "urn:v1:eu:identity:group:xx1111-ovh/my_group"
  ],
  "status": "READY",
  "fromCSR": false,
  "certificatePEM": "-----BEGIN CERTIFICATE-----\nMIIBqTCCAVCgAwIBAgIRAPGLXg11uECjmw5x/+X/A8swCgYIKoZIzj0EAwIwFTET\nMBEGA1UEAxMKQ0NNVXNlcnNDQTAeFw0yNDA0MDQxMDI2MjhaFw0yNTA0MDQxMDI2\nMjhaMC8xLTArBgNVBAMTJGU5MGM1ODQxLWYzOWUtNDk4My04NTk2LTYyZmYwYzUz\nOGI2YjBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABEXdXjMNGHQA/hPaEsphnOGw\ni9ZnyZdBGcKDNsmv7ihRVRZxjJ3JICEusleqD4lE27DAAdzbRdqAhpCqsTks+sSj\nZzBlME4GA1UdEQEB/wREMEKgQAYKKwYBBAGCNxQCA6AyDDBva21zLmRvbWFpbjpl\nOTBjNTg0MS1mMzllLTQ5ODMtODU5Ni02MmZmMGM1MzhiNmIwEwYDVR0lBAwwCgYI\nKwYBBQUHAwIwCgYIKoZIzj0EAwIDRwAwRAIgdWGYm1UQMg0sTIgROFH5mWiAh/lk\nDlyP5HhrWyFB9BICIDl5wtUWgCmo6TjOqXXXXXXXXXXXXXX\n-----END CERTIFICATE-----",
  "createdAt": "2024-04-04T12:26:28.856619+02:00",
  "expiredAt": "2025-04-04T12:26:28.856616+02:00"
}
```

Copy the value of the **certificatePEM** field to a **client.cert** file.

##### With a CSR

If you have your own private key, it is possible to use it by providing a CSR.

You can generate a certificate via the following API:

> [!api]
>
> @api {v2} /okms POST /okms/resource/{okmsId}/credential
>

The following information is required:

- **name**: the name of the certificate
- **identityURNs**: list of OVHcloud identities in URN format that will be provided to the IAM for calculating access rights
- **description**: certificate description (optional)
- **validity**: certificate validity duration in days - 365 days by default (optional)
- **csr**: the content of the CSR

**Example of certificate creation:**

```json
{
  "csr": "-----BEGIN CERTIFICATE REQUEST-----\nMIICvDCCAaQCAQAwdzELMAkGA1UEBhMCVVMxDTALBgNVBAgMBFV0YWgxDzANBgNV\nBAcMBkxpbmRvbjEWMBQGA1UECgwNRGlnaUNlcnQgSW5jLjERMA8GA1UECwwIRGln\naUNlcnQxHTAbBgNVBAMMFGV4YW1wbGUuZGlnaWNlcnQuY29tMIIBIjANBgkqhkiG\n9w0BAQEFAAOCAQ8AMIIBCgKCAQEA8+To7d+2kPWeBv/orU3LVbJwDrSQbeKamCmo\nwp5bqDxIwV20zqRb7APUOKYoVEFFOEQs6T6gImnIolhbiH6m4zgZ/CPvWBOkZc+c\n1Po2EmvBz+AD5sBdT5kzGQA6NbWyZGldxRthNLOs1efOhdnWFuhI162qmcflgpiI\nWDuwq4C9f+YkeJhNn9dF5+owm8cOQmDrV8NNdiTqin8q3qYAHHJRW28glJUCZkTZ\nwIaSR6crBQ8TbYNE0dc+Caa3DOIkz1EOsHWzTx+n0zKfqcbgXi4DJx+C1bjptYPR\nBPZL8DAeWuA8ebudVT44yEp82G96/Ggcf7F33xMxe0yc+Xa6owIDAQABoAAwDQYJ\nKoZIhvcNAQEFBQADggEBAB0kcrFccSmFDmxox0Ne01UIqSsDqHgL+XmHTXJwre6D\nhJSZwbvEtOK0G3+dr4Fs11WuUNt5qcLsx5a8uk4G6AKHMzuhLsJ7XZjgmQXGECpY\nQ4mC3yT3ZoCGpIXbw+iP3lmEEXgaQL0Tx5LFl/okKbKYwIqNiyKWOMj7ZR/wxWg/\nZDGRs55xuoeLDJ/ZRFf9bI+IaCUd1YrfYcHIl3G87Av+r49YVwqRDT0VDV7uLgqn\n29XI1PpVUNCPQGn9p/eX6Qo7vpDaPybRtA2R7XLKjQaF9oXWeCUqy1hvJac9QFO2\n97Ob1alpHPoZ7mWiEXXXXXXXXXXXXX\n-----END CERTIFICATE REQUEST-----",
  "description": "My access credential",
  "identityURNs": [
    "urn:v1:eu:identity:user:xx1111-ovh/john.smith",
    "urn:v1:eu:identity:group:xx1111-ovh/my_group"
  ],
  "name": "John Smith",
  "validity": 30
}
```

The API then returns the certificate creation status:

```json
{
  "id": "f18b5e0d-75b8-40a3-9b0e-XXXXXX",
  "name": "John Smith",
  "description": "My access credential",
  "identityURNs": [
    "urn:v1:eu:identity:user:xx1111-ovh/john.smith",
    "urn:v1:eu:identity:group:xx1111-ovh/my_group"
  ],
  "status": "CREATING",
  "fromCSR": true,
  "createdAt": "2024-04-04T12:26:28.856619+02:00",
  "expiredAt": "2025-04-04T12:26:28.856616+02:00"
}
```

Copy the ID of the certificate and access its details via the API:

> [!api]
>
> @api {v2} /okms GET /okms/resource/{okmsId}/credential/{credentialId}
>

The API returns the certificate in PEM:

```json
{
  "id": "f18b5e0d-75b8-40a3-9b0e-XXXXXX",
  "name": "John Smith",
  "description": "My access credential",
  "identityURNs": [
    "urn:v1:eu:identity:user:xx1111-ovh/john.smith",
    "urn:v1:eu:identity:group:xx1111-ovh/my_group"
  ],
  "status": "READY",
  "fromCSR": true,
  "certificatePEM": "-----BEGIN CERTIFICATE-----\nMIIBqTCCAVCgAwIBAgIRAPGLXg11uECjmw5x/+X/A8swCgYIKoZIzj0EAwIwFTET\nMBEGA1UEAxMKQ0NNVXNlcnNDQTAeFw0yNDA0MDQxMDI2MjhaFw0yNTA0MDQxMDI2\nMjhaMC8xLTArBgNVBAMTJGU5MGM1ODQxLWYzOWUtNDk4My04NTk2LTYyZmYwYzUz\nOGI2YjBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABEXdXjMNGHQA/hPaEsphnOGw\ni9ZnyZdBGcKDNsmv7ihRVRZxjJ3JICEusleqD4lE27DAAdzbRdqAhpCqsTks+sSj\nZzBlME4GA1UdEQEB/wREMEKgQAYKKwYBBAGCNxQCA6AyDDBva21zLmRvbWFpbjpl\nOTBjNTg0MS1mMzllLTQ5ODMtODU5Ni02MmZmMGM1MzhiNmIwEwYDVR0lBAwwCgYI\nKwYBBQUHAwIwCgYIKoZIzj0EAwIDRwAwRAIgdWGYm1UQMg0sTIgROFH5mWiAh/lk\nDlyP5HhrWyFB9BICIDl5wtUWgCmo6TjOqXXXXXXXXXXXXXX\n-----END CERTIFICATE-----",
  "createdAt": "2024-04-04T12:26:28.856619+02:00",
  "expiredAt": "2025-04-04T12:26:28.856616+02:00"
}
```

Copy the value of the **certificatePEM** field to a **client.cert** file.

## Go further

[Using the OVHcloud KMS with your data](/pages/manage_and_operate/kms/kms-usage)
Join our [community of users](/links/community).
