---
title: "Publish a dashboard"
updated: 2025-02-15
---

## Objective

Dashboards are designed to be shared with the rest of your team. This is why each dashboard can be opened as a **live published version**.

![dashboards](images/live-overview.png){.thumbnail}

- [Publish a dashboard live](#publish-a-dashboard-live)
  - [How to publish a version?](#how-to-publish-a-version)
    - [If your dashboard repository has only one version
](#if-your-dashboard-repository-has-only-one-version)
    - [If your dashboard repository has two or more versions](#if-your-dashboard-repository-has-two-or-more-versions)
- [Grant access to the dashboard](#grant-access-to-the-dashboard)
  - [Basic access control](#basic-access-control)
  - [Fine-grained access control](#fine-grained-access-control)

## Publish a dashboard live

Each dashboard created in the Analytics Manager can be opened in either:

- the **editing interface**: users can edit the [whole configuration and preferences of the dashboard](/pages/public_cloud/data_platform/product/am/dashboards/edit), such as adding charts, filters, stories, etc. 
- the **live interface**: users can view the dashboard and interact with the filters to refresh the charts, but they cannot edit it

![dashboards](images/live-overview.png){.thumbnail}  
*Example of a live dashboard*

![dashboards](images/dashboards-overview.png){.thumbnail}  
*Example of the edition interface of the same dashboard*

Each mode **has its respective URL**. The editing mode URL depends on the [version](/pages/public_cloud/data_platform/product/am/queries/00-queries-index#versioning-queries) currently being edited. The live mode URL always stays the same, referencing the *shared_id* of the dashboard which stays the same across versions.

> [!primary]
> All URLs require to be [authenticated in the Project IAM and granted access to the dashboard](#grant-access-to-the-dashboard) to open them.

### How to publish a version?

A live version of a dashboard is published automatically based on the [deployed version of the repository](/pages/public_cloud/data_platform/product/am/queries/00-queries-index#versioning-queries) containing the dashboard and its queries (i.e. charts). 

#### If your dashboard repository has only one version

The dashboard is published **automatically at each modification**. 

This means that all modifications made by editors will be visible in real-time in the live dashboard.

> [!primary]
> Updates may take up to a few minutes to be visible in the live dashboard.

#### If your dashboard repository has two or more versions

The dashboard is **published automatically when a new version of the repository is deployed**. The live dashboard always corresponds to the version in the deployed repository. 

This means that the editors can work on one version of the dashboard, while the viewers accessing the live dashboard will not see the modifications until the new version is deployed by the editor.

## Grant access to the dashboard

Multiple viewers can be granted access to the live dashboard easily, without granting them the right to edit it.

> [!primary]
> First, note that both dashboard editors and viewers, will have to be registered in a Project's IAM in order to access it, even if they are external to the Platform. They will only access the data/dashboards associated to their [roles and groups](/pages/public_cloud/data_platform/product/iam/users/00-users-index).

The rest of this page aims to explain how to give read access to a live dashboard for your end-users. There are **two usual modes** for access control to a live dashboard.

### Basic access control

By default, you can easily give end-users **full read access** to dashboards (the charts, tables and data they contain) - without giving any direct querying rights on the underlying databases.

This is due to the *Basic* access control mode which is set by default in the dashboard's preferences.

![dashboards](images/access-control.png){.thumbnail}
 
With this mode, you give individual access to users or groups to the live dashboard as a whole. This means that **all data contained in the charts and filters will be visible to people who are granted access**, only from the live dashboard.

The *Grant access* section shows all the users/groups from the [Identity Access Manager](/pages/public_cloud/data_platform/product/iam/00-iam-index) that have either one of these roles: ***Admin***, or ***Dashboard Viewer*** set with a condition on the dashboard name. Those users can open and view the live dashboard.

![dashboards](images/grant-access-page.png){.thumbnail}

You can give access to new or existing users/groups from the *Grant access* tab. Click on **New user/group** and choose between *New user/group* and *Existing user/group*.

> [!warning]
> Please note that you must have `write` permissions on [IAM users](/pages/public_cloud/data_platform/product/iam/users/users) / [IAM groups](/pages/public_cloud/data_platform/product/iam/users/groups) to use this feature.

![dashboards](images/grant-access-add-user.png){.thumbnail} 

Selecting existing users will give them the [IAM role](/pages/public_cloud/data_platform/product/iam/users/roles) *Dashboard Viewer*, with a [condition](/pages/public_cloud/data_platform/product/iam/users/roles#set-up-a-condition-on-a-role-binding) set on this specific dashboard. They will get access to the whole dashboard's data **only from the live dashboard**.

![dashboards](images/grant-access-add-existing.png){.thumbnail} 

Adding a new user will add them in the Identity Access Manager with the role *Dashboard Viewer* (with a condition set on this specific dashboard) and automatically generate credentials for them (see details below). They will get access to the whole dashboard's data only from the live dashboard.

![dashboards](images/grant-access-add-new.png){.thumbnail} 

Since those users are usually external BI users and not the Platform users, they are likely to not need the Platform account. Instead,the Platform automatically generates a simple login and password for them through the **Project IAM's own authentication method** (called **Project**). 

With these credentials, automatically shared with them by email, they will be able to authenticate to the live dashboard's URL and view the dashboard.

### Fine-grained access control

> [!primary]
> This feature is coming soon!

## Go further

Join our [community of users](/links/community).