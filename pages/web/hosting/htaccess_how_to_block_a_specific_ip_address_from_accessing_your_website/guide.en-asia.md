---
title: "Tutorial - How do I block access to my website for certain IP addresses via a .htaccess file?"
slug: htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website
excerpt: "Find out about the actions you can take via a « .htaccess » file to block access to your website for certain IP addresses"
section: Rewriting and authentication
order: 01
---

**Last updated 12th September 2022**

## Objective

The aim of this tutorial is to help you secure access to your external network sites, and prevent or correct any DDoS intrusions or attempted DDoS attacks.

You can do this with a « .htaccess » file, a particular text file, that the web server (Apache) detects, and that allows you to define special rules for a directory and all of its subdirectories.

You can create multiple « .htaccess » files in [the FTP space](https://docs.ovh.com/asia/en/hosting/log-in-to-storage-ftp-web-hosting/) of your hosting but **only one** per directory or subdirectory to avoid conflicts between different .htaccess files.

**Find out how to block access to your website for certain IP addresses via a « .htaccess » file.**

> [!warning]
>
> OVHcloud provides services that you are responsible for with regard to their configuration and management. It is therefore your responsibility to ensure that they function properly.
>
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/asia/) if you encounter any difficulties. We will not be able to assist you. You can find more information in the [`Go further`](#go-further) section of this guide.
>

## Requirements

- You must have [OVHcloud shared hosting](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia)

## In practice

> [!primary]
>
> The « .htaccess » file can be placed in several different folders, while respecting the rule of **only one** « .htaccess » file per folder or subfolder.
>
> The settings defined by a « .htaccess » file apply to the directory where it is installed and to all subdirectories.
>
> To edit (or create) these directories, log in to your hosting plan’s FTP space. If you need help with this, please refer to our guide on [Accessing my storage space](https://docs.ovh.com/asia/en/hosting/log-in-to-storage-ftp-web-hosting/).
>

### Block an IP, a range of IPs, a domain or all the IPs of a Country

Several rules are available to block access to your hosting plan via « .htaccess ».<br>
Be careful with the syntax and settings that you block, so that you don’t get stuck viewing your hosted sites and/or scripts yourself.<br>
In the event of an error, you can always log in to [the FTP space](https://docs.ovh.com/asia/en/hosting/log-in-to-storage-ftp-web-hosting/) of your hosting to correct the situation.

> [!primary]
>
> Shared hosting currently works with **Apache 2.4**. Since the **Apache 2.3** release, variables have been implemented and the syntax for writing access restrictions/permissions has changed.
>
> Since the old syntax is very popular, it is still active on our infrastructures. However, it is considered obsolete by *Apache* and may soon be unavailable. In this tutorial, you will find examples detailing the two syntaxes.
>
> For more details on the new syntax, you can consult the following official pages:
>
> - [Apache 2.4 access control documentation](https://httpd.apache.org/docs/2.4/en/howto/access.html){.external}
> - [Apache 2.4 mod_authz_core module documentation](https://httpd.apache.org/docs/2.4/mod/mod_authz_core.html){.external}
>

### Block an IP

To block a specific IP address, insert one of the following two codes into your « .htaccess » file:

> [!tabs]
> Historical Syntax
>>
>> ```bash
>> Deny from IP_address
>> ```
>>
> Syntax from Apache 2.3
>>
>> ```bash
>> <RequireAll>
>> Require all granted
>> Require not ip IP_address
>> </RequireAll>
>> ```
>>

- **Example**: If you want to block the IP address 192.168.1.2, you will need to write one of the following two codes:

> [!tabs]
> Historical Syntax
>>
>> ```bash
>> Deny from 192.168.1.2
>> ```
>>
> Syntax from Apache 2.3
>>
>> ```bash
>> <RequireAll>
>> Require all granted
>> Require not ip 192.168.1.2
>> </RequireAll>
>> ```
>>

### Block an IP range

To block an IP address range, insert one of the following two codes into your « .htaccess » file:

> [!tabs]
> Historical Syntax
>>
>> ```bash
>> Deny from IP_range
>> ```
>>
> Syntax from Apache 2.3
>>
>> ```bash
>> <RequireAll>
>> Require all granted
>> Require not ip IP_range
>> </RequireAll>
>> ```
>>

- **Example**: If you want to block all IPs in 192.168.x.x, you will need to write one of the following two codes:

> [!tabs]
> Historical Syntax
>>
>> ```bash
>> Deny from 192.168
>> ```
>>
> Syntax from Apache 2.3
>>
>> ```bash
>> <RequireAll>
>> Require all granted
>> Require not ip 192.168
>> </RequireAll>
>> ```
>>

### Block a domain

Some domains can access your hosting via redirections or requests.

To block a domain, insert one of the following two codes into your « .htaccess » file:

> [!tabs]
> Historical Syntax
>>
>> ```bash
>> Deny from domain
>> ```
>>
> Syntax from Apache 2.3
>>
>> ```bash
>> <RequireAll>
>> Require not host domain
>> </RequireAll>
>> ```
>>

- **Example**: if you want to block domain.tld, you will need to write one of the following two codes:

> [!tabs]
> Historical Syntax
>>
>> ```bash
>> Deny from domain.tld
>> ```
>>
> Syntax from Apache 2.3
>>
>> ```bash
>> <RequireAll>
>> Require not host domain.tld
>> </RequireAll>
>> ```
>>

### Block IPs from a country

> [!primary]
>
> All IP addresses (including public IP addresses) have country-wide geolocation. This way, you can get an idea of where an IP's traffic comes from, and physically spot the IP. 
>
> The « .htaccess » allows, thanks to this element, to block all the geolocated IPs in a country. 
> In other words, anyone who tries to visit your site from this country will be blocked (unless they use a VPN connection with a geolocated IP in another country).
>
> Blocks via the « .htaccess » are done through the two-letter Country Codes (ISO 3166-1 alpha2 standard) of the countries.
>
> Several websites list the countries and their respective Country Codes, including [https://www.iban.com/country-codes](https://www.iban.com/country-codes){.external} (independent of OVHcloud).
>

To block all IPs in a country, insert one of the following two codes into your « .htaccess » file:

> [!tabs]
> Historical Syntax
>>
>> ```bash
>> SetEnvIf GEOIP_COUNTRY_CODE Country_Code BlockCountry
>> Deny from env=BlockCountry
>> ```
>>
> Syntax from Apache 2.3 
>> To be placed at the top of your « .htaccess »
>>
>> ```bash
>> RewriteCond %{ENV:GEOIP_COUNTRY_CODE} ^(Country_Code)$
>> RewriteRule ^(.*)$ - [F,L]
>> ```
>>

- **Example**: If you want to block geolocated IP addresses in Fiji (FJ) and Greenland (GR), you will need to write one of the following two codes:

> [!tabs]
> Historical Syntax
>>
>> ```bash
>> SetEnvIf GEOIP_COUNTRY_CODE FJ BlockCountry
>> SetEnvIf GEOIP_COUNTRY_CODE GR BlockCountry
>> Deny from env=BlockCountry
>> ```
>>
> Syntax from Apache 2.3 
>> To be placed at the top of your « .htaccess »
>>
>> ```bash
>> RewriteCond %{ENV:GEOIP_COUNTRY_CODE} ^(FJ|GR)$
>> RewriteRule ^(.*)$ - [F,L]
>> ```
>>

### To authorise only a few IPs, a range of IPs or all the IPs of a country

Rather than restricting access to one or more IPs and allowing others to access your hosting, you can do the opposite by blocking all IPs and then allowing only one or more IPs to access your service.

### Authorise one or more IPs

To authorise only one IP to access your service, insert one of the following two codes into your « .htaccess » file:

> [!tabs]
> Historical Syntax 
>>
>> ```bash
>> order deny,allow
>> deny from all
>> Allow from IP_address
>> ```
>>
> Syntax from Apache 2.3 
>>
>> ```bash
>> Require ip IP_address
>> ```
>>

- **Example**: If you only want to authorise IPs 192.168.1.2 and 192.168.1.3 to access your hosting, you will need to write one of the following two codes:

> [!tabs]
> Historical Syntax
>>
>> ```bash
>> order deny,allow
>> deny from all
>> Allow from 192.168.1.2
>> Allow from 192.168.1.3
>> ```
>>
> Syntax from Apache 2.3 
>>
>> ```bash
>> Require ip 192.168.1.2 192.168.1.3
>> ```
>>

### Authorise an IP range

To authorise a range of IPs to access your service, insert one of the following two codes into your « .htaccess » file:

> [!tabs]
> Historical Syntax
>>
>> ```bash
>> order deny,allow
>> deny from all
>> Allow from IP_range
>> ```
>>
> Syntax from Apache 2.3 
>> To be placed at the top of your « .htaccess »
>>
>> ```bash
>> Require ip IP_range
>> ```
>>

- **Example**: If you only want to authorise the 192.168.1.x IP range to access your hosting, you will need to write one of the following two codes:

> [!tabs]
> Historical Syntax
>>
>> ```bash
>> order deny,allow
>> deny from all
>> Allow from 192.168.1
>> ```
>>
> Syntax from Apache 2.3 
>> To be placed at the top of your « .htaccess »
>>
>> ```bash
>> Require ip 192.168.1
>> ```
>>

### Authorise all the IPs of a country

To authorise all IPs in a country to access your service, insert one of the following two codes into your « .htaccess » file:

> [!tabs]
> Historical Syntax
>>
>> ```bash
>> order deny,allow
>> deny from all
>> SetEnvIf GEOIP_COUNTRY_CODE Country_Code AllowCountry
>> Allow from env=AllowCountry
>> ```
>>
> Syntax from Apache 2.3 
>> To be placed at the top of your « .htaccess »
>>
>> ```bash
>> RewriteCond %{ENV:GEOIP_COUNTRY_CODE} !^(Country_Code)$
>> RewriteRule ^(.*)$ - [F,L]
>> ```
>>

- **Example**: If you wish to authorise only Fiji (FJ) and Greenland (GR) to access your accommodation, you will need to write one of the following two codes:

> [!tabs]
> Historical Syntax
>>
>> ```bash
>> order deny,allow
>> deny from all
>> SetEnvIf GEOIP_COUNTRY_CODE FJ AllowCountry
>> SetEnvIf GEOIP_COUNTRY_CODE GR AllowCountry
>> Allow from env=AllowCountry
>> ```
>>
> Syntax from Apache 2.3 
>> To be placed at the top of your « .htaccess »
>>
>> ```bash
>> RewriteCond %{ENV:GEOIP_COUNTRY_CODE} !^(FJ|GR)$
>> RewriteRule ^(.*)$ - [F,L]
>> ```
>>

### Add-ins to the « .htaccess » file

Regardless of the security of general access to the hosting, the « .htaccess » file allows you to perform other actions. Below are three other OVHcloud tutorials on the subject:

- [Protect your website’s administration interface via « .htaccess »](https://docs.ovh.com/asia/en/hosting/how_to_password_protect_a_directory_on_your_website/).
- [Rewrite your URLs using mod_rewrite](https://docs.ovh.com/asia/en/hosting/htaccess_url_rewriting_using_mod_rewrite/).
- [Perform other operations with the « .htaccess » file](https://docs.ovh.com/asia/en/hosting/what_else_can_you_do_with_the_htaccess_file/).

## Go further <a name=`go-further`></a>

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/asia/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our support [offers](https://www.ovhcloud.com/asia/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.
