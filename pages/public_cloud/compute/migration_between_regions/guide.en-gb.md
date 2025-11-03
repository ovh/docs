---
title: 'Migration of instances between different regions'
excerpt: 'This guide describes how to migrate an OVHcloud Public Cloud instance between two regions, 1AZ and 3AZ. It covers the backup, transfer and re-creation steps, with instructions via the Manager, Horizon or the OpenStack CLI.'
updated: 2025-10-15
---

## Objectives

This guide explains how to migrate a Public Cloud instance from one region to another, from 1AZ to 3AZ or vice versa. It centralizes the key steps (backup, transfer and re-creation) and redirects to the detailed guides for each element.

## Requirements

- An [OVHcloud Public Cloud instance](/pages/public_cloud/compute/public-cloud-first-steps).
- Access to the [OVHcloud Control Panel](/links/manager).

## Instructions

> [!primary]
>
> Before migrating an instance, it's important to understand the differences between the deployment types offered in the OVHcloud Public Cloud. Each mode (1AZ, 3AZ or Local Zones) has a direct impact on the resilience, availability and design of your infrastructure.
>
> To find out more, consult the documentation: [Comparison and resilience of Deployment Modes - Understanding 3-AZ / 1-AZ / Local Zones](/pages/public_cloud/public_cloud_cross_functional/deployment_modes_comparison_resilience_details).
>

### Step 1. Backup your instance

Start by creating a backup of your instance to be migrated, or use an existing one if it's still valid.

OVHcloud offers two types of backup, with different behaviors depending on the type of migration desired:

- Local backup: Requires manual transfer if you're migrating to another region or AZ.
- Remote backup (**recommended**): Automatically managed by OVHcloud, the local backup is replicated in the selected region. No manual transfer required.

> [!primary]
>
> If your local backup was performed in a 3AZ region and you wish to re-create the instance in another AZ in the same region, no transfer is required.
>
> Local backups are accessible from all availability zones within a 3AZ region. You can proceed directly to the instance re-creation stage.
>

An instance can be backed up:

- via the OVHcloud Control Panel.
- via the OVHcloud API.
- via the OpenStack CLI.
- via Horizon.

Find all the detailed information in the **Creating a backup of an instance** section in our guide "[Backing up an instance](/pages/public_cloud/compute/save_an_instance)".

### Step 2. Migrate your backup to another region

> [!primary]
>
> If you used a remote backup, you can go straight to [step 3. restore instance in new region](#step3recreateinstance).
>

> [!tabs]
> Via the Openstack CLI
>> To transfer your backup from one AZ to another via the Openstack CLI, please follow our guide: [Downloading and transferring an instance backup from one OpenStack region to another](/pages/public_cloud/compute/transfer_instance_backup_from_one_datacentre_to_another).
>>

### Step 3. Restore the instance in new region <a name="step3recreateinstance"></a>

The instance can be restored in the new region:

- via the OVHcloud Control Panel.
- via the OVHcloud API.
- via the OpenStack CLI.
- via Horizon.

Find all the detailed information in the **Creating an instance from a backup** section in our guide "[Using instance backups to create or restore an instance](/pages/public_cloud/compute/create_restore_a_virtual_server_with_a_backup)".

## Go further

Join our [community of users](/links/community).