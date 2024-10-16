---
title: "Activating and using Veeam Managed Backup"
excerpt: "Find out how to enable and use the Veeam Managed Backup option to secure your VMs within an Hosted Private Cloud VMware on OVHcloud univers"
updated: 2024-10-15
---

## Objective

**The purpose of this guide is to explain how to deploy and use the Veeam Managed Backup option in just a few minutes.**

## Requirements

- a [Hosted Private Cloud infrastructure](/links/hosted-private-cloud/hosted-private-cloud)
- give the [resources right](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/change_users_rights) for the concerned datacenter to the user from the [OVHcloud Control Panel](/links/manager).
- a user account with access to vSphere and the permission ["Add resources"](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/change_users_rights) for the pertinent data centre
- [vSphere High Availability (HA)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_ha_high_availability) enabled
- [Distributed Resource Scheduler (DRS)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_drs_distributed_ressource_scheduler_new) enabled
- Windows SPLA Licensing enabled

## Instructions

Protecting and backing up your VMs is an essential part of ensuring long-term stability for your infrastructure. This is why we offer a managed backup solution based on Veeam Backup & Replication technology. You can use it to restore your data simply, by enabling automatic backup for your VMs.

Backups are performed using a virtual machine (VM) within your [Hosted Private Cloud](/links/hosted-private-cloud/veeam-managed-backup) infrastructure. The backup data is outsourced to an independent storage space at OVHcloud. Backups are performed during night-time, with a retention time depending on the solution level you choose.

### Activating the backup option

The first step is to order the service from the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB). To do this, go to the `Hosted Private Cloud`{.action} section of the `Hosted Private Cloud`{.action} tab. Click on the relevant vSphere infrastructure, then select the data centre. Click on the `Backup`{.action} tab.

![Enable backup](images/veeam-managed-controlp_new.png){.thumbnail}

Choose the appropriate plan and continue by clicking `Choose solution`{.action}.

Validate the contracts by clicking `Enable backup`{.action}.

Once the service is ready, a confirmation email will be sent and the active backup solution will be indicated in the Control Panel.

![Enable backup](images/backuppcc_03_en.png){.thumbnail}

The service can be used directly from vSphere.

On your vSphere infrastructure, you will see a virtual machine corresponding to the backup server as shown in the screenshot below.

![Backup Server](images/backupserver.png){.thumbnail}

### Enabling backups for virtual machines

After the service is activated, you will need to complete the backup requests for each virtual machine identified as critical from the vSphere client.

Select the VMware data centre, then the `Configure`{.action} tab and click `Backup Management`{.action} from the OVHcloud section of the menu.

![Backup Management](images/backupvm_01.png){.thumbnail}

Select the VM for which you want to enable backups from the list. On the right panel, click `Enable backup on this VM`{.action} to start the activation request.

![Enabling Backup](images/backupvm_02.png){.thumbnail}

In the confirmation window, click `OK`{.action}.

![Backup Confirmation](images/backupvm_03.png){.thumbnail}

Veeam is informed of this new request and creates the virtual machine backup job. Every night, starting at 10 p.m. (default), a backup task will be scheduled according to the backup scheme defined by the chosen solution.

Every day, an email containing the status of all the performed actions is sent to the OVHcloud account's email address.

> [!warning]
>
> Removing a VM from your inventory or disk **does not disable** the backup job for that machine, regardless of the information in the report.
>
> **Warning**: The limit on VMs must be 2 TB in order to enable backup.
>
> For the **Advanced** and **Premium** offerings, *Veeam Managed Backup* region-to-region replication follows the diagrams below.
>

Here is a diagram of the regions from which the regions of `zone 1` are or are not replicated to `zone 2`:

![Veeam Replication Schema](images/veeam_replicated_zones_schema.png){.thumbnail}

Here, you will see a mapping of the replicated zones in this table, with additional information:

