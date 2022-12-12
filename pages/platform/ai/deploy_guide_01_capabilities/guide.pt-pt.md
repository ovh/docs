---
title: AI Deploy - Capabilities and limitations
slug: deploy/capabilities
excerpt: Discover the capabilities and limitations of AI Deploy
section: AI Deploy - Guides
order: 01
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/ai/deploy/capabilities/'
---

**Last updated 8th December, 2022.**

> [!primary]
>
> AI Deploy is in `beta`. During the beta-testing phase, the infrastructure’s availability and data longevity are not guaranteed. Please do not use this service for applications that are in production, as this phase is not complete.
>
> AI Deploy is covered by **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

## Objective

This page provides the technical capabilities and limitations of the Public Cloud AI Deploy offer.
We continuously improve our offers. You can follow and submit ideas to add to our roadmap at <https://github.com/ovh/public-cloud-roadmap/projects/2>.

## BETA phase

Please note that the AI Deploy offer is currently in BETA Phase, meaning:

- the service is free during BETA phase.
- the service is not ready for production.
-	there is no official support.
-	there are no contractual agreements (SLA).
-	the General Availability is uncertain.
-	some features are under development. Please check the roadmap link above to follow progress.

## Capabilities and limitations

### Supported regions and multi-AZ deployments

The AI Deploy offer is available for any OVHcloud account, whatever the country, and physically deployed in the following regions:

- `BHS` (Beauharnois, Canada)
- `GRA` (Gravelines, France)

Entire AI Deploy instances have to be in the same region. Multi-AZ is currently not supported.

### Attached resources

#### Compute resources

##### **Replica type**

You can either choose the number of GPU or CPU for an AI Deploy app, not both.
By default, an app uses one CPU instance.

##### **Available replica ranges**

If you choose `GPU`:

- You can go from 1 to 4 GPU per instance.
- CPU, memory and local storage resources are not customizable but scaled linearly with each additional GPU.

If you choose `CPU`:

- You can go from 1 to 12 CPU per instance.
- Memory and local storage resource is not customizable but scaled linearly with each additional CPU.

Information about maximum number of CPU/GPU, memory per CPU/GPU, and local storage are available with the `ovhai` CLI or OVHcloud Public Cloud price page.

```console
ovhai capabilities
```

##### **Scaling**

AI Deploy offers the possibility to choose between two [scaling strategies](https://docs.ovh.com/pt/publiccloud/ai/deploy/apps-deployments/): **static** or **automatic**.

If you choose `static scaling`:

- You can go from 1 to 10 replicas.

If you choose `autoscaling`:

- You can choose both the **minimum number** of replicas (1 by default) and the **maximum number** of replicas.
- You can define the metric monitored that will act as a trigger for autoscaling: `CPU` or `RAM`.
- You can choose the threshold for the percentage of average use: integer between 1 and 100%.

#### Local storage

Local storage is ephemeral.
Local storage depends on the selected instances during AI Deploy app deployment. Please refer to the compute resources section for more information.

#### Attached storage

You can attach data volumes from Public Cloud Object Storage. Object Storage bucked should be in the same region as your AI Deploy app.
Attached storage allows you to work on several TB of data, while being persistent when you delete your AI Deploy app.

### Features and known limits

#### Permitted deployment

AI Deploy authorizes the deployment of your own Docker images or applications from the [OVHcloud portfolio](https://docs.ovh.com/pt/publiccloud/ai/deploy/apps-portfolio/).

Docker images can be hosted in a public or private registry.

The use of `docker-compose` is not possible.

Please beware that images need to be built with an **AMD architecture**.

#### Maximum execution time

There is no duration limitation on AI Deploy app execution.

#### High-availability

Your application is deployed simultaneously on the amount of selected instances.
To benefit from high-availability, a minimum of two instances is required. In case of instance failure, a new one is automatically created.

#### Rolling upgrade

You can update the Docker image of your application to provide an updated version of your service. Updates are incremental and will not cause any downtime. Your current configuration will also be preserved, such as your HTTP endpoint and deployment policy.
There is no need to stop and restart the application for the image update to take effect.

#### Network

**Public networking** can be used for all the AI Tools.

**Private networking (vRack)** is not supported.

**Ports**: you can map your AI Deploy app to only one port. Default port is 8080.

**Ingress and Egress traffic** are included in the service plans and not metered.

#### Logs and metrics

##### **Logs**

To check the logs of your app, you can do it via the `ovhai` CLI using the following command:

```console
ovhai app logs <app-id>
```

##### **Metrics**

To observe the metrics of your app, you can do so with the `ovhai` CLI using the command above:

```console
ovhai app get <app-id>
```

You can then access your metrics through the `Monitoring Url`.

You are also able to check it from the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) in your app information by clicking on the button `Access dashboards`.

#### Security

A security rule is selected during the AI Deploy app deployment process.

You can either select **Public Access**, allowing anyone to access your application, or **Restricted Access*, via security tokens**.

#### API management

API endpoints to manage your AI Deploy apps can be found here:

- EU: <https://api.ovh.com/console/#/cloud/project/%7BserviceName%7D/ai/app#GET>
- CA: <https://ca.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/ai/app#GET>

#### Command line interface (CLI)

AI Deploy is compliant with the OVHcloud AI CLI. Discover how to [install the OVHcloud AI CLI](https://docs.ovh.com/pt/publiccloud/ai/cli/install-client/){.external}.

## Go further

Browse the full [AI Deploy documentation](https://docs.ovh.com/pt/publiccloud/ai/) to further understand the main concepts and get started.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

Are you on Discord? Connect to our channel at <https://discord.gg/KbrKSEettv> and interact directly with the team that builds our AI services!
