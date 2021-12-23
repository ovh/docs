---
title: Create User with UI
slug: create-user
excerpt: Learn how to create AI training users that will interract with jobs
section: How to (with UI)
order: 2
---

**Last updated 3rd May, 2021.**

## Objective

This guide covers the creation of user for **AI Training** through the Control Panel.

### Step 1: Creating AI Training users

To use **AI Training** with the `ovhai` CLI or to access jobs urls you need to create users with the correct roles.

Users management is available in the `Public Cloud` Control Panel under `Project Management` > `Users & Roles`

![image](images/03_users_menu.png){.thumbnail}

Create a new [user](../users) and specify the required roles. Two roles are used within **AI Training**:

-   AI Training Operator: Grants access to **AI Training**
-   Objectstore Operator: Grants read/write access to the OVHcloud Object Storage.

It is recommended to assign both roles.

![image](images/04_users_roles.png){.thumbnail}

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9) 
