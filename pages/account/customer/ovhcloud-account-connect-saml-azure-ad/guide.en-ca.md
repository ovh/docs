---
title: Enabling Azure AD SSO connections with your OVHcloud account
slug: connect-saml-sso-azure-ad
excerpt: "Find out how to associate your Azure Active Directory to your OVHcloud account using SAML 2.0"
section: 'Advanced use'
order: 02
updated: 2023-04-05
---

**Last updated 5th April 2023**

## Objective

You can use **Single Sign-On** (SSO) to connect to your OVHcloud account. To enable these connections, your account and your Azure AD have to be configured using SAML (*Security Assertion Markup Language*) authentications.

**This guide explains how to associate your OVHcloud account with an external Azure AD.**

## Requirements

- Belong to the **Application Administrator** and **User Administrator** roles of an Azure AD service
- An [OVHcloud account](https://docs.ovh.com/ca/en/customer/create-ovhcloud-account/)
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca)

## Instructions

> [!primary]
>
> In order for a service provider (i.e. your OVHcloud account) to establish an SSO connection with an identity provider (i.e. your Azure AD), the essential part is to establish a mutual trust relationship by registering the SSO connection in both services.
>

### Azure AD Users and Groups

Your Azure AD acts as your identity provider. Authentication requests by your OVHcloud account will only be accepted if it is declared as a trusted party first.

Let's focus for a moment on the identities on the identity provider side.

#### Azure AD Users

To start, go to your Azure AD dashboard.

![Azure AD Doshboard](images/azure_ad_dashboard.png){.thumbnail}

Then click on `Users`{.action} from the left-hand menu.

![Azure AD Menu User](images/azure_ad_menu_user.png){.thumbnail}

Create as many users as you need, or you can just check your users clicking on them.

For this example, the user **John Smith** will be used.

![Azure AD User](images/azure_ad_user.png){.thumbnail}

When an SSO authentication is performed, **John Smith**'s identity will be provided by Azure AD to the OVHcloud account. However, it is necessary that this identity contains at least one group. If no group exists, let's look at how to create one to add **John Smith** to it.

#### Azure AD Groups

Click on `Groups`{.action} from the left-hand menu.

![Azure AD Menu Groups](images/azure_ad_menu_groups.png){.thumbnail}

Click on `New group`{.action} in the top menu, and fill in all the necessary information.

For this example, the group **manager@ovhcloudsaml** will be used.

![Azure AD Group step 1](images/azure_ad_group_1.png){.thumbnail}

Click on the `Create`{.action} button to display all information about this group.

![Azure AD Group step 2](images/azure_ad_group_2.png){.thumbnail}

Now, users who will be used for SSO authentication must be added to a group.

In this example, let's link the user **John Smith** with the group **manager@ovhcloudsaml**.

In the selected group interface, click on `Members`{.action} from the left-hand menu, then click `Add members`{.action} in the top menu.

![Azure AD Group User Assignment step 1](images/azure_ad_group_user_assignment_1.png){.thumbnail}

Select the user to be added to this group, then click on the `Select`{.action} button.

![Azure AD Group User Assignment step 2](images/azure_ad_group_user_assignment_2.png){.thumbnail}

Now we have a user assigned to a group.

In order to perform SSO authentications, an Azure AD application must be created.

SSO must be configured on this application.

### Azure AD applications

First of all, it is necessary to create an application if one does not yet exist.

#### Create an Azure AD application

Click on `Enterprise applications`{.action} from the left-hand menu.

![Azure AD Menu Applications](images/azure_ad_menu_applications.png){.thumbnail}

Click on `New application`{.action} in the top menu.

![Azure AD Applications step 1](images/azure_ad_applications_1.png){.thumbnail}

Click on `Create your own application`{.action} in the top menu.

![Azure AD Applications step 2](images/azure_ad_applications_2.png){.thumbnail}

Select the `Non-gallery`{.action} from the left-hand menu, and click on the `Create`{.action} button.

![Azure AD Applications step 3](images/azure_ad_applications_3.png){.thumbnail}

The details of the application will then be displayed.

![Azure AD Applications step 4](images/azure_ad_applications_4.png){.thumbnail}

The Azure AD application is now created. Users who want to perform SSO authentications via this application must now be added to it.

#### Azure AD application - User assignment

> [!primary]
>
> In order for a user to perform an SSO authentication from an Azure AD application, it must be added to that application. It is therefore shown here how to add a user to an Azure AD application.
>
> However, it is better to add a user group instead of users if you have **Azure AD Premium**.
>

Click on `Users and groups`{.action} from the left-hand menu, then click `Add user/group`{.action} in the top menu.

Click then on the `Users`{.action} section, select the user to add to the application, and click on the `Select`{.action} button.

![Azure AD Application User Assignment step 1](images/azure_ad_application_user_assignment_1.png){.thumbnail}

![Azure AD Application User Assignment step 2](images/azure_ad_application_user_assignment_2.png){.thumbnail}

The application is created, a user has been assigned, all that remains is to set up the SSO via SAML.

#### Azure AD application SSO

Get back to the overview via the `Overview`{.action} button from the left-hand menu, then click on the `Set up single sign on`{.action} section.

