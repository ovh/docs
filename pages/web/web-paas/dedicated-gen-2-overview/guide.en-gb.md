---
title: {{% names/dedicated-gen-2 %}}
slug: dedicated-gen-2-overview
section: Dedicated-Gen-2
---

**Last updated 31st August 2023**



## Objective  

{{% description %}}

{{% names/dedicated-gen-2 %}} consists of two parts: a Development Environment and a {{% names/dedicated-gen-2 %}} cluster.

## The Development Environment

The Development Environment is a normal Grid environment with all Grid capabilities and workflows.
The default branches are slightly different, as noted in the [default limits](../architecture/development.md#default-limits).

## The {{% names/dedicated-gen-2 %}} cluster

The {{% names/dedicated-gen-2 %}} cluster is a three-host redundant configuration provisioned by {{< vendor/name >}} for each customer.
Every service is replicated across all three hosts in a failover configuration (as opposed to sharding),
allowing a site to remain up even if one of the hosts is lost entirely.

The build process for your application is identical for both the Development Environment and the {{% names/dedicated-gen-2 %}} cluster.
However, because the hosts are provisioned by {{< vendor/name >}}, not as a container,
service configuration must be done by {{< vendor/name >}}'s Customer Success team.
By and large the same flexibility is available but only via filing a support ticket.
