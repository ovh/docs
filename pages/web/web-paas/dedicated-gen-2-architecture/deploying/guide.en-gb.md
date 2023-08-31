---
title: Deployment
slug: deploying
section: Architecture
---

**Last updated 31st August 2023**


## Deploying to Production and Staging

The production branch of your Git repository is designated for production and a `staging` branch is designated for staging.
Any code merged to those branches automatically triggers a rebuild
of the production or staging environment in the {{% names/dedicated-gen-2 %}} cluster.
Any defined users or environment variables are also propagated to the {{% names/dedicated-gen-2 %}} cluster.

Note that there is no automatic cloning of data from the {{% names/dedicated-gen-2 %}} cluster to the Development Environment
the way there is between branches in the Development Environment.
Production data may still be replicated to the Development Environment manually.

Deploys of other branches don't trigger rebuilds of the {{% names/dedicated-gen-2 %}} cluster environments.

## Deployment process

When deploying to the {{% names/dedicated-gen-2 %}} cluster the process is slightly different than when working with {{< vendor/name >}} on the Grid.

* The new application image is built in the exact same fashion as for {{< vendor/name >}} Professional.
* Any active background tasks on the cluster, including cron tasks, are terminated.
* The cluster (production or staging) is closed, meaning it doesn't accept new requests.
Incoming requests receive an HTTP 500 error.
* The application image on all three servers is replaced with the new image.
* The deploy hook is run on one, and only one, of the three servers.
* The cluster is opened to allow new requests.

The deploy usually takes approximately 30-90 seconds, although that is highly dependent on how long the deploy hook takes to run.

During the deploy process the cluster is unavailable.
Nearly all {{% names/dedicated-gen-2 %}} instances are fronted by the Fastly Content Delivery Network (CDN).
Fastly can be configured to allow a "grace period", meaning that requests to the origin that fail are served from the existing cache, even if that cache item is stale.
We configure a default grace period that is longer than a typical deployment, and can extend that time upon request.
That means anonymous users should see no interruption in service at all.
Authenticated traffic that can't be served by the CDN still sees a brief interruption.

## Deployment philosophy

{{< vendor/name >}} values consistency over availability,
which means that deployments can cause your app to be unavailable for a short amount of time.
For more information, see the [overview of the build and deploy phases](../../overview/build-deploy.md).
