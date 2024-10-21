---
title: "IP address list for Web Hosting clusters"
excerpt: "Find out the appropriate IP addresses to use with your OVHcloud Web Hosting plan"
updated: 2024-02-28
---

## Objective

It might become necessary to manually adjust the access settings of a service. Then, you will need the respective IP address corresponding to your Web Hosting's specific configuration. This might be the case when dealing with DNS zones, ACLs or OVHcloud service options, e.g. CDN, country IPs, paid or free SSL certificates.

**This guide lists all available IP addresses of OVHcloud Web Hosting plans, sorted by clusters.**

> [!primary]
>
> Please note that the IP addresses of the CDN options are "Anycast", meaning they do not need geolocalisation (see also the [product page](/links/web/hosting-options-cdn)).
> 

## Requirements

- an [OVHcloud Web Hosting plan](/links/web/hosting)
- access to the [OVHcloud Control Panel](/links/manager)

## Instructions

To find out on which Web Hosting cluster your service is located, log in to your [OVHcloud Control Panel](/links/manager) and select `Web Cloud`{.action}. Click `Hosting plans`{.action}, then choose the Web Hosting plan concerned. Next, navigate to the `FTP - SSH`{.action} tab.
You can verify the cluster number of the Web Hosting on this page under **FTP server**.

### Cluster 002

#### Cluster IP addresses per country

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|France|FR|213.186.33.2|2001:41d0:1:1b00:213:186:33:2|
|Ireland|IE|188.165.7.2|2001:41d0:1:1b00:188:165:7:2|
|Portugal|PT|94.23.79.2|2001:41d0:1:1b00:94:23:79:2|
|United Kingdom|UK|87.98.255.2|2001:41d0:1:1b00:87:98:255:2|
|Italy|IT|94.23.64.2|2001:41d0:1:1b00:94:23:64:2|
|Spain|ES|87.98.231.2|2001:41d0:1:1b00:87:98:231:2|
|Poland|PL|87.98.239.2|2001:41d0:1:1b00:87:98:239:2|
|Czech Republic|CZ|94.23.175.2|2001:41d0:1:1b00:94:23:175:2|
|Netherlands|NL|94.23.151.2|2001:41d0:1:1b00:94:23:151:2|
|Finland|FI|188.165.143.2|2001:41d0:1:1b00:188:165:143:2|
|Lithuania|LT|188.165.31.2|2001:41d0:1:1b00:188:165:31:2|
|Germany|DE|87.98.247.2|2001:41d0:1:1b00:87:98:247:2|

If you have activated the **Shared CDN** option on your Web Hosting, use this IP address:

```bash
46.105.204.2
```

If you need the **outgoing IP address** of the Web Hosting cluster (gateway), use this IP address:

```bash
51.68.11.191
```

### Cluster 003

#### Cluster IP addresses per country

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|France|FR|213.186.33.4|2001:41d0:1:1b00:213:186:33:4|
|Ireland|IE|188.165.7.4|2001:41d0:1:1b00:188:165:7:4|
|Portugal|PT|94.23.79.4|2001:41d0:1:1b00:94:23:79:4|
|United Kingdom|UK|87.98.255.4|2001:41d0:1:1b00:87:98:255:4|
|Italy|IT|94.23.64.4|2001:41d0:1:1b00:94:23:64:4|
|Spain|ES|87.98.231.4|2001:41d0:1:1b00:87:98:231:4|
|Poland|PL|87.98.239.4|2001:41d0:1:1b00:87:98:239:4|
|Czech Republic|CZ|94.23.175.4|2001:41d0:1:1b00:94:23:175:4|
|Netherlands|NL|94.23.151.4|2001:41d0:1:1b00:94:23:151:4|
|Finland|FI|188.165.143.4|2001:41d0:1:1b00:188:165:143:4|
|Lithuania|LT|188.165.31.4|2001:41d0:1:1b00:188:165:31:4|
|Germany|DE|87.98.247.4|2001:41d0:1:1b00:87:98:247:4|

If you have activated the **Shared CDN** option on your Web Hosting, use this IP address:

```bash
46.105.204.3
```

If you need the **outgoing IP address** of the Web Hosting cluster (gateway), use this IP address:

```bash
51.68.11.195
```

