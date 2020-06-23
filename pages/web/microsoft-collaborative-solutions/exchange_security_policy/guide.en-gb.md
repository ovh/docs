---
title: 'Managing the security policy of an email service'
slug: manage-security-policy-password
excerpt: 'Find out how to manage the security policy of your email service'
section: 'Getting started with Exchange'
order: 6
---

**Last updated 9th June 2020**

## Objective

With OVHcloud email services, you can create professional email addresses. In order to secure this environment, you can manage the global security settings of your email accounts.

**Find out how to manage the security policy of your email service.**

## Requirements

- an [OVHcloud email solution](https://www.ovh.co.uk/emails/)
- access to the `Web`{.action} section of the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager)

## Instructions

The security policy management of your email service has four aspects:

- enhancing email account security when users try to log in
- adding complexity to the security of your email account passwords
- strengthening the verification of incoming messages on our servers and to your email addresses (for [Exchange](https://www.ovh.co.uk/emails/hosted-exchange/) accounts only)
- configuring how so-called “unwanted” messages will be displayed in your inbox (for [Exchange](https://www.ovh.co.uk/emails/hosted-exchange/){.external} accounts only)

To access the security policy of your email service, log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager) and make sure you are in the `Web`{.action} section. 

|Emails and Email Pro|Exchange| 
|---|---| 
|Click on `Emails`{.action} or `Professional Email`{.action} in the left-hand column, then click on the solution you want to manage. Click on the `More` tab, then on `Manage security policy`{.action}.|Click on `Microsoft`{.action} in the left-hand column, then on `Exchange`{.action}, and select the solution you want to manage. Click on `Security`{.action}.|
|![exchangesecurity](images/manage-security01.png){.thumbnail}|![exchangesecurity](images/manage-security02.png){.thumbnail}|

Continue to the aspect(s) you want to modify.

|Aspect|Description| 
|---|---| 
|[Enhance connection security](./#enhance-connection-security)|Configures whether accounts should lock after a number of unsuccessful log-in attempts.|
|[Add complexity to the security of passwords](./#add-complexity-to-the-security-of-passwords)|Sets a complexity requirement, as well as rules for changing passwords.|
|[Strengthen the verification of incoming messages (Exchange only)](./#strengthen-the-verification-of-incoming-messages-exchange-only)|Specifies whether our servers should check if the messages received come from a legitimate source (DKIM and/or SPF checks).|
|[Define the display of unwanted messages (Exchange only)](./#define-the-display-of-unwanted-messages-exchange-only)|Specifies whether unwanted messages should have a tag to identify them, or be automatically moved to the trash.|

### Enhance connection security

This allows you to set whether email accounts should lock after a number of unsuccessful log-in attempts.

To make this change, enter the information listed in the table below:

|Information|Description| 
|---|---| 
|Lockout threshold|Sets the number of unsuccessful log-in attempts before the account locks. Enter "0" to not apply a lockout threshold.|
|Lockout counter reset time|This field will only appear if a lockout threshold has been set. Specify the time it takes for the failed connection attempt counter to reset.|
|Account lockout duration|This field will only appear if a lockout threshold has been set. Specify the duration for which the email account will remain locked if the lockout threshold has been reached.|

Once this information has been entered, you can save these changes for Email and Email Pro solutions by clicking on `Next`{.action}, then `Confirm`{.action}. For the Exchange solution, click `Save changes`{.action}.

### Add complexity to the security of passwords

This allows you to set a complexity requirement, as well as rules for changing passwords.

To make this change, enter the information listed in the table below:

|Information|Description| 
|---|---| 
|Complexity requirements|Allows the user to set rules regarding the complexity of passwords:<br> \- not contain all or part of the user’s account name<br> \- be at least 6 characters long<br> \- contain uppercase and lowercase letters, non-alphanumeric characters (! or $ for example), and numbers.|
|Prevent password change|Allows you to enforce a minimum lifetime for your email account passwords. Users will have to wait a certain number of days before they can change their passwords.|
|Maximum password duration|Allows you to enforce a maximum lifetime for your email account passwords. Users will be forced to change their passwords once this time limit is reached.|
|Keep password history (Exchange only)|This field will only appear if a maximum lifetime has been set. Set the duration, in days, before previous passwords can be used again.|
|Minimum password length|Allows the user to set a minimum password length when a user wants to change it.|

Once this information has been entered, you can save these changes for Email and Email Pro solutions by clicking on `Next`{.action}, then `Confirm`{.action}. For the Exchange solution, click `Save changes`{.action}.

### Strengthen the verification of incoming messages (Exchange only)

This allows you to specify whether our servers should check if the messages received in your email accounts come from a legitimate source (DKIM and/or SPF checks).

To set this, tick the desired boxes listed in the table below:

|Information|Description| 
|---|---| 
|Activate DKIM signature verification|Defines whether our servers should check the DKIM signature of the messages you receive on your email accounts. This action guarantees the authenticity of the sending domain and the integrity of the message, making it possible to identify non-legitimate mailings, which will then be marked as spam.|
|Activate SPF protection verification|Defines whether our servers must verify that the source of the messages you receive is present in the SPF record of the sender domain. This verification can identify illegitimate mailings, which will then be marked as spam.|

Once you have made your choice, confirm these changes by clicking `Save changes`{.action}.

### Define the display of unwanted messages (Exchange only)

This allows you to define whether unwanted messages you receive on your email accounts should be tagged to identify them, or automatically moved to the trash.

To set this, tick the respective boxes listed in the table below:

|Information|Description| 
|---|---| 
|Identify SPAM email|Specify whether our servers should add a tag to identify “unwanted” messages as spam.|
|Move SPAM to junk|Specify whether our servers should automatically move any "unwanted" messages to the trash.|

Once you have made your choice, confirm these changes by clicking `Save changes`{.action}.

## Go further

Join our community of users on <https://community.ovh.com/en/>.