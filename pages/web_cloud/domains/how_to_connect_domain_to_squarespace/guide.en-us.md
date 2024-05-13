---
title: "How to connect an OVHcloud domain name to a SquareSpace hosting plan"
excerpt: "Prepare and configure your OVHcloud domain name’s DNS zone to connect to a SquareSpace hosting plan"
updated: 2024-05-13
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

![dnszone](images/tab.png){.thumbnail}

Each DNS record can be modified by clicking on the `...`{.action} button to the right of the table row concerned, then clicking on `Modify record`{.action}.

Follow the steps in order by browsing the following tabs:

> [!tabs]
> **Step 1**
>> **"A" Record**<br><br>
>> To identify existing "A" records, click the filter menu at the top of the DNS records table and select `A`.<br>
>> ![dnszone](images/filter-a.png){.thumbnail}<br>
>> - Click the `...`{.action} button in the table row that corresponds to your domain name (e.g. `mydomain.ovh.`) without a subdomain, then click `Edit record`{.action}.<br>
>> - If a record for the subdomain "www" is present (e.g.: `www.mydomain.ovh.`), delete it so that it does not conflict with the CNAME record you enter in step 4. Click on the `...`{.action} button in the table row for your domain name with the subdomain "www", then click `Delete record`{.action}.<br>
>> - If you do not have an existing "A" record, click the `Add Entry`{.action} button in the top right of your screen and select `A`{.action}<br><br>
>> You will need to create 4 A records in succession in order to enter the 4 IPv4 addresses for SquareSpace.
>> Leave the **Subdomain** field blank and enter the first IPv4 address of SquareSpace `198.185.159.144` in the **Target** field.
>> Click `Next`{.action}, confirm your A record, ; repeat the operation for the other 3 IPv4 addresses `198.185.159.145`; `198.49.23.144`; `198.49.23.145` and go to step 2.
> **Step 2**
>> **"AAAA" record**<br><br>
>>  To identify the existing "AAAA" records, click on the filter menu at the top of the DNS records table and select `AAAA`.<br>
>> ![dnszone](images/filter-aaaa.png){.thumbnail}<br>













## Go further <a name="go-further"></a>

[Modifying an OVHcloud domain name’s DNS servers](/pages/web_cloud/domains/dns_server_general_information)

[Creating an OVHcloud DNS zone for a domain name](/pages/web_cloud/domains/dns_zone_create)

[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

To delegate the management of your domain name to another OVHcloud customer account, follow the guide on [Managing contacts for OVHcloud services](/pages/account_and_service_management/account_information/managing_contacts).

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).
 
Join our community of users on <https://community.ovh.com/en/>.