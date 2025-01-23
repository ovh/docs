---
title: "Consumers"
updated: 2025-02-15
---

## Objective

In the Analytics Manager, you can connect **external analytics consumers** to be able to create rich data visualization reports on top of your Platform data using your own favorite BI tool.

![consumer](images/consumers-home.png){.thumbnail}

Users connecting from the external analytics tool will be authenticated through your [Project's Identity Access Manager (IAM)](/pages/public_cloud/data_platform/product/iam/00-iam-index) and allowed to access only the parts of your data system (tables or queries) that they have [IAM permissions](/pages/public_cloud/data_platform/product/iam/users/roles) on. The imported data will be processed and sent by your Project's [query engine](/pages/public_cloud/data_platform/product/am/resources).

> [!primary]
> It is necessary to activate a [query engine](/pages/public_cloud/data_platform/product/am/resources) in order to connect and use a consumer.

- [Create a consumer](#create-a-consumer)
- [Manage permissions for a consumer's users](#manage-permissions-for-a-consumer39s-users)

## Create a consumer

To create a consumer, click on **New consumer**. 

![consumer](images/consumers-add.png){.thumbnail}

Choose the consumer that you want to connect.

> [!primary]
> For the moment, you can only connect each type of consumer once.

![consumer](images/consumers-add2.png){.thumbnail}

Upon confirming, the new consumer will be added as a new [IAM application](/pages/public_cloud/data_platform/product/iam/project-iam/application/00-application-index) in your Project, with the OAuth redirect URLs and secrets automatically pre-configured for the connector to work.

This means that you can manage the same aspects as an IAM application for an analytics consumer, including the [authentication mode(s)](/pages/public_cloud/data_platform/product/iam/project-iam/application/00-application-index#authentication-mode).

![consumer](images/consumers-auth-modes.png){.thumbnail} 

[Connect a Power BI consumer](/pages/public_cloud/data_platform/product/am/consumers/power-bi)

## Manage permissions for a consumer's users

The consumer's users are the people that will be using the external BI tool and connect to the Platform Project to read its data.  

By default, you can easily give them **full access** to queries, tables and data from the Analytics Manager interface - but you can also manage more **fine-grained** permissions for each user in the [Identity Access Manager (IAM)](/pages/public_cloud/data_platform/product/iam/00-iam-index).

> [!warning]
> All users that will use the Platform as the source of data, even if they are external to the Platform, will have to be registered in a Project's IAM in order to access its data. They will only access the data associated to their [roles and groups](/pages/public_cloud/data_platform/product/iam/users/00-users-index).

![consumer](images/consumers-users.png){.thumbnail} 

The *Grant permissions* section shows all the users from the Identity Access Manager that have either one of these roles: ***Admin*** or ***Analytics Consumer***. Those users have **access to the Project's data from any external consumer**.

> [!warning]
> It is impossible to restrict access to only one consumer. In other words, if a user has the permissions to access tables and data (typically through the IAM role *Analytics Manager*), they will be able to access it from any external consumer.

You can give access to new or existing users from the *Grant permissions* tab. Click on **New user** and choose between *New user* and *Existing user*.

![consumer](images/consumers-add-user.png){.thumbnail} 

Selecting existing users from the Identity Access Manager will give them the role *Analytics Consumer*. They will have full access to the Project's entire data from any external consumer. 

![consumer](images/consumers-add-existing.png){.thumbnail} 

Adding a new user will add them in the Identity Access Manager with the role *Analytics Consumer*, and automatically generate credentials for them (see details below). They will have full access to the Project's entire data from any external consumer.

> [!primary]
> You can also manage more **fine-grained** access control for each user in the [Identity Access Manager (IAM)](/pages/public_cloud/data_platform/product/iam/00-iam-index).

![consumer](images/consumers-add-new.png){.thumbnail} 

Since those users are usually external BI users and not the Platform users, they are likely to not need the Platform account. Instead,the Platform automatically generates a simple login and password for them through the **Project IAM's own authentication method** (called **Project**). 

With these credentials, automatically shared with them by email, they will be able to authenticate from the external tool's interface and access the data matching the role permissions that were attributed to them.

## Go further

Join our [community of users](/links/community).