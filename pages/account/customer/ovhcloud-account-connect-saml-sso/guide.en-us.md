---
title: Enabling SSO connections with your OVHcloud account
slug: connect-saml-sso
excerpt: "Find out how to link your ADFS to your OVHcloud account using SAML 2.0"
Section: 'Advanced use'
order: 1
---

**Last updated 13th October 2022**

## Objective

You can use **single sign-on** (SSO) to connect to your OVHcloud account. To enable these connections, your account and your Active Directory Federation Services (ADFS) have to be configured using Security Assertion Markup Language (SAML) authentications.

**This guide explains how to link your OVHcloud account to an external Active Directory.**

## Requirements

- Active Directory Federation Services (ADFS) running on your server
- An [OVHcloud account](https://docs.ovh.com/us/en/customer/create-ovhcloud-account/)
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we)

## Instructions

> [!primary]
>
> In order for a service provider (i.e. your OVHcloud account) to perform an SSO connection with an identity provider (i.e. your ADFS), the essential part is to establish a mutual trust relationship.
>

### Establishing ADFS trust

Your ADFS acts as your identity provider. Authentication requests by your OVHcloud account will only be accepted if it is declared as a trusted party first.

In the Active Directory context, this means adding it as `Relying Party Trust`.

From your Server Manager, open the `Tools`{.action} menu and select `AD FS Management`{.action}.

![Windows Server tools menu](images/windows_server_tools_menu.png){.thumbnail}

Click on `Relying Party Trusts`{.action}.

![ADFS Menu](images/adfs_menu.png){.thumbnail}

Then click on `Add Relying Party Trust...`{.action}.

![ADFS relying party trusts menu](images/adfs_relying_party_trusts_menu.png){.thumbnail}

Select `Claims aware`{.action} and confirm with the `Start`{.action} button.

![ADFS add relying party trust step 1](images/adfs_add_relying_party_trust_1.png){.thumbnail}

Here you can enter the relying party information manually or import it from a metadata file.

#### Importing the OVHcloud SP metadata

You can obtain the appropriate metadata file via the following links:

