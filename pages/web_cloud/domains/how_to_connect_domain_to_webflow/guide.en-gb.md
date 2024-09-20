---
title: How to connect an OVHcloud domain name to a Webflow hosting plan
excerpt: Prepare and configure your OVHcloud domain name’s DNS zone to connect to a Webflow hosting plan
updated: 2024-06-13
---

## Objective

You have a domain name with OVHcloud and you want to connect it to a Webflow hosting plan. In this guide, you will find the steps to prepare and configure your OVHcloud DNS zone, so that you can configure your Webflow hosting plan.

**Find out how to connect your OVHcloud domain name to a Webflow hosting plan.**

> [!warning]
>
> - Webflow Support does not have access to your OVHcloud domain name settings and therefore cannot advise you on the information you will need to provide.
>
> - OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.<br><br> We have provided you with this guide in order to help you with common tasks. Nevertheless, we recommend contacting a [specialist](/links/partner) provider and/or the service’s publisher if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the [Go further](#gofurther) section of this guide.
>

## Requirements

- A [domain name](/links/web/domains) registered with OVHcloud
- Access to the [OVHcloud Control Panel](/links/manager) with the [necessary permissions to manage the domain name](/pages/account_and_service_management/account_information/managing_contacts)
- A Webflow web hosting plan
- Access to manage this hosting plan with Webflow

## Instructions

Before following the two steps in this guide, we recommend that you get familiar with configuring a DNS zone using our guide on [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit).

> [!warning]
>
> Your DNS zone is potentially already preconfigured or linked to a hosting plan. We will look at how to identify each DNS record required to connect to your Webflow hosting plan. Some records will need to be deleted to avoid conflicts with DNS records required in this configuration. Others will simply need to be modified or created. For a better understanding, we will use the domain name "**mydomain.ovh**" as an example. Replace it with your domain name during configuration.

### 1. Configure your Webflow hosting plan

When using a Webflow hosting plan with an OVHcloud domain name, you must first prepare your hosting plan by following the instructions in the **How to connect your custom domain** section from [**this page of the Webflow documentation**](https://university.webflow.com/lesson/manually-connect-a-custom-domain?topics=hosting-code-export#how-to-connect-your-custom-domain).

### 2. Configure your DNS records on your OVHcloud account

> [!warning]
>
> Before you continue:
>
> - Open a tab in your web browser.
> - Open [**this webflow documentation page**](https://university.webflow.com/lesson/manually-connect-a-custom-domain?topics=hosting-code-export){.external}.
> - Go to the “**How to set your DNS records**” section of the Webflow documentation.<br>
> The following instructions will help you configure your OVHcloud DNS zone more easily.

Log in to the [OVHcloud Control Panel](/links/manager){.external} in the `Web Cloud`{.action} section. Click `Domain names`{.action}, then choose the domain name concerned. Go to the `DNS Zone`{.action} tab.

The table lists all of the DNS records for the selected domain name.

![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab-mydomain-anycast.png){.thumbnail}

Each DNS record can be modified by clicking on the `...`{.action} button to the right of the table row concerned, then clicking on `Modify record`{.action}.

Follow the steps in order by browsing the following tabs:

> [!tabs]
> **Step 1**
>> **Record A**<br><br>
>> To identify existing A records, click the filter menu at the top of the DNS records table and select `A`.<br>
>>![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-a.png){.thumbnail}
>>
>> - Click the `...`{.action} button to the right of the table row that corresponds to your domain name alone, without a subdomain (e.g. `mydomain.ovh.`), then click `Modify record`{.action}.<br>
>> - If a record for the "www" subdomain is present (e.g.: `www.mydomain.ovh.`), you must delete it so that it does not conflict with the CNAME record you enter in step 4. Click the `...`{.action} button to the right of the table row for your domain name with the subdomain "www", then click `Delete record`{.action}.<br>
>> - If you do not have an existing "A" record, click the `Add an entry`{.action} button in the top right-hand corner of your screen and select the `A`{.action}<br><br>
>> You must create two "A" records in succession in order to enter the two IPv4 addresses for Webflow.
>> Leave the **Sub-domain** field empty and enter the first IPv4 address of Webflow `75.2.70.75` in the **Target** field.
>> Click `Next`{.action} and confirm your "A" record. Repeat for the second IPv4 address `99.83.190.102`, and proceed to step 2.
> **Step 2**
>> **AAAA record**<br><br>
>> To identify existing "AAAA" records, click the filter menu at the top of the DNS records table and select `AAAA`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}
>>
>> - Click the `...`{.action} button to the right of the table row that corresponds to your domain name alone, without a subdomain (e.g. `mydomain.ovh.`), then click `Delete record`{.action}.<br>
>> - If a record for the "www" subdomain is present (e.g.: `www.mydomain.ovh.`), also delete it so that it does not conflict with the CNAME record you enter in step 4. Click the `...`{.action} button to the right of the table row for your domain name with the subdomain "www", then click `Delete record`{.action}.<br>
>> - If you do not have an existing AAAA record, proceed to step 3.
> **Step 3**
>> **TXT record**<br><br>
>> To identify existing "TXT" records, click the filter menu at the top of the DNS records table and select `TXT`.<br>
>>![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-txt.png){.thumbnail}
>>
>> - If "TXT" records are present for the domain name alone (e.g. `mydomain.ovh.`) and for its subdomain in "www" (e.g. `www.mydomain.ovh.`), you must delete them so that they do not conflict with the CNAME record that you enter in step 4. Click the `...`{.action} button to the right of the table row for your domain name with the subdomain "www", then click `Delete record`{.action}.<br>
>> - You must create a record of type "TXT". Click on the `Add an entry`{.action} button in the top right-hand corner of your screen and select the `TXT`{.action} "Pointer record".
>> Enter the **Sub-domain** with the value `_webflow` in the **Target** field, and enter the value in the `Site settings > Publishing tab > Production`{.action} section of your Webflow account, of type `one-time-verification=XXXXXXXX`. Replace `XXXXXXXX` with the value present in your Webflow account.<br>
>>![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry-to-the-dns-zone-txt-webflow.png){.thumbnail}<br><br>
>> Click `Next`{.action} to validate your TXT record and proceed to step 4.
> **Step 4**
>> **CNAME record**<br><br>
>> To identify existing "CNAME" records, click the filter menu at the top of the DNS records table and select `CNAME`.<br>
>>![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-cname.png){.thumbnail}
>>
>> - Click the `...`{.action} button to the right of the table row corresponding to your subdomain in "www." (e.g. `mydomain.ovh.`), then click `Modify record`{.action}.<br>
>> - If you do not have an existing "CNAME" record, click the `Add an entry`{.action} button in the top right-hand corner of your screen, and select the `CNAME`{.action} "pointer record’.
>> Enter **Sub-domain** with the value `www` and enter `proxy-ssl.webflow.com` in the **Target** field.<br>
>>![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry-to-the-dns-zone-cname-webflow.png){.thumbnail}<br><br>
>> Click `Next`{.action} to validate your "CNAME" record.

The DNS zone is now configured to link to a Webflow hosting plan.

> [!primary]
>
> It may take up to 48 hours to verify your domain name.

If you are using an OVHcloud email solution, or planning to subscribe to one of [our email solutions](/links/web/emails), you will also need to prepare your DNS zone accordingly. Read our guide on [configuring an MX record](/pages/web_cloud/domains/dns_zone_mx).

## Go further <a name="gofurther"></a>

[Modifying an OVHcloud domain name’s DNS servers](/pages/web_cloud/domains/dns_server_general_information)

[Creating an OVHcloud DNS zone for a domain name](/pages/web_cloud/domains/dns_zone_create)

[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

To delegate the management of your domain name to another OVHcloud customer account, follow the guide on [Managing contacts for OVHcloud services](/pages/account_and_service_management/account_information/managing_contacts).

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).
 
Join our [community of users](/links/community).