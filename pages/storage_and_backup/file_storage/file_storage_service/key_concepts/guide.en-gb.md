---
title: File Storage Service - Key concepts
excerpt: "Understand the core concepts of OVHcloud File Storage Service, including NFS shares, access control, architecture, data protection, and how it compares to block and object storage."
updated: 2026-03-31
---

## Objective

This guide explains the key concepts behind OVHcloud File Storage Service for Public Cloud and helps you decide when to use managed NFS shares and how they fit into your cloud architecture.

> [!primary]
>
> For step-by-step provisioning and mounting, see [File Storage Service – Getting Started](/pages/storage_and_backup/file_storage/file_storage_service/getting_started).
>

## What is File Storage Service?

OVHcloud File Storage Service provides managed NFS shares for your compute workloads (instances, Kubernetes clusters, and other clients) over your private network.

- Built on `OpenStack Manila`.
- Shares are NFS exports with controlled network placement and access rules.

Key properties:

- `NFS protocol` – NFSv4 recommended.
- `ReadWriteMany (RWX)` – multiple clients can mount the same share concurrently.
- `Private connectivity` – intended for private networks, not public Internet access.

## Comparison with other storage models

| Data model         | File Storage (NFS)                                     | Block Storage                                   | Object Storage                               |
| ------------------ | ------------------------------------------------------ | ----------------------------------------------- | -------------------------------------------- |
| Concurrent writers | Multiple clients (RWX)                                 | Usually single instance                         | Many clients via API                         |
| Typical access     | Mount path (/mnt/…)                                    | OS device or partition                          | Applications using S3<sup>1</sup> SDK/CLI                |
| Good for           | Shared files, CMS storage, pipelines, some ML datasets | Databases, boot/data disks, low-latency storage | Backups, archives, static assets, data lakes |

> [!warning]
>
> This table is a decision aid. Always validate latency, throughput, and protocol requirements with your own tests.
>

## Architecture overview

Logical components of File Storage Service:

1. **Public Cloud project** – billing and IAM boundaries.
2. **Region** – aligns share location with your compute instances.
3. **Private network & subnet** – share is linked to your private networking (VLAN / vRack).
4. **Share** – managed NFS export (capacity, name, status).
5. **ACLs / access rules** – define which clients (IP addresses) can mount the share.
6. **Clients** – instances or clusters mounting the NFS export on a path such as `/mnt/share`.

Operations & interfaces:

- OVHcloud API v1
- OpenStack CLI (Manila plugin)
- Manila CSI (Kubernetes)
- Terraform
- The OVHcloud Control Panel

> [!warning]
>
> Quotas, max share sizes, and limits are defined in the OVHcloud catalog. Always check current values in the Control Panel.
>

## Data protection and snapshots

Snapshots provide point-in-time views of share data:

- **Operational recovery** – rollback after errors or accidental deletions.
- **Change management** – snapshot before major upgrades.

> [!primary]
>
> Snapshots do not replace full backup strategies, which should include off-site copies, immutability, and ransomware protection.
>

For API steps to manage snapshots, see [File Storage Service – Managing Share Snapshots](/pages/storage_and_backup/file_storage/file_storage_service/create_snapshot).

## Security and shared responsibility

You remain responsible for:

- **Network security** – private network design, routing, firewalls.
- **NFS access control** – client access, IP rules, least privilege.
- **OS and application security** – on all clients mounting the share.

## Billing (high level)

- Billed for provisioned share capacity (per GiB-hour or equivalent).
- Snapshots may consume additional capacity and could be billed separately.
- Check OVHcloud Control Panel and official pricing pages for current rates.

## Go further

Join our [community of users](/links/community).

<sup>1</sup>: S3 is a trademark of Amazon Technologies, Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies, Inc.
