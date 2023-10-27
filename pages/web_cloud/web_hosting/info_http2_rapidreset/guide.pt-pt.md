---
title: "Como mitigar a vulnerabilidade do HTTP/2 Rapid Reset (EN)"
excerpt: "Find out how to manage the HTTP/2 Rapid Reset vulnerability"
updated: 2023-10-13
---

## Introduction

On October 10th 2023, researchers and vendors disclosed an HTTP/2 protocol behavior allowing to perform a denial-of-service (DoS) using Layer 7.

Labelled CVE-2023-44487, an attacker can leverage this issue to create additional load on web servers which could lead to denial of service by using HTTP/2 protocol.

An attacker can exploit the vulnerability by quickly initiating and cancelling a large number of HTTP/2 streams over an established connection causing excessive resource consumption server-side with minimal client-side attacker cost. This technically circumvents the server's concurrent stream maximum limit because incoming streams are reset faster than subsequent streams arrive.

Several variations using different query orders resulted from the first behaviour identified, allowing to bypass mitigations based on the rate of inbound reset streams.

## Impacts on OVHcloud products

|Range of products|Products|Impact|
|---|---|---|
|Web hosting|CDN|Not impacted|
|Web Cloud|Web hosting - Cloud hosting|Not impacted|
|Bare Metal Cloud|Network - Load Balancer|Not impacted|

## How to mitigate the vulnerability

### OVHcloud-initiated mitigation

If you are using any of the services above, OVHcloud took the appropriate actions to mitigate the vulnerability and you are not impacted.


### Customer-initiated mitigation

In the case your website is hosted on a Cloud Instance (Public Cloud or Hosted Private Cloud) or on a Bare Metal Server having HTTP/2 enabled and exposed on the Internet, we recommend you to apply the latest upgrades to improve your resiliency.

The main vendors released advisories and statements in order to guide you and provide more information.

## External references

[National vulnerability database - CVE-2023-44487 Detail](https://nvd.nist.gov/vuln/detail/CVE-2023-44487)

[CVE Numbering Authorities - CVE-2023-44487](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-44487)

[Qualys community - CVE-2023-44487 HTTP/2 Rapid Reset Attack](https://blog.qualys.com/vulnerabilities-threat-research/2023/10/10/cve-2023-44487-http-2-rapid-reset-attack)
