---
title: 'Creating filters for your email addresses'
slug: email-hosting-configuring-filters
legacy_guide_number: 1973
excerpt: 'Find out how to create and configure filter rules on your email address'
section: 'Email address features'
order: 04
---

**Last updated 27/09/2021**

## Objective

An email filter allows you to apply different treatments to the messages you receive, according to the criteria of your choice.

For example: you want any email containing `[SPAM]` in the subject to be deleted.

- Criterion = Email subject contains *SPAM*
- Processing = deleting the email

**Find out how to create and configure a filter on your email address.**

## Requirements

- an MX Plan email solution (available via: a [web hosting](https://www.ovh.co.uk/web-hosting/){.external} plan, the free [Start 10M](https://www.ovh.co.uk/domains/start10m_hosting_offer.xml){.external} hosting plan including a domain name, or the MX Plan solution ordered separately).
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external}

> [!warning]
>
> The following guide is for holders of the legacy MXplan solution. For the new solution, you can manage filters directly via OWA (**O**utlook **W**eb **A**pplication). Identify your solution using the table below.
>

MX Plan legacy version|MX Plan new version|
|---|---|
|![email](images/mxplan-starter-legacy-step1.png){.thumbnail}<br> Find the solution in the "Subscription" box|![email](images/mxplan-starter-new-step1.png){.thumbnail}<br>Locate the `Server model` in the `Summary` box|
|Continue reading this guide from the `[In Practice](#oldmxplan)` section.|Continue to our guide on [Inbox rules in OWA](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/creating-inbox-rules-in-owa/).|

## In practice <a name="oldmxplan"></a>

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external}, and open the `Web Cloud` section.

Click `Emails`{.action} in the service bar on the left-hand side, and then choose the name of the MX Plan service concerned.

In the `Emails`{.action} tab of your MX Plan service, you will find a list of your email addresses. You will see a `Filters` column in the table of email accounts. Click the funnel icon.

![emails](images/img_3239.jpg){.thumbnail}

You will then see the list of filters currently configured for this email address.

![emails](images/img_3240.jpg){.thumbnail}

To add a rule to your email address, click `Add a Filter`{.action}.

- **Filter name:** choose a name for your filter.

- **Priority:** sets the order in which your filters run on an incoming message. A Priority 1 filter will run before a Priority 2 filter.

- **Enable filter:** uncheck this option if you want to apply this filter later.

### Understanding email filter configuration

When you add a filter, the following window appears:

![emails](images/img_3241.jpg){.thumbnail}

#### <u>Rules:</u>

This part allows you to define the messages on which the filter will apply.

First choice (header):

- **From:** is the sender's email address, for example: “If the sender ...”
- **To:** is the recipient's email address, for example: “If the recipient ...”
- **Message subject:** means the content of the subject of the message, for example: “If the subject of the message ... ”.
- **Other:** specify another item to be considered in the email header.

Second choice (rule):

- **spf:** Specify a value for the [SPF field](https://docs.ovh.com/gb/en/domains/web_hosting_the_spf_record/) to be taken into account, for example:  “... has no SPF record ... ”.
- **contains:** example: “... contains... ”.
- **does not contain:** example: “... does not contain... ”.

Third choice (value):

- Example: [SPAM]

Fourth choice (+):

- This allows you to add one or more conditions for the same action.

#### Actions

This section allows you to define the actions to apply.

You can choose between:

- **Accept:** emails meeting the conditions will be received normally.
- **Redirect to a local address:** redirects eligible emails to one of your domain’s email addresses.
- **Deleting:** emails that meet the conditions will be deleted.
- **Redirect to a remote address:** redirects eligible emails to the email address of your choice.

### Filter examples

#### Delete spam

||Header|Ruler|Value|Action|
|---|---|---|---|---|
|Filter settings|Message subject|includes|[SPAM]|deletion|
|What the filter will do|If the subject of the message|includes|the `[SPAM]` suite|then delete the message.|

#### Redirect emails from a recipient

||Header|Ruler|Value|Action|
|---|---|---|---|---|
|Filter settings|From|includes|contact@domaintest.ovh|redirect to a remote address: jean@otherdomain.ovh|
|What the filter will do|If the sender|is|contact@domaintest.ovh|then resend the email to jean@otherdomain.ovh|

#### Redirect emails sent to a mailing list

||Header|Ruler|Value|Action|
|---|---|---|---|---|
|Filter settings|WHETHER YOU'RE ON FOOT|includes|ml@mailing.com|Redirect to a local address: recipient@mypersonaldomain.ovh|
|What the filter will do|If the message was sent to the mailing list|called|ml@mailing.com|then forward the message to my other address: recipient@mypersonaldomain.ovh|

#### Delete emails containing an unwanted comment, except for a sender

Two filters should be added:

||Header|Ruler|Value|Action|
|---|---|---|---|---|
|Filter Settings 1|Message subject|includes|"money"|deletion|
|Filter Settings 2|From|doesn't include|john@mybank.ovh|deletion|

If the subject of the message contains the word “ money ”, **and that** the sender of the message is not `john@mybank.ovh`, then the message will be deleted:

![emails](images/img_3242.jpg){.thumbnail}

## Go further

[Getting started with the MX Plan solution](https://docs.ovh.com/gb/en/emails/web_hosting_an_overview_of_ovh_email/)

[Inbox rules in OWA](https://docs.ovh.com/gb/en/emails/creating-inbox-rules-in-owa-mx-plan/)

Join our community of users on <https://community.ovh.com/en/>.
