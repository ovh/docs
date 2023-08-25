---
title: AI Training - Features, Capabilities and Limitations
excerpt: Find out about current features, capabilities and limitations of AI Training
routes:
    canonical: '/pages/public_cloud/ai_machine_learning/training_guide_01_capabilities'
updated: 2023-04-04
---


> [!primary]
>
> AI Training is covered by **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

## Objective

This page provides the technical capabilities and limitations of the Public Cloud AI Training offer.

## Features

### Available features

AI Training allows you to train your models easily, with just a few clicks or commands. This solution runs your training job on the computational cloud resources you have chosen (`CPU`/`GPU`).

| Feature                                    | Details                                                                                                                                                                                                                                     |
|--------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **AI environments**                        |                                                                                                                                                                                                                                             |
| Preinstalled Machine Learning environments | AI Training comes with a generic Python environment (Conda) or pre-installed ones, such as Pytorch, Tensorflow, FastAI, HuggingFace and more.                                                                                               |
| Easy customization                         | AI Training allows installation of almost any Conda or Pip packages. You can easily customize your environment to suit your needs. It also allows you to use your own environment by specifying your Docker image.                          |
| **Management**                             |                                                                                                                                                                                                                                             |
| Multiple ways to manage your training jobs | You can manage your AI Training jobs through the OVHcloud Control Panel, API or CLI. Depending on your needs, you can easily automate their creation and deletion as well.                                                                      |
| Easy start and Stop                        | You can start and stop a training job in one click.                                                                                                                                                                                         |
| Check the logs of your job                 | You can also check the logs of your training job through the OVHcloud Control Panel, API or CLI.                                                                                                                                                |
| **Compute resources**                      |                                                                                                                                                                                                                                             |
| Guaranteed compute resources               | Select the amount of CPUs or GPUs required during the creation of the AI Training job. Once launched, you will keep these resources as long as your job is running.                                                                         |
| Background execution                       | Your tasks can be executed in the background, meaning that closing your Web browser will have no effect on your work.                                                                                                                           |
| No maximum runtime                         | Your tasks can last as long as your job is running.                                                                                                                                                                                         |
| Monitoring tools                           | Each AI Training service comes with a native Grafana dashboard, allowing you to keep track and monitor your CPU, GPU, RAM and storage resources.                                                                                            |
| **Storage**                                |                                                                                                                                                                                                                                             |
| Fast and flexible storage                  | Each AI Training service comes with local storage, but also the ability to attach remote storage from Object Storage. From a few GiB to multiple TiB, we push your data near our compute power on fast SSD storage for better performances. |
| Git repositories importation               | During the creation of your AI Training job, you can specify one or multiple Git repositories to download inside your job environment.                                                                                                      |
| **Security**                               |                                                                                                                                                                                                                                             |
| Open or restricted authentication          | During the creation of your AI Training job, select open or restricted access to your job. If restricted, people can be granted access via token or credentials to securely access your environment.                                        |
| European values                            | We respect your privacy and will never use your personal data for our internal purposes.                                                                                                                                                    |
| **Availability and billing**               |                                                                                                                                                                                                                                             |
| Easy billing                               | You only pay for what you consume, billed per minute.                                                                                                                                                                                       |
| Available in many countries                | AI Training requires an OVHcloud account. We currently accept dozens of countries. Once created, you will have access to the whole set of features.                                                                                         |

#### Logs and Monitoring tools

##### **Logs**

To check the logs of your job, you can do it via the `ovhai` CLI using the following command:

```console
ovhai job logs <job-id>
```

##### **Monitoring tools**

To observe the metrics of your job, you can do so with the `ovhai` CLI using the command above:

```console
ovhai job get <job-id>
```

You can then access your metrics through the `Monitoring Url`.

You are also able to check it from the OVHcloud Control Panel in your job information by clicking the `Go to Graph Dashboard`{.action} button.

#### Command line interface (CLI)

AI Training is compliant with the OVHcloud AI CLI. Discover how to [install the OVHcloud AI CLI](/pages/public_cloud/ai_machine_learning/cli_10_howto_install_cli).

