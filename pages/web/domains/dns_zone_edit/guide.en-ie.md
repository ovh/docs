---
title: 'Hosting: How to edit my DNS zone?'
excerpt: 'Hosting: How to edit my DNS zone?'
slug: hosting_how_to_edit_my_dns_zone
legacy_guide_number: g1604
---


## Definition
The DNS (or Domain Name System) translates a domain name into an IP address (the actual location of your website), so that your requests can reach the target server.

![](images/img_3710.jpg){.thumbnail}


## Difference between the DNS zone and DNS servers

## DNS servers

- DNS servers are the servers which have been assigned to a domain name. It is therefore these servers which respond first before handing over to the DNS zone.



## DNS zone
-The DNS zone is a file that stores different records which specify the addresses of servers hosting your site (A), or your emails(MX). These addresses can be in the form of IP addresses or host names.


## Why edit servers or DNS zone?

## DNS servers
It may be necessary to modify DNS servers when changing registrar. Indeed, some registrars do not allow you to continue using their servers after you have switched your domain name to a competitor .
It is also possible that you have a dedicated server which uses a DNS server, and you want to use this to manage your domain .

## DNS Zone
When you want to modify the server hosting your website or emails following change of hos, for example, you have to modify your DNS zone. Once this is updated, your domain will point to these new servers.


## What factors affect propagation time?

## The impact of TTL
TTL (Time to Live) is the time period for which servers cache the information for your DNS records. 
At OVH, newly created DNS zones are set to one hour TTL. (TTL = 3600)


## Connecting to the customer account

- Connect to your [customer account](https://www.ovh.com/manager/web) with your nic-handle and password.

- Click "Login" to confirm.



![](images/img_3711.jpg){.thumbnail}


## Selecting a domain

- In the left hand menu, select "Domaines" then the domain you wish to modify.



![](images/img_3712.jpg){.thumbnail}


## Consulting the DNS zone
Click on the "DNS Zone" in order to view your zone. Here you can see your different fields. You can also filter the display to make it easier.

![](images/img_3714.jpg){.thumbnail}


## Modifying an entry
In order to modify an entry, just click on the penci icon, "Next" and then et "Confirm".

![](images/img_3723.jpg){.thumbnail}


## Deleting an entry
In order to modify an entry, you have to click on the trash icon and then click confirm.

![](images/img_3724.jpg){.thumbnail}


## Reset configuration
This button lets you reset your DNS zone configuration in order to rest all the fields by default.

![](images/img_3715.jpg){.thumbnail}
Click on the type of zone which you want then click on "Confirm":


- Minimal entries: This choice will provide a zone with minimal entries needed for your domain to work.

- Reset as normal: This choice will provide you with additional entries, like CNAM for FTP, etc.



![](images/img_3716.jpg){.thumbnail}


## Add an entry
This button let's you add a new field in your DNS zone.

![](images/img_3717.jpg){.thumbnail}
You just have to choose the entry type and then click "Next".

![](images/img_3718.jpg){.thumbnail}


## Modify in text mode
This button lets you edit your zone in text mode for advanced use. 
This mode is useful for experienced users who want to carry out quick modifications.

![](images/img_3719.jpg){.thumbnail}
You just have to modify the text zone and click confirm.

![](images/img_3720.jpg){.thumbnail}


## Default TTL
This button lets you modify your DNS zone's TTL in order to manage time period in cache.

![](images/img_3721.jpg){.thumbnail}
You just have to choose the TTL defaut that you want, and then click "Confirm".

![](images/img_3722.jpg){.thumbnail}


## A
A Records point your domain name to an individual server using an IP address
You cannot have a type A and a CNAME for the same host name.


## MX
MX Records point your domain name's email to its email provider.
Only a host name can be indicated, not an IP address


## CNAME
CNAMEs entry is used to create an alias for a host name to another host name.
Only a hostname can be specified, and not an IP address.
You cannot have a CNAME and an A record for the same host name.


## TXT
A TXT record allows you to insert a text into your DNS zone.


## SPF
An SPF record lets you specify the servers authorised to send email with yout domain name. 
More information here:

- []({legacy}2028).




## Check Zone
This tool lets you check that your DNS servers have updated successfullly. 
See the following guide:

- []({legacy}1980).




## DNSSEC
This option lets you protect your domain against Cache Poisoning. 
A guide is available here:

- []({legacy}609).




## Timings
DNS Servers

- All DNS server modifications can take up to 49 hours.


DNS Zone

- All DNS zone modifications can take up to 24 hours.