### Cluster 005

#### Cluster IP addresses per country

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|France|FR|213.186.33.16|2001:41d0:1:1b00:213:186:33:16|
|Ireland|IE|188.165.7.16|2001:41d0:1:1b00:188:165:7:16|
|Portugal|PT|94.23.79.16|2001:41d0:1:1b00:94:23:79:16|
|United Kingdom|UK|87.98.255.16|2001:41d0:1:1b00:87:98:255:16|
|Italy|IT|94.23.64.16|2001:41d0:1:1b00:94:23:64:16|
|Spain|ES|87.98.231.16|2001:41d0:1:1b00:87:98:231:16|
|Poland|PL|87.98.239.16|2001:41d0:1:1b00:87:98:239:16|
|Czech Republic|CZ|94.23.175.16|2001:41d0:1:1b00:94:23:175:16|
|Netherlands|NL|94.23.151.16|2001:41d0:1:1b00:94:23:151:16|
|Finland|FI|188.165.143.16|2001:41d0:1:1b00:188:165:143:16|
|Lithuania|LT|188.165.31.16|2001:41d0:1:1b00:188.165.31.16|
|Germany|DE|87.98.247.16|2001:41d0:1:1b00:87:98:247:16|

If you have activated the **Shared CDN** option on your Web Hosting, use this IP address:

```bash
46.105.204.5
```

If you need the **outgoing IP address** of the Web Hosting cluster (gateway), use this IP address:

```bash
51.68.11.199
```

### Cluster 006

#### Cluster IP addresses per country

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|France|FR|213.186.33.17|2001:41d0:1:1b00:213:186:33:17|
|Ireland|IE|188.165.7.17|2001:41d0:1:1b00:188:165:7:17|
|Portugal|PT|94.23.79.17|2001:41d0:1:1b00:94:23:79:17|
|United Kingdom|UK|87.98.255.17|2001:41d0:1:1b00:87:98:255:17|
|Italy|IT|94.23.64.17|2001:41d0:1:1b00:94:23:64:17|
|Spain|ES|87.98.231.17|2001:41d0:1:1b00:87:98:231:17|
|Poland|PL|87.98.239.17|2001:41d0:1:1b00:87:98:239:17|
|Czech Republic|CZ|94.23.175.17|2001:41d0:1:1b00:94:23:175:17|
|Netherlands|NL|94.23.151.17|2001:41d0:1:1b00:94:23:151:17|
|Finland|FI|188.165.143.17|2001:41d0:1:1b00:188:165:143:17|
|Lithuania|LT|188.165.31.17|2001:41d0:1:1b00:188:165:31:17|
|Germany|DE|87.98.247.17|2001:41d0:1:1b00:87:98:247:17|

If you have activated the **Shared CDN** option on your Web Hosting, use this IP address:

```bash
46.105.204.6
```

If you need the **outgoing IP address** of the Web Hosting cluster (gateway), use this IP address:

```bash
51.68.11.203
```

### Cluster 007

#### Cluster IP addresses per country

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|France|FR|213.186.33.18|2001:41d0:1:1b00:213:186:33:18|
|Ireland|IE|188.165.7.18|2001:41d0:1:1b00:188:165:7:18|
|Portugal|PT|94.23.79.18|2001:41d0:1:1b00:94:23:79:18|
|United Kingdom|UK|87.98.255.18|2001:41d0:1:1b00:87:98:255:18|
|Italy|IT|94.23.64.18|2001:41d0:1:1b00:94:23:64:18|
|Spain|ES|87.98.231.18|2001:41d0:1:1b00:87:98:231:18|
|Poland|PL|87.98.239.18|2001:41d0:1:1b00:87:98:239:18|
|Czech Republic|CZ|94.23.175.18|2001:41d0:1:1b00:94:23:175:18|
|Netherlands|NL|94.23.151.18|2001:41d0:1:1b00:94:23:151:18|
|Finland|FI|188.165.143.18|2001:41d0:1:1b00:188:165:143:18|
|Lithuania|LT|188.165.31.18|2001:41d0:1:1b00:188:165:31:18|
|Germany|DE|87.98.247.18|2001:41d0:1:1b00:87:98:247:18|

If you have activated the **Shared CDN** option on your Web Hosting, use this IP address:

