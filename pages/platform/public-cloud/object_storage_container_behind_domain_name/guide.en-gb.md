---
title: 'Placing an Object Storage container behind a domain name'
slug: place-an-object-storage-container-behind-domain-name
legacy_guide_number: 2006
section: Tutorials
---

## Overview
When you create a **public** container, everyone will have access to your data. This is a good way of sharing files over the internet. However, to share your files with your friends, for example, you will need to provide them with a long URL that is usually difficult to remember. You may also want to use these objects on your website without using a domain that is different to what your website uses. With a domain name, you can provide a custom URL to share your data.

This guide explains how to configure a domain name on your containers in order to make it easier to access.


### Requirements
- storage spaces added
- a domain name


## How does it work?

### In theory
When an HTTP request reaches the OpenStack Object Storage, the **"host"** header is checked. If this differs from the current host name, the system considers this as a mapped record, and makes a DNS query in order to get the full DNS record that corresponds to the host. If a DNS record is found, the response will be split to find and extract the container, account, and object you are looking for, and then the request will be rewritten. You will need to ensure that your client has correctly set up the **"host"** header, otherwise the Object Storage will not be able to detect and process your request.


### HTTP and HTTPS
The feature works correctly with HTTP. However, you will receive a certificate error if you use HTTPS, since we do not have your private certificate. You will still be able to use HTTPS, but you will receive certificate alerts on most recent browsers.


### CNAME or TXT record
Only one of these two records can be used at a time:

- CNAME: This is the default, historical record. We recommend using this if you are able to manage the DNS zone; it will follow our access point automatically, even if the IP address changes.
- TXT: Only use this if you need to configure your domain name on a different format, such as a CDN. However, you will need to monitor whether the access point’s IP address changes. You can also use a "virtual CNAME" if your CDN provider allows you to do so.


## Configure your DNS.

### With CNAME.
Choose a subdomain (e.g. static.mypersonaldomain.ovh), add a CNAME record, and then add the target according to the rules explained below.

The CNAME record should follow the rules below in order to be understood by the Object Storage. You will need to edit the **\[VARIABLES]** so that they contain the correct values:


```bash
[CONTAINER_NAME].auth-[PROJECT_ID].storage.[REGION].cloud.ovh.net.
```

For example, for a container named **staticct** and a project **123xxxx456** that will be used on SBG1:


```bash
staticct.auth-123xxxx456.storage.sbg1.cloud.ovh.net.
```

Your DNS record will be:


```bash
static IN CNAME staticct.auth-123xxxx456.storage.sbg1.cloud.ovh.net.
```


### With TXT.
Add a TXT record, and add the value by following the rules explained below.

The TXT record must follow the below rules to be understood by the Object Storage:


```bash
'_swift-remap.' + subdomain
```

For example, for a static.mypersonaldomain.ovh subdomain:


```bash
_swift-remap.static
```

Like the CNAME record, it must also follow the rules below by adjusting the ** \[VARIABLES]** to match the correct value:


```bash
[CONTAINER_NAME].auth-[PROJECT_ID].storage.[REGION].cloud.ovh.net.
```

For example, for a container named **staticct** and a project **123xxxx456** that will be used on SBG1:


```bash
staticct.auth-123xxxx456.storage.sbg1.cloud.ovh.net.
```

Your DNS record will be:


```bash
_swift-remap.static IN TXT staticct.auth-123xxxx456.storage.sbg1.cloud.ovh.net.
```

If you do not want to use a subdomain, you can do this:


```bash
_swift-remap IN TXT staticct.auth-123xxxx456.storage.sbg1.cloud.ovh.net.
```

The last step for configuring the TXT record is to add an A record for your (sub)domain, pointing to the Public Cloud Object Storage IP address. You can get it by using the following commands:


```bash
dig storage.sbg1.cloud.ovh.net
dig storage.gra1.cloud.ovh.net
dig storage.bhs1.cloud.ovh.net
```



> [!alert]
>
> You cannot use the following characters in your container name:
> - [ . ]
> - [ _ ] depending on your DNS provider
> - no upper-case letters
> - replace auth-ProjectID with auth_ProjectID
> 
> 