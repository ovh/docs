---
title: Enable PHP optimisation with OVH web hosting
excerpt: This guide will show you how to enable PHP-FPM on your hosting package with OVH in order to improve the PHP response time
slug: enable_php_optimisation_with_ovh_web_hosting
legacy_guide_number: g1175
---


## What is PHP-FPM?
We have adapted PHP-FPM to our web infrastructure so that you can enjoy speedier PHP response times.

It is compiled by caching the opcode which minimises slow disk reads and speeds up the processes your PHP code.

Tests have shown that performance is up to 7 times faster compared with the older mechanism.

## In your customer account
This guide will explain how to enable PHP FPM and select the PHP version by using the .ovhconfig file. Alternatively you can do this straight from your customer account by following this guide: []({legacy}1999)

Warning: the following options are disabled for safety reasons when using PHP-FPM


```
register_globals
magic_quotes_gpc
```



For magic_quote_gpc:


- Without PHP- FPM:


PHP 5.4: magic_quotes_gpc disabled


- With PHP- FPM:


PHP 5.4: magic_quotes_gpc disabled
PHP 5.5: magic_quotes_gpc disabled

## Warning
You are advised to use the latest versions of PHP (5.5 or 5.6) as older versions are not kept up-to-date by the publisher and may contain security vulnerabilities.


## How to enable PHP-FPM?
Just save the .ovhcongig file at the root of your disk space, via your FTP client.

PLEASE NOTE: The .ovhconfig file exists by default on 2014 Web Hosting packages. On older packages you have to create it and save it at the root of your disk space. 
It is not automatically added to the older plans or when changing your plan, some settings may not be compatible depending on the version of PHP that you are using.

NB: the .ovhconfig file can only be placed at the root or in a top-level directory. It is not possible to have multiple files with different versions of PHP on the same hosting package (except [url ="https://www.ovh.co.uk/g1332.hosting_multi-domain_setup_guide"]correctly configured multi-domains[/url]).

This .ovhconfig should contain the following code:


```
app.engine=php
app.engine.version=5.6
http.firewall=none
environment=production
```


If the PHP-FPM engine crashes, the old PHP engine will be activated as fall-back.


## What versions of PHP are available?
You can use the following versions of PHP:

- PHP 7.0
- PHP 5.6 (default version)
- PHP 5.5 (soon to be obsolete, not recommended)
- PHP 5.4
- PHP 5.3

- ionCube is also available

Warning: once the .ovhconfig is uploaded, the PHP version used is the one selected by app.engine.version. The variables of your .htaccess file such as SetEnv PHP_VER are ignored.



## I have created my .ovhconfig file, and now I get the error "Not Implemented"
This error means that the engine or version specified in your .ovhconfig file does not exist. Please look at your website's error log to get more information on this.


## What is the directive environment?
It allows you to specify static file caching and the behaviour of PHP errors.
In development mode: 

- no cache is stored. 
- PHP logs are displayed on your website (display_errors=On).


In production mode: 

- static files such as images, videos and audio files have a longer lifespan which maximises file caching on web browsers. 
- PHP logs aren't displayed on your website (display_errors=Off).




## What is the http.firewall directive?
This directive allows you to enable a web application firewall (ModSecurity)

http.firewall defaults to none


## Is IonCube available with PHP-FPM?
Yes, IonCube is now available with versions

- 5.6
- 5.5
- 5.4


To use it, you have to use the IonCube encoder to encode your PHP scripts, these will then work on your shared hosting package. For more information see the IonCube FAQ: [IonCube FAQ](http://www.ioncube.com/faq.php)


## How do I disable PHP-FPM?
Just add the following to your .ovhconfig file:


```
app.engine=phpcgi
app.engine.version=AUTO
```




## Details of the .ovhconfig file
Here are the details of the config application file:


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
; php optiones .htaccess (like php version) are ignored
; phpcgi:
; IMPORTANT this is a fallback to previous system
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
; you can override it changing expiration explicitly in your .htaccess
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



