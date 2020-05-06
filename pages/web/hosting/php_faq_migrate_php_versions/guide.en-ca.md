---
title: FAQ - Migrate to the latest versions of PHP
excerpt: FAQ - Migrate to the latest versions of PHP
id: '1758'
slug: faq_-_migrate_to_the_latest_versions_of_php
legacy_guide_number: g1758
---


## About PHP
What is PHP?
PHP is an open-source programming language mainly used to create dynamic web pages.
It's one of the most commonly used programming languages on the web today, and is used by content managers such as WordPress, Joomla! and Drupal.
Why is OVH going to deactivate certain versions of PHP?
Like all programming languages, PHP has changed over time: new features, bug fixes, etc., have been introduced. Old versions are supported for a defined period of time and then they reach their end-of-life. We are going to deactivate old, unsupported versions because they carry security risks for both OVH and our customers.
What are the benefits of migrating to a new version of PHP?
By migrating your website to a recent, supported version of PHP, you will hugely reduce your website's exposure to security risks and get new features.
OVH also offers free PHP-FPM optimisation (from version 5.3) to boost your website's performance. Click [here](https://www.ovh.co.uk/g1175.php-fpm-optimisation) for more information.
Which versions will no longer be supported?

|Version|Date of end-of-life|Not been supported for [years] + [months] |
|4.X|7 August 2008|6 years and 8 months|
|5.2|6 January 2011|4 years and 3 months|
|5.3|14 August 2014|8 months|


Source: http://php.net/eol.php

These versions were disabled on 24 September 2015.
Which hosting plans does this apply to?
This applies to all our web hosting plans on Linux, with the exception of 60Free and Demo1G plans.
My website, or part of my website, uses old versions of PHP. What should I do?
Your websites and planned tasks (CRON) will automatically be upgraded to PHP 5.6.
We strongly advise you to start testing your websites with these new versions now. We will explain how you can do this shortly.
Why won't OVH migrate my scripts automatically?
You can modify your PHP version from your customer account by following this guide:
[]({legacy}1999)

However, as all websites are different, OVH cannot cater for every customer, so customers will need to migrate their scripts themselves.


## STEP 1: make sure your website is compatible
A) If you use a content manager like WordPress, Joomla! Dotclear PHPBB etc. you first need to update your website by following their official guides:

- WordPress: [https://codex.wordpress.org/Updating_WordPress](https://codex.wordpress.org/Updating_WordPress)
- Joomla!: [https://docs.joomla.org/Portal:Upgrading_Versions](https://docs.joomla.org/Portal:Upgrading_Versions)
- Drupal: [https://www.drupal.org/node/1494290r](https://www.drupal.org/node/1494290)
- PrestaShop: [https://www.prestashop.com/blog/en/prestashop-1-6-0-7-is-now-available-to-update/](https://www.prestashop.com/blog/en/prestashop-1-6-0-7-is-now-available-to-update/)


B) If website is based on a custom solution, follow the [official PHP migration guides](http://php.net/manual/en/appendices.php).
If you are not your website's developer, contact your webmaster.


## STEP 2: configure your PHP version as soon as possible
There are two ways to do this:
Modify the version of PHP your website is running from your customer account

You can use the following guide:
[]({legacy}1999)
You can also do this manually by following these instructions:
Find your web root folder through FTP. You can follow this guide: [here if you need](https://www.ovh.co.uk/g1380.filezilla-user-guide)


- If you do not have the .ovhconfig file, you need to create it. Using a text editor insert these four lines in a blank file: (our example uses version 5.6)


```
app.engine=php
app.engine.version=5.6
http.firewall=none
environment=production
```



Save this file under the name ".ovhconfig" and upload it to the root of your website.  


- If you already have a .ovhconfig file on your website you can edit it with a text edit (Bloc-Notes) and check the content. 


For more information on the specifications of this file, see to this OVH guide [here](https://www.ovh.co.uk/g1207.how_to_configure_php_on_your_ovh_web_server_2014)


## Use case
How do I know which version of PHP my website uses?
Simply download this file: [info.php](https://www.ovh.com/fr/documents/info.php) (right-click on it and then Save As).
If you want to create the file yourself, simply create a text file containing <?php phpinfo(); ?> then save it in .php format and name it 'info.php'.

Publish the file via FTP to the root of your website, or your websites (if you have several which are attached to subdomains). For example /www/mywordpress/
With your web browser, go to info.php. For example: www.your-site.com/mywordpress/info.php

![](images/img_2601.jpg){.thumbnail}
Users with old versions of PHP will shortly receive an email which lists the supported versions.
I have subdomains or multi-domains. Do I have to enable the same version of PHP on each one?
No. OVH allows you to have a different version of PHP on each of your subdomains (a multi-domain is seen as a subdomain).
To do this, simply create an .ovhconfig file at the root of each subdomain. The .ovhconfig file loads as follows:


- The file is opened from the root of the domain. For example, if www.example.com points towards the « /www » file and «beta.example.com » points towards the « /beta » file, the « /www/.ovhconfig » file will load up for the http://www.example.com/index.php query. The /beta/.ovhconfig file however will load up for a query towards http://beta.example.com/index.php.
- If the .ovhconfig file of a particular domain name from STEP 1 isn't found, the /.ovhconfig file will load.
- If none of the above files exists, your account will be configured automatically (PHP 5.6 with FPM).


I've configured an .htaccess file to force a version of PHP. What will happen to it?
Your files will migrate to PHP 5.6 by default. If you want to force a more recent version of PHP (PHP 7 for example), you need to configure .ovhconfig (a file on your FTP).
Any other directives on the .htaccess file, e.g. URL rewriting, redirection, etc., will remain active.
 Can I use PHP 7
PHP 7 is available on our web hosting packages.
I'm having problems migrating. What can I do?
Our support team can't migrate your website for you, however it can help you to update your version of PHP (using the .ovhconfig file). This team isn't liable for any issues that may occur.

Need more help? You can look for a web service provider among our list of partners who will be able to guide you in your website migration: [http://www.ovh.biz/](http://www.ovh.biz/)

