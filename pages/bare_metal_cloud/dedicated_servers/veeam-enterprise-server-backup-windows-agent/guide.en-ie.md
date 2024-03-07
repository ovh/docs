---
title: Backing Up a Bare Metal Server Using Veeam Agent for Windows
excerpt: Learn how to configure the Veeam Agent for Microsoft Windows to back up your Bare Metal server.
updated: 2024-03-07
---

## Objective

Learn how to configure the Veeam Agent for Microsoft Windows to back up your Bare Metal server.

## Requirements

- An [OVHcloud Bare Metal server](https://www.ovhcloud.com/en-ie/bare-metal/)
- [Veeam Backup and Replication 12.0](https://www.veeam.com/download-version.html?ad=downloads&tab=previous) installed
- Veeam Agent for Microsoft Windows 6.0.2 [installation software](https://login.veeam.com/realms/veeamsso/protocol/openid-connect/auth?client_id=veeam-com&response_type=code&redirect_uri=https%3A%2F%2Fwww.veeam.com%2Foauth&scope=profile&state=e9a55dcbf050f86c5eb69ea264b8fb86) (Veeam account required)

> [!warning]
> This guide presupposes that you have followed the steps detailed in our first guide [Preparing a Bare Metal Server backup with Veeam Enterprise](/pages/bare_metal_cloud/dedicated_servers/veeam-enterprise-server-backup-preparation).

## Instructions

### Download and install Veeam Agent

Download [Veeam Agent for Microsoft Windows 6.0.2](https://login.veeam.com/realms/veeamsso/protocol/openid-connect/auth?client_id=veeam-com&response_type=code&redirect_uri=https%3A%2F%2Fwww.veeam.com%2Foauth&scope=profile&state=e9a55dcbf050f86c5eb69ea264b8fb86) on the target server for your backup.

Install the Veeam Agent and select `No`{.action} when prompted to install a license file.

![Licence choose NO](images/01a-licence.PNG){.thumbnail}

Click the menu button and select `+ Add New Job...`{.action}.

![Add New Job](images/01b-new-job.PNG){.thumbnail}

### Backup configuration

#### Name

Modify the default **Name** and/or **Description**, if you want to, and click `Next`{.action}.

![Name](images/02-name.PNG){.thumbnail}

#### Backup Mode

Choose what data you want to back up and click `Next`{.action}.

![Backup mode](images/02b-backup-mode.PNG){.thumbnail}

#### Destination

Choose `Veeam backup repository`{.action}. and click `Next`{.action}.

![Destination](images/03-destination.PNG){.thumbnail}

#### Backup server

Enter the **Veeam backup server name or IP address** and **Specify your personal credentials** (from a valid [Veeam Enterprise service account](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_veeam_backup_replication#creating-a-veeam-enterprise-service-account)).

Click `Next`{.action}.

It will take a moment for your license to load.

![Backup server - credentials](images/04-backup-server-credentials.PNG){.thumbnail}

#### Backup repository

Select your **Backup repository** and, if desired, modify the retention policy.

Click `Next`{.action}.

![Backup repository](images/05-backup-repository.PNG){.thumbnail}

#### Backup cache (optional)

If desired, you can enable the backup cache if the remote backup target is temporarily unavailable.

Click `Next`{.action}.

![Backup cache](images/06-backup-cache.PNG){.thumbnail}

#### Guest processing (optional)

If you want, you can choose guest processing options.

Click `Next`{.action}.

![Guest processing](images/07-guest-processing.PNG){.thumbnail}

#### Schedule

Choose your backup schedule preferences and click `Apply`{.action}.

![Schedule](images/08-schedule.PNG){.thumbnail}

#### Summary

Review your settings. If you want the backup job to run as soon as you finish, tick the checkbox ☑ at the bottom of the window.

Click `Finish`{.action}.

![Summary](images/09-summary.PNG){.thumbnail}

### Start your backup

Click the menu ☰ button, select the job you just created, and click `Backup Now`{.action}.

![Start backup](images/10-start-backup.PNG){.thumbnail}

You can view the progress of your backup in the Veeam Agent application:

![Backup progress](images/10a-backup-progress.PNG){.thumbnail}

On the Veeam Backup and Recovery server, the backup job will appear:

![Backup jobs](images/10b-backup-job.PNG){.thumbnail}

## Go further

[Restoring a Bare Metal Server with Veeam Enterprise](/pages/bare_metal_cloud/dedicated_servers/veeam-enterprise-server-restore).

[Veeam support site](https://www.veeam.com/knowledge-base.html)

Join our community of users on <https://community.ovh.com/en/>.
