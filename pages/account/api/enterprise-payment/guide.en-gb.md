---
title: Manage payement and billing of OVHcloud services
slug: ovh-enterprise-payment
excerpt: Discover how to add a payment mean, automate accounting and manage your corporate billing
section: OVH APIv6
---

**Last updated January 2 2020**

## Objective

We will describe a par of your payment and billing management cycle at OVHcloud.

## Requirements

* Be connected on [API OVH](https://api.ovh.com/console){.external}.
* Have [created your credentials for OVH API](https://docs.ovh.com/gb/en/customer/first-steps-with-ovh-api/){.external}.
* Have a customer account wih Reseller Tag (Please contact your sale to know how to be eligible).
* Have [created subaccounts for OVHcloud API if necessary](https://docs.ovh.com/gb/en/api/ovh-api-sub-account/){.external}.
* Have at least the Business or Enterprise Support level.

## Instructions

### Ressources

* /me/bill

### Operation process

#### SuspenAdd SEPA Transfer Payment Methodd

Contact your sales representative and indicate that you would like to have a SEPA transfer payment method and the desired payment period (e.g.: 30, 45 or 60 days in France).

Additional attributes will be added to your account to allow SEPA transfer payment method, to specify the payment time and to enable permanent automatic renewal.

In the APIv6 and in your manager, in your payment methods will appear a new item entitled: **PaymentEnterprisewithxxdays**.

> [!api]
>
> @api {GET} /me/payment/method
>

#### How to enter a Purchase Order number (PO)

In order for OVHcloud to be able to edit invoices with the desired **Purchase Order (PO)** number, contact your sales representative to give them this number.

If you change this **PO** number, contact your sales representative as soon as possible.

#### Retrieve Sub-Account bills

Use the id of the sub-account and consumerkey to log on to APIv6.

Retrieve the list of bills associated with this subaccount:

> [!api]
>
> @api {GET} /me/bill
>

Get the detailed bill using the billID:

> [!api]
>
> @api {GET}  /me/bill/{billId}/details
>

## Go further

Join our community of users on <https://community.ovh.com/en/>.
