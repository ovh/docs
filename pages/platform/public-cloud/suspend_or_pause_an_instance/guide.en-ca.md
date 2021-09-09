---
title: Shelve or pause an instance
slug: shelve-or-pause-an-instance
legacy_guide_number: 1781
section: Project management
order: 11
---

**Last updated 9th September 2021**
 
## Objective
 As part of the configuration of a high-availability infrastructure, you may encounter the need to cut access to your instances in order to perform different tests. OpenStack allows you to suspend, pause or shelve your instance. In each case, your IP is maintained.

> [!warning]
> The naming of these options in the OVHcloud control panel is different from the naming in Openstack/Horizon. If you are doing this via the control panel, make sure you select the right option.
>

**This guides explains how to shelve, pause or suspend your instance**

> [!alert]
>
> These manipulations still result in the instance being billed as long as the instance is not deleted.
> 
 
## Requirements

- an [OVHcloud Public Cloud instance](../create_an_instance_in_your_ovh_customer_account/) on hourly billing.
- access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca){.external}
- access to the [Horizon interface](https://docs.ovh.com/ca/en/public-cloud/configure_user_access_to_horizon/)
- Knowledge of [Openstack API](https://docs.ovh.com/ca/en/public-cloud/prepare_the_environment_for_using_the_openstack_api/)
- Knowledge of [Openstack variables](https://docs.ovh.com/ca/en/public-cloud/set-openstack-environment-variables/)


## Instructions

Please take note of the following before proceeding:

|Term|Description|Billing|
|---|---|---|
|Shelve|Retains the resources and data in your disk, all other resources are realeased including the memory.|You are only charged for the snapshot|
|Pause|Stores the state of the VM in RAM, a paused instance becomes frozen|You will still be charged the same price for your instance.|
|Suspend|Stores the VM state on disk, the resources dedicated to instance are still reserved|You will still be charged the same price for your instance.|


### From the OVHcloud Panel

In the OVH control panel, click on the `Public Cloud` section{.action} menu, select your Cloud project and click on `Instances`{.action} in the left side menu. 
Click on the `...`{.action} button to the right of the instance you want to suspend, then click on `Suspend`{.action}.

![suspend instance](images/suspend_an_instance.png){.thumbnail}

In the pop-up window, take note of the message and click on `Confirm`{.action}.

![confirm suspension](images/confirm_suspension.png){.thumbnail}

Once the process is completed, your instance will now appear as `Suspended` {.action}.

![suspended status](images/instance_suspended.png){.thumbnail}

To view the snapshot, on the left side menu, click on `Instance Backup`{.action}

![snapshot tab](images/shelved_backup.png){.thumbnail}


### From the Horizon interface

- [Configure user access to Horizon](../configure_user_access_to_horizon/)
- [Log in to the Horizon interface](https://horizon.cloud.ovh.net/auth/login/)

If you have deployed instances in different regions, make sure you are in the correct region. You can verify this at the top corner left of the horizon interface. To select the appropriate region, click on the dropdown arrow as seen below `highlighted`{.action} section and select your region.

![horizon interface](images/firstaccesshorizon.png){.thumbnail}

Click on the `Compute`{.action} menu on the left side and select `Instances`{.action}. Select `Shelve Instance`{.action} in the drop list for the corresponding instance.

![shelve instance](images/shelveinstancehorizon.png){.thumbnail}

Once the process is completed, your instance will now appear as `Shelved Offloaded`{.action}.

![shelved instance](images/newinstancestatushorizon.png){.thumbnail}

To view the snapshot, in the `Compute`{.action} menu, click on `Images`{.action}

![snapshot](images/snapshothorizon.png){.thumbnail}


### Using Openstack/Nova APIs

Please refer to the following guides:

- Knowledge of [Openstack API](https://docs.ovh.com/ca/en/public-cloud/prepare_the_environment_for_using_the_openstack_api/)
- Knowledge of [Openstack variables](https://docs.ovh.com/ca/en/public-cloud/set-openstack-environment-variables/)

Once your environement is ready, type the following at the command line:

```bash
openstack server shelve <UID server>
 
=====================================

nova shelve <UID server> 
```

#### **Actions on the snapshot**

> [!alert]
>
> Any actions on the snapshot other than unshelve can be very dangerous for your infrastructure in case of misuse. It is not recommended to deploy a new instance from any snapshot created as a result of suspending an instance. Once you unshelve an instance, the snapshot is automatically deleted. 
>
> OVHcloud is providing you with machines that you are responsible for. We have no access to these machines, and therefore cannot manage them.  You are responsible for your own software and security management. If you experience any issues or doubts when it comes to managing, using or securing your server, we recommend that you contact a specialist service provider.
>

### **Unshelve or Unsuspend an instance**
This option will allow you to re-up your instance so that you can continue using it. Please note that once this is done, the billing will resume normally.

#### From the OVHcloud Panel

In the OVH control panel, click on the `Public Cloud` section{.action} menu, select your Cloud project and click on `Instances`{.action} in the left side menu. 
Click on the '...'{.action} button to the right of the instance you want to suspend, then click on `Reactivate`{.action}.

![reactivate instance](images/reactivate_instancePanel.png){.thumbnail}

In the pop-up window, take note of the message and click on `Confirm`{.action}.

Once the process is completed, your instance will now appear as `Activated`{.action}

#### From the Horizon interface

In the horizon interface, click on the `Compute`{.action} menu on the left and then select Instances{.action}. Select `Unshelve Instance`{.action} in the drop list for the corresponding instance.

![unshelve instance](images/unshelveinstancehorizon.png){.thumbnail}

Once the process is completed, your instance will now appear as `Active`{.action}.

#### Using Openstack/Nova APIs

Once your environement is ready, type the following at the command line:

```bash
~$ openstack server unshelve <UID server>

=========================================

~$ nova unshelve <UID server>
```

### Suspend or stop an instance

#### From the OVHcloud Panel

In the OVH control panel, click on the `Public Cloud` section{.action} menu, select your Cloud project and click on `Instances`{.action} in the left side menu. 
Click on the '...'{.action} button to the right of the instance you want to stop, then click on `Stop`{.action}.

In the pop-up window, take note of the message and click on `confirm`{.action}.

Once the process is completed, your instance will now appear as `Off`{.action}.

To resume the instance, perform the same steps as mentioned above and select `Boot`{.action}. In some cases, you might need to do a cold reboot instead.


#### From the Horizon interface 

In the horizon interface, click on the `Compute`{.action} menu on the left and then select Instances{.action}. Select `Suspend Instance`{.action} in the drop list for the corresponding instance.

Once the process is completed, your instance will now appear as `Suspended`{.action}.

To unsuspend the instance, perform the same steps as mentioned above and select `Resume Instance`{.action} in the drop list


#### Using Openstack/Nova APIs

Please refer to the [official guide](https://docs.openstack.org/mitaka/user-guide/cli_stop_and_start_an_instance.html) on Openstack.


### Pause an instance
This action is only possible in the horizon interface or via the openstack/nova api.

#### Using Horizon

In the horizon interface, click on the `Compute`{.action} menu on the left and then select Instances{.action}. Select `Pause Instance`{.action} in the drop list for the corresponding instance.

Once the process is completed, your instance will now appear as `Paused`{.action}.

To unpause the instance, perform the same steps as mentioned above and select `Resume Instance`{.action} in the drop list

#### Using Openstack/Nova APIs

Please refer to the [official guide](https://docs.openstack.org/mitaka/user-guide/cli_stop_and_start_an_instance.html) on Openstack.

## Go further
Join our community of users on <https://community.ovh.com/en/>.