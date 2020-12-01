---
title: Install Composer on a web hosting plan
slug: install_composer_on_web_hosting_packages
legacy_guide_number: 1894
excerpt: Find out how to install and take your first steps on Composer.
section: PHP
---

**Last updated 30/11/2020**

## Objective

[Composer](https://getcomposer.org/){.external} is a dependency manager created for PHP language. It allows PHP developers to include external libraries in their programmes. "Composer" allowed PHP projects to simplify library distribution and code maintenance. Since the creation of this tool, many good development practices have been proposed within the PHP community and have improved the libraries of the PHP community. These good practices are documented in the form of [SRP](http://www.php-fig.org/){.external}.

**Find out how to install and take your first steps on Composer**

> [!warning]
>
> OVH provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
> 
> We have provided you with this guide in order to help you with common tasks. Nevertheless, we recommend contacting a specialist provider and/or the service’s software publisher if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the “Go further” section of this guide.
> 

## Requirements

- a [web hosting plan](https://www.ovh.co.uk/web-hosting/){.external}  with SSH access
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}


## Instructions

Check that you are using a command line compatible PHP version:


```bash
php --version
```

If this is not the correct version, you can configure an alias:


```bash
alias php='/usr/local/php8.0/bin/php'
```

We recommend staying in the root folder of your hosting plan, so that your “Composer” files are not publicly accessible. You will need to run this command:


```bash
curl -sS https://getcomposer.org/installer | php
```

Congratulations, Composer is now available on your web hosting plan!


### Use cases

For example, if you want to install Symfony 2 simply, you can run the following command:


```bash
php composer.phar create-project symfony/framework-standard-edition my_project_name "2.7.*"
```

Similarly, you can use the OVH API from your hosting by using the official wrapper. To do this, simply add a file named composer.json that contains the list of dependencies you need. Here is an example of this file with the OVHcloud API wrapper:


```json
1. {
2.     "name": "Example Application",
3.     "description": "This is an example of OVH APIs wrapper usage",
4.     "require": {
5.         "ovh/ovh": "1.1.*"
6.     }
7. }
```

To install it, simply run the following command in the same folder:


```bash
php composer.phar install
```

To use this library, you can refer to the documentation, as well as the code, available on [github](https://github.com/ovh/php-ovh){.external}


## Go further

Join our community of users on <https://community.ovh.com/en/>.
