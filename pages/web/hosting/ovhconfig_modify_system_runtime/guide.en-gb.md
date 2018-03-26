---
title: Modify your web hosting system’s runtime environment
excerpt: Modify your web hosting system's runtime environment
slug: modify_your_web_hosting_systems_runtime_environment
legacy_guide_number: g2149
---


## How do you modify the runtime environment?

## In your control panel
Click on your web hosting package and click on "Modify configuration" under general information.

![](images/img_4127.jpg){.thumbnail}
You then have to modify the current configuration.

![](images/img_4128.jpg){.thumbnail}
All you have to do next is choose one of the runtime environments in the drop-down menu. (Under operating systems here)

![](images/img_4129.jpg){.thumbnail}

## In the .ovhconfig file
The update occurs in the .ovhconfig file at the root of your hosting system.
The modifications therefore take place either in the control panel, or directly in the .ovhconfig file. 

You will find more information on the .ovhconfig file in this guide: []({legacy}1207)


## The different runtime environments

## "Legacy" environment
This environment has always been available on OVH web hosting packages. In fact, until now, this was the only configuration on our packages.


- Although it is still maintained we recommend switching to a "Stable" environment to automatically take advantage of the latest stable software updates. The "Legacy" environment is useful for websites which still rely on older versions of PHP, or for software which is no longer maintained (for example, an old connector for mysql databases).


You have to add the following line to your .ovhconfig* file:


```
container.image=legacy
```



## "Stable" environment
This environment enables you to automatically benefit from the latest stable updates.

You have to add the following line to your .ovhconfig* file:


```
container.image=stable
```



## "jessie.i386" environment
This environment enables you to take advantage of Debian Jessie. 


- It's currently the version suggested when you select the "stable" runtime environment.


You must add the following line to your .ovhconfig* file: 


```
container.image=jessie.i386
```


We do not recommend choosing jessie.i386 instead of stable but it means that when the "stable" environment's image changes, the update will not cause the website to break. This situation only arises when the website uses software outside php scripts.

## "testing" environment
This environment lets you benefit from "previews" such as patches, new images and new images, but there is no guarantee. 

You have to add the following line to your .ovhconfig* file:


```
container.image=testing
```


* This is the .ovhconfig file at the root of your hosting system.


## Differences between the images
|Environnements|legacy|stable|testing|jessie.i386|
|---|---|---|---|
|Environnements|legacy|stable|testing|jessie.i386|
|Linked image|legacy|jessie.i386|jessie.i386|jessie.i386|

|Minimum version of PHP| 4.4 | 5.3 | 5.3 | 
5.3 |
|Openssl|0.9.8o|1.0.1k (TLS1.2 compatible)|1.0.1k (TLS1.2 compatible)|1.0.1k (TLS1.2 compatible)|
|Extension php imagick||x|x|x|
|Extension php memcache|x|x|x|x|
|Extension php memcached||x|x|x|
|Extension php mongo (PHP 5.4, 5.5, 5.6)||x|x|x|

|Extension mysqlnd (only in utf-8)
||x|x|x|
|Extension redis||x|x|x|
|Opcache**|x|x|x|x|
|Python|2.6|2.7 et 3.4|2.7 et 3.4|2.7 et 3.4|
|Ruby|1.8.7|2.1.5|2.1.5|2.1.5|
|Rails|2.3.5|4.1.8|4.1.8|4.1.8|
|Perl|5.10|5.20|5.20|5.20|
|git|1.7.2.5|2.1.4|2.1.4|2.1.4|


** PHP-FPM must be enabled: []({legacy}1175)


## Will modifying your runtime environment impact all of my web hosting system?
In fact, modifying your runtime environment will impact all of your hosting system. 
This means that you cannot have two different runtime environments at the same time.


## For which services can you modify your runtime environment?
You can modify your runtime environment on all of the web hosting packages.


## Are PHP sessions kept open when an environment is changed?
Changes in the runtime environment will automatically reset your PHP sessions.

