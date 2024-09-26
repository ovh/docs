---
title: "How to connect an OVHcloud domain name to a Google Site"
excerpt: "Prepare and configure your OVHcloud domain name’s DNS zone to connect to a Google Site"
updated: 2024-09-26
---

## Objective

You have a domain name with OVHcloud and you want to connect it to a Google Site. In this guide, you will find the steps for preparing and configuring your OVHcloud DNS zone, so that you can configure your Google Site.

**Find out how to connect your OVHcloud domain name to a Google Site.**

> [!warning]
>
> - The Google Site support team does not have access to your OVHcloud domain name settings, and cannot advise you on the information you will need to provide them.
> - OVHcloud provides services that you are responsible for configuring, managing and managing. It is therefore up to you to ensure that it works properly.<br><br> We have provided you with this guide in order to help you with common tasks as much as possible. Nevertheless, we recommend contacting a [specialist provider](/links/partner) and/or the service’s publisher if you encounter any difficulties. We will not be able to assist you. You can find more information in the [Go further](#gofurther) section of this guide.
>

## Requirements

- You must be logged in to your [OVHcloud Control Panel](/links/manager).
- A [domain name](/links/web/domains) registered with OVHcloud.
- You must have the [appropriate permissions](/pages/account_and_service_management/account_information/managing_contacts) to manage the domain name from your [OVHcloud Control Panel](/links/manager).
- You must own and own a Google Site.

## Instructions

Before following the steps in this guide, we recommend that you get familiar with configuring a DNS zone by using our guide on [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit).

> [!warning]
>
> Your DNS zone is potentially already preconfigured or linked to a web hosting plan. We will look at how to identify each DNS record required to log in to your Google Site. Some records will need to be deleted to avoid conflicts with DNS records required in this configuration. Others will just have to be modified or created. For a better understanding, we will use the domain name **mydomain.ovh** as an example. Replace it with your domain name during configuration.

### Step 1 - Configure your Google Site

> [!warning]
>
> Only the owner of a Google Site can connect it to a domain name. If necessary, find out how to [change the owner of the Google site](https://support.google.com/sites/answer/97934).

When using a Google Site with an OVHcloud domain name, first prepare your hosting plan by following the instructions in the **Configure a custom domain** section from [**this page in Google support**](https://support.google.com/sites/answer/9068867?hl=en#zippy=).

### Step 2 - Configure your DNS records on your OVHcloud account

Log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section. Click `Domain names`{.action} in the left-hand column, then choose the domain name concerned. Go to the `DNS Zone`{.action} tab.

The table that opens lists all of the DNS records for the selected domain name.

![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab-mydomain-anycast.png){.thumbnail}

Each DNS record can be modified by clicking the '...`{.action}' button to the right of the table row concerned, then clicking `Modify record`{.action}.

Follow the steps in order by going through the following tabs:

> [!tabs]
> **Step 1**
>> **Record A**<br><br>
>> To identify existing A records, click the filter menu at the top of the DNS records table and select `A`.
>>
>>![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-a.png){.thumbnail}
>>
>> - Click the `...`{.action} button to the right of the table row that corresponds to your domain name alone, without a subdomain (e.g. `mydomain.ovh.`), then click `Modify record`{.action}.<br>
>> - If a record for the “www” subdomain is present (e.g.: `www.mydomain.ovh.`), delete it so that it does not conflict with the CNAME record you enter in step 4. Click the `...`{.action} button to the right of the table row for your www subdomain, then click `Delete record`{.action}.<br>
>> - If you do not have an existing A record, click the `Add record`{.action} button in the top right-hand corner of your screen and select the `A`{.action}<br><br>
>> Create 4 A records in succession to enter the 4 IPv4 addresses related to Google Site.
>> Leave the **Sub-domain** field empty and enter the first IPv4 address of Google Site `216.239.32.21` in the **Target** field.
>> Click `Next`{.action} and confirm your A record. Repeat for the other three IPv4 addresses `216.239.34.21`, `216.239.36.21`, and `216.239.38.21`, then go to step 2. Since the values of these IP addresses may change, check the official documentation [the value of A records](https://support.google.com/a/answer/2579934?hl=en&ref_topic=2721296&sjid=10373374977980680534-EU).
>>
> **Step 2**
>> **AAAA record**<br><br>
>> To identify the existing "AAAA" records, click on the filter menu at the top of the DNS records table and select `AAAA`.
>>
>>![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}
>>
>> - Click the `...`{.action} button to the right of the table row for your single domain name, without a subdomain (e.g. `mydomain.ovh.`), then click `Delete record`{.action}.<br>
>> - If a record for the “www” subdomain is present (e.g.: `www.mydomain.ovh.`), delete it as well so that it does not conflict with the CNAME record you enter in step 4. Click the `...`{.action} button to the right of the table row corresponding to your subdomain in “www” , then click `Delete record`{.action}.<br>
>> - If you do not have an existing AAAA record, proceed to step 3.
>>
> **Step 3**
>> **TXT record**<br><br>
>> To identify existing “TXT” records, click the filter menu at the top of the DNS records table and select `TXT`.
>>
>>![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-txt.png){.thumbnail}
>>
>> - If there are "TXT" records for the domain name alone (e.g. `mydomain.ovh.`) and for its subdomain in www (e.g. `www.mydomain.ovh.`), delete them so that they do not conflict with the CNAME record you enter in step 4. Click the `...`{.action} button to the right of the table row corresponding to your subdomain in “www” , then click `Delete record`{.action}.<br>
>> - You must create a record of type “TXT”. Click on the `Add record`{.action} button in the top right-hand corner of your screen and select the `TXT`{.action} “Pointing field”.
>> Enter the **Sub-domain** and **Target** fields with the information provided on the page “[TXT record values](https://support.google.com/a/answer/2716802?hl=en&ref_topic=2716886&sjid=3052810298579211755-EU)” in the official documentation. Typically, the **Sub-domain** field is empty, and the **Target** field is of type `google-site-verification=XXXXXXXXXXXX`.<br>
>> Click `Next`{.action} to validate your TXT record and proceed to step 4.
>>
> **Step 4**
>> **CNAME record**<br><br>
>> To identify existing CNAME records, click on the filter menu at the top of the DNS records table and select `CNAME`.
>>
>>![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-cname.png){.thumbnail}
>>
>> - Click the `...`{.action} button to the right of the table row corresponding to your subdomain in “www” (e.g.: `www.mydomain.ovh.`), then click `Modify entry`{.action}.<br>
>> - If you do not have an existing ‘CNAME’ record, click the `Add record`{.action} button in the top right-hand corner of your screen, and select the `CNAME`{.action} ‘Time and attendance record’.
>>
>> Enter **Sub-domain** with the value `www` and enter `ghs.googlehosted.com.` in the **Target** field. As these values may change, please check them on the [CNAME record values](https://support.google.com/a/answer/112038?sjid=3052810298579211755-EU)” page of the official documentation<br>
>> Click `Next`{.action} to validate your CNAME record.

The DNS zone is now configured to link to your Google Site.

> [!primary]
>
> It may take up to 48 hours to verify your domain name.

If you are using an OVHcloud email solution, or if you plan to subscribe to one of [our email solutions](/links/web/emails), prepare your DNS zone accordingly. Read our guide on [configuring an MX record](/pages/web_cloud/domains/dns_zone_mx).

## Go further <a name="go-further"></a>

[Modify an OVHcloud domain name’s DNS servers](/pages/web_cloud/domains/dns_server_general_information)

[Create an OVHcloud DNS zone for a domain name](/pages/web_cloud/domains/dns_zone_create)

[Edit an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

To delegate the management of your domain name to another OVHcloud customer account, follow the guide on [Managing contacts for OVHcloud services](/pages/account_and_service_management/account_information/managing_contacts).

For specialized services (SEO, development, etc.), contact the [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
