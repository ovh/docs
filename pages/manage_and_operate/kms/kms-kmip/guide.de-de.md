---
title: "How to connect a compatible product using KMIP protocol"
excerpt: "How to communicate with the OVHcloud KMS using KMIP protocol"
updated: 2025-01-15
---

## Objective

The purpose of this guide is to show you the usage of the KMIP protocol and the different operations and types supported by the OVHcloud KMS.

## Requirements

- An [OVHcloud customer account](/pages/account_and_service_management/account_information/ovhcloud-account-creation).
- An [OVHcloud KMS ordered and an access certificate created](/pages/manage_and_operate/kms/quick-start)

## Instructions

### Description

[KMIP](https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=kmip) (Key Management Interoperability Protocol) is a protocol designed to standardise the communications with a KMS.

So any products supporting KMIP (such as VMware vSphere, Veeam, Nutanix, etc.) can natively be interfaced with a KMIP compatible KMS such as the OVHcloud KMS, hosted by OVHcloud or not.

It brings an easy connection, and a reversible configuration.

### Connection of a KMIP compatible product with the OVHcloud KMS

The configuration depends on the product to integrate, but does not need any specific configuration on the OVHcloud KMS other than generating an access certificate.
Softwares editors usually offer dedicated guides for this purpose.

As an example, the following products were validated with the OVHcloud KMS :

