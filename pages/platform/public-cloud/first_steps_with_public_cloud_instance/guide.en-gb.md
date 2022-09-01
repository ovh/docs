---
title: Managing your Public Cloud instances
slug: get-started-with-a-public-cloud-instance
excerpt: 'Find out how to manage your Public Cloud instances in the OVHcloud Control Panel'
section: Getting started
order: 05
---

**Last updated 22nd March 2022**

## Objective

You can manage your Public Cloud instances in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB).

**This guide explains the available Control Panel actions for a Public Cloud instance.**

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/en-gb/public-cloud/) in your OVHcloud account
- A [Public Cloud instance](../public-cloud-first-steps/) in your project
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)

## Instructions

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) and open your `Public Cloud`{.action} project. 

### Using the management interface for instances

Click on `Instances`{.action} the left-hand menu. 

![public-cloud](images/compute.png){.thumbnail}

This page lists all your Public Cloud instances and some of their properties:

- The instance ID, needed for certain API calls
- The location of the data centre i.e. the region of the instance
- The instance model
- The image i.e. the OS installed on the instance
- The IPv4 address of the instance
- Additional volumes (disks) currently attached to the instance
- The status of the instance, indicating whether it is in the `Activated` state

### Management options on the instance dashboard

On the instance management page, click on the name of the instance in the table.

Select the desired option in the left-hand "Management" box.

![public-cloud](images/management.png){.thumbnail}

These actions are also available on the instance management page if you click on `...`{.action} in the table.

#### Editing the configuration of the instance

Click on `Edit`{.action}.

The new page displays a modified version of the [instance creation options](../public-cloud-first-steps/) where you can edit the following items:

- **Renaming the instance**: You can give a name to the instance for easier identification.
- **Changing the image**: You can choose a different operating system for the instance. (Note that reinstalling an instance will delete all data stored on it.)
- **Changing the template**: You can switch to a different instance model. Please refer to [this guide](../public-cloud-first-steps/#create-instance) for more information about the options.
- **Changing the billing type**: You can change the billing period of the instance from hourly to monthly. Please refer to [this guide](../change-public-cloud-billing-rate/) for detailed information).

#### Creating a backup of the instance

Click on `Create a backup`{.action}.

Refer to our guide [Backing up an instance](../back-up-instance/) for detailed information. 

#### Creating an automatic backup of the instance

Click on `Create an automatic backup`{.action}.

Refer to our guide [Backing up an instance](../back-up-instance/#creating-an-automated-backup-of-an-instance) for detailed information.

#### Suspending the instance

Click on `Stop`{.action}.

This will put the instance in a suspended state. Refer to our guide [Shelve or pause an instance](../shelve-or-pause-an-instance/#suspend-stop-an-instance_1) for detailed information.

Click on `Boot`{.action} to reactivate the instance.

#### Using rescue mode

Click on `Reboot in rescue mode`{.action}.

This will activate rescue mode for the instance. Refer to our guide [Putting an instance in rescue mode](../put_an_instance_in_rescue_mode/) for detailed information.

#### Restarting the instance

- Click on `Hot reboot (soft)`{.action} to perform a software-level reboot.
- Click on `Cold reboot (hard)`{.action} to perform a hardware-level reboot.

Confirm the reboot request in the popup window.

#### Shelving the instance

Click on `Suspend`{.action}.

This will put the instance in the "shelved" state, here displayed as `Suspended`. Consult our guide [Shelve or pause an instance](../shelve-or-pause-an-instance/#shelve-suspend-an-instance) to learn more about the different states.

Click on `Reactivate`{.action} to restore the `Activated` state.

#### Reinstalling an instance

Click on `Reinstall`{.action}.

This action will reinstall the instance with the same operating system, provided the image is still supported.

Note that reinstalling **deletes all data** currently stored on your instance.

#### Deleting an instance

Click on `Delete`{.action}.

This action will permanently delete the instance, as well as all of the data stored on it.

Confirm the request in the popup window.

### Accessing the VNC console

Click on `Instances`{.action} the left-hand menu. On the instance management page, click on the name of the instance in the table.

Switch from the dashboard to the tab `VNC console`{.action}.

![public-cloud](images/vnc1.png){.thumbnail}

The VNC console provides direct access to your instance. In order for this access to work you need to configure a username and password on the instance first. 

Consult our [Getting started guide](../public-cloud-first-steps/#connect-to-instance) to learn more about the necessary steps.

## Go further

[Creating and connecting to your first Public Cloud instance](../public-cloud-first-steps/)

[Introducing Horizon](../horizon/)

Join our community of users on <https://community.ovh.com/en/>.