---
title: "Everything you need to know about DNS servers"
excerpt: "Find out what DNS servers do, what they contain, and how they work with a domain name"
updated: 2024-06-17
---

## Objective

**DNS** means **D**omain **N**ame **S**ystem and is a set of elements (DNS servers, DNS zones, etc.) that map a domain name to an IP address.

**This guide explains what DNS servers do, what they contain, and how they work with a domain name.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Instructions

### Role of DNS servers

All the **DNS servers** together form what is called the DNS network.

This DNS network makes it easier for users to access the Internet and the various services associated with it (websites, online messaging services, etc.).

They allow you to use [domain names](/links/web/domains) to access your favorite website, without having to remember the IP address of the server that hosts it.

![DNS resolution](/pages/assets/schemas/domains/dns-resolution.png){.thumbnail}

There are 4 types of DNS servers.

Below is a table showing these 4 types of DNS servers and how they interact. The examples given in the table will be based on a DNS request sent from a web browser to find the IP address of the website *domain.tld*.

|DNS Server Type|Description|Example|
|---|---|---|
|DNS resolver (or recursive DNS)|The first server to receive the DNS request from a client (web browser, email software, and so on). This step is represented by step **1** of the diagram above. This server acts as a gateway between the client and the rest of the DNS network. It queries the other three types of DNS server until it retrieves the IP address, requested by the DNS request, from the reference DNS server. The client sends the DNS query to find the IP address of the domain name *domain.tld*. |The web browser sends a DNS query for the IP address of the domain name *domain.tld*. This will show you the server hosting the website linked to the domain name *domain.tld*.|
|Root DNS server|Contains a directory for all TLDs (TLDs such as *.com*, *.net*, *.uk*, etc.). It will inform the DNS resolver of the address of the DNS TLD server corresponding to the extension present in the DNS query requested by the client (steps **2** and **3** of the above schema).|The DNS resolver forwards the DNS query it has received for *domain.tld* to the root DNS server and receives in response the address of the DNS TLD server that manages the *.tld* extension.|
|DNS servers for extensions/top-level domain names (TLD DNS)|Contains a domain name directory for a given extension. It will inform the DNS resolver of the reference DNS server address corresponding to the domain name present in the DNS query requested by the client (steps **4** and **5** of the above schema).|The DNS resolver then forwards the DNS query it has received for *domain.tld* to the TLD DNS server that manages the extensions in *.tld* and receives in response the address of the reference DNS server that manages the DNS zone of the domain name *domain.tld*.|
|Authoritative DNS|The last DNS server queried by the DNS resolver (steps **6** and **7** in the diagram above). It contains the active DNS zone for the domain name present in the DNS query requested by the customer. The content of this type of DNS server will be detailed later in this guide.|The DNS resolver then forwards the DNS request it received for *domain.tld* to the authoritative DNS server that manages the DNS zone for the domain name *domain.tld*, and in response receives the IP address (example 203.0.113.0) of the server that hosts the website for the domain name *domain.tld*.|

Once the DNS resolver has retrieved the IP address of the server searched via the DNS request requested by the client, it returns this IP address to the client (step **8** of the diagram above).

The client then sends another request directly to the server associated with the IP address retrieved using the DNS resolution (step **9** of the diagram above). This allows them to connect to it or retrieve the elements they need to resolve this second request (step **10** of the diagram above). In our example, the client (web browser) queries the server with the IP address 203.0.113.0 to retrieve the content to be displayed for the *domain.tld* website.

Please refer to our guide on [Modifying the DNS servers for an OVHcloud domain name](/pages/web_cloud/domains/dns_server_edit) if you need to perform this action for a domain name registered with OVHcloud.

### Contents of a DNS server (Authoritative)

A **DNS server (Authoritative)** contains a domain name directory that can have different extensions (TLDs).

For each domain name in the directory, there is a **DNS zone** associated with it, which contains the DNS configuration to be applied to the domain name.

A DNS zone contains technical information, called *DNS records*.

> [!success]
>
> - For more information on DNS zones, please refer to our guide “[Everything you need to know about DNS zone](/pages/web_cloud/domains/dns_zone_general_information)”.
> - Then refer to our guide on [DNS records](/pages/web_cloud/domains/dns_zone_records) for a better understanding of everything.
>

As a result, the **DNS servers (Authoritative)** must be registered (with a domain name registrar) in order to use the DNS zone they host.

![DNS](/pages/assets/schemas/domains/dns-server.png){.thumbnail}

### How an Authoritative DNS server works with a domain name

#### Declaring DNS servers (Authoritative) with a domain name registrar

For the DNS zone associated with a domain name in a DNS server’s directory to be active, it is necessary for this DNS server to be declared to the domain name registrar.

As a precaution, we declare at least 2 **Authoritative DNS servers** (a primary DNS server and a secondary DNS server) with a domain name registrar. Both work in the same way. However, if one of them responds faster, it will be queried by the DNS resolvers as a priority. If one of them does not respond, the other DNS server will be there to respond to the DNS request.

Some DNS providers offer more than 2 **DNS servers (Authoritative)** to declare with your domain name. In this case, enter all of the DNS servers offered by your DNS provider.

## Go further

[Everything you need to know about DNS zone](/pages/web_cloud/domains/dns_zone_general_information)

[Everything you need to know about DNS records](/pages/web_cloud/domains/dns_zone_records)

[Modify the DNS servers of an OVHcloud domain name](/pages/web_cloud/domains/dns_server_edit)

[Modify an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).
 
Join our [community of users](/links/community).