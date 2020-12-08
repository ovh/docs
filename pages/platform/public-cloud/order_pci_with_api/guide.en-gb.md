---
title: 'Ordering Public Cloud projects using the OVHcloud API'
excerpt: 'Find out how to order your Public Cloud service with the OVHcloud API'
slug: public-cloud-service-order-api
section: Getting started
order: 8
---

**Last updated 8th December 2020**

## Objective



**This guide explains how to order a Public Cloud project including an instance via the OVHcloud API by means of an example.**

## Requirements

- user credentials for an active OVHcloud account
- a valid [payment method](../../billing/manage-payment-methods/) saved in your OVHcloud account
- deciding which [service you would like to order](https://www.ovhcloud.com/en-gb/public-cloud/)
- consulting the [OVHcloud API first steps guide](../../api/first-steps-with-ovh-api/) to familiarise yourself with the OVHcloud APIv6

## Instructions

Log in to the [OVHcloud API interface](https://api.ovh.com/console/) according to the [relevant guide](../../api/first-steps-with-ovh-api/) and follow the steps below.

### Step 1: Building your cart

In the first step you create a cart and add all the items you would like to have included in your order. It is required to add a Public Cloud project (free of charge) first.

#### Create the cart

Use this call to create the cart:

> [!api]
>
> @api {POST} /order/cart
>

Make sure to choose your appropriate OVHcloud API subsidiary. Take note of the cart number ("cartId") in the response; it will be used to identify this cart.

Next you will need to add a Public Cloud project. Use this call with your "cartId" to verify the service availability:

> [!api]
>
> @api {GET} /order/cart/{cartId}/cloud
>

In the response you can verify the parameters pertaining to a Public Cloud project:

>
>**planCode**: "project"
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
|planCode|project|
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

Use the following endpoint to name your project (**label**: "description"):

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

The response will include a "configurationId" which can be used (together with the "cartId" and "itemId") to retrieve the configuration or delete it, for example:

> [!api]
>
> @api {DELETE} /order/cart/{cartId}/item/{itemId}/configuration/{configurationId}
>

#### Add an instance to the cart

An actual service can be added to the cart by configuring options for the project.

Use this call to retrieve the available options:

> [!api]
>
> @api {GET} /order/cart/{cartId}/cloud/options
>

|Field|Value| 
|---|---| 
|cartId|*ID of your cart*|
|planCode|project|

The next step will then add a monthly instance to the project.

> [!api]
>
> @api {POST} /order/cart/{cartId}/cloud/options
>

|Field|Value| 
|---|---| 
|cartId|*ID of your cart*|
|duration|P1M|
|itemId|*ID of the item*|
|planCode|s1-2.monthly|
|pricingMode|default|
|quantity|1|




### Step 2: Checking out the cart

You can verify your cart contents using the "cartId":

> [!api]
>
> @api {GET} /order/cart/{cartId}/checkout
>

With the following call you can create a link to your order. It is required to tick the checkbox in order to waive the right of withdrawal.

> [!api]
>
> @api {POST} /order/cart/{cartId}/checkout
>



## Go further

Join our community of users on <https://community.ovh.com/en/>.
