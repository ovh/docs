---
title: 'Resolving a “Site not installed” error'
excerpt: 'Find out how to resolve a “Website not installed” error'
slug: web_hosting_error_-_website_not_installed
section: 'Web Hosting configuration'
---

**Last updated 7th may 2021**

## Objective

You may see a `Site not installed` error page appear on your web browser, particularly when you first install your website.

![site-not-installed](images/site-not-installed.png){.thumbnail}

**Find out how to resolve a “Website not installed” error**

> [!warning]
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
> We have provided you with this guide in order to help you with common tasks. Nevertheless, we recommend contacting a specialist provider and/or the service’s software publisher if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the [Go further](#gofurther) section of this guide.

## Requirements

- an [OVHcloud Web Hosting plan](https://www.ovh.co.uk/web-hosting)
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- access to the [DNS zone](../../domains/web_hosting_how_to_edit_my_dns_zone/) your domain name is attached to.

## Instructions

The `Site not installed` page appears in two situations:

1. Your domain is not present in the [Multisite](../multisites-configuring-multiple-websites/#step-1-access-multisite-management) part of your hosting plan.

2. Your domain name is not linked to your hosting plan via its `DNS zone`{.action}.

The following steps will help you correct the `Site not installed` error in these two situations.

### Step 1: check the multisite section of your hosting plan

In the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), click on `Web cloud`{.action}, then `Hosting plans`{.action}.

Select the concerned hosting plan in the list, then click on the `Multisite`{.action} tab.

|Scenario|What to do|
|---|---|
|Your website name will appears in the table.|If you just added your website name to the multisite section of your hosting plan, wait around twenty minutes then refresh your web browser’s cache.<br><br>If the message \`Site not installed\` still appears, proceed to [step 2](#checkdomainlink).|
|The domain or subdomain linked to your website does not appear in the table.|Add your domain to the `multisite`{.action} by following the dedicated section of the guide [Hosting multiple websites on your domain](../multisites-configuring-multiple-websites/#step-21-adding-an-ovhcloud-registered-domain).|
|The domain name has been deleted from the multisite without any action on your part.|Your domain or its DNS zone may be managed from another account.<br><br>Add your domain to the multisite by following the dedicated section of the guide on [Hosting multiple websites on your Web Hosting plan](../multisites-configuring-multiple-websites/#step-22-adding-an-external-domain) domain name.|

### Step 2: check your domain’s DNS zone <a name="checkdomainlink"></a>

> [!primary]
> This step involves checking that your domain name via its `DNS zone`{.action} is linked to your website’s hosting plan.
> To find out more about the concept of `DNS`, please refer to our guide on [Editing an OVHcloud DNS zone](../../domains/web_hosting_how_to_edit_my_dns_zone/).

#### 2.1 Identify the IP address of your OVHcloud web hosting plan

To find the IP address, click `Hosting plans` in the left-hand column of the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), then select the plan concerned.

![hosting-general-informations](images/hosting-general-informations.png){.thumbnail}

#### 2.2 Check the IP address recorded in your domain’s DNS zone

You must now check that your hosting plan’s IP address appears in your domain name’s active DNS zone.

To do this, go to the `Domain names`{.action} section, select your domain, then go to the `DNS zone`{.action} zone tab.

|Scenario|What to do|
|---|---|
|In the DNS zone, your domain name is linked to your hosting plan’s IP address by an A record (for IPv4) or an AAAA record (for IPv6)<br>![DNS_IP2](images/zonedns_ip2.png){.thumbnail}|This means your domain name has been correctly configured.<br><br>Following the latest changes in your DNS, your website will be displayed within a maximum of 48 hours.<br><br>Also remember to restart your devices (PC, mobile phone, Internet box, etc.) and clear your browser’s cache.|
|Your DNS-zone does not have an A or AAAA record linking your domain name to your hosting plan’s IP address. Or the actual record points to another IP address.|Add a new A or AAAA or modify the existing record by following this [guide](../../domains/web_hosting_how_to_edit_my_dns_zone/).|
|Your domain name does not appear in the `Domain names`{.action} section of the OVHcloud Control Panel.<br>Or your domain name's `DNS Zone`{.action} tab will appear as follows :<br>![lec_nd_zonedns2](images/zonedns_ndd_pas_sur_lec2.png){.thumbnail}|This means that your domain not is not managed on your OVHcloud Control Panel.<br><br>Determine its registrar using our [WHOIS](https://www.ovh.co.uk/support/tools/check_whois.pl) tool and the DNS servers to which it's attached to.<br><br>You can find and modify the relevant DNS zone accordingly, following this [guide](../multisites-configuring-multiple-websites/#step-22-adding-an-external-domain).|
|This warning appears in the `DNS-Zone`{.action} tab:<br>![dns_srv_not_zonedns](images/avertissement_zonedns_pas_sur_srv_dns.png){.thumbnail}|You will need to modify your domain’s DNS servers accordingly, following this [guide](../../domains/web_hosting_general_information_about_dns_servers/).|

## Go further <a name="gofurther"></a>

[List of IP addresses for clusters and Web Hostings ](../list-of-ip-addresses-of-web-hosting-clusters/)

[Contact OVHcloud Partners](https://partner.ovhcloud.com/en-gb/directory/)

Join our community of users on <https://community.ovh.com/en/>.
