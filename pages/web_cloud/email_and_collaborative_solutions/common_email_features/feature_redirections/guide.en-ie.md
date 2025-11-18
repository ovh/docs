---
title: 'Using email aliases and redirections'
excerpt: 'Find out how to manage aliases and email redirections'
updated: 2025-06-03
---

<style>
.w-640 {
  max-width:640px !important;
}
</style>

## Objective

In this guide, you can find information and help on configuring your **redirections** and **alias** emails, such as sending emails received from address A to address B.

![emails](images/schema-redirect00.png){.thumbnail .w-640}

**This guide explains how to manage aliases and email redirections.**

/// details | What is an email redirection?

You can use redirections to change the routing of an email sent to an email address, forwarding it to one or more other email addresses.

For example, you may want emails sent to **contact@mydomain.ovh** forwarded to **john.smith@otherdomain.ovh**. This way, you can automatically send emails received by **contact@mydomain.ovh** to **john.smith@otherdomain.ovh**.

///

/// details | What is an email alias?

Unlike redirection, an alias address is not an actual email account, but functions as a secondary address for the email account associated with it.

By creating an alias for your email account, you can give your contacts a "masking" address instead of revealing your personal email address to them. An email account can have multiple aliases.

For example, your email address is **john.smith@mydomain.ovh** and your alias is **information@mydomain.ovh**. You can then send your contacts the address **information@mydomain.ovh** and receive emails on **john.smith@mydomain.ovh**, without the sender knowing the address **john.smith@mydomain.ovh**.

///

/// details | Redirection and alias in pictures <a name="diagram"></a>

Click on the tabs below for an illustrated explanation of how aliases and redirections work.

- `From` is the sender's address.
- `To` is the address of the recipient.
- `Redirect to` refers to the redirection email address that has been configured.

> [!tabs]
> **1. Simple redirection**
>>
>> The email is sent directly to the redirection address, the original recipient does not receive the email.
>>
>> ![emails](images/schema-redirect01.png){.thumbnail .w-640}
>>
> **2. Redirection with local copy**
>>
>> Both the original recipient and the redirection email account will receive the email.
>>
>> ![emails](images/schema-redirect02.png){.thumbnail .w-640}
>>
> **3. Email alias**
>>
>> The email is sent to the alias address and received by the email account on which the alias has been configured. `Received by` means the email account that receives the email.
>>
>> ![emails](images/schema-redirect03.png){.thumbnail .w-640}
>>

> [!primary]
>
> Note that you can configure redirections to multiple email addresses. To do this, the redirections to each recipient must be created individually.

///

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager).
- A preconfigured OVHcloud email solution:
    - **MX Plan** available with a [web hosting plan](/links/web/hosting), or included in a [100M free hosting](/links/web/domains-free-hosting).
    - [Exchange](/links/web/emails).
    - [Email Pro](/links/web/email-pro).
    - [Zimbra](/links/web/emails-zimbra).

## Instructions

This guide covers all of our email solutions. Depending on the solution, you can manage aliases and redirections from the OVHcloud Control Panel, or via webmail. For clarity, we mention the types of email solutions concerned in each chapter of this guide. Here are the different types of OVHcloud email solutions:

- **MX Plan Roundcube**: Corresponds to the MX Plan solution using Roundcube webmail.
- **MX Plan Zimbra**: Corresponds to the MX Plan solution using Zimbra webmail.
- **MX Plan OWA**: Corresponds to the MX Plan solution using the Outlook Web App (OWA) webmail.
- **Exchange**: Applies to **Hosted**, **Private** and **Dedicated** Exchange solutions using the Outlook Web App (OWA) webmail.
- **Email Pro**: Exchange-based email solution using the Outlook Web App (OWA) webmail.
- **Zimbra**: Dedicated solution using Zimbra webmail.
- **Redirect**: This free solution is automatically available if you have a domain name in your Control Panel without an attached email solution. You can use it to create email redirections.

