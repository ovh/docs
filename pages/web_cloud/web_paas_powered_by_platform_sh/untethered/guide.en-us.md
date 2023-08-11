---
title: Untethered local
updated: 2021-05-11
---

**Last updated 11th May 2021**



## Objective  

It's possible to run your entire site locally on your computer.  That is more performant as there's no extra latency to connect to a remote database and doesn't require an active Internet connection to work.  However, it does require running all necessary services (databases, search servers, etc.) locally.  These can be set up however you prefer, although Web PaaS recommends using a virtual machine to make it easier to share configuration between developers.

If you already have a development workflow in place that works for you, you can keep using it with virtually no changes.

To synchronize data from an environment on Web PaaS, consult the documentation for each [service](/pages/web_cloud/web_paas_powered_by_platform_sh/configuration-services).  Each service type has its own native data import/export process and Web PaaS does not get in the way of that.  It's also straightforward to [download user files](/pages/web_cloud/web_paas_powered_by_platform_sh/tutorials-exporting#downloading-files) from your application using rsync.
