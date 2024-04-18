---
title: How to connect an OVHcloud domain name to a Wix hosting plan
excerpt: Prepare and configure your OVHcloud domain name’s DNS zone to connect to a Wix hosting plan
updated: 2024-04-17
---

## Objective

You have a domain name with OVHcloud and you want to connect it to a Wix hosting plan. In this guide, you will find the steps for preparing and configuring your OVHcloud DNS zone, so that you can configure your Wix hosting plan.

**Find out how to connect your OVHcloud domain name to a Wix hosting plan**

> [!warning]
>
> - Wix Support does not have access to your OVHcloud domain name settings and therefore cannot advise you on the information you will need to provide.
>
> - OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.<br><br> We have provided you with this guide in order to help you with common tasks. Nevertheless, we recommend contacting a [specialist](https://partner.ovhcloud.com/en-gb/) provider and/or the service’s publisher if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the [Go further](#gofurther) section of this guide.
>

## Requirements

- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external}
- a domain [name](https://www.ovhcloud.com/en-gb/domains/){.external} registered with OVHcloud.
- You must have the appropriate [permissions to manage](/pages/account_and_service_management/account_information/managing_contacts) the domain name from the OVHcloud [Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external}.
- You must have a web hosting plan with Wix.
- access to the management of this Wix hosting plan.

## Instructions

Before following the two steps in this guide, we recommend that you get familiar with configuring a DNS zone using our guide on [Editing an OVHcloud](/pages/web_cloud/domains/dns_zone_edit) DNS zone .

> [!warning]
>
> Your DNS zone is potentially already preconfigured or linked to a hosting plan. We will look at how to identify each DNS record required to log in to your Wix hosting plan. Some records will need to be deleted to avoid conflicts with DNS records required in this configuration. Others will simply need to be modified or created. For a better understanding, we will use the domain name "**mydomain.ovh**" as an example. Replace it with your domain name during configuration.

### 1. Configure your Wix hosting plan

When using a Wix hosting plan with an OVHcloud domain name, you must first prepare your hosting plan by following **the instructions in step 1** from [**this page of the Wix documentation**](https://support.wix.com/en/article/connecter-un-domaine-%C3%A0-wix-par-pointage-5727882).

### 2. Configure your DNS records on your OVHcloud account

> [!warning]
>
> Before you continue: <br>
> - Open a tab in parallel on your web browser.
> - Open [**this page of the Wix documentation**](https://support.wix.com/en/article/connect-a-domain-%C3%A0-wix-par-pointage-5727882){.external}.
> - Go to the "**Step 2 section | Update the DNS records in your domain hosting provider’s account**" in the Wix documentation.<br>
> The following instructions will help you configure your OVHcloud DNS zone more easily.

Log in to the [OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external} Control Panel in the `Web Cloud`{.action} section. Click `Domain`{.action} names, then choose the domain name concerned. Go to the `DNS Zone`{.action} tab.

The table that opens lists all of the DNS records for the selected domain name.

![dnszone](images/tab.png){.thumbnail}

Each DNS record can be modified by clicking on the `...`{.action} button to the right of the table row concerned, then clicking on `Modify record`{.action}.

Follow the steps in order by browsing the following tabs:

> [!tabs]
> **Step 1**
>> **Record A**<br><br>
>> To identify existing "A" records, click the filter menu at the top of the DNS records table and select `A`.<br>
>> ![dnszone](images/filter-a.png){.thumbnail}<br>
>> - Click the `...`{.action} button to the right of the table row that corresponds to your domain name alone, without a subdomain (e.g. `mydomain.ovh.`), then click `Edit record`{.action}.<br>
>> - If a record for the "www." subdomain is present (e.g.: `www.mydomain.ovh.`), you must delete it so that it does not conflict with the CNAME record you enter in step 3. Click on the `...`{.action} button to the right of the table line corresponding to your domain name alone and with the "www." subdomain, then click `Delete record`{.action}.<br>
>> - If you do not have an existing "A" record, click the `Add Entry`{.action} button in the top right of your screen and select the "Pointing Field" `A`{.action}<br><br>
>> Leave the **Subdomain** field empty and enter the IPv4 address *recorded from your Wix* interface in the **Target** field.
>> Click `Next`{.action}, confirm your A record, and go to step 2.
> **Step 2**
>> **AAAA record**<br><br>
>>  To identify the existing "AAAA" records, click on the filter menu at the top of the DNS records table and select `AAAA`.<br>
>> ![dnszone](images/filter-aaaa.png){.thumbnail}<br>
>> - If there are "AAAA" records for the domain name alone (e.g. `mydomain.ovh.`) and for its subdomain under "www." (e.g. `www.mydomain.ovh.`), you will need to delete them so that they do not conflict with the "A" and "CNAME" records that you will enter in step 4. Click on the `...`{.action} button to the right of the table line corresponding to your domain name alone and with the "www." subdomain, then click `Delete record`{.action}.<br>
> **Step 3**
>> **TXT record**<br><br>
>>  To identify existing "TXT" records, click the filter menu at the top of the DNS records table and select `TXT`.<br>
>> ![dnszone](images/filter-txt.png){.thumbnail}<br>
>> - If "TXT" records are present for the domain name alone (e.g. `mydomain.ovh.`) and for its subdomain under "www." (e.g. `www.mydomain.ovh.`), you must delete them so that they do not conflict with the CNAME record that you enter in step 3. Click on the `...`{.action} button to the right of the table row for your domain name with the "www." subdomain, then click `Delete record`{.action}.<br>
> **Step 4**
>> **CNAME record**<br><br>
>>  To identify existing CNAME records, click on the filter menu at the top of the DNS records table and select `CNAME`.<br>
>> ![dnszone](images/filter-cname.png){.thumbnail}<br>
>> - Click on the `...`{.action} button to the right of the table row corresponding to your subdomain in "www." (example: `mydomain.ovh.`) then click `Edit record`{.action}.<br>
>> - If you do not have an existing CNAME record, click the `Add record`{.action} button in the top right-hand corner of your screen and select the `CNAME`{.action} "Time and attendance record".
>> Fill in the **Sub-domain** field with the `www` value, and enter the value recorded from your Wix interface in the **Target** field.<br>
>> Click `Next`{.action}, then confirm your CNAME record.

The DNS zone is now configured to link to a Wix hosting plan.

> [!primary]
>
> It may take up to 48 hours to verify your domain name.

If you are using an OVHcloud email solution, or planning to subscribe to one of [our email solutions](https://www.ovhcloud.com/en-gb/emails/), you will also need to prepare your DNS zone accordingly. Read our guide on [configuring an MX record](/pages/web_cloud/domains/dns_zone_mx).

## Go further <a name="gofurther"></a>

[Modifying an OVHcloud domain name’s DNS servers](/pages/web_cloud/domains/dns_server_general_information)

[Creating an OVHcloud DNS zone for a domain name](/pages/web_cloud/domains/dns_zone_create)

[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

To delegate the management of your domain name to another OVHcloud customer account, follow the guide on [Managing contacts for OVHcloud services](/pages/account_and_service_management/account_information/managing_contacts).

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-gb/directory/).
 
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-gb/support-levels/).
 
Join our community of users on <https://community.ovh.com/en/>.
