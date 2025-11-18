---
title: Object Storage 3AZ product reversibility policy
updated: 2025-06-13
---

## Objective

This document outlines the reversibility policy for the product Object Storage 3AZ.

This policy aims to implement the general principles of reversibility and our compliance with the SWIPO IaaS Code of Conduct for cloud providers.

## List of features

The features of the Product are divided into three categories:

- The main features for which we guarantee you the possibility to migrate.
- The OVHcloud implementation, the migration of which will require adaptations to a new environment.
- Specific features which migration as such is impossible to guarantee because they are linked to the OVHcloud environment or specific developments.

### Main features

| **Feature** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| S3<sup>1</sup> API Compatibility | S3 compatible interface (standard RESTful API, AWS CLI tools, SDK, etc.) | S3 (REST, JSON, multipart upload) | **Incoming**: Direct upload via  compatible S3 API, CLI tools, SDK or migration from any other S3-compatible storage. <br> **Outgoing**: Direct upload/export via S3 API, CLI or SDK to any other S3-compatible provider. |[S3 API](/pages/storage_and_backup/object_storage/pcs_object_storage_standard_s3_and_swift_rest_api_compatibility) |
| Massive export/import of objects | Batch data import/export via S3 tools (sync, cp, etc.) | S3 (objects, folders) | **Incoming**: Use rclone or equivalent tools to migrate data from another solution <br>  **Outgoing**: Massive export via the same tools to another S3 platform or compatible. | [Manage buckets](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage) |
| Object versioning | Native management of object versions (storage of each version when editing/deleting) | S3 (versioning) | **Incoming**: Import versioned objects from another S3.<br> **Outgoing**: Export versions via API/CLI, compatible with other S3. | [Getting started with versioning](/pages/storage_and_backup/object_storage/s3_versioning) |
| Server-side encryption (SSE-S3/SSE-C) | Native encryption of objects at rest, compatible with S3 standards | S3 (HSSE-S3, HSSE-C) | **Incoming**: Upload of encrypted or unencrypted data, transparent management.<br>  **Output**: Export without adaptation, encryption maintained or reprocessed by the target. | [Object Storage Encryption](/pages/storage_and_backup/object_storage/s3_encrypt_your_objects_with_sse_c) |
| Interoperability with third-party solutions | Native support for Veeam, HYCU, Nextcloud, Kubernetes, etc. | S3 (API, JSON, objets) | **Incoming**: Direct integration via plugins or connectors.<br>  **Outgoing**: Export data via native tools or S3 API to the target. | [Object storage with Veeam](/pages/storage_and_backup/object_storage/s3_veeam) |

### OVHcloud Implementation

| **Feature** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| Offsite Replication OVHcloud | Automatic replication of data to a separate OVHcloud 1-AZ region | S3 (replicated objects) | **Incoming**: Not applicable to direct import, requires OVHcloud configuration.<br>  **Outgoing**: Manual restore from the replicated region, then export to external target (requires adaptation if the target does not have an equivalent mechanism). | [Cross region replication](/pages/storage_and_backup/object_storage/s3_asynchronous_replication) |
| Object Lock | Object immutability (WORM), prevents deletion/modification for a defined period | S3 (Object Lock) | **Incoming**: Requires the source to support S3 Object Lock.</b>  **Outgoing**: Export possible, but the target must support S3 locking or manual adjustment of immutability policies.** | [Object storage ObjectLock](/pages/storage_and_backup/object_storage/s3_managing_object_lock) |
| ACL and advanced access management | Rights management access via ACL S3, or specific policies | S3 (ACL, policies) | **Incoming** : Adaptation of accesses according to the target structure. <br>  **Outgoing**: Export of objects, but reconfiguration of ACL/policies required on the destination platform | [Access management](/pages/storage_and_backup/object_storage/s3_bucket_acl) |

### Specific features

| **Feature** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| Management via OVHcloud Manager/OVHcloud API | OVHcloud proprietary GUI and API for storage management | N/A | **Incoming**: Not applicable.  **Output**: Scripts/API to be rewritten for the target environment. | [Manage-buckets](/pages/storage_and_backup/object_storage/s3_bucket_acl) |

## List of architectures

Object Storage 3-AZ by OVHcloud is based on a multi-AZ architecture, with automatic distribution of data to three physically separated availability zones (data centers several kilometers apart). This architecture uses erasure coding to ensure local redundancy and tolerance for loss of a complete zone, thus ensuring high availability and continuity of service even in the event of major outages. Asynchronous inter-region replication is available as an option (Offsite Replication), allowing automatic data backup to another 1-AZ OVHcloud region.

## Partner services

OVHcloud partners are listed with the keyword "Cloud Migration" in the [dedicated directory](/links/partner).

OVHcloud also offers a dedicated service : [OVHcloud Professional Services](/links/professional-services).

## Cost and fees

**No termination fees:** No extra billing. The service is stopped immediately once it's removed.

## Data retention after termination of the contract

The data (Objects and Buckets) can be deleted by customer action (CLI) or via a service decommission by deleting the Public Cloud project related to the product. This triggers an automatic release of resources. No data restoration will be possible after these actions.

However, you should pay close attention to the Object Lock feature. You can find more information on our guide to [Managing object immutability with Object Lock (WORM)](/pages/storage_and_backup/object_storage/s3_managing_object_lock).

<sup>1</sup>: S3 is a trademark of Amazon Technologies, Inc. OVHcloud’s service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies, Inc.