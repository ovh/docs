---
title: "Web Hosting - Switching your website to HTTPS"
excerpt: "Find out how to switch your website to HTTPS after activating an SSL certificate"
updated: 2024-02-28
---

## Objective

With an OVHcloud Web Hosting plan, you can get an [SSL certificate](/links/web/hosting-options-ssl). This allows one or more of your websites to have a secure connection by being accessible in *HTTPS*. To do this, you will need to follow several steps before your websites can use this secure connection.

**This guide explains how to switch your website to HTTPS after activating an SSL certificate.**

## Requirements

- An [SSL certificate](/links/web/hosting-options-ssl){.external} set up on your [OVHcloud Web Hosting plan](/links/web/hosting){.external}
- At least one website set up and accessible via your OVHcloud Web Hosting plan
- Access to the [OVHcloud Control Panel](/links/manager){.external}, part `Web Cloud`{.action}

## Instructions

Security is becoming increasingly important on the internet. You will certainly pay special attention to the confidentiality of your data, and the way it passes through the web. In general, internet users trust websites that allow secure exchanges, especially when the data exchanged is sensitive. 

When you visit a website with a secure connection, your web browser will show this in its address bar (URL) in several ways, such as: 

- A logo (usually a padlock)
- A message
- A color code
- The protocol used, *HTTPS* rather than *HTTP*

These indicators help to determine whether your website has a secure connection or not.

![httpswebsite](/pages/assets/screens/other/browsers/urls/url-not-secure.png){.thumbnail}

**Changing your website to *HTTPS* may be a tricky task.**. Most of the actions you need to perform will be carried out in your website’s source code. If they are not carried out correctly, you run the risk of your website's SEO (Google, Yahoo!, bing, etc.) dropping, or becoming completely inaccessible.

> [!warning]
>
> OVHcloud provides services for which you are responsible with regard to their configuration and management. It is therefore your responsibility to ensure that they function correctly.
>
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist service provider](/links/partner) if you encounter any difficulties. We will not be able to assist you. You can find more information in the [Go further](#go-further) section of this guide.
>

Below are the main steps described in the rest of this guide to switch your website to *HTTPS*:

- [Step 1 - Activate the SSL certificate on the Web Hosting plan](#enable-ssl): Enables you to activate or check that an SSL certificate has been set up on your Web Hosting plan/website.
- [Step 2 - Check the technical environment for your website](#check-environment): Helps you ensure that switching your website to *HTTPS* will not cause any issues before you make any changes.
- [Step 3 - Activate *HTTPS* on your website](#https-enable): Enables your website to use the *HTTPS* protocol. The method explained in this guide is not universal and will depend on the website used.
- [Step 4 - Check that your website is working properly](#check-your-website): Helps ensure that your website displays correctly after enabling *HTTPS*.

### Step 1 - Activate the SSL certificate on the web hosting plan <a name="enable-ssl"></a>

To activate an SSL certificate on your Web Hosting plan, or check that an SSL certificate has already been set up for your website, please read our guide on "[Managing an SSL certificate on a Web Hosting plan](/pages/web_cloud/web_hosting/ssl_on_webhosting)".

### Step 2 - Check the technical environment for your website <a name="check-environment"></a>

Before you make any changes to your website’s configuration, it is important to ensure that it is ready to use *HTTPS* protocol correctly. There is no one-size-fits-all approach, as it depends on the website you are using.

The information below is generic. We recommend contacting a [specialist provider](/links/partner) if you experience any difficulties.

#### 2.1 - Avoid mixing HTTP and HTTPS content

When your website loads in *HTTPS*, you should avoid mixing *HTTP* and *HTTPS* content on the same page and on your entire website. So, if your website should be displayed in *HTTPS*, ensure that all of its content loads in *HTTPS*.

If this is not the case, you will offer on your website content that is considered mixed by web browsers, i.e. content that is considered potentially unsecure on a page that has been declared secure.

There are two possible scenarios for *Mixed Content*:

- **The website will display correctly, but a warning will appear in the address bar**: Passive content (images, videos, etc.) uploaded to your page by your web browser from an unsecured source.

- **Some parts of the website are not displayed and a warning is present in the address bar**: Content considered active by your web browser (scripts, iframes, CSS files, etc.) from an unsecured source has been blocked.

Make sure that all content loaded from your website comes from a secure source.

![httpswebsite](/pages/assets/screens/other/browsers/urls/connection-isnt-secure.png){.thumbnail}

Please note that even if your Web Hosting plan has an SSL certificate, the content hosted on it can be loaded in *HTTP* or *HTTPS*. This depends on how you have identified this content in your website’s code. This way, you can ensure that all of the content loaded from your website uses the *HTTPS* protocol.

For example, pay special attention to the addresses you use in your website’s code. If possible:

- Prefer the use of relative addresses, for example: `../img/header.png`.
- Avoid using absolute addresses with the *HTTP* protocol, such as: `http://domain.tld/img/header.png`.

If necessary, adapt your website’s code accordingly. 

If you use a turn-key website (WordPress, PrestaShop, Drupal, Joomla!), the structure of these websites is generally already designed to switch to *HTTPS*. You should not have to make any changes to your website’s code.

#### 2.2 - Avoid generating duplicate content

Depending on how your website is coded, please ensure that it cannot be accessed via different URLs — for example, the first using *HTTP* and the second using *HTTPS*. If this is the case, the same content will be accessible from several different addresses, which is considered duplicate content by search engines.

This can lower your website’s search engine ranking. Check that your code forces the use of *HTTPS*, via a rewrite rule to be placed in your website's code when you want to enable *HTTPS*.

Please note that if you are using a turn-key website, its structure automatically manages rewrite rules. As a result, you should not have to make any changes to your website’s code.

### Step 3 - Activate HTTPS on your website <a name="https-enable"></a>

As soon as your Web Hosting plan has an active SSL certificate, and the [multisite](/pages/web_cloud/web_hosting/multisites_configure_multisite) concerned has an active SSL connection, and your website is ready to switch to *HTTPS*, you can activate it.

> [!warning]
>
> Before you take any steps, we recommend that you retrieve a full backup of your website. This backup must contain not only the files on the [FTP storage space](/pages/web_cloud/web_hosting/ftp_save_and_backup), but also those from the [database](/pages/web_cloud/web_hosting/sql_database_export) if the website uses one.
>
> You can do this directly from the files that make up your website. Do not hesitate to contact a [specialist provider](/links/partner) if you encounter any difficulties.
>

There are many ways to activate *HTTPS* on your website. To do this, you will need to make changes to the website’s configuration. The information below can help you with this activation process, but it may also be incomplete or irrelevant, depending on your use case.

- **You are using a turn-key website (WordPress, PrestaShop, Drupal, Joomla!, etc.)**:

You can usually activate *HTTPS* from your website’s administration interface. The domain name and method for activating HTTPS* vary, depending on the turn-key website you are using. 

For example, you may have a setting called “Force *HTTPS*” to activate, or you may need to edit your website’s full URL to add an `s`: “**http**://domain.tld” would then become “**https**://domain.tld”.

If you are not sure how to do this via the administration interface for your turnkey website, or if you have any doubts, please refer to the official documentation published by the publisher of your website. 

- **You are using a website created by yourself (or by a provider)**: 

You will need to activate *HTTPS* directly in your website’s code. If you have the necessary knowledge, modify your website’s code to adapt it to use *HTTPS*. If you have any doubts about how to proceed, please contact your website’s developer. 

Below are some examples of scripts you can insert into a **.htaccess** file, if required. However, these are not a substitute for the assistance of a webmaster. Replace the domain name `domain.tld` present in the first script with your own domain name and adapt it if necessary.

```bash
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://domain.tld/$1 [R,L]
```

This first example of a script redirects all URLs that arrive via port 80 to *HTTP* to the secure URL in *HTTPS* `https://domain.tld/`.

```bash
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

This second example of a script turns all URLs that arrive via the *HTTP* protocol into *HTTPS*, while leaving the rest of the URL after the `://` intact.

For this second example, check that all of your target domain names or subdomains have an active SSL certificate.

### Step 4 - Check that your website is working properly <a name="check-your-website"></a>

Once you have activated *HTTPS* on your website, please check that it works properly, and that all of your content displays the same way it did before you made any changes. To do this, try to access it, check if no messages or warnings appear, and take a few moments to examine the layout of several parts of your website. 

If you notice any faults, try to resolve them as quickly as possible, or go back by disabling *HTTPS*. If you really need it, you can also use the full backup of your website created in [step 3](#https-enable).

If your website displays correctly and no warning appears after switching to *HTTPS*, you have carried out the operation correctly. If you would like to activate *HTTPS* on another website, please repeat all of the steps described in this guide.

## Go further <a name="go-further"></a>

[Managing an SSL certificate on a Web Hosting plan](/pages/web_cloud/web_hosting/ssl_on_webhosting)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).