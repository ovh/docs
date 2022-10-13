---
title: "How to change the domain of an existing website"
slug: how_to_change_the_domain_name_for_an_existing_website
excerpt: "Find out how to change the domain name of an existing website"
section: "Use cases"
order: 02
---

**Last updated 12th October 2022**

## Objective

During the life of your website, you may need to change the domain name of your website.<br>The most common use case is a change of company name.

The aim of this tutorial is to explain the main steps you need to follow when you want to change the access domain name to your website.

**Find out how to change the domain name of an existing website.**

> [!warning]
>
> OVHcloud provides services that you are responsible for with regard to their configuration and management. It is therefore your responsibility to ensure that they function properly.
> 
> This tutorial will help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/en-au/) if you encounter any difficulties. We will not be able to assist you. You can find more information in the ["Go further"](#go-further) section of this guide.
>

## Requirements

- Have a [domain name](https://www.ovhcloud.com/en-au/domains/).
- Have an [OVHcloud shared hosting](https://www.ovhcloud.com/en-au/web-hosting/).
- Mog in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au).

## Instructions

> [!warning]
>
> Changing a domain name to access your website may affect its SEO ranking. 
> Be careful about the changes you are going to make, or contact a [specialised provider](https://partner.ovhcloud.com/en-au/) for SEO if necessary.
>

To change the access domain name for your website, there are several steps to follow in a specific order.

### Step 1 - declare the new domain on your shared hosting <a name="step1"></a>

Declare your new domain name using our guide on [adding a multisite on your shared hosting](https://docs.ovh.com/au/en/hosting/multisites-configuring-multiple-websites/). Also declare the sub-domain as `www` if, for example, you want to have `www.NewDomain.tld` also display your website in addition to `NewDomain.tld`.

There are several conditions to pass Step 1:

- Your new domain must point to the same "root folder" as the domain currently used to access your site.
- Check that your new domain points to the right IP address on your web hosting plan. To retrieve the IP address, log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au), go to the `Web cloud`{.action} section, click on `Hosting plan`{.action}, select your Hosting, then retrieve **IPv4** in the `General information`{.action} tab.

> [!warning]
>
> If you enable the **country IP** or **CDN** options with your new domain, use the correct IP address using our documentation listing [all shared hosting IP addresses](https://docs.ovh.com/au/en/hosting/multisites-configuring-multiple-websites/).
>
> To find the cluster number where your hosting is located, go to the `Web Cloud`{.action} section, click on `Hosting`{.action}, select your hosting, then the `FTP-SSH`{.action} tab. You will see the cluster number in the form **FTP server and SFTP**: `ftp.cluster0XX.ovh.net` (where `X` is the cluster number).
>

> **SSL certificates**
>
> If the domain you originally used to access your website has an SSL certificate, please refer to our two guides to perform or check the actions described below these two links:
> - [Managing an SSL certificate on a Web Hosting plan](https://docs.ovh.com/au/en/hosting/ssl-certificates-on-web-hosting-plans/)
> - [Activating HTTPS on your website with an SSL certificate](https://docs.ovh.com/au/en/hosting/activate-https-website-ssl/)
>
> For the free *Let's Encrypt* SSL certificate, simply activate the `SSL` **option now** for your new domain via the `Multisites`{.action} tab on your hosting plan. Then click on the `Actions`{.action} button above the table indicating your nodes, then on `Regenerate SSL certificate`{.action}. Regeneration will take at least 2 hours to complete.
>
> *Sectigo DV* and *Sectigo EV* paid SSL certificates offered by OVHcloud are only valid for one domain name and its subdomain at `www`.<br>
> **Once you have reached [step 3](#step3) in this guide**, you will need to delete your paid SSL certificate in order to subscribe to another one for your new domain.<br>
> *Warning, the deletion is irreversible and no refund will be made for the remaining time of your old SSL certificate. Ensure steps 1 and 2 are completed correctly.*
>
> For any other *custom* SSL certificates that you have installed yourself, contact your SSL certificate provider to find out what you can do in this situation.
>

If all of your actions have been correctly performed, the multisite declarations for your domains must be identical **unless you are using a paid SSL certificate such as *Sectigo DV*, *Sectigo EV* or *custom***.

![multisites](images/multisites.png){.thumbnail}

> [!primary]
>
> Once you have completed step 1, you will need to allow between 4 and a maximum of 24 hours for the changes to propagate fully.
>

If your website does not use databases and/or you do not rewrite URLs for your website, your website must already display correctly with your new domain. In this case, go directly to [step 3](#step3) of this guide. If not, continue to step 2 below.

### Step 2 - rewrite URLs in your website with the new domain

Most sites use databases to operate. The tree structure for these nodes is generally built around the domain originally used for your website. Additional actions are required for these sites.

> [!warning]
>
> Warning, the operations described in step 2 are extremely sensitive and can have serious consequences for your website if they are not carried out with caution. If you have any doubts, do not try anything and contact a [specialist provider](https://partner.ovhcloud.com/en-au/).
>
> Before you take any action, we advise retrieving a [backup of your FTP storage space](https://docs.ovh.com/gb/en/hosting/restoring-ftp-filezilla-control-panel/) and a [backup of your database](https://docs.ovh.com/au/en/hosting/web_hosting_database_export_guide/). This will allow you to restore your website in the event of an error.
>

We will distinguish two types of website: 

- CMSs (*Content Management System*) such as WordPress, Joomla!, PrestaShop, Drupal, etc.
- classic websites designed by you or your service provider.

### Case 1: your website is a CMS

Most CMSs can directly replace the domain originally declared for your website with another one via their *back-office* admin panel.

Since CMSs are developed by third-party organisations that are not managed by OVHcloud, you will find below links to the official documentation for the various CMSs offered for installation on our shared hosting plans:


- WordPress: <https://wordpress.org/support/article/changing-the-site-url/>
- Joomla! : The publisher of this software does not offer any documentation to date for changing the access domain for your website. Please contact the publisher directly on this subject. For more information, visit the official pages [docs.joomla.org](https://docs.joomla.org/){.external} or [forum.joomla.org](https://forum.joomla.org/){.external}.
- Drupal: The publisher of this software does not offer any documentation to date for changing the access domain for your website. Please contact the publisher directly on this subject. For more information, see the official pages [drupal.org](https://drupal.org){.external} or [drupal.fr](https://drupal.fr){.external}.
- PrestaShop: The publisher of this software does not offer any documentation to date for changing the access domain for your website. Please contact the publisher directly on this subject. For more information, click [here](https://help-center.prestashop.com){.external} to go to their official page.

Please note that for these CMSs, you can also edit them directly [in the database](https://docs.ovh.com/au/en/hosting/creating-database/). You will need to change the URL for accessing your website in the table provided.

For other CMSs that are not offered for automatic installation by OVHcloud, please also contact their respective support teams to carry out this rewrite in total security. 

### Case 2: your website is a “home-made” website

To rewrite your URLs with your new domain, [log in to your website database](https://docs.ovh.com/au/en/hosting/creating-database/) then replace your old domain with the new one in the corresponding table. 

Don't forget to check your `.htaccess` file to see if you need to update URL rewrites with your new domain.

If you used a service provider to create your website, contact them so that they can carry out the modification securely.

> [!success]
>
> Once step 2 is complete, your website must appear with your new domain.
>

### Step 3 - Remove the old domain name <a name="step3"></a>

To avoid "*Duplicate-content*" and when your new domain is fully operational with your site, you will need to delete the multisite declaration for your old domain using the guide on managing [multisites on your shared hosting](https://docs.ovh.com/au/en/hosting/multisites-configuring-multiple-websites/).

> [!warning]
>
> Don't forget to take care of your SSL certificate *Sectigo EV*, *Sectigo DV* or *Custom* as specified in [step 1](#step1).
>

Once your old domain has been removed from the multisites tab, and if it is registered with OVHcloud, you can redirect it using a [permanent visible redirection 301](https://docs.ovh.com/au/en/domains/redirect-domain-name/). This will allow your visitors to be automatically redirected to your site by viewing your new domain in the address bar/URL of their browser.

## Go further <a name="go-further"></a>

[List of our shared hosting IPs](https://docs.ovh.com/au/en/hosting/multisites-configuring-multiple-websites/)

[Managing an SSL certificate on a Web Hosting plan](https://docs.ovh.com/au/en/hosting/ssl-certificates-on-web-hosting-plans/)

[Activating HTTPS on your website with an SSL certificate](https://docs.ovh.com/au/en/hosting/activate-https-website-ssl/)

[Redirect a domain](https://docs.ovh.com/au/en/domains/redirect-domain-name/)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-au/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-au/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.