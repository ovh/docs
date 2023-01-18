---
title: 'Managing your Public Cloud Instances in Horizon'
slug: managing-public-cloud-instance
excerpt: 'Find out how to manage your Public Cloud projects via the Horizon interface'
section: Horizon
order: 04
---

**Last updated 25th January 2022**

## Objective

Beside the OVHcloud Control Panel, you can also manage your Public Cloud projects via the [Horizon interface](https://horizon.cloud.ovh.net/auth/login/). In this interface, you will find all of your infrastructure (instances, backups, disks, SSH keys, etc.) and storage projects there (including the list of your containers).

**This guide details how to manage your Public Cloud instances via the Horizon interface.**

## Requirements

- You need to have created a Public Cloud instance in your [OVHcloud Control Panel](../public-cloud-first-steps/) or through the [Horizon interface](https://docs.ovh.com/au/en/public-cloud/create-an-instance-in-horizon/)
- [An SSH key](https://docs.ovh.com/au/en/public-cloud/public-cloud-first-steps/#step-1-creating-ssh-keys)


## Access the management interface for the instance

First, log into the [Horizon interface](https://horizon.cloud.ovh.net/auth/login/).

Unlike the OVHcloud Control Panel, Horizon separates your services according to their region. You can choose the region from the menu in the top left-hand corner:

![public-cloud](images/region2021.png){.thumbnail}

Click the `Compute`{.action} menu on the left-hand side, then select `Instances`{.action}. On that page you will see a summary of all your instances. There will be several pieces of information displayed here:

- The model of your instance (Flavor)
- Its name, power state, and time since created
- Your instance’s IPv4 and IPV6 address
- Its associated private network and private IPv4 address
- Its status
- The image used to install the instance (if applicable)

![public-cloud](images/options2022.png){.thumbnail}

**Launch Instance** 

This option allows you to create an instance. Please refer to [this guide](https://docs.ovh.com/au/en/public-cloud/create-an-instance-in-horizon/) for more information.

**Delete Instances**

This option allows you to delete several instances at once, make sure to tick the box to the left of the instance name.

**More Actions**

Use this menu to perform the following actions on one or more instances. First, ensure that you tick the box to the left of the instance name:

- Start Instances: This option allows you to reboot one or more instances in « shutoff or off » status.
- Shut Off Instances: This option allows you to suspend one or more instances.
- Soft Reboot Instances: This option allows you to perform a software reboot on one or more instances.


**Create snapshot**: This option allows you to create a snapshot of your instance. Consult [this guide](https://docs.ovh.com/au/en/public-cloud/manage-snapshots-of-instances-in-horizon/) for more information.


### Modify an instance

In the management interface for the Instance, select the option you want from the dropdown list.

![public-cloud](images/list2022.png){.thumbnail}

- Attach Interface: This option allows you to add one or more private interfaces to your instance via the VLAN. For more information, refer to [this section](https://docs.ovh.com/au/en/public-cloud/public-cloud-vrack/#adding-a-private-interface) of the corresponding guide.
- Detach Interface: This option allows you to delete an interface linked to an instance. For more information, refer to [this section](https://docs.ovh.com/au/en/public-cloud/public-cloud-vrack/#removing-a-private-interface) of the corresponding guide.
- Edit Instance: This option allows you to change the instance name and [security groups](https://docs.ovh.com/au/en/public-cloud/configure-security-group-horizon/).


> [!warning]
> The options in red indicate the possibility of data loss during the process, always make sure you have a backup of your data before making any changes to your instance.
>

### Resize an instance

With the Public Cloud, you can increase the resources your instance has with just a few clicks.

> [!warning]
>
> Only upscaling is possible for classic models.
> In addition, this manipulation causes the instance to be shut down for the time of the operation. 
> 

> [!success]
>
> Flex instances allow resizing to higher or lower models due to a locked single disk size.
> 

Log into the [Horizon interface](https://horizon.cloud.ovh.net/auth/login/), and make sure you are in the correct region. You can verify this on the top left corner.</br>
Next, click on the `Compute`{.action} menu on the left side and select `Instances`{.action}. Select `Resize Instance`{.action} in the drop list for the corresponding instance.

![Resize instance](images/resizeinstance2022.png){.thumbnail}

* Template Selection Tab (Flavor Choice): this section shows the current template (old flavor) and allows you to select a new template (new flavor) for the instance resource.

![public-cloud](images/flavorchoice.png){.thumbnail}

* Flavor Details. In this section, you will see the resources associated with the new template you have chosen. 

* Project Limits. View here the occupied resources compared to the total resources allocated to the project.

> [!warning]
> Please note that you cannot switch models when resizing an instance. A resizing can only be done from a Linux model to another Linux model or from a Windows model to another Windows model.
>

* Advanced Options. This section allows you to manage the **Disk Partition** and **Server Group**.

![public-cloud](images/resize_advanced.png){.thumbnail}

Once the configuration is complete, click on `Resize`{.action}.

**Resizing a disk in Windows**

When performing a resize for a Windows Instance, please note that the partition size is not automatically updated, so you will have to extend it using the **disk manager**:

Right-click on the `Start`{.action} menu and launch the disk manager by clicking on `Disk Management`{.action}:

![public-cloud](images/2980.png){.thumbnail}

Right-click on the main partition, then click on `Extend Volume`{.action}.

![public-cloud](images/2981a.png){.thumbnail}

In the `Extend Volume Wizard` menu, click on `Next`{.action} to proceed. In the next tab, choose the disk resources to extend and click on `Next`{.action}. 

![public-cloud](images/2978a.png){.thumbnail}

Once done, click on `Finish`{.action} to confirm your choice.

![public-cloud](images/wizard2021.png){.thumbnail}

The new disk size will then be displayed in the disk manager.

![public-cloud](images/2979.png){.thumbnail}

### Rebuild an instance

This option allows you to reconfigure your instance on a new basis, or simply change the operating system.

> [!alert]   
> This operation will delete the instance’s data.
> 

- Select `Rebuild Instance`{.action} from the drop-down list for the instance.


![public-cloud](images/rebuildinstance.png){.thumbnail}

- Select the image for reconstruction.
- Select the type of partitioning ("Automatic" or "Manual"). This is optional.
- Finally, click on `Rebuild Instance`{.action}, this operation may take a few minutes.


### Shelve or pause an instance

To find out how to shelve or pause an instance, please refer to [this guide](https://docs.ovh.com/au/en/public-cloud/shelve-or-pause-an-instance/).

### Access the instance console <a name="console"></a>

If you lose access to your instance, either because of a bad configuration, or because the SSH service is down, you can always reconfigure your instance using the VNC console.

> [!primary]
>
> You can access your instance directly through the VNC console. Only you will have to set up a password for the root user beforehand.
> Consult [this guide](https://docs.ovh.com/au/en/public-cloud/become_the_root_user_and_select_a_password/) for more information.
> The VNC console can also be used as a first approach during a malfunction, to establish a diagnostic using the analysis of your instance's startup phase.
> 

From the drop-down list for the instance, select `Console`{.action}.

![public-cloud](images/accessconsole.png){.thumbnail}

- The instance console will appear.

> [!success]
>
> If the console no longer responds to the keyboard input, click on the status bar.
> To exit full-screen mode, click the browser's back button.
> 

**Instance console**

![public-cloud](images/console.png){.thumbnail}

### Reboot an instance

There are two methods for rebooting an instance:

- Soft Reboot Instance (Software)
- Hard Reboot Instance (Hardware)

From the drop-down list for the instance, select either `Soft Reboot Instance`{.action} or `Hard Reboot Instance`{.action}.

![public-cloud](images/rebootinstance.png){.thumbnail}

Then confirm your request in the window that pops up.

### Delete an instance

If you no longer need one of your instances, you can delete it at any time.

> [!alert]
>
> The data stored on the instance will be permanently deleted.
> You can always create a backup of this instance if you want to keep the data and restart an identical instance later.
> 

From the drop-down list for the instance, select `Delete Instance`{.action}. 

![public-cloud](images/deleteinstance.png){.thumbnail}

Then click `Confirm`{.action} to start the process.

> [!success]
>
> Once deleted, you will no longer be charged for your instance, and you will not be able to recover it.
> 

## Go further

Join our community of users on <https://community.ovh.com/en/>.
