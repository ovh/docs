---
title: Public Cloud Databases - How to update your service plan
excerpt: Find out how to upgrade the service plan of your cluster
updated: 2024-04-17
---

## Objective

Learn how to upgrade the service plan of your cluster according to your needs.

> [!warning]
> Once you have upgraded your solution, you will not be able to downgrade to a lower solution.
>

## Requirements

- Access to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) 
- A [Public Cloud project](https://www.ovhcloud.com/en-gb/public-cloud/) in your OVHcloud account

## UI Instructions

To upgrade the service plan of your cluster, log in to the OVHcloud Control Panel and open your Public Cloud project. Click `Databases`{.action} in the left navigation bar and select your engine instance.

![Cluster overview](images/cluster_overview.png)

In the `General information`{.action} tab, click `Upgrade your plan`{.action} and choose the desired new plan of your cluster. Then click `Confirm`{.action}.

![Change solution](images/plan_change_view.png)

Curently the UI do not allow downgrading plan for some engine but you can do it with API

## API Instructions

To upgrade or downgrade the service plan of your cluster, Use the following API call:

> [!api]
>
> @api {v1} /cloud PUT /cloud/project/{serviceName}/database/{engine}/{clusterId}
>

```console
body : {
    plan: <essential|business|enterprise>
}
```

In the case you downgrade to essential and that your current flavor and/or number of node is superior of the essential max flavor and/or number of node, you will see an auto downgrade of these two parameters to match essential plan requirement

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/PwPqWUpN8G> and interact directly with the team that builds our databases service!