```bash
46.105.204.7
```

If you need the **outgoing IP address** of the Web Hosting cluster (gateway), use this IP address:

```bash
51.68.11.207
```

### Cluster 010

#### Cluster IP addresses per country

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|France|FR|213.186.33.19|2001:41d0:1:1b00:213:186:33:19|
|Ireland|IE|188.165.7.19|2001:41d0:1:1b00:188:165:7:19|
|Portugal|PT|94.23.79.19|2001:41d0:1:1b00:94:23:79:19|
|United Kingdom|UK|87.98.255.19|2001:41d0:1:1b00:87:98:255:19|
|Italy|IT|94.23.64.19|2001:41d0:1:1b00:94:23:64:19|
|Spain|ES|87.98.231.19|2001:41d0:1:1b00:87:98:231:19|
|Poland|PL|87.98.239.19|2001:41d0:1:1b00:87:98:239:19|
|Czech Republic|CZ|94.23.175.19|2001:41d0:1:1b00:94:23:175:19|
|Netherlands|NL|94.23.151.19|2001:41d0:1:1b00:94:23:151:19|
|Finland|FI|188.165.143.19|2001:41d0:1:1b00:188:165:143:19|
|Lithuania|LT|188.165.31.19|2001:41d0:1:1b00:188:165:31:19|
|Germany|DE|87.98.247.19|2001:41d0:1:1b00:87:98:247:19|

If you have activated the **Shared CDN** option on your Web Hosting, use this IP address:

```bash
46.105.204.10
```

If you need the **outgoing IP address** of the Web Hosting cluster (gateway), use this IP address:

```bash
51.68.11.211
```

### Cluster 011

#### Cluster IP addresses per country

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|France|FR|213.186.33.40|2001:41d0:1:1b00:213:186:33:40|
|Ireland|IE|188.165.7.40|2001:41d0:1:1b00:188:165:7:40|
|Portugal|PT|94.23.79.40|2001:41d0:1:1b00:94:23:79:40|
|United Kingdom|UK|87.98.255.40|2001:41d0:1:1b00:87:98:255:40|
|Italy|IT|94.23.64.40|2001:41d0:1:1b00:94:23:64:40|
|Spain|ES|87.98.231.40|2001:41d0:1:1b00:87:98:231:40|
|Poland|PL|87.98.239.40|2001:41d0:1:1b00:87:98:239:40|
|Czech Republic|CZ|94.23.175.40|2001:41d0:1:1b00:94:23:175:40|
|Netherlands|NL|94.23.151.40|2001:41d0:1:1b00:94:23:151:40|
|Finland|FI|188.165.143.40|2001:41d0:1:1b00:188:165:143:40|
|Lithuania|LT|188.165.31.40|2001:41d0:1:1b00:188:165:31:40|
|Germany|DE|87.98.247.40|2001:41d0:1:1b00:87:98:247:40|

If you have activated the **Shared CDN** option on your Web Hosting, use this IP address:

```bash
46.105.204.11
```

If you need the **outgoing IP address** of the Web Hosting cluster (gateway), use this IP address:

```bash
51.68.11.215
```

### Cluster 012

#### Cluster IP addresses per country

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|France|FR|213.186.33.48|2001:41d0:1:1b00:213:186:33:48|
|Ireland|IE|188.165.7.48|2001:41d0:1:1b00:188:165:7:48|
|Portugal|PT|94.23.79.48|2001:41d0:1:1b00:94:23:79:48|
|United Kingdom|UK|87.98.255.48|2001:41d0:1:1b00:87:98:255:48|
|Italy|IT|94.23.64.48|2001:41d0:1:1b00:94:23:64:48|
|Spain|ES|87.98.231.48|2001:41d0:1:1b00:87:98:231:48|
|Poland|PL|87.98.239.48|2001:41d0:1:1b00:87:98:239:48|
|Czech Republic|CZ|94.23.175.48|2001:41d0:1:1b00:94:23:175:48|
|Netherlands|NL|94.23.151.48|2001:41d0:1:1b00:94:23:151:48|
|Finland|FI|188.165.143.48|2001:41d0:1:1b00:188:165:143:48|
|Lithuania|LT|188.165.31.48|2001:41d0:1:1b00:188:165:31:48|
|Germany|DE|87.98.247.48|2001:41d0:1:1b00:87:98:247:48|

