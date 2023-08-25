---
title: Install "Composer" on web hosting packages
excerpt: How to install "Composer" on web hosting packages
updated: 2023-03-07
---


## Objective

[Composer](https://getcomposer.org/){.external} is a dependency manager created for the PHP language. It allows PHP developers to include external libraries in their programs. Composer allows PHP projects to facilitate library distribution and code maintenance. Since the creation of this tool, many good development practices have been proposed and have improved the libraries of the PHP community. These good practices are documented in the form of [SRP](http://www.php-fig.org/){.external}.

**This guide explains how to install Composer and provides an example of usage with a Web Hosting plan.**

> [!warning]
>
> OVHcloud provides services that you are responsible for with regard to their configuration and management. It is therefore your responsibility to ensure that they function properly.
>
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/en-sg/directory/) or reach out to the OVHcloud community if you encounter any difficulties. We will not be able to assist you. You can find more information in the [Go further](#go-further) section of this guide.
>

## Requirements

- An [OVHcloud Web Hosting plan](https://www.ovhcloud.com/en-sg/web-hosting/) with SSH access
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg)

## Instructions

Access your hosting plan via SSH using our guide to [using SSH with your OVHcloud web hosting plan](/pages/web_cloud/web_hosting/ssh_on_webhosting).

Use the command line to check if the PHP version is compatible:


```bash
php --version
```

If this is not a proper version, you can configure an alias:


```bash
alias php='/usr/local/php8.0/bin/php'
```

We recommend staying in the root folder of your Web Hosting in order to prevent your Composer files from being publicly accessible. Next, run this command:


```bash
curl -sS https://getcomposer.org/installer | php
```

Composer is now available on your Web Hosting.


### Use cases

If you want to install **Symfony 2**, you can for example run the following command:

```bash
php composer.phar create-project symfony/framework-standard-edition my_project_name "2.7.*"
```

You can also use the OVHcloud API from your hosting using the official wrapper. To do this, add a file named *composer.json* containing the list of dependencies you need. Here is an example of this file with the OVHcloud API wrapper:


```json
1. {
2.     "name": "Example Application",
3.     "description": "This is an example of OVHcloud APIs wrapper usage",
4.     "require": {
5.         "ovh/ovh": "1.1.*"
6.     }
7. }
```

To install it, run the following command in the same folder:

```bash
php composer.phar install
```

To use this library, please refer to the documentation, as well as the code, available on [GitHub](https://github.com/ovh/php-ovh){.external}.

## Go further <a name="go-further"></a>

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-sg/directory/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-sg/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.