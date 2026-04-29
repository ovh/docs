---
title: "How to modify the root folder of an existing website?"
excerpt: "Find out how to modify the root folder declared for an existing website on your web hosting plan from your OVHcloud Control Panel"
updated: 2026-05-04
---

## Objective

You can host several websites on the same web hosting plan, even if the domain names are not registered with OVHcloud. You can also associate one or more domain names or subdomains with the same website.

When using your services, you may need to:

- Replace the entire content of an existing website, without removing it from your web hosting plan. All done without any access interruption and in complete transparency for your website visitors.
- Install a [1-click module](/pages/web_cloud/web_hosting/cms_install_1_click_modules) or [another CMS](/pages/web_cloud/web_hosting/cms_manual_installation) to replace the content of an existing website, without deleting the old content from your web hosting plan. In this case, you then need to build the different pages of your new website via your web browser.
- Reorganise the root folder names of your websites in your web hosting plan's storage space without cutting access to your different websites.

**Find out how to modify the root folder declared for an existing website on your web hosting plan from your OVHcloud Control Panel.**

> [!primary]
> This procedure applies to the [new version of the OVHcloud Control Panel](/links/control-panel-ovhcloud), currently available in beta. To follow it, switch to this interface from your usual Control Panel.
>
> If you have not yet created the website concerned on your web hosting plan, refer **directly** to [this guide](/pages/web_cloud/web_hosting/multisites_configure_multisite).
>
> If your website has a Git configuration, first refer to our guide on [Configuring and using Git with your OVHcloud web hosting plan](/pages/web_cloud/web_hosting/git_integration_webhosting) to remove the Git association **before** continuing. The root folder modification is unavailable if your website is configured with Git. If that were the case, changing the root folder would disrupt the Git association.

## Requirements

- A compatible [OVHcloud web hosting plan](/links/web/hosting-multisite).
- One or more [domain names](/links/web/domains).

<!-- CP-NAV-START:web-hosting -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Hosting plans](/links/control-panel/web-hosting-sites)
- **Navigation path:** `Web Cloud`{.action} > `Hosting plans`{.action} > `Sites`{.action} > Select your web hosting plan

---
<!-- CP-NAV-END:web-hosting -->

## Instructions

> [!warning]
> This guide exclusively covers the actions to perform from your [OVHcloud Control Panel](/links/manager).
>
> Except in the case where you want to install a 1-click module to build the website gradually, you will first need to:
>
> - Create the new root folder in the [storage space](/pages/web_cloud/web_hosting/ftp_connection) of your web hosting plan.
> - Place the entire new content of your website inside this new folder.
> - If the new content of your website uses a database, you will also need to [create a database](/pages/web_cloud/web_hosting/sql_create_database), then [import the content related to this database](/pages/web_cloud/web_hosting/sql_importing_mysql_database) into it.
> - Place the database access credentials in the file containing the database connection information. This file must already be present in the new root folder.
>
> **Without these actions, your website display will be interrupted**.
>
> This guide only describes the procedure for modifying, from your OVHcloud Control Panel, the root folder initially defined for your website. This action is required so that the website displays the content of the new folder, replacing the old one.

<!-- CP-STEPS-START:modify-root-folder -->
Click on the tabs below to view each of the **4** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Hosting plans](/links/control-panel/web-hosting-sites) page, then select the web hosting plan concerned.
>>
>> ![Hosting plans](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-sites.png){.thumbnail}
>>
> **Step 2**
>>
>> On the page that opens, click on the `My sites`{.action} tab.
>>
>> ![My sites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-sites.png){.thumbnail}
>>
> **Step 3**
>>
>> In the table that appears, click on the `⁝`{.action} button to the right of the website concerned, then on `Edit site`{.action}.
>>
>> ![Website options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Step 4**
>>
>> In the window that opens, in the **Root folder** form, replace the old root folder with the new one.
>>
>> ![Edit root folder](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/edit-site-folder.png){.thumbnail}
>>
>> Then click on `Confirm`{.action}.
>>
<!-- CP-STEPS-END:modify-root-folder -->

## Go further

[Getting your website online](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