If you have activated the **Shared CDN** option on your Web Hosting, use this IP address:

```bash
46.105.204.12
```

If you need the **outgoing IP address** of the Web Hosting cluster (gateway), use this IP address:

```bash
51.68.11.219
```

### Cluster 013

#### Cluster IP addresses per country

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|France|FR|213.186.33.24|2001:41d0:1:1b00:213:186:33:24|
|Ireland|IE|188.165.7.24|2001:41d0:1:1b00:188:165:7:24|
|Portugal|PT|94.23.79.24|2001:41d0:1:1b00:94:23:79:24|
|United Kingdom|UK|87.98.255.24|2001:41d0:1:1b00:87:98:255:24|
|Italy|IT|94.23.64.24|2001:41d0:1:1b00:94:23:64:24|
|Spain|ES|87.98.231.24|2001:41d0:1:1b00:87:98:231:24|
|Poland|PL|87.98.239.24|2001:41d0:1:1b00:87:98:239:24|
|Czech Republic|CZ|94.23.175.24|2001:41d0:1:1b00:94:23:175:24|
|Netherlands|NL|94.23.151.24|2001:41d0:1:1b00:94:23:151:24|
|Finland|FI|188.165.143.24|2001:41d0:1:1b00:188:165:143:24|
|Lithuania|LT|188.165.31.24|2001:41d0:1:1b00:188:165:31:24|
|Germany|DE|87.98.247.24|2001:41d0:1:1b00:87:98:247:24|

If you have activated the **Shared CDN** option on your Web Hosting, use this IP address:

```bash
46.105.204.13
```

If you need the **outgoing IP address** of the Web Hosting cluster (gateway), use this IP address:

```bash
51.68.11.223
```

### Cluster 014

#### Cluster IP addresses per country

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|France|FR|213.186.33.87|2001:41d0:1:1b00:213:186:33:87|
|Ireland|IE|188.165.7.87|2001:41d0:1:1b00:188:165:7:87|
|Portugal|PT|94.23.79.87|2001:41d0:1:1b00:94:23:79:87|
|United Kingdom|UK|87.98.255.87|2001:41d0:1:1b00:87:98:255:87|
|Italy|IT|94.23.64.87|2001:41d0:1:1b00:94:23:64:87|
|Spain|ES|87.98.231.87|2001:41d0:1:1b00:87:98:231:87|
|Poland|PL|87.98.239.87|2001:41d0:1:1b00:87:98:239:87|
|Czech Republic|CZ|94.23.175.87|2001:41d0:1:1b00:94:23:175:87|
|Netherlands|NL|94.23.151.87|2001:41d0:1:1b00:94:23:151:87|
|Finland|FI|188.165.143.87|2001:41d0:1:1b00:188:165:143:87|
|Lithuania|LT|188.165.31.87|2001:41d0:1:1b00:188:165:31:87|
|Germany|DE|87.98.247.87|2001:41d0:1:1b00:87:98:247:87|

If you have activated the **Shared CDN** option on your Web Hosting, use this IP address:

```bash
46.105.204.14
```

If you need the **outgoing IP address** of the Web Hosting cluster (gateway), use this IP address:

```bash
51.68.11.227
```

### Cluster 015

#### Cluster IP addresses per country

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|France|FR|213.186.33.3|2001:41d0:1:1b00:213:186:33:3|
|Ireland|IE|188.165.7.3|2001:41d0:1:1b00:188:165:7:3|
|Portugal|PT|94.23.79.3|2001:41d0:1:1b00:94:23:79:3|
|United Kingdom|UK|87.98.255.3|2001:41d0:1:1b00:87:98:255:3|
|Italy|IT|94.23.64.3|2001:41d0:1:1b00:94:23:64:3|
|Spain|ES|87.98.231.3|2001:41d0:1:1b00:87:98:231:3|
|Poland|PL|87.98.239.3|2001:41d0:1:1b00:87:98:239:3|
|Czech Republic|CZ|94.23.175.3|2001:41d0:1:1b00:94:23:175:3|
|Netherlands|NL|94.23.151.3|2001:41d0:1:1b00:94:23:151:3|
|Finland|FI|188.165.143.3|2001:41d0:1:1b00:188:165:143:3|
|Lithuania|LT|188.165.31.3|2001:41d0:1:1b00:188:165:31:3|
|Germany|DE|87.98.247.3|2001:41d0:1:1b00:87:98:247:3|

