---
title: 'Managing payment methods'
slug: manage-payment-methods
excerpt: 'Find out how to add and manage payment methods within the OVHcloud Control Panel'
section: Billing
---

**Last updated 13th December 2019**

## Objective
In the OVHcloud Control Panel, you can save and manage different payment methods.

## Requirements
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}
- a valid payment method

## Instructions

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}, click your name in the top right-hand corner, then click `Payment method`{.action}.

![manage-payment-methods](images/managepaymentmethods1.png){.thumbnail}

The page that loads up will contain a table listing the payment methods saved on the OVHcloud Control Panel, namely those you have used to pay for orders. You can:

- add a payment method 
- change your default payment method
- delete a payment method

### Add a payment method.

When you order a product from OVHcloud for the first time, you are asked to save a payment method, to ensure that your service can be renewed via automatic payments.

This payment method is then used by default for all of your product renewals, and is listed as a suggested payment method when you place new orders.

You can add new payment methods so that they are suggested during new orders, and used to pay for future renewals.

You can save three different payment method types:

- Payment card
- Bank account
- PayPal account 

To do this, simply click `Add a payment method`{.action}.

![manage-payment-methods](images/managepaymentmethods2.png){.thumbnail}

Follow the the steps for saving a payment method. In the first step, you can set the new payment method as a ‘default payment method’, so that it is used for future orders and automatic payments.

If you are saving a new bank account, you will need to send an authorisation to send payments by post. To download this document, click `...`{.action} to the right of your bank account, then `Download the procedure to return by post`{.action}.

![manage-payment-methods](images/managepaymentmethods2b.png){.thumbnail}

> [!primary]
>
While this authorisation has not yet been received by our services, the status “Pending receipt” will appear next to your bank account. While it has this status, it cannot be used as a payment method.
>


### Change your default payment method.

Payments for your services’ renewal bills are always taken via your default payment method. If you would like to change it, you will need to add a new payment method in the OVHcloud Control Panel.

To do this, click on the `...`{.action} to the right of the new payment method, then `Make this the default payment method`{.action}.

![manage-payment-methods](images/managepaymentmethods3.png){.thumbnail}

### Delete a payment method.

If you no longer want to use one of your payment methods, you can delete it by clicking on the `...`{.action} button to the right of it. Then click `Delete this payment method`{.action}.

![manage-payment-methods](images/managepaymentmethods4.png){.thumbnail}

> [!warning]
>
The default payment method cannot be deleted. If you would like to delete it, you will need to set another default payment method first.
>

### Delete a payment method via the OVHcloud API.

You can delete a payment method via the API by connecting to [https://eu.api.ovh.com/](https://eu.api.ovh.com/){.external}.

Start by obtaining the payment method’s ID: 

> [!api]
>
> @api {GET} /me/payment/method 
>

Then delete the payment method using the ID from the previous step.

> [!api]
>
> @api {DELETE} /me/payment/method/{paymentMethodId}
>

## Go further

Join our community of users on <https://community.ovh.com/en/>.
