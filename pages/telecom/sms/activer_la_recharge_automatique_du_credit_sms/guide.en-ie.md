---
title: 'Managing SMS credits and enabling automatic re-crediting'
slug: enable-automatic-recredit-sms-credit
excerpt: 'Find out how to manage your OVHcloud SMS credits'
legacy_guide_number: '16254520'
section: 'Managing your solution'
hidden: true
---

**Last updated 04th June 2020**

## Objective

The purpose of this guide is to explain what SMS credits are, how to set up automatic re-crediting, and how to transfer credits between your SMS accounts.

## Requirements

* an OVHcloud account
* access to the [OVHcloud API](https://api.ovh.com/console/) (for credit transfers only)

## Instructions

### **SMS credits**

1 SMS credit is the cost for sending 1 SMS message in mainland France. The price is degressive depending on the number of SMS credits you buy at once. 

You can view the list of SMS packs [here](https://www.ovhtelecom.fr/sms/).

**E.g. to purchase a pack of 100 SMS credits, each credit costs €0.06 ex. VAT.**

Sending 1 SMS message in mainland France costs 1 credit. With this pack, you can send 100 SMS messages in mainland France.
Sending 1 SMS message in India costs 0.1 credit. With this pack, you can send 1,000 SMS messages in India.

On [this webpage](https://www.ovhtelecom.fr/sms/tarifs.xml), you can view the price in credits for sending SMS messages, depending on their destination.

> [!primary]
>
> An SMS message can only contain a limited number of characters, depending on its encoding. The details on encoding and valid characters is available in the following guide:
> 
> [Sending SMS messages via the OVHcloud Control Panel](../send_sms_messages_via_control_panel/#step-2-compose-your-sms-message)
>

### **Automatic re-crediting**

To ensure that you are never short of credit on your account, you can enable automatic re-crediting. Once a minimum threshold of remaining credit has been reached, a new number of credits is automatically added to your SMS account.

To enable automatic re-crediting, log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}, then go to the `Telecom`{.action} tab. Next, click on the `SMS`{.action} section in the services bar on the left-hand side. Choose the SMS account you would like to enable automatic re-crediting for.

Go to the `Options`{.action} menu (1), then `Automatic re-crediting`{.action} (2).

![credit sms](images/smscredit1.png){.thumbnail}

Then click `Modify`{.action} in the “Manage options” section.

![credit sms](images/smscredit2.png){.thumbnail}

Finally, fill in the required fields.

* Minimum threshold (1): When this threshold is reached, automatic re-crediting is triggered.
* Amount to re-credit (2): Defines the number of credits to re-credit on to your SMS account. There are 5 possible choices: 100, 200, 250, 500, and 1,000.
* Click `Confirm`{.action} (3) to apply the setting.

![credit sms](images/smscredit3.png){.thumbnail}

### **Transfer credits**

> [!primary]
>
> Credit can only be transferred between SMS accounts with the same OVHcloud NIC handle. Credit cannot be transferred between two different OVHcloud NIC handles.
>

SMS credits can only be transferred via the API.

Log in to [https://api.ovh.com/](https://api.ovh.com/console/), then use the following API call:

> \[!api]
>
> @api {post} /sms/{serviceName}/transferCredits
>

You will need to fill in the following fields.

* serviceName: Enter the reference for the SMS account currently holding the credits.
* credits: Enter the number of credits you want to transfer.
* smsAccountTarget: Enter the reference for the SMS account that will receive the credits.

Click `Execute`{.action} to confirm the transfer. The process is immediate.

## Go further

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/).
