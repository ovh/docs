---
title: Transferring a .uk domain name to another registrar
excerpt: Find out how to move UK domain names from OVHcloud to a provider of your choice
updated: 2026-03-13
---

## Objective

The process of changing the registrar for Top Level Domains (TLD) of the **UK** country code (**.uk**) differs from the one explained in our [guide regarding generic TLDs](/pages/web_cloud/domains/transfer_outgoing_domain). The instructions below concern the following extensions:

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
> If the domain name in question should stay registered at OVHcloud but modified in terms of its management or holder information, an outgoing domain name transfer is not the appropriate procedure.
>
> To transfer the domain name management to another OVHcloud customer account, a **change of contacts** must be made instead. The procedure is described in [this guide](/pages/account_and_service_management/account_information/managing_contacts).
>
> If you also need to change the **domain name holder**, you should do so **before** you change the domain name contacts. To do this, use our [instructions for changing the holder of a domain name](/pages/web_cloud/domains/trade_domain).
>

## Requirements

- A [.uk domain name](/links/web/domains) registered with OVHcloud
- The domain name is still active i.e. not expired or otherwise locked on the part of OVHcloud
- The domain name is not the subject of an ongoing dispute with the responsible registry [Nominet](https://www.nominet.uk/)

<!-- CP-NAV-START:web-domains -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Domain names](/links/control-panel/web-domains)
- **Navigation path:** `Web Cloud`{.action} > `Domain names`{.action} > Select your domain name

---
<!-- CP-NAV-END:web-domains -->


> [!primary]
>
> If the domain expired **less than 90 days** ago, it can still be transferred. Contact our support teams by creating a support request in your OVHcloud Control Panel to unlock the domain name for transfer.
>
> If you are the domain's **holder** but cannot manage it in the OVHcloud Control Panel, neither via your own access nor via the administrative contact, consult [this guide](/pages/account_and_service_management/account_information/managing_contacts) before proceeding.
>

## Instructions

The TLDs in question have a registrar **TAG** which corresponds to a domain name registrar such as OVHcloud. The transfer process is initiated by changing the TAG to the one identifying your new registrar.

In case you do not know the required TAG yet, you can request it at your new provider or look it up on this [Nominet registrar list](https://registrars.nominet.uk/uk-namespace/registrar-agreement/list-of-registrars/).

### 1 - Edit your domain name's TAG to initiate the transfer to another registrar

> [!primary]
>
> You must be logged in as the [administrator](/pages/account_and_service_management/account_information/managing_contacts) to perform these actions.

<!-- CP-STEPS-START:change-outgoing-tag -->
Click the tabs below to view each of the **3** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Domain names](/links/control-panel/web-domains) page, then choose the domain name concerned.
>>
>> ![OVHcloud Control Panel - domain name list](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Step 2**
>>
>> In the **Configuration** section, click on the `Outgoing transfer tag`{.action} link.
>>
>> ![outgoingtransfer](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/outgoing-transfer-tag.png){.thumbnail}
>>
> **Step 3**
>>
>> In the popup window, enter the TAG of your future registrar, then click on `Confirm`{.action}.
>>
>> ![outgoingtransfer](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/outgoing-transfer-tag-confirmation.png){.thumbnail}
<!-- CP-STEPS-END:change-outgoing-tag -->

If you are unable to modify your domain name's TAG in the OVHcloud Control Panel, you can request at the registry to modify it on your behalf. Find more information on the official [Nominet website](https://www.nominet.uk/domain-support/).

### 2 - Follow up the transfer process with your new registrar

Successfully changing the TAG initiates the transfer process.

Contact your new provider for details as well as any follow-up questions.

## Go further

[Transferring a domain name to another registrar](/pages/web_cloud/domains/transfer_outgoing_domain)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

Join our [community of users](/links/community).
