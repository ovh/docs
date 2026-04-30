---
title: Update the flavor of Analytics
excerpt: Find out how to adjust the flavor of your cluster
updated: 2025-02-03
---

## Objective

Learn how to adjust the flavor of your cluster according to your needs.

## How to upgrade your flavor

This option is available through the OVHcloud [API](/links/api) and the [Control Panel](/links/manager).

### Requirements

- Access to the [OVHcloud Control Panel](/links/control-panel/publiccloud-projects) or to the [API](/links/api)
- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account

<!-- CP-NAV-START:publiccloud-projects -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Ścieżka nawigacji:** `Public Cloud`{.action} > Wybierz projekt

---
<!-- CP-NAV-END:publiccloud-projects -->

### Instructions

To adjust the flavor of your cluster, click `Data Analysis`{.action} or `Data Streaming`{.action} in the left navigation bar, then select your engine instance.

![Cluster overview](images/cluster_overview.png){.thumbnail}

Click `Change node template`{.action} and adjust the flavor of your cluster.

![Change node template](images/flavor_change.png){.thumbnail}

## How to downgrade your flavor

This option is currently available via the OVHcloud [API](/links/api).

### Requirements

- Access to the OVHcloud [API](/links/api) (create your credentials by consulting [this guide](/pages/manage_and_operate/api/first-steps))
- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account

### Instructions

In order to be able to downgrade your flavor, you must have a threshold of 20% between your current disk space used (base storage + additional storage) and the maximum storage space allowed for the flavor.

![Change node template](images/flavor_change.png){.thumbnail}

For instance, if you have an OpenSearch cluster with db1-15 as flavor and less than 384 GB (80% of 480GB) of disk space used, you can decrease the flavor to db1-7 on that endpoint:

> [!api]
>
> @api {v1} /cloud PUT /cloud/project/{serviceName}/database/opensearch/{clusterId}

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our Analytics service!

Join our [community of users](/links/community).
