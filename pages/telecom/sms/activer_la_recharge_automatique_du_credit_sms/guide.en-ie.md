---
title: 'Managing SMS credits and enabling automatic re-crediting'
slug: enable-automatic-recredit-sms-credit
excerpt: 'Find out how to manage your OVHcloud SMS credits'
legacy_guide_number: '16254520'
section: 'Managing your solution'
---

**Last updated 29th August 2022**

## Objective

The purpose of this guide is to explain what SMS credits are, how to set up automatic re-crediting, and how to transfer credits between your SMS accounts.

## Requirements

- an OVHcloud account
- access to the [OVHcloud API](https://api.ovh.com/console/) (for credit transfers only)
- You must be logged in to [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}, in the `Telecom`{.action} section, then `SMS`{.action}.

![SMS Telecom Control Panel](https://raw.githubusercontent.com/ovh/docs/master/templates/control-panel/product-selection/telecom/tpl-telecom-03-en-sms.png){.thumbnail}


## Instructions

### SMS credits

0.8 SMS credit is the cost for sending 1 SMS message in Ireland. The price is degressive depending on the number of SMS credits you buy at once. 

You can view the list of SMS packs [here](https://www.ovh.ie/sms/).

**E.g. to purchase a pack of 100 SMS credits, each credit costs 0.048 €**

Sending 1 SMS message in Ireland costs 0.8 credit. With this pack, you can send 125 SMS messages in Ireland.<br>
Sending 1 SMS message in India costs 0.4 credit. With this pack, you can send 250 SMS messages in India.

On [this webpage](https://www.ovh.ie/sms/prices/), you can view the price in credits for sending SMS messages, depending on their destination.

> [!primary]
>
> An SMS message can only contain a limited number of characters, depending on its encoding. The details on encoding and valid characters is available in the following guide:
> 
> [Sending SMS messages via the OVHcloud Control Panel](../send_sms_messages_via_control_panel/#step-2-compose-your-sms-message)
>

### Automatic re-credit

To ensure that you are never short of credit on your account, you can enable automatic re-crediting. Once a minimum threshold of remaining credit has been reached, a new number of credits is automatically added to your SMS account.

> [!warning]
>
> The automatic re-crediting option can only be enabled if the following conditions are met:
>
> - a SEPA direct debit payment method is present and validated in your OVHcloud account.
> - your SMS service must be at least 2 months old.

To enable automatic re-crediting, log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}, then go to the `Telecom`{.action} tab. Next, click on the `SMS`{.action} section in the services bar. Choose the SMS account you would like to enable automatic re-credit for.

Go to the `Options`{.action} menu (1), then `Automatic re-credit`{.action} (2).

![credit sms](images/smscredit01.png){.thumbnail}

Then click `Edit`{.action} in the “Manage options” section.

![credit sms](images/smscredit02.png){.thumbnail}

Finally, fill in the required fields.

- Minimum threshold (1): When this threshold is reached, automatic re-crediting is triggered.
- Amount to top-up (2): Defines the number of credits to re-credit on to your SMS account. There are 7 possible choices: 100, 200, 250, 500, 1000, 5000 and 10000.
- Click `Confirm`{.action} to apply the settings.

![credit sms](images/smscredit03.png){.thumbnail}

### Transfer credits

> [!primary]
>
> Credit can only be transferred between SMS accounts within the same OVHcloud account. Credit cannot be transferred between two different OVHcloud accounts.
>

SMS credits can only be transferred via the API.

> [!success]
> If you are not familiar with using the OVHcloud API, please refer to our guide on [Getting started with the OVHcloud API](https://docs.ovh.com/ie/en/api/first-steps-with-ovh-api/).

Log in to [https://api.ovh.com/](https://api.ovh.com/console/), then use the following API call:

> [!api]
>
> @api {post} /sms/{serviceName}/transferCredits
>

You will need to fill in the following fields.

- `serviceName`: Enter the reference for the SMS account currently holding the credits.
- `credits`: Enter the number of credits you want to transfer.
- `smsAccountTarget`: Enter the reference for the SMS account that will receive the credits.

Click `Execute`{.action} to confirm the transfer. The process is immediate.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
