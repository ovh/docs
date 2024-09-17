---
title: 'Using email aliases and redirections'
excerpt: 'Find out how to manage aliases and email redirections'
updated: 2024-06-10
---

<style>
.w-640 {
  max-width:640px !important;
}
</style>

## Objective

In this guide, you can find information and help on configuring your **redirections** and **alias** emails, such as sending emails received from address A to address B.

![emails](images/schema-redirect00.png){.thumbnail}

**This guide explains how to manage aliases and email redirections.**

### What is an email redirection?

You can use redirections to change the routing of an email sent to an email address, forwarding it to one or more other email addresses.

For example, you may want emails sent to **contact@mydomain.ovh** forwarded to **john.smith@otherdomain.ovh**. This way, you can automatically send emails received by **contact@mydomain.ovh** to **john.smith@otherdomain.ovh**.

### What is an email alias?

Unlike redirection, an alias address is not an actual email account, but functions as a secondary address for the email account associated with it.

By creating an alias for your email account, you can give your contacts a "masking" address instead of revealing your personal email address to them. An email account can have multiple aliases.

For example, your email address is **john.smith@mydomain.ovh** and your alias is **information@mydomain.ovh**. You can then send your contacts the address **information@mydomain.ovh** and receive emails on **john.smith@mydomain.ovh**, without the sender knowing the address **john.smith@mydomain.ovh**.

### Redirection and alias in comparison <a name="diagram"></a>

Click on the tabs below for an illustrated explanation of how aliases and redirections work.

- `From` is the sender's address
- `To` is the address of the recipient
- `Redirect to` refers to the redirection email address that has been configured.

> [!tabs]
> **1. Simple redirection**
>>
>> The email is sent directly to the redirection address, the original recipient does not receive the email.<br><br>
>> ![emails](images/schema-redirect01.png){.thumbnail}
>>
> **2. Redirection with local copy**
>>
>> Both the original recipient and the redirection email account will receive the email.<br><br>
>> ![emails](images/schema-redirect02.png){.thumbnail}
>>
> **3. Email alias**
>>
>> The email is sent to the alias address and received by the email account on which the alias has been configured. `Received by` means the email account that receives the email.<br><br>
>> ![emails](images/schema-redirect03.png){.thumbnail}
>>

> [!primary]
>
> Note that you can configure redirections to multiple email addresses. To do this, the redirections to each recipient must be created individually.

## Requirements