If you have activated the **Shared CDN** option on your Web Hosting, use this IP address:

```bash
46.105.204.15
```

If you need the **outgoing IP address** of the Web Hosting cluster (gateway), use this IP address:

```bash
51.68.11.231
```

### Cluster 017

#### Cluster IP addresses per country

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|France|FR|213.186.33.50|2001:41d0:1:1b00:213:186:33:50|
|Ireland|IE|188.165.7.50|2001:41d0:1:1b00:188:165:7:50|
|Portugal|PT|94.23.79.50|2001:41d0:1:1b00:94:23:79:50|
|United Kingdom|UK|87.98.255.50|2001:41d0:1:1b00:87:98:255:50|
|Italy|IT|94.23.64.50|2001:41d0:1:1b00:94:23:64:50|
|Spain|ES|87.98.231.50|2001:41d0:1:1b00:87:98:231:50|
|Poland|PL|87.98.239.50|2001:41d0:1:1b00:87:98:239:50|
|Czech Republic|CZ|94.23.175.50|2001:41d0:1:1b00:94:23:175:50|
|Netherlands|NL|94.23.151.50|2001:41d0:1:1b00:94:23:151:50|
|Finland|FI|188.165.143.50|2001:41d0:1:1b00:188:165:143:50|
|Lithuania|LT|188.165.31.50|2001:41d0:1:1b00:188:165:31:50|
|Germany|DE|87.98.247.50|2001:41d0:1:1b00:87:98:247:50|

If you have activated the **Shared CDN** option on your Web Hosting, use this IP address:

```bash
46.105.204.17
```

If you need the **outgoing IP address** of the Web Hosting cluster (gateway), use this IP address:

```bash
51.68.11.239
```

### Cluster 020

#### Cluster IP addresses per country

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|France|FR|46.105.57.169|2001:41d0:301::20|
|Ireland|IE|51.254.78.227|2001:41d0:301:3::20|
|Portugal|PT|5.135.59.60|2001:41d0:301:2::20|
|United Kingdom|UK|51.254.94.183|2001:41d0:301:12::20|
|Italy|IT|37.59.236.156|2001:41d0:301:11::20|
|Spain|ES|37.59.203.111|2001:41d0:301:4::20|
|Poland|PL|178.32.149.185|2001:41d0:301:5::20|
|Czech Republic|CZ|51.254.181.43|2001:41d0:301:6::20|
|Netherlands|NL|37.59.164.205|2001:41d0:301:7::20|
|Finland|FI|5.196.208.117|2001:41d0:301:8::20|
|Lithuania|LT|5.196.129.52|2001:41d0:301:9::20|
|Germany|DE|5.135.108.219|2001:41d0:301:1::20|
|Belgium|BE|5.196.203.200|2001:41d0:301:10::20|

If you have activated the **Shared CDN** option on your Web Hosting, use this IP address:

```bash
46.105.204.20
```

If you need the **outgoing IP address** of the Web Hosting cluster (gateway), use this IP address:

```bash
91.134.248.253
```

### Cluster 021

#### Cluster IP addresses per country

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|France|FR|188.165.53.185|2001:41d0:301::21|
|Ireland|IE|188.165.6.20|2001:41d0:301:6::21|
|Portugal|PT|94.23.75.235|2001:41d0:301:2::21|
|United Kingdom|UK|94.23.152.220|2001:41d0:301:12::21|
|Italy|IT|94.23.69.227|2001:41d0:301:11::21|
|Spain|ES|87.98.230.241|2001:41d0:301:4::21|
|Poland|PL|188.165.23.19|2001:41d0:301:5::21|
|Czech Republic|CZ|94.23.173.184|2001:41d0:301:6::21|
|Netherlands|NL|94.23.144.60|2001:41d0:301:7::21|
|Finland|FI|188.165.139.219|2001:41d0:301:8::21|
|Lithuania|LT|188.165.30.41|2001:41d0:301:9::21|
|Germany|DE|94.23.162.9|2001:41d0:301:1::21|
|Belgium|BE|178.32.40.72|2001:41d0:301:10::21|

