---
title: 'Editing the DNS servers for an OVHcloud domain name'
excerpt: 'Find out how to modify DNS servers via the OVHcloud Control Panel'
updated: 2023-08-25
---

## Objective

### Understanding DNS 

The abbreviation DNS, meaning **D**omain **N**ame **S**ystem, is a set of elements (DNS servers, DNS zones, etc.) that allow you to match a domain name to an IP address.

### DNS servers 

**DNS servers** contain DNS configuration files for domain names, called **DNS zones**.

A DNS zone contains technical information, called *DNS records*. The DNS zone is like a referral center.

For example, you can specify:

- The IP address (DNS records of type *A* and *AAAA*) of your web hosting plan to display your website with your domain name.
- The email servers (DNS records of type *MX*) to which your domain name must redirect the emails it receives. This allows you to view them on your custom email address(es) with your domain name.
- Information related to the security/authentication of your services (web hosting, web server, email server, etc.) associated with your domain name (DNS records of type *SPF*, *DKIM*, *DMARC*, etc.).

For more information on DNS zones, please read our guide on [Editing an OVHcloud DNS zone](/pages/web/domains/dns_zone_edit) .

As a result, the **DNS servers** must be registered with the domain name in order to use the DNS zone they host. 

![DNS](images/dnsserver.png){.thumbnail}

The **DNS servers** usually work in pairs:

- A *primary* DNS server that redirects request streams received by the domain name to the DNS zone it hosts for the domain name. The DNS zone then performs the *DNS resolution* to redirect traffic to the correct services (servers, website, emails, etc.) associated with the domain name.
- A *secondary* DNS server called *backup* is used if the *primary* server is full, unavailable or responds less quickly than the *secondary* server.

Sometimes, some DNS providers offer more than 2 **DNS servers** to declare with your domain name. In this case, enter all of the DNS servers offered by your DNS provider.

**Find out how to modify the DNS servers for your OVHcloud domain name.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Requirements

- a [domain name](https://www.ovhcloud.com/en-gb/domains/) registered with OVHcloud.
- You must have the appropriate permissions [to manage](/pages/account/customer/managing_contacts) the domain name from your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external}.
- You must be logged in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external}.

> [!primary]
>
> A *registrar* is an organization authorized to sell domain names. OVHcloud is one of these *registrars*.
>
> If your domain name is not registered with OVHcloud, you will need to modify the DNS servers at the *registrar* where your domain name is currently registered.
>

## Instructions

> [!warning]
>
> **Be careful when you modify a domain name’s DNS servers.** A configuration error may make your website inaccessible, or prevent your email addresses from receiving new emails. By learning more about the consequences of modifying your DNS zone, you can get a better understanding of the changes you will make.
>

When you modify your domain name’s DNS servers, you are changing its DNS configuration. The new DNS configuration replaces the old one and is stored on the newly-defined DNS servers. Technically, the domain name then uses a new DNS zone.

However, it is important to note that:

- When changing DNS servers (e.g. External DNS via OVHcloud DNS), the content of the old configuration/DNS zone is not automatically replicated in the new one. Ensure that your new DNS zone contains all of the DNS records required for the services associated with your domain name to work correctly (for example, your website and email addresses).

- If you would like to modify one or more of the records in your current configuration/DNS zone instead of the DNS servers, please read our guide on [Editing an OVHcloud DNS zone](/pages/web/domains/dns_zone_edit) .

- Some organizations, registries, that manage domain name extensions, have specific requirements regarding DNS servers (quantity of name servers, value of records, etc.). If in doubt, check with the registry responsible for the domain.

Please ensure that the changes you have made will not render your domain name inaccessible. If you are unsure about this, contact the person who is asking you to make these changes.


### Access OVHcloud DNS server management

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external} , then go to the `Web Cloud`{.action} section. In the left-hand column, click `Domain names`{.action} , then choose the domain name concerned. Then select the `DNS servers`{.action} tab.

The table that opens will contain the DNS servers currently set by OVHcloud for your domain name. Several DNS servers can be listed, each with its own row in the table.

> [!primary]
>
> When you use the OVHcloud DNS servers, the numbers in the server names have no link to the service(s) you are using. Only the [Anycast DNS](https://www.ovhcloud.com/en-gb/domains/options/) option  uses specific DNS servers that are automatically assigned to you. 

![dnsserver](images/edit-dns-server-ovh-step1.png){.thumbnail}

### Modify DNS servers

If you would like to use external DNS servers, you will need to replace them with OVHcloud DNS servers, and not add them up.

Click `Modify DNS servers`{.action} on the right.

In the data forms, **replace** the current DNS server values with the information about the new DNS servers you want to set. To add other servers to the active list, click the `+`{.action} button to the right of the last table row. An additional row will appear in the table, which you can complete.

> [!warning]
>
> Be careful not to mix one DNS server group with another. 
>
> For example, *dns19.ovh.net* and *ns19.ovh.net* correspond to a group of OVHcloud DNS servers, they go hand-in-hand, and they are synchronized. If you add DNS servers external to OVHcloud (or from a different OVHcloud group), the DNS will be resolved randomly between the OVHcloud DNS servers and the external DNS servers entered.
>
> At OVHcloud, DNS server groups are identified using the number in the server names. Two OVHcloud DNS servers are part of the same server group, as long as they share the same number. For example, *dns19.ovh.net* and *ns19.ovh.net*.
>

Once you have entered this information, click `Apply configuration`{.action}. The statuses of the DNS servers will then be updated in the table, and will display the new information you have just provided.

![dnsserver](images/edit-dns-server-ovh-step2.png){.thumbnail}

> [!success]
>
> Modifying the DNS servers associated with a domain name will take between **24** and **48** hours to propagate fully.
>

#### Special case: Reset the DNS servers 

The `Reset the DNS servers`{.action} button allows you to reset your current DNS servers by automatically replacing them with the original OVHcloud DNS servers. Use this option **only** if you would like to reuse the OVHcloud DNS servers (and the OVHcloud DNS zone associated with its DNS servers). 

![dnsserver](images/edit-dns-server-ovh-step3.png){.thumbnail}

Once you have made the required changes, you must wait for them to become fully effective. Two successive periods must be taken into account:

- the modification made on the OVHcloud side must be taken into account by the *registry* that manages your domain name extension (for example, the registry of extensions in *.uk*). You can track the progress of this operation in your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external}.
To do this, go to the `Web Cloud`{.action} section, go to the `Domain names`{.action} section in the left-hand column, then click `Ongoing operations`{.action};
- Once the change has been processed by the organization that manages your domain name extension, you must wait a maximum of **48 hours** for the changes you have made to be fully propagated.

## Go further

[Modify an OVHcloud DNS zone](/pages/web/domains/dns_zone_edit).

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-gb/directory/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-gb/support-levels/).

Join our community of users on <https://community.ovh.com/en/>. 