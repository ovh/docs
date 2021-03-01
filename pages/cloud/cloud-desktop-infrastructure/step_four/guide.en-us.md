---
title: Step 4 - Assigning virtual desktop access to users
slug: assigning-desktop-access
excerpt: Find out how to add users, and provide them with access to your virtual desktops
section: Setting up
order: 4
---

**Last updated 2018/02/19**

## Objective

Now that you have [created your pool](../how-to-create-pool/), you can authorise user access to your virtual desktops.

**This guide will explain how to add users, and provide them with access to your virtual desktops.**


## Requirements

- You need to have created users in the Active Directory, if a [trust relationship has been created](../approval-ad/), or created users via your [OVH Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we){.external}.
- You need to be logged in to the VMware Horizon 7.1 interface.



## Instructions

### Manage users

When the platform is delivered to you, 10 generic users (all named vdiXX, with XX representing a number) are created. Their login details are provided in the delivery email.


### Assign virtual desktop access to them

You will need to do this via VMware Horizon 7.1. Using the pool’s `Entitlements`{.action} tab, you can associate users with certain permissions, giving them access to the virtual desktops you have deployed.

- Click `Add Entitlement`{.action} to open the context menu.

![Add Entitlement](images/1200.png){.thumbnail}

- Search and select the user(s) you would like to grant access to, then confirm.

![User selection](images/1201.png){.thumbnail}


The users associated with the pool can now [access and use your virtual desktops](../desktop-login/).


## Go further

Join our community of users on <https://community.ovh.com/en/>.