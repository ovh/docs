---
title: Shelve or pause an instance
slug: shelve-or-pause-an-instance
legacy_guide_number: 1781
section: Project management
order: 3
---

**Last updated 20th September 2021**

## Objective

As part of the configuration of a high-availability infrastructure, you may encounter the need to cut access to your instances in order to perform different tests. OpenStack allows you to suspend, pause or shelve your instance. In each case, your IP is maintained.

> [!warning]
> The naming of these options in the OVHcloud Control Panel is different from the naming in Openstack/Horizon. If you are doing this via the OVHcloud Control Panel, make sure you select the right option.
>

**This guide explains how to shelve, pause or suspend your instance.**

## Requirements

- An [OVHcloud Public Cloud instance](../create_an_instance_in_your_ovh_customer_account/) on **hourly** billing
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg){.external} or [Horizon interface](https://docs.ovh.com/sg/en/public-cloud/configure_user_access_to_horizon/)
- Knowledge of [Openstack API](https://docs.ovh.com/sg/en/public-cloud/prepare_the_environment_for_using_the_openstack_api/) and [Openstack variables](https://docs.ovh.com/sg/en/public-cloud/set-openstack-environment-variables/)

## Instructions

> [!alert]
>
> These manipulations still result in the instance being billed as long as the instance is not deleted.
>

The table below allows you to differentiate the options available on your instances. Continue reading this guide by clicking on the option of your choice.

|Term|Description|Billing|
|---|---|---|
|[Shelve](#shelve-instance)|Retains the resources and data in your disk by creating a snapshot, all other resources are released.|You are only billed for the snapshot.|
|[Suspend](#stop-suspend-instance)|Stores the VM state on disk, the resources dedicated to instance are still reserved.|You will still be billed the same price for your instance.|
|[Pause](#pause-instance)|Stores the state of the VM in RAM, a paused instance becomes frozen.|You will still be billed the same price for your instance.|

### Shelve (suspend) an instance <a name="shelve-instance"></a>

This option will allow you to release the resources dedicated to your Public Cloud instance, but the IP address will remain. The data on your local disk will be stored in a snapshot automatically created once the instance is shelved. Data stored in the memory and elsewhere will not be retained.

#### From the OVHcloud Control Panel

In the OVHcloud Control Panel, select your project from the `Public Cloud`{.action} section. Click on `Instances`{.action} in the left side menu.

Click on the `...`{.action} button to the right of the instance you want to suspend, then click on `Suspend`{.action}.

![suspend instance](images/suspend_an_instance.png){.thumbnail}

In the pop-up window, take note of the message and click on `Confirm`{.action}.

![confirm suspension](images/confirm_suspension.png){.thumbnail}

Once the process is completed, your instance will now appear as *Suspended*.

![suspended status](images/instance_suspended.png){.thumbnail}

To view the snapshot, go to the left side menu and click on `Instance Backup`{.action}. A snapshot named *xxxxx-shelved* will now be visible:

![snapshot tab](images/shelved_backup.png){.thumbnail}

#### From the Horizon Interface

To proceed, you need to [configure user access to Horizon](../horizon/) and [log in to the Horizon interface](https://horizon.cloud.ovh.net/auth/login/).

If you have deployed instances in different regions, make sure you are in the correct region. You can verify this on the top left corner in the Horizon interface.

![horizon interface](images/firstaccesshorizon.png){.thumbnail}

Click on the `Compute`{.action} menu on the left side and select `Instances`{.action}. Select `Shelve Instance`{.action} in the drop list for the corresponding instance.

![shelve instance](images/shelveinstancehorizon.png){.thumbnail}

Once the process is completed, your instance will now appear as *Shelved Offloaded*.

![shelved instance](images/newinstancestatushorizon.png){.thumbnail}

To view the snapshot, in the `Compute`{.action} menu, click on `Images`{.action}.

![snapshot](images/snapshothorizon.png){.thumbnail}

#### Using Openstack/Nova APIs

Before proceeding, it is recommended that you consult these guides:

- [Prepare the environment to use the OpenStack API](https://docs.ovh.com/sg/en/public-cloud/prepare_the_environment_for_using_the_openstack_api/)
- [Set OpenStack environment variables](https://docs.ovh.com/sg/en/public-cloud/set-openstack-environment-variables/)

Once your environment is ready, type the following at the command line:

```bash
openstack server shelve <UUID server>
 
=====================================

nova shelve <UUID server> 
```

### Unshelve (reactivate) an instance

This option will allow you to re-up your instance so that you can continue using it. Please note that once this is done, the regular billing will resume.

> [!alert] **Actions on the snapshot**
>
> Any actions on the snapshot other than *unshelve* can be very dangerous for your infrastructure in case of misuse. Once you *unshelve* an instance, the snapshot is automatically deleted. It is not recommended to deploy a new instance from any snapshot created as a result of shelving (suspending) an instance.
>
> OVHcloud is providing you with machines that you are responsible for. We have no access to these machines, and therefore cannot manage them.  You are responsible for your own software and security management. If you experience any issues or doubts when it comes to managing, using or securing your server, we recommend that you contact a specialist service provider.
>

#### From the OVHcloud Control Panel

In the OVHcloud Control Panel, select your project from the `Public Cloud`{.action} section and click on `Instances`{.action} in the left side menu.

Click on the `...`{.action} button to the right of the instance, then click on `Reactivate`{.action}.

![reactivate instance](images/reactivate_instancePanel.png){.thumbnail}

In the pop-up window, take note of the message and click on `Confirm`{.action}.

Once the process is completed, your instance will now appear as *Activated*.

#### From the Horizon interface

In the Horizon interface, click on the `Compute`{.action} menu on the left and then select `Instances`{.action}. Select `Unshelve Instance`{.action} in the drop list for the corresponding instance.

![unshelve instance](images/unshelveinstancehorizon.png){.thumbnail}

Once the process is completed, your instance will now appear as *Active*.

#### Using Openstack/Nova APIs

Once your environment is ready, type the following at the command line:

```bash
~$ openstack server unshelve <UUID server>

=========================================

~$ nova unshelve <UUID server>
```

### Suspend (stop) an instance <a name="stop-suspend-instance"></a>

This option will allow you to shutdown your instance and store the VM state on disk, the memory will be written to the disk as well.

#### From the OVHcloud Control Panel

In the OVHcloud Control Panel, select your project from the `Public Cloud`{.action} section and click on `Instances`{.action} in the left side menu.

Click on the `...`{.action} button to the right of the instance you want to stop, then click on `Stop`{.action}.

![stop instance](images/stopinstance.png){.thumbnail}

In the pop-up window, take note of the message and click on `Confirm`{.action}.

Once the process is completed, your instance will now appear as *Off*.

To resume the instance, perform the same steps as mentioned above. Click on the `...`{.action} button to the right of the instance and select `Boot`{.action}. In some cases, you might need to do a cold reboot.

#### From the Horizon interface 

In the Horizon interface, click on the `Compute`{.action} menu on the left and then select `Instances`{.action}. Select `Suspend Instance`{.action} in the drop list for the corresponding instance.

![suspend instance Horizon](images/suspendinstancehorizon.png){.thumbnail}

The confirmation message will appear, indicating that the instance has been suspended.

To unsuspend the instance, perform the same steps as mentioned above. In the drop list for the corresponding instance select `Resume Instance`{.action}.

#### Using Openstack/Nova API

Once your environment is ready, type the following at the command line:

```bash
~$ openstack server suspend <UUID server>

=========================================

~$ nova suspend <UUID server>
```

To unsuspend the instance, type the following at the command line:

```bash
~$ openstack server unsuspend <UUID server>

=========================================

~$ nova unsuspend <UUID server>
```

### Pause an instance <a name="pause-instance"></a>

This action is only possible in the Horizon interface or via the Openstack/Nova API. It allows you to *freeze* your instance.

#### Using Horizon

In the Horizon interface, click on the `Compute`{.action} menu on the left and then select `Instances`{.action}. Select `Pause Instance`{.action} in the drop list for the corresponding instance.

![Pause instance](images/pauseinstancehorizon.png){.thumbnail}

The confirmation message will appear, indicating that the instance has been paused.

To unpause the instance, perform the same steps as mentioned above. In the drop list for the corresponding instance select `Resume Instance`{.action}.

#### Using Openstack/Nova APIs

Once your environment is ready, type the following at the command line:

```bash
~$ openstack server pause <UUID server>

=========================================

~$ nova pause <UUID server>
```

To unpause the instance, type the following at the command line:

```bash
~$ openstack server unpause <UUID server>

=========================================

~$ nova unpause <UUID server>
```

## Go further

[Openstack documentation](https://docs.openstack.org/mitaka/user-guide/cli_stop_and_start_an_instance.html)

Join our community of users on <https://community.ovh.com/en/>.
