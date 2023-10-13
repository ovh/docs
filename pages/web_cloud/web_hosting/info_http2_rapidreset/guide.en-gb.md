---
title: "How to mitigate the HTTP/2 Rapid Reset vulnerability ?"
excerpt: "Find out how to manage with the HTTP/2 Rapid Reset vulnerability"
updated: 2023-10-13
---

## Introductions

On October 10th 2023, researchers and vendors disclosed an HTTP/2 protocol behavior allowing to perform a denial-of-service (DoS) using Layer 7.

Labelled CVE-2023-44487 an attacker can leverage this issue to create additional load on web servers which could lead to denial of service by using HTTP/2 protocol.

An attacker can exploit the vulnerability by quickly initiating and canceling a large number of HTTP/2 streams over an established connection causing excessive resource consumption on server-side with minimal client-side attacker cost. This technical circumvents the server's concurrent stream maximum limit because incoming stream are reset faster than subsequent streams arrive.

Several variations using different query order resulted from the first behavior identified allowing to bypass mitigations based on rate of inbound reset stream.

## Impacts on OVHcloud products

|Range of products|Products|Impact|
|---|---|---|
|Domain & Cloud Web|All products|Not impacted|
|Network|IPLB|Not impacted|
|Web hosting|CDN|Not impacted|

## How to mitigate the vulnerability

OVHcloud-initiated mitigation

OVHcloud infrastructure is not impacted, no action taken on our side.
Customer-initiated mitigation

Services such as web servers that OVHcloud cannot manage must be patched.

## Go further <a name="go-further"></a>

[National vulnerability database - CVE-2023-44487 Detail](https://nvd.nist.gov/vuln/detail/CVE-2023-44487)

[CVE Numbering Authorities - CVE-2023-44487](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-44487)

[Qualys community - CVE-2023-44487 HTTP/2 Rapid Reset Attack](https://blog.qualys.com/vulnerabilities-threat-research/2023/10/10/cve-2023-44487-http-2-rapid-reset-attack)

[CISA - HTTP/2 Rapid Reset Vulnerability, CVE-2023-44487](https://www.cisa.gov/news-events/alerts/2023/10/10/http2-rapid-reset-vulnerability-cve-2023-44487)

[Google Cloud - How it works: The novel HTTP/2 ‘Rapid Reset’ DDoS attack](https://cloud.google.com/blog/products/identity-security/how-it-works-the-novel-http2-rapid-reset-ddos-attack)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-gb/directory/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-gb/support-levels/).

Join our community of users on <https://community.ovh.com/en/>. 
