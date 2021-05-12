---
title: Content Delivery Networks
slug: domains-cdn
section: Domains
order: 7
---

**Last updated 11th May 2021**



## Objective  

Web PaaS Dedicated plans include a Fastly CDN account by default, which will be managed by Web PaaS.  Our experience has shown that effective caching can mean a huge difference in the perceived performance of an application by its users, and that placing the caches closer to your users (wherever they may be) is the best solution currently available.

Self-Service Grid plans do not include a CDN by default, but you are welcome to configure one yourself.  See our [guidelines](../bestpractices-http-caching) for when and if to use a CDN for HTTP caching.

We have partnerships with a variety of CDN vendors depending on your application’s needs.  Our recommended CDN provider is [Fastly](fastly).

## DNS management

The distributed nature of most CDNs means that for proper functioning, any domains that you intend to make use of the CDN will be required to use CNAME records for pointing the DNS entries.  Pointing the root domain (example.com) at a CNAME record is not possible for all DNS hosts, so you will need to confirm this functionality or migrate to a new DNS host.  CloudFlare has a [more detailed writeup](https://blog.cloudflare.com/introducing-cname-flattening-rfc-compliant-cnames-at-a-domains-root/) of the challenges of root CNAMEs.

In the event that you and your team choose a pure Fastly solution, this is negated by their providing a set of Anycast IP addresses for you.  This allows you to create A records for your root domain that will point to Fastly’s CDN.

## Initial setup

For Enterprise-Dedicated plans, CDN setup is handled by Web PaaS as part of your onboarding.  After the application is stood up on its Dedicated VMs we can begin the collaborative process of provisioning the CDN and configuring DNS and caching setup. We provide CDN services for both staging and production.

For self-service Grid plans, the setup can be done at any time by the customer.

## Cache configuration

Depending on which CDN is decided as part of the pre-sales analysis, there may be varying levels of flexibility with regard to caching and ongoing cache invalidation.  This should be discussed between your sales representative and senior technical members of your team if there are concerns with CDN configuration and functionality.

If using Fastly as a CDN, it is possible to provide either custom VCL snippets or a full custom VCL file.  Web PaaS will grant customers access to do so upon request.  However, be aware that downtime caused by custom VCL configuration will not be covered by the SLA, just as application code in your repository is not covered by the SLA.

## TLS encryption

Security and the related topic of encryption of data are fundamental principles here at Web PaaS, and as such we provide TLS certificates in the default Enterprise-Dedicated package.  This allows for encryption of all traffic between your users and your application.  By default, we will provision a shared certificate with the chosen CDN vendor.  If you opt for the Global Application Cache, we will provision certificates for both the site subdomain (www) and the asset/CDN subdomain.  We use wildcard certificates to secure production, staging, and any other subdomains simultaneously.  If you need Extended Validation TLS certificates you will need to provide your own from an issuer of your choice that we can install for you.

If you need to provide your own TLS certificate, place the certificate, the unencrypted private key, and the necessary certificate chain supplied by your TLS provider in your application's `private` directory (not web accessible), and then open a ticket to let our team know to install it.

Web PaaS Enterprise-Dedicated supports a single TLS certificate on the origin. Support for multiple certificates is offered only through a CDN such as CloudFront or Fastly. Self-signed certificates can optionally be used on the origin for development purposes or for enabling TLS between the CDN and origin.

All TLS certificates used with CloudFront MUST be 2048 bit certificates.  Larger sizes will not work.

## Host Header forwarding

The `Host` HTTP header tells the server what domain name is being requested, which may vary when multiple domains are served from the same server or through the same proxy, as is the case with a CDN.  However, the CDN cannot use the production domain name in order to reach Web PaaS, as that domain already routes to the CDN.  It therefore will use the origin name provided by Web PaaS.

In order to ensure your TLS certificates are valid for both requests from clients to the CDN and from the CDN to the server on Web PaaS, you will need to take two additional steps:

1\. Configure your CDN to set the `X-Forwarded-Host` HTTP header to the public domain (`example.com`).  That allows the request from the CDN to Web PaaS to still carry the original requested domain.  The specific way to do so will vary by the CDN.

2\. Ensure your application can read from the `X-Forwarded-Host` header should it need the Host information.  Many popular applications already do so, but if you have a custom application make sure that it checks for that header and uses it instead of `Host` as appropriate.


## Web Application Firewall & Anti-DDoS

All Web PaaS-hosted sites, either Grid or Dedicated, live on infrastructure provided by major cloud vendors.  These vendors include their own Level 3 DDoS protection that is sufficient for the vast majority of cases.

Customers are welcome to put their own WAF in front of a Dedicated cluster or add other security measures not included in the offering.

## The router cache

When using a CDN the Web PaaS router's HTTP cache becomes redundant.  In most cases it's best to disable it outright.  Modify your route in `.platform/routes.yaml` like so to disable the cache:

```yaml
"https://{default}/":
    type: upstream
    upstream: "app:http"
    cache:
        # Disable the HTTP cache on this route. It will be handled by the CDN instead.
        enabled: false
```

## Preventing direct access

When using a CDN, you might not want users to access your Web PaaS origin directly. There are three ways to secure your origin.

### Password protected HTTP Authentication

You can password protect your project using [HTTP access control](../administration-web/configure-environment#http-access-control).

Make sure that you generate a password of sufficient strength. You can then share the password with your CDN provider. Make sure the CDN adds a header to authenticate correctly to your origin.

Add a custom header to the origin request with the base64 encoded username:password.

For example: `Aladdin:OpenSesame` would become `Authorization: Basic QWxhZGRpbjpPcGVuU2VzYW1l`.

Be aware that this approach will apply the same user and password to all development environments, too.  You can have developers enter credentials through their browser, or override the access control setting for each child environment.

> [!primary]  
> This is the recommended approach for CloudFlare.
> 

### Allowing and denying IP addresses

If your CDN does not support adding headers to the request to origin, you can allow the IP addresses of your CDN.

> [!primary]  
> You *WILL* have to update your configuration when your CDN updates their IP addresses.
> 

List of IP ranges for:

- [CloudFlare](https://www.cloudflare.com/ips/)

- [Fastly](https://docs.fastly.com/en/guides/accessing-fastlys-ip-ranges)


Be aware that this approach will apply the same IP restrictions to all development environments, too.  To remove it from development environments, you will need to disable it on each environment or else create a single child of `master` where it is disabled, and them make all development branches off of that environment.

### Client authenticated TLS

If your CDN offers this option, an alternative way of securing the connection is [client authenticated TLS](../configuration-routes/https#client-authenticated-tls).

**note**: Please remember to permit your developers to access the origin by creating your own certificate or else they won't be able to access the project url directly. (see below)

CloudFlare has [a very good article](https://support.cloudflare.com/hc/en-us/articles/204899617-Authenticated-Origin-Pulls) on what client authenticated TLS is, and how to set this up.

To activate authenticated TLS follow the following steps:

- Download the correct certificate from your CDN provider.

     - [CloudFlare](https://support.cloudflare.com/hc/en-us/article_attachments/360044928032/origin-pull-ca.pem)
         - *Caveat! an attacker could make a Cloudflare account to bypass your origin restriction. For CloudFlare, using the HTTP access control described above is the recommended way of securing your origin.*
     - [Fastly](https://docs.fastly.com/products/waf-tuning-plus-package#authenticated-tls-to-origin)
- Make sure you have a `.crt` file. If you have have `.pem` file, simply rename it to `cdn.crt`

- Add the `cdn.crt` to your git repository

- Add the relevant configuration to your `.platform.app.yaml` file

```
tls:
    client_authentication: "require"
    client_certificate_authorities:
        - !include
            type: string
            path: cdn.crt
```

> [!primary]  
> The steps above are generally similar but can vary for different CDN providers. Contact your CDN provider's support department for specific assistance.
> 
