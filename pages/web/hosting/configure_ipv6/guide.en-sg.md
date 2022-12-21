---
title: 'Configuring IPv6 for your website'
slug: configure-ipv6-for-your-website
excerpt: Find out how to make your website compatible with IPv6
section: 'Web Hosting configuration'
order: 06
---

**Last updated 27th November 2020**

## Overview

The Internet has been operating since the early 1990s, following the IPv4 standard. This standard provides an IP address for each machine connected to the Internet network: servers, but also computers, smartphones, tablets and any other device connected to the Internet. This standard has a significant limitation: it identifies a little over 4 billion different devices. This equals an average of one device per two people on Earth.

A new protocol was quickly proposed: **IPv6**. It allows to identify more than 340 sextillions of different addresses. However, IPv6 deployment takes time due to the significant changes throughout the Internet coming with it.

Available IPv4 addresses are scarce, making it increasingly difficult to add new resources to the Internet. IPv6 connections are only useful if Web content is also available via this protocol. This means that the more websites you have IPv6 enabled for, the more important it will become for each party in the network to migrate to this protocol.

For more information, see the [Wikipedia](https://en.wikipedia.org/wiki/IPv6){.external} article on IPv6.

## Objective

Our Web Hosting plans have been IPv6 compatible since 2011 but enabling this protocol remained an option for the configuration until recently. 

**This guide explains how to check if your website is compatible with IPv6 and how to configure it to be compatible.**

## Requirements

- a [domain name](https://www.ovhcloud.com/en-sg/domains/) registered with OVHcloud, using OVHcoud DNS servers
- an [OVHcloud Web Hosting plan](https://www.ovhcloud.com/en-sg/web-hosting/)
- access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg)

## Instructions

> [!warning]
>This guide is designed to assist you in common tasks as much as possible. Please remember to adapt these actions to fit your situation.
>
If you encounter any difficulties performing these actions, please contact a [specialist service provider](https://partner.ovhcloud.com/en-sg/directory/) and/or discuss the issue with our community on [https://community.ovh.com/en/](https://community.ovh.com/en/). OVHcloud cannot provide you with technical support in this regard.
>

If your website is not configured for IPv6, you can do this by adding the information in your domain name’s DNS zone. This allows web browsers to find an IPv6 address when they request the location of your website via the domain name.

### Verifying your site's IPv6 compatibility

To test whether your website is compatible with IPv6, you can use the [ipv6-test.com](https://ipv6-test.com/validate.php){.external} website. Tools such as this show you whether your website is responding to this new IP protocol. If not, please follow the steps below to make it compatible.

### Step 1: Retrieve your Web Hosting plan’s IPv6 address

Log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg) and select `Web Cloud`{.action}. Click `Hosting plans`{.action}, then choose the Web Hosting plan concerned.

In the `General information` section, copy the entry from the **IPv6** field and move on to the next step.

![IPv6](images/ipv6_01.png){.thumbnail}

### Step 2: Configure the DNS zone

> [!warning]
> Our CDN option is currently not compatible with IPv6. If you configure an IPv6 address on your website, your visitors will not benefit from the CDN.

In order for a browser to find the IPv6 address with your domain name, you must modify the DNS zone associated with it and create an **AAAA** record. You can refer to our guide on [Editing a DNS zone](../../domains/web_hosting_how_to_edit_my_dns_zone/).

In `Domains`{.action}, go to your domain name’s `DNS zone`{.action} tab. Click on the `Add an entry`{.action} button to the right of the table. You need to insert the IPv6 address retrieved in the previous step, using the **AAAA** record type.

![IPv6](images/ipv6_02.png){.thumbnail}

## Go further

[Editing an OVHcloud DNS zone](../../domains/web_hosting_how_to_edit_my_dns_zone/)

Join our community of users on <https://community.ovh.com/en/>.
