---
title: How to configure reverse DNS for your server (PTR record)
excerpt: Find out how to set up the reverse DNS resolution for your IP address in the OVHcloud Control Panel
updated: 2024-09-24
---

## Objective

Reverse DNS (*rDNS*) is the complement to "forward" DNS resolution which resolves domain names into IP addresses. With reverse DNS resolution, an IP address can resolve into the domain name (or host name) it is mapped to. This means that DNS queries of the associated IP address will return this domain name.

Configuring the reverse DNS resolution for a server is especially useful when sending emails. A mail server's validation by spam protection systems will improve if a DNS lookup of the IP address resolves properly.

**This guide explains how to configure the reverse DNS path for your IP address in the OVHcloud Control Panel.**

## Requirements

- An IP address attached to a service in your OVHcloud account
- A domain name with its `A` record mapped to your service
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

Log in to the [OVHcloud Control Panel](/links/manager), switch to the `Bare Metal Cloud`{.action} section and open `Network`{.action}. Next, click on `IP`{.action}.

The drop-down menus in the section **My public IP addresses and associated services** allow you to filter the table items for services and find your desired IP address quickly.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/filterip.png){.thumbnail}

Click on `...`{.action} in the row of the IP address concerned and select `Modify the reverse path`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/modifyreverse.png){.thumbnail}

In the new window, enter your reverse path and click on `Validate`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/enterreverse.png){.thumbnail}

You can also edit the reverse path directly via the pen icon in the **Reverse DNS** column of the table.

> [!warning]
> When you enter your domain name in the reverse, it double checks immediately if the A Record is referring back to the same IP. This is used in anti-spam procedures, so your A Record must be valid and propagated. There are certain rules to follow while entering the reverse:
> 
>  - It cannot start with a `-`.
>  - It cannot be longer than 80 characters.
>  - It cannot contain uppercase characters.
>  - It must end with a `.`.
>
> Example: "domain.tld" in the reverse record would be **"domain.tld"**.
>

> [!primary]
>
If the modification does not work as expected, verify that the `A` record is correctly configured in the DNS zone of your domain name. Bear in mind that it might take up to 24 hours for DNS zone changes to be effective, in case you have only recently edited the `A` record.
>
If the domain name is managed by OVHcloud as its registrar **and it uses OVHcloud DNS servers**, you can refer to [this guide](/pages/web_cloud/domains/dns_zone_edit).
>

## Go further

[How to edit an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

[How to modify the DNS servers of an OVHcloud domain name](/pages/web_cloud/domains/dns_server_edit)

Join our [community of users](/links/community).