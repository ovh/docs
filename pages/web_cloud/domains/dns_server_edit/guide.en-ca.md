---
title: "Modifying the DNS servers of an OVHcloud domain name"
excerpt: "Find out how to modify the DNS servers for your OVHcloud-registered domain name"
updated: 2024-09-16
---

## Objective

The abbreviation **DNS** (**D**omain **N**ame **S**ystem) is a set of elements (DNS servers, DNS zones, etc.) used to match a domain name to an IP address.

Refer to our guides “[Everything you need to know about DNS servers](/pages/web_cloud/domains/dns_server_general_information)” and “[Everything you need to know about DNS zone](/pages/web_cloud/domains/dns_zone_general_information)” for more information.

**Find out how to modify the DNS servers for your OVHcloud domain name in 3 steps.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Requirements

- a [domain name](/links/web/domains) registered with OVHcloud.
- You must have the [appropriate permissions to manage](/pages/account_and_service_management/account_information/managing_contacts) for the domain name in your [OVHcloud Control Panel](/links/manager).
- You must be logged in to your [OVHcloud Control Panel](/links/manager).

> [!primary]
>
> A **registrar** is an organization authorized to sell domain names. OVHcloud is one of these **registrars**.
>
> If your domain name is not registered with OVHcloud, you will need to modify the DNS servers at the **registrar** where your domain name is currently registered.
>

## Instructions

> [!alert]
>
> **Take care when modifying a domain name’s DNS servers.**
>
> A configuration error can make your website inaccessible, or prevent your email addresses from receiving new emails. By learning more about the consequences of modifying your DNS zone, you can get a better understanding of the changes you will make.

When you modify your domain name’s DNS servers, you are changing its DNS configuration. The new DNS configuration replaces the old one and is stored on the newly-defined DNS servers. Technically, the domain name then uses a new DNS zone.

However, it is essential to consider the following points:

- When changing DNS servers (e.g. an external DNS by an OVHcloud DNS), the content of the old configuration/DNS zone is not automatically replicated in the new one. Ensure that your new DNS zone contains all of the DNS records required for the services associated with your domain name to work correctly (for example, your website and email addresses).
- If you do not want to modify the DNS servers but one or more records from your current configuration/DNS zone, please refer to our guide: “[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)”.
- Some organizations, registries, that manage domain name extensions, have specific requirements regarding DNS servers (quantity of name servers, value of records, etc.). If in doubt, check with the registry responsible for the domain.

### Step 1 - Access OVHcloud DNS server management <a name="access-dns-servers"></a>

To do this, perform the following steps:

1. Log in to your [OVHcloud Control Panel](/links/manager).
2. On the line at the top of the Control Panel, click on the `Web Cloud`{.action} tab.
3. In the left-hand column, click on the `Domain names`{.action} dropdown menu.
4. Select the domain name concerned.
5. On the page that appears, click on the `DNS servers`{.action} tab.

The table that opens will contain the DNS servers currently set by OVHcloud for your domain name. Several DNS servers can be listed, each with its own row in the table.

> [!primary]
>
> When you use the OVHcloud DNS servers, the numbers in the server names have no link to the service(s) you are using. Only the [Anycast DNS](/links/web/domains-options) option uses specific DNS servers (`ns200.anycast.me` and `dns200.anycast.me`). When they are subscribed, they are automatically assigned to you.

![DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}

### Step 2 - Modify DNS servers <a name="modify-dns-servers"></a>

> [!primary]
>
> All of the features described below can be found in the `DNS servers`{.action} tab, mentioned in [step 1](#access-dns-servers) of this guide.
>

To modify the DNS servers, click the `Modify DNS servers`{.action} button on the right-hand side of the table “DNS servers”. Depending on your screen resolution, the button may be below the table.

A new page appears, and you have three options for editing.

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers.png){.thumbnail}

#### Option 1 - Use OVHcloud default DNS

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-1.png){.thumbnail}

This option automatically applies the existing OVHcloud DNS zone configuration for your domain name. First, check that a DNS zone exists for your domain name at OVHcloud.

