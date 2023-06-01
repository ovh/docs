---
title: "Tutorial - Protect a directory or administration interface of your website with .htaccess and .htpasswd files"
slug: how_to_password_protect_a_directory_on_your_website
excerpt: "Find out how to protect a directory or access your website administration by authenticating with .htaccess and .htpasswd files"
section: Rewriting and authentication
order: 02
updated: 2023-06-01
---

**Last updated 1st June 2023**

## Objective

This tutorial explains how to set up user/password authentication to access all or part of your website via an internet browser. 

You can do this by using two Apache configuration files (HTTP) to place in [the FTP space](/pages/web/hosting/ftp_connection/) of your web hosting plan: 

- "**.htaccess**": for more information on the functionalities of this file, please read our tutorial on [`Operations carried out with a .htaccess file`](/pages/web/hosting/htaccess_what_else_can_you_do/).
- "**.htpasswd**": in addition to this tutorial, please refer to the [official Apache documentation](https://httpd.apache.org/docs/2.4/en/programs/htpasswd.html) for this file.

> [!warning]
>
> OVHcloud provides services that you are responsible for with regard to their configuration and management. It is therefore your responsibility to ensure that they function properly.
> 
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/en-gb/directory/) and/or the service’s software publisher if you encounter any difficulties. We will not be able to assist you. You can find more information in the ["Go further"](#go-further) section of this guide.
>
> The following examples should be set up in files named ".htaccess" and ".htpasswd". Please note that the rules you define in these files have a direct impact on your website. Always check the rules you add before applying them to your website. 
> 

**Find out how to protect a directory or access the administrator part of your website by authenticating with the .htaccess and .htpasswd files.**

## Requirements

- You must have a [web hosting plan](https://www.ovhcloud.com/en-gb/web-hosting/).
- You must be logged in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB).
- You must have the login details for [your web hosting plan’s FTP space](/pages/web/hosting/ftp_connection/).

## Instructions

## Go further <a name="go-further"></a>