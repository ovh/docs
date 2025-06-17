---
title: Cold Storage product reversibility policy
updated: 2025-06-13
---

## Objective

This document outlines the reversibility policy for the product Cold Storage covering OVHcloud's Cold Archive offer.

This policy aims at implementing the global reversibility principles and requirements of SWIPO IaaS Code of Conduct for Cloud Providers.

## Features map

The product features are divided into three categories:

- The **core features** for which we guarantee the ability to migrate.
- The **OVHcloud implementation**, which migration will require adaptations to a new environment.
- **Specific functionalities** which migration as such is impossible to guarantee as they are tied to OVHcloud environment or specific developments.

### Core features

|Feature|Description|Available formats|Migration model|Available documentation|
|---|---|---|---|---|
| **Standard S3<sup>1</sup> API Compatibility**| Access and management via S3-compatible API (RESTful, AWS CLI tools, SDK, etc.). | S3 (REST, JSON, objects) | **Incoming**: Direct upload into an Object Storage bucket via S3 API, CLI, or SDK. <br> **Outgoing**: Direct retrieval/export via S3 API, CLI, or SDK to any other S3-compatible provider. | [Cold Archive offer presentation](/links/public-cloud/cold-archive) <br> [Cold Archive offer documentation](/products/storage-object-storage) |
| **Massive Import/Export of objects** | Batch data migration using S3 commands (`aws s3 cp/sync`, etc.). | S3 (objects, folders)| **Incoming**: Copy data from another S3 solution to OVHcloud Object Storage bucket. <br> **Outgoing**: Massive export via same tools to another S3 or compatible platform. | [Cold Archive offer documentation](/products/storage-object-storage) |
| **Server-Side Encryption**| Native AES-256 bucket-level encryption, compatible with S3 SSE. | S3 (SSE-S3, SSE-C) | **Incoming**: Upload of encrypted or unencrypted data, transparently handled. <br> **Outgoing**: Export without adaptation; encryption maintained or reprocessed by the target. | [Cold Archive offer documentation](/products/storage-object-storage) |
| **Long-Term data Retention** | Data stored on magnetic tapes, with a lifespan over 10 years. | S3 (objects) | **Incoming**: Import without adaptation. <br> **Outgoing**: Export of objects via S3 API; retrieval on any compatible storage. |[Cold Archive offer documentation](/products/storage-object-storage) |

### OVHcloud implementation

|Feature|Description|Available formats|Migration model|Available documentation|
|---|---|---|---|---|
| **Full Bucket Archiving** | Archiving applies to the entire bucket (no object-level archiving). | S3 (bucket) | **Incoming**: Requires grouping of objects to archive into a dedicated bucket. <br> **Outgoing**: Export objects from the bucket, then import into the target (adaptation may be required if the target does not support bucket-level archiving). | [Cold Archive offer documentation](/products/storage-object-storage) |
| **Delayed Restore ("unfreeze")** | Data must be "unfrozen" before download (several hours of latency). | S3 (objects) | **Incoming**: Not applicable. <br> **Outgoing**: User must initiate a restore ("unfreeze") request, then download the objects within a 24-hour window; adaptation needed if the target lacks this mechanism. | [Cold Archive offer documentation](/products/storage-object-storage) |
| **Data Immutability** | Ability to make data immutable for a defined or indefinite period (WORM). | S3 (Object Lock) | **Incoming**: Source must support S3 data immutability. <br> **Outgoing**: Export possible, but target must support S3 locking or require manual adjustment of immutability policies. | [Cold Archive offer documentation](/products/storage-object-storage) |

### Specific functionalities

|Feature|Description|Available formats|Migration model|Available documentation|
|---|---|---|---|---|
|**Anti-DDoS**|The anti-DDoS is a set of equipment and means put in place to absorb distributed denial of service attacks. It includes an analysis of traffic, the "aspiration" towards a specialized network, and mitigation, ensured by VAC technology developed by OVHcloud.|N/A|**Incoming**: The Anti-DDoS is a component of our infrastructure, enabled by default. No action is required.<br><br>**Outcoming**: Order and configure an anti-DDoS with the new provider.|[OVHcloud anti-DDoS protection](/links/security/antiddos)<br><br>[Anti-DDoS Technology](/links/security/antiddos)| 
| **OVHcloud 4-Datacenter Architecture** | Distribution across 4 datacenters in France using 8+4 erasure coding. | N/A | **Incoming**: Not applicable. <br> **Outgoing**: Not transferable, depends on the target architecture. | [Cold Archive offer presentation](/links/public-cloud/cold-archive) |
| **Management via OVHcloud Manager/API** | Proprietary OVHcloud graphical interface and APIs for archive management. | N/A | **Incoming**: Not applicable. <br> **Outgoing**: Scripts/APIs need to be rewritten for the target; manual management may be required. | [Cold Archive offer documentation](/products/storage-object-storage) |

## Architecture listing

OVHcloud's Cold Storage product is based on a geo-distributed architecture across four physically separated data centers (several kilometers apart), using IBM magnetic tape technology. Data is stored using 8+4 erasure coding, ensuring extreme resilience and tolerance to the loss of an entire site.

## Partner services

OVHcloud partners are listed under the keyword **"Cloud Migration"** in the [dedicated partner directory](/links/partner).

OVHcloud also offers a dedicated service: [OVHcloud Professional Services](/links/professional-services).

## Cost and fees

No termination fees: There is no additional charge by default for data migration. Billing stops as soon as the service is terminated. However, a pricing change will occur when data is restored, based on the current pricing of the storage medium to which the data has been transferred.

## Retention of data after contract termination

OVHcloud does not retain any data after the service is terminated. Data are irreversibly deleted. A manual export must be performed beforehand to preserve the data.
To retrieve their data, the customer must unarchive it and then retrieve it from the bucket where it has been restored.<br>
**Note:** the unarchiving process can take up to 48 hours.

<sup>1</sup>: S3 is a trademark of Amazon Technologies, Inc. OVHcloud’s service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies, Inc.