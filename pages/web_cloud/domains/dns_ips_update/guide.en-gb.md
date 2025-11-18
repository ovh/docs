---
title: "List of IP addresses of OVHcloud DNS servers"
excerpt: "Find out the updated IP addresses for OVHcloud DNS servers"
updated: 2025-08-07
---

## Objective

This guide explains the IP addresses changes affecting part of our DNS servers hosted in Europe, which will apply from **August 2025**.

**Discover the list of new IP addresses for OVHcloud DNS servers.**

## Requirements

- Access to your [OVHcloud Control Panel](/links/manager) to manage the domain name concerned.

## Instructions

### Who is concerned?

This change can impact customers who:

- Have defined a custom DNS server name in the DNS records of type `NS` of their DNS zone, and have associated an IP address of an OVHcloud DNS server with this name via a DNS record of type `A`.
- Have also configured a `GLUE` record for this custom name, in order to associate it with the IP address of an OVHcloud DNS server, in the configuration of the domain name’s DNS servers.
- Are currently using this custom name as their domain name’s DNS server (defined in their Control Panel or at their registrar).

For more information, please read our guide on [Customizing a domain name’s DNS servers (Glue Records)](/pages/web_cloud/domains/glue_registry).

> [!warning]
>
> If you have not made any manual changes to the DNS configuration (default setting), you will not be affected by this change.

### Schedule

| Step                                | Estimated date           |
|------------------------------|------------------------------|
| Delete IPv6 traffic on old IPs         | Completed on 05 August 2025 |
| Commissioning of new IPs   | Starting August 5, 2025 |
| Send the first informational email to the identified customers | Mid-August 2025 |
| Send second reminder email         | September 15, 2025 |
| Deletion of IPv4 traffic          | Early October 2025 |

> [!warning]
>
> Using old IP addresses after this date will cause DNS resolution failure for domain names whose configuration has not been updated.

### What can I do if I am concerned?

1. Determine if you are still using an old IP address in your DNS zone.
2. Replace it with the new IP address (see the table below).
3. [Update your GLUE records](/pages/web_cloud/domains/glue_registry) if you have configured one in your OVHcloud Control Panel.

### IP address mapping table

