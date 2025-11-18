---
title: Using instance backups to create or restore an instance
excerpt: Find out how to restore an instance or create a new one from a backup
updated: 2025-11-04
---

## Objective

The OVHcloud Control Panel enables you to [create backups of your instances](/pages/public_cloud/compute/save_an_instance) within a few clicks, as well as automating this process.
You can make use of these instance backups for two basic purposes:

- Creating a new instance with the backup as a template in order to duplicate the original instance, for example if you are configuring a load balancing infrastructure.
- Restoring instances from a backup, for example if recent changes broke critical configurations on the instance.

**This guide explains how to use backups to duplicate and restore your instances.**

## Requirements

- A backup of a [Public Cloud instance](/links/public-cloud/instance-backup)
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

> [!primary]
>
> Two types of backups are available:
>
> - Local: Stored in the same region as your instance.
> - Distant: Automatically replicated in another region of your choice.
>
> The operations of **creating** and **restoring** an instance from a distant backup are fully supported via the OVHcloud API, offering greater flexibility and effortless integration into your automation processes.
>
> **Note :** These operations are not yet available through the OVHcloud Control Panel.
>

### Creating an instance from a backup

> [!tabs]
> Via the OVHcloud Control Panel
>> Log in to the [OVHcloud Control Panel](/links/manager), go to the `Public Cloud`{.action} section and select the Public Cloud project concerned.<br>
>> Then click `Instance backup`{.action} in the left-hand navigation bar under **Compute**.
>>
>> ![public-cloud-instance-backup](images/restorebackup01.png){.thumbnail}
>>
>> Click the `...`{.action} button in the row of the relevant backup, then select `Create an instance`{.action}.
>>
>> You will see a shortened version of the instance creation page where you can decide on some options.
>>
>> ![public-cloud-instance-backup](images/restorebackup02.png){.thumbnail}
>>
>> Some elements are pre-defined:
>>
>> - **Region**: Your instance will be created in the same data centre as your backup.
>> - **Image**: The image will correspond to your backup.
>> - **Model**: Only the models that are compatible with your image are available, depending on your quota.
>>
>> ![public-cloud-instance-backup](images/restorebackup03.png){.thumbnail}
>>
>> Choose the new instance's name, SSH key, vRack and billing period, then click the `Create the instance`{.action} button.
>>
>> For further information on creating an instance, please refer to [this guide](/pages/public_cloud/compute/public-cloud-first-steps).
>>
>> > [!primary]
>> >
>> > In order to create the instance in a different data centre, you will first need to transfer the backup to the appropriate region. Please refer to our guide to [transferring an instance backup](/pages/public_cloud/compute/transfer_instance_backup_from_one_datacentre_to_another).
>> >
>>
> Via the OpenStack CLI
>>
>> To create an instance from your backup, use the backup ID as the image with this command:
>>
>> ```bash
>> $ openstack server create --key-name SSHKEY --flavor 98c1e679-5f2c-4069-b4da-4a4f7179b758 --image 0a3f5901-2314-438a-a7af-ae984dcbce5c Server1_from_snap
>> ```
>>
> Via Horizon
>> In the Horizon interface, click on `Compute`{.action} in the left-hand menu, then on `Images`{.action}. Find the desired image and click the `Launch`{.action} button to the right of your image line. 
>>
>> ![public-cloud-instance-backup-horizon](images/restorebackuphorizon1.png){.thumbnail}
>>
>> Name your instance in the dedicated field and determine the number of instances to create. Then click the `Flavor`{.action} tab.
>>
>> ![public-cloud-instance-backup-horizon-2](images/restorebackuphorizon2.png){.thumbnail}
>>
>> Choose the desired instance model, then click the `Networks`{.action} tab.
>>
>> > [!warning]
>> >
>> > If your instance is a Windows server, you must select a flavor of type win-xx-xx (for example, win-b2-15) and have a public interface on the Ext-Net network. Without these conditions, authentication with the OVHcloud KMS will not be possible, and your server will remain with an [unactivated licence](/pages/public_cloud/compute/activate-windows-license-private-mode). This could lead to limitations, including the absence of updates. Please note that it is not possible to resize a Linux instance (such as b2-15) to a Windows instance (such as win-b2-15). To make this transition, you need to recreate a new instance.
>> >
>>
>> ![public-cloud-instance-backup-horizon-3](images/restorebackuphorizon3.png){.thumbnail}
>>
>> Choose the network you wish to assign to it, then click the `Launch Instance`{.action} button.
>>
>> ![public-cloud-instance-backup-horizon-4](images/restorebackuphorizon4.png){.thumbnail}
>>
>> You can find the status of your new instance in `Compute`{.action} in the left-hand menu, then on `Instances`{.action}.
>>
>> ![public-cloud-instance-backup-horizon-5](images/restorebackuphorizon5.png){.thumbnail}
>>
> Via the OVHcloud API <a name="createinstanceviaapi"></a>
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/region/{regionName}/instance
>> >
>>
>> Fill in the variables:
>>
>> - **serviceName** : The OVHcloud project ID.
>> - **regionName** : The region name where the instance will be located.
>>
>> Example of the request body:
>>
>> ```json
>> {
>>   "billingPeriod": "hourly",
>>   "bootFrom": {
>>     "imageId": "5cb8ea68-****-****-****-820be8346***"
>>   },
>>   "flavor": {
>>     "id": "e81b46f8-****-****-****-cad655e65***"
>>   },
>>   "name": "newInstance",
>>   "network": {
>>     "public": true
>>   },
>>   "sshKey": {
>>     "name": "MySSHKey"
>>   }
>> }
>> ```
>>

### Restoring an instance from a backup

> [!tabs]
> Via the OVHcloud Control Panel
>> Log in to the [OVHcloud Control Panel](/links/manager), go to the `Public Cloud`{.action} section and select the Public Cloud project concerned.<br>
>> Then click `Instances`{.action} in the left-hand navigation bar under **Compute**.
>>
>> ![public-cloud-instance-backup](images/restorebackup04.png){.thumbnail}
>>
>> Click the `...`{.action} button in the row of the relevant instance, then select `Edit`{.action}.
>>
>> This opens the page for editing an instance where you can change:
>>
>> - the instance's name;
>> - the instance's image;
>> - the instance's model;
>> - the instance's billing mode (from `hourly` to `monthly` only).
>>
>> Make your changes if necessary and switch to the `Backups`{.action} tab of the **Image** section.
>>
>> ![public-cloud-instance-backup](images/restorebackup05.png){.thumbnail}
>>
>> Select from the list of available backups. Click on `Modify image`{.action} if you are certain that you want to overwrite the current image with the backup. 
>>
>> The instance will have the status `Re-installation` until the process is completed. It might be necessary to refresh the page in the browser in order to see the current status.
>>
>> > [!warning]
>> >
>> > As stated in the warning message, any data added after the backup creation will be lost.
>> >
>>
> Via the OVHcloud API
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/region/{regionName}/instance/{instanceId}/reinstall
>> >
>>
>> Fill in the variables:
>>
>> - **serviceName** : The OVHcloud project ID.
>> - **regionName** : The region name where the source instance is located.
>> - **instanceId** : The unique instance ID.
>>
>> Example of the request body:
>>
>> ```json
>> {
>>   "imageId": "5cb8ea68-****-****-****-820be8346***",
>>   "imageRegionName": "GRA11"
>> }
>> ```
>>

## Go further

[First steps](/pages/public_cloud/compute/public-cloud-first-steps)

[Creating instance backups](/pages/public_cloud/compute/save_an_instance)

Join our [community of users](/links/community).