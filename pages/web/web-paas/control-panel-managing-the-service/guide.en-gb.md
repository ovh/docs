---
title: Managing Web PaaS from the OVHcloud Control Panel
excerpt: Find out how to manage your Web PaaS solution in the OVHcloud Control Panel
slug: web-paas-managing-service
section: Getting started
order: 2
updated: 2021-05-28
---

**Last updated 28th May 2021**

## Objective

The subscription details and attributes of your Web PaaS projects can be managed in the OVHcloud Control Panel.

**This guide explains how to configure Web PaaS powered by Platform.sh in the OVHcloud Control Panel.**

## Requirements

- A [Web PaaS solution](https://www.ovhcloud.com/en-gb/web-paas/) in your OVHcloud account (find the details in [this guide](../web-paas-manager-setup/))
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)

## Instructions

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) and switch to `Web Cloud`{.action} in the top navigation bar.

Select `Web PaaS`{.action} in the services bar on the left-hand side.

### Projects overview

On the Web PaaS home page, a table will list your projects and their attributes.

![All projects](images/configure_manager01.png){.thumbnail}

Each project equals a service subscription. The button `New project`{.action} starts the process of ordering a [new project](../web-paas-manager-setup/).

You can carry out some actions by clicking on the `...`{.action} button in each row:

- **Access Web PaaS**: opens the Management Console of your project.
- **View dashboard**: opens the [dashboard of your project](#dashboard) inside the OVHcloud Control Panel.
- **Manage my user licences**: A project can be upgraded to [allow more users](#managingusers) on it.
- **Change solution**: starts the process of [changing your subscription](#changeplan).
- **Delete project**: will cancel the subscription concerned after clicking the link in the confirmation email.

### Managing a project <a name="dashboard"></a>

After selecting your project, the `General information`{.action} tab displays the technical details of your plan as well as some subscription information.

![General information](images/configure_manager02.png){.thumbnail}

You can open the Management Console of your project by clicking on the link `Access my Web PaaS project`{.action}.

#### **Switching to a different plan** <a name="changeplan"></a>

Click on `Change solution`{.action} in order to choose a [different subscription](../web-paas-manager-setup/). The only limitation is that you cannot downgrade to the `Start` plan.

![Change plan](images/configure_manager03.png){.thumbnail}

After choosing the plan and the number of vCPUs, click on `Next`{.action} to proceed. The second step will display the calculation of the pro rata billing and the future price for your plan.

Click on `Modify the plan`{.action} to switch to the new subscription.

#### **Adding or removing vCPUs**

Clicking on the link `Modify vCPUs`{.action} allows you to modify the number of assigned vCPUs of the production environment. Your test environments will always have half the number of production vCPUs at their disposal. This will change the subscription accordingly.

![Change CPU](images/configure_manager04.png){.thumbnail}

Take note of the billing information and click on `Modify the plan`{.action} to confirm the change.

#### **Adding storage**

A click on `Increase my storage`{.action} opens a new window in which you can incrementally add more storage space as per the requirements of your project. Bear in mind that storage cannot be decreased again.

![Change storage](images/configure_manager05.png){.thumbnail}

Take note of the billing information and click on `Confirm`{.action} to proceed.

#### **Configuring test environments**

A click on `Add test environments`{.action} opens a new window in which you can add environments to your project.

Take note of the pricing information and click on `Modify the plan`{.action} to confirm the action.

#### **Managing users** <a name="managingusers"></a>

- **User licences**

Clicking on the link `Manage my user licences`{.action} allows you to modify the number of additional user licences for the project. The total number of possible licences is determined by the current subscription.    

![User licences](images/configure_manager06.png){.thumbnail}

Take note of the pricing information and click on `Confirm`{.action} to proceed.

- **Users**

Switch to the tab `Users`{.action}. The table displays the users attached to this project. If licences are available, you can invite a new user by clicking on `Invite a user`{.action}. 

![Change users](images/configure_manager07.png){.thumbnail}

Enter a customer ID (NIC handle) and click on `Add user`{.action}. An invitation will be sent to the email address attached to this OVHcloud account.

The number of users you can add is limited by the available user licences.


## Go further

Join our community of users on <https://community.ovh.com/en/>.