If you have activated the **Shared CDN** option on your Web Hosting, use this IP address:

```bash
46.105.204.21
```

If you need the **outgoing IP address** of the Web Hosting cluster (gateway), use this IP address:

```bash
91.134.248.245
```

### Cluster 023

#### Cluster IP addresses per country

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|France|FR|164.132.235.17|2001:41d0:301::23|
|Ireland|IE|79.137.112.24|2001:41d0:301:3::23|
|Portugal|PT|5.135.68.66|2001:41d0:301:2::23|
|United Kingdom|UK|178.32.59.150|2001:41d0:301:12::23|
|Italy|IT|178.32.140.171|2001:41d0:301:11::23|
|Spain|ES|51.254.16.36|2001:41d0:301:4::23|
|Poland|PL|87.98.235.184|2001:41d0:301:5::23|
|Czech Republic|CZ|94.23.169.83|2001:41d0:301:6::23|
|Netherlands|NL|94.23.148.187|2001:41d0:301:7::23|
|Finland|FI|178.32.17.246|2001:41d0:301:8::23|
|Lithuania|LT|37.59.69.122|2001:41d0:301:9::23|
|Germany|DE|87.98.242.65|2001:41d0:301:1::23|
|Belgium|BE|137.74.229.68|2001:41d0:301:10::23|

If you have activated the **Shared CDN** option on your Web Hosting, use this IP address:

```bash
46.105.204.23
```

If you need the **outgoing IP address** of the Web Hosting cluster (gateway), use this IP address:

```bash
91.134.248.235
```

### Cluster 024

#### Cluster IP addresses per country

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|France|FR|188.165.61.82|2001:41d0:301::24|
|Ireland|IE|188.165.6.81|2001:41d0:301:3::24|
|Portugal|PT|5.135.68.67|2001:41d0:301:2::24|
|United Kingdom|UK|178.32.59.194|2001:41d0:301:12::24|
|Italy|IT|178.32.140.172|2001:41d0:301:11::24|
|Spain|ES|51.255.132.41|2001:41d0:301:4::24|
|Poland|PL|94.23.88.105|2001:41d0:301:5::24|
|Czech Republic|CZ|94.23.169.75|2001:41d0:301:6::24|
|Netherlands|NL|94.23.149.14|2001:41d0:301:7::24|
|Finland|FI|188.165.138.2|2001:41d0:301:8::24|
|Lithuania|LT|164.132.150.73|2001:41d0:301:9::24|
|Germany|DE|178.33.38.88|2001:41d0:301:1::24|
|Belgium|BE|213.32.81.103|2001:41d0:301:10::24|

If you have activated the **Shared CDN** option on your Web Hosting, use this IP address:

```bash
46.105.204.24
```

If you need the **outgoing IP address** of the Web Hosting cluster (gateway), use this IP address:

```bash
91.134.248.230
```

### Cluster 026

#### Cluster IP addresses per country

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|France|FR|87.98.154.146|2001:41d0:301::26|
|Ireland|IE|188.165.4.35|2001:41d0:301:3::26|
|Portugal|PT|51.254.64.107|2001:41d0:301:2::26|
|United Kingdom|UK|91.134.201.112|2001:41d0:301:12::26|
|Italy|IT|94.23.66.212|2001:41d0:301:11::26|
|Spain|ES|188.165.129.145|2001:41d0:301:4::26|
|Poland|PL|178.32.205.96|2001:41d0:301:5::26|
|Czech Republic|CZ|137.74.234.211|2001:41d0:301:6::26|
|Netherlands|NL|137.74.180.117|2001:41d0:301:7::26|
|Finland|FI|137.74.48.119|2001:41d0:301:8::26|
|Lithuania|LT|188.165.29.126|2001:41d0:301:9::26|
|Germany|DE|94.23.160.29|2001:41d0:301:1::26|
|Belgium|BE|178.32.43.46|2001:41d0:301:10::26|

If you have activated the **Shared CDN** option on your Web Hosting, use this IP address:

```bash
46.105.204.26
```

If you need the **outgoing IP address** of the Web Hosting cluster (gateway), use this IP address:

