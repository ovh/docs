---
title: AI Deploy - Caractéristiques, capacités et limites (EN)
slug: deploy/capabilities
excerpt: "Découvrez les principales caractéristiques, capacités et limites de AI Deploy"
section: AI Deploy - Guides
order: 01
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/ai/deploy/capabilities/'
updated: 2023-04-04
---

**Last updated 4th April, 2023.**

> [!primary]
>
> AI Deploy is covered by **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

## Objective

This page provides the technical capabilities and limitations of the Public Cloud AI Deploy offer.

## Features

### Available features

AI Deploy allows you to deploy your AI applications and models with compute resources (CPUs, GPUs) and high availability.

| Feature                                    | Details                                                                                                                                                                                                                                   |
|--------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **AI environments**                        |                                                                                                                                                                                                                                           |
| Preinstalled Machine Learning environments | AI Deploy comes with a generic Python environment (Conda) or pre-installed ones, such as Pytorch, Tensorflow, FastAI, HuggingFace and more.                                                                                               |
| Easy customization                         | AI Deploy allows installation of almost any Conda or Pip packages. You can easily customize your environment to suit your needs. It also allows you to use your own environment by specifying your Docker image.                          |
| **Management**                             |                                                                                                                                                                                                                                           |
| Multiple ways to manage your deployed apps | You can manage your AI Deploy apps through the OVHcloud Control Panel, API or CLI. Depending on your needs, you can easily automate their creation and deletion as well.                                                                      |
| Easy start and Stop                        | You can start and stop an app in one click.                                                                                                                                                                                               |
| Check the logs of your app                 | You can also check the logs of your deployed app through the OVHcloud Control Panel, API or CLI.                                                                                                                                              |
| **Compute resources**                      |                                                                                                                                                                                                                                           |
| Guaranteed compute resources               | Select the amount of CPUs or GPUs required during the creation of the AI Deploy app. Once launched, you will keep these resources as long as your app is running.                                                                         |
| Background execution                       | Your tasks can be executed in the background, meaning that closing your Web browser will have no effect on your work.                                                                                                                         |
| No maximum runtime                         | Your tasks can last as long as your app is running.                                                                                                                                                                                       |
| Monitoring tools                           | Each AI Deploy app comes with a native Grafana dashboard, allowing you to keep track and monitor your CPU, GPU, RAM and storage resources.                                                                                                |
| **Storage**                                |                                                                                                                                                                                                                                           |
| Fast and flexible storage                  | Each AI Deploy service comes with local storage, but also the ability to attach remote storage from Object Storage. From a few GiB to multiple TiB, we push your data near our compute power on fast SSD storage for better performances. |
| Git repositories importation               | During the creation of your AI Deploy app, you can specify one or multiple Git repositories to download inside your app environment.                                                                                                      |
| **Security**                               |                                                                                                                                                                                                                                           |
| Open or restricted authentication          | During the creation of your AI Deploy app, you can either select Public Access, allowing anyone to access your application, or Restricted Access, allowing access via security tokens or credentials.                                     |
| European values                            | We respect your privacy and will never use your personal data for our internal purposes.                                                                                                                                                  |
| **Availability and billing**               |                                                                                                                                                                                                                                           |
| Easy billing                               | You only pay for what you consume, billed per minute.                                                                                                                                                                                     |
| Available in many countries                | AI Deploy requires an OVHcloud account. We currently accept dozens of countries. Once created, you will have access to the whole set of features.                                                                                         |

#### Logs and Monitoring tools

##### **Logs**

To check the logs of your app, you can do it via the `ovhai` CLI using the following command:

```console
ovhai app logs <app-id>
```

##### **Monitoring tools**

To observe the metrics of your app, you can do so with the `ovhai` CLI using the command above:

```console
ovhai app get <app-id>
```

You can then access your metrics through the `Monitoring Url`.

You are also able to check it from the OVHcloud Control Panel in your app information by clicking the `Go to Graph Dashboard`{.action} button.

#### API management

API endpoints to manage your AI Deploy apps can be found here:

- EU: <https://api.ovh.com/console/#/cloud/project/%7BserviceName%7D/ai/app#GET>
- CA: <https://ca.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/ai/app#GET>

#### Command line interface (CLI)

