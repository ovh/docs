---
title: "How to check the 'domain name / website' association"
excerpt: "Use our diagnostic tool to verify that your domain name or subdomain is correctly declared with your website on your web hosting"
updated: 2026-05-04
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
</style>

## Objective

You can host multiple websites on a single web hosting plan, even if the domain names are not registered with OVHcloud. You can also associate one or more domain names or subdomains with the same website.

**Use our diagnostic tool to verify that your domain name or subdomain is correctly declared with your website on your web hosting.**

## Requirements

- A compatible [OVHcloud web hosting plan](/links/web/hosting-multisite)
- One or more [domain names](/links/web/domains)
- Access to modify the configuration of the [DNS zones of your domain names](/pages/web_cloud/domains/dns_zone_edit)

<!-- CP-NAV-START:web-hosting -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Hosting plans](/links/control-panel/web-hosting)
- **Navigation path:** `Web Cloud`{.action} > `Hosting plans`{.action} > Select your web hosting plan

---
<!-- CP-NAV-END:web-hosting -->

## Instructions

### Access the diagnostic tool

<!-- CP-STEPS-START:diagnose-website -->
Click on the tabs below to view each of the **4** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Hosting plans](/links/control-panel/web-hosting) page, then select the web hosting plan concerned.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 2**
>> 
>> On the page that pops up, click on the `My sites`{.action} tab.
>> 
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>> 
> **Step 3**
>> 
>> In the table that appears, click on the `>`{.action} button to the left of the name of the website to display the associated domain names or subdomains.
>> 
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>> 
> **Step 4**
>>
>> The domain names or subdomains associated with your website appear. 
>>
>> ![Domains associated websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab-with-domains-associated-displayed.png){.thumbnail}
>>
>> The `Diagnostic` column informs you whether your domain name is correctly pointing to the associated web hosting. It allows you to quickly verify that the DNS configuration of your domain name is correctly set up with your web hosting. This column helps you identify and resolve any potential pointing issues. For each domain name, three diagnostic results are possible:
>>
>> - Green `A/AAAA`
>> - Yellow `A/AAAA`
>> - Grey `A/AAAA`
>>
>> Refer to the "[Interpretation of the diagnostic tool's colours](#interpretation)" section of this guide to find out what these colours mean.
<!-- CP-STEPS-END:diagnose-website -->

<!-- CP-STEPS-START:diagnostic-status-interpretation -->
### Interpretation of the diagnostic tool's colours <a name="interpretation"></a>

**Click on the relevant status indicators below to see their explanations.**

/// details | Green A/AAAA

![A and AAAA green](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/diagnostic-green-info.png){.thumbnail}

When the `A/AAAA` icon is green in the `Diagnostic` column, it means that the **A** record (for IPv4 addresses) and/or the **AAAA** record (for IPv6 addresses) of your domain name is correctly pointing to the IP address of your web hosting. The DNS configuration of your domain name is therefore correct to work with the website on your web hosting.

///

/// details | Yellow A/AAAA

![A and AAAA yellow](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/diagnostic-yellow-info.png){.thumbnail}

When the `A/AAAA` icon is yellow in the `Diagnostic` column, it means that the **A** record (IPv4) and/or **AAAA** record (IPv6) of your domain name is pointing to an IP address, but it is not the one of the web hosting from which you are viewing the `Diagnostic` column.

To resolve DNS issues with your domain name and ensure it correctly points to the desired web hosting, follow the steps described in our guide "[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)".

///

/// details | Grey A/AAAA

![A and AAAA grey](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/diagnostic-grey-info.png){.thumbnail}

When the `A/AAAA` icon is grey in the `Diagnostic` column, it means that the domain name is not currently pointing to any IP address and no **A** (IPv4) or **AAAA** (IPv6) records are configured for this domain name.

To add the **A** and/or **AAAA** records and correctly configure your domain name, follow the steps described in our guide "[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)".

///

<!-- CP-STEPS-END:diagnostic-status-interpretation -->

## Go further

[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

[Publishing a website on your Web Hosting plan](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
