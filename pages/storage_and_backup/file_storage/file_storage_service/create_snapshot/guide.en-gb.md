---
title: File Storage Service - Managing Share Snapshots
excerpt: "Learn how to list, create, and delete NFS share snapshots in OVHcloud’s File Storage Service using the API. Ensure data consistency and manage snapshots efficiently."
updated: 2026-03-31
---

## Objective

Snapshots capture a point-in-time state of a File Storage NFS share. This guide shows how to list, create, and delete snapshots using the OVHcloud API (v1 /cloud routes), ensuring consistency and operational reliability.

> [!primary]
>
> **Tip:** Refer to the [OVHcloud API console](/links/console) for exact operations, HTTP methods, and request schemas.
>

## Requirements

- A [Public Cloud project](/links/public-cloud/public-cloud) with File Storage Service enabled.
- An existing share in `available` state.
- API credentials with sufficient permissions to manage shares and snapshots.
- Understanding of key API concepts: `serviceName` (project ID), `regionName`, `shareId`, and optional `snapshotId`.

## Instructions

### Step 1: Identify your share

List all shares in your target region to find the share ID:

> [!api]
>
> @api {v1} /cloud GET /cloud/project/{serviceName}/region/{regionName}/share
>

Confirm that the share is in `available` state before creating snapshots.

### Step 2: List existing snapshots

Retrieve all snapshots for a given share:

> [!api]
>
> @api {v1} /cloud GET /cloud/project/{serviceName}/region/{regionName}/share/{shareId}/snapshot
>

Use the response to retrieve snapshot IDs and statuses before deleting or automating operations.

### Step 3: Create a snapshot

Create a snapshot with a JSON payload specifying a human-readable name (and optional description):

> [!api]
>
> @api {v1} /cloud POST /cloud/project/{serviceName}/region/{regionName}/share/{shareId}/snapshot
>

- Poll the `list/detail` endpoints until the snapshot reaches `available` status.
- Snapshot creation time depends on allocated capacity, I/O activity, and platform load.
- Plan snapshots during low I/O periods to ensure consistency.

> [!primary]
>
> **Note:** Snapshots are crash-consistent unless your application explicitly quiesces writes.
>

### Step 4: Retrieve snapshot details (optional)

Retrieve a single snapshot by ID:

> [!api]
>
> @api {v1} /cloud GET /cloud/project/{serviceName}/region/{regionName}/share/{shareId}/snapshot/{snapshotId}
>

Use this for automated checks after backups or to verify snapshot metadata.

### Step 5: Delete a snapshot

Free the storage consumed by a snapshot:

> [!api]
>
> @api {v1} /cloud DELETE /cloud/project/{serviceName}/region/{regionName}/share/{shareId}/snapshot/{snapshotId}
>

> [!warning]
>
> Deletion is irreversible. Ensure the snapshot is no longer required.
>

## Go further

- [File Storage Service – Key Concepts](/pages/storage_and_backup/file_storage/file_storage_service/key_concepts)
- [File Storage Service – Getting Started](/pages/storage_and_backup/file_storage/file_storage_service/getting_started)
- [Preparing an environment for using the OpenStack API](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)

Join our [community of users](/links/community).
