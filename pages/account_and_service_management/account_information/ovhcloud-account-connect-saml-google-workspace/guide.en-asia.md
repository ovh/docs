---
title: Enabling Google Workspace SSO connections with your OVHcloud account
excerpt: "Learn how to associate your Google Workspace service with your OVHcloud account via SAML 2.0"
updated: 2024-07-05
---

## Objective

You can use **Single Sign-On** (SSO) to sign in to your OVHcloud account. To enable these connections, your account and Google Workspace accounts have to be using SAML (*Security Assertion Markup Language*) authentication.

**This guide explains how to associate your OVHcloud account with an external Google Workspace service.**

## Requirements

- Being an administrator of a Google Workspace service
- An [OVHcloud account](/pages/account_and_service_management/account_information/ovhcloud-account-creation)
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia)

## Instructions

> [!primary]
>
> In order for a service provider (i.e. your OVHcloud account) to establish an SSO connection with an identity provider (i.e. your Google Workspace service), the key is to establish a mutual trust relationship by registering the SSO connection in both services.
>

### Registering OVHcloud into Google Workspace

Your Google Workspace acts as an identity provider. Requests to authenticate your OVHcloud account will only be accepted if you have first declared it as a trusted third party.

This means that it must be added as `Web and mobile apps`.

Log in to the [Google Workspace](https://admin.google.com) administration interface with your administrator account.

Go to `Apps`{.action} then `Web and mobile apps`{.action}.

![Add Web or mobile app](images/google_workspace_web_mobile_add_saml_app.png){.thumbnail}

Click `Add app`{.action} then `Add custom SAML app`{.action}.

In the "App details" step, add a name for this interconnection, **OVHcloud** for example. Click `Continue`{.action}.

![Add SAML Application, Step 1](images/google_workspace_web_mobile_add_saml_app_step1.png){.thumbnail}

In the step "Google Identity Provider details", download the metadata file by clicking `Download metadata`{.action} then click `Continue`{.action}.

![Add SAML Application, Step 2](images/google_workspace_web_mobile_add_saml_app_step2.png){.thumbnail}

In the step "Service provider details", complete the `ACS URL` and `Entity ID` fields with the values for your region: 

- EU region: **ACS URL**: `https://www.ovhcloud.com/eu/auth/saml/acs` and **Entity ID**: `https://www.ovhcloud.com/eu/auth/`
- CA region: **ACS URL**: `https://www.ovhcloud.com/ca/auth/saml/acs` and **Entity ID**: `https://www.ovhcloud.com/ca/auth/`

Click `Continue`{.action}.

![Add SAML application, step 3](images/google_workspace_web_mobile_add_saml_app_step3.png){.thumbnail}

In the "Attribute mapping" step, add the following mapping:

- **First Name**: Name
- **Last Name**: Surname
- **Primary email**: E-mail Address

Click `Finish`{.action}.

![Add SAML application, step 4](images/google_workspace_web_mobile_add_saml_app_step4.png){.thumbnail}

Enable access to this application by clicking `OFF for everyone`{.action} in the "User access" section. Click `ON for everyone`{.action} then the `SAVE`{.action} button.

![Enable app for all users](images/google_workspace_web_mobile_enable_app1.png){.thumbnail}

![Enable app for all users](images/google_workspace_web_mobile_enable_app2.png){.thumbnail}

> [!primary]
>
> Adding application access to users can take several hours to take effect.
>

Your Google Workspace service now trusts OVHcloud as a service provider. The next step is to ensure that the OVHcloud account trusts your Google Workspace as an identity provider.

### Registering Google Workspace into the OVHcloud account and configuring the connection

To add Google workspace as a trusted identity provider, you need to provide the identity provider metadata in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia).

Click your account name in the top-right corner, then on your name again in the sidebar.

![Access to the IAM menu](images/access_to_the_IAM_menu_01.png){.thumbnail}

You can access the IAM menu via the dedicated entry in your Control Panel.

![Access to the IAM menu](images/access_to_the_IAM_menu_02.png){.thumbnail}

Then click on the `Identities`{.action} tab to access local users management.

![Access to the IAM menu](images/access_to_the_IAM_menu_03.png){.thumbnail}

Click the `SSO connection`{.action} button.

![OVHcloud SSO connection step 1](images/ovhcloud_user_management_connect_sso_1.png){.thumbnail}

Fill in the XML metadata of your Google Workspace service. Enter `Name` as the "User Attribute Name" and `Group` as the "Group Attribute Name". Click `Confirm`{.action}.

