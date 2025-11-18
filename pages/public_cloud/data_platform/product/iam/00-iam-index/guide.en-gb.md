---
title: "Identity Access Manager"
updated: 2025-02-15
---

## Objective

The Identity Access Manager (IAM) is the component used to **manage access-rights within Data Platform**. It exists as two separate and almost entirely independent modules, one at the **Organization-level** and one at the **Project-level**, for each [Organization](/pages/public_cloud/data_platform/product/organisations/00-organisations-index) and each [Project](/pages/public_cloud/data_platform/product/project/00-project-index) respectively. 

> [!primary]
> While the Organization IAM centralizes the management your Organization members' high-level access rights, the Project IAM allows you to manage not only fine-grained resource access for team members but also your end-users and their authentication to your Project's applications. 

![access-iam](images/homepage-iam2.png){.thumbnail}

In the [Organization IAM](/pages/public_cloud/data_platform/product/iam/orga-iam/00-orga-iam-index) you will be able to:

* Set-up **authentication providers** to enable single-sign-on to your Data Platform [Organization](/pages/public_cloud/data_platform/product/organisations/00-organisations-index) via external solutions.
* Enforce multi-factor authentication (MFA) in your Organization
* Manage Organization members **access-rights to the Organization-level resources** and settings.

In the [Project IAM](/pages/public_cloud/data_platform/product/iam/project-iam/00-project-iam-index) you will be able to:

* Use a very granular role-based access control system (RBAC) to **manage team members and end-users access-rights to the [Project](/pages/public_cloud/data_platform/product/project/00-project-index)'s resources and data**.
* Define login pages for deployed **applications**.
* Set-up **authentication providers** to enable login to application via external solutions.

[Learn more about the specificities of the Organization-level IAM](/pages/public_cloud/data_platform/product/iam/orga-iam/00-orga-iam-index)

[Learn more about the specificities of the Project-level IAM](/pages/public_cloud/data_platform/product/iam/project-iam/00-project-iam-index)

## Users and roles

The Identity Access Manager lets you manage your access rights thanks to three different levels: 
* **users/service accounts**: they are either team members working on your Project or end-users of your applications
* **groups**: they represent teams, each having its specific members and set of roles
* **roles**: they are the access rights, which can be given either a user/service account or to a group

[Learn more about users and roles](/pages/public_cloud/data_platform/product/iam/users/00-users-index)

## Authentication Providers

In the **Auth. Provider** tab, you can set-up & configure additional providers on top of the ones available by default. This allows you to connect to external directories of users, such as your company's active directory.

Each authentication provider requires a specific configuration depending on the type of provider selected, whether its an SSO provider such as *SAML*, *JWT* or *OpenID* or a multi-factor authentication (MFA) provider such *Google Authenticator* or *SMS*.

> [!primary]
>the Platform offers **3 providers by default** - *the Platform IDs*, *Project IDs* and *API/Secret Keys* - which will be added to all new applications. When adding new providers, make sure to edit your applications' authentication configurations to make the provider is available to users in the login menu of the application.

This tab is also where [multi-factor authentication (MFA)](/pages/public_cloud/data_platform/product/iam/project-iam/auth-provider/00-auth-provider-index#enable-multi-factor-authentication-mfa) is managed. MFA is only available for the *Project ID* authentication method. For external authentication providers, the best practice is to directly use the MFA features of the external provider.

[Set-up authentication providers](/pages/public_cloud/data_platform/product/iam/project-iam/auth-provider/00-auth-provider-index)

## Applications

Any deployed application in a Project will be visible in the **Applications** tab of a Project-level IAM. Through that tab you will be able to define a specific login page for the applications, in particular this means:

* Changing the application login information such as the page design & access URL
* Choosing authentication modes by selecting from the authentication providers list

[Manage applications login pages](/pages/public_cloud/data_platform/product/iam/project-iam/application/00-application-index)

## Go further

Join our [community of users](/links/community).