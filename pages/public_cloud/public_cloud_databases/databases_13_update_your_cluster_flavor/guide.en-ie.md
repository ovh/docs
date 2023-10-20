---
title: Update your cluster flavor
excerpt: Find out how to adjust the flavor of your cluster
updated: 2023-07-10
---

## Objective

Learn how to adjust the flavor of your cluster according to your needs.

## How to upgrade your flavor

This option is available through the OVHcloud [API](https://api.ovh.com/console/) and [Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie).

### Requirements

- Access to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) or to the [API](https://api.ovh.com/console/)
- A [Public Cloud project](https://www.ovhcloud.com/en-ie/public-cloud/) in your OVHcloud account

### Instructions

To adjust the flavor of your cluster, log in to the OVHcloud Control Panel and open your Public Cloud project. Click `Databases`{.action} in the left navigation bar, select your engine instance then click the `General Information`{.action} tab.

![Cluster overview](images/cluster_overview.png)

Click `Change node template`{.action} and adjust the flavor of your cluster.

![Change node template](images/flavor_change_view.png)

## How to downgrade your flavor

This option is currently available via the OVHcloud [API](https://api.ovh.com/console/).

### Requirements

- Access to the OVHcloud [API](https://api.ovh.com/){.external} (create your credentials by consulting [this guide](/pages/manage_and_operate/api/first-steps))
- A [Public Cloud project](https://www.ovhcloud.com/en-ie/public-cloud/) in your OVHcloud account

### Instructions

In order to be able to downgrade your flavor, you must have a threshold of 20% between your current disk space used (base storage + additional storage) and the maximum storage space allowed for the flavor.

![Change node template](images/flavor_change_view.png)

For instance, if you have a PostgreSQL cluster with db1-15 as flavor and less than 384 GB (80% of 480GB) of disk space used, you can decrease the flavor to db1-7 on that endpoint:

> [!api]
> @api {v1} /cloud PUT /cloud/project/{serviceName}/database/mongodb/{clusterId}

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-ie/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/PwPqWUpN8G> and interact directly with the team that builds our databases service!
