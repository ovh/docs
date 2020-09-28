---
title: 'Managing renewal for OVHcloud services'
slug: how-to-use-automatic-renewal-at-ovh
excerpt: 'Find out how to manage automatic renewal for your services via the OVHcloud Control Panel'
section: 'Managing the renewal of services'
---

**Last updated 10th June 2020**

## Objective

You can manage renewals and cancellations for your services via the OVHcloud Control Panel.

**Find out how to manage automatic renewal for your services via the OVHcloud Control Panel.**

> [!primary]
>
> Depending on your place of residence, local legislation, and the solutions concerned, the details in this guide may vary or not apply to your situation. If you are unsure about any details, please refer to your OVHcloud contracts. You can view these via the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external} by going to the `My services`{.action} section, then `Contracts`{.action}.
> 
This guide is not applicable for US services. If you are a customer of OVHcloud US, please refer to [the guide for your region](https://support.us.ovhcloud.com/hc/en-us/articles/360002306224). 
>


## Requirements

- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}
- active OVHcloud services
- access as a billing contact for your OVHcloud services

## Instructions

When you place orders, your services are set to be automatically renewed on their expiry date. Payments are taken via the default payment method saved in the OVHcloud Control Panel. You can cancel your services whenever you want via the OVHcloud Control Panel, and they will not be renewed after their expiry date has passed.

You can also set certain products (domains, hosting plans, VPS, dedicated servers) to manual renewal, if you do not want payments and renewals to be carried out automatically.

We recommend reading the following guides, and you can focus on the operations you wish to carry out. 

- [View the status of your services.](./#display-the-renewal-statuses-for-your-services) This guide will help you check if your services are renewed automatically. You can also check their renewal and expiry dates.

- [Manage renewal for your services.](./#renewal-at-ovhcloud) This guide will help you enable or disable automatic renewal, change the payment frequency for a service, and pay for renewals before their expiry date.

- [Manage your payment methods.](../manage-payment-methods/) You can use this guide to ensure that you have a payment method saved for future renewals. You can also add and delete payment methods, if necessary.

### Access your service’s settings.

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}. Click on the name associated with your NIC handle (Customer ID) in the menu bar in the top right-hand corner, then select `Products and services`{.action}. 

![manageautomaticrenewal](images/hubservices.png){.thumbnail}

### Display the renewal statuses for your services.

The “My services” page contains a table for managing your OVHcloud services. On this page, you can find the service names, types, service availability (e.g. if it is suspended), its status (renewal type, actions required, etc.), and the date by which you need to take the action.

![manageautomaticrenewal](images/manageautorenew2b.png){.thumbnail}

You can sort the columns by ascending or descending order, use the search field, or apply a filter to only display a selection of your services that match a chosen set of criteria.

![manageautomaticrenewal](images/manageautorenew3.png){.thumbnail}

Your filter criteria are then displayed above the table. Here is an example of a filter that displays domain names with bills awaiting payment.

![manageautomaticrenewal](images/manageautorenew4b.png){.thumbnail}

### Renewal at OVHcloud.

#### **Automatic renewal**

When you subscribe to a service, it is set to **automatic renewal** by default. This setting means you can ensure your services are systematically renewed on their expiry date. Also, if you have registered a payment method in the OVHcloud Control Panel, it will be used to pay for your bills automatically.

If you have not registered any payment methods, you will be sent a bill via email. You can then pay it online.

For services with an automatic renewal frequency higher than 1 month (3 months, 6 months, 12 months), you will also be sent an email reminder the month before, listing the services that will need to be renewed soon.

If you do not want to renew a service, simply cancel it via the OVHcloud Control Panel.

#### **Manual renewal.**

For some OVHcloud products (domains, web hosting plans, VPS, dedicated servers), you can switch to **manual renewal**. This renewal mode is useful if you are not sure whether you want to keep the service until its expiry date, or if you do not want payments to be taken automatically via your payment method. 

If you select this mode, you will receive several reminder emails before the expiry date, each containing a link for renewing your services online before the expiry date. You can also pay via the OVHcloud Control Panel.

> [!warning]
>
>If you do not pay for a service in manual renewal, it is suspended on its expiry date, then deleted after a few days.
>
>However, if you do not want to keep this service, you will not need to request cancellation.
>


### Manage renewal for your services.

To the right of each service, click on the `...`{.action} in the “Actions” column to set renewal for your services.

![manageautomaticrenewal](images/manageautorenew5b.png){.thumbnail}

> [!primary]
>
>Depending on the service, some actions may not be available depending on whether or not it is eligible for manual renewal.
>
 
#### **Configure the renewal.**

![manageautomaticrenewal](images/manageautorenew6b.png){.thumbnail}

Depending on the service you have chosen, you can set it to manual renewal, or choose a frequency for automatic renewal. If your service is eligible, you can choose the renewal type and frequency.

![manageautomaticrenewal](images/manageautorenew7.png){.thumbnail}

Depending on your choice, you will be given information on future payment dates, the payment method that will be used, and the service’s expiry date.

#### **Renew the service.**

This action is only applicable to services set to manual renewal, and it will redirect you to an online payment interface. You can renew these services at any time before their expiry, and choose their renewal duration. 

#### **Anticipate payment.**

This action is applicable to services set to automatic renewal, and it will redirect you to an online payment interface. You can renew these services at any time before their expiry, and choose their renewal duration. In this case, the duration of validity you subscribe to will be added to the current validity duration. You will not lose any remaining validity time.

#### **Cancel on expiry.**

This action is available for services set to automatic renewal. By choosing this action, automatic payments and renewals are disabled for the service you have selected.

#### **Pay your bill.**

If you have services set to automatic renewal, but have not registered a payment method for paying your bills, a “Bill to pay” comment will be displayed when a bill is awaiting payment. Then click `Pay my bill`{.action}, which will redirect you to an online payment interface.

#### **Group actions.**

You can perform group actions by selecting several services in the table, then clicking `Actions`{.action}.

![manageautomaticrenewal](images/manageautorenew9.png){.thumbnail}

The table below details the group actions you can perform.

|  Possible actions  |  Description  |
|  :-----          |  :-----          |
|  Renew |  Renew several services at once. You will be redirected to a page where you can choose the renewal duration you want, and pay online. |
|  Disable automatic payment |  Disable automatic payment for several services at once. If one or more of your services cannot be set to automatic renewal, this will be flagged when you confirm. |
|  Enable automatic payment |  Enable automatic payment for several services at once. Only eligible services will be updated. |
|  Export in CSV |  Create a file in the *.csv* format. |
|  Align renewal dates |  Aligns the expiry dates for your services on a single calendar day. Only eligible services can be updated. |


## Go further

Join our community of users on <https://community.ovh.com/en/>.