|  SecNumCloud   | Zone 1 |       Zone 2        |                        Cross-site<br/>replication                         | Offers               | Comments                                                                                                                                                         |
|:--------------:|:------:|:-------------------:|:-------------------------------------------------------------------------:|----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        ❌        | `BHS`  |        `TOR`        |                                    ✅️                                     | Advanced<br/>Premium | - The Montreal Beauharnois (BHS) and Toronto Cambridge (TOR) regions are well replicated with the Veeam Managed Backup Advanced and Premium solutions.           |
|        ❌        | `ERI`  |        `RBX`        |                                     ❌                                     | Advanced<br/>Premium | - The regions of London Erith (ERI) and France Roubaix (RBX) are not replicated with the Veeam Managed Backup Advanced and Premium solutions.                    |
|        ❌        | `LIM`  |        `SBG`        |                                     ❌                                     | Advanced<br/>Premium | - The regions of Germany Limburg (LIM) and France Strasbourg (SBG) are not replicated with the Veeam Managed Backup Advanced and Premium solutions.              |
|        ❌        | `RBX`  |        `SBG`        |                                    ✅️                                     | Advanced<br/>Premium | - The regions of France Roubaix (RBX) and France Strasbourg (SBG) are well replicated with the Veeam Managed Backup Advanced and Premium solutions.              |
|                |        |                     |                                                                           |                      |                                                                                                                                                                  |
|       ✅️       | `RBX`  |        `SBG`        |                                    ✅️                                     | Advanced<br/>Premium | - The regions of France Roubaix (RBX) and France Strasbourg (SBG) are well replicated with the Veeam Managed Backup Advanced and Premium solutions.              |
|       ✅️       | `GRA`  |        `RBX`        |                                     ❌                                     | Advanced<br/>Premium | - The regions of France Gravelines (RBX) and France Roubaix (RBX) do not replicate with each other with the Veeam Managed Backup Advanced and Premium solutions. |
|                |        |                     |                                                                           |                      |                                                                                                                                                                  |
|        ❌        | `VIN`  |        `HIL`        |                                    ✅️                                     | Advanced<br/>Premium | - The US regions of Washington DC Vint Hill (VIN) and Seattle Hillsboro Oregon (HIL) replicate well with the Veeam Managed Backup Advanced and Premium offers.   |





### Restoring a backup

Select the VMware data centre, then the `Configure`{.action} tab and choose `Backup Management`{.action} from the OVHcloud section of the menu.

From the list, select the VM for which you want to restore a backup (its `Backup state` must be **Enabled**).

![Restoring backup](images/restorebackup_01.png){.thumbnail}

On the right-hand panel, click `Restore Backup`{.action} to open the restore request.

![Restoring backup](images/restorebackup_02.png){.thumbnail}

A new window opens to create the restore job. Check the VM name, select the backup date to restore, and choose the datastore (storage space used as the restore target). Click `Restore Backup`{.action} to start the process.

![Initialising Restore](images/restorebackup_03.png){.thumbnail}

A window then confirms that the Veeam server is notified of this new request and that the virtual machine restore job has been created.

![Validating Restore](images/restorebackup_04.png){.thumbnail}

The VM is restored next to the source machine.

![Source machine is restored](images/restorebackup_05.png){.thumbnail}

> [!warning]
>
> Note that the restored machine is connected to the network. If you start the VM without turning off the source VM, there may be an IP address conflict.
>

![IP Conflict](images/restorebackup_06.png){.thumbnail}

To edit these settings, select the data centre in your inventory, click the tab `Configure`{.action}, then choose `OVH Backup Management`{.action}. On this page, you have access to the list of your backup jobs, with the number of backups and the last status of the job.

### Disabling backups for a VM

Select the VMware data centre, then the `Configure`{.action} tab and choose `Backup Management`{.action} from the OVHcloud section of the menu.

Select the VM for which you want to disable backups from the list.

![Machine Disable](images/restorebackup_01.png){.thumbnail}

On the right-hand panel, click `Disable Backup on this VM`{.action}.

![Disabling Backup](images/restorebackup_02.png){.thumbnail}

Then confirm the deactivation by clicking `OK`{.action}.

![Deactivation Confirmation](images/disablebackup_03.png){.thumbnail}

> [!warning]
>
> Backups can be reactivated at any time from the moment the VM is present in the infrastructure.
> 
> Please note that the backups remain available for recovery only until the retention period expires.
>

> [!primary]
>
> Follow the same instructions to disable the backup of a deleted VM.
> It is also possible to disable the backup temporarily and reactivate it afterward.
>

## Go further

Join our [community of users](/links/community).
