---
title: Glue Registry
excerpt: What is a Glue Registry for?
slug: glue_registry
legacy_guide_number: g1568
section: DNS and DNS zone
order: 7
---


## 
With Glue Registry, you can customise your DNS servers with your domain name. Your name is displayed on the Whois database instead of the name of your hosting provider. You can create your own DNS servers in IPv4. 

You can customise DNS servers for all the GTLD domains: .com, .net, .org...
To use this service, go directly to your [customer account](https://www.ovh.com/manager/web/login.html). Please select the relevant domain in the "Domains" section of your customer account.

![](images/img_2903.jpg){.thumbnail}
Select the "glue" tab and then click "Add"

![](images/img_2900.jpg){.thumbnail}
A pop-up window will then appear so you can configure the glue registry.

![](images/img_2901.jpg){.thumbnail}
You have to enter a sub-domain and an IP address for a valid DNS server.

![](images/img_2902.jpg){.thumbnail}


## 
If you use DNS servers which do not belong to OVH, you have to create the sub-domain in the appropriate dns zone and not in the OVH zone
Once the glue is created, you must declare an "A" record in your dns zone. 

Select the "zone dns" tab

![](images/img_2953.jpg){.thumbnail}
Then select "Add an entry"

![](images/img_2952.jpg){.thumbnail}
Click on "A"

![](images/img_2956.jpg){.thumbnail}
In our example, here is the "A" record to create and validate.

![](images/img_2954.jpg){.thumbnail}
There will be a necessary propogation time of 24/48H.

