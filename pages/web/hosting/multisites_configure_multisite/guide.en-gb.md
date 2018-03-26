---
title: Hosting multiple websites on your Web Hosting plan
slug: multisites-configuring-multiple-websites
excerpt: Find out how to host several websites on your Web Hosting plan
section: Getting started
---

**Last updated 12th March 2018**

## Objective

You can host several websites on a single Web Hosting plan, and you can do this with both OVH-registered and non-OVH registered domains.

**Find out how to host several websites on your Web Hosting plan.**

## Requirements

- You must have a compatible [OVH Web Hosting plan](https://www.ovh.co.uk/web-hosting/){.external}.
- You must have several [domain names](https://www.ovh.co.uk/domains/){.external}.
- You must have the appropriate rights to modify the configuration for your domains (via their DNS zones).
- You must be logged in to your [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Instructions

### Step 1: Access the Multisite management section

First of all, log in to your [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}, click `Web hosting`{.action} in the services bar on the left-hand side, and choose the Web Hosting plan you wish to host your sites on. Go to the `Multisite`{.action} tab.

The table displayed will contain all of the domain names that have been added to your Web Hosting plan. Some of these will have been created automatically, when your plan was set up.

> [!primary]
>
> If you are migrating your website and would like to avoid any service interruptions, you should follow [Step 4: Put your website online](https://docs.ovh.com/gb/en/hosting/multisites-configuring-multiple-websites/#step-4-put-your-website-online){.external} as the second step.
>

![multisite](images/access-multisite-ovh.png){.thumbnail}

### Step 2: Add a domain or subdomain

To add a new domain to your Web Hosting plan, click on the `Add domain or subdomain`{.action} button, and then select your domain in the window that appears.

- **Adding an OVH-registered domain:**
Only the domains that use the OVH configuration and are listed as contacts in your NIC handle will appear. Choose one from the list, then click `Next`{.action}.
If you have selected this option, go to [Step 3.1: Add an OVH-registered domain](https://docs.ovh.com/gb/en/hosting/multisites-configuring-multiple-websites/#step-31-add-an-ovh-registered-domain){.external}.

- **Adding a non-OVH registered domain:**
You will need to enter the domain name in the next step. Please note that to add the domain name successfully, you must have the right to modify its configuration (via its DNS zone).
If you have selected this option, go to [Step 3.2: Add a non-OVH registered domain name](https://docs.ovh.com/gb/en/hosting/multisites-configuring-multiple-websites/#step-32-add-a-non-ovh-registered-domain-name){.external}.

![multisite](images/add-multisite-step1.png){.thumbnail}

### Step 3.1: Add an OVH-registered domain

> [!primary]
>
> This step only applies if you have selected “Add an OVH-registered domain”. For non-OVH registered domain names, go to [Step 3.2: Add a non-OVH registered domain name](https://docs.ovh.com/gb/en/hosting/multisites-configuring-multiple-websites/#step-32-add-a-non-ovh-registered-domain-name){.external}.
>

Stay in the `Multisite`{.action} area of your Control Panel, in the `Add a domain or subdomain`{.action} section. Once you have selected an OVH-registered domain name, you will need to determine how it will be added. Depending on the [OVH Web Hosting plan](https://www.ovh.co.uk/web-hosting/){.external} you have chosen, some options may not be available.

|Information|Description|
|---|---|
|Domain|The domain that you have selected will be automatically entered by default. You can also enter subdomains related to the domain you have selected (e.g. blog.mypersonaldomain.ovh), and create the www subdomain at the same time (e.g. www.mypersonaldomain.ovh).|
|Root directory|This is the directory that will be used to host the selected domain on your storage space. If the directory does not exist, it will be created automatically.|
|Enable IPv6|Enables IPv6 protocol on the selected domain. Find out more about this on [our IP page](https://www.ovh.co.uk/web-hosting/ip.xml){.external}.|
|SSL|Provides you with a secure connection (HTTPS://) on the selected domain. Find out more about this on [our SSL page](https://www.ovh.co.uk/ssl/){.external}. By enabling SSL and the CDN (Content Delivery Network), you can also benefit from the **HTTP2** protocol.|
|Enable CDN|Enables the CDN (which replicates and caches your website’s static elements, e.g. images) on the selected domain. To find out more about this, go to [our CDN page](https://www.ovh.co.uk/web-hosting/cdn.xml){.external}. By enabling SSL and the CDN, you can also benefit from the **HTTP2** protocol.|
|Geolocated IP|Provides you with a geolocated IP address (from a country list) for the selected domain. To find out more about this, go to [our IP page](https://www.ovh.co.uk/web-hosting/ip.xml){.external}.|
|Enable firewall|Enables a firewall (request analysis) for the selected domain. To find out more about this, go to [our ModSecurity page](https://www.ovh.co.uk/web-hosting/mod_security.xml){.external}.|
|Separate logs|Activates a new space for logs on the selected domain. You will need to choose a domain name from the list. The selected domain will be used as an access name for this new space.  To find out more about this, go to [our Web Statistics page](https://www.ovh.co.uk/web-hosting/website_statistics.xml){.external}.|

Once you have entered this information, click `Next`{.action}.

![multisite](images/add-multisite-step2.png){.thumbnail}

Please check the information displayed in the summary.

Once you have selected an OVH-registered domain, you can configure its DNS zone automatically, by ticking `Automatic configuration (recommended)`{.action}. If you would prefer configure it manually at a later stage, leave this box unticked. The information you need to modify will then be displayed.

Click `Confirm`{.action} to start adding the domain. If you have chosen to configure your domain’s DNS zone manually, the following guide will help you do so: [*Web hosting: How to edit my DNS zone*](https://docs.ovh.com/gb/en/domains/web_hosting_how_to_edit_my_dns_zone/){.external}.

> [!primary]
>
> Adding a domain name to your Web Hosting plan should take an hour, at most. Changes made to a domain name’s configuration can take 4-24 hours to fully propagate.
>

Now that you have added your domain, you can move to [Step 4: Put your website online](https://docs.ovh.com/gb/en/hosting/multisites-configuring-multiple-websites/#step-4-put-your-website-online){.external}.

### Step 3.2: Add a non-OVH registered domain name

> [!primary]
>
> You will only need to follow this step if you have selected “Add a non-OVH registered domain name” (domains registered with a domain registrar other than OVH, which you cannot manage from your OVH Control Panel). For OVH-registered domain names, go to [Step 3.1: Add an OVH-registered domain](https://docs.ovh.com/gb/en/hosting/multisites-configuring-multiple-websites/#step-31-add-an-ovh-registered-domain){.external}.
>

Stay in the `Multisite`{.action} area of your Control Panel, in the `Add a domain or subdomain`{.action} section. After you have selected a non-OVH registered domain name, you will need to determine how it will be added.
Some of the options included in your [OVH Web Hosting plan](https://www.ovh.co.uk/web-hosting/){.external} cannot be enabled immediately after you have added your domain name. To enable them, you will need to complete this step by modifying the domain name settings.

|Information|Description|
|---|---|
|Domain|Enter the domain name you want to add to your Web Hosting plan. You can also enter subdomains related to the domain you have selected (e.g. blog.mypersonaldomain.ovh), and create the www subdomain at the same time (e.g. www.mypersonaldomain.ovh). As a reminder, you must have the right to modify the domain name’s configuration (via its DNS zone) to finalise this addition.|
|Root directory|This is the directory that will be used to store the selected domain on your Web Hosting plan. If the directory does not exist, it will be created automatically once you have completed this step.|
|Enable IPv6|Enables IPv6 protocol on the selected domain. To find out more about this, go to [our IP page](https://www.ovh.co.uk/web-hosting/ip.xml){.external}.|

Once you have entered this information, click `Next`{.action}.

![multisite](images/add-multisite-external-step1.png){.thumbnail}

Please check the information displayed in the summary.

As you have selected a non-OVH domain name, a message will appear prompting you to modify its configuration. Please check the information displayed (you will be able to find it at a later stage, if required), then click `Confirm`{.action}.

For domain name configuration:

|Record|Where to find this information|Description|
|---|---|---|
|TXT|Go to the `Multisite`{.action} tab, then click **ovhcontrol token configuration**|Allows OVH to ensure that you have the appropriate rights to add any non-OVH registered domain names. Ensure that you create the TXT record with the subdomain **ovhcontrol** (e.g. ovhcontrol.mypersonaldomain.ovh).|
|A and AAAA|In the `General information`{.action} tab, next to **IPv4** and **IPv6**|Makes your domain display the website you will put online using your Web Hosting plan.|

Once you press confirm, the domain name will be temporarily added. You can now modify its configuration (via its DNS zone) using your domain service provider’s interface. Once you have configured your domain, you will need to allow 4-24 hours for the changes to fully propagate.

> [!warning]
>
> You will need to carry out these modifications for your domain to be added successfully. If you do not do this, your domain addition will be cancelled.
>

Now that you have added your domain and modified its configuration, you can move to [Step 4: Put your website online](https://docs.ovh.com/gb/en/hosting/multisites-configuring-multiple-websites/#step-4-put-your-website-online){.external}.

### Step 4: Put your website online

Once you have added your domain name, you just need to put your website online.

To make this easier, you can use OVH 1-click modules, which provide you with a ready-to-use website structure. You can find out more about our 1-click modules by referring to our guide to [*Setting up your website with 1-click modules*](https://docs.ovh.com/gb/en/hosting/web_hosting_web_hosting_modules/){.external}.

If you would like to add several websites, you will need to repeat this step for each one.

We recommend taking care with the number of websites you add to your Web Hosting plan. The more websites you host, the higher the demand will be on your allocated resources. [Our Web Hosting page](https://www.ovh.co.uk/web-hosting/){.external} shows the number of websites you can host on your plan.

## Go further

[Setting up your website with 1-click modules](https://docs.ovh.com/gb/en/hosting/web_hosting_web_hosting_modules/){.external}.

[Web hosting: How to edit my DNS zone](https://docs.ovh.com/gb/en/domains/web_hosting_how_to_edit_my_dns_zone/){.external}.

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.