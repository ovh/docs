---
title: Delegating projects
excerpt: Find out how to delegate access rights for a Public Cloud project to other OVHcloud accounts
updated: 2022-04-04
---

**Last updated 4th April 2022**
 
## Objective

Depending on your use case, you may need to grant other users access to your project, without giving them full access to your services. 
To this end, you can delegate read-only or read/write permissions for your projects to other OVHcloud customer accounts.

**This guide explains how to delegate access rights for a Public Cloud project in the OVHcloud Control Panel.**

### Requirements

- A [Public Cloud project](https://www.ovhcloud.com/asia/public-cloud/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia)

## Instructions

Log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia) and open your `Public Cloud`{.action} project. Click on `Contacts and Rights`{.action} in the **Project Management** section.

On this page you can see the contacts associated with your project.

![public-cloud-delegate-projects](images/delegatingproject_ca01.png){.thumbnail}

You can click on the `Edit`{.action} buttons to change the current contacts. Follow the instructions in our guide [Changing project contacts](/pages/platform/public-cloud/change_project_contacts) to complete this process.

### Adding contacts and permissions

Click on the `Add`{.action} button in order to add a user and assign permissions. In the popup window, enter the NIC handle of the user (email@example.com), then select `Read-only` or `Read/Write` from the menu.

![public-cloud-delegate-projects](images/delegatingproject_ca02.png){.thumbnail}

> [!primary]
>
Note that `Read/Write` permissions will allow changes to the project that might affect future billing.
>
 
Click on `Add`{.action} to confirm the access delegation. A confirmation email will be sent to you and the new user who will now be able to open the project in the Public Cloud section of their OVHcloud Control Panel.

Once the page has reloaded, the added OVHcloud customer accounts and their respective permissions are listed in the table.

![public-cloud-delegate-projects](images/delegatingproject_ca03.png){.thumbnail}

To revoke an access, click on the `...`{.action} button and then select `Delete`{.action}.


## Go further

[Getting started with a Public Cloud Instance](/pages/platform/public-cloud/public-cloud-first-steps)

[Information regarding Public Cloud billing options](/pages/platform/public-cloud/analyze_billing)

[Access and Security in Horizon](/pages/platform/public-cloud/access_and_security_in_horizon)

Join our community of users on <https://community.ovh.com/en/>.