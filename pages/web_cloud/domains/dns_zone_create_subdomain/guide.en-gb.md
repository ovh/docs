---
title: "Create an OVHcloud DNS zone for a subdomain"
excerpt: "Find out how to create a DNS zone with OVHcloud for a subdomain of a domain name via your customer account"
updated: 2026-02-19
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
pre {
    font-size: 14px !important;
}
pre.bgwhite {
    background-color: #fff !important;
    color: #000 !important;
    font-family: monospace !important;
    padding: 5px !important;
    margin-bottom: 5px !important;
}
pre.bgwhite code {
    background-color: #fff !important;
    border: solid 0px transparent !important;
    font-family: monospace !important;
    font-size: 0.90em !important;
    color: #000 !important;
}
.small {
   font-size: 0.90em !important;
}
</style>

## Objective

Would you like to create a DNS zone for a subdomain?

The **DNS** (**D**omain **N**ame **S**ystem) zone is a domain name’s configuration file. It consists of technical information, called *DNS records*. The DNS zone acts as a routing center.

For more information, please refer to our guides:

- [Everything you need to know about DNS servers](/pages/web_cloud/domains/dns_server_general_information)
- [Everything you need to know about DNS zones](/pages/web_cloud/domains/dns_zone_general_information)
- [Everything you need to know about DNS records](/pages/web_cloud/domains/dns_zone_records)

Most often, the DNS records of a subdomain are configured directly from the active DNS zone of the domain name it depends on. 
However, it is also possible to create a DNS zone specific to a subdomain.

For various reasons, you may need to create a DNS zone for a subdomain with OVHcloud.
The subdomain will then have its own zone to configure its DNS records.

> [!success]
>
> To recap:
>
> - A domain name usually has the form **domain.tld**. For example: ovhcloud.com.
> - A subdomain usually has the form **sub.domain.tld**. For example: help.ovhcloud.com.
>
> By default, a subdomain depends on a domain name to function.
> In practice, you will not be able to use the subdomain **sub.domain.tld** if you do not have access to the management of the domain name **domain.tld**.
>
> If you want to create a DNS zone for a domain name, please refer directly to [this guide](/pages/web_cloud/domains/dns_zone_create).

**Find out how to create a DNS zone with OVHcloud for a subdomain of a domain name via your OVHcloud Control Panel.**

## Requirements

- You can administrate the domain name on which the chosen subdomain will depend.
- The concerned subdomain must not already have an active or inactive DNS zone with OVHcloud or be the subject of an ongoing operation or order with OVHcloud.

<!-- CP-NAV-START:web-dns-zone -->
---

### OVHcloud Control Panel Access

- **Direct link:** [DNS zones](/links/control-panel/web-dns-zone)
- **Navigation path:** `Web Cloud`{.action} > `DNS zones`{.action} > Select your domain name

---
<!-- CP-NAV-END:web-dns-zone -->

## Instructions

### 1 - Create the DNS zone via the OVHcloud Control Panel

<!-- CP-STEPS-START:create-dns-zone -->
Click on the tabs below to view each of the **3** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [DNS zones](/links/control-panel/web-dns-zone) page, then on the `Order`{.action} button.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 2**
>>
>> On the page that appears, enter the subdomain (for example: *sub.domain.tld*) for which you want to create an OVHcloud DNS zone. Wait a few moments while the tool performs checks on the subdomain.
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone.png){.thumbnail}
>>
>> If a message indicates that the DNS zone cannot be created, check that the subdomain meets the necessary requirements or contact the person who manages it. Once everything is correct, try the operation again.
>>
> **Step 3**
>>
>> Once the verification is complete, choose whether to enable the minimum records for the DNS zone you are going to create. This choice is not definitive, as you can always [edit DNS zone records](/pages/web_cloud/domains/dns_zone_edit) later.
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone-step-2.png){.thumbnail}
>>
>> |Enable minimal entries?|Details|
>> |---|---|
>> |Yes|Select this option if you would like to customise the DNS zone yourself at a later stage.<br>![minimal-dns-entries](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-minimal-entries.png){.thumbnail}|
>> |No|Select this option if you plan to use OVHcloud services as a [web hosting](/links/web/hosting), with the zone preconfigured for this purpose.<br>![no-minimum-dns-entries](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-ovh-full-entries.png){.thumbnail}|
>>
>> Once your choice is made, follow the steps displayed in your OVHcloud Control Panel until the DNS zone is created.
<!-- CP-STEPS-END:create-dns-zone -->

### 2 - Edit the DNS zone (optional)

Now that your subdomain’s DNS zone has been created, you can edit it. This step is optional, but it may be necessary if you want to ensure that the services associated with your subdomain remain available (e.g. your website and/or emails).

