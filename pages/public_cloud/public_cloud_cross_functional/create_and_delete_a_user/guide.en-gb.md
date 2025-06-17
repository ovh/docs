---
title: Managing OpenStack users
excerpt: Find out how to manage OpenStack users from the OVHcloud Control Panel and the Horizon interface
updated: 2025-04-28
---

## Objective

Access to Horizon and the OpenStack APIs is established via username/password pairs called "OpenStack users". You can create as many OpenStack users as needed and assign them various access permissions.

Using the Horizon interface, you can also set passwords for each individual user. Please note that when you change a user password, the previous password will be immediately cancelled.

**This guide explains how to manage OpenStack users from the OVHcloud Control Panel and the Horizon interface.**

<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/NC69nrb6QlA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Requirements

- A [Public Cloud project](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project) in your OVHcloud account
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

### Creating an OpenStack user

Log in to the [OVHcloud Control Panel](/links/manager), go to the `Public Cloud`{.action} section and select the Public Cloud project concerned. Click on `Users & Roles`{.action} the left-hand menu under **Settings**. 

Click on the button `Create User`{.action}.

![User roles](images/users_roles.png){.thumbnail}

The user description is not the username for the OpenStack user but a descriptive term to help you organise users and their permissions. Enter a description and click on `Next`{.action}.

![Add user](images/adduser.png){.thumbnail}

Now you can select user roles representing the permissions the user shall have. For each box checked, the user will gain access privileges according to the table below.

![Permissions](images/permissions.png){.thumbnail}

Click on `Confirm`{.action} to create the OpenStack user. Username and password will be automatically generated and displayed in your Control Panel.

![User_pw](images/user_pw.png){.thumbnail}

Be sure to save the password shown in the green message box to a password manager at this time. The password cannot be recovered afterwards. However, you can always create a new password by clicking on `...`{.action} and selecting `Generate a password`{.action}.

![Generate](images/generatepw.png){.thumbnail}

With the OpenStack user created, you can use its credentials to log into the [Horizon interface](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon) by clicking on the link `Horizon`{.action} in the left-hand menu.

### Change an OpenStack user password

You can create an OpenStack password once you have logged in to your [OpenStack Horizon](https://horizon.cloud.ovh.net) interface:

![Horizon login](images/1_H_login_window.png){.thumbnail}

Your user profile is visible in the top right-hand corner of the Horizon interface. Click on your profile to open a menu with various options, select `Settings`{.action}, then `Change password`{.action} on the left-hand side:

![Change password](images/2_H_pass_change_option.png){.thumbnail}

Enter your current password into the first field, then re-enter and confirm your new password in the next two fields.

> [!primary]
>
> When you change your password, please ensure that it meets the following criteria:
>
> - The password must contain a minimum of eight characters.
> - The password must contain a maximum of 30 characters.
> - The password must contain at least one upper-case letter.
> - The password must contain at least one lower-case letter.
> - The password must contain at least one number.
> - The password must only contain letters and numbers.
>

To confirm your new password, click `Change`{.action}.

![Set password](images/3_H_set_new_passord.png){.thumbnail}

Please note that when you change your user password, your previous password is immediately cancelled.

### Deleting an OpenStack user

You can remove an OpenStack user in the [OVHcloud Control Panel](/links/manager). Click on `Users & Roles`{.action} the left-hand menu under **Settings**. 

![public-cloud](images/delete.png){.thumbnail}

Click on `...`{.action} and select `Delete`{.action}.

> [!warning]
>
> Deleting a user is permanent and will invalidate all associated tokens, even those with an expiry date not yet exceeded.
> 

## Go further

[Introducing Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon)

Join our [community of users](/links/community).
