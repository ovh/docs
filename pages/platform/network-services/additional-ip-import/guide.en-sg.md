---
title: Importing an Additional IP
slug: import-additional-ip
excerpt: "Find out how to import an Additional IP address into your Public Cloud project"
section: Additional IP
order: 03
---

**Last updated 4th January 2023**

> [!primary]
>
> Since October 6th, 2022 our service "Failover IP" is named [Additional IP](https://www.ovhcloud.com/en-sg/network/additional-ip/). This renaming has no effect on its technical features.
>

## Objective

You might need to configure an Additional IP address on your instances because:

- You have multiple websites on your instance.
- You host international projects.
- You want to migrate from a Dedicated Server to a Public Cloud instance.

Instead of buying additional ones, you can import an Additional IP address that is linked to a different OVHcloud service.

**This guide explains how to import Additional IP addresses into your OVHcloud Public Cloud project.**

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/en-sg/public-cloud/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg){.external}
- An [Additional IP address](https://www.ovhcloud.com/en-sg/bare-metal/ip/){.external}

## Instructions

In the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg), select your project from the `Public Cloud`{.action} section. 

In the left-hand menu, open `Public IPs`{.action} under `Network`.

Open the `Additional IP`{.action} tab and click on the `Actions`{.action} button. Select `Import an Additional IP`{.action} to display all the IP addresses that can be imported into your Public Cloud project.

![IP Section](images/import22_01.png){.thumbnail}

If you do not currently have an Additional IP on your Public Cloud project, the option to import one will be displayed on the homepage.

Click on `...`{.action} next to the IP address you would like to import and click `Import this Additional IP`{.action}.

![Import Additional IP](images/import22_02.png){.thumbnail}

Confirm by clicking on `Import`{.action}.

![Import confirm](images/import22_03.png){.thumbnail}

Allow a few minutes for the import process to complete. Open the `Additional IP`{.action} tab to find the imported Additional IP address. Refresh the page if necessary.

Click on `...`{.action} on the right and select `Update attached instance`{.action}.

![Import Additional IP](images/import22_04.png){.thumbnail}

A popup window will appear to choose the instance to which your IP address should be attached.

![Import Additional IP](images/import22_05.png){.thumbnail}

Click on `Attach`{.action} to confirm. The page will display a modification message.

> [!warning]
>
> An Additional IP cannot be moved between different zones. For example, an IP located in the SBG data centre can be moved to GRA or RBX, but cannot be moved to BHS.
>

The IP address is now associated with your instance.
The next step will be the IP configuration in your OS; please refer to our [guide](https://docs.ovh.com/sg/en/publiccloud/network-services/configure-additional-ip/).

## Go further

[Configuring an Additional IP](https://docs.ovh.com/sg/en/publiccloud/network-services/configure-additional-ip/)

Join our community of users on <https://community.ovh.com/en/>.
