---
title: 'Resolving a “Site not installed” error'
excerpt: 'Find out how to resolve a “Site not installed” error'
updated: 2025-08-25
---

> [!success]
> Participate in our survey and help us improve this guide!<br>
> Feel free to share your thoughts and ideas with us.<br>
> [Go to the survey.](https://s.elq.fr/ovhext/B4nKjrd)

## Objective

You may see the error page “**Site not installed**” displayed on your web browser, particularly when your website is first installed.

![website not installed](/pages/assets/screens/other/browsers/errors/site-not-installed.png){.thumbnail}

**This guide explains how to identify and resolve the "Site not installed" error page.**

> [!warning]
>
> OVHcloud provides services for which you are responsible with regard to their configuration and management. It is therefore your responsibility to ensure that they function correctly.
>
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](/links/partner) or reach out to the [OVHcloud community](/links/community) if you encounter any difficulties. We will not be able to assist you. You can find more information in the [Go further](#go-further) section of this guide.

## Requirements

- An [OVHcloud web hosting plan](/links/web/hosting)
- Administrative access to the [DNS zone](/pages/web_cloud/domains/dns_zone_edit) your domain name is attached to.
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

The “**Site not installed**” page appears for two reasons:

- 1: [Your domain name or subdomain is not declared correctly on your web hosting plan](#check-multisites).
- 2: [Your domain name is not linked to the IP address of your web hosting plan.](#check-dns-domain).

The following steps will allow you to correct the “Site not installed” error in both cases.

### 1 - Verify the declaration of your domain name or subdomain on your web hosting plan <a name="check-multisites"></a>

Click on the tabs below to view each of the **4** steps in succession.

> [!tabs]
> **Step 1**
>>
>> Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Click the `Hosting plans`{.action} menu, then select the web hosting plan concerned.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 3**
>>
>> On the page that pops up, click on the `Multisite`{.action} tab.
>>
>> ![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/multisite.png){.thumbnail}
>>
> **Step 4**
>>
>> On the new page that opens, a table appears.
>>
>> ![Multisite interface](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/tab.png){.thumbnail}
>>
>> |Scenarios|Actions to Take|
>> |---|---|
>> |The domain name or subdomain linked to your website **appears** in the “multisite” table.|If you have just added your domain name or subdomain to the `Multisite`{.action} section of your web hosting plan, please wait around **twenty minutes**, then refresh your web browser cache. If the message “Site not installed” still appears, go to [part 2](#check-dns-domain).|
>> |The domain or subdomain linked to your website **does not appear** in the “multisite” table.|Add your domain or subdomain to the `Multisite`{.action} section by following the dedicated section in the guide “[Hosting multiple websites on your web hosting plan - adding a domain or subdomain](/pages/web_cloud/web_hosting/multisites_configure_multisite)”.|
>> |The domain or subdomain **has been removed** from the "multisite" table without any action on your part.|Your domain or its DNS zone may be managed from another account. Add your domain or subdomain in the `Multisite`{.action} section by following the dedicated section of the guide “[Hosting multiple websites on your Web Hosting plan - adding an external domain name](/pages/web_cloud/web_hosting/multisites_configure_multisite)”.|

### 2 - Check the IP pointing in your domain name’s active DNS zone <a name="check-dns-domain"></a>

This step involves checking that your domain or subdomain points to your Web Hosting plan’s IP address from its active DNS zone.

> [!primary]
>
> To find out more about DNS, visit the following pages:
>
> - [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)
> - [Creating an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_create)
> - [Modify an OVHcloud domain name’s DNS servers](/pages/web_cloud/domains/dns_server_edit)

#### 2\.1 Identify the IP address of your OVHcloud web hosting plan

Click on the tabs below to view each of the **3** steps in turn.

> [!tabs]
> **Step 1**
>>
>> Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Click the `Hosting plans`{.action} menu, then select the web hosting plan concerned.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 3**
>>
>> In the **General information** box, you will see the address under **IPv4**.
>>
>> ![find-ipv4-and-ipv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}
>>
>> Copy the IPv4 address, then continue reading the guide.

You can also find the IP address associated with your Web Hosting plan in our guide “[Web Hosting - List of IP addresses by cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)”.

#### 2\.2 Verify the IP address recorded in your domain name’s active DNS zone

You will now need to check that your Web Hosting plan’s IP address appears in your domain name’s active DNS zone.

> [!primary]
>
> Before you continue, whenever a change occurs in a domain name’s active **DNS zone**, you may need to wait between **4 and 24 hours** to update the information on the DNS network.
>
> If you modify the **DNS servers** associated with your domain name directly, this period can be up to **48 hours** maximum.

To do this, click on the tabs below to display each of the **4** steps in succession.

> [!tabs]
> **Step 1**
>>
>> Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Click the `DNS zones`{.action} menu, then choose the domain name concerned.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > If your domain name does not appear in the list that appears, it means that its DNS zone is not managed from your OVHcloud Control Panel.<br>
>> > Determine its registrar and the DNS servers associated with it via our [WHOIS](/links/web/domains-whois) tool.<br>
>> > Find and modify the DNS zone concerned accordingly by following the dedicated section of the guide “[Hosting multiple websites on your Web Hosting plan - adding an external domain name](/pages/web_cloud/web_hosting/multisites_configure_multisite)”.
>>
> **Step 3**
>>
>> The table that appears will display a DNS record for each row, linked to your domain name at OVHcloud. You can filter the table content by record type or by domain name.
>>
>> ![dns zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > If the `DNS Zone`{.action} tab of your domain name appears as follows:<br><br>![zone-without-domain-top-of-the-page](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/zone-without-domain-top-of-the-page.png){.thumbnail}<br>
>> >
>> > This means that your domain name is not managed from the OVHcloud Control Panel.<br> Determine its registrar and the DNS servers associated with it using our [WHOIS](/links/web/domains-whois) tool.<br> Find and modify the DNS zone concerned accordingly by following the dedicated section of the guide “[Hosting multiple websites on your website - adding an external domain name](/pages/web_cloud/web_hosting/multisites_configure_multisite)”.
>>
>> Go to step 4 to view the various possible scenarios and the actions to be taken.
>>
> **Step 4**
>>
>> |Possible Scenarios|Action to Take|
>> |---|---|
>> |In the active DNS zone, your domain or subdomain points to your Web Hosting plan's IP address with an A record (for an IPv4 address) or an AAAA record (for an IPv6 address).<br><br>![DNS_IP2 zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}|This indicates that your domain name is correctly configured.<br>Wait for the DNS propagation time to complete if the change is recent.<br><br>Restart your PCs, devices, and clear your browser cache. Your domain name’s previous configuration may still be cached, which could delay your update from being displayed.|
>> |The current DNS zone does not have A or AAAA records that link your domain name or subdomain to the IP address of your Web Hosting plan.|Add the new A or AAAA DNS record or correct the existing record by following [this guide](/pages/web_cloud/domains/dns_zone_edit).|
>> |The existing A or AAAA DNS record in the DNS zone for your domain name or subdomain points to an IP address other than your Web Hosting plan’s.|Add the new A or AAAA DNS record or correct the existing record by following [this guide](/pages/web_cloud/domains/dns_zone_edit).|
>> |This warning is displayed in the `DNS Zone`{.action}:<br><br>![message-other-ovh-dns-servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}|Modify your domain name’s DNS servers accordingly by following our guide on "[How to modify the DNS servers of an OVHcloud domain name](/pages/web_cloud/domains/dns_server_edit)".|

## Go further <a name="go-further"></a>

[List of IP addresses for clusters and web hosting](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)

[Hosting multiple websites on your web hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite)

[Modify the DNS servers of an OVHcloud domain name](/pages/web_cloud/domains/dns_server_edit)

[Edit an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

[Create an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_create)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).