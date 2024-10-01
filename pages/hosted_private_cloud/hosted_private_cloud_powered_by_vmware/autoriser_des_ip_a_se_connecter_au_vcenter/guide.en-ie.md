---
title: 'Authorising IP addresses for vCenter access'
excerpt: 'Find out how to manage IP address access restrictions for vCenter'
updated: 2023-01-25
---

## Objective

Access to your vCenter is restricted only to authorized IP addresses.

**This guide explains how to authorise IP addresses for vCenter access in the OVHcloud Control Panel.**

## Requirements

- a [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-ie/enterprise/products/hosted-private-cloud/)
- access to the [OVHcloud Control Panel](/links/manager)

## Instructions

Log into your [OVHcloud Control Panel](/links/manager). Switch to the `Hosted Private Cloud`{.action} tab and click again on `Hosted Private Cloud`{.action} to the left. 

Select your infrastructure and go to the `Security`{.action} tab.

Click `Add a new IP address range`{.action}.

![vCenter](images/restrictIP.JPG){.thumbnail}

In the new Window, enter an IP address (range) that should be allowed access. You can also add a description to make the organisation of the whitelist easier.

![vCenter](images/restrictIP2.JPG){.thumbnail}

Click on `Next`{.action} when you have filled in the fields, then click on `Confirm`{.action} to apply your changes. Connections from this IP address (range) will now be possible.

> [!primary]
>
> Please note that for security reasons, you will only be able to allow a maximum of 2048 IP addresses to connect to your vCenter.
>

## Go further

Join our community of users on <https://community.ovh.com/en/>.