- [EU region metadata](https://www.ovh.com/auth/sso/saml/sp/metadata.xml)
- [CA region metadata](https://ca.ovh.com/auth/sso/saml/sp/metadata.xml)

Select `Import data about the relying party from a file`{.action} and select your metadata file.

Then click the `Next`{.action} button.

![ADFS add relying party trust step 2](images/adfs_add_relying_party_trust_2.png){.thumbnail}

Enter a display name for the relying party and click the `Next`{.action} button.

![ADFS add relying party trust step 3](images/adfs_add_relying_party_trust_3.png){.thumbnail}

Click `Next`{.action} in the Access Control window.

![ADFS add relying party trust step 4](images/adfs_add_relying_party_trust_4.png){.thumbnail}

Click `Next`{.action} again to proceed.

![ADFS add relying party trust step 5](images/adfs_add_relying_party_trust_5.png){.thumbnail}

Click the `Close`{.action} button in the last window. The OVHcloud relying party trust is now added to your ADFS.

![ADFS relying party trusts](images/adfs_relying_party_trusts.png){.thumbnail}

> [!primary]
>
> With OVHcloud added as trusted relying party, you should be able to log in via an SSO connection already. However, any information about the identity of the user (in terms of the SAML "assertion") will remain unavailable until you configure a policy to map Active Directory LDAP fields to the attributes in the SAML assertion.
>


#### Mapping LDAP attributes to SAML attributes

Click on the OVHcloud relying party trust entry.

![ADFS relying party trust mapping step 1](images/adfs_relying_party_trusts_mapping_1.png){.thumbnail}

Then click on `Edit Claim Issuance Policy...`{.action}.

![ADFS relying party trust mapping step 2](images/adfs_relying_party_trusts_mapping_2.png){.thumbnail}

Click the `Add Rule...`{.action} button.

![ADFS relying party trust mapping step 3](images/adfs_relying_party_trusts_mapping_3.png){.thumbnail}

Click `Next`{.action}.

Enter a rule name, then define your mapping.

Select "Active Directory" as "Attribute store".

> [!primary]
>
> The following settings can be configured freely, but there are some standards to respect to make sure Active Directory LDAP data can be read correctly by most service providers. You can refer to the image below as an example.

When you are done, click the `Finish`{.action} button.

![ADFS relying party trust mapping step 4](images/adfs_relying_party_trusts_mapping_4.png){.thumbnail}

![ADFS relying party trust mapping step 5](images/adfs_relying_party_trusts_mapping_5.png){.thumbnail}

Click the `Apply`{.action} button and confirm with `OK`{.action}.

![ADFS relying party trust mapping step 6](images/adfs_relying_party_trusts_mapping_6.png){.thumbnail}

With the mapping completed, your ADFS now trusts OVHcloud as a service provider. The next step is to ensure that the OVHcloud account trusts your ADFS as identity provider.

### Establishing OVHcloud account trust and configuring the connection

Adding your ADFS as a trusted identity provider is done in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we) where you can provide the identity provider metadata.

[Log in](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we) and click on your profile in the top-right corner.

![OVHcloud top menu](images/ovhcloud_top_menu.png){.thumbnail}

Click on your name to access your profile management page.

![OVHcloud user infos](images/ovhcloud_user_infos.png){.thumbnail}

Open the `User management`{.action} tab.

![OVHcloud profile menu](images/ovhcloud_profile_menu.png){.thumbnail}

Click on the `SSO Login`{.action} button.

![OVHcloud connect SSO step 1](images/ovhcloud_user_management_connect_sso_1.png){.thumbnail}

Fill in the XML metadata of your ADFS. The "Group Attribute Name" is optional in this case. Click on `Confirm`{.action}.

![OVHcloud connect SSO step 2](images/ovhcloud_user_management_connect_sso_2.png){.thumbnail}

You should now see your ADFS as identity provider, as well as the default groups.

![OVHcloud connect SSO step 3](images/ovhcloud_user_management_connect_sso_3.png){.thumbnail}

Click the link below `SSO service URL` to view more information on it.

![OVHcloud connect SSO step 4](images/ovhcloud_user_management_connect_sso_4.png){.thumbnail}

![OVHcloud connect SSO step 5](images/ovhcloud_user_management_connect_sso_5.png){.thumbnail}

The `...`{.action} button enables you to update or delete the SSO, and to see details.

![OVHcloud connect SSO step 6](images/ovhcloud_user_management_connect_sso_6.png){.thumbnail}

The trust of your ADFS as identity provider is thus established but you still have to add groups to your OVHcloud account.

> [!warning]
> If you try to connect at this stage via SSO, you will probably receive a "Not in valid groups" error message.
>
> That is because your OVHcloud account checks if the authenticating user belongs to a group that actually exists on the account.
>

To resolve this, verify which information is mapped to the "Group" attribute that your ADFS returns.

Consider the following example of the user "John Doe" from your Active Directory as shown in the image below.

![ADFS user](images/adfs_user.png){.thumbnail}

Next, check the mapping in ADFS:

![ADFS relying party trust mapping](images/adfs_relying_party_trusts_mapping_4.png){.thumbnail}

In this example, the "Group" attribute sent back by the Active Directory for the user "John Doe" is "title". This corresponds to the "job title" which is `manager@<my-domain>.com`.

You can also verify this in the SAML assertion:

```xml
<AttributeStatement>
    <Attribute Name="http://schemas.xmlsoap.org/claims/Group">
        <AttributeValue>manager@<my-domain>.com</AttributeValue>
    </Attribute>
    ...
</AttributeStatement>
```

This means that you need to add the `manager@<my-domain>.com` group to your OVHcloud account, attaching a role to it. Otherwise, your OVHcloud account wouldn't know what is the user allowed to do.

Add it by clicking on the `Declare a group`{.action} button and filling in the fields:

![ADFS user management groups](images/ovhcloud_user_management_groups_1.png){.thumbnail}

![ADFS user management groups](images/ovhcloud_user_management_groups_2.png){.thumbnail}

You can then check that the group is added to your OVHcloud account in the `Groups` section:

![ADFS user management groups](images/ovhcloud_user_management_groups_3.png){.thumbnail}

When you connect with the Active Directory user "johndoe" now, your OVHcloud account will recognise that the user has the "REGULAR" role, specified by its group.

You can then disconnect from your account and log in again with your ADFS as identity provider.

Enter your [NIC handle](https://docs.ovh.com/us/en/customer/create-ovhcloud-account/#what-is-my-nic-handle) followed by **/idp** without entering a password, and click the `Login`{.action} button.

![OVHcloud federation login](images/ovhcloud_federation_login_1.png){.thumbnail}

You are then redirected to your ADFS login page. Enter a login/password of a user of your LDAP Active Directory, then click the `Sign in`{.action} button.

![OVHcloud federation login ADFS redirection](images/ovhcloud_federation_login_2.png){.thumbnail}

You are now logged in with the same NIC handle, but via your Active Directory user and using your ADFS SSO.

![OVHcloud user infos federation](images/ovhcloud_user_infos_federation.png){.thumbnail}

## Go further

[Creating an OVHcloud account](https://docs.ovh.com/us/en/customer/create-ovhcloud-account/)

[Securing my OVHcloud account and manage my personal information](https://docs.ovh.com/us/en/customer/all-about-your-username/)

[Setting and managing an account password](https://docs.ovh.com/us/en/customer/manage-password/)

[Securing your OVHcloud account with two-factor authentication](https://docs.ovh.com/us/en/customer/secure-account-with-2FA/)

Join our community of users on <https://community.ovh.com/en/>.
