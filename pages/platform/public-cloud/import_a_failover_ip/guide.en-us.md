---
title: 'Importing an Additional IP'
slug: import_a_failover_ip
excerpt: 'Find out how to import an Additional IP address into your Public Cloud Project'
legacy_guide_number: g1883
section: Networking
---

**Last updated 10th March 2022**

## Objective

You might need to configure an Additional IP address on your instances because:

- You have multiple websites on your instance.
- You host international projects.
- You want to migrate from a Dedicated Server to a Public Cloud instance.

Instead oy buying additional ones, you can import an Additional IP address that is linked to a different OVHcloud service.

**This guide explains how to import this Additional IP into your OVHcloud Public Cloud project.**

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/en/public-cloud/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we){.external}
- An [Additional IP address](https://www.ovhcloud.com/en/bare-metal/ip/){.external}

## Instructions

In the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we), select your project from the `Public Cloud`{.action} section. Then select `Additional IP`{.action} in the "Network" section.

Click on `Actions`{.action} and select `Import an IP`{.action} to display all the IP addresses that can be imported into your Public Cloud project.

![IP Section](images/import1.png){.thumbnail}

If you do not currently have an Additional IP on your Public Cloud project, the option to import an IP will be displayed on the homepage.

Click on `...`{.action} next to the IP address you would like to import and click `Import this Additional IP`{.action}.

![Import Additional IP](images/import2.png){.thumbnail}

Confirm by clicking on `Import`{.action}.

![Import confirm](images/importconfirm.png){.thumbnail}

The page will refresh and the information that the IP address was migrated successfully will appear.

When the Additional IP has been successfully imported, click on `...`{.action} on the right and select `Modify the associated instance`{.action}.

![Import Additional IP](images/modifyinstance.png){.thumbnail}

A pop-up will appear to choose the instance to which your IP address should be attached.

![Import Additional IP](images/modifyinstance1.png){.thumbnail}

Click on `Attach`{.action} to confirm. The page will display a modification message.

> [!warning]
>
> An Additional IP cannot be moved between different zones. For example, an IP located in the SBG data center can be moved to GRA or RBX, but cannot be moved to BHS.
>

![Import Additional IP](images/modifycompleted.png){.thumbnail}

The IP address is now associated with your instance.
The next step will be the IP configuration in your OS; please refer to our [guide](../configure_a_failover_ip).

## Go further

Join our community of users on <https://community.ovh.com/en/>.
