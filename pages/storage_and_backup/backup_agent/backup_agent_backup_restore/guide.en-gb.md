---
title: "Backup Agent - Managing your backups and restores"
excerpt: "Learn how to back up and restore your data on your Bare Metal servers with Backup Agent"
updated: 2026-02-03
---

## Objective

Learn how to back up and restore your data on your Bare Metal servers with Backup Agent.

> [!primary]
> 
> Find more information on the Backup Agent product on [this page](/pages/storage_and_backup/backup_agent/backup_agent_product_presentation).

## Requirements

- A Bare Metal server with the Backup Agent installed on it. Read our guide "[How to configure your first backup](/pages/storage_and_backup/backup_agent/backup_agent_first_configuration) for more information".

<!-- CP-NAV-START:baremetal-backup-agent -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Backup Agent](/links/control-panel/baremetal-backup-agent)
- **Navigation path:** `Bare Metal Cloud`{.action} > `Backup Agent`{.action}

---
<!-- CP-NAV-END:baremetal-backup-agent -->

## Instructions

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
> Currently, you cannot modify the policy that backs up your entire server, we are working to improve this configuration in the future.

You can view the success of this backup via:

- The daily report of backups.
- The "Backup Jobs" dashboard of the Veeam Service Provider Console.

![Backup Agent VSPC Backup Jobs](images/01-backup-agent-vspc-backup-jobs.png){.thumbnail}

![Backup Agent VSPC Job](images/01-backup-agent-vspc-job.png){.thumbnail}

#### Manual backup

If necessary, you can trigger a manual backup.

It will also create a full backup of your server and will always be sent to your remote storage point.

To create a manual backup, click on the tab corresponding to your Operating System:

> [!tabs]
> Windows
>>
>> Open the "Veeam Agent" application on your Bare Metal server:
>>
>> ![Backup Agent BKP Agent Search](images/01-backup-agent-bkpagent-search.png){.thumbnail}
>>
>> Click the `Backup Now`{.action} button to launch a backup:
>>
>> ![Backup Agent BKP Agent](images/01-backup-agent-bkpagent.png){.thumbnail}
>
> Linux
>>
>> To start a manual backup on Linux, you can use the command line.
>>
>> Connect to your Bare Metal server via SSH and run the following command to list your backup jobs:
>>
>> ```bash
>> sudo veeamconfig job list
>> ```
>>
>> To start a manual backup, use the following command, replacing `<job_name>` with your backup job name:
>>
>> ```bash
>> sudo veeamconfig job start <job_name>
>> ```
>>
>> If you want to start all backup jobs, use:
>>
>> ```bash
>> sudo veeamconfig job start --all
>> ```
>>
>> You can monitor the backup progress by viewing active sessions:
>>
>> ```bash
>> sudo veeamconfig session list
>> ```
>>
>> You can also access an interface to interact with the product by typing this command:
>>
>> ```bash
>> sudo veeam
>> ```

### Restoration

If you need to restore data, you have two options:

- Via the File Restore wizard.
- Via the Veeam Bare Metal Recovery ISO.

#### File Restore Wizard

To restore files and folders, click on the tab corresponding to your Operating System:

> [!tabs]
> Windows
>>
>> Open the "Veeam Agent" application on your Bare Metal server:
>>
>> ![Backup Agent BKP Agent Search](images/01-backup-agent-bkpagent-search.png){.thumbnail}
>>
>> Go to the menu and select `Restore File`{.action}:
>>
>> ![Backup Agent Restore Menu](images/01-backup-agent-restore-menu.png){.thumbnail}
>>
>> Select the desired restore point in the wizard:
>>
>> ![Backup Agent Restore Points](images/01-backup-agent-restore-restore-points.png){.thumbnail}
>>
>> Then confirm:
>>
>> ![Backup Agent Restore Point Summary](images/01-backup-agent-restore-restore-point-summary.png){.thumbnail}
>>
>> Finally, search for your file and select an option:
>>
>> ![Backup Agent Restore Wizard](images/01-backup-agent-restore-wizard.png){.thumbnail}
>>
>> - Restore - Overwrite: Allows you to restore the file while overwriting the one currently on the server.
>> - Restore - Keep: Allows you to restore the file while keeping the one currently on the server.
>> - Copy To: Allows you to copy the file to a location on your server.
>> - Explore: Allows you to explore the backup.
>> - Properties: Allows you to view the file properties.
>>
>> Launching a restore will give you a final window that will show the transfer:
>>
>> ![Backup Agent Restore Transfer](images/01-backup-agent-restore-transfer.png){.thumbnail}
>
> Linux
>>
>> To restore files and folders on Linux, you have two options: via the graphical interface or via the command line.
>>
>> #### Via the graphical interface
>>
>> 1\. Connect to your Bare Metal server via SSH.
>> 2\. Launch the Veeam interface by typing the following command:
>>
>> ```bash
>> sudo veeam
>> ```
>>
>> 3\. In the interface, select the file restore option.
>> 4\. Select the backup and the desired restore point.
>> 5\. Navigate through the backup to find the files or folders to restore.
>> 6\. Select the files and choose the restore action:
>>    - Restore to original location
>>    - Copy to a new location
>>    - Explore the backup
>>
>> #### Via the command line
>>
>> To restore files via the command line, you must first mount the backup:
>>
>> 1\. List your available backups:
>>
>> ```bash
>> sudo veeamconfig backup list
>> ```
>>
>> 2\. List the restore points of a backup:
>>
>> ```bash
>> sudo veeamconfig restore list --backup <backup_name>
>> ```
>>
>> 3\. Mount a restore point:
>>
>> ```bash
>> sudo veeamconfig mount --backup <backup_name> --restorepoint <point_name>
>> ```
>>
>> 4\. Once mounted, you can access the files via the mount point (usually in `/mnt/veeam/`).
>>
>> 5\. Copy the desired files from the mount point to their destination.
>>
>> 6\. Once the restore is complete, unmount the backup:
>>
>> ```bash
>> sudo veeamconfig unmount --backup <backup_name>
>> ```
>>
>> For more information, see the [Veeam documentation](https://helpcenter.veeam.com/docs/agentforlinux/userguide/files_restore_gui.html?ver=13) and the [command line restore documentation](https://helpcenter.veeam.com/docs/agentforlinux/userguide/files_restore_cmd.html?ver=13).

#### Veeam Baremetal Recovery ISO

Baremetal Recovery is a Veeam feature that involves creating a custom ISO in advance, which can then be used to boot a system and restore it from a backup stored on a different server.

Read this guide for more information: [Backup Agent - Bare Metal recovery with Veeam Backup Agent](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_agent_bare_metal_recovery).

You will need to adapt the server and credentials to match the ones we have provided.

## Go further

Join our [community of users](/links/community).