> [!primary]
>
> If necessary, please refer to the guides “[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)” and/or “[Creating an OVHcloud DNS zone for a domain name](/pages/web_cloud/domains/dns_zone_create)” to check if an OVHcloud DNS zone exists for your domain name.

To use OVHcloud’s default DNS servers, click `Apply configuration`{.action}. The following window will appear:

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-1-apply-configuration.png){.thumbnail}

It summarizes the names of the two DNS servers that will be applied to your domain name. They must have one of the following 3 forms:

- `nsXX.ovh.net` and `dnsXX.ovh.net` or, `nsXXX.ovh.net` and `dnsXXX.ovh.net` (where each `X` represents a number between **0** and **9**)
- `nsXX.ovh.ca` and `dnsXX.ovh.ca` or, `nsXXX.ovh.ca` and `dnsXXX.ovh.ca` (where each `X` represents a number between **0** and **9**)
- `ns200.anycast.me` and `dns200.anycast.me` (if you have subscribed to the [DNS anycast] option (/links/web/domains-options))

If they correspond to the ones you want to apply, click `Apply`{.action}.

This way, the 2 DNS servers declared (in the NS records in the OVHcloud DNS zone) will be used for your domain name.

The old DNS servers that have been declared, and the DNS configuration that they applied, will be disabled for your domain name. The OVHcloud DNS zone will become the active DNS zone for your domain name.

#### Option 2 - Use my own DNS

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-2.png){.thumbnail}

This option allows you to declare the DNS servers of an unmanaged DNS zone from the OVHcloud Control Panel.

This can be, for example:

- external DNS servers provided by one of our competitors;
- your own DNS servers if you host your DNS zone on one of your servers. These DNS servers can also be hosted on an OVHcloud infrastructure (dedicated server, VPS, etc.).

> [!success]
>
> Before you add a DNS server, check that the server **can be reached** and that it contains a DNS zone for your domain name. Also, make sure that this DNS zone contains all the records of type NS to all the DNS servers that you are going to declare for your domain name.
>
> For example: you want to declare the DNS servers *ns1.dns-server.tld*, *ns2.dns-server.tld* and *ns3.dns-server.tld* for your domain name. You will then need to check that the following three NS records are present in the 3 DNS zones hosted on these 3 DNS servers:
>
> - “Your own domain (or just an @)” IN NS ns1.dns-server.tld.
> - “Your own domain (or just an @)” IN NS ns2.dns-server.tld.
> - “Your own domain (or just an @)” IN NS ns3.dns-server.tld.
>

To enter one of your own DNS servers, fill in the 2 forms in the box, as shown below:

- `DNS server`: The name of the DNS server to apply to your domain name.
-`Associated IP (optional)`: IP address (IPv4 or IPv6) of the DNS server entered. You can only enter **one IP address** in this form.

> [!warning]
>
> Each input box (visible in the previous screenshot) can only contain **one** DNS server at a time. A DNS server corresponds to a sidebar.
>
> In addition, an information note with a blue background, located above the first box, indicates the range of DNS servers that you can declare for your domain name. These values vary depending on the domain name extension.

Once you have entered the information, click on the `+`{.action} button to the right of the two forms. You can use it to add the DNS server, and a new entry box will appear beneath the previous one.

Repeat this operation as many times as you have DNS servers to add, within the limits specified in the information note.
Click the `+`{.action} button for each DNS server to confirm entering and adding it.

Once all of your own DNS servers have been added, click `Apply configuration`{.action}. The following window will appear:

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-2-apply-configuration.png){.thumbnail}

It summarizes the DNS server names that will be applied to your domain name.
If they correspond to the ones you want to apply, click `Apply`{.action}.

The old DNS servers that have been declared, and the DNS configuration that they applied, will be disabled for your domain name. The DNS zone declared on your own DNS servers will become the active DNS zone for your domain name.

#### Option 3 - Use OVHcloud DNS and my own DNS

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-3.png){.thumbnail}

This option allows you to combine the use of your own DNS servers while keeping the OVHcloud DNS servers active for your domain name. This combination allows you, for example, to ensure even more access to the different services associated with your domain name (web hosting, email servers, etc.). If a group of DNS servers becomes unavailable for a few minutes, the other DNS servers declared can take over.

