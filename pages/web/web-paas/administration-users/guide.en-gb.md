---
title: Administer users
slug: administration-users
section: Administration
order: 11
---

**Last updated 31st August 2023**



## Objective  

{{< vendor/name >}} offers very granular and flexible user permissions across projects and organizations. 
When a user is added to a project, they are automatically added to your organization.

## Manage project access

If you have set up an external integration to GitHub, GitLab, or Bitbucket and your users can't clone the project locally,
see how to [troubleshoot source integrations](../integrations/source/troubleshoot.md).

### Project roles

A user can have one of the following roles to control their access at project level:

| Role           | View environment | Push code | Manage user access | Change settings | Execute actions on all environments |
|----------------|------------------|-----------|--------------------|-----------------|-------------------------------------|
| Project admin  | Yes              | Yes       | Yes                | Yes             | Yes                                 |
| Project viewer | Yes              | No        | No                 | No              | No                                  |

By default, organization owners have **Project admin** access on all of the projects within their organization.

### Environment type roles

An environment type (Production, Staging, and Development) groups one or more environments together so that you can manage access for all environments of that type:

- A role assigned to an environment type applies to all environments of that type.

- Only one environment per project can be of the type: Production.

  It is set automatically as the default branch and can't be overridden separately.
- You can change an environment's type (except for the Production environment).

- You can have multiple Staging and Development environments.


A user can have one of the following roles on an environment type which grants them permissions on all environments of this type:

| Role        | View environment | Push code | Branch environment | SSH access | Change settings | Execute actions |
|-------------|------------------|-----------|--------------------|------------|-----------------|-----------------|
| Admin       | Yes              | Yes       | Yes                | Yes        | Yes             | Yes             |
| Contributor | Yes              | Yes       | Yes                | Yes        | No              | No              |
| Viewer      | Yes              | No        | Yes                | No         | No              | No              |

To customize which roles can use SSH, set [`access` in your app configuration](../create-apps/app-reference.md#access).

#### View a user's permissions across all of the projects in your organization

For each user, you can view a summary of their roles and permissions
across all projects in your organization.

> [!tabs]      

### Add a user to a project

To invite a user, you need to be a [project admin](#project-roles).

To add a user, follow these steps:

> [!tabs]      

The user has to create an account before they can access the project.
Once you add a user to a project, they receive an invitation email with instructions.

To apply SSH access changes after you add a user to a project,
[trigger a redeploy](../development/troubleshoot.md#force-a-redeploy).

### Manage project users

To manage user permissions on a project, you need to be a [project admin](#project-roles),
be an organization owner, or have the [**Manage users** permission for the organization](#organization-permissions).

To change user permissions, follow these steps:

> [!tabs]      

To apply SSH access changes after you add a remove a user from a project or environment type,
[trigger a redeploy](../development/troubleshoot.md#force-a-redeploy). 

### Remove a user from a project

To remove a user from a project, you need to be a [project admin](#project-roles),
be an organization owner, or have the [**Manage users** permission for the organization](#organization-permissions).

To remove a user, follow these steps:

> [!tabs]      

To apply SSH access changes after changing a user's permissions for an environment type,
[trigger a redeploy](../development/troubleshoot.md#force-a-redeploy).

## Manage organization access

All users who are added to any project within an organization become members of that organization.
By default, such users have no [organization permissions](#organization-permissions).
You can also have organization users who aren't part of any projects.

Users who are a part of an organization with the **List projects** permission can see all projects in that organization at the organization's URL,
which takes the form `https://console.platform.sh/{{< variable "ORGANIZATION_NAME" >}}`.
They can only access projects they've been explicitly invited to.
For more information on project access control, see how to [manage project users](#manage-project-users).

### Organization permissions

As an organization owner or an organization user with the **Manage users** permission,
you can invite other users to your organization and grant them the following permissions:

- **Manage billing** (`billing`):

  Add, remove, and edit billing information.
  Access invoices and vouchers.
  Users with this permission receive monthly invoices by email.
- **Manage plans** (`plans`):

  View and edit plans and plan options for existing projects.
  Plan options include the amount of storage, number of environments, and number of user licenses on a project.
- **Manage users** (`members`):

  Add, remove, and edit organization-level users and permissions, except their own.
  Users with this permission can't grant other users permissions that they themselves don't have.
- **Create projects** (`projects:create`):

  Create new projects within the organization.
- **List projects** (`projects:list`):

  See all projects in an organization, even those the user can't access.

> [!primary]  
> 
> Users with the **Manage users** (`members`) permission can add, edit, or remove _any_ user's permissions except their own.
> 
> 

Users without any of these permissions can only access [projects where they're users](#project-roles).
They can't access or manage the rest of the organization.

Organization owners have all permissions within their organization.
Their permission level can't be edited.
Organization owners can't be removed from their organization,
except through an [ownership transfer](../administration/organizations.md#transfer-project-ownership).

### Add a user to an organization

> [!tabs]      

All users you invite receive an invitation email with instructions.

### Manage organization users

> [!tabs]      

### Remove a user from an organization

> [!tabs]      

Remove a user from an organization will remove them from all projects they were a member of.