To edit this DNS zone, please read our guide on [Editing a DNS zone at OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

> [!primary]
>
> If you have just created the DNS zone and the subdomain does not yet appear in your list of services, wait 15 to 20 minutes, then reload the page.

### 3 - Declare the DNS servers in the active DNS zone of the domain name on which the chosen subdomain depends

The activation of a DNS zone for a subdomain differs from that of a domain name, as a subdomain must depend on a domain name to function.

You must first retrieve the names of the **DNS servers** associated with the DNS zone created for your subdomain.

<!-- CP-STEPS-START:retrieve-dns-servers -->
To find them, click on the tabs below to view each of the **2** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [DNS zones](/links/control-panel/web-dns-zone) page, then choose the subdomain concerned.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 2**
>>
>> In the table on the page that appears, locate the two **Type** and **Target** columns.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab.png){.thumbnail}
>>
>> Find the two lines of type **NS** and retrieve the two values present in the **Target** column.
>> The names of the DNS servers should be in one of the following three forms:
>>
>> - `nsXX.ovh.net` and `dnsXX.ovh.net` or, `nsXXX.ovh.net` and `dnsXXX.ovh.net` (where each `X` represents a number between **0** and **9**).
>> - `nsXX.ovh.ca` and `dnsXX.ovh.ca` or, `nsXXX.ovh.ca` and `dnsXXX.ovh.ca` (where each `X` represents a number between **0** and **9**).
>> - `ns200.anycast.me` and `dns200.anycast.me` (if you have subscribed to the [DNS anycast](/links/web/domains-options) option).
<!-- CP-STEPS-END:retrieve-dns-servers -->

Once the two DNS server names are retrieved, two situations are possible:

**Click on one of the two situations to display the content.**

/// details | The domain name on which your subdomain depends has its active DNS zone with OVHcloud

<!-- CP-STEPS-START:add-ns-records-ovhcloud -->
Click on the tabs below to view each of the **4** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [DNS zones](/links/control-panel/web-dns-zone) page, then choose the subdomain concerned.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 2**
>>
>> On the right or below the table, click on `Add an entry`{.action}.
>>
>> ![dns zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry.png){.thumbnail}
>>
> **Step 3**
>>
>> In the window that opens, select the DNS record of type `NS`{.action}, then click on `Next`{.action}
>>
>> ![dns zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry-to-the-dns-zone.png){.thumbnail}
>>
> **Step 4**
>>
>> Then, in the `Sub-domain *` field, enter the concerned subdomain (for example: `sub` for the subdomain `sub.domain.tld`), and in the `Target *` field, one of the two previously retrieved DNS servers (for example: `nsXX.ovh.net`).
>>
>> ![dns zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-a-ns-entry-to-the-dns-zone.png){.thumbnail}
>>
>> Finally, click on `Next`{.action}.
>>
>> Check the summary, then click on `Confirm`{.action}.
>>
>> **Repeat all the steps for the second DNS server.**
>>
>> If needed, see our guide "[Editing a DNS zone at OVHcloud](/pages/web_cloud/domains/dns_zone_edit)" as a complement.
<!-- CP-STEPS-END:add-ns-records-ovhcloud -->

///

/// details | The domain name on which your subdomain depends has its active DNS zone with another provider

In this specific case, contact your DNS provider and specify that you want to add two DNS records of type NS for your subdomain.

Here is an example of a request to make to your DNS provider:

<pre class="bgwhite"><code>
Hi,

I would like to add the following NS type DNS records in the active DNS zone of the domain name <b>domain.tld</b> for my subdomain <b>sub.domain.tld</b> :

 - sub IN NS nsXX.ovh.net.
 - sub IN NS dnsXX.ovh.net.

This is to activate a specific DNS zone for my subdomain <b>sub.domain.tld</b>.

Best regards,
</code></pre>

In the example above, replace the values **domain.tld**, **sub.domain.tld**, **nsXX.ovh.net** and **dnsXX.ovh.net** with your own values.

///

> [!warning]
>
> **The following point of attention does not concern the two DNS records of type NS that you have just added.** 
>
> If other DNS records were present in the active DNS zone of the domain name on which your subdomain depends:
>
> 1. Do not forget to duplicate them in the DNS zone created for your subdomain.
> 2. Once duplicated, remove them from the active DNS zone of your domain name.
>
> Indeed, there could be a conflict in DNS resolution.

After modifying the DNS zone of the domain name on which your subdomain depends, the propagation of the changes can take up to **48 hours**.

## Go further

[Everything you need to know about DNS servers](/pages/web_cloud/domains/dns_server_general_information)

[Everything you need to know about DNS zone](/pages/web_cloud/domains/dns_zone_general_information)

[Everything you need to know about DNS records](/pages/web_cloud/domains/dns_zone_records)

[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community). 