---
title: Updates and upgrades
slug: updates-upgrades
section: Overview
order: 2
---

**Last updated 31st August 2023**



## Objective  

{{< vendor/name >}} updates the core software of the {{% names/dedicated-gen-2 %}} cluster (operating system, web server, PHP, MySQL, etc.) periodically, and after any significant security vulnerability is disclosed.
These updates are deployed automatically with no additional work required by you.
We attempt to maintain parity with your development environment, but we don't guarantee absolute parity of point versions of your {{% names/dedicated-gen-2 %}} environments with their corresponding development environments.
I.e, your development environment may have a PHP container running 5.6.30, but your production environment may lag behind at 5.6.22.
We can upgrade point releases on request and always upgrade the underlying software in the event of security release.

Updates to application software (PHP code, JavaScript, etc.) are the responsibility of the customer.
