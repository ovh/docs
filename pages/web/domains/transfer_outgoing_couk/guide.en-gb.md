---
title: Transferring a .uk domain name to another registrar
excerpt: Find out how to move UK domain names from OVHcloud to a provider of your choice
slug: outgoing_couk_domain_name_transfer
section: Transfer
order: 05
---

**Last updated 19th October 2022**

## Objective

The process of changing the registrar for Top Level Domains (TLD) of the **UK** country code (**.uk**) differs from the one explained in our [guide regarding generic TLDs](../outgoing-transfer-of-generic-or-geographical-domain-name/). The instructions below concern the following extensions:

- .uk
- .co.uk
- .ac.uk
- .gov.uk
- .me.uk
- .net.uk
- .org.uk
- .plc.uk
- .sch.uk

**This guide explains how to initiate an outgoing transfer for these TLDs in the OVHcloud Control Panel.**

> [!warning]
>
> If the domain name in question should stay registered at OVHcloud but modified in terms of its management or ownership, an outgoing domain transfer is not the appropriate procedure.
>
> To transfer the domain name management to another OVHcloud customer account, a **change of contacts** must be made instead. The procedure is described in [this guide](https://docs.ovh.com/gb/en/customer/managing-contacts/).
>
> If you also need to change the **domain name holder**, you should do so **before** you change the domain name contacts. To do this, use our [change of ownership for domain names](https://docs.ovh.com/gb/en/domains/how-to-change-domain-name-holder/) instructions.
>

## Requirements

- A [.uk domain name](https://www.ovhcloud.com/en-gb/domains/) registered with OVHcloud
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) with the necessary permissions to manage the domain name (domain administrator)
- The domain name is still active i.e. not expired or otherwise locked on the part of OVHcloud
- The domain name is not the subject of an ongoing dispute with the responsible registry [Nominet](https://www.nominet.uk/)

> [!primary]
>
> If the domain has been expired for **less than 90 days**, it can still be transferred. Please contact our support teams by creating a support request in your OVHcloud Control Panel to unlock the domain name for transfer.
>
> If you are the domain's **owner** but you are currently not able to manage it in the OVHcloud Control Panel, neither by using your own access nor via your domain's administrative contact, please consult [this guide](../../customer/managing-contacts/#special-case-of-a-domain-owner) first before proceeding.
>

## Instructions

The TLDs in question have a registrar **TAG** which corresponds to a domain name registrar such as OVHcloud. The transfer process is initiated by changing the TAG to the one identifying your new registrar.

In case you do not know the required TAG yet, you can request it at your new provider or look it up on this [Nominet registrar list](https://registrars.nominet.uk/uk-namespace/registrar-agreement/list-of-registrars/).

### Step 1: Verify the necessary information

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) and select `Web Cloud`{.action}. Click `Domain names`{.action}, then choose the domain name concerned.

Keep in mind that you have to be logged in as the administrative contact.

In the `General information`{.action} tab, you can verify that the requirements for the transfer process are met.


### Step 2: Edit your domain name's TAG

Click on the `Outgoing transfer tag`{.action} link in the section labelled **Security**.

![outgoingtransfer](images/img_4267.jpg){.thumbnail}

In the popup window, enter the TAG of your future registrar, then click on `Confirm`{.action}.

![outgoingtransfer](images/img_4268.jpg){.thumbnail}

If you are unable to modify your domain name's TAG in the OVHcloud Control Panel, you can request at the registry to modify it on your behalf. You can find more information on the official [Nominet website](https://www.nominet.uk/domain-support/).  

### Step 3: Follow up the transfer process with your new registrar

Successfully changing the TAG initiates the transfer process. Contact your new provider for details as well as any follow-up questions.

## Go further

[Transferring a domain name to another registrar](../outgoing-transfer-of-generic-or-geographical-domain-name/)

Join our community of users on <https://community.ovh.com/en/>. 
