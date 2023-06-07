---
title: AI Notebooks - Features, Capabilities and Limitations
excerpt: Find out about current features, capabilities and limitations of AI Notebooks
routes:
    canonical: '/pages/platform/ai/notebook_guide_capabilities'
updated: 2023-04-04
---

**Last updated 4th April, 2023.**

> [!primary]
>
> AI Notebooks is covered by **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

## Objective

This page provides the technical features, capabilities and limitations of the Public Cloud AI Notebooks offer.

## Features

### Available features

AI Notebooks are Managed Jupyter or VS Code notebooks, linked to compute resources (`CPUs`, `GPUs`) and storage. You can compare them to Google Colab or Amazon Sagemaker notebooks.

| Feature                                    | Details                                                                                                                                                                                                                                      |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Live code editor and AI environments**   |                                                                                                                                                                                                                                              |
| Jupyter and VS Code                        | You can use Jupyter or VS Code as your preferred live-code editor. If you opt for VS Code, you can also set up a remote connection (for example, from your laptop).                                                                          |
| Preinstalled Machine Learning environments | AI Notebooks comes with a generic Python environment (Conda) or pre-installed ones, such as Pytorch, Tensorflow, FastAI, HuggingFace and more                                                                                                |
| Easy customization                         | AI Notebooks allows installation of almost any Conda or Pip packages. You can easily customize your environment to suit your needs.                                                                                                          |
| **Management**                             |                                                                                                                                                                                                                                              |
| Multiple ways to manage your notebooks     | You can manage your AI Notebooks through the OVHcloud Control Panel, API or CLI. Depending on your needs, you can easily automate their creation and deletion as well.                                                                           |
| Easy start and Stop                        | You can start and stop a notebook in one click. Once stopped, your notebook environment is kept and you can restart it later, without losing your data and experiments.                                                                      |
| **Compute resources**                      |                                                                                                                                                                                                                                              |
| Guaranteed compute resources               | Select the amount of CPUs or GPUs required during the creation of the AI Notebooks. Once launched, you will keep these resources as long as your notebook is running.                                                                        |
| Background execution                       | Your tasks can be executed in the background, meaning that closing your Web browser will have no effect on your work.                                                                                                                            |
| No maximum runtime                         | Your tasks can last as long as your notebook is running.                                                                                                                                                                                     |
| Monitoring tools                           | Each AI Notebooks service comes with a native Grafana dashboard, allowing you to keep track and monitor your CPU, GPU, RAM and storage resources.                                                                                            |
| **Storage**                                |                                                                                                                                                                                                                                              |
| Fast and flexible storage                  | Each AI Notebooks service comes with local storage, but also the ability to attach remote storage from Object Storage. From a few GiB to multiple TiB, we push your data near our compute power on fast SSD storage for better performances. |
| Git repositories importation               | During the creation of your AI Notebooks, you can specify one or multiple Git repositories to download inside your notebook environment.                                                                                                     |
| **Security**                               |                                                                                                                                                                                                                                              |
| Open or restricted authentication          | During the creation of your AI Notebooks, select open or restricted access to your notebook. If restricted, people can be granted access via token or credentials to securely access your environment.                                       |
| European values                            | We respect your privacy and will never use your personal data for our internal purposes.                                                                                                                                                     |
| **Availability and billing**               |                                                                                                                                                                                                                                              |
| Easy billing                               | You only pay for what you consume, billed per minute.                                                                                                                                                                                        |
| Available in many countries                | AI Notebooks requires an OVHcloud account. We currently accept dozens of countries. Once created, you will have access to the whole set of features.                                                                                         |

#### **Monitoring tools**

To observe the metrics of your notebook, you can do so with the `ovhai` CLI using the command above:

```console
ovhai notebook get <notebook-id>
```

You can then access your metrics through the `Monitoring Url`.

You are also able to check it from the OVHcloud Control Panel in your notebook's general information by clicking the `Go to Graph Dashboard`{.action} button.

#### Command line interface (CLI)

AI Notebooks is compliant with the OVHcloud AI CLI. Discover how to [install the OVHcloud AI CLI](/pages/platform/ai/cli_10_howto_install_cli).

