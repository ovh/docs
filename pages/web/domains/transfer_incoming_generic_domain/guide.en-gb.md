---
title: 'Transferring a domain name to OVH'
slug: transfer-generic-domain
excerpt: 'Find out how to transfer a generic domain name to OVH'
section: Transfer
order: 1
---

**Last updated 11th April 2019**

## Objective

By transferring your domain name, you will change your domain name registrar. You can transfer your domain name to OVH, and the process usually takes between 1 and 10 days.

**Find out how to transfer a generic domain name to OVH.**

## Requirements

- a domain name registered with another registrar
- a domain name more than 60 days old
- a domain name that has not been transferred or changed holders within the last 60 days
- an unlocked domain name
- the authority to request a transfer for the domain name
- a transfer code, or the ability to receive one
- The domain name holder and/or its administrators must be informed of the transfer request.

## Instructions

Your domain name is currently filed with a registrar. Are you looking to transfer it to OVH? If so, you can do this by following a transfer procedure.

The transfer procedure has several steps. These steps will involve various entities being contacted, including your current domain name registrar, OVH, and other parties. The table below provides a breakdown of who is contacted, and how long each step will take to complete.

|Steps|Description|Who is involved?|Where?|Time taken|
|---|---|---|---|---|
|1|Checking the information associated with the domain|The domain administrator|With the current registrar|Depends on your actions|
|2|Unlocking the domain and retrieving the transfer code|The domain administrator, with the holder’s permission|With the current registrar|Depends on your actions|
|3|Requesting the domain name transfer|Whoever has the transfer code, also with the holder’s permission|With the new registrar (e.g. OVH)|Depends on your actions|
|4|The first transfer validation step|The domain name holder and the admin inform the new domain name registrar|Via email|Five days maximum|
|5|The second transfer validation step|The current registrar|Via a request from the organisation managing the domain name extension|Five days maximum|

> [!warning]
>
> This procedure applies to most transfers. However, depending on your domain name extension, it may be different. We recommend checking the information displayed on the page for the extension concerned, via: <https://www.ovh.co.uk/domains/prices/>.
>

### Step 1: Check the information associated with the domain.

**To start with, it is important to ensure that the information associated with the domain name is up-to-date.** Since the implementation of GDPR, the data visible in WHOIS has become very limited. We recommend checking the information associated with your domain name via your current domain name registrar.

- **If the information is correct:** go to the next step of this guide.

- **If the information is incorrect, or not visible:** contact your domain name registrar to check and/or modify it.

> [!primary]
>
> If you do not know which registrar your domain is filed with, the "Registrar" lines, which will appear as part of the WHOIS [tool](https://www.ovh.co.uk/cgi-bin/whois.pl){.external} search result, can provide you with information on its identity.
>

### Step 2: Unlock your domain and retrieve the transfer code.

Once you have checked this information, you will need to unlock your domain name. You can only do this via your current domain name registrar. Please contact them to find out more about their procedure.

Once you have unlocked your domain name, your domain name registrar must send you the transfer code for it. This code is sometimes referred to using different names, such as: **transfer code**, **AuthCode**, **AuthInfo** or **EPP code**.

Please note that OVH is not your current domain name registrar. We are, therefore, unable to unlock your domain or provide the transfer code.

> [!warning]
>
> Once you have unlocked your domain name, you will have 7 days to begin transferring it to OVH. After this 7-day period, your domain will be locked automatically if you do not submit a request to change your domain name registrar.
>

### Step 3: Request a domain name transfer to OVH.

Now that your domain name is unlocked and you have your transfer code, you can request for your domain name to be transferred to OVH. To do this, you will need to order a domain name transfer on [our website](https://www.ovh.co.uk/){.external}. Enter your domain name, and follow the order process.

When you are asked to provide your transfer code, enter it in the box next to your domain name. If you do not have the transfer code, you can tick a box labelled `Enter transfer code at a later stage`{.action}. However, we strongly advise ensuring that you have the code to hand before you continue any further.

You can also complete your order with a [Web Hosting plan](https://www.ovh.co.uk/web-hosting/){.external}, and other OVH solutions. This may be of interest to you, if you are also looking to migrate your services to OVH. Our guide on [Migrating your website and emails to OVH](https://docs.ovh.com/gb/en/hosting/migrating-website-to-ovh/){.external} will provide you with instructions on how to do this.

> [!warning]
>
> Throughout the order process, we advise taking special care with regard to the following points:
>
> - **Data on the domain name holder.** Now that the GDPR is in effect, please ensure that information on the domain name holder matches the information stored by your current domain name registrar. Doing this will ensure that you will not be suspected of domain name theft.
>
> - **Entering the DNS servers for your domain name.** If you are currently using your domain name to keep a website or email service online, you will need to specify their DNS servers in order to avoid any service interruptions.  
>

Once you receive the purchase order, pay the amount requested for the transfer process to begin. The process will only start when we receive your payment. Once you have done this, you can then track the transfer progress via the [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}. To track progress, go to the `Domains`{.action} section via the menu bar on the left-hand side, then `Ongoing operations`{.action}.

### Step 4: Complete the first transfer validation step.

Now that you have launched the transfer procedure, it will need to go through two validation steps. The first step will take a maximum of five days. It begins as soon as the transfer process begins, with two validation requests being sent out. 

|Who receives these validation requests?|Where is the validation request sent to?|
|---|---|
|The domain name holder|To the holder’s email address, stored in WHOIS (if it is visible). Otherwise, it is sent to the domain name holder’s email address, entered during the order process from OVH.|
|The administrator listed during the order process from OVH.|To the email address listed under the administrator’s profile at OVH|

The two parties provide their validation through an OVH interface. A link to the interface is provided in the emails sent. 

![domain](images/domaintransfer_gTLD_validationv2.png){.thumbnail}

There are several possible outcomes to this stage, depending on the actions taken by the domain name holder and the administrator.

|Action|Outcome|
|---|---|
|Both the domain name holder and the admin validate the transfer request.|The transfer progresses to the second validation stage within 24 hours.|
|Only one validation response is received (from either contact). The other contact does not provide a response.|The transfer progresses to the second validation stage after a five-day period.|
|Neither of the contacts respond to the validation requests.|The transfer progresses to the second validation stage after a five-day period.|
|A refusal is received (from either contact).|The transfer process is cancelled as soon as a refusal is received by either one of the contacts.|

If a transfer is cancelled, please ensure that the various parties are in agreement with this, and that their email addresses are up-to-date. The transfer process can be restarted at a later stage from the [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external} in the `Domains`{.action} section, then `Ongoing operations`{.action}.

### Step 5: The second transfer validation step.

Once the second step has been initiated, the current domain name registrar (which is still not OVH) will receive a validation request. There are several possible outcomes to this stage, depending on the actions taken.

|Action|Outcome|
|---|---|
|Validation response received from the current registrar.|The transfer is completed within 24 hours.|
|No response received from the current registrar.|The transfer is completed after a five-day period.|
|A refusal is received from the current registrar.|The transfer process is cancelled as soon as a refusal is received.|

If a refusal response is sent by the current registrar, please contact them to find out why they refused it. The transfer process can be restarted from the [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external} in the `Domains`{.action} section, then `Ongoing operations`{.action}.

### Step 6: Manage your domain with OVH.

Once the transfer procedure is complete, you can manage your domain from the [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}.

To do this, click `Domains`{.action} in the services bar on the left-hand side, then click on the domain name concerned.

## Go further

[Migrating your website and emails to OVH](https://docs.ovh.com/gb/en/hosting/migrating-website-to-ovh/){.external}

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
