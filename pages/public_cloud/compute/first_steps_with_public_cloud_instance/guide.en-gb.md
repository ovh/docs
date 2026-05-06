---
title: Managing your Public Cloud instances
excerpt: 'Find out how to manage your Public Cloud instances in the OVHcloud Control Panel'
updated: 2026-02-24
---

## Objective

You can manage your Public Cloud instances in the [OVHcloud Control Panel](/links/manager).

**This guide explains the available Control Panel actions for a Public Cloud instance.**

## Requirements

- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account
- A [Public Cloud instance](/pages/public_cloud/compute/public-cloud-first-steps) in your project

<!-- CP-NAV-START:publiccloud-projects -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Navigation path:** `Public Cloud`{.action} > Select your project

---
<!-- CP-NAV-END:publiccloud-projects -->

## Instructions

### Using the management interface for instances

<!-- CP-STEPS-START:instance-list -->
Click on `Instances`{.action} in the left-hand menu.

This page lists all your Public Cloud instances and some of their properties:

- The instance ID, needed for certain API calls
- The location of the data centre i.e. the region of the instance
- The instance template
- The image i.e. the OS installed on the instance
- The IPv4 address of the instance
- The private address currently attached to the instance
- Additional volumes (disks) currently attached to the instance
- The status of the instance, indicating whether it is in the `Activated` state
<!-- CP-STEPS-END:instance-list -->

### Management options on the instance dashboard

From the instance management page, click on the name of the instance concerned. 

This will take you to the `General Information` page, which centralizes the main details and operating status of your instance (status, resources, network, access, and metadata).

Some of these operations are also accessible from the instance management page via the `...`{.action} button in the instance table.

#### Editing the configuration of the instance

<!-- CP-STEPS-START:edit-configuration -->
Click `Edit image`{.action}, or open `Additional actions`{.action} and then select `Edit`{.action}.

The new page displays a modified version of the [instance creation options](/pages/public_cloud/compute/public-cloud-first-steps) where you can edit the following items:

- **Renaming the instance**: You can give a name to the instance for easier identification.
- **Changing the image**: You can choose a different operating system for the instance. (Note that reinstalling an instance will delete all data stored on it.)
- **Changing the template**: You can switch to a different instance model. Refer to [this guide](/pages/public_cloud/compute/public-cloud-first-steps#model) for more information about the options.
- **Changing the billing type**: You can change the billing period of the instance from hourly to monthly. Refer to [this guide](/pages/account_and_service_management/managing_billing_payments_and_services/changing_hourly_monthly_billing) for detailed information.
<!-- CP-STEPS-END:edit-configuration -->

#### Creating a backup of the instance

<!-- CP-STEPS-START:create-backup -->
Click on `Create a backup`{.action}.

Refer to our guide [Backing up an instance](/pages/public_cloud/compute/save_an_instance) for detailed information.
<!-- CP-STEPS-END:create-backup -->

#### Deleting an instance

<!-- CP-STEPS-START:delete-instance -->
Click on `Delete`{.action}.

This action will permanently delete the instance, as well as all of the data stored on it.

Confirm the request in the popup window.

> [!warning]
> Deleting an instance does not automatically delete all the options associated with it (storage, snapshot, backup, etc...), so make sure that all other options associated with the instance are also deleted to stop being billed.
>
<!-- CP-STEPS-END:delete-instance -->

#### Attach a volume

<!-- CP-STEPS-START:attach-volume -->
Click `Attach a volume`{.action}.

Then select the volume to associate with the instance and click `Confirm`{.action}. Once attached, the volume is immediately available and can be mounted from the instance's operating system.
<!-- CP-STEPS-END:attach-volume -->

#### Change the reverse DNS

<!-- CP-STEPS-START:change-reverse-dns -->
Click on `⋮`{.action} then `Change reverse DNS`{.action}.

Refer to the guide [How to configure the reverse DNS of my connection](/pages/public_cloud/compute/setup_instance_reverse) for more information.
<!-- CP-STEPS-END:change-reverse-dns -->

#### Configure the firewall

<!-- CP-STEPS-START:configure-firewall -->
Click on `⋮`{.action} then `Configure the firewall`{.action}.

Refer to the guide [Enabling and configuring the Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network) for more information.
<!-- CP-STEPS-END:configure-firewall -->

#### Manage private networks

<!-- CP-STEPS-START:manage-private-networks -->
Click on `⋮`{.action} then `Manage private networks`{.action}.

Refer to the guide [Creating a private network with Gateway](/pages/public_cloud/public_cloud_network_services/getting-started-02-create-private-network-gateway) for more information.
<!-- CP-STEPS-END:manage-private-networks -->

#### Attach a network

<!-- CP-STEPS-START:attach-network -->
Click on `⋮`{.action} then `Attach a network`{.action}.

Select the desired network from the drop-down list, then click `Confirm`{.action}.
<!-- CP-STEPS-END:attach-network -->

#### Additional actions

Click on `Additional actions`{.action}

##### Creating an automatic backup of the instance

<!-- CP-STEPS-START:create-automatic-backup -->
Click on `Create an automatic backup`{.action}.

Refer to our guide [Backing up an instance](/pages/public_cloud/compute/save_an_instance#creating-an-automated-backup-of-an-instance) for detailed information.
<!-- CP-STEPS-END:create-automatic-backup -->

##### Stop the instance

<!-- CP-STEPS-START:stop-instance -->
Click on `Stop`{.action}.

This will put the instance in an `Off` state, but you will still be charged the same price for your instance. Refer to our guide [Shelve or pause an instance](/pages/public_cloud/compute/suspend_or_pause_an_instance#suspend-stop-an-instance) for detailed information.

Click on `Boot`{.action} to reactivate the instance.
<!-- CP-STEPS-END:stop-instance -->

##### Using rescue mode

<!-- CP-STEPS-START:rescue-mode -->
Click on `Reboot in rescue mode`{.action}.

This will activate rescue mode for the instance. Refer to our guide [How to activate rescue mode on a Public Cloud instance](/pages/public_cloud/compute/put_an_instance_in_rescue_mode) for detailed information.
<!-- CP-STEPS-END:rescue-mode -->

##### Restarting the instance

<!-- CP-STEPS-START:reboot-instance -->
> [!warning]
> The Hot reboot option is currently not available for Metal instances.
>

- Click on `Hot reboot (soft)`{.action} to perform a software-level reboot.
- Click on `Cold reboot (hard)`{.action} to perform a hardware-level reboot.

Confirm the reboot request in the popup window.
<!-- CP-STEPS-END:reboot-instance -->

##### Shelving the instance

<!-- CP-STEPS-START:shelve-instance -->
Click on `Suspend`{.action}.

This will put the instance in the "shelved" state, here displayed as `Suspended`. Consult our guide [Shelve or pause an instance](/pages/public_cloud/compute/suspend_or_pause_an_instance#shelve-suspend-an-instance) to learn more about the different states.

Click on `Reactivate`{.action} to restore the `Activated` state.
<!-- CP-STEPS-END:shelve-instance -->

##### Reinstalling an instance

<!-- CP-STEPS-START:reinstall-instance -->
Click on `Reinstall`{.action}.

This action will reinstall the instance with the same operating system, provided the image is still supported.

Note that reinstalling **deletes all data** currently stored on your instance.
<!-- CP-STEPS-END:reinstall-instance -->

### Accessing the VNC console <a name="accessvnc"></a>

<!-- CP-STEPS-START:vnc-console -->
Click on `Instances`{.action} in the left-hand menu. On the instance management page, click on the name of the instance in the table.

Switch from the dashboard to the tab `VNC console`{.action}.

![public-cloud](images/vnc1.png){.thumbnail}

The VNC console provides direct access to your instance. For this to work, first configure a username and password on the instance.

Consult our [Getting started guide](/pages/public_cloud/compute/public-cloud-first-steps#vnc-console) to learn more about the necessary steps.
<!-- CP-STEPS-END:vnc-console -->

## Go further

[Creating and connecting to your first Public Cloud instance](/pages/public_cloud/compute/public-cloud-first-steps)

[Introducing Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).