| Hostname     | Old IPv4   | New IPv4   | Old IPv6       | New IPv6         |
|:---------------|:----------------|:---------------|:---------------------|:----------------------------|
| dns.ovh.net    | 213.186.33.102  | 5.135.230.153   | 2001:41d0:3:166::1  | 2001:41d0:d00:e400::2 |
| ns.ovh.net     | 213.251.128.136 | 5.135.230.149   | 2001:41d0:209::1    | 2001:41d0:b00:ea00::2 |
| dns10.ovh.net  | 213.251.188.129 | 5.135.85.109    | 2001:41d0:1:4a81::1 | 2001:41d0:d00:6100::2 |
| ns10.ovh.net   | 213.251.128.129 | 5.39.20.253     | 2001:41d0:1:1981::1 | 2001:41d0:b00:3a00::2 |
| dns11.ovh.net  | 213.251.188.130 | 5.135.86.61     | 2001:41d0:1:4a82::1 | 2001:41d0:d00:f000::2 |
| ns11.ovh.net   | 213.251.128.130 | 5.39.27.169     | 2001:41d0:1:1982::1 | 2001:41d0:b00:d000::2 |
| dns12.ovh.net  | 213.251.188.131 | 5.135.86.81     | 2001:41d0:1:4a83::1 | 2001:41d0:d00:f100::2 |
| ns12.ovh.net   | 213.251.128.131 | 5.39.102.21     | 2001:41d0:1:1983::1 | 2001:41d0:b00:eb00::2 |
| dns13.ovh.net  | 213.251.188.132 | 5.135.98.29     | 2001:41d0:1:4a84::1 | 2001:41d0:d00:f200::2 |
| ns13.ovh.net   | 213.251.128.132 | 5.39.112.241    | 2001:41d0:1:1984::1 | 2001:41d0:b00:ec00::2 |
| dns14.ovh.net  | 213.251.188.133 | 5.135.99.133    | 2001:41d0:1:4a85::1 | 2001:41d0:d00:f300::2 |
| ns14.ovh.net   | 213.251.128.133 | 5.39.113.141    | 2001:41d0:1:1985::1 | 2001:41d0:b00:ed00::2 |
| dns15.ovh.net  | 213.251.188.134 | 5.135.110.101   | 2001:41d0:1:4a86::1 | 2001:41d0:d00:f400::2 |
| ns15.ovh.net   | 213.251.128.134 | 5.39.114.9      | 2001:41d0:1:1986::1 | 2001:41d0:b00:ee00::2 |
| dns16.ovh.net  | 213.251.188.135 | 5.135.112.57    | 2001:41d0:1:4a87::1 | 2001:41d0:d00:f500::2 |
| ns16.ovh.net   | 213.251.128.135 | 5.39.116.25     | 2001:41d0:1:1987::1 | 2001:41d0:b00:ef00::2 |
| dns17.ovh.net  | 213.251.188.137 | 5.135.112.105   | 2001:41d0:1:4a89::1 | 2001:41d0:d00:f600::2 |
| ns17.ovh.net   | 213.251.128.137 | 5.39.116.57     | 2001:41d0:1:1989::1 | 2001:41d0:b00:f000::2 |
| dns18.ovh.net  | 213.251.188.138 | 5.135.200.249   | 2001:41d0:1:4a8a::1 | 2001:41d0:d00:f700::2 |
| ns18.ovh.net   | 213.251.128.138 | 5.135.34.109    | 2001:41d0:1:198a::1 | 2001:41d0:b00:f100::2 |
| dns19.ovh.net  | 213.251.188.139 | 5.135.216.9     | 2001:41d0:1:4a8b::1 | 2001:41d0:d00:f800::2 |
| ns19.ovh.net   | 213.251.128.139 | 5.135.36.129    | 2001:41d0:1:198b::1 | 2001:41d0:b00:f200::2 |
| dns20.ovh.net  | 213.251.188.143 | 5.135.249.213   | 2001:41d0:1:4a8f::1 | 2001:41d0:d00:f900::2 |
| ns20.ovh.net   | 213.251.128.143 | 5.135.43.97     | 2001:41d0:1:198f::1 | 2001:41d0:b00:f300::2 |
| dns100.ovh.net | 213.251.188.144 | 5.135.250.177   | 2001:41d0:1:4a90::1 | 2001:41d0:d00:fa00::2 |
| ns100.ovh.net  | 213.251.128.144 | 5.135.44.185    | 2001:41d0:1:1990::1 | 2001:41d0:b00:f400::2 |
| dns101.ovh.net | 213.251.188.145 | 5.196.38.125    | 2001:41d0:1:4a91::1 | 2001:41d0:d00:fb00::2 |
| ns101.ovh.net  | 213.251.128.145 | 5.135.53.37     | 2001:41d0:1:1991::1 | 2001:41d0:b00:f500::2 |
| dns102.ovh.net | 213.251.188.146 | 5.196.38.181    | 2001:41d0:1:4a92::1 | 2001:41d0:d00:fc00::2 |
| ns102.ovh.net  | 213.251.128.146 | 5.135.54.1      | 2001:41d0:1:1992::1 | 2001:41d0:b00:f600::2 |
| dns103.ovh.net | 213.251.188.147 | 5.196.39.89     | 2001:41d0:1:4a93::1 | 2001:41d0:d00:fd00::2 |
| ns103.ovh.net  | 213.251.128.147 | 5.135.54.65     | 2001:41d0:1:1993::1 | 2001:41d0:b00:f700::2 |
| dns104.ovh.net | 213.251.188.148 | 5.196.39.113    | 2001:41d0:1:4a94::1 | 2001:41d0:d00:fe00::2 |
| ns104.ovh.net  | 213.251.128.148 | 5.135.60.17     | 2001:41d0:1:1994::1 | 2001:41d0:b00:f800::2 |
| dns105.ovh.net | 213.251.188.149 | 5.196.40.17     | 2001:41d0:1:4a95::1 | 2001:41d0:d00:ff00::2 |
| ns105.ovh.net  | 213.251.128.149 | 5.135.60.37     | 2001:41d0:1:1995::1 | 2001:41d0:b00:f900::2 |
| dns106.ovh.net | 213.251.188.150 | 5.196.41.1      | 2001:41d0:1:4a96::1 | 2001:41d0:d01::2      |
| ns106.ovh.net  | 213.251.128.150 | 5.135.65.21     | 2001:41d0:1:1996::1 | 2001:41d0:b00:fa00::2 |
| dns107.ovh.net | 213.251.188.151 | 5.196.41.137    | 2001:41d0:1:4a97::1 | 2001:41d0:d01:100::2  |
| ns107.ovh.net  | 213.251.128.151 | 5.135.65.209    | 2001:41d0:1:1997::1 | 2001:41d0:b00:fb00::2 |
| dns108.ovh.net | 213.251.188.152 | 5.196.41.157    | 2001:41d0:1:4a98::1 | 2001:41d0:d01:200::2  |
| ns108.ovh.net  | 213.251.128.152 | 5.135.66.229    | 2001:41d0:1:1998::1 | 2001:41d0:b00:fc00::2 |
| dns109.ovh.net | 213.251.188.153 | 5.196.41.217    | 2001:41d0:1:4a99::1 | 2001:41d0:d01:300::2  |
| ns109.ovh.net  | 213.251.128.153 | 5.135.67.9      | 2001:41d0:1:1999::1 | 2001:41d0:b00:fd00::2 |
| dns110.ovh.net | 213.251.188.154 | 5.196.44.1      | 2001:41d0:1:4a9a::1 | 2001:41d0:d01:400::2  |
| ns110.ovh.net  | 213.251.128.154 | 5.135.78.233    | 2001:41d0:1:199a::1 | 2001:41d0:b00:fe00::2 |
| dns111.ovh.net | 213.251.188.155 | 5.196.45.181    | 2001:41d0:1:4a9b::1 | 2001:41d0:d01:500::2  |
| ns111.ovh.net  | 213.251.128.155 | 5.135.79.5      | 2001:41d0:1:199b::1 | 2001:41d0:b00:ff00::2 |
| dns112.ovh.net | 51.68.107.108   | 5.196.45.209    | 2001:41d0:1:4a9d::1 | 2001:41d0:d01:600::2  |
| ns112.ovh.net  | 51.68.107.109   | 5.135.80.109    | 2001:41d0:209::3    | 2001:41d0:b01::2      |
| dns113.ovh.net | 87.98.168.13    | 5.196.46.145    | 2001:41d0:1:4a9e::1 | 2001:41d0:d01:700::2  |
| ns113.ovh.net  | 87.98.168.141   | 5.135.82.125    | 2001:41d0:209::4    | 2001:41d0:b01:100::2  |

## Go further

For specialized services (SEO, development, etc.), contact the [OVHcloud partners](/links/partner).

If you would like assistance with using and configuring your OVHcloud solutions, we recommend referring to our range of [support solutions](/links/support).

Join our [community of users](/links/community).