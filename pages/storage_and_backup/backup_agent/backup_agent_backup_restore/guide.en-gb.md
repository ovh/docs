---
title: "Backup Agent - Managing your backups and restores"
excerpt: "Learn how to back up and restore your data on your Bare Metal servers with Backup Agent"
updated: 2026-01-09
---

## Objective

Learn how to back up and restore your data on your Bare Metal servers with Backup Agent.

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager).
- A Bare Metal server with the Backup Agent installed on it. Read our guide [How to configure your first backup](/pages/storage_and_backup/backup_agent/backup_agent_first_configuration) for more information.

## Instructions

### Create a backup for your server

This involves adding your server to your Backup Agent, downloading the agent and installing it on your server.

Log in to the [OVHcloud Control Panel](/links/manager) and go to the `Backup Agent`{.action} section.

![Backup Agent Menu](images/01-backup-agent-menu.png){.thumbnail}

Click on your vspc-tenant, in the `Services`{.action} section.

![Backup Agent Services](images/01-backup-agent-services.png){.thumbnail}

Go to the `Agents`{.action} section.

![Backup Agent Tenant Infos](images/01-backup-agent-tenant-infos.png){.thumbnail}

Click the `Add a configuration`{.action} button.

![Backup Agent](images/01-backup-agent-agent.png){.thumbnail}

Select your server and operating system.

![Backup Agent Add Server 01](images/01-backup-agent-add-server-01.png){.thumbnail}

![Backup Agent Add Server 02](images/01-backup-agent-add-server-02.png){.thumbnail}

### Backup

You have two options for making backups: Automatic Backup and Manual Backup.

#### Automatic backup

Automatic backup is included in the backup policy that we apply to your Backup Agent.

This backup will make a full backup of your server, which will be sent to your remote storage point.

> [!warning]
>
> This will trigger between 10 p.m. and 6 a.m. (CET time zone for Europe - EST time zone for Canada and Asia).

> [!primary]
>
> You cannot change or disable this automatic backup.

You can view the success of this backup via:

- The daily report of backups.
- The "Backup Jobs" dashboard of the Veeam Service Provider Console.

![Backup Agent VSPC Backup Jobs](images/01-backup-agent-vspc-backup-jobs.png){.thumbnail}

![Backup Agent VSPC Job](images/01-backup-agent-vspc-job.png){.thumbnail}

#### Manual backup

If necessary, you can trigger a manual backup.

It will also create a full backup of your server and will always be sent to your remote storage point.

To create a manual backup, open the "Veeam Agent" application on your Bare Metal server:

![Backup Agent BKP Agent Search](images/01-backup-agent-bkpagent-search.png){.thumbnail}

Click the `Backup Now`{.action} button to launch a backup:

![Backup Agent BKP Agent](images/01-backup-agent-bkpagent.png){.thumbnail}

### Restoration

If you need to restore data, you have two options:

- Via the File Restore wizard.
- Via the Veeam Bare Metal Recovery ISO.

#### File Restore Wizard

In order to use the Restore Files wizard, open the "Veeam Agent" application on your Bare Metal server:

![Backup Agent BKP Agent Search](images/01-backup-agent-bkpagent-search.png){.thumbnail}

Go to the menu and select `Restore File`{.action}:

![Backup Agent Restore Menu](images/01-backup-agent-restore-menu.png){.thumbnail}

Select the desired restore point in the wizard:

![Backup Agent Restore Points](images/01-backup-agent-restore-restore-points.png){.thumbnail}

Then confirm:

![Backup Agent Restore Point Summary](images/01-backup-agent-restore-restore-point-summary.png){.thumbnail}

Finally, search for your file and select an option:

![Backup Agent Restore Wizard](images/01-backup-agent-restore-wizard.png){.thumbnail}

- Restore - Overwrite: Allows you to restore the file while overwriting the one currently on the server.
- Restore - Keep: Allows you to restore the file while keeping the one currently on the server.
- Copy To: Allows you to copy the file to a location on your server.
- Explore: Allows you to explore the backup.
- Properties: Allows you to view the file properties.

Launching a restore will give you a final window that will show the transfer:

![Backup Agent Restore Transfer](images/01-backup-agent-restore-transfer.png){.thumbnail}

#### Veeam Baremetal Recovery ISO

Baremetal Recovery is a Veeam feature that involves creating a custom ISO in advance, which can then be used to boot a system and restore it from a backup stored on a different server.

Read this guide for more information: [Bare Metal recovery with Veeam Backup Agent](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_agent_bare_metal_recovery).

You will need to adapt the server and credentials to match the ones we have provided.

## Go further

Join our [community of users](/links/community).