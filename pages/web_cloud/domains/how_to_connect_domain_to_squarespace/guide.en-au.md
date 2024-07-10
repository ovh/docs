---
title: "How to connect an OVHcloud domain name to a SquareSpace hosting plan"
excerpt: "Prepare and configure your OVHcloud domain name’s DNS zone to connect to a SquareSpace hosting plan"
updated: 2024-05-15
---

## Objective

You have a domain name with OVHcloud and you want to connect it to a SquareSpace hosting plan. In this guide, you will find the steps to prepare and configure your OVHcloud DNS zone, so that you can configure your SquareSpace hosting plan.

**Find out how to connect your OVHcloud domain name to a SquareSpace hosting plan.**

> [!warning]
>
> - SquareSpace support does not have access to your OVHcloud domain name settings and therefore cannot advise you on the exact steps.
>
> - OVHcloud provides services for which you are responsible with regard to their configuration and management. It is therefore your responsibility to ensure that they function correctly.<br><br>We have provided you with this guide in order to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](/links/partner) or the software publisher if you encounter any difficulties. OVHcloud cannot provide you with technical support in this regard. You can find more information in the [Go further](#go-further) section of this guide.
>

## Requirements

- A [domain name](/links/web/domains) registered with OVHcloud
- Access to the [OVHcloud Control Panel](/links/manager) with the [necessary permissions to manage the domain name](/pages/account_and_service_management/account_information/managing_contacts)
- A SquareSpace web hosting plan
- Access to manage this hosting plan with SquareSpace

## Instructions

Before following the two steps in this guide, we recommend that you get familiar with configuring a DNS zone using our guide on [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit).

> [!warning]
>
> Your DNS zone is potentially already preconfigured or linked to a hosting plan. We will look at how to identify each DNS record required to connect to your SquareSpace hosting plan. Some records will need to be deleted to avoid conflicts with DNS records required in this configuration. Others will simply need to be modified or created. For a better understanding, we will use the domain name “**mydomain.ovh**” as an example. Replace it with your domain name during configuration.

### Configure your DNS records on your OVHcloud account

Log in to the [OVHcloud Control Panel](/links/manager){.external} in the `Web Cloud`{.action} section. Click `Domain names`{.action}, then choose the domain name concerned. Go to the `DNS Zone`{.action} tab.

The table lists all of the DNS records for the selected domain name.

![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab-mydomain-anycast.png){.thumbnail}

Each DNS record can be modified by clicking on the `...`{.action} button in the table row concerned, then clicking on `Modify record`{.action}.

Follow the steps in order by browsing the following tabs:

> [!tabs]
> **Step 1**
>> **"A" Record**<br><br>
>> To identify existing "A" records, click the filter menu at the top of the DNS records table and select `A`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-a.png){.thumbnail}<br>
>> - Click the `...`{.action} button in the table row that corresponds to your domain name (e.g. `mydomain.ovh.`) without a subdomain, then click `Edit record`{.action}.<br>
>> - If a record for the subdomain "www" is present (e.g.: `www.mydomain.ovh.`), delete it so that it does not conflict with the CNAME record you enter in step 4. Click on the `...`{.action} button in the table row for your domain name with the subdomain "www", then click `Delete record`{.action}.<br>
>> - If you do not have an existing "A" record, click the `Add Entry`{.action} button in the top right of your screen and select `A`{.action}<br><br>
>> You will need to create 4 "A" records in succession in order to enter the 4 IPv4 addresses for SquareSpace.
>> Leave the **Subdomain** field blank and enter the first IPv4 address of SquareSpace `198.185.159.144` in the **Target** field.
>> Click `Next`{.action}, confirm your "A" record, repeat the operation for the other 3 IPv4 addresses `198.185.159.145`; `198.49.23.144`; `198.49.23.145` and go to step 2.
> **Step 2**
>> **"AAAA" record**<br><br>
>>  To identify the existing "AAAA" records, click on the filter menu at the top of the DNS records table and select `AAAA`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}<br>
>> - Click the `...`{.action} button in the table row corresponding to your domain name without a subdomain (e.g. `mydomain.ovh.`), then click `Delete record`{.action}.<br>
>> - If a record for the “www” subdomain is present (e.g.: `www.mydomain.ovh.`), delete it so that it does not conflict with the CNAME record you enter in step 4. Click the `...`{.action} button in the table row for your domain name with the subdomain “www”, then click `Delete record`{.action}.<br>
>> - If you do not have an existing "AAAA" record, proceed to step 3.
> **Step 3**
>> **TXT record**<br><br>
>> To identify existing "TXT" records, click the filter menu at the top of the DNS records table and select `TXT`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-txt.png){.thumbnail}<br>
>> - If “TXT” records are present for the domain name (example: `mydomain.ovh.`) and for its subdomain “www” (example: `www.mydomain.ovh.`), you must delete them so that they do not conflict with the CNAME record that you enter in step 4. Click the `...`{.action} button in the table row for your domain name with the subdomain “www”, then click `Delete record`{.action}.<br>
> **Step 4**
>> **CNAME record**<br><br>
>> To identify existing CNAME records, click the filter menu at the top of the DNS records table and select `CNAME`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-cname.png){.thumbnail}
>> - Click the `...`{.action} button in the table row corresponding to your subdomain in “www” (example: `mydomain.ovh.`), then click `Modify record`{.action}.<br>
>> - If you do not have an existing CNAME record, click the `Add an entry`{.action} button in the top right-hand corner of your screen, and select `CNAME`{.action}.
>> Fill in **Sub-domain** with the value `www` and enter `verify.squarespace.com.` in the **Target** field.<br>
>> ![cname-entry](images/add-an-entry-to-the-dns-zone-cname-squarespace.png){.thumbnail}
>> Click `Next`{.action}, then confirm your CNAME record.
>> Add the second CNAME record by typing `ext-cust.squarespace.com.` in the **Target** field.<br>

