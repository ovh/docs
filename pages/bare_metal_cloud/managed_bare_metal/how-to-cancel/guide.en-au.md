---
title: How to cancel your Managed Bare Metal offer 
excerpt: Learn how to request the termination of a Managed Bare Metal infrastructure
updated: 2020-11-18
---

## Objective

If your Managed Bare Metal offer no longer suits you, or if you have ordered a new infrastructure to replace the old one, you can request the termination of this infrastructure, once all your data is secured.

**Find out how to cancel your Managed Bare Metal offer.** 

## Requirements

- a [Managed Bare Metal infrastructure](https://www.ovhcloud.com/en-au/managed-bare-metal/)
- access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au)

## Instructions

>[!warning]
>
> Before cancelling your offer, please be careful to retrieve all the data you wish to keep. Indeed, termination will result in the complete deletion of your Managed Bare Metal and all the data it contains.
>

### Step 1: Request termination from the OVHcloud Control Panel

Log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au){.external}, go to `Bare Metal Cloud`{.action} (1), click on `Managed Bare Metal`{.action} (2) and select your offer from the list (3).

In the "Service management" section of the "General Information" tab, click the button `...`{.action} (4) to the right of the renewal date. Finally, click on `Delete the service`{.action} (5).

![Control Panel Cancel](images/resiliation1.png){.thumbnail}

Please be aware that this action will remove any data on the infrastructure as soon as the termination is confirmed. No pro rata refund will be made if the infrastructure is terminated before the end of the month.

Click on `Confirm`{.action} to request termination.

![Cancellation validation](images/resiliation2.png){.thumbnail}

You will then receive a confirmation notice of your request. The procedure for confirming the termination is sent to you by email, to the address linked to the OVHcloud customer account.

![Cancellation validation](images/resiliation3.png){.thumbnail}

### Step 2: Confirm termination

Following your request, a termination confirmation email is sent to you at the address linked to the OVHcloud account.

You can also find this email in your OVHcloud Control Panel. Click on your name at the top right and then on `Service emails`{.action}.

![Cancellation validation](images/resiliation4.png){.thumbnail}

The subject of the email is:

> **Deleting your Managed Bare Metal "pcc-xxx-xxx-xxx-xxx"**.

The email contains a clickable link that will allow you to confirm the termination of your offer.

> [!primary]
>
> Please note that this link is valid for **72 hours**. We therefore advise you to make your request for termination from the 218th of the month.
>

You can also validate the termination request through the following OVHcloud API:

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/confirmTermination
>

You will then need to fill in the validation token available in the termination confirmation email.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
