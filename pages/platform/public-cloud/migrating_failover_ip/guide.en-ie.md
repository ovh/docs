---
title: 'Migrating a failover IP'
excerpt: 'Find out how to migrate a failover IP address to another instance'
slug: migrating_a_failover_ip
legacy_guide_number: g1890
section: Networking
---

**Last updated 9th April 2020**

## Objective

Being able to migrate IP addresses generally limits or removes the possibility that your service becomes unavailable. For example, you can effectively update a whole website to a new version or you can keep a replicated server active while running maintenance or installing updates on your production server.

**This guide explains how to migrate a failover IP from one OVHcloud Public Cloud instance to another.**

## Prerequisites

- at least two [Public Cloud instances](https://www.ovhcloud.com/en-ie/public-cloud/) in your OVHcloud account
- a failover IP address
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager)

## Instructions

First, log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager), go to the `Public Cloud`{.action} section and select the Public Cloud service concerned. Then, select Failover IP in the “Network” section.
In our example, a failover IP is routed to "Instance_A" and we want to redirect it towards "Instance_B".

![migrating failover IP](images/failover.png){.thumbnail}

Click on `...`{.action} next to the failover IP and select `Modify associated instance`{.action}.

![migrating failover IP](images/modify.png){.thumbnail}

Choose the destination server from the list by clicking the checkbox.

![migrating failover IP](images/modify1.png){.thumbnail}

Confirm with `Attach`{.action}.

After a few seconds the Control Panel will be updated and a confirmation message will be displayed if the migration was done sucessfully.

![migrating failover IP](images/modify2.png){.thumbnail}

> [!primary]
>
The failover IP can be configured on the destination server before or after carrying out the migration. If it was preconfigured, it will begin to respond as soon as the routing operation is completed.
>

## Go further

[Configure a failover IP](https://docs.ovh.com/ie/en/public-cloud/configure_a_failover_ip)

[Importing a failover IP](https://docs.ovh.com/ie/en/public-cloud/import_a_failover_ip)

Join our community of users on <https://community.ovh.com/en/>.