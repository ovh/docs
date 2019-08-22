---
title: Accessing the Horizon interface
slug: configure_user_access_to_horizon
legacy_guide_number: 1773
excerpt: Find out how to access the Horizon interface
section: Knowledge Base
order: 1
---

**Last updated 25th June 2018**

## Objective

Horizon is the graphical management interface for OpenStack. Certain features can only be accessed using this interface.

**This guide will show you how to access the Horizon interface.**


## Requirements

- a Public Cloud project activated
- access to the [OVH Control Panel](https://ca.ovh.com/auth/?action=gotomanager){.external}

## Instructions

### Create an OpenStack user account

First of all, to access the Horizon interface, you need to create an OpenStack user account. To do this, log in to your Control Panel. Go to the `Cloud`{.action} section, then `Servers`{.action}, and select the project concerned. Next, click on the `OpenStack`{.action} tab in the left-hand column:

![Add user](images/1_H_add_user.png){.thumbnail}

Click `Add user`{.action}, and choose a user description. The username and password are then generated automatically. Once the operation is complete, a message will open confirming that the account has been created.

The password will be visible in the Control Panel until you refresh the page. You can note down this password, and use it when you access the interface again. You can also generate a new password by clicking on the refresh icon, located next to your current password:

![Project menu](images/2_H_user_manage.png){.thumbnail}

### Log in to OpenStack Horizon

To open the menu, click on the three-dot icon at the end of the line (`...`{.action}). Next, click the `Open OpenStack Horizon`{.action} link. The [Horizon](https://horizon.cloud.ovh.net/auth/login/){.external} login page will then appear. To log in, enter your `User Name` and your password.

![Project menu](images/3_H_open_menu.png){.thumbnail}

![Login screen](images/4_H_login_window.png){.thumbnail}

Once you have logged in, the OpenStack Horizon interface will appear:

![Horizon interface](images/5_H_view.png){.thumbnail}


## Go further

Join our community of users on <https://community.ovh.com/en/>.