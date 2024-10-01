---
title: 'Authorising IP addresses for vCenter access'
excerpt: 'Find out how to manage IP address access restrictions for vCenter'
updated: 2020-11-18
---

## Objective

Access to your Managed Bare Metal can be restricted by allowing only certain IP addresses or ranges to connect to it.

**This guide explains how to authorise IP addresses for vCenter access in the OVHcloud Control Panel.**

## Requirements

- a [Managed Bare Metal infrastructure](https://www.ovhcloud.com/en-ca/managed-bare-metal/)
- access to the [OVHcloud Control Panel](/links/manager)

## Instructions

If you have set the [vCenter access policy](/pages/bare_metal_cloud/managed_bare_metal/vcenter-modify-access-policy) to "Restricted", you need to add the IP addresses that will be allowed to connect to the service.

In your OVHcloud Control Panel, open the "Bare Metal Cloud" section, then select your service under `Managed Bare Metal`{.action} in the left-hand navigation bar.

From the main page of the service, switch to the `Security`{.action} tab, then click on `Add a new IP address range`{.action}.

![vCenter](images/restrictIP.png){.thumbnail}

In the new Window, enter an IP address (range) that should be allowed access. You can also add a description to make the organisation of the whitelist easier.

![vCenter](images/restrictIP2.JPG){.thumbnail}

Click on `Next`{.action} when you have filled in the fields, then click on `Confirm`{.action} to apply your changes. Connections from this IP address (range) will now be possible.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
