---
title: "Configure an IPv6 address for your website"
slug: configure-ipv6-for-your-website
excerpt: "Find out how to make your website compatible with an IPv6 address"
section: Web Hosting configuration
order: 06
---

**Last updated 10th February 2023**

## Objective

The Internet network has been operating since the early 1990s, following the IPv4 standard. This standard allows you to provide an X.X.X.X IP address (where "X" are numbers between 0 and 255) to each machine connected to the Internet network (servers, computers, smartphones, tablets, etc.). However, this standard limits the number of devices connected to the Internet to around 4 billion, which in 2022 was less than one connected device for every two people on Earth.

As a result, the **IPv6** protocol was introduced to allow up to 340 sextillion devices to be connected to the internet. It takes time to deploy because the entire Internet network must incorporate this new standard. 

Since IPv4 addresses are now less available, it is more difficult to add new machines to the internet using the IPv4 standard. However, connections with an IPv6 address are only useful if, for example, your website is also available with the same protocol. So the more websites that are accessible via IPv6, the more players on the internet will switch their devices/machines to this new protocol.

For more information, see [Wikipedia](https://fr.wikipedia.org/wiki/IPv6){.external}'s article on IPv6.

Our web hosting plans have been IPv6 compatible since 2011. However, until recently, enabling this protocol remained an optional option for the configuration. 

**This guide explains how to verify if your website is compatible with IPv6 and how to configure it with an IPv6 address.**

## Requirements

- Have a [domain name](https://www.ovhcloud.com/asia/domains/){.external} in your OVHcloud Control Panel.
- Have a [web hosting plan](https://www.ovhcloud.com/asia/web-hosting/){.external}.
- Be logged in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia){.external}.

## Instructions

> [!warning]
>
> OVHcloud provides services that you are responsible for with regard to their configuration and management. It is therefore your responsibility to ensure that they function properly.
> 
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/asia/) and/or the service’s software publisher if you encounter any difficulties. We will not be able to assist you. You can find more information in the ["Go further"](#go-further) section of this tutorial.
> 

If your website is not configured to work with an IPv6 address, you can add [the IPv6 address of your OVHcloud shared hosting](https://docs.ovh.com/asia/en/hosting/list-of-ip-addresses-of-web-hosting-clusters/) in your domain name’s active DNS zone. The goal is for web browsers to find an IPv6 address associated with your website via your domain name.

### Check your website's IPv6 compatibility

To check if your website already uses an IPv6 address, use [ipv6-test.com](https://ipv6-test.com/validate.php){.external}. It will show you whether your website responds to this new IP protocol. If not, please continue reading our guide.

### Step 1: retrieve your Web Hosting plan’s IPv6 address

Log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia){.external}. In the `Web Cloud`{.action} section, click on `Hosting plans`{.action}, select the plan concerned, then go to the `General information`{.action} tab.

In the **IPv6** frame, copy the entry and proceed to the next step.

![IPv6](images/ipv6_01.png){.thumbnail}

### Step 2: Configure your domain name’s active DNS zone

> [!warning]
>
> Our CDN options are currently incompatible with IPv6 addresses. If you configure an IPv6 address for your website, your visitors will not benefit from the CDN.
>
> In addition, adding, modifying or deleting a DNS record in a domain name’s active DNS zone will take between **4 and 24 hours** to propagate fully.
>

In order for your browser to find the IPv6 address with your domain name, edit your domain’s active DNS zone. Use our guide “[Edit an OVHcloud DNS zone](https://docs.ovh.com/asia/en/domains/web_hosting_how_to_edit_my_dns_zone/#edit-your-domain-names-ovhcloud-dns-zone_1)” to create a **AAAA** DNS record.

In the `Web Cloud`{.action} section, click on `Domain names`{.action}. Select your domain name, then go to the `DNS zone`{.action} tab. Click the `Add an entry`{.action} button to the right of the table. 

Insert the previously copied IPv6 address using the **AAAA** record type.

![IPv6](images/ipv6_02.png){.thumbnail}

## Go further <a name="go-further"></a>

[Editing an OVHcloud DNS zone](https://docs.ovh.com/asia/en/domains/web_hosting_how_to_edit_my_dns_zone/#edit-your-domain-names-ovhcloud-dns-zone_1)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/asia/directory/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/asia/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.