---
title: Change users rights
slug: change-users-rights
section: OVH Features
---

**Last updated Apr. 30th 2020**

## Objective

The purpose of this guide is to explain the user rights management on OVH's Private Cloud offer.

**Learn how to manage user rights management on your infrastructure.**

## Requirements

* Have a [Hosted Private cloud](https://www.ovhcloud.com/en-ie/enterprise/products/hosted-private-cloud/){.external}.
* Connect to the [OVHcloud Manager](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Instructions

This requires clicking **Server**, then **Hosted Private cloud**, and then choosing the infrastructure on which you want to change users.

Go to the **Users** tab and click the three dots to the right of the user's line to display the menu.

![See/Change the rights for each DC](images/user_rights_1.png){.thumbnail}

From this menu, you can change the rights of your vSphere users per Datacenter :

![Modify rights](images/user_rights_2.png){.thumbnail}

| Access | Possible right | Description |
|---|---|---|
| vSphere access | None / Read-only / Read & Write | Global user rights on vSphere |
| Access to the VM Network | None / Read-only / Provider | Management rights over the public network section (a.k.a VM Network in the vSphere interface) |
| Access to the V(X)LANs | None / Read-only / Provider / Administrator | Management rights over the private network section (VxLan et VLAN) |
| Add resources | Yes / No | Right to add additional resources through the OVH plugin in the vSphere client (Host, Datastore, Veeam Backup) |

![Modify rights](images/user_rights_3.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.
