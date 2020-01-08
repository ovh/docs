---
title: 'Managing backups and restorations'
slug: manage-backups
excerpt: 'Find out how to manage all of your backups and restorations'
section: 'Getting started with a PostgreSQL cluster'
---

**Last updated 03rd January 2020**

## Objective

Your Enterprise Cloud Databases cluster is backed up on a daily basis by OVHcloud.
By default, we store these backups for three rolling months at no extra cost.
This guide details how to interact with these backups, and how to restore them.


## Requirements
- an active OVHcloud customer account
- the ability to establish a connection via the public network (internet)
- a PostgreSQL client installed on the desktop you want to use for accessing the database


## An overview of backups

**Full backup**

To ensure that your live applications are not affected, OVHcloud uses an isolated backup node (with no client traffic), and proceeds to take a cold ZFS snapshot (with the PostgreSQL service stopped).
This means that you get consistent performance on your live cluster, even during backups.

The snapshots are then sent to be archived on a set of storage servers.


**Incremental backup**

Incremental backup is based on PostgreSQL’s Write-Ahead Logging (WAL files). You can find out more about this on the [PostgreSQL WAL documentation page](https://www.postgresql.org/docs/9.1/wal-intro.html){.external}.

WAL files contain all of the changes made to data. OVHcloud archives WAL files for a rolling 3-month duration.

These WAL files are used for Point-In-Time recovery (PITR). They always refer to a full backup.

With PostgreSQL’s automatic archiving system, OVHcloud can encrypt and send these files to a Public Cloud Storage container linked to your cluster.


## Instructions

### Step 1: Enable and disable automatic backups.
By default, your cluster is automatically backed up on a daily basis (with ZFS snapshots), and the backups are stored for a rolling 3-month period.
You can enable and disable this option in the OVHcloud Control Panel, in the `Settings > Automatic daily backups`{.action} section.


### Step 2: List and interact with your backups.
All of your backups are managed in a centralised space. To do this, go to the `Backups`{.action} tab in the OVHcloud Control Panel.

You will find all of your backups there, i.e.:

- backups taken daily by OVHcloud 
- backups taken manually

Each of your backups has a creation date and an expiry date. With the `Actions`{.action} button, you can:

- launch a manual backup
- launch a Point-In-Time Recovery (PITR)

You cannot download backups via the OVHcloud Control Panel.


### Step 3: Create a manual backup.
In the OVHcloud Control Panel, go to the `Backups`{.action} tab, then click `Actions`{.action}.

You can name your manual backups to make them easier to manage.

> [!primary]
>
> Please note that manual backups come at an additional cost, as detailed in the OVHcloud Control Panel.
>


### Step 4: Restore a backup.
You can follow two methods to restore a backup from the OVHcloud Control Panel.


**Restore a specific backup.**

Select the backup you want to use from the list, and click `...`{.action}, then `Restore`{.action}.

> [!primary]
>
> To ensure that your cluster’s performance is not affected, the restored data is provided to you on a dedicated instance.
>
> This instance will be billed on an hourly basis, and the space used by the data is billed per GB per hour.
>


**Restore to a specific time (PITR, Point-In-Time Recovery).**

You can use this feature from PostgreSQL to revert back to a specific point in time, with the accuracy of around one minute. You can find out more about how this works by referring to the [official PostgreSQL documentation](https://www.postgresql.org/docs/9.1/continuous-archiving.html){.external}.

Click `Actions`{.action}, then `Restore to a specific date`{.action}. A dialogue box will open, prompting you to enter the date and time you would like to revert your data to.

> [!primary]
>
> To ensure that your cluster’s performance is not affected, the restored data is provided to you on a dedicated instance, with read-only access.
>
> This instance will be billed on an hourly basis, and the space used by the data is billed per GB per hour.
>


### Step 5: Delete a backup.
Select the backup you want to use from the list, and click `...`{.action}, then `Delete`{.action}.


## Go further

Learn how to manage your PostgreSQL cluster by reading [OVHcloud’s technical guides](../enterprise-cloud-databases/){.external} for further information on the technical aspects of how your managed solution works.
