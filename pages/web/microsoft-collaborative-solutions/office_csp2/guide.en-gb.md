---
title: Managing a group of OVHcloud Office 365 Reseller licences (CSP2)
slug: order-and-manage-a-group-of-ovh-office-365-csp2-reseller-licences
excerpt: Find out how to subscribe to and manage an Office 365 Reseller (CSP2) service from OVHcloud
section: Office
order: 03
---

**Last updated 17th January 2023**

## Objective

Office 365 for Resellers (CSP2) is a service that allows you to purchase different types of Microsoft 365 licences at discounted prices so you can resell them to your customers.

**This guide explains how to subscribe to and manage an Office 365 Reseller (CSP2) service from OVHcloud.**

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- An [MPN ID](https://learn.microsoft.com/partner-center/mpn-create-a-partner-center-account) (Microsoft Partner Network IDentifier)
- Registration with the Microsoft Cloud Solution Provider (CSP) program as an "indirect reseller" in the region where you operate (for example: “EU” for Europe)

> [!warning]
>
> Since 01/07/2022, all Office 365 reseller services (CSP2) must have an MPN ID registered in the "CSP indirect reseller" program. They will be disabled by Microsoft otherwise.
>
> An MPN ID is now mandatory for all new subscriptions.
>

If you do not already have an MPN ID, you can create one (if you are eligible according to the Microsoft terms and conditions) by following the official Microsoft documentation: "[What is the Microsoft Cloud Partner Program?](https://docs.microsoft.com/partner-center/mpn-create-a-partner-center-account){.external}".

To register as an indirect reseller, please refer to the Microsoft documentation [“Enroll as an indirect reseller”](https://docs.microsoft.com/partner-center/enrolling-in-the-csp-program#enroll-as-an-indirect-reseller){.external}.

> [!success]
>
> With the MPN ID, you can receive a cash-back rebate for the subscriptions you order via the OVHcloud Control Panel. This cash-back process is subject to rules defined by Microsoft, depending on the volume of subscriptions you generate.
>

## Instructions

### Order an Office 365 Reseller service

To order an Office 365 Resellers service, go to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB). Once you have logged in, select `Sunrise`{.action} in the top menu, then click on `Office 365 Revendeurs`{.action}.

- *Optional*: You can define a custom **subdomain** when you create a new platform by ticking the box provided for this purpose (subject to the available names).
- Enter your previously created MPN ID from Microsoft.
- Fill in the contact information for the end customer, and they are requested to define the manager of the licence group (*Tenant*) you are going to create.
- In the list below, add the licences you want to integrate into your group.
- Click `Order`{.action} to complete.

> [!warning]
> Please ensure that the email address entered when you created your licence group is valid, as it will be used to receive credentials for the Microsoft platform.
>

![office365](images/csp2-01.png){.thumbnail}

> [!warning]
> For products that are under licence, it is not possible to transfer an Office 365 reseller *Tenant* from one OVHcloud NIC handle to another. It is necessary to cancel the subscription on the original OVHcloud customer account and subscribe to the same type of licence on the new OVHcloud customer account.
>

### Manage your Office 365 Reseller service

Once the Office 365 service has been created, it will be available to manage in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external}.

To do this, go to the `Sunrise`{.action} section. In the left-hand menu, choose `Office 365 Revendeurs`{.action}, then select the service.

The following information appears:

- **Internal service name**: Indicates the name of your service. You can only view it in your Control Panel. It also corresponds to the *Tenant* (which contains your licence group) at Microsoft.
- **Service display name**: Allows you to customise the display name of the service in your Control Panel.
- **Created**: indicates when the service was created.
- **Microsoft administrative portal**: Provides access to the Office portal that allows you to manage your subscriptions.
- You can manage your Microsoft *Tenant*'s admin password directly in the Microsoft administration interface. Please refer to [the Microsoft documentation](https://support.microsoft.com/account-billing/reset-a-forgotten-microsoft-account-password-eff4f067-5042-c1a3-fe72-b04d60556c37).
- You can also manage additional domain names from the Microsoft administration interface. See [the Microsoft documentation](https://support.microsoft.com/office/connect-your-domain-to-office-365-cd74b4fa-6d34-4669-9937-ed178ac84515).

![office365](images/sunrise_office365_CSP2_services_details.png){.thumbnail}

### Manage your subscriptions

By managing your subscriptions, you can increase or cancel licences associated with your subscription group. A table allows you to view the details:

- **ID**: Each type of licence ordered has a unique identifier (ID).
- **Status**: This the status of your licence.
- **Licence name**: Indicates the type of licence you have subscribed.
- **Number of licences**: Indicates the number of available licences.
- **Creation date**: Indicates when the subscription to the selected licence type was created.
- **Last update**: Indicates when the subscription was last updated (such as adding a licence).

Use the <i class="icons-pen"></i> to change the total number of licences in the subscription. The <i class="icons-bin"></i> allows you to cancel the subscription and all of its licences.

> [!primary]
>
> Microsoft has special conditions of use for academic licences that must be complied with. You can find these official documents according to your language and region [here](https://www.microsoft.com/licensing/docs){.external}.
>

![office365](images/sunrise_office365_CSP2_Subscribers.png){.thumbnail}

### Manage users

Now that you have your licences available, you need to manage the users who will use them. You can do this directly via the [Microsoft administrative portal](https://portal.office.com/Admin/Default.aspx){.external}.

To log in, enter the username and the password from the email OVHcloud sent you confirming the installation of your licence group. This information is sent to the address provided when the licence group was created.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
