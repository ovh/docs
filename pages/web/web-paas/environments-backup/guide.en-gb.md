---
title: Back up an environment
slug: environments-backup
section: Environments
---

**Last updated 31st August 2023**



## Objective  

When you're making changes to your apps,
you want to be sure those changes only improve things and don't make you lose any data.
You also want to have a disaster recovery plan in place.
Backups help you protect yourself against potential data loss.

You might want to create backups of your live environment before merging a different environment into it
or each time you increase the storage space of your services.

You also have regularly scheduled automated backups of your production environments to cover most cases.

Note that you can only create backups and restore active environments.
To work with an [inactive environment](../other/glossary.md#inactive-environment),
first activate it.

## How backup and restore works

1\. As an [admin user](../administration/users.md), you can do a backup of your environment. 

   This backup includes the complete data and code of the environment.
   All persistent data from all running [services](../add-services/_index.md)
   and any files stored on [mounts](../create-apps/app-reference.md#mounts) are included.
   The backup is stored internally on {{< vendor/name >}}.
   That is, the backup can be applied to environments on {{< vendor/name >}}, but it can't be downloaded.
   If you need to download backups, instead [export your mount and service data](../tutorials/exporting.md)).

2\. You restore your environment using the backup.

   At this point, the data and code from the backup are restored to ensure a consistent state.
   The latest code in your repository may have been modified such that it no longer works correctly with the old, restored data.

> [!primary]  
> 
>    But {{< vendor/name >}} doesn’t modify your Git repository. So by default, any further changes you make use the latest code in your repository.
> 
> 

3\. Depending on your needs, you can do the following:


   a) To use the code from the time of the backup as a baseline for future changes,
      make sure you restore it yourself in your Git repository.
      To do so, use Git commands such as `revert`.

   b) To use your latest code instead, just redeploy your environment or push a new change.

## Backups and downtime

By default, creating a manual backup causes a momentary pause in site availability so that all requests can complete.
This means the environment is backed up in a known consistent state.
The total interruption is usually only 15 to 30 seconds.
Any requests during that time are held temporarily, not dropped.

To avoid this downtime, use [live backups](#live-backups).

For consistent backups, create the backups during non-peak hours for your site.

## Retention

For information on how long backups are retained, see the [data retention policy](../security/data-retention.md).

## Backup schedule

Backups for Dedicated environments have a [specific frequency](../dedicated-gen-2/overview/backups.md).

On Grid environments, non-Production environments can have up to 2 [manual backups](#create-a-manual-backup).
The number of available backups for Production environments depends on your schedule.

| Schedule | Manual backups | Automated backups                                                      |
|----------|----------------|------------------------------------------------------------------------|
| Basic    | 2              | 2 daily backups (total = 2)                                            |
| Advanced | 4              | 6 daily, 3 weekly, and 12 monthly (total = 21)                         |
| Premium  | 4              | 3 backups for the last 24 hours, 30 daily, and 11 monthly (total = 44) |

Note that [backup retention](../security/data-retention.md#grid-backups) also depends on your schedule.

The schedules available to you depend on your [tier](https://platform.sh/pricing/).

| Tier             | Default schedule | Possible upgrade |
| ---------------- | ---------------- | ---------------- |
| Professional     | Basic            | Advanced         |
| Enterprise/Elite | Advanced         | Premium          |

An upgrade comes at an additional cost.
The exact cost depends on the size of your storage.

### Change your backup schedule

To upgrade to the higher schedule, follow these steps:

1\. In the [Console](https://console.platform.sh/), navigate to the project where you want to change the schedule.

2\. Click **{{< icon settings >}} Settings**.

3\. Click **Edit plan**.

4\. For **Backups**, click the name of your current schedule.

   If clicking has no effect, you are already on the highest available schedule.
5\. Select the target schedule.

6\. Click **Save**.


To downgrade to the lower schedule, [contact support](../overview/get-support.md).

## Use automated backups

For Dedicated environments, see more about [backups of Dedicated environments](../dedicated-gen-2/overview/backups.md).

For Grid environments, automated backups are taken for Production environments at least once every day.
The exact number of backups depends on your [backup schedule](#backup-schedule).

Daily backups are taken at around 4:00 every day based on the [project timezone](../projects/change-project-timezone.md).
The time for 6-hourly backups is based on the daily backup.

Automated backups are always [live](#live-backups).

## Live backups

You can create backups without any downtime.
This means your environment is running and open to connections during the backup.

Because the connections may come in during backup creation, live backups may have data inconsistencies among containers.
They may make restorations less reliable.
To avoid such issues, schedule [manual backups](#create-a-manual-backup) during non-peak hours,
when the short amount of downtime is least noticed.

Automated backups are always live, including those taken on [{{% names/dedicated-gen-3 %}}](../dedicated-gen-3/_index.md)
and [{{% names/dedicated-gen-2 %}}](../dedicated-gen-2/overview/_index.md) environments.

You can create a manual live backup on a Grid project:

> [!tabs]      

## Create a manual backup

You can create a manual backup using the [CLI](../administration/cli/_index.md) or in the [Console](../administration/web/_index.md).

> [!tabs]      

### Automate manual backups

You can also automate the process of creating manual backups through [cron jobs](../create-apps/app-reference.md#crons).
The cron job uses the CLI command to back up the environment.
It requires you to [set up the CLI on the environment with an API token](../administration/cli/api-tokens.md#authenticate-in-an-environment).

Although this process is automated,
backups created in this way count as manual for the [backup schedule](#backup-schedule).
They don't affect the automated backups taken as part of the schedule.

## Physical storage location

Backups are stored as binary large objects separate from your environments.
This storage is replicated over multiple data centers in different locations
[within the region your project is hosted in](https://platform.sh/trust-center/security/data-security/).
This means that in the rare event a data center becomes unavailable, your backups are still available.
