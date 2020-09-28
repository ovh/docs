---
title: Accessing the Horizon interface
slug: configure_user_access_to_horizon
legacy_guide_number: 1773
excerpt: Find out how to access the Horizon interface
section: Horizon
order: 1
---

**Last updated 14th November 2019**

## Objective

Horizon is the graphical management interface for OpenStack. Certain features can only be accessed using this interface.

**This guide will show you how to access the Horizon interface.**


## Requirements

- a Public Cloud project activated
- access to the [OVH Control Panel](https://ovh.com/auth/?action=gotomanager){.external}

## Instructions

### Create an OpenStack user account

First of all, to access the Horizon interface, you need to create an OpenStack user account. To do this, log in to your Control Panel and go to the `Public Cloud`{.action} section in the top-left corner of the page. Then, on the following screen, click the `arrow button`{.action} next to your project name in the top-left corner of the screen.

![Add user](images/select_project.png){.thumbnail}

Under "Project management" on the left-hand sidebar, select `Users & Roles user`{.action}.

![User roles](images/users_roles.png){.thumbnail}

Clique the `Create User`{.action} button to generate the following pop-up.

![Add user](images/adduser.png){.thumbnail}

The user description is not the username for the user. It is just a descriptive term to help you remember what kind of user it is. The next screen will allow you to grant user permissions. For each permissions box you check, the user will get the corresponding privileges as seen in the table below:

![Permissions](images/permissions.png){.thumbnail}

Click the `Confirm`{.action} button when you are finished and you will see the following screen:

![User_pw](images/user_pw.png){.thumbnail}

Be sure to save your password now as this is the only time you will be able to recover it. However, if you lose it you can always create a new one by clicking the ellipses (...) on the following menu and selecting `Generate a password:`{.action}

![Generate](images/generatepw.png){.thumbnail}

Once your user has been created, you can use these credentials to log into the Horizon interface using the `Horizon button`{.action} on the left-hand sidebar.

### Log in to OpenStack Horizon

To open the menu, click on the three-dot icon at the end of the line (`...`{.action}). Next, click the `Open OpenStack Horizon`{.action} link. The [Horizon](https://horizon.cloud.ovh.net/auth/login/){.external} login page will then appear. To log in, enter your `User Name` and your password.

![Project menu](images/3_H_open_menu.png){.thumbnail}

![Login screen](images/4_H_login_window.png){.thumbnail}

Once you have logged in, the OpenStack Horizon interface will appear:

![Horizon interface](images/5_H_view.png){.thumbnail}


## Go further

Join our community of users on <https://community.ovh.com/en/>.
