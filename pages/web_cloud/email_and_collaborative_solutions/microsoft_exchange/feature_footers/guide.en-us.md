---
title: 'Creating automatic signatures'
excerpt: 'Find out how to add automatic signatures to your email accounts'
updated: 2020-03-26
---

## Objective

In the OVHcloud Control Panel, you can create universal signatures (footers) for email addresses using the same domain ("corporate" signature). They will be attached automatically to emails sent from a user's account.

**This guide explains how to create an automatic signature using the OVHcloud Control Panel.**

## Requirements

- access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we)
- an [OVHcloud Exchange](https://www.ovhcloud.com/en/emails/hosted-exchange/) solution already set up

## Instructions

First, log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we), navigate to the `Webcloud`{.action} section, and select your Exchange service from the column under `Microsoft`{.action} `Exchange`{.action}. Click on the `More+`{.action} tab in the horizontal menu and select `Footers`{.action}.

![exchangesig](images/exchange-footer-step1.png){.thumbnail}

In this section you will see your attached domains, for each of which you can create a footer scheme. Click on `...`{.action} and then on `Configuration`{.action} to open the HTML editor.

![exchangesig](images/exchange-footer-step2.png){.thumbnail}

The editor offers a selection of variables that correspond to the user's data in their account settings. You can, for example, compose a generic closing message and add an appropriate sign-off or some contact information below it, using the variables. Click on the down-arrow to select a variable, then click `Insert a variable`{.action} to add it into the editing pane.

![exchangesig](images/exchange-footer-step3aag.gif){.thumbnail}

The footer is created using HTML tags, which allow for some formatting options. Use the tool bar on the top to customise the signature. You can also verify the HTML code by clicking on `Source`{.action}.
 
![exchangesig](images/exchange-footer-step4.png){.thumbnail}

Tick the box "Enable the signature for outgoing mail only" to prevent adding this footer to emails sent between users on the same domain. Click `Confirm`{.action} once the signature is finished. It will now be attached to emails sent from this domain's user accounts. You can edit or delete signatures in the OVHcloud Control Panel after they are created.

Please take the following specifics into consideration before applying signatures for users:

- Apart from "First name", "Surname", and "Display name", the account details cannot be edited from the OVHcloud Control Panel but need to be specified in the user's OWA ("Options", "General", "My account").

![exchangesig](images/exchange-footer-step5.png){.thumbnail}

- The signature will be added to the email's body without gap, meaning it is advisable to begin the signature with at least one empty line.
- It is not indicated in OWA whether a footer is enabled on this domain and there is **no synchronisation**. If users add their [own signatures](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa#adding-a-signature), emails will include both the individual and the domain-wide footer.
- The editor supports HTML formatting, hyperlinks, images, etc. However, signatures should not rely on these options too heavily. Recipients may use email clients that prevent HTML and embedded images, or the signatures will appear in a different way than intended. Note that HTML tags will be completely removed if a message is sent as "Plain text" from OWA.
- "Initials" are not active on the service. Adding this variable will have no effect.

## Go further

[Using the Outlook Web App with an Exchange account](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)

[Delegating permissions on an Exchange account](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_delegation)

[How to share calendars via OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_calendar_sharing)

Join our community of users on <https://community.ovh.com/en/>.