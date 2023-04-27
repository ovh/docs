---
title: Enabling Okta SSO connections with your OVHcloud account
slug: connect-saml-sso-okta
excerpt: "Learn how to associate your Okta service with your OVHcloud account via SAML 2.0"
section: 'Advanced use'
updated: 2023-04-18
---

## Objective

You can use **Single Sign-On** (SSO) to connect to your OVHcloud account. To enable these connections, your account and your Okta accounts have to be configured using SAML (*Security Assertion Markup Language*) authentications.

**This guide explains how to associate your OVHcloud account with an external Okta service.**

## Requirements

- Being an administrator of an Okta service
- An [OVHcloud account](/pages/account/customer/ovhcloud-account-creation)
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg)

## Instructions

> [!primary]
>
> In order for a service provider (i.e. your OVHcloud account) to establish an SSO connection with an identity provider (i.e. your Okta service), the key is to establish a mutual trust relationship by registering the SSO connection in both services.
>

### Registering OVHcloud into Okta

Your Okta service acts as an identity provider. Requests to authenticate your OVHcloud account will only be accepted if you have first declared it as a trusted third party.

This means that it must be added to `Applications`.

Log in to the Okta administration interface with your administrator account.

Go to `Applications`{.action} then again `Applications`{.action}.

![Add SAML Application, Step 1](images/OKTA_add_application_step1.png){.thumbnail}

Click `Create App Integration`{.action} and select `SAML 2.0`{.action}.

![Add SAML Application, Step 2](images/OKTA_add_application_step2.png){.thumbnail}

In the "General Settings" step, add a name for this application, **OVHcloud** for example, and a logo if you want. Click `Next`{.action}.

![Add SAML Application, Step 3](images/OKTA_add_application_step3.png){.thumbnail}

In the step "Configure SAML", complete the `Single sign-on URL` and `Audience URI` fields with the values for your region: 

- EU region: **Single sign-on URL**: `https://www.ovhcloud.com/eu/auth/saml/acs` and **Audience URI**: `https://www.ovhcloud.com/eu/auth/`
- CA region: **Single sign-on URL**: `https://www.ovhcloud.com/ca/auth/saml/acs` and **Audience URI**: `https://www.ovhcloud.com/ca/auth/`

![Add SAML Application, Step 4](images/OKTA_add_application_step4.png){.thumbnail}

Then set the following `Attribute Statements`:

- **Name**: `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn` and **Value**: `user.login`
- **Name**: `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` and **Value**: `user.email`
- **Name**: `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name` and **Value**: `user.displayName`

Set these `Group Attribute Statements`:

- **Name**: `groups` and **Filter**: `Matches regex:.*` (Adapt the filter if you want to be more specific)

Click `Next`{.action}.

![Add SAML application, step 5](images/OKTA_add_application_step5.png){.thumbnail}

In the "Feedback" step, select the according option and click `Finish`{.action}.

Then open the application and go to the "Assignments" tab and assign users or groups to the application.

![Assign users](images/OKTA_add_user.png){.thumbnail}

Before going to the next section, go to the "Sign On" tab, and access to the **Metadata URL** and save the provided XML file.

![Retrieve metadata](images/OKTA_retrieve_metadata.png){.thumbnail}

Your Okta service now trusts OVHcloud as a service provider. The next step is to ensure that the OVHcloud account trusts your Okta as an identity provider.

### Registering Okta into the OVHcloud account and configuring the connection

To add Okta as a trusted identity provider, you need to provide the identity provider metadata in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg).

Once logged in, click your profile at the top right.

![Top menu OVHcloud](images/ovhcloud_top_menu.png){.thumbnail}

Click on your name to access your profile management page.

![OVHcloud User Information](images/ovhcloud_user_infos.png){.thumbnail}

Open the `User Management`{.action} tab.

![OVHcloud menu profile](images/ovhcloud_profile_menu.png){.thumbnail}

Click the `SSO connection`{.action} button.

![OVHcloud SSO connection step 1](images/ovhcloud_user_management_connect_sso_1.png){.thumbnail}

Fill in the XML metadata of your Okta service. Enter `groups` as the "Group Attribute Name". Click `Confirm`{.action}.

![OVHcloud SSO connection step 2](images/ovhcloud_add_federation.png){.thumbnail}

Now you need to retrieve your Okta as identity provider, as well as default groups.

![OVHcloud SSO connection step 3](images/ovhcloud_add_federation_success.png){.thumbnail}

For more information, click on the link under “SSO Service URL”.

![OVHcloud SSO connection step 4](images/ovhcloud_idp_details.png){.thumbnail}

The `...`{.action} button allows you to update or delete the SSO, and view its details.

![OVHcloud SSO connection step 5](images/ovhcloud_user_management_connect_sso_5.png){.thumbnail}

Your Okta service is now considered a trusted identity provider. However, you still need to add groups to your OVHcloud account.

> [!warning]
> If you try to connect via SSO at this point, you will probably receive a `Not in valid groups` error message.
>
> That is because your OVHcloud account checks whether the authenticating user belongs to an existing group on the account.
>

You must then assign **roles** to Okta user groups at OVHcloud. Otherwise, your OVHcloud account does not know what the user is allowed to do and, by default, no rights are assigned.

From the OVHcloud Control Panel, add a group by clicking the `Declare a group`{.action} button and filling in the fields:

- **Group name**: Group name within Okta
- **Role**: Level of rights granted to this group

![Okta User Management Groups](images/ovhcloud_user_management_groups_1.png){.thumbnail}

![Okta User Management Groups](images/ovhcloud_user_management_groups_2.png){.thumbnail}

You can then verify that the group is added to your OVHcloud account in the "Groups" section:

![Okta User Management Groups](images/ovhcloud_user_management_groups_3.png){.thumbnail}

When you later log in with a user from the **Intern** group, your OVHcloud account will recognise that the user has the role "UNPRIVILEGED" specified by his group.

You will then be able to log out of your account and log back in with your Okta as an identity provider.

### Connecting via SSO

On [the OVHcloud login page](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg), enter your [login](/pages/account/customer/ovhcloud-account-creation#what-is-my-nic-handle) followed by **/idp** without a password and click the `Login`{.action} button.

![Connection to OVHcloud federation](images/ovhcloud_federation_login_1.png){.thumbnail}

You are then redirected to your Okta login page. Enter the login and password for a user of your Okta, then click the `Sign in`{.action} button.

![OVHcloud Federation login Redirection Okta](images/OKTA_login.png){.thumbnail}

You are now logged in with the same customer ID, but through your Okta user.

![OVHcloud User Info Federation](images/ovhcloud_user_infos_federation.png){.thumbnail}

## Go further

[Creating an OVHcloud account](/pages/account/customer/ovhcloud-account-creation)

[Securing my OVHcloud account and managing my personal information](/pages/account/customer/all_about_username)

[Setting and managing your account password](/pages/account/customer/manage-ovh-password)

[Securing your OVHcloud account with two-factor authentication](/pages/account/customer/secure-ovhcloud-account-with-2fa)

Join our community of users on <https://community.ovh.com/en/>.