---
title: 'Creating filters for your email addresses'
slug: email-hosting-configuring-filters
legacy_guide_number: 1973
excerpt: 'Find out how to create and configure a filter on your email address'
section: 'Email address features'
order: 5
---

**Last updated 12/08/2020**

## Objective

A filter allows you to configure conditions on the emails you receive, as well as actions that result from them.

For example: you want any email containing `[SPAM]` in the subject to be deleted.

- Condition = email subject contains *SPAM*
- Action = delete email

**Find out how to create and configure a filter on your email address**


## Requirements

- an MX Plan email solution or a [Web Hosting plan](https://www.ovh.co.uk/web-hosting/){.external} 
- access to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external}.


## Instructions

First of all, log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external}.

Select the domain name in the `Emails`{.action} section.

In the table listing your email addresses, click the `Filter`{.action} icon for the email address concerned.

![emails](images/img_3239.jpg){.thumbnail}

You will access the list of filters currently configured for this email address. To add one, click on the button on the right `Add a Filter`{.action}.

![emails](images/img_3240.jpg){.thumbnail}

### Understanding email filter configuration

![emails](images/img_3241.jpg){.thumbnail}


#### Information

- **Filter name:** This is used to differentiate your filters in the Control Panel.
- **Priority:** This sets the order in which your filters will run in the same mailbox. A Priority 1 filter will run before a Priority 5 filter.
- **Enable filter:** This determines whether the filter will be effective or not (for example, you can create a filter by unchecking the option if you want to enable it later).


#### <u>Rules:</u>

This is where you will configure the conditions, the filter rules.

First choice (Header):

- **From:** Corresponds to sender, example: `If the sender ...`
- **TO:** Corresponds to recipient, example: `If the recipient ...`
- **Message subject:** Matches the subject of the message, example: `If the subject of the message ...`
- **Other:** Other parameter

Second choice (Rule):

- **spf:** Parameter that depends on SPF field, example: `... has no SPF record...`
- **contains:** example: `... contains...`
- **does not contain:** example: `... does not contain...`

Third choice (value):

- Example: [SPAM]

Fourth choice (+):

- This allows you to add one or more conditions for the same action.

**Result of these conditions** - Example: `If the message subject contains [SPAM]`


#### Actions
This is where you will choose what will be done by the filter if the above conditions are met.

You can choose between:

- **Accept:** Eligible emails will be received normally.
- **Redirect to a local address:** Redirects eligible emails to one of your domain’s email addresses.
- **Deleting:** The emails that meet the conditions will be deleted.
- **Redirect to a remote address:** Redirects eligible emails to the email address of your choice.


### Examples

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
|Filter settings|WHETHER YOU'RE ON FOOT|includes|ML@mailing.com|Redirect to a local address: recipient@mypersonaldomain.ovh|
|What the filter will do|If the message was sent to the mailing list|called|ML@mailing.com|then forward the message to my other address: recipient@mypersonaldomain.ovh|

<a name="MULTI"></a>

#### Delete emails containing an unwanted comment except for a sender 

Two filters should be added:

||Header|Ruler|Value|Action|
|---|---|---|---|---|
|Filter Settings 1|Message subject|includes|"money"|deletion|
|Filter Settings 2|From|doesn't include|john@mybank.ovh|deletion|

If the subject of the message contains the word `money`, **and that** the sender of the message is not `john@mybank.ovh` then the message will be deleted.

In this case, the configuration will be as follows:

![emails](images/img_3242.jpg){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.
