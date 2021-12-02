---
title: Avoid IP spoofing with the SpoofGuard service
slug: spoofguard
excerpt: Set up policies to detect IP spoofing
space_key: ND
space_name: NSX
section: NSX
order: 10
---

**Last Updated on 12/02/2021**

## Objective

SpoofGuard protects against IP spoofing by maintaining a reference table of VM names and IP addresses. SpoofGuard maintains this reference table by using the IP addresses that the NSX Manager retrieves from VMware Tools when a VM initially starts.

**This guide explains how to setup Spoofguard policies**

## Requirements

- Be an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/) to receive login credentials
- Have a user account with access to vSphere as well as the specific rights for NSX (created in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB))

## Instructions


In the vSphere interface menu, go to the `Networking and Security`{.action} dashboard.

![Menu](images/en01dash.png){.thumbnail}


On the left side, navigate to the `Spoofguard`{.action} section.<br>
Click on `+ Add`{.action} to create a new policy

![SPOOF](images/en02spoof.png){.thumbnail}







## Go further

Join our community of users on <https://community.ovh.com/en/>.
