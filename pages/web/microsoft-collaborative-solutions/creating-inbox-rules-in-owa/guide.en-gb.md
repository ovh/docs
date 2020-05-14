---
title: 'Creating inbox rules in OWA'
slug: creating-inbox-rules-in-owa
excerpt: 'Find out how to create email redirections and filters using OWA'
section: 'Outlook Web Application (OWA)'
order: 2
---

**Last updated 11th March 2020**


## Objective

With the "Inbox rules" option, you can create an elaborate set of rules to handle incoming emails. These can help you to keep your email account organised by automatically sorting emails into folders. This is also the way to define forwarding settings (redirections) and to filter out spam messages.

**Find out how to create email filters and redirections using the Outlook Web App (OWA).**


## Requirements

- an OVHcloud email solution already set up (**MX Plan**, available as part of our [Web Hosting plans](https://www.ovh.co.uk/web-hosting), included in a [free Start10M hosting](https://www.ovh.co.uk/domains/start10m_hosting_offer.xml) or ordered separately as a standalone solution; [**Hosted Exchange**](https://www.ovh.co.uk/emails/hosted-exchange) or [**Email Pro**](https://www.ovh.co.uk/emails/email-pro))
- login credentials for the email address you want to configure


## Instructions

### Step 1: Navigating to the options section

Log in to your Exchange account via the [OVHcloud webmail](https://www.ovh.co.uk/mail). Click on the gear symbol on the top right to unfold the "Options" menu and select `Options`{.action}.

![inboxrules](images/exchange-rules-step1.png){.thumbnail}

From the "Options" tree, select `Inbox and sweep rules`{.action} to access the rules interface. You can see here the list of rules that are applied to this account. Create a new rule by clicking on the `+`{.action} icon.

![inboxrules](images/exchange-rules-step2.png){.thumbnail}

### Step 2: Creating rules

![inboxrules](images/exchange-rules-step3.png){.thumbnail}

The rules editor assists in setting up distinct measures for all incoming emails depending on various presuppositions. Specifying a rule is done in three parts:

|Step|Description|
|---|---|
|Add condition|Select one or more conditions that will trigger the rule.|
|Add action|Choose what should happen with emails that match the conditions.|
|Add exception (optional)|You can refine the rule by adding one or more conditions to exclude certain emails.|

For example, you can set as condition "Received from..." and specify an email address, then elect to move these messages into a certain folder.

#### Checkbox "Stop processing more rules"

If you have created several rules, it is possible that more than one will apply to an incoming email. Leave this option activated for any rule that should never be followed by other rules; this is a simple way to prevent further treatment of emails that match multiple conditions.

### Creating useful rules by means of two examples: Redirection and spam filtering 

Since there are many conditions and actions available, we are unable to cover all of them in this guide. Below you can find two examples that are instrumental in using an OVHcloud email account. 

> [!warning]
>OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend contacting a specialised provider and/or the software publisher for the service if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the “Go further” section of this guide.
>

#### Example 1: Redirecting emails to another address

Create a new rule by clicking on the `+`{.action} icon. Give your rule a name and select below which emails it should apply to. For this example, we initially choose to include **all messages**. Next, select the appropriate action; here we will focus on illustrating a **redirection**. Please note the technical distinction: if you "forward" a mail, the final recipient will see your email address as a sender. "Redirecting" an email on the other hand will send it to your target address without changing the original sender address. 

![inboxrules](images/exchange-rules-step4.png){.thumbnail}

In the next interface, select from "Your contacts" (`+`{.action}) or type an email address into the top bar. You can also search for users not listed here as a contact. Once finished, click `Save`{.action} to get back to the "New inbox rule" interface. You can extend this rule further if you click `Add action`{.action}. If appropriate, also add exceptions below, for example to prevent the redirection if an incoming message was sent by a specific email address or if it contains certain keywords. Save the rule by clicking `OK`{.action}.

The new rule is now listed with an explanation of what it does and it can be edited, deactivated or deleted.

![inboxrules](images/redirection_rulebis.gif){.thumbnail}


#### Example 2: Filtering undesired emails (spam)

> [!primary]
>
These instructions are only feasible if your domain is using the OVHcloud MX records appropriately. Other configurations are possible with the service but might not use our spam protection.
>

Create a new rule by clicking on the `+`{.action} icon.

![inboxrules](images/exchange-rules-step7.png){.thumbnail}

Give your rule a name and select as conditions "It includes these words" and "in the subject...". In the next interface, type "[SPAM]" to single out the messages that were pre-tagged by our spam protection. Add it with `+`{.action}, then click on `OK`{.action}.

![inboxrules](images/exchange-rules-step8.png){.thumbnail}

Since no automated spam protection can decide with perfect accuracy whether an email is actually spam, it is good practice to collect these emails in a dedicated folder. This way, you can verify the contents of this spam folder before emptying it. To achieve this, select as action "Move, copy, or delete", then "Move the message to folder...". Select a folder from the list. Save the rule by clicking `OK`{.action}.

![inboxrules](images/exchange-rules-step9_2.png){.thumbnail}


> [!primary]
>
Please note that spam false positives cannot be declared directly from OWA. If you receive emails falsely marked as [SPAM], we recommend to inform our support team by creating a support request in your [OVHcloud Control Panel](https://www.ovh.com/manager/dedicated/#/support/tickets/new).  
>


## Go further

[Creating automatic replies in OWA](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/exchange_2016_how_to_set_up_automatic_replies_in_owa)

[Sharing calendars in OWA](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/exchange_2016_how_to_share_calendars_via_owa)

[Using the Outlook Web App with an email account](https://docs.ovh.com/gb/en/emails/using-owa)

Join our community of users on <https://community.ovh.com/en/>.