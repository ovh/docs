---
title: 'Adding a domain name to your Exchange service'
excerpt: 'Find out how to add a domain name to your Exchange service'
updated: 2023-06-14
---

## Objective

To use the accounts included with an Exchange service, you will need to add a domain name to it. You can also add multiple domain names to an Exchange service.

**Find out how to add a domain name to your Exchange platform.**

## Requirements

- An [Exchange](https://www.ovhcloud.com/en/emails/) solution
- One or more domain names
- Administrative access to your domain name’s configuration (in order to [modify the DNS zone](/pages/web/domains/dns_zone_edit))
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we)

## Instructions

### Access your service management

Once your Exchange service has been created and is available, you can manage it from your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we).

In the `Web Cloud`{.action} section, open the appropriate service. Click `Microsoft`{.action}, and then click `Exchange`{.action}. Then select the name of the service concerned.

### Add a domain name

To add a domain name, click on the `Associated domains`{.action} tab. The table displays the domain names currently associated with your service. To add a new domain name to it, click `Add a domain`{.action}.

> [!warning]
>
> All of the addresses created on your email service can view all of the addresses for this service in the directory, including those that have different domain names. To stop different domain names from being displayed this way, you will need to order a new [Exchange](https://www.ovhcloud.com/en/emails/) for the domain name(s) concerned.
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

- **If you have selected an OVHcloud domain name from the list**: You will have to choose between two modes.
    - **Authoritative**: Choose this if you only use your Exchange solution with your domain name. This mode does not allow the use of another email solution with your service.
    - **Non-authoritative**: Choose this if you use your Exchange solution domain name with another email solution. You must enter details of your other email solution’s server.
>
> - When an email is transmitted to your email platform (*Server A*) in **authoritative** mode, this means that all the email addresses of your domain name are only hosted on this platform. <br> <br> For example, if we send an email to the address *mary.johnson@mydomain.ovh*, the *Server A* returns a failure message to the sender, because this address does not exist on *Server A*.
> - When an email is transmitted to your email platform (*Server A*) in **non-authoritative** mode, this means that the email addresses of your domain name are distributed between your main email service (*Server A*) and another email service (*Serverg B*). <br> <br> For example, if we send an email to the address *mary.johnson@mydomain.ovh*, *Server A* will forward the email to *Server B* which can deliver it.
>
>![Add Domain](images/add_domain_exchange_authoritative.png){.thumbnail}
>

> [!warning]
>
> If you get the message "**authoritative domain detected**" when adding your domain name to your e-mail platform, this means that this domain name is declared in **authoritative** mode on a another email platform. You will have to switch it to **non-authoritative** mode on both platforms so that they can coexist.

Click on the `Next`{.action} button to continue adding the domain.

![Add Domain](images/add_domain_exchange_step3.png){.thumbnail}

**If you have selected an OVHcloud domain name in the list**, it will be automatically configured. To do this, tick the boxes and click on the `Next`{.action} button to continue adding the domain.

**If you have entered a non-OVHcloud domain name**, it will need to be configured in the next step.

![Add Domain](images/add_domain_exchange_step4.png){.thumbnail}

At the end of the configuration process, the assistant will ask you to check the information entered. Click on the `Confirm`{.action} button to confirm that you wish to add the domain. Repeat this step as many times as required, if you need to add more domain names.

### Configure the domain name (DNS)

Once the domain name has been added as an associated domain, make sure that its configuration is correct by using the table displayed. A green box will show that the domain name is correctly configured. If the box is red, additional steps might be required: 

- **If you chose automatic configuration when adding the domain**: Wait a few minutes until the changes are applied in the OVHcloud Control Panel.

- **If you have entered a non-OVHcloud domain name**: Click the red box to view the changes you need to make. If this domain name does not use the OVHcloud configuration (its DNS servers), you must carry out the modifications in the interface you use to manage your domain name’s configuration. If you need to modify the CNAME record, you can find out more by referring to [this documentation](/pages/web/microsoft-collaborative-solutions/exchange_dns_cname).

> [!primary]
>
> Changes made to a domain name’s configuration can take between 4 and a maximum of 24 hours to propagate fully.
>

To check that your domain name is correctly configured, go back to the `Associated domains`{.action} tab for your service. If the box has turned green, your domain name is correctly configured. If not, then the configuration changes you have made may not have propagated fully.

![Add Domain](images/add_domain_exchange_step5.png){.thumbnail}

### Configure and use accounts

Now that you have added the domain names to your service, you can configure your email accounts to include them. You can do this from the `Email accounts`{.action} tab. If required, you can order additional accounts using the `Action`{.action}/`Order accounts`{.action} or `Add an account`{.action} button.

As a reminder, all of the addresses created on your service can view all of the addresses for this service in the directory, including those that have different domain names.

Once you have finished configuring your accounts, you can now start using them. To do this, OVHcloud offers **webmail**, accessible via <https://www.ovhcloud.com/en/mail/>. I If you are using a third-party client with your email accounts, ensure that the software is compatible with the service. 

If you need help with configuring your email account on an email client or a device (e.g. a smartphone or tablet) or have questions about email service features, please refer to our documentation which you can access from the [Exchange](/products/web-cloud-email-collaborative-solutions-microsoft-exchange) pages.

You can purchase Outlook licences in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we), and Office 365 licences on the following page: <https://www.ovhcloud.com/en/collaborative-tools/microsoft-365/>.

We recommend using one of these solutions if you would like to use the Outlook email client, or other software from the Microsoft Office suite.

### Delete a domain name from a platform

If you would like to remove a domain name from your Exchange service, you will need to check that it is not linked to email accounts, aliases, resources, shared accounts (only on Exchange), groups, external contacts, or footers that are still configured. In this case, you will need to **link these accounts to another domain name** on your platform, or **delete** them.

> [!warning]
>
> Before deleting email accounts, make sure they are not used. You may need to back up these accounts. If required, please refer to our guide on [Migrating your email accounts manually](/pages/web/emails/manual_email_migration) which explains how to export account data from your Control Panel or email software.

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

[Creating a CNAME record to add an associated domain](/pages/web/microsoft-collaborative-solutions/exchange_dns_cname)

[Editing an OVHcloud DNS zone](/pages/web/domains/dns_zone_edit)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en/).
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.