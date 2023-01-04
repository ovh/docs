---
title: AI Notebooks - Features, Capabilities and Limitations
slug: notebooks/capabilities
excerpt: Find out about current features, capabilities and limitations of AI Notebooks
section: AI Notebooks - Guides
order: 04
---

**Last updated 20th April, 2022.**

## Available features

AI Notebooks are Managed Jupyter or VSCode notebooks, linked to compute resources (CPUs, GPUs) and storage. You can compare them to Google Colab or Amazon Sagemaker Notebooks.

Main features:

| Feature                                    | Details                                                                                                                                                                                                                      |
|--------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Live code editor and AI environments**   |                                                                                                                                                                                                                              |
| Jupyter and VSCode                         | You can use Jupyter or VSCode as your preferred live-code editor. If you opt for VSCode, you can also set up a remote connection (for example, from your laptop).                                                               |
| Preinstalled Machine Learning environments | AI Notebooks comes with a generic Python environment (Conda) or pre-installed ones, such as Pytorch, Tensorflow, FastAI, HuggingFace and more                                                                                   |
| Easy customization                         | AI Notebooks allows installation of almost any Conda or Pip packages. You can easily customize your environment to suit your needs.                                                                                           |
| **Management**                             |                                                                                                                                                                                                                              |
| Multiple ways to manage your notebooks     | You can manage your AI Notebooks through OVHcloud Control Panel, API or CLI. Depending on your needs, you can easily automate their creation and deletion as well.                                                               |
| Easy start and Stop                        | You can start and stop a notebook in one click. Once stopped, your Notebook environment is kept and you can restart it later, without losing your data and experiments.                                                    |
| **Compute resources**                      |                                                                                                                                                                                                                              |
| Guaranteed compute resources               | Select the amount of CPUs or GPUs required during the creation of the AI Notebooks. Once launched, you will keep these resources as long as your notebook is running.                                                         |
| Background execution                       | Your tasks can be executed in background, meaning that closing your Web browser will have no effect on your work.                                                                                                            |
| No maximum runtime                         | Your tasks can last as long as your notebook is running.                                                                                                                                                                     |
| Monitoring tools                           | Each AI Notebooks service comes with a native Grafana dashboard, allowing you to keep track and monitor your CPU, GPU, RAM and storage resources.                                                                                               |
| **Storage**                                |                                                                                                                                                                                                                              |
| Fast and flexible storage                  | Each AI Notebooks service comes with local storage, but also the ability to attach remote storage from Object Storage. From a few GiB to multiple TiB, we push your data near our compute power on fast SSD storage for better performances. |
| Git repositories importation               | During the creation of your AI Notebooks, you can specify one or multiple Git repositories to download inside your notebook environment.                                                                                                     |
| **Security**                               |                                                                                                                                                                                                                              |
| Open or restricted authentication          | During the creation of your AI Notebooks, select open or restricted access to your notebook. If restricted, people can be granted access via token of credentials to securely access your environment.                                             |
| European values                            | We respect your privacy and will never use your personal data for our internal purposes.                                                                                                                                    |
| **Availability and billing**               |                                                                                                                                                                                                                              |
| Easy billing                               | You only pay for what you consume, billed per minute.                                                                                                                                                                        |
| Available in many countries                | AI Notebooks requires an OVHcloud account. We currently accept dozens of countries. Once created, you will have access to the whole set of features.                                                                         |


## Planned features (Roadmap)

We now publicly publish the roadmap of this service, as all of our Public Cloud services, in the [OVHcloud GitHub repository](https://github.com/ovh/public-cloud-roadmap/projects).
When visiting the “AI / Machine Learning” board, you can view the whole backlog, vote or subscribe to notifications on features and even propose new ones to be considered.


## Known capabilities and limitations

### Quotas per Public Cloud project

Each Public Cloud project grants a customer by default a maximum of 4 GPUs used simultaneously. Reach out to our support if you need to increase this limitation.

### Physical locations

AI Notebooks can be used from any country in the world, as long as you have an OVHcloud account.
Physically, two datacenters are available:

- Europe: `France (GRA)`
- America: `Canada (BHS)`

### Compute resources

- There is no duration limitation on notebook execution (no maximum runtime).
- No limitation on number of parallel executions.

You can either choose the number of GPUs or CPUs for a notebook, not both.
By default, a notebook uses one GPU.
The memory resource is not customizable.

If you choose the number of `GPUs`:

- CPU, memory and local storage resources are not customizable but scaled linearly with each additional GPU.

If you choose the number of `CPUs`:

- Memory and local storage resources are not customizable but scaled linearly with each additional CPU.

The maximum amount of CPU/GPU, memory per CPU/GPU and local storage is available through our [OVHcloud website](https://www.ovhcloud.com/en/public-cloud/prices/), Control Panel and the `ovhai` CLI.

For your information, the current limits are:

- CPU: 12 per notebook.
- GPU: 4 per notebook.

> [!primary]
> **Local storage** refers to a drive mounted on the node. It's limited and not the recommended way to handle data, see the [OVHcloud documentation on data](https://docs.ovh.com/us/en/publiccloud/ai/data) for more information.
>

#### GPU hardware for notebooks

Currently we provide:

- **NVIDIA V100S** ([pricing available here](https://www.ovhcloud.com/en/public-cloud/prices/)).

### Storage

Each AI Notebooks comes with a local storage space, called ephemeral storage. When you delete your notebook, this storage space is also deleted.

Each AI Notebooks has the ability to sync data from Public Cloud Object Storage (all available regions).


### Live-code editors

You can choose between two **live-code editors** to launch and edit your notebook:

- VScode
- Jupyterlab

You cannot install your own code editor on AI Notebooks.

With VSCode, you get the capability to use remote connections (from a local computer).


### Pre-installed AI environments

OVHcloud AI Notebooks comes with pre-installed AI environments: PyTorch, TensorFlow, Miniconda and many others.

List of available AI Environments:

- AutoGluon + MXNet
- FastAI
- HuggingFace
- MiniConda (Python generic)
- MXNet
- One image to rule them all
- PyTorch
- TensorFlow

#### Environment customization

Each environment can be customized directly with PIP or CONDA (we support almost any package and library).

Limitations: 

- You are **not administrator (root)**. You cannot install linux packages (such as *apt-get*).

- AI Notebooks **does not allow the use of custom Docker images**. In case you need a very specific package or framework, you can bring your custom Docker images with **OVHcloud AI Training**.

AI Training allows you to benefit from the same technology and pricing, but you can create notebooks directly with your own Docker images.
If you want to build and use a custom Docker image, you can do it with AI Training by following this [tutorial](https://docs.ovh.com/us/en/publiccloud/ai/training/build-use-custom-image/).


### Network access

AI Notebooks can access the public network (Internet).

AI Notebooks cannot use or access the private network (OVHcloud vRack).


## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
