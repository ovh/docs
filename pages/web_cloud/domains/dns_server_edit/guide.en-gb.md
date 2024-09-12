---
title: 'Editing the DNS servers for an OVHcloud domain name'
excerpt: 'Find out how to modify DNS servers via the OVHcloud Control Panel'
updated: 2024-09-16
---

## Objective

**DNS** means **D**omain **N**ame **S**ystem and is a set of elements (DNS servers, DNS zones, etc.) that map a domain name to an IP address.

Refer to our guides “[Everything you need to know about DNS servers](/pages/web_cloud/domains/dns_server_general_information)” and “[Everything you need to know about DNS zone](/pages/web_cloud/domains/dns_zone_general_information)” for more information.

**This guide explains how to modify the DNS servers for your OVHcloud domain name.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Requirements

- A [domain name](/links/web/domains) registered with OVHcloud
- The appropriate permissions [to manage](/pages/account_and_service_management/account_information/managing_contacts) the domain name from your [OVHcloud Control Panel](/links/manager){.external}
- Access to the [OVHcloud Control Panel](/links/manager){.external}

> [!primary]
>
> A **registrar** is an organisation authorized to sell domain names. OVHcloud is one of these **registrars**.
>
> If your domain name is not registered with OVHcloud, you will need to modify the DNS servers at the **registrar** where your domain name is currently registered.
>

## Instructions

> [!warning]
>
> **Be careful when you modify a domain name’s DNS servers.** A misconfiguration may make your website inaccessible, or prevent your email addresses from receiving new emails. By learning more about the consequences of modifying your DNS zone, you can get a better understanding of the changes you will make.
>

When you modify your domain name’s DNS servers, you are changing its DNS configuration. The new DNS configuration replaces the old one and is stored on the newly-defined DNS servers. Technically, the domain name then uses a new DNS zone.

However, it is important to note that:

- When changing DNS servers (from external DNS to OVHcloud DNS, for example), the content of the old DNS zone is not automatically replicated in the new one. Ensure that your new DNS zone contains all of the DNS records required for the services associated with your domain name to work correctly (for example, your website and email addresses).

- If you would like to modify one or more of the records in your current configuration/DNS zone instead of the DNS servers, please read our guide on [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit).

- Some of the organisations that manage domain name extensions (registries) have specific requirements regarding DNS servers (quantity of name servers, value of records, etc.). If in doubt, check with the registry responsible for the domain name extension.

Please ensure that the changes you have made will not render your domain name inaccessible. If you are unsure about this, contact the person who is asking you to make these changes.

### Accessing OVHcloud DNS server management

Log in to your [OVHcloud Control Panel](/links/manager){.external}, then go to the `Web Cloud`{.action} section. In the left-hand column, click `Domain names`{.action}, then choose the domain name concerned. Then select the `DNS servers`{.action} tab.

The table that opens will contain the DNS servers currently set by OVHcloud for your domain name. Several DNS servers can be listed, each with its own row in the table.

> [!primary]
>
> When you use the OVHcloud DNS servers, the numbers in the server names have no link to the service(s) you are using. Only the [Anycast DNS](/links/web/domains-options) option uses specific DNS servers that are automatically assigned to you.

![dns-server](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}

### Modifying DNS servers

If you wish to use external DNS servers, you must replace the OVHcloud DNS servers with these external DNS servers, and not add the two together.

Click `Modify DNS servers`{.action} on the right.

In the text fields, **replace** the current DNS server values with the information about the new DNS servers you want to set. To add other servers to the active list, click the `+`{.action} button to the right of the last table row. An additional row will appear in the table, which you can fill in.

> [!warning]
>
> Be careful not to mix one DNS server group with another. 
>
> For example, *dns19.ovh.net* and *ns19.ovh.net* correspond to a group of OVHcloud DNS servers, they go hand-in-hand, and they are synchronised. If you add DNS servers external to OVHcloud (or from a different OVHcloud group), the DNS resolution will switch randomly between the OVHcloud DNS servers and the external DNS servers.
>
> At OVHcloud, DNS server groups are identified by the number in the server names. Two OVHcloud DNS servers are part of the same server group, as long as they share the same number. For example, *dns19.ovh.net* and *ns19.ovh.net*.
>

Once you have entered this information, click `Apply configuration`{.action}. The statuses of the DNS servers will then be updated in the table, and will display the new information you have just provided.

![dns-server](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/edit-dns-servers.png){.thumbnail}

> [!success]
>
> Modifying the DNS servers associated with a domain name will take between **24** and **48** hours to propagate fully.
>

#### Special case: Resetting the DNS servers 

The `Reset the DNS servers`{.action} button allows you to reset your current DNS servers by automatically replacing them with the original OVHcloud DNS servers. Use this option **only** if you would like to use the OVHcloud DNS servers (and the OVHcloud DNS zone associated with its DNS servers). 

![dns-server](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/reset-the-dns-servers.png){.thumbnail}

Once you have made the required changes, you must wait for them to become fully effective. Two successive periods must be taken into account:

- The modification made on the OVHcloud side must be taken into account by the *registry* that manages your domain name extension (for example: the registry of *.uk* extensions). You can track the progress of this operation in your [OVHcloud Control Panel](/links/manager){.external}. To do this, go to the `Web Cloud`{.action} section, go to the `Domain names`{.action} section in the left-hand column, then click `Ongoing operations`{.action}.
- Once the change has been processed by the organisation that manages your domain name extension, you must wait a maximum of **48 hours** for the changes you have made to be fully propagated.

## Go further

[Everything you need to know about DNS servers](/pages/web_cloud/domains/dns_server_general_information)

[Everything you need to know about DNS zone](/pages/web_cloud/domains/dns_zone_general_information)

[Everything you need to know about DNS records](/pages/web_cloud/domains/dns_zone_records)

[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).
 
Join our [community of users](/links/community).