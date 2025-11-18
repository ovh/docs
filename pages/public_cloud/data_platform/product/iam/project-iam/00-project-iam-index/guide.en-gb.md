---
title: "Project IAM"
updated: 2025-02-15
---

## Objective

The Project IAM centralizes the management of your **team member access to project resources** and **your end-users and their authentication** to your Project's applications. 

![access-iam](images/homepage-iam.png){.thumbnail}

In the Project IAM you will be able to:

* Define login pages for deployed **applications**.
* Set-up **authentication providers** to enable login to the Project via external solutions.
* Use our very granular access control system to [manage team members and end-users access-rights to the Project's resources](/pages/public_cloud/data_platform/product/iam/users/00-users-index).

## Applications

Any deployed application in the Platform will be visible in the **Applications** tab. Through that tab you will be able to define a specific login page for the applications, in particular this means:

* Changing the application login information such as the page design & access URL
* Choosing authentication modes by selecting from the authentication providers list

[Manage applications login pages](/pages/public_cloud/data_platform/product/iam/project-iam/application/00-application-index)

## Authentication Providers

In the **Auth. Provider** tab, you can set-up & configure additional providers on top of the ones available by default. This allows you to connect to external directories of users, such as your company's active directory.

Each authentication provider requires a specific configuration depending on the type of provider selected, whether its an SSO provider such as *SAML*, *JWT* or *OpenID* or a multi-factor authentication (MFA) provider such *Google Authenticator* or *SMS*.

> [!primary]
>The Platform offers **3 providers by default** - *the platform Platform IDs*, *Project IDs* and *API/Secret Keys* - which will be added to all new applications. When adding new providers, make sure to edit your applications' authentication configurations to make the provider is available to users in the login menu of the application.

This tab is also where [multi-factor authentication (MFA)](/pages/public_cloud/data_platform/product/iam/project-iam/auth-provider/00-auth-provider-index#enable-multi-factor-authentication-mfa) is managed. MFA is only available for the *Project ID* authentication method. For external authentication providers, the best practice is to directly use the MFA features of the external provider.

[Set-up authentication providers](/pages/public_cloud/data_platform/product/iam/project-iam/auth-provider/00-auth-provider-index)

## Go further

Join our [community of users](/links/community).