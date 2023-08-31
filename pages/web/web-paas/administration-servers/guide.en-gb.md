---
title: Server upgrades
slug: administration-servers
section: Administration
order: 11
---

**Last updated 31st August 2023**



## Objective  

{{< vendor/name >}} runs a variety of servers to deliver its services.
To ensure your projects get the newest features, these servers are occasionally updated.

You don't have to do anything to get the updates.
When they're ready for your project, you see an activity about the server being updated in your [activity logs](../increase-observability/logs/access-logs.md#activity-logs).
These activities don't cause downtime for your project.

The log of the specific activity includes a description of what has changed with the update.

## Affected servers

### Project API server

The project API server responds to API calls to make the CLI and Console work for your project.
It acts as the Git server, mirroring the source repository in the case of [source integrations](../integrations/source/_index.md).

It stores your app code and project configuration, provides API interfaces,
and orchestrates the build and deploy process and other tasks for your environments.

### Project metrics server

The project metrics server retrieves information about your environments' use of RAM, CPU, and disk.
You can view this information as part of [environment metrics](../increase-observability/metrics/_index.md).