- [Nutanix](https://portal.nutanix.com/page/documents/details?targetId=Nutanix-Security-Guide-v6_8:wc-security-data-encryption-setup-t.html)
- [VMware](https://docs.vmware.com/en/VMware-vSphere/8.0/vsphere-security/GUID-9035D542-B76B-4244-966D-2A8D92ABF54C.html)
- [MongoDB](https://www.mongodb.com/docs/manual/core/csfle/tutorials/kmip/kmip-automatic/)
- [Barbican](https://docs.openstack.org/barbican/latest/install/barbican-backend.html#kmip-plugin) - for On-Premise usage
- [NetApp](https://docs.netapp.com/us-en/ontap/encryption-at-rest/configure-external-key-management-concept.html) - for On-Premise usage

### Direct use

It's also possible to use the KMIP API directly.

Authentication on this procotol is done with a client certificate, in the same way as for the REST API. It needs to open a TLS channel with a valid access certificate.

Then it's possible to exchange KMIP messages such as defined in the standard. Depending n the technology stack, we recommend the following libraries:

- PyKMIP for python: <https://github.com/OpenKMIP/PyKMIP>.
- Libkmip for C: <https://github.com/OpenKMIP/libkmip>.

### KMIP coverage

The OVHcloud KMS covers a part of 1.0 to 1.4 versions of the KMIP standard.

Details of the coverage is available here:

> **Legend:**
>
> - N/A : Not Applicable
> - ✅ : Fully compatible
> - 🚧 : Partially compatible
> - ❌ : Not implemented
> - 🚫 : Deprecated

#### Messages

|                      | v1.0 | v1.1 | v1.2 | v1.3 | v1.4 |
| -------------------- | ---- | ---- | ---- | ---- | ---- |
| Request Message      |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Response Message     |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |

#### Operations

| Operation            | v1.0 | v1.1 | v1.2 | v1.3 | v1.4 |
| -------------------- | ---- | ---- | ---- | ---- | ---- |
| Create               |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Create Key Pair      |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Register             |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Re-key               |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| DeriveKey            |  ❌  |  ❌  |  ❌  |  ❌  |  ❌  |
| Certify              |  ❌  |  ❌  |  ❌  |  ❌  |  ❌  |
| Re-certify           |  ❌  |  ❌  |  ❌  |  ❌  |  ❌  |
| Locate               |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Check                |  ❌  |  ❌  |  ❌  |  ❌  |  ❌  |
| Get                  |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Get Attributes       |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Get Attribute List   |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Add Attribute        |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Modify Attribute     |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Delete Attribute     |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Obtain Lease         |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Get Usage Allocation |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Activate             |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Revoke               |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Destroy              |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Archive              |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Recover              |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Validate             |  ❌  |  ❌  |  ❌  |  ❌  |  ❌  |
| Query                |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Cancel               |  ❌  |  ❌  |  ❌  |  ❌  |  ❌  |
| Poll                 |  ❌  |  ❌  |  ❌  |  ❌  |  ❌  |
| Notify               |  ❌  |  ❌  |  ❌  |  ❌  |  ❌  |
| Put                  |  ❌  |  ❌  |  ❌  |  ❌  |  ❌  |
| Discover             |  N/A |  ✅  |  ✅  |  ✅  |  ✅  |
| Re-key Key Pair      |  N/A |  ❌  |  ❌  |  ❌  |  ❌  |
| Encrypt              |  N/A |  N/A |  ❌  |  ❌  |  ❌  |
| Decrypt              |  N/A |  N/A |  ❌  |  ❌  |  ❌  |
| Sign                 |  N/A |  N/A |  ❌  |  ❌  |  ❌  |
| Signature Verify     |  N/A |  N/A |  ❌  |  ❌  |  ❌  |
| MAC                  |  N/A |  N/A |  ❌  |  ❌  |  ❌  |
| MAC Verify           |  N/A |  N/A |  ❌  |  ❌  |  ❌  |
| RNG Retrieve         |  N/A |  N/A |  ❌  |  ❌  |  ❌  |
| RNG Seed             |  N/A |  N/A |  ❌  |  ❌  |  ❌  |
| Hash                 |  N/A |  N/A |  ❌  |  ❌  |  ❌  |
| Create Split Key     |  N/A |  N/A |  ❌  |  ❌  |  ❌  |
| Join Split Key       |  N/A |  N/A |  ❌  |  ❌  |  ❌  |
| Export               |  N/A |  N/A |  N/A |  N/A |  ❌  |
| Import               |  N/A |  N/A |  N/A |  N/A |  ❌  |

#### Managed Objects

| Object        | v1.0 | v1.1 | v1.2 | v1.3 | v1.4 |
| ------------- | ---- | ---- | ---- | ---- | ---- |
| Certificate   |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Symmetric Key |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Public Key    |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Private Key   |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Split Key     |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Template      |  ✅  |  ✅  |  ✅  |  🚫  |  🚫  |
| Secret Data   |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Opaque Object |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| PGP Key       |  N/A |  N/A |  ✅  |  ✅  |  ✅  |

#### Base Objects

| Object                                   | v1.0 | v1.1 | v1.2 | v1.3 | v1.4 |
| ---------------------------------------- | ---- | ---- | ---- | ---- | ---- |
| Attribute                                |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Credential                               |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Key Block                                |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Key Value                                |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Key Wrapping Data                        |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Key Wrapping Specification               |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Transparent Key Structures               |  🚧  |  🚧  |  🚧  |  🚧  |  🚧  |
| Template-Attribute Structures            |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Extension Information                    |  N/A |  ✅  |  ✅  |  ✅  |  ✅  |
| Data                                     |  N/A |  N/A |  ❌  |  ❌  |  ❌  |
| Data Length                              |  N/A |  N/A |  ❌  |  ❌  |  ❌  |
| Signature Data                           |  N/A |  N/A |  ❌  |  ❌  |  ❌  |
| MAC Data                                 |  N/A |  N/A |  ❌  |  ❌  |  ❌  |
| Nonce                                    |  N/A |  N/A |  ✅  |  ✅  |  ✅  |
| Correlation Value                        |  N/A |  N/A |  N/A |  ❌  |  ❌  |
| Init Indicator                           |  N/A |  N/A |  N/A |  ❌  |  ❌  |
| Final Indicator                          |  N/A |  N/A |  N/A |  ❌  |  ❌  |
| RNG Parameter                            |  N/A |  N/A |  N/A |  ✅  |  ✅  |
| Profile Information                      |  N/A |  N/A |  N/A |  ✅  |  ✅  |
| Validation Information                   |  N/A |  N/A |  N/A |  ✅  |  ✅  |
| Capability Information                   |  N/A |  N/A |  N/A |  ✅  |  ✅  |
| Authenticated Encryption Additional Data |  N/A |  N/A |  N/A |  N/A |  ❌  |
| Authenticated Encryption Tag             |  N/A |  N/A |  N/A |  N/A |  ❌  |

##### Transparent Key Structures

| Object                   | v1.0 | v1.1 | v1.2 | v1.3 | v1.4 |
| ------------------------ | ---- | ---- | ---- | ---- | ---- |
| Symmetric Key            |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| DSA Private/Public Key   |  ❌  |  ❌  |  ❌  |  ❌  |  ❌  |
| RSA Private/Public Key   |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| DH Private/Public Key    |  ❌  |  ❌  |  ❌  |  ❌  |  ❌  |
| ECDSA Private/Public Key |  ✅  |  ✅  |  ✅  |  🚫  |  🚫  |
| ECDH Private/Public Key  |  ❌  |  ❌  |  ❌  |  🚫  |  🚫  |
| ECMQV Private/Public     |  ❌  |  ❌  |  ❌  |  🚫  |  🚫  |
| EC Private/Public        |  N/A |  N/A |  N/A |  ✅  |  ✅  |

#### Attributes

| Attribute                        | v1.0 | v1.1 | v1.2 | v1.3 | v1.4 |
| -------------------------------- | ---- | ---- | ---- | ---- | ---- |
| Unique Identifier                |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Name                             |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Object Type                      |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Cryptographic Algorithm          |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Cryptographic Length             |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Cryptographic Parameters         |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Cryptographic Domain Parameters  |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Certificate Type                 |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Certificate Identifier           |  ✅  |  🚫  |  🚫  |  🚫  |  🚫  |
| Certificate Subject              |  ✅  |  🚫  |  🚫  |  🚫  |  🚫  |
| Certificate Issuer               |  ✅  |  🚫  |  🚫  |  🚫  |  🚫  |
| Digest                           |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Operation Policy Name            |  ✅  |  ✅  |  ✅  |  🚫  |  🚫  |
| Cryptographic Usage Mask         |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Lease Time                       |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Usage Limits                     |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| State                            |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Initial Date                     |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Activation Date                  |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Process Start Date               |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Protect Stop Date                |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Deactivation Date                |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Destroy Date                     |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Compromise Occurence Date        |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Compromise Date                  |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Revocation Reason                |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Archive Date                     |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Object Group                     |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Link                             |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Application Specific Information |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Contact Information              |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Last Change Date                 |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Custom Attribute                 |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Certificate Length               |  N/A |  ✅  |  ✅  |  ✅  |  ✅  |
| X.509 Certificate Identifier     |  N/A |  ✅  |  ✅  |  ✅  |  ✅  |
| X.509 Certificate Subject        |  N/A |  ✅  |  ✅  |  ✅  |  ✅  |
| X.509 Certificate Issuer         |  N/A |  ✅  |  ✅  |  ✅  |  ✅  |
| Digital Signature Algorithm      |  N/A |  ✅  |  ✅  |  ✅  |  ✅  |
| Fresh                            |  N/A |  ✅  |  ✅  |  ✅  |  ✅  |
| Alternative Name                 |  N/A |  N/A |  ✅  |  ✅  |  ✅  |
| Key Value Present                |  N/A |  N/A |  ✅  |  ✅  |  ✅  |
| Key Value Location               |  N/A |  N/A |  ✅  |  ✅  |  ✅  |
| Original Creation Date           |  N/A |  N/A |  ✅  |  ✅  |  ✅  |
| Random Number Generator          |  N/A |  N/A |  N/A |  ✅  |  ✅  |
| PKCS#12 Friendly Name            |  N/A |  N/A |  N/A |  N/A |  ✅  |
| Description                      |  N/A |  N/A |  N/A |  N/A |  ✅  |
| Comment                          |  N/A |  N/A |  N/A |  N/A |  ✅  |
| Sensitive                        |  N/A |  N/A |  N/A |  N/A |  ✅  |
| Always Sensitive                 |  N/A |  N/A |  N/A |  N/A |  ✅  |
| Extractable                      |  N/A |  N/A |  N/A |  N/A |  ✅  |
| Never Extractable                |  N/A |  N/A |  N/A |  N/A |  ✅  |

## Go further

The [OASIS](https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=kmip) website.

Join our [community of users](/links/community).
