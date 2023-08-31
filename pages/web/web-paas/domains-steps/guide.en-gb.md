---
title: Set up a custom domain
slug: domains-steps
section: Domains
order: 7
---

**Last updated 31st August 2023**



## Objective  

Once your project is ready for production, replace the automatically generated domain with your own custom domain.

Note that adding a domain disables the automatically generated URL for your Production environment only.
If you are an Enterprise or Elite customer and have a Grid or {{% names/dedicated-gen-3 %}} project, you can [customize the URLs for your non-production environments](/domains/steps/custom-non-production-domains).
{{% names/dedicated-gen-2 %}} customers can also customize the domain for their Staging environment.

## Before you begin

You need:

- A project that's ready to go live

- A domain with access to its settings with the registrar

- A registrar that allows `CNAME` records or [one of the alternatives](./dns.md) on [apex domains](../../other/glossary.md#apex-domain)

- Optional: The [CLI](../../administration/cli/_index.md) installed locally

- If you are on a development plan, you need to [upgrade your tier to a production plan](#1-change-your-plan-to-a-production-plan).


If you are planning to use several subdomains of the same domain on different projects,
see how to [manage multiple subdomains](subdomains) *before* you add your domain to {{< vendor/name >}}.

## 2. Get the target for your project

You want to point your DNS record to the automatically generated URL.
Your domain needs to point to that target for your site to go live.

For Dedicated plans, get the target for your project from your {{< vendor/name >}} contact.

> [!tabs]      

## 3. Configure your DNS provider

Your DNS provider (usually your registrar) is where you manage your domain.
Most registrars offer similar functionalities regarding DNS configuration but use different terminology or configuration.
For example, some registrars require you to use an `@` to create custom records on the apex domain, while others don't.
Check your registrar's documentation.

Note that depending on your registrar and the time to live (TTL) you set,
it can take anywhere from 15 minutes to 72 hours for DNS changes to be taken into account.

> [!tabs]      

## 4. Set your domain

Add a single domain to your project:

> [!tabs]      

## What's next

* [Use a content delivery network](../cdn/_index.md)
* [Use subdomains across multiple projects](./subdomains.md)
* [Use a custom TLS certificate](./tls.md)
