---
title: 'Choosing the disk group to install an operating system'
slug: install-hybrid
excerpt: 'Learn here how to choose a disk group to install your operating system'
section: 'Advanced use'
---

**Last updated 2018/11/23**

## Objective

OVHcloud offers some [Dedicated Servers](https://www.ovh.com/world/dedicated-servers/){.external} that have one SATA disk group, and one SSD disk group. We call these "Hybrid Servers".

**This guide will show you how to specify the disk group on which to install the server's operating system.**

## Requirements

* an [OVHcloud Hybrid Server](https://www.ovh.com/world/dedicated-servers/){.external}
* access to the [OVHcloud API](https://ca.api.ovh.com/console/){.external}
* access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager){.external}

> [!warning]
>
> This procedure only works for Linux systems (except ESXi, and XenServer), and only for SoftRAID, NoRAID, or HardRAID (default only) configuration.
> 

## Instructions

### Step 1: Log in to the OVHcloud API.

Go to <https://ca.api.ovh.com/console/> and click the `Login`{.action} in the top-right corner of the page. Then, on the following page, log in with the credentials of your OVHcloud account.

### Step 2: Retrieve the server name.

Next, go to the following API call:

> [!api]
>
> @api {GET} /dedicated/server
> 

Next, retrieve the name of your hybrid server by clicking `Execute`{.action}:

![Available services](images/services-01.png){.thumbnail}

### Step 3: Retrieve the diskGroupId.

The diskGroupId is what will allow us to define the disk group on which we want the operating system to be installed.

Go to the following API call:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/specifications/hardware
> 

Enter the name of your server in the **serviceName** field, and click the `Execute`{.action} button. You will then see your server's hardware information.
Note down the diskGroupId, which you will find in diskGroups.

By default, the operating system is installed on the diskGroupId 1.

![Hybrid](images/hybrid-01.png){.thumbnail}

### Step 4: Start the installation.

Once you have the diskGroupId, you can proceed to the final step of installing your operating system.

To do this, go to the following API call to retrieve a list of compatible operating systems:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/install/compatibleTemplates
> 

![Compatible templates](images/templates-01.png){.thumbnail}

Make a note of the template name for your chosen operating system, then go to the following API call:

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/install/start
> 

Enter your server's reference into the **serviceName** field, enter the diskGroupId (2) into the **diskGroupId** field, and enter the template name into the **templateName** field (all other fields are optional).

When you have finished specifying your options, click the `Execute`{.action} button:

![Installation](images/install-01.png){.thumbnail}

Your operating system will now be installed. You can check the progress of the installation by refreshing your server's page in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager){.external}, or by going to the following API call, entering your server's references into the **serviceName** field, and clicking the `Execute`{.action} button:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/install/status
> 

## Go further

Join our community of users on <https://community.ovh.com/en/>.
