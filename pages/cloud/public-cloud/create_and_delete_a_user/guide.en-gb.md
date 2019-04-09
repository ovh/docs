---
title: 'Creating and Deleting an OpenStack User'
slug: creation-and-deletion-of-openstack-user
section: 'From the OVH Control Panel'
---

## Overview
To use the Horizon or OpenStack APIs, you will need to create an OpenStack user. This guide describes how to create and delete a user.

The number of OpenStack users is not limited.

### Requirements
You must have a Public Cloud project, and it must be more than 7 days old, if it is your first project (or contact the support team to check if it is possible to unblock the project in anticipation). Other projects will not have this limitation.

## Creating an OpenStack user
In the Control Panel, go to your Public Cloud project (Cloud → Servers → Name of your Public Cloud project). In the left-hand column, you will see the OpenStack section.

To create an OpenStack user, simply click `Add user`{.action}, then choose a description. The real name is auto-generated. You will need to validate by clicking `Create this user`{.action}:


![public-cloud](images/add_user.png){.thumbnail}

A few seconds later, the user will be added.

You get user access to:

- The user’s ID
- The name you have chosen, which will appear in Description
- The password


![public-cloud](images/add_user_menu.png){.thumbnail}


> [!primary]
>
> The password in your Customer Control Panel will be visible until
> the page is refreshed.  If lost, it will be necessary
> to generate a new one.
> 

By clicking on the wheel at the end of the line, you have the possibility to:

- Launch OpenStack Horizon
- Downloading an OpenStack configuration file
- Generate an OpenStack token


## Deleting an OpenStack user
You can delete an OpenStack user directly in the Control Panel (Cloud → Servers → Name of your Public Cloud project). In the OpenStack part you will find on the right of the existing user a small recycle bin:

![public-cloud](images/delete_user.png){.thumbnail}

Simply click on it and the user will be deleted in a few seconds.


> [!alert]
>
> Any user deletion is permanent and will invalidate all
> associated tokens, even those whose expiry date is not exceeded.
> 