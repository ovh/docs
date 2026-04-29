---
title: 'Hosting multiple websites on your Web Hosting plan'
excerpt: 'Find out how to host several websites on your Web Hosting plan'
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

You can host multiple websites on a single web hosting offer, even if the domain names are not registered with OVHcloud.

Would you like to add a new website to your web hosting?

**Discover how to host different websites on your web hosting offer.**

> [!primary]
> If you have already created the website on your web hosting and want to associate it with a new domain name or subdomain, please refer to [this guide](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website) **directly**.

## Requirements

- A compatible [OVHcloud Web Hosting plan](/links/web/hosting-multisite)
- One or more [domain names](/links/web/domains)
- The right to modify your domain name's configuration (the [DNS Zone](/pages/web_cloud/domains/dns_zone_edit))

<!-- CP-NAV-START:web-hosting -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Hosting plans](/links/control-panel/web-hosting)
- **Navigation path:** `Web Cloud`{.action} > `Hosting plans`{.action} > Select your web hosting plan

---
<!-- CP-NAV-END:web-hosting -->

## Instructions

### 1 - Add a website to your web hosting offer

**Click on one of the titles below to view the explanations.**

<a name="add-domain-ovhcloud"></a>

/// details | Add a website with a domain name managed from your OVHcloud Control Panel

This section applies only if the domain name (and/or its active DNS zone) with which you want to create your website is **in your OVHcloud Control Panel**.

