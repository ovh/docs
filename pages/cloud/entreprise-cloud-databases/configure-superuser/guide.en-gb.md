---
title: 'Setting a password for your admin user'
slug: "configure-mdp-superuser"
excerpt: 'Find out how to set a password for your admin user'
section: 'Getting started with a PostgreSQL cluster'
order: 3
---

**Last updated 03rd January 2020**

## Objective

Each Enterprise Cloud Databases cluster is configured natively with an admin user.
This guide will outline the steps you need to follow in order to use the solution.


## Requirements
- an Enterprise Cloud Databases cluster
- access to the OVHcloud Control Panel or API with sufficient rights (admin or technical)


## Instructions

### Step 1: Get an understanding of superuser roles.

OVHcloud provides you with an admin account for your database instance. This **postgres** user can perform all technical operations that fall under the scope of "administration". They have superuser rights.

Please refer to the [PostgreSQL official documentation](https://www.postgresql.org/docs/current/role-attributes.html){.external} for more information about superuser rights. 


### Step 2: Set a password via the OVHcloud Control Panel.

You can change the **postgres** admin user password at any time. To do this, go to the `Home > Information`{.action} tab in the OVHcloud Control Panel. In the ID section, click on the `...`{.action} button, then `Update password`{.action}.

> [!primary]
> For security reasons, the password must meet certain requirements:
>
> - it must contain letters and numbers
> - it must contain at least one upper-case letter
> - it must contain at least two numbers
> - it must be between 12 and 32 characters
>


### Step 2.1: Set a password via the API.

Using the following API call, you can update your admin password.
Please ensure that you follow the complexity rules listed in step 2.


> \[!api]
>
> @api {POST} /cloudDB/enterprise/cluster/{clusterId}/user
>
```
