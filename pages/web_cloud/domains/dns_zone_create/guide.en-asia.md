---
title: Creating an OVHcloud DNS zone for a domain name
excerpt: Find out how to create an OVHcloud DNS zone for your domain name via the OVHcloud Control Panel
updated: 2026-03-10
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

The **DNS** (**D**omain **N**ame **S**ystem) zone is a domain name’s configuration file. It consists of DNS **records** that map the domain name to various services and functions.

For more information, please refer to our guides:

- [Everything you need to know about DNS servers](/pages/web_cloud/domains/dns_server_general_information)
- [Everything you need to know about DNS zone](/pages/web_cloud/domains/dns_zone_general_information)
- [Everything you need to know about DNS records](/pages/web_cloud/domains/dns_zone_records)

For a number of reasons, you may need to create a DNS zone for your domain name at OVHcloud.

**This guide explains how to create an OVHcloud DNS zone for your domain name via the OVHcloud Control Panel.**

## Requirements

- You have administrative access to manage your domain name.
- The domain name concerned does not already have an active or inactive DNS zone with OVHcloud, nor is it the subject of an operation or order in progress with OVHcloud.

<!-- CP-NAV-START:web-dns-zone -->
---

### OVHcloud Control Panel Access

- **Direct link:** [DNS zones](/links/control-panel/web-dns-zone)
- **Navigation path:** `Web Cloud`{.action} > `DNS zones`{.action} > Select your domain name

---
<!-- CP-NAV-END:web-dns-zone -->

## Instructions

> [!warning]
>
> You can create multiple DNS zones (from different DNS/hosting providers) for the same domain name. However, you can only have one active DNS zone for your domain name. This restriction is designed to avoid *DNS conflicts*.
>
> You can activate/deactivate a DNS zone by declaring the **DNS servers** of your domain name. You can change this declaration and change the **DNS servers** of a domain name at: 
>
> - The *registrar* registered your domain name.
> - The service provider that manages it, if you use a specialised service provider to manage your domain name.
>
> By modifying the **DNS servers** of a domain name, you disable the configuration of the old DNS zone applied in favour of the configuration of the new DNS zone (present on the new **DNS servers** declared).
>
> Therefore, please check that the configuration of the new DNS zone meets your expectations before changing the **DNS servers** registered with your domain name.
>

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
>> On the page that appears, enter the domain name (for example: *domain.tld*) for which you want to create an OVHcloud DNS zone. Wait a few moments while the tool performs checks on the domain name.
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone.png){.thumbnail}
>>
>> If a message indicates that the DNS zone cannot be created, check that the domain name meets the necessary requirements or contact the person who manages it. Once everything is correct, try the operation again.
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

Now that your domain name’s DNS zone has been created, you can edit it. This step is optional, but it may be necessary if you want to ensure that the services associated with your domain name remain available (e.g. your website and/or emails).

To edit this DNS zone, please read our guide on [Editing a DNS zone at OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

> [!primary]
>
> If you have just created the DNS zone and the domain name does not yet appear in your list of services, wait 15 to 20 minutes, then reload the page.
>

### 3 - Modify the domain name’s DNS servers

Once the OVHcloud DNS zone is ready to be used, activate it by declaring the corresponding DNS servers. First, retrieve the names of the OVHcloud **DNS servers** on which your domain name’s DNS zone was created.

<!-- CP-STEPS-START:retrieve-dns-servers -->
To find them, click on the tabs below to view each of the **2** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [DNS zones](/links/control-panel/web-dns-zone) page, then choose the domain name concerned.
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

Once the two DNS server names have been retrieved, two situations are possible.

> [!primary]
>
> As a reminder, please check that the configuration of the new DNS zone meets your expectations before changing the **DNS servers** registered with your domain name.

**Click on one of the two situations to display the content.**

/// details | The domain name has its active DNS zone with OVHcloud

Refer to [this guide](/pages/web_cloud/domains/dns_server_edit) to verify or modify the DNS servers registered for your domain name.

///

/// details | The domain name has its active DNS zone with another provider

In this specific case, contact your DNS provider and specify that you want to replace the NS-type DNS records for your domain name.

Here is an example of a request to send to your DNS provider:

<pre class="bgwhite"><code>
Hello,

For my domain name <b>domain.tld</b>, I would like to replace the current DNS servers with the following DNS servers:

 - nsXX.ovh.net.
 - dnsXX.ovh.net.

Kind regards,
</code></pre>

In the example above, replace the values **domain.tld**, **nsXX.ovh.net** and **dnsXX.ovh.net** with your own values.

///

After modifying the domain name’s DNS servers, the propagation of changes may take up to **48 hours**.

> [!success]
>
> If you would like to customise the names of the DNS servers associated with your domain name’s active DNS zone, please read our guide "[Customising a domain name’s DNS servers (Glue Records)](/pages/web_cloud/domains/glue_registry)".
>

## Go further

[Everything you need to know about DNS servers](/pages/web_cloud/domains/dns_server_general_information)

[Everything you need to know about DNS zone](/pages/web_cloud/domains/dns_zone_general_information)

[Everything you need to know about DNS records](/pages/web_cloud/domains/dns_zone_records)

[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community). 