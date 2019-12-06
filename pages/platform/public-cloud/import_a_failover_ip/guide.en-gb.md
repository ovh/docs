---
title: 'Import a failover IP'
slug: import_a_failover_ip
excerpt: 'This guide explains how to import a failover IP into your OVH Public Cloud project.'
legacy_guide_number: g1883
section: Knowledge Base
---

**Last updated 6th December 2018**

## Objective

If you need to configure a failover IP address on your instances because:

- you have multiple websites on your instance 
- you host international projects
- you want to migrate from a Dedicated Server to a Public Cloud instance

... you can import a failover IP address that is linked to a different OVH service.

**This guide explains how to import this failover IP into your OVH Public Cloud project.**

## Requirements

* access to the [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}
* a [failover IP address](https://www.ovh.co.uk/dedicated_servers/ip_failover.xml){.external} assigned to an [OVH Dedicated Server](https://www.ovh.co.uk/dedicated_servers/){.external}.

## Instructions

Firstly, log in to the [OVH Control Ppanel](https://www.ovh.com/auth/?action=gotomanager){.external}, click the `Public Cloud`{.action} menu and then click in your `Project`{.action}.

Then, select `Failover IP`{.action} under Network section.

![IP Section](images/import.png){.thumbnail}

Once you have done, all the IP addresses that can be imported to your Public Cloud project will be displayed:

![IP Section](images/import1.png){.thumbnail}

Click in the 3 dots on the right of the IP you want to import and click `Import this failover IP`{.action}.

![Import Failover IP](images/import2.png){.thumbnail}

Now, click in `Import`{.action}:

![Import Failover IP](images/importconfirm.png){.thumbnail}

Once you have done it the page will reloaded and this information will appear, confirming IP was migrated successfully.

When the failover IP has been successfully imported, click in the 3 dots on the right and click in `Modify the associated instance`{.action}.

![Import Failover IP](images/modifyinstance.png){.thumbnail}

A pop-up will appear so you can choose the instance where you want to move your IP to:

![Import Failover IP](images/modifyinstance1.png){.thumbnail}

Click in `Attach`{.action} and once you have done it page will be reloaded with the confirmation that IP was associated to the instance:

![Import Failover IP](images/modifycompleted.png){.thumbnail}


Your failover IP will now be attached to your instance.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
