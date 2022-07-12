---
title: 'Managing contacts for your services'
slug: managing-contacts
excerpt: 'Find out how to manage contacts for your OVHcloud services'
section: 'Getting started'
order: 6
---

**Last updated 13th December 2021**

## Objective

Most services created with OVHcloud are managed by several contacts. Each of these contacts is linked to a unique NIC handle (Customer ID). 

**Find out how to manage contacts for your OVHcloud services.**

> [!warning]
> OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a [specialist service provider](https://partner.ovhcloud.com/en-gb/directory/) and/or discuss the issue with our community on if you have difficulties or doubts. You can find more information in the [Go further](#gofurther) section of this guide.
>

## Definition

There are three different contact types:

- **The administrative contact** manages a service’s administrative and technical aspects. They have rights to modify all contacts, and can make changes to information belonging to the owner of a service, such as domain names, for example.
- **The technical contact** only manages the technical aspects of a service.
- **The billing contact** only manages the billing aspects of a service. Notably, this contact receives renewal notifications for services. 

The NIC handle is a personal username that you receive via email when you create a customer account with OVHcloud. It is usually made up of two letters followed by numbers, in the format **xx11111-ovh**. When you order services, this NIC handle is used as a contact.

![Contact management](images/managing_contacts_scheme.png){.thumbnail}


## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external}
- Access to the email address linked to any relevant customer account
- Appropriate rights for the service concerned
- The new contact’s NIC handle (the contact you want to add)
- No outstanding payments on billing contacts

## Instructions

### Access contact management. <a name="gestion_des_contacts"></a>

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external}, click on the name linked to your NIC handle (Customer ID) in the menu bar in the top right-hand corner, then click `Contact management`{.action}.

![Contact management](images/hubcontacts.png){.thumbnail}

The table that appears will show all of the services your NIC handle is registered with as a contact.

![Contact management](images/managing_contacts_02.png){.thumbnail}



### Change the contacts for a service.

Once you are on the Contacts page, click `...`{.action} to the right of the service you want to modify, then `Modify contacts`{.action}. Enter the new contact(s) you want to add, then click `Confirm`{.action}.

![Contact management](images/managing_contacts_03.png){.thumbnail}

![Contact management](images/managing_contacts_04.png){.thumbnail}

An email will be sent to the contacts you have added once you confirm this change.

> [!warning]
>
> No change of contact will be allowed if the old or new customer account concerned has one or more unpaid invoices.
>

#### Administrative contact <a name="administrateur"></a>

As an administrator, you can make several changes to contacts for a service. This includes:

- Naming a new technical and/or billing contact. Validation is required from both you and the new contact. The previous contact will receive an email informing them of this change, if it is successful.
- Managing technical and/or billing aspects. You need to confirm this request. The previous contact will receive an email informing them of this change. 
- Naming a new administrative contact to replace you. Confirmation is required from both you and the new contact. 

#### Technical contact <a name="technique"></a>

You can only add another technical contact to replace you. Confirmation is required from both you and the new contact.

#### Billing contact

You can only add another billing contact to replace you. Confirmation is required from both you and the new contact.

### Confirm, decline or track a contact change.

To track and manage ongoing requests, click on the `My requests`{.action} tab. Here, you can accept or decline a request.

![Contact management](images/managing_contacts_05.png){.thumbnail}

To do this, you must have a validation code (also called a token) contained in the email to confirm or decline the request.

> [!primary]
> This code is personal, can only be used once, and it will be different for the other two contacts.

The email you receive will also contain a link directing you to the page where you can validate or decline the request. If you click the link in the email, the validation code (token) will be inserted automatically.

If one of the contacts has not received this email, the contact email address linked to the profile may not be up-to-date. You can check this in your profile, change it if required, and request for the email to be sent again by clicking `Resend request`{.action}.

![Contact management](images/managing_contacts_06.png){.thumbnail}

If only one contact has confirmed the change, a message will appear confirming that the request is still pending validation from the other contact. If one of the contacts has just confirmed the request, it will take a few minutes for the information to be updated and appear correctly in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external}.

![Contact management](images/managing_contacts_007.png){.thumbnail}

The contact change will take effect a few minutes after both contacts have validated the request. They will then receive an email informing them that the request has been processed.

### Example: Providing access for a website's technical administration to your webmaster

You have just subscribed to an OVHcloud service with the purpose of hosting your own [online store](https://www.ovhcloud.com/en-gb/web-hosting/ecommerce-website/). You have contacted one of our [partners](https://partner.ovhcloud.com/en-gb/directory/) and they are requesting access rights to your OVHcloud services in order to start building your website.

> [!warning]
>
> We do not recommend that you give any third parties access credentials to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB).
>

In this situation, you can grant your service provider the role "[technical contact](#gestion_des_contacts)" on your OVHcloud Web Hosting plan. With this access, they can carry out the operations required to put your website online (adding a domain or subdomain to the multisite, installing a 1-click module, changing the FTP and database passwords, creating SSL certificates, etc.).

If your domain name is not linked to your hosting plan, and you wish to entrust the necessary operations to your webmaster, give them the role "[technical contact](#gestion_des_contacts)" on your [domain name’s DNS zone](https://docs.ovh.com/gb/en/domains/web_hosting_how_to_edit_my_dns_zone/).

You cannot change a service’s admin or billing contacts when logged in as "[technical contact](#gestion_des_contacts)". This access right will not give your webmaster access to your invoices, orders, service renewals or payment methods. They will not be able to [transfer the management of your domain name](https://docs.ovh.com/gb/en/domains/outgoing-transfer-of-generic-or-geographical-domain-name/) to another hosting provider or [change its owner](https://docs.ovh.com/gb/en/domains/how-to-change-domain-name-holder/). Finally, as the [administrative contact](#administrateur) of your services, you can change the "[technical contact](#technique)" at any time.

### Special case of a domain owner

When you ordered an OVHcloud service, you defined an owner for it. If the domain owner has no access to the OVHcloud account(s) associated with the respective service, they can transfer domain ownership to a third party, or obtain domain administration, via the following procedures:

[Change the owner of a service](https://www.ovh.com/cgi-bin/en/procedure/procedureChangeOwner.cgi)

[Change your domain contacts](https://www.ovh.de/cgi-bin/en/procedure/procedureChangeContacts.cgi)

Each procedure is carried out by email and an identity check will be required. Detailed instructions will be provided throughout each procedure.

## Go further

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-gb/directory/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-gb/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.
