---
title: 'Manage payment and billing of OVHcloud services'
slug: ovh-enterprise-payment
excerpt: 'Discover how to add a payment mean, automate accounting and manage your corporate billing'
section: 'OVH APIv6'
---

**Last updated January 2 2020**

## Objective

We will describe part of your payment and billing cycle at OVHcloud.

## Requirements

* Being connected on [OVHcloud API](https://api.ovh.com/console){.external}.
* Having [created your credentials for OVHcloud API](https://docs.ovh.com/gb/en/customer/first-steps-with-ovh-api/){.external}.
* Having a customer account wih Reseller Tag (contact your sales representative for eligibility if applicable).
* Having [created subaccounts for the OVHcloud API if necessary](https://docs.ovh.com/gb/en/api/ovh-api-sub-account/){.external}.
* Having at least the Business or Enterprise Support level.

## Instructions

### Ressources

* /me/bill

### Operation process

#### Add SEPA transfer payment method

Contact your sales representative and indicate that you would like to have a SEPA transfer payment method and the desired payment period (e.g.: 30, 45 or 60 days in France).

Additional attributes will be added to your account to authorize SEPA wire transfer payment, to specify the payment deadline and to enable permanent automatic renewal.

In the APIv6 and in your control panel, in your payment methods will appear a new item called: **PaymentEnterprisewithxxdays**.

> [!api]
>
> @api {GET} /me/payment/method
>

#### How to enter a Purchase Order number (PO)

In order for OVHcloud to edit invoices with the desired **Purchase Order (PO)** number, contact your sales representative to give them this number.

If you change this **PO** number, contact your sales representative as soon as possible.

#### Retrieve sub-Account bills

Use the id of the sub-account and consumerkey to log on to APIv6.

Retrieve the list of bills associated with this subaccount:

> [!api]
>
> @api {GET} /me/bill
>

Retrieve the detailed bill using the billID:

> [!api]
>
> @api {GET}  /me/bill/{billId}/details
>

## Go further

Join our community of users on <https://community.ovh.com/en/>.