The DNS zone is now configured to link to a SquareSpace hosting plan.

### Connecting your domain name to SquareSpace

These steps are performed in the SquareSpace control panel.

> [!primary]
>
> - You can connect your domain name to a trial or paid SquareSpace website. You cannot connect it to an expired site.
> - If you have an email account associated with your domain name, you can continue using it once the domain is logged in to SquareSpace. Before you connect your domain name, we recommend reading this [SquareSpace guide](https://support.squarespace.com/hc/en-us/articles/217601877-Using-a-custom-domain-email-you-already-own-with-Squarespace){.external}.
> - You can use multiple custom domain names for your website. You can connect or save as many as you want.
> - You cannot connect a custom domain name to SquareSpace if the domain name includes the word “squarespace” or “sqsp”.

To get started, follow the login steps described in step 1 of this [SquareSpace guide](https://support.squarespace.com/hc/en-us/articles/12880712406797-Connecting-an-OVHcloud-domain-to-your-Squarespace-site){.external}.

> [!warning]
>
> If you receive the alert message “This domain is already connected to another Squarespace site,” check your other SquareSpace websites to determine which site the domain name is connected to. Then disconnect it from this website.

To continue the process, go to step 2 of this [SquareSpace guide](https://support.squarespace.com/hc/en-us/articles/12880712406797-Connecting-an-OVHcloud-domain-to-your-Squarespace-site){.external}.

If you are using an OVHcloud email solution, or if you plan to subscribe to one of [our email solutions](/links/web/emails), prepare your DNS zone accordingly. Read our guide on “[Configuring an MX record](/pages/web_cloud/domains/dns_zone_mx)”.

## Go further <a name="go-further"></a>

[Modifying an OVHcloud domain name’s DNS servers](/pages/web_cloud/domains/dns_server_edit)

[Creating an OVHcloud DNS zone for a domain name](/pages/web_cloud/domains/dns_zone_create)

[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

To delegate the management of your domain name to another OVHcloud customer account, follow the guide on [Managing contacts for OVHcloud services](/pages/account_and_service_management/account_information/managing_contacts).

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).
 
Join our [community of users](/links/community).