However, please ensure that the DNS zone configurations on the various DNS servers concerned are correctly configured to work together. Most of the time, all DNS servers will be operational. They will all be able to respond to requests made randomly on the DNS network.

> [!warning]
>
> 1. Be careful if you decide to use the latter option. This is because it requires advanced knowledge of how the DNS network, DNS servers and DNS zones work.<br>
> 2. The [DNSSEC](/pages/web_cloud/domains/dns_dnssec) option must be disabled to combine the use of your own DNS servers with OVHcloud DNS.<br>
> 3. Please ensure that you do not mix an OVHcloud DNS server group with another OVHcloud DNS server group. For example, *dns19.ovh.net* and *ns19.ovh.net* correspond to a group of OVHcloud DNS servers, they go hand-in-hand, and they are synchronized. At OVHcloud, DNS server groups are identified using the number in the server names. Two OVHcloud DNS servers are part of the same DNS server group, as long as they share the same number. For example, *dns19.ovh.net* and *ns19.ovh.net*.

> [!success]
>
> Before you add a DNS server, check that the server **can be reached** and that it contains a DNS zone for your domain name. Also, make sure that this DNS zone contains all the records of type NS to all the DNS servers that you are going to declare for your domain name.
>
> For example: you want to declare the DNS servers *ns1.dns-server.tld*, *dnsXX.ovh.net* and *nsXX.ovh.net* for your domain name. You will then need to check that the following three NS records are present in the 3 DNS zones hosted on these 3 DNS servers:
>
> - “Your own domain (or just an @)” IN NS ns1.dns-server.tld.
> - “Your own domain (or just an @)” IN NS dnsXX.ovh.net.
> - “Your own domain (or just an @)” IN NS nsXX.ovh.net.
>

To enter one of your own DNS servers, fill in the 2 forms in the box as below:

- `DNS server`: The name of the DNS server to apply to your domain name.
-`Associated IP (optional)`: IP address (IPv4 or IPv6) of the DNS server entered. You can only enter **one IP address** in this form.

> [!warning]
>
> Each input box (visible in the previous screenshot) can only contain **one** DNS server at a time. A DNS server corresponds to a sidebar.
>
> In addition, an information note with a blue background, located above the first box, indicates the range of DNS servers that you can declare for your domain name. These values vary depending on the domain name extension.

Once you have entered the information, click on the `+`{.action} button to the right of the two forms. You can use it to add the DNS server, and a new entry box will appear beneath the previous one.

Repeat this operation as many times as you have DNS servers to add, within the limits specified in the information note.
Click the `+`{.action} button for each DNS server to confirm entering and adding it.

Once all of your own DNS servers have been added, click `Apply configuration`{.action}. The following window will appear:

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-3-apply-configuration.png){.thumbnail}

It summarizes the DNS server names that will be applied to your domain name.
If they correspond to the ones you want to apply, click `Apply`{.action}.

The old DNS servers that have been declared, and the DNS configuration that they applied, will be disabled for your domain name. The DNS zones on your own DNS servers and on the OVHcloud DNS servers will become the ones active for your domain name.

### Step 3 - Taking into account the modification of the DNS servers

Once you have made your changes, two successive periods must be taken into account:

- The *registry* that manages your domain name extension (for example, the *.fr* extensions registry) must be informed of the DNS change made on the OVHcloud side. Follow the progress of this operation in your [OVHcloud Control Panel](/links/manager). To do this, go to the `Web Cloud`{.action} section, go to the `Domain names`{.action} section in the left-hand column, then click `Ongoing operations`{.action}.
- Once you have updated the *registry* information, please wait a maximum of **48 hours** for the changes to be fully propagated and effective.

## Go further

[Everything you need to know about DNS servers](/pages/web_cloud/domains/dns_server_general_information)

[Everything you need to know about DNS zone](/pages/web_cloud/domains/dns_zone_general_information)

[Everything you need to know about DNS records](/pages/web_cloud/domains/dns_zone_records)

[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit).
 
For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).
 
Join our [community of users](/links/community).