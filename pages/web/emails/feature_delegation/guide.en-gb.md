---
title: 'Delegating the management of your email accounts to another person'
legacy_guide_number: 1933
excerpt: 'Find out how to delegate the management of email accounts for your MX Plan solution'
updated: 2021-10-08
---

**Last updated 8th October 2021**

## Objective <a name="objective"></a>

By creating a delegation, you can enable an email account user to manage their own features (e.g. changing passwords). These features depend on the type of delegation set up:

- Delegate **all of your email accounts** to one or more OVHcloud accounts. This type of delegation allows beneficiary customer accounts to manage filters, email auto-replies, redirections/aliases, and mailing lists.

- Delegate **one or more email accounts** and their filters to a single OVHcloud account. This type of delegation does not allow recipients to manage email auto-replies, redirections, or mailing lists. It also does not allow recipients to delete the relevant email account(s), import emails from another account or manage delegations.

**This guide explains how to delegate email accounts for your MX Plan solution.**

## Requirements

- an MX Plan solution, available as part of our [Web Hosting plans](https://www.ovhcloud.com/en-gb/web-hosting/), the [free Start 10M hosting plan](https://www.ovhcloud.com/en-gb/domains/free-web-hosting/), or ordered separately as a standalone solution
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)


> [!warning]
>
> The following instructions are only eligible for the legacy MX Plan solution. For our current solution, there are no delegations. You can manage your password, filters and auto-replies for an email account directly via OWA (**O**utlook **W**eb **A**pplication). **You can identify which version you are using with the table below.**
>


|MX Plan legacy version|MX Plan new version|
|---|---|
|![email](images/mxplan-starter-legacy-step1.png){.thumbnail}<br> Find the solution in the section "Plan".|![email](images/mxplan-starter-new-step1.png){.thumbnail}<br>Locate the `Server model` in the section "Summary".|
|Continue reading this guide in the `[Instructions](#oldmxplan)` section below.|Continue with our guide on [Accessing your email account with OWA](/pages/web/emails/email_owa#changing-the-password).|

## Instructions <a name="oldmxplan"></a>

> [!primary]
>
>When you set up a delegation on an email account, it will appear in the relevant [Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB). However, only the modifications listed in the [Objective](#objective) section of this guide will be possible in this situation.
>

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) and select `Web Cloud`{.action}.

Select the domain name from the `Emails`{.action}. Switch to the tab `Emails`{.action} to view the list of email accounts in your MX Plan solution.

![delegation](images/mxplan-delegation-01.png){.thumbnail}

### Delegating all of your email accounts to one or more OVHcloud accounts

This type of delegation allows its recipient to manage passwords, filters, email auto-replies, redirections/aliases, and mailing lists.

Click the button `Manage the elements shared by all email addresses`{.action}.

![delegation](images/mxplan-delegation-02.png){.thumbnail}

This opens a new section. Click the `+`{.action} button to the right of `Add a username`. Enter the OVHcloud NIC handle that will take advantage of this delegation, and confirm your choice.

![delegation](images/mxplan-delegation-03.png){.thumbnail}

You can delegate the management of your MXplan service to multiple OVHcloud customer accounts.

### Delegating one or more email accounts to a user

With this delegation, the user can change the password for the email account concerned, and manage its filters.

To the right of the email account you want to delegate, click on the `...`{.action} button, then `Delegation management`{.action}.

![delegation](images/mxplan-delegation-04.png){.thumbnail}

Enter the OVHcloud NIC handle that will benefit from this delegation, and confirm your choice.

![delegation](images/mxplan-delegation-05.png){.thumbnail}

You can add multiple OVHcloud customer accounts to manage each email address.

## Go further

[Getting started with the MX Plan solution](/pages/web/emails/email_generalities)

Join our community of users on <https://community.ovh.com/en/>.
