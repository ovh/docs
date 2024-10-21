---
title: Public Cloud Databases - How to update your service plan
excerpt: Find out how to upgrade the service plan of your cluster
updated: 2024-08-09
---

## Objective

Learn how to upgrade the service plan of your cluster according to your needs.

> [!warning]
> Once you have upgraded your solution, you will not be able to downgrade to a lower solution.
>

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager) or to the [OVHcloud API](/links/api)
- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account

## Instructions

### Using the OVHcloud Control Panel

To upgrade the service plan of your cluster, log in to the OVHcloud Control Panel and open your Public Cloud project. Click `Databases`{.action} in the left navigation bar and select your engine instance.

![Cluster overview](images/cluster_overview.png)

In the `General information`{.action} tab, click `Upgrade your plan`{.action} and choose the desired new plan of your cluster. Then click `Confirm`{.action}.

![Change solution](images/plan_change_view.png)

Curently the OVHcloud Control Panel does not allow downgrading the service plan for some engines but you can do it using the API.

### Using the OVHcloud API

> [!success]
> If you are not familiar with using the OVHcloud API, please refer to our guide on [Getting started with the OVHcloud API](/pages/manage_and_operate/api/first-steps).

To upgrade or downgrade the service plan of your cluster, use the following API call:

> [!api]
>
> @api {v1} /cloud PUT /cloud/project/{serviceName}/database/{engine}/{clusterId}
>

```console
body : {
    plan: <essential|business|enterprise>
}
```

If you downgrade to an Essential plan, your current flavor and/or number of nodes will be downgraded automatically if they exceed the limits of the Essential plan.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/PwPqWUpN8G> and interact directly with the team that builds our databases service!