AI Deploy is compliant with the OVHcloud AI CLI. Discover how to [install the OVHcloud AI CLI](https://docs.ovh.com/fr/publiccloud/ai/cli/install-client/).

### Planned features
We continuously improve our offers. You can follow, vote and submit ideas to add to our roadmap at <https://github.com/ovh/public-cloud-roadmap/projects/4>.

## Capabilities and limitations

### Supported regions and multi-AZ deployments

AI Deploy can be used from any country in the world, as long as you have an OVHcloud account.
Physically, two datacenters are available:

- `BHS` (Beauharnois, Canada, America)
- `GRA` (Gravelines, France, Europe)

Entire AI Deploy instances have to be in the same region. Multi-AZ is currently not supported.

### Attached resources

#### Compute resources

##### **Replica type**

You can either choose the number of `GPUs` or `CPUs` for an AI Deploy app, not both.
By default, an app uses one CPU instance.
The memory resource is not customisable.

##### **Available replica ranges**

If you choose `GPU`:

- CPU, memory and local storage resources are not customisable but scaled linearly with each additional GPU.

If you choose `CPU`:

- Memory and local storage resource is not customisable but scaled linearly with each additional CPU.

The maximum amount of CPU/GPU, memory per CPU/GPU and local storage is available on the [OVHcloud website](https://www.ovhcloud.com/fr/public-cloud/prices/#ai-&-machine-learning), Control Panel and the `ovhai` CLI.

``` {.console}
ovhai capabilities flavor list
```

For your information, the current limits are:

- CPU: 12 per app.
- GPU: 4 per app.

##### **Available hardware for AI Deploy**

Currently, we provide:

- **NVIDIA V100S** ([pricing available here](https://www.ovhcloud.com/fr/public-cloud/prices/#ai-&-machine-learning)).

##### **Scaling**

AI Deploy offers the possibility to choose between two [scaling strategies](https://docs.ovh.com/fr/publiccloud/ai/deploy/apps-deployments/): **static** or **automatic**.

If you choose `static scaling`:

- You can go from 1 to 10 replicas.

If you choose `autoscaling`:

- You can choose both the **minimum number** of replicas (1 by default) and the **maximum number** of replicas.
- You can define the metric monitored that will act as a trigger for autoscaling: `CPU` or `RAM`.
- You can choose the threshold for the percentage of average use: integer between 1 and 100%.

#### Available storage

##### **Local storage**

Each AI Deploy app comes with a local storage space, which is ephemeral. When you delete your app, this storage space is also deleted.
This storage space depends on the selected instances during AI Deploy app deployment. Please refer to the compute resources section for more information.

> [!primary]
> **Local storage** is limited and not the recommended way to handle data, see the [OVHcloud documentation on data](https://docs.ovh.com/fr/publiccloud/ai/data) for more information.
>

##### **Attached storage**

You can attach data volumes from Public Cloud Object Storage. The Object Storage bucket should be in the same region as your AI Deploy app.
Attached storage allows you to work on several TB of data, while being persistent when you delete your AI Deploy app.

#### Maximum execution time

There is no duration limitation on AI Deploy apps execution.

#### Environment customization & Permitted deployment

Each environment can be customized directly with PIP or CONDA (we support almost any package and library).

AI Deploy authorizes the deployment of your own Docker images, and of applications from the [OVHcloud portfolio](https://docs.ovh.com/fr/publiccloud/ai/deploy/apps-portfolio/).

Docker images can be hosted in a public or private registry.

The use of `docker-compose` is not possible.

Please be aware that images need to be built with an **AMD architecture**.

#### High-availability

Your application is deployed simultaneously on the amount of selected instances.
To benefit from high-availability, a minimum of two instances is required. In case of instance failure, a new one is automatically created.

#### Rolling upgrade

You can update the Docker image of your application to provide an updated version of your service. Updates are incremental and will not cause any downtime. Your current configuration will also be preserved, such as your HTTP endpoint and deployment policy.
There is no need to stop and restart the application for the image update to take effect.

### Network

- **Public networking** can be used for all the AI Tools.

- **Private networking (vRack)** is not supported.

- **Ports**: you can map your AI Deploy app to only one port. Default port is 8080.

- **Ingress and Egress traffic** are included in the service plans and not metered.

### Quotas per Public Cloud project

Each Public Cloud project grants a customer by default a maximum of 4 GPUs used simultaneously. Reach out to our support if you need to increase this limitation.

## Go further

Browse the full [AI Deploy documentation](https://docs.ovh.com/fr/publiccloud/ai/) to further understand the main concepts and get started.

## Feedback

We would love to help answer questions and appreciate any feedback you may have.

Are you on Discord? Connect to [our channel](https://discord.gg/KbrKSEettv) and interact directly with the team that builds our AI services!
