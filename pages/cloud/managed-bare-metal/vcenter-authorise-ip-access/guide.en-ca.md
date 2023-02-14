---
title: 'Authorising IP addresses for vCenter access'
slug: authorise-ip-addresses-vcenter
routes:
    canonical: 'https://docs.ovh.com/ca/en/private-cloud/authorise-ip-addresses-vcenter/'
excerpt: 'Find out how to manage IP address access restrictions for vCenter'
section: 'OVHcloud services and options'
updated: 2020-11-18
---

**Last updated 18th November 2020**

## Objective

Access to your Managed Bare Metal can be restricted by allowing only certain IP addresses or ranges to connect to it.

**This guide explains how to authorise IP addresses for vCenter access in the OVHcloud Control Panel.**

## Requirements

- a [Managed Bare Metal infrastructure](https://www.ovhcloud.com/en-ca/managed-bare-metal/)
- access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca)

## Instructions

If you have set the [vCenter access policy](../modify-vcenter-access-policy) to "Restricted", you need to add the IP addresses that will be allowed to connect to the service.

In your OVHcloud Control Panel, open the "Bare Metal Cloud" section, then select your service under `Managed Bare Metal`{.action} in the left-hand navigation bar.

From the main page of the service, switch to the `Security`{.action} tab, then click on `Add a new IP address range`{.action}.

![vCenter](images/restrictIP.png){.thumbnail}

In the new Window, enter an IP address (range) that should be allowed access. You can also add a description to make the organisation of the whitelist easier.

![vCenter](images/restrictIP2.JPG){.thumbnail}

Click on `Next`{.action} when you have filled in the fields, then click on `Confirm`{.action} to apply your changes. Connections from this IP address (range) will now be possible.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
