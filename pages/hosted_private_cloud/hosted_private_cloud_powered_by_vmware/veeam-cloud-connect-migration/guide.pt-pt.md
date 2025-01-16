---
title: "Veeam Cloud Connect - How to migrate data from Veeam Cloud Connect to Object Storage"
excerpt: "Discover two solutions to migrate your Veeam Cloud Connect data to Object Storage using Veeam Backup & Replication Enterprise Edition"
flag: hidden
updated: 2024-12-11
---

## Objective

**This guide details how to migrate your data from Veeam Cloud Connect to Object Storage.**

You will find two approaches: one without a new Veeam Enterprise server and another with a new server.

## Requirements

- Access to the Veeam Cloud Connect management interface.
- An installation of Veeam Backup & Replication Enterprise Edition compatible with your current infrastructure.
- Administrative rights to configure backup repositories and manage jobs.

## Instructions

### Option 1 - Migration without a new Veeam Enterprise server

> [!primary]
>
>  This procedure may vary depending on your configuration. Refer to the official Veeam guides for detailed instructions.

1\. **Create an Object Storage bucket.**

Follow the steps in this guide: [Object Storage - Create a Bucket](/pages/storage_and_backup/object_storage/s3_create_bucket).

2\. **Set up a new backup repository.**

Refer to our guide: [Object Storage - Use Object Storage with Veeam](/pages/storage_and_backup/object_storage/s3_veeam).

3\. **Export backup data from Veeam Cloud Connect.**

Use the `Export Entire Backup Chain`{.action} option in the Cloud Connect console.

For more details, consult the official documentation: [Move Backups](https://helpcenter.veeam.com/docs/backup/vsphere/move_backup.html?ver=120#repo).

4\. **Import the backup files into the new repository.**

Use the `Add Existing Backup`{.action} option in the Veeam Backup & Replication Enterprise Edition console.

5\. **Configure or modify a backup job.**

Include the migrated data in an existing job or create a new one.

### Option 2 - Migration with a new Veeam Enterprise server

> [!primary]
>
>  This procedure may vary depending on your configuration. Refer to the official Veeam guides for detailed instructions.

1\. **Create an Object Storage bucket.**

Follow the steps in this guide: [Object Storage - Create a Bucket](/pages/storage_and_backup/object_storage/s3_create_bucket).

2\. **Install and configure Veeam Backup & Replication on the new server.**

Make sure the version is compatible with your current Veeam Cloud Connect setup.

3\. **Set up a new backup repository on the server.**

Refer to our guide: [Object Storage - Use Object Storage with Veeam](/pages/storage_and_backup/object_storage/s3_veeam).

4\. **Export backup data from Veeam Cloud Connect.**

Use the `Export Entire Backup Chain`{.action} option in the Cloud Connect console.

For more details, consult the official documentation: [Move Backups](https://helpcenter.veeam.com/docs/backup/vsphere/move_backup.html?ver=120#repo).

5\. **Import the backup files into the new repository.**

Use the `Add Existing Backup`{.action} option in the Veeam Backup & Replication Enterprise Edition console.

6\. **Configure or modify a backup job.**

Include the migrated data in an existing job or create a new one.

## Go Further

If you need training or technical assistance to implement our solutions, contact your account manager or click [here](/links/professional-services) to request a quote and a personalized project analysis from our Professional Services team.

Join our [community of users](/links/community).