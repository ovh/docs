---
title: "Troubleshooting a domain name error"
updated: 2026-03-24
---

<style>
details>summary {
    color:rgb(33, 153, 232);
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objective

Creating, transferring or changing the holder of a domain name can generate errors requiring intervention on your part.

**Find out what to do when an error occurs on a domain name.**

## Requirements

- Being the holder of one or more [domain names](/links/web/domains).
- Being up-to-date in the [payments](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) and [renewals](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) of your domain names.

<!-- CP-NAV-START:web-ongoing-operations -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Ongoing operations](/links/control-panel/web-ongoing-operations)
- **Navigation path:** `Web Cloud`{.action} > `Ongoing operations`{.action} > Select the `Domain`{.action} or `DNS`{.action} tab.

---
<!-- CP-NAV-END:web-ongoing-operations -->

## Instructions

### Overview of the ongoing operations management interface

Click on the tabs below to view each of the **2** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Ongoing operations](/links/control-panel/web-ongoing-operations) page.
>>
> **Step 2**
>>
>> A table lists all operations related to the domain names in your Control Panel.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-error-creating-domain-name-with-registry.png){.thumbnail}
>>
>> - `Domain`: The domain name concerned by the operation.
>> - `Operation`: The domain name operation in progress.
>> - `Comment`: Details of the current operation. Instructions.
>> - `Processing date`: Date the operation was created.
>> - `Date of update`: Timestamp for updating the current operation.
>> - `End date`: The end date of the operation.
>> - `Status`: The current status of the operation.

Not all of the operations listed in this table require your intervention for them to proceed normally.

This guide covers **error** operations through recurring situations.

### Situations

> [!primary]
>
> The list of situations below is not exhaustive. If you encounter an error that is not detailed in this guide:
>
> - Verify that you are up to date with [payments](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) and domain name [renewals](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management).
> - Check if an action is available by viewing the options to the right of the operation concerned.
> - Read the descriptive message and check if it helps you resolve the error.
>
> If, despite these checks, you cannot resolve the error, [open a support ticket](/links/support) from your Control Panel.

**Click on the situation of your choice to view the content.**

/// details | Document requests

Some domain name extensions require you to justify their registration by providing documents. If this is the case, you must submit the documents from your OVHcloud Control Panel.

Click on the tabs below to view each of the **4** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Ongoing operations](/links/control-panel/web-ongoing-operations) page.
>>
> **Step 2**
>>
>> Locate the operation in error in the table.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/contacts-update-provide-us-with-the-documents-required.png){.thumbnail}
>>
> **Step 3**
>>
>> Click the `...`{.action} button to the right of the operation concerned.
>>
> **Step 4**
>>
>> The window below appears. The "Description" section provides details on the document to provide, as well as a button to upload your document.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/operation-data-provide-us-with-the-documents-required.png){.thumbnail}

///

/// details | Missing information

When you register your domain name, it is sometimes necessary to complete the contact data. If these details do not match the criteria for the domain name, you might get the error below.

Click on the tabs below to view each of the **4** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Ongoing operations](/links/control-panel/web-ongoing-operations) page.
>>
> **Step 2**
>>
>> Locate the operation in error in the table.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-complete-nic-admin-es-tld.png){.thumbnail}
>>
> **Step 3**
>>
>> Click the `...`{.action} button to the right of the operation concerned.
>>
> **Step 4**
>>
>> The window below appears. Fill in the fields with the contact information.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/operation-data-complete-nic-admin-es-tld.png){.thumbnail}

///

/// details | Wrong transfer code

When you transfer your domain name to OVHcloud, you must enter a transfer code (**authInfo** / **AuthCode**) when placing your order. If this code is incorrect, the operation is suspended. You can restart it with the correct code.

Click on the tabs below to view each of the **4** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Ongoing operations](/links/control-panel/web-ongoing-operations) page.
>>
> **Step 2**
>>
>> Locate the operation in error in the table.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-auth-code-missing.png){.thumbnail}
>>
> **Step 3**
>>
>> Click the `...`{.action} button to the right of the operation concerned.
>>
> **Step 4**
>>
>> The window below appears. Enter the transfer code (**authInfo** / **AuthCode**) and restart the operation.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/operation-data-auth-code-missing.png){.thumbnail}

///

/// details | DNS server error

An error may occur if the DNS servers you attach to a domain name are not working.
In the situation below, the IP address of the DNS server is not responding.

Click on the tabs below to view each of the **4** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Ongoing operations](/links/control-panel/web-ongoing-operations) page.
>>
> **Step 2**
>>
>> Locate the operation in error in the table.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-dns-update-unable-to-retrieve-dns-ip.png){.thumbnail}
>>
> **Step 3**
>>
>> In the `Domain names`{.action} section, select the domain name concerned, then click the `DNS servers`{.action} tab.
>>
> **Step 4**
>>
>> From this tab, [edit your DNS servers](/pages/web_cloud/domains/dns_server_edit).

///

/// details | Error on a .ie, .de or .it domain name after a DNS update

When you modify your DNS servers, the registry may check the new DNS servers and the associated DNS zone, and block the domain name if the configuration is not compliant.

> [!warning]
>
> This type of blocking is initiated by the registry and not by OVHcloud. So even if the domain name is blocked by the registry, its DNS servers will appear as `Active` in your OVHcloud Control Panel.

To check if your domain name is blocked, click on the tabs below to view each of the **4** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Ongoing operations](/links/control-panel/web-ongoing-operations) page.
>>
> **Step 2**
>>
>> Locate the operation in error in the table.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-dns-update-error-occured-updating-domain.png){.thumbnail}
>>
> **Step 3**
>>
>> To check your domain name, we recommend using the verification tool provided by the registry:
>>
>> - For a **.de** domain name: <https://nast.denic.de/>.
>> - For a **.it** domain name: <https://dns-check.nic.it/>.
>>
>> > [!primary]
>> >
>> > If your registry does not provide a DNS server verification tool, you can query your new DNS servers via the `nslookup` command at a Windows command prompt, or via the `dig` command at a Linux or macOS terminal.
>> >
>> > If your DNS servers are reachable, the tool will return an IP address.
>> >
>> > In any case, check with the DNS server administrator that the DNS server is correctly configured to host your domain name's DNS zone.
>>
> **Step 4**
>>
>> Once you have identified the origin of the error and corrected it, click the `...`{.action} button to the right of the operation concerned and restart the DNS verification operation.

///

/// details | OVHcloud internal error

You may encounter an error with the comment "internal error".

Click on the tabs below to view each of the **3** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Ongoing operations](/links/control-panel/web-ongoing-operations) page.
>>
> **Step 2**
>>
>> Locate the operation in error in the table.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-renewal-internal-error.png){.thumbnail}
>>
> **Step 3**
>>
>> This error does not allow any action on your part from the OVHcloud Control Panel.
>>
>> First, check that your domain name and its DNS servers are active.
>>
>> If you notice an anomaly that is not related to the configuration of the DNS servers or the DNS zone, [contact OVHcloud support](/links/support) to identify the cause of the malfunction.

///

## Go further

[Transferring a domain name to OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)

[Transferring a domain name to another registrar](/pages/web_cloud/domains/transfer_outgoing_domain)

[Editing the DNS servers for an OVHcloud domain name](/pages/web_cloud/domains/dns_server_edit)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
