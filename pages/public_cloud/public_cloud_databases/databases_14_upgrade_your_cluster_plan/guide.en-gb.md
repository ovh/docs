---
title: Update the plan of Public Cloud Databases
excerpt: Find out how to upgrade the service plan of your cluster
updated: 2025-07-31
---

## Objective

Learn how to upgrade the service plan of your cluster according to your needs.

> [!warning]
>
> Once you have upgraded your solution, you will not be able to downgrade to a lower solution.

## Requirements

- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account
- Access to the [OVHcloud API](/links/api) (optional)

<!-- CP-NAV-START:publiccloud-projects -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Navigation path:** `Public Cloud`{.action} > Select your project

---
<!-- CP-NAV-END:publiccloud-projects -->

## Instructions

### Using the OVHcloud Control Panel

<!-- CP-STEPS-START:using-the-ovhcloud-control-panel -->
Click `Databases`{.action} in the left navigation bar, select your engine instance then click the `Configuration`{.action} tab.

![Cluster overview](images/cluster_overview.png)

Click `Edit`{.action} on the "Plan" line and adjust the Plan of your cluster.

![Change solution](images/plan_change_view.png)
<!-- CP-STEPS-END:using-the-ovhcloud-control-panel -->

### Using the OVHcloud API

> [!success]
>
> If you are not familiar with using the OVHcloud API, please refer to our guide on [Getting started with the OVHcloud API](/pages/manage_and_operate/api/first-steps).

To upgrade or downgrade the service plan of your cluster, use the following API call:

> [!api]
>
> @api {v1} /cloud PUT /cloud/project/{serviceName}/database/{engine}/{clusterId}
>

```console
body : {
    plan: <essential|business|production|enterprise|advanced>
}
```

If you downgrade to an Essential plan, your current flavor and/or number of nodes will be downgraded automatically if they exceed the limits of the Essential plan.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!