- A preconfigured OVHcloud email solution, such as [**Hosted Exchange**](https://www.ovhcloud.com/en-gb/emails/hosted-exchange/), [**Email Pro**](/links/web/email-pro)) or **MX Plan** (available with a [web hosting plan](https://www.ovhcloud.com/en-gb/web-hosting/), a [100M free hosting](https://www.ovhcloud.com/en-gb/domains/free-web-hosting/), or ordered separately)
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

> [!warning]
>
> The sections “[Creating a redirection](#redirect)” and “[Creating an alias](#alias)” concern all OVHcloud email solutions, **unless**:
>
> - If you are using the legacy version of the MX Plan solution (to check this, view the framework below).
> - If you have a domain name registered with OVHcloud without an attached email solution.
>
> For these two exceptions, only redirection is possible. Please refer to the paragraph “[Creating a redirection or an alias with a legacy MX Plan solution or for a domain name without an email solution](#mxplanlegacy)”.
>

>
> Depending on the date your MX Plan solution was activated and if it was recently [migrated](https://www.ovhcloud.com/en-gb/web-hosting/mxplan-migration/), you may have the legacy version or the new version of the solution. Before you proceed, you will need to identify it.<br>
>
> To do this, log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section and click on `Emails`{.action}. Choose the name of the relevant MX Plan service. Identify your solution according to the following table:<br>
>
> |MX Plan legacy version|MX Plan new version|
> |---|---|
> |![email](images/mxplan-starter-legacy.png){.thumbnail}<br> The solution appears in the **Subscription** box on the right. The legacy solution *does not* have a server reference.|![email](images/mxplan-starter-new.png){.thumbnail}<br>The new solution has a **Server model** in the **Summary** box on the left.|
> |Continue with "[MX Plan legacy version](#mxplanlegacy)".|Continue with "[Creating a redirection](#redirect)" or "[Creating an alias](#alias)".|

### Creating a redirection <a name="redirect"></a>

Redirections are not managed in the OVHcloud Control Panel, but via the webmail application after logging in to the email account concerned.

Go to the [webmail](/links/web/email). Enter your **email address** and **password** to log in.

![emails](images/webmail.png){.thumbnail}

In our example, we are setting up a **redirection with a local copy** (see [diagram 2](#diagram) at the beginning of this guide). If this is what you need, click `OK`{.action} (floppy disk icon) in the top left-hand corner, and the rule will be applied. If you do not want to do this, skip to the next step.

Follow the instruction steps by clicking successively on each tab below:

> [!tabs]
> **Step 1**
>>
>> Once you have logged in to your email account via [webmail](/links/web/email), click on the cogwheel icon in the top right corner, then on `Options`{.action}.<br><br>
>> ![emails](images/emails-all-01.png){.thumbnail}<br>
>>
> **Step 2**
>>
>> From the **Options** window in the left-hand column, go to the **Automatic processing** category in the **Mail** section and click on `Inbox and sweep rules`{.action}. <br><br>
>> ![emails](images/emails-all-02.png){.thumbnail}<br><br>
>> In this window, you can manage redirections and apply filters to all incoming emails.<br>
>>
> **Step 3**
>>
>> Once you have opened the window for managing **Inbox rules**, click on the `+`{.action} icon on the top left corner.<br><br>
>> ![emails](images/emails-all-03.png){.thumbnail}<br><br>
>>
> **Step 4**
>>
>> **Name**: Define the name of your redirection. <br>
>> **When the message arrives, and it matches all of these conditions**: If your redirection applies to all messages, select `[Apply to all messages]`{.action}.<br><br>
>>![emails](images/emails-all-04.png){.thumbnail .w-640}<br><br>
>>
> **Step 5**
>>
>> **Do all of the following**: This is where you apply the redirection. Select `Forward, redirect or send`{.action}, then `Redirect the message to...`{.action}.<br><br>
>>![emails](images/emails-all-05.png){.thumbnail .w-640}<br><br>
>>
> **Step 6**
>>
>> Type the address you want to redirect the email to in the field **Redirect the message to...**, then click `Save`{.action}. Finally, click `OK`{.action} (floppy disk icon) to create your redirection.<br><br>
>>![emails](images/emails-all-06.png){.thumbnail .w-640}<br><br>
>>

> [!primary]
>
> To apply a **simple redirection** (see [diagram 1](#diagram) at the beginning of this guide), add an additional rule to your **redirection with a local copy** in this window. Click `Add action`{.action} (box 1), then `Move, copy, or delete`{.action}, and then click `Delete the message`{.action}. This rule moves the email into the trash folder after it has been forwarded to the redirection email address.<br><br>
> ![emails](images/emails-all-07.png){.thumbnail .w-640}

### Delete a redirection

Follow the steps described by clicking on each tab below:

> [!tabs]
> **Step 1**
>>
>> Once you have logged in to your email account via [webmail](/links/web/email), click on the cogwheel icon in the top right corner, then `Options`{.action}.<br><br>
>> ![emails](images/emails-all-01.png){.thumbnail}<br>
>>
> **Step 2**
>> From the **Options** window, go to the **Automatic processing** category in the **Mail** section in the left-hand column, then click `Inbox and storage rules`{.action}. <br><br>
>> ![emails](images/owa-redirect-del-01.png){.thumbnail}<br><br>
>> This section contains the options to manage your redirections and filters.<br>
>>
> **Step 3**
>>
>> Once in the section for managing **Inbox rules**, click on the redirection you want to delete to highlight it. Then click the recycle bin icon.<br><br>
>> ![emails](images/owa-redirect-del-02.png){.thumbnail}<br><br>
>>

### Creating an alias <a name="alias"></a>

Log in to the [OVHcloud Control Panel](/links/manager) and go to the `Web Cloud`{.action} section. Navigate to your email solution:

- **Exchange**: Open `Microsoft`{.action} and then `Exchange`{.action}. Select the service concerned. Click on the `Email accounts`{.action} tab.

- **Email Pro**: Open `Email Pro`{.action}, select the platform concerned, and click on the `Email accounts`{.action} tab.

- **Emails** (MX Plan): Open `Emails`{.action}, select the platform concerned, and click on the `Email accounts`{.action} tab.

To add an alias to your email account, follow the instruction steps by clicking successively on each tab below:

> [!tabs]
> **Step 1**
>>
>> In the table that appears, you will see an `Alias` column.<br><br>
>> ![emails](images/email-alias012.png){.thumbnail}<br>
>>
> **Step 2**
>>
>> Click the `...`{.action} button, then click `Configure aliases`{.action} (or `Manage aliases`{.action}).<br><br>
>> ![emails](images/email-alias02.png){.thumbnail}<br>
>>
> **Step 3**
>>
>> Click `Add Alias`{.action} and enter the address you have chosen for your alias and confirm your choice.<br><br>
>> ![emails](images/email-alias03.png){.thumbnail}<br>

### Deleting an alias

In the `Email accounts`{.action} tab, click on the `...`{.action} button to the right of the email accounts concerned. Then click `Configure aliases`{.action} (or `Manage aliases`{.action}).

Click on the button `...`{.action} in the row of the alias in question and select `Delete alias`{.action}.

![emails](images/email-alias04.png){.thumbnail}

#### Creating a redirection or an alias with a legacy MX Plan solution or for a domain name without an email solution <a name="mxplanlegacy"></a>

Log in to the [OVHcloud Control Panel](/links/manager) and open `Emails`{.action} in the `Web Cloud`{.action} section.

> [!warning]
>
> - The method for creating an alias or redirection is the same.
> - You can create a maximum of 2000 aliases and redirections, including local copies.
>


Follow the instruction steps by clicking successively on each tab below:

> [!tabs]
> **Step 1**
>>
>> After selecting your MX Plan service, you will be on the `General information`{.action} tab. Click on the `Emails`{.action} tab, then `Manage redirections`{.action} on the right-hand side.<br><br>
>> ![emails](images/mxplan-legacy-1.png){.thumbnail}<br>
>>
> **Step 2**
>>
>> The table showing active redirections will appear. Click on the button `Add a redirection`{.action} to the right.<br><br>
>>
>> > [!primary]
>> >
>> > To modify or delete a redirection, click `...`{.action}, to the right of the redirection concerned.
>>
>> ![emails](images/mxplan-legacy-2.png){.thumbnail}<br>
>>
> **Step 3**
>>
>> **From the address**: Enter the email address from which you want to forward emails.<br><br>
>> **To the address**: Enter the destination address for your redirection. This can be one of your OVHcloud email addresses, or an external email address.<br><br>
>> **Select a copy format**: Choose whether you want to: <br> - **Keep a copy of the email at OVHcloud** (receive the email on your primary email account and redirection email account)<br> *cf. the [diagram 2](#diagram) at the beginning of this guide.*<br><br> - **Do not store a copy of the email** (forward directly to the redirection email address without the primary email account receiving it) <br> *cf. the [diagram 1](#diagram) at the beginning of this guide.*<br><br>
>> Then click `Confirm`{.action} to add this redirection.<br><br>
>> ![emails](images/mxplan-legacy-3.png){.thumbnail}

> [!primary]
>
> When you choose “**Keep a copy of the email at OVHcloud**”, a redirection of the email address to itself is automatically created in the redirection list. This creates the local copies of emails.

### Delete a redirection or an alias on a legacy MX Plan solution, or a domain name without an email solution <a name="del-mxplanlegacy"></a>

From the `Emails`{.action} tab, click `Manage redirections`{.action} on the right.

Click the `...`{.action} button in the row of the redirection concerned, then click `Delete redirection`{.action}

> [!warning]
>
> You cannot modify a redirection or an alias. You must delete and recreate it.

![emails](images/email-del-legacy-redirect01.png){.thumbnail}

## Go further <a name="go-further"></a>

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](https://community.ovh.com/en/).
