---
title: "Users, Groups and Roles"
updated: 2025-02-15
---

## Objective

On Data Platform, the Identity Access Manager is used to manage the authentication and authorization of both the people who work on a Project and the people who consume data applications deployed. 

You can manage all the access rights for your users and teammates with a simple tool: [roles](/pages/public_cloud/data_platform/product/iam/users/roles). These roles are either permissions on certain data seen from applications for your end-users, or permissions to read or edit certain components of the Project for your teammates. 

Roles can be individually assigned to [users](/pages/public_cloud/data_platform/product/iam/users/users), which include both team members and application end-users. [Service accounts](/pages/public_cloud/data_platform/product/iam/users/users) are a specific type of user that are not associated with physical persons but rather with non-human users such as servers or workloads.

Both users and service accounts can be part of [groups](/pages/public_cloud/data_platform/product/iam/users/groups). Groups are a way to quickly and efficiently assign a set of roles to all the users and service accounts that they contain.

> [!primary]
> Note that Service Accounts are only available in the Project IAM.

## Roles

Roles are the objects granted to principals that allow them to perform specific actions on resources or data.

Learn more about roles and how to manage them below.

[Manage roles](/pages/public_cloud/data_platform/product/iam/users/roles)

## Users

Users represent both:

- one of your team member working on a Project (a Project) and needing access to Project resources
- one of your end-users who has access to a data application deployed (a dashboard, a custom app, etc.), with a specific data access level

Learn more about users and how to manage them below.

[Manage users](/pages/public_cloud/data_platform/product/iam/users/users)

## Service accounts

Service accounts are a specific type of user that are not associated with physical persons but rather with non-human users such as API consumers, remote server access, scripts, and other automated entities. They **do not exist in the Organization IAM**, only in the Project IAM.

Learn more about service accounts and how to manage them below.

[Manage service accounts](/pages/public_cloud/data_platform/product/iam/users/service-accounts)

## Groups

Groups can contain multiple users and service accounts. They are a way to quickly and efficiently assign a set of roles to all the users and service accounts that they contain.

Learn more about groups and how to manage them below.

[Manage groups](/pages/public_cloud/data_platform/product/iam/users/groups)

## Go further

Join our [community of users](/links/community).