---
title: 'MX Plan - How to create an automatic reply on an email address'
excerpt: 'Find out how to set up an automatic reply on an email address'
updated: 2024-05-24
---

## Objective

This OVHcloud feature allows you to set up an automatic email responder (auto-reply) that sends a message to anyone trying to contact you by email in your absence.

**This guide explains how to configure automatic replies for your email addresses.**

## Requirements

- An OVHcloud MX Plan, available as part of our [web hosting plans](/links/web/hosting), the [100M free hosting](/links/web/domains-free-hosting) included with a domain name (activated in advance), or ordered separately as a standalone solution
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

> [!primary]
>
> If your email address is configured on [**Exchange**](/links/web/emails-hosted-exchange) or [**Email Pro**](/links/web/email-pro), or if there is no `Manage auto-replies`{.action} section in your MX Plan interface, you will need to create an automatic reply from your webmail using the documentation on [Setting up an automatic reply from the OWA interface](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_automatic_replies).

### Creating an auto-reply

Log in to your [OVHcloud Control Panel](/links/manager) and switch to `Web Cloud`{.action} at the top. Select `Emails`{.action}, then choose the domain name concerned. Open the tab `Emails`{.action}, then click on the button `Manage auto-replies`{.action} on the right.

You will be redirected to the `Manage auto-replies` section where all of the email responders for this domain name are listed.

To create a new one, click on `Add an auto-reply`{.action}.

![autoreply](images/email_responder01.png){.thumbnail}

The window `Add an auto-reply` appears. Fill out the form according to the information below:

- `Auto-replies type`:

**Associated with an email inbox**: To use if it concerns an existing email account of your email solution.</br>
**Free**: To use in the case of an email alias address. It is not linked to an existing account.

- `Mailbox` or `Auto-reply name`:  Select the email account or alias address concerned by the automatic reply.
- `Auto-reply duration`:
    - **Temporary**: Define a start and end date for the responder, for example if you are scheduling an absence.
    - **Permanent**: The automatic replies stay active until you delete or modify the responder.
- `Send a copy` or `Keep messages on the server`: Allows you to choose whether emails received during your absence will be deleted or stored in an account.

> [!warning]
>
> If you leave this box unchecked, messages received during your absence will be automatically deleted.

- `Address on copy` (only in "free" mode): If the receiving address is an alias, you need to select the email account incoming messages will be stored in.
- `Message`: This will be the reply to incoming mails while the responder is active.

Then click `Confirm`{.action} to finish configuring your automatic reply.

> [!success]
>
> If you would like to delegate the management of an automatic reply for an email address, please refer to our guide ["Delegating the management of your email accounts to another person"](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_delegation).

### Modifying or deleting an automatic reply

Once your automatic reply has been created, it will appear in the table in the `Manage auto-replies`{.action} section of your email service. You can delete or modify a responder by clicking on `...`{.action} to the right of it.

![hosting](images/email_responder02.png){.thumbnail}

## Go further

[Email FAQ](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

Join our community of users on <https://community.ovh.com/en/>.
