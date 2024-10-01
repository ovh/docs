---
title: Enabling Active Directory Federation Services (AD FS) SSO connections with your OVHcloud account
excerpt: "Find out how to link your Active Directory Federation Services (AD FS) to your OVHcloud account using SAML 2.0"
updated: 2024-06-25
---

## Objective

You can use **Single Sign-On** (SSO) to connect to your OVHcloud account. To enable these connections, your account and your Active Directory Federation Services (AD FS) have to be using SAML (*Security Assertion Markup Language*) authentications.

**This guide explains how to link your OVHcloud account to an external Active Directory.**

## Requirements

- Active Directory Federation Services (AD FS) running on your server
- An [OVHcloud account](/pages/account_and_service_management/account_information/ovhcloud-account-creation)
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

> [!primary]
>
> In order for a service provider (i.e. your OVHcloud account) to perform an SSO connection with an identity provider (i.e. your AD FS), the essential part is to establish a mutual trust relationship.
>

### Establishing AD FS trust

Your AD FS acts as your identity provider. Authentication requests by your OVHcloud account will only be accepted if it is declared as a trusted party first.

In the Active Directory context, this means adding it as `Relying Party Trust`.

From your Server Manager, open the `Tools`{.action} menu and select `AD FS Management`{.action}.

![Windows Server tools menu](images/windows_server_tools_menu.png){.thumbnail}

Click on `Relying Party Trusts`{.action}.

![AD FS Menu](images/adfs_menu.png){.thumbnail}

Then click on `Add Relying Party Trust...`{.action}.

![AD FS relying party trusts menu](images/adfs_relying_party_trusts_menu.png){.thumbnail}

Select `Claims aware`{.action} and confirm with the `Start`{.action} button.

![AD FS add relying party trust step 1](images/adfs_add_relying_party_trust_1.png){.thumbnail}

Here you can enter the relying party information manually or import it from a metadata file.

#### Importing the OVHcloud SP metadata

You can obtain the appropriate metadata file via the following links:

- [EU region metadata](https://www.ovh.com/auth/sso/saml/sp/metadata.xml)
- [CA region metadata](https://ca.ovh.com/auth/sso/saml/sp/metadata.xml)

Select `Import data about the relying party from a file`{.action} and select your metadata file.

Then click the `Next`{.action} button.

![AD FS add relying party trust step 2](images/adfs_add_relying_party_trust_2.png){.thumbnail}

Enter a display name for the relying party and click the `Next`{.action} button.

![AD FS add relying party trust step 3](images/adfs_add_relying_party_trust_3.png){.thumbnail}

Click `Next`{.action} in the Access Control window.

![AD FS add relying party trust step 4](images/adfs_add_relying_party_trust_4.png){.thumbnail}

Click `Next`{.action} again to proceed.

![AD FS add relying party trust step 5](images/adfs_add_relying_party_trust_5.png){.thumbnail}

Click the `Close`{.action} button in the last window. The OVHcloud relying party trust is now added to your AD FS.

![AD FS relying party trusts](images/adfs_relying_party_trusts.png){.thumbnail}

> [!primary]
>
> With OVHcloud added as trusted relying party, you should be able to log in via an SSO connection already. However, any information about the identity of the user (in terms of the SAML "assertion") will remain unavailable until you configure a policy to map Active Directory LDAP fields to the attributes in the SAML assertion.
>

#### Mapping LDAP attributes to SAML attributes

Click on the OVHcloud relying party trust entry.

![AD FS relying party trust mapping step 1](images/adfs_relying_party_trusts_mapping_1.png){.thumbnail}

Then click on `Edit Claim Issuance Policy...`{.action}.

![AD FS relying party trust mapping step 2](images/adfs_relying_party_trusts_mapping_2.png){.thumbnail}

Click the `Add Rule...`{.action} button.

![AD FS relying party trust mapping step 3](images/adfs_relying_party_trusts_mapping_3.png){.thumbnail}

Click `Next`{.action}.

Enter a rule name, then define your mapping.

Select "Active Directory" as "Attribute store".

> [!primary]
>
> The following settings can be configured freely in order for the Active Directory LDAP data to be read correctly by the service provider. You can refer to the image below as an example.

When you are done, click the `Finish`{.action} button.

![AD FS relying party trust mapping step 4](images/adfs_relying_party_trusts_mapping_4.png){.thumbnail}

![AD FS relying party trust mapping step 5](images/adfs_relying_party_trusts_mapping_5.png){.thumbnail}

Click the `Apply`{.action} button and confirm with `OK`{.action}.

![AD FS relying party trust mapping step 6](images/adfs_relying_party_trusts_mapping_6.png){.thumbnail}

With the mapping completed, your AD FS now trusts OVHcloud as a service provider. The next step is to ensure that the OVHcloud account trusts your AD FS as identity provider.

### Establishing OVHcloud account trust and configuring the connection

Adding your AD FS as a trusted identity provider is done in the [OVHcloud Control Panel](/links/manager) where you can provide the identity provider metadata.

Click your account name in the top-right corner, then on your name again in the sidebar.

![Access to the IAM menu](images/access_to_the_IAM_menu_01.png){.thumbnail}

You can access the IAM menu via the dedicated entry in your Control Panel.

![Access to the IAM menu](images/access_to_the_IAM_menu_02.png){.thumbnail}

Then click on the `Identities`{.action} tab to access local users management.

![Access to the IAM menu](images/access_to_the_IAM_menu_03.png){.thumbnail}

Click on the `SSO connection`{.action} button.

![OVHcloud connect SSO step 1](images/ovhcloud_user_management_connect_sso_1.png){.thumbnail}

Fill in the XML metadata of your AD FS. The "Group Attribute Name" is optional in this case. Click on `Confirm`{.action}.

You can keep local users by ticking the `Keep active OVHcloud users` box.

![OVHcloud connect SSO step 2](images/ovhcloud_user_management_connect_sso_2.png){.thumbnail}

You should now see your AD FS as identity provider, as well as the default groups.

![OVHcloud connect SSO step 3](images/ovhcloud_user_management_connect_sso_3.png){.thumbnail}

Click the link below `SSO service URL` to view more information on it.

![OVHcloud connect SSO step 4](images/ovhcloud_user_management_connect_sso_4.png){.thumbnail}

![OVHcloud connect SSO step 5](images/ovhcloud_user_management_connect_sso_5.png){.thumbnail}

The `...`{.action} button enables you to update or delete the SSO, and to see details.

![OVHcloud connect SSO step 6](images/ovhcloud_user_management_connect_sso_6.png){.thumbnail}

The trust of your AD FS as identity provider is thus established but you still have to add groups to your OVHcloud account.

> [!warning]
> If you try to connect at this stage via SSO, you will probably receive a `Not in valid groups` error message.
>
> That is because your OVHcloud account checks if the authenticating user belongs to a group that actually exists on the account.
>

To resolve this, verify which information is mapped to the "Group" attribute that your AD FS returns.

Consider the following example of the user "John Doe" from your Active Directory as shown in the image below.

![AD FS user](images/adfs_user.png){.thumbnail}

Next, check the mapping in AD FS:

![AD FS relying party trust mapping](images/adfs_relying_party_trusts_mapping_4.png){.thumbnail}

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

![AD FS user management groups](images/ovhcloud_user_management_groups_1.png){.thumbnail}

![AD FS user management groups](images/ovhcloud_user_management_groups_2.png){.thumbnail}

You can then check that the group is added to your OVHcloud account in the `Groups` section:

![AD FS user management groups](images/ovhcloud_user_management_groups_3.png){.thumbnail}

When you connect with the Active Directory user "johndoe" now, your OVHcloud account will recognize that the user has the "REGULAR" role, specified by its group.

Warning: if you give the `NONE` privilege, you will need to assign permissions to this group via the [IAM policies](/pages/account_and_service_management/account_information/iam-policy-ui).

You can then disconnect from your account and log in again with your AD FS as identity provider.

### Connect via SSO

On the [OVHcloud login page](/links/manager), enter your [NIC handle](/pages/account_and_service_management/account_information/ovhcloud-account-creation#what-is-my-nic-handle) followed by **/idp** without entering a password, and click the `Login`{.action} button.

![OVHcloud federation login](images/ovhcloud_federation_login_1.png){.thumbnail}

You are then redirected to your AD FS login page. Enter a login/password of a user of your LDAP Active Directory, then click the `Sign in`{.action} button.

![OVHcloud federation login AD FS redirection](images/ovhcloud_federation_login_2.png){.thumbnail}

You are now logged in with the same NIC handle, but via your Active Directory user and using your AD FS SSO.

![OVHcloud user infos federation](images/ovhcloud_user_infos_federation.png){.thumbnail}

## Go further

[Creating an OVHcloud account](/pages/account_and_service_management/account_information/ovhcloud-account-creation)

[Securing my OVHcloud account and manage my personal information](/pages/account_and_service_management/account_information/all_about_username)

[Setting and managing an account password](/pages/account_and_service_management/account_information/manage-ovh-password)

[Securing your OVHcloud account with two-factor authentication](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa)

[How to use IAM policies using the OVHcloud Control Panel](/pages/account_and_service_management/account_information/iam-policy-ui).

Join our community of users on <https://community.ovh.com/en/>.
