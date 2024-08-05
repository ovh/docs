---
title: "Common errors related to securing your website with SSL"
excerpt: "Find out how to avoid common errors in securing your website with SSL"
updated: 2024-01-11
---

## Objective

In this tutorial, you will find some examples of situations you may encounter when securing your website with SSL.

> [!warning]
>
> OVHcloud provides services for which you are responsible with regard to their configuration and management. It is therefore your responsibility to ensure that they function correctly.
>
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist service provider](/links/partner) or reaching out to the OVHcloud community if you encounter any difficulties. We will not be able to assist you. You can find more information in the [Go further](#go-further) section of this guide.
>

**This guide explains how to avoid common website security errors with SSL.**

## Requirements

- An [OVHcloud web hosting plan](/links/web/hosting)
- At least one [domain name](/links/web/domains)
- Access to the [OVHcloud Control Panel](/links/manager) in the "Web Cloud" section

## Instructions

### Mixed content

Does your website not load external elements, such as the *Facebook* and *X/Twitter* buttons? Do interactions on your web pages not work the same way as when you access your website in HTTP? This is probably because your website contains mixed content. 

In recent years, browsers such as *Google Chrome*, *Mozilla Firefox* and *Microsoft Edge/Internet Explorer* have prevented websites with HTTPS from loading page elements if they are accessible via a URL with HTTP. This is so that the confidentiality provided by the HTTPS protocol is not compromised by an element loaded with HTTP. 

In most cases, these are external scripts, from other websites such as social networks. In this case, you just need to replace the URLs in HTTP with URLs in HTTPS in your scripts to load these scripts.

> [!primary]
>
> Some websites use a [Content Delivery Network (CDN)](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn) to host, for example, *Javascript* libraries (such as *JQuery*). 
> If the CDN delivers the library with a URL in HTTP, your website may be affected by **mixed content**. 
>

How do I know if my website is affected?

The debugging tools provided by *Mozilla Firefox* and *Google Chrome* can tell you whether or not your website contains items blocked due to mixed content. The documentation available on the [Mozilla Developer Network](https://developer.mozilla.org/en-us/docs/Web/Security/Mixed_content){.external} explains how to use these tools to identify mixed content.

### Duplicate content

Duplicating content means having the same content on multiple different URLs. Search engines see this as an attempt to improve SEO. This means that websites with duplicate content are penalised.

To avoid this type of situation, when your website works properly in HTTPS, we recommend redirecting the content from HTTP to HTTPS. This will allow your visitors to be automatically redirected to the address of your web content in HTTPS and only one address will be available for this same content. 

Here is an example of a redirection that you can add to the file "[.htaccess](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite)", at the root of your website (by replacing the URL *https://www.yourdomain.tld* with your own):

```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.yourdomain.tld/$1 [R,L]
```

## Go further <a name="go-further"></a>
 
For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
Join our [community of users](/links/community).