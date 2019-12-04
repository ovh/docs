---
title: 'Getting started with a Public Cloud Instance'
slug: get-started-with-a-public-cloud-instance
excerpt: 'Find out how to get started with a Public Cloud Instance'
section: Quick start
---

**Last updated 4th December 2019**

## Objective

You can manage OVH Public Cloud easily via the [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}. You will find all of your infrastructure (Instances, backups, disks, SSH keys, etc.) and storage projects there (including the list of your containers).

**Find out how to get started with a Public Cloud Instance.**

### Requirements

- an [OVH Public Cloud Instance](../create_an_instance_in_your_ovh_customer_account/)
- [an SSH key](../create-ssh-keys/)

### Instructions

### Access the management interface for the Instance.

First, log in to the [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external} and go to the ‘Public Cloud’ section and select the Public Cloud service concerned. Then, click in the `Compute`{.action} tab on your left.

Below the tabs, you will see a summary for your Instance. There will be several pieces of information displayed here:

- the model your Instance
- its name and region
- any potential hard disks
- your Instance’s IP addressed
- its state

![public-cloud](images/compute.png){.thumbnail}

### Edit the configuration of an Instance.

In the management interface for the Instance, click on the down-arrow icon, and select `Edit`{.action}.

![public-cloud](images/edit.png){.thumbnail}

In the window that opens, you can:

- rename the Instance
- change the Instance model 
- reinstall the Instance on another operating system (**please note that if you choose to do this, the data currently stored on the instance will be deleted**)
- switch from hourly billing to a fixed monthly rate (bills will then be sent on a pro rata basis, based on the day of the month that you switch)

![public-cloud](images/edit1.png){.thumbnail}
![public-cloud](images/edit2.png){.thumbnail}
![public-cloud](images/edit3.png){.thumbnail}

### Create a backup of an Instance.

You can create a backup of an Instance from its admin page.  To do this, click on the 3 dots on the right of it and select `Create a backup`{.action}. Then you will see this page with all the necessary information: ![public-cloud](images/backup1.png){.thumbnail} .

Then the following information is being displayed: ![public-cloud](images/backup2.png){.thumbnail}

Once backup has been done you can see it in the `Instance Backup`{.action} section: ![public-cloud](images/backup3.png){.thumbnail} .

You can refer to our guide to [Backing up an Instance](../back-up-instance/) if you need help with this. 

![public-cloud](images/backup.png){.thumbnail}

### Create an automatic backup of an Instance.

You can schedule an automatic backup of an Instance from its admin page. To do this, click on the 3 dots on the right of it and select `Create an automatic backup`{.action}: ![public-cloud](images/backupauto.png){.thumbnail}

Then the following page will be displayed: ![public-cloud](images/backupauto1.png){.thumbnail} .

Once you have validate it you will be redirected to the following page: ![public-cloud](images/backupauto2.png){.thumbnail} .

At any time you can go to that page to delete the current automatic backup process: ![public-cloud](images/backupautodelete.png){.thumbnail}

You can refer to our guide to [Backing up an Instance](../back-up-instance/) if you need help with this. 

![public-cloud](images/backup.png){.thumbnail}

### Retrieve your login information.

In the management interface for the Instance, click on `Instance details`, and check the information bellow `Login information`{.action}. Here, you can retrieve the SSH commands you need to use to connect to your Instance.

![public-cloud](images/instancedetails1.png){.thumbnail}
![public-cloud](images/instancedetails.png){.thumbnail}

### Access the VNC console.

Using the VNC console, you can access your Instance directly. Please note, however, that you will need to have configured a password for the root user.

To access this console, click on the down-arrow icon, and select `VNC console`{.action}.

![public-cloud](images/3484-3.png){.thumbnail}

The console will then open in a new window. 

![public-cloud](images/3484-4.png){.thumbnail}

### Reboot an Instance.

There are two different ways of rebooting an Instance:

- hot reboot (software)
- cold reboot (hardware)

In the management interface for the Instance, click on the down-arrow icon, and select either `Hot reboot (software)`{.action} or `Cold reboot (hardware)`{.action}.

Then confirm your request in the window that opens.

![public-cloud](images/3484-5.png){.thumbnail}

### Reinstall an Instance.

You can reinstall an Instance and keep the same operating system. **Please note that if you choose to reinstall, all of the data currently stored on your Instance will be erased.**

In the management interface for the Instance, click on the down-arrow icon, and select `Reinstall`{.action}. Then click confirm to start the process. 

![public-cloud](images/3484-6.png){.thumbnail}

### Delete an Instance.

You can also delete an Instance. **This will permanently delete the Instance, as well as all of the data stored on it.**

In the management interface for the Instance, click on the down-arrow icon, and select `Delete`{.action}. Then click confirm to start the process. 

![public-cloud](images/3484-7.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.
