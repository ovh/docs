---
title: "Authentication page of an application"
updated: 2025-02-15
---

## Objective

The authentication page is an important part of your Platform application: it is the page on which users will log in in order to reach the content of the app. 

The [Auth. Provider](/pages/public_cloud/data_platform/product/iam/project-iam/auth-provider/00-auth-provider-index) tab in your IAM lets you configure which authentication methods can be used in your Project. Authentication methods can then be [displayed or hidden](#display-an-authentication-provider-on-an-application-login-page) to visually customize your login page.

* [Display an authentication provider on an application login page](#display-an-authentication-provider-on-an-application-login-page)
* [Link to a specific authentication method](#link-to-a-specific-authentication-provider)

## Display an authentication provider on an application login page

Click on **Applications** and edit the desired application.

![Permissions](images/applications2.png){.thumbnail}

Locate the panel **Authentication Mode**

![Permissions](images/authentication-mode21.png){.thumbnail}

Add your new provider if it doesn't appear automatically. Make sure the authentication providers of your choice are not set as *hidden*. Those who are will not be visible from the application's login page.

![Permissions](images/authentication-mode22.png){.thumbnail}

> [!warning]
> It is not possible to **deactivate** an authentication provider for a specific application. For instance, a user who is already logged in through Azure AD will still be able to access the application even if Azure AD is set as hidden on the application login page.

## Link to a specific authentication provider

You can generate URL links to reach a specific authentication page for your application, even if you have several authentication providers active on your Project. You will need:

- your app URL
- your authentication method's ID 

You can get your app URL in the IAM settings of your application:

![Permissions](images/app-url2.png){.thumbnail}

You can get your authentication provider's ID by going to its settings page in the IAM and looking at the URL:

![Permissions](images/auth-url2.png){.thumbnail}

To reach a specific authentication page for your application, use the URL link:  

> [!primary]
> **your-app-URL**#/?auth_mode_id=**your-auth-method-ID**

> [!warning]
> This link is currently only valid for applications created from the [App Manager](/pages/public_cloud/data_platform/product/app-manager/00-app-manager-index), not for the 'Project' application.

Shortcuts:

- Another ID for the [*the platform account*](/pages/public_cloud/data_platform/product/iam/project-iam/auth-provider/00-auth-provider-index#forepaas) authentication method is `king`
- Another ID for the [*Project*](/pages/public_cloud/data_platform/product/iam/project-iam/auth-provider/00-auth-provider-index#dataplant) authentication method is `password`

## Go further

Join our [community of users](/links/community).