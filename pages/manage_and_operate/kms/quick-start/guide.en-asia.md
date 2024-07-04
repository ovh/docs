---
title: "Getting started with OVHcloud Key Management Service (KMS)"
excerpt: "Discover the steps you need to take to set up your first Key Management Service (KMS), create a key, and access it"
updated: 2024-07-04
---

> [!warning]
>
> The OVHcloud KMS is currently in beta phase. This guide may be incomplete, and will be updated during the beta period.
> Feel free to send us feedback on the dedicated Discord channel: <https://discord.gg/ovhcloud>.
>

## Objective

The purpose of this guide is to show you the steps you need to take to set up your first Key Management Service (KMS), create a key, and access it.

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

### Creating an access certificate

To communicate with your KMS, you will need to create an access certificate.
This will be used for any interaction with the KMS, either to create encryption keys or to carry out operations with them.

Each certificate contains an [OVHcloud identity](/pages/manage_and_operate/iam/identities-management) used to calculate access rights via the [OVHcloud IAM](/pages/account_and_service_management/account_information/iam-policy-ui)

You can generate this certificate by letting OVHcloud generate the private key, or by providing your own private security via a Certificate Signing Request (CSR).

#### Without providing a private key

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
  "name": "access",
  "validity": 30
}
```

The API then returns the certificate creation status:

```json
{
  "id": "f18b5e0d-75b8-40a3-9b0e-XXXXXX",
  "name": "reader",
  "description": "My reader credential",
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
  "name": "reader",
  "description": "My reader credential",
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

#### With a CSR

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
  "name": "access",
  "validity": 30
}
```

The API then returns the certificate creation status:

```json
{
  "id": "f18b5e0d-75b8-40a3-9b0e-XXXXXX",
  "name": "reader",
  "description": "My reader credential",
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
  "name": "reader",
  "description": "My reader credential",
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

### Contact the KMS

Communication with the KMS is only available via API during the beta period.

Since the KMS is regionalized, you can access the API directly in its region: <https://my-region.ovh.com.net>

For example, for a KMS created in the **eu-west-rbx** region: <https://eu-west-rbx.okms.ovh.net>

If you are using a browser, you will need to convert the certificate to pkcs12 format:

```bash
openssl pkcs12 -export -inkey client.key -in client.cert -out client.p12
```

#### Creating an encryption key

You can create a key using the following API:

|**Method**|**Path**|**Description**|
| :-: | :-: | :-: |
|POST|/v1/servicekey|Create or import a CMK|

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

#### Importing an encryption key

When you create a key, you can import an existing key.

To do this, you can add an additional **keys** field in the body of the request:

```json
{
  "name": "My imported key",
  "keys": [
    {
      "kid": "string",
      "use": "string",
      "key_ops": [
        "string"
      ],
      "alg": "string",
      "kty": "oct",
      "n": "string",
      "e": "string",
      "k": "string",
      "crv": "string",
      "x": "string",
      "y": "string",
      "d": "string",
      "dp": "string",
      "dq": "string",
      "p": "string",
      "q": "string",
      "qi": "string"
    }
  ]
}
```

The key must be in JSON Web Key (JWK) format. The values of the fields contained in the table follow the documentation in [RFC 7518](https://www.rfc-editor.org/rfc/rfc7518.html).

#### Managing encryption keys

In order to manage encryption keys, several APIs are available:

|**Method**|**Path**|**Description**|
| :-: | :-: | :-: |
|GET|/v1/servicekey|Lists the available encryption keys|
|DELETE|/v1/servicekey/{keyId}/delete|Deletes an encryption key|
|POST|/v1/servicekey/{keyId}/activate|Activates an encryption key|
|POST|/v1/servicekey/{keyId}/deactivate|Deactivates an encryption key|

Disabling an encryption key means that it will no longer be usable, even though the key remains in the KMS.<br>
Deleting an encryption key is only possible on a key that has been previously disabled.

> [!warning]
>
> Deleting an encryption key is permanent. All data encrypted using it will be permanently inaccessible.
>

### Encrypting data with the KMS

#### KMS encryption

The OVHcloud KMS has a dedicated encryption API for encrypting small volumes of data (less than 4 kB).<br>
This is the easiest method, but it does not have the best performance.

|**Method**|**Path**|**Description**|
| :-: | :-: | :-: |
|POST|/v1/servicekey/{keyId}/encrypt|Data encryption with a CMK|

The API expects the following values:

|**Field**|**Value**|**Description**|
| :-: | :-: | :-: |
|plaintext|string|Data to encrypt|
|context|string|Additional identification data to verify data authenticity|

**Encryption example**

```json
{
  "plaintext": "My secret data",
  "context": "Project A"
}
```

The API then returns the encrypted data in a **ciphertext** field:

```json
{
  "ciphertext": "Encrypted data",
}
```

The decryption of the data is done in reverse via the API:

|**Method**|**Path**|**Description**|
| :-: | :-: | :-: |
|POST|/v1/servicekey/{keyId}/decrypt|Decrypting data with a CMK|

The API expects the following values:

|**Field**|**Value**|**Description**|
| :-: | :-: | :-: |
|ciphertext|string|Data to decrypt|
|context|string|Additional identification data to verify data authenticity|

The **context** field must have the same value as the one given during encryption.

#### Encryption with a Data Key (DK)

For better performance, you can generate a Data Key (DK) from a Symmetric Key (AES) to use from your application.

![Encryption with DK](images/Datakey_encrypt.png){.thumbnail}

You can generate a DK using the following API:

|**Method**|**Path**|**Description**|
| :-: | :-: | :-: |
|POST|/v1/servicekey/{keyId}/datakey|Generate a DK derived from a CMK|

The API expects the following values:

|**Field**|**Value**|**Description**|
| :-: | :-: | :-: |
|name|string|Key name|
|size|Integer|Key Size (64-4096)|

**Data Key Generation Example:**

```json
{
  "name": "My Data Key",
  "size": 4096
}
```

The API will then return the Data Key:

```json
{
  "key": "string",
  "plaintext": "string"
}
```

- **key** : encrypted key encoded in base64. This information must be stored with the encrypted data and will be used for decryption by the KMS.
- **plaintext**: plain key encoded in base64. This information must be deleted once the encryption is complete and must not be backed up.

The use of the Data Key is then done through encryption algorithms like AES-GCM which is not covered by this documentation.

![Decrypting with DK](images/Datakey_decrypt.png){.thumbnail}

Conversely, you can retrieve the decrypted version of a Data Key via the following API:

|**Method**|**Path**|**Description**|
| :-: | :-: | :-: |
|POST|/v1/servicekey/{keyId}/datakey/decrypt|Decrypting a DK|

The API expects the following values:

|**Field**|**Value**|**Description**|
| :-: | :-: | :-: |
|key|string|Encrypted Data Key|

And it returns the decrypted Data Key in a **plaintext** field.

### Sign with the KMS

File signing is done using the private key of an asymmetric key pair.

#### Supported algorithms

The OVHcloud KMS supports the following list of signing algorithms:

- **RSASSA-PKCS1 v1.5**

|**Name**|**Digital Signature Algorithm**|
| :-: | :-: |
|RS256|RSASSA-PKCS1-v1_5 using SHA-256|
|RS384|RSASSA-PKCS1-v1_5 using SHA-384|
|RS512|RSASSA-PKCS1-v1_5 using SHA-512|

Following the documentation in [RFC 7518](https://www.rfc-editor.org/rfc/rfc7518#section-3.3).

- **ECDSA**

|**Name**|**Digital Signature Algorithm**|
| :-: | :-: |
|ES256|ECDSA using P-256 and SHA-256|
|ES384|ECDSA using P-384 and SHA-384|
|ES512|ECDSA using P-521 and SHA-512|

Following the documentation in [RFC 7518](https://www.rfc-editor.org/rfc/rfc7518#section-3.4).

- **RSASSA-PSS**

|**Name**|**Digital Signature Algorithm**|
| :-: | :-: |
|PS256|RSASSA-PSS using SHA-256 and MGF1 with SHA-256|
|PS384|RSASSA-PSS using SHA-384 and MGF1 with SHA-384|
|PS512|RSASSA-PSS using SHA-512 and MGF1 with SHA-512|

Following the documentation in [RFC 7518](https://www.rfc-editor.org/rfc/rfc7518#section-3.5).

#### Message signature

Since the private key cannot be extracted from the KMS, the signature can only be done directly with the KMS.

|**Method**|**Path**|**Description**|
| :-: | :-: | :-: |
|POST|/v1/servicekey/{keyId}/sign|File signature|

The API expects the following values:

|**Field**|**Value**|**Description**|
| :-: | :-: | :-: |
|message|string|Message to sign in base64 format|
|alg|string|Signature algorithm|
|isdigest|boolean|Whether the message is already hashed|

**Signature example:**

```json
{
  "message": "SGVsbG8gV29ybGQ=",
  "alg": "RS256",
  "isdigest": false
}
```

The API will then return the file signature:

```json
{
  "signature": "EmUGXC6rsFTWtmFn77y6NS/U6IuhThApVKWTZdXjE7rDMonRPPxbjTo01HQN62J3Dxqyw=="
}
```

#### Checking a file

You can check a file either directly with the KMS, or by using the public key.

With the KMS, you can use the following API:

|**Method**|**Path**|**Description**|
| :-: | :-: | :-: |
|POST|/v1/servicekey/{keyId}/verify|Verifying a signature|

The API expects the following values:

|**Field**|**Value**|**Description**|
| :-: | :-: | :-: |
|message|string|Message to sign|
|signature|string|Signature associated with message|
|alg|string|Signature algorithm|
|isdigest|boolean|Whether the message is already hashed|

**Verification example**

```json
{
  "message": "SGVsbG8gV29ybGQ=",
  "signature": "EmUGXC6rsFTWtmFn77y6NS/U6IuhThApVKWTZdXjE7rDMonRPPxbjTo01HQN62J3Dxqyw==",
  "alg": "RS256",
  "isdigest": false
}
```

The API will then return the result of the verification:

```json
{
  "result": true
}
```

### Swagger

You can access the swagger for your KMS by clicking on the link in the OVHcloud Control Panel, in your KMS dashboard.

![swagger](images/swagger.png){.thumbnail}

## Go further

Join our [community of users](/links/community).
