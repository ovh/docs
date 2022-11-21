---
title: AI Deploy - Scaling strategies
slug: deploy/apps-deployments
excerpt: Understand the scaling strategies (static scaling vs autoscaling) of AI Deploy
section: AI Deploy - Guides
order: 04
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/ai/deploy/apps-deployments/'
---

**Last updated 3rd November, 2022.**

> [!primary]
>
> AI Deploy is in `beta`. During the beta-testing phase, the infrastructure’s availability and data longevity are not guaranteed. Please do not use this service for applications that are in production, as this phase is not complete.
>
> AI Deploy is covered by **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

## Objective

This guide covers the use of the different scaling strategies for AI Deploy. The objective is to explain the difference between **static scaling** and **autoscaling** so that you can choose the best solution depending on the use case and type of deployment.

## Requirements

- a **Public Cloud** project
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- start deploying an app and get to **Step 3**: `Resources`

## Scaling principles

In the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), it is possible to select the **resources** in `Step 3` of the app deployment.

This step allows you to choose between two scaling strategies: **static scaling** and **autoscaling**.

### Static scaling

The **static scaling** strategy allows you to choose the number of replicas on which the app will be deployed.

The minimum number of replicas is **1** and the maximum is **10**.

> [!warning]
>
> It is recommended to deploy on a **minimum of 2 replicas** to have high availability!
>

**When to choose static scaling?**

- Static scaling can be used if you want to have fixed costs.
- This scaling strategy is also useful when your consumption or inference load are fixed.

### Autoscaling

With the autoscaling strategy, you can play on several parameters.

#### Minimum and maximum number of replicas

With the autoscaling strategy, it is possible to choose both the **minimum number of replicas** (1 by default) and the **maximum number of replicas**.

#### Monitored metric

It is also possible to choose the metric to be monitored. This will act as a trigger for **autoscaling**. There are two metrics to choose from: `CPU` or `RAM`.

#### Trigger threshold

The threshold for the percentage of average use can also be chosen. It is an integer between 1 and 100%.

The threshold of the average usage percentage will trigger the scaling (up or down) of the app replicas.

> [!primary]
>
> **High availability** will measure the average resource usage across its replicas and add instances if this average exceeds the specified average usage percentage threshold.
>
> Conversely, it will remove instances when this average resource utilisation falls below the threshold.
>

**When to choose autoscaling?**

- You can use autoscaling if you have irregular or sawtooth inference loads.

## Scaling example

We will use the following example:  

In case an app is based on the `AI1-1-CPU` flavor with a resource size of 2 (i.e. **2 CPUs**), this means that each replica of the application will be entitled to **2 vCores** and **8GiB RAM**.

### Example 1

First, we choose an `Autoscaling`.

Then we set the trigger threshold to `75%` of **CPU**.

In this case, the app will be scaled up when the average CPU usage across all its replicas is above **> 1.5 CPU (2*0.75)**, and it will be scaled down when the average CPU usage falls below **< 1.5**.

### Example 2

In this second example, we choose an `Autoscaling`.

Then we set the trigger threshold to `60%` of **RAM**.

In this example, the app will be scaled up when the average RAM usage across all its replicas is above **> 4.8 GB (8*0.60)**, and it will be scaled down when the average RAM usage falls below **< 4.8 GB** again.

> [!primary]
>
> The **total deployment price** will be calculated using the minimum number of replicas.
>

> [!warning]
>
> The cost may increase as `Autoscaling` increases.
>

## Feedback

Please feel free to send us your questions, feedback and suggestions to help our team improve the service on the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
