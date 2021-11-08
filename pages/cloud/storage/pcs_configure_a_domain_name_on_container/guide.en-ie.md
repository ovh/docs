---
title: Configure a domain name on your Object Storage container
excerpt: Configure a domain name on your Object Storage container
slug: configure_a_domain_name_on_your_object_storage_container
section: Object Storage Standard (Swift)
legacy_guide_number: g2006
---


## 
When you create a Public storage container anyone can access your data. It is the ideal solution for sharing files over the Internet but to do so you have to provide a long URL which is difficult to remember. 
In addition, if you want to use this content on your own website it may be simpler to use your own domain name. This means you can share your data with a customised URL that is easier to remember. 

This guide shows you how to configure a domain on your container.


## Prerequisites

- [Add storage space](https://docs.ovh.com/gb/en/storage/pcs/create-container/)
- A domain name




## In theory
When OpenStack Object Storage receives an HTTP request, the host header is checked. If the host header differs from the current hostname, the system treats it as a mapped record and sends a DNS request for the full hostname. 
If a DNS entry is found, the container, the account and the object sought are extracted and the request is rewritten. 
Make sure that your client is using the correct "host" header  so that the Object Storage is able to handle the request.


## HTTP and HTTPS
The feature works correctly with HTTP. However you will get a certificate error if you use HTTPS (as we don't have your private certificate).
You can still use HTTPS, but you will get a warning in most browsers about the certificate.


## CNAME or TXT record?
You can only use one of these DNS records at a time. 


- CNAME: The default record. Use this if you are able to manage your DNS zone, it will automatically follow our endpoint regardless of the IP address. 

- TXT: Only use this if you need to configure your domain on another support, such as a CDN. Remember to check whether the IP address of the endpoint changes. You can also use a "virtual CNAME" if your CDN provider allows it.




## With CNAME
Choose a subdomain (like "static.tuodominio.it"), add a CNAME record and then the destination.

To be interpreted by the Object Storage, the CNAME record must conform to specific rules. Replace the [VARIABLE] in our example with the correct values:


```
[CONTAINER_NAME].auth-[PROJECT_ID].storage.[REGION].cloud.ovh.net.
```


For example, for a container named staticct and a project named 123xxxx456 to be used in sur SBG:


```
staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```


Your DNS record will be:


```
static IN CNAME staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```




## With TXT
Add a TXT record.

To be interpreted by the Object Storage, the TXT record must conform to specific rules.


```
'_swift-remap.' + subdomain
```


For example, if I want to use 'static.mypersonaldomain.ovh', it will be:


```
_swift-remap.static
```


As with the CNAME, replace [VARIABLES] to the correct value. 


```
[CONTAINER_NAME].auth-[PROJECT_ID].storage.[REGION].cloud.ovh.net.
```


For example, for a container named staticct, in project 123xxxx456 used in SBG:


```
staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```


Your DNS record will be:


```
_swift-remap.static IN TXT staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```


If you do not want to use a subdomain, you can use the following command:


```
_swift-remap IN TXT staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```


Finally, the last step for configuring a TXT record is to add an A record for your (sub)domain which points to the Public Cloud Object Storage IP address. 
To do this, use the following commad:


```
dig storage.sbg.cloud.ovh.net
dig storage.gra.cloud.ovh.net
dig storage.bhs.cloud.ovh.net
```



## Please note
You cannot use the following characters in your container name:


- [ . ]
- [ _ ] depending on your DNS provider
- Upper case
- Replace auth-ProjectID with auth_ProjectID




## 
 

