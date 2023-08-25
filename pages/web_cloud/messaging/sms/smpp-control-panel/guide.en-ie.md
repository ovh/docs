---
title: Managing an SMS SMPP account
excerpt: Find out how to manage an SMPP account settings from the OVHcloud Control Panel
updated: 2023-02-09
---


## Objective

In the OVHcloud Control Panel, you can retrieve your SMPP credentials, change your password, manage access to the service, and transfer SMS credits.

**Find out how to manage an SMS SMPP account settings from the OVHcloud Control Panel.**

> [!primary]
>
> We recommend that you read the [technical specifications of the OVHcloud SMPP solution](/pages/web_cloud/messaging/sms/smpp-specification).

## Requirements

- an [OVHcloud SMS SMPP account](https://www.ovhcloud.com/en-ie/sms/api-sms/)
- Access to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) in the `Telecom`{.action} section, then `SMS`{.action}.

## Instructions

Select your SMPP account. Its name is different from other OVHcloud SMS accounts. It starts with `smpp-` instead of `sms-` for standard SMS accounts.

![SMPP account](images/smpp-account.png){.thumbnail}

### Credentials

In the `General Information` box, you can find the login details required to use your service. Use the button to the right of each field to copy its contents.

![SMPP account](images/smpp-account-ID.png){.thumbnail}

If you have forgotten your SMPP password, use the `Generate a new password`{.action} button. A new password will then be sent to the contact email address for your OVHcloud account, and it will be displayed to you.<br>

Click `Send`{.action} to confirm this action.

![SMPP account](images/smpp-account-password.png){.thumbnail}

### Access management

Click the `Options`{.action} tab and then click `SMPP Settings`{.action}.

![SMPP account](images/smpp-acl0.png){.thumbnail}

The authorised IP framework lists the IP addresses of your SMPP clients that are authorised to access the SMPP server.

Click the `Add IP`{.action} button to add IP addresses to this list.

![SMPP account](images/smpp-acl1.png){.thumbnail}

### Manage senders and credits

See our guides on [sender management](/pages/web_cloud/messaging/sms/envoyer_des_sms_depuis_mon_espace_client#step-3-choose-an-sms-sender) and [managing SMS credits and enabling automatic re-crediting](/pages/web_cloud/messaging/sms/activer_la_recharge_automatique_du_credit_sms).

## Go further

See [our guide on managing SMS history](/pages/web_cloud/messaging/sms/gerer_l_historique_des_sms).

[The technical specifications of the OVHcloud SMPP solution](/pages/web_cloud/messaging/sms/smpp-specification).

Join our community of users on <https://community.ovh.com/en/>
