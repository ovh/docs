---
title: Optional features
slug: options
section: Architecture
---

**Last updated 31st August 2023**



## Objective  

You can enable the following features on your {{% names/dedicated-gen-2 %}} projects,
as well as [multiple availability zones](../../dedicated-gen-3/multiple-az.md).

To enable an optional feature or get more information on potential fees,
[contact Sales](https://platform.sh/contact/).

## Multiple applications

{{% multi-app-intro %}}

For more information, see how to [configure multiple apps in a single project](../../create-apps/multi-app/_index.md).

## Staging environments

A dedicated single-node staging machine is provisioned for your application with an identical software configuration to your production hardware, but reduced hardware specs.
This gives the advantages of isolating the staging load from the production hardware as well as having an identical software configuration to perform UAT, but this option doesn't provide a bed for performance testing as the physical hardware configuration isn't the same as production.

## Additional application servers

For especially high-traffic sites we can also add additional application-only servers.
These servers contain just the application code; data storage services (such as SQL, Solr, Redis) are limited to the standard three.
The cluster begins to look more like a standard N-Tier architecture at this point, with a horizontal line of web application servers in front of a 3 node (N+1) cluster of Galera database servers.

Speak to your sales representative about the costs associated with adding additional application servers. 
This configuration requires a separate setup from the default so advanced planning is required.

## SFTP accounts

In addition to SSH accounts, SFTP accounts can be created with a custom user/password that are restricted to certain directories. 
These directories must be one of the writeable mounts (or rather, there’s no point assigning them to the read-only code directory). 
There is no cost for this configuration, and it can be requested at any time via a support ticket. 
SSH public key based authentication is also supported on the SFTP account.

## Error handling

On Grid projects, incoming requests are held at the edge router temporarily during a deploy.
That allows a site to "respond slowly" rather than be offline during a deploy, provided the deploy time is short (a few seconds).

On {{% names/dedicated-gen-2 %}} projects, incoming requests aren't held during deploy and receive a 503 error.
As the {{% names/dedicated-gen-2 %}} cluster is almost always fronted by a CDN,
the CDN continues to serve cached pages during the few seconds of deploy,
so for the vast majority of users there is no downtime or even slow down.
If a request does pass the CDN during a deploy, it isn't counted as downtime covered by our Service Level Agreement.

By default, {{< vendor/name >}} serves generic {{< vendor/name >}}-branded error pages for errors generated before a request reaches the application.
(500 errors, some 400 errors, etc.)  Alternatively you may provide a static error page for each desired error code via a ticket for us to configure with the CDN.
This file may be any static HTML file but is limited to 64 KB in size.

## Remote logging

{{% names/dedicated-gen-2 %}} supports sending logs to a remote logging service such as Loggly, Papertrail, or Logz.io using the `rsyslog` service.
This is an optional feature and you can request that it be enabled via a support ticket.
Once enabled and configured your application can direct log output to the system `syslog` facility
and is replicated to the remote service you have configured.

When contacting support to enable `rsyslog`, you need:

- The name of the remote logging service to use.

- The message template format used by your logging service.

- The specific log files you want forwarded to your logging service.


There is no cost for this functionality.

## IP restrictions

{{< vendor/name >}} supports [project-level IP restrictions (allow/deny) and HTTP Basic authentication](../../environments/http-access-control.md). These may be configured through the Development Environment and are automatically replicated from the production and staging branches to the production and staging environments, respectively.

Changing access control triggers a new deploy of the current environment. 
However, the changes aren’t propagated to child environments until they’re manually redeployed.
