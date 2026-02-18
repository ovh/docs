---
title: "Create an OVHcloud DNS zone for a subdomain"
excerpt: "Learn how to create a DNS zone with OVHcloud for a subdomain of a domain name via your customer account"
updated: 2025-04-28
---

## Objective

Would you like to create a DNS zone for a subdomain?

The **D**omain **N**ame **S**ystem (**DNS**) zone of a domain name is its configuration file. It consists of technical information, called *DNS records*. The DNS zone acts as a routing center.

For more information, see our guides below: 

- [All about DNS servers](/pages/web_cloud/domains/dns_server_general_information)
- [All about the DNS zone](/pages/web_cloud/domains/dns_zone_general_information)
- [All about DNS records](/pages/web_cloud/domains/dns_zone_records)

Most often, the DNS records of a subdomain are configured directly from the active DNS zone of the domain name it depends on. However, it is also possible to create a DNS zone specific to a subdomain.

For various reasons, you may need to create a DNS zone for a subdomain with OVHcloud. The subdomain will then have its own zone to configure its DNS records.

> [!success]
>
> To recap :
>
> - A domain name usually has the form **domain.tld**. For example: ovhcloud.com.
> - A subdomain usually has the form **sub.domain.tld**. For example: help.ovhcloud.com.
>
> By default, a subdomain depends on a domain name to function. In practice, you will not be able to use the subdomain **sub.domain.tld** if you do not have access to the management of the domain name **domain.tld**.
>
> If you want to create a DNS zone for a domain name, please refer directly to [this guide](/pages/web_cloud/domains/dns_zone_create).

**Discover how to create a DNS zone with OVHcloud for a subdomain of a domain name via your OVHcloud Control Panel.**

## Requirements

- Possession of the domain name on which the chosen subdomain will depend.
- The concerned subdomain must not already have an active or inactive DNS zone with OVHcloud or be the subject of an ongoing operation or order with OVHcloud.
- Be logged in to your [OVHcloud Control Panel](/links/manager).

## Instructions

### 1 - Create the DNS zone via the OVHcloud Control Panel

> **Step 2**
>>
>> Click on the `DNS Zones`{.action} menu, then on the `Order`{.action} button.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 3**
>>
>> On the page that appears, enter the subdomain (for example: *sub.domain.tld*) for which you want to create an OVHcloud DNS zone. Wait a few moments while the tool performs checks on the subdomain.
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone.png){.thumbnail}
>>
>> If a message indicates that the DNS zone cannot be created, check that the subdomain meets the necessary requirements or contact the person who manages it. Once everything is correct, try the operation again.
>>
> **Step 4**
>>
>> Once the verification is complete, choose to activate or not the minimal entries for the DNS zone you are about to create. This choice is not definitive, you will always be able to [edit the records of the DNS zone](/pages/web_cloud/domains/dns_zone_edit) later on.
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone-step-2.png){.thumbnail}
>>
>> |Activate minimal entries?|Details|
>> |---|---|
>> |Yes|Select **Yes** if you want to customise the DNS zone yourself later on.<br>![minimal-dns-entries](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-minimal-entries.png){.thumbnail}|
>> |No|Select **No** if you plan to use OVHcloud services such as a [web hosting](/links/web/hosting), as the DNS zone will be automatically pre-configured for these services.<br>![no-minimal-dns-entries](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-ovh-full-entries.png){.thumbnail}|
>>
>> Once your choice is made, follow the steps displayed in your OVHcloud Control Panel until the DNS zone is created.

### 2 - Edit the DNS zone (optional)

Now that the DNS zone for your subdomain has been created, you can edit it right away. This operation is optional, but may be necessary if you want to ensure the continuity of the availability of services related to this subdomain (such as a website and/or emails).

To edit this DNS zone, see our guide « [Edit an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit) ».

> [!primary]
>
> If you have just created the DNS zone and the subdomain does not yet appear in your services list (in the `Web Cloud`{.action} section of the OVHcloud Control Panel and then in the `DNS Zones`{.action} section), wait 15 to 20 minutes and then refresh the page.

