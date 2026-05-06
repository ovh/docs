---
title: "Transferring a domain name to another registrar"
excerpt: "Find out how to move a domain name from OVHcloud to a provider of your choice"
updated: 2026-03-24
---

## Objective

A **domain name transfer** refers to the process of moving a domain name from one registrar to another. For example, if you have ordered a domain name on our website, OVHcloud is its current registrar. An outgoing domain name transfer must be initiated by the new registrar.

In order to prevent unauthorised domain name transfers, domain names are usually locked, indicated by the status *clientTransferProhibited*. This protection must be lifted in the OVHcloud Control Panel before starting a transfer.

**This guide explains how to prepare your domain name for an outgoing transfer.**

> [!warning]
>
> If the domain name in question should stay registered at OVHcloud but modified in terms of its management or holder information, an outgoing domain name transfer is not the appropriate procedure.
>
> To transfer the domain name management to another OVHcloud customer account, a **change of contacts** must be made instead. The procedure is described in [this guide](/pages/account_and_service_management/account_information/managing_contacts).
>
> If you also need to change the **domain name holder**, you should do so **before** you change the domain name contacts. To do this, use our [instructions for changing the holder of a domain name](/pages/web_cloud/domains/trade_domain).
>

## Requirements

- A [domain name](/links/web/domains) registered with OVHcloud
- The registration of the domain name in question was at least 60 days ago **and** it has not been transferred or traded (i.e. change of holder) during the last 60 days

<!-- CP-NAV-START:web-domains -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Domain names](/links/control-panel/web-domains)
- **Navigation path:** `Web Cloud`{.action} > `Domain names`{.action} > Select your domain name

---
<!-- CP-NAV-END:web-domains -->

> [!primary]
>
> If you are the domain name's **holder** but you are currently not able to manage it in the OVHcloud Control Panel, neither by using your own access nor via your domain name's administrative contact, please consult [this guide](/pages/account_and_service_management/account_information/managing_contacts#special-case-of-a-domain-holder) first before proceeding.
>

## Instructions

> [!warning]
>
> The following instructions describe the most common way to transfer a domain name, valid for most Top Level Domains (TLD). However, the specific rules for processes regarding TLDs are solely defined by the appropriate allocation authority i.e. the **registry**. Registrars such as OVHcloud must adhere to these rules and have no influence on registry decisions.
>
> The exact procedure for domain name transfers may therefore vary, especially in case of some country-code TLDs (ccTLD, such as .lu, .uk, .hk, .ro) and a few special purpose TLDs (.am, .fm, etc.). Transfers might also be prohibited for various reasons, e.g. outstanding payment, abuse case or registry lock.
>
> We recommend to consult the following resources in case of any doubt:
>
> - The website of the respective TLD registry
> - The [list of TLDs available at OVHcloud](/links/web/domains-tld)
> - [ICANN's explanation of EPP Status Codes](https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en) (to find out which status codes currently apply to your domain name, carry out a *Whois* search, preferably using the respective TLD registry's website)
> - Your new registrar's website and management interface, especially for questions about a pending transfer process
>
> Depending on the new registrar you choose, transferring a domain name may be a paid operation. Please verify this before you continue.
>

### 1 - Remove the transfer protection for the domain name

<!-- CP-STEPS-START:unlock-domain-transfer -->
Click on the tabs below to view each of the **3** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Domain names](/links/control-panel/web-domains) page, then choose the domain name concerned.
>>
>> ![Domain names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Step 2**
>>
>> On the `General information`{.action} tab, find the `Protection against domain name transfer` slider under **Security**, set to `Enabled`{.action} by default.
>>
>> > [!warning]
>> >
>> > If the `Transfer protection` button is not present, this means your domain extension does not require a transfer code. You can then launch your transfer directly.
>>
>> ![protection enabled](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/protection-against-domain-name-transfert-enabled.png){.thumbnail}
>>
> **Step 3**
>>
>> Click on the slider and confirm in the popup window that you want to remove this protection. Allow a few minutes for the status to change to `Disabled`{.action}.
>>
>> > [!primary]
>> >
>> > If you encounter the message "**An error occurred when requesting to disable the domain protection (User not granted for this request)**", your customer account does not have sufficient rights to unlock the domain name.
>> >
>> > If you encounter the message "**AUTH/INFO code: Authcode is not managed by OVHcloud, contact the registry to claim it**", this means that the transfer code for your domain name cannot be retrieved via your [OVHcloud Control Panel](/links/manager).
>> >
>> > In both cases, check that your account is the **administrator** contact of the domain name using our guide on [contact management](/pages/account_and_service_management/account_information/managing_contacts) then check that the domain name extension can be unlocked from the [OVHcloud Control Panel](/links/manager).
>> >
>> > Some *transfer codes* are directly managed by the *registry* of your domain name extension. A *registry* is an organisation that manages all domain names for a given extension. For example, the **AFNIC** manages all domain names with the extension *.fr*. If this is the case, you must contact the *registry* managing your domain name extension directly to retrieve the *transfer code*.
>>
>> ![deactivating protection](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/protection-against-domain-name-transfert-deactivating.png){.thumbnail}
<!-- CP-STEPS-END:unlock-domain-transfer -->

> [!primary]
>
> Once the protection is lifted, the domain name will remain unlocked for seven days. After this period, the protection will be automatically reactivated. If you do not request a domain name transfer to your new registrar during this time, it will be necessary to remove the protection again.
>

### 2 - Retrieve the transfer code

> [!warning]
>
> Note that it is still possible to unlock and retrieve the transfer code of your domain name after its expiration. According to registry rules, a domain name in the [redemption period](https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en) may need to be restored so that it can be transferred. Contact your new registrar for transfer details.
>

Once you have removed the transfer protection, you can retrieve your domain name's transfer code.

<!-- CP-STEPS-START:get-transfer-code -->
Click on the tabs below to view each of the **3** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Domain names](/links/control-panel/web-domains) page, then choose the domain name concerned.
>>
>> ![Domain names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Step 2**
>>
>> On the `General information`{.action} tab, click `AUTH/INFO`{.action} next to `Protection against domain name transfer`. Refresh the page if necessary.
>>
>> ![outgoingtransfer](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/protection-against-domain-name-transfert-disabled.png){.thumbnail}
>>
> **Step 3**
>>
>> A window will appear displaying your AUTH/INFO code (also known as transfer code, domain password, AUTH-CODE or EPP-Code).
>>
>> The code will be requested by your new registrar to complete the transfer process. You can verify the details with your provider.
>>
>> We recommend copying and pasting the code rather than typing it by hand, since some characters are easily confused.
<!-- CP-STEPS-END:get-transfer-code -->

Once the transfer code has been retrieved, **do not lock your domain name again unless you no longer wish to transfer it**.

### 3 - Launch the transfer at your new registrar

Once you have completed the previous steps, start the transfer process, usually by placing an order with your new registrar. The transfer may take up to 10 days.

For more information, contact the new registrar you have chosen.

> [!warning]
>
> If your new registrar requests a new transfer code, reenable the **Protection against domain name transfer** for your domain name, then disable it again a few minutes later. You can then retrieve the new transfer code.

## Go further

[Transferring a .uk domain name to another registrar](/pages/web_cloud/domains/transfer_outgoing_couk)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
