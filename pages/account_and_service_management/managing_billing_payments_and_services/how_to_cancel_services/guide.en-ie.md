---
title: How to cancel your OVHcloud services
excerpt: Find out how to discontinue your OVHcloud subscriptions
updated: 2024-01-19
---

## Objective

You want to cancel one or more OVHcloud services. This guide will show you how to cancel your subscription via the [OVHcloud Control Panel](/links/manager).

-First read the section "[What happens when an OVHcloud service is cancelled?](#consequences)".
-Follow the steps described in the section "[How do I cancel my subscription?](#terminate)".

### What happens when an OVHcloud service is cancelled? <a name="consequences"></a>

The “termination” of an OVHcloud service implies that it will be **permanently** discontinued at the end of the current subscription (with an exception, however, for [domain names](#domain)).
You can cancel your service or [stop a cancellation request](#cancel) up to 24 hours before the subscription end date.

If this is an email solution, a server or a web hosting plan, all of the data concerned will be deleted **without any possibility of recovery**.<br>
If it is a domain name, it will be recirculated and can be **ordered by other customers**.

Before cancelling a service, you must be **certain**:

- The operation will concern a service that you no longer want to use.
- That you have a **functional** solution to replace it.
- That you have backed up all of the data concerned.

<a name="domain"></a>

> [!primary]
> **Domain name cancellation**
>
> Following your termination and the end of the current subscription, your generic domain name (.com, .org, .net, etc.) will remain reserved for a "grace period" (approximately 7 days) and will then receive the "redemption" status (approximately 35 to 40 additional days). This means that only you will be able to renew it during these periods. For more details, please read the [FAQ](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#faq) at the bottom of our guide “[How to renew my OVHcloud services](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal)”.
>

## Requirements

- You must be the "administrative contact" of the service to be cancelled (for more information, see [this guide](/pages/account_and_service_management/account_information/managing_contacts#definition)).
- You have access to your [OVHcloud Control Panel](/links/manager).
- Your OVHcloud services to be cancelled are active (not suspended due to payment default).

## Instructions

The cancellation procedure is identical for the majority of OVHcloud services.

However, there are **special cases** that are detailed [below](#specific-cases) in this guide.

### How do I cancel my subscription? <a name="terminate"></a>

To cancel your service subscription, log in to your [OVHcloud Control Panel](/links/manager), click on your name in the top right-hand corner, then on the `Products and services`{.action} button.

![products and services](images/products-services.png){.thumbnail}

Next, click the `...`{.action} button to the right of the service you want to cancel, then `Cancel`{.action}.

![cancel](images/cancel-en.png){.thumbnail}

Specify the reasons for your termination request, then click `Confirm`{.action}.

> [!primary]
>
> Learning your opinion is essential for us in order to develop our services to suit your needs and expectations.
>
> Please tell us more about your personal experience with OVHcloud by filling in the cancellation form. We thank you in advance for your contribution to the improvement of our products.
>

Your service will be cancelled on the **date of effect** listed in the “My services” table. If you do not see the status “Cancellation requested”, please refresh the page.

![termination request](images/cancellation-request.png){.thumbnail}

### Special cases <a name="specific-cases"></a>

#### MX Plan email <a name="mxplan"></a>

Most MX Plan services are linked to a web hosting plan. If this is the case and you would like to delete this email option, follow [the instructions in this guide](/pages/web_cloud/web_hosting/activate-email-hosting/#deleting-the-email-solution-linked-to-your-web-hosting-plan).

**Warning**: Deleting an MX Plan will permanently delete all of the data associated with it, and will not result in any refunds.

If your MX Plan email solution was ordered independently of any hosting plan, follow [the procedure detailed above](#terminate).

#### Email Pro <a name="emailpro"></a>

To cancel your [Email Pro](https://www.ovhcloud.com/en-ie/emails/email-pro/) service, follow the instructions of this [guide](/pages/web_cloud/email_and_collaborative_solutions/email_pro/manage_billing_emailpro#deleting-accounts).

#### Hosted Exchange <a name="hosted"></a>

To cancel your [Hosted Exchange](https://www.ovhcloud.com/en-ie/emails/hosted-exchange/) service, follow the instructions of this [guide](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/manage_billing_exchange#deleting-accounts).

#### Private Exchange <a name="private"></a>

To cancel your [Private Exchange](https://www.ovhcloud.com/en-ie/emails/private-exchange/) solution, follow the instructions in this [guide](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/manage_billing_exchange#deleting-accounts_1).

#### Office 365 CSP1 <a name="office-csp1"></a>

To cancel your [Office 365 CSP1](https://www.ovhcloud.com/en-ie/collaborative-tools/microsoft-365/) solution, follow the instructions in this [guide](/pages/web_cloud/email_and_collaborative_solutions/microsoft_office/office_csp1#manage-your-subscriptions).

#### Office 365 CSP2 <a name="office-csp2"></a>

To cancel your [Office 365 CSP2](https://www.ovhcloud.com/en-ie/collaborative-tools/microsoft-365/) solution, follow the instructions in this [guide](/pages/web_cloud/email_and_collaborative_solutions/microsoft_office/office_csp2#manage-your-subscriptions).

#### SMS <a name="sms"></a>

There is no cancellation procedure for [SMS offers](https://www.ovh.co.uk/sms/). An SMS account does not generate a monthly subscription or billing. SMS credits have an unlimited lifetime.

If you would like to delete an SMS account, please create a support request via the OVHcloud Control Panel.

#### Managed Bare Metal <a name="managedbaremetal"></a>

To cancel your [Managed Bare Metal](https://www.ovhcloud.com/en-ie/managed-bare-metal/) solution, follow the instructions in this [guide](/pages/bare_metal_cloud/managed_bare_metal/how-to-cancel).

#### VMware on OVHcloud <a name="hostedprivatecloud-vmware"></a>

To cancel your [VMware on OVHcloud](https://www.ovhcloud.com/en-ie/hosted-private-cloud/), follow the instructions in this [guide](/pages/account_and_service_management/managing_billing_payments_and_services/comment_resilier_le_private_cloud).

#### Public Cloud <a name="publiccloud"></a>

Each [Public Cloud](https://www.ovhcloud.com/en-ie/public-cloud/) service can be deleted from the `Public Cloud`{.action} tab in the Control Panel.

Select a service on the left, click on the `...`{.action} button to the right of the service concerned, then on `Delete`{.action}, as in the example below for an instance:

![public cloud instance deletion](images/pci-deletion-en.png){.thumbnail}

OVHcloud Public Cloud is based on the principle of *Pay-as-you-go* (you can find more details on our page [information on Public Cloud billing method](/pages/public_cloud/compute/analyze_billing)). At the end of the month, you only pay for the actual resource usage time.

You can also [view your current resource usage](/pages/public_cloud/compute/analyze_billing#view-your-current-resource-usage) in the OVHcloud Control Panel, and receive email alerts if your resource usage is projected to exceed a certain threshold.

## How do I stop my subscription cancellation? <a name="cancel"></a>

> [!warning]
>
> You can revoke a cancellation request up to 24 hours before the subscription end date.
>

To abort a cancellation request, log in to your [OVHcloud Control Panel](/links/manager), click on your name in the top right-hand corner, then the `Products and services`{.action} button.

Next, click the `...`{.action} button to the right of the service for which a cancellation request is being made, then `Stop cancellation of service`{.action}

![cancel_termination](images/cancel_termination-en.png){.thumbnail}

Finally, click `Confirm cancellation`{.action}.

A termination of a cancellation procedure is effective immediately. Please refresh the "My services" page if you still see the "cancellation requested" status.

## FAQ

> [!faq]
>
> I cannot cancel a service. What should I do?
>> If you are unable to cancel a service (the `Cancel`{.action} button is not available), it may be one of the specific cases detailed [previously in this guide](#specific-cases).
>> Also check that the following conditions are met:
>>
>> - You must be the “administrative contact” for the service. For more information, see [this guide](/pages/account_and_service_management/account_information/managing_contacts#definition).
>> - The service is in **automatic renewal**. If your service is in [manual renewal](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#auto-vs-manual), it will be suspended on its expiry date, then deleted after a few days.
>> - The service is not suspended, mainly because of a bill that has not been settled. Check that you are up to date in the [payments](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) and [renewals](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) of your services.
>>
>> If you are still unable to cancel your service, contact our support teams by opening a ticket from the [Help Centre](https://help.ovhcloud.com/csm?id=csm_cases_requests).
> How do I cancel all my services?
>> You must terminate each service individually. You cannot cancel several services at once, or request a global cancellation from our customer support teams.
> How do I delete my OVHcloud account?
>> Closing your OVHcloud customer account and deleting your personal data is only possible if:
>>
>> 1. You no longer have any services listed in the “[My services](https://www.ovh.com/manager/dedicated/#/billing/autoRenew)” section. Otherwise, you will need to request their termination and wait for their deletion.
>> 2. You do not have any invoices awaiting payment. Otherwise, you will need to pay for them by clicking the `Pay immediately`{.action} button in the bulk actions section of the “[My bills](https://www.ovh.com/manager/#/dedicated/billing/history)” page.
>> 3. You have no pending orders. Check it on [this page](https://www.ovh.com/manager/#/dedicated/billing/orders/orders).
>> 4. Your prepaid account has no credit balance. Check it on [this page](https://www.ovh.com/manager/#/dedicated/billing/payment/ovhaccount).
>>
>> If the above conditions are met, you can request to delete your OVHcloud account and the related data by following these steps:
>>
>> 1. Log in to the [OVHcloud Help Centre](https://help.ovhcloud.com/csm?id=csm_get_help).
>> 2. Click the `Create ticket`{.action} button.
>> 3. Select the reason `Manage your OVHcloud customer account`.
>> 4. Specify `I want to close my OVHcloud account` and follow the steps described.

## Go further <a name="gofurther"></a>

[Managing renewal for OVHcloud services](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal)

Join our community of users on <https://community.ovh.com/en/>.
