---
title: Sending SMS messages to the USA
slug: sending-sms-to-usa
excerpt: Find out how to send SMS messages to the USA
section: Sending SMS messages
---

**Last updated 5th August 2022**

## Objective

There are specific rules for sending SMS to the United States. The guide will explain the rules and show you how to apply them, so that you can send SMS messages to the US.

## Requirements

- An OVHcloud SMS account with SMS credits.
- Access to the [OVHcloud API](https://api.ovh.com/console/) (for the API method only)
- You must be logged in to [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}, in the `Telecom`{.action} section, then `SMS`{.action}.

![SMS Telecom Control Panel](https://raw.githubusercontent.com/ovh/docs/master/templates/control-panel/product-selection/telecom/tpl-telecom-03-en-sms.png){.thumbnail}

## Instructions

### Step 1: understanding the restrictions

In accordance with the US SMS regulation authority (Neustar), a message template must be validated through our services before an SMS can be sent to this destination.
Only alert and two-factor authentication messages are authorised, and advertising SMS templates are not accepted. Once you have set your templates, the SMS will be sent the same way as for other countries.

You can request the validation of multiple message templates.

> [!primary]
>
Setting message templates is free and is carried out by the OVHcloud teams within two working days.
>

### Step 2: adding a template

#### 2.1 Via the Control Panel

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}, then select `Telecom`{.action}. Next, click `SMS`{.action} and select your SMS account. Click on the `Message and campaign`{.action} tab then click `SMS management`{.action}.

Finally, click `Manage templates`{.action}.

![SMS messages to the USA](images/smstousa1.png){.thumbnail}

On the next page, click on `Actions`{.action} then on `Add`{.action}.

![SMS messages to the USA](images/smstousa2.png){.thumbnail}

A pop-up will appear with fields to complete.

![SMS messages to the USA](images/smstousa3.png){.thumbnail}

| Field       | Description                                                                                                      |
|-------------|------------------------------------------------------------------------------------------------------------------|
| Name         | Template name                                                                                                  |
| Activity    | Select the template type:<br>\- Alert<br>\- Authentication<br>\- Transaction processing system |
| Description | Template description                                                                                            |
| Template      | Write the template, including the variable between #                                                                  |


#### 2.2 Via APIs

> [!success]
> If you are not familiar with using the OVHcloud API, please refer to our guide on [Getting started with the OVHcloud API](https://docs.ovh.com/ie/en/api/first-steps-with-ovh-api/).

Log in to [api.ovh.com/](https://api.ovh.com/), then use the following API:

> [!api]
>
> @api {post} /sms/{serviceName}/templatesControl
>


![SMS messages to the USA](images/smstousa4.png){.thumbnail}

Fill in the required fields and click on `Execute`{.action}.

#### Examples of templates

Below are two examples of message templates that can be sent to the US.

- Authentication template example:

```bash
Your security code is: #CODE#. Have a good day!
```

- Alert template example:

```bash
Our monitoring system detected your server #SERVER# doesn't respond to ping requests
```

### Step 3: analysing returns

Once your message template has been created and validated, the outgoing SMS automatically compares your content with your templates. If the comparison is positive, the SMS is sent in the same way as one sent to another recipient.

If you send an SMS to the US without creating and validating a template, the SMS will be rejected and the Premium Tracking Transaction Code (PTT code) 1999 will be sent to you, which corresponds to the “No templates available” error message.

You can view the other possible return codes in [this guide](../everything_you_need_to_know_about_sms_users/).

## Go further

Join our community of users on <https://community.ovh.com/en/>.
