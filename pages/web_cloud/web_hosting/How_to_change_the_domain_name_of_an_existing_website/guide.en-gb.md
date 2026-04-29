---
title: "Use cases - How to change the domain of an existing website"
excerpt: "Find out how to change the domain name of an existing website"
updated: 2026-05-04
---

## Objective

During the lifetime of your website, you may need to change the domain name used to access it.<br>The most common use case is a change of company name.

The aim of this tutorial is to explain the main steps you need to follow when you want to change the domain name of your website.

**This guide explains how to change the domain name of an existing website.**

> [!warning]
>
> OVHcloud provides services that you are responsible for with regard to their configuration and management. It is therefore your responsibility to ensure that they function properly.
>
> This tutorial is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](/links/partner) or reach out to the OVHcloud community if you encounter any difficulties. We will not be able to assist you. You can find more information in the [Go further](#go-further) section of this guide.
>

## Requirements

- A [domain name](/links/web/domains)
- An [OVHcloud web hosting plan](/links/web/hosting)

<!-- CP-NAV-START:web-hosting -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Hosting plans](/links/control-panel/web-hosting)
- **Navigation path:** `Web Cloud`{.action} > `Hosting plans`{.action} > Select your web hosting plan

---
<!-- CP-NAV-END:web-hosting -->

## Instructions

> [!warning]
>
> Changing a domain name to access your website may affect its SEO ranking. 
> Be careful about the changes you make, and contact a [specialised provider](/links/partner) for SEO if necessary.

To change the access domain name for your website, there are several steps to follow in a specific order.

### 1 - Declare the new domain on your hosting <a name="step1"></a>

Declare your new domain name by following our guide "[How to associate a domain name with an existing website?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)". Also declare its `www` subdomain to display your website as `www.NewDomain.tld` as well as `NewDomain.tld`.

There are several conditions to meet for this part:

- Your new domain must point to the same root folder as the domain currently used to access your site.
<!-- CP-STEPS-START:retrieve-hosting-ip -->
- Check that your new domain points to the IP address of your web hosting plan. To retrieve the IP address, click on the tabs below to view each of the **3** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Hosting plans](/links/control-panel/web-hosting) page, then choose the web hosting plan concerned.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 2**
>>
>> Click on the `General information`{.action} tab.
>>
> **Step 3**
>>
>> Retrieve the **IPv4** displayed.
<!-- CP-STEPS-END:retrieve-hosting-ip -->

> [!warning]
>
> If you enable the **country IP** or **CDN** options with your new domain, be sure to use the appropriate IP address listed in our documentation [IP address list for Web Hosting clusters](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).
>
> To find the cluster number where your hosting is located, refer to our guide "[Web hosting - How to know your cluster and filer](/pages/web_cloud/web_hosting/how_to_know_cluster_and_filer)".
>

> **SSL certificates**
>
> If the original domain used to access your website has an SSL certificate, please refer to our 2 guides:
> - [Managing an SSL certificate on a Web Hosting plan](/pages/web_cloud/web_hosting/ssl_on_webhosting)
> - [Activating HTTPS on your website with an SSL certificate](/pages/web_cloud/web_hosting/ssl-activate-https-website)

<!-- CP-STEPS-START:verify-multisite-config -->
If all actions have been correctly performed, the declarations of your domain names should be strictly identical **unless you are using a paid SSL certificate of type *Sectigo DV*, *Sectigo EV*, or *custom***.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/all-domain-same-config-enable.png){.thumbnail}
<!-- CP-STEPS-END:verify-multisite-config -->

> [!primary]
>
> Once you have completed step 1, you will need to allow between 4 and a maximum of 24 hours for the changes to propagate fully.
>

If your website does not use databases and/or you do not rewrite URLs for your website, your website must already display correctly with your new domain. In this case, go directly to [step 3](#step3) of this guide. If not, continue to step 2 below.

### 2 - Rewrite URLs of your website with the new domain

Most sites use databases to operate. The tree structure for these nodes is generally built around the domain originally used for your website. Additional actions are required for these sites.

> [!warning]
>
> Warning, the operations described in step 2 are extremely sensitive and can have serious consequences for your website if they are not carried out with caution. If you have any doubts, do not try anything and contact a [specialist provider](/links/partner).
>
> Before you take any action, we advise retrieving a [backup of your FTP storage space](/pages/web_cloud/web_hosting/ftp_save_and_backup) and a [backup of your database](/pages/web_cloud/web_hosting/sql_database_export). This will allow you to restore your website in the event of an error.
>

There are two types of website: 

- CMSs (*Content Management System*) such as WordPress, Joomla!, PrestaShop, Drupal
- Classic websites designed by you or your service provider

#### Case 1: Your website is a CMS

Most CMSs can directly replace the domain originally declared for your website with another one via their backend administration panel.

As CMSs are developed by third parties and not managed by OVHcloud, here are links to the official documentation for the various CMSs offered for installation on our hosting plans:

- WordPress: <https://wordpress.org/support/article/changing-the-site-url/>
- Joomla!: The publisher of this software does not offer any documentation to date for changing the access domain for your website. Please contact the publisher directly on this subject. For more information, visit the official pages [docs.joomla.org](https://docs.joomla.org/) or [forum.joomla.org](https://forum.joomla.org/).
- Drupal: The publisher of this software does not offer any documentation to date for changing the access domain for your website. Please contact the publisher directly on this subject. For more information, see the official page [drupal.org](https://drupal.org).
- PrestaShop: The publisher of this software does not offer any documentation to date for changing the access domain for your website. Please contact the publisher directly on this subject. For more information, see the [official PrestaShop page](https://help-center.prestashop.com).

Please note that for these CMSs, you can also edit the domain names directly [in the corresponding database](/pages/web_cloud/web_hosting/sql_create_database). You will need to change the URL for accessing your website in the table used for your CMS.

For other CMSs that are not offered for automatic installation by OVHcloud, please also contact their respective customer support to carry out this rewrite in a secure manner.

#### Case 2: You have a custom built website

To rewrite your URLs with your new domain, [log in to your website database](/pages/web_cloud/web_hosting/sql_create_database) then replace your old domain with the new one in the corresponding table. 

Don't forget to check your `.htaccess` file to see if you need to update URL rewrites with your new domain.

If you used a service provider to create your website, contact them so that they can carry out the modification securely.

> [!success]
>
> Once step 2 is complete, your website must appear with your new domain.
>

### 3 - Remove the old domain name <a name="step3"></a>

To avoid "duplicated content" and once your new domain name is fully operational with your website, you will need to remove the declaration of your old domain name from your website using the guide "[How to detach a domain name from an existing website?](/pages/web_cloud/web_hosting/my_websites_detach_domain_existing_website)".

> [!warning]
>
> Don't forget to take care of your SSL certificate *Sectigo EV*, *Sectigo DV* or *Custom* as specified in [step 1](#step1).
>

Once your old domain name is dissociated from your website on your web hosting and if it is registered with OVHcloud, you can redirect it using a [permanent visible 301 redirect](/pages/web_cloud/domains/redirect_domain_name). This will allow your visitors to be automatically redirected to your website while seeing your new domain name / URL in the address bar of their browser.

## Go further <a name="go-further"></a>

[Hosting multiple websites on your Web Hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite)

[Managing an SSL certificate on a Web Hosting plan](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Activating HTTPS on your website with an SSL certificate](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Redirecting a domain name](/pages/web_cloud/domains/redirect_domain_name)

[IP address list for Web Hosting clusters](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
