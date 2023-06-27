---
title: Changing the owner of a domain name
excerpt: Find out how to change the owner of a a domain name in the OVHcloud Control Panel
updated: 2023-06-19
---

**Last updated 19th June 2023**

## Objective

In addition to providing [contacts](/pages/account/customer/managing_contacts), registering a domain name requires you to enter information on the domain name owner. In this context, **owner** pertains to either a natural person or a legal person (private or public organisation) holding the usage rights to this domain name. A **domain trade** refers to the act of modifying this information in a legally binding way i.e. the transfer of usage rights to a new **owner**. For example, this process is the mandatory procedure when a company changes its name.

> [!primary]
>This operation will not move your domain name to another OVHcloud customer account.
>
>To do this you need to change the domain name's [contacts](/pages/account/customer/managing_contacts).
>
> If you need to make a change of owner and a change of contact for the same domain name, there is no preferential order. However, it is the administrator contact who is able to initiate these operations. These two changes are therefore made in the Control Panel of ​​the domain name administrator contact.

**This guide explains how to change the owner of a domain name.**

## Requirements

- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we).
- A domain name registered with OVHcloud for which no operation (owner change, transfer, creation) is in progress. If an operation has recently been completed on this domain name, there is a mandatory waiting period of 60 calendar days before a new operation can be started.
- You are the [admin contact](/pages/account/customer/managing_contacts) for the domain name concerned.
- You have permission from the current domain name owner to initiate a domain trade.


## Instructions

> [!warning]
>
> The following instructions describe the most common way to change a domain name owner. They are valid for for most **T**op **L**evel **D**omains (**TLD**). The **TLD** is the domain name extension, i.e. the last part of a domain name, such as *.com*, *.net*, *.fr*, etc.
>
> The specific rules for processes regarding **TLD**s are defined by the corresponding allocation authority i.e. the **registry**. Registrars such as OVHcloud must adhere to these rules and have no influence on registry decisions.
>
> There are generally two types of **TLD**: **ccTLD** and **gTLD**. **ccTLD**s are **TLD**s for a region or country (*.fr*, *.be*, *.uk*, *.de*, *.paris*, etc.) and **gTLD**s are generic **TLD**s (*.net*, *.com*, *.info*, *.org*, etc.).
>
> The exact procedure for domain trade may vary, particularly for some **ccTLDs**, such as *.lu*, *.hk*, *.ro*, *.be*, *.lt*, *.dk*, *.at*, *.fi*, etc. and a few special purpose **TLDs** (e.g. *.am*, *.fm.*). Changing the owner might also be prohibited for various reasons, for example outstanding payments, abuse cases or registry locks.
>
> We recommend to consult the following resources in case of any doubt:
>
> - The website of the respective **TLD** registry
> - The [list of **TLD**s available at OVHcloud](https://www.ovhcloud.com/en/domains/tld/)
> - The section `Ongoing operations`{.action} of the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we) to check any pending status updates of the domain name

### Step 1: Select the domain

Log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we) and select `Web Cloud`{.action}. In the `Domains`{.action} section of the OVHcloud Control Panel, select the generic top-level domain (gTLD) you would like to change the owner of.

### Step 2: Inititate the owner change procedure

In the `General information`{.action} tab, go to the **Plan** section in the bottom right corner. Click `...`{.action} next to the **contacts**, then click `Change domain name holder`{.action}.

![changing owner](images/3652-2.png){.thumbnail}

> [!warning]
>
> Any changes to the owner’s first name, surname, organisation, legal status and email address are treated as a change of owner.
> 
> If you are only changing owner details other than mentioned above, continue with the section [Updating the owner information](#updateownerinformation) below.

A new browser tab will open with all eligible domains. Select a domain name on the list by using the checkbox to the left of it. This step can also be used to launch a bulk operation: it is possible to initiate a domain trade for multiple domain names at once, for example to change the owner of all .ovh domains. When you have made your choices, click `Continue`{.action}.

![changing owner](images/3657.PNG){.thumbnail}

In the owner details form, make sure to enter valid information into all the required fields. Avoid spelling mistakes and using [non-ASCII printable characters](http://facweb.cs.depaul.edu/sjost/it212/documents/ascii-pr.htm) whenever possible. Please note that any inaccurate or false information may cause a technical error and therefore a delay of the entire trading process. 

Once you have confirmed your trade request, two emails will be sent to confirm or decline this change:

- one sent to the current owner’s email address
- one sent to the future owner’s email address

If the email address is not changed as part of the domain trade, one recipient will receive both emails but each of them needs to be confirmed regardless.
<br>Once the two recipients confirm the agreement via email, the domain name owner change will become effective.

> [!primary]
>
> The procedure can be validated by both parties during a period of 14 days.
> 
> If the change is declined by one of the two parties, the action will be cancelled.

> [!warning]
>
> If the domain name owner has been successfully changed, the domain name will be blocked from being [transferred to another registrar](/pages/web/domains/transfer_outgoing_domain) for a period of 60 days. 

### Updating the owner information <a name="updateownerinformation"></a>

If you need to update some secondary information such as phone number, address etc., you do not have to start a trade procedure. It can be edited directly in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we).

In the **Plan** section of the `General information`{.action} tab, click on `...`{.action} next to the **contacts**, then click `Refresh owner information`{.action}.

![changing owner](images/3658.png){.thumbnail}

With this operation you do not need to confirm changes by email.

## Go further

[Managing contacts for your services](/pages/account/customer/managing_contacts)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en/directory/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en/support-levels/).

Join our community of users on <https://community.ovh.com/en/>. 
