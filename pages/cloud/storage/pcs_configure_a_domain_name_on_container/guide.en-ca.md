---
title: Configure a domain name on your Object Storage container
slug: pcs/link-domain
excerpt: Find here how to configure a domain name on your Object Storage container
section: Object Storage
---


## Preamble
When you create a Public Storage Container, anyone can access your data. It is the ideal solution to share files over the Internet. However, you will need to provide a long URL to do so, which is hard to remember. If you want to use this content on your own website it may be simpler to use your own domain name. This means you can share your data with a customised URL that is easier to remember.

This guide shows you how to configure a domain on your container.


### Prerequisites
- [Have a storage space](../guide.en-gb.md){.ref}
- A domain name


## How does it work?

### In theory
When OpenStack Object Storage receives an HTTP request, the **"host"** header is checked. If the host header differs from the current hostname, the system treats it as a mapped record and sends a DNS request for the full hostname. If a DNS entry is found, the container, the account and the object sought are extracted and the request is rewritten. Make sure that you client is using the correction "host" header, to enable the Object Storage to handle the request.


### HTTP &amp; HTTPS
The feature works correctly with HTTP. However you will get a certificate error if you use HTTPS (as we don't have your private certificate). You can still use HTTPS, but you will get a warning in most browsers about the certificate.


### CNAME or TXT record?
You can only use one of these DNS records at a time. :

- CNAME : The default record. Use this if you are able to manage your DNS zone, it will automatically follow our endpoint regardless of the IP address.
- TXT : Only use this if you need to configure your domain on another support, such as a CDN. Remember to check if the IP address of the endpoint has changed. You can also use a "virtual CNAME" if your CDN provider allows it.


## Configure your DNS

### With CNAME
Choose a subdomain (like "static.tuodominio.it"), add a CNAME record and then the destination.

To be interpreted by the Object Storage, the CNAME record must conform to some specific rules. Replace the **[VARIABLE]** in our example with the correct values:


```bash
[CONTAINER_NAME].auth-[PROJECT_ID].storage.[REGION].cloud.ovh.net.
```

For example, for a container named **staticct** and a project named **123xxxx456** to be used in sur SBG1 :


```bash
staticct.auth-123xxxx456.storage.sbg1.cloud.ovh.net.
```

Your DNS record will be :


```bash
static IN CNAME staticct.auth-123xxxx456.storage.sbg1.cloud.ovh.net.
```


### With TXT
Add a TXT record.

To be interpreted by the Object Storage, the TXT record must conform to specific rules.


```bash
'_swift-remap.' + subdomain
```

For example, if I want to use 'static.mypersonaldomain.ovh', I should use :


```bash
_swift-remap.static
```

As with the CNAME, replace **[VARIABLES]** to the correct value.


```bash
[CONTAINER_NAME].auth-[PROJECT_ID].storage.[REGION].cloud.ovh.net.
```

For example, for a container named **staticct**, in project **123xxxx456** used in SBG 1:


```bash
staticct.auth-123xxxx456.storage.sbg1.cloud.ovh.net.
```

Your DNS record will be :


```bash
_swift-remap.static IN TXT staticct.auth-123xxxx456.storage.sbg1.cloud.ovh.net.
```

If you do not want to use a subdomain, you can use the following command :


```bash
_swift-remap IN TXT staticct.auth-123xxxx456.storage.sbg1.cloud.ovh.net.
```

Finally, the last step for configuring a TXT record is to add an A record for your (sub)domain which points to the Public Cloud Object Storage IP address. To do this, use the following commad:


```bash
dig storage.sbg1.cloud.ovh.net
dig storage.gra1.cloud.ovh.net
dig storage.bhs1.cloud.ovh.net
```



> [!alert]
>
> You cannot use the following characters in your container name :
> :
> - [ . ]
> - [ _ ] depending on your DNS provider
> - Upper case
> - Replace auth-ProjectID with auth_ProjectID
> 
> 