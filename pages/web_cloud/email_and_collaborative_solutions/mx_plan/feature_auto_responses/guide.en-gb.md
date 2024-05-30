---
title: 'MXplan - Creating an automatic reply on an email address'
excerpt: 'Find out how to set up an automatic reply on an email address'
updated: 2024-05-24
---

## Objective

When you are away and unable to view your email address, you can set up an automatic reply (or responder) that will send an email to the people who send you an email.

**Find out how to set up an automatic reply to an email address.**

## Requirements

- An MX Plan solution. This is available via: a [web hosting](/links/web/hosting) offer, a [100M free hosting](/links/web/domains-free-hosting) offer included with a domain name (activated in advance), or the MX Plan offer ordered separately.
- You must be logged in to your [OVHcloud Control Panel](/links/manager).

## Instructions

> [!primary]
>
> If your email address is on a [**Exchange**](/links/web/emails-hosted-exchange/), [**Email Pro**](/links/web/emails-email-pro/) solution, or if there is no `Manage auto-replies`{.action} section in your MXplan, you will need to create an automatic reply from your webmail using the documentation ["Set up an automatic reply from the OWA interface"](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_automatic_replies).

### Creating an auto-reply

Log in to your [OVHcloud Control Panel](/links/manager). Select the domain name concerned in the `Emails`{.action} section. Click the `Emails`{.action} tab at the top, then `Manage auto-replies`{.action}.

You will be redirected to the `Manage auto-replies` window, which will display all automated email replies in place on your email solution.

Click `Add an auto-reply`{.action}

![autoreply](images/email_responder01.png){.thumbnail}

The Add window appears. You can complete it using the information below.

- `Auto-replies type`:

**Associated with an email inbox** : to use if it concerns an existing email address on your email solution.
**Free**: to be used in the case of an alias. It is not linked to an existing address.

- `Mailbox` or `Auto-replies name`: the email address or alias concerned by the automatic reply.
- `Auto-replies duration`:
    - **Temporary**: Set a start and end date to be taken into account for the operation of your automatic reply (useful if you are going on leave, for example).
    - **Permanent**: Automatic reply will work until you disable it.
- `Send a copy` or `Keep the messages on the server`: allows you to send the messages received during your absence to the address of your choice or to keep them on the email address.

> [!warning]
>
> If you clear this check box, messages received during your absence will be automatically deleted.

- `Copy address` (only in free mode): for an alias, select the email address that will receive emails sent to the alias.
- `Message`: this is the message that your contacts will receive when they send you an email.

Then click `Confirm`{.action} to finish configuring your automatic reply.

> [!success]
>
> If you would like to delegate the management of an automatic reply for an email address, please refer to our guide ["Delegating the management of your email accounts to another person"](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_delegation)

### Modifying or deleting an automatic reply

Once your automatic reply has been created, it will appear in the list visible in the `Manage auto-replies`{.action} section of your email solution. You can delete or modify it by clicking on `...`{.action} to the right of it.

![hosting](images/email_responder02.png){.thumbnail}

## Go further

[Email FAQ](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

Join our community of users on <https://community.ovh.com/en/>