---
title: Accessing the NSX interface
slug: accessing-NSX-interface
excerpt: Find out how to use the NSX interface
section: NSX
order: 1
---

**Last updated 29th June 2020**

## Objective

NSX is a Software Defined Network (SDN) solution developed by VMware that is activated from the vCenter and managed directly from the vSphere interface. With NSX, you can configure rules to access your networks, create your security policy, and quickly deploy the various network services needed to build your infrastructure.

**This guide provides an introduction to the NSX interface.**

## Requirements

- a [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/)
- a user account with access to vSphere as well as the specific rights for NSX (created in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager))

## Instructions

VMWare NSX is only available from [the vSphere web client](../login-vsphere-interface/).

From the vSphere web client homepage, click on `Networking & Security`{.action} in the left-hand menu.

![Networking and Security](images/nsx01.png){.thumbnail}

You will now be able to access the NSX homepage with all the related menus.

> [!primary]
>
> To access the NSX API, you have to use https://nsx.pcc-x-x-x-x.ovh.com/api
>
> For example, to retrieve your firewall configuration:
>
> ```
> curl -u "admin:xxxx" -XGET "https://nsx.pcc-x-x-x-x.ovh.com/api/4.0/firewall/globalroot-0/defaultconfig"
> ```
>
> For security reasons, /api/1.0/ is not supported.
>

## Go further

Join our community of users on <https://community.ovh.com/en/>.
