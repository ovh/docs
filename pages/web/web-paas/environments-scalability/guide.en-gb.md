---
title: Scale your live site
slug: environments-scalability
section: Environments
---

**Last updated 31st August 2023**



## Objective  

Your production environment gets a [pool of resources](../create-apps/app-reference.md#sizes)
based on your [plan size](../administration/pricing/_index.md).
These resources are split up between the apps and services you've defined.

You might occasionally get increased load on your site,
such as during a major product launch or a sales event like Black Friday.
This pressure might cause problems in your site or even bring it down.
At such times, you want your site to have enough resources to handle the additional load.

How your site handles the need to scale depends on your plan.
On higher tiers with the Observability Suite,
everything is taken care of automatically.
When your site starts experiencing pressure,
it gets the resources needed to handle that pressure.
On lower tiers, you have to handle that yourself, often after your site has gone down.

If you know a spike in traffic is likely coming,
scale your plan up in advance to handle the event and downscale after it.
You're only charged for the time when the plan was higher.

## Manually scale Grid environments

To increase the pool of resources available to your project,
[upgrade your plan](../administration/pricing/_index.md#switch-plans) and redeploy your site.
