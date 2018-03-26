---
title: How to configure PHP on your OVH web hosting package (2014)
excerpt: This guide will help you to configure PHP on your OVH web hosting package.
slug: how_to_configure_php_on_your_ovh_web_hosting_package_2014
legacy_guide_number: g1207
---


## How to choose your version of PHP

## In your control panel
This guide will explain how to enable PHP-FPM and specify a version of PHP using the .ovhconfig file. Otherwise you can do this from your customer account, following this guide: []({legacy}1999)
To configure PHP manually with the .ovhconfig file, you just have to save the ".ovhconfig" file to the root of your disk space, via FTP.

For example, to use PHP 5.6, this ".ovhconfig file" must contain the following code:


```
app.engine=php
app.engine.version=5.6
http.firewall=none
environment=production
```




## Which versions of PHP are available for your website?
You can use the following versions of PHP:

- PHP 7.0
- PHP 5.6 (default version)
- PHP 5.5 (soon to be obsolete, not recommended)
- PHP 5.4 (obsolete)
- PHP 5.3 (obsolete) 


PLEASE NOTE: the software publisher has discontinued earlier versions and we will gradually stop providing them. We will continue to carry out updates on new PHP versions when released, yet will cease to do this on older versions once they are no longer supported. We therefore advise that you ensure your pages are regularly updated. You can follow the progress of these tasks on the OVH status website.

Please note that once the ".ovhconfig" is in place, the version of PHP to be used is defined by the app.engine.version. Variables in your .htaccess, such as SetEnv PHP_VER, will therefore be ignored.


## You created your .ovhconfig and you get a "Not Implemented" error.
This means that the engine or the version specified in your ".ovhconfig" file doesn't exist. Do not hesitate to look at your website's "error.log" for more information on the error.


## What does the environment variable mean?
This allows you to specify the cache for static files as well as the behaviour of PHP errors.

In development mode:

- No cache is stored
- PHP logs are displayed on your site (display_errors=On)


In production mode: (default option)

- Static files such as images, videos, audio files have a longer lifespan which maximises file caching on web browsers
- PHP logs aren't displayed on your website (display_errors=Off)




## What does the http.firewall variable mean?
This variable allows you to enable a type mod_security firewall application. To do this, add security.
http.firewall is set to none by default.


## Change the runtime environment with the container.image directive.
OVH web hosting packages let you change your website's runtime environment.
This means that you can either get a stable environment for the long term, or get the latest updates on the software provided by OVH. 

To do this add the following line:


```
; __container.image__
;
; values:
; stable: current recommended and up-to-date environment
; legacy: former stable environment, only receiving security updates, being feature-freezed
; testing: "experimental" environment dedicated to functionalities beta testing before being merged into stable
;
container.image=stable
```


This directive applies to all of your web hosting package and it can only be in the .ovhconfig file at the root of your hosting package. 

If you have several .ovhconfig files in different directories on the same hosting package the "container.image" directive can only be defined at the root of your hosting package*.

There is a description of different runtime environments in this guide:
[]({legacy}2149)

* In this case you can only specify the "container.image" directive in the .ovhconfig at the root, the other directives are defined in each of your subfolders.


## Details on the .ovhconfig file
Here are the config file application details: 


```
; ovhconfig
;
; this file must be placed in $HOME/.ovhconfig or in $DOCUMENT_ROOT/.ovhconfig

; __app.engine__
;
; values: php (php engine + opcache accelerator)
; notice: if php, a phpcgi engine will be activated as fallback (if previous engine crash)
;
; php:
; IMPORTANT: register_globals and magic_quotes_gpc are off for security
; php options .htaccess (like php version) are ignored
; phpcgi:
; IMPORTANT this is a fallback or previous system
; in this case __app.engine.version__ will be considerated as AUTO and php version will be old system
; (meaning depending .htaccess or .phpX extension)
;
app.engine=php

; __app.engine.version__ specify version of your engine
;
; for php:
; default: 5.6
; for phpcgi:
; this options is ignored (= fallback in AUTO)
;
app.engine.version=5.6

; __http.firewall__ used to add application firewall (filter http requests)
;
; values: none | security
; default: none
;
http.firewall=none

; __environment__
;
; values: production | development
;
; production:
; apache will maximise local cache
; mod_expires will grow up TTL of js, css, pdf, images, video, audio
; you can override it changing expiration explicitly or in your .htaccess
; feel free to look on our guide.
; development:
; no expiration is added, files are not locally in cache,
; will speed up tests but decrease performances
;
; choosen environment will also be available in your variable ENVIRONMENT unix env
;
; default: production
;
environment=development
```




## Which versions of PHP are available for your website?
If your site uses a CMS, such as WordPress, Joomla! or PrestaShop, you will find useful information on the official websites or in the admin space of the module. If the CMS you use continues to be provided by the publisher and your version is up-to-date, it should be able to support the latest PHP updates. Most CMS have a simple update tool allowing you to perform updates easily. Some update automatically, like WordPress version 3.7 and onwards (2013 and onwards).

If your site is based on your own development or another customised solution, you will need to find out which version(s) of PHP would be supported.

For information, here is the list of updates that are incompatible with different versions of PHP:
> from PHP 4 to PHP 5: http://php.net/manual/en/migration5.incompatible.php
> from PHP 5.1 to PHP 5.2: http://php.net/manual/en/migration52.incompatible.php
> from PHP 5.2 to PHP 5.3: http://php.net/manual/en/migration53.incompatible.php
> from PHP 5.3 to PHP 5.4: http://php.net/manual/en/migration54.incompatible.php
> from PHP 5.4 to PHP 5.5: http://php.net/manual/en/migration55.incompatible.php
> from PHP 5.5 to PHP 5.6: http://php.net/manual/en/migration56.incompatible.php
> from PHP 5.6 to PHP 7.0 : http://php.net/manual/fr/migration70.deprecated.php


## How to choose your version of PHP
Once you have chosen which version of PHP you should use, you can use the following guide to change it: []({legacy}1999)


## Where do I save my .ovhconfig file?

## You have a web hosting package with only one website
In most cases, you only have one website on your web hosting package.

Remember that you can edit and generate the .ovhconfig file directly in your customer account using this guide:
[]({legacy}1999)

However if you want to use a manual method anyway, the .ovhconfig file should be saved at the root of your hosting, i.e. in the first ("/") folder as shown in the image opposite. 


- This means that the subfolders will use this file's settings.



![](images/img_3764.jpg){.thumbnail}

## You have specified many "associated domains" which do not need to be configured differently
In this case, refer to the paragraph above. 


- All associated domains will take over from the .ovhconfig file saved at root of your hosting.



## You have specified many "associated domains" which need to be configured differently
You can specify a different version of PHP in each of the associated domains, to do so you have to save an .ovhconfig file in each of the target directories specified on your associated domains. 

If there is no .ovhconfig file in the target directory, the .ovhconfig at the root of your hosting will be used. 


However it is strongly recommended that you do not use different environments on the same web hosting package in different .ovhconfig files. This may make versions of PHP incompatible with environments because of cache. We suggest that you split your different websites across different packages so that you avoid this issue for this type of usage.


## Can you change your web hosting package's PHP configuration?
There are different configurations available for your web hosting package, you can find a description of all the different runtime environments in this guide: []({legacy}2149)

