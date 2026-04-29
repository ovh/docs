---
title: "View and manage all your websites from the OVHcloud Control Panel"
excerpt: "Find out how to view and manage all of your websites via the OVHcloud Control Panel"
updated: 2026-05-04
---

## Objective

The interface presented in this guide allows you to centrally display all of your websites, regardless of their associated hosting. It makes it easy to track which features are enabled for each website, and gives quick access to essential actions. This interface is particularly useful for agencies or web professionals who manage a large number of domains spread across several hosting plans.

**Find out how to view and manage all your websites via the OVHcloud Control Panel.**

## Requirements

- An [OVHcloud Web Hosting plan](/links/web/hosting).

<!-- CP-NAV-START:web-website-view -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Websites](/links/control-panel/web-website-view)
- **Navigation path:** `Web Cloud`{.action} > `Websites`{.action} > Select your website

---
<!-- CP-NAV-END:web-website-view -->

## Instructions

<!-- CP-STEPS-START:view-websites -->
Click on the tabs below to view each of the **2** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Websites](/links/control-panel/web-website-view) page. A table appears, listing all your websites and their main information.
>>
>> ![website_view](images/website_view_tab.png){.thumbnail}
>>
> **Step 2**
>>
>> The table shows the following columns:
>>
>> - **Domain name**: shows the main domain name of the website, as configured in the “My sites” tab of your hosting plan.
>> - **Diagnostic**: informs you whether your domain name is correctly pointing to the associated web hosting plan. For more details, refer to our guide “[How to check the domain name / website association?](/pages/web_cloud/web_hosting/my_websites_diagnosis)”.
>> - **Root folder**: indicates the directory on your hosting plan (www, app, public_html, etc.) to which the domain points.
>> - **Service name**: technical name of the service, in the form `FTPlogin.clusterXXX.hosting.ovh.net`.
>> - **Display name**: custom alias to identify your service in the Control Panel.
>> - **Service plan**: type of solution associated with the hosting plan: Starter, Personal, Professional or Performance.
>> - **Git**: shows the status of the Git integration on the website. For more details, refer to our guide “[Configure and use Git with your OVHcloud web hosting plan](/pages/web_cloud/web_hosting/git_integration_webhosting)”.
>> - **Separate logs**: indicates whether a log space is enabled on the domain (OVHcloud domains only). For more information, visit our page “[Monitor and analyse website traffic](/links/web/hosting-traffic-analysis)”.
>> - **CDN**: shows the CDN status: Active / Inactive / N/A (plan not compatible). For more information, visit our page “[Shared CDN](/links/web/hosting-options-cdn)”.
>> - **SSL**: indicates whether SSL is enabled, allowing a secure connection (**https://**). For more information, visit our page “[Secure your OVHcloud website effectively with a premium SSL certificate](/links/web/hosting-options-ssl)”.
>> - **Firewall**: indicates whether the application firewall is enabled on the domain. For more information, visit our page “[Essential options for your web hosting](/links/web/hosting-options)”.
>> - **Boost**: indicates whether the Boost option is enabled, temporarily increasing CPU and RAM resources. For more details, refer to our guide “[Web Hosting - How to change your solution](/pages/web_cloud/web_hosting/how_to_upgrade_web_hosting_offer)”.
>>
>> Clicking on an item in the table redirects you to the relevant [web hosting](/links/control-panel/web-hosting) plan. More specifically:
>>
>> - The **Domain name**, **Diagnostic**, **Root folder**, **Git**, **Separate logs**, **CDN**, **SSL** and **Firewall** columns redirect to the `My sites`{.action} tab.
>> - The **Service name**, **Display name** and **Service plan** columns redirect to the `General information`{.action} tab.
>> - The **Boost** column redirects to the `Boost my hosting plan`{.action} tab.
>>
>> > [!warning]
>> > Separate logs cannot be enabled for an external domain name. This option is only available for domains registered with OVHcloud.
>>
<!-- CP-STEPS-END:view-websites -->

## Go further

For specialized services (SEO, development, etc.), contact the [OVHcloud partners](/links/partner).

If you would like assistance with using and configuring your OVHcloud solutions, we recommend referring to our range of [support solutions](/links/support).

Join our [community of users](/links/community).
