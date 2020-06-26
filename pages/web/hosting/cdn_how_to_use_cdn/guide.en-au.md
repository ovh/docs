---
title: 'Speeding up your website with CDN'
excerpt: 'Find out how to improve your website by reducing loading times on a Web Hosting plan using the CDN'
slug: guide_to_using_the_geocache_accelerator_on_a_web_hosting_package
section: 'Website optimisation'
---

**Last updated 19th March 2020**

## Objective

If you want to improve user experience by speeding up your website, the most effective technique is to enable the CDN (Content Delivery Network) option. This allows you to cache static files, such as images, CSS and JavaScript, on the closest servers to your visitors.

**This guide explains how to manage the CDN option on your Web Hosting plan.**

## Definition

**How does a CDN work?**

The CDN (Content Delivery Network) is literally a network dedicated to delivering content. It uses several servers around the world to display your website. The closer these servers are to your users, the faster your website performs for them.

In order for this to work, each server stores a part of your website in its cached memory. It is generally advised that you include so-called "static" files: images, JavaScript files and CSS, that help your website to run but are rarely modified.

## Requirements

- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager)
- an [OVHcloud Web Hosting plan](https://www.ovh.com.au/web-hosting/)

## Instructions

###  Enabling the CDN option

> [!primary]
> 
> The CDN option is already included in the "Performance" Web Hosting plans.

#### If you do not have CDN in your Web Hosting plan:

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager) and select `Web`{.action} in the top navigation bar. Click `Hosting plans`{.action} in the services bar on the left-hand side, then choose the Web Hosting plan concerned. Click `...`{.action} to the right of “CDN option”, then on `Order a CDN`{.action}.

![CDN](images/manage_CDN_01.png){.thumbnail}

You will be redirected to a page where you can generate a purchase order. Once the order is paid, the service will be available within a few minutes.

#### If the CDN is already enabled on your Web Hosting plan:

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager) and select `Web`{.action} in the top navigation bar. Click `Hosting plans`{.action} in the services bar on the left-hand side, then choose the Web Hosting plan concerned. On the `Multisite`{.action} tab, click on the cog to the right of the Multisite entry, then click on `Edit`{.action}.

Select the “Activate the CDN” option, click `Next`{.action} and then `Confirm`{.action}.

![CDN](images/manage_CDN_01_02.gif){.thumbnail}

> [!warning]
> 
> If  an external (non-OVHcloud) domain name has been added to the Web Hosting as Multisite, you must enter the CDN’s IP address in the domain name’s DNS zone.<br>
> Check the [IP address list for Web Hosting clusters](../list-of-ip-addresses-of-web-hosting-clusters/) to find the specific IP address for your cluster’s CDN.

 
**Why can’t I use a geolocated IP with the CDN option?** <br>
<br>
The CDN uses the principle of "IP Anycast". You do not request the same server depending on your geolocation, which is very efficient for reducing the loading time of your static files. Therefore, a geolocated IP address is not needed. <br>
In terms of SEO (search engine optimisation), the speed at which your website loads is more important that the geolocation of the IP addresses.


### How do I cache my files in the CDN?

**Using a CMS**

The main CMSs distribute several plugins that allow static files to be cached so that they are automatically included by the CDN. Others automatically configure static files by enabling an integrated caching to the CMS. For further information, please refer to the official documentation for the CMS or plugin that you use.

**Without using a CMS**

If you are not using a CMS, you can also use the CDN cache. To do this, you must add headers to the HTTP requests. There are several ways in which you can add these headers. One of the easiest ways is to define rules within a .htaccess file according to the file extensions.

```htaccess
1. # Cache images for 1 week
2. <FilesMatch "\.(jpg|jpeg|png|gif)$">
3. Header set Cache-Control "max-age=604800, public"
4. </FilesMatch>
5. 
6. # Cache JavaScript and CSS for 1 month
7. <FilesMatch "\.(js|css)$">
8. Header set Cache-Control "max-age=2592000"
9. </FilesMatch>
```
> [!warning]
>
> Caching by using HTTP headers results in caching within the CDN but also within your users’ browsers. Therefore, to prevent your visitors from seeing an older cached version, it is recommended that you rename the files with every new version.
> 



### Clearing the CDN cache

It is sometimes useful to clear the CDN cache, particularly when you modify static files - for example, when launching a new version of your site. In this case, you can completely clear the CDN cache.

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager) and select `Web`{.action} in the top navigation bar. Click `Hosting plans`{.action} in the services bar on the left-hand side, then choose the Web Hosting plan concerned. Click `...`{.action} to the right of “CDN option”, then on `Clear cache`{.action}.

![CDN](images/manage_CDN_02.png){.thumbnail}

### Deactivating the CDN option

This action allows you to deactivate the CDN for one or more of your Multisite entries without removing the CDN option from your Web Hosting.

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager) and select `Web`{.action} in the top navigation bar. Click `Hosting plans`{.action} in the services bar on the left-hand side, then choose the Web Hosting plan concerned. On the `Multisite`{.action} tab, click on the cog to the right of the Multisite entry, then click on `Edit`{.action}.

Untick “Activate the CDN”, click `Next`{.action} and then `Confirm`{.action}.

![CDN](images/manage_CDN_03.png){.thumbnail}

### Cancelling the CDN option

This action will remove the CDN option from your entire Web Hosting solution.

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager) and select `Web`{.action} in the top navigation bar. Click `Hosting plans`{.action} in the services bar on the left-hand side, then choose the Web Hosting plan concerned. Click `...`{.action} to the right of “CDN option”, then on `Cancel the CDN`{.action}.

![CDN](images/manage_CDN_04.png){.thumbnail}

Click `Confirm`{.action} to continue with the cancellation.

> [!warning]
>
> You will receive an email containing the CDN closure procedure. Please follow the instructions in the email in order to confirm or cancel the request. 
> 


### Checking that your CDN is working

You can check that the CDN is active on your domain name via a terminal with the following command:

```
curl -i http://yourpersonnaldomain.ovh/
```

If your domain name is being processed by the CDN, you will receive a result like the one below:

```
HTTP/1.1 200 OK
Date: Mon, 01 Jan 2020 00:00:00 GMT
Content-Type: text/html; charset=UTF-8
Set-Cookie: SERVERID12345=123456; path=/; max-age=900
Vary: Accept-Encoding
X-Request-ID: 123456789
X-CDN-Pop: rbx1
X-CDN-Pop-IP: 00.111.22.333/44
X-Cacheable: Cacheable
Accept-Ranges: bytes
Transfer-Encoding: chunked
X-IPLB-Instance: 12345
```
The “*X-CDN*” headers confirm that the domain is running through the CDN.

If the domain name is not running through the CDN, you will receive a result like the below:

```
HTTP/1.1 200 OK
Date: Mon, 01 Jan 2020 00:00:00 GMT
Content-Type: text/html; charset=UTF-8
Set-Cookie: SERVERID12345=123456; path=/; max-age=900
Server: Apache
X-Powered-By: PHP/7.1
Vary: Accept-Encoding
X-IPLB-Instance: 12345
```

The absence of the “*X-CDN*” header shows that you are not using a CDN.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