You can keep local users by ticking the `Keep active OVHcloud users` box.

![OVHcloud SSO connection step 2](images/ovhcloud_user_management_connect_sso_2.png){.thumbnail}

Now you need to retrieve your Google Workspace as identity provider, as well as default groups.

![OVHcloud SSO connection step 3](images/ovhcloud_user_management_connect_sso_3.png){.thumbnail}

For more information, click on the link under “SSO Service URL”.

![OVHcloud SSO connection step 4](images/ovhcloud_user_management_connect_sso_4.png){.thumbnail}

The `...`{.action} button allows you to update or delete the SSO, and view its details.

![OVHcloud SSO connection step 5](images/ovhcloud_user_management_connect_sso_5.png){.thumbnail}

Your Google Workspace is now considered a trusted identity provider. However, you still need to add groups to your OVHcloud account.

> [!warning]
> If you try to connect via SSO at this point, you will probably receive a `Not in valid groups` error message.
>
> That is because your OVHcloud account checks whether the authenticating user belongs to an existing group on the account.
>

To resolve this, authorise the groups that will be transmitted from Google Workspace to OVHcloud. These groups are the same as those used to categorise your users.

To do this, log on to the [Google Workspace](https://admin.google.com) administration interface with your administrator account.

Go to `Apps`{.action} then `Web and mobile apps`{.action}.

![Manage web and mobile apps](images/google_workspace_web_mobile_add_saml_app.png){.thumbnail}

Click on the line for the application you added in the previous step.

![List of web and mobile apps](images/google_workspace_web_mobile_list_app.png){.thumbnail}

Click `SAML attribute mapping`{.action} to edit the mapping of information shared between Google Workspace and OVHcloud.

![SAML Application Detail](images/google_workspace_web_mobile_show_app.png){.thumbnail}

In the "Group membership (optional)" section, add any groups that you want to allow to connect to OVHcloud. In the "App attribute" field, enter `Group`.

You must then assign **roles** to these user groups at OVHcloud. Otherwise, your OVHcloud account does not know what the user is allowed to do and, by default, no rights are assigned.

![Configuring user groups](images/google_workspace_web_mobile_setup_groups.png){.thumbnail}

From the OVHcloud Control Panel, add a group by clicking the `Declare a group`{.action} button and filling in the fields:

- **Group name**: Group name within Google Workspace
- **Role**: Level of rights granted to this group

![Google Workspace User Management Groups](images/ovhcloud_user_management_groups_1.png){.thumbnail}

![Google Workspace User Management Groups](images/ovhcloud_user_management_groups_2.png){.thumbnail}

You can then verify that the group is added to your OVHcloud account in the "Groups" section:

![Google Workspace User Management Groups](images/ovhcloud_user_management_groups_3.png){.thumbnail}

When you later log in with a user from the **Intern** group, your OVHcloud account will recognise that the user has the role "UNPRIVILEGED" specified by his group.

Warning: if you give the `NONE` privilege, you will need to assign permissions to this group via the [IAM policies](/pages/account_and_service_management/account_information/iam-policy-ui).

You will then be able to log out of your account and log back in with your Google Workspace as an identity provider.

### Connecting via SSO

On [the OVHcloud login page](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia), enter your [login](/pages/account_and_service_management/account_information/ovhcloud-account-creation#what-is-my-nic-handle) followed by **/idp** without a password and click the `Login`{.action} button.

![Connection to OVHcloud federation](images/ovhcloud_federation_login_1.png){.thumbnail}

You are then redirected to your Google Workspace login page. Enter the login and password for a user of your Google Workspace, then click the `Sign in`{.action} button.

![OVHcloud Federation login Redirection Google Workspace](images/ovhcloud_federation_login_2.png){.thumbnail}

You are now logged in with the same customer ID, but through your Google Workspace user.

![OVHcloud User Info Federation](images/ovhcloud_user_infos_federation.png){.thumbnail}

## Go further

[Creating an OVHcloud account](/pages/account_and_service_management/account_information/ovhcloud-account-creation)

[Securing my OVHcloud account and managing my personal information](/pages/account_and_service_management/account_information/all_about_username)

[Setting and managing your account password](/pages/account_and_service_management/account_information/manage-ovh-password)

[Securing your OVHcloud account with two-factor authentication](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa)

[How to use IAM policies using the OVHcloud Control Panel](/pages/account_and_service_management/account_information/iam-policy-ui).

Join our community of users on <https://community.ovh.com/en/>.
