---
title: 'Resolving a “Site not installed” error'
excerpt: 'Find out how to resolve a “Site not installed” error'
updated: 2023-11-24
---

## Objective

You may see the error page **Site not installed** displayed on your web browser, particularly when your website is first installed.

![website not installed](images/site-not-installed.png){.thumbnail}

**This guide explains how to identify and resolve the "Site not installed" error page.**

> [!warning]
>
> OVHcloud provides services for which you are responsible with regard to their configuration and management. It is therefore your responsibility to ensure that they function correctly.
>
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](/links/partner) or reach out to the [OVHcloud community](/links/community) if you encounter any difficulties. We will not be able to assist you. You can find more information in the [Go further](#go-further) section of this guide.
>

## Requirements

- An [OVHcloud web hosting plan](/links/web/hosting)
- Access to the [OVHcloud Control Panel](/links/manager)
- Administrative access to the [DNS zone](/pages/web_cloud/domains/dns_zone_edit) your domain name is attached to.

## Instructions

The **Site not installed** page appears for two reasons:

- 1: [Your domain name or subdomain is not declared correctly on your web hosting plan](#check-multisites).

- 2: [Your domain name is not linked to the IP address of your web hosting plan.](#check-dns-domain).

The following steps will allow you to correct the “Site not installed” error in both cases.

### Step 1 - Verify the declaration of your domain name or subdomain on your web hosting plan <a name="check-multisites"></a>

In your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section at the top of the page, then click on the `Hosting plans`{.action} tab in the left-hand column.

Select the web hosting plan concerned from the list, then click on the `Multisite`{.action} tab.

|Scenario|Action to Take|
|---|---|
|The domain name or subdomain linked to your website will appear in the "Multisite" table.|If you have just added the domain name or subdomain to the `Multisite`{.action} section of your web hosting plan, please wait around **twenty minutes**, then refresh your web browser cache. If the message “Site not installed” still appears, proceed to [step 2](#check-dns-domain).|
|The domain name or subdomain linked to your website does not appear in the “Multisite” table.|Add your domain name or subdomain in the `Multisite`{.action} section by following the dedicated section in the guide “[Hosting multiple websites on your website - adding a domain or subdomain](/pages/web_cloud/web_hosting/multisites_configure_multisite)”.|
|The domain or subdomain has been removed from the "Multisite" table without any action on your part.|Your domain or DNS zone may be managed from another account. Add your domain or subdomain in the `Multisite`{.action} section by following the dedicated section in the guide “[Hosting multiple websites on your web hosting plan - adding an external domain name](/pages/web_cloud/web_hosting/multisites_configure_multisite)”.|

### Step 2 - Check the IP address in your domain name’s active DNS zone <a name="check-dns-domain"></a>

This step involves checking that your domain or subdomain points to your web hosting plan’s IP address from its active DNS zone.

> [!primary]
>
> To find out more about DNS, visit the following pages:
> 
> - [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)
> - [Creating an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_create)
> - [Modify an OVHcloud domain name’s DNS servers](/pages/web_cloud/domains/dns_server_edit)
>

#### 2\.1 Identify the IP address of your OVHcloud web hosting plan

To find the IP address of your web hosting plan, log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section at the top of the page. Click on the `Hosting plans`{.action} tab in the left-hand column, then select the web hosting plan concerned from the list.

You will find the `IPv4` address in the box `General information`{.action}.

![find-ipv4-and-ipv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}

You can also find the IP address associated with your web hosting plan by using our guide “[List of IP addresses associated with OVHcloud web hosting plans](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)”.

#### 2\.2 Verify the IP address recorded in your domain name’s active DNS zone

You will now need to check that your web hosting plan’s IP address appears in your domain name’s active DNS zone.

> [!primary]
>
> Before you continue, whenever a change occurs in a domain name’s active **DNS zone**, it may take between **4 and 24 hours** to update the information on the DNS network.
>
> If you modify the **DNS servers** associated with your domain name, this period can be up to **48 hours** maximum.
>

To do this, log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section at the top of the page. Go to the `Domain names`{.action} section, select your domain name, then go to the `DNS zone`{.action} tab.

A table with different DNS records will appear.

|Possible Scenarios|Action to Take|
|---|---|
|In the active DNS zone, your domain name or subdomain points to the IP address of your web hosting plan with an A record (for an IPv4) or an AAAA record (for an IPv6).<br><br>![DNS_IP2 zone](images/dashboard-entry-a.png){.thumbnail}|This indicates that your domain name is correctly configured.<br><br> Wait for the DNS propagation if the change is recent.<br><br> Also remember to restart your devices (PC, smartphone, box, etc.) and clear your browser cache. Your domain name’s previous configuration can be cached, which can delay the display of your update.|
|The active DNS zone does not have A or AAAA records that link your domain or subdomain to your web hosting plan's IP address. Or the existing record points to a different IP address.|Add the new A or AAAA record or correct the existing record by following [this guide](/pages/web_cloud/domains/dns_zone_edit).|
|Your domain does not appear in the `Domain names`{.action} section of your OVHcloud Control Panel.<br><br>Or the `DNS Zone`{.action} tab of your domain name appears as follows:<br><br>![zonedns_ndd_not_on_lec2](images/zone-without-domain-top-of-the-page.png){.thumbnail}|This means that your domain name is not managed from your OVHcloud Control Panel.<br><br>Determine its registrar via our [WHOIS tool](/links/web/domains-whois) and the DNS servers associated with it. <br><br>Find and modify the DNS zone concerned accordingly by following the dedicated section of the guide “[Hosting multiple websites on your web hosting plan - adding an external domain name](/pages/web_cloud/web_hosting/multisites_configure_multisite)”.|
|This warning appears in the `DNS Zone`{.action} tab:<br><br>![warning_zonedns_pas_sur_srv_dns](images/message-other-ovh-dns-servers.png){.thumbnail}|You will need to modify your domain name’s DNS servers accordingly by following our guide on [Modifying DNS servers for an OVHcloud domain name](/pages/web_cloud/domains/dns_server_edit).

## Go further <a name="go-further"></a>

[List of IP addresses for clusters and web hosting](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)

[Hosting multiple websites on your web hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite)

[Modify the DNS servers of an OVHcloud domain name](/pages/web_cloud/domains/dns_server_edit)

[Edit an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

[Create an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_create)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).