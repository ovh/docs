---
title: "Managing a DNS zone's history"
excerpt: "Find out how to view, compare, download and restore your DNS zone backups"
updated: 2026-03-27
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
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

The **D**omain **N**ame **S**ystem (**DNS**) zone of a domain name is its configuration file. It is made up of technical information, called *DNS records*. The DNS zone is, in a way, like a switching centre.

For more information, please refer to the following guides:

- [Everything you need to know about DNS servers](/pages/web_cloud/domains/dns_server_general_information)
- [Everything you need to know about DNS zones](/pages/web_cloud/domains/dns_zone_general_information)
- [Everything you need to know about DNS records](/pages/web_cloud/domains/dns_zone_records)

For various reasons, you may need to apply an older DNS configuration to your domain name.

DNS management is now made easier thanks to the history of your DNS zones.

**Find out how to view, compare, download and restore your DNS zone backups.**

## Requirements

- Access to manage the domain name concerned.

<!-- CP-NAV-START:web-dns-zone -->
---

### OVHcloud Control Panel Access

- **Direct link:** [DNS zones](/links/control-panel/web-dns-zone)
- **Navigation path:** `Web Cloud`{.action} > `DNS zones`{.action} > Select your domain name

---
<!-- CP-NAV-END:web-dns-zone -->

## Instructions

> [!primary]
>
> Your DNS zone backups are subject to the following limitations:
>
> - We keep a maximum of 200 backups for the same DNS zone.
> - Once a backup is more than 31 days old, it is automatically deleted, with the exception of the **5 most recent backups** made.

**Click on the action of your choice to view the content.**

/// details | View a DNS zone

Click on the tabs below to view each of the **4** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [DNS zones](/links/control-panel/web-dns-zone) page, then choose the domain name concerned.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 2**
>>
>> The table that appears represents the DNS zone for your domain name. It lists the DNS records it contains. On the right-hand side of the table, several buttons allow you to perform actions on your DNS zone.
>>
>> ![DNS history tool](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-history.png){.thumbnail}
>>
>> Click `View my DNS zone history`{.action}.
>>
> **Step 3**
>>
>> On the new page that appears, a table lists the history of your DNS zone backups, from the most recent to the oldest. At the top of this table is the current version of your DNS zone.
>>
>> To view the DNS zone of your choice, identify the corresponding row in the table, then click the icon in the `View`{.action} column.
>>
>> ![View a DNS zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/visualize-dns-eyes.png){.thumbnail}
>>
> **Step 4**
>>
>> The data of the DNS zone concerned is displayed.
>>
>> ![DNS zone detail](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/details-dns-zone.png){.thumbnail}
>>
>> Click `Close`{.action} to return to the main "DNS zone history" page.

///

/// details | Download a DNS zone

Click on the tabs below to view each of the **3** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [DNS zones](/links/control-panel/web-dns-zone) page, then choose the domain name concerned.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 2**
>>
>> The table that appears represents the DNS zone for your domain name. It lists the DNS records it contains. On the right-hand side of the table, several buttons allow you to perform actions on your DNS zone.
>>
>> ![DNS history tool](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-history.png){.thumbnail}
>>
>> Click `View my DNS zone history`{.action}.
>>
> **Step 3**
>>
>> On the new page that appears, a table lists the history of your DNS zone backups, from the most recent to the oldest. At the top of this table is the current version of your DNS zone.
>>
>> To download the DNS zone of your choice, identify the corresponding row in the table, then click the icon in the `Download`{.action} column.
>>
>> ![Download a DNS zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/download-dns-zone.png){.thumbnail}
>>
>> The DNS zone is downloaded in .txt format.

///

/// details | Restore a DNS zone

Click on the tabs below to view each of the **4** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [DNS zones](/links/control-panel/web-dns-zone) page, then choose the domain name concerned.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 2**
>>
>> The table that appears represents the DNS zone for your domain name. It lists the DNS records it contains. On the right-hand side of the table, several buttons allow you to perform actions on your DNS zone.
>>
>> ![DNS history tool](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-history.png){.thumbnail}
>>
>> Click `View my DNS zone history`{.action}.
>>
> **Step 3**
>>
>> On the new page that appears, a table lists the history of your DNS zone backups, from the most recent to the oldest. At the top of this table is the current version of your DNS zone.
>>
>> If you want to replace your current DNS zone with an older one, simply restore it. In the table containing your DNS zone history, identify the row corresponding to the DNS zone you want to restore (make sure to check the date on the left of the row), then click the icon in the `Restore`{.action} column.
>>
>> ![Restore a DNS zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/restore-dns-zone.png){.thumbnail}
>>
> **Step 4**
>>
>> The following window appears.
>>
>> ![DNS zone restore confirmation](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/confirmation-restore-dns-zone.png){.thumbnail}
>>
>> Check that the date shown in the message corresponds to the DNS zone you want to restore. As the yellow banner indicates, remember that the current DNS zone (at the top of the DNS zone history list) will be deleted and replaced by the DNS zone you want to restore.
>>
>> Click `Restore`{.action} to confirm the restoration, or `Cancel`{.action}.

> [!primary]
>
> Modifying or restoring a DNS zone causes a propagation delay of **4** to **24** hours to be fully taken into account on the DNS network.

///

/// details | Compare two DNS zones

Click on the tabs below to view each of the **4** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [DNS zones](/links/control-panel/web-dns-zone) page, then choose the domain name concerned.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 2**
>>
>> The table that appears represents the DNS zone for your domain name. It lists the DNS records it contains. On the right-hand side of the table, several buttons allow you to perform actions on your DNS zone.
>>
>> ![DNS history tool](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-history.png){.thumbnail}
>>
>> Click `View my DNS zone history`{.action}.
>>
> **Step 3**
>>
>> On the new page that appears, a table lists the history of your DNS zone backups, from the most recent to the oldest. At the top of this table is the current version of your DNS zone.
>>
>> You can compare the content of two DNS zones. In the table containing your DNS zone history, identify the two rows corresponding to the two DNS zones you want to compare (check the date on the left of each row), then select them. To compare these two DNS zone versions, click `Compare versions`{.action} in the top left.
>>
>> ![Compare two DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/compare-two-dns-zone.png){.thumbnail}
>>
> **Step 4**
>>
>> A new page appears, displaying the content of both DNS zones. The corresponding date is shown above each version. By default, the most recent DNS zone version is on the left and the oldest on the right. A colour code helps you identify content differences.
>>
>> On the left, content highlighted in red has been modified or deleted in the more recent version.
>>
>> On the right, content highlighted in green has been modified or added compared to the older version.
>>
>> You can also update the dates of the versions you want to compare using the two dropdown lists.
>>
>> ![DNS zone comparison details](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/compare-dns-zone-details.png){.thumbnail}

///

## Go further

[Everything you need to know about DNS servers](/pages/web_cloud/domains/dns_server_general_information)

[Everything you need to know about DNS zones](/pages/web_cloud/domains/dns_zone_general_information)

[Everything you need to know about DNS records](/pages/web_cloud/domains/dns_zone_records)

[Log in to the OVHcloud Control Panel](/pages/account_and_service_management/account_information/ovhcloud-account-login)

[Creating an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_create)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
