---
title: Pre-Launch Checklist
updated: 2021-05-11
---

**Last updated 11th May 2021**


## Objective  

Before you can take your site live there are a few preparation steps to take.


## 1. Register a domain name with a supported provider

You have a domain name registered for your site with a Registrar of your choice. The registrar must allow you to use CNAMEs for your domain.  (Some registrars may call these Aliases or similar.). If your domain is currently active elsewhere, the Time-To-Live (TTL) on your domain is set to the lowest possible value in order to minimize transition time.

> [!primary]  
> You will not be able to use a `A` record. Verify your DNS provider supports CNAMES. (If it does not you will want to run away from it anyway). Also you will be much happier if it supports Apex domains (more in the next chapter).
> 

## 2. Test your site!

Make sure your site is running and configured as you want it to be, on your master branch.  In particular, see the [Routes documentation](/pages/web/web-paas/configuration-routes). You will need your routes configured appropriately before you begin.  Make sure you have turned off [basic-authentication](/pages/web/web-paas/administration-web/configure-environment) if it was turned on during development.

If your production environment is on a Dedicated instance, ensure that the code is up to date in both your `staging` and `production` branches, as those are what will be mirrored to the Dedicated instances.  Also ensure that the data on the production instance is up to date and ready to launch.

## 3. Optionally obtain a 3rd party TLS certificate

Web PaaS automatically provides TLS certificates for all sites issued by [Let's Encrypt](https://letsencrypt.org/) at no charge.  In most cases this is sufficient and no further action is necessary.  However, if you want to use a 3rd party TLS certificate to encrypt your production site you can obtain one from any number of 3rd party TLS issuers.  Web PaaS does not charge for using a 3rd party TLS certificate, although the issuer may.

Web PaaS supports all kinds of certificates including domain-validated certificates, extended validation (EV) certificates, high-assurance certificates and wildcard certificates.  The use of HA or EV certificates is the main reason why you may wish to use a third party issuer rather than the default certificate.  You will also need a custom certificate if you use wildcard routes, as Let's Encrypt does not support wildcard certificates.

If you do wish to use a 3rd party certificate, ensure it is purchased and active prior to going live.

## 4. Optionally configure your CDN



* For a Grid-based project, that will be the `master-xxxx` domain.  Run `webpaas environment:info edge_hostname` to get the domain name to use.
* 

Consult your CDN's documentation for how to set the CDN's upstream address.



---

* Domain name is registered?
* Your DNS TTL is set as low as possible?
* Your code and data is tested and ready to launch on the `master` (Grid) or `production` (Dedicated) branch?
* Your custom TLS certificate is purchased, if you're using one?
* Your CDN is configured to serve from Web PaaS, if you're using one?

**Time to [Go Live](/pages/web/web-paas/domains-quick-start).**
