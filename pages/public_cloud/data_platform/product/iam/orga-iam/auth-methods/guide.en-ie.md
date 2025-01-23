---
title: "Authentication Settings"
updated: 2025-02-15
---

## Objective

In the Authentication Settings tab you can set global authentication and login requirements and configurations for users of the organization.

![auth-settings](images/auth-settings.png){.thumbnail}

* [Setting up a Single-Sign-On provider](#setting-up-a-single-sign-on-provider)
* [Enforcing Multi-Factor Authentication](#enforcing-multi-factor-authentication)
* [Allow users to request to join organization](#allow-users-to-request-to-join-organization)

## Setting up a Single-Sign-On provider

### Setup

You can configure an external Single-Sign-On provider that can be used instead of their Data Platform account to validate the credentials of all users upon login.

To do so, first click on **+ Add Authentication provider** under the *Enterprise Authentication* section.

![add provider](images/auth-settings2.png){.thumbnail}

Next, choose a [compatible authentication provider](/pages/public_cloud/data_platform/product/iam/project-iam/auth-provider/00-auth-provider-index#list-of-authentication-providers) from our list.

![provider list](images/provider-list.png){.thumbnail}

After confirming your choice, you will have to configure your provider.

![provider config](images/provider-config.png){.thumbnail}

Once your provider is configured, it is operational ready-to-use.

![provider added](images/provider-added.png){.thumbnail}

### Enforcing SSO-login for all users

If your security needs require all your organization users to login using your enterprise SSO, you can enforce this login method by activating the *disable all other login methods* option.

![disable all other login methods](images/enforce-sso-toggle.png){.thumbnail}

> [!warning]
> Note that if you do not configure your provider properly and then disable all other login options, you will lock all unauthenticated users out of the platform. Therefore, be sure to properly configure your provider before disabling the other login methods.

## Enforcing Multi-Factor Authentication

You can also require all users to setup and use Multi-Factor-Authentication (MFA) work on projects by checking the *Enforce MFA for all Data Platform accounts* option. 

![mfa toggle](images/mfa-toggle.png){.thumbnail}

Activating this option will require all organization users to verify a phone number of their choice before working on any project on Data Platform.

## Allow users to request to join organization

To avoid having to add many users that share the same email domain (e.g. your company's email domain), you can add a domain as *allowed to request to join*. Do this by typing the desired domain in the box indicated below and clicking on ENTER.

![request to join domain](images/request-to-join.png){.thumbnail}

## Go further

Join our [community of users](/links/community).