> [!primary]
>
> The email technology for your MX Plan solution may vary depending on the activation date of your solution, or if a migration has recently taken place. This technology is mainly distinguished by the interface of its webmail. To identify it via the OVHcloud Control Panel, follow this process:
>
> 1. Log in to your [OVHcloud Control Panel](/links/manager).
> 1. Go to the `Web Cloud`{.action} section.
> 1. Click `MX Plan`{.action}.
> 1. Select the domain concerned.
> 1. The `General Information`{.action} tab is selected by default.
> 1. Note the technology used under the mention **Webmail** in the box labeled `Subscription`.
>
> ![MX plan](images/technology-email.png){.thumbnail .w-640}
>

**Contents**

- [Create a redirection](#redirect)
    - [Via the Control Panel](#redirect-manager)
        - [MX Plan / redirect](#redirect-manager-mxplan)
    - [Via webmail](#redirect-webmail)
        - [Outlook Web App (OWA)](#redirect-webmail-owa)
        - [Zimbra](#redirect-webmail-zimbra)
- [Delete a redirection](#redirect-delete)
    - [MX Plan via the Control Panel](#redirect-delete)
    - [Outlook Web App (OWA)](#redirect-delete-owa)
    - [Zimbra](#redirect-delete-zimbra)
- [Create an alias](#alias)
    - [Exchange / Email Pro / MX Plan](#alias-exchange-emp-mxplan)
    - [MX Plan Roundcube](#alias-mxplan-roundcube)
    - [Zimbra](#alias-mxplan-roundcube)
- [Delete an alias](#alias-delete)
    - [Exchange / Email Pro / MX Plan](#alias-delete-exchange-emp-mxplan)
    - [MX Plan Roundcube](#alias-delete-mxplan-roundcube)
    - [Zimbra](#alias-delete-zimbra)

### Creating a redirection <a name="redirect"></a>

#### Via the OVH Control Panel <a name="redirect-manager"></a>

Currently, only the **MX Plan** and **Redirect** plans have a redirection management interface via the OVHcloud Control Panel.

##### MX Plan / redirect <a name="redirect-manager-mxplan"></a>

1. Log in to your [OVHcloud Control Panel](/links/manager).
1. Go to the `Web Cloud`{.action} section.
1. Click `MX Plan`{.action}.
1. Select the domain concerned.

In our example, this is a **redirection with a local copy** (see [diagram 2](#diagram) at the beginning of this guide). If this is what you need, follow the steps below by clicking on the tab corresponding to the webmail technology used by your MX Plan:

> [!tabs]
> **MX Plan Roundcube / MX Plan Outlook Web App / Redirect**
>>
>> By default, you are in the `General information`{.action} tab of your MX Plan. Click on the `Emails`{.action} tab, then on the right-hand side on the `Manage redirections`{.action} button.
>>
>> ![emails](images/mxplan-legacy-1.png){.thumbnail .w-640}
>>
>> The table of redirections that are already active appears. On the right, click `Add a redirection`{.action}.
>>
>> ![emails](images/mxplan-legacy-2.png){.thumbnail .w-640}
>>
>> In the form `Create a redirection`, enter the following information:
>>
>> - **From address**: Enter the email address you would like to redirect.
>> - **To the address**: Enter the destination address for your redirection here. This can be one of your OVHcloud email addresses, or an external email address.
>> - **Choose a copy mode**: Choose if you want to:
>>      - **Keep a copy of the email with OVHcloud**: Receive the email on your main address as well as the redirection address (see [diagram 2](#diagram) at the beginning of this guide).
>>      - **Do not store a copy of the email**: Send directly to the redirection address without the primary address receiving it (see [diagram 1](#diagram) at the beginning of this guide).
>>
>> Then click `Confirm`{.action} to confirm the addition of this redirection.
>>
>> ![emails](images/mxplan-legacy-3.png){.thumbnail .w-640}
>>
>> > [!primary]
>>>
>> > To modify the destination address or delete a redirection, click `...`{.action}, to the right of the redirection concerned.
>>
> **MX Plan Zimbra**
>>
>> By default, you are in the `General information`{.action} tab of your MX Plan. Click on the `Redirections`{.action} tab.
>>
>> The table of redirections that are already active appears. On the right, click `Add a redirection`{.action}.
>>
>> ![emails](images/mxplan-zimbra-1.png){.thumbnail .w-640}
>>
>> In the `Create a redirection` form, enter the following information:
>>
>> - **From address**: Enter the email address you would like to redirect.
>> - **To the address**: Enter the destination address for your redirection here. This can be one of your OVHcloud email addresses, or an external email address.
>> - **Choose a copy mode**: Choose if you want to:
>>      - **Keep a copy of the email with OVHcloud**: Receive the email on your main address as well as the redirection address (see [diagram 2](#diagram) at the beginning of this guide).
>>      - **Do not store a copy of the email**: Send directly to the redirection address without the primary address receiving it (see [diagram 1](#diagram) at the beginning of this guide).
>>
>> Then click `Confirm`{.action} to confirm the addition of this redirection.
>>
>> ![emails](images/mxplan-legacy-3.png){.thumbnail .w-640}
>>

> [!primary]
>
> When you choose the "**Keep a copy of the email with OVHcloud**" copy mode, a redirection from the email address to itself is created automatically in the redirections list, and it materializes this local copy.
>

#### Via webmail <a name="redirect-webmail"></a>

Go to [webmail](/links/web/email). Enter **the email address** and the **password** to log in.

![emails](images/webmail.png){.thumbnail}

You can create a redirection using inbox rules, also called "filters" in webmail. These rules, which are applied when an email is received, allow an incoming email to be forwarded or redirected.

##### Outlook Web App (OWA) <a name="redirect-webmail-owa"></a>

> [!success]
>
> This chapter covers the following offers:
>
> - **MX Plan OWA**.
> - **Exchange**.
> - **Email Pro**.
>

Outlook Web App is an interface used for our **Exchange**, **Email Pro** offers, and some **MX Plan** accounts.

Browse the tabs below to set up your redirection via Outlook Web App:

> [!tabs]
> **Step 1**
>>
>> Once you have logged in to your email address via [webmail](/links/web/email), click on the cogwheel in the top right-hand corner, then `Options`{.action}.
>>
>> ![emails](images/emails-all-01.png){.thumbnail .w-640}
>>
> **Step 2**
>>
>> From the **Options** window, in the left-hand column, go to the **Automatic processing** category in the **Mail** section, then click `Inbox and storage rules`{.action}.
>>
>> ![emails](images/emails-all-02.png){.thumbnail .w-640}
>>
>> Use this window to manage your redirections and apply filters on all incoming emails.
>>
> **Step 3**
>>
>> Once you have opened the window for managing **Inbox rules**, click the `+`{.action} icon in the top left-hand corner.
>>
>> ![emails](images/emails-all-03.png){.thumbnail .w-640}
>>
> **Step 4**
>>
>> In the window that pops up, enter the following information:
>> - **Name**: Define the name of your redirection.
>> - **When the message arrives and meets all these conditions**: If your redirection applies to all messages, select `[Apply to all messages]`{.action}.
>>
>> ![emails](images/emails-all-04.png){.thumbnail .w-640}
>>
> **Step 5**
>>
>> Then, in the same window:
>>
>> **Do all of the following**: This is where you apply the redirection. Select `Forward, redirect or send`{.action} then `Redirect the message to...`{.action}.
>>
>> ![emails](images/emails-all-05.png){.thumbnail .w-640}
>>
> **Step 6**
>>
>> Then enter the email address you would like to redirect the email to in "**Redirect the email to...**", then click `Save`{.action}. Finally, click `OK`{.action} (floppy disk icon) to complete your redirection.
>>
>> ![emails](images/emails-all-06.png){.thumbnail .w-640}
>>

> [!primary]
>
> To apply a **simple redirection** (see [diagram 1](#diagram) at the beginning of this guide), add an additional rule to your **redirection with a local copy** from this window. Click `Add an action`{.action} (box 1), then `Move, copy or delete`{.action}, then click `delete message`{.action}. This rule moves the message directly to the trash, after redirecting the message to the redirection address.
>
>![emails](images/emails-all-07.png){.thumbnail .w-640}
>

##### Zimbra <a name="redirect-webmail-zimbra"></a>

> [!success]
>
> This chapter covers the following offers:
>
> - **MX Plan** with zimbra for webmail.
> - **Zimbra**.
>

To redirect emails from your Zimbra account to another email address, we will apply a transfer rule.

> [!primary]
>
> In our example below, we have chosen to redirect all incoming emails to another email address. To understand the example in the screenshots, we are logged on to the address **zimbra@mydomain.ovh** and we would like to redirect emails from this account to the address **address@example.com**.
>

Follow the steps below by clicking on the tabs to set up your redirection:

> [!tabs]
> **Step 1**
>>
>> Click the &#9881; button in the top right-hand corner of your webmail window, then click `Settings`{.action}.
>>
>> ![zimbra](images/zimbra_settings01.png){.thumbnail .w-640}
>>
> **Step 2**
>>
>> Click the `Filters`{.action} section in the settings window, then click the `Add a filter`{.action} button.
>>
>> ![zimbra](images/zimbra_redirection02.png){.thumbnail .w-640}
>>
> **Step 3**
>>
>> - First click <u>Advanced Mode</u> in the top right-hand corner to set up this rule.
>> - Enter a name for your filter in the `Filter name` box.
>> - Leave the dropdown menu on `all` in the sentence "If an incoming message meets ... of these conditions".
>> - In the first dropdown menu of the rules, choose `To`, leave `contains`, then enter the email address you are logged in to in the box to the right.
>> - Under "Then", select `Forward to` from the drop-down menu and enter the destination email address.
>> - Click `+ Add an action`{.action} below, then select `Move to receive folder` (Keep in Inbox).
>> - Click `Save`{.action} from your filter window and also from the settings window.
>>
>> ![zimbra](images/zimbra_redirection03.png){.thumbnail .w-640}
>>

For more details on using Zimbra webmail, please read our guide on [Using Zimbra webmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra).

#### Delete a redirection <a name="redirect-delete"></a>

##### MX Plan via the OVHcloud Control Panel <a name="redirect-delete-mxplan"></a>

1. Log in to your [OVHcloud Control Panel](/links/manager).
1. Go to the `Web Cloud`{.action} section.
1. Click `MX Plan`{.action}.
1. Select the domain concerned.

Select the tab below for the email technology used by your MX Plan service:

> [!tabs]
> **MX Plan Roundcube / MX Plan OWA / Redirect**
>>
>> - By default, you are in the `General information`{.action} tab of your MX Plan.
>> - Click the `Emails`{.action} tab, then on the right-hand side the `Manage redirections`{.action} button.
>>
>>    ![emails](images/mxplan-legacy-1.png){.thumbnail .w-640}
>>
>> - Click `...`{.action}, to the right of the redirection concerned, then `Delete redirection`{.action}.
>>
>>    ![emails](images/mxplan-redirect-delete01.png){.thumbnail .w-640}
>>
> **MX Plan Zimbra**
>>
>> - By default, you are in the `General information`{.action} tab of your MX Plan.
>> - Click the `Redirections`{.action} tab.
>> - Click on `...`{.action}, to the right of the redirection concerned, then `Delete redirection`{.action}.
>>
>>    ![emails](images/mxplan-redirect-delete02.png){.thumbnail .w-640}
>>

##### Outlook Web App (OWA) <a name="redirect-delete-owa"></a>

Go to [webmail](/links/web/email). Enter **the email address** and the **password** to log in. From the OWA webmail interface, follow the steps by clicking on the tabs below:

> [!tabs]
> **Step 1**
>>
>> Once you have logged in to the OWA webmail interface, click the cogwheel icon in the top right-hand corner, then `Options`{.action}.
>>
>> ![emails](images/emails-all-01.png){.thumbnail .w-640}
>>
> **Step 2**
>>
>> From the **Options** window, in the left-hand column, go to the **Automatic processing** category in the **Mail** section, then click `Inbox and storage rules`{.action}.
>>
>> ![emails](images/owa-redirect-del-01.png){.thumbnail .w-640}
>>
>> You will find the window you can use to manage your redirections and filters.
>>
> **Step 3**
>>
>> Once in the window for managing **Inbox rules**, click on the redirection you want to delete, it must be highlighted. Then click the recycle bin icon.
>>
>> ![emails](images/owa-redirect-del-02.png){.thumbnail .w-640}
>>

##### Zimbra <a name="redirect-delete-zimbra"></a>

Go to [webmail](/links/web/email). Enter **the email address** and the **password** to log in. From the Zimbra webmail interface, follow the steps by clicking on the tabs below:

> [!tabs]
> **Step 1**
>>
>> Once you have logged in to the Zimbra webmail interface, click the &#9881; button in the top right-hand corner of your webmail window, then click `Settings`{.action}.
>>
>> ![zimbra](images/zimbra_settings01.png){.thumbnail .w-640}
>>
> **Step 2**
>>
>> Click on the `Filters`{.action} section in the settings window.
>>
>> ![zimbra](images/zimbra_redirect-del-01.png){.thumbnail .w-640}
>>
> **Step 3**
>>
>> Click the `...`{.action} button to the right of the filter concerned, then click `Delete`{.action}.
>>
>> ![zimbra](images/zimbra_redirect-del-02.png){.thumbnail .w-640}
>>

### Create an alias <a name="alias"></a>

Creating an alias for your email address allows you to provide a "mask" address to your contacts, without having to provide your personal email address to the sender.

#### Exchange / Email Pro / MX Plan <a name="alias-exchange-emp-mxplan"></a>

Log in to your [OVHcloud Control Panel](/links/manager) and go to the `Web Cloud` section. Then choose the menu according to your email solution:

- **Exchange**: Go to the `Microsoft`{.action} section, click `Exchange`{.action} and select the platform concerned. Click the `Email accounts`{.action} tab.

- **Email Pro**: Go to the `Email Pro`{.action} section, select the platform concerned, then click the `Email accounts`{.action} tab.

- **MX Plan**: Go to the `MX Plan`{.action} section, select the platform concerned, then click the `Email accounts`{.action} tab.

To add an alias to your email account, follow the steps described by clicking on each tab below:

> [!tabs]
> **Step 1**
>>
>> In the table that appears, you will find an `Alias` column.
>>
>> ![emails](images/email-alias012.png){.thumbnail .w-640}
>>
> **Step 2**
>>
>> Click the `...`{.action} button, then `Configure aliases`{.action} (or `Manage aliases`{.action}).
>>
>> ![emails](images/email-alias02.png){.thumbnail .w-640}
>>
> **Step 3**
>>
>> Click `Add an alias`{.action}, then enter the address you have chosen for your alias and confirm your choice.
>>
>> ![emails](images/email-alias03.png){.thumbnail .w-640}

#### MX Plan Roundcube <a name="alias-mxplan-roundcube"></a>

To create an alias on an MX Plan Roundcube email account, you must do it the same way as a redirection. Simply determine an email address that does not exist on your domain name and point to an existing address. Follow the [MX Plan / MX redirect](#redirect-manager-mxplan) chapter in the "Create a redirection" section of this guide.

#### Zimbra <a name="alias-mxplan-roundcube"></a>

1. Log in to your [OVHcloud Control Panel](/links/manager).
1. Go to the `Web Cloud`{.action} section.
1. Click `Zimbra Mail`{.action}.
1. Click the `Email accounts`{.action} tab of your Zimbra service.

> [!tabs]
> **Step 1**
>>
>> - Click the `⁝`{.action} button to the right of the email account concerned.
>> - Click `Modify`{.action}.
>>
>> ![zimbra](images/zimbra_alias01.png){.thumbnail .w-640}
>>
> **Step 2**
>>
>> The window for configuring your email account will open. Click the `Alias`{.action} tab above.
>>
>> ![zimbra](images/zimbra_alias02.png){.thumbnail .w-640}
>>
> **Step 3**
>>
>> The following window will contain a list of aliases that you can associate with the account concerned. Click the `Create Alias`{.action} button.
>>
>> ![zimbra](images/zimbra_alias03.png){.thumbnail .w-640}
>>
> **Step 4**
>>
>> Determine the address of your alias and select one of the domain names associated with your Zimbra service.
>>
>> ![zimbra](images/zimbra_alias04.png){.thumbnail .w-640}
>>

### Delete an alias <a name="alias-delete"></a>

#### Exchange / Email Pro / MX Plan <a name="alias-delete-exchange-emp-mxplan"></a>

Log in to your [OVHcloud Control Panel](/links/manager) and go to the `Web Cloud` section. Then choose the menu according to your email solution:

- **Exchange**: Go to the `Microsoft`{.action} section, click `Exchange`{.action} and select the platform concerned. Click on the `Email accounts`{.action} tab.

- **Email Pro**: Go to the `Email Pro`{.action} section, select the platform concerned, then click on the `Email accounts`{.action} tab.

- **MX Plan**: Go to the `MX Plan`{.action} section, select the platform concerned, then click on the `Email accounts`{.action} tab.

In the `Email accounts`{.action} tab, click the `...`{.action} button to the right of the email address concerned. Then click `Configure aliases`{.action} (or `Manage aliases`{.action}).

Click the `...`{.action} button to the right of the alias concerned, in the alias management menu. Finally, click `Delete alias`{.action}.

![emails](images/email-alias04.png){.thumbnail .w-640}

#### MX Plan Roundcube <a name="alias-delete-mxplan-roundcube"></a>

To delete an alias on an MX Plan Roundcube email account, you must do it the same way as a redirection. You will need to manage the redirections for your MX Plan service.

From the `Emails`{.action} tab, click `Manage redirections`{.action} on the right-hand side of the window.

Click the `...`{.action} button to the right of the redirection concerned, then click `Delete redirection`{.action}.

> [!warning]
>
> You cannot modify a redirection or an alias. You must delete and recreate it.
>

![emails](images/email-del-legacy-redirect01.png){.thumbnail .w-640}

#### Zimbra <a name="alias-delete-zimbra"></a>

1. Log in to your [OVHcloud Control Panel](/links/manager).
1. Go to the `Web Cloud`{.action} section.
1. Click `Zimbra Mail`{.action}.
1. Click the `Email accounts`{.action} tab of your Zimbra service.

> [!tabs]
> **Step 1**
>>
>> - Click the `⁝`{.action} button to the right of the email account concerned.
>> - Click `Modify`{.action}.
>>
>> ![zimbra](images/zimbra_alias01.png){.thumbnail .w-640}
>>
> **Step 2**
>>
>> The window for configuring your email account will open. Click the `Alias`{.action} tab above.
>>
>> ![zimbra](images/zimbra_alias02.png){.thumbnail .w-640}
>>
> **Step 3**
>>
>> The following window contains a list of aliases that you can associate with the account concerned. Click the `Create Alias`{.action} button.
>>
>> ![zimbra](images/zimbra_alias03.png){.thumbnail .w-640}
>>

## Go further

[Getting started with the MX Plan solution](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Getting started with the Hosted Exchange service](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

[Getting started with the Private Exchange service](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_private)

[Getting started with the Email Pro solution](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)

[Getting started with Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

For specialized services (SEO, development, etc.), contact the [OVHcloud partners](/links/partner).

If you would like assistance with using and configuring your OVHcloud solutions, we recommend referring to our range of [support solutions](/links/support).

Join our [community of users](/links/community).