---
title: DNS management and apex domains
slug: dns
section: Steps
---

**Last updated 31st August 2023**



## Objective  

Using `CNAME` records helps [prevent downtime](#cname-records) during maintenance operations.
But `CNAME` records can't point to apex domains,
so you need to [set up a workaround](#workarounds-for-apex-domains).
Available workarounds depend on your DNS provider.
 
### `CNAME` records
 
Each site on {{< vendor/name >}} is made up of a set of containers.
To map incoming requests to the appropriate container,
{{< vendor/name >}} runs routers in [each region](../../development/regions.md).
A router's IP address can change in two cases:
- During an upgrade or maintenance operation, routers can be taken offline while changes are applied.

- During a region upscale or downscale, routers can be added or removed.

 
In such situations, using `A` records can cause downtime.
`A` records map a domain to an IP address.
When a router's IP address changes,
you need to manually update your `A` records.
Your site remains offline until you do,
or until the router is back from maintenance.
 
To prevent downtime, create `CNAME` records through your DNS provider.
`CNAME` records map a domain to another.
Set up your `CNAME` records to point at your project's [target URL](../../domains/steps/_index.md#2-get-the-target-for-your-project).
The DNS record for this target URL automatically resolves to the IP addresses of the routers in your project's region.
When a router's IP address changes,
the DNS record is automatically and immediately updated.
This prevents downtime without intervention from you.
 
Note that `CNAME` records can't point to [apex domains](../../other/glossary.md#apex-domain).
Check with your DNS provider if they offer [workarounds](#workarounds-for-apex-domains).
 
## Workarounds for apex domains

Although `CNAME` records can't point to apex domains,
most DNS providers offer workarounds.
Contact your DNS provider and choose the option that works for you.

If you use a CDN, you likely already have a workaround in place,
such as with [Fastly](../cdn/fastly.md#3-handle-apex-domains)
and [Cloudflare](../cdn/cloudflare.md#3-handle-apex-domains).
 
### Custom records

Some DNS providers offer custom records such as `ANAME` or `ALIAS` records,
which you can manage like `CNAME` records.
But unlike `CNAME` records, these custom records can point to apex domains.
 
To use custom records, follow the instructions on [how to set up a custom domain](./_index.md).
When you come to configuring your DNS provider, instead of a `CNAME` record,
add a custom record pointing from your domain to [your project's target URL](https://docs.platform.sh/domains/steps.html#2-get-the-target-for-your-project).

### Domain forwarding

If your DNS provider doesn't support custom records,
consider using domain forwarding.
 
If your domain is `example.com`, domain forwarding redirects all requests from `example.com` to `www.example.com`.
 
To use domain forwarding, follow these steps:
 
1\.  Make the `www.` version of your site the default (canonical) version

    and configure your app and routes to [use the `www` subdomain as `upstream`](../../define-routes/_index.md).
 
2\.  Follow the instructions on [how to set up a custom domain](./_index.md).

    When you come to configuring your DNS provider,
    instead of a `CNAME` record, add a record forwarding requests
    from `{{<variable "YOUR_DOMAIN" >}}` to `www.{{<variable "YOUR_DOMAIN" >}}`.

### Redirection service

If your DNS provider doesn't support custom records or domain forwarding,
consider using a redirection service.
If your domain is `example.com`,
a redirection service uses an `A` record to redirect all requests from `example.com` to `www.example.com`.

To use a redirection service, follow these steps:

1\.  Make the `www.` version of your site the default (canonical) version

    and configure your app and routes to [use the `www` subdomain as `upstream`](../../define-routes/_index.md).

2\.  Follow the instructions on [how to set up a custom domain](./_index.md).

    When you come to configuring your DNS provider, instead of a `CNAME` record,
    add an `A` record pointing from your domain to the redirection service.

### `A` records

If your DNS provider doesn't support any other workaround,
consider using `A` records, but only as a last resort.
When you use `A` records, [if a router's IP address changes](#cname-records),
you need to update your `A` records manually.
Until you do, your site can appear offline because requests are lost.

To use `A` records, follow these steps:

1\.  To get the IP addresses of your project's production environment, run the following command:


```bash
dig +short $(platform environment:info edge_hostname)
```
     
2\.  Follow the instructions on [how to set up a custom domain](./_index.md).

    When you come to configuring your DNS provider, instead of a `CNAME` record,
    add `A` records pointing from your domain to each of the IP addresses from step 1.
    When a request comes in, one of those IP addresses is used at random.
