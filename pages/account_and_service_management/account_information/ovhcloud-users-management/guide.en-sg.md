---
title: 'Creating and managing local users on an OVHcloud account'
excerpt: 'Find out how to add local users from your OVHcloud account'
updated: 2024-06-25
---

## Objective

With OVHcloud, you can create additional local users with read or write access to your customer account. This means that you can grant other members of your company access to your OVHcloud services, without having to resort to risky practices like sharing passwords or two-factor authentication details.

> [!primary]
>
> User management is different from contact management. A user will have an access to all sections of the OVHcloud Control Panel according to the level of rights granted.
>
> The purpose of contact management is to delegate full management of the administrative, technical and billing aspects of one or more services on your OVHcloud account. For further information on contact management, please refer to [this guide](/pages/account_and_service_management/account_information/managing_contacts).
>

**This guide details the privileges a local user can hold, as well as the method for adding and managing users.**

## Requirements

- An active OVHcloud account
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

### Understanding identities

Local users are one of the types of identities that can be set up on your OVHcloud account. Other account types are described in the [related documentation](/pages/manage_and_operate/iam/identities-management).

### User management

#### Add a user

Click your account name in the top-right corner, then on your name again in the sidebar.

![Access to the IAM menu](images/access_to_the_IAM_menu_01.png){.thumbnail}

You can access the IAM menu via the dedicated entry in your Control Panel.

![Access to the IAM menu](images/access_to_the_IAM_menu_02.png){.thumbnail}

Then click on the `Identities`{.action} tab to access local users management.

![Access to the IAM menu](images/access_to_the_IAM_menu_03.png){.thumbnail}

You can then click on `Add user`{.action}.

A window will pop up, and you will need to complete the required fields. Click `Confirm`{.action} to create the user.

![users-management](images/usersmanagement2.png){.thumbnail}

| Field | Details |
|--|--|
| ID | Enter the user’s name or their role, for example. |
| Email | Enter the user’s full email address. |
| Password | Set the user password. The user can then change this password once their access has been created. <br>We also suggest reading our [guide on password management](/pages/account_and_service_management/account_information/manage-ovh-password) to define this password. |
| Group | Choose a group from those available (see table below). |
| Description | You can add a user description (such as their role within the company). |

**Default group details:**

| Role | Details |
|--|--|
| UNPRIVILEGED (Read-Only) | Gives read access to the OVHcloud Control Panel and all of its sections. |
| DEFAULT (Restricted Admin) | Gives write access to the OVHcloud Control Panel and all of its sections, **except for** user management. |
| ADMIN (Administrator) | Gives write access to the OVHcloud Control Panel and all of its sections, **including** user management. |

The user then gets their own ID made up of your account’s numeric ID (which is listed in the “User management” menu) and their username, with the two values separated by a “/”.

Example: **1234-567-89/johnsmith**.

![users-management](images/usersmanagement3.png){.thumbnail}

The user you have created can then log in to the [OVHcloud Control Panel](/links/manager) using this ID. 

They can also change their password and secure their own access to your account by enabling two-factor authentication (this is only for their access as a user). To find out how to enable two-factor authentication, you can refer to [this guide](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa).

#### Manage users

You can disable/enable or remove a user by clicking on the `…`{.action} button to the right of the user’s name.

![users-management](images/usersmanagement4.png){.thumbnail}

When you edit a user you can update their email address, group and description.

![users-management](images/usersmanagement6.png){.thumbnail}

### Group management

#### Add a group

On the `Identities`{.action} tab, click on `Declare a group`{.action}.

![users-management](images/usersmanagement7.png){.thumbnail}

A window will pop up and you will need to complete the required fields. Click `Confirm`{.action} to create the group.

![users-management](images/usersmanagement8.png){.thumbnail}

Groups give a default privilege level for the users they contain, according to the role you choose:

| Role | Details |
|--|--|
| None | Gives no access to the OVHcloud Control Panel if no IAM policy is set up. |
| Read-Only | Gives read access to the OVHcloud Control Panel and all of its sections. |
| Restricted Admin | Gives write access to the OVHcloud Control Panel and all of its sections, **except for** user management. |
| Administrator | Gives write access to the OVHcloud Control Panel and all of its sections, **including** user management. |

#### Manage groups

You can update or remove a group by clicking on the `…`{.action} button to the right of the group name.

![users-management](images/usersmanagement9.png){.thumbnail}

When you edit a group you can update its description and role.

![users-management](images/usersmanagement10.png){.thumbnail}

### Rights management

On top of the role associated to user groups, you can fine-tune access privileges using OVHcloud IAM.
OVHcloud IAM policies management is covered by the [dedicated guide](/pages/account_and_service_management/account_information/iam-policy-ui).

## Go further

Join our community of users on <https://community.ovh.com/en/>.
