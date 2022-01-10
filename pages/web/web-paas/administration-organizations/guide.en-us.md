---
title: Organizations
slug: administration-organizations
section: Administration
order: 11
---

**Last updated 7th January 2022**


## Objective  

Organizations allow to manage your Web PaaS projects, users and billing.

## Organization settings

As an organization owner, you can manage the basic settings for your organization such as its name and URL.


> [!tabs]      
> In the console     
>> ``` false     
>> 
>> 
>> 1. Navigate to the organization you want to manage (or a project in it).
>> 1. Open the user menu (your name or profile picture).
>> 1. Click **Settings**.
>> 1. Click **Edit** to edit the label or click in the **Organization URL** field to edit the URL.
>> 1. Click **Save**.
>> 
>> 
>> ```     
> Using the CLI     
>> ``` false     
>> 
>> 
>> Say you want to set the organization label to `Great Org` and its URL to `greatest`:
>> 
>> ```bash
>> webpaas organization:info label "Great Org" name greatest
>> ```
>> 
>> To verify the changes, run `webpaas organization:info`.
>> 
>> ```     

## Organization billing

As an organization owner or an organization user with the **manage billing** permission,
you can access and download invoices and edit billing information such as the stored credit card and billing address.

## Organization permissions

As an organization owner or an organization user with the **manage users** permission,
you can invite other users to your organization and grant them the following permissions:

* **Manage plans** (`plans`):
  Add, remove, and edit plans and plan options for your existing projects.
  (Change plan, change storage, change the number of environments, change the number of user licenses)
* **Manage billing** (`billing`):
  Add, remove and edit billing information.
  Access invoices and vouchers.
* **Create projects** (`projects:create`):
  Create new projects within the organization.
* **Manage users** (`members`):
  Add, remove and edit organization-level users and permissions, including your own.

> [!primary]  
> 
> A user with the **manage users** (`members`) permission can add, edit, or remove _any_ user's permissions.
> 
> 

Users who are a part of an organization can see all projects in that organization at the organization's URL,
which takes the form `https://console.platform.sh/<ORGANIZATION_NAME>`.

They can access only projects where they're an admin or have permissions for at least one environment type.
To see all projects you have access to, from the main console page
click **All projects&nbsp;<span aria-label="and then">></span> All projects**.
For more on access control for projects, see [user administration](./users.md).

## Manage organizations with the CLI

You can use the Web PaaS command line interface to manage your organizations.

Available commands (get the full list with 'platform list organization')

```txt
Available commands for the "organization" namespace:
      organization:info              View or change organization details
      organization:list              List organizations
      organization:subscription:list List subscriptions within an organization
      organization:billing:address   View or change an organization's billing address
      organization:billing:profile   View or change an organization's billing profile
      organization:user:add          Invite a user to an organization
      organization:user:delete       Remove a user from an organization
      organization:user:get          View an organization user
      organization:user:list         List organization users
      organization:user:update       Update an organization user
```

For example, the following command would invite `alice@example.com` with the **Manage users**, **Billing**, **Plans** and **Projects create** permissions to the `acme-corp` organization.

```bash
webpaas organization:user:add alice@example.com --org=acme-corp --permission=members,billing,plans,projects:create
```

After inviting `alice@example.com`, Alice will receive an invitation email asking to confirm her details and optionally, register for a Web PaaS account.

To update Alice's permissions in your organization, run:

```bash
webpaas organization:user:update alice@example.com --org=acme-corp --permission=billing
```

This command would remove all previously granted permissions from Alice, and only grant the **Billing** permission.

## Transfer project ownership

If you want to transfer a project to a different organization, please submit a support ticket from the current project to ask for the transfer.

This action will automatically transfer the subscription charges to the new organization.
