---
title: Update all the things
updated: 2021-05-11
---



## Objective  

**The Web PaaS Rule:** Update Early, Update Often

Web PaaS periodically updates its container images for the latest security updates from upstream providers.  (PHP versions, Ruby versions, MariaDB versions, etc.).  These do not always happen immediately but when a security vulnerability is identified and released it tends to be fairly soon after.

However, these updates are not automatically propagated to individual projects as that would involve potential customer downtime.  Instead, the latest available version of every requested container is loaded on each deploy to a given environment.  After a deploy you are always guaranteed to be running the latest Web PaaS-provided version of a container.

If you are using Web PaaS-provided [Let's Encrypt TLS certificates](/pages/web_cloud/web_paas_powered_by_platform_sh/configuration/configuration-routes/https), your site will be automatically redeployed approximately once every two months to ensure it always has an up to date certificate.  That will also ensure your container versions are up to date at the same time.
