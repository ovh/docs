---
title: "Transferring a domain name to another registrar"
excerpt: "Find out how to move a domain name from OVHcloud to a provider of your choice"
updated: 2023-07-04
---

## Objective

A **domain transfer** refers to the process of moving a domain name from one registrar to another. For example, if you have ordered a domain name on our website, OVHcloud is its current registrar. An outgoing domain transfer must be initiated by the new registrar.

In order to prevent unauthorised domain transfers, domain names are usually locked, indicated by the status *clientTransferProhibited*. This protection must be lifted in the OVHcloud Control Panel before starting a transfer.

**This guide explains how to prepare your domain name for an outgoing transfer.**

> [!warning]
>
> If the domain name in question should stay registered at OVHcloud but modified in terms of its management or ownership, an outgoing domain transfer is not the appropriate procedure.
>
> To transfer the domain name management to another OVHcloud customer account, a **change of contacts** must be made instead. The procedure is described in [this guide](/pages/account_and_service_management/account_information/managing_contacts).
>
> If you also need to change the **domain name holder**, you should do so **before** you change the domain name contacts. To do this, use our [change of ownership for domain names](/pages/web_cloud/domains/trade_domain) instructions.
>

## Requirements

- A [domain name](https://www.ovhcloud.com/en-sg/domains/) registered with OVHcloud
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg) with the necessary permissions to manage the domain name (domain administrator)
- The registration of the domain name in question was at least 60 days ago **and** it has not been transferred or traded (i.e. change of owner) during the last 60 days

> [!primary]
>
> If you are the domain name's **owner** but you are currently not able to manage it in the OVHcloud Control Panel, neither by using your own access nor via your domain name's administrative contact, please consult [this guide](/pages/account_and_service_management/account_information/managing_contacts#special-case-of-a-domain-owner) first before proceeding.
>

## Instructions

> [!warning]
>
> The following instructions describe the most common way to transfer a domain name, valid for most Top Level Domains (TLD). However, the specific rules for processes regarding TLDs are solely defined by the appropriate allocation authority i.e. the **registry**. Registrars such as OVHcloud must adhere to these rules and have no influence on registry decisions.
>
> The exact procedure for domain transfers may therefore vary, especially in case of some country-code TLDs (ccTLD, such as .lu, .uk, .hk, .ro) and a few special purpose TLDs (.am, .fm, etc.). Transfers might also be prohibited for various reasons, e.g. outstanding payment, abuse case or registry lock. 
>
> We recommend to consult the following resources in case of any doubt:
>
> - The website of the respective TLD registry
> - The [list of TLDs available at OVHcloud](https://www.ovhcloud.com/en-sg/domains/tld/)
> - [ICANN's explanation of EPP Status Codes](https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en) (to find out which status codes currently apply to your domain name, carry out a *Whois* search, preferably using the respective TLD registry's website)
> - Your new registrar's website and management interface, especially for questions about a pending transfer process
>

### Step 1: Remove the transfer protection for the domain name

Log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg) and select `Web Cloud`{.action}. Click `Domain names`{.action}, then choose the domain name concerned.

On the `General information`{.action} tab you can find the `Protection against domain name transfer`{.action} slider button under **Security**, set to `Enabled`{.action} by default.

![outgoingtransfer](images/outgoing-transfer-step1.png){.thumbnail}

Click on the slider and confirm in the popup window that you want to remove this protection. Allow a few minutes for the status to change to `Disabled`{.action}.

> [!primary]
> 
> If you encounter the message "**An error occurred when requesting to disable the domain protection (User not granted for this request)**", your customer account does not have sufficient rights to unlock the domain name. 
>
> If you encounter the message "**AUTH/INFO code: Authcode is not managed by OVHcloud, contact the registry to claim it**", this means that the transfer code for your domain name cannot be retrieved via your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg).
> 
> In both cases, check that your account is the **administrator** contact of the domain name using our guide on [contact management](/pages/account_and_service_management/account_information/managing_contacts) then check that the domain name extension can be unlocked from the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg).
> 
> Some *transfer codes* are directly managed by the *registry* of your domain name extension. A *registry* is an organisation that manages all domain names for a given extension. For example, the **AFNIC** manages all domain names with the extension *.fr*. If this is the case, you must contact the *registry* managing your domain name extension directly to retrieve the *transfer code*.
>

![outgoingtransfer](images/outgoing-transfer-step2.png){.thumbnail}

> [!primary]
>
> Once the protection is lifted, the domain name will remain unlocked for seven days. After this period, the protection will be automatically reactivated. If you do not request a domain transfer to your new registrar during this time, it will be necessary to remove the protection again.
>

### Step 2: Retrieve the transfer code

> [!warning]
>
> Note that it is still possible to unlock and retrieve the transfer code of your domain name after its expiration. According to registry rules, a domain name in the [redemption period](https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en) may need to be restored so that it can be transferred. Contact your new registrar for transfer details.
>

Once you have removed the transfer protection, you can retrieve your domain name’s transfer code in the `General information`{.action} tab. Refresh the page if necessary. Click on `AUTH/INFO`{.action} under `Protection against domain name transfer`{.action}. A window displaying your AUTH/INFO code (also known as transfer code, domain password, AUTH-CODE or EPP-Code) will open.

![outgoingtransfer](images/outgoing-transfer-step3.png){.thumbnail}

The code will be requested by your new registrar to complete the transfer process. You can verify the details with your provider.

Make sure to copy and paste the code as opposed to typing it by hand, since some characters are easily confused.

Once the transfer code has been retrieved, **do not lock your domain again unless you no longer wish to transfer it**.

### Step 3: Launch the transfer at your new registrar

After completing the previous steps you can initiate the transfer, usually by placing an order. Afterwards, the transfer may take up to 10 days. 

You can contact your provider for more information about this process.

> [!warning]
>
> If your new registrar requests a new transfer code, reenable the transfer protection for your domain name, then disable it again a few minutes later. You can then retrieve the new transfer code.
>

## Go further

[Transferring a .uk domain name to another registrar](/pages/web_cloud/domains/transfer_outgoing_couk)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-sg/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-sg/support-levels/).

Join our community of users on <https://community.ovh.com/en/>. 
