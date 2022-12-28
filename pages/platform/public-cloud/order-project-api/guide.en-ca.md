---
title: 'Ordering Public Cloud projects using the OVHcloud API'
excerpt: 'Find out how to order your Public Cloud project with the OVHcloud API'
slug: public-cloud-project-order-api
section: Getting started
order: 9
---

**Last updated 9th December 2020**

## Objective

Creating a project is the first step in deploying [Public Cloud instances](https://www.ovhcloud.com/en-ca/public-cloud/).

**This guide explains how to order a Public Cloud project via the OVHcloud API.**

## Requirements

- User credentials for an active OVHcloud account
- A valid [payment method](../../billing/manage-payment-methods/) saved in your OVHcloud account
- Consulting the [OVHcloud API first steps guide](../../api/first-steps-with-ovh-api/) to familiarise yourself with the OVHcloud APIv6

## Instructions

Log in to the [OVHcloud API interface](https://ca.api.ovh.com/) according to the [relevant guide](../../api/first-steps-with-ovh-api/) and follow the steps below.

### Step 1: Building your cart

The first step of an order is to create a 'shopping cart'. Following that you can add a Public Cloud project.

#### Create the cart

Use this call to create the cart:

> [!api]
>
> @api {POST} /order/cart
>

Make sure to choose your appropriate OVHcloud API subsidiary. Take note of the cart number ("cartId") in the response; it will be required to identify this cart.

Next you will need to add a Public Cloud project as an item. Use this call with your "cartId" to verify the service availability:

> [!api]
>
> @api {GET} /order/cart/{cartId}/cloud
>

In the response you can verify the parameters pertaining to a Public Cloud project:

>
>**planCode**: "project.2018"
>
>**productName**: "Public Cloud Project"
>

#### Add a project to the cart

Now use this call to add the item to your cart:

> [!api]
>
> @api {POST} /order/cart/{cartId}/cloud
>

The following information, retrieved in the previous steps, needs to be provided:

|Field|Value|
|---|---| 
|cartId|*ID of your cart*|
|duration|P1M|
|planCode|project.2018|
|pricingMode|default|
|quantity|1|

The response will include an "itemId" which can be used (together with the "cartId") to retrieve the cart item:

> [!api]
>
> @api {GET} /order/cart/{cartId}/item/{itemId}
>

You can check the list of available configuration settings for this item with this call:

> [!api]
>
> @api {GET} /order/cart/{cartId}/item/{itemId}/requiredConfiguration
>

Use the following endpoint to name your project (`label: "description"`):

> [!api]
>
> @api {POST} /order/cart/{cartId}/item/{itemId}/configuration
>

|Field|Value|
|---|---| 
|cartId|*ID of your cart*|
|itemId|*ID of the item*|
|label|description|
|value|*Your project name*|

To apply a voucher code, use the same call with the label "voucher", etc.

The responses will include a "configurationId" which can be used (together with the "cartId" and "itemId") to retrieve the configuration (GET) or delete it, for example:

> [!api]
>
> @api {DELETE} /order/cart/{cartId}/item/{itemId}/configuration/{configurationId}
>


### Step 2: Checking out the cart

You can verify your cart contents using the "cartId":

> [!api]
>
> @api {GET} /order/cart/{cartId}/checkout
>

With the following call you can create a link to your order. It is required to first tick the relevant checkbox in order to waive the right of withdrawal.

> [!api]
>
> @api {POST} /order/cart/{cartId}/checkout
>


## Go further

Join our community of users on <https://community.ovh.com/en/>.
