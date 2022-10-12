---
title: 'OVHcloud account SSO connection'
slug: connect-saml-sso
excerpt: 'Connect in SSO your ADFS with your OVHcloud account in SAML 2.0'
Section: 'Advanced'
order: 1
---

**Last updated 11th October 2022**

## Objective

To link your OVHcloud account to your own Active Directory, you must federate it in SAML.

**Find out how to federate your OVHcloud account to an external Active Directory.**

## Requirements

- An Active Directory Federation Services (ADFS) running
- An OVHcloud account

## Instructions

### AD FS trust establishing

> [!primary]
>
> In order for a service provider (as your OVHcloud account) to perform an SSO connection with an identity provider (as your ADFS), the essential part is to establish a mutual trust.
>

Let's start with the ADFS. Your ADFS is your identity provider, it must trust your OVHcloud account otherwise it will never accept any authentication request from it.

In the Active Directory world, that means adding a relying party trust.

From your Server Manager, go to `Tools`{.action} > `AD FS Management`{.action}.

![Windows Server tools menu](images/windows_server_tools_menu.png){.thumbnail}

Click on `Relying Party Trusts`{.action}.

![ADFS Menu](images/adfs_menu.png){.thumbnail}

Then click on `Add Relying Party Trust...`{.action}.

![ADFS relying party trusts menu](images/adfs_relying_party_trusts_menu.png){.thumbnail}

Select `Claims aware`{.action}.

Click on the `Start`{.action} button.

![ADFS add relying party trust step 1](images/adfs_add_relying_party_trust_1.png){.thumbnail}

Here, you can you can either import the OVHCloud SP metadata, or enter data about the relying party manually.

Here's how to Import the OVHCloud SP metadata.

Select `Import data about the relying party from a file`{.action} then select the medatata file.