### Planned features
We continuously improve our offers. You can follow, vote and submit ideas to add to our roadmap at <https://github.com/ovh/public-cloud-roadmap/projects/4>.

## Capabilities and limitations

### Supported regions for notebooks

AI Notebooks can be used from any country in the world, as long as you have an OVHcloud account.
Physically, two datacenters are available:

- `BHS` (Beauharnois, Canada, America)
- `GRA` (Gravelines, France, Europe)

### Attached resources

#### Compute resources

You can either choose the number of `GPUs` or `CPUs` for a notebook, not both.
By default, a notebook uses one GPU.
The memory resource is not customizable.

If you choose `GPU`:

- CPU, memory and local storage resources are not customizable but scaled linearly with each additional GPU.

If you choose `CPU`:

- Memory and local storage resources are not customizable but scaled linearly with each additional CPU.

The maximum amount of CPU/GPU, memory per CPU/GPU and local storage is available on the [OVHcloud website](https://www.ovhcloud.com/de/public-cloud/prices/#ai-&-machine-learning), Control Panel and the `ovhai` CLI.

``` {.console}
ovhai capabilities flavor list
```

For your information, the current limits are:

- CPU: 12 per notebook.
- GPU: 4 per notebook.

##### **Available hardware for AI Notebooks**

Currently, we provide:

- **NVIDIA V100S** ([pricing available here](https://www.ovhcloud.com/de/public-cloud/prices/#ai-&-machine-learning)).

#### Available storage

##### **Local storage**

Each AI Notebooks comes with a local storage space, which is ephemeral. When you delete your notebook, this storage space is also deleted.
This storage space depends on the selected instances during the notebook creation. Please refer to the compute resources section for more information.

> [!primary]
> **Local storage** is limited and not the recommended way to handle data, see the [OVHcloud documentation on data](/pages/platform/ai/gi_02_concepts_data) for more information.
>

##### **Attached storage**

You can attach data volumes from Public Cloud Object Storage. The Object Storage bucket should be in the same region as your AI Notebooks.
Attached storage allows you to work on several TB of data, while being persistent when you delete your AI Notebooks.

#### Maximum execution time

There is no duration limitation on AI Notebooks execution.

### Live-code editors

You can choose between two **live-code editors** to launch and edit your notebook:

- Jupyterlab
- VS Code

You cannot install your own code editor on AI Notebooks.

With VS Code, you get the capability to use remote connections (from a local computer).

### Pre-installed AI environments

OVHcloud AI Notebooks comes with pre-installed AI environments.

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

Quantum environments:

- Atos myQLM
- Quandela Perceval

#### Environment customization

Each environment can be customized directly with PIP or CONDA (we support almost any package and library).

**Limitations**:

- You are **not administrator (root)**. You cannot install linux packages (such as *apt-get*).

- AI Notebooks **does not allow the use of custom Docker images**. In case you need a very specific package or framework, you can bring your custom Docker images with **OVHcloud AI Training**.

AI Training allows you to benefit from the same technology and pricing, but you can create notebooks directly with your own Docker images.
If you want to build and use a custom Docker image, you can do it with AI Training by following this [tutorial](/pages/platform/ai/training_tuto_02_build_custom_image).

### Network

- **Public networking** can be used for all the AI Tools.

- **Private networking (OVHcloud vRack)** is not supported.

#### Available ports to public network

Each notebook has a public URL, by default this URL accesses the port 8080 of the notebook. The default port cannot be changed.

Notebook URL for accessing the default port (starting with the notebook's ID):

-   https://00000000-0000-0000-0000-000000000000.notebook.gra.ai.cloud.ovh.net

Only the HTTP layer is accessible.

### Quotas per Public Cloud project

Each Public Cloud project grants a customer by default a maximum of 4 GPUs used simultaneously. Reach out to our support if you need to increase this limitation.

## Go further

Browse the full [AI Notebooks documentation](/products/public-cloud-ai-and-machine-learning) to further understand the main concepts and get started.

## Feedback

We would love to help answer questions and appreciate any feedback you may have.

Are you on Discord? Connect to [our channel](https://discord.com/invite/vXVurFfwe9) and interact directly with the team that builds our AI services!
