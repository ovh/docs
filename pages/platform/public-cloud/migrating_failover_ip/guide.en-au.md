---
title: 'Migrating an Additional IP'
excerpt: 'Find out how to migrate an Additional IP address to another instance'
slug: migrating_a_failover_ip
section: Networking
order: 10
---

**Last updated 6th January 2022**

> [!primary]
>
> Since October 6th, 2022 our service "Failover IP" is named [Additional IP](https://www.ovhcloud.com/en-au/network/additional-ip/). This has no further impact on any of its features or the functioning of your services.
>

## Objective

Being able to migrate IP addresses generally limits or removes the possibility that your service becomes unavailable. For example, you can effectively update a whole website to a new version or you can keep a replicated server active while running maintenance or installing updates on your production server.

**This guide explains how to migrate an Additional IP from one OVHcloud Public Cloud instance to another.**

## Prerequisites

- At least two [Public Cloud instances](https://www.ovhcloud.com/en-au/public-cloud/) in your OVHcloud account
- An Additional IP address
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au)

## Instructions

> [!warning]
>
> An Additional IP cannot be moved from one zone to another. For example, an IP located in the SBG data centre can be moved to GRA or RBX, but cannot be moved to BHS.
>

First, log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au) and open your `Public Cloud`{.action} project. Then, select Additional IP in the **Network** section.

In our example, an Additional IP is routed to "Instance_A" and we want to redirect it towards "Instance_B".

![migrating Additional IP](images/failover2022.png){.thumbnail}

Click on `...`{.action} next to the Additional IP and select `Modify associated instance`{.action}.

![migrating Additional IP](images/modify1.2022.png){.thumbnail}

Choose the destination server from the list by clicking the checkbox.

![migrating Additional IP](images/modify1.png){.thumbnail}

Confirm by clicking on `Attach`{.action}.

After a few seconds the Control Panel will be updated and a confirmation message will be displayed if the migration was done sucessfully.

![migrating Additional IP](images/modify2.2022.png){.thumbnail}

> [!primary]
>
The Additional IP can be configured on the destination server before or after carrying out the migration. If it was preconfigured, it will begin to respond as soon as the routing operation is completed.
>

## Go further

[Configure an Additional IP](../configure_a_failover_ip)

[Importing an Additional IP](../import_a_failover_ip)

Join our community of users on <https://community.ovh.com/en/>.
