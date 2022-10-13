---
title: 'Adding a domain name to your Exchange service'
slug: adding-domain-exchange
excerpt: 'Find out how to add a domain name to your Exchange service'
section: 'Getting started with Exchange'
---

**Last updated 7th October 2022**

## Objective

To use the accounts included with an Exchange service, you will need to add a domain name to it. You can also add multiple domain names to an Exchange service.

**Find out how to add a domain name to your Exchange platform.**

## Requirements

- An [Exchange](https://www.ovhcloud.com/en-sg/emails/)
- One or more domain names
- Administrative access to your domain name’s configuration (in order to [modify the DNS zone](https://docs.ovh.com/sg/en/domains/web_hosting_how_to_edit_my_dns_zone/))
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg)

## Instructions

### Access your service management

Once your Exchange service has been created and is available, you can manage it from your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg).

In the `Web Cloud`{.action} section, open the appropriate service. Click `Microsoft`{.action}, and then click `Exchange`{.action}. Then select the name of the service concerned.

### Add a domain name

To add a domain name, click on the `Associated domains`{.action} tab. The table displays the domain names currently associated with your service. To add a new domain name to it, click `Add a domain`{.action}.

> [!warning]
>
> All of the addresses created on your email service can view all of the addresses for this service in the directory, including those that have different domain names. To stop different domain names from being displayed this way, you will need to order a new [Exchange solution](https://www.ovhcloud.com/en-sg/emails/) for the domain name(s) concerned.
>

![Add Domain](images/add_domain_exchange_step1.png){.thumbnail}

In the window for adding a domain, select between these options:

- **Choose a domain from the list**: Only domain names that use the OVHcloud configuration and are manageable from your customer account will appear.

- **Enter a domain name that is not managed by your OVHcloud account**: You will need to modify the domain name’s configuration (its DNS zone) for the service to function properly. In this case, a CNAME DNS record must be added.

Once you have selected an option, click on the `Next`{.action} button.

![Add Domain](images/add_domain_exchange_step2.png){.thumbnail}

The window will then show information on configuring modes.

- **If you have entered a non-OVHcloud domain name**: Non-authoritative mode will be configured by default.

- **If you have selected an OVHcloud domain name from the list**: You will have to choose between two modes.

|Mode|Description|
|---|---|
|Authoritative|Choose this if you only use your Exchange solution with your domain name. This mode does not allow the use of another email solution with your service.|
|Non-authoritative|Choose this if you use your Exchange solution domain name with another email solution. You must enter details of your other email solution’s server.|

> [!primary]
>
> The mode choice is not definitive, and can be modified from the OVHcloud Control Panel later on.
>

Click on the `Next`{.action} button to continue adding the domain.

![Add Domain](images/add_domain_exchange_step3.png){.thumbnail}

**If you have selected an OVHcloud domain name in the list**, it will be automatically configured. To do this, tick the boxes and click on the `Next`{.action} button to continue adding the domain.

**If you have entered a non-OVHcloud domain name**, it will need to be configured in the next step.

![Add Domain](images/add_domain_exchange_step4.png){.thumbnail}

At the end of the configuration process, the assistant will ask you to check the information entered. Click on the `Confirm`{.action} button to confirm that you wish to add the domain. Repeat this step as many times as required, if you need to add more domain names.

### Configure the domain name (DNS)

Once the domain name has been added as an associated domain, make sure that its configuration is correct by using the table displayed. A green box will show that the domain name is correctly configured. If the box is red, additional steps might be required: 

- **If you chose automatic configuration when adding the domain**: Wait a few minutes until the changes are applied in the OVHcloud Control Panel.

- **If you have entered a non-OVHcloud domain name**: Click the red box to view the changes you need to make. If this domain name does not use the OVHcloud configuration (its DNS servers), you must carry out the modifications in the interface you use to manage your domain name’s configuration. If you need to modify the CNAME record, you can find out more by referring to [this documentation](https://docs.ovh.com/sg/en/microsoft-collaborative-solutions/exchange_20132016_how_to_add_a_cname_record/).

> [!primary]
>
> Changes made to a domain name’s configuration can take between 4 and a maximum of 24 hours to propagate fully.
>

To check that your domain name is correctly configured, go back to the `Associated domains`{.action} tab for your service. If the box has turned green, your domain name is correctly configured. If not, then the configuration changes you have made may not have propagated fully.

![Add Domain](images/add_domain_exchange_step5.png){.thumbnail}

### Configure and use accounts

Now that you have added the domain names to your service, you can configure your email accounts to include them. You can do this from the `Email accounts`{.action} tab. If required, you can order additional accounts using the `Action`{.action}/`Order accounts`{.action} or `Add an account`{.action} button.

As a reminder, all of the addresses created on your service can view all of the addresses for this service in the directory, including those that have different domain names.

Once you have finished configuring your accounts, you can now start using them. To do this, OVHcloud offers **webmail**, accessible via <https://www.ovhcloud.com/en-sg/mail/>. I If you are using a third-party client with your email accounts, ensure that the software is compatible with the service. 

If you need help with configuring your email account on an email client or a device (e.g. a smartphone or tablet) or have questions about email service features, please refer to our documentation which you can access from the [Exchange](https://docs.ovh.com/sg/en/microsoft-collaborative-solutions/) pages.

You can purchase Outlook licences in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg), and Office 365 licences on the following page: <https://www.ovhcloud.com/en-sg/collaborative-tools/microsoft-365/]>.

We recommend using one of these solutions if you would like to use the Outlook email client, or other software from the Microsoft Office suite.

### Delete a domain name from a platform

If you would like to remove a domain name from your Exchange service, you will need to check that it is not linked to email accounts, aliases, resources, shared accounts (only on Exchange), groups, external contacts, or footers that are still configured. In this case, you will need to **link these accounts to another domain name** on your platform, or **delete** them.

> [!warning]
>
> Before deleting email accounts, make sure they are not used. You may need to back up these accounts. If required, please refer to our guide on [Migrating your email accounts manually](https://docs.ovh.com/sg/en/emails/migrate-email-addresses-manually/) which explains how to export account data from your Control Panel or email software.

Go to the `Associated domains`{.action} tab for your platform. In the `Accounts` column of the table, you will see the number of accounts associated with the domain names in your list.

![Add Domain](images/add_domain_exchange_step6.png){.thumbnail}

If email accounts are using the domain name you want to detach, you have 2 options:

- **Attach the accounts to another domain** name: Go to the `Email accounts`{.action} tab. To the right of the accounts you want to modify, click the `...`{.action} button, then `Modify`{.action}.
    ![Add Domain](images/add_domain_exchange_step8.png){.thumbnail}
    In the modification window, you can modify the domain name attached to the account via the dropdown menu.
    ![Add Domain](images/add_domain_exchange_step9.png){.thumbnail}

- **Delete the accounts on your platform**: go to the `Email accounts`{.action} tab. To the right of the account you want to delete, click the `...`{.action} button, then `Reset this account`{.action} or `Reset`{.action}
    ![Add Domain](images/add_domain_exchange_step7.png){.thumbnail}

Once the accounts have been reassigned to another domain name or their reset has been completed, it is possible to delete the domain name. 

In the `Associated domains`{.action} tab for your platform, click on the `...`{.action} button to the right of the domain name concerned, then on `Delete this domain`{.action}.

![Add Domain](images/add_domain_exchange_step10.png){.thumbnail}

## Go further

[Creating a CNAME record to add an associated domain](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/exchange_20132016_how_to_add_a_cname_record/)

[Editing an OVHcloud DNS zone](https://docs.ovh.com/sg/en/domains/web_hosting_how_to_edit_my_dns_zone/)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-sg/).
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-sg/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.