Here are the metedata files for the EU, CA and US regions:
- [EU metadata](https://www.ovh.com/auth/sso/saml/sp/metadata.xml)
- [CA metadata](https://ca.ovh.com/auth/sso/saml/sp/metadata.xml)
- [US metadata](https://us.ovhcloud.com/auth/sso/saml/sp/metadata.xml)

Then click to the `Next`{.action} button.

![ADFS add relying party trust step 2](images/adfs_add_relying_party_trust_2.png){.thumbnail}

Enter a name then click to the `Next`{.action} button.

![ADFS add relying party trust step 3](images/adfs_add_relying_party_trust_3.png){.thumbnail}

Click to the `Next`{.action} button.

![ADFS add relying party trust step 4](images/adfs_add_relying_party_trust_4.png){.thumbnail}

Click to the `Next`{.action} button.

![ADFS add relying party trust step 5](images/adfs_add_relying_party_trust_5.png){.thumbnail}

Then click to the `Close`{.action} button, you've added your relying party trust.

![ADFS relying party trusts](images/adfs_relying_party_trusts.png){.thumbnail}

> [!primary]
>
> Your relying party is now trusted, so you should now be able to log in via an SSO connection, but you won't be able to get any information about the identity of the user yet (in the SAML assertion in the case of SAML).
>

In order to do that, you have to set the mapping between the Active Directory LDAP fields and the attributes in the SAML assertion.

Click on your relying party trust

![ADFS relying party trust mapping step 1](images/adfs_relying_party_trusts_mapping_1.png){.thumbnail}

Then click on `Edit Claim Issuance Policy...`{.action}.

![ADFS relying party trust mapping step 2](images/adfs_relying_party_trusts_mapping_2.png){.thumbnail}

Click on the `Add Rule...`{.action} button.

![ADFS relying party trust mapping step 3](images/adfs_relying_party_trusts_mapping_3.png){.thumbnail}

Click on the `Next`{.action} button.

Enter a rule name, then define your mapping.

Select "Active Directory" as "Attribute store"

> [!primary]
>
> Theoretically you're free to do whatever you want, but there're some standards if you want your Active Directory LDAP data being read correctly by most of the service providers. See the example below.
>

Then click on the `Finish`{.action} button.

![ADFS relying party trust mapping step 4](images/adfs_relying_party_trusts_mapping_4.png){.thumbnail}

![ADFS relying party trust mapping step 5](images/adfs_relying_party_trusts_mapping_5.png){.thumbnail}

Click to the `Apply`{.action} button then to the `OK button`{.action}.

![ADFS relying party trust mapping step 6](images/adfs_relying_party_trusts_mapping_6.png){.thumbnail}

Your mapping is set up. So now your ADFS trusts OVHcloud as a service provider. So now we have to make sure that your OVHcloud account trusts your ADFS as identity provider.

### OVHcloud account trust establishing

Let's now add your ADFS as identity provider to your OVHcloud account.

In your OVHcloud account, your can add an identity provider, you just need to give the identity provider metadata.

Here's how to do it.

First, log in to your OVHcloud account.

![OVHcloud login](images/ovhcloud_login.png){.thumbnail}

Then, click on your profile at the top-right corner.

![OVHcloud top menu](images/ovhcloud_top_menu.png){.thumbnail}

Click on your name to access to your profile management.

![OVHcloud user infos](images/ovhcloud_user_infos.png){.thumbnail}

Click on `User management`{.action}

![OVHcloud profile menu](images/ovhcloud_profile_menu.png){.thumbnail}

Click on the `Connect SSO`{.action} button.

![OVHcloud connect SSO step 1](images/ovhcloud_user_management_connect_sso_1.png){.thumbnail}

Fill in the XML metadata of your ADFS. For an ADFS, the group attribute name is optional.

![OVHcloud connect SSO step 2](images/ovhcloud_user_management_connect_sso_2.png){.thumbnail}

Now you should see your ADFS as identity provider, as well as the default groups.

![OVHcloud connect SSO step 3](images/ovhcloud_user_management_connect_sso_3.png){.thumbnail}

Click on the `SSO service URL`{.action} link to have more details about it.

![OVHcloud connect SSO step 4](images/ovhcloud_user_management_connect_sso_4.png){.thumbnail}

![OVHcloud connect SSO step 5](images/ovhcloud_user_management_connect_sso_5.png){.thumbnail}

Click on the `...`{.action} button to update or delete the SSO, or to see details.

![OVHcloud connect SSO step 6](images/ovhcloud_user_management_connect_sso_6.png){.thumbnail}

The trust of your ADFS as identity provider is established, but you now have to add groups to your OVHcloud account.

> [!warning]
> If you try to connect right now using your SSO, you will probably run into the "Not in valid groups" error.
>
> That's because your OVHcloud account checks if the user you are trying to authenticate with belongs to group that actually exists to the account.
>

The first thing to do is to watch what information is mapped to the "Group" attribute that your ADFS sends back to you.

Let's take the example of the user "John Doe" from your Active Directory:

![ADFS user](images/adfs_user.png){.thumbnail}

Then, let's take a look at the mapping:

![ADFS relying party trust mapping](images/adfs_relying_party_trusts_mapping_4.png){.thumbnail}

Here, the "Group" attribute sent back by the Active Directory for the user "John Doe" is "title", that corresponds to his "job title", so "manager@federation.ovh".

You can also check it in the SAML assertion:

```xml
<AttributeStatement>
    <Attribute Name="http://schemas.xmlsoap.org/claims/Group">
        <AttributeValue>manager@<my-domain>.com</AttributeValue>
    </Attribute>
    ...
</AttributeStatement>
```

So that means that you need to add the "manager@<my-domain>.com" group to your OVHcloud account attaching a role to it. Otherwise, your OVHcloud account wouldn't know what is the user allowed to do.

To do that, you need to add it from the `Declare group`{.action} button:

![ADFS user management groups](images/ovhcloud_user_management_groups_1.png){.thumbnail}

![ADFS user management groups](images/ovhcloud_user_management_groups_2.png){.thumbnail}

You can then check that the group is now added to your OVHcloud account:

![ADFS user management groups](images/ovhcloud_user_management_groups_3.png){.thumbnail}

So now when you'll connect using the Active Directory "johndoe" user, your OVHcloud account will know that he has the "REGULAR" role thanks to his group.

You can now disconnect from your account and log if again with your ADFS as identity provider.

Enter your nichandle followed by **/idp** without entering any password, and click to the `Login`{.action} button.

![OVHcloud federation login](images/ovhcloud_federation_login_1.png){.thumbnail}

You are redirected to your ADFS log in page, so enter a login/password of a user of your LDAP Active Directory, then click on the `Sign in`{.action} button.

![OVHcloud federation login ADFS redirection](images/ovhcloud_federation_login_2.png){.thumbnail}

You're now logged in the same nichandle, but via your Active Directory user using your ADFS SSO.

![OVHcloud user infos federation](images/ovhcloud_user_infos_federation.png){.thumbnail}
