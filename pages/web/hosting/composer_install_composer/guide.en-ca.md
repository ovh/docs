---
title: Install "Composer" on web hosting packages
excerpt: How to install "Composer" on web hosting packages
slug: install_composer_on_web_hosting_packages
legacy_guide_number: g1894
---


## Prerequisites
You can use "Composer" on Professional hosting packages and above. You need to have SSH access because you need to use command lines.


## Installation

## Log on in SSH
Make sure that you have the latest version of PHP (5.6) via the command line:


```
php --version
```


If you do not have the right version, you can configure an alias:


```
alias php='/usr/local/php5.6/bin/php'
```


We advise you to stay in the root folder of your website so that you do not make your "Composer" files publicly available.

## Download and install
Run this in your terminal:


```
curl -sS https://getcomposer.org/installer | php
```


Congratulations, "Composer" is now available on your web hosting package!


## Example usage
If you want to install Symfony, you can run this command:


```
php composer.phar create-project symfony/framework-standard-edition my_project_name "2.7.*"
```


Similarly, you can use the OVH API from your web hosting package by using the offical wrapper. Just add a file called composer.json which contains the list of dependencies you need. Here is an example of this file with the OVH API wrapper:


```
{
"name": "Example Application",
"description": "This is an example of OVH APIs wrapper usage",
"require": {
"ovh/ovh": "1.1.*"
}
}
```


To install, you just have to run the following in the same file. 


```
php composer.phar install
```


To use this library, you can refer to the documentation and code available on [github](https://github.com/ovh/php-ovh)

