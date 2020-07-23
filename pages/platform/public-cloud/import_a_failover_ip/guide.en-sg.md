---
title: 'Import a failover IP'
slug: import_a_failover_ip
excerpt: 'This guide explains how to import a failover IP into your OVHcloud Public Cloud project.'
legacy_guide_number: g1883
section: Networking
---

**Last updated 2018/12/18**

## Objective

If you need to configure a failover IP address on your instances because:

- you have multiple websites on your instance 
- you host international projects
- you want to migrate from a Dedicated Server to a Public Cloud instance

... you can import a failover IP address that is linked to a different OVHcloud service.

**This guide explains how to import this failover IP into your OVHcloud Public Cloud project.**

## Requirements

* access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager){.external}
* a [failover IP address]({ovh_www}/dedicated-servers/ip_failover.xml){.external} assigned to an [OVHcloud Dedicated Server]({ovh_www}/ca/en/dedicated-servers/){.external}.

## Instructions

Firstly, log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager){.external} and click the `Publlic Cloud{.action} menu. Then click the Right Arrow side-menu to expand your list of projects.

When you've found your project in the list, click it and then select the `Failover IP`{.action} tab.

![IP Section](images/import-failover-ip-01_2020.png){.thumbnail}

Next, Click the `Actions`{.action} button and then click `Import an IP`{.action}.

![Import Failover IP](images/import-failover-ip-02_2020.png){.thumbnail}

Next, select the failover IP you want to import and then click the `···`{.action} button beside it and click `Import this failover IP`{.action}.

![Select Failover IP](images/import-failover-ip-03_2020.png){.thumbnail}

You will now see a confirmation message.

![Failover Imported](images/import-failover-ip-04_2020.png){.thumbnail}

When the failover IP has been successfully imported, click the `···`{.action} button  next to the the failover IP and then click `Modify associated instance`{.action}.

![Attach Failover IP](images/import-failover-ip-05_2020.png){.thumbnail}

Select the instance that you would like to attach the IP to from the drop down menu and then click the `Attach`{.action} button.

![Attach Failover IP](images/import-failover-ip-06_2020.png){.thumbnail}

Your failover IP will now be attached to your instance.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
