---
title: Activating and using Veeam Managed Backup
slug: veeam-backup-as-a-service
routes:
    canonical: 'https://docs.ovh.com/sg/en/private-cloud/veeam-backup-as-a-service/'
excerpt: Find out how to enable and use the Veeam Managed Backup option to secure your VMs
section: 'OVHcloud services and options'
updated: 2020-11-18
---

**Last updated 18th November 2020**

## Objective

Protecting and backing up your VMs is an essential part of ensuring long-term stability for your infrastructure. This is why we offer a managed backup solution based on Veeam Backup & Replication technology. You can use it to restore your data simply, by enabling automatic backup for your VMs.

Backups are performed using a virtual machine (VM) within your [Managed Bare Metal](https://www.ovhcloud.com/en-sg/managed-bare-metal/) infrastructure. The backup data is outsourced to an independent storage space at OVHcloud. Backups are performed during night-time, with a retention time depending on the solution level you choose.

**This guide explains how to deploy and use the Veeam Managed Backup option.**

## Requirements

- a [Managed Bare Metal infrastructure](https://www.ovhcloud.com/en-sg/managed-bare-metal/)
- access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg)
- a user account with access to vSphere and the permission ["Add resources"](../change-users-rights/) for the pertinent data centre
- [vSphere High Availability (HA)](../vmware-ha-high-availability/) enabled
- [Distributed Resource Scheduler (DRS)](../vmware-drs-distributed-ressource-scheduler) enabled
- Windows SPLA Licensing enabled

> [!primary]
>
> Our Veeam offers are currently not compatible with the latest version (10) offered by Veeam. OVHcloud will continue to offer version 9.5 until further notice. Please take this into consideration when configuring Veeam for your services.
>

## Instructions

### Activating the backup option

The first step is to order the service from the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg). To do this, go to the `Managed Bare Metal`{.action} section of the `Bare Metal Cloud`{.action} tab. Click on the relevant vSphere infrastructure, then select the data centre. Click on the `Backup`{.action} tab.

![Enable backup](images/veeam-managed-bare-metal.png){.thumbnail}

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

Select the VM for which you want disable backups from the list.

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
> It is also possible to disable the backup temporarily and reactivate it afterwards.
>

## Go further

Join our community of users on <https://community.ovh.com/en/>.
