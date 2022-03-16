---
title: Delegating projects
slug: delegate-projects
excerpt: Find out how to delegate access rights for a Public Cloud project to other OVHcloud accounts
section: Project management
order: 7
---

**Last updated 25th Febuary 2022**
 
## Objective

Depending on your use case, you may need to grant other users access to your project, without giving them full access to your services. 
To this end, you can delegate read-only or read/write permissions for your projects to other OVHcloud customer accounts.

**This guide explains how to delegate access rights for a Public Cloud project in the OVHcloud Control Panel.**

### Requirements

- A [Public Cloud project](https://www.ovhcloud.com/en-ie/public-cloud/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie)

## Instructions

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) and open your `Public Cloud`{.action} project. Click on `Contacts and Rights`{.action} in the **Project Management** section.

On this page you can see the contacts associated with your project.

![public-cloud-delegate-projects](images/delegatingproject01.png){.thumbnail}

### Configuring project contacts

You can click on the `Edit`{.action} buttons to change the current contacts. This will open the **Contact management** section of your Control Panel. Follow the instructions in our guide [Managing contacts for your services](https://docs.ovh.com/ie/en/customer/managing-contacts/) to complete this process.

### Adding contacts and permissions

Click on the `Add`{.action} button in order to add a user and assign permissions. In the popup window, enter the NIC handle of the user (in the form xx00000-ovh), then select `Read-only` or `Read/Write` from the menu.

![public-cloud-delegate-projects](images/delegatingproject02.png){.thumbnail}

> [!primary]
>
Note that `Read/Write` permissions will allow changes to the project that might affect future billing.
>
 
Click on `Add`{.action} to confirm the access delegation. A confirmation email will be sent to you and the new user who will now be able to open the project in the Public Cloud section of their OVHcloud Control Panel.

Once the page has reloaded, the added OVHcloud customer accounts and their respective permissions are listed in the table.

![public-cloud-delegate-projects](images/delegatingproject03.png){.thumbnail}

To revoke an access, click on the `...`{.action} button and then select `Delete`{.action}.


## Go further

[Getting started with a Public Cloud Instance](https://docs.ovh.com/ie/en/public-cloud/public-cloud-first-steps/)

[Information regarding Public Cloud billing options](https://docs.ovh.com/ie/en/public-cloud/information-on-cloud-billing-options/)

[Access and Security in Horizon](https://docs.ovh.com/ie/en/public-cloud/access_and_security_in_horizon/)

Join our community of users on <https://community.ovh.com/en/>.