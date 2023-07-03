---
title: 'Managing users'
excerpt: 'Find out how to manage users via your OVHcloud account'
updated: 2023-07-03
---

**Last updated 3rd July 2023**

## Objective

With OVHcloud, you can create additional users with read or write access to your customer account. This means that you can grant other members of your company access to your OVHcloud services, without having to resort to risky practices like sharing passwords or two-factor authentication details.

> [!primary]
>
> User management is different to contact management. User will have an access to all sections of the OVHcloud Control Panel according to level of right giving to him.
>
> The purpose of contact management is to delegate full management of the administrative, technical and billing aspects of one or more services on your OVHcloud account. For further information on contact management, please refer to [this guide](https://docs.ovh.com/gb/en/customer/managing-contacts/).
>

**This guide details the privileges a user can hold, as well as the method for adding and managing users.**

## Requirements

- an active OVHcloud account
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)

## Instructions

### User management

#### Add a user

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), click `your name`{.action} (1) in the top right-hand corner, then click on your initials (2).
Next, click on the `User management`{.action} tab (3), and `Add a user`{.action} (4).

![users-management](images/hubusers.png){.thumbnail}

A window will pop up, and you will need to complete the required fields. Click `Confirm`{.action} to create the user.

![users-management](images/usersmanagement2.png){.thumbnail}

| Field | Details |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ID | Enter the user’s name or their role, for example. |
| Email | Enter the user’s full email address. |
| Password | Set the user password. The user can then change this password once their access has been created. <br>We also suggest reading our [guide on password management](https://docs.ovh.com/gb/en/customer/manage-password/) to define this password. |
| Group | Choose a group from those available |
| Description | You can add a user description (such as their role within the company). |

The user then gets their own ID made up of your account’s digital ID (which is listed in the “User management” menu) and their username, with the two values separated by a “/”.

Example: **1234-567-89/johnsmith**.

![users-management](images/usersmanagement3.png){.thumbnail}

The user you have created can then log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) using this ID. 

They can also change their password and secure their own access to your account by enabling two-factor authentication (this is only for their access as a user). To find out how to enable two-factor authentication, you can refer to [this guide](https://docs.ovh.com/gb/en/customer/secure-account-with-2FA/){.external}.

#### Manage users

You can disable/enable or remove a user by clicking on the `…`{.action} button to the right of the user’s name.

![users-management](images/usersmanagement4.png){.thumbnail}

When you edit a user you can update their email address, group and description.

![users-management](images/usersmanagement6.png){.thumbnail}

### Group management

#### Add a group

On the `User management`{.action} tab, click on `Declare a group`{.action}.

![users-management](images/usersmanagement7.png){.thumbnail}

A window will pop up, and you will need to complete the required fields. Click `Confirm`{.action} to create the user.

![users-management](images/usersmanagement8.png){.thumbnail}

Groups give a default privilege levels for the users they contain according to the role you choose:

| Role | Details |
|------------------|----------------------------------------------------------------------------------------------------------------------|
| None | Gives no access to the OVHcloud Control Panel if any IAM polices is set-up. |
| Read-Only | Gives read access to the OVHcloud Control Panel and all of its sections. |
| Restricted Admin | Gives write access to the OVHcloud Control Panel and all of its sections, **except for** user management. |
| Administrator | Gives write access to the OVHcloud Control Panel and all of its sections, **including** user management. |

#### Manage groups

You can update or remove a group by clicking on the `…`{.action} button to the right of the group name.

![users-management](images/usersmanagement9.png){.thumbnail}

When you edit a group you can update their description and role.

![users-management](images/usersmanagement10.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.