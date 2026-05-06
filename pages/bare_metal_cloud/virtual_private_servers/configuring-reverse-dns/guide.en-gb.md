---
title: How to configure reverse DNS for your server (PTR record)
excerpt: Find out how to set up the reverse DNS resolution for your IPv4 or IPv6 address in the OVHcloud Control Panel
updated: 2026-02-23
---

## Objective

Reverse DNS (*rDNS*) is the complement to "forward" DNS resolution which resolves domain names into IP addresses. With reverse DNS resolution, an IP address can resolve into the domain name (or host name) it is mapped to. This means that DNS queries of the associated IP address will return this domain name.

Configuring the reverse DNS resolution for a server is especially useful when sending emails. Spam protection systems will better validate a mail server if a reverse DNS lookup of the IP address resolves correctly.

**This guide explains how to configure the reverse DNS path for your IP address in the OVHcloud Control Panel.**

## Requirements

- An IP address attached to a service in your OVHcloud account
- A domain name with its `A` record or `AAAA` record mapped to your service

<!-- CP-NAV-START:network-public-ip -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Public IP](/links/control-panel/network-public-ip)
- **Navigation path:** `Network`{.action} > `Public IP Addresses`{.action}

---
<!-- CP-NAV-END:network-public-ip -->

## Instructions

<!-- CP-STEPS-START:configure-reverse-dns -->
The drop-down menu underneath **My public IP addresses and associated services** allows you to filter your services according to category. You can also search for a specific IP in the search bar left of the drop-down menu.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/filterip_new.png){.thumbnail}

Click the `⁝`{.action} button in the row of the IP address concerned and select `Configure the reverse DNS`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/modifyreverse_new.png){.thumbnail}

In the new window, enter your reverse path and click on `Confirm`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/enterreverse_new.png){.thumbnail}

You can also edit the reverse path directly via the `pencil`{.action} icon in the **Reverse DNS** column of the table.

> [!warning]
> When you enter your domain name in the reverse, it immediately double-checks whether the `A` / `AAAA` record refers back to the same IP. This is used in anti-spam procedures, so your DNS record must be valid and propagated. There are certain rules to follow while entering the reverse:
> 
>  - It cannot start with a `-`.
>  - It cannot be longer than 63 characters.
>  - It cannot contain uppercase characters.
>  - It must end with a `.`.
>
> Example: "domain.tld" in the reverse record would be `domain.tld.`.
>

> [!primary]
>
> If the modification does not work as expected, verify that the `A` / `AAAA` record is correctly configured in the DNS zone of your domain name. Bear in mind that it might take up to 24 hours for DNS zone changes to be effective, in case you have only recently edited a record.
>
> If the domain name is managed by OVHcloud as its registrar **and it uses OVHcloud DNS servers**, you can refer to [this guide](/pages/web_cloud/domains/dns_zone_edit).
>
<!-- CP-STEPS-END:configure-reverse-dns -->

## Go further

[How to edit an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

[How to modify the DNS servers of an OVHcloud domain name](/pages/web_cloud/domains/dns_server_edit)

Join our [community of users](/links/community).