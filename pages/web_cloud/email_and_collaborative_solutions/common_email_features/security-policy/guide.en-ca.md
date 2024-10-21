---
title: 'Managing the security policy of an email service'
excerpt: 'Find out how to manage the security policy of your email service'
updated: 2021-08-31
---

## Objective

With the Exchange service, you can set up professional email accounts, and use them with a range of features for collaborative work. In order to maintain this environment, you can manage the global security settings of your Exchange accounts.

**Find out how to manage the security policy of your Exchange service.**

## Requirements

- An [Exchange](https://www.ovhcloud.com/en-ca/emails/){.external} service
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca)

## Instructions

The security policy management of your Exchange service has four aspects:

- enhancing Exchange account security when users try to log in
- adding complexity to the security of your Exchange service account passwords
- strengthening the verification of incoming messages on our servers and to your Exchange addresses
- defining how the so-called "unwanted" messages will be displayed in your Exchange addresses

To access the security policy of your Exchange service, log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca) and make sure you are in the "Web" section. Click `Microsoft`{.action}, then `Exchange`{.action}, and finally, select the Exchange service concerned.

On the page that appears, click on the `Security`{.action} tab.

![exchangesecurity](images/manage-security02.png){.external}

Continue to the aspect(s) you want to modify.

- [Enhance connection security](#enhanced-security): Define whether accounts should lock after a number of unsuccessful log-in attempts.
- [Add complexity to the security of passwords](#password-complexity): Define a complexity requirement, as well as rules for changing passwords.
- [Strengthen the verification of incoming messages](#incoming-messages-verification): Specify whether our servers should check if the messages received come from a legitimate source (i.e. DKIM and/or SPF checks).
- [Define the display of unwanted messages](#unwanted-messages-management): Specify whether unwanted messages should have a tag to identify them, or be automatically moved to the trash.

### Enhance connection security <a name="enhanced-security"></a>

This allows you to define whether Exchange accounts should lock after a number of unsuccessful log-in attempts.

To do this, complete the information below:

- **Lockout threshold**: Set the number of unsuccessful log-in attempts before the account locks. Enter "0" to not apply a lockout threshold.
- **Lockout counter reset time**: This field will only appear if a lockout threshold has been set. Specify the time in minutes it takes for the failed connection attempt counter to reset.
- **Account lockout duration**: This field will only appear if a lockout threshold has been set. Specify the time period in minutes during which the Exchange account will remain locked if the lockout threshold has been reached.

Once this information has been entered, you can immediately validate these changes by clicking on `Next`{.action}, then `Confirm`{.action}. You can then continue to the next part.

### Add complexity to the security of passwords <a name="password-complexity"></a>

This allows you to define a complexity requirement, as well as rules for changing passwords.

To do this, complete the information below:

- **Complexity requirements**: Allows user to set rules regarding the complexity of passwords:<br> \- not contain all or part of the user’s account name<br> \- be at least 6 characters long<br> \- contain uppercase and lowercase letters, non-alphabetic characters (! or $ for example), and numbers
- **Prevent password change**: Allows to enforce a minimum lifetime for your Exchange accounts’ passwords. This means that users will have to wait a certain number of days before they can change their passwords.
- **Maximum password duration**: Allows to enforce a maximum lifetime for your Exchange accounts’ passwords. This means that users will be forced to change their passwords once this time limit is reached.
- **Keep password history**: This field will only appear if a maximum lifetime has been set. Specify whether previous passwords can be reused again, and if so, for how long.
- **Minimum password length**: Allows to set a minimum size for password length when a user wants to change it.

Once this information has been entered, you can immediately validate these changes by clicking on `Next`{.action}, then `Confirm`{.action}. You can then continue to the next part.

### Strengthen the verification of incoming messages <a name="incoming-messages-verification"></a>

This allows you to specify whether our servers should check if the messages received in your Exchange accounts come from a legitimate source (DKIM and/or SPF checks).

To make this change, on the page that appears, enter the information set out in the table below:

- **Activate DKIM signature verification**: Define whether our servers should check the DKIM signature of the messages you receive on your Exchange accounts. This action guarantees the authenticity of the sending domain and the integrity of the message, making it possible to identify non-legitimate mailings, which will then be marked as spam.
- **Activate SPF protection verification**: Define whether our servers must verify that the source of the messages you receive is present in the SPF record of the sender domain. This verification can identify illegitimate mailings, which will then be marked as spam.

Once this information has been entered, you can immediately validate these changes by clicking on `Next`{.action}, then `Confirm`{.action}. You can then continue to the next part.

### Define the display of unwanted messages <a name="unwanted-messages-management"></a>	

This allows you to define whether unwanted messages you receive on your Exchange accounts should be tagged to identify them, or automatically moved to the trash.

To make this change, on the page that appears, enter the information set out in the table below:

- **Identify SPAM email**: Specify whether our servers should add a tag to identify received messages that are considered "unwanted" as spam.
- **Move SPAM to junk**: Specify whether our servers should automatically move any "unwanted" messages to the "Junk Email" folder.

Once this information has been entered, you can immediately validate these changes by clicking on `Next`{.action}, then `Confirm`{.action}.

## Go further

Join our community of users on <https://community.ovh.com/en/>.

