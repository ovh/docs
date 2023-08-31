---
title: Backups
slug: backups
section: Overview
order: 2
---

**Last updated 31st August 2023**



## Objective  

{{< vendor/name >}} takes a byte-for-byte snapshot of {{% names/dedicated-gen-2 %}} production environments every 6 hours.
Backups are retained for different durations depending on when they're taken.
For details, see the [retention policy for backups](../../security/data-retention.md#dedicated-gen-2-backups).

Backups are created using snapshots saved to encrypted elastic block storage (EBS) volumes.
An EBS snapshot is immediate, but the time it takes to write to the storage service depends on the volume of changes.

* **Recovery Point Objective (RPO)** is 6 hours (maximum time to last backup).
* **Recovery Time Objective (RTO)** depends on the size of the storage. Large EBS volumes take more time to restore.

These backups are only used in cases of catastrophic failure and can only be restored by {{< vendor/name >}}. A support ticket must be opened to request a restoration.

The restoration process may take a few hours, depending on the infrastructure provider in use.
In the ticket, specify if you want backups of files, MySQL, or both.
Uploaded files are placed in an SSH-accessible directory on the {{% names/dedicated-gen-2 %}} cluster.
MySQL is provided as a MySQL dump file on the server.
You may restore these to your site at your leisure.
(We don't proactively overwrite your production site with a backup; you are responsible for determining a "safe" time to restore the backup, or for selectively restoring individual files if desired.)

You are free to make your own backups using standard tools (`mysqldump`, rsync, etc.) at your own leisure.
