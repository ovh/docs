---
title: How to cancel your Private Cloud offer 
slug: how-to-cancel-private-cloud
excerpt: Learn how to request the termination of a Private cloud infrastructure
section: OVH Features
order: 09
---

**Last updated 8th July 2020**

## Objective

If your Private Cloud offer no longer suits you, or if you have ordered a new infrastructure to replace the old one, you can request the termination of this infrastructure, once all your data is secured.

**Find out how to cancel your Private Cloud offer.** 

## Requirements

- a [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/asia/enterprise/products/hosted-private-cloud/)
- access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager)

## Instructions

The Private Cloud offer is without obligation. However, as laid out in the [Special Terms of Service](https://www.ovh.co.uk/support/termsofservice/Special_Conditions_for_Dedicated_Cloud_2014.pdf){.external}, any month that has begun is due and payable in advance.

>[!warning]
>
> Before cancelling your offer, please be careful to retrieve all the data you wish to keep. Indeed, termination will result in the complete deletion of your Private Cloud and all the data it contains.
>

### Step 1: Request termination from the OVHcloud Control Panel

Log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager){.external}, go to `Server`{.action} (1), click on `Private Cloud`{.action} (2) and select your offer from the list (3).

In the "Service management" section of the "General Information" tab, click the button `...`{.action} (4) to the right of the renewal date. Finally, click on `Delete the service`{.action} (5).

![Control Panel Cancel](images/resiliation1.png){.thumbnail}

Please be aware that this action will remove any data on the infrastructure as soon as the termination is confirmed. No pro rata refund will be made if the infrastructure is terminated before the end of the month.

Click on `Confirm`{.action} to request termination.

![Cancellation validation](images/resiliation2.png){.thumbnail}

You will then receive a confirmation notice of your request. The procedure for confirming the termination is sent to you by email, to the address linked to the OVHcloud customer account.

![Cancellation validation](images/resiliation3.png){.thumbnail}

### Step 2: Confirm termination

Following your request, a termination confirmation email is sent to you at the address linked to the OVHcloud account.

You can also find this email in your OVHcloud client space. Click on your name at the top right and then on `Service emails`{.action}.

![Cancellation validation](images/resiliation4.png){.thumbnail}

The subject of the email is:

> **Deleting your Private Cloud "pcc-xxx-xxx-xxx-xxx"**.

The email contains a clickable link that will allow you to confirm the termination of your offer.

> [!primary]
>
> Please note that this link is valid for **72 hours**. We therefore advise you to make your request for termination from the 25th of the month.
>

You can also validate the termination request through the following OVHcloud API:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/confirmTermination
>

You will then need to fill in the validation token available in the termination confirmation email.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