<!-- CP-STEPS-START:add-ovhcloud-domain -->
Click on the tabs below to view each of the **7** steps.

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
>> Above and to the left of the table that appears, click on the `Add a site`{.action} button.
>>
>> ![My websites tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
> **Step 4**
>>
>> Tick the `Associate an existing OVHcloud domain`{.action} option and click on `Continue`{.action}.
>>
>> In the **Site name** field, enter the name you want to use for your website. This name will be visible only from the `My sites`{.action} tab of your web hosting.
>>
>> Then select the domain name to associate from the drop-down menu **Domain name - required** that appears below.
>>
>> > [!primary]
>> > To add a subdomain, first select the domain name from the list (e.g., domain.tld). Then tick the `Create a subdomain`{.action} box. A text field appears for you to enter the subdomain (e.g., **sub**.domain.tld).
>> >
>> > **Special case**: `www` subdomains (e.g., **www**.domain.tld) are automatically added as a complement to the domain name. Therefore, it is unnecessary to specify this particular subdomain in the text field.
>>
>> ![Add domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-site-ovh-step-1.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > By default, the **root folder** of your website is automatically created when you add the website to your web hosting. This same **root folder** is also generated in the storage space of your web hosting (accessible via FTP, SFTP or SSH, depending on your offer).
>> >
>> > If you want to customise the name of the **root folder**, especially if the content of your website is already present in a specific folder in your storage space, you can do so by activating the `Advanced configuration`{.action} button.
>>
>> If you wish to customise the name of the root folder or use one of the **Advanced options** available, activate the `Advanced configuration`{.action} button and proceed to **Step 6**. Otherwise, continue directly to **Step 7**.
>>
> **Step 5**
>>
>> > [!primary]
>> >
>> > This step is **optional**. It is intended solely for customers wishing to customise the root folder and/or activate certain features available via the `Advanced configuration`{.action} button.
>> >
>> > **All these features can be activated later once the domain name has been added to your website.** For this, please refer directly to [this guide](/pages/web_cloud/web_hosting/multisites_modify_domain).
>>
>> To customise the name of the root folder that will be associated with your website and will contain its files, enter the desired name in the **Root folder** field.
>>
>> Below you will find a description of the other options. Depending on your [web hosting](/links/web/hosting) offer, some of the options listed below may not be available for selection.
>>
>> ![Add domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-site-ovh-advanced-configurations.png){.thumbnail}
>>
>> |Option|Description|
>> |---|---|
>> |Country IP|Allows you to benefit from a geolocated IP address (from a list of countries) for the selected domain name.<br> Learn more from [this page](/links/web/hosting-options).|
>> |Firewall|Allows you to activate a firewall (filtering and analysis of requests) on the selected domain name.<br> Learn more from [this page](/links/web/hosting-options).|
>> |CDN|Allows you to activate the CDN (caching of static elements of your website, such as images) on the selected domain name.<br> Learn more from [our CDN page](/links/web/hosting-Options-CDN).<br> By activating SSL and the CDN, you will also benefit from the **HTTP/2** protocol (this protocol is activated by default in our Gravelines datacenter).|
>>
>> Once the `Advanced configuration`{.action} button is activated, you can also choose the DNS configuration mode for your domain name:
>>
>> - **For automatic DNS configuration**, leave the `Automatic configuration (recommended)`{.action} box ticked.
>> - **For manual DNS configuration**, tick the `Manual configuration`{.action} box. To complete the configuration of your DNS zone, refer to the following guides:
>>     - [Web Hosting - List of IP addresses by cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
>>     - [Edit an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)
>>
> **Step 6**
>>
>> OVHcloud provides the WordPress, Joomla!, PrestaShop and Drupal modules. They allow you to have a ready-to-use website structure, automatically installed in the root folder configured previously. For more information, please refer to our documentation "[Setting up your website with 1-click modules](/pages/web_cloud/web_hosting/cms_install_1_click_modules)".
>>
>> If you want to install a 1-click module, select your preferred module at the bottom of the page, then proceed to the next step.
>>
>> ![choose module](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-site-choose-1-click-module.png)
>>
>> Conversely, if you want to manually install your website, retrieve its files and upload them to the appropriate root folder on the storage space of your web hosting. For more information, please refer to our documentation "[Publishing a website on your Web Hosting plan](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)".
>>
> **Step 7**
>>
>> Check that all the previously entered information is correct, then click on `Continue`{.action} to finalise the addition of your domain name or subdomain to your website.
>>
>> This addition can take up to one hour.
>>
>> If you have not selected the `Manual configuration`{.action} option in the `Advanced configuration`{.action} section, the DNS configuration will be carried out automatically if the active DNS zone of your domain name is managed in your OVHcloud Control Panel.
>>
>> Otherwise, refer to the following guides to manually configure your DNS zone:
>>
>> - [Web Hosting - List of IP addresses by cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
>> - [Edit an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)
>>
>> > [!primary]
>> > Modifying the DNS configuration of your domain name requires a propagation delay that can take up to 24 hours before it is fully effective.
<!-- CP-STEPS-END:add-ovhcloud-domain -->

///

/// details | Add a website with a domain name not managed from your OVHcloud Control Panel

This section applies only if you want to add a website with a domain name that is not present in your OVHcloud account. It may be a domain name in another OVHcloud account or registered with another provider.

<!-- CP-STEPS-START:add-external-domain -->
Click on the tabs below to view each of the **7** steps.

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
>> Above and to the left of the table that appears, click on the `Add a site`{.action} button.
>>
>> ![My websites tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
> **Step 4**
>>
>> Tick the `Associate an external domain`{.action} option and click on `Continue`{.action}.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-1.png){.thumbnail}
>>
> **Step 5**
>>
>> In the **Site name** field, enter the name you want to use for your website. This name will be visible only from the `My sites`{.action} tab of your web hosting.
>>
>> Then enter the domain name (e.g., domain.tld) or the subdomain (e.g., **sub**.domain.tld) to associate in the **Domain name - required** field that appears below.
>>
>> > [!success]
>> >
>> > **Special case**: `www` subdomains (e.g., **www**.domain.tld) are automatically added as a complement to the domain name. Therefore, it is unnecessary to specify this particular subdomain in the text field.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-site-external-step-2.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > By default, the **root folder** of your website is automatically created when you add the website to your web hosting. This same **root folder** is also generated in the storage space of your web hosting (accessible via FTP, SFTP or SSH, depending on your offer).
>>
>> To customise the name of the root folder that will be associated with your website and will contain its files, enter the desired name in the **Root folder** field. If you do not wish to customise it, leave the field empty.
>>
>> Once the information is completed, click on the `Continue`{.action} button.
>>
> **Step 6**
>>
>> > [!primary]
>> >
>> > Unlike domain names directly managed from your OVHcloud Control Panel, the **Advanced options** are not directly available when adding a website with a domain name or subdomain not managed from your OVHcloud account.
>> >
>> > However, **all these features can be activated or modified later once the domain name or external subdomain has been added to your website.** For this, please refer directly to [this guide](/pages/web_cloud/web_hosting/multisites_modify_domain).
>>
>> Adding a website with an external domain name to OVHcloud requires an additional mandatory validation. This allows us to ensure that the addition of the external domain name is legitimate. A message will then ask you to modify the DNS configuration of the domain name.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-3.png){.thumbnail}
>>
>> Take note of the elements displayed, then click on the `Continue`{.action} button. From then on, the domain name is temporarily added, giving you time to modify its DNS configuration.
>>
>> > [!warning]
>> >
>> > You must make these changes **quickly** for your domain name to be correctly associated with your website. Without this action, the addition of your domain name will be cancelled and your recently created website will not be accessible.
>> >
>> > The DNS entries of type **A** and **TXT** must be placed in the active DNS zone of your domain name for it to be associated with your website. Only the DNS entries of type **AAAA** are optional.
>> >
>> > Note that if you wish to associate `sub.domain.tld`, you will need to create the `ovhcontrol.domain.tld` TXT entry and not the `ovhcontrol.sub.domain.tld` entry.
>> >
>> > To find the active DNS zone of your domain name, find the [DNS servers](/pages/web_cloud/domains/dns_server_edit) to which it is linked. You will only need to validate the domain name using the **TXT** field, not all its subdomains.
>>
> **Step 7**
>>
>> OVHcloud provides the WordPress, Joomla!, PrestaShop and Drupal modules. They allow you to have a ready-to-use website structure, automatically installed in the root folder configured previously. For more information, please refer to our documentation "[Setting up your website with 1-click modules](/pages/web_cloud/web_hosting/cms_install_1_click_modules)".
>>
>> If you want to install a 1-click module, select your preferred module at the bottom of the page, then click on `Continue`{.action} to finalise the request to add your website to your web hosting.
>>
>> ![choose module](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-site-choose-1-click-module.png)
>>
>> Conversely, if you want to manually install your website, retrieve its files and upload them to the appropriate root folder on the storage space of your web hosting. For more information, please refer to our documentation "[Publishing a website on your Web Hosting plan](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)".
<!-- CP-STEPS-END:add-external-domain -->

///

/// details | Add a website with a new domain name that has not yet been registered

This section applies only if you want to add a website with a domain name that has not yet been registered, either with OVHcloud or with another registrar. In other words, it concerns domain names that have not yet been subscribed to.

<!-- CP-STEPS-START:add-site-1click-module -->
Click on the tabs below to view each of the **5** steps.

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
>> Above and to the left of the table that appears, click on the `Add a site`{.action} button.
>>
>> ![My websites tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
> **Step 4**
>>
>> Tick the `Order a new domain`{.action} option and click on `Continue`{.action}.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-new-step-1.png){.thumbnail}
>>
> **Step 5**
>>
>> You are then redirected to our commercial page for domain name subscription. Choose your new domain name according to market availability. Then follow the instructions in the order process until the order confirmation. This without subscribing to a new web hosting plan in addition.
>>
>> Once your order is paid and validated, wait a few moments for it to be processed.
>>
>> > [!primary]
>> >
>> > Once your domain name appears in your OVHcloud Control Panel, follow the section "[Add a domain name managed from your OVHcloud Control Panel](#add-domain-ovhcloud)" of this guide to add your website to your web hosting.
<!-- CP-STEPS-END:add-site-1click-module -->

///

### 2 - Put your website online <a name="site-online"></a>

Once the website is declared with your domain name on your web hosting, you can put the content of your website online. As a reminder, you must perform this operation in the **root folder** that you defined when adding the website in your OVHcloud Control Panel.

> [!primary]
>
> If you wish to add multiple websites, repeat the actions described in this guide.
>
> We recommend that you be careful about the number of websites on your web hosting. The higher the number, the more your allocated resources will be used. [Our web hosting offers page](/links/web/hosting) indicates the recommended number of websites you can host on your web hosting.

## Go further

[Setting up your website with 1-click modules](/pages/web_cloud/web_hosting/cms_install_1_click_modules)

[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

[Publishing a website on your Web Hosting plan](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
