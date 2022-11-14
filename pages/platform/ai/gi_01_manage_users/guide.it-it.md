---
title: Users - Manage AI users and roles
slug: users
excerpt: Learn the concept behind AI Training users
section: General information
order: 104
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/ai/users/'
---

**Last updated 1st March, 2021.**

## Objective

The **users** of the AI Training platform are simply your Public Cloud users that you can create in the OVHcloud Control Panel. To give access to **AI Training** to any of your users, you need to grant them the **AI Training Operator** role. Then you can use this user's credentials to authenticate.

**AI Training** includes the OVHcloud Object Storage as a persistent storage solution for your [data](https://docs.ovh.com/it/publiccloud/ai/data). To use these features the user needs to be granted the **Objectstore Operator** role since it implies read/write access to the Object Storage.

## Requirements

- A **Public cloud** project
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Instructions

### Creating AI Training users

To use **AI Training** with the `ovhai` CLI or to access jobs urls you need to create users with the correct roles.

Users management is available in the `Public Cloud` Control Panel under `Project Management` > `Users & Roles`

![image](images/03_users_menu.png){.thumbnail}

Create a new user and specify the required roles. Two roles are used within **AI Training**:

- AI Training Operator: Grants access to **AI Training**
- Objectstore Operator: Grants read/write access to the OVHcloud Object Storage.

It is recommended to assign both roles.

![image](images/04_users_roles.png){.thumbnail}

> [!primary]
>
> - Access to **AI Training** can be revoked anytime by deleting the user or removing its **AI Training Operator** role.
> - To be able to use the OVHcloud Object Storage, make sure that the user has the **Objectstore Operator** role.

## Going further

- You can check the [OVHcloud documentation on how to submit a job](https://docs.ovh.com/it/publiccloud/ai/training/submit-job).

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9) 