### Planned features
We continuously improve our offers. You can follow, vote and submit ideas to add to our roadmap at <https://github.com/ovh/public-cloud-roadmap/projects/4>.

## Capabilities and limitations

### Supported regions for jobs

AI Training can be used from any country in the world, as long as you have an OVHcloud account.
Physically, two datacenters are available:

- `BHS` (Beauharnois, Canada, America)
- `GRA` (Gravelines, France, Europe)

### Attached resources

#### Compute resources

You can either choose the number of `GPUs` or `CPUs` for an AI Training job, not both.
By default, a job uses one GPU.
The memory resource is not customisable.

If you choose `GPU`:

- CPU, memory and local storage resources are not customisable but scaled linearly with each additional GPU.

If you choose `CPU`:

- Memory and local storage resource is not customisable but scaled linearly with each additional CPU.

The maximum amount of CPU/GPU, memory per CPU/GPU and local storage is available on the [OVHcloud website](https://www.ovhcloud.com/pl/public-cloud/prices/#ai-&-machine-learning), Control Panel and the `ovhai` CLI.

``` {.console}
ovhai capabilities flavor list
```

For your information, the current limits are:

- CPU: 12 per job.
- GPU: 4 per job.

##### **Available hardware for AI Training**

Currently, we provide:

- **NVIDIA V100S** ([pricing available here](https://www.ovhcloud.com/pl/public-cloud/prices/#ai-&-machine-learning)).

#### Available storage

##### **Local storage**

Each AI Training job comes with a local storage space, which is ephemeral. When you delete your job, this storage space is also deleted.
This storage space depends on the selected instances during your AI Training job creation. Please refer to the compute resources section for more information.

> [!primary]
> **Local storage** is limited and not the recommended way to handle data, see the [OVHcloud documentation on data](/pages/public_cloud/ai_machine_learning/gi_02_concepts_data) for more information.
>

##### **Attached storage**

You can attach data volumes from Public Cloud Object Storage. The Object Storage bucket should be in the same region as your AI Training job.
Attached storage allows you to work on several TB of data, while being persistent when you delete your AI Training job.

#### Maximum execution time

There is no duration limitation on AI Training job execution.

### Pre-installed AI environments

OVHcloud AI Training comes with pre-installed AI environments.

List of available AI Environments:

- AutoGluon + MXNet
- FastAI
- HuggingFace
- Miniconda (Python generic)
- MXNet
- One image to rule them all
- PyTorch
- Scikit-Learn
- TensorFlow

#### Environment customization

Each environment can be customized directly with PIP or CONDA (we support almost any package and library).

You can also use your own Docker images.

Docker images can be hosted in a public or private registry.

The use of `docker-compose` is not possible.

Please be aware that images need to be built with an **AMD architecture**.

Learn how to build and use your custom Docker image in this [tutorial](/pages/public_cloud/ai_machine_learning/training_tuto_02_build_custom_image).

### Network

- **Public networking** can be used for all the AI Tools.

- **Private networking (OVHcloud vRack)** is not supported.

#### Available ports to public network

Each job has a public URL, by default this URL accesses the port 8080 of the job. The default port can be configured when you submit a new job.

You can also access other ports by appending them to the URL.

Job URL for accessing the default port (starting with the job's ID):

-   https://00000000-0000-0000-0000-000000000000.job.gra.ai.cloud.ovh.net

Job URL for accessing the port 9000 (starting with the job's ID followed by the port number):

-   https://00000000-0000-0000-0000-000000000000-9000.job.gra.ai.cloud.ovh.net

Only the HTTP layer is accessible.

### Quotas per Public Cloud project

Each Public Cloud project grants a customer by default a maximum of 4 GPUs used simultaneously. Reach out to our support if you need to increase this limitation.

## Go further

Browse the full [AI Training documentation](/products/public-cloud-ai-and-machine-learning) to further understand the main concepts and get started.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/pl/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

We would love to help answer questions and appreciate any feedback you may have.

Are you on Discord? Connect to [our channel](https://discord.com/invite/vXVurFfwe9) and interact directly with the team that builds our AI services!
