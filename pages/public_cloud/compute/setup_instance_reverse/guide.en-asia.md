---
title: How to configure reverse DNS for a Public Cloud instance
excerpt: Find out how to set up the reverse DNS resolution of your OVHcloud Public Cloud instance
updated: 2024-06-10
---

## Objective

Reverse DNS (*rDNS*) is the complement to "forward" DNS resolution which resolves domain names into IP addresses. With reverse DNS resolution, an IP address can resolve into the domain name (or host name) it is mapped to. This means that DNS queries of the associated IP address will return this domain name.

Configuring the reverse DNS resolution for an instance is especially useful when sending emails. A mail server's validation by spam protection systems will improve if a DNS lookup of the IP address resolves properly.

**This guide explains how to configure the reverse DNS path for the IP address(es) of your Public Cloud instance.**

## Requirements

- A [Public Cloud instance](/links/public-cloud/public-cloud) in your OVHcloud account
- A domain name with its `A` record mapped to the instance
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

Log in to the [OVHcloud Control Panel](/links/manager), switch to the `Bare Metal Cloud`{.action} section and open `Network`{.action}. Next, click on `IP`{.action}.

The drop-down menu underneath **My public IP addresses and associated services** allows you to filter your services according to category.

![Reverse IP](images/filterippci.png){.thumbnail}

Click on `...`{.action} in the row of the IP address concerned and select `Modify the reverse path`{.action}.

![Reverse DNS](images/modifyreversepc.png){.thumbnail}

In the new window, enter your reverse path and click on `Validate`{.action}.

![Reverse DNS](images/enterreverse.png){.thumbnail}

You can also edit the reverse path directly via the icon in the **Reverse DNS** column of the table.

> [!primary]
>
If the modification does not work as expected, verify that the `A` record is correctly configured in the DNS zone of your domain name. Bear in mind that it might take up to 24 hours for DNS zone changes to be effective, in case you have only recently edited the `A` record.
>
If the domain name is managed by OVHcloud as its registrar **and** it uses OVHcloud DNS servers, you can refer to [this guide](/pages/web_cloud/domains/dns_zone_edit).
>

## Go further <a name="gofurther"></a>

[First steps with Public Cloud instances](/pages/public_cloud/compute/public-cloud-first-steps)

[How to edit an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

Join our [community of users](/links/community).