---
title: Managing your Public Cloud instances
excerpt: 'Find out how to manage your Public Cloud instances in the OVHcloud Control Panel'
updated: 2024-02-20
---

## Objective

You can manage your Public Cloud instances in the [OVHcloud Control Panel](/links/manager).

**This guide explains the available Control Panel actions for a Public Cloud instance.**

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/en-gb/public-cloud/) in your OVHcloud account
- A [Public Cloud instance](/pages/public_cloud/compute/public-cloud-first-steps) in your project
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

Log in to the [OVHcloud Control Panel](/links/manager) and open your `Public Cloud`{.action} project. 

### Using the management interface for instances

Click on `Instances`{.action} the left-hand menu. 

![public-cloud](images/compute-2024.png){.thumbnail}

This page lists all your Public Cloud instances and some of their properties:

- The instance ID, needed for certain API calls
- The location of the data centre i.e. the region of the instance
- The instance model
- The image i.e. the OS installed on the instance
- The IPv4 address of the instance
- The private address currently attached to the instance
- Additional volumes (disks) currently attached to the instance
- The status of the instance, indicating whether it is in the `Activated` state

### Management options on the instance dashboard

On the instance management page, click on the name of the instance in the table.

Select the desired option in the left-hand "Management" box.

![public-cloud](images/management.png){.thumbnail}

These actions are also available on the instance management page if you click on `...`{.action} in the table.

#### Editing the configuration of the instance

Click on `Edit`{.action}.

The new page displays a modified version of the [instance creation options](/pages/public_cloud/compute/public-cloud-first-steps) where you can edit the following items:

- **Renaming the instance**: You can give a name to the instance for easier identification.
- **Changing the image**: You can choose a different operating system for the instance. (Note that reinstalling an instance will delete all data stored on it.)
- **Changing the template**: You can switch to a different instance model. Please refer to [this guide](/pages/public_cloud/compute/public-cloud-first-steps#create-instance) for more information about the options.
- **Changing the billing type**: You can change the billing period of the instance from hourly to monthly. Please refer to [this guide](/pages/account_and_service_management/managing_billing_payments_and_services/changing_hourly_monthly_billing) for detailed information).

#### Creating a backup of the instance

Click on `Create a backup`{.action}.

Refer to our guide [Backing up an instance](/pages/public_cloud/compute/save_an_instance) for detailed information. 

#### Creating an automatic backup of the instance

Click on `Create an automatic backup`{.action}.

Refer to our guide [Backing up an instance](/pages/public_cloud/compute/save_an_instance#creating-an-automated-backup-of-an-instance) for detailed information.

#### Stop the instance

Click on `Stop`{.action}.

This will put the instance in an `Off` state, but you will still be charged the same price for your instance. Refer to our guide [Shelve or pause an instance](/pages/public_cloud/compute/suspend_or_pause_an_instance#suspend-stop-an-instance) for detailed information.

Click on `Boot`{.action} to reactivate the instance.

#### Using rescue mode

Click on `Reboot in rescue mode`{.action}.

This will activate rescue mode for the instance. Refer to our guide [How to activate rescue mode on a Public Cloud instance](/pages/public_cloud/compute/put_an_instance_in_rescue_mode) for detailed information.

#### Restarting the instance

> [!warning]
> The Hot reboot option is currently not available for Metal instances.
>

- Click on `Hot reboot (soft)`{.action} to perform a software-level reboot.
- Click on `Cold reboot (hard)`{.action} to perform a hardware-level reboot.

Confirm the reboot request in the popup window.

#### Shelving the instance

Click on `Suspend`{.action}.

This will put the instance in the "shelved" state, here displayed as `Suspended`. Consult our guide [Shelve or pause an instance](/pages/public_cloud/compute/suspend_or_pause_an_instance#shelve-suspend-an-instance) to learn more about the different states.

Click on `Reactivate`{.action} to restore the `Activated` state.

#### Reinstalling an instance

Click on `Reinstall`{.action}.

This action will reinstall the instance with the same operating system, provided the image is still supported.

Note that reinstalling **deletes all data** currently stored on your instance.

#### Deleting an instance

Click on `Delete`{.action}.

This action will permanently delete the instance, as well as all of the data stored on it.

Confirm the request in the popup window.

> [!warning]
> Deleting an instance does not automatically delete all the options associated with it (storage, snapshot, backup, etc...), so make sure that all other options associated with the instance are also deleted to stop being billed.
>

### Accessing the VNC console <a name="accessvnc"></a>

Click on `Instances`{.action} the left-hand menu. On the instance management page, click on the name of the instance in the table.

Switch from the dashboard to the tab `VNC console`{.action}.

![public-cloud](images/vnc1.png){.thumbnail}

The VNC console provides direct access to your instance. In order for this access to work you need to configure a username and password on the instance first. 

Consult our [Getting started guide](/pages/public_cloud/compute/public-cloud-first-steps#connect-to-instance) to learn more about the necessary steps.

## Go further

[Creating and connecting to your first Public Cloud instance](/pages/public_cloud/compute/public-cloud-first-steps)

[Introducing Horizon](/pages/public_cloud/compute/introducing_horizon)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).