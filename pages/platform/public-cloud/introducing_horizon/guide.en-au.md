---
title: Introducing Horizon
excerpt: Discover the main sections of the Horizon interface
updated: 2022-03-16
---

**Last updated 16th March 2022**

## Objective

The Horizon interface, natively offered with OpenStack, has been adapted by OVHcloud to offer additional features than those available in the OVHcloud Control Panel.

**Discover the main sections of the Horizon interface.**

## Requirements

- A [Public Cloud project](/pages/platform/public-cloud/create_a_public_cloud_project) in your OVHcloud account
- An [OpenStack user](/pages/platform/public-cloud/create_and_delete_a_user) created in your project

## Instructions

### Logging in to OpenStack Horizon

Open the [Horizon login page](https://horizon.cloud.ovh.net/auth/login/) and enter the [OpenStack user credentials](/pages/platform/public-cloud/create_and_delete_a_user) previously created, then click on `Connect`{.action}.

You can also click on `Horizon`{.action} in the left-hand menu under "Management Interfaces" after opening your `Public Cloud`{.action} project in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au).

### Data centre region selection

Unlike the OVHcloud Control Panel, Horizon separates your services according to their region. You can choose the region from the menu in the top left-hand corner:

![public-cloud](images/region2021.png){.thumbnail}

### Left side menu

This menu allows you to quickly navigate through the project and its various features.

![public-cloud](images/leftmenu2021.png){.thumbnail}

#### Compute

##### **Overview**

- **Quota Summary**

Horizon provides a summary of quotas, which allows you to see the used and available resources for your projects:

![public-cloud](images/quotas2021.png){.thumbnail}

- **Usage Summary**

Next is a summary of the use of your project instances. The search period can be customised to restrict this summary to a desired period.

![public-cloud](images/usagesummary2021.png){.thumbnail}

- **Usage**

A summary of your usage is also available. This is a summary of the various services associated with the project, such as the list of instances.

![public-cloud](images/usage2021.png){.thumbnail}

The summary is downloadable in CSV format, which allows you to extract the information so that you can analyse it via other tools. Simply click on `Download CSV Summary`{.action}.

![public-cloud](images/csv2021.png){.thumbnail}

- **Instances**

Use this page to list and manage instances. Here, for example, you can create new instances, pause them, access the instance console, and much more.

- **Images**

Use this menu to list and manage images, i.e. templates and snapshots associated with your project.

- **Key Pairs**

Here you can list and create your SSH keys for connecting to your instances.

##### **Volumes**

Use this menu to list and manage volumes, as well as volume backups and snapshots.

![volume](images/volumes2021.png){.thumbnail}

##### **Network**

List and manage your networks and security groups here. 

![network](images/network2021.png){.thumbnail}

##### **Orchestration**

This menu allows you to orchestrate multiple composite cloud applications.<br>
For more information, please refer to the [OpenStack documentation](https://docs.openstack.org/horizon/pike/user/stacks.html){.external}.

![orchestration](images/orchestration2021.png){.thumbnail}

#### Identity

Use this menu to list information about your projects.

### User menu

In the top right-hand corner of the Horizon interface, a user menu allows you to: 

- Change interface display settings.
- Download an OpenRC file containing your user IDs.
- Log out of the Horizon interface.

![public-cloud](images/username2021.png){.thumbnail}

## Go further

[Familiarise yourself with the Public Cloud interface](/pages/platform/public-cloud/03-public-cloud-interface-walk-me)
 
Join our community of users on <https://community.ovh.com/en/>.