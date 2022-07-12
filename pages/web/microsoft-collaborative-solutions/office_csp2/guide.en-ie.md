---
title: Managing a group of OVHcloud Office 365 Reseller licences (CSP2)
slug: order-and-manage-a-group-of-ovh-office-365-csp2-reseller-licences
excerpt: Find out how to subscribe to and manage an Office 365 Reseller (CSP2) service from OVHcloud
section: Office
order: 3
---

**Last updated 17th June 2022**

## Objective

Office 365 for Resellers (CSP2) is a service that allows you to get different types of Microsoft 365 licences at discounted prices so you can resell them to your customers.

**This guide explains how to subscribe to and manage an Office 365 Reseller (CSP2) service from OVHcloud.**

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie)
- An MPN ID (Microsoft Partner Network Identifier)
- You must be registered in the Microsoft Cloud Solution Provider (CSP) programme as an indirect reseller in the region where you operate (e.g.: “EU” for Europe)

> [!warning]
>
> From July 1st 2022, all Office 365 reseller (CSP2) services that do not have an MPN ID registered in the `CSP indirect reseller` programme will be disabled by Microsoft.
>
> An MPN ID is now mandatory for all new subscriptions.
>
If you do not already have an MPN ID, you can create one (if you are eligible for the Microsoft terms) by following the [Microsoft official documentation](https://docs.microsoft.com/en-ie/partner-center/mpn-create-a-partner-center-account){.external}.

To register as an indirect reseller, please refer to this other [Microsoft official documentation](https://docs.microsoft.com/en-ie/partner-center/enrolling-in-the-csp-program#enroll-as-an-indirect-reseller){.external}.

> [!success]
>
> The MPN ID will allow you to get cashback on the subscriptions you order via the OVHcloud Control Panel. This cashback is subject to rules defined by Microsoft, depending on the volume of subscriptions you generate.
>

## Instructions

### Order an Office 365 Reseller service

To order an Office 365 Resellers service, go to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie). Once you have logged in, select `Sunrise`{.action} in the top menu, then click on `Office 365 Revendeurs`{.action}.

- Enter your MPN ID previously created with Microsoft.
- Enter the contact information for your end customer. This information is requested to define the manager for the licence group ("Tenant") you are going to create.

> [!primary]
>
> You can also define a **custom sub-domain** when creating a new platform by ticking the box provided for this purpose (subject to the available names).

- In the list below, specify the licences you want to add to your group.
- Click `Order`{.action} to complete your order.

> [!warning]
>
> Please ensure that the email address entered when you create your licence group is valid, as it will receive the credentials for the Microsoft platform.
>

![office365](images/csp2-01.png){.thumbnail}

#### Special case of delegations

- If you already have an Office 365 CSP2 service with Microsoft, you can delegate the administration to OVHcloud. You can then add additional subscriptions directly via the OVHcloud Control Panel. When ordering a new group of licences, you will then need to choose `Delegate a platform you previously created with Microsoft` and specify exactly the **existing Tenant Office 365** that you can find on your Microsoft portal, along with your MPN ID.

- If you are already using a provider other than OVHcloud for your Office 365 resellers, you can also delegate the administration to OVHcloud, but you will need to break the link with your old provider beforehand.

- You will need to double-validate the tenant when it appears in your OVHcloud Control Panel.

- Once you have subscribed to the delegated tenant, the licences will be available on your [Microsoft administration portal](https://portal.office.com/Admin/Default.aspx){.external}. You will then need to replace your old licences in your [Microsoft administration portal](https://portal.office.com/Admin/Default.aspx){.external} with the OVHcloud licences, then cancel your old licences so that you do not continue to pay for them in duplicate.

- Don’t worry, if you have licences that are unavailable for purchase from OVHcloud, you can keep them active with Microsoft.

> [!warning]
> Since these are licenced products, it is not possible to switch an Office 365 reseller tenant from one OVHcloud NIC handle to another.
>

### Manage your Office 365 Reseller service

Once the Office 365 service has been created, it will be available to manage in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.

To do this, go to the `Sunrise`{.action} section. In the left-hand menu, choose `Office 365 Revendeurs`{.action}, then select the service.

The following information appears:

- **Internal service name**: indicates the name of your service. You can only view it in your Control Panel. It also corresponds to the Tenant (which contains your licence group) at Microsoft.
- **Service display name**: allows you to customise the display name of the service in your Control Panel.
- **Created**: indicates when the service was created.
- **Microsoft administrative Portal**: provides access to the Office portal that allows you to manage your subscriptions.
- **Reset the admin password**: allows you to change the password for logging in to the Microsoft administration portal.

![office365](images/sunrise_office365_CSP2_services_details.png){.thumbnail}

### Automatically configure a domain name registered at OVHcloud

OVHcloud provides a tool that makes it easy to configure your domain name's DNS zone. You can automatically configure your domain names using the OVHcloud DNS zone, so that they can work with the following solutions:

- Exchange Online
- Skype;
- Intune.

To do this, select the domain in question from the drop-down list, and then select the appropriate solutions. The necessary DNS records will then be added in the domain's DNS zone at OVHcloud.

> [!warning]
> For the configuration to work, you need to ensure that you are using the OVHcloud DNS servers for the domain names concerned. Please refer to our guide on [Modifying DNS servers for an OVHcloud domain name](https://docs.ovh.com/ie/en/domains/web_hosting_general_information_about_dns_servers/).
>

![office365](images/sunrise_office365_CSP2_automatic_domain_configuration.png){.thumbnail}

### Manage your subscriptions

By managing your subscriptions, you can increase or cancel licences associated with your subscription group. A table allows you to view the details:

- **ID**: each type of licence ordered has a unique identifier (ID).
- **Status**: is the status of your licence.
- **Licence name**: indicates the type of licence you have subscribed.
- **Number of licences**: indicates the number of available licences.
- **Creation date**: indicates when the subscription to the selected licence type was created.
- **Last update**: indicates when the subscription was last updated (such as adding a licence).

Use the `pencil icon` to change the total number of licences in the subscription. The `trash can icon` allows you to cancel the subscription and all of its licences.

> [!primary]
>
> Microsoft has special conditions of use for academic licences that must be complied with. You can find these official documents according to your language and region [here](http://www.microsoftvolumelicensing.com/DocumentSearch.aspx?Mode=2&Keyword=AcademicQualEdUserDef){.external}.
>

![office365](images/sunrise_office365_CSP2_Subscribers.png){.thumbnail}

### Manage users

Now that you have your licences available, you need to manage the users who will use them. You can do this directly via the [Microsoft administrative portal](https://portal.office.com/Admin/Default.aspx){.external}.

To log in, enter your NIC handle and the password from the email OVHcloud sent you confirming the installation of your licence group. This information is sent to the address provided when the licence group was created.

## Go further

Join our community of users on <https://community.ovh.com/en/>.

