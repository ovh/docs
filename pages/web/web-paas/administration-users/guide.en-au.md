---
title: User administration
slug: administration-users
section: Administration
order: 11
---

**Last updated 24th June 2022**



## Objective  

Learn about user roles and environment types, how to add and delete users, and how to assign user permissions per environment type.

## Instructions

### User roles

Within a project, each user has a role that controls their access and permission levels.

* Project Admin: Users who can configure project settings, add and remove users, administer environment permissions, push code, and execute actions on all project environments.
* Project Viewer: Any user with access to environment types automatically gets this role.

These control who has access to projects.

Users can still see projects that they can't access if they're a member of an organization.
See more on access control for organizations.

To see all projects you have a role in, from the main console page
click **All projects&nbsp;<span aria-label="and then">></span> All projects**.

## Environment types

Each environment type groups one or more environments together so that you can manage access for all environments of a certain type.
This allows you to set permissions for multiple environments at once based on their purpose.

Web PaaS offers three environment types: Production, Staging, and Development.
You can assign user permissions for each environment type.
Any permissions you assign to an environment type apply to all environments of that type.

For example, if you assign User1 **Admin** permissions for Development environments,
User1 has **Admin** permissions for all environments of that type.

A few things to consider:

* Only one environment per project can be the Production type. It's set automatically as the default branch and can't be overridden separately.
* You can change an environment's type (if it's not Production).
* You can have multiple Staging and Development environments.

The following table shows the available roles for environment types.

| Role | View environment | Push code | Branch environment | SSH access | Change settings | Execute actions |
| ---- | ---------------- | --------- | ------------------ | ---------- | --------------- | --------------- |
| Viewer | Yes | No |  No |  No |  No |  No |
| Contributor | Yes | Yes | Yes | Yes | No | No |
| Admin| Yes | Yes | Yes | Yes | Yes | Yes |

To customize who can use SSH, [set the access key](../configuration-app/access) in your `platform.app.yaml` file.

## Manage users

### Add a user to a project

To add a user, you need to be a [Project Admin](#user-roles).

To add a user to a project or an environment, follow these steps:

> [!tabs]      
> In the console     
>> ``` false     
>> 
>> 
>>1. Select the project where you want to add a new user.
>>2. Click **Settings**.
>>3. Click **Access**.
>>4. Click **+ Add**.
>>5. Add the user's details and choose their permissions.
>>6. Click **Save**.
>> 
>> 
>> 
>> ```     
> Using the CLI     
>> ``` false     
>> 
>> 
>> Say you want to add `user1@example.com` to the project with a Project Admin role:
>> 
>> ```bash
>> webpaas user:add user1@example.com -r admin
>> ```
>> 
>> ```     

The user has to create an account before they can contribute to the project.
Once you add a user to a project, they receive an email with instructions.
For SSH access changes to apply after you add a user to a project, you have to redeploy each environment by either clicking **Redeploy** in the console or running `webpaas redeploy`.

### Delete a user from a project

To delete a user, you need to be a [Project Admin](#user-roles).

To delete a user from a project, follow these steps:

> [!tabs]      
> In the console     
>> ``` false     
>> 
>> 
>>1. Select the project where you want to add a new user.
>>2. Click **Settings**.
>>3. Click **Access**.
>>4. Expand the user you want to delete.
>>5. Click **Delete**.
>>6. Click **Save**.
>> 
>> 
>> 
>> ```     
> Using the CLI     
>> ``` false     
>> 
>> To delete existing users:
>> 
>> ```bash
>> webpaas user:delete user1@example.com
>> ```
>> ```     

Once you delete a user, they can no longer access the project.
After you delete a user from a project or an environment type,
you must [trigger a redeploy](../development-redeploy/) to propagate SSH access changes to each environment.

### Change existing permissions for environment types

To manage user permissions, you need to be a [Project Admin](#user-roles).

To change user permissions, follow these steps:

> [!tabs]      
> In the console     
>> ``` false     
>> 
>> 
>> 1. Select the project where you want to add a new user.
>> 2. Click **Settings**.
>> 3. Click **Access**.
>> 4. Expand the user you want to delete.
>> 5. Click **Delete**.
>> 6. Click **Delete** to confirm.
>> 
>> 
>> 
>> ```     
> Using the CLI     
>> ``` false     
>> 
>> Say you want `user1@example.com` to have the Viewer role for Production environments
>> and the Contributor role for Development environments:
>> 
>> ```bash
>> webpaas user:update user1@example.com -r production:v,development:c
>> ```
>> 
>> After you change a user's role for an environment type, you must trigger a redeploy each environment to propagate access changes. You can redeploy using the CLI command `webpaas redeploy`.
>> 
>> ```     