![Azure AD SSO step 1](images/azure_ad_sso_1.png){.thumbnail}

Click on the `SAML`{.action} section.

![Azure AD SSO step 2](images/azure_ad_sso_2.png){.thumbnail}

Click on `Upload metadata file`{.action} in the top menu.

![Azure AD SSO step 3](images/azure_ad_sso_3.png){.thumbnail}

Click on the `Select a file`{.action} icon button, select the OVHcloud Service Provider metadata file and click on the `Add`{.action} button.

You can obtain the appropriate metadata file via the following links:

- [EU region metadata](https://www.ovh.com/auth/sso/saml/sp/metadata.xml)
- [CA region metadata](https://ca.ovh.com/auth/sso/saml/sp/metadata.xml)

Download the metadata file, it will be necessary later.

![Azure AD SSO step 5](images/azure_ad_sso_5.png){.thumbnail}

The SAML configuration will be displayed.

![Azure AD SSO step 6](images/azure_ad_sso_6.png){.thumbnail}

In the `Attributes & Claims`{.action} section, click on the `Edit`{.action} button.

![Azure AD SSO step 9](images/azure_ad_sso_9.png){.thumbnail}

Click on `Add a group claim`{.action} in the top menu.

![Azure AD SSO step 10](images/azure_ad_sso_10.png){.thumbnail}

Select `Security groups`{.action}, and **Group ID** from the `Source attribute`{.action} and click on the `Save`{.action} button.

![Azure AD SSO step 11](images/azure_ad_sso_11.png){.thumbnail}

The **groups** claim should now appear in the list.

Copy and save the **Claim name** value somewhere (i.e a notepad), it will be necessary later.

![Azure AD SSO step 12](images/azure_ad_sso_12.png){.thumbnail}

In the `SAML certificates`{.action} section, copy the `App Federation Metadata Url`{.action} field value.

Use this link to download the Azure AD application metadata file in order to use it later in the OVHcloud account.

![Azure AD SSO step 8](images/azure_ad_sso_8.png){.thumbnail}

### Establishing OVHcloud account trust and configuring the connection

Adding your Azure AD application as a trusted identity provider is done in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca) where you can provide the identity provider metadata.

#### Establish OVHcloud trust

[Log in](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca) and click on your profile in the top-right corner.

![OVHcloud top menu](images/ovhcloud_top_menu.png){.thumbnail}

Click on your name to access your profile management page.

![OVHcloud user infos](images/ovhcloud_user_infos.png){.thumbnail}

Open the `User management`{.action} tab.

![OVHcloud profile menu](images/ovhcloud_profile_menu.png){.thumbnail}

Click on the `SSO connection`{.action} button.

![OVHcloud connect SSO step 1](images/ovhcloud_user_management_connect_sso_1.png){.thumbnail}

Fill in the **Group Attribute Name** field with the Azure AD application groups **Claim name** value saved before.

Fill in the XML metadata of your Azure AD application from the file saved before.

Click on the `Confirm`{.action} button.

![Ovhcloud SSO step 1](images/ovhcloud_sso_1.png){.thumbnail}

The trust of your Azure AD application as identity provider is thus established but you still have to add groups to your OVHcloud account.

> [!warning]
> If you try to connect at this stage via SSO, you will probably receive a `Not in valid groups` error message.
>
> That is because your OVHcloud account checks if the authenticating user belongs to a group that actually exists on the account.
>

To resolve this, check the "Group" attribute that your Azure AD application returns: the **Object Id** field.

#### OVHcloud groups declaration

![Azure AD Group step 2](images/azure_ad_group_2.png){.thumbnail}

Add it by clicking on the `Declare a group`{.action}.

![Ovhcloud user management groups step 1](images/ovhcloud_sso_menu_1.png){.thumbnail}

Fill in the fields, then click on the `Confirm`{.action} button.

![Ovhcloud user management groups step 2](images/ovhcloud_sso_menu_2.png){.thumbnail}

The created group should appear on the list.

![Ovhcloud user management groups step 3](images/ovhcloud_sso_menu_3.png){.thumbnail}

### Connect via SSO

On the [OVHcloud login page](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca), enter your [NIC handle](https://docs.ovh.com/ca/en/customer/create-ovhcloud-account/#what-is-my-nic-handle) followed by **/idp** without entering a password, and click the `Login`{.action} button.

![Ovhcloud SSO Login step 1](images/ovhcloud_sso_login_1.png){.thumbnail}

You are then redirected to your Azure AD application login page. Select `Use another account`{.action}.

![Azure AD Login step 1](images/azure_ad_login_1.png){.thumbnail}

Enter the Azure AD application user email and click on the `Next`{.action} button.

![Azure AD Login step 2](images/azure_ad_login_2.png){.thumbnail}

Enter the Azure AD application user password and click on the `Sign In`{.action} button.

![Azure AD Login step 3](images/azure_ad_login_3.png){.thumbnail}

You are now logged in with the same [NIC handle](https://docs.ovh.com/ca/en/customer/create-ovhcloud-account/#what-is-my-nic-handle), but via your Active Directory user and using your Azure AD application SSO.

![Ovhcloud SSO Login step 2](images/ovhcloud_sso_login_2.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.