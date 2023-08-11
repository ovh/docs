---
title: Changing user rights
routes:
    canonical: '/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/change_users_rights'
excerpt: Find out how to manage user permissions for the vSphere client
updated: 2020-11-18
---

**Last updated 18th November 2020**

## Objective

The purpose of this guide is to explain the user rights management regarding the OVHcloud Managed Bare Metal solution.

**Learn how to manage user rights on your infrastructure.**

## Requirements

- a [Managed Bare Metal infrastructure](https://www.ovhcloud.com/en-ca/managed-bare-metal/)
- access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca)

## Instructions

In your OVHcloud Control Panel, open the "Bare Metal Cloud" section, then select your service under `Managed Bare Metal`{.action} in the left-hand navigation bar.

From the main page of the service, click on the `Users`{.action} tab. Click on `...`{.action} in the row of the user concerned to open the context menu.

![See/Change the rights for each DC](images/user_rights_1.png){.thumbnail}

From this menu, you can change the rights of your vSphere users per data centre.

![Modify rights](images/user_rights_2.png){.thumbnail}

| Access | Possible right | Description |
|---|---|---|
| vSphere access | None / Read-only / Read & Write | Global user rights on vSphere |
| Access to the VM Network | None / Read-only / Provider | Management rights over the public network section (a.k.a VM Network in the vSphere interface) |
| Add resources | Yes / No | Right to add additional resources through the OVHcloud plugin in the vSphere client (Host, Datastore, Veeam Backup) |

![Modify rights](images/user_rights_3.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.