### 3 - Declare the DNS servers in the active DNS zone of the domain name on which the chosen subdomain depends

The activation of a DNS zone for a subdomain differs from that of a domain name, as a subdomain must depend on a domain name to function.

You must first retrieve the names of the **DNS servers** associated with the DNS zone created for your subdomain.

To find them, click on the tabs below to display successively each of the **3** steps.

**Step 2**
>>
>> Click on the `DNS Zones`{.action} menu, then select the concerned subdomain.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 3**
>>
>> In the table on the page that appears, locate the two **Type** and **Target** columns.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab.png){.thumbnail}
>>
>> Find the two lines of type **NS** and retrieve the two values present in the **Target** column.
>> The names of the DNS servers should be in one of the following three forms :
>>
>> - `nsXX.ovh.net` and `dnsXX.ovh.net` or, `nsXXX.ovh.net` and `dnsXXX.ovh.net` (where each `X` represents a number between **0** and **9**).
>> - `nsXX.ovh.ca` and `dnsXX.ovh.ca` or, `nsXXX.ovh.ca` and `dnsXXX.ovh.ca` (where each `X` represents a number between **0** and **9**).
>> - `ns200.anycast.me` and `dns200.anycast.me` (if you have subscribed to the [DNS anycast](/links/web/domains-Options) option).

Once the two DNS server names are retrieved, two situations are possible :

**Click on one of the two situations to display the content.**

/// details | The domain name on which your subdomain depends has its active DNS zone with OVHcloud

Click on the tabs below to display successively each of the **5** steps.

> **Step 3**
>>
>> On the right or below the table, click on `Add an entry`{.action}.
>>
>> ![dns zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry.png){.thumbnail}
>>
> **Step 4**
>>
>> In the window that opens, select the DNS record of type `NS`{.action}, then click on `Next`{.action}
>>
>> ![dns zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry-to-the-dns-zone.png){.thumbnail}
>>
> **Step 5**
>>
>> Then, in the `Subdomain *` field, enter the concerned subdomain (for example: `sub` for the subdomain `sub.domain.tld`), and in the `Target *` field, one of the two previously retrieved DNS servers (for example: `nsXX.ovh.net`).
>>
>> ![dns zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-a-ns-entry-to-the-dns-zone.png){.thumbnail}
>>
>> Finally, click on `Next`{.action}.
>>
>> Check the summary, then click on `Validate`{.action}.
>>
>> **Repeat all the steps for the second DNS server.**
>>
>> If needed, see our guide « [Edit an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit) » as a complement.

///

/// details | The domain name on which your subdomain depends has its active DNS zone with another provider

In this specific case, contact your DNS provider and specify that you want to add two DNS records of type NS for your subdomain. Here is an example of a request to make to your DNS provider :

<pre class="bgwhite"><code>
Hello,

I would like to add the following NS type DNS records in the active DNS zone of the domain name <b>domain.tld</b> for my subdomain <b>sub.domain.tld</b> :

 - sub IN NS nsXX.ovh.net.
 - sub IN NS dnsXX.ovh.net.

This is to activate a specific DNS zone for my subdomain <b>sub.domain.tld</b>.

Kind regards,
</code></pre>

In the example above, replace the values **domain.tld**, **sub.domain.tld**, **nsXX.ovh.net** and **dnsXX.ovh.net** with your own values.

///

> [!warning]
>
> **The following point of attention does not concern the two DNS records of type NS that you have just added.** 
>
> If other DNS records were present in the active DNS zone of the domain name on which your subdomain depends :
>
> 1. Do not forget to duplicate them in the DNS zone created for your subdomain.
> 2. Once duplicated, remove them from the active DNS zone of your domain name.
>
> Indeed, there could be a conflict in DNS resolution.

After modifying the DNS zone of the domain name on which your subdomain depends, the propagation of the changes can take up to **48 hours**.

## Go further

[Tout savoir sur les serveurs DNS](/pages/web_cloud/domains/dns_server_general_information)

[Tout savoir sur la zone DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Tout savoir sur les enregistrements DNS](/pages/web_cloud/domains/dns_zone_records)

[Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)