```bash
91.134.248.211
```

### Cluster 027

#### Cluster IP addresses per country

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|France|FR|54.36.91.62|2001:41d0:301::27|
|Ireland|IE|54.36.31.145|2001:41d0:301:3::27|
|Portugal|PT|193.70.24.82|2001:41d0:301:2::27|
|United Kingdom|UK|54.36.203.165|2001:41d0:301:12::27|
|Italy|IT|178.32.138.212|2001:41d0:301:11::27|
|Spain|ES|213.32.37.233|2001:41d0:301:4::27|
|Poland|PL|178.32.203.125|2001:41d0:301:5::27|
|Czech Republic|CZ|54.37.182.230|2001:41d0:301:6::27|
|Netherlands|NL|54.36.41.83|2001:41d0:301:7::27|
|Finland|FI|188.165.140.194|2001:41d0:301:8::27|
|Lithuania|LT|51.255.97.18|2001:41d0:301:9::27|
|Germany|DE|91.134.179.251|2001:41d0:301:1::27|
|Belgium|BE|193.70.58.226|2001:41d0:301:10::27|

If you have activated the **Shared CDN** option on your Web Hosting, use this IP address:

```bash
46.105.204.27
```

If you need the **outgoing IP address** of the Web Hosting cluster (gateway), use this IP address:

```bash
54.37.121.239
```

### Cluster 028

#### Cluster IP addresses per country

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|France|FR|51.91.236.193|2001:41d0:301::28|
|Ireland|IE|92.222.139.190|2001:41d0:301:3::28|
|Portugal|PT|217.182.39.251|2001:41d0:301:2::28|
|United Kingdom|UK|193.70.71.149|2001:41d0:301:12::28|
|Italy|IT|51.255.117.202|2001:41d0:301:11::28|
|Spain|ES|54.36.145.173|2001:41d0:301:4::28|
|Poland|PL|213.32.10.111|2001:41d0:301:5::28|
|Czech Republic|CZ|54.38.116.114|2001:41d0:301:6::28|
|Netherlands|NL|176.31.23.191|2001:41d0:301:7::28|
|Finland|FI|51.255.135.35|2001:41d0:301:8::28|
|Lithuania|LT|51.83.29.135|2001:41d0:301:9::28|
|Germany|DE|54.37.173.127|2001:41d0:301:1::28|
|Belgium|BE|193.70.70.144|2001:41d0:301:10::28|

If you have activated the **Shared CDN** option on your Web Hosting, use this IP address:

```bash
46.105.204.28
```

If you need the **outgoing IP address** of the Web Hosting cluster (gateway), use this IP address:

```bash
91.134.248.249
```

### Cluster 029

#### Cluster IP addresses per country

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|France|FR|51.91.236.255|2001:41d0:301::29|
|Ireland|IE|92.222.139.156|2001:41d0:301:3::29|
|Portugal|PT|46.105.159.220|2001:41d0:301:2::29|
|United Kingdom|UK|178.32.48.109|2001:41d0:301:12::29|
|Italy|IT|178.32.137.139|2001:41d0:301:11::29|
|Spain|ES|188.165.132.144|2001:41d0:301:4::29|
|Poland|PL|213.32.10.205|2001:41d0:301:5::29|
|Czech Republic|CZ|5.196.248.55|2001:41d0:301:6::29|
|Netherlands|NL|51.83.124.4|2001:41d0:301:7::29|
|Finland|FI|79.137.116.129|2001:41d0:301:8::29|
|Lithuania|LT|164.132.14.117|2001:41d0:301:9::29|
|Germany|DE|145.239.222.45|2001:41d0:301:1::29|
|Belgium|BE|178.32.44.140|2001:41d0:301:10::29|

If you have activated the **Shared CDN** option on your Web Hosting, use this IP address:

```bash
46.105.204.29
```

If you need the **outgoing IP address** of the Web Hosting cluster (gateway), use this IP address:

```bash
91.134.248.192
```

### Cluster 030

#### Cluster IP addresses per country

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|France|FR|145.239.37.162|2001:41d0:301::30|
|Ireland|IE|178.32.77.113|2001:41d0:301:3::30|
|Portugal|PT|5.135.68.91|2001:41d0:301:2::30|
|United Kingdom|UK|91.134.177.228|2001:41d0:301:12::30|
|Italy|IT|94.23.73.16|2001:41d0:301:11::30|
|Spain|ES|149.202.105.228|2001:41d0:301:4::30|
|Poland|PL|188.165.21.8|2001:41d0:301:5::30|
|Czech Republic|CZ|94.23.168.143|2001:41d0:301:6::30|
|Netherlands|NL|149.202.25.75|2001:41d0:301:7::30|
|Finland|FI|188.165.140.151|2001:41d0:301:8::30|
|Lithuania|LT|188.165.24.146|2001:41d0:301:9::30|
|Germany|DE|51.255.232.79|2001:41d0:301:1::30|
|Belgium|BE|213.32.107.241|2001:41d0:301:10::30|

If you have activated the **Shared CDN** option on your Web Hosting, use this IP address:

```bash
46.105.204.30
```

If you need the **outgoing IP address** of the Web Hosting cluster (gateway), use this IP address:

```bash
51.178.146.199
```

### Cluster 031

#### Cluster IP addresses per country

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|France|FR|146.59.209.152|2001:41d0:301::31|
|Ireland|IE|188.165.5.107|2001:41d0:301:3::31|
|Portugal|PT|51.178.229.47|2001:41d0:301:2::31|
|United Kingdom|UK|178.32.52.177|2001:41d0:301:12::31|
|Italy|IT|94.23.66.84|2001:41d0:301:11::31|
|Spain|ES|51.255.26.63|2001:41d0:301:4::31|
|Poland|PL|87.98.236.253|2001:41d0:301:5::31|
|Czech Republic|CZ|217.182.52.81|2001:41d0:301:6::31|
|Netherlands|NL|213.32.108.83|2001:41d0:301:7::31|
|Finland|FI|178.32.10.72|2001:41d0:301:8::31|
|Lithuania|LT|88.165.30.182|2001:41d0:301:9::31|
|Germany|DE|151.80.4.219|2001:41d0:301:1::31|
|Belgium|BE|217.182.187.17|2001:41d0:301:10::31|

If you have activated the **Shared CDN** option on your Web Hosting, use this IP address:

```bash
46.105.204.31
```

If you need the **outgoing IP address** of the Web Hosting cluster (gateway), use this IP address:

```bash
141.94.87.67
```

### Cluster 051

#### Cluster IP addresses per country

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|Canada|CA|51.161.122.78|2607:5300:202:0:0::51|

If you have activated the **Shared CDN** option on your Web Hosting, use this IP address:

```bash
46.105.204.51
```

If you need the **outgoing IP address** of the Web Hosting cluster (gateway), use this IP address:

```bash
51.161.94.36
```

### Cluster 100

#### Cluster IP addresses per country

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|France|FR|5.135.23.164|2001:41d0:301::100|
|Ireland|IE|188.165.0.143|2001:41d0:301:3::100|
|Portugal|PT|94.23.76.76|2001:41d0:301:2::100|
|United Kingdom|UK|87.98.254.187|2001:41d0:301:12::100|
|Italy|IT|178.32.143.165|2001:41d0:301:11::100|
|Spain|ES|178.33.119.211|2001:41d0:301:4::100|
|Poland|PL|94.23.89.116|2001:41d0:301:5::100|
|Czech Republic|CZ|94.23.172.226|2001:41d0:301:6::100|
|Netherlands|NL|94.23.146.244|2001:41d0:301:7::100|
|Finland|FI|188.165.137.37|2001:41d0:301:8::100|
|Lithuania|LT|188.165.26.152|2001:41d0:301:9::100|
|Germany|DE|87.98.243.177|2001:41d0:301:1::100|
|Belgium|BE|91.121.217.51|2001:41d0:301:10::100|

If you have activated the **Shared CDN** option on your Web Hosting, use this IP address:

```bash
46.105.204.100
```

If you need the **outgoing IP address** of the Web Hosting cluster (gateway), use this IP address:

```bash
54.36.142.130
```

## Go further

[Hosting multiple websites on your Web Hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite)

[Activating HTTPS on your website with an SSL certificate](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Optimise your website’s performance](/pages/web_cloud/web_hosting/optimise_